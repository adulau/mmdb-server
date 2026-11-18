/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as M}from"./chunk-YCSGENO5.js";import{r as L}from"./chunk-3VQOL2NW.js";import{I as v,M as _,N,Q as A,U as T,X as j,b as O,d as q,e as k,l as f,o as $}from"./chunk-DNNVKOIB.js";import{h as I,k as b,l as w,q as y}from"./chunk-2IDMCIF6.js";var H=`/*
 * File tree: folders and files with icons by kind, indentation guides, notes and
 * change markers. Uses the UI font: names are labels, not code.
 */
.tree-body {
  padding: var(--_space-2) 0;
  background: var(--_surface);
}

.tree,
.group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tree {
  --_indent: 1.15rem;
  min-width: 100%;
  width: max-content;
  color: var(--_fg);
  font-size: var(--_font-size-ui);
  line-height: 1.5;
}

.item {
  outline: none;
}

.row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  padding: 2px var(--_space-4) 2px calc(var(--_space-2) + var(--_level, 0) * var(--_indent));
  border-radius: var(--_radius-sm);
  margin: 0 var(--_space-1);
  cursor: default;
}

.folder > .row {
  cursor: pointer;
}

.row:hover {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.item[aria-selected='true'] > .row {
  background: var(--_accent-soft);
}

.item:focus-visible > .row {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

/* Indentation guides: one line per level, drawn on the rows themselves. */
.tree.guides .group {
  position: relative;
}

.tree.guides .group::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 6px;
  left: calc(var(--_space-1) + var(--_space-2) + var(--_level-guide, 0) * var(--_indent) + 7px);
  border-left: 1px solid color-mix(in srgb, var(--_border-strong) 70%, transparent);
  pointer-events: none;
}

.twisty {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
}

.twisty .icon {
  width: 14px;
  height: 14px;
  transition: transform var(--_duration) var(--_easing);
}

.item[aria-expanded='true'] > .row .twisty .icon {
  transform: rotate(90deg);
}

.glyph {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
}

.folder > .row > .glyph {
  color: var(--_accent-fg);
}

.kind-code > .glyph {
  color: var(--_info);
}

.kind-data > .glyph {
  color: var(--_warning);
}

.kind-doc > .glyph {
  color: var(--_syntax-string);
}

.kind-image > .glyph {
  color: var(--_syntax-keyword);
}

.name {
  color: inherit;
  white-space: pre;
}

.folder > .row > .name {
  font-weight: 600;
}

a.name {
  text-decoration: none;
}

a.name:hover {
  color: var(--_accent-fg);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.note {
  min-width: 0;
  margin-left: var(--_space-2);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  white-space: pre;
}

.note::before {
  content: '# ';
  opacity: 0.6;
}

mark.match {
  border-radius: 2px;
  background: var(--_highlight);
  color: inherit;
}

mark.match.current {
  background: var(--_highlight-current);
}

/* ---------- Change markers ---------- */

.status-mark {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: var(--_radius-full);
  font-family: var(--_font-mono);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
}

.status-added > .row > .name {
  color: var(--_success);
}

.status-added > .row > .status-mark {
  background: color-mix(in srgb, var(--_success) 18%, transparent);
  color: var(--_success);
}

.status-removed > .row > .name {
  color: var(--_danger);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}

.status-removed > .row > .status-mark {
  background: color-mix(in srgb, var(--_danger) 18%, transparent);
  color: var(--_danger);
}

.status-modified > .row > .name {
  color: var(--_warning);
}

.status-modified > .row > .status-mark {
  background: color-mix(in srgb, var(--_warning) 20%, transparent);
  color: var(--_warning);
}

.status-highlighted > .row {
  background: color-mix(in srgb, var(--_accent-soft) 80%, transparent);
  box-shadow: inset 3px 0 0 var(--_accent);
}

/* ---------- Path bar ---------- */

.pathbar {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 36px;
  padding: 0 var(--_space-2) 0 var(--_space-3);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
}

.path-text {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  white-space: nowrap;
  text-overflow: ellipsis;
}

.path-text:empty::before {
  content: '\\200b';
}

/* ---------- Edit mode: editor above, live tree below ---------- */

.tree-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

.vt[data-fullscreen] .tree-edit {
  display: grid;
  flex: 1 1 auto;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 0;
}

.vt[data-fullscreen] .tree-edit > .editor-body {
  max-height: none;
}
`;var G={code:["js","mjs","cjs","jsx","ts","mts","cts","tsx","py","rb","go","rs","java","kt","kts","swift","c","h","cc","cpp","hpp","cs","php","sh","bash","zsh","fish","ps1","html","htm","css","scss","sass","less","vue","svelte","astro","sql","lua","dart","ex","exs","erl","hs","scala","clj","r","pl","zig","nim","wasm"],data:["json","jsonc","json5","yaml","yml","toml","xml","ini","cfg","conf","env","lock","csv","tsv","properties","plist","graphql","gql","proto","prisma"],doc:["md","mdx","markdown","txt","rst","adoc","org","tex","pdf","doc","docx","rtf"],image:["png","jpg","jpeg","gif","svg","webp","avif","ico","bmp","tif","tiff","heic"]},D=new Map;for(let[d,e]of Object.entries(G))for(let t of e)D.set(t,d);var X={dockerfile:"code",makefile:"code",rakefile:"code",gemfile:"data",procfile:"data",readme:"doc",license:"doc",licence:"doc",changelog:"doc",contributing:"doc",authors:"doc",notice:"doc",copying:"doc"},Q={code:"file-code",data:"file-data",doc:"file-text",image:"file-image",file:"file"};function B(d){let e=d.toLowerCase(),t=e.replace(/\.[^.]*$/,""),r=X[e]??X[t];if(!r){let n=e.lastIndexOf(".");n>0?r=D.get(e.slice(n+1)):n===0&&(r="data")}let s=r??"file";return{kind:s,icon:Q[s]}}var V={"+":"added","-":"removed","~":"modified","*":"highlighted"},Y=new Set(["added","removed","modified","highlighted"]),g=class extends Error{constructor(e,t){super(t),this.code=e}},S=class{constructor(){this.count=0,this.files=0,this.folders=0,this.truncated=!1}node(e,t={}){return this.count>=2e4?(this.truncated=!0,null):(this.count+=1,{name:C(e,255),type:t.type??"file",children:[],note:C(t.note??"",500),status:t.status??null})}finish(e){let t=[...e];for(;t.length;){let r=t.pop();r.children.length&&(r.type="folder"),r.type==="folder"?this.folders+=1:this.files+=1,t.push(...r.children)}}};function C(d,e){let t=Array.from(String(d)).filter(r=>{let s=r.charCodeAt(0);return s>=32&&s!==127}).join("").trim();return t.length>e?`${t.slice(0,e-1)}\u2026`:t}function E(d){let e=d.trim(),t=null,r=/^([+\-~*]) (?=\S)/.exec(e);r&&(t=V[r[1]],e=e.slice(2));let s="",n=/\s+#\s?(.*)$/.exec(e);n&&n.index>0&&(s=n[1],e=e.slice(0,n.index));let o=/[/\\]$/.test(e);return{name:e.replace(/[/\\]+$/,"")||e,folder:o,note:s,status:t}}function z(d){let e=d.replace(/^\uFEFF/,""),t=e.trim(),r=new S,s,n;if(/^[[{]/.test(t))s="json",n=te(t,r);else{let o=e.split(/\r\n?|\n/).filter(i=>i.trim());o.some(i=>/[├└]──|[|`]-- /.test(i))?(s="tree",n=ee(o,r)):o.some(i=>/^\s/.test(i))?(s="indent",n=Z(o,r)):(s="paths",n=W(o,r))}return r.finish(n),{roots:n,format:s,files:r.files,folders:r.folders,truncated:r.truncated}}function P(d,e,t,r){let s=Math.min(t,e.length,63);if(e.length=s,s===0)d.push(r);else{let n=e[s-1];n.type="folder",n.children.push(r)}e.push(r)}function Z(d,e){let t=d.map(a=>(/^[ \t]*/.exec(a)?.[0]??"").replace(/\t/g,"    ").length),r=Math.min(...t),s=t.map(a=>a-r).filter(a=>a>0),n=s.length?Math.min(...s):2,o=[],i=[];for(let a=0;a<d.length;a+=1){let{name:l,folder:c,note:p,status:h}=E(d[a]),m=e.node(l,{type:c?"folder":"file",note:p,status:h});if(!m)break;P(o,i,Math.round((t[a]-r)/n),m)}return o}function ee(d,e){let t=[],r=[];for(let s of d){if(/^\d+ director(?:y|ies)(?:, \d+ files?)?$/.test(s.trim()))continue;let n=/^((?:[│|] {3}|\s{4})*)(?:[├└]── |[|`]-- )?/.exec(s),o=n?.[1]??"",a=(n?n[0].length>o.length:!1)?o.length/4+1:0,{name:l,folder:c,note:p,status:h}=E(s.slice(n?.[0].length??0)),m=e.node(l,{type:c?"folder":"file",note:p,status:h});if(!m)break;P(t,r,a,m)}return t}function W(d,e){let t=[],r=new Map;for(let s of d){let{name:n,folder:o,note:i,status:a}=E(s),l=n.split(/[/\\]+/).filter(h=>h&&h!==".").slice(0,64);if(!l.length)continue;let c=t,p="";for(let h=0;h<l.length;h+=1){p+=`/${l[h]}`;let m=h===l.length-1;if(m&&!o){let x=e.node(l[h],{note:i,status:a});if(!x)return t;c.push(x);break}let u=r.get(p);if(!u){let x=e.node(l[h],{type:"folder"});if(!x)return t;u=x,r.set(p,u),c.push(u)}m&&(i&&(u.note=C(i,500)),a&&(u.status=a)),c=u.children}}return t}function te(d,e){let t;try{t=JSON.parse(d)}catch(o){throw o instanceof RangeError?new g("tooDeep","JSON nested too deeply."):new g("invalidJson",o instanceof Error?o.message:"Invalid JSON.")}if(Array.isArray(t)&&t.every(o=>typeof o=="string"))return W(t,e);let r=[],s=[],n=(o,i,a=0)=>{if(Array.isArray(o))for(let l of o)s.push({value:l,name:null,into:i,depth:a});else if(o&&typeof o=="object")for(let[l,c]of Object.entries(o))s.push({value:c,name:l,into:i,depth:a})};n(t,r);for(let o=0;o<s.length;o+=1){let{value:i,name:a,into:l,depth:c}=s[o];if(c>=64)continue;let p;if(a===null)if(typeof i=="string")p=e.node(i);else if(i&&typeof i=="object"&&!Array.isArray(i)){let h=i;if(typeof h.name!="string"&&typeof h.name!="number")continue;let m=typeof h.status=="string"&&Y.has(h.status)?h.status:null,u=Array.isArray(h.children)?h.children:null;p=e.node(String(h.name),{type:h.type==="folder"||h.type==="directory"||u?"folder":"file",note:typeof h.note=="string"?h.note:"",status:m}),p&&u&&n(u,p.children,c+1)}else continue;else{let h=!!i&&typeof i=="object";p=e.node(a,{type:h?"folder":"file",note:typeof i=="string"?i:""}),p&&h&&n(i,p.children,c+1)}if(!p)break;l.push(p)}return r}function J(d){let e=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),t=[d];for(;t.length;){let r=t.pop();r.sort((s,n)=>s.type===n.type?e.compare(s.name,n.name):s.type==="folder"?-1:1);for(let s of r)s.children.length&&t.push(s.children)}}function U(d){let e=[],t=d.map((r,s)=>({node:r,prefix:"",last:s===d.length-1,top:!0})).reverse();for(;t.length;){let{node:r,prefix:s,last:n,top:o}=t.pop(),i=`${r.name}${r.type==="folder"?"/":""}${r.note?`  # ${r.note}`:""}`;e.push(o?i:`${s}${n?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 "}${i}`);let a=o?"":`${s}${n?"    ":"\u2502   "}`;for(let l=r.children.length-1;l>=0;l-=1)t.push({node:r.children[l],prefix:a,last:l===r.children.length-1,top:!1})}return e.join(`
`)}function R(d){let e=t=>({name:t.name,type:t.type,...t.note?{note:t.note}:{},...t.status?{status:t.status}:{},...t.type==="folder"?{children:t.children.map(e)}:{}});return d.map(e)}var se=["none","name"],oe=["_self","_blank"],F=class extends j{static type="tree";static componentAttributes=Object.freeze(["depth","sort","href-template","link-target","icons","guides","expand-controls","path"]);static presets={simple:{icons:!0,guides:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,icons:!0,guides:!0,"expand-controls":!0,path:!0}};static styles=[O,M,H];static upgradeProperties=["content","data"];constructor(){super(),this.parsed=null,this.parents=new WeakMap,this.open=new WeakSet,this.known=new WeakSet,this.nodes=new WeakMap,this.selected=null,this.query="",this.matchItems=[],this.treeHost=null,this.pathText=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.selected=null}attributeChangedCallback(e,t,r){e==="sort"&&(this.parsed=null),e==="depth"&&(this.known=new WeakSet),super.attributeChangedCallback(e,t,r)}parse(){let e=this.text??"",t=k(this.getAttribute("sort"),se,"none"),r=`${t}\0${e}`;if(this.parsed?.key!==r){let s=null,n=null;try{s=z(e),t==="name"&&J(s.roots)}catch(o){n=o instanceof g?o:new g("invalidJson",String(o))}if(this.parsed={key:r,result:s,error:n},this.parents=new WeakMap,this.open=new WeakSet,this.known=new WeakSet,s){let o=s.roots.map(i=>[i,null]);for(;o.length;){let[i,a]=o.pop();this.parents.set(i,a);for(let l of i.children)o.push([l,i])}}}return this.parsed}get data(){return R(this.parse().result?.roots??[])}set data(e){let t;try{t=JSON.stringify(e??[])}catch{t="[]"}this.content=t}pathOf(e){let t=[],r=e;for(;r;){let s=this.parents.get(r);s===null&&r.name==="."||t.unshift(r.name),r=s}return t.join("/")}isOpen(e,t){if(this.known.has(e))return this.open.has(e);let r=q(this.getAttribute("depth"),{min:0,max:64,fallback:64});return t<=r}setOpen(e,t){this.known.add(e),t?this.open.add(e):this.open.delete(e)}renderContent(e){let t=this.t,{result:r,error:s}=this.parse(),n=f("div",{class:"panel"}),o=[];if(this.editing){let c=this.createEditor();this.treeHost=f("div",{class:"body tree-body tree-preview",part:"body preview"}),n.classList.add("tree-edit"),n.append(f("div",{class:"body editor-body",part:"body source"},c.element),this.treeHost),o=this.historyButtons(c)}else this.treeHost=f("div",{class:"body tree-body",part:"body"}),n.append(this.treeHost);this.renderTree(),this.feature("path")&&!this.editing?(this.pathText=f("code",{class:"path-text",text:this.selected?this.pathOf(this.selected):""}),n.append(f("div",{class:"pathbar",part:"path"},this.pathText,f("div",{class:"toolbar"},this.copyTextButton(()=>this.selected?this.pathOf(this.selected):"",t("copyPath"),"copy-path"))))):this.pathText=null;let i={run:c=>this.filter(c),go:c=>this.goToMatch(c),clear:()=>this.filter("")},a=[this.searchButton(i),...o,this.feature("expand-controls")&&!this.editing?[A({icon:"expand-all",label:t("expandAll"),key:"expand-all",onClick:()=>this.expandAll(!0)}),A({icon:"collapse-all",label:t("collapseAll"),key:"collapse-all",onClick:()=>this.expandAll(!1)})]:null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.treeText(),this.downloadName("tree.txt"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>this.treeText(),t("copyTree")):null].flat(),l=r&&!s?t("treeStats",{folders:y(r.folders,this.locale),files:y(r.files,this.locale)}):"";e.append(...this.chrome({badge:l,actions:a}),n),this.editor?.align()}treeText(){return U(this.parse().result?.roots??[])}renderTree(){let e=this.treeHost;if(!e)return;let{result:t,error:r}=this.parse();if(this.matchItems=[],r||!t){e.replaceChildren(T(r?.code==="tooDeep"?this.t("tooComplex"):this.t("invalidTree",{message:r?.message??""})));return}let s=[];if(t.truncated&&s.push(T(this.t("treeTruncated",{limit:y(2e4,this.locale)}))),!t.roots.length){e.replaceChildren(...s,f("div",{class:"empty",part:"empty",text:this.t("empty")}));return}let n=this.query?this.visibleForQuery(t.roots):null,o=f("ul",{class:`tree${this.feature("guides")?" guides":""}`,part:"tree",attrs:{role:"tree","aria-label":this.heading||this.t("files"),"aria-multiselectable":"false"},on:{keydown:a=>this.onKeyDown(a),click:a=>this.onClick(a)}});this.appendItems(o,t.roots,1,n),e.replaceChildren(...s,o),(this.selected&&this.itemOf(this.selected)||o.querySelector('[role="treeitem"]'))?.setAttribute("tabindex","0")}visibleForQuery(e){let t=this.query.toLowerCase(),r=new Set,s=[...e];for(;s.length;){let n=s.pop();if(n.name.toLowerCase().includes(t)||n.note.toLowerCase().includes(t)){let o=n;for(;o&&!r.has(o);)r.add(o),o=this.parents.get(o)}s.push(...n.children)}return r}appendItems(e,t,r,s){let n=s?t.filter(o=>s.has(o)):t;n.forEach((o,i)=>{e.append(this.item(o,r,i+1,n.length,s))})}item(e,t,r,s,n){let o=e.type==="folder",i=o&&(n?!0:this.isOpen(e,t)),a=o?null:B(e.name),l=f("li",{class:`item${o?" folder":""}${e.status?` status-${e.status}`:""}`,part:"item",attrs:{role:"treeitem","aria-level":t,"aria-setsize":s,"aria-posinset":r,"aria-expanded":o?String(i):null,"aria-selected":String(e===this.selected),tabindex:"-1"}});this.nodes.set(l,e);let c=f("div",{class:`row${a?` kind-${a.kind}`:""}`,part:`row ${o?"folder":`file file-${a?.kind}`}`});if(c.style.setProperty("--_level",String(t-1)),c.append(f("span",{class:"twisty",attrs:{"aria-hidden":"true"}},o?v("chevron-right"):null)),this.feature("icons")){let p=v(o?i?"folder-open":"folder":a?.icon);p.classList.add("glyph"),c.append(p)}return c.append(this.nameNode(e)),e.status&&e.status!=="highlighted"&&c.append(f("span",{class:"status-mark",text:{added:"+",removed:"\u2212",modified:"~"}[e.status],attrs:{"aria-hidden":"true"}})),e.status&&c.append(f("span",{class:"sr-only",text:`, ${this.t(`status_${e.status}`)}`})),e.note&&c.append(f("span",{class:"note",part:"note",text:e.note})),l.append(c),o&&i&&l.append(this.group(e,t,n)),n&&this.query&&this.markMatches(c,l),l}group(e,t,r){let s=f("ul",{class:"group",attrs:{role:"group"}});return s.style.setProperty("--_level-guide",String(t-1)),this.appendItems(s,e.children,t+1,r),s}nameNode(e){let t=this.getAttribute("href-template");if(t&&e.type==="file"){let r=this.pathOf(e),s=t.replace(/\{path\}/g,r.split("/").map(encodeURIComponent).join("/")).replace(/\{name\}/g,encodeURIComponent(e.name));if($(s)){let n=k(this.getAttribute("link-target"),oe,"_self");return f("a",{class:"name",part:"name",text:e.name,attrs:{href:s,tabindex:"-1",target:n==="_blank"?"_blank":null,rel:n==="_blank"?"noopener noreferrer":null}})}}return f("span",{class:"name",part:"name",text:e.name})}markMatches(e,t){let r=this.query.toLowerCase(),s=!1;for(let n of e.querySelectorAll(".name, .note")){let o=n.textContent??"",i=o.toLowerCase().indexOf(r);if(i<0)continue;s=!0;let a=f("mark",{class:"match",part:"match",text:o.slice(i,i+r.length)});n.replaceChildren(o.slice(0,i),a,o.slice(i+r.length))}s&&this.matchItems.length<_&&this.matchItems.push(t)}itemOf(e){for(let t of this.treeHost?.querySelectorAll('[role="treeitem"]')??[])if(this.nodes.get(t)===e)return t;return null}filter(e){return this.query=e.slice(0,N).trim(),this.renderTree(),{total:this.matchItems.length,capped:this.matchItems.length>=_}}goToMatch(e){for(let r of this.treeHost?.querySelectorAll("mark.current")??[])r.classList.remove("current");let t=this.matchItems[e];if(t){for(let r of t.querySelector(":scope > .row")?.querySelectorAll("mark")??[])r.classList.add("current");t.querySelector(":scope > .row")?.scrollIntoView({block:"nearest",inline:"nearest"})}}toggle(e,t){let r=this.nodes.get(e);if(!r||r.type!=="folder"||e.getAttribute("aria-expanded")==="true"===t)return;this.setOpen(r,t),e.setAttribute("aria-expanded",String(t));let s=e.querySelector(":scope > .row > .glyph");if(s){let o=v(t?"folder-open":"folder");o.classList.add("glyph"),s.replaceWith(o)}let n=e.querySelector(":scope > .group");if(t&&!n){let o=Number(e.getAttribute("aria-level"));e.append(this.group(r,o,this.query?this.visibleForQuery(this.parse().result?.roots??[]):null))}else t||n?.remove();w(this,b.TOGGLE,{path:this.pathOf(r),expanded:t})}expandAll(e){let r=[...this.parse().result?.roots??[]];for(;r.length;){let s=r.pop();s.type==="folder"&&this.setOpen(s,e),r.push(...s.children)}this.renderTree(),this.announce(this.t(e?"expandAll":"collapseAll"))}focusItem(e){for(let r of this.treeHost?.querySelectorAll('[role="treeitem"][tabindex="0"]')??[])r.setAttribute("tabindex","-1");e.setAttribute("tabindex","0"),e.focus();let t=this.nodes.get(e);t&&(this.treeHost?.querySelector('[aria-selected="true"]')?.setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true"),this.selected=t,this.pathText&&(this.pathText.textContent=this.pathOf(t)))}activate(e){let t=this.nodes.get(e);t&&(this.focusItem(e),w(this,b.SELECT,{path:this.pathOf(t),name:t.name,type:t.type,note:t.note,status:t.status}))}onClick(e){let t=e.target,r=t.closest?.('[role="treeitem"]');!r||!t.closest(".row")||(r.classList.contains("folder")&&this.toggle(r,r.getAttribute("aria-expanded")!=="true"),this.activate(r))}visibleItems(){return Array.from(this.treeHost?.querySelectorAll('[role="treeitem"]')??[])}onKeyDown(e){let t=e.target.closest?.('[role="treeitem"]');if(!t||e.ctrlKey||e.metaKey||e.altKey)return;let r=this.visibleItems(),s=r.indexOf(t),n=t.classList.contains("folder"),o=t.getAttribute("aria-expanded")==="true",i;switch(e.key){case"ArrowDown":i=r[s+1];break;case"ArrowUp":i=r[s-1];break;case"Home":i=r[0];break;case"End":i=r[r.length-1];break;case"ArrowRight":n&&!o?this.toggle(t,!0):n&&(i=t.querySelector('[role="treeitem"]')??void 0);break;case"ArrowLeft":n&&o?this.toggle(t,!1):i=t.parentElement?.closest('[role="treeitem"]')??void 0;break;case"Enter":case" ":{let a=t.querySelector(":scope > .row > a.name");if(e.key==="Enter"&&a instanceof HTMLAnchorElement){a.click();break}n&&this.toggle(t,!o),this.activate(t);break}case"*":{let a=t.parentElement?.querySelectorAll(":scope > .folder")??[];for(let l of a)this.toggle(l,!0);break}default:if(e.key.length===1&&/\S/.test(e.key)){let a=e.key.toLowerCase();if(i=[...r.slice(s+1),...r.slice(0,s+1)].find(c=>(this.nodes.get(c)?.name??"").toLowerCase().startsWith(a)),!i)return}else return}e.preventDefault(),i&&this.focusItem(i)}createEditor(){return this.editor?.destroy(),this.editor=new L({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!1,highlightLimit:I().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>w(this,b.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.renderTree();let e=this.parse().result,t=this.root.querySelector('[part="badge"]');t&&e&&(t.textContent=this.t("treeStats",{folders:y(e.folders,this.locale),files:y(e.files,this.locale)}))},120)}};export{F as a};
//# sourceMappingURL=chunk-2LJVQKUT.js.map
