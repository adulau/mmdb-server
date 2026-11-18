// mmdb-server web interface: single address lookup, bulk lookup and API reference.
// Every API URL is relative to this page (served at <root>/web/), so it also works
// behind a reverse proxy that adds a path prefix.
'use strict';

const API_ROOT = new URL('../', location.href);
// Address shown in commands and in the API reference: the instance's
// public_url when the server sets one, otherwise the address of this page.
let publicRoot = API_ROOT.href;
const WORLD_URL = new URL('static/vendor/world-atlas/countries-50m.json', location.href).href;
const BULK_MAX = 1000;
const BULK_CONCURRENCY = 6;

const $ = (sel) => document.querySelector(sel);

// ---------------------------------------------------------------- helpers

function isIP(value) {
  if (/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(value)) return true;
  if (!value.includes(':') || !/^[0-9a-fA-F:.]+$/.test(value)) return false;
  try {
    new URL(`http://[${value}]/`);
    return true;
  } catch {
    return false;
  }
}

function ipVersion(ip) {
  return ip.includes(':') ? 'IPv6' : 'IPv4';
}

async function geolookup(ip, signal) {
  const url = ip === null ? API_ROOT : new URL(`geolookup/${encodeURIComponent(ip)}`, API_ROOT);
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(typeof body === 'string' ? body : `The server answered ${response.status}.`);
  }
  return body;
}

// The answer has one object per database: merge them into one record.
function summarize(answer) {
  const record = { ip: answer[0]?.ip ?? '', iso: '', country: '', info: {}, asn: '', org: '' };
  for (const entry of answer) {
    const c = entry.country || {};
    if (!record.iso && c.iso_code && c.iso_code !== 'None') {
      record.iso = c.iso_code;
      record.info = entry.country_info || {};
      record.country = record.info.Country || c.iso_code;
    }
    if (!record.asn && c.AutonomousSystemNumber !== undefined) {
      record.asn = String(c.AutonomousSystemNumber);
      record.org = c.AutonomousSystemOrganization || '';
    }
  }
  return record;
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function formatAsn(asn) {
  return asn && asn !== '0' ? `AS${asn}` : '—';
}

const FLAG_BASE = new URL('static/vendor/flag-icons/4x3/', location.href).href;

function flagUrl(iso) {
  // Only a two-letter code ever goes into the URL.
  return /^[A-Za-z]{2}$/.test(iso) ? `${FLAG_BASE}${iso.toLowerCase()}.svg` : '';
}

// A flag image; hidden when there is no flag for the code (e.g. AN, retired).
function flag(iso) {
  const img = document.createElement('img');
  img.className = 'flag';
  img.alt = '';
  img.loading = 'lazy';
  img.width = 20;
  img.height = 15;
  // Inline sizing too: inside <vt-table> (shadow DOM) the page CSS does not apply.
  Object.assign(img.style, {
    width: '20px', height: '15px', objectFit: 'cover', borderRadius: '2px', flex: 'none',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.12)', verticalAlign: '-2px', marginRight: '8px',
  });
  img.addEventListener('error', () => { img.style.display = 'none'; });
  const src = flagUrl(iso);
  if (src) img.src = src;
  else img.style.display = 'none';
  return img;
}

// Leaflet inserts tooltip strings as HTML: data always goes in as text.
function textNode(text) {
  const span = document.createElement('span');
  span.textContent = String(text ?? '');
  return span;
}

function countryLabel(iso, name) {
  const span = document.createElement('span');
  span.className = 'country';
  span.append(flag(iso), name);
  return span;
}

// ---------------------------------------------------------------- theme

const THEMES = ['auto', 'light', 'dark'];
let theme = document.documentElement.getAttribute('data-theme') || 'auto';
const themeListeners = [];

