/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as L}from"./chunk-YCSGENO5.js";import{g as P,h as K,i as F,k as j,l as U,m as X,q as G,r as Y}from"./chunk-3VQOL2NW.js";import{O as $,Q as C,R as O,S as q,U as S,V as W,X as V,b as T,c as N,d as M,e as H,l as m,n as I,q as z,r as B,s as A,t as D,u as R}from"./chunk-DNNVKOIB.js";import{h as x,k as v,l as _,q as y}from"./chunk-2IDMCIF6.js";var Q=`/*
 * Diff: one grid per row so long files stay light; colors come from the theme's diff
 * tokens and the syntax theme of the code area.
 */
.diff-body {
  padding: var(--_space-2) 0;
}

.diff {
  --_num-width: calc(var(--_digits, 2) * 1ch + 2 * var(--_space-2));
  width: max-content;
  min-width: 100%;
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
  tab-size: var(--_tab-size);
  color: var(--_code-fg);
}

.diff.wrapped {
  width: auto;
}

.diff .row {
  display: grid;
  grid-template-columns: var(--_num-width) var(--_num-width) 2ch minmax(0, 1fr);
}

.diff.no-numbers .row {
  grid-template-columns: 2ch minmax(0, 1fr);
}

.diff.split .row {
  grid-template-columns: var(--_num-width) minmax(0, 1fr) var(--_num-width) minmax(0, 1fr);
}

.diff.split.no-numbers .row {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.num {
  padding: 0 var(--_space-2);
  background: var(--_code-bg-solid);
  color: var(--_code-gutter);
  font-size: var(--_font-size-small);
  line-height: calc(var(--_font-size) * var(--_line-height));
  font-variant-numeric: tabular-nums;
  text-align: right;
  user-select: none;
  -webkit-user-select: none;
}

.num::before {
  content: attr(data-n);
}

.diff.split .num.right {
  border-left: 1px solid color-mix(in srgb, var(--_code-gutter) 35%, transparent);
}

.code-cell {
  min-width: 0;
  padding: 0 var(--_space-3) 0 var(--_space-1);
  white-space: pre;
}

.diff.wrapped .code-cell {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.diff .sign {
  display: inline-block;
  width: 2ch;
  color: var(--_code-gutter);
  user-select: none;
  -webkit-user-select: none;
}

.diff.split .sign {
  margin-left: calc(-1 * var(--_space-1));
}

.unified .row.delete,
.split .row.delete .left {
  background: var(--_diff-removed);
}

.unified .row.insert,
.split .row.insert .right {
  background: var(--_diff-added);
}

.row.delete > .sign::before,
.row.delete .left .sign::before {
  content: '\\2212';
  color: var(--_danger);
}

.unified .row.insert > .sign::before,
.row.insert .right .sign::before {
  content: '+';
  color: var(--_success);
}

/* The removed side of a paired row keeps its color; the added side gets its own. */
.split .row.delete.insert .left .sign::before {
  content: '\\2212';
}

.code-cell.filler {
  background: repeating-linear-gradient(
    135deg,
    transparent 0 6px,
    color-mix(in srgb, var(--_code-fg) 5%, transparent) 6px 7px
  );
}

mark.word-change {
  border-radius: 2px;
  color: inherit;
}

.row.delete .left mark.word-change,
.unified .row.delete mark.word-change {
  background: color-mix(in srgb, var(--_danger) 32%, transparent);
}

.row.insert .right mark.word-change,
.unified .row.insert mark.word-change {
  background: color-mix(in srgb, var(--_success) 32%, transparent);
}

.fold-row,
.gap {
  border-block: 1px dashed color-mix(in srgb, var(--_code-gutter) 45%, transparent);
  background: color-mix(in srgb, var(--_accent-soft) 50%, transparent);
}

.fold {
  display: block;
  width: 100%;
  padding: 4px var(--_space-3);
  border: 0;
  background: none;
  color: var(--_accent-fg);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
  text-align: left;
  cursor: pointer;
}

.fold:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.gap {
  color: var(--_code-gutter);
  text-align: center;
}

/* ---------- Change navigation ---------- */

.change-count {
  min-width: 4.5ch;
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
  text-align: center;
  white-space: nowrap;
}

/* The change reached with the arrows: an accent bar along its rows. */
.diff .row.current-change > :first-child {
  box-shadow: inset 3px 0 0 var(--_accent);
}

.diff .row.current-change .num {
  color: var(--_accent-fg);
}

/* ---------- Edit mode ---------- */

.diff-editors {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  border-bottom: 1px solid var(--_border);
}

.diff-editors.single {
  grid-template-columns: minmax(0, 1fr);
}

.diff-editor + .diff-editor {
  border-left: 1px solid var(--_border);
}

.diff-editor-label {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  background: var(--_surface);
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.diff-editor .editor-body {
  max-height: min(40vh, 360px);
}

.vt {
  container-type: inline-size;
}

@container (max-width: 640px) {
  .diff-editors {
    grid-template-columns: minmax(0, 1fr);
  }

  .diff-editor + .diff-editor {
    border-top: 1px solid var(--_border);
    border-left: 0;
  }
}

.vt[data-fullscreen] .diff-host {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
}
`;function Z(a,t,e=2e3){let i=[],n=0;for(;n<a.length&&n<t.length&&a[n]===t[n];)i.push({type:"equal",a:n,b:n}),n+=1;let s=a.length,o=t.length,r=[];for(;s>n&&o>n&&a[s-1]===t[o-1];)s-=1,o-=1,r.unshift({type:"equal",a:s,b:o});let c=ct(a,t,n,s,n,o,e);if(c)i.push(...c);else{for(let l=n;l<s;l+=1)i.push({type:"delete",a:l,b:n});for(let l=n;l<o;l+=1)i.push({type:"insert",a:s,b:l})}return i.push(...r),{ops:i,simplified:c===null}}function ct(a,t,e,i,n,s,o){let r=i-e,c=s-n;if(r===0&&c===0)return[];let l=Math.min(r+c,o),d=l+1,p=[],u=new Int32Array(2*l+3);for(let g=0;g<=l;g+=1){let h=new Int32Array(u);for(let f=-g;f<=g;f+=2){let w=f===-g||f!==g&&u[d+f-1]<u[d+f+1]?u[d+f+1]:u[d+f-1]+1,b=w-f;for(;w<r&&b<c&&a[e+w]===t[n+b];)w+=1,b+=1;if(h[d+f]=w,w>=r&&b>=c)return p.push(h),dt(p,d,r,c,e,n)}p.push(h),u=h}return null}function dt(a,t,e,i,n,s){let o=[],r=e,c=i;for(let l=a.length-1;l>0;l-=1){let d=a[l-1],p=r-c,u=p===-l||p!==l&&d[t+p-1]<d[t+p+1]?p+1:p-1,g=d[t+u],h=g-u;for(;r>g&&c>h;)r-=1,c-=1,o.push({type:"equal",a:n+r,b:s+c});r===g?o.push({type:"insert",a:n+r,b:s+h}):o.push({type:"delete",a:n+g,b:s+c}),r=g,c=h}for(;r>0&&c>0;)r-=1,c-=1,o.push({type:"equal",a:n+r,b:s+c});return o.reverse()}function tt(a,t){let e=E(a),i=E(t),n=new Map,s=l=>{let d=n.get(l);return d===void 0&&(d=n.size,n.set(l,d)),d},{ops:o,simplified:r}=Z(e.map(s),i.map(s)),c=o.map(l=>l.type==="equal"?{type:"context",oldNo:l.a+1,newNo:l.b+1,text:e[l.a]}:l.type==="delete"?{type:"delete",oldNo:l.a+1,newNo:null,text:e[l.a]}:{type:"insert",oldNo:null,newNo:l.b+1,text:i[l.b]});return et(c),{lines:c,simplified:r}}function E(a){if(!a)return[];let t=a.replace(/\r\n?/g,`
`).split(`
`);return t[t.length-1]===""&&t.pop(),t}function et(a){let t=0;for(;t<a.length;){if(a[t].type==="context"){t+=1;continue}let e=[],i=[];for(;t<a.length&&a[t].type!=="context";)(a[t].type==="delete"?e:i).push(a[t]),t+=1;let n=Math.min(e.length,i.length);for(let s=0;s<n;s+=1){let[o,r]=ht(e[s].text,i[s].text);e[s].ranges=o,i[s].ranges=r}}}function ht(a,t){if(a.length>1e3||t.length>1e3)return[[],[]];let e=a.match(/\w+|\s+|[^\w\s]/g)??[],i=t.match(/\w+|\s+|[^\w\s]/g)??[],{ops:n,simplified:s}=Z(e,i,200);if(s)return[[],[]];let o=h=>{let f=[0];for(let w of h)f.push(f[f.length-1]+w.length);return f},r=o(e),c=o(i),l=[],d=[];for(let h of n)h.type==="delete"?J(l,r[h.a],r[h.a+1]):h.type==="insert"&&J(d,c[h.b],c[h.b+1]);let p=h=>h.reduce((f,[w,b])=>f+b-w,0);if(Math.min(a.length-p(l),t.length-p(d))<.4*Math.max(a.length,t.length))return[[],[]];let g=(h,f)=>h.length===1&&h[0][0]===0&&h[0][1]===f;return[g(l,a.length)?[]:l,g(d,t.length)?[]:d]}function J(a,t,e){let i=a[a.length-1];i&&i[1]===t?i[1]=e:a.push([t,e])}function it(a,t,e){if(t<0)return a.map(s=>({type:"line",line:s}));let i=[],n=0;for(;n<a.length;){if(a[n].type!=="context"){i.push({type:"line",line:a[n]}),n+=1;continue}let s=n;for(;s<a.length&&a[s].type==="context";)s+=1;let o=n===0?0:t,r=s===a.length?0:t,c=s-n-o-r;if(c>1&&!e.has(n+o)){for(let l=n;l<n+o;l+=1)i.push({type:"line",line:a[l]});i.push({type:"fold",from:n+o,to:s-r,count:c});for(let l=s-r;l<s;l+=1)i.push({type:"line",line:a[l]})}else for(let l=n;l<s;l+=1)i.push({type:"line",line:a[l]});n=s}return i}function nt(a,{originalName:t,modifiedName:e,context:i=3}){let n=[`--- ${t}`,`+++ ${e}`],s=a.map((l,d)=>l.type!=="context"?d:-1).filter(l=>l>=0);if(!s.length)return"";let o=0,r=new Int32Array(a.length+1),c=new Int32Array(a.length+1);for(a.forEach((l,d)=>{r[d+1]=r[d]+(l.type!=="insert"?1:0),c[d+1]=c[d]+(l.type!=="delete"?1:0)});o<s.length;){let l=Math.max(0,s[o]-i),d=Math.min(a.length,s[o]+i+1);for(o+=1;o<s.length&&s[o]-i<=d;)d=Math.min(a.length,s[o]+i+1),o+=1;let p=a.slice(l,d),u=r[l]+1,g=c[l]+1,h=r[d]-r[l],f=c[d]-c[l];n.push(`@@ -${h?u:u-1},${h} +${f?g:g-1},${f} @@`);for(let w of p)n.push(`${w.type==="insert"?"+":w.type==="delete"?"-":" "}${w.text}`)}return`${n.join(`
`)}
`}function st(a){let t=[],e=0,i=0,n="",s="",o=!1;for(let r of E(a)){let c=/^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(r);if(c){e=Number(c[1]),i=Number(c[2]),o=!0;continue}if(!o||r.startsWith("diff ")||r.startsWith("index ")){r.startsWith("--- ")?n=r.slice(4).trim():r.startsWith("+++ ")&&(s=r.slice(4).trim()),r.startsWith("diff ")&&(o=!1);continue}r.startsWith("\\")||(r.startsWith("+")?t.push({type:"insert",oldNo:null,newNo:i++,text:r.slice(1)}):r.startsWith("-")?t.push({type:"delete",oldNo:e++,newNo:null,text:r.slice(1)}):t.push({type:"context",oldNo:e++,newNo:i++,text:r.startsWith(" ")?r.slice(1):r}))}return et(t),{lines:t,originalName:n,modifiedName:s}}function ot(a){let t=[[1,1]],e=0,i=0;for(let s of a){if(s.oldNo!==null&&(e=Math.max(e,s.oldNo)),s.newNo!==null&&(i=Math.max(i,s.newNo)),s.type!=="context"||s.oldNo===null||s.newNo===null)continue;let o=t[t.length-1];s.oldNo>o[0]&&s.newNo>o[1]&&t.push([s.oldNo,s.newNo])}let n=t[t.length-1];return e+1>n[0]&&i+1>n[1]&&t.push([e+1,i+1]),t}function ft(a,t,e){let i=e===0?1:0,n=0,s=a.length-1;for(;n<s;){let l=n+s+1>>1;a[l][e]<=t?n=l:s=l-1}let o=a[n],r=a[n+1];if(!r)return o[i]+(t-o[e]);let c=r[e]-o[e];return o[i]+(t-o[e])/c*(r[i]-o[i])}var k=class{constructor(t,e){this.panes=t,this.pairs=e,this.tops=new Map,this.lockedUntil=new Map,this.onScroll=[0,1].map(i=>()=>this.follow(i)),this.invalidate=()=>this.tops.clear(),this.resize=new ResizeObserver(this.invalidate)}start(){return this.panes.forEach((t,e)=>{t.addEventListener("scroll",this.onScroll[e],{passive:!0}),t.addEventListener("input",this.invalidate,!0),this.resize.observe(t)}),this}stop(){this.panes.forEach((t,e)=>{t.removeEventListener("scroll",this.onScroll[e]),t.removeEventListener("input",this.invalidate,!0)}),this.resize.disconnect()}lineTops(t){let e=this.tops.get(t);if(!e){let i=t.getBoundingClientRect().top-t.scrollTop;e=Array.from(t.querySelectorAll(".editor-layer .line"),n=>n.getBoundingClientRect().top-i),e.push(t.scrollHeight),this.tops.set(t,e)}return e}positionOf(t){let e=this.lineTops(t),i=t.scrollTop,n=0,s=e.length-2;for(;n<s;){let r=n+s+1>>1;e[r]<=i?n=r:s=r-1}let o=e[n+1]-e[n]||1;return n+1+Math.min(1,Math.max(0,(i-e[n])/o))}offsetOf(t,e){let i=this.lineTops(t),n=Math.min(i.length-2,Math.max(0,Math.floor(e)-1)),s=Math.min(1,Math.max(0,e-(n+1)));return i[n]+s*(i[n+1]-i[n])}follow(t){let e=this.panes[t],i=this.panes[t===0?1:0];if((this.lockedUntil.get(e)??0)>performance.now())return;let n=this.pairs();if(!n)return;let s=e.scrollHeight-e.clientHeight,o=i.scrollHeight-i.clientHeight,r;e.scrollTop<=0?r=0:e.scrollTop>=s-1?r=o:r=this.offsetOf(i,ft(n,this.positionOf(e),t)),this.scroll(i,r)}reveal(t,e){[t,e].forEach((i,n)=>{let s=this.panes[n];this.scroll(s,this.offsetOf(s,i)-s.clientHeight/3)})}scroll(t,e){let i=Math.max(0,t.scrollHeight-t.clientHeight),n=Math.round(Math.min(i,Math.max(0,e)));Math.abs(t.scrollTop-n)<1||(this.lockedUntil.set(t,performance.now()+150),t.scrollTop=n)}};var ut=["split","unified"],rt=class extends V{static type="diff";static dataAttributes=Object.freeze(["language","original-label","modified-label"]);static componentAttributes=Object.freeze(["language","view","tabs","context","line-numbers","wrap","original-src","modified-src","original-label","modified-label","navigation","sync-scroll"]);static presets={simple:{"line-numbers":!0,"sync-scroll":!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,tabs:!0,"line-numbers":!0,fullscreen:!0,navigation:!0,"sync-scroll":!0}};static styles=[T,L,Q];static allowEmpty=!0;static upgradeProperties=["content","original","modified"];constructor(){super(),this._original=void 0,this._modified=void 0,this.inline={},this.remote={},this.sidesLoading=0,this.sidesAbort=null,this.expanded=new Set,this.viewState=null,this.panelId=I("panel"),this.cache=null,this.diffHost=null,this.editors=[],this.activeEditor=null,this.diffTimer=void 0,this.updateHistoryButtons=null,this.histories=[],this.changes=[],this.changeIndex=-1,this.updateChangeNav=null,this.editorSync=null,this.sync=null}get original(){return this.sides()?.original??""}set original(t){this._original=t==null?void 0:String(t),this.sidesChanged()}applyData(t){let e=t!==null&&typeof t=="object"&&!Array.isArray(t)?t:null;if(!e||typeof e.original!="string"&&typeof e.modified!="string"){super.applyData(e&&typeof e.patch=="string"?e.patch:typeof t=="string"?t:"");return}this._data=t,this.applyDataAttributes({language:e.language,"original-label":e.originalLabel,"modified-label":e.modifiedLabel}),this.original=typeof e.original=="string"?e.original:"",this.modified=typeof e.modified=="string"?e.modified:""}get modified(){return this.sides()?.modified??""}set modified(t){this._modified=t==null?void 0:String(t),this.sidesChanged()}get patch(){if(!this.sides())return this.text??"";let t=this.compare();return t?nt(t.lines,{originalName:t.names[0],modifiedName:t.names[1]}):""}sides(){let t=this._original??this.remote.original??this.inline.original,e=this._modified??this.remote.modified??this.inline.modified;return t===void 0&&e===void 0?null:{original:t??"",modified:e??""}}readInline(){this.inline={};let t=null;for(let e of Array.from(this.children)){let i=B(e);i!==null&&(e.hasAttribute("data-original")?this.inline.original=i:e.hasAttribute("data-modified")?this.inline.modified=i:t??=i)}return t===null&&this.inline.original===void 0&&this.inline.modified===void 0?super.readInline():t}connectedCallback(){super.connectedCallback(),this.loadSides()}disconnectedCallback(){this.sidesAbort?.abort(),clearTimeout(this.diffTimer),this.editorSync?.stop(),this.editorSync=null;for(let t of this.editors)t.destroy();super.disconnectedCallback()}attributeChangedCallback(t,e,i){t==="view"&&(this.viewState=null),t==="context"&&this.expanded.clear(),t==="sync-scroll"&&(this.sync=null),(t==="original-src"||t==="modified-src")&&e!==i&&this._connected&&this.loadSides(),super.attributeChangedCallback(t,e,i)}loadSides(){this.sidesAbort?.abort();let t=new AbortController;this.sidesAbort=t,this.remote={};let e=x(),i=["original","modified"];this.sidesLoading=0;for(let n of i){let s=this.getAttribute(`${n}-src`);s&&(this.sidesLoading+=1,D(s,{allowRemote:N(this.getAttribute("allow-remote"))===!0,maxSize:e.maxSize,timeout:e.fetchTimeout,signal:t.signal}).then(o=>{t.signal.aborted||(this.remote[n]=o,this.sidesLoading-=1,this.sidesChanged())},o=>{R(o)||t.signal.aborted||(this.sidesLoading-=1,this.setError(o))}))}this.sidesLoading&&this.requestRender()}sidesChanged(){this.cache=null,this.histories=[],this.expanded.clear(),this._connected&&this.requestRender()}contentChanged(){this.cache=null,this.expanded.clear()}compare(){let t=this.sides(),e=t?`${t.original}\0${t.modified}`:`patch\0${this.text??""}`;if(this.cache?.key===e)return this.cache;let i=[this.getAttribute("original-label")||"original",this.getAttribute("modified-label")||"modified"];if(t){let n=x().maxSize;A(t.original,n),A(t.modified,n);let{lines:s,simplified:o}=tt(t.original,t.modified);this.cache={key:e,lines:s,simplified:o,names:i}}else if(this.text){let n=st(this.text);this.cache={key:e,lines:n.lines,simplified:!1,names:[n.originalName||i[0],n.modifiedName||i[1]]}}else return null;return this.cache}get view(){return this.viewState??H(this.getAttribute("view"),ut,this.variant==="full"?"split":"unified")}get context(){let t=(this.getAttribute("context")??"").trim().toLowerCase();return t==="all"?-1:M(t||null,{min:-1,max:1e3,fallback:3})}language(){let t=this.getAttribute("language")?.trim().toLowerCase()||"",e=P(t);return e?K(e)?{name:e,label:e}:(F(e).then(i=>i&&this.requestRender()),{name:"plaintext",label:e}):{name:"plaintext",label:""}}renderContent(t){let e=this.t;if(this.sidesLoading>0){t.append(...this.chrome(null),m("div",{class:"body",part:"body"},q(e)));return}let i;try{i=this.compare()}catch(u){this.setError(u instanceof Error?u:new z("tooLarge"));return}if(!i&&!this.editing){t.append(...this.chrome(null),W(e));return}let n=this.view,s=this.feature("tabs")?O({tabs:[{id:"split",label:e("splitView"),icon:"columns"},{id:"unified",label:e("unifiedView"),icon:"rows"}],selected:n,label:e("tabs"),panelId:this.panelId,onSelect:u=>this.selectView(u)}):null,o=i?this.stats(i.lines):"";this.diffHost=m("div",{class:"diff-host"});let r=m("div",{class:"panel",attrs:{id:this.panelId,role:s?"tabpanel":null}});this.editing&&r.append(this.renderEditors()),i?.simplified&&r.append(S(e("diffSimplified"))),r.append(this.diffHost),this.renderDiff();let c=()=>new $(this.diffHost?.querySelector(".diff")??this.diffHost,{skip:".num, .sign"}),l=null,d={run:u=>(l=c(),l.run(u)),go:u=>G(l?.go(u)??null),clear:()=>l?.clear()},p=[this.feature("navigation")?this.changeNavigation():null,this.searchButton(d),...this.editing?this.diffHistoryButtons():[],this.editing&&this.editors.length===2?this.syncButton():null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.patch,this.downloadName("changes.diff"),"text/x-diff"):null,this.feature("copy")?this.copyButton(()=>this.patch,e("copyPatch")):null];t.append(...this.chrome({badge:o,tabs:s,actions:p.flat()}),r);for(let u of this.editors)u.align();this.startSync()}stats(t){let e=t.filter(n=>n.type==="insert").length,i=t.filter(n=>n.type==="delete").length;return this.t("diffStats",{added:y(e,this.locale),removed:y(i,this.locale)})}renderDiff(){let t=this.diffHost;if(!t)return;let e;try{e=this.compare()}catch{t.replaceChildren(S(this.t("tooLarge",{size:"",limit:y(x().maxSize,this.locale)})));return}if(this.changes=[],this.changeIndex=-1,!e||!e.lines.some(h=>h.type!=="context")){t.replaceChildren(m("div",{class:"empty",part:"empty",text:this.t("noDifferences")})),this.updateChangeNav?.();return}let i=this.view,n=this.language(),s=this.highlightSides(e.lines,n.name),o=it(e.lines,this.context,this.expanded),r=this.feature("line-numbers"),c=i==="split"||this.feature("wrap"),l=String(Math.max(1,...e.lines.map(h=>Math.max(h.oldNo??0,h.newNo??0)))).length,d=m("div",{class:`diff ${i}${c?" wrapped":""}${r?"":" no-numbers"}`,part:"diff",attrs:{role:"table","aria-label":this.heading||this.t("changes")}});d.style.setProperty("--_digits",String(l));let p=0,u=[],g=null;for(let h of o){if(h.type==="fold"){d.append(this.foldRow(h)),p=0,u.length=0,g=null;continue}let f=h.line.oldNo;f!==null&&p&&f>p+1&&(g=null,d.append(m("div",{class:"gap",part:"hunk",attrs:{role:"row","aria-hidden":"true"},text:"\u22EF"}))),f!==null&&(p=f);let w;i==="unified"?(w=this.unifiedRow(h.line,s),d.append(w)):w=this.splitRows(h.line,s,d,u),h.line.type==="context"?g=null:(g||(g={rows:[],line:h.line},this.changes.push(g)),g.rows.includes(w)||g.rows.push(w))}t.replaceChildren(m("div",{class:"body diff-body",part:"body",attrs:{tabindex:"0"},on:{keydown:h=>this.onDiffKeydown(h)}},d)),this.updateChangeNav?.()}get changeCount(){return this.changes.length}nextChange(){this.goToChange(this.changeIndex+1)}previousChange(){this.goToChange(this.changeIndex<0?this.changes.length-1:this.changeIndex-1)}goToChange(t){let e=this.changes.length;if(!e)return;let i=Math.min(e-1,Math.max(0,Math.trunc(t)||0));for(let d of this.changes[this.changeIndex]?.rows??[])lt(d,!1);this.changeIndex=i;let n=this.changes[i];for(let d of n.rows)lt(d,!0);let s=this.diffHost?.querySelector(".diff-body"),o=n.rows[0],r=!matchMedia("(prefers-reduced-motion: reduce)").matches;if(s&&s.scrollHeight>s.clientHeight+1){let d=o.getBoundingClientRect().top-s.getBoundingClientRect().top+s.scrollTop;s.scrollTo({top:d-s.clientHeight/3,behavior:r?"smooth":"auto"})}else o.scrollIntoView({block:"center",behavior:r?"smooth":"auto"});let{original:c,modified:l}=this.changeLines(n.line);this.editorSync&&c!==null&&l!==null&&this.editorSync.reveal(c,l),this.updateChangeNav?.(),this.announce(this.t("changePosition",{current:i+1,total:e})),_(this,v.CHANGE_NAVIGATE,{index:i,total:e,original:c,modified:l})}changeLines(t){let e=this.compare();if(!e)return{original:t.oldNo,modified:t.newNo};let i=e.lines.indexOf(t),n=s=>{for(let o=i;o<e.lines.length;o+=1){let r=e.lines[o][s];if(r!==null)return r;if(e.lines[o].type==="context")break}for(let o=i-1;o>=0;o-=1){let r=e.lines[o][s];if(r!==null)return r+1}return 1};return{original:n("oldNo"),modified:n("newNo")}}changeNavigation(){let t=this.t,e=C({icon:"chevron-up",label:t("previousChange"),key:"previous-change",part:"previous-change",onClick:()=>this.previousChange()}),i=C({icon:"chevron-down",label:t("nextChange"),key:"next-change",part:"next-change",onClick:()=>this.nextChange()}),n=m("span",{class:"change-count",part:"change-count"});return this.updateChangeNav=()=>{let s=this.changes.length,o=this.changeIndex;n.textContent=o<0?t("changeTotal",{count:y(s,this.locale)}):t("changePosition",{current:y(o+1,this.locale),total:y(s,this.locale)}),e.disabled=s===0||o===0,i.disabled=s===0||o===s-1},this.updateChangeNav(),[e,n,i]}onDiffKeydown(t){if(t.ctrlKey||t.metaKey)return;let e=t.key,i=e==="n"&&!t.altKey||e==="ArrowDown"&&t.altKey,n=e==="p"&&!t.altKey||e==="ArrowUp"&&t.altKey;!i&&!n||(t.preventDefault(),i?this.nextChange():this.previousChange())}get syncScroll(){return this.sync??this.feature("sync-scroll")}startSync(){if(this.editorSync?.stop(),this.editorSync=null,!this.editing||this.editors.length!==2||!this.syncScroll)return;let t=Array.from(this.root.querySelectorAll(".diff-editor .editor-body"));t.length===2&&(this.editorSync=new k([t[0],t[1]],()=>{try{let e=this.compare();return e?ot(e.lines):null}catch{return null}}).start())}syncButton(){let t=C({icon:"sync-scroll",label:this.t("syncScroll"),key:"sync-scroll",part:"sync-button",pressed:this.syncScroll,onClick:()=>{this.sync=!this.syncScroll,t.setAttribute("aria-pressed",String(this.sync)),this.startSync(),_(this,v.LAYOUT_CHANGE,{sync:this.sync})}});return t}highlightSides(t,e){let i=new Map;for(let n of["old","new"]){let s=t.filter(c=>n==="old"?c.type!=="insert":c.type!=="delete"),o=s.map(c=>c.text).join(`
`),r=e!=="plaintext"&&o.length<=x().highlightLimit?U(j(o,e)):X(o);s.forEach((c,l)=>{i.has(c)||i.set(c,r[l]??document.createDocumentFragment())})}return i}codeCell(t,e){let i=m("span",{class:"code-cell",attrs:{role:"cell"}}),n=e.get(t)?.cloneNode(!0)??document.createDocumentFragment();return i.append(n),t.ranges?.length&&pt(i,t.ranges),i}numberCell(t){return m("span",{class:"num",part:"line-number",attrs:{role:"cell","aria-hidden":"true","data-n":t??""}})}signCell(t,e=!1){let i=t.type==="insert"?this.t("added"):t.type==="delete"?this.t("removed"):"";return m("span",{class:"sign",attrs:{role:e?null:"cell"}},i?m("span",{class:"sr-only",text:`${i}: `}):null)}unifiedRow(t,e){let i=m("div",{class:`row ${t.type}`,part:`row row-${t.type}`,attrs:{role:"row"}});return this.feature("line-numbers")&&i.append(this.numberCell(t.oldNo),this.numberCell(t.newNo)),i.append(this.signCell(t),this.codeCell(t,e)),i}splitRows(t,e,i,n){if(t.type==="context"){n.length=0;let o=m("div",{class:"row context",part:"row row-context",attrs:{role:"row"}},...this.half(t,"left",e),...this.half(t,"right",e));return i.append(o),o}if(t.type==="insert"&&n.length){let o=n.shift();for(let r of o.querySelectorAll(".right"))r.remove();return o.append(...this.half(t,"right",e)),o.classList.add("insert"),o.setAttribute("part","row row-delete row-insert"),o}let s=m("div",{class:`row ${t.type}`,part:`row row-${t.type}`,attrs:{role:"row"}});return t.type==="delete"?(s.append(...this.half(t,"left",e),...this.half(null,"right",e)),n.push(s)):(n.length=0,s.append(...this.half(null,"left",e),...this.half(t,"right",e))),i.append(s),s}half(t,e,i){let n=[];if(this.feature("line-numbers")&&n.push(this.numberCell(t?e==="left"?t.oldNo:t.newNo:null)),t){let s=this.codeCell(t,i);s.prepend(this.signCell(t,!0)),n.push(s)}else n.push(m("span",{class:"code-cell filler",attrs:{role:"cell"}}));for(let s of n)s.classList.add(e);return n}foldRow(t){return m("div",{class:"fold-row",attrs:{role:"row"}},m("button",{class:"fold",part:"fold",text:this.t("unchangedLines",{count:y(t.count,this.locale)}),attrs:{type:"button","data-focus-key":`fold-${t.from}`},on:{click:()=>{this.expanded.add(t.from),this.renderDiff()}}}))}renderEditors(){for(let o of this.editors)o.destroy();this.editors=[];let t=this.language(),e=this.sides(),i=(o,r,c,l)=>{let d=this.editors.length,p=new Y({text:o,language:l,history:this.histories[d],lineNumbers:this.feature("line-numbers"),wrap:!0,highlightLimit:x().highlightLimit,label:r,onInput:c,onChange:()=>_(this,v.CHANGE,this.editValue())});return p.textarea.addEventListener("focus",()=>{this.activeEditor=p,this.updateHistoryButtons?.()}),this.editors.push(p),this.histories[d]=p.history,m("div",{class:"diff-editor"},m("div",{class:"diff-editor-label",text:r}),m("div",{class:"body editor-body",part:"body"},p.element))};if(!e){let o=i(this.text??"",this.t("patch"),r=>{this.text=r,this._content=r,this.editedDiff()},"diff");return this.activeEditor=this.editors[0],m("div",{class:"diff-editors single"},o)}let n=i(e.original,this.t("original"),o=>{this._original=o,this.editedDiff()},t.name),s=i(e.modified,this.t("modified"),o=>{this._modified=o,this.editedDiff()},t.name);return this.activeEditor=this.editors[1],m("div",{class:"diff-editors"},n,s)}editValue(){let t=this.sides();return t?{value:this.patch,original:t.original,modified:t.modified}:{value:this.text??""}}editedDiff(){this.cache=null,_(this,v.INPUT,this.editValue()),clearTimeout(this.diffTimer),this.diffTimer=setTimeout(()=>{this.expanded.clear(),this.renderDiff();let t=this.compare(),e=this.root.querySelector('[part="badge"]');e&&t&&(e.textContent=this.stats(t.lines)),this.searchOpen&&this.searchQuery&&this.searchBar?.run()},200)}diffHistoryButtons(){if(N(this.getAttribute("history"))===!1)return[];let t=C({icon:"undo",label:this.t("undo"),key:"undo",part:"undo-button",onClick:()=>this.activeEditor?.undo()}),e=C({icon:"redo",label:this.t("redo"),key:"redo",part:"redo-button",onClick:()=>this.activeEditor?.redo()});this.updateHistoryButtons=()=>{t.disabled=!this.activeEditor?.history.canUndo,e.disabled=!this.activeEditor?.history.canRedo};for(let i of this.editors)i.history.subscribe(()=>this.updateHistoryButtons?.());return this.updateHistoryButtons(),[t,e]}selectView(t){t!==this.view&&(this.viewState=t,this.render(),this.root.querySelector(`[data-tab="${t}"]`)?.focus(),_(this,v.TAB_CHANGE,{tab:t}))}};function lt(a,t){a.classList.toggle("current-change",t);let e=(a.getAttribute("part")??"").split(" ").filter(i=>i&&i!=="current-change");t&&e.push("current-change"),a.setAttribute("part",e.join(" "))}function pt(a,t){let e=document.createTreeWalker(a,NodeFilter.SHOW_TEXT),i=[],n=0;for(let s=e.nextNode();s;s=e.nextNode())s.parentElement?.closest(".sign")||(i.push({node:s,start:n}),n+=(s.nodeValue??"").length);for(let s=t.length-1;s>=0;s-=1){let[o,r]=t[s];for(let c=i.length-1;c>=0;c-=1){let{node:l,start:d}=i[c],p=(l.nodeValue??"").length,u=Math.max(o,d)-d,g=Math.min(r,d+p)-d;if(g<=u)continue;let h=l.splitText(u);h.splitText(g-u);let f=document.createElement("mark");f.className="word-change",f.setAttribute("part","word-change"),h.replaceWith(f),f.append(h)}}}export{rt as a};
//# sourceMappingURL=chunk-WT36TFR5.js.map
