/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as K}from"./chunk-3VQOL2NW.js";import{I as C,N as B,Q as E,U as j,X as q,d as R,l,m as J,n as P}from"./chunk-DNNVKOIB.js";import{h as H,k as M,l as N,m as X,q as S}from"./chunk-2IDMCIF6.js";var U=`/*
 * Trace: summary and services, the waterfall of spans with a time ruler, and the
 * details of the selected span. Each service has a color, always next to its name.
 */
.tc-body {
  display: grid;
  align-content: start;
  padding: 0;
  background: var(--_surface);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
  overscroll-behavior: auto;
}

:host([max-height]) .tc-body,
.vt[data-fullscreen] .tc-body {
  overscroll-behavior: contain;
}

.svc-0 {
  --_svc: var(--_accent);
}

.svc-1 {
  --_svc: var(--_info);
}

.svc-2 {
  --_svc: var(--_warning);
}

.svc-3 {
  --_svc: var(--_syntax-keyword);
}

.svc-4 {
  --_svc: var(--_syntax-type);
}

.svc-5 {
  --_svc: var(--_syntax-string);
}

.svc-6 {
  --_svc: var(--_syntax-number);
}

.svc-7 {
  --_svc: var(--_fg-muted);
}

.tc-swatch {
  display: inline-block;
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: var(--_svc, var(--_accent));
}

/* ---------- Summary ---------- */

.tc-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-4);
  padding: var(--_space-3) var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.tc-fact {
  display: inline-flex;
  align-items: baseline;
  gap: var(--_space-2);
  color: var(--_fg);
  font-variant-numeric: tabular-nums;
}

.tc-key {
  color: var(--_fg-muted);
}

.tc-id {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.tc-errors {
  align-items: center;
  color: var(--_danger);
  font-weight: 600;
}

.tc-errors .icon {
  width: 14px;
  height: 14px;
}

.tc-select {
  max-width: 28ch;
  height: 28px;
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: inherit;
}

.tc-select:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.tc-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-4);
  margin: 0;
  padding: var(--_space-2) var(--_space-4);
  border-bottom: 1px solid var(--_border);
  color: var(--_fg-muted);
  list-style: none;
}

.tc-legend li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* ---------- Waterfall ---------- */

.tc-waterfall {
  --_label: minmax(160px, 36%);
  overflow-x: auto;
}

.tc-ruler,
.tc-row {
  display: grid;
  grid-template-columns: var(--_label) minmax(240px, 1fr);
  min-width: 520px;
}

.tc-ruler {
  position: sticky;
  top: 0;
  z-index: 2;
  height: 28px;
  border-bottom: 1px solid var(--_border);
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.tc-ruler-lane,
.tc-lane {
  position: relative;
  margin-inline-end: var(--_space-5);
}

.tc-tick {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-inline-start: 4px;
  border-inline-start: 1px solid var(--_border);
  white-space: nowrap;
}

.tc-rows {
  display: grid;
}

.tc-row {
  min-height: 30px;
  border-bottom: 1px solid color-mix(in srgb, var(--_border) 60%, transparent);
  cursor: pointer;
}

.tc-row:hover {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.tc-row:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.tc-row.selected {
  background: var(--_accent-soft);
}

.tc-row.current {
  background: var(--_highlight);
}

.tc-row.dimmed {
  opacity: 0.55;
}

.tc-row.match .tc-name {
  font-weight: 600;
}

.tc-label {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding-inline: calc(var(--_depth, 0) * 14px + var(--_space-2)) var(--_space-3);
  border-inline-end: 1px solid var(--_border);
}

.tc-toggle {
  display: inline-flex;
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
}

.tc-toggle .icon {
  width: 16px;
  height: 16px;
  transition: transform var(--_duration) var(--_easing);
}

.tc-toggle.open .icon {
  transform: rotate(90deg);
}

.tc-label > .icon {
  flex: none;
  width: 14px;
  height: 14px;
  color: var(--_danger);
}

.tc-name {
  overflow: hidden;
  color: var(--_fg);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tc-service {
  flex: none;
  overflow: hidden;
  max-width: 14ch;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tc-bar {
  position: absolute;
  top: 50%;
  min-width: 2px;
  height: 12px;
  transform: translateY(-50%);
  border-radius: 3px;
  background: var(--_svc, var(--_accent));
}

.error .tc-bar {
  outline: 2px solid var(--_danger);
  outline-offset: 1px;
}

.tc-event {
  position: absolute;
  top: calc(50% + 7px);
  width: 2px;
  height: 6px;
  margin-inline-start: -1px;
  background: var(--_fg);
}

.tc-time {
  position: absolute;
  top: 50%;
  padding-inline-start: 6px;
  transform: translateY(-50%);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.tc-time.before {
  padding-inline: 0 6px;
  transform: translate(-100%, -50%);
}

:host(:dir(rtl)) .tc-time.before {
  transform: translate(100%, -50%);
}

.tc-none {
  margin: 0;
  padding: var(--_space-3) var(--_space-4);
  color: var(--_fg-muted);
}

.tc-more {
  justify-self: start;
  margin: var(--_space-2) var(--_space-4);
}

/* ---------- Details ---------- */

.tc-details {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-3) var(--_space-4) var(--_space-4);
  border-top: 1px solid var(--_border);
}

.tc-details-head {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
}

.tc-details-title {
  flex: 1 1 auto;
  margin: 0;
  color: var(--_fg);
  font-size: calc(var(--_font-size-ui) + 1px);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.tc-note {
  margin: 0;
  color: var(--_warning);
}

.tc-facts {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 2px var(--_space-4);
  margin: 0;
}

.tc-facts dt {
  color: var(--_fg-muted);
}

.tc-facts dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.tc-facts code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.tc-details h4 {
  margin: var(--_space-2) 0 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.tc-attrs {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.tc-attrs th,
.tc-attrs td {
  padding: 3px var(--_space-2);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
  overflow-wrap: anywhere;
}

.tc-attrs th {
  width: 35%;
  color: var(--_syntax-attr);
  font-weight: 400;
}

.tc-events {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tc-events li {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.tc-event-time {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.tc-event-attrs {
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.tc-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var _=class extends Error{},f=s=>typeof s=="object"&&s!==null&&!Array.isArray(s),h=(s,t=2e3)=>typeof s=="string"?s.slice(0,t):s==null?"":String(s).slice(0,t);function y(s,t){if(typeof s=="bigint")return s*t;if(typeof s=="number"&&Number.isFinite(s))return Number.isSafeInteger(s)?BigInt(s)*t:BigInt(Math.round(s*Number(t)));if(typeof s=="string"){let e=s.trim();if(/^\d{1,30}$/.test(e))return BigInt(e)*t;if(/^\d+\.\d+$/.test(e))return BigInt(Math.round(Number(e)*Number(t)));let r=Date.parse(e);if(/^\d{4}-\d\d-\d\d/.test(e)&&Number.isFinite(r))return BigInt(r)*1000000n}return null}function Y(s){let t=s.trim();if(!t)throw new _("empty");let e;return/^\{/.test(t)&&/\}\s*\n\s*\{/.test(t)?e={resourceSpans:t.split(/\n(?=\s*\{)/).map(a=>JSON.parse(a)).flatMap(a=>f(a)&&Array.isArray(a.resourceSpans)?a.resourceSpans:[])}:e=JSON.parse(t),it(e)}function it(s){let t;if(f(s)&&(Array.isArray(s.resourceSpans)||Array.isArray(s.batches)))t=ct(s.resourceSpans??s.batches);else if(f(s)&&Array.isArray(s.data)&&s.data.some(e=>f(e)&&Array.isArray(e.spans)))t=s.data.flatMap(e=>f(e)?G(e):[]);else if(f(s)&&Array.isArray(s.spans)&&(f(s.processes)||s.spans.some(e=>f(e)&&"spanID"in e)))t=G(s);else if(f(s)&&Array.isArray(s.spans))t=z(s.spans);else if(Array.isArray(s)&&s.length&&s.every(Array.isArray))t=s.flat().length&&W(s.flat()[0])?Z(s.flat()):z(s.flat());else if(Array.isArray(s))t=s.length&&W(s[0])?Z(s):z(s);else throw new _("format");if(!t.length)throw new _("noSpans");return lt(t)}var W=s=>f(s)&&"traceId"in s&&"id"in s&&("timestamp"in s||"localEndpoint"in s);function Q(s){return f(s)?"stringValue"in s?h(s.stringValue):"intValue"in s?h(s.intValue):"doubleValue"in s?h(s.doubleValue):"boolValue"in s?h(s.boolValue):"bytesValue"in s?h(s.bytesValue):f(s.arrayValue)&&Array.isArray(s.arrayValue.values)?JSON.stringify(s.arrayValue.values.map(Q)).slice(0,2e3):f(s.kvlistValue)&&Array.isArray(s.kvlistValue.values)?JSON.stringify(Object.fromEntries(T(s.kvlistValue.values).map(t=>[t.key,t.value]))).slice(0,2e3):"":h(s)}function T(s){return Array.isArray(s)?s.slice(0,200).filter(f).map(t=>({key:h(t.key,200),value:Q(t.value)})):[]}var ot=["","internal","server","client","producer","consumer"];function $(s){if(typeof s=="number")return ot[s]??"";let t=h(s,40).toLowerCase().replace(/^span_kind_/,"");return["internal","server","client","producer","consumer"].includes(t)?t:""}function O(s){let t=h(s,100);if(!t||/^[\da-f]+$/i.test(t))return t.toLowerCase();try{return Array.from(atob(t),e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("")}catch{return t}}function ct(s){let t=[];for(let e of s){if(!f(e))continue;let r=T(f(e.resource)?e.resource.attributes:[]),a=r.find(d=>d.key==="service.name")?.value??"",i=e.scopeSpans??e.instrumentationLibrarySpans??[];for(let d of Array.isArray(i)?i:[])if(!(!f(d)||!Array.isArray(d.spans)))for(let c of d.spans){if(!f(c)||t.length>=2e4)continue;let o=y(c.startTimeUnixNano,1n),n=y(c.endTimeUnixNano,1n);if(o===null)continue;let p=f(c.status)?c.status:{},m=h(p.code).toLowerCase();t.push({span:{id:O(c.spanId),parentId:O(c.parentSpanId),traceId:O(c.traceId),name:h(c.name,500),service:a,kind:$(c.kind),status:m==="2"||m.endsWith("error")?"error":m==="1"||m.endsWith("ok")?"ok":"unset",statusMessage:h(p.message),attributes:[...T(c.attributes),...r.filter(u=>u.key!=="service.name").map(u=>({...u,key:`resource.${u.key}`}))].slice(0,200),links:Array.isArray(c.links)?c.links.length:0},start:o,end:n!==null&&n>=o?n:o,events:(Array.isArray(c.events)?c.events:[]).slice(0,200).filter(f).map(u=>({name:h(u.name,500),time:y(u.timeUnixNano,1n)??o,attributes:T(u.attributes)}))})}}return t}function L(s){return Array.isArray(s)?s.slice(0,200).filter(f).map(t=>({key:h(t.key,200),value:typeof t.value=="string"?t.value.slice(0,2e3):(JSON.stringify(t.value)??"").slice(0,2e3)})):[]}function G(s){let t=f(s.processes)?s.processes:{},e=[];for(let r of s.spans.slice(0,2e4)){if(!f(r))continue;let a=y(r.startTime,1000n);if(a===null)continue;let i=y(r.duration,1000n)??0n,d=Array.isArray(r.references)?r.references.filter(f):[],c=d.find(u=>h(u.refType).toUpperCase()==="CHILD_OF")??d[0],o=f(r.process)?r.process:t[h(r.processID)],n=L(r.tags),p=n.find(u=>u.key==="span.kind")?.value??"",m=n.some(u=>u.key==="error"&&u.value==="true")||n.some(u=>u.key==="otel.status_code"&&u.value==="ERROR");e.push({span:{id:h(r.spanID,100),parentId:h(c?c.spanID:r.parentSpanID,100),traceId:h(r.traceID,100),name:h(r.operationName,500),service:f(o)?h(o.serviceName,200):"",kind:$(p),status:m?"error":"unset",statusMessage:n.find(u=>u.key==="otel.status_description"||u.key==="error.message")?.value??"",attributes:[...n,...L(f(o)?o.tags:[]).map(u=>({...u,key:`process.${u.key}`}))].slice(0,200),links:Math.max(0,d.length-1)},start:a,end:a+i,events:(Array.isArray(r.logs)?r.logs:[]).slice(0,200).filter(f).map(u=>{let g=L(u.fields);return{name:g.find(v=>v.key==="event"||v.key==="message")?.value??"log",time:y(u.timestamp,1000n)??a,attributes:g.filter(v=>v.key!=="event")}})})}return e}function Z(s){let t=[];for(let e of s.slice(0,2e4)){if(!f(e))continue;let r=y(e.timestamp,1000n);if(r===null)continue;let a=f(e.tags)?Object.entries(e.tags).slice(0,200).map(([c,o])=>({key:c.slice(0,200),value:h(o)})):[],i=f(e.localEndpoint)?e.localEndpoint:{},d=f(e.remoteEndpoint)?e.remoteEndpoint:null;d?.serviceName&&a.push({key:"remote.service",value:h(d.serviceName,200)}),t.push({span:{id:h(e.id,100),parentId:h(e.parentId,100),traceId:h(e.traceId,100),name:h(e.name,500),service:h(i.serviceName,200),kind:$(e.kind),status:a.some(c=>c.key==="error")?"error":"unset",statusMessage:a.find(c=>c.key==="error")?.value??"",attributes:a,links:0},start:r,end:r+(y(e.duration,1000n)??0n),events:(Array.isArray(e.annotations)?e.annotations:[]).slice(0,200).filter(f).map(c=>({name:h(c.value,500),time:y(c.timestamp,1000n)??r,attributes:[]}))})}return t}function z(s){let t=[];return s.slice(0,2e4).forEach((e,r)=>{if(!f(e))return;let a=y(e.start??e.startTime??e.timestamp,1000000n);if(a===null)return;let i=y(e.duration,1000000n),c=y(e.end??e.endTime,1000000n)??(i!==null?a+i:a),o=f(e.attributes??e.tags)?Object.entries(e.attributes??e.tags).slice(0,200).map(([m,u])=>({key:m.slice(0,200),value:typeof u=="string"?u.slice(0,2e3):JSON.stringify(u)??""})):[],n=h(e.status).toLowerCase(),p=e.error===!0||typeof e.error=="string"||n==="error";t.push({span:{id:h(e.id??e.spanId??r+1,100),parentId:h(e.parent??e.parentId??e.parentSpanId??"",100),traceId:h(e.traceId??e.trace??"",100),name:h(e.name??e.operation,500),service:h(e.service??e.serviceName,200),kind:$(e.kind),status:p?"error":n==="ok"?"ok":"unset",statusMessage:typeof e.error=="string"?e.error.slice(0,2e3):h(e.message),attributes:o,links:0},start:a,end:c>=a?c:a,events:(Array.isArray(e.events)?e.events:[]).slice(0,200).filter(f).map(m=>({name:h(m.name,500),time:y(m.time??m.timestamp,1000000n)??a,attributes:[]}))})}),t}function lt(s){let t=new Map;for(let e of s){let r=t.get(e.span.traceId);r?r.push(e):t.set(e.span.traceId,[e])}return[...t].map(([e,r])=>{let a=r[0].start,i=r[0].end;for(let n of r)n.start<a&&(a=n.start),n.end>i&&(i=n.end);let d=n=>Number(n-a)/1e3,c=r.map(n=>({...n.span,start:d(n.start),duration:Number(n.end-n.start)/1e3,events:n.events.map(p=>({name:p.name,time:d(p.time),attributes:p.attributes})),depth:0,children:[],orphan:!1})),o=a>978307200000000000n?Number(a/1000000n):null;return dt({id:e,spans:c,roots:[],duration:Number(i-a)/1e3,startedAt:o,services:[]})})}function dt(s){let t=new Map;for(let o of s.spans){let n=o.id||"?";for(let p=2;t.has(n);p+=1)n=`${o.id}#${p}`;o.id=n,t.set(n,o)}let e=[];for(let o of s.spans){let n=o.parentId?t.get(o.parentId):void 0;n&&n!==o?n.children.push(o.id):(o.orphan=!!o.parentId,e.push(o.id))}let r=(o,n)=>t.get(o).start-t.get(n).start;for(let o of s.spans)o.children.sort(r);e.sort(r);let a=[],i=new Set,d=e.map(o=>[o,0]).reverse();for(;d.length;){let[o,n]=d.pop();if(i.has(o))continue;i.add(o);let p=t.get(o);p.depth=n,a.push(p);for(let m=p.children.length-1;m>=0;m-=1)d.push([p.children[m],n+1])}for(let o of s.spans)i.has(o.id)||(o.orphan=!0,o.depth=0,e.push(o.id),a.push(o));let c=[];for(let o of a)o.service&&!c.includes(o.service)&&c.push(o.service);return{...s,spans:a,roots:e,services:c}}function tt(s,t=5){if(!(s>0))return 1;let e=s/t,r=10**Math.floor(Math.log10(e));return([1,2,5,10].find(i=>i*r>=e)??10)*r}function w(s,t){let e=(r,a)=>{try{return new Intl.NumberFormat(t,{maximumFractionDigits:a}).format(r)}catch{return r.toFixed(a)}};return s<1e3?`${e(s,s<10?2:0)} \xB5s`:s<1e6?`${e(s/1e3,s<1e4?2:1)} ms`:s<6e7?`${e(s/1e6,2)} s`:`${Math.floor(s/6e7)} min ${e(s%6e7/1e6,0)} s`}function et(s,t,e){let r=t*5,[a,i]=r>=1e6?["s",1e6]:r>=1e3?["ms",1e3]:["\xB5s",1],d=Math.min(3,Math.max(0,Math.ceil(-Math.log10(t/i)-1e-9))),c=s/i;try{return`${new Intl.NumberFormat(e,{maximumFractionDigits:d}).format(c)} ${a}`}catch{return`${c.toFixed(d)} ${a}`}}var rt=Object.freeze({traceSpans:"{count} spans",traceSpan:"1 span",traceServices:"Services",traceErrors:"{count} errors",traceError:"1 error",traceId:"Trace ID",traceChoose:"Trace",traceStarted:"Started",traceDuration:"Duration",traceWaterfall:"Spans of the trace",traceDetails:"Span details",traceName:"Name",traceService:"Service",traceKind:"Kind",traceStart:"Start",traceStatus:"Status",traceSpanId:"Span ID",traceParentId:"Parent ID",traceAttributes:"Attributes",traceEvents:"Events",traceLinks:"Links",traceOrphan:"Its parent span is not in this trace.",traceStatusError:"Error",traceStatusOk:"OK",traceStatusUnset:"Unset",traceAt:"at {time}",traceCopyId:"Copy trace ID",traceCopyJson:"Copy spans as JSON",traceClose:"Close details",traceNoMatch:"No spans match.",traceShowMore:"Show {count} more spans",traceInvalidEmpty:"No trace.",traceInvalidFormat:"This is not a trace: expected OpenTelemetry (OTLP JSON), Jaeger, Zipkin or a list of spans.",traceInvalidNoSpans:"This trace has no spans with a start time.",traceInvalid:"The trace could not be read: {message}"}),st={traceSpans:"{count} spans",traceSpan:"1 span",traceServices:"Services",traceErrors:"{count} erreurs",traceError:"1 erreur",traceId:"ID de la trace",traceChoose:"Trace",traceStarted:"D\xE9but",traceDuration:"Dur\xE9e",traceWaterfall:"Spans de la trace",traceDetails:"D\xE9tails du span",traceName:"Nom",traceService:"Service",traceKind:"Type",traceStart:"D\xE9but",traceStatus:"\xC9tat",traceSpanId:"ID du span",traceParentId:"ID du parent",traceAttributes:"Attributs",traceEvents:"\xC9v\xE9nements",traceLinks:"Liens",traceOrphan:"Son span parent n\u2019est pas dans cette trace.",traceStatusError:"Erreur",traceStatusOk:"OK",traceStatusUnset:"Non d\xE9fini",traceAt:"\xE0 {time}",traceCopyId:"Copier l\u2019ID de la trace",traceCopyJson:"Copier les spans en JSON",traceClose:"Fermer les d\xE9tails",traceNoMatch:"Aucun span ne correspond.",traceShowMore:"Afficher {count} spans de plus",traceInvalidEmpty:"Aucune trace.",traceInvalidFormat:"Ce n\u2019est pas une trace : OpenTelemetry (OTLP JSON), Jaeger, Zipkin ou une liste de spans attendu.",traceInvalidNoSpans:"Cette trace n\u2019a aucun span avec une heure de d\xE9but.",traceInvalid:"La trace n\u2019a pas pu \xEAtre lue : {message}"};X({en:rt,fr:st});var F=8,I=2e3,at=class extends q{static type="trace";static componentAttributes=Object.freeze(["trace","selected","depth","details","legend","expand-buttons"]);static presets={simple:{details:!0,legend:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,details:!0,legend:!0,"expand-buttons":!0}};static styles=[U];static upgradeProperties=["content","selected"];constructor(){super(),this.parsed=null,this.traceChoice=null,this.selection=null,this.collapsed=null,this.focusId="",this.query="",this.matchIds=[],this.limit=I,this.panelId=P("panel"),this.rowsHost=null,this.detailsHost=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.collapsed=null,this.limit=I}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,traces:Y(t),error:null}}catch(e){this.parsed={text:t,traces:[],error:e instanceof Error?e:new Error(String(e))}}return this.parsed}get traces(){return structuredClone(this.parse().traces)}get current(){let t=this.parse().traces,e=this.traceChoice??this.getAttribute("trace")?.trim().toLowerCase();return t.find(r=>r.id.toLowerCase()===e)??t[0]??null}get selected(){return this.selection??this.getAttribute("selected")??""}set selected(t){this.selection=t==null?null:String(t),this._connected&&this.requestRender()}closedSpans(t){if(this.collapsed)return this.collapsed;let e=t.spans.length>500?3:1e3,r=R(this.getAttribute("depth"),{min:1,max:1e3,fallback:e});return this.collapsed=new Set(t.spans.filter(a=>a.depth>=r-1&&a.children.length).map(a=>a.id)),this.collapsed}visibleSpans(t){let e=this.closedSpans(t),r=[],a=1/0;for(let i of t.spans)i.depth>a||(a=1/0,r.push(i),e.has(i.id)&&(a=i.depth));return r}spanMatches(t){let e=this.query.toLowerCase();return e?t.name.toLowerCase().includes(e)||t.service.toLowerCase().includes(e)||t.id.toLowerCase()===e||t.attributes.some(r=>r.value.toLowerCase().includes(e)||r.key.toLowerCase()===e):!1}renderContent(t){let e=this.t,{traces:r,error:a}=this.parse(),i=this.current,d=l("div",{class:"panel",attrs:{id:this.panelId}}),c=l("div",{class:"body tc-body",part:"body"});this.rowsHost=null,this.detailsHost=null,a||!i?c.append(j(this.errorText(a))):(c.append(this.summaryView(i,r)),c.append(this.waterfall(i)),this.feature("details")&&(this.detailsHost=l("div",{class:"tc-details-host"}),c.append(this.detailsHost),this.renderDetails(i)));let o=[];if(this.editing){let g=this.createEditor();d.classList.add("tc-edit"),d.append(l("div",{class:"body editor-body",part:"body source"},g.element),c),o=this.historyButtons(g)}else d.append(c);let n={run:g=>{this.query=g.slice(0,B).trim();let b=this.current;return this.matchIds=b?b.spans.filter(v=>this.spanMatches(v)).map(v=>v.id):[],b&&this.openParentsOf(b,this.matchIds),this.renderRows(),{total:this.matchIds.length,capped:!1}},go:g=>{let b=this.matchIds[g];for(let x of this.rowsHost?.querySelectorAll(".tc-row.current")??[])x.classList.remove("current");let v=this.rowFor(b);v?.classList.add("current"),v?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.matchIds=[],this.renderRows()}},p=i?.spans.some(g=>g.children.length),m=[this.searchButton(n),...o,this.feature("expand-buttons")&&p&&!this.editing?E({icon:"expand-all",label:e("expandAll"),key:"expand-all",onClick:()=>this.setAll(!1)}):null,this.feature("expand-buttons")&&p&&!this.editing?E({icon:"collapse-all",label:e("collapseAll"),key:"collapse-all",onClick:()=>this.setAll(!0)}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("trace.json"),"application/json"):null,this.feature("copy")&&i?this.copyButton(()=>JSON.stringify(pt(i),null,2),e("traceCopyJson")):null],u=i?`${i.spans.length===1?e("traceSpan"):e("traceSpans",{count:S(i.spans.length,this.locale)})} \xB7 ${w(i.duration,this.locale)}`:"";t.append(...this.chrome({badge:u,actions:m}),d),this.editor?.align()}errorText(t){let e=this.t;if(t instanceof _){if(t.message==="empty")return e("traceInvalidEmpty");if(t.message==="format")return e("traceInvalidFormat");if(t.message==="noSpans")return e("traceInvalidNoSpans")}return e("traceInvalid",{message:t?.message??""})}summaryView(t,e){let r=this.t,a=t.spans.filter(o=>o.status==="error").length,i=l("div",{class:"tc-summary",part:"summary"});if(e.length>1){let o=`${this.panelId}-trace`,n=l("select",{class:"tc-select",attrs:{id:o,"data-focus-key":"trace-select"},on:{change:()=>{this.traceChoice=n.value,this.collapsed=null,this.selection=null,this.limit=I,this.render()}}});for(let p of e){let m=p.spans[0],u=l("option",{text:`${m?.name||p.id} \xB7 ${w(p.duration,this.locale)}`,attrs:{value:p.id}});p===t&&(u.selected=!0),n.append(u)}i.append(l("label",{class:"tc-fact",attrs:{for:o}},l("span",{class:"tc-key",text:r("traceChoose")}),n))}let d=(o,n)=>l("span",{class:"tc-fact"},l("span",{class:"tc-key",text:o}),n);if(t.id&&i.append(d(r("traceId"),l("code",{class:"tc-id",text:t.id})),this.copyTextButton(()=>t.id,r("traceCopyId"),"copy-trace-id")),t.startedAt!==null&&i.append(d(r("traceStarted"),this.formatDate(t.startedAt))),i.append(d(r("traceDuration"),w(t.duration,this.locale))),a&&i.append(l("span",{class:"tc-fact tc-errors"},C("alert"),a===1?r("traceError"):r("traceErrors",{count:S(a,this.locale)}))),!this.feature("legend")||!t.services.length)return i;let c=l("ul",{class:"tc-legend",part:"legend",attrs:{"aria-label":r("traceServices")}});return t.services.forEach((o,n)=>{c.append(l("li",{class:`svc-${n%F}`},l("span",{class:"tc-swatch",attrs:{"aria-hidden":"true"}}),o))}),l("div",{},i,c)}formatDate(t){try{return new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"medium"}).format(t)}catch{return new Date(t).toISOString()}}waterfall(t){let e=l("div",{class:"tc-ruler",part:"ruler",attrs:{"aria-hidden":"true"}}),r=l("div",{class:"tc-ruler-lane"}),a=tt(t.duration);for(let i=0;i<=t.duration+a/1e3;i+=a){let d=l("span",{class:"tc-tick",text:et(i,a,this.locale)});if(d.style.insetInlineStart=`${t.duration?i/t.duration*100:0}%`,r.append(d),a<=0)break}return e.append(l("span",{class:"tc-ruler-label"}),r),this.rowsHost=l("div",{class:"tc-rows",attrs:{role:"tree","aria-label":this.t("traceWaterfall")},on:{keydown:i=>this.onKey(i)}}),this.renderRows(),l("div",{class:"tc-waterfall",part:"waterfall"},e,this.rowsHost)}renderRows(){let t=this.rowsHost,e=this.current;if(!t||!e)return;let r=this.visibleSpans(e),a=this.selected;r.some(n=>n.id===this.focusId)||(this.focusId=(r.find(n=>n.id===a)??r[0])?.id??"");let i=e.services,d=new Set(this.matchIds),c=this.closedSpans(e),o=[];for(let n of r.slice(0,this.limit)){let p=!c.has(n.id),m=n.id===a,u=Math.max(0,i.indexOf(n.service))%F,g=l("div",{class:`tc-row svc-${u}${n.status==="error"?" error":""}${m?" selected":""}${d.has(n.id)?" match":this.query?" dimmed":""}`,part:`span${n.status==="error"?" span-error":""}${m?" span-selected":""}`,attrs:{role:"treeitem","aria-level":n.depth+1,"aria-expanded":n.children.length?String(p):null,"aria-selected":String(m),tabindex:n.id===this.focusId?"0":"-1","data-id":n.id,"data-focus-key":`span-${n.id}`,title:`${n.name} \xB7 ${n.service?`${n.service} \xB7 `:""}${w(n.duration,this.locale)}`},on:{click:A=>this.onRowClick(n,A)}}),b=l("span",{class:"tc-label"});b.style.setProperty("--_depth",String(Math.min(n.depth,30))),J(b,[n.children.length?l("span",{class:`tc-toggle${p?" open":""}`,attrs:{"aria-hidden":"true","data-toggle":""}},C("chevron-right")):l("span",{class:"tc-toggle none",attrs:{"aria-hidden":"true"}}),l("span",{class:"tc-swatch",attrs:{"aria-hidden":"true"}}),n.status==="error"?C("alert"):null,l("span",{class:"tc-name",text:n.name||n.id}),n.service?l("span",{class:"tc-service",text:n.service}):null]);let v=l("span",{class:"tc-bar",part:"bar"}),x=e.duration||1;v.style.insetInlineStart=`${n.start/x*100}%`,v.style.width=`${n.duration/x*100}%`;let D=l("span",{class:"tc-lane"},v);for(let A of n.events.slice(0,50)){let V=l("span",{class:"tc-event",attrs:{title:A.name}});V.style.insetInlineStart=`${A.time/x*100}%`,D.append(V)}let k=l("span",{class:"tc-time",text:w(n.duration,this.locale)});(n.start+n.duration)/x>.7&&k.classList.add("before"),k.style.insetInlineStart=`${(k.classList.contains("before")?n.start:n.start+n.duration)/x*100}%`,D.append(k),g.append(b,D),o.push(g)}r.length>this.limit&&o.push(l("button",{class:"text-btn tc-more",text:this.t("traceShowMore",{count:S(Math.min(I,r.length-this.limit),this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.limit+=I,this.renderRows()}}})),this.query&&!this.matchIds.length&&o.unshift(l("p",{class:"tc-none",text:this.t("traceNoMatch")})),t.replaceChildren(...o)}rowFor(t){return this.rowsHost?.querySelector(`[data-id="${CSS.escape(t)}"]`)??null}onRowClick(t,e){if(this.focusId=t.id,e.target.closest("[data-toggle]")){this.toggle(t.id);return}this.select(t.id)}select(t){let e=this.current,r=e?.spans.find(a=>a.id===t);!e||!r||(this.selection=t,this.focusId=t,this.renderRows(),this.renderDetails(e),this.rowFor(t)?.focus(),N(this,M.SELECT,{id:r.id,traceId:e.id,name:r.name,service:r.service,start:r.start/1e3,duration:r.duration/1e3,status:r.status}))}toggle(t,e){let r=this.current;if(!r)return;let a=this.closedSpans(r),i=e??a.has(t);i!==!a.has(t)&&(i?a.delete(t):a.add(t),this.focusId=t,this.renderRows(),this.rowFor(t)?.focus(),N(this,M.TOGGLE,{id:t,expanded:i}))}setAll(t){let e=this.current;e&&(this.collapsed=new Set(t?e.spans.filter(r=>r.children.length).map(r=>r.id):[]),this.renderRows())}openParentsOf(t,e){let r=this.closedSpans(t),a=new Map(t.spans.map(i=>[i.id,i]));for(let i of e)for(let d=a.get(i);d?.parentId&&a.has(d.parentId);d=a.get(d.parentId))r.delete(d.parentId)}onKey(t){let e=this.current;if(!e)return;let r=this.visibleSpans(e).slice(0,this.limit),a=r.findIndex(p=>p.id===this.focusId);if(a<0)return;let i=r[a],d=this.closedSpans(e),c;switch(t.key){case"ArrowDown":c=r[a+1];break;case"ArrowUp":c=r[a-1];break;case"Home":c=r[0];break;case"End":c=r[r.length-1];break;case"ArrowRight":if(i.children.length&&d.has(i.id)){t.preventDefault(),this.toggle(i.id,!0);return}i.children.length&&(c=r[a+1]);break;case"ArrowLeft":if(i.children.length&&!d.has(i.id)){t.preventDefault(),this.toggle(i.id,!1);return}c=r.find(p=>p.id===i.parentId);break;case"Enter":case" ":t.preventDefault(),this.select(i.id);return;default:return}if(t.preventDefault(),!c)return;this.rowFor(this.focusId)?.setAttribute("tabindex","-1"),this.focusId=c.id;let n=this.rowFor(c.id);n?.setAttribute("tabindex","0"),n?.focus()}renderDetails(t){let e=this.detailsHost;if(!e)return;let r=t.spans.find(p=>p.id===this.selected);if(!r){e.replaceChildren();return}let a=this.t,i=`traceStatus${r.status[0].toUpperCase()}${r.status.slice(1)}`,d=Math.max(0,t.services.indexOf(r.service))%F,c=l("dl",{class:"tc-facts"}),o=(p,m)=>c.append(l("dt",{text:p}),l("dd",{},m));r.service&&o(a("traceService"),r.service),r.kind&&o(a("traceKind"),r.kind),o(a("traceStart"),`+${w(r.start,this.locale)}`),o(a("traceDuration"),w(r.duration,this.locale)),o(a("traceStatus"),r.statusMessage?`${a(i)}: ${r.statusMessage}`:a(i)),o(a("traceSpanId"),l("code",{text:r.id})),r.parentId&&o(a("traceParentId"),l("code",{text:r.parentId})),r.links&&o(a("traceLinks"),S(r.links,this.locale));let n=l("section",{class:`tc-details svc-${d}${r.status==="error"?" error":""}`,part:"details",attrs:{"aria-label":a("traceDetails")}},l("div",{class:"tc-details-head"},l("span",{class:"tc-swatch",attrs:{"aria-hidden":"true"}}),l("h3",{class:"tc-details-title",text:r.name||r.id}),E({icon:"close",label:a("traceClose"),key:"details-close",onClick:()=>{this.selection="",this.renderRows(),this.renderDetails(t),this.rowFor(r.id)?.focus()}})),r.orphan?l("p",{class:"tc-note",text:a("traceOrphan")}):null,c);if(r.attributes.length){let p=l("table",{class:"tc-attrs"}),m=l("tbody");for(let u of r.attributes)m.append(l("tr",{},l("th",{attrs:{scope:"row"},text:u.key}),l("td",{text:u.value})));p.append(m),n.append(l("h4",{text:a("traceAttributes")}),p)}if(r.events.length){let p=l("ul",{class:"tc-events"});for(let m of r.events){let u=l("li",{},l("span",{class:"tc-event-time",text:`+${w(m.time,this.locale)}`}),l("strong",{text:m.name}));m.attributes.length&&u.append(l("span",{class:"tc-event-attrs",text:m.attributes.map(g=>`${g.key}=${g.value}`).join("  ")})),p.append(u)}n.append(l("h4",{text:a("traceEvents")}),p)}e.replaceChildren(n)}createEditor(){return this.editor?.destroy(),this.editor=new K({text:this.text??"",language:"json",lineNumbers:!0,wrap:!1,highlightLimit:H().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>N(this,M.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.previewTimer=setTimeout(()=>this.render(),300)}};function pt(s){return s.spans.map(t=>({id:t.id,parent:t.parentId||null,traceId:s.id,name:t.name,service:t.service,kind:t.kind||void 0,start:t.start/1e3,duration:t.duration/1e3,status:t.status,attributes:Object.fromEntries(t.attributes.map(e=>[e.key,e.value]))}))}export{at as a};
//# sourceMappingURL=chunk-7YF7VMC3.js.map
