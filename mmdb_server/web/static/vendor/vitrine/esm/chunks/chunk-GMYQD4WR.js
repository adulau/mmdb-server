/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{I as z,Q as y,T as P,X as G,c as m,d as w,e as S,l as o,m as C,n as E,o as j,t as L,u as I}from"./chunk-DNNVKOIB.js";import{h as O,l as b,q as d}from"./chunk-2IDMCIF6.js";var W=`/*
 * Tags. Customize with --vt-tag-* properties, ::part(tag), and the per-tag parts
 * ::part(tag-<value>) and ::part(tag-kind-<kind>).
 */
.tags-body {
  --_tag-gap: var(--vt-tag-gap, 6px);
  --_tag-height: var(--vt-tag-height, 26px);
  padding: var(--_space-3);
  background: var(--_surface);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_tag-gap);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  height: var(--_tag-height);
  padding: 0 10px;
  border: 1px solid var(--vt-tag-border, var(--_border));
  border-radius: var(--vt-tag-radius, var(--_radius-full));
  background: var(--vt-tag-bg, var(--_surface-sunken));
  color: var(--vt-tag-fg, var(--_fg));
  font-family: var(--_font-ui);
  font-size: var(--vt-tag-font-size, 13px);
  font-weight: 500;
  line-height: 1;
}

.tag.colored {
  border-color: color-mix(in srgb, var(--_tag-color) 45%, var(--_border));
  background: color-mix(in srgb, var(--_tag-color) 14%, var(--_surface));
}

/* Color is never the only signal: the label stays in the regular text color. */
.tag.colored::before,
.swatch {
  content: '';
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: var(--_radius-full);
  background: var(--_tag-color);
}

.tag.disabled {
  opacity: 0.6;
}

.tag.armed {
  box-shadow: 0 0 0 2px var(--_danger);
}

.tag-label {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tag-prefix {
  margin-right: 1px;
  color: var(--_fg-muted);
}

.tag-count {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.tag-link,
.tag-button {
  display: inline-flex;
  min-width: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
}

.tag-link:hover .tag-label,
.tag-button:hover .tag-label {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.tag-remove.btn {
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: -5px;
  border-radius: var(--_radius-full);
}

.tag-remove .icon {
  width: 12px;
  height: 12px;
}

/* Larger hit area on touch screens without changing the look. */
@media (pointer: coarse) {
  .tag-remove.btn {
    width: 18px;
    height: 18px;
  }

  .tag-remove.btn::after {
    content: '';
    position: absolute;
    inset: -13px;
  }
}

.appearance-outline .tag {
  background: transparent;
}

.appearance-text .tag {
  height: auto;
  padding: 0;
  border: 0;
  background: none;
}

.appearance-text .tag-prefix {
  color: var(--_accent-fg);
}

.tags-empty {
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

/* ---------- Editing ---------- */

.field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_tag-gap);
  min-height: 40px;
  padding: 6px 8px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  cursor: text;
}

.field:focus-within {
  border-color: var(--_accent);
  box-shadow: 0 0 0 1px var(--_accent);
}

.field .tag-list {
  display: contents;
}

.tag-input {
  flex: 1 1 10ch;
  min-width: 10ch;
  height: var(--_tag-height);
  padding: 0 2px;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--_fg);
  font-family: var(--_font-ui);
  font-size: 14px;
}

.tag-input::placeholder {
  color: var(--_fg-muted);
  opacity: 1;
}

.listbox {
  max-height: 280px;
  margin: 6px 0 0;
  padding: 4px;
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  box-shadow: var(--_shadow);
  list-style: none;
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 4px;
  color: var(--_fg);
  cursor: pointer;
}

.option:hover,
.option[data-active] {
  background: var(--_accent-soft);
}

.option[aria-disabled='true'] {
  opacity: 0.55;
  cursor: default;
}

.option .check {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 16px;
  color: var(--_accent-fg);
}

.option .check .icon,
.option.create .icon {
  width: 14px;
  height: 14px;
}

.option[aria-selected='true'] .option-label {
  font-weight: 600;
}

.option.create {
  color: var(--_accent-fg);
}

.option-text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
}

.option-label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.option-description {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.option-count {
  margin-left: auto;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.group-label {
  padding: 8px 8px 4px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.tags-status {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--_space-2);
  margin-top: 6px;
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}

.tags-message {
  color: var(--_danger);
}

/* ---------- Browse panel ---------- */

.browse {
  margin-top: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.browse-head {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-2);
  border-bottom: 1px solid var(--_border);
}

.browse-filter {
  flex: 1 1 auto;
  min-width: 0;
  height: 30px;
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: inherit;
}

.browse-count {
  flex: none;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.browse-list {
  max-height: 320px;
  padding: 4px 8px 8px;
  overflow: auto;
}

.browse-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 180px), 1fr));
  gap: 2px 12px;
  padding: 4px 0;
}

.browse-group .group-label {
  grid-column: 1 / -1;
  padding-left: 4px;
}

.browse-option {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
}

.browse-option:hover {
  background: var(--_accent-soft);
}

.browse-option input {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--_accent);
}

.browse > .text-btn {
  margin: 0 var(--_space-2) var(--_space-2);
}

.vt[data-fullscreen] .tags-body {
  flex: 1 1 auto;
  overflow: auto;
}

.browse-option .option-count {
  margin-left: 0;
}
`;var U=1e5,q=200;function x(n,t){if(n==null)return"";let e=/[\u0000-\u001f\u007f]/g;return String(n).replace(e," ").trim().slice(0,t)}function H(n){if(typeof n!="string"||n.length>60)return;let t=n.trim();if(!/[;{}<>\\]|url\(|var\(|expression/i.test(t)&&!(typeof CSS<"u"&&CSS.supports&&!CSS.supports("color",t)))return t}function D(n){return n.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)}function $(n){if(typeof n=="string"||typeof n=="number"){let c=x(n,q);return c?{value:c,label:c}:null}if(!n||typeof n!="object"||Array.isArray(n))return null;let t=n,e=x(t.value??t.label??t.name,q);if(!e)return null;let s={value:e,label:x(t.label??t.name??e,q)||e},i=H(t.color);i&&(s.color=i);let r=x(t.group,100);r&&(s.group=r);let a=x(t.description,300);a&&(s.description=a),typeof t.count=="number"&&Number.isFinite(t.count)&&(s.count=t.count);let l=typeof t.kind=="string"?D(t.kind):"";return l&&(s.kind=l),typeof t.href=="string"&&t.href.trim()&&j(t.href)&&(s.href=t.href.trim()),t.disabled===!0&&(s.disabled=!0),s}function f(n,t){if(!Array.isArray(n))return[];let e=[],s=new Set;for(let i of n.slice(0,U)){let r=$(i);if(!r)continue;let a=p(r.value,t);s.has(a)||(s.add(a),e.push(r))}return e}function K(n,t){if(!n.trim())return{value:[],options:[]};let e=JSON.parse(n);if(Array.isArray(e))return{value:f(e,t),options:[]};if(e&&typeof e=="object")return{value:f(e.value??e.selected??e.tags??[],t),options:f(e.options??[],t)};throw new SyntaxError('Expected an array of tags or an object with "value" and "options".')}function p(n,t){let e=n.trim().normalize("NFC");return t?e:e.toLocaleLowerCase()}function Q(n,{separators:t,prefix:e}){let s=[...t].map(r=>r===`
`?"\\n":r.replace(/[\\\]^-]/g,"\\$&")).join(""),i=e?new RegExp(`[${s}\\s]+`):new RegExp(`[${s}\\n]+`);return n.split(i).map(r=>r.trim()).map(r=>e&&r.startsWith(e)?r.slice(e.length):r).map(r=>r.trim()).filter(Boolean)}function R(n,t){let e=n.map(s=>s.value);return t==="lines"?e.join(`
`):t==="csv"?e.map(s=>/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s).join(","):JSON.stringify(e)}function F(n,t,e){let s=t.trim().toLocaleLowerCase();if(!s)return{tags:n.slice(0,e),total:n.length};let i=[],r=[],a=0;for(let l of n){let c=l.label.toLocaleLowerCase();(c.includes(s)||l.value.toLocaleLowerCase().includes(s)||(l.description??"").toLocaleLowerCase().includes(s))&&(a+=1,c.startsWith(s)?i.length<e&&i.push(l):r.length<e&&r.push(l))}return{tags:[...i,...r].slice(0,e),total:a}}var M=50,_=200,X=250,v=Object.freeze({CHANGE:"vt-change",ADD:"vt-tag-add",REMOVE:"vt-tag-remove",CREATE:"vt-tag-create",CLICK:"vt-tag-click"}),V=class extends G{static type="tags";static formAssociated=!0;static componentAttributes=Object.freeze(["name","value-format","required","disabled","allow-create","max-tags","maxlength","minlength","pattern","separators","prefix","case-sensitive","options-src","suggest-src","browse","counts","clickable","clear","appearance"]);static presets={simple:{"allow-create":!0},full:{header:!0,dot:!0,copy:!0,browse:!0,counts:!0,clear:!0,fullscreen:!0,"allow-create":!0}};static styles=[W];static allowEmpty=!0;static upgradeProperties=["content","value","options","suggest"];constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.selected=[],this.initial=[],this.contentOptions=[],this.propertyOptions=[],this.remoteOptions=[],this.createdOptions=[],this.suggestions=[],this.dataError=null,this.query="",this.listOpen=!1,this.activeIndex=-1,this.browseOpen=!1,this.browseQuery="",this.browseLimit=_,this.formDisabled=!1,this.removeArmed=!1,this._suggest=null,this.suggestAbort=null,this.optionsAbort=null,this.suggestTimer=void 0,this.listId=E("listbox"),this.hintId=E("hint"),this.parts={field:null,chips:null,input:null,list:null,status:null,browse:null},this.message="",this.messageTimer=void 0}get value(){return this.selected.map(t=>t.value)}set value(t){let e=typeof t=="string"?k(t):t;this.selected=f(e,this.caseSensitive).map(s=>this.findOption(s.value)??s),this.updateForm(),this._connected&&this.refresh()}get tags(){return this.selected.map(t=>({...t}))}get options(){return this.allOptions().map(t=>({...t}))}set options(t){let e=typeof t=="string"?k(t):t;this.propertyOptions=f(e,this.caseSensitive),this._connected&&this.refresh()}get suggest(){return this._suggest}set suggest(t){this._suggest=typeof t=="function"?t:null}get caseSensitive(){return m(this.getAttribute("case-sensitive"))===!0}get prefix(){return(this.getAttribute("prefix")??"").trim().slice(0,3)}get editable(){return this.editing&&!this.formDisabled&&m(this.getAttribute("disabled"))!==!0}get maxTags(){return w(this.getAttribute("max-tags"),{min:1,max:1e5,fallback:1/0})}contentChanged(){this.dataError=null;try{let{value:t,options:e}=K(this.text??"",this.caseSensitive);this.contentOptions=e,this.selected=t.map(s=>this.findOption(s.value)??s),this.initial=[...this.selected]}catch(t){this.dataError=t,this.selected=[],this.contentOptions=[],queueMicrotask(()=>this.setError(new Error(this.t("invalidTags"),{cause:t})))}this.updateForm()}allOptions(){let t=new Set,e=[];for(let s of[this.propertyOptions,this.contentOptions,this.remoteOptions,this.createdOptions])for(let i of s){let r=p(i.value,this.caseSensitive);t.has(r)||(t.add(r),e.push(i))}return e}findOption(t){let e=p(t,this.caseSensitive),s=i=>p(i.value,this.caseSensitive)===e||p(i.label,this.caseSensitive)===e;return this.allOptions().find(s)??this.suggestions.find(s)}isSelected(t){let e=p(t.value,this.caseSensitive);return this.selected.some(s=>p(s.value,this.caseSensitive)===e)}connectedCallback(){super.connectedCallback(),this.loadOptions()}disconnectedCallback(){this.suggestAbort?.abort(),this.optionsAbort?.abort(),clearTimeout(this.suggestTimer),super.disconnectedCallback()}attributeChangedCallback(t,e,s){t==="options-src"&&e!==s&&this._connected&&this.loadOptions(),(t==="value-format"||t==="required")&&this.updateForm(),super.attributeChangedCallback(t,e,s)}loadOptions(){this.optionsAbort?.abort();let t=this.getAttribute("options-src");if(!t)return;let e=new AbortController;this.optionsAbort=e;let s=O();L(t,{allowRemote:m(this.getAttribute("allow-remote"))===!0,maxSize:s.maxSize,timeout:s.fetchTimeout,signal:e.signal}).then(i=>{this.remoteOptions=f(k(i),this.caseSensitive),this.refresh()},i=>{I(i)||console.warn("[vitrine] Could not load options-src.",i)})}updateForm(){if(!this.internals)return;let t=S(this.getAttribute("value-format"),["json","csv","lines"],"json"),e=m(this.getAttribute("disabled"))===!0;this.internals.setFormValue(e?null:R(this.selected,t)),m(this.getAttribute("required"))===!0&&!this.selected.length?this.internals.setValidity({valueMissing:!0},this.t("tagsRequired"),this.parts.input??void 0):this.internals.setValidity({})}formResetCallback(){this.selected=[...this.initial],this.updateForm(),this.refresh()}formDisabledCallback(t){this.formDisabled=t,this.requestRender()}addTag(t){return t.disabled?"tagDisabled":this.isSelected(t)?"tagDuplicate":this.selected.length>=this.maxTags?"tagLimit":(this.selected=[...this.selected,t],b(this,v.ADD,{tag:{...t}}),this.changed([t],[]),null)}removeTag(t){if(t.disabled)return;let e=p(t.value,this.caseSensitive),s=this.selected.length;this.selected=this.selected.filter(i=>p(i.value,this.caseSensitive)!==e),this.selected.length!==s&&(b(this,v.REMOVE,{tag:{...t}}),this.changed([],[t]))}toggleTag(t){this.isSelected(t)?this.removeTag(t):this.report(this.addTag(t),t.label)}clearAll(){let t=this.selected.filter(e=>!e.disabled);if(t.length){this.selected=this.selected.filter(e=>e.disabled);for(let e of t)b(this,v.REMOVE,{tag:{...e}});this.changed([],t)}}changed(t,e){this.removeArmed=!1,this.updateForm(),b(this,v.CHANGE,{value:this.value,added:t.map(s=>({...s})),removed:e.map(s=>({...s}))}),t.length===1?this.announce(this.t("tagAdded",{tag:t[0].label})):e.length===1&&this.announce(this.t("tagRemoved",{tag:e[0].label})),this.refresh()}addFromText(t){let e=this.getAttribute("separators")??",;";for(let s of Q(t,{separators:e,prefix:this.prefix})){let i=this.findOption(s);this.report(i?this.addTag(i):this.create(s),s)}}create(t){if(!this.feature("allow-create"))return"tagNotAllowed";let e=t.trim(),s=w(this.getAttribute("maxlength"),{min:1,max:200,fallback:50}),i=w(this.getAttribute("minlength"),{min:1,max:200,fallback:1});if(e.length>s)return"tagTooLong";if(e.length<i)return"tagInvalid";let r=this.compiledPattern();if(r&&!r.test(e))return"tagInvalid";let a=$(e);if(!a)return"tagInvalid";if(!b(this,v.CREATE,{tag:{...a}}))return"tagRefused";let c=this.addTag(a);return c||this.createdOptions.push(a),c}compiledPattern(){let t=this.getAttribute("pattern");if(!t||t.length>500)return null;try{return new RegExp(`^(?:${t})$`,"u")}catch{return console.warn("[vitrine] Invalid pattern attribute on <vt-tags>."),null}}report(t,e){if(!t)return;let s=this.t,i=t==="tagLimit"?s("tagLimit",{max:d(this.maxTags,this.locale)}):s(t,{tag:e});this.announce(i),this.showMessage(i)}renderContent(t){if(this.dataError){t.append(...this.chrome(null),P(this.t("errorTitle"),this.t("invalidTags")));return}let e=this.editable;t.classList.toggle("tags-editing",e);let s=o("div",{class:"tags-body",part:"body"});if(this.parts.chips=this.renderChips(),e){let r=this.renderInput();this.parts.input=r,this.parts.field=o("div",{class:"field",part:"field",on:{click:a=>a.target===this.parts.field&&r.focus()}},this.parts.chips,r),this.parts.list=o("ul",{class:"listbox",part:"listbox",attrs:{id:this.listId,role:"listbox","aria-multiselectable":"true","aria-label":this.t("suggestions")}}),this.parts.list.addEventListener("pointerdown",a=>a.preventDefault()),this.parts.status=o("div",{class:"tags-status",part:"tags-status",attrs:{id:this.hintId}}),s.append(this.parts.field,this.parts.list,this.parts.status),this.browseOpen&&(this.parts.browse=this.renderBrowse(),s.append(this.parts.browse))}else this.parts.field=null,this.parts.input=null,this.parts.list=null,s.append(this.parts.chips);let i=[e&&this.feature("browse")&&this.allOptions().length?y({icon:"list",label:this.t("browseTags"),key:"browse",part:"browse-button",pressed:this.browseOpen,onClick:()=>{this.browseOpen=!this.browseOpen,this.render()}}):null,e&&this.feature("clear")?y({icon:"close",label:this.t("clearTags"),key:"clear",part:"clear-button",onClick:()=>this.clearAll()}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")?this.copyButton(()=>R(this.selected,"json"),this.t("copy")):null];t.append(...this.chrome({badge:"",actions:i}),s),this.updateList(),this.updateStatus()}refresh(){if(!this.parts.chips||!this.isConnected){this.requestRender();return}let t=this.renderChips();if(this.parts.chips.replaceWith(t),this.parts.chips=t,this.updateList(),this.updateStatus(),this.parts.browse){let e=this.renderBrowse();this.parts.browse.replaceWith(e),this.parts.browse=e}}renderChips(){let t=this.editable,e=!t&&this.feature("clickable"),s=o("ul",{class:`tag-list appearance-${this.appearance}`,part:"tags",attrs:{role:"list","aria-label":this.heading||this.t("tags")}});return this.selected.forEach((i,r)=>s.append(this.renderChip(i,r,t,e))),!this.selected.length&&!t&&s.append(o("li",{class:"tags-empty",text:this.t("noTags")})),s}get appearance(){return S(this.getAttribute("appearance"),["chip","outline","text"],"chip")}renderChip(t,e,s,i){let r=["tag",`tag-${D(t.value)||"x"}`];t.kind&&r.push(`tag-kind-${t.kind}`);let a=o("li",{class:`tag${t.color?" colored":""}${t.disabled?" disabled":""}${this.removeArmed&&e===this.selected.length-1?" armed":""}`,part:r.join(" "),attrs:{"data-value":t.value,title:t.description??null}});t.color&&a.style.setProperty("--_tag-color",t.color);let l=o("span",{class:"tag-label",part:"tag-label"},this.prefix?o("span",{class:"tag-prefix",text:this.prefix}):null,t.label);if(!s&&t.href){let c=o("a",{class:"tag-link",attrs:{href:t.href}},l);/^(?:#|\/(?!\/))/.test(t.href)||c.setAttribute("rel","noopener noreferrer"),a.append(c)}else i?a.append(o("button",{class:"tag-button",attrs:{type:"button"},on:{click:()=>b(this,v.CLICK,{tag:{...t}})}},l)):a.append(l);if(t.count!==void 0&&this.feature("counts")&&a.append(o("span",{class:"tag-count",part:"tag-count",text:d(t.count,this.locale)})),s&&!t.disabled){let c=y({icon:"close",label:this.t("removeTag",{tag:t.label}),key:`remove-${e}`,part:"tag-remove",onClick:()=>{this.removeTag(t),this.parts.input?.focus()}});c.classList.add("tag-remove"),a.append(c)}return a}renderInput(){let t=this.t,e=this.selected.length>=this.maxTags,s=o("input",{class:"tag-input",part:"input",attrs:{type:"text",role:"combobox","aria-autocomplete":"list","aria-expanded":"false","aria-controls":this.listId,"aria-describedby":this.hintId,"aria-label":this.heading||t("addTag"),placeholder:e?t("tagLimit",{max:d(this.maxTags,this.locale)}):this.getAttribute("placeholder")??(this.prefix?`${this.prefix}${t("tagPlaceholder")}`:t("addTag")),autocomplete:"off",autocapitalize:"off",spellcheck:"false",enterkeyhint:"enter",maxlength:2e3,"data-focus-key":"tag-input"}});return s.value=this.query,s.addEventListener("input",()=>this.onInput(s)),s.addEventListener("keydown",i=>this.onKeyDown(i,s)),s.addEventListener("paste",i=>{let r=i.clipboardData?.getData("text")??"";[...(this.getAttribute("separators")??",;")+`
`+(this.prefix?" 	":"")].some(l=>r.includes(l))&&(i.preventDefault(),this.addFromText(s.value+r),s.value="",this.query="",this.refresh())}),s.addEventListener("focus",()=>this.open()),s.addEventListener("blur",()=>{this.listOpen=!1,this.removeArmed=!1,this.updateList()}),s}onInput(t){let e=t.value,s=this.getAttribute("separators")??",;",i=this.prefix?`${s} 	`:s,r=e.slice(-1);r&&i.includes(r)&&e.trim().length>1&&(this.addFromText(e),e="",t.value=""),this.query=e,this.removeArmed=!1,this.activeIndex=e.trim()?0:-1,this.open(),this.requestSuggestions()}onKeyDown(t,e){let s=this.listItems();switch(t.key){case"ArrowDown":case"ArrowUp":{if(t.preventDefault(),this.listOpen=!0,!s.length){this.updateList();return}let i=t.key==="ArrowDown"?1:-1;this.activeIndex=(this.activeIndex+i+s.length+(this.activeIndex<0&&i<0?1:0))%s.length,this.updateList();return}case"Home":case"End":if(!this.listOpen||!s.length||e.value)return;t.preventDefault(),this.activeIndex=t.key==="Home"?0:s.length-1,this.updateList();return;case"Enter":{if(t.isComposing)return;let i=s[this.activeIndex];(i||e.value.trim())&&t.preventDefault(),i?this.choose(i):e.value.trim()&&(this.addFromText(e.value),e.value="",this.query="",this.refresh());return}case"Escape":this.listOpen?(t.preventDefault(),this.listOpen=!1,this.updateList()):e.value&&(t.preventDefault(),e.value="",this.query="",this.refresh());return;case"Backspace":if(e.value||!this.selected.length)return;t.preventDefault(),this.removeArmed?this.removeTag(this.selected[this.selected.length-1]):(this.removeArmed=!0,this.announce(this.t("pressAgainToRemove",{tag:this.selected[this.selected.length-1].label})),this.refresh());return;default:}}open(){this.listOpen=!0,this.updateList()}typedQuery(){let t=this.query.trim();return this.prefix&&t.startsWith(this.prefix)?t.slice(this.prefix.length):t}listItems(){let t=this.typedQuery(),e=F(this.allOptions(),t,M).tags,s=new Set(e.map(a=>p(a.value,this.caseSensitive))),i=this.suggestions.filter(a=>!s.has(p(a.value,this.caseSensitive))),r=[...e,...i].slice(0,M).map(a=>({type:"option",tag:a}));return t&&this.feature("allow-create")&&!this.findOption(t)&&r.push({type:"create",text:t}),r}choose(t){t.type==="create"?this.report(this.create(t.text),t.text):this.toggleTag(t.tag),this.parts.input&&(this.parts.input.value="",this.query=""),this.activeIndex=-1,this.refresh()}updateList(){let t=this.parts.list,e=this.parts.input;if(!t||!e)return;let s=this.listOpen?this.listItems():[];this.activeIndex>=s.length&&(this.activeIndex=s.length-1),t.replaceChildren();let i=null;s.forEach((l,c)=>{l.type==="option"&&l.tag.group&&l.tag.group!==i&&(i=l.tag.group,t.append(o("li",{class:"group-label",part:"group",attrs:{role:"presentation"},text:i}))),t.append(this.renderOption(l,c))});let r=s.length>0;t.hidden=!r,e.setAttribute("aria-expanded",String(r));let a=t.querySelector("[data-active]");a?(e.setAttribute("aria-activedescendant",a.id),a.scrollIntoView({block:"nearest"})):e.removeAttribute("aria-activedescendant")}renderOption(t,e){let s=e===this.activeIndex,i=o("li",{class:`option${t.type==="create"?" create":""}`,part:s?"option option-active":"option",attrs:{id:`${this.listId}-${e}`,role:"option","aria-selected":t.type==="option"?String(this.isSelected(t.tag)):"false","aria-disabled":t.type==="option"&&t.tag.disabled?"true":null,"data-active":s?"":null},on:{click:()=>this.choose(t)}});if(t.type==="create")return i.append(z("pencil"),o("span",{text:this.t("createTag",{tag:`${this.prefix}${t.text}`})})),i;let r=t.tag;return C(i,[o("span",{class:"check",attrs:{"aria-hidden":"true"}},this.isSelected(r)?z("check"):null),r.color?o("span",{class:"swatch",attrs:{"aria-hidden":"true"}}):null,o("span",{class:"option-text"},o("span",{class:"option-label",text:`${this.prefix}${r.label}`}),r.description?o("span",{class:"option-description",text:r.description}):null),r.count!==void 0&&this.feature("counts")?o("span",{class:"option-count",text:d(r.count,this.locale)}):null]),r.color&&i.style.setProperty("--_tag-color",r.color),i}updateStatus(){let t=this.parts.status;if(!t)return;let e=d(this.selected.length,this.locale),s=Number.isFinite(this.maxTags)?this.t("tagCountMax",{count:e,max:d(this.maxTags,this.locale)}):this.t(this.selected.length===1?"tagCountOne":"tagCount",{count:e});t.replaceChildren(),C(t,[o("span",{text:s}),this.message?o("span",{class:"tags-message",text:this.message}):null]);let i=this.parts.input;if(i){let r=this.selected.length>=this.maxTags;i.readOnly=r}}showMessage(t){this.message=t,clearTimeout(this.messageTimer),this.messageTimer=setTimeout(()=>{this.message="",this.updateStatus()},4e3),this.updateStatus()}requestSuggestions(){clearTimeout(this.suggestTimer),this.suggestAbort?.abort();let t=this.typedQuery(),e=this.getAttribute("suggest-src");if(!t||!this._suggest&&!e){this.suggestions.length&&(this.suggestions=[],this.updateList());return}this.suggestTimer=setTimeout(async()=>{let s=new AbortController;this.suggestAbort=s;try{let i;if(this._suggest)i=await this._suggest(t,s.signal);else{let r=(e??"").replace(/\{query\}/g,encodeURIComponent(t)),a=O();i=k(await L(r,{allowRemote:m(this.getAttribute("allow-remote"))===!0,maxSize:Math.min(a.maxSize,2e6),timeout:a.fetchTimeout,signal:s.signal}))}if(s.signal.aborted||!this.query.trim().endsWith(t))return;this.suggestions=f(i,this.caseSensitive).slice(0,M),this.updateList()}catch(i){I(i)||console.warn("[vitrine] Tag suggestions failed.",i)}},X)}renderBrowse(){let t=this.t,{tags:e,total:s}=F(this.allOptions(),this.browseQuery,this.browseLimit),i=o("input",{class:"browse-filter",attrs:{type:"search",placeholder:t("filterTags"),"aria-label":t("filterTags"),"data-focus-key":"browse-filter",autocomplete:"off"}});i.value=this.browseQuery,i.addEventListener("input",()=>{this.browseQuery=i.value,this.browseLimit=_;let h=this.renderBrowse();this.parts.browse?.replaceWith(h),this.parts.browse=h,h.querySelector(".browse-filter")?.focus();let g=h.querySelector(".browse-filter");g?.setSelectionRange(g.value.length,g.value.length)});let r=new Map,a=e.some(h=>h.group);for(let h of e){let g=h.group??(a?t("otherTags"):"");r.has(g)||r.set(g,[]),r.get(g).push(h)}let l=t("otherTags");if(a&&r.has(l)){let h=r.get(l);r.delete(l),r.set(l,h)}let c=[];for(let[h,g]of r){let T=o("div",{class:"browse-group",attrs:{role:"group","aria-label":h||t("tags")}});h&&T.append(o("div",{class:"group-label",text:h}));for(let u of g){let A=o("input",{attrs:{type:"checkbox",disabled:u.disabled||!this.isSelected(u)&&this.selected.length>=this.maxTags}});A.checked=this.isSelected(u),A.addEventListener("change",()=>this.toggleTag(u));let N=o("label",{class:"browse-option"},A,u.color?o("span",{class:"swatch",attrs:{"aria-hidden":"true"}}):null,o("span",{class:"option-label",text:`${this.prefix}${u.label}`}),u.count!==void 0&&this.feature("counts")?o("span",{class:"option-count",text:d(u.count,this.locale)}):null);u.color&&N.style.setProperty("--_tag-color",u.color),T.append(N)}c.push(T)}let B=s>e.length?o("button",{class:"text-btn",text:t("showMoreItems",{count:d(Math.min(_,s-e.length),this.locale)}),attrs:{type:"button"},on:{click:()=>{this.browseLimit+=_,this.refresh()}}}):null;return o("div",{class:"browse",part:"browse-panel"},o("div",{class:"browse-head"},i,o("span",{class:"browse-count",text:t("tagsFound",{count:d(s,this.locale)})})),o("div",{class:"browse-list"},...c,e.length?null:o("p",{class:"tags-empty",text:t("noTags")})),B)}};function k(n){try{return JSON.parse(n)}catch{return[]}}export{V as a};
//# sourceMappingURL=chunk-GMYQD4WR.js.map
