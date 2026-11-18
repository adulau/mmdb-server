/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as I}from"./chunk-3FW46UG7.js";import{a as $}from"./chunk-YY743YSD.js";import{I as y,c as w,d as _,e as A,l as c,n as b,o as O,t as S,u as j,v as d,w as h,x as p,y as E}from"./chunk-DNNVKOIB.js";import{h as C,k as f,l as g,m as D}from"./chunk-2IDMCIF6.js";var z=`/*
 * Site search: a button for a menu and its dialog, or a field with its results under it. The
 * frame of the other elements is not drawn.
 */
:host {
  display: inline-block;
}

:host([layout='inline']) {
  display: block;
}

.vt {
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
}

/* A theme set on the element is drawn on its own background, so its text stays readable on any page. */
:host([theme]:not([theme='auto'])) .vt {
  padding: var(--_space-2);
  background: var(--_surface);
  border-radius: var(--_radius-sm);
}

/* ---------- Button ---------- */

.search-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 36px;
  padding: 0 var(--_space-2) 0 var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg-muted);
  font: 500 var(--_font-size-ui) / 1 var(--_font-ui);
  cursor: pointer;
}

.search-trigger:hover {
  border-color: var(--_accent);
  color: var(--_fg);
}

.search-trigger:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.search-trigger .icon {
  width: 16px;
  height: 16px;
}

.search-kbd,
.search-hints kbd {
  padding: 2px 6px;
  border: 1px solid var(--_border);
  border-radius: 4px;
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  font: 500 11px / 1.2 var(--_font-mono);
}

@media (max-width: 640px) {
  .search-trigger-label,
  .search-kbd {
    display: none;
  }

  .search-trigger {
    padding: 0 var(--_space-2);
  }
}

/* ---------- Dialog ---------- */

.search-dialog {
  width: min(94vw, 640px);
  max-width: none;
  margin: 10vh auto auto;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  color: var(--_fg);
  box-shadow: 0 24px 60px rgb(0 0 0 / 28%);
}

.search-dialog::backdrop {
  background: rgb(0 0 0 / 50%);
}

@media (max-width: 640px) {
  .search-dialog {
    width: 100vw;
    max-height: 100dvh;
    margin: 0;
    border-radius: 0;
  }
}

.search-box {
  position: relative;
  display: grid;
  min-width: 0;
}

.search-field {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  padding: 0 var(--_space-3);
  border-bottom: 1px solid var(--_border);
}

.search-box.inline .search-field {
  min-height: 40px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
}

.search-box.inline .search-field:focus-within {
  border-color: var(--_accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_accent) 35%, transparent);
}

.search-field > .icon {
  flex: none;
  width: 18px;
  height: 18px;
  color: var(--_fg-muted);
}

.search-input {
  flex: 1;
  min-width: 0;
  min-height: 52px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--_fg);
  font: 400 16px / 1.4 var(--_font-ui);
  outline: none;
}

.inline .search-input {
  min-height: 38px;
  font-size: 14px;
}

.search-input::-webkit-search-cancel-button,
.search-input::-webkit-search-decoration {
  appearance: none;
}

.search-esc {
  padding: 3px 7px;
  border: 1px solid var(--_border);
  border-radius: 4px;
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  font: 500 11px / 1.2 var(--_font-mono);
  cursor: pointer;
}

.search-esc:focus-visible {
  outline: 2px solid var(--_accent);
}

/* ---------- Results ---------- */

.search-popup {
  display: grid;
  min-width: 0;
}

.search-popup.hidden {
  display: none;
}

.inline .search-popup {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  left: 0;
  z-index: 30;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  box-shadow: 0 10px 28px rgb(0 0 0 / 16%);
}

.search-results {
  max-height: min(60vh, 460px);
  margin: 0;
  padding: var(--_space-2);
  overflow-y: auto;
  list-style: none;
}

.search-results:empty {
  display: none;
}

.search-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--_space-2) var(--_space-2) 4px;
  color: var(--_fg-muted);
  font: 600 var(--_font-size-small) / 1.3 var(--_font-ui);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.search-clear {
  min-height: 0;
  padding: 0 4px;
  text-transform: none;
}

.search-result {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 16px;
  align-items: center;
  gap: 2px var(--_space-2);
  padding: var(--_space-2) var(--_space-3);
  border-radius: var(--_radius-sm);
  color: var(--_fg);
  cursor: pointer;
}

.search-result[aria-selected='true'] {
  background: var(--_accent-soft);
}

.search-result > .icon {
  grid-row: 1 / span 3;
  grid-column: 2;
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
  opacity: 0;
}

.search-result[aria-selected='true'] > .icon {
  opacity: 1;
}

.search-title {
  font: 600 14px / 1.4 var(--_font-ui);
  overflow-wrap: anywhere;
}

.search-extract,
.search-where {
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.45 var(--_font-ui);
  overflow-wrap: anywhere;
}

mark {
  padding: 0 1px;
  border-radius: 2px;
  background: var(--_highlight);
  color: inherit;
}

.search-empty {
  padding: var(--_space-4) var(--_space-3);
  color: var(--_fg-muted);
  font: 400 14px / 1.5 var(--_font-ui);
  text-align: center;
}

.search-hints {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  border-top: 1px solid var(--_border);
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.4 var(--_font-ui);
}

@media (pointer: coarse) {
  .search-result {
    padding-block: var(--_space-3);
  }

  .search-hints {
    display: none;
  }
}
`;var Z=2e4,tt=5e3,K=140,et=8;function q(s){return Array.from(s,rt)}var R=new Map;function rt(s){let t=s.charCodeAt(0);if(t<128)return t>=65&&t<=90?String.fromCharCode(t+32):s;let e=R.get(s);if(e===void 0){let r=s.normalize("NFKD").replace(/[̀-ͯ]/g,"");e=(Array.from(r)[0]??s).toLowerCase(),R.size<5e3&&R.set(s,e)}return e}function m(s){return/^[\x00-\x7f]*$/.test(s)?s.toLowerCase():q(s).join("")}function L(s){return m(s).split(/[\s,;:/|"'()[\]{}<>]+/).filter(Boolean).slice(0,et)}function T(s){if(!s.trim())return{ok:!0,entries:[]};let t;try{t=JSON.parse(s)}catch(o){return{ok:!1,error:"json",message:o instanceof Error?o.message:""}}let e=["entries","items","pages","results","documents","hits"],r=Array.isArray(t)?t:d(t)?e.map(o=>t[o]).find(Array.isArray):null;if(!r)return{ok:!1,error:"shape",message:e.map(o=>`"${o}"`).join(", ")};let i=[],a=new Set;for(let o of r){if(i.length>=Z)break;let n=d(o)?st(o):null;!n||a.has(n.id)||(a.add(n.id),i.push(n))}return{ok:!0,entries:i}}function st(s){let t=p(s,["title","name","label","t"],300);if(!t)return null;let e=E(s.url??s.href??s.link??s.u)??"",r=p(s,["id","uuid","slug","key","objectID"],200)||e||t,i=Array.isArray(s.keywords??s.tags)?s.keywords??s.tags:[];return{id:r,title:t,url:e,section:p(s,["section","group","category","type","p"],100),content:p(s,["content","description","summary","excerpt","text","body"],tt),keywords:i.slice(0,50).map(a=>h(a,100)).filter(Boolean),featured:s.featured===!0}}function P(s,t){if(s===t)return!0;if(Math.abs(s.length-t.length)>1)return!1;let e=0;for(;e<s.length&&e<t.length&&s[e]===t[e];)e+=1;return s.length===t.length?s.slice(e+1)===t.slice(e+1)?!0:s[e]===t[e+1]&&s[e+1]===t[e]&&s.slice(e+2)===t.slice(e+2):s.length>t.length?s.slice(e+1)===t.slice(e):s.slice(e)===t.slice(e+1)}function U(s,t){let e=s.join(""),r=[];s.forEach((o,n)=>{for(let l=0;l<o.length;l+=1)r.push(n)});let i=[];for(let o of t)for(let n=e.indexOf(o);n!==-1&&i.length<200;n=e.indexOf(o,n+o.length))i.push([r[n],r[n+o.length-1]+1]);i.sort((o,n)=>o[0]-n[0]);let a=[];for(let o of i){let n=a[a.length-1];n&&o[0]<=n[1]?n[1]=Math.max(n[1],o[1]):a.push([...o])}return a}function it(s,t,e){return t.includes(e)?10:t.some(r=>r.startsWith(e))?8:s.includes(e)?5:e.length>=4&&t.some(r=>P(r,e)||r.length>e.length&&P(r.slice(0,e.length),e))?3:0}var H=new WeakMap;function ot(s){let t=H.get(s);if(!t){let e=m(s.title);t={title:e,parts:e.split(/[^\p{L}\p{N}]+/u).filter(Boolean),keywords:m(s.keywords.join(" ")),section:m(s.section),content:m(s.content)},H.set(s,t)}return t}function at(s,t){let{title:e,parts:r,keywords:i,section:a,content:o}=ot(s),n=0;for(let l of t){let u=Math.max(it(e,r,l),i.includes(l)?6:0,a.includes(l)?3:0,o.includes(l)?2:0);if(!u)return 0;n+=u}return t.length>1&&e.includes(t.join(" "))&&(n+=5),n+(s.featured?1:0)-e.length/500}function nt(s,t){let e=Array.from(s),r=q(s),i=U(r,t);if(!e.length)return{extract:"",ranges:[]};let a=i.length?i[0][0]:0,o=Math.max(0,a-40);for(;o>0&&o>a-60&&e[o-1]!==" ";)o-=1;let n=Math.min(e.length,o+K);for(;n<e.length&&n<o+K+20&&e[n]!==" ";)n+=1;let l=o>0?"\u2026":"",u=n<e.length?"\u2026":"",N=l?1-o:-o,Y=i.filter(([v,k])=>v>=o&&k<=n).map(([v,k])=>[v+N,k+N]);return{extract:`${l}${e.slice(o,n).join("").trim()}${u}`,ranges:Y}}function F(s,t,e=12){let r=L(t);return r.length?s.map(i=>({entry:i,score:at(i,r)})).filter(i=>i.score>0).sort((i,a)=>a.score-i.score).slice(0,e).map(({entry:i,score:a})=>x(i,a,r)):[]}function x(s,t,e){let{extract:r,ranges:i}=nt(s.content,e);return{entry:s,score:t,title:U(q(s.title),e),extract:r,extractRanges:i}}function B(s,t){return s.url?s.url:!t||!t.includes("{id}")?null:E(t.replace(/\{id\}/g,encodeURIComponent(s.id)))}var X=Object.freeze({searchOpen:"Search",searchPlaceholder:"Search\u2026",searchResults:"Results",searchRecent:"Recent searches",searchSuggested:"Suggested",searchClearRecent:"Clear",searchNone:'No results for "{query}".',searchCount:"{count} results",searchOne:"1 result",searchLoading:"Loading\u2026",searchFailed:"The search could not load.",searchHintMove:"to move",searchHintOpen:"to open",searchHintClose:"to close",searchClose:"Close the search",searchOther:"Other"}),G=Object.freeze({searchOpen:"Rechercher",searchPlaceholder:"Rechercher\u2026",searchResults:"R\xE9sultats",searchRecent:"Recherches r\xE9centes",searchSuggested:"Suggestions",searchClearRecent:"Effacer",searchNone:"Aucun r\xE9sultat pour \xAB {query} \xBB.",searchCount:"{count} r\xE9sultats",searchOne:"1 r\xE9sultat",searchLoading:"Chargement\u2026",searchFailed:"La recherche n'a pas pu se charger.",searchHintMove:"pour se d\xE9placer",searchHintOpen:"pour ouvrir",searchHintClose:"pour fermer",searchClose:"Fermer la recherche",searchOther:"Autres"});D({en:X,fr:G});var ct=["dialog","inline"],J=6,lt=220,M=typeof navigator<"u"&&/Mac|iPhone|iPad/.test(navigator.platform),W=class extends ${static type="search";static allowEmpty=!0;static componentAttributes=Object.freeze(["index-src","search-src","url-template","shortcut","layout","limit","recent","group","link-target"]);static presets={simple:{},full:{}};static styles=[I,z];constructor(){super(),this.ids={dialog:b("search"),list:b("results"),input:b("query")},this.query="",this.isOpen=!1,this.results=[],this.active=0,this.loaded=null,this.loading=!1,this.failed=!1,this.cache=null,this.request=null,this.timer=void 0,this.input=null,this.list=null,this.dialogNode=null,this.onShortcut=this.onShortcut.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onShortcut)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onShortcut),this.request?.abort(),clearTimeout(this.timer)}get layout(){return A(this.getAttribute("layout"),ct,"dialog")}get entries(){let t=this.loaded??this.text??"";if(this.cache?.text!==t){let e=T(t);this.cache={text:t,entries:e.ok?e.entries:[]}}return this.cache.entries}get storageKey(){return`vitrine-search:${this.getAttribute("index-src")??this.getAttribute("search-src")??"default"}`}get shortcuts(){let t=(this.getAttribute("shortcut")??"mod+k /").trim().toLowerCase();return t==="none"||!t?[]:t.split(/\s+/).slice(0,4).map(e=>{let r=e.split("+");return{key:r.pop()??"",mod:r.includes("mod")||r.includes("ctrl")||r.includes("meta"),shift:r.includes("shift"),alt:r.includes("alt")}})}get shortcutLabel(){let t=this.shortcuts[0];if(!t)return"";let e=t.key.length===1?t.key.toUpperCase():t.key;return t.mod?M?`\u2318${e}`:`Ctrl ${e}`:e==="/"?"/":e}onShortcut(t){if(t.defaultPrevented)return;let e=t.composedPath()[0],r=e&&(/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)||e.isContentEditable),i=M?t.metaKey:t.ctrlKey;for(let a of this.shortcuts)if(!(t.key.toLowerCase()!==a.key||i!==a.mod||t.altKey!==a.alt)&&!(a.shift!==t.shiftKey&&a.key.length===1&&/[a-z]/.test(a.key))){if(!a.mod&&r)return;t.preventDefault(),this.layout==="inline"?this.input?.focus():this.isOpen?this.close():this.open();return}}open(){if(this.layout==="inline"){this.input?.focus();return}this.isOpen||(this.isOpen=!0,this.query="",this.render(),g(this,f.TOGGLE,{expanded:!0}))}close(){this.isOpen&&(this.isOpen=!1,this.request?.abort(),this.dialogNode?.close(),this.render(),this.root.querySelector('[data-focus-key="trigger"]')?.focus(),g(this,f.TOGGLE,{expanded:!1}))}loadIndex(){let t=this.getAttribute("index-src")?.trim();if(!t||this.loaded!==null||this.loading)return;this.loading=!0,this.failed=!1;let e=C();S(t,{allowRemote:w(this.getAttribute("allow-remote"))===!0,maxSize:e.maxSize,timeout:e.fetchTimeout}).then(r=>{this.loading=!1,this.loaded=r,this.update()},r=>{this.loading=!1,this.failed=!0,console.warn("[vitrine] Could not load index-src.",r),this.update()})}renderContent(t){let e=this.layout==="inline";if(this.input=null,this.list=null,this.dialogNode=null,e){t.append(this.box(!1)),this.update();return}if(t.append(this.trigger()),!this.isOpen)return;let r=c("dialog",{class:"search-dialog",part:"dialog",attrs:{id:this.ids.dialog,"aria-label":this.getAttribute("label")||this.t("searchOpen")},on:{close:()=>this.isOpen&&this.close(),click:i=>i.target===r&&this.close()}},this.box(!0));this.dialogNode=r,t.append(r),typeof this.dialogNode.showModal=="function"?this.dialogNode.showModal():r.setAttribute("open",""),this.loadIndex(),this.update(),this.input?.focus()}trigger(){let t=this.t,e=this.getAttribute("label")||t("searchOpen"),r=this.shortcuts.map(i=>`${i.mod?M?"Meta+":"Control+":""}${i.key.toUpperCase()}`).join(" ");return c("button",{class:"search-trigger",part:"trigger",attrs:{type:"button","aria-haspopup":"dialog","aria-expanded":String(this.isOpen),"aria-keyshortcuts":r||null,"data-focus-key":"trigger"},on:{click:()=>this.open()}},y("search"),c("span",{class:"search-trigger-label",text:e}),this.shortcutLabel?c("kbd",{class:"search-kbd",part:"shortcut",text:this.shortcutLabel,attrs:{"aria-hidden":"true"}}):null)}box(t){let e=this.t,r=c("input",{class:"search-input",part:"input",attrs:{id:this.ids.input,type:"search",value:this.query,placeholder:this.getAttribute("placeholder")||e("searchPlaceholder"),role:"combobox","aria-label":this.getAttribute("label")||e("searchOpen"),"aria-autocomplete":"list","aria-controls":this.ids.list,"aria-expanded":String(t),autocomplete:"off",spellcheck:"false",enterkeyhint:"search","data-focus-key":"input"},on:{input:()=>{this.query=r.value.slice(0,200),this.active=0,this.update()},keydown:a=>this.inputKey(a),focus:()=>{t||(this.loadIndex(),this.showPopup(!0))},blur:()=>!t&&setTimeout(()=>this.showPopup(!1),120)}});this.input=r;let i=c("ul",{class:"search-results",part:"results",attrs:{id:this.ids.list,role:"listbox","aria-label":e("searchResults")}});return this.list=i,c("div",{class:`search-box${t?" in-dialog":" inline"}`},c("div",{class:"search-field"},y("search"),r,t?c("button",{class:"search-esc",text:"Esc",attrs:{type:"button","aria-label":e("searchClose")},on:{click:()=>this.close()}}):null),c("div",{class:`search-popup${t?"":" hidden"}`},i,t?this.hints():null))}hints(){let t=this.t;return c("p",{class:"search-hints",attrs:{"aria-hidden":"true"}},c("kbd",{text:"\u2191"}),c("kbd",{text:"\u2193"}),` ${t("searchHintMove")} `,c("kbd",{text:"\u21B5"}),` ${t("searchHintOpen")} `,c("kbd",{text:"Esc"}),` ${t("searchHintClose")}`)}showPopup(t){this.root.querySelector(".search-popup")?.classList.toggle("hidden",!t||!this.query&&!this.recent().length),this.input?.setAttribute("aria-expanded",String(t))}update(){if(!this.list)return;let t=this.query.trim(),e=this.getAttribute("search-src")?.trim();if(e&&t){clearTimeout(this.timer),this.timer=setTimeout(()=>this.remote(e,t),lt);return}let r=_(this.getAttribute("limit"),{min:1,max:100,fallback:12});this.results=t?F(this.entries,t,r):[],this.show()}remote(t,e){this.request?.abort();let r=new AbortController;this.request=r;let i=C(),a=_(this.getAttribute("limit"),{min:1,max:100,fallback:12});S(t.replace(/\{query\}/g,encodeURIComponent(e)),{allowRemote:w(this.getAttribute("allow-remote"))===!0,maxSize:i.maxSize,timeout:i.fetchTimeout,signal:r.signal}).then(o=>{if(r.signal.aborted)return;let n=T(o),l=L(e);this.results=n.ok?n.entries.slice(0,a).map(u=>x(u,1,l)):[],this.failed=!n.ok,this.show()},o=>{j(o)||(this.failed=!0,this.results=[],this.show())})}show(){let t=this.list,e=this.t,r=this.query.trim();if(t.replaceChildren(),!r)this.results=this.recent().map(i=>x(i,1,[])),this.results.length?this.group(t,this.results,e("searchRecent"),!0):(this.results=this.entries.filter(i=>i.featured).slice(0,8).map(i=>x(i,1,[])),this.results.length&&this.group(t,this.results,e("searchSuggested")));else if(this.results.length){let i=this.flag("group"),a=new Map;for(let o of this.results){let n=i?o.entry.section:"";a.set(n,[...a.get(n)??[],o])}this.results=[...a.values()].flat();for(let[o,n]of a)this.group(t,n,i?o||e("searchOther"):"")}else{let i=this.loading?e("searchLoading"):this.failed?e("searchFailed"):e("searchNone",{query:r});t.append(c("li",{class:"search-empty",text:i,attrs:{role:"presentation"}}))}this.active=Math.min(this.active,Math.max(0,this.results.length-1)),this.mark(),this.layout==="inline"&&this.showPopup(this.root.activeElement===this.input),r&&(this.announce(this.results.length===1?e("searchOne"):e("searchCount",{count:this.results.length})),g(this,f.SEARCH,{query:r,matches:this.results.length}))}group(t,e,r,i=!1){let a=t.querySelectorAll('[role="option"]').length;r&&t.append(c("li",{class:"search-section",attrs:{role:"presentation"}},c("span",{text:r}),i?c("button",{class:"text-btn search-clear",text:this.t("searchClearRecent"),attrs:{type:"button",tabindex:"-1"},on:{mousedown:o=>o.preventDefault(),click:()=>{this.store([]),this.update()}}}):null)),e.forEach((o,n)=>t.append(this.option(o,a+n)))}option(t,e){let{entry:r}=t;return c("li",{class:"search-result",part:"result",attrs:{id:`${this.ids.list}-${e}`,role:"option","aria-selected":"false"},on:{mousedown:i=>i.preventDefault(),click:i=>this.select(t,i.ctrlKey||i.metaKey),pointermove:()=>{this.active!==e&&(this.active=e,this.mark())}}},c("span",{class:"search-title"},...V(r.title,t.title)),t.extract?c("span",{class:"search-extract"},...V(t.extract,t.extractRanges)):null,r.section&&!this.flag("group")?c("span",{class:"search-where",text:r.section}):null,y("arrow-right"))}mark(){let t=this.list?[...this.list.querySelectorAll('[role="option"]')]:[];t.forEach((e,r)=>{e.setAttribute("aria-selected",String(r===this.active)),r===this.active&&e.scrollIntoView({block:"nearest"})}),t[this.active]?this.input?.setAttribute("aria-activedescendant",t[this.active].id):this.input?.removeAttribute("aria-activedescendant")}inputKey(t){let e=this.results.length;if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!e)return;this.active=(this.active+(t.key==="ArrowDown"?1:-1)+e)%e,this.mark()}else if(t.key==="Enter"){let r=this.results[this.active];if(!r)return;t.preventDefault(),this.select(r,t.ctrlKey||t.metaKey)}else if(t.key==="Escape"){if(t.preventDefault(),this.layout==="dialog"){this.close();return}this.query?(this.query="",this.input.value="",this.update()):this.input?.blur()}}select(t,e){let{entry:r}=t,i=B(r,this.getAttribute("url-template"));this.remember(r,i);let a=g(this,f.SELECT,{id:r.id,url:i,title:r.title,section:r.section,query:this.query.trim()});if(this.layout==="dialog"&&this.close(),!a||!i||!O(i))return;let o=A(this.getAttribute("link-target"),["_self","_blank"],"_self");e||o==="_blank"?window.open(i,"_blank","noopener,noreferrer"):location.assign(i)}recent(){if(!this.flag("recent"))return[];try{let t=JSON.parse(localStorage.getItem(this.storageKey)??"[]");return Array.isArray(t)?t.filter(d).slice(0,J).map(e=>({id:h(e.id,200),title:h(e.title,300),url:h(e.url,2e3),section:h(e.section,100),content:"",keywords:[],featured:!1})).filter(e=>e.id&&e.title&&(!e.url||O(e.url))):[]}catch{return[]}}remember(t,e){if(!this.flag("recent"))return;let r=this.recent().filter(i=>i.id!==t.id);this.store([{id:t.id,title:t.title,url:e??"",section:t.section},...r].slice(0,J))}store(t){try{t.length?localStorage.setItem(this.storageKey,JSON.stringify(t)):localStorage.removeItem(this.storageKey)}catch{}}};function V(s,t){let e=Array.from(s),r=[],i=0;for(let[a,o]of t)a<i||o>e.length||(a>i&&r.push(e.slice(i,a).join("")),r.push(c("mark",{part:"match",text:e.slice(a,o).join("")})),i=o);return i<e.length&&r.push(e.slice(i).join("")),r}export{W as a};
//# sourceMappingURL=chunk-SZP2O77I.js.map
