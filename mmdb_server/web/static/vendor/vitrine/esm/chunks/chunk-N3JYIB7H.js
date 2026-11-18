/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as R,b as u,c as D,d as f,e as U,f as F,g as M,j as J,k as C}from"./chunk-55LGTNZX.js";import{a as y,c as O}from"./chunk-QHH6BVCU.js";import{a as j}from"./chunk-YCSGENO5.js";import{p as k,q as G,r as V}from"./chunk-3VQOL2NW.js";import{O as N,Q as I,R as x,U as P,X as z,b as A,e as _,l,n as B}from"./chunk-DNNVKOIB.js";import{h as b,k as T,l as S,q as E}from"./chunk-2IDMCIF6.js";var Q=`/*
 * HTTP exchange: request and response sections, each with a start line (method and URL,
 * or status), small section tabs, and a headers table or a formatted body.
 */
.http-body {
  background: var(--_surface);
}

.http.stacked,
.http.columns {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.vt {
  container-type: inline-size;
}

@container (min-width: 760px) {
  .http.columns {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .http.columns > .response {
    border-top: 0;
    border-left: 1px solid var(--_border);
  }
}

.http-message {
  min-width: 0;
}

.http-message + .http-message {
  border-top: 1px solid var(--_border);
}

/* ---------- Start lines ---------- */

.start-line {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 44px;
  padding: var(--_space-2) var(--_space-2) var(--_space-2) var(--_space-3);
}

.method,
.status {
  flex: none;
  padding: 2px 8px;
  border-radius: var(--_radius-sm);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.5;
  --_tone: var(--_fg-muted);
  background: color-mix(in srgb, var(--_tone) 16%, transparent);
  /* Mixed toward the text color: the tone stays recognizable and the label keeps AA
     contrast on its tinted background, in light and dark themes. */
  color: color-mix(in srgb, var(--_tone) 62%, var(--_fg));
}

.method-get,
.method-head,
.method-options {
  --_tone: var(--_info);
}

.method-post {
  --_tone: var(--_success);
}

.method-put,
.method-patch {
  --_tone: var(--_warning);
}

.method-delete {
  --_tone: var(--_danger);
}

.status-1xx,
.status-3xx {
  --_tone: var(--_info);
}

.status-2xx {
  --_tone: var(--_success);
}

.status-4xx {
  --_tone: var(--_warning);
}

.status-5xx {
  --_tone: var(--_danger);
}

.url {
  flex: 1 1 auto;
  min-width: 0;
  color: var(--_fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  overflow-wrap: anywhere;
}

.url .origin {
  color: var(--_fg-muted);
}

.url .origin.implied::after {
  content: ' ';
}

.url .param {
  border-radius: 3px;
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.url .query {
  color: var(--_syntax-string);
}

.meta {
  margin-left: auto;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.line-copy {
  flex: none;
  margin-left: auto;
}

/* ---------- Section tabs ---------- */

.section-tabs {
  min-height: 32px;
  padding: 0 var(--_space-2);
  border-bottom: 1px solid var(--_border);
  font-size: var(--_font-size-small);
}

.section-panel {
  min-width: 0;
}

/* ---------- Tables and bodies ---------- */

.pairs {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.pairs th,
.pairs td {
  padding: 5px var(--_space-3);
  border-bottom: 1px solid color-mix(in srgb, var(--_border) 70%, transparent);
  text-align: left;
  vertical-align: top;
  overflow-wrap: anywhere;
}

.pairs th {
  width: 32%;
  max-width: 260px;
  color: var(--_fg-muted);
  font-weight: 600;
}

.pairs tr:last-child > * {
  border-bottom: 0;
}

.none {
  margin: 0;
  padding: var(--_space-3);
  color: var(--_fg-muted);
  font-style: italic;
}

.message-body,
.snippet {
  background: var(--_code-bg);
}

.message-body .code,
.snippet .code {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

/* ---------- Code view ---------- */

.code-head {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  border-bottom: 1px solid var(--_border);
}

.code-head .section-tabs {
  flex: 1 1 auto;
  border-bottom: 0;
}

.snippet-copy {
  flex: none;
  margin-right: var(--_space-2);
}

.code-panel .note {
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  border-top: 1px solid var(--_border);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Edit mode: editor above, live preview below ---------- */

.http-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

.vt[data-fullscreen] .http-edit {
  display: grid;
  flex: 1 1 auto;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 0;
}

.vt[data-fullscreen] .http-edit > .editor-body {
  max-height: none;
}
`;var H=["curl","fetch","python","httpie"],Z={curl:"bash",fetch:"javascript",python:"python",httpie:"bash"},st=new Set(["host","content-length","connection","transfer-encoding"]),nt=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,rt=new Set(["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]);function v(s){return/^[\w@%+=:,./-]+$/.test(s)?s:`'${s.replace(/'/g,"'\\''")}'`}function d(s){return JSON.stringify(s).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function $(s){return s.headers.filter(([t])=>nt.test(t)&&!st.has(t.toLowerCase()))}function W(s){let t=f(s);return v(t.startsWith("-")?`/${t}`:t)}function ot(s,t){return`${s}:${t.replace(/^[=@]/,"\\$&")}`}function K(s){if(!s.body)return null;let t=(u(s.headers,"content-type")??"").toLowerCase();if(t&&!t.includes("json"))return null;let e=y(s.body,{maxDepth:512});return e.ok?e.value:null}function w(s,t,e=""){let r=e+(t==="python"?"    ":"  ");switch(s.type){case"string":return d(s.value);case"number":return s.raw;case"boolean":return t==="python"?s.value?"True":"False":String(s.value);case"null":return t==="python"?"None":"null";case"array":return s.items.length?`[
${s.items.map(a=>`${r}${w(a,t,r)},`).join(`
`)}
${e}]`:"[]";case"object":{if(!s.entries.length)return"{}";let a=o=>t==="js"&&/^[A-Za-z_$][\w$]*$/.test(o)?o:d(o);return`{
${s.entries.map(o=>`${r}${a(o.key)}: ${w(o.value,t,r)},`).join(`
`)}
${e}}`}default:return"null"}}function at(s){let t=["curl"],e=!!s.body;s.method==="HEAD"?t.push("--head"):!(s.method==="GET"&&!e)&&!(s.method==="POST"&&e)&&t.push(`-X ${s.method}`),t.push(W(s));let n=[t.join(" ")];for(let[r,a]of $(s))n.push(`-H ${v(`${r}: ${a}`)}`);return e&&n.push(`--data-raw ${v(s.body)}`),n.join(` \\
  `)}function it(s,t={}){let e=[];s.method!=="GET"&&e.push(`  method: ${d(s.method)},`);let n=$(s).filter(([o])=>!rt.has(o.toLowerCase()));if(n.length){let o=n.map(([c,h])=>`    ${d(c)}: ${d(h)},`);e.push(`  headers: {
${o.join(`
`)}
  },`)}if(u(s.headers,"cookie")&&e.push("  credentials: 'include',"),s.body&&s.method!=="GET"&&s.method!=="HEAD"){let o=K(s);e.push(o?`  body: JSON.stringify(${w(o,"js","  ")}),`:`  body: ${d(s.body)},`)}let r=d(f(s)),a=e.length?`fetch(${r}, {
${e.join(`
`)}
})`:`fetch(${r})`,i=t.responseType==="json"?"json":"text";return`const response = await ${a};
const data = await response.${i}();`}function lt(s){let t=s.method.toLowerCase(),e=["get","post","put","patch","delete","head","options"].includes(t),n=e?[`    ${d(f(s))},`]:[`    ${d(s.method)},`,`    ${d(f(s))},`],r=K(s),a=$(s).filter(([o,c])=>!(r&&o.toLowerCase()==="content-type"&&/json/i.test(c)));if(a.length){let o=a.map(([c,h])=>`        ${d(c)}: ${d(h)},`);n.push(`    headers={
${o.join(`
`)}
    },`)}return s.body&&n.push(r?`    json=${w(r,"python","    ")},`:`    data=${d(s.body)},`),`import requests

response = ${e?`requests.${t}`:"requests.request"}(
${n.join(`
`)}
)
response.raise_for_status()`}function ct(s){let t=[`http ${s.method} ${W(s)}`];for(let[e,n]of $(s))t.push(v(ot(e,n)));return s.body&&t.push(`--raw ${v(s.body)}`),t.join(` \\
  `)}function X(s,t,e={}){switch(t){case"fetch":return it(s,e);case"python":return lt(s);case"httpie":return ct(s);default:return at(s)}}var ht=["exchange","code"],dt=["stacked","columns"],pt={curl:"curl",fetch:"fetch",python:"Python",httpie:"HTTPie"},Y=class extends z{static type="http";static componentAttributes=Object.freeze(["view","tabs","snippets","mask-secrets","layout"]);static presets={simple:{"mask-secrets":!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,tabs:!0,"mask-secrets":!0}};static styles=[A,j,Q];static upgradeProperties=["content","exchange"];constructor(){super(),this.parsed=null,this.viewState=null,this.requestTab=null,this.responseTab=null,this.language=null,this.revealed=!1,this.panelId=B("panel"),this.editor=null,this.previewHost=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.requestTab=null,this.responseTab=null}attributeChangedCallback(t,e,n){t==="view"&&(this.viewState=null),t==="snippets"&&(this.language=null),super.attributeChangedCallback(t,e,n)}parse(){let t=this.text??"";if(this.parsed?.text!==t)try{this.parsed={text:t,exchange:D(t),error:null}}catch(e){this.parsed={text:t,exchange:null,error:e instanceof Error?e:new R(String(e))}}return this.parsed}get exchange(){let t=this.parse().exchange;return{request:t?.request?structuredClone(t.request):null,response:t?.response?structuredClone(t.response):null}}set exchange(t){let e;try{e=JSON.stringify(t??{})}catch{e="{}"}this.content=e}get masking(){return this.feature("mask-secrets")&&!this.revealed}shown(){let t=this.parse().exchange;return t?this.masking?J(t):t:null}get languages(){let t=this.getAttribute("snippets");if(t===null)return[...H];let e=t.toLowerCase().split(/[\s,]+/).filter(n=>H.includes(n));return[...new Set(e)]}get view(){return(this.viewState??_(this.getAttribute("view"),ht,"exchange"))==="code"&&this.parse().exchange?.request&&this.languages.length?"code":"exchange"}renderContent(t){let e=this.t,{exchange:n,error:r}=this.parse(),a=l("div",{class:"panel",attrs:{id:this.panelId}}),i=[];if(this.editing){let m=this.createEditor();this.previewHost=l("div",{class:"body http-body http-preview",part:"body preview"}),a.classList.add("http-edit"),a.append(l("div",{class:"body editor-body",part:"body source"},m.element),this.previewHost),this.renderPreview(),i=this.historyButtons(m)}else this.previewHost=null,a.append(l("div",{class:"body http-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||this.t("httpExchange")}},...this.renderView()));let o=this.view,c=!!n?.request&&this.languages.length>0,h=this.feature("tabs")&&!this.editing&&c?x({tabs:[{id:"exchange",label:e("httpExchange"),icon:"list"},{id:"code",label:e("code"),icon:"code"}],selected:o,label:e("tabs"),panelId:this.panelId,onSelect:m=>this.select("view",m)}):null;h&&a.setAttribute("role","tabpanel");let p=null,g={run:m=>{let L=this.root.querySelector(".http");return p=L?new N(L,{skip:"button, .sr-only"}):null,p?p.run(m):{total:0,capped:!1}},go:m=>G(p?.go(m)??null),clear:()=>p?.clear()},q=this.feature("mask-secrets")&&n&&!r&&C(n),tt=[this.searchButton(g),...i,q?I({icon:this.revealed?"eye-off":"eye",label:e(this.revealed?"hideSecrets":"showSecrets"),key:"secrets",part:"secrets-button",pressed:this.revealed,onClick:()=>{this.revealed=!this.revealed,this.render(),this.announce(e(this.revealed?"secretsShown":"secretsHidden"))}}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.rawText(),this.downloadName("exchange.http"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>this.rawText(),e("copy")):null];t.append(...this.chrome({badge:h?"":"HTTP",tabs:h,actions:tt}),a),this.editor?.align()}rawText(){let t=this.shown();return t?M(t):this.text??""}select(t,e){t==="view"?this.viewState=e:t==="request"?this.requestTab=e:t==="response"?this.responseTab=e:this.language=e,this.render(),S(this,T.TAB_CHANGE,{tab:e})}renderView(){let{error:t}=this.parse(),e=this.shown();if(t)return[P(this.t("invalidHttp",{message:t.message}))];if(!e||!e.request&&!e.response)return[l("div",{class:"empty",part:"empty",text:this.t("empty")})];if(this.view==="code"&&e.request)return[this.codeView(e)];let n=_(this.getAttribute("layout"),dt,"stacked"),r=l("div",{class:`http ${n}`});return e.request&&r.append(this.requestSection(e.request)),e.response&&r.append(this.responseSection(e.response)),[r]}requestSection(t){let e=this.t,n=U(t.url),r=[t.body?{id:"body",label:e("httpBody")}:null,{id:"headers",label:`${e("httpHeaders")} ${t.headers.length}`},n.length?{id:"query",label:`${e("httpQuery")} ${n.length}`}:null].filter(p=>p!==null),a=r.some(p=>p.id===this.requestTab)?this.requestTab:r[0].id,i=l("div",{class:"start-line"},l("span",{class:`method method-${t.method.toLowerCase()}`,part:"method",text:t.method}),this.urlNode(t)),o=f(t),c=this.copyButton(()=>o,e("copyUrl"),"copy-url");c.classList.add("line-copy"),i.append(c);let h;return a==="headers"?h=this.table(t.headers,e("httpHeaders")):a==="query"?h=this.table(n,e("httpQuery")):h=this.bodyView(t.body,u(t.headers,"content-type")),l("section",{class:"http-message request",part:"request",attrs:{"aria-label":e("httpRequest")}},i,this.sectionTabs("request",r,a,e("httpRequest")),l("div",{class:"section-panel",attrs:{id:`${this.panelId}-request`}},h))}responseSection(t){let e=this.t,n=[{id:"body",label:e("httpBody")},{id:"headers",label:`${e("httpHeaders")} ${t.headers.length}`}],r=this.responseTab==="headers"?"headers":"body",a=`${Math.floor(t.status/100)}xx`,i=l("div",{class:"start-line"},l("span",{class:`status status-${a}`,part:`status status-${a}`,text:`${t.status}${t.statusText?` ${t.statusText}`:""}`})),o=[];t.time!==null&&o.push(`${E(Math.round(t.time),this.locale)} ms`),t.body&&o.push(ft(new TextEncoder().encode(t.body).length,this.locale)),o.length&&i.append(l("span",{class:"meta",text:o.join(", ")}));let c=r==="headers"?this.table(t.headers,e("httpHeaders")):this.bodyView(t.body,u(t.headers,"content-type"));return l("section",{class:"http-message response",part:"response",attrs:{"aria-label":e("httpResponse")}},i,this.sectionTabs("response",n,r,e("httpResponse")),l("div",{class:"section-panel",attrs:{id:`${this.panelId}-response`}},c))}sectionTabs(t,e,n,r){let a=x({tabs:e.map(i=>({id:`${t}-${i.id}`,label:i.label})),selected:`${t}-${n}`,label:r,panelId:`${this.panelId}-${t}`,onSelect:i=>this.select(t,i.slice(t.length+1))});return a.classList.add("section-tabs"),a.setAttribute("part","section-tabs"),a}urlNode(t){let e=l("code",{class:"url",part:"url"}),{origin:n,path:r,rest:a}=ut(t.url),i=u(t.headers,"host");n?e.append(l("span",{class:"origin",text:n})):i&&e.append(l("span",{class:"origin implied",text:i}));for(let o of mt(r))e.append(o.param?l("span",{class:"param",text:o.text}):o.text);return a&&e.append(l("span",{class:"query",text:a})),e}table(t,e){return t.length?l("table",{class:"pairs",part:"headers",attrs:{"aria-label":e}},l("tbody",{},...t.map(([n,r])=>l("tr",{},l("th",{attrs:{scope:"row"},text:n}),l("td",{text:r}))))):l("p",{class:"none",text:this.t("httpNone")})}bodyView(t,e){if(!t)return l("p",{class:"none",text:this.t("httpNoBody")});let n=(e??"").toLowerCase();if(n.includes("x-www-form-urlencoded"))return this.table(F(t),this.t("httpBody"));let r=t,a="plaintext";if(n.includes("json")||!n&&/^\s*[[{]/.test(t)){let o=y(t,{maxDepth:b().maxDepth});o.ok&&(r=O(o.value,{indent:2,sortKeys:!1}),a="json")}else/xml|html|svg/.test(n)||!n&&/^\s*</.test(t)?a="xml":/javascript|ecmascript/.test(n)?a="javascript":/yaml/.test(n)&&(a="yaml");let i=k(r,{language:a,lineNumbers:!1,startLine:1,highlightRanges:[],diff:!1,highlightLimit:b().highlightLimit});return l("div",{class:"message-body",part:"message-body"},i.element)}codeView(t){let e=this.t,n=this.languages,r=this.language&&n.includes(this.language)?this.language:n[0],a=t.request,i=/json/i.test(u(t.response?.headers??[],"content-type")??u(a.headers,"accept")??"")?"json":"text",o=X(a,r,{responseType:i}),c=x({tabs:n.map(g=>({id:`code-${g}`,label:pt[g]})),selected:`code-${r}`,label:e("codeLanguage"),panelId:`${this.panelId}-code`,onSelect:g=>this.select("language",g.slice(5))});c.classList.add("section-tabs"),c.setAttribute("part","section-tabs");let h=k(o,{language:Z[r],lineNumbers:!1,startLine:1,highlightRanges:[],diff:!1,highlightLimit:b().highlightLimit}),p=this.copyButton(()=>o,e("copyCode"),"copy-snippet");return p.classList.add("snippet-copy"),l("div",{class:"http code-panel"},l("div",{class:"code-head"},c,p),l("div",{class:"snippet",part:"snippet",attrs:{id:`${this.panelId}-code`,role:"tabpanel"}},h.element),this.masking&&C(this.parse().exchange)?l("p",{class:"note",text:e("secretsInCode")}):null)}createEditor(){return this.editor?.destroy(),this.editor=new V({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!0,highlightLimit:b().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>S(this,T.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.renderPreview(),150)}renderPreview(){let t=this.previewHost;if(!t)return;let e=t.scrollTop;t.replaceChildren(...this.renderView()),t.scrollTop=e,this.searchOpen&&this.searchQuery&&this.searchBar?.run()}};function ut(s){let t=0,e=s.indexOf("://");if(e>0&&/^[a-z][a-z0-9+.-]*$/i.test(s.slice(0,e))){let r=e+3;for(;r<s.length&&!"/?#".includes(s[r]);)r+=1;t=r}let n=t;for(;n<s.length&&s[n]!=="?"&&s[n]!=="#";)n+=1;return{origin:s.slice(0,t),path:s.slice(t,n),rest:s.slice(n)}}function mt(s){let t=[],e=new Array(s.length+1).fill(-1);for(let i=s.length-1;i>=0;i-=1)e[i]=s[i]==="}"||s[i]==="/"?i:e[i+1];let n="",r=0,a=()=>{n&&t.push({text:n,param:!1}),n=""};for(;r<s.length;){let i=s[r];if(i==="{"){let o=e[r+1]??-1;if(o>r+1&&s[o]==="}"){a(),t.push({text:s.slice(r,o+1),param:!0}),r=o+1;continue}}else if(i===":"&&s[r-1]==="/"&&/[A-Za-z_]/.test(s[r+1]??"")){let o=r+2;for(;o<s.length&&/\w/.test(s[o]);)o+=1;a(),t.push({text:s.slice(r,o),param:!0}),r=o;continue}n+=i,r+=1}return a(),t}function ft(s,t){if(s<1e3)return`${E(s,t)} B`;let e=["kB","MB","GB"],n=s/1e3,r=0;for(;n>=1e3&&r<e.length-1;)n/=1e3,r+=1;return`${new Intl.NumberFormat(t,{maximumFractionDigits:1}).format(n)} ${e[r]}`}export{Y as a};
//# sourceMappingURL=chunk-N3JYIB7H.js.map
