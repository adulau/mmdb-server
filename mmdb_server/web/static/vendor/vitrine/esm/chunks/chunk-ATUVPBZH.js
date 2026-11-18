/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as y}from"./chunk-ABGFYLLO.js";import{a as c}from"./chunk-YC7WRYTF.js";import{a as p}from"./chunk-QHH6BVCU.js";import{S as d,T as f,l as i}from"./chunk-DNNVKOIB.js";import{h as l,k as m,l as u,m as h}from"./chunk-2IDMCIF6.js";var g=Object.freeze({yamlValid:"Valid YAML",yamlInvalid:"Invalid YAML at line {line}, column {column}: {message}.",yamlInvalidRaw:"Invalid YAML at line {line}, column {column} \u2014 showing raw text.",yamlLoadFailed:"The YAML reader could not be loaded: {message}",yamlCopyJson:"Copy as JSON",yamlDocuments:"{count} documents",yamlAnchors:"Anchors",yamlAnchorUses:"&{name} at line {line}, used {uses} times"}),x={yamlValid:"YAML valide",yamlInvalid:"YAML invalide \xE0 la ligne {line}, colonne {column} : {message}.",yamlInvalidRaw:"YAML invalide \xE0 la ligne {line}, colonne {column} \u2014 affichage du texte brut.",yamlLoadFailed:"Le lecteur YAML n\u2019a pas pu \xEAtre charg\xE9 : {message}",yamlCopyJson:"Copier en JSON",yamlDocuments:"{count} documents",yamlAnchors:"Ancres",yamlAnchorUses:"&{name} \xE0 la ligne {line}, utilis\xE9e {uses} fois"};var A=`/*
 * YAML additions to the JSON tree: number of documents and the anchors of the stream.
 */
.yaml-anchors {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
  align-items: center;
  padding: var(--_space-2) var(--_space-4);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.yaml-docs {
  margin-right: var(--_space-3);
}

.yaml-anchor {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  color: var(--_accent-fg);
  font-family: var(--_font-mono);
}
`;function w(a,e){let n=a.length===1?a[0]:a;D(n);let o=JSON.stringify(n===void 0?null:n,L,2)??"null";return{result:p(o,{maxDepth:e}),documents:a.length,json:o}}function D(a){let e=[a],n=0,o=0;for(;e.length;){let t=e.pop();if(n+=1,typeof t=="string"&&(o+=t.length),n>v||o>M)throw new Error("The aliases of this document expand to too much content.");if(t!==null&&typeof t=="object"){let r=Object.values(t);if(n+e.length+r.length>v)throw new Error("The aliases of this document expand to too much content.");for(let s of r)e.push(s)}}}function L(a,e){return typeof e=="number"&&!Number.isFinite(e)?String(e):e}function _(a){let e=a??{};return{message:String(e.reason??e.message??a),offset:e.mark?.position??0,line:(e.mark?.line??0)+1,column:(e.mark?.column??0)+1,tooDeep:!1}}var v=5e5,M=32*1024*1024,S=/(^|[\s[{,:-])&([^\s[\]{},]+)/g,N=/(^|[\s[{,:-])\*([^\s[\]{},]+)/g;function b(a){let e=new Map,n=[],o=a.split(`
`);for(let t=0;t<o.length&&t<1e5;t+=1){let r=j(o[t]);for(let s of r.matchAll(S))e.has(s[2])||e.set(s[2],{name:s[2],line:t+1,uses:0});for(let s of r.matchAll(N))n.push(s[2])}for(let t of n){let r=e.get(t);r&&(r.uses+=1)}return[...e.values()]}function j(a){let e="",n=null;for(let o=0;o<a.length;o+=1){let t=a[o];if(n)t===n&&(n=null),e+=" ";else if(t==='"'||t==="'")n=t,e+=" ";else{if(t==="#"&&(o===0||/\s/.test(a[o-1])))break;e+=t}}return e}h({en:g,fr:x});var E=class extends c{static type="yaml";static source=Object.freeze({language:"yaml",file:"data.yaml",mime:"application/yaml",badge:"YAML"});static styles=[...c.styles,A];constructor(){super(),this.yamlInfo=null,this.loadError=null,this.waiting=!1}get data(){return this.parse()?.ok&&this.yamlInfo?JSON.parse(this.yamlInfo.json):void 0}set data(e){super.data=e}parse(){if(this.text===null)return null;let e=this.text,n=l().maxDepth,o=this.parsed;if(o&&o.text===e&&o.maxDepth===n)return o.result;let t=y();if(!t.ready||!t.parseAll)return this.waiting||(this.waiting=!0,t.promise.then(()=>{this.waiting=!1,this._readyPending=!0,this.requestRender()},s=>{this.waiting=!1,this.loadError=s instanceof Error?s:new Error(String(s)),this.requestRender(),u(this,m.ERROR,{message:this.loadError.message,cause:s})})),null;let r;try{let s=w(t.parseAll(e),n);r=s.result,this.yamlInfo={text:e,documents:s.documents,json:s.json}}catch(s){r={ok:!1,error:_(s)},this.yamlInfo=null}return this.parsed={text:e,maxDepth:n,result:r},r}renderContent(e){if(this.text!==null&&!this.parse()){let s=this.loadError?f(this.t("errorTitle"),this.t("yamlLoadFailed",{message:this.loadError.message})):i("div",{class:"body",part:"body"},d(this.t));e.append(...this.chrome(null),s),this._readyPending=!1;return}super.renderContent(e);let n=this.yamlInfo;if(!n||this.editing||this.view!=="tree")return;let o=e.querySelector(".panel"),t=[];n.documents>1&&t.push(i("span",{class:"yaml-docs",text:this.t("yamlDocuments",{count:n.documents})}));let r=b(n.text);r.length&&t.push(i("span",{class:"yaml-anchors-label",text:this.t("yamlAnchors")}),...r.slice(0,50).map(s=>i("code",{class:"yaml-anchor",text:`&${s.name}${s.uses?` \xD7${s.uses}`:""}`,attrs:{title:this.t("yamlAnchorUses",s)}}))),t.length&&o&&o.append(i("div",{class:"yaml-anchors",part:"anchors"},...t))}rawText(e){return this.text??""}extraActions(e){return this.feature("copy")?[this.copyButton(()=>this.yamlInfo?.json??"",this.t("yamlCopyJson"),"copy-json")]:[]}validMessage(){return this.t("yamlValid")}syntaxMessage(e){return e.tooDeep?this.t("tooDeep",{limit:l().maxDepth}):this.t("yamlInvalid",{line:e.line,column:e.column,message:e.message})}rawNotice(e){return this.t("yamlInvalidRaw",{line:e.line,column:e.column})}};export{E as a};
//# sourceMappingURL=chunk-ATUVPBZH.js.map
