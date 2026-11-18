/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as B,c as _,f as W}from"./chunk-TZGD2GBK.js";import{e as D}from"./chunk-E4EMJARX.js";import{a as N}from"./chunk-YCSGENO5.js";import{n as I,o as f,r as H}from"./chunk-3VQOL2NW.js";import{J as M,M as q,N as $,Q as R,X as F,b as A,d as v,e as w,l as d}from"./chunk-DNNVKOIB.js";import{h as O,k as x,l as y,q as p}from"./chunk-2IDMCIF6.js";var j=`/*
 * Log viewer: one row per entry (line number, time, level, message, fields), stack
 * traces under their entry, level buttons in the header.
 */
.log-body {
  background: var(--_code-bg);
}

.log {
  min-width: 100%;
  width: max-content;
  padding: var(--_space-2) 0;
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  line-height: 1.55;
}

.log.wrapped {
  width: auto;
}

.entry {
  display: grid;
  grid-template-columns: auto auto 6ch minmax(0, 1fr);
  column-gap: var(--_space-3);
  align-items: baseline;
  padding: 2px var(--_space-4) 2px var(--_space-3);
  border-left: 3px solid transparent;
}

.log:not(.numbered) .entry {
  grid-template-columns: auto 6ch minmax(0, 1fr);
}

.log.no-time .entry {
  grid-template-columns: auto 6ch minmax(0, 1fr);
}

.log.no-time:not(.numbered) .entry {
  grid-template-columns: 6ch minmax(0, 1fr);
}

.entry:hover {
  background: color-mix(in srgb, var(--_code-fg) 5%, transparent);
}

.entry .num {
  min-width: calc(var(--_digits, 4) * 1ch);
  color: var(--_code-gutter);
  text-align: right;
  user-select: none;
  -webkit-user-select: none;
}

.entry .num::before {
  content: attr(data-n);
}

.time {
  min-width: var(--_time-width, auto);
  color: var(--_code-gutter);
  white-space: nowrap;
}

.lvl {
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.msg {
  min-width: 0;
  white-space: pre;
}

.log.wrapped .msg,
.log.wrapped .stack-line {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.lvl-trace,
.lvl-debug {
  color: var(--_code-gutter);
}

.lvl-info,
.lvl-notice {
  color: var(--_info);
}

.lvl-warn {
  color: var(--_warning);
}

.lvl-error,
.lvl-fatal {
  color: var(--_danger);
}

.entry.level-warn {
  border-left-color: color-mix(in srgb, var(--_warning) 60%, transparent);
  background: color-mix(in srgb, var(--_warning) 6%, transparent);
}

.entry.level-error {
  border-left-color: var(--_danger);
  background: color-mix(in srgb, var(--_danger) 8%, transparent);
}

.entry.level-fatal {
  border-left-color: var(--_danger);
  background: color-mix(in srgb, var(--_danger) 15%, transparent);
}

.entry.level-fatal .lvl {
  padding: 0 4px;
  border-radius: 3px;
  background: var(--_danger);
  color: var(--_code-bg-solid);
}

.entry.level-trace .msg,
.entry.level-debug .msg {
  color: color-mix(in srgb, var(--_code-fg) 72%, var(--_code-bg-solid));
}

/* ---------- Structured fields ---------- */

.fields {
  display: inline;
  margin-left: var(--_space-2);
}

.field {
  display: inline-block;
  margin: 1px 6px 1px 0;
  padding: 0 6px;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_code-fg) 7%, transparent);
  white-space: nowrap;
}

.field-key {
  color: var(--_syntax-attr);
}

.field-key::after {
  content: '=';
  color: var(--_code-gutter);
}

.field-value {
  color: var(--_syntax-string);
}

/* ---------- Stack traces ---------- */

.stack {
  grid-column: -2 / -1;
  display: grid;
  margin: 2px 0 4px;
  padding-left: var(--_space-3);
  border-left: 1px solid color-mix(in srgb, var(--_code-gutter) 50%, transparent);
  color: color-mix(in srgb, var(--_code-fg) 80%, var(--_code-bg-solid));
}

.stack-line {
  white-space: pre;
}

.stack-more {
  justify-self: start;
  margin-top: 4px;
  padding: 1px 8px;
  border: 1px dashed color-mix(in srgb, var(--_code-gutter) 60%, transparent);
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_accent-fg);
  font: inherit;
  cursor: pointer;
}

mark.match {
  border-radius: 2px;
  background: var(--_highlight);
  color: inherit;
}

mark.match.current {
  background: var(--_highlight-current);
}

/* ---------- Level buttons ---------- */

.level-chip {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 8px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg-muted);
  font: 600 11px/1 var(--_font-mono);
  cursor: pointer;
  transition:
    background-color var(--_duration-fast) var(--_easing),
    opacity var(--_duration-fast) var(--_easing);
}

.level-chip[aria-pressed='false'] {
  opacity: 0.45;
  text-decoration: line-through;
}

.level-chip .chip-count {
  color: var(--_fg);
  font-variant-numeric: tabular-nums;
}

.level-chip.level-error,
.level-chip.level-fatal {
  border-color: color-mix(in srgb, var(--_danger) 45%, var(--_border));
  color: var(--_danger);
}

.level-chip.level-warn {
  border-color: color-mix(in srgb, var(--_warning) 45%, var(--_border));
  color: var(--_warning);
}

.level-chip.level-info,
.level-chip.level-notice {
  color: var(--_info);
}

.level-chip:hover {
  background: color-mix(in srgb, var(--_fg) 6%, transparent);
}

/* ---------- Edit mode ---------- */

.log-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

.vt[data-fullscreen] .log-edit {
  display: grid;
  flex: 1 1 auto;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 0;
}

.vt[data-fullscreen] .log-edit > .editor-body {
  max-height: none;
}
`;var m=["trace","debug","info","notice","warn","error","fatal"],V={trace:"trace",verbose:"trace",vrb:"trace",trc:"trace",finest:"trace",finer:"trace",debug:"debug",dbg:"debug",fine:"debug",info:"info",information:"info",informational:"info",inf:"info",notice:"notice",ntc:"notice",warn:"warn",warning:"warn",wrn:"warn",error:"error",err:"error",erro:"error",severe:"error",failure:"error",fatal:"fatal",crit:"fatal",critical:"fatal",alert:"fatal",emerg:"fatal",emergency:"fatal",panic:"fatal",ftl:"fatal"},Y={V:"trace",D:"debug",I:"info",W:"warn",E:"error",F:"fatal"},z=2e4,J=1e3,G="Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec",ee=new RegExp([String.raw`\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(?::\d{2}(?:[.,]\d{1,9})?)?(?:\s?(?:Z|[+-]\d{2}:?\d{2}|UTC))?`,String.raw`\d{2}\/(?:${G})\/\d{4}:\d{2}:\d{2}:\d{2}(?: [+-]\d{4})?`,String.raw`(?:${G}) {1,2}\d{1,2} \d{2}:\d{2}:\d{2}`,String.raw`\d{2}:\d{2}:\d{2}(?:[.,]\d{1,9})?`].join("|")),S=new RegExp(String.raw`^\[?(${ee.source})\]?\s*`),te=/\u001b\[[\d;:]*m/g;function re(s,e){if(!s.includes("\x1B"))return s.slice(e.length);let t=e.replace(/[\s:|-]+$/,""),r=0,i=0;for(;r<s.length&&i<t.length;){if(s[r]==="\x1B"){let n=s.indexOf("m",r);if(n<0)break;r=n+1;continue}r+=1,i+=1}for(;s[r]==="\x1B";){let n=s.indexOf("m",r);if(n<0)break;r=n+1}return s.slice(r).replace(/^[\s:|-]+/,"")}var ie=new RegExp(String.raw`^(?:`+String.raw`\[\s*([A-Za-z]{3,13})\s*\]|`+String.raw`<([A-Za-z]{3,13})>|`+String.raw`(?:level|lvl|severity)[=:]\s*"?([A-Za-z]{3,13})"?|`+String.raw`([A-Z]{3,13})(?=[\s:|\]\-]|$)`+String.raw`)\s*[:|\-]?\s*`);function g(s){if(typeof s=="number"&&Number.isFinite(s))return s>=60?"fatal":s>=50?"error":s>=40?"warn":s>=30?"info":s>=20?"debug":"trace";if(typeof s!="string")return null;let e=s.trim().toLowerCase();return/^\d+$/.test(e)?g(Number(e)):Object.hasOwn(V,e)?V[e]:null}function k(s,e){for(let t of e)if(t in s&&s[t]!==null&&s[t]!==void 0)return[t,s[t]];return null}function C(s){if(typeof s=="string")return s;try{return JSON.stringify(s)??String(s)}catch{return String(s)}}function se(s){if(!/^\s*\{/.test(s)||!/\}\s*$/.test(s))return null;let e;try{e=JSON.parse(s)}catch{return null}if(!e||typeof e!="object"||Array.isArray(e))return null;let t=e,r=new Set,i=k(t,["time","timestamp","@timestamp","ts","date","datetime","t"]),n=k(t,["level","lvl","severity","levelname","log.level","loglevel"]),l=k(t,["msg","message","event","text","log"]);for(let o of[i,n,l])o&&r.add(o[0]);return{time:i?ne(i[1]):"",level:n?g(n[1]):null,message:l?C(l[1]):"",fields:Object.entries(t).filter(([o])=>!r.has(o)&&!(o==="v"&&t.v===0)).slice(0,50).map(([o,a])=>[o,C(a)]),format:"json"}}function ne(s){if(typeof s=="number"&&Number.isFinite(s)){let e=s<1e11?s*1e3:s,t=new Date(e);return Number.isNaN(t.getTime())?String(s):t.toISOString()}return C(s)}function U(s){if(!/^\s*[\w.@-]+=/.test(s))return null;let e=[],t=/([\w.@-]+)=("(?:[^"\\]|\\.)*"|\S*)/g,r,i=0;for(;(r=t.exec(s))!==null;){let c=r[2],h=c.startsWith('"')?c.slice(1,-1).replace(/\\(.)/g,"$1"):c;if(e.push([r[1],h]),i+=r[0].length,e.length>60)break}if(e.length<2||i<s.replace(/\s/g,"").length*.6)return null;let n=c=>e.find(([h])=>c.includes(h.toLowerCase())),l=n(["time","ts","timestamp","t","date"]),o=n(["level","lvl","severity"]),a=n(["msg","message","event"]);return!o&&!a?null:{time:l?.[1]??"",level:o?g(o[1]):null,message:a?.[1]??"",fields:e.filter(c=>c!==l&&c!==o&&c!==a),format:"logfmt"}}function X(s){let e=s,t="",r=S.exec(e);r&&(t=r[1],e=e.slice(r[0].length));let i=null,n=e.includes("\x1B")?e.replace(te,""):e,l=/^([VDIWEF])(?:\/|(?=\d{4} ))/.exec(n);if(l)i=Y[l[1]];else{let o=n.slice(0,120);for(let a=0,c=0;a<o.length&&c<4;c+=1){let h=ie.exec(o.slice(a));if(h){let T=g(h[1]??h[2]??h[3]??h[4]);if(T){i=T,a===0&&(e=re(e,h[0]));break}}let L=o.indexOf(" ",a);if(L<0)break;a=L+1}}return{time:t,level:i,message:e,fields:[],format:"text"}}function oe(s,e,t){return e?/^\s+\S/.test(s)&&!/^\s*\{/.test(s)||/^(?:at |Caused by:|Traceback |\.\.\. \d+ more|During handling of)/.test(s)||e.more.length&&/^[\w.$]+(?:Error|Exception|Exit|Interrupt)\b/.test(s)?!0:!t||e.time===""||S.test(s)||/^\s*\{/.test(s)?!1:!(U(s)??X(s)).level:!1}var u=class{constructor(){this.entries=[],this.lineNumber=0,this.partial="",this.timestamped=0,this.lines=0}push(e,t=!1){let r=Math.max(0,this.entries.length-1),i=(this.partial+e).split(/\r?\n/);this.partial=t?"":i.pop()??"";for(let n of i)this.add(n.length>z?n.slice(0,z):n);return r}add(e){if(this.lineNumber+=1,!e.trim()){let n=this.entries[this.entries.length-1];n?.more.length&&n.more.length<J&&n.more.push("");return}this.lines+=1,S.test(e)&&(this.timestamped+=1);let t=this.entries[this.entries.length-1],r=this.timestamped*2>=this.lines;if(oe(e,t,r)){t.more.length<J&&t.more.push(e);return}let i=se(e)??U(e)??X(e);this.entries.push({...i,line:this.lineNumber,more:[]})}};function b(s){let e=Object.fromEntries([...m,"none"].map(t=>[t,0]));for(let t of s)e[t.level??"none"]+=1;return e}var Z=["full","short","none"],E={trace:"TRACE",debug:"DEBUG",info:"INFO",notice:"NOTICE",warn:"WARN",error:"ERROR",fatal:"FATAL",none:"OTHER"},P=class extends F{static type="log";static fromData=D;static dataAttributes=Object.freeze(["label"]);static componentAttributes=Object.freeze(["levels","level-filter","follow","time","fields","colors","line-numbers","wrap","collapse","max-entries"]);static presets={simple:{fields:!0,colors:!0,wrap:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,fields:!0,colors:!0,wrap:!0,"level-filter":!0,"line-numbers":!0}};static styles=[A,N,B,j];static keepCarriageReturns=!0;static allowEmpty=!0;constructor(){super(),this.parser=new u,this.parsedText="",this.levelFilter=null,this.query="",this.expanded=new Set,this.list=null,this.body=null,this.rendered=0,this.lastChunk=null,this.chunkCount=0,this.matchCount=0,this.following=null,this.chips=new Map,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.reset()}attributeChangedCallback(e,t,r){e==="levels"&&(this.levelFilter=null),e==="follow"&&(this.following=null),super.attributeChangedCallback(e,t,r)}reset(){this.parser=new u,this.parsedText="",this.expanded.clear()}model(){let e=this.text??"";return this.parsedText!==e&&(this.parsedText&&e.startsWith(this.parsedText)?this.parser.push(e.slice(this.parsedText.length)):(this.reset(),this.parser.push(e,!0)),this.parsedText=e,this.trim()),this.parser.entries}trim(){let e=v(this.getAttribute("max-entries"),{min:100,max:1e6,fallback:5e4}),t=this.parser.entries;return t.length<=e?!1:(t.splice(0,t.length-Math.floor(e*.9)),this.rendered=0,!0)}get entries(){return this.model().map(e=>({...e,fields:[...e.fields],more:[...e.more]}))}get counts(){return b(this.model())}get hiddenLevels(){if(this.levelFilter)return this.levelFilter;let e=this.getAttribute("levels");if(!e)return new Set;let t=new Set(e.toLowerCase().split(/[\s,]+/));return new Set([...m,"none"].filter(r=>!t.has(r)))}get follow(){return this.following??this.feature("follow")}visible(e){if(this.hiddenLevels.has(e.level??"none"))return!1;if(!this.query)return!0;let t=this.query.toLowerCase();return e.message.toLowerCase().includes(t)||e.time.toLowerCase().includes(t)||e.fields.some(([r,i])=>`${r}=${i}`.toLowerCase().includes(t))||e.more.some(r=>r.toLowerCase().includes(t))}write(e){let t=String(e??"").replace(/\r\n/g,`
`);if(!t)return;let r=`${this.content??""}${t}`;if(this.text=r,this._content=r,!this.list||this.editing){this.requestRender();return}let i=this.parser.entries.length,n=Math.max(0,i-1);this.model(),this.rendered===0&&i>0?this.renderList():(this.list.querySelector(`[data-index="${n}"]`)?.remove(),this.rendered=Math.min(this.rendered,n),this.appendRows()),this.updateChips(),this.follow&&this.scrollToEnd()}clear(){this.content=""}scrollToEnd(){let e=this.body;e&&(e.scrollTop=e.scrollHeight)}renderContent(e){let t=this.t,r=d("div",{class:"panel"}),i=[];if(this.editing){let o=this.createEditor();r.classList.add("log-edit"),this.body=d("div",{class:"body log-body log-preview",part:"body preview"}),r.append(d("div",{class:"body editor-body",part:"body source"},o.element),this.body),i=this.historyButtons(o)}else this.body=d("div",{class:"body log-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||t("log")},on:{scroll:()=>this.onScroll()}}),r.append(this.body);this.renderList();let n={run:o=>(this.query=o.slice(0,$).trim(),this.renderList(),this.changed(),{total:this.matchCount,capped:this.matchCount>=q}),go:o=>{let a=this.list?.querySelectorAll("mark.match")??[];for(let h of a)h.classList.remove("current");let c=a[o];c&&(c.classList.add("current"),c.scrollIntoView({block:"nearest",inline:"nearest"}))},clear:()=>{this.query="",this.renderList()}},l=[...this.feature("level-filter")&&!this.editing?this.levelChips():[],this.searchButton(n),...i,this.editing?null:R({icon:"follow",label:t("followLog"),key:"follow",part:"follow-button",pressed:this.follow,onClick:()=>{this.following=!this.follow,this.render(),this.following&&this.scrollToEnd()}}),this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("app.log"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>this.text??"",t("copy")):null];e.append(...this.chrome({badge:"",actions:l}),r),this.editor?.align(),this.follow&&requestAnimationFrame(()=>this.scrollToEnd())}onScroll(){let e=this.body;if(!e)return;let t=e.scrollHeight-e.scrollTop-e.clientHeight<24;t!==this.follow&&(this.following!==null||this.feature("follow"))&&(this.following=t,this.root.querySelector('[data-focus-key="follow"]')?.setAttribute("aria-pressed",String(t)))}levelChips(){let e=b(this.model());this.chips.clear();let t=this.hiddenLevels;return["fatal","error","warn","notice","info","debug","trace","none"].filter(i=>e[i]>0).map(i=>{let n=d("button",{class:`level-chip level-${i}`,part:"level-filter",attrs:{type:"button","aria-pressed":String(!t.has(i)),"data-focus-key":`level-${i}`,title:this.t("levelToggle",{level:E[i]})},on:{click:()=>this.toggleLevel(i)}},d("span",{class:"chip-name",text:E[i]}),d("span",{class:"chip-count",text:p(e[i],this.locale)}));return this.chips.set(i,n),n})}updateChips(){if(!this.feature("level-filter"))return;let e=b(this.parser.entries);if(Object.entries(e).some(([r,i])=>i>0&&!this.chips.has(r))){let r=this.body?.scrollTop??0;this.render(),this.body&&(this.body.scrollTop=r);return}for(let[r,i]of this.chips){let n=i.querySelector(".chip-count");n&&(n.textContent=p(e[r],this.locale))}}toggleLevel(e){let t=new Set(this.hiddenLevels);t.has(e)?t.delete(e):t.add(e),this.levelFilter=t,this.chips.get(e)?.setAttribute("aria-pressed",String(!t.has(e))),this.renderList(),this.changed()}changed(){let e=[...m,"none"].filter(t=>!this.hiddenLevels.has(t));y(this,x.FILTER_CHANGE,{levels:e,query:this.query,shown:this.list?.querySelectorAll("[data-index]").length??0})}renderList(){let e=this.body;if(!e)return;let t=this.model();this.matchCount=0,this.rendered=0,this.lastChunk=null,this.chunkCount=0;let r=w(this.getAttribute("time"),Z,"full");this.list=d("div",{class:["log",this.feature("wrap")?"wrapped":"",this.feature("line-numbers")?"numbered":"",r==="none"?"no-time":""].filter(Boolean).join(" "),part:"log",attrs:{role:"list","aria-label":this.heading||this.t("log")}});let i=1,n=0;for(let l of t){i=Math.max(i,l.line);let o=r==="short"?Q(l.time):l.time;n=Math.max(n,Math.min(40,o.length))}this.list.style.setProperty("--_digits",String(String(i).length)),this.list.style.setProperty("--_time-width",`${n}ch`),e.replaceChildren(this.list),this.appendRows(),this.list.querySelector("[data-index]")||e.append(d("div",{class:"empty",part:"empty",text:t.length?this.t("logNoMatch"):this.t("empty")}))}appendRows(){let e=this.list;if(!e)return;let t=this.parser.entries,r=this.rendered,i=[];for(let l=r;l<t.length;l+=1)this.visible(t[l])&&i.push(l);if(this.rendered=t.length,!i.length)return;e.parentElement?.querySelector(":scope > .empty")?.remove();let n=(l,o)=>{let a=document.createDocumentFragment();for(let c of o)a.append(this.row(t[c],c));l.appendChild(a)};if(i.length+e.childElementCount<I&&!this.chunkCount){n(e,i);return}for(let l=0;l<i.length;l+=f){let o=i.slice(l,l+f),a=d("div",{class:"chunk",attrs:{role:"presentation"}});a.style.setProperty("--_chunk-lines",String(o.length*1.3)),e.append(a),this.chunkCount+=1,this.chunkCount===1||l+f>=i.length?n(a,o):(a.setAttribute("data-pending",""),M(a,()=>{a.removeAttribute("data-pending"),n(a,o),this.highlightQuery(a)}))}}row(e,t){let r=e.level??"none",i=d("div",{class:`entry level-${r}`,part:`entry entry-${r}`,attrs:{role:"listitem","data-index":t}});this.feature("line-numbers")&&i.append(d("span",{class:"num",attrs:{"aria-hidden":"true","data-n":e.line}}));let n=w(this.getAttribute("time"),Z,"full");if(n!=="none"){let o=n==="short"?Q(e.time):e.time;i.append(d("span",{class:"time",part:"time",text:o,attrs:{title:e.time&&o!==e.time?e.time:null}}))}i.append(d("span",{class:`lvl lvl-${r}`,part:"level",text:e.level?E[r]:""}));let l=d("span",{class:"msg",part:"message"});if(this.addText(l,e.message),this.feature("fields")&&e.fields.length){let o=d("span",{class:"fields"});for(let[a,c]of e.fields)o.append(d("span",{class:"field",part:"field"},d("span",{class:"field-key",text:a}),d("span",{class:"field-value",text:c.length>300?`${c.slice(0,300)}\u2026`:c})));l.append(o)}return i.append(l),e.more.length&&i.append(this.stack(e)),this.query&&(this.matchCount+=1,this.highlightQuery(i)),i}stack(e){let t=v(this.getAttribute("collapse"),{min:0,max:1e4,fallback:6}),r=t===0||e.more.length<=t+1||this.expanded.has(e),i=r?e.more:e.more.slice(0,t),n=d("div",{class:"stack",part:"stack"});for(let l of i){let o=d("span",{class:"stack-line"});this.addText(o,l),n.append(o)}return r||n.append(d("button",{class:"stack-more",text:this.t("showMoreLines",{count:p(e.more.length-t,this.locale)}),attrs:{type:"button"},on:{click:()=>{this.expanded.add(e),n.replaceWith(this.stack(e))}}})),n}addText(e,t){if(!t.includes("\x1B")||!this.feature("colors")){e.append(t.includes("\x1B")?le(t):t);return}for(let r of _(t)[0]??[])e.append(W(r))}highlightQuery(e){if(!this.query)return;let t=this.query.toLowerCase(),r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),i=[];for(let n=r.nextNode();n;n=r.nextNode())n.parentElement?.closest("button, .num")||i.push(n);for(let n of i){let l=n,o=(l.nodeValue??"").toLowerCase().indexOf(t);for(;o>=0;){let a=l.splitText(o),c=a.splitText(t.length),h=d("mark",{class:"match",part:"match"});a.replaceWith(h),h.append(a),l=c,o=(l.nodeValue??"").toLowerCase().indexOf(t)}}}createEditor(){return this.editor?.destroy(),this.editor=new H({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!1,highlightLimit:O().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>y(this,x.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.renderList(),150)}};function Q(s){let e=/(\d{2}:\d{2}(?::\d{2}(?:[.,]\d{1,3})?)?)/.exec(s);return e?e[1]:s}function le(s){return(_(s)[0]??[]).map(e=>e.text).join("")}export{P as a};
//# sourceMappingURL=chunk-MIKJFJXU.js.map