function applyTheme(next) {
  theme = next;
  if (theme === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', theme);
  try {
    if (theme === 'auto') localStorage.removeItem('mmdb-theme');
    else localStorage.setItem('mmdb-theme', theme);
  } catch { /* storage blocked */ }
  window.VitrineLoader?.configure({ theme });
  const label = theme[0].toUpperCase() + theme.slice(1);
  $('#theme-toggle .theme-label').textContent = label;
  $('#theme-toggle').setAttribute('aria-label', `Theme: ${label}. Change the theme`);
  themeListeners.forEach((fn) => fn());
}

$('#theme-toggle').addEventListener('click', () => {
  applyTheme(THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]);
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => themeListeners.forEach((fn) => fn()));
applyTheme(theme);

// ---------------------------------------------------------------- world map

// Colors are mixed here: a canvas does not understand every CSS color syntax.
function mix(a, b, t) {
  const rgb = (hex) => {
    const h = hex.replace('#', '');
    const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
  };
  const [x, y] = [rgb(a), rgb(b)];
  return `rgb(${x.map((v, i) => Math.round(v * t + y[i] * (1 - t))).join(', ')})`;
}

const MAP_MODES = ['map', 'globe'];
let mapMode = 'map';
try {
  if (localStorage.getItem('mmdb-map-mode') === 'globe') mapMode = 'globe';
} catch { /* storage blocked */ }
const worldMaps = [];

function setMapMode(mode) {
  mapMode = mode;
  try { localStorage.setItem('mmdb-map-mode', mode); } catch { /* storage blocked */ }
  worldMaps.forEach((m) => m.applyMode());
}

let worldPromise = null;

function loadWorld() {
  if (!worldPromise) {
    worldPromise = fetch(WORLD_URL)
      .then((r) => {
        if (!r.ok) throw new Error('map');
        return r.json();
      })
      .then((topo) => {
        const geo = topojson.feature(topo, topo.objects.countries);
        // world-atlas ids are ISO 3166 numeric codes ("056"), country.json has "56".
        geo.features = geo.features.filter((f) => f.id !== '010'); // Antarctica
        for (const f of geo.features) {
          f.properties.numeric = f.id ? String(Number(f.id)) : '';
          unwrapAntimeridian(f.geometry);
        }
        return geo;
      });
  }
  return worldPromise;
}

// Rings crossing the 180th meridian (Russia, Fiji...) jump from +180 to -180 and
// draw lines across the whole map: keep each ring continuous instead.
function unwrapAntimeridian(geometry) {
  if (!geometry) return;
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  for (const polygon of polygons) {
    for (const ring of polygon) {
      for (let i = 1; i < ring.length; i += 1) {
        const delta = ring[i][0] - ring[i - 1][0];
        if (delta > 180) ring[i][0] -= 360;
        else if (delta < -180) ring[i][0] += 360;
      }
    }
  }
}

class WorldMap {
  constructor(element) {
    this.element = element;
    this.panel = element.parentElement;
    this.map = L.map(element, {
      worldCopyJump: false,
      minZoom: 1,
      maxZoom: 7,
      zoomSnap: 0.25,
      maxBounds: [[-85, -220], [85, 220]],
      maxBoundsViscosity: 0.8,
    });
    this.map.attributionControl.setPrefix(false);
    this.map.attributionControl.addAttribution('Natural Earth');
    this.map.setView([25, 10], 1.5);
    this.layer = null;
    this.geo = null;
    this.markers = L.layerGroup().addTo(this.map);
    this.points = [];
    this.target = null;
    this.styleFor = () => ({});
    this.globe = new Globe(this);
    this.addSwitch();
    new ResizeObserver(() => {
      this.map.invalidateSize();
      this.globe.resize();
    }).observe(this.panel);
    themeListeners.push(() => this.restyle());
    worldMaps.push(this);
    this.applyMode();
  }

  addSwitch() {
    const group = document.createElement('div');
    group.className = 'map-switch';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Map view');
    this.switchButtons = MAP_MODES.map((mode) => {
      const button = document.createElement('button');
      button.type = 'button';
      const icon = document.createElement('i');
      icon.className = mode === 'map' ? 'fa-solid fa-map' : 'fa-solid fa-earth-europe';
      icon.setAttribute('aria-hidden', 'true');
      button.append(icon, mode === 'map' ? 'Map' : 'Globe');
      button.addEventListener('click', () => setMapMode(mode));
      group.append(button);
      return [mode, button];
    });
    this.panel.append(group);
  }

  applyMode() {
    const globe = mapMode === 'globe';
    this.element.hidden = globe;
    this.globe.canvas.hidden = !globe;
    for (const [mode, button] of this.switchButtons) button.setAttribute('aria-pressed', String(mode === mapMode));
    if (globe) {
      this.globe.resize();
      this.globe.goTo(this.target, false);
    } else {
      this.globe.stop();
      this.map.invalidateSize();
      if (this.pending) {
        this.moveMap(this.pending, false);
        this.pending = null;
      }
    }
  }

  async ready() {
    if (this.layer) return;
    const geo = await loadWorld();
    if (this.layer) return;
    this.geo = geo;
    this.layer = L.geoJSON(geo, {
      style: (f) => this.style(f),
      onEachFeature: (f, layer) => {
        layer.bindTooltip(() => textNode(this.tooltipFor(f)), { sticky: true, direction: 'top' });
      },
    }).addTo(this.map);
    this.globe.draw();
  }

  style(feature) {
    return {
      color: cssVar('--land-line'),
      weight: 0.6,
      fillColor: cssVar('--land'),
      fillOpacity: 1,
      ...this.styleFor(feature),
    };
  }

  tooltipFor(feature) {
    return this.tooltip ? this.tooltip(feature) : feature.properties.name;
  }

  restyle() {
    if (this.layer) this.layer.setStyle((f) => this.style(f));
    this.markers.eachLayer((m) => m.setStyle?.({ color: cssVar('--surface'), fillColor: cssVar('--accent') }));
    this.globe.draw();
  }

  featureFor(numeric) {
    let found = null;
    this.layer?.eachLayer((l) => {
      if (!found && numeric && l.feature.properties.numeric === numeric) found = l;
    });
    return found;
  }

  clearPoints() {
    this.markers.clearLayers();
    this.points = [];
  }

  marker(lat, lon, label) {
    const m = L.circleMarker([lat, lon], {
      radius: 7, weight: 2.5, color: cssVar('--surface'), fillColor: cssVar('--accent'), fillOpacity: 1,
    });
    if (label) m.bindTooltip(textNode(label), { direction: 'top', offset: [0, -6] });
    m.addTo(this.markers);
    this.points.push([lon, lat]);
    return m;
  }

  // Show a place in both views: bounds for the flat map, a center for the globe.
  focus({ bounds = null, center = null, zoom = 4, maxZoom = 5 } = {}) {
    this.target = center;
    const place = { bounds, center, zoom, maxZoom };
    // A hidden Leaflet map has no size: move it when it is shown again.
    if (mapMode === 'globe') this.pending = place;
    else this.moveMap(place, true);
    this.globe.draw();
    if (mapMode === 'globe') this.globe.goTo(center, true);
  }

  moveMap({ bounds, center, zoom, maxZoom }, animate) {
    const options = { animate, duration: 0.8 };
    if (bounds) this.map.fitBounds(bounds, { ...options, maxZoom, padding: [30, 30] });
    else if (center) this.map.setView([center[1], center[0]], zoom, options);
    else this.map.setView([25, 10], 1.5, options);
  }
}

// The same countries on an orthographic projection, drawn on a canvas with d3-geo.
// Drag to turn it, wheel or pinch to zoom; it turns slowly until touched.
class Globe {
  constructor(owner) {
    this.owner = owner;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'globe';
    this.canvas.setAttribute('role', 'img');
    this.canvas.setAttribute('aria-label', 'Globe');
    this.canvas.hidden = true;
    this.tip = document.createElement('div');
    this.tip.className = 'globe-tip';
    this.tip.hidden = true;
    owner.panel.append(this.canvas, this.tip);
    this.rotation = [-10, -25, 0];
    this.zoom = 1;
    this.spin = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.frame = 0;
    this.graticule = d3.geoGraticule10();
    this.projection = d3.geoOrthographic().clipAngle(90).precision(0.6);
    this.path = d3.geoPath(this.projection, null);
    this.bindEvents();
  }

  resize() {
    const rect = this.owner.panel.getBoundingClientRect();
    if (!rect.width) return;
    const ratio = window.devicePixelRatio || 1;
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = Math.round(rect.width * ratio);
    this.canvas.height = Math.round(rect.height * ratio);
    this.ratio = ratio;
    this.draw();
  }

  radius() {
    return (Math.min(this.width, this.height) / 2 - 24) * this.zoom;
  }

  draw() {
    if (this.canvas.hidden || !this.width) return;
    const ctx = this.canvas.getContext('2d');
    ctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
    ctx.clearRect(0, 0, this.width, this.height);
    this.projection.translate([this.width / 2, this.height / 2]).scale(this.radius()).rotate(this.rotation);
    this.path.context(ctx);

    const sea = cssVar('--sea');
    const land = cssVar('--land');
    // ocean with a light shading, then the graticule
    ctx.beginPath();
    this.path({ type: 'Sphere' });
    const r = this.radius();
    const gradient = ctx.createRadialGradient(this.width / 2 - r / 3, this.height / 2 - r / 3, r / 10, this.width / 2, this.height / 2, r);
    gradient.addColorStop(0, mix(cssVar('--surface'), sea, 0.6));
    gradient.addColorStop(1, mix(cssVar('--line-strong'), sea, 0.35));
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.beginPath();
    this.path(this.graticule);
    ctx.strokeStyle = cssVar('--grid-strong');
    ctx.lineWidth = 0.6;
    ctx.stroke();

    const geo = this.owner.geo;
    if (geo) {
      for (const f of geo.features) {
        const style = this.owner.styleFor(f);
        ctx.beginPath();
        this.path(f);
        ctx.fillStyle = style.fillColor || land;
        ctx.fill();
        ctx.strokeStyle = style.color || cssVar('--land-line');
        ctx.lineWidth = style.fillColor ? 0.9 : 0.5;
        ctx.stroke();
      }
    }
    for (const point of this.owner.points) {
      if (d3.geoDistance(point, [-this.rotation[0], -this.rotation[1]]) > Math.PI / 2) continue;
      const [x, y] = this.projection(point);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = cssVar('--accent');
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = cssVar('--surface');
      ctx.stroke();
    }
    ctx.beginPath();
    this.path({ type: 'Sphere' });
    ctx.strokeStyle = cssVar('--line-strong');
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  loop() {
    cancelAnimationFrame(this.frame);
    const step = () => {
      if (this.canvas.hidden || !this.spin) return;
      this.rotation[0] += 0.12;
      this.draw();
      this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }

  stop() {
    cancelAnimationFrame(this.frame);
  }

  // Turn the globe to put [lon, lat] in front, or let it spin when there is none.
  goTo(center, animate) {
    this.stop();
    if (!center) {
      this.zoom = 1;
      this.spin = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.draw();
      this.loop();
      return;
    }
    this.spin = false;
    this.zoom = Math.max(this.zoom, 1.3);
    const from = [-this.rotation[0], -this.rotation[1]];
    const to = [center[0], Math.max(-60, Math.min(60, center[1]))];
    if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.rotation = [-to[0], -to[1], 0];
      this.draw();
      return;
    }
    const interpolate = d3.geoInterpolate(from, to);
    const start = performance.now();
    const duration = 1000;
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      const [lon, lat] = interpolate(eased);
      this.rotation = [-lon, -lat, 0];
      this.draw();
      if (t < 1) this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }

  featureAt(x, y) {
    const geo = this.owner.geo;
    const lonLat = this.projection.invert([x, y]);
    if (!geo || !lonLat || d3.geoDistance(lonLat, [-this.rotation[0], -this.rotation[1]]) > Math.PI / 2) return null;
    return geo.features.find((f) => d3.geoContains(f, lonLat)) || null;
  }

  bindEvents() {
    let drag = null;
    const canvas = this.canvas;
    canvas.addEventListener('pointerdown', (event) => {
      this.stop();
      this.spin = false;
      drag = { x: event.clientX, y: event.clientY, rotation: [...this.rotation] };
      canvas.setPointerCapture(event.pointerId);
      canvas.classList.add('dragging');
    });
    canvas.addEventListener('pointermove', (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (drag) {
        const k = 75 / this.radius();
        this.rotation = [
          drag.rotation[0] + (event.clientX - drag.x) * k,
          Math.max(-85, Math.min(85, drag.rotation[1] - (event.clientY - drag.y) * k)),
          0,
        ];
        this.draw();
        this.tip.hidden = true;
        return;
      }
      const feature = this.featureAt(x, y);
      if (feature) {
        this.tip.textContent = this.owner.tooltipFor(feature);
        this.tip.style.left = `${x}px`;
        this.tip.style.top = `${y}px`;
        this.tip.hidden = false;
      } else {
        this.tip.hidden = true;
      }
    });
    const end = () => {
      drag = null;
      canvas.classList.remove('dragging');
    };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    canvas.addEventListener('pointerleave', () => { this.tip.hidden = true; });
    canvas.addEventListener('wheel', (event) => {
      event.preventDefault();
      this.zoom = Math.max(0.6, Math.min(4, this.zoom * (event.deltaY < 0 ? 1.1 : 1 / 1.1)));
      this.draw();
    }, { passive: false });
  }
}

// ---------------------------------------------------------------- lookup view

let lookupMap = null;
let lookupController = null;
let lastRecord = null;

function getLookupMap() {
  if (!lookupMap) {
    lookupMap = new WorldMap($('#lookup-map'));
    lookupMap.styleFor = (f) => (lastRecord && f.properties.numeric === lastRecord.info['Numeric code']
      ? { fillColor: cssVar('--accent'), color: cssVar('--link'), weight: 1 }
      : {});
    lookupMap.ready().catch(() => {
      const status = $('#lookup-map-status');
      status.textContent = 'The country shapes could not be loaded.';
      status.hidden = false;
    });
  }
  return lookupMap;
}

function setFieldError(message) {
  const error = $('#ip-error');
  error.textContent = message || '';
  error.hidden = !message;
  $('#ip-input').setAttribute('aria-invalid', message ? 'true' : 'false');
}

async function runLookup(ip, { self = false } = {}) {
  setFieldError('');
  lookupController?.abort();
  lookupController = new AbortController();
  const result = $('#result');
  result.setAttribute('aria-busy', 'true');
  try {
    const answer = await geolookup(self ? null : ip, lookupController.signal);
    showResult(answer, self);
  } catch (error) {
    if (error.name === 'AbortError') return;
    setFieldError(error.message || 'The lookup failed.');
  } finally {
    result.setAttribute('aria-busy', 'false');
  }
}

function resetLookup() {
  lookupController?.abort();
  lastRecord = null;
  setFieldError('');
  $('#ip-input').value = '';
  $('#result-empty').hidden = false;
  $('#result-body').hidden = true;
  $('#result-heading').textContent = 'Result';
  $('#result-version').textContent = '';
  $('#details').hidden = true;
  const map = getLookupMap();
  map.clearPoints();
  map.ready().then(() => {
    map.restyle();
    map.focus({});
  }).catch(() => {});
}

function showResult(answer, self) {
  const record = summarize(answer);
  lastRecord = record;
  $('#ip-input').value = record.ip;
  $('#result-empty').hidden = true;
  $('#result-body').hidden = false;
  $('#result-heading').textContent = self ? 'Your address' : 'Result';
  $('#result-ip').textContent = record.ip;
  $('#result-version').textContent = ipVersion(record.ip);

  const located = Boolean(record.iso);
  const info = record.info;
  const bigFlag = $('#result-flag');
  if (located) {
    bigFlag.src = flagUrl(record.iso);
    bigFlag.hidden = false;
  } else {
    bigFlag.removeAttribute('src');
    bigFlag.hidden = true;
  }
  $('#result-country').textContent = located ? record.country : 'Location unknown';
  $('#result-country-cell').replaceChildren(located ? countryLabel(record.iso, record.country) : '—');
  $('#result-codes').textContent = located
    ? [info['Alpha-2 code'], info['Alpha-3 code'], info['Numeric code']].filter(Boolean).join(' / ') || '—'
    : '—';
  $('#result-asn').textContent = formatAsn(record.asn);
  $('#result-org').textContent = record.org || '—';
  $('#result-coords').textContent = info['Latitude (average)'] !== undefined
    ? `${info['Latitude (average)']}, ${info['Longitude (average)']}`
    : '—';

  const note = $('#result-note');
  if (!located) {
    note.textContent = record.org === 'Not routed'
      ? 'This address is not routed on the Internet (private, loopback or reserved range).'
      : 'This address is not covered by the databases (reserved or not announced).';
    note.hidden = false;
  } else {
    note.hidden = true;
  }

  // One row per database
  $('#sources').replaceChildren(...answer.map((entry) => {
    const c = entry.country || {};
    const iso = c.iso_code && c.iso_code !== 'None' ? c.iso_code : '';
    const cells = [
      entry.meta?.db_source || '—',
      entry.meta?.build_db || '—',
      entry.meta?.nb_nodes !== undefined ? Number(entry.meta.nb_nodes).toLocaleString('en') : '—',
      iso ? countryLabel(iso, iso) : '—',
      c.AutonomousSystemNumber !== undefined ? formatAsn(String(c.AutonomousSystemNumber)) : 'n/a',
      c.AutonomousSystemOrganization || (c.AutonomousSystemNumber !== undefined ? '—' : 'n/a'),
    ];
    const tr = document.createElement('tr');
    cells.forEach((value, i) => {
      const td = document.createElement('td');
      if (i === 2) td.className = 'num';
      if (i === 4) td.className = 'mono';
      td.append(value);
      tr.append(td);
    });
    return tr;
  }));
  $('#raw-json').data = answer;
  const target = self ? publicRoot : new URL(`geolookup/${record.ip}`, publicRoot).href;
  $('#curl-code').content = `curl -s ${target} | jq .`;
  $('#details').hidden = false;

  // Map
  const map = getLookupMap();
  map.clearPoints();
  map.ready().then(() => {
    map.restyle();
    const feature = located ? map.featureFor(info['Numeric code']) : null;
    const lat = parseFloat(info['Latitude (average)']);
    const lon = parseFloat(info['Longitude (average)']);
    const center = Number.isNaN(lat) || Number.isNaN(lon) ? null : [lon, lat];
    // Small countries and territories have no shape at this scale: show a point.
    if (!feature && located && center) map.marker(lat, lon, record.country);
    map.focus({ bounds: feature ? boundsOfMainland(feature) : null, center: located ? center : null });
  }).catch(() => {});
}

// Countries such as France or the United States have far away territories:
// zoom on the largest polygon, not on the whole set.
function boundsOfMainland(layer) {
  const bounds = layer.getBounds();
  const geometry = layer.feature.geometry;
  if (geometry.type !== 'MultiPolygon') return bounds;
  let best = null;
  let bestArea = -1;
  for (const polygon of geometry.coordinates) {
    const b = L.latLngBounds(polygon[0].map(([x, y]) => [y, x]));
    const area = (b.getNorth() - b.getSouth()) * (b.getEast() - b.getWest());
    if (area > bestArea) {
      bestArea = area;
      best = b;
    }
  }
  return best || bounds;
}

$('#lookup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const ip = $('#ip-input').value.trim().replace(/\[\.\]/g, '.');
  if (!isIP(ip)) {
    setFieldError('Enter an IPv4 address (like 192.0.2.1) or an IPv6 address (like 2001:db8::1).');
    $('#ip-input').focus();
    return;
  }
  navigate(`#/ip/${ip}`);
});
$('#my-ip').addEventListener('click', () => navigate('#/me'));
$('#copy-ip').addEventListener('click', async () => {
  const button = $('#copy-ip');
  try {
    await navigator.clipboard.writeText($('#result-ip').textContent);
    const label = button.querySelector('span');
    label.textContent = 'Copied';
    setTimeout(() => { label.textContent = 'Copy'; }, 1500);
  } catch { /* clipboard refused */ }
});
$('#ip-input').addEventListener('input', () => setFieldError(''));

// ---------------------------------------------------------------- bulk view

let bulkMap = null;
let bulkController = null;
let bulkCounts = new Map();
let bulkScale = [];

function extractIPs(text) {
  const cleaned = text.replace(/\[\.\]|\(\.\)|\{\.\}/g, '.').replace(/\[:\]/g, ':');
  const found = [];
  for (const m of cleaned.matchAll(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g)) {
    if (isIP(m[0])) found.push([m.index, m[0]]);
  }
  for (const m of cleaned.matchAll(/[0-9a-fA-F]{0,4}(?::[0-9a-fA-F]{0,4}){2,7}(?:\.\d{1,3}){0,3}/g)) {
    if (m[0].split(':').length > 2 && isIP(m[0])) found.push([m.index, m[0].toLowerCase()]);
  }
  // In the order of the text, without duplicates
  found.sort((a, b) => a[0] - b[0]);
  return [...new Set(found.map(([, ip]) => ip))];
}

function updateBulkCount() {
  const ips = extractIPs($('#bulk-input').value);
  const count = $('#bulk-count');
  if (!ips.length) count.textContent = 'No address found.';
  else if (ips.length > BULK_MAX) count.textContent = `${ips.length} addresses found: the first ${BULK_MAX} will be looked up.`;
  else count.textContent = `${ips.length} unique address${ips.length > 1 ? 'es' : ''} found.`;
  return ips;
}

$('#bulk-input').addEventListener('input', updateBulkCount);
$('#bulk-clear').addEventListener('click', () => {
  $('#bulk-input').value = '';
  updateBulkCount();
  $('#bulk-input').focus();
});
$('#bulk-cancel').addEventListener('click', () => bulkController?.abort());

$('#bulk-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const ips = updateBulkCount().slice(0, BULK_MAX);
  if (!ips.length) {
    $('#bulk-input').focus();
    return;
  }
  bulkController?.abort();
  const controller = new AbortController();
  bulkController = controller;
  $('#bulk-run').disabled = true;
  $('#bulk-cancel').hidden = false;
  $('#bulk-progress').hidden = false;

  const rows = [];
  let done = 0;
  const progress = () => {
    const pct = Math.round((done / ips.length) * 100);
    $('#bulk-progress-fill').style.width = `${pct}%`;
    $('.progress-bar').setAttribute('aria-valuenow', String(pct));
    $('#bulk-progress-text').textContent = `${done} / ${ips.length}`;
  };
  progress();

  let next = 0;
  const worker = async () => {
    while (next < ips.length && !controller.signal.aborted) {
      const ip = ips[next++];
      try {
        const r = summarize(await geolookup(ip, controller.signal));
        rows.push({
          ip, version: ipVersion(ip), country: r.country || 'Unknown', iso: r.iso || '',
          asn: r.asn && r.asn !== '0' ? Number(r.asn) : null, organization: r.org || '', numeric: r.info['Numeric code'] || '',
        });
      } catch (error) {
        if (error.name === 'AbortError') return;
        rows.push({ ip, version: ipVersion(ip), country: 'Error', iso: '', asn: null, organization: error.message, numeric: '' });
      }
      done += 1;
      progress();
    }
  };
  await Promise.all(Array.from({ length: Math.min(BULK_CONCURRENCY, ips.length) }, worker));

  $('#bulk-run').disabled = false;
  $('#bulk-cancel').hidden = true;
  $('#bulk-progress-text').textContent = controller.signal.aborted
    ? `Stopped: ${done} of ${ips.length} looked up.`
    : `Done: ${done} address${done > 1 ? 'es' : ''} looked up.`;
  const order = new Map(ips.map((ip, i) => [ip, i]));
  rows.sort((a, b) => order.get(a.ip) - order.get(b.ip));
  showBulk(rows);
});

