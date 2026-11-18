/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{h as H,i as k}from"./chunk-55LGTNZX.js";import{f as B}from"./chunk-E4EMJARX.js";import{a as C}from"./chunk-YCSGENO5.js";import{p as V,q as x,r as L}from"./chunk-3VQOL2NW.js";import{M as $,N as q,O as w,Q as A,R as I,U as z,X as N,b as _,e as v,l as d,n as S}from"./chunk-DNNVKOIB.js";import{h as g,k as b,l as y,m as T,q as E}from"./chunk-2IDMCIF6.js";var R=Object.freeze({env:"Configuration",envKey:"Key",envValue:"Value",envEmpty:"empty",envSecret:"Secret value, masked",envNoMatch:"No entry matches the search.",envInvalid:"{count} lines could not be read (first: line {line})."}),M={env:"Configuration",envKey:"Cl\xE9",envValue:"Valeur",envEmpty:"vide",envSecret:"Valeur secr\xE8te, masqu\xE9e",envNoMatch:"Aucune entr\xE9e ne correspond \xE0 la recherche.",envInvalid:"{count} lignes n\u2019ont pas pu \xEAtre lues (premi\xE8re : ligne {line})."};var O=`/*
 * Configuration files: keys and values grouped by section, secrets masked, references
 * marked. Keys are data: their case is kept.
 */
.env-body {
  background: var(--_surface);
}

.env-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.env-table th,
.env-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.env-table thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--_surface-sunken);
  color: var(--_fg);
  font-weight: 600;
  white-space: nowrap;
}

.env-table tbody tr.entry:hover > * {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.env-table tr.entry.current > * {
  background: var(--_accent-soft);
}

.env-table tr.section > th {
  padding-top: var(--_space-3);
  background: var(--_surface-sunken);
  color: var(--_accent);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.env-table .num {
  width: 1%;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  font-weight: 400;
  text-align: end;
  user-select: none;
}

.env-table td.num::before {
  content: attr(data-n);
}

.env-table .key {
  width: 1%;
  font-weight: 400;
  white-space: nowrap;
}

.env-table .key code {
  color: var(--_syntax-attr, var(--_fg));
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.env-table .export {
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.env-table .value code {
  color: var(--_syntax-string, var(--_fg));
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.env-table .value code.quote-no {
  color: var(--_fg);
}

.env-table .value .secret {
  padding: 1px var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  letter-spacing: 0.08em;
}

.env-table .ref {
  border-radius: var(--_radius-sm);
  background: var(--_accent-soft);
  color: var(--_accent);
  text-decoration: none;
}

.env-table a.ref:hover {
  text-decoration: underline;
}

.env-table a.ref:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.env-table .blank {
  color: var(--_fg-muted);
  font-style: italic;
}

.env-table .comment {
  display: block;
  margin-top: 2px;
  color: var(--_syntax-comment, var(--_fg-muted));
  font-size: var(--_font-size-small);
  white-space: pre-wrap;
}
`;var j=["dotenv","ini","properties"];var Z=/\$\{([A-Za-z_][\w.]*)(?:[:?+-][^}]*)?\}|\$([A-Za-z_]\w*)/g;function Q(u){let e=u.split(`
`,400).map(s=>s.trim());if(e.some(s=>/^\[[^\]]+\]$/.test(s)||/^;/.test(s)))return"ini";if(e.some(s=>/^export\s/.test(s)))return"dotenv";let t=e.filter(s=>s&&!/^[#!;]/.test(s));return t.some(s=>/^[\w.-]+\s*:\s*/.test(s)&&!s.includes("="))?"properties":t.length&&t.every(s=>/^[A-Z_][A-Z0-9_]*=/.test(s))?"dotenv":t.some(s=>/^[a-z][\w-]*(\.[\w-]+)+\s*=/.test(s))?"properties":"dotenv"}function D(u,e="auto"){let t=u.replace(/\r\n?/g,`
`),s=e==="auto"?Q(t):e,r=t.split(`
`),i={format:s,entries:[],sections:[],invalid:[]},a="",n=[];for(let o=0;o<r.length&&i.entries.length<2e4;o+=1){let c=r[o].trim();if(!c){n=[];continue}if(/^[#;]/.test(c)||s==="properties"&&c.startsWith("!")){n.push(c.replace(/^[#;!]+\s?/,""));continue}if(s==="ini"&&/^\[[^\]]*\]/.test(c)){a=c.slice(1,c.indexOf("]")).trim(),i.sections.includes(a)||i.sections.push(a),n=[];continue}let l=s==="properties"?J(r,o):U(r,o,s);if(!l){i.invalid.push({line:o+1,text:c}),n=[];continue}i.entries.push({line:o+1,lines:l.end-o+1,section:a,key:l.key,value:l.value,quote:l.quote,exported:l.exported,comment:[...n,l.comment].filter(Boolean).join(`
`)}),n=[],o=l.end}return i}function U(u,e,t){let s=/^\s*(export\s+)?([^=\s][^=]*?)\s*[=]\s?(.*)$/.exec(u[e]),r=t==="ini"?/^\s*([^:\s][^:]*?)\s*:\s?(.*)$/.exec(u[e]):null;if(!s&&!r)return null;let i=!!s?.[1],a=(s?s[2]:r[1]).trim();if(!a||t==="dotenv"&&/\s/.test(a))return null;let n=(s?s[3]:r[2]).trimStart(),o=/^["'`]/.test(n)?n[0]:"";if(!o){let f=/\s[#;]\s?(.*)$/.exec(n),G=(f?n.slice(0,f.index):n).trim();return{key:a,value:G,quote:o,exported:i,comment:f?.[1].trim()??"",end:e}}let c=e;n=n.slice(1);let l=F(n,o);for(;l<0&&c+1<u.length&&c-e<200;)c+=1,n+=`
${u[c]}`,l=F(n,o);if(l<0)return null;let m=n.slice(0,l),h=n.slice(l+1),p=/^\s*[#;]\s?(.*)$/.exec(h);return{key:a,value:o==='"'?Y(m):m,quote:o,exported:i,comment:p?.[1].trim()??"",end:c}}function F(u,e){for(let t=0;t<u.length;t+=1)if(u[t]==="\\"&&e!=="'")t+=1;else if(u[t]===e)return t;return-1}function Y(u){return u.replace(/\\([nrt"\\$`])/g,(e,t)=>t==="n"?`
`:t==="r"?"\r":t==="t"?"	":t)}function J(u,e){let t=u[e].trimStart(),s=e;for(;/(^|[^\\])(\\\\)*\\$/.test(t)&&s+1<u.length&&s-e<500;)s+=1,t=t.slice(0,-1)+u[s].trimStart();let r=0;for(;r<t.length&&!/[=:\s]/.test(t[r]);)r+=t[r]==="\\"?2:1;let i=K(t.slice(0,r));if(!i)return null;let a=t.slice(r).replace(/^\s*[=:]?\s*/,"");return{key:i,value:K(a),quote:"",exported:!1,comment:"",end:s}}function K(u){return u.replace(/\\(u[0-9a-fA-F]{4}|.)/g,(e,t)=>t.length===5?String.fromCharCode(parseInt(t.slice(1),16)):t==="n"?`
`:t==="t"?"	":t==="r"?"\r":t)}function W(u){let e=[],t=0;for(let s of u.matchAll(Z)){let r=s.index??0;r>0&&u[r-1]==="\\"||(r>t&&e.push({text:u.slice(t,r),ref:null}),e.push({text:s[0],ref:s[1]??s[2]}),t=r+s[0].length)}return t<u.length&&e.push({text:u.slice(t),ref:null}),e}T({en:R,fr:M});var ee=["table","raw"],te={dotenv:".env",ini:"INI",properties:"PROPERTIES"},X=class extends N{static type="env";static fromData=B;static dataAttributes=Object.freeze([]);static componentAttributes=Object.freeze(["format","mask-secrets","secret-keys","tabs","view","comments","line-numbers"]);static presets={simple:{"mask-secrets":!0,comments:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,tabs:!0,"mask-secrets":!0,comments:!0,"line-numbers":!0}};static styles=[_,C,O];static allowEmpty=!0;constructor(){super(),this.parsed=null,this.revealed=!1,this.panelId=S("panel"),this.viewState=null,this.query="",this.matchCount=0,this.tableHost=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}attributeChangedCallback(e,t,s){e==="view"&&(this.viewState=null),e==="format"&&(this.parsed=null),super.attributeChangedCallback(e,t,s)}contentChanged(){this.parsed=null}parse(){let e=this.text??"",t=v(this.getAttribute("format"),["auto",...j],"auto");return(this.parsed?.text!==e||this.parsed.format!==t)&&(this.parsed={text:e,format:t,result:D(e,t)}),this.parsed.result}get entries(){return this.parse().entries.map(e=>({...e}))}get format(){return this.parse().format}get view(){return this.viewState??v(this.getAttribute("view"),ee,this.editing?"raw":"table")}get masking(){return this.feature("mask-secrets")&&!this.revealed}isSecret(e){let t=(this.getAttribute("secret-keys")??"").toLowerCase().split(/[\s,]+/).filter(Boolean),s=e.toLowerCase();return H(s)||t.includes(s)}masked(e){return this.masking&&!!e.value&&this.isSecret(e.key)}displayText(){let e=(this.text??"").replace(/\r\n?/g,`
`);if(!this.masking)return e;let t=e.split(`
`);for(let s of this.parse().entries){if(!this.masked(s))continue;let r=s.line-1,i=k(s.value),a=t[r].search(/[=:]/);if(s.lines>1||a<0){t[r]=`${t[r].slice(0,a+1)}${i}`;for(let n=1;n<s.lines;n+=1)t[r+n]=""}else{let n=t[r].slice(0,a+1),o=t[r].slice(a+1),c=s.quote?`${s.quote}${s.value}${s.quote}`:s.value,l=o.indexOf(c),m=s.quote?`${s.quote}${i}${s.quote}`:i;t[r]=l<0?`${n}${m}`:`${n}${o.slice(0,l)}${m}${o.slice(l+c.length)}`}}return t.join(`
`)}visible(e){if(!this.query)return!0;let t=this.query.toLowerCase();return[e.key,e.section,e.comment,this.masked(e)?"":e.value].some(s=>s.toLowerCase().includes(t))}renderContent(e){let t=this.t,s=this.view,r=this.feature("tabs")?I({tabs:[{id:"table",label:t("table"),icon:"table"},{id:"raw",label:t("raw"),icon:"code"}],selected:s,label:t("tabs"),panelId:this.panelId,onSelect:h=>this.selectView(h)}):null,i=d("div",{class:"panel",attrs:{id:this.panelId,role:r?"tabpanel":null}}),a,n=[];if(s==="raw"&&this.editing){let h=this.createEditor();i.append(d("div",{class:"body editor-body",part:"body"},h.element));let p=null;a={run:f=>(p=new w(h.layer.querySelector("pre.code")),p.run(f)),go:f=>x(p?.go(f)??null),clear:()=>p?.clear()},n=this.historyButtons(h)}else if(s==="raw"){let h=V(this.displayText(),{language:"plaintext",lineNumbers:this.feature("line-numbers"),startLine:1,highlightRanges:[],diff:!1,highlightLimit:g().highlightLimit});i.append(d("div",{class:"body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||t("env")}},h.element));let p=new w(h.code);a={run:f=>p.run(f),go:f=>x(p.go(f)),clear:()=>p.clear()}}else this.tableHost=d("div",{class:"body env-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||t("env")}}),i.append(...this.notices(),this.tableHost),this.renderTable(),a={run:h=>(this.query=h.slice(0,q).trim(),this.renderTable(),{total:this.matchCount,capped:this.matchCount>=$}),go:h=>{let p=this.tableHost?.querySelectorAll("tr.entry")??[];for(let f of p)f.classList.remove("current");p[h]?.classList.add("current"),p[h]?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.renderTable()}};let o=this.parse(),c=this.feature("mask-secrets")&&o.entries.some(h=>h.value&&this.isSecret(h.key)),l=[this.searchButton(a),...n,c&&!this.editing?A({icon:this.revealed?"eye-off":"eye",label:t(this.revealed?"hideSecrets":"showSecrets"),key:"secrets",part:"secrets-button",pressed:this.revealed,onClick:()=>{this.revealed=!this.revealed,this.render(),this.announce(t(this.revealed?"secretsShown":"secretsHidden"))}}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.displayText(),this.downloadName(o.format==="dotenv"?".env":`config.${o.format}`),"text/plain"):null,this.feature("copy")?this.copyButton(()=>this.displayText(),t("copy")):null],m=r?"":this.text?te[o.format]:"";e.append(...this.chrome({badge:m,tabs:r,actions:l}),i),this.editor?.align()}notices(){let{invalid:e}=this.parse();return e.length?[z(this.t("envInvalid",{count:E(e.length,this.locale),line:e[0].line}))]:[]}renderTable(){let e=this.tableHost;if(!e)return;let t=this.t,{entries:s}=this.parse(),r=new Set(s.map(l=>l.key)),i=this.feature("line-numbers"),a=this.feature("comments");this.matchCount=0;let n=d("tbody"),o=null;for(let l of s)this.visible(l)&&(l.section!==o&&(o=l.section,o&&n.append(d("tr",{class:"section",part:"section"},d("th",{text:`[${o}]`,attrs:{colspan:i?3:2,scope:"colgroup"}})))),this.matchCount+=1,n.append(this.row(l,r,i,a)));if(!this.matchCount){e.replaceChildren(d("div",{class:"empty",part:"empty",text:s.length?t("envNoMatch"):t("empty")}));return}let c=d("tr",{},i?d("th",{class:"num",attrs:{scope:"col"},text:"#"}):null,d("th",{attrs:{scope:"col"},text:t("envKey")}),d("th",{attrs:{scope:"col"},text:t("envValue")}));e.replaceChildren(d("table",{class:"env-table",part:"table"},d("thead",{},c),n))}row(e,t,s,r){let i=d("th",{class:"key",attrs:{scope:"row",id:this.keyId(e)}},e.exported?d("span",{class:"export",text:"export "}):null,d("code",{part:"key",text:e.key})),a=d("td",{class:"value"});if(this.masked(e))a.append(d("code",{class:"secret",part:"value secret",text:k(e.value),attrs:{title:this.t("envSecret")}}));else if(!e.value)a.append(d("span",{class:"blank",text:this.t("envEmpty")}));else{let o=d("code",{class:`quote-${e.quote?"yes":"no"}`,part:"value"});for(let c of W(e.value))!c.ref||e.quote==="'"?o.append(c.text):t.has(c.ref)?o.append(d("a",{class:"ref",part:"reference",text:c.text,attrs:{href:`#${this.keyId({key:c.ref})}`},on:{click:l=>this.goToKey(l,c.ref??"")}})):o.append(d("span",{class:"ref",part:"reference",text:c.text}));a.append(o)}r&&e.comment&&a.append(d("span",{class:"comment",part:"comment",text:e.comment}));let n=d("tr",{class:"entry",attrs:{"data-line":e.line}},s?d("td",{class:"num",attrs:{"aria-hidden":"true","data-n":e.line}}):null,i,a);return this.query&&se(n,this.query),n}keyId(e){return`${this.panelId}-k-${e.key.replace(/[^\w-]/g,"_")}`}goToKey(e,t){e.preventDefault();let r=this.root.getElementById?.(this.keyId({key:t}))?.closest("tr");r&&(r.scrollIntoView({block:"nearest"}),r.classList.add("current"),setTimeout(()=>r.classList.remove("current"),1200))}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),y(this,b.TAB_CHANGE,{tab:e}))}createEditor(){return this.editor?.destroy(),this.editor=new L({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:g().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>y(this,b.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null},150)}};function se(u,e){let t=e.toLowerCase(),s=document.createTreeWalker(u,NodeFilter.SHOW_TEXT),r=[];for(let i=s.nextNode();i;i=s.nextNode())i.parentElement?.closest(".secret, .num")||r.push(i);for(let i of r){let a=i,n=(a.nodeValue??"").toLowerCase().indexOf(t);for(;n>=0;){let o=a.splitText(n),c=o.splitText(t.length),l=d("mark",{class:"match",part:"match"});o.replaceWith(l),l.append(o),a=c,n=(a.nodeValue??"").toLowerCase().indexOf(t)}}}export{X as a};
//# sourceMappingURL=chunk-DHIRQXMC.js.map
