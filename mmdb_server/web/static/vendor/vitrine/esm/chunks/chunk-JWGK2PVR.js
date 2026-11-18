/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as k}from"./chunk-MHTQX5EH.js";import{a as R}from"./chunk-3FW46UG7.js";import{a as E}from"./chunk-YY743YSD.js";import{I as f,c as b,d as y,l as a,n as h,o as v,p as z,v as _}from"./chunk-DNNVKOIB.js";import{k as p,l as c,m as S}from"./chunk-2IDMCIF6.js";var A=`/*
 * Upload: the label (from field.css), a zone where files are dropped, and the list of files
 * with their thumbnail, size, state and progress.
 */
:host {
  margin-block: var(--vt-margin, 0 var(--_space-4));
}

.vt {
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
}

:host([theme]:not([theme='auto'])) .vt {
  padding: var(--_space-2);
  background: var(--_surface);
  border-radius: var(--_radius-sm);
}

/* ---------- Zone ---------- */

.upload-zone {
  display: grid;
  justify-items: center;
  gap: var(--_space-1);
  padding: var(--_space-5, 24px) var(--_space-4);
  border: 2px dashed var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  color: var(--_fg);
  text-align: center;
  cursor: pointer;
  transition:
    border-color 0.15s,
    background-color 0.15s;
}

.upload-zone:hover,
.upload-zone:focus-within {
  border-color: var(--_accent);
}

.upload-zone.dragging {
  border-style: solid;
  border-color: var(--_accent);
  background: linear-gradient(var(--_accent-soft), var(--_accent-soft)), var(--_surface);
}

.upload-zone.invalid {
  border-color: var(--_danger);
}

.disabled .upload-zone {
  cursor: default;
  opacity: 0.6;
}

.upload-icon {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.upload-icon .icon {
  width: 20px;
  height: 20px;
}

.upload-prompt {
  margin: 0;
}

.upload-browse {
  padding: 0;
  border: 0;
  background: none;
  color: var(--_accent-fg);
  font: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.upload-browse:focus-visible {
  border-radius: 2px;
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.upload-browse:disabled {
  cursor: default;
}

.upload-rules {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Files ---------- */

.upload-list,
.upload-refused {
  display: grid;
  gap: var(--_space-2);
  margin: var(--_space-1) 0 0;
  padding: 0;
  list-style: none;
}

.upload-file {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
  min-width: 0;
  padding: var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
}

.upload-file.error {
  border-color: var(--_danger);
}

.upload-thumb {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  object-fit: cover;
}

.upload-thumb .icon {
  width: 20px;
  height: 20px;
}

.upload-info {
  display: grid;
  flex: 1;
  gap: 2px;
  min-width: 0;
}

.upload-name {
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.upload-meta {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.upload-file.done .upload-state {
  color: var(--_accent-fg);
}

.upload-file.error .upload-state {
  color: var(--_danger);
}

.upload-progress {
  display: block;
  height: 4px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.upload-bar {
  display: block;
  width: 0;
  height: 100%;
  background: var(--_accent);
  transition: width 0.2s;
}

.upload-refused li {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-1) var(--_space-2);
  border-left: 3px solid var(--_danger);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  color: var(--_fg);
  font-size: var(--_font-size-ui);
}

.upload-refused li > .icon {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_danger);
}

.upload-refused li > span {
  flex: 1;
  overflow-wrap: anywhere;
}

@media (prefers-reduced-motion: reduce) {
  .upload-zone,
  .upload-bar {
    transition: none;
  }
}
`;var W={b:1,k:1e3,kb:1e3,ko:1e3,kib:1024,m:1e6,mb:1e6,mo:1e6,mib:1048576,g:1e9,gb:1e9,go:1e9,gib:1073741824};function x(r){if(typeof r=="number")return Number.isFinite(r)&&r>0?Math.floor(r):0;let e=/^\s*(\d+(?:[.,]\d+)?)\s*([a-z]*)\s*$/i.exec(String(r??""));if(!e)return 0;let t=W[(e[2]||"b").toLowerCase()];if(!t)return 0;let s=Math.floor(Number(e[1].replace(",","."))*t);return Number.isFinite(s)&&s>0?Math.min(s,Number.MAX_SAFE_INTEGER):0}function m(r,e="en"){let t=["byte","kilobyte","megabyte","gigabyte"],s=Math.max(0,r),i=0;for(;s>=1e3&&i<t.length-1;)s/=1e3,i+=1;try{return new Intl.NumberFormat(e,{style:"unit",unit:t[i],unitDisplay:i===0?"long":"short",maximumFractionDigits:s<10&&i>0?1:0}).format(s)}catch{return`${Math.round(s*10)/10} ${["B","kB","MB","GB"][i]}`}}function D(r){return String(r??"").split(",").map(e=>e.trim().toLowerCase()).filter(e=>/^(\.[\w.+-]+|[\w.+-]+\/(\*|[\w.+-]+))$/.test(e)).slice(0,100)}function V(r,e){if(!e.length)return!0;let t=r.name.toLowerCase(),s=(r.type||"").toLowerCase();return e.some(i=>i.startsWith(".")?t.endsWith(i):i.endsWith("/*")?s.startsWith(i.slice(0,-1)):s===i)}function F(r,e){return V(r,e.accept)?r.size===0?"empty":e.maxSize&&r.size>e.maxSize?"tooLarge":e.minSize&&r.size<e.minSize?"tooSmall":"":"type"}function M(r){let e=r.map(t=>{if(t.startsWith("."))return t.slice(1).toUpperCase();if(t.endsWith("/*"))return t.charAt(0).toUpperCase()+t.slice(1,-2);let s=t.split("/")[1]??t;return(N[s]??s).toUpperCase()});return[...new Set(e)]}var N={jpeg:"jpg","svg+xml":"svg",plain:"txt","vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","vnd.ms-excel":"xls",msword:"doc","x-zip-compressed":"zip"};function q(r){let e=(r.type||"").toLowerCase(),t=/\.([a-z0-9]+)$/i.exec(r.name)?.[1]?.toLowerCase()??"";return e.startsWith("image/")?"image":e.startsWith("video/")?"video":e.startsWith("audio/")?"audio":e==="application/pdf"||t==="pdf"?"pdf":/zip|tar|gzip|rar|7z/.test(e)||["zip","tar","gz","rar","7z"].includes(t)?"archive":e.startsWith("text/")||/json|xml|yaml|csv/.test(e)||["txt","md","csv","json","xml","yml","yaml","log"].includes(t)?"text":"file"}var L=["image/png","image/jpeg","image/gif","image/webp","image/avif"],C=8e6;var j=Object.freeze({uploadRequired:"required",uploadDrop:"Drag and drop files here, or",uploadDropOne:"Drag and drop a file here, or",uploadBrowse:"choose files",uploadBrowseOne:"choose a file",uploadDropNow:"Drop to add",uploadTypes:"{types}",uploadMaxSize:"up to {size}",uploadMaxFiles:"{count} files at most",uploadRemove:"Remove {name}",uploadRetry:"Try again",uploadCancel:"Cancel the upload of {name}",uploadWaiting:"Waiting",uploadUploading:"Uploading\u2026 {percent}%",uploadDone:"Uploaded",uploadFailed:"Upload failed",uploadAdded:"{name} added.",uploadRemoved:"{name} removed.",uploadRefused:"{name} was not added: {reason}",uploadReason_type:"this type of file is not accepted.",uploadReason_tooLarge:"it is larger than {size}.",uploadReason_tooSmall:"it is smaller than {size}.",uploadReason_empty:"it is empty.",uploadReason_tooMany:"only {count} files can be added.",uploadReason_refused:"it was refused.",uploadDismiss:"Dismiss",uploadFileCount:"{count} files",uploadValueMissing:"Add a file.",uploadPending:"Wait until the files are uploaded.",uploadHasErrors:"A file could not be uploaded: try again or remove it."}),O=Object.freeze({uploadRequired:"obligatoire",uploadDrop:"Glissez-d\xE9posez des fichiers ici, ou",uploadDropOne:"Glissez-d\xE9posez un fichier ici, ou",uploadBrowse:"choisissez des fichiers",uploadBrowseOne:"choisissez un fichier",uploadDropNow:"D\xE9posez pour ajouter",uploadTypes:"{types}",uploadMaxSize:"jusqu\u2019\xE0 {size}",uploadMaxFiles:"{count} fichiers au plus",uploadRemove:"Retirer {name}",uploadRetry:"R\xE9essayer",uploadCancel:"Annuler l\u2019envoi de {name}",uploadWaiting:"En attente",uploadUploading:"Envoi\u2026 {percent} %",uploadDone:"Envoy\xE9",uploadFailed:"\xC9chec de l\u2019envoi",uploadAdded:"{name} ajout\xE9.",uploadRemoved:"{name} retir\xE9.",uploadRefused:"{name} n\u2019a pas \xE9t\xE9 ajout\xE9 : {reason}",uploadReason_type:"ce type de fichier n\u2019est pas accept\xE9.",uploadReason_tooLarge:"il d\xE9passe {size}.",uploadReason_tooSmall:"il fait moins de {size}.",uploadReason_empty:"il est vide.",uploadReason_tooMany:"seuls {count} fichiers peuvent \xEAtre ajout\xE9s.",uploadReason_refused:"il a \xE9t\xE9 refus\xE9.",uploadDismiss:"Fermer",uploadFileCount:"{count} fichiers",uploadValueMissing:"Ajoutez un fichier.",uploadPending:"Attendez la fin de l\u2019envoi des fichiers.",uploadHasErrors:"Un fichier n\u2019a pas pu \xEAtre envoy\xE9 : r\xE9essayez ou retirez-le."});S({en:j,fr:O});var w=200,U={label:"label",hint:"hint",name:"name",required:"required",accept:"accept",multiple:"multiple",maxFiles:"max-files",maxSize:"max-size",minSize:"min-size",uploadUrl:"upload-url",uploadField:"upload-field",uploadMethod:"upload-method",withCredentials:"with-credentials",previews:"previews"},P=class extends E{static type="upload";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["name","hint","required","disabled","accept","multiple","max-files","max-size","min-size","upload-url","upload-field","upload-method","with-credentials","previews"]);static dataAttributes=Object.freeze([...new Set(Object.values(U))]);static presets={simple:{},full:{}};static styles=[R,k,A];static fromData(e){if(!_(e))return{content:""};let t={};for(let[s,i]of Object.entries(U)){if(!Object.hasOwn(e,s))continue;let o=e[s];t[i]=Array.isArray(o)?o.join(","):o}return{content:"",attributes:t}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:h("label"),input:h("files"),hint:h("hint"),error:h("error"),rules:h("rules"),browse:h("browse")},this.entries=[],this.refused=[],this.dragging=0,this.showErrors=!1,this.formDisabled=!1,this.customMessage="",this.addEventListener("invalid",e=>{e.preventDefault(),this.showErrors=!0,this.refreshState(),this.form?.querySelector(":invalid")===this&&this.focus()})}has(e){return b(this.getAttribute(e))===!0}get disabled(){return this.formDisabled||this.has("disabled")}get multiple(){return this.has("multiple")}get maxFiles(){return this.multiple?y(this.getAttribute("max-files"),{min:1,max:w,fallback:w}):1}get rules(){return{accept:D(this.getAttribute("accept")),maxSize:x(this.getAttribute("max-size")),minSize:x(this.getAttribute("min-size"))}}get uploadUrl(){let e=(this.getAttribute("upload-url")??"").trim();if(!e||!v(e))return"";try{let t=new URL(e,document.baseURI);return t.protocol!=="https:"&&t.protocol!=="http:"||!z(t.href)&&!this.has("allow-remote")?"":t.href}catch{return""}}get files(){return this.entries.map(e=>e.file)}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.refreshState(),this.internals?.reportValidity()??!0}setCustomValidity(e){this.customMessage=String(e??""),this.customMessage&&(this.showErrors=!0),this.refreshState()}focus(e){this.root.querySelector('[data-focus-key="browse"]')?.focus(e)}formResetCallback(){for(let e of this.entries)e.request?.abort();this.entries=[],this.refused=[],this.showErrors=!1,this.customMessage="",this.render()}formDisabledCallback(e){this.formDisabled=e,this.requestRender()}check(){let e=this.t;return this.disabled?{flags:{},message:""}:this.customMessage?{flags:{customError:!0},message:this.customMessage}:this.has("required")&&!this.entries.length?{flags:{valueMissing:!0},message:e("uploadValueMissing")}:this.entries.some(t=>t.status==="uploading"||t.status==="waiting")?{flags:{customError:!0},message:e("uploadPending")}:this.entries.some(t=>t.status==="error")?{flags:{customError:!0},message:e("uploadHasErrors")}:{flags:{},message:""}}refreshState(){let{flags:e,message:t}=this.check();if(this.internals){let o=this.getAttribute("name")??"",d=null;if(!this.disabled&&this.entries.length){d=new FormData;for(let l of this.entries){let u=B(l.response);l.status==="done"&&u?d.append(o,u):d.append(o,l.file,l.file.name)}}this.internals.setFormValue(d);let n=this.root.querySelector('[data-focus-key="browse"]')??void 0;this.internals.setValidity(e,t,Object.keys(e).length?n:void 0)}let s=!!t&&this.showErrors,i=this.root.getElementById(this.ids.error);i&&(i.textContent=s?t:""),this.root.querySelector(".upload-zone")?.classList.toggle("invalid",s)}renderContent(e){let t=this.t,s=this.has("required"),i=this.getAttribute("hint"),o=(this.getAttribute("label")??"").trim().slice(0,300);e.append(a("div",{class:`field upload${this.disabled?" disabled":""}`,part:"body"},o||s?a("div",{class:"field-top"},a("span",{class:"field-label",part:"label",attrs:{id:this.ids.label}},o,s?a("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,s?a("span",{class:"sr-only",text:` (${t("uploadRequired")})`}):null)):null,this.zone(),i?a("p",{class:"field-hint",part:"hint",text:i,attrs:{id:this.ids.hint}}):null,a("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}),this.refused.length?this.refusedList():null,this.entries.length?this.fileList():null)),this.refreshState(),this.drawProgress()}zone(){let e=this.t,t=!this.multiple,s=this.rules,i=[s.accept.length?e("uploadTypes",{types:M(s.accept).join(", ")}):"",s.maxSize?e("uploadMaxSize",{size:m(s.maxSize,this.locale)}):"",this.multiple&&this.maxFiles<w?e("uploadMaxFiles",{count:this.maxFiles}):""].filter(Boolean),o=a("input",{class:"sr-only",attrs:{id:this.ids.input,type:"file",tabindex:"-1","aria-hidden":"true",accept:s.accept.join(",")||null,multiple:this.multiple,disabled:this.disabled},on:{change:()=>{this.addFiles([...o.files??[]]),o.value=""}}}),d=[i.length?this.ids.rules:"",this.getAttribute("hint")?this.ids.hint:"",this.ids.error].filter(Boolean).join(" ");return a("div",{class:`upload-zone${this.dragging?" dragging":""}`,part:"zone",on:{dragenter:n=>this.dragEnter(n),dragover:n=>{!this.disabled&&$(n)&&n.preventDefault()},dragleave:()=>this.dragLeave(),drop:n=>this.dropped(n),paste:n=>{let u=[...n.clipboardData?.files??[]];u.length&&!this.disabled&&(n.preventDefault(),this.addFiles(u))},click:n=>{(n.target===n.currentTarget||n.target.closest(".upload-prompt, .upload-icon"))&&o.click()}}},o,a("span",{class:"upload-icon"},f("upload")),a("p",{class:"upload-prompt"},a("span",{text:this.dragging?e("uploadDropNow"):`${e(t?"uploadDropOne":"uploadDrop")} `}),this.dragging?null:a("button",{class:"upload-browse",part:"browse",text:e(t?"uploadBrowseOne":"uploadBrowse"),attrs:{type:"button",id:this.ids.browse,disabled:this.disabled,"aria-labelledby":this.getAttribute("label")?`${this.ids.label} ${this.ids.browse}`:null,"aria-describedby":d,"data-focus-key":"browse"},on:{click:n=>{n.stopPropagation(),o.click()}}})),i.length?a("p",{class:"upload-rules",text:i.join(" \xB7 "),attrs:{id:this.ids.rules}}):null)}fileList(){let e=this.t;return a("ul",{class:"upload-list",part:"list",attrs:{"aria-label":this.entries.length===1?this.entries[0].file.name:e("uploadFileCount",{count:this.entries.length})}},...this.entries.map(t=>this.fileView(t)))}fileView(e){let t=this.t,{file:s}=e,i=s.size?Math.min(100,Math.round(e.loaded/s.size*100)):0,o={ready:"",waiting:t("uploadWaiting"),uploading:t("uploadUploading",{percent:i}),done:t("uploadDone"),error:t("uploadFailed")},d=q(s);return a("li",{class:`upload-file ${e.status}`,part:"file",attrs:{"data-file":e.id}},e.preview?a("img",{class:"upload-thumb",part:"thumbnail",attrs:{src:e.preview,alt:""}}):a("span",{class:`upload-thumb kind-${d}`},f(d==="image"?"file-image":"file")),a("span",{class:"upload-info"},a("span",{class:"upload-name",text:s.name,attrs:{title:s.name}}),a("span",{class:"upload-meta"},m(s.size,this.locale),o[e.status]?a("span",{class:"upload-state",text:` \xB7 ${o[e.status]}`}):null),e.status==="uploading"||e.status==="waiting"?a("span",{class:"upload-progress",part:"progress",attrs:{role:"progressbar","aria-label":s.name,"aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":String(i)}},a("span",{class:"upload-bar"})):null),e.status==="error"&&!this.disabled?a("button",{class:"text-btn",text:t("uploadRetry"),attrs:{type:"button","data-focus-key":`retry-${e.id}`},on:{click:()=>this.send(e)}}):null,this.disabled?null:a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":t(e.status==="uploading"?"uploadCancel":"uploadRemove",{name:s.name}),"data-focus-key":`remove-${e.id}`},on:{click:()=>this.removeFile(e.id)}},f("close")))}refusedList(){return a("ul",{class:"upload-refused"},...this.refused.map(e=>a("li",{},f("alert"),a("span",{text:e.text}),a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":this.t("uploadDismiss"),"data-focus-key":`dismiss-${e.id}`},on:{click:()=>{this.refused=this.refused.filter(t=>t!==e),this.render(),this.focus()}}},f("close")))))}drawProgress(){for(let e of this.entries){let t=this.root.querySelector(`[data-file="${e.id}"]`);if(!t)continue;let s=e.file.size?Math.min(100,Math.round(e.loaded/e.file.size*100)):0;t.querySelector(".upload-progress")?.setAttribute("aria-valuenow",String(s)),t.querySelector(".upload-bar")?.style.setProperty("width",`${s}%`);let i=t.querySelector(".upload-state");i&&e.status==="uploading"&&(i.textContent=` \xB7 ${this.t("uploadUploading",{percent:s})}`)}}dragEnter(e){this.disabled||!$(e)||(e.preventDefault(),this.dragging+=1,this.dragging===1&&this.render())}dragLeave(){this.dragging&&(this.dragging-=1,this.dragging||this.render())}dropped(e){this.disabled||(e.preventDefault(),this.dragging=0,this.addFiles([...e.dataTransfer?.files??[]]))}addFiles(e){if(this.disabled||!e.length)return;let t=this.t,s=this.rules,i=[],o=[],d=(l,u)=>{let g=t("uploadRefused",{name:l.name,reason:u});this.refused=[...this.refused,{id:h("refused"),text:g}].slice(-10),o.push(g)},n=this.multiple?e:e.slice(0,1);for(let l of n){let u=F(l,s);if(u){d(l,t(`uploadReason_${u}`,{size:m(u==="tooSmall"?s.minSize:s.maxSize,this.locale)}));continue}if((this.multiple?this.maxFiles-this.entries.length-i.length:1)<=0){d(l,t("uploadReason_tooMany",{count:this.maxFiles}));continue}if(!c(this,p.FILE_ADD,{file:l})){d(l,t("uploadReason_refused"));continue}i.push({id:h("file"),file:l,status:"ready",loaded:0,preview:"",response:null,request:null})}if(i.length){if(!this.multiple){for(let l of this.entries)l.request?.abort(),c(this,p.FILE_REMOVE,{file:l.file});this.entries=[]}this.entries=[...this.entries,...i],o.unshift(...i.map(l=>t("uploadAdded",{name:l.file.name})))}this.showErrors=!1,this.render(),this.announce(o.join(" ")),i.length&&c(this,p.CHANGE,{files:this.files});for(let l of i)this.preview(l),this.uploadUrl&&this.send(l)}removeFile(e){let t=this.entries.findIndex(o=>o.id===e);if(t<0)return;let[s]=this.entries.splice(t,1);s.request?.abort(),s.request=null,this.render();let i=this.entries[t]??this.entries[t-1];i?this.root.querySelector(`[data-focus-key="remove-${i.id}"]`)?.focus():this.focus(),this.announce(this.t("uploadRemoved",{name:s.file.name})),c(this,p.FILE_REMOVE,{file:s.file}),c(this,p.CHANGE,{files:this.files})}clear(){for(let t of this.entries)t.request?.abort();let e=this.entries.length;this.entries=[],this.refused=[],this.render(),e&&c(this,p.CHANGE,{files:[]})}upload(){for(let e of this.entries)(e.status==="ready"||e.status==="error")&&this.send(e)}preview(e){if(b(this.getAttribute("previews"))===!1||!L.includes(e.file.type)||e.file.size>C||typeof FileReader>"u")return;let t=new FileReader;t.addEventListener("load",()=>{let s=typeof t.result=="string"?t.result:"";if(!v(s,{allowDataImage:!0})||!s.startsWith("data:image/")||!this.entries.includes(e))return;e.preview=s;let i=this.root.querySelector(`[data-file="${e.id}"] .upload-thumb`);i&&i.replaceWith(a("img",{class:"upload-thumb",part:"thumbnail",attrs:{src:s,alt:""}}))}),t.readAsDataURL(e.file)}send(e){let t=this.uploadUrl;if(!t||this.disabled)return;e.request?.abort();let s=new XMLHttpRequest,i=(this.getAttribute("upload-method")??"POST").toUpperCase()==="PUT"?"PUT":"POST";if(s.open(i,t),s.withCredentials=this.has("with-credentials"),!c(this,p.UPLOAD_START,{file:e.file,request:s}))return;e.request=s,e.status="uploading",e.loaded=0;let o=n=>{e.request===s&&(e.request=null,e.status=n,n==="done"&&(e.loaded=e.file.size),this.render(),n==="done"?c(this,p.UPLOAD_DONE,{file:e.file,status:s.status,response:e.response}):(c(this,p.UPLOAD_ERROR,{file:e.file,status:s.status}),this.announce(`${e.file.name}: ${this.t("uploadFailed")}`)))};s.upload.addEventListener("progress",n=>{e.loaded=n.loaded,this.drawProgress(),c(this,p.UPLOAD_PROGRESS,{file:e.file,loaded:n.loaded,total:n.total||e.file.size})}),s.addEventListener("load",()=>{e.response=I(s.responseText),o(s.status>=200&&s.status<300?"done":"error")}),s.addEventListener("error",()=>o("error")),s.addEventListener("timeout",()=>o("error"));let d=new FormData;d.append((this.getAttribute("upload-field")??"").trim()||"file",e.file,e.file.name),s.send(i==="PUT"?e.file:d),this.render()}};function $(r){return[...r.dataTransfer?.types??[]].includes("Files")}function I(r){let e=(r??"").trim().slice(0,1e5);if(!e)return null;try{return JSON.parse(e)}catch{return e}}function B(r){if(!r||typeof r!="object"||Array.isArray(r))return"";let e=r;for(let t of["id","url","key","path"]){let s=e[t];if(typeof s=="string"||typeof s=="number"&&Number.isFinite(s))return String(s).slice(0,2e3)}return""}export{P as a};
//# sourceMappingURL=chunk-JWGK2PVR.js.map