function showBulk(rows) {
  $('#bulk-results').hidden = false;

  const located = rows.filter((r) => r.iso);
  bulkCounts = new Map();
  for (const r of located) {
    const entry = bulkCounts.get(r.numeric) || { count: 0, country: r.country, iso: r.iso };
    entry.count += 1;
    bulkCounts.set(r.numeric, entry);
  }
  const ranked = [...bulkCounts.values()].sort((a, b) => b.count - a.count || a.country.localeCompare(b.country));
  const top = ranked[0];

  // Summary line
  const figures = [
    ['fa-list-ol', 'Addresses', rows.length.toLocaleString('en')],
    ['fa-earth-europe', 'Countries', bulkCounts.size.toLocaleString('en')],
    ['fa-network-wired', 'Autonomous systems', new Set(rows.filter((r) => r.asn).map((r) => r.asn)).size.toLocaleString('en')],
    ['fa-ranking-star', 'Most frequent country', top ? countryLabel(top.iso, top.country) : '—'],
    ['fa-circle-question', 'Not located', (rows.length - located.length).toLocaleString('en')],
  ];
  $('#bulk-summary').replaceChildren(...figures.map(([iconName, label, value]) => {
    const div = document.createElement('div');
    const dt = document.createElement('dt');
    const icon = document.createElement('i');
    icon.className = `fa-solid ${iconName}`;
    icon.setAttribute('aria-hidden', 'true');
    dt.append(icon, label);
    const dd = document.createElement('dd');
    dd.append(value);
    if (typeof value !== 'string') dd.title = top.country;
    div.append(dt, dd);
    return div;
  }));

  // Countries ranking
  $('#top-meta').textContent = `${ranked.length} ${ranked.length === 1 ? 'country' : 'countries'}`;
  $('#bulk-top').replaceChildren(...ranked.map((entry) => {
    const li = document.createElement('li');
    const name = countryLabel(entry.iso, entry.country);
    const count = document.createElement('span');
    count.className = 'count';
    count.textContent = `${entry.count} (${Math.round((entry.count / rows.length) * 100)}%)`;
    const bar = document.createElement('span');
    bar.className = 'bar';
    const fill = document.createElement('span');
    fill.style.width = `${(entry.count / top.count) * 100}%`;
    bar.append(fill);
    li.append(name, count, bar);
    return li;
  }));
  if (!ranked.length) {
    const li = document.createElement('li');
    li.className = 'help';
    li.textContent = 'No address could be located.';
    $('#bulk-top').append(li);
  }

  const table = $('#bulk-table');
  table.columns = [
    { key: 'ip', label: 'IP address', width: 240 },
    { key: 'version', label: 'Version', width: 90 },
    { key: 'country', label: 'Country', width: 220,
      render: (value, row) => (row.iso ? countryLabel(row.iso, value) : value) },
    { key: 'iso', label: 'ISO', width: 70 },
    { key: 'asn', label: 'AS number', type: 'number', format: (v) => (v ? `AS${v}` : '—'), width: 120 },
    { key: 'organization', label: 'AS organization' },
  ];
  table.data = rows;

  if (!bulkMap) {
    bulkMap = new WorldMap($('#bulk-map'));
    bulkMap.styleFor = (f) => {
      const entry = bulkCounts.get(f.properties.numeric);
      return entry ? { fillColor: colorFor(entry.count) } : {};
    };
    bulkMap.tooltip = (f) => {
      const entry = bulkCounts.get(f.properties.numeric);
      return entry ? `${entry.country}: ${entry.count} address${entry.count > 1 ? 'es' : ''}` : f.properties.name;
    };
    themeListeners.push(drawLegend);
  }
  computeScale();
  drawLegend();
  bulkMap.ready().then(() => {
    bulkMap.restyle();
    const layers = [...bulkCounts.keys()].map((n) => bulkMap.featureFor(n)).filter(Boolean);
    const first = ranked.length ? bulkMap.featureFor([...bulkCounts.entries()].find(([, e]) => e === ranked[0])[0]) : null;
    const center = first ? d3.geoCentroid(first.feature) : null;
    if (layers.length === 1) bulkMap.focus({ bounds: boundsOfMainland(layers[0]), center });
    else if (layers.length) bulkMap.focus({ bounds: L.featureGroup(layers).getBounds(), center, maxZoom: 4 });
  }).catch(() => {});
}

