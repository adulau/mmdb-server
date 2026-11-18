/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as Y}from"./chunk-ABGFYLLO.js";import{a as M}from"./chunk-YCSGENO5.js";import{r as G}from"./chunk-3VQOL2NW.js";import{I as C,M as U,N as D,Q as N,S as V,U as z,X as J,b as L,d as j,l as n,n as E}from"./chunk-DNNVKOIB.js";import{h as H,k as I,l as T,q as B}from"./chunk-2IDMCIF6.js";var X=`/*
 * API reference: introduction, tag buttons, and endpoints that open to show their
 * parameters, bodies, responses, schema trees and examples.
 */
.api-body {
  padding: var(--_space-5);
  background: var(--_surface);
  /* Without a height limit the page scrolls, not the reference. */
  overscroll-behavior: auto;
}

:host([max-height]) .api-body,
.vt[data-fullscreen] .api-body {
  overscroll-behavior: contain;
}

/* ---------- Introduction ---------- */

.api-intro {
  display: grid;
  gap: var(--_space-3);
  padding-bottom: var(--_space-5);
  border-bottom: 1px solid var(--_border);
}

.api-title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-3);
}

.api-title h2 {
  margin: 0;
  font: 700 1.5rem/1.2 var(--_font-ui);
  letter-spacing: -0.02em;
}

.api-version,
.api-spec {
  padding: 2px 8px;
  border-radius: var(--_radius-full);
  font: 600 11px/1.6 var(--_font-mono);
}

.api-version {
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.api-spec {
  border: 1px solid var(--_border);
  color: var(--_fg-muted);
}

.plain {
  margin: 0;
  color: var(--_fg-muted);
  white-space: pre-wrap;
}

.api-facts {
  display: grid;
  gap: var(--_space-2);
  margin: var(--_space-2) 0 0;
}

.api-facts > div {
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: var(--_space-3);
}

.api-facts dt {
  color: var(--_fg-muted);
  font-weight: 600;
}

.api-facts dd {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin: 0;
}

.server,
.auth {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.server code,
.auth code {
  font-size: var(--_font-size-small);
}

.server.current code {
  color: var(--_accent-fg);
}

.server-note {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.auth .icon {
  width: 14px;
  height: 14px;
  color: var(--_warning);
}

@container (max-width: 560px) {
  .api-facts > div {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }
}

/* ---------- Tag buttons ---------- */

.tag-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: var(--_space-4) 0 0;
}

.tag-chip {
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
}

.tag-chip:hover {
  border-color: var(--_border-strong);
}

.tag-chip[aria-pressed='true'] {
  border-color: color-mix(in srgb, var(--_accent) 50%, var(--_border));
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-weight: 600;
}

.chip-count {
  color: var(--_fg-muted);
  font: 500 11px/1 var(--_font-mono);
}

/* ---------- Groups and endpoints ---------- */

.api-tag {
  padding-top: var(--_space-5);
}

.tag-name {
  margin: 0 0 var(--_space-2);
  font: 700 1.125rem/1.3 var(--_font-ui);
  text-transform: none;
}

.tag-description {
  margin-bottom: var(--_space-3);
}

.op {
  --_tone: var(--_fg-muted);
  margin-top: var(--_space-2);
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--_tone) 30%, var(--_border));
  border-radius: var(--_radius);
  background: color-mix(in srgb, var(--_tone) 4%, var(--_surface));
}

.op.current {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.op.method-get,
.op.method-head,
.op.method-options {
  --_tone: var(--_info);
}

.op.method-post {
  --_tone: var(--_success);
}

.op.method-put,
.op.method-patch {
  --_tone: var(--_warning);
}

.op.method-delete {
  --_tone: var(--_danger);
}

.op-head {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
  width: 100%;
  min-height: 46px;
  padding: 8px var(--_space-3);
  border: 0;
  background: none;
  color: var(--_fg);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.op-head:hover {
  background: color-mix(in srgb, var(--_tone) 7%, transparent);
}

.op-head:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.op-method {
  flex: none;
  min-width: 64px;
  padding: 3px 8px;
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone) 16%, transparent);
  color: color-mix(in srgb, var(--_tone) 62%, var(--_fg));
  font: 700 12px/1.4 var(--_font-mono);
  text-align: center;
}

.op-path {
  flex: none;
  max-width: 45%;
  overflow: hidden;
  font: 600 var(--_font-size) / 1.4 var(--_font-mono);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.path-param {
  color: var(--_accent-fg);
}

.op-summary {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--_fg-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.op.deprecated .op-path {
  text-decoration: line-through;
}

.op-flag,
.flag {
  padding: 1px 6px;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_warning) 16%, transparent);
  color: color-mix(in srgb, var(--_warning) 62%, var(--_fg));
  font: 600 11px/1.5 var(--_font-ui);
}

.op-lock .icon,
.op-chevron .icon {
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
}

.op-chevron .icon {
  transition: transform var(--_duration) var(--_easing);
}

.op-head[aria-expanded='true'] .op-chevron .icon {
  transform: rotate(180deg);
}

@container (max-width: 620px) {
  .op-head {
    flex-wrap: wrap;
  }

  .op-path {
    max-width: none;
    flex: 1 1 auto;
  }

  .op-summary {
    flex-basis: 100%;
    white-space: normal;
  }
}

/* ---------- Details ---------- */

.op-details {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  border-top: 1px solid color-mix(in srgb, var(--_tone) 25%, var(--_border));
  background: var(--_surface);
}

.op-section h4 {
  margin: 0 0 var(--_space-2);
  color: var(--_fg-muted);
  font: 700 12px/1.3 var(--_font-ui);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.params {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--_font-size-ui);
}

.params th,
.params td {
  padding: 7px var(--_space-2);
  border-bottom: 1px solid var(--_border);
  text-align: left;
  vertical-align: top;
}

.params thead th {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.params tbody th {
  font-weight: 500;
  white-space: nowrap;
}

.params tr.deprecated th code {
  text-decoration: line-through;
}

.required {
  margin-left: 6px;
  color: var(--_danger);
  font: 600 11px/1 var(--_font-ui);
}

.type {
  color: var(--_syntax-type);
  font-size: var(--_font-size-small);
}

.type.recursive {
  color: var(--_fg-muted);
}

.media {
  display: grid;
  gap: var(--_space-2);
  margin-top: var(--_space-2);
}

.media-type code {
  padding: 2px 6px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-size: var(--_font-size-small);
}

.schema-name {
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-mono);
}

/* ---------- Schema trees ---------- */

.props {
  margin: 0;
  padding: 0 0 0 var(--_space-3);
  border-left: 1px solid var(--_border);
  list-style: none;
}

.prop {
  padding: 4px 0;
}

.prop-row {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}

.prop-name {
  font-weight: 600;
}

.prop details > summary {
  cursor: pointer;
  list-style-position: outside;
}

.prop details > summary::marker {
  color: var(--_fg-muted);
}

.prop-description,
.constraints {
  margin: 2px 0 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.constraints {
  font-family: var(--_font-mono);
}

.variants {
  display: grid;
  gap: var(--_space-2);
  margin-top: var(--_space-2);
  padding-left: var(--_space-3);
  border-left: 2px dashed var(--_border);
}

/* ---------- Responses ---------- */

.responses {
  display: grid;
  gap: 6px;
}

.response {
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.response > summary {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
  padding: 8px var(--_space-3);
  cursor: pointer;
}

.response[open] > summary {
  border-bottom: 1px solid var(--_border);
}

.response > .media,
.response > .none {
  padding: 0 var(--_space-3) var(--_space-3);
}

.status-code {
  --_tone: var(--_fg-muted);
  min-width: 48px;
  padding: 2px 8px;
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone) 16%, transparent);
  color: color-mix(in srgb, var(--_tone) 62%, var(--_fg));
  font: 700 12px/1.4 var(--_font-mono);
  text-align: center;
}

.status-code.status-2xx {
  --_tone: var(--_success);
}

.status-code.status-3xx {
  --_tone: var(--_info);
}

.status-code.status-4xx {
  --_tone: var(--_warning);
}

.status-code.status-5xx {
  --_tone: var(--_danger);
}

.response-description {
  color: var(--_fg-muted);
}

.none {
  margin: var(--_space-2) 0 0;
  color: var(--_fg-muted);
  font-style: italic;
}

/* ---------- Edit mode ---------- */

.api-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

/* Markdown descriptions read as text, without the frame of a standalone element. */
vt-markdown.prose::part(container),
vt-markdown.tag-description::part(container) {
  border: 0;
  background: transparent;
}

vt-markdown.prose::part(body),
vt-markdown.tag-description::part(body) {
  padding: 0;
}
`;var re=["get","put","post","delete","options","head","patch","trace"];var k=class extends Error{};function v(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function f(i){return typeof i=="string"?i:""}function se(i,e){if(!e.startsWith("#"))return;let r=i;for(let t of e.slice(1).split("/").slice(1)){let s=decodeURIComponent(t).replace(/~1/g,"/").replace(/~0/g,"~");if(!r||typeof r!="object"||!Object.prototype.hasOwnProperty.call(r,s))return;r=r[s]}return r}function b(i,e){let r=e;for(let t=0;t<20&&v(r)&&typeof r.$ref=="string";t+=1)r=se(i,r.$ref);return v(r)&&typeof r.$ref!="string"?r:null}function R(i){return v(i)&&typeof i.$ref=="string"?decodeURIComponent(i.$ref.split("/").pop()??""):""}function F(i,e){return v(e)?Object.entries(e).slice(0,20).map(([r,t])=>{let s=b(i,t)??{},o=v(s.examples)?Object.values(s.examples):[],c=o.length?b(i,o[0])?.value:void 0;return{type:r,schema:s.schema??null,example:s.example!==void 0?s.example:c}}):[]}function W(i){if(!v(i))throw new k("The document is not an object.");let e=f(i.swagger).startsWith("2"),r=f(i.openapi)||f(i.swagger);if(!r)throw new k('Missing "openapi" (or "swagger") version field.');if(!e&&!/^3\./.test(r))throw new k(`Unsupported OpenAPI version ${r}.`);let t=v(i.info)?i.info:{},s=[];if(e){let a=f(i.host);a&&(s=[{url:`${Array.isArray(i.schemes)&&i.schemes.includes("https")?"https":i.schemes?.[0]??"https"}://${a}${f(i.basePath)}`,description:""}])}else Array.isArray(i.servers)&&(s=i.servers.filter(v).slice(0,20).map(a=>({url:ne(a),description:f(a.description)})));let o=[],c=!1,p=v(i.paths)?i.paths:{};for(let[a,u]of Object.entries(p)){let l=b(i,u);if(!l)continue;let g=Array.isArray(l.parameters)?l.parameters:[];for(let _ of re){let $=l[_];if(v($)){if(o.length>=2e3){c=!0;break}o.push(ae(i,a,_,$,g,e))}}}let d=Array.isArray(i.tags)?i.tags.filter(v).map(a=>({name:f(a.name),description:f(a.description)})):[],m=new Set(o.flatMap(a=>a.tags)),h=[...d.filter(a=>m.has(a.name)),...[...m].filter(a=>!d.some(u=>u.name===a)).map(a=>({name:a,description:""}))],x=e?i.securityDefinitions:i.components?.securitySchemes,y=v(x)?Object.entries(x).map(([a,u])=>{let l=b(i,u)??{},g=f(l.type),_=g==="http"?`HTTP ${f(l.scheme)}${l.bearerFormat?` (${f(l.bearerFormat)})`:""}`:g==="apiKey"?`API key in ${f(l.in)} "${f(l.name)}"`:g==="oauth2"?"OAuth 2.0":g==="openIdConnect"?"OpenID Connect":g;return{name:a,type:_,description:f(l.description)}}):[];return{root:i,version:r,title:f(t.title)||"API",apiVersion:f(t.version),description:f(t.description),servers:s,tags:h,operations:o,securitySchemes:y,truncated:c}}function ne(i){let e=v(i.variables)?i.variables:{};return f(i.url).replace(/\{([^}]+)\}/g,(r,t)=>{let s=e[t];return v(s)&&s.default!==void 0?String(s.default):r})}function ae(i,e,r,t,s,o){let c=new Map,p=null,d=[];for(let y of[...s,...Array.isArray(t.parameters)?t.parameters:[]]){let a=b(i,y);if(!a)continue;if(o&&a.in==="body"){p=a;continue}if(o&&a.in==="formData"){d.push(a);continue}let u=a.schema??(o?{type:a.type,format:a.format,enum:a.enum,items:a.items,default:a.default}:null);c.set(`${a.in}:${a.name}`,{name:f(a.name),in:f(a.in),required:a.in==="path"||!!a.required,deprecated:!!a.deprecated,description:f(a.description),schema:u,example:a.example??(v(a.examples)?b(i,Object.values(a.examples)[0])?.value:void 0)})}let m=null;if(!o&&t.requestBody){let y=b(i,t.requestBody)??{};m={description:f(y.description),required:!!y.required,content:F(i,y.content)}}else if(p){let y=Array.isArray(t.consumes)?t.consumes:Array.isArray(i.consumes)?i.consumes:["application/json"];m={description:f(p.description),required:!!p.required,content:y.slice(0,5).map(a=>({type:String(a),schema:p?.schema??null,example:void 0}))}}else if(d.length){let y=Object.fromEntries(d.map(a=>[f(a.name),{type:a.type,format:a.format,description:a.description}]));m={description:"",required:d.some(a=>a.required),content:[{type:"application/x-www-form-urlencoded",schema:{type:"object",properties:y,required:d.filter(a=>a.required).map(a=>a.name)},example:void 0}]}}let h=[];if(v(t.responses)){let y=Array.isArray(t.produces)?t.produces:Array.isArray(i.produces)?i.produces:["application/json"];for(let[a,u]of Object.entries(t.responses).slice(0,40)){let l=b(i,u)??{},g=o?l.schema?y.slice(0,3).map(_=>({type:String(_),schema:l.schema,example:l.examples?.[_]})):[]:F(i,l.content);h.push({status:a,description:f(l.description),content:g})}}let x=Array.isArray(t.security)?t.security:Array.isArray(i.security)?i.security:[];return{key:`${r} ${e}`,method:r.toUpperCase(),path:e,operationId:f(t.operationId),summary:f(t.summary),description:f(t.description),tags:Array.isArray(t.tags)&&t.tags.length?t.tags.map(String):["default"],deprecated:!!t.deprecated,parameters:[...c.values()],requestBody:m,responses:h,security:[...new Set(x.filter(v).flatMap(y=>Object.keys(y)))]}}function q(i,e){if(!Array.isArray(e.allOf))return e;let r={...e,allOf:void 0,properties:{...e.properties??{}},required:[...e.required??[]]};for(let t of e.allOf.slice(0,20)){let s=b(i,t);if(!s)continue;let o=q(i,s);Object.assign(r.properties,o.properties??{}),r.required.push(...o.required??[]),!r.type&&o.type&&(r.type=o.type),!r.description&&o.description&&(r.description=o.description)}return r}function A(i,e){let r=R(e),t=b(i,e);if(!t)return r||"any";if(r)return r;if(Array.isArray(t.enum)&&t.enum.length<=6&&t.enum.length)return t.enum.map(p=>JSON.stringify(p)).join(" | ");for(let p of["oneOf","anyOf"])if(Array.isArray(t[p]))return`${p==="oneOf"?"one of":"any of"}: ${t[p].slice(0,6).map(d=>A(i,d)).join(", ")}`;let s=Array.isArray(t.type)?t.type.filter(p=>p!=="null"):[t.type],o=t.nullable===!0||Array.isArray(t.type)&&t.type.includes("null"),c=s.filter(Boolean).join(" | ");return s.includes("array")||!c&&t.items?c=`array of ${A(i,t.items)}`:c||(c=t.properties||t.allOf?"object":"any"),t.format&&(c+=` (${t.format})`),o?`${c} | null`:c}function w(i,e,r=0,t=new Set){let s=b(i,e);if(!s||r>8||t.has(s))return null;if(s.example!==void 0)return s.example;if(Array.isArray(s.examples)&&s.examples.length)return s.examples[0];if(s.default!==void 0)return s.default;if(s.const!==void 0)return s.const;if(Array.isArray(s.enum)&&s.enum.length)return s.enum[0];let o=new Set(t).add(s);if(Array.isArray(s.allOf))return w(i,q(i,s),r,t);for(let p of["oneOf","anyOf"])if(Array.isArray(s[p])&&s[p].length)return w(i,s[p][0],r+1,o);let c=Array.isArray(s.type)?s.type.find(p=>p!=="null"):s.type;if(c==="array"||s.items){let p=w(i,s.items,r+1,o);return p===null?[]:[p]}if(c==="object"||s.properties){let p={};for(let[d,m]of Object.entries(s.properties??{}).slice(0,40))p[d]=w(i,m,r+1,o);return p}switch(c){case"integer":return s.minimum??0;case"number":return s.minimum??0;case"boolean":return!0;case"string":return ie(s);default:return null}}function ie(i){switch(i.format){case"date-time":return"2026-01-31T09:30:00Z";case"date":return"2026-01-31";case"time":return"09:30:00";case"email":return"ada@example.com";case"uuid":return"3fa85f64-5717-4562-b3fc-2c963f66afa6";case"uri":case"url":return"https://example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.1";case"ipv6":return"2001:db8::1";case"byte":return"U3dhZ2dlcg==";case"password":return"********";default:return"string"}}var Z=class extends J{static type="openapi";static componentAttributes=Object.freeze(["tags","expand","server","examples","markdown"]);static presets={simple:{examples:!0,markdown:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,examples:!0,markdown:!0}};static styles=[L,M,X];constructor(){super(),this.parsed=null,this.opened=new Set,this.tagChoice=null,this.query="",this.matchCount=0,this.panelId=E("panel"),this.listHost=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.opened.clear()}parse(){let e=this.text??"";if(this.parsed?.text===e&&!this.parsed.pending)return this.parsed;let r=e.trim(),t;try{if(!r)return this.parsed={text:e,model:null,error:null,pending:!1},this.parsed;if(/^[[{]/.test(r))t=JSON.parse(r);else{let s=Y();if(!s.ready||!s.parse)return s.promise.then(()=>this.requestRender(),o=>{this.parsed={text:e,model:null,error:new k(this.t("openapiYamlFailed",{message:String(o?.message??o)})),pending:!1},this.requestRender()}),this.parsed={text:e,model:null,error:null,pending:!0},this.parsed;t=s.parse(r)}this.parsed={text:e,model:W(t),error:null,pending:!1}}catch(s){this.parsed={text:e,model:null,error:s instanceof Error?s:new k(String(s)),pending:!1}}return this.parsed}get spec(){let e=this.parse().model;return e?structuredClone(e.root):null}get shownTags(){if(this.tagChoice!==null)return this.tagChoice?new Set([this.tagChoice]):null;let e=this.getAttribute("tags");return e?.trim()?new Set(e.split(/[\s,]+/)):null}visible(e){let r=this.shownTags;if(r&&!e.tags.some(s=>r.has(s)))return!1;if(!this.query)return!0;let t=this.query.toLowerCase();return[e.method,e.path,e.summary,e.operationId,e.description,...e.tags].some(s=>s.toLowerCase().includes(t))}renderContent(e){let r=this.t,{model:t,error:s,pending:o}=this.parse(),c=n("div",{class:"panel",attrs:{id:this.panelId}}),p=[],d=n("div",{class:"body api-body",part:"body"});if(o?d.append(V(r)):s?d.append(z(r("openapiInvalid",{message:s.message}))):t?(d.append(this.intro(t)),t.truncated&&d.append(z(r("openapiTruncated"))),t.tags.length>1&&d.append(this.tagBar(t)),this.listHost=n("div",{class:"api-groups"}),d.append(this.listHost),this.renderGroups()):d.append(n("div",{class:"empty",part:"empty",text:r("empty")})),this.editing){let a=this.createEditor();c.classList.add("api-edit"),c.append(n("div",{class:"body editor-body",part:"body source"},a.element),d),p=this.historyButtons(a)}else c.append(d);let m={run:a=>(this.query=a.slice(0,D).trim(),this.renderGroups(),{total:this.matchCount,capped:this.matchCount>=U}),go:a=>{let u=this.listHost?.querySelectorAll(".op")??[];for(let l of u)l.classList.remove("current");u[a]?.classList.add("current"),u[a]?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.renderGroups()}},h=/^\s*[[{]/.test(this.text??""),x=[this.searchButton(m),...p,t&&!this.editing?N({icon:"expand-all",label:r("expandAll"),key:"expand-all",onClick:()=>this.openAll(!0)}):null,t&&!this.editing?N({icon:"collapse-all",label:r("collapseAll"),key:"collapse-all",onClick:()=>this.openAll(!1)}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(h?"openapi.json":"openapi.yaml"),h?"application/json":"application/yaml"):null,this.feature("copy")?this.copyButton(()=>this.text??"",r("copy")):null],y=t?t.apiVersion?`v${t.apiVersion}`:`OpenAPI ${t.version}`:"";e.append(...this.chrome({badge:y,actions:x}),c),this.editor?.align()}get heading(){return super.heading||this.parse().model?.title||""}intro(e){let r=this.t,t=n("div",{class:"api-intro",part:"intro"}),s=n("div",{class:"api-title"},n("h2",{text:e.title}));e.apiVersion&&s.append(n("span",{class:"api-version",text:e.apiVersion})),s.append(n("span",{class:"api-spec",text:`${e.version.startsWith("2")?"Swagger":"OpenAPI"} ${e.version}`})),t.append(s),e.description&&t.append(this.prose(e.description));let o=n("dl",{class:"api-facts"});if(e.servers.length){let c=Math.min(e.servers.length-1,j(this.getAttribute("server"),{min:0,max:50,fallback:0}));o.append(n("div",{},n("dt",{text:r("openapiServers")}),n("dd",{},...e.servers.map((p,d)=>n("span",{class:`server${d===c?" current":""}`},n("code",{text:p.url}),p.description?n("span",{class:"server-note",text:p.description}):null)))))}return e.securitySchemes.length&&o.append(n("div",{},n("dt",{text:r("openapiAuth")}),n("dd",{},...e.securitySchemes.map(c=>n("span",{class:"auth",attrs:{title:c.description||null}},C("lock"),n("code",{text:c.name}),n("span",{class:"server-note",text:c.type})))))),o.append(n("div",{},n("dt",{text:r("openapiEndpoints")}),n("dd",{text:B(e.operations.length,this.locale)}))),t.append(o),t}tagBar(e){let r=n("div",{class:"tag-bar",attrs:{role:"group","aria-label":this.t("openapiTags")}}),t=this.tagChoice??"",s=(o,c,p)=>n("button",{class:"tag-chip",attrs:{type:"button","aria-pressed":String(t===o),"data-focus-key":`tag-${o}`},on:{click:()=>{this.tagChoice=o,this.render()}}},c,n("span",{class:"chip-count",text:B(p,this.locale)}));r.append(s("",this.t("openapiAllTags"),e.operations.length));for(let o of e.tags)r.append(s(o.name,o.name,e.operations.filter(c=>c.tags.includes(o.name)).length));return r}renderGroups(){let e=this.listHost,r=this.parse().model;if(!e||!r)return;this.matchCount=0;let t=r.tags.length?r.tags:[{name:"default",description:""}],s=[],o=new Set;for(let c of t){let p=r.operations.filter(m=>m.tags.includes(c.name)&&this.visible(m));if(!p.length)continue;let d=n("section",{class:"api-tag",part:"tag",attrs:{"aria-label":c.name}},n("h3",{class:"tag-name",text:c.name}));c.description&&d.append(this.prose(c.description,"tag-description"));for(let m of p)o.has(m.key)||(o.add(m.key),this.matchCount+=1),d.append(this.operation(m,r));s.push(d)}e.replaceChildren(...s.length?s:[n("div",{class:"empty",part:"empty",text:this.t("openapiNoMatch")})])}openAll(e){let r=this.parse().model;if(r){if(e)for(let t of r.operations)this.opened.add(t.key);else this.opened.clear();this.renderGroups()}}operation(e,r){let t=this.opened.has(e.key)||this.feature("expand"),s=E("op"),o=n("div",{class:`op method-${e.method.toLowerCase()}${e.deprecated?" deprecated":""}`,part:"operation",attrs:{"data-key":e.key}}),c=n("button",{class:"op-head",attrs:{type:"button","aria-expanded":String(t),"aria-controls":s},on:{click:()=>{let p=c.getAttribute("aria-expanded")!=="true";p?this.opened.add(e.key):this.opened.delete(e.key),c.setAttribute("aria-expanded",String(p));let d=o.querySelector(":scope > .op-details");p&&!d?o.append(this.details(e,r,s)):d?.toggleAttribute("hidden",!p),p&&T(this,I.SELECT,{method:e.method,path:e.path,operationId:e.operationId})}}},n("span",{class:"op-method",part:"method",text:e.method}),this.pathNode(e.path),n("span",{class:"op-summary",text:e.summary||e.operationId}),e.deprecated?n("span",{class:"op-flag",text:this.t("openapiDeprecated")}):null,e.security.length?n("span",{class:"op-lock",attrs:{title:e.security.join(", ")}},C("lock")):null,n("span",{class:"op-chevron",attrs:{"aria-hidden":"true"}},C("chevron-down")));return o.append(c),t&&o.append(this.details(e,r,s)),o}pathNode(e){let r=n("code",{class:"op-path",part:"path"}),t=e;for(;t;){let s=t.indexOf("{"),o=s>=0?t.indexOf("}",s):-1;if(s<0||o<0){r.append(t);break}s>0&&r.append(t.slice(0,s)),r.append(n("span",{class:"path-param",text:t.slice(s,o+1)})),t=t.slice(o+1)}return r}details(e,r,t){let s=this.t,o=r.root,c=n("div",{class:"op-details",attrs:{id:t}});if(e.description&&c.append(this.prose(e.description)),e.parameters.length){let p=n("table",{class:"params",attrs:{"aria-label":s("openapiParameters")}},n("thead",{},n("tr",{},n("th",{attrs:{scope:"col"},text:s("openapiName")}),n("th",{attrs:{scope:"col"},text:s("openapiIn")}),n("th",{attrs:{scope:"col"},text:s("openapiType")}),n("th",{attrs:{scope:"col"},text:s("openapiDescription")}))),n("tbody",{},...e.parameters.map(d=>n("tr",{class:d.deprecated?"deprecated":""},n("th",{attrs:{scope:"row"}},n("code",{text:d.name}),d.required?n("span",{class:"required",text:s("openapiRequired")}):null),n("td",{text:d.in}),n("td",{},n("code",{class:"type",text:d.schema?A(o,d.schema):"string"})),n("td",{text:d.description})))));c.append(this.section(s("openapiParameters"),p))}if(e.requestBody){let p=n("div",{class:"media-list"});e.requestBody.description&&p.append(this.prose(e.requestBody.description));for(let d of e.requestBody.content)p.append(this.media(d,o));c.append(this.section(`${s("openapiRequestBody")}${e.requestBody.required?` (${s("openapiRequired")})`:""}`,p))}if(e.responses.length){let p=n("div",{class:"responses"});for(let d of e.responses){let m=/^\d/.test(d.status)?`${d.status[0]}xx`:"default",h=n("details",{class:`response status-${m}`});h.append(n("summary",{},n("span",{class:`status-code status-${m}`,text:d.status}),n("span",{class:"response-description",text:oe(d.description)})));for(let x of d.content)h.append(this.media(x,o));d.content.length||h.append(n("p",{class:"none",text:s("httpNoBody")})),p.append(h)}c.append(this.section(s("openapiResponses"),p))}if(this.feature("examples")&&customElements.get("vt-http")){let p=document.createElement("vt-http");p.setAttribute("variant","full"),p.setAttribute("label",s("openapiExample")),p.setAttribute("layout","columns"),this.getAttribute("theme")&&p.setAttribute("theme",this.getAttribute("theme")),p.exchange=this.exampleExchange(e,r),c.append(this.section(s("openapiExample"),p))}return c}section(e,r){return n("div",{class:"op-section"},n("h4",{text:e}),r)}media(e,r){let t=n("div",{class:"media"},n("div",{class:"media-type"},n("code",{text:e.type})));if(e.schema){let o=R(e.schema);o&&t.append(n("div",{class:"schema-name",text:o})),t.append(this.schema(r,e.schema,0,new Set))}let s=e.example!==void 0?e.example:e.schema?w(r,e.schema):void 0;if(s!=null&&/json/i.test(e.type)){let o=document.createElement("vt-code");o.setAttribute("language","json"),o.setAttribute("copy",""),o.setAttribute("label",this.t("openapiExampleValue")),o.setAttribute("header",""),o.setAttribute("badge","false"),o.content=JSON.stringify(s,null,2),t.append(n("div",{class:"media-example"},o))}return t}schema(e,r,t,s){let o=b(e,r),c=n("div",{class:"schema",part:"schema"});if(!o)return c.append(n("span",{class:"type",text:A(e,r)})),c;if(s.has(o)||t>12)return c.append(n("span",{class:"type recursive",text:`${A(e,r)} \u21BA`})),c;let p=new Set(s).add(o),d=q(e,o),m=d.type==="array"||d.items?b(e,d.items):null,h=m?q(e,m):d,x=h.properties&&typeof h.properties=="object"?Object.entries(h.properties):[];if(!x.length){c.append(n("code",{class:"type",text:A(e,r)}));let u=Q(d);u&&c.append(n("span",{class:"constraints",text:u}));for(let l of["oneOf","anyOf"])if(Array.isArray(d[l])){let g=n("div",{class:"variants"});for(let _ of d[l].slice(0,8))g.append(this.schema(e,_,t+1,p));c.append(g)}return c}m&&t===0&&c.append(n("code",{class:"type",text:A(e,r)}));let y=new Set(Array.isArray(h.required)?h.required:[]),a=n("ul",{class:"props"});for(let[u,l]of x.slice(0,200)){let g=b(e,l)??{},_=q(e,g),$=_.items?b(e,_.items):null,ee=!!(_.properties||$?.properties||$?.allOf),P=n("div",{class:"prop-row"},n("code",{class:"prop-name",text:u}),n("code",{class:"type",text:A(e,l)}),y.has(u)?n("span",{class:"required",text:this.t("openapiRequired")}):null,g.readOnly?n("span",{class:"flag",text:"read-only"}):null,g.writeOnly?n("span",{class:"flag",text:"write-only"}):null,g.deprecated?n("span",{class:"flag",text:this.t("openapiDeprecated")}):null),S=n("li",{class:"prop"});if(ee&&t<12){let O=n("details",{attrs:{open:t<1?"":null}},n("summary",{},P));g.description&&O.append(n("p",{class:"prop-description",text:g.description})),O.append(this.schema(e,l,t+1,p)),S.append(O)}else{S.append(P),g.description&&S.append(n("p",{class:"prop-description",text:g.description}));let O=Q(g);O&&S.append(n("p",{class:"constraints",text:O}))}a.append(S)}return c.append(a),c}exampleExchange(e,r){let t=r.root,s=Math.min(Math.max(0,r.servers.length-1),j(this.getAttribute("server"),{min:0,max:50,fallback:0})),o=(r.servers[s]?.url||"https://api.example.com").replace(/\/$/,""),c=e.path,p=[],d={};for(let a of e.parameters){let u=a.example??(a.schema?w(t,a.schema):"value"),l=typeof u=="string"?u:JSON.stringify(u);a.in==="path"?c=c.split(`{${a.name}}`).join(encodeURIComponent(l)):a.in==="query"&&a.required?p.push(`${encodeURIComponent(a.name)}=${encodeURIComponent(l)}`):a.in==="header"&&a.required&&(d[a.name]=l)}for(let a of e.security){let u=r.securitySchemes.find(l=>l.name===a);if(u){if(/bearer/i.test(u.type)||/OAuth|OpenID/.test(u.type))d.Authorization="Bearer YOUR_TOKEN";else if(/basic/i.test(u.type))d.Authorization="Basic YOUR_CREDENTIALS";else{let l=/API key in header "([^"]+)"/.exec(u.type);l&&(d[l[1]]="YOUR_API_KEY")}break}}let m,h=e.requestBody?.content.find(a=>/json/i.test(a.type))??e.requestBody?.content[0];if(h){d["Content-Type"]=h.type;let a=h.example!==void 0?h.example:h.schema?w(t,h.schema):void 0;a!==void 0&&(m=typeof a=="string"?a:JSON.stringify(a,null,2))}let x=e.responses.find(a=>/^2/.test(a.status))??e.responses[0],y=null;if(x){let a=/^\d{3}$/.test(x.status)?Number(x.status):200,u=x.content.find(g=>/json/i.test(g.type))??x.content[0],l=u?u.example!==void 0?u.example:u.schema?w(t,u.schema):void 0:void 0;y={status:a,headers:u?{"Content-Type":u.type}:{},body:l===void 0?"":typeof l=="string"?l:JSON.stringify(l,null,2)}}return{request:{method:e.method,url:`${o}${c}${p.length?`?${p.join("&")}`:""}`,headers:d,body:m},response:y}}prose(e,r="prose"){if(this.feature("markdown")&&customElements.get("vt-markdown")){let t=document.createElement("vt-markdown");return t.className=r,t.setAttribute("images","block"),t.content=e,t}return n("p",{class:`${r} plain`,text:e})}createEditor(){this.editor?.destroy();let e=/^\s*[[{]/.test(this.text??"");return this.editor=new G({text:this.text??"",language:e?"json":"yaml",lineNumbers:!0,wrap:!1,highlightLimit:H().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:r=>this.edited(r),onChange:r=>T(this,I.CHANGE,{value:r}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.render()},400)}};function Q(i){let e=[],r=(t,s)=>{s!=null&&e.push(`${t} ${typeof s=="string"?s:JSON.stringify(s)}`)};return r("min",i.minimum),r("max",i.maximum),r("min length",i.minLength),r("max length",i.maxLength),r("min items",i.minItems),r("max items",i.maxItems),r("pattern",i.pattern),Array.isArray(i.enum)&&i.enum.length>6&&r("one of",i.enum.slice(0,12).join(", ")),i.default!==void 0&&r("default",JSON.stringify(i.default)),i.example!==void 0&&r("example",JSON.stringify(i.example)),e.join(", ")}function oe(i){let e=i.split(`
`)[0].trim();return e.length>160?`${e.slice(0,159)}\u2026`:e}export{Z as a};
//# sourceMappingURL=chunk-YOOYVCXO.js.map
