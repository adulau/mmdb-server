/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as L}from"./chunk-3FW46UG7.js";import{a as I}from"./chunk-YY743YSD.js";import{E as w,H as v,I as g,e as S,l as d,n as x,o as k}from"./chunk-DNNVKOIB.js";import{k as m,l as b,m as O}from"./chunk-2IDMCIF6.js";var C=`/*
 * Menu: a button and menus above the page (fixed, placed by the element inside the window),
 * or a list of actions always shown. The frame of the other elements is not drawn.
 */
:host {
  display: inline-block;
  vertical-align: middle;
}

:host([trigger='inline']) {
  display: block;
}

/* A context menu takes no room in the page: only its menu shows, when opened. */
:host([trigger='context']) {
  display: contents;
}

.vt {
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
}

.menu-wrap {
  color: var(--_fg);
  font: 400 14px / 1.4 var(--_font-ui);
}

/* ---------- Button ---------- */

.menu-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 36px;
  padding: 0 var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 14px / 1 var(--_font-ui);
  cursor: pointer;
}

.menu-trigger .icon {
  width: 16px;
  height: 16px;
}

.menu-trigger.icon-only {
  justify-content: center;
  width: 36px;
  padding: 0;
  border-color: transparent;
  background: transparent;
}

/* The tint is laid on the surface: on a page of another theme the text stays readable. */
.menu-trigger:hover,
.menu-trigger[aria-expanded='true'] {
  background: linear-gradient(var(--_accent-soft), var(--_accent-soft)), var(--_surface);
}

.menu-trigger:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.menu-trigger:disabled {
  cursor: default;
  opacity: 0.5;
}

/* ---------- Menus ---------- */

.menu-list {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: grid;
  gap: 1px;
  min-width: 12rem;
  max-width: min(22rem, calc(100vw - 16px));
  padding: var(--_space-1);
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_surface-raised);
  box-shadow: 0 12px 32px rgb(0 0 0 / 0.18);
  overscroll-behavior: contain;
}

.menu-list.inline {
  position: static;
  max-width: none;
  box-shadow: none;
}

.menu-group {
  display: grid;
  gap: 1px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 36px;
  padding: var(--_space-1) var(--_space-2);
  border-radius: var(--_radius-sm);
  color: var(--_fg);
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

.menu-item:hover,
.menu-item:focus,
.menu-item[aria-expanded='true'] {
  outline: none;
  background: var(--_accent-soft);
}

.menu-item:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.menu-item.danger {
  color: var(--_danger);
}

.menu-item.disabled {
  color: var(--_fg-muted);
  cursor: default;
  opacity: 0.6;
}

.menu-item.disabled:hover {
  background: transparent;
}

.menu-item > .icon,
.menu-icon .icon,
.menu-mark .icon {
  flex: none;
  width: 16px;
  height: 16px;
}

.menu-icon,
.menu-mark {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 18px;
  height: 18px;
  color: var(--_fg-muted);
}

.menu-mark {
  color: var(--_accent-fg);
}

.menu-mark.radio:empty::before {
  content: '';
}

.menu-text {
  display: grid;
  flex: 1;
  min-width: 0;
}

.menu-label {
  overflow-wrap: anywhere;
}

.menu-description {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.menu-shortcut {
  flex: none;
  margin-left: var(--_space-3);
  color: var(--_fg-muted);
  font: 400 12px / 1 var(--_font-mono);
}

.menu-separator {
  height: 1px;
  margin: var(--_space-1) calc(-1 * var(--_space-1));
  background: var(--_border);
}

.menu-heading {
  padding: var(--_space-2) var(--_space-2) var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.menu-empty {
  margin: 0;
  padding: var(--_space-2);
  color: var(--_fg-muted);
}

@media (forced-colors: active) {
  .menu-item:focus,
  .menu-item:hover {
    outline: 2px solid Highlight;
  }
}
`;function u(a){return typeof a=="string"||typeof a=="number"?String(a).trim():""}function A(a){return a.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)||"item"}function M(a){let t=[{items:[],indent:-1}];for(let e of a.split(/\r?\n/)){if(!e.trim())continue;let n=e.length-e.trimStart().length,i=e.trim();for(;t.length>1&&n<=t[t.length-1].indent;)t.pop();let r=t[t.length-1];if(/^-{3,}$/.test(i)){r.items.push({type:"separator"});continue}if(i.startsWith("# ")){r.items.push({type:"heading",label:i.slice(2)});continue}let o={},s=/^\[( |x|X)\]\s*/.exec(i);s&&(o.type="checkbox",o.checked=s[1]!==" ",i=i.slice(s[0].length));let[c,h]=i.split(/\s+\|\s+/);o.label=c,h&&(o.shortcut=h);let l=[];o.items=l,r.items.push(o),t.push({items:l,indent:n})}return t[0].items}function $(a){let t=a;if(typeof a=="string"){let i=a.trim();if(!i)return[];if(i.startsWith("[")||i.startsWith("{"))try{t=JSON.parse(i)}catch{t=M(i)}else t=M(i)}if(t&&typeof t=="object"&&!Array.isArray(t)){let i=t;t=i.items??i.actions??[]}let e=new Set,n={count:0};return E(Array.isArray(t)?t:[],0,e,n,"")}function E(a,t,e,n,i){let r=[];for(let o of a){if(n.count>=500)break;let s=K(o,t,e,n,i);if(s){if(s.type==="heading"&&s.items.length){r.push({...s,items:[]},...s.items);continue}r.push(s)}}return r.filter((o,s)=>o.type!=="separator"||s>0&&s<r.length-1&&r[s-1].type!=="separator")}function K(a,t,e,n,i){let r=typeof a=="string"||typeof a=="number"?/^-{3,}$/.test(String(a).trim())?{type:"separator"}:{label:String(a)}:a&&typeof a=="object"&&!Array.isArray(a)?a:{},o=u(r.type).toLowerCase();if(o==="separator"||o==="divider"||r.separator===!0)return n.count+=1,y("separator",`sep-${n.count}`);let s=u(r.label??r.title??r.name??r.text).slice(0,200),c=u(r.group??r.radio);if(Array.isArray(r.items)&&(o==="radio"||o==="group"||o==="heading")){n.count+=1;let p=y("heading",_(`group-${A(s||c)}`,e));return p.label=s||c,p.items=E(r.items,t,e,n,o==="radio"?c||p.id:i),p}if(o==="heading"||o==="header"){if(!s)return null;n.count+=1;let p=y("heading",_(`heading-${A(s)}`,e));return p.label=s,p}if(!s)return null;n.count+=1;let h=o==="checkbox"||o==="check"?"checkbox":o==="radio"||i||c?"radio":"item",l=y(h,_(u(r.id??r.value)||A(s),e));return l.label=s,l.description=u(r.description??r.hint).slice(0,300),l.shortcut=u(r.shortcut??r.kbd??r.keys).slice(0,30),l.icon=u(r.icon).slice(0,40),l.href=u(r.href??r.url??r.link).slice(0,2e3),l.target=u(r.target)==="_blank"?"_blank":"",l.disabled=r.disabled===!0,l.danger=r.danger===!0||u(r.variant)==="danger"||u(r.tone)==="danger",l.checked=r.checked===!0||r.selected===!0,l.group=h==="radio"?c||i||"radio":"",l.value=u(r.value)||l.id,Array.isArray(r.items)&&t+1<4&&h==="item"&&(l.items=E(r.items,t+1,e,n,"")),l.items.length&&(l.href=""),l}function y(a,t){return{id:t,type:a,label:"",description:"",shortcut:"",icon:"",href:"",target:"",disabled:!1,danger:!1,checked:!1,group:"",value:"",items:[]}}function _(a,t){let e=a.slice(0,100)||"item",n=e;for(let i=2;t.has(n);i+=1)n=`${e}-${i}`;return t.add(n),n}function f(a){return a.filter(t=>t.type!=="separator"&&t.type!=="heading")}function T(a,t){for(let e of a){if(e.id===t)return e;let n=T(e.items,t);if(n)return n}return null}function D(a,t,e,n={}){let o,s;return n.side==="right"?(o=a.right+t.width+4<=e.width-8?a.right+4:a.left-t.width-4,s=a.top-4,s+t.height>e.height-8&&(s=e.height-8-t.height)):(o=n.align==="end"?a.right-t.width:a.left,s=a.bottom+4,s+t.height>e.height-8&&a.top-4-t.height>=8&&(s=a.top-4-t.height)),o=Math.min(Math.max(8,o),Math.max(8,e.width-8-t.width)),s=Math.max(8,s),{left:Math.round(o),top:Math.round(s)}}var z=Object.freeze({menuActions:"Actions",menuMore:"More actions",menuEmpty:"No action available.",menuOpensNewTab:"(opens in a new tab)"}),P=Object.freeze({menuActions:"Actions",menuMore:"Plus d\u2019actions",menuEmpty:"Aucune action disponible.",menuOpensNewTab:"(s\u2019ouvre dans un nouvel onglet)"});O({en:z,fr:P});var j=180,R=["button","icon","context","inline"],B=class extends I{static type="menu";static allowEmpty=!0;static componentAttributes=Object.freeze(["trigger","for","align","disabled"]);static dataAttributes=Object.freeze(["label","trigger","align"]);static presets={simple:{},full:{}};static styles=[L,C];static fromData(t){if(Array.isArray(t))return{content:w(t)};if(!t||typeof t!="object")return{content:typeof t=="string"?t:""};let e=t,n={};for(let i of["label","trigger","align"])Object.hasOwn(e,i)&&(n[i]=e[i]);return{content:w(Array.isArray(e.items)?e.items:[]),attributes:n}}constructor(){super(),this.ids={trigger:x("menu-button"),menu:x("menu")},this.isOpen=!1,this.path=[],this.focusId="",this.point=null,this.checks=new Map,this.radios=new Map,this.cache=null,this.returnTo=null,this.target=null,this.typeahead={text:"",at:0},this.iconSlots=!1,this.hoverTimer=void 0,this.onContext=t=>{this.disabled||(t.preventDefault(),this.openAt({left:t.clientX,top:t.clientY,right:t.clientX,bottom:t.clientY}))},this.onContextKey=t=>{if(this.disabled||!(t.key==="F10"&&t.shiftKey))return;t.preventDefault();let e=t.target.getBoundingClientRect();this.openAt({left:e.left,top:e.top,right:e.left,bottom:e.bottom})},this.onOutside=t=>{if(t.type==="keydown"){let e=t;e.key==="Escape"&&!e.defaultPrevented&&!t.composedPath().includes(this)&&this.close();return}t.type==="scroll"&&t.composedPath().includes(this)||t.type==="pointerdown"&&t.composedPath().includes(this)||this.close(t.type!=="pointerdown")}}get trigger(){return S(this.getAttribute("trigger"),R,"button")}get disabled(){let t=this.getAttribute("disabled");return t!==null&&t!=="false"}get open(){return this.isOpen}set open(t){t&&!this.isOpen?this.openAt(null):!t&&this.isOpen&&this.close(!1)}get items(){let t=this.text??"";return this.cache?.text!==t&&(this.cache={text:t,items:$(t)},this.checks.clear(),this.radios.clear()),this.withState(this.cache.items)}withState(t){return t.map(e=>({...e,checked:e.type==="checkbox"?this.checks.get(e.id)??e.checked:e.type==="radio"?this.radios.has(e.group)?this.radios.get(e.group)===e.value:e.checked:!1,items:this.withState(e.items)}))}get label(){return(this.getAttribute("label")??"").trim().slice(0,200)}connectedCallback(){super.connectedCallback(),this.attachTarget()}disconnectedCallback(){super.disconnectedCallback(),this.detachTarget(),this.stopWatching(),clearTimeout(this.hoverTimer)}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),(t==="trigger"||t==="for")&&e!==n&&this.isConnected&&(this.detachTarget(),this.attachTarget())}attachTarget(){if(this.trigger!=="context")return;let t=this.getAttribute("for");this.target=t?this.ownerDocument.getElementById(t)??null:this.parentElement,this.target?.addEventListener("contextmenu",this.onContext),this.target?.addEventListener("keydown",this.onContextKey)}detachTarget(){this.target?.removeEventListener("contextmenu",this.onContext),this.target?.removeEventListener("keydown",this.onContextKey),this.target=null}renderContent(t){let e=this.trigger,n=this.items,i=d("div",{class:`menu-wrap trigger-${e}`,part:"body"});if((e==="button"||e==="icon")&&i.append(this.triggerButton()),e==="inline")(!this.focusId||!T(n,this.focusId))&&(this.focusId=f(n)[0]?.id??""),i.append(this.menuList(n,0));else if(this.isOpen){let r=d("div",{class:"menu-layer"});r.append(this.menuList(n,0));let o=n;this.path.forEach((s,c)=>{let h=o.find(l=>l.id===s);h&&(r.append(this.menuList(h.items,c+1,h)),o=h.items)}),i.append(r)}t.append(i),this.isOpen&&e!=="inline"&&this.place()}triggerButton(){let t=this.t,e=this.trigger==="icon";return d("button",{class:`menu-trigger${e?" icon-only":""}`,part:"trigger",attrs:{type:"button",id:this.ids.trigger,disabled:this.disabled,"aria-haspopup":"menu","aria-expanded":String(this.isOpen),"aria-controls":this.isOpen?this.ids.menu:null,"aria-label":e?this.label||t("menuMore"):null,title:e?this.label||t("menuMore"):null,"data-focus-key":"trigger"},on:{click:()=>this.isOpen?this.close():this.openAt(null),keydown:n=>{let i=n.key;(i==="ArrowDown"||i==="ArrowUp")&&(n.preventDefault(),this.openAt(null,i==="ArrowUp"?"last":"first"))}}},e?g("dots-vertical"):d("span",{text:this.label||t("menuActions")}),e?null:g("chevron-down"))}menuList(t,e,n){let i=this.t,r=this.trigger==="inline",o=d("div",{class:`menu-list${r?" inline":""}`,part:"menu",attrs:{id:e===0?this.ids.menu:`${this.ids.menu}-${n?.id}`,role:"menu","aria-label":e===0?this.trigger==="button"?null:this.label||i("menuActions"):n?.label??null,"aria-labelledby":e===0&&this.trigger==="button"?this.ids.trigger:null,"data-level":String(e)},on:{keydown:c=>this.menuKey(c,t,e)}});f(t).length||o.append(d("p",{class:"menu-empty",text:i("menuEmpty"),attrs:{role:"presentation"}})),this.iconSlots=t.some(c=>c.type==="checkbox"||c.type==="radio"||c.icon&&v(c.icon));let s=o;for(let c of t)if(c.type==="separator")s=o,o.append(d("div",{class:"menu-separator",part:"separator",attrs:{role:"separator"}}));else if(c.type==="heading"){let h=`${this.ids.menu}-h-${c.id}`;o.append(d("div",{class:"menu-heading",part:"heading",text:c.label,attrs:{id:h,role:"presentation"}})),s=d("div",{class:"menu-group",attrs:{role:"group","aria-labelledby":h}}),o.append(s)}else s.append(this.itemView(c,e));return o}itemView(t,e){let n=!!t.href&&!t.disabled&&k(t.href)&&!t.items.length,i=t.items.length>0,r=i&&this.path[e]===t.id,o=["menu-item"];t.danger&&o.push("danger"),t.disabled&&o.push("disabled");let s=t.type==="checkbox"?"menuitemcheckbox":t.type==="radio"?"menuitemradio":"menuitem";return d(n?"a":"div",{class:o.join(" "),part:"item",attrs:{role:s,href:n?t.href:null,target:n&&t.target?t.target:null,rel:n&&t.target?"noopener noreferrer":null,tabindex:this.trigger==="inline"&&t.id===this.focusId?"0":"-1","aria-disabled":t.disabled?"true":null,"aria-checked":t.type==="item"?null:String(t.checked),"aria-haspopup":i?"menu":null,"aria-expanded":i?String(r):null,"aria-controls":r?`${this.ids.menu}-${t.id}`:null,"data-id":t.id,"data-focus-key":`item-${t.id}`},on:{click:h=>{h.stopPropagation(),this.activate(t,e)||h.preventDefault()},pointerenter:()=>this.hover(t,e),pointerleave:()=>clearTimeout(this.hoverTimer)}},t.type==="item"?t.icon&&v(t.icon)?d("span",{class:"menu-icon"},g(t.icon)):this.iconSlots?d("span",{class:"menu-icon"}):null:d("span",{class:`menu-mark ${t.type}`},t.checked?g("check"):null),d("span",{class:"menu-text"},d("span",{class:"menu-label",text:t.label}),t.description?d("span",{class:"menu-description",text:t.description}):null,n&&t.target?d("span",{class:"sr-only",text:` ${this.t("menuOpensNewTab")}`}):null),t.shortcut?d("kbd",{class:"menu-shortcut",part:"shortcut",text:t.shortcut}):null,i?g("chevron-right"):null)}openAt(t,e="first"){if(this.trigger==="inline"||this.disabled)return;let n=this.isOpen;n||(this.returnTo=W()),this.isOpen=!0,this.point=t,this.path=[];let i=f(this.items).filter(r=>!r.disabled);this.focusId=(e==="last"?i[i.length-1]:i[0])?.id??"",this.render(),this.focusItem(this.focusId),this.watch(),n||b(this,m.TOGGLE,{expanded:!0})}close(t=!0){if(this.isOpen){if(this.isOpen=!1,this.path=[],clearTimeout(this.hoverTimer),this.stopWatching(),this.render(),t){let e=this.trigger==="context"?this.returnTo:this.root.querySelector('[data-focus-key="trigger"]');e instanceof HTMLElement&&e.isConnected&&e.focus({preventScroll:!0})}this.returnTo=null,b(this,m.TOGGLE,{expanded:!1})}}place(){let t={width:document.documentElement.clientWidth||innerWidth,height:innerHeight},e=[...this.root.querySelectorAll(".menu-layer > .menu-list")],n=this.root.querySelector('[data-focus-key="trigger"]');e.forEach((i,r)=>{let o=i.getBoundingClientRect(),s,c="bottom";r===0?s=this.point??n?.getBoundingClientRect()??{left:0,top:0,right:0,bottom:0}:(s=e[r-1].querySelector(`[data-id="${CSS.escape(this.path[r-1])}"]`)?.getBoundingClientRect()??o,c="right");let h=this.getAttribute("align")==="end"&&!this.point?"end":"start",{left:l,top:p}=D(s,o,t,{side:c,align:h});i.style.setProperty("left",`${l}px`),i.style.setProperty("top",`${p}px`),i.style.setProperty("max-height",`${Math.max(120,t.height-p-8)}px`)})}watch(){document.addEventListener("pointerdown",this.onOutside,!0),document.addEventListener("keydown",this.onOutside),addEventListener("resize",this.onOutside),addEventListener("scroll",this.onOutside,!0)}stopWatching(){document.removeEventListener("pointerdown",this.onOutside,!0),document.removeEventListener("keydown",this.onOutside),removeEventListener("resize",this.onOutside),removeEventListener("scroll",this.onOutside,!0)}activate(t,e){if(t.disabled)return!1;if(t.items.length)return this.openSub(t,e,!0),!1;t.type==="checkbox"&&this.checks.set(t.id,!t.checked),t.type==="radio"&&this.radios.set(t.group,t.value);let n=t.type==="checkbox"?!t.checked:t.type==="radio"?!0:null,i=b(this,m.SELECT,{id:t.id,label:t.label,value:t.value,checked:n,href:t.href||null});if(!i&&t.type==="checkbox"&&this.checks.set(t.id,t.checked),t.type==="checkbox"||t.type==="radio")return this.focusId=t.id,this.render(),this.focusItem(t.id),!1;if(this.trigger==="inline")return i;let r=i&&!!t.href&&k(t.href);return this.close(!r),i}openSub(t,e,n){this.path=[...this.path.slice(0,e),t.id],this.focusId=n?f(t.items).find(i=>!i.disabled)?.id??t.id:t.id,this.render(),this.focusItem(this.focusId)}hover(t,e){clearTimeout(this.hoverTimer),this.focusItem(t.id),this.focusId=t.id;let n=this.path[e];t.items.length&&n!==t.id?this.hoverTimer=setTimeout(()=>this.openSub(t,e,!1),j):!t.items.length&&this.path.length>e&&(this.hoverTimer=setTimeout(()=>{this.path=this.path.slice(0,e),this.render(),this.focusItem(t.id)},j))}focusItem(t){t&&this.root.querySelector(`[data-focus-key="item-${CSS.escape(t)}"]`)?.focus({preventScroll:!1})}menuKey(t,e,n){let i=t.target.closest?.("[data-id]");if(!(i instanceof HTMLElement)||Number(i.closest(".menu-list")?.getAttribute("data-level"))!==n)return;t.stopPropagation();let r=f(e),o=r.findIndex(h=>h.id===i.dataset.id),s=r[o],c=h=>{let l=r[(h+r.length)%r.length];this.focusId=l.id,this.trigger==="inline"&&this.render(),this.focusItem(l.id)};switch(t.key){case"ArrowDown":t.preventDefault(),c(o+1);break;case"ArrowUp":t.preventDefault(),c(o-1);break;case"Home":case"PageUp":t.preventDefault(),c(0);break;case"End":case"PageDown":t.preventDefault(),c(r.length-1);break;case"ArrowRight":s?.items.length&&!s.disabled&&(t.preventDefault(),this.openSub(s,n,!0));break;case"ArrowLeft":n>0&&(t.preventDefault(),this.closeSub(n));break;case"Escape":if(this.trigger==="inline")break;t.preventDefault(),n>0?this.closeSub(n):this.close();break;case"Tab":this.trigger!=="inline"&&this.close(!1);break;case"Enter":case" ":t.preventDefault(),s&&(i instanceof HTMLAnchorElement&&t.key==="Enter"?i.click():this.activate(s,n));break;default:t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&this.typeAhead(t.key,r,o)}}closeSub(t){let e=this.path[t-1];this.path=this.path.slice(0,t-1),this.focusId=e,this.render(),this.focusItem(e)}typeAhead(t,e,n){let i=Date.now();this.typeahead.text=i-this.typeahead.at<600?this.typeahead.text+t:t,this.typeahead.at=i;let r=this.typeahead.text.toLocaleLowerCase(),o=this.typeahead.text.length>1?n:n+1;for(let s=0;s<e.length;s+=1){let c=e[(o+s)%e.length];if(c.label.toLocaleLowerCase().startsWith(r)){this.focusId=c.id,this.trigger==="inline"&&this.render(),this.focusItem(c.id);return}}}};function W(){let a=document.activeElement;for(;a?.shadowRoot?.activeElement;)a=a.shadowRoot.activeElement;return a instanceof HTMLElement?a:null}export{B as a};
//# sourceMappingURL=chunk-6HGBVZWX.js.map