// Five classes on a square root scale, from the land color to the accent.
function computeScale() {
  const max = Math.max(1, ...[...bulkCounts.values()].map((e) => e.count));
  const steps = Math.min(5, max);
  bulkScale = [];
  for (let i = 1; i <= steps; i += 1) bulkScale.push(Math.max(i, Math.round(max * (i / steps) ** 2)));
  bulkScale = [...new Set(bulkScale)];
}

function colorFor(count) {
  let index = bulkScale.findIndex((limit) => count <= limit);
  if (index < 0) index = bulkScale.length - 1;
  const t = bulkScale.length > 1 ? index / (bulkScale.length - 1) : 1;
  return mix(cssVar('--accent'), cssVar('--land'), 0.25 + t * 0.75);
}

function drawLegend() {
  const legend = $('#bulk-legend');
  legend.replaceChildren();
  let from = 1;
  for (const limit of bulkScale) {
    const row = document.createElement('span');
    row.className = 'legend-item';
    const swatch = document.createElement('span');
    swatch.className = 'legend-swatch';
    swatch.style.background = colorFor(limit);
    const text = document.createElement('span');
    text.textContent = from === limit ? `${limit}` : `${from}–${limit}`;
    row.append(swatch, text);
    legend.append(row);
    from = limit + 1;
  }
}

