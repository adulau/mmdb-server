/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{i as O}from"./chunk-E4EMJARX.js";import{J as z,K as P,M as w,N as U,Q as F,U as R,X as H,c as f,d as p,e as C,l as h,p as L,q as m,u as S}from"./chunk-DNNVKOIB.js";import{h as E,k as D,l as T,m as B,q as M}from"./chunk-2IDMCIF6.js";var I=Object.freeze({hexLabel:"Bytes",hexSize:"{size} bytes",hexCopyHex:"Copy as hex",hexCopyBase64:"Copy as base64",hexByte:"Offset {offset}: {value}, {char}",hexInvalid:"These bytes could not be read: {message}"}),$={hexLabel:"Octets",hexSize:"{size} octets",hexCopyHex:"Copier en hexad\xE9cimal",hexCopyBase64:"Copier en base64",hexByte:"Position {offset} : {value}, {char}",hexInvalid:"Ces octets n\u2019ont pas pu \xEAtre lus : {message}"};var N=`/*
 * Hex dump: offset, hex bytes and ASCII characters per row, bytes colored by kind,
 * the hovered byte paired in both columns.
 */
.hex-body {
  background: var(--_code-bg);
}

.dump {
  --_cell: 2.6ch;
  min-width: 100%;
  width: max-content;
  padding: var(--_space-2) 0;
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  line-height: 1.6;
  font-variant-numeric: tabular-nums;
}

.dump:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

/* Blocks not built yet keep their height so the scroll bar is right. */
.chunk:not(.filled) {
  height: calc(var(--_rows) * 1.6em);
}

.row {
  display: grid;
  grid-template-columns: calc(var(--_digits) * 1ch) calc(var(--_columns) * var(--_cell) + 2ch) auto;
  column-gap: var(--_space-4);
  padding: 0 var(--_space-4);
}

.dump.no-ascii .row {
  grid-template-columns: calc(var(--_digits) * 1ch) auto;
}

.row:hover {
  background: color-mix(in srgb, var(--_code-fg) 5%, transparent);
}

.offset {
  color: var(--_code-gutter);
  user-select: none;
  -webkit-user-select: none;
}

.hex .b {
  display: inline-block;
  width: var(--_cell);
  text-align: center;
  border-radius: var(--_radius-sm);
}

.hex .b.group {
  margin-left: 1ch;
}

.ascii {
  white-space: pre;
  border-left: 1px solid var(--_border);
  padding-left: var(--_space-3);
}

.ascii .c {
  border-radius: var(--_radius-sm);
}

/* Byte kinds. */
.null {
  color: var(--vt-hex-null, var(--_code-gutter));
}

.whitespace {
  color: var(--_syntax-string);
}

.control {
  color: var(--vt-hex-control, var(--_syntax-keyword));
}

.high {
  color: var(--vt-hex-high, var(--_syntax-number));
}

.pair {
  background: color-mix(in srgb, var(--_accent) 18%, transparent);
}

.match {
  background: var(--_highlight);
  color: var(--_fg);
}

.current {
  background: var(--_highlight-current);
  color: var(--_fg);
}

.selected {
  outline: 2px solid var(--_accent);
  outline-offset: -1px;
}

@media (forced-colors: active) {
  .selected,
  .current {
    outline: 2px solid Highlight;
  }
}
`;var tt=/^[\s0-9a-fA-F,:|x]*$/;function x(a){let t=[];for(let e of a.split(`
`)){let r=e,i=r.indexOf("|");i>=0&&(r=r.slice(0,i));let s=/^\s*[0-9a-fA-F]{4,16}:\s+(.*)$/.exec(r);s?r=s[1].split(/\s{2,}/)[0]:r=r.replace(/^\s*[0-9a-fA-F]{6,16}\s{2}(?=[0-9a-fA-F]{2}\s)/,"");let c=r.replace(/0x/gi,"").replace(/[^0-9a-fA-F]/g,"");for(let n=0;n+1<c.length;n+=2)t.push(parseInt(c.slice(n,n+2),16))}return Uint8Array.from(t)}function j(a){let t=a.replace(/\s+/g,"").replace(/-/g,"+").replace(/_/g,"/");if(!/^[A-Za-z0-9+/]*={0,2}$/.test(t))throw new Error("Invalid base64");let e=t+"=".repeat((4-t.length%4)%4),r=atob(e),i=new Uint8Array(r.length);for(let s=0;s<r.length;s+=1)i[s]=r.charCodeAt(s);return i}function G(a,t="auto"){let e=a.trim();if(!e)return new Uint8Array(0);if(t==="hex")return x(e);if(t==="base64")return j(e);let r=e.replace(/[^0-9a-fA-F]/g,"").length;if(tt.test(e)&&(/[\s,:]/.test(e)||r%2===0)&&(/[\s,:x]/.test(e)||e.length%4!==0))return x(e);try{return j(e)}catch{return x(e)}}function q(a){return a===0?"null":a===9||a===10||a===13||a===32?"whitespace":a<32||a===127?"control":a>127?"high":"printable"}function v(a){return a>=32&&a<127?String.fromCharCode(a):"."}function g(a,t=2){return a.toString(16).padStart(t,"0")}var et=[{name:"PNG",mime:"image/png",magic:[137,80,78,71,13,10,26,10]},{name:"JPEG",mime:"image/jpeg",magic:[255,216,255]},{name:"GIF",mime:"image/gif",magic:[71,73,70,56]},{name:"WebP",mime:"image/webp",at:8,magic:[87,69,66,80]},{name:"PDF",mime:"application/pdf",magic:[37,80,68,70,45]},{name:"ZIP",mime:"application/zip",magic:[80,75,3,4]},{name:"GZIP",mime:"application/gzip",magic:[31,139]},{name:"BZIP2",mime:"application/x-bzip2",magic:[66,90,104]},{name:"XZ",mime:"application/x-xz",magic:[253,55,122,88,90,0]},{name:"7Z",mime:"application/x-7z-compressed",magic:[55,122,188,175,39,28]},{name:"RAR",mime:"application/vnd.rar",magic:[82,97,114,33,26,7]},{name:"ELF",mime:"application/x-elf",magic:[127,69,76,70]},{name:"PE",mime:"application/vnd.microsoft.portable-executable",magic:[77,90]},{name:"Mach-O",mime:"application/x-mach-binary",magic:[207,250,237,254]},{name:"Mach-O",mime:"application/x-mach-binary",magic:[254,237,250,207]},{name:"WASM",mime:"application/wasm",magic:[0,97,115,109]},{name:"SQLite",mime:"application/vnd.sqlite3",magic:[83,81,76,105,116,101]},{name:"OLE",mime:"application/x-ole-storage",magic:[208,207,17,224]},{name:"Class",mime:"application/java-vm",magic:[202,254,186,190]},{name:"PCAP",mime:"application/vnd.tcpdump.pcap",magic:[212,195,178,161]},{name:"PCAPNG",mime:"application/x-pcapng",magic:[10,13,13,10]},{name:"MP3",mime:"audio/mpeg",magic:[73,68,51]},{name:"OGG",mime:"audio/ogg",magic:[79,103,103,83]}];function k(a){for(let t of et){let e=t.at??0;if(!(a.length<e+t.magic.length)&&t.magic.every((r,i)=>a[e+i]===r))return{name:t.name,mime:t.mime}}return null}function Z(a){let t=/^"(.*)"$/s.exec(a);if(t)return new TextEncoder().encode(t[1]);let e=a.replace(/0x/gi,"").replace(/[\s,]/g,"");return/^(?:[0-9a-fA-F]{2})+$/.test(e)&&(/[\s,]|0x/i.test(a)||e.length>=4)?x(e):new TextEncoder().encode(a)}function K(a,t,{limit:e=1/0,ignoreCase:r=!1}={}){let i=[];if(!t.length)return i;let s=n=>r&&n>=65&&n<=90?n+32:n,c=s(t[0]);t:for(let n=0;n+t.length<=a.length;n+=1)if(s(a[n])===c){for(let o=1;o<t.length;o+=1)if(s(a[n+o])!==s(t[o]))continue t;if(i.push(n),i.length>=e)break}return i}function X(a,t=16){let e=[];for(let r=0;r<a.length;r+=t)e.push(Array.from(a.subarray(r,r+t),i=>g(i)).join(" "));return e.join(`
`)}function V(a){let t="";for(let r=0;r<a.length;r+=32768)t+=String.fromCharCode(...a.subarray(r,r+32768));return btoa(t)}async function W(a,t){let e;try{e=new URL(a.trim(),document.baseURI)}catch{throw new m("unsafeUrl")}if(e.protocol!=="http:"&&e.protocol!=="https:")throw new m("unsafeUrl");let r=L(e.href);if(!r&&!t.allowRemote)throw new m("remoteBlocked");let i=new AbortController,s=setTimeout(()=>i.abort(new m("timeout")),t.timeout),c=()=>i.abort(t.signal?.reason);t.signal?.addEventListener("abort",c,{once:!0}),t.signal?.aborted&&c();let n=e.origin===location.origin?e.pathname:e.href;try{let o=await fetch(e.href,{mode:r?"same-origin":"cors",credentials:"same-origin",redirect:"follow",referrerPolicy:"strict-origin-when-cross-origin",signal:i.signal});if(!o.ok)throw new m("loadFailed",{url:n,reason:`HTTP ${o.status}`});let l=Number(o.headers.get("content-length"));if(Number.isFinite(l)&&l>t.maxSize)throw new m("tooLarge",{size:l,limit:t.maxSize});return await rt(o,t.maxSize,i)}catch(o){if(o instanceof m)throw o;if(i.signal.aborted&&i.signal.reason instanceof m)throw i.signal.reason;if(o instanceof DOMException&&o.name==="AbortError")throw o;let l=o instanceof Error?o.message:String(o);throw new m("loadFailed",{url:n,reason:l},o)}finally{clearTimeout(s),t.signal?.removeEventListener("abort",c)}}async function rt(a,t,e){if(!a.body){let o=new Uint8Array(await a.arrayBuffer());if(o.length>t)throw new m("tooLarge",{size:o.length,limit:t});return o}let r=a.body.getReader(),i=[],s=0;for(;;){let{done:o,value:l}=await r.read();if(o)break;if(s+=l.length,s>t)throw e.abort(),new m("tooLarge",{size:`> ${t}`,limit:t});i.push(l)}let c=new Uint8Array(s),n=0;for(let o of i)c.set(o,n),n+=o.length;return c}B({en:I,fr:$});var it=["auto","hex","base64"],b=128,Q=class extends H{static type="hex";static fromData=O;static dataAttributes=Object.freeze(["format","label"]);static componentAttributes=Object.freeze(["columns","group","format","ascii","uppercase","offset"]);static presets={simple:{ascii:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,ascii:!0}};static styles=[N];static allowEmpty=!0;static upgradeProperties=["content","bytes"];constructor(){super(),this._bytes=void 0,this.fetched=null,this.byteData=new Uint8Array(0),this.decodeError=null,this.cursor=-1,this.hits=[],this.matchLength=0,this.dump=null,this.chunks=[]}get bytes(){return this.byteData.slice()}set bytes(t){this._bytes=t==null?void 0:new Uint8Array(t),this._connected&&this.reload()}get fileType(){return k(this.byteData)}cancelFetch(){this._abort?.abort()}reload(){let t=this.getAttribute("src");if(this.fetched=null,this._bytes||this._content!==void 0||!t?.trim()){this._bytes?(this._loadToken+=1,this.cancelFetch(),this.setText("")):super.reload();return}let e=++this._loadToken;this.cancelFetch();let r=new AbortController;this._abort=r,this.loading=!0,this.error=null,this.requestRender();let i=E();W(t,{allowRemote:f(this.getAttribute("allow-remote"))===!0,maxSize:i.maxSize,timeout:i.fetchTimeout,signal:r.signal}).then(s=>{e===this._loadToken&&(this.fetched=s,this.setText(""))},s=>e===this._loadToken&&!S(s)&&this.setError(s))}contentChanged(){if(this.decodeError=null,this.cursor=-1,this.hits=[],this._bytes)this.byteData=this._bytes;else if(this.fetched)this.byteData=this.fetched;else try{this.byteData=G(this.text??"",C(this.getAttribute("format"),it,"auto"))}catch(t){this.byteData=new Uint8Array(0),this.decodeError=t instanceof Error?t.message:String(t)}}attributeChangedCallback(t,e,r){t==="format"&&e!==r&&this.contentChanged(),super.attributeChangedCallback(t,e,r)}get columns(){return p(this.getAttribute("columns"),{min:1,max:64,fallback:16})}get base(){return p(this.getAttribute("offset"),{min:0,max:2**48,fallback:0})}hex(t,e=2){let r=g(t,e);return this.hasAttribute("uppercase")&&f(this.getAttribute("uppercase"))!==!1?r.toUpperCase():r}renderContent(t){let e=this.t,r=this.byteData,i=h("div",{class:"body hex-body",part:"body",attrs:{tabindex:"-1"}});this.decodeError?i.append(R(e("hexInvalid",{message:this.decodeError}))):r.length?i.append(this.buildDump()):i.append(h("div",{class:"empty",part:"empty",text:e("empty")}));let s=k(r),c=e("hexSize",{size:M(r.length,this.locale)}),n=[this.searchButton(this.searchTarget()),this.fullscreenButton(),this.feature("download")&&r.length?this.binaryDownload(s?.mime):null,this.feature("copy")&&r.length?this.copyButton(()=>V(this.byteData),e("hexCopyBase64"),"copy-base64"):null,this.feature("copy")&&r.length?this.copyButton(()=>X(this.byteData,this.columns),e("hexCopyHex")):null];t.append(...this.chrome({badge:s?`${s.name} \xB7 ${c}`:c,actions:n}),i)}buildDump(){let t=this.byteData,e=this.columns,r=Math.ceil(t.length/e),i=Math.max(8,g(this.base+t.length).length),s=f(this.getAttribute("ascii"))!==!1,c=h("div",{class:`dump${s?"":" no-ascii"}`,part:"dump",attrs:{role:"grid",tabindex:"0","aria-label":this.t("hexLabel"),"aria-rowcount":String(r),"data-focus-key":"dump"}});c.style.setProperty("--_columns",String(e)),c.style.setProperty("--_digits",String(i)),this.dump=c,this.chunks=[];for(let n=0;n<r;n+=b){let o=Math.min(r,n+b),l=h("div",{class:"chunk",attrs:{role:"rowgroup"}});l.style.setProperty("--_rows",String(o-n)),this.chunks.push(l),c.append(l);let d=()=>{for(let u=n;u<o;u+=1)l.append(this.buildRow(u,i,s));l.classList.add("filled"),this.paintMarks(n*e,o*e)};r>b?z(l,d):d()}return c.addEventListener("pointerover",n=>this.hover(n)),c.addEventListener("pointerleave",()=>this.hover(null)),c.addEventListener("click",n=>{let o=J(n.target);o>=0&&this.select(o)}),c.addEventListener("keydown",n=>this.onKey(n)),c.addEventListener("focus",()=>{this.cursor<0&&this.byteData.length&&this.select(0,!1)}),c}buildRow(t,e,r){let i=this.columns,s=p(this.getAttribute("group"),{min:0,max:64,fallback:8}),c=t*i,n=Math.min(this.byteData.length,c+i),o=h("span",{class:"hex",part:"hex",attrs:{role:"gridcell"}}),l=r?h("span",{class:"ascii",part:"ascii",attrs:{role:"gridcell"}}):null;for(let d=c;d<n;d+=1){let u=this.byteData[d],A=q(u),y=h("span",{class:`b ${A}`,text:this.hex(u)});if(y.dataset.i=String(d),s&&d>c&&(d-c)%s===0&&y.classList.add("group"),o.append(y),l){let _=h("span",{class:`c ${A}`,text:v(u)});_.dataset.i=String(d),l.append(_)}}return h("div",{class:"row",attrs:{role:"row","aria-rowindex":String(t+1)}},h("span",{class:"offset",part:"offset",text:this.hex(this.base+c,e),attrs:{role:"rowheader"}}),o,l)}cells(t){let e=this.chunks[Math.floor(t/this.columns/b)];return e?(P(e),[...e.querySelectorAll(`[data-i="${t}"]`)]):[]}hover(t){for(let r of this.dump?.querySelectorAll(".pair")??[])r.classList.remove("pair");let e=t?J(t.target):-1;if(e>=0)for(let r of this.cells(e))r.classList.add("pair")}select(t,e=!0){if(!this.dump||t<0||t>=this.byteData.length)return;for(let s of this.dump.querySelectorAll(".selected"))s.classList.remove("selected");this.cursor=t;let r=this.cells(t);for(let s of r)s.classList.add("selected");r[0]?.scrollIntoView({block:"nearest",inline:"nearest"});let i=this.byteData[t];this.announce(this.t("hexByte",{offset:this.hex(this.base+t,1),value:this.hex(i),char:v(i)})),e&&T(this,D.SELECT,{offset:this.base+t,value:i})}onKey(t){if(this.cursor<0)return;let e=this.columns,r=e*16,i={ArrowRight:1,ArrowLeft:-1,ArrowDown:e,ArrowUp:-e,PageDown:r,PageUp:-r},s=this.cursor;if(t.key in i)s+=i[t.key];else if(t.key==="Home")s=t.ctrlKey?0:s-s%e;else if(t.key==="End")s=t.ctrlKey?this.byteData.length-1:s-s%e+e-1;else return;t.preventDefault(),this.select(Math.max(0,Math.min(this.byteData.length-1,s)))}searchTarget(){return{run:t=>{let e=Z(t.slice(0,U).trim()),r=!/^(?:[0-9a-fA-F]{2}|[\s,]|0x)+$/i.test(t.trim());return this.hits=K(this.byteData,e,{limit:w,ignoreCase:r}),this.matchLength=e.length,this.repaintMarks(),{total:this.hits.length,capped:this.hits.length>=w}},go:t=>{for(let r of this.dump?.querySelectorAll(".current")??[])r.classList.remove("current");let e=this.hits[t];if(e!==void 0){for(let r=e;r<e+this.matchLength;r+=1)for(let i of this.cells(r))i.classList.add("current");this.cells(e)[0]?.scrollIntoView({block:"nearest",inline:"nearest"})}},clear:()=>{this.hits=[],this.repaintMarks()}}}repaintMarks(){for(let t of this.dump?.querySelectorAll(".match, .current")??[])t.classList.remove("match","current");this.paintMarks(0,this.byteData.length)}paintMarks(t,e){if(this.dump){for(let r of this.hits)if(!(r+this.matchLength<=t||r>=e))for(let i=Math.max(r,t);i<Math.min(r+this.matchLength,e);i+=1)for(let s of this.dump.querySelectorAll(`.filled [data-i="${i}"]`))s.classList.add("match")}}binaryDownload(t){return F({icon:"download",label:this.t("download"),key:"download",part:"download-button",onClick:()=>{let e=new Blob([this.byteData.slice()],{type:t??"application/octet-stream"}),r=URL.createObjectURL(e),i=h("a",{attrs:{href:r,download:this.downloadName("data.bin"),rel:"noopener"}});i.style.display="none",document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}})}};function J(a){return a instanceof HTMLElement&&a.dataset.i!==void 0?Number(a.dataset.i):-1}export{Q as a};
//# sourceMappingURL=chunk-E2JYVQEK.js.map
