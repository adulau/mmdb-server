/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as w}from"./chunk-YCSGENO5.js";import{r as I}from"./chunk-3VQOL2NW.js";import{I as N,M as L,N as K,Q as T,U as M,X as $,b as _,d as C,e as k,l as o,n as S}from"./chunk-DNNVKOIB.js";import{h as E,k as h,l as m,m as A,q as x}from"./chunk-2IDMCIF6.js";var O=Object.freeze({timelineInvalid:"These events could not be read: {message}",timelineCount:"{count} events",timelineNoMatch:"No event matches.",timelineKinds:"Kinds",timelineAll:"All",timelineNewest:"Newest first",timelineOldest:"Oldest first",timelineCopyJson:"Copy as JSON",timelineMore:"Show more",timelineLess:"Show less",timelineKindInfo:"Info",timelineKindSuccess:"Success",timelineKindWarning:"Warning",timelineKindDanger:"Danger",timelineKindRelease:"Release",timelineKindNeutral:"Other"}),D={timelineInvalid:"Impossible de lire ces \xE9v\xE9nements : {message}",timelineCount:"{count} \xE9v\xE9nements",timelineNoMatch:"Aucun \xE9v\xE9nement ne correspond.",timelineKinds:"Types",timelineAll:"Tous",timelineNewest:"Plus r\xE9cents d\u2019abord",timelineOldest:"Plus anciens d\u2019abord",timelineCopyJson:"Copier en JSON",timelineMore:"Afficher plus",timelineLess:"Afficher moins",timelineKindInfo:"Info",timelineKindSuccess:"Succ\xE8s",timelineKindWarning:"Avertissement",timelineKindDanger:"Danger",timelineKindRelease:"Version",timelineKindNeutral:"Autre"};var j=`/*
 * Timeline: kind buttons, date headings, events with a colored marker on a vertical
 * line, and the time elapsed between events.
 */
.tl-body {
  padding: var(--_space-4) var(--_space-5);
  background: var(--_surface);
  /* Without a height limit the page scrolls, not the timeline. */
  overscroll-behavior: auto;
}

:host([max-height]) .tl-body,
.vt[data-fullscreen] .tl-body {
  overscroll-behavior: contain;
}

/* ---------- Kinds ---------- */

.kind-success {
  --_tone: var(--_success);
}

.kind-warning {
  --_tone: var(--_warning);
}

.kind-danger {
  --_tone: var(--_danger);
}

.kind-info {
  --_tone: var(--_info);
}

.kind-release {
  --_tone: var(--_accent);
}

.kind-neutral {
  --_tone: var(--_fg-muted);
}

.kind-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: var(--_space-3) var(--_space-5);
  border-bottom: 1px solid var(--_border);
  background: var(--_surface);
}

.kind-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1 var(--_font-ui);
  cursor: pointer;
  transition: border-color var(--_duration-fast) var(--_easing);
}

.kind-chip:hover {
  border-color: var(--_border-strong);
}

.kind-chip[aria-pressed='true'] {
  border-color: color-mix(in srgb, var(--_accent) 50%, var(--_border));
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-weight: 600;
}

.kind-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--_radius-full);
  background: var(--_tone);
}

.chip-count {
  color: var(--_fg-muted);
  font: 500 11px/1 var(--_font-mono);
}

/* ---------- Line and events ---------- */

.tl {
  position: relative;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}

.tl::before {
  content: '';
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 8px;
  width: 2px;
  border-radius: var(--_radius-full);
  background: var(--_border);
}

.tl-group h3 {
  margin: var(--_space-4) 0 var(--_space-2) -28px;
  padding-left: 28px;
  color: var(--_fg-muted);
  font: 600 var(--_font-size-small) / 1.4 var(--_font-ui);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.tl-group:first-child h3 {
  margin-top: 0;
}

.tl-duration {
  margin: 2px 0;
  color: var(--_fg-muted);
  font: 500 11px/1.6 var(--_font-mono);
}

.tl-event {
  position: relative;
  margin: var(--_space-2) 0;
}

.tl-dot {
  position: absolute;
  top: 14px;
  left: -25px;
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid var(--_tone);
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone) 35%, var(--_surface));
}

.tl-card {
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid color-mix(in srgb, var(--_tone) 30%, var(--_border));
  border-radius: var(--_radius);
  background: color-mix(in srgb, var(--_tone) 4%, var(--_surface));
  cursor: default;
}

.tl-card:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.tl-event.current .tl-card {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.tl-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.tl-time {
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1.4 var(--_font-mono);
}

.tl-kind {
  padding: 1px 8px;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone) 14%, transparent);
  color: var(--_fg);
  font: 600 11px/1.6 var(--_font-ui);
}

.tl-heading {
  margin: var(--_space-1) 0 0;
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.tl-title {
  color: var(--_fg);
}

a.tl-title {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--_accent-fg);
  text-decoration: none;
}

a.tl-title:hover {
  text-decoration: underline;
}

a.tl-title svg {
  width: 14px;
  height: 14px;
}

.tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: var(--_space-2);
}

.tl-tag {
  padding: 1px 8px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  color: var(--_fg-muted);
  font: 500 11px/1.6 var(--_font-mono);
}

.tl-description {
  margin-top: var(--_space-2);
}

.tl-description .plain {
  margin: 0;
  color: var(--_fg);
  white-space: pre-wrap;
}

.tl-more {
  margin-top: var(--_space-1);
  padding: 2px 0;
  border: 0;
  background: none;
  color: var(--_accent-fg);
  font: 500 var(--_font-size-small) / 1.4 var(--_font-ui);
  cursor: pointer;
}

.tl-more:hover {
  text-decoration: underline;
}

.tl > .empty {
  margin-left: -28px;
}

.tl-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

/* Markdown descriptions read as text, without the frame of a standalone element. */
vt-markdown.prose::part(container) {
  border: 0;
  background: transparent;
}

vt-markdown.prose::part(body) {
  padding: 0;
  background: transparent;
}

@media (prefers-reduced-motion: reduce) {
  .kind-chip {
    transition: none;
  }
}
`;var g=["info","success","warning","danger","release","neutral"];var p=class extends Error{},U={ok:"success",done:"success",resolved:"success",fixed:"success",added:"success",warn:"warning",changed:"warning",deprecated:"warning",error:"danger",critical:"danger",incident:"danger",removed:"danger",security:"danger",version:"release",tag:"release"};function W(r){let t=String(r??"").trim().toLowerCase();return t?g.includes(t)?t:U[t]??"neutral":"info"}function B(r){if(typeof r!="string")return"";try{let t=new URL(r.trim());return t.protocol==="https:"||t.protocol==="http:"?t.href:""}catch{return""}}var P=864e13;function y(r){if(typeof r=="number"&&Number.isFinite(r)){let i=Math.abs(r)<1e11?r*1e3:r;return Math.abs(i)<=P?i:null}if(typeof r!="string"||!r.trim())return null;let t=r.trim();if(/^\d{9,13}$/.test(t))return y(Number(t));let e=Date.parse(/^\d{4}-\d{2}-\d{2} \d/.test(t)?t.replace(" ","T"):t);return Number.isNaN(e)?null:e}function f(r){return r==null?"":typeof r=="string"?r:String(r)}function Q(r,t){let e=r.time??r.date??r.timestamp??r.at??"",i=Array.isArray(r.tags)?r.tags.map(f).filter(Boolean).slice(0,20):typeof r.tags=="string"?r.tags.split(/[\s,]+/).filter(Boolean):[];return{id:`e${t}`,title:f(r.title??r.name??r.summary).slice(0,500),description:f(r.description??r.body??r.details).slice(0,2e4),kind:W(r.kind??r.status??r.type??r.level),time:f(e),date:y(e),tags:i,link:B(r.link??r.url??r.href)}}function Y(r){let t=Array.isArray(r)?r:r&&typeof r=="object"&&Array.isArray(r.events)?r.events:null;if(!t)throw new p('The events must be a JSON array, or an object with "events".');return t.slice(0,5e3).filter(e=>e&&typeof e=="object").map((e,i)=>Q(e,i))}function Z(r){let t=[],e=null,i=new Map,s=()=>{if(!e)return;let n=/^unreleased$/i.test(e.title);t.push({id:`e${t.length}`,title:e.title,description:e.lines.join(`
`).trim(),kind:n?"neutral":"release",time:e.time,date:y(e.time),tags:e.tags,link:e.link}),e=null};for(let n of r.split(/\r?\n/)){let l=/^\[([^\]]+)\]:\s*(\S+)/.exec(n);if(l){i.set(l[1].toLowerCase(),B(l[2]));continue}let a=/^##\s+\[?([^\]\s]+)\]?(?:\s*[-–—]\s*(.+))?\s*$/.exec(n);if(a&&!n.startsWith("###")){if(s(),t.length>=5e3)break;e={title:a[1],time:(a[2]??"").trim(),lines:[],tags:[],link:""};continue}if(!e)continue;let d=/^###\s+(.+?)\s*$/.exec(n);d&&e.tags.push(d[1]),e.lines.push(n)}s();for(let n of t)n.link||=i.get(n.title.toLowerCase())??"";if(!t.length)throw new p('No "## [version] - date" heading was found.');return t}function H(r){let t=r.trim();if(!t)return[];if(/^[[{]/.test(t)){let e;try{e=JSON.parse(t)}catch(i){throw new p(i instanceof Error?i.message:String(i))}return Y(e)}return Z(r)}function z(r,t){let e=r.every(s=>s.date!==null),i=e?[...r].sort((s,n)=>s.date-n.date):[...r];return!e&&r.some(s=>s.kind==="release")&&i.reverse(),t==="newest"?i.reverse():i}function q(r){let t={};for(let e of r)t[e.kind]=(t[e.kind]??0)+1;return t}function J(r){let t=Math.round(Math.abs(r)/1e3);if(t<60)return`${t} s`;let e=Math.round(t/60);if(e<60)return`${e} min`;let i=Math.floor(e/60);if(i<48)return e%60?`${i} h ${e%60} min`:`${i} h`;let s=Math.round(i/24);if(s<60)return`${s} d`;let n=Math.round(s/30.44);return n<24?`${n} mo`:`${Math.round(s/365.25)} y`}A({en:O,fr:D});var tt=["newest","oldest"],et=["day","month","year","none"],R=class extends ${static type="timeline";static componentAttributes=Object.freeze(["order","group","kinds","kind-filter","durations","markdown","collapse"]);static presets={simple:{durations:!0,markdown:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,durations:!0,markdown:!0,"kind-filter":!0}};static styles=[_,w,j];constructor(){super(),this.parsed=null,this.kindChoice=null,this.orderChoice=null,this.query="",this.matchCount=0,this.opened=new Set,this.panelId=S("panel"),this.listHost=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.opened.clear()}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,events:H(t),error:null}}catch(e){this.parsed={text:t,events:[],error:e instanceof Error?e:new p(String(e))}}return this.parsed}get events(){return structuredClone(this.parse().events)}get order(){return this.orderChoice??k(this.getAttribute("order"),tt,"newest")}get grouping(){let t=this.parse().events.some(e=>e.kind==="release");return k(this.getAttribute("group"),et,t?"month":"day")}get shownKinds(){if(this.kindChoice!==null)return this.kindChoice?new Set([this.kindChoice]):null;let t=this.getAttribute("kinds");return t?.trim()?new Set(t.toLowerCase().split(/[\s,]+/)):null}visible(t){let e=this.shownKinds;if(e&&!e.has(t.kind))return!1;if(!this.query)return!0;let i=this.query.toLowerCase();return[t.title,t.description,t.time,t.kind,...t.tags].some(s=>s.toLowerCase().includes(i))}renderContent(t){let e=this.t,{events:i,error:s}=this.parse(),n=o("div",{class:"panel",attrs:{id:this.panelId}}),l=o("div",{class:"body tl-body",part:"body"});s?l.append(M(e("timelineInvalid",{message:s.message}))):i.length?(this.listHost=o("ol",{class:"tl",part:"timeline"}),l.append(this.listHost),this.renderList()):l.append(o("div",{class:"empty",part:"empty",text:e("empty")}));let a=[];if(this.editing){let u=this.createEditor();n.classList.add("tl-edit"),n.append(o("div",{class:"body editor-body",part:"body source"},u.element),l),a=this.historyButtons(u)}else n.append(l);let d={run:u=>(this.query=u.slice(0,K).trim(),this.renderList(),this.filterChanged(),{total:this.matchCount,capped:this.matchCount>=L}),go:u=>{let v=this.listHost?.querySelectorAll(".tl-event")??[];for(let F of v)F.classList.remove("current");v[u]?.classList.add("current"),v[u]?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.renderList()}},c=/^\s*[[{]/.test(this.text??""),b=this.order,G=[this.searchButton(d),...a,i.length&&!this.editing?T({icon:b==="newest"?"sort-down":"sort-up",label:e(b==="newest"?"timelineNewest":"timelineOldest"),key:"order",part:"order-button",onClick:()=>{this.orderChoice=b==="newest"?"oldest":"newest",this.render()}}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(c?"timeline.json":"CHANGELOG.md"),c?"application/json":"text/markdown"):null,this.feature("copy")?this.copyButton(()=>JSON.stringify(this.visibleEvents(),null,2),e("timelineCopyJson")):null],V=i.length?e("timelineCount",{count:x(i.length,this.locale)}):"";t.append(...this.chrome({badge:V,actions:G}),n),this.feature("kind-filter")&&i.length&&!s&&n.prepend(this.kindBar(i)),this.editor?.align()}visibleEvents(){return z(this.parse().events,this.order).filter(t=>this.visible(t))}kindBar(t){let e=q(t),i=o("div",{class:"kind-bar",attrs:{role:"group","aria-label":this.t("timelineKinds")}}),s=this.shownKinds,n=this.kindChoice??(s&&s.size===1?[...s][0]:""),l=(a,d)=>o("button",{class:`kind-chip${a?` kind-${a}`:""}`,part:"kind-filter",attrs:{type:"button","aria-pressed":String(n===a),"data-focus-key":`kind-${a}`},on:{click:()=>{this.kindChoice=a,this.render(),this.filterChanged()}}},a?o("span",{class:"kind-dot",attrs:{"aria-hidden":"true"}}):null,a?this.kindLabel(a):this.t("timelineAll"),o("span",{class:"chip-count",text:x(d,this.locale)}));i.append(l("",t.length));for(let a of g)e[a]&&i.append(l(a,e[a]));return i}kindLabel(t){let e=`timelineKind${t[0].toUpperCase()}${t.slice(1)}`,i=this.t(e);return i===e?t:i}filterChanged(){let t=this.shownKinds;m(this,h.FILTER_CHANGE,{kinds:t?[...t]:[...g],query:this.query,shown:this.matchCount})}renderList(){let t=this.listHost;if(!t)return;let e=this.visibleEvents();if(this.matchCount=e.length,!e.length){t.replaceChildren(o("li",{class:"empty",part:"empty",text:this.t("timelineNoMatch")}));return}let i=this.grouping,s=this.feature("durations"),n=[],l="",a=null;for(let d of e){let c=this.groupLabel(d,i);c&&c!==l&&(n.push(o("li",{class:"tl-group",part:"group",attrs:{role:"presentation"}},o("h3",{text:c}))),l=c),s&&a?.date!=null&&d.date!=null&&a.date!==d.date&&n.push(o("li",{class:"tl-duration",part:"duration",attrs:{"aria-hidden":"true"}},J(d.date-a.date))),n.push(this.eventItem(d)),a=d}t.replaceChildren(...n)}groupLabel(t,e){if(e==="none"||t.date===null)return"";let i=e==="year"?{year:"numeric"}:e==="month"?{year:"numeric",month:"long"}:{year:"numeric",month:"long",day:"numeric",weekday:"short"};return new Intl.DateTimeFormat(this.locale,i).format(t.date)}timeLabel(t){if(t.date===null)return t.time;let i=/^\d{4}-\d{2}-\d{2}$/.test(t.time.trim())?{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}:this.grouping==="day"?{hour:"2-digit",minute:"2-digit"}:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(this.locale,i).format(t.date)}eventItem(t){let e=o("div",{class:"tl-head"},o("time",{class:"tl-time",part:"time",attrs:{datetime:t.date===null?null:new Date(t.date).toISOString()}},this.timeLabel(t)),o("span",{class:"tl-kind",text:this.kindLabel(t.kind)})),i=t.link?o("a",{class:"tl-title",part:"title",attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},t.title||t.time,N("link")):o("span",{class:"tl-title",part:"title",text:t.title||t.time}),s=o("div",{class:"tl-card",attrs:{tabindex:"0","data-focus-key":`event-${t.id}`},on:{click:n=>{n.target instanceof Element&&n.target.closest("a, button")||this.select(t)},keydown:n=>{n.key==="Enter"&&n.target===n.currentTarget&&this.select(t)}}},e,o("h4",{class:"tl-heading"},i));return t.tags.length&&s.append(o("div",{class:"tl-tags"},...t.tags.map(n=>o("span",{class:"tl-tag",text:n})))),t.description&&s.append(this.description(t)),o("li",{class:`tl-event kind-${t.kind}`,part:`event event-${t.kind}`},o("span",{class:"tl-dot",part:"dot",attrs:{"aria-hidden":"true"}}),s)}description(t){let e=C(this.getAttribute("collapse"),{min:0,max:1e3,fallback:6}),i=t.description.split(`
`),s=e>0&&i.length>e+1&&!this.opened.has(t.id),n=s?i.slice(0,e).join(`
`):t.description,l=o("div",{class:"tl-description"},this.prose(n));return e>0&&i.length>e+1&&l.append(o("button",{class:"tl-more",attrs:{type:"button","aria-expanded":String(!s),"data-focus-key":`more-${t.id}`},on:{click:()=>{s?this.opened.add(t.id):this.opened.delete(t.id),this.renderList(),this.restoreFocus(`more-${t.id}`)}}},s?this.t("timelineMore"):this.t("timelineLess"))),l}prose(t){if(this.feature("markdown")&&customElements.get("vt-markdown")){let e=document.createElement("vt-markdown");return e.className="prose",e.setAttribute("images","block"),e.content=t,e}return o("p",{class:"prose plain",text:t})}select(t){m(this,h.SELECT,{event:structuredClone(t)})}createEditor(){this.editor?.destroy();let t=/^\s*[[{]/.test(this.text??"");return this.editor=new I({text:this.text??"",language:t?"json":"markdown",lineNumbers:!0,wrap:!1,highlightLimit:E().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>m(this,h.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.render()},400)}};export{R as a};
//# sourceMappingURL=chunk-24ZGDU3Z.js.map