// ---------------------------------------------------------------- API view

let apiLoaded = false;

async function loadApi() {
  if (apiLoaded) return;
  apiLoaded = true;
  await metaReady;
  const base = publicRoot.replace(/\/$/, '');
  $('#api-ex-lookup').content = `curl -s ${base}/geolookup/188.65.220.25 | jq .`;
  $('#api-ex-self').content = `curl -s ${base}/ | jq .\ncurl -s ${base}/raw`;
  try {
    const spec = await (await fetch('static/openapi.json')).json();
    spec.servers = [{ url: base, description: 'This server' }];
    $('#api-ref').content = JSON.stringify(spec);
  } catch {
    apiLoaded = false;
  }
}

// ---------------------------------------------------------------- footer

const metaReady = fetch(new URL('meta', API_ROOT)).then((r) => (r.ok ? r.json() : null)).then((meta) => {
  if (!meta) return;
  if (meta.public_url) {
    try {
      const url = new URL(`${meta.public_url}/`);
      if (url.protocol === 'https:' || url.protocol === 'http:') publicRoot = url.href;
    } catch { /* not a URL: keep the page address */ }
  }
  $('#server-version').textContent = `mmdb-server v${meta.version}`;
  $('#db-info').textContent = meta.databases
    .map((db) => `${db.db_source} built ${db.build_db}`)
    .join(' · ');
}).catch(() => {});

