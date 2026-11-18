/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as $}from"./chunk-3FW46UG7.js";import{a as T}from"./chunk-YY743YSD.js";import{a as M}from"./chunk-YCSGENO5.js";import{B as f,C as F,I as L,b as k,l as i,n as D,v as y,w as p,x,y as E}from"./chunk-DNNVKOIB.js";import{m as C}from"./chunk-2IDMCIF6.js";var z=`/*
 * Key figures: tiles with a value, a change and a small line. Text stays in text colors, and a
 * change carries an arrow and a word as well as its color.
 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(var(--_columns, auto-fit), minmax(min(100%, 180px), 1fr));
  gap: var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.stats-tile {
  display: flex;
  flex-direction: column;
  gap: var(--_space-1);
  min-width: 0;
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.stats-tile a {
  color: var(--_accent-fg);
}

.stats-label {
  color: var(--_fg-muted);
  font: 500 var(--_font-size-ui) / 1.4 var(--_font-ui);
  overflow-wrap: anywhere;
}

.stats-tile a .stats-label {
  color: inherit;
}

.stats-value {
  color: var(--_fg);
  font: 700 28px / 1.2 var(--_font-ui);
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}

.stats-change {
  display: inline-flex;
  align-items: flex-start;
  gap: 2px;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1.4 var(--_font-ui);
}

.stats-change .icon {
  flex: none;
  width: 14px;
  height: 14px;
  margin-top: 1px;
}

.stats-change.good {
  color: var(--_success);
}

.stats-change.bad {
  color: var(--_danger);
}

.stats-note {
  margin: 0;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.45 var(--_font-ui);
}

/* ---------- Small line ---------- */

.stats-history {
  display: grid;
  gap: 2px;
  margin-top: var(--_space-1);
}

.stats-trend {
  border-radius: 2px;
  touch-action: pan-y;
}

.stats-trend:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.stats-svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.stats-line {
  fill: none;
  stroke: var(--_accent-fg);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.stats-marker {
  fill: var(--_accent-fg);
  stroke: var(--_surface);
  stroke-width: 2;
}

.stats-guide {
  display: none;
  stroke: var(--_border-strong);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.stats-trend.active .stats-guide {
  display: inline;
}

.stats-point {
  min-height: 1.4em;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.4 var(--_font-ui);
  overflow-wrap: anywhere;
}
`;var R=new Set(["number","compact","currency","percent","bytes","duration"]),G=500;function B(n){if(!Array.isArray(n))return[];let t=[];for(let e of n.slice(0,G)){let s=f(y(e)?e.value??e.y:e);s!==null&&t.push({label:y(e)?p(e.label??e.x,100):"",value:s})}return t}function K(n,t){let e=f(n.change??n.delta);if(e!==null)return e;let s=f(n.previous);return s===null||t===null||s===0?null:(t-s)/Math.abs(s)*100}function W(n){let t=f(n.value),e=p(n.format,20).toLowerCase(),s=f(n.digits),a=p(n.good,10).toLowerCase();return{label:x(n,["label","name","title"],200),value:t,display:t===null?p(n.value,100):"",format:R.has(e)?e:"number",unit:p(n.unit,40),currency:/^[A-Za-z]{3}$/.test(p(n.currency,3))?p(n.currency,3).toUpperCase():"USD",digits:s!==null&&s>=0&&s<=6?Math.floor(s):null,change:K(n,t),good:a==="down"||a==="none"?a:"up",against:x(n,["against","period","compare"],100),description:p(n.description,500),url:E(n.url??n.href),series:B(n.series??n.history??n.trend??n.spark)}}function w(n){let t=F(n,["stats","items","metrics","kpis"]);return t.ok?{ok:!0,stats:t.items.map(W).filter(e=>e.label||e.value!==null)}:t}function N(n,t){return n===0||t==="none"?"neutral":n>0==(t==="up")?"good":"bad"}function H(n,t,e,s){let a=n.map(u=>u.value),o=Math.min(...a),l=Math.max(...a)-o;return n.map((u,m)=>({x:n.length>1?s+m/(n.length-1)*(t-s*2):t/2,y:l?e-s-(u.value-o)/l*(e-s*2):e/2}))}var P=Object.freeze({statsUp:"Up {change}",statsDown:"Down {change}",statsFlat:"No change",statsAgainst:"{change} {against}",statsHistory:"History of {name}",statsPoint:"Point {n}",statsEmpty:"No figures to show."}),V=Object.freeze({statsUp:"En hausse de {change}",statsDown:"En baisse de {change}",statsFlat:"Sans changement",statsAgainst:"{change} {against}",statsHistory:"Historique de {name}",statsPoint:"Point {n}",statsEmpty:"Aucun chiffre \xE0 afficher."});C({en:P,fr:V});var X="http://www.w3.org/2000/svg",j=240,_=48,q=5;function h(n,t){let e=document.createElementNS(X,n);for(let[s,a]of Object.entries(t))e.setAttribute(s,String(a));return e}var I=class extends T{static type="stats";static componentAttributes=Object.freeze(["columns","trend","changes"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0}};static styles=[k,M,$,z];constructor(){super(),this.panelId=D("panel")}get stats(){let t=w(this.text??"");return t.ok?t.stats:[]}renderContent(t){let e=w(this.text??""),s=i("div",{class:"body data-body stats-body",part:"body"});if(!e.ok)s.append(this.dataNotice(e));else if(!e.stats.length)s.append(i("p",{class:"data-none",text:this.t("statsEmpty")}));else{let a=i("ul",{class:"stats-grid"},...e.stats.map((l,u)=>this.statView(l,u))),o=Number(this.getAttribute("columns"));Number.isInteger(o)&&o>=1&&o<=12&&a.style.setProperty("--_columns",String(o)),s.append(a)}this.frameWith(t,s,this.panelId,{file:"stats.json"})}statView(t,e){let s=i("span",{class:"stats-label",part:"label",text:t.label});return i("li",{class:"stats-tile",part:"stat"},t.url?i("a",{attrs:{href:t.url,rel:"noopener noreferrer"}},s):s,i("span",{class:"stats-value",part:"value",text:this.valueText(t,t.value)}),t.change!==null&&this.flag("changes")?this.changeView(t):null,t.series.length>1&&this.flag("trend")?this.trendView(t,e):null,t.description?i("p",{class:"stats-note",text:t.description}):null)}valueText(t,e){let s=e===null?t.display:this.formatValue(t,e);return t.unit?`${s} ${t.unit}`:s}formatValue(t,e){let s=t.digits===null?{}:{minimumFractionDigits:t.digits,maximumFractionDigits:t.digits};try{switch(t.format){case"compact":return this.number(e,{notation:"compact",maximumFractionDigits:1,...s});case"currency":return this.number(e,{style:"currency",currency:t.currency,...s});case"percent":return this.number(e/100,{style:"percent",maximumFractionDigits:1,...s});case"bytes":return this.bytes(e);case"duration":return this.duration(e);default:return this.number(e,s)}}catch{return String(e)}}number(t,e){return new Intl.NumberFormat(this.locale,e).format(t)}bytes(t){let e=["byte","kilobyte","megabyte","gigabyte","terabyte","petabyte"],s=Math.abs(t),a=Math.min(e.length-1,s<1?0:Math.floor(Math.log(s)/Math.log(1e3)));return this.number(t/1e3**a,{style:"unit",unit:e[a],unitDisplay:"short",maximumFractionDigits:1})}duration(t){let e=[["day",86400],["hour",3600],["minute",60],["second",1]],[s,a]=e.find(([,o])=>Math.abs(t)>=o)??e[3];return this.number(t/a,{style:"unit",unit:s,unitDisplay:"short",maximumFractionDigits:1})}changeView(t){let e=this.t,s=t.change,a=N(s,t.good),o=this.number(Math.abs(s)/100,{style:"percent",maximumFractionDigits:1}),l=e("statsFlat");return s>0?l=e("statsUp",{change:o}):s<0&&(l=e("statsDown",{change:o})),i("span",{class:`stats-change ${a}`,part:"change"},s?L(s>0?"chevron-up":"chevron-down"):null,i("span",{text:t.against?e("statsAgainst",{change:l,against:t.against}):l}))}trendView(t,e){let s=this.t,{series:a}=t,o=H(a,j,_,q),l=r=>`${a[r].label||s("statsPoint",{n:r+1})}: ${this.valueText(t,a[r].value)}`,u=a.length-1,m=h("polyline",{class:"stats-line",points:o.map(r=>`${r.x.toFixed(1)},${r.y.toFixed(1)}`).join(" ")}),b=h("line",{class:"stats-guide",y1:0,y2:_,x1:0,x2:0}),v=h("circle",{class:"stats-marker",r:4}),A=h("svg",{class:"stats-svg",viewBox:`0 0 ${j} ${_}`,"aria-hidden":"true"});A.append(b,m,v);let S=i("span",{class:"stats-point"}),c=i("div",{class:"stats-trend",part:"trend",attrs:{role:"slider",tabindex:"0","data-focus-key":`trend-${e}`,"aria-label":s("statsHistory",{name:t.label}),"aria-valuemin":"0","aria-valuemax":String(a.length-1)}},A),g=(r,d=!0)=>{u=r,v.setAttribute("cx",String(o[r].x)),v.setAttribute("cy",String(o[r].y)),b.setAttribute("x1",String(o[r].x)),b.setAttribute("x2",String(o[r].x)),c.classList.toggle("active",d),c.setAttribute("aria-valuenow",String(r)),c.setAttribute("aria-valuetext",l(r)),S.textContent=d?l(r):"\xA0"};return g(u,!1),c.addEventListener("pointermove",r=>{let d=c.getBoundingClientRect(),O=d.width?(r.clientX-d.left)/d.width:1;g(Math.max(0,Math.min(a.length-1,Math.round(O*(a.length-1)))))}),c.addEventListener("pointerleave",()=>g(a.length-1,this.root.activeElement===c)),c.addEventListener("focus",()=>g(u)),c.addEventListener("blur",()=>g(a.length-1,!1)),c.addEventListener("keydown",r=>{let d=Z(r.key,u,a.length);d!==null&&(r.preventDefault(),g(d))}),i("div",{class:"stats-history"},c,S)}};function Z(n,t,e){return n==="ArrowLeft"||n==="ArrowDown"?Math.max(0,t-1):n==="ArrowRight"||n==="ArrowUp"?Math.min(e-1,t+1):n==="Home"?0:n==="End"?e-1:null}export{I as a};
//# sourceMappingURL=chunk-FVOF7UDP.js.map
