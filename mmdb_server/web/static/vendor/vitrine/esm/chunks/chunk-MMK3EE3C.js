/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as O}from"./chunk-VAYH6UIO.js";import{a as I}from"./chunk-QXIEPLJY.js";import{a as A}from"./chunk-QHH6BVCU.js";import{k as E}from"./chunk-E4EMJARX.js";import{r as N}from"./chunk-3VQOL2NW.js";import{I as C,Q as S,U as j,X as T,c as y,d as v,l as n,n as b}from"./chunk-DNNVKOIB.js";import{h,k as _,l as x,m as k}from"./chunk-2IDMCIF6.js";var L=`/*
 * JSON Web Tokens: the token colored by part, its validity, warnings, the decoded
 * header and payload, and the claims table.
 */
.jwt-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.jwt-token-box {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
}

.jwt-token {
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
  overflow-wrap: anywhere;
  word-break: break-all;
}

.jwt-token.raw {
  margin: 0;
  white-space: pre-wrap;
}

.part-header {
  color: var(--_syntax-keyword);
}

.part-payload {
  color: var(--_syntax-function);
}

.part-key,
.part-iv {
  color: var(--_syntax-number);
}

.part-signature {
  color: var(--_syntax-string);
}

.jwt-part.masked {
  color: var(--_fg-muted);
  letter-spacing: 0.1em;
}

.jwt-dot {
  color: var(--_fg);
  font-weight: 700;
}

.jwt-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-4);
}

.jwt-state {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  padding: 2px var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-weight: 600;
}

.jwt-state svg {
  width: 14px;
  height: 14px;
}

.jwt-state.ok {
  color: var(--_success);
}

.jwt-state.bad {
  color: var(--_danger);
}

.jwt-state.muted {
  color: var(--_fg-muted);
}

.jwt-note {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.jwt-body > .jwt-warning {
  border: 1px solid color-mix(in srgb, var(--_warning) 45%, var(--_border));
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_warning) 8%, var(--_surface));
  color: var(--_fg);
}

.jwt-section {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.jwt-title {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.section-header .jwt-title {
  color: var(--_syntax-keyword);
}

.section-payload .jwt-title {
  color: var(--_syntax-function);
}

.jwt-section .tree-body,
.jwt-text {
  margin: 0;
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
}

.jwt-text {
  padding: var(--_space-3);
  font-family: var(--_font-mono);
  white-space: pre-wrap;
}

.jwt-claims {
  width: 100%;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  border-collapse: separate;
  border-spacing: 0;
}

.jwt-claims th,
.jwt-claims td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.jwt-claims tbody tr:last-child > * {
  border-bottom: 0;
}

.jwt-claims thead th {
  background: var(--_surface-sunken);
  font-weight: 600;
}

.jwt-claims code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.jwt-relative {
  margin-inline-start: var(--_space-2);
  color: var(--_fg-muted);
}

.jwt-meaning.other {
  color: var(--_fg-muted);
  font-style: italic;
}

.jwt-edit > .editor-body {
  max-height: min(30vh, 240px);
  border-bottom: 1px solid var(--_border);
}
`;var V=Object.freeze({jwtHeader:"Header",jwtPayload:"Payload",jwtSignature:"Signature",jwtClaims:"Claims",jwtClaim:"Claim",jwtValue:"Value",jwtMeaning:"Meaning",jwtToken:"Token",jwtCopyToken:"Copy token",jwtCopyHeader:"Copy header",jwtCopyPayload:"Copy payload",jwtShowSignature:"Show signature",jwtHideSignature:"Hide signature",jwtValid:"Valid",jwtValidUntil:"Valid, expires {relative}",jwtExpired:"Expired {relative}",jwtEarly:"Not valid before {relative}",jwtNoDates:"No expiry",jwtEncryptedBadge:"Encrypted",jwtNotVerified:"Decoded only: the signature is not verified, and the token is never sent anywhere.",jwtInvalidEmpty:"No token.",jwtInvalidParts:"A JSON Web Token has 3 parts (signed) or 5 parts (encrypted), separated by dots.",jwtInvalidHeader:"The header is not base64url-encoded JSON.",jwtInvalidPayload:"The payload is not base64url-encoded UTF-8 text.",jwtWarnAlgNone:'The token is not signed (alg "none"): anyone can write it.',jwtWarnAlgSymmetric:"{alg} uses a shared secret: anyone who can verify the token can also create one.",jwtWarnNoExp:"No expiry (exp): the token is valid forever.",jwtWarnLongLifetime:"The token is valid for more than 30 days.",jwtWarnUrlHeader:'The "{name}" header points to a location: never fetch keys from a token you do not trust. It is not fetched here.',jwtWarnNotJson:"The payload is not JSON.",jwtWarnEncrypted:"Encrypted token (JWE): only the header can be read without the key.",jwtClaim_iss:"Issuer",jwtClaim_sub:"Subject",jwtClaim_aud:"Audience",jwtClaim_exp:"Expires",jwtClaim_nbf:"Not valid before",jwtClaim_iat:"Issued",jwtClaim_jti:"Token ID",jwtClaim_azp:"Authorized party",jwtClaim_scope:"Scopes",jwtClaim_scp:"Scopes",jwtClaim_roles:"Roles",jwtClaim_name:"Name",jwtClaim_email:"Email",jwtClaim_email_verified:"Email verified",jwtClaim_preferred_username:"User name",jwtClaim_nonce:"Nonce",jwtClaim_auth_time:"Authenticated",jwtClaim_sid:"Session ID",jwtClaim_tid:"Tenant ID",jwtClaim_acr:"Authentication context",jwtClaim_amr:"Authentication methods",jwtClaimOther:"Custom claim"}),D={jwtHeader:"En-t\xEAte",jwtPayload:"Contenu",jwtSignature:"Signature",jwtClaims:"Revendications",jwtClaim:"Revendication",jwtValue:"Valeur",jwtMeaning:"Signification",jwtToken:"Jeton",jwtCopyToken:"Copier le jeton",jwtCopyHeader:"Copier l\u2019en-t\xEAte",jwtCopyPayload:"Copier le contenu",jwtShowSignature:"Afficher la signature",jwtHideSignature:"Masquer la signature",jwtValid:"Valide",jwtValidUntil:"Valide, expire {relative}",jwtExpired:"Expir\xE9 {relative}",jwtEarly:"Pas valide avant {relative}",jwtNoDates:"Sans expiration",jwtEncryptedBadge:"Chiffr\xE9",jwtNotVerified:"D\xE9cod\xE9 seulement : la signature n\u2019est pas v\xE9rifi\xE9e, et le jeton n\u2019est jamais envoy\xE9.",jwtInvalidEmpty:"Aucun jeton.",jwtInvalidParts:"Un JSON Web Token a 3 parties (sign\xE9) ou 5 parties (chiffr\xE9), s\xE9par\xE9es par des points.",jwtInvalidHeader:"L\u2019en-t\xEAte n\u2019est pas du JSON encod\xE9 en base64url.",jwtInvalidPayload:"Le contenu n\u2019est pas du texte UTF-8 encod\xE9 en base64url.",jwtWarnAlgNone:"Le jeton n\u2019est pas sign\xE9 (alg \xAB none \xBB) : n\u2019importe qui peut l\u2019\xE9crire.",jwtWarnAlgSymmetric:"{alg} utilise un secret partag\xE9 : qui peut v\xE9rifier le jeton peut aussi en cr\xE9er.",jwtWarnNoExp:"Pas d\u2019expiration (exp) : le jeton est valide pour toujours.",jwtWarnLongLifetime:"Le jeton est valide plus de 30 jours.",jwtWarnUrlHeader:"L\u2019en-t\xEAte \xAB {name} \xBB d\xE9signe un emplacement : ne t\xE9l\xE9chargez jamais de cl\xE9 depuis un jeton non fiable. Rien n\u2019est t\xE9l\xE9charg\xE9 ici.",jwtWarnNotJson:"Le contenu n\u2019est pas du JSON.",jwtWarnEncrypted:"Jeton chiffr\xE9 (JWE) : seul l\u2019en-t\xEAte se lit sans la cl\xE9.",jwtClaim_iss:"\xC9metteur",jwtClaim_sub:"Sujet",jwtClaim_aud:"Destinataire",jwtClaim_exp:"Expire",jwtClaim_nbf:"Pas valide avant",jwtClaim_iat:"\xC9mis",jwtClaim_jti:"Identifiant du jeton",jwtClaim_azp:"Partie autoris\xE9e",jwtClaim_scope:"Port\xE9es",jwtClaim_scp:"Port\xE9es",jwtClaim_roles:"R\xF4les",jwtClaim_name:"Nom",jwtClaim_email:"E-mail",jwtClaim_email_verified:"E-mail v\xE9rifi\xE9",jwtClaim_preferred_username:"Nom d\u2019utilisateur",jwtClaim_nonce:"Nonce",jwtClaim_auth_time:"Authentifi\xE9",jwtClaim_sid:"Identifiant de session",jwtClaim_tid:"Identifiant du locataire",jwtClaim_acr:"Contexte d\u2019authentification",jwtClaim_amr:"M\xE9thodes d\u2019authentification",jwtClaimOther:"Revendication personnalis\xE9e"};function U(r){if(!/^[A-Za-z0-9_-]*$/.test(r)||r.length%4===1)return null;let t=r.replace(/-/g,"+").replace(/_/g,"/");try{let e=atob(t+"=".repeat((4-t.length%4)%4));return Uint8Array.from(e,a=>a.charCodeAt(0))}catch{return null}}function H(r){let t=U(r),e=null;if(t)try{e=new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch{e=null}let a;if(e!==null)try{a=JSON.parse(e)}catch{a=void 0}return{raw:r,text:e,value:a}}function f(r){let t=String(r??"").slice(0,65536).trim().replace(/^bearer\s+/i,"").replace(/\s+/g,"");if(!t)return{ok:!1,error:"empty"};let e=t.split(".");if(e.length!==3&&e.length!==5)return{ok:!1,error:"parts"};let a=H(e[0]);if(!w(a.value))return{ok:!1,error:"header"};if(e.length===5)return{ok:!0,token:{kind:"jwe",compact:t,parts:e,header:a,payload:null,signature:e[4]}};let i=H(e[1]);return i.text===null?{ok:!1,error:"payload"}:{ok:!0,token:{kind:"jws",compact:t,parts:e,header:a,payload:i,signature:e[2]}}}function w(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}var m=Object.freeze(["iss","sub","aud","exp","nbf","iat","jti","azp","scope","scp","roles","name","email","email_verified","preferred_username","nonce","auth_time","sid","tid","acr","amr"]),W=Object.freeze(["exp","nbf","iat","auth_time"]);function g(r,t){if(!w(r))return{state:"unknown",at:null};let e=p(r.exp),a=p(r.nbf);return a!==null&&t<a?{state:"early",at:a}:e!==null&&t>=e?{state:"expired",at:e}:e===null&&a===null?{state:"unknown",at:null}:{state:"valid",at:e}}function p(r){return typeof r=="number"&&Number.isFinite(r)&&Math.abs(r)<1e11?r*1e3:null}function z(r){let t=[],e=r.header.value,a=typeof e.alg=="string"?e.alg:"";r.kind==="jwe"&&t.push({key:"encrypted"}),r.kind==="jws"&&(a.toLowerCase()==="none"||!a)&&t.push({key:"algNone"}),/^HS\d+$/.test(a)&&t.push({key:"algSymmetric",params:{alg:a}});for(let i of["jku","x5u"])typeof e[i]=="string"&&t.push({key:"urlHeader",params:{name:i}});if(typeof e.kid=="string"&&/^[a-z][a-z0-9+.-]*:|[/\\]|\.\./i.test(e.kid)&&t.push({key:"urlHeader",params:{name:"kid"}}),r.payload){let i=r.payload.value;if(!w(i))t.push({key:"notJson"});else{let o=p(i.exp),s=p(i.nbf)??p(i.iat);o===null?t.push({key:"noExp"}):s!==null&&(o-s)/1e3>2592e3&&t.push({key:"longLifetime"})}}return t}k({en:V,fr:D});var M=class extends T{static type="jwt";static fromData=E;static dataAttributes=Object.freeze(["now"]);static componentAttributes=Object.freeze(["now","mask-signature","claims","warnings","depth"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[I,L];static upgradeProperties=["content"];constructor(){super(),this.panelId=b("panel"),this.signatureShown=null,this.editor=null,this.previewTimer=void 0}get token(){let t=f(this.text??"");return t.ok?t.token:null}get now(){let t=this.getAttribute("now");if(t){let e=/^\d+$/.test(t.trim())?Number(t)*1e3:Date.parse(t);if(Number.isFinite(e))return e}return Date.now()}renderContent(t){let e=this.t,a=f(this.text??""),i=n("div",{class:"body jwt-body",part:"body"}),o="";if(a.ok){let l=a.token;if(o=this.statusText(l),i.append(this.tokenView(l),this.statusLine(l)),this.flag("warnings"))for(let $ of z(l))i.append(this.warningView($));i.append(this.section("jwtHeader","header",this.partView(l.header))),l.payload&&(i.append(this.section("jwtPayload","payload",this.partView(l.payload))),this.flag("claims")&&w(l.payload.value)&&i.append(this.section("jwtClaims","claims",this.claimsTable(l.payload.value))))}else{let l=`jwtInvalid${a.error[0].toUpperCase()}${a.error.slice(1)}`;i.append(j(e(l)),n("pre",{class:"jwt-token raw",text:this.text??""}))}let s=n("div",{class:"panel",attrs:{id:this.panelId}}),c=[];if(this.editing){let l=this.createEditor();s.classList.add("jwt-edit"),s.append(n("div",{class:"body editor-body",part:"body source"},l.element),i),c=this.historyButtons(l)}else s.append(i);let d=a.ok?a.token:null,u=[...c,this.editToggleButton(),this.fullscreenButton(),d&&this.feature("copy")&&d.payload?.text?this.copyTextButton(()=>J(d.payload),e("jwtCopyPayload"),"copy-payload"):null,d&&this.feature("copy")?this.copyTextButton(()=>J(d.header),e("jwtCopyHeader"),"copy-header"):null,this.feature("copy")?this.copyButton(()=>d?.compact??this.text??"",e("jwtCopyToken")):null];t.append(...this.chrome({badge:o||"JWT",actions:u}),s),this.editor?.align()}flag(t){return y(this.getAttribute(t))!==!1}get showSignature(){return this.signatureShown??!this.hasAttribute("mask-signature")}tokenView(t){let e=this.t,a=t.kind==="jwe"?["header","key","iv","payload","signature"]:["header","payload","signature"],i=n("code",{class:"jwt-token",part:"token",attrs:{"aria-label":e("jwtToken")}});t.parts.forEach((s,c)=>{c&&i.append(n("span",{class:"jwt-dot",text:"."}));let d=a[c],l=c===t.parts.length-1&&!this.showSignature&&s.length>0;i.append(n("span",{class:`jwt-part part-${d}${l?" masked":""}`,part:d==="header"||d==="payload"?`token-${d}`:"token-signature",text:l?"\u2022".repeat(Math.min(s.length,24)):s}))});let o=t.signature?S({icon:this.showSignature?"eye-off":"eye",label:this.showSignature?e("jwtHideSignature"):e("jwtShowSignature"),key:"signature",pressed:this.showSignature,onClick:()=>{this.signatureShown=!this.showSignature,this.render()}}):null;return n("div",{class:"jwt-token-box"},i,o)}statusText(t){let e=this.t;if(t.kind==="jwe")return e("jwtEncryptedBadge");let{state:a,at:i}=g(t.payload?.value,this.now),o=i===null?"":this.relative(i);return a==="expired"?e("jwtExpired",{relative:o}):a==="early"?e("jwtEarly",{relative:o}):a==="valid"?i===null?e("jwtValid"):e("jwtValidUntil",{relative:o}):e("jwtNoDates")}statusLine(t){let{state:e}=t.kind==="jwe"?{state:"unknown"}:g(t.payload?.value,this.now),a=e==="valid"?"ok":e==="unknown"?"muted":"bad";return n("div",{class:"jwt-status"},n("span",{class:`jwt-state ${a}`,part:"status"},C(a==="ok"?"check":a==="bad"?"alert":"status-circle"),n("span",{text:this.statusText(t)})),n("span",{class:"jwt-note",text:this.t("jwtNotVerified")}))}warningView(t){let e=`jwtWarn${t.key[0].toUpperCase()}${t.key.slice(1)}`,a=j(this.t(e,t.params));return a.classList.add("jwt-warning"),a.setAttribute("part","warning"),a}section(t,e,a){return n("section",{class:`jwt-section section-${e}`,part:"section",attrs:{"aria-label":this.t(t)}},n("h3",{class:"jwt-title",text:this.t(t)}),a)}partView(t){let e=t.text===null?null:A(t.text,{maxDepth:h().maxDepth});if(!e?.ok)return n("pre",{class:"jwt-text",text:t.text??""});let a=new O(e.value,{t:this.t,locale:this.locale,depth:v(this.getAttribute("depth"),{min:0,max:1e3,fallback:2}),sortKeys:!1,showTypes:!1,label:this.t(t===this.token?.header?"jwtHeader":"jwtPayload"),onSelect:()=>{}});return a.render(),n("div",{class:"tree-body"},a.element)}claimsTable(t){let e=this.t,i=Object.keys(t).sort((o,s)=>P(o)-P(s)).map(o=>{let s=t[o],c=m.includes(o),d=W.includes(o)?p(s):null,u=n("td",{class:"jwt-value"});return d!==null?u.append(n("time",{text:this.formatDate(d),attrs:{datetime:new Date(d).toISOString()}}),n("span",{class:"jwt-relative",text:this.relative(d)})):u.append(n("code",{text:F(s)})),n("tr",{},n("th",{attrs:{scope:"row"}},n("code",{text:o})),u,n("td",{class:c?"jwt-meaning":"jwt-meaning other",text:e(c?`jwtClaim_${o}`:"jwtClaimOther")}))});return n("table",{class:"jwt-claims",part:"claims"},n("thead",{},n("tr",{},n("th",{attrs:{scope:"col"},text:e("jwtClaim")}),n("th",{attrs:{scope:"col"},text:e("jwtValue")}),n("th",{attrs:{scope:"col"},text:e("jwtMeaning")}))),n("tbody",{},...i))}formatDate(t){try{return new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"medium"}).format(t)}catch{return new Date(t).toISOString()}}relative(t){let e=Math.round((t-this.now)/1e3),a=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]],[i,o]=a.find(([,s])=>Math.abs(e)>=s)??["second",1];try{return new Intl.RelativeTimeFormat(this.locale,{numeric:"auto"}).format(Math.round(e/o),i)}catch{return`${Math.round(e/o)} ${i}`}}createEditor(){return this.editor?.destroy(),this.editor=new N({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!0,highlightLimit:h().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>x(this,_.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),200)}};function P(r){let t=m.indexOf(r);return t===-1?m.length:t}function F(r){return typeof r=="string"?r:Array.isArray(r)&&r.every(t=>typeof t=="string")?r.join(", "):JSON.stringify(r)??String(r)}function J(r){return r?r.value===void 0?r.text??"":JSON.stringify(r.value,null,2):""}export{M as a};
//# sourceMappingURL=chunk-MMK3EE3C.js.map