// ---------------------------------------------------------------- routing

function navigate(hash) {
  if (location.hash === hash) route();
  else location.hash = hash;
}

function show(view) {
  for (const name of ['lookup', 'bulk', 'api', 'about']) $(`#view-${name}`).hidden = name !== view;
  document.querySelectorAll('.nav a').forEach((a) => {
    if (a.dataset.view === view) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  if (hash === 'bulk') {
    show('bulk');
    document.title = 'Bulk lookup · mmdb-server';
    return;
  }
  if (hash === 'about') {
    show('about');
    document.title = 'How it works · mmdb-server';
    window.scrollTo(0, 0);
    return;
  }
  if (hash === 'api') {
    show('api');
    document.title = 'API · mmdb-server';
    loadApi();
    return;
  }
  show('lookup');
  getLookupMap().map.invalidateSize();
  if (hash.startsWith('ip/')) {
    const ip = decodeURIComponent(hash.slice(3));
    document.title = `${ip} · mmdb-server`;
    if (isIP(ip)) runLookup(ip);
    else setFieldError('This is not a valid IPv4 or IPv6 address.');
  } else if (hash === 'me') {
    // Only on request: the visitor's address is never looked up by itself.
    document.title = 'My address · mmdb-server';
    runLookup(null, { self: true });
  } else {
    document.title = 'IP lookup · mmdb-server';
    resetLookup();
  }
}

window.addEventListener('hashchange', route);
route();
