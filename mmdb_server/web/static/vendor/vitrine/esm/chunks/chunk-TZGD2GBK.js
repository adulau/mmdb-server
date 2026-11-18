/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{l as v,o as _}from"./chunk-DNNVKOIB.js";var I=`/*
 * ANSI colors and text styles, shared by <vt-terminal> and <vt-log>.
 * The 16 colors map to theme colors, so every theme keeps its contrast; each can be
 * overridden with a public token (--vt-ansi-red\u2026).
 */
.vt {
  --_ansi-0: var(--vt-ansi-black, color-mix(in srgb, var(--_code-fg) 50%, var(--_code-bg-solid)));
  --_ansi-1: var(--vt-ansi-red, var(--_danger));
  --_ansi-2: var(--vt-ansi-green, var(--_success));
  --_ansi-3: var(--vt-ansi-yellow, var(--_warning));
  --_ansi-4: var(--vt-ansi-blue, var(--_info));
  --_ansi-5: var(--vt-ansi-magenta, var(--_syntax-keyword));
  --_ansi-6: var(--vt-ansi-cyan, var(--_syntax-string));
  --_ansi-7: var(--vt-ansi-white, color-mix(in srgb, var(--_code-fg) 85%, var(--_code-bg-solid)));
  --_ansi-8: var(--vt-ansi-bright-black, var(--_fg-muted));
  --_ansi-9: var(--vt-ansi-bright-red, color-mix(in srgb, var(--_ansi-1) 75%, var(--_code-fg)));
  --_ansi-10: var(--vt-ansi-bright-green, color-mix(in srgb, var(--_ansi-2) 75%, var(--_code-fg)));
  --_ansi-11: var(--vt-ansi-bright-yellow, color-mix(in srgb, var(--_ansi-3) 75%, var(--_code-fg)));
  --_ansi-12: var(--vt-ansi-bright-blue, color-mix(in srgb, var(--_ansi-4) 75%, var(--_code-fg)));
  --_ansi-13: var(
    --vt-ansi-bright-magenta,
    color-mix(in srgb, var(--_ansi-5) 75%, var(--_code-fg))
  );
  --_ansi-14: var(--vt-ansi-bright-cyan, color-mix(in srgb, var(--_ansi-6) 75%, var(--_code-fg)));
  --_ansi-15: var(--vt-ansi-bright-white, var(--_code-fg));
}

/* ---------- ANSI styles ---------- */

.fg-0 {
  color: var(--_ansi-0);
}
.fg-1 {
  color: var(--_ansi-1);
}
.fg-2 {
  color: var(--_ansi-2);
}
.fg-3 {
  color: var(--_ansi-3);
}
.fg-4 {
  color: var(--_ansi-4);
}
.fg-5 {
  color: var(--_ansi-5);
}
.fg-6 {
  color: var(--_ansi-6);
}
.fg-7 {
  color: var(--_ansi-7);
}
.fg-8 {
  color: var(--_ansi-8);
}
.fg-9 {
  color: var(--_ansi-9);
}
.fg-10 {
  color: var(--_ansi-10);
}
.fg-11 {
  color: var(--_ansi-11);
}
.fg-12 {
  color: var(--_ansi-12);
}
.fg-13 {
  color: var(--_ansi-13);
}
.fg-14 {
  color: var(--_ansi-14);
}
.fg-15 {
  color: var(--_ansi-15);
}
.bg-0 {
  background: var(--_ansi-0);
}
.bg-1 {
  background: var(--_ansi-1);
}
.bg-2 {
  background: var(--_ansi-2);
}
.bg-3 {
  background: var(--_ansi-3);
}
.bg-4 {
  background: var(--_ansi-4);
}
.bg-5 {
  background: var(--_ansi-5);
}
.bg-6 {
  background: var(--_ansi-6);
}
.bg-7 {
  background: var(--_ansi-7);
}
.bg-8 {
  background: var(--_ansi-8);
}
.bg-9 {
  background: var(--_ansi-9);
}
.bg-10 {
  background: var(--_ansi-10);
}
.bg-11 {
  background: var(--_ansi-11);
}
.bg-12 {
  background: var(--_ansi-12);
}
.bg-13 {
  background: var(--_ansi-13);
}
.bg-14 {
  background: var(--_ansi-14);
}
.bg-15 {
  background: var(--_ansi-15);
}

/* Text on a colored background without its own color: the background color of the
   terminal, so it reads like a label. */
.on-bg,
.fg-inverse {
  color: var(--_code-bg-solid);
}

.bg-inverse {
  background: var(--_code-fg);
}

.bold {
  font-weight: 700;
}

.dim {
  opacity: 0.7;
}

.italic {
  font-style: italic;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.strike {
  text-decoration: line-through;
}

.underline.strike {
  text-decoration: underline line-through;
}

:is(.terminal, .log) a {
  color: inherit;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
}

:is(.terminal, .log) a:hover {
  text-decoration-style: solid;
}
`;var m=8,g=2e4,w=256,b=Object.freeze({fg:null,bg:null,bold:!1,dim:!1,italic:!1,underline:!1,inverse:!1,strike:!1,link:null});function N(r){if(r<16)return{index:r};if(r<232){let e=r-16,i=s=>s===0?0:55+s*40;return{rgb:[i(Math.floor(e/36)),i(Math.floor(e/6)%6),i(e%6)]}}let n=8+(r-232)*10;return{rgb:[n,n,n]}}function p(r,n){let e=r[n];if(e===5){let i=r[n+1];return{color:Number.isInteger(i)&&i>=0&&i<=255?N(i):null,next:n+2}}if(e===2){let i=r.slice(n+1,n+4);return{color:i.length===3&&i.every(t=>Number.isInteger(t)&&t>=0&&t<=255)?{rgb:i}:null,next:n+4}}return{color:null,next:r.length}}function M(r){if(!r)return[0];let n=[];for(let e of r.split(";"))if(e.includes(":")){let i=e.split(":").map(s=>s===""?-1:Number(s));(i[0]===38||i[0]===48||i[0]===58)&&i[1]===2&&i.length===6&&i.splice(2,1),n.push(...i.map(s=>s<0?0:s))}else n.push(e===""?0:Number(e));return n.map(e=>Number.isFinite(e)?e:-1)}function A(r,n){let e={...r};for(let i=0;i<n.length;i+=1){let s=n[i];if(s===0)Object.assign(e,b,{link:r.link});else if(s===1)e.bold=!0;else if(s===2)e.dim=!0;else if(s===3)e.italic=!0;else if(s===4)e.underline=!0;else if(s===7)e.inverse=!0;else if(s===9)e.strike=!0;else if(s===21)e.underline=!0;else if(s===22)e.bold=e.dim=!1;else if(s===23)e.italic=!1;else if(s===24)e.underline=!1;else if(s===27)e.inverse=!1;else if(s===29)e.strike=!1;else if(s>=30&&s<=37)e.fg={index:s-30};else if(s===39)e.fg=null;else if(s>=40&&s<=47)e.bg={index:s-40};else if(s===49)e.bg=null;else if(s>=90&&s<=97)e.fg={index:s-90+8};else if(s>=100&&s<=107)e.bg={index:s-100+8};else if(s===38||s===48){let{color:t,next:l}=p(n,i+1);t&&(e[s===38?"fg":"bg"]=t),i=l-1}else s===58&&(i=p(n,i+1).next-1)}return e}function S(r,n){return r===n?!0:r.bold===n.bold&&r.dim===n.dim&&r.italic===n.italic&&r.underline===n.underline&&r.inverse===n.inverse&&r.strike===n.strike&&r.link===n.link&&JSON.stringify(r.fg)===JSON.stringify(n.fg)&&JSON.stringify(r.bg)===JSON.stringify(n.bg)}var d=class{constructor(){this.chars=[],this.styles=[],this.cursor=0}write(n,e){if(!(this.cursor>=g)){for(;this.chars.length<this.cursor;)this.chars.push(" "),this.styles.push(b);this.chars[this.cursor]=n,this.styles[this.cursor]=e,this.cursor+=1}}eraseToEnd(){this.chars.length=Math.min(this.chars.length,this.cursor),this.styles.length=this.chars.length}eraseAll(){this.chars=[],this.styles=[]}segments(){let n=[];for(let e=0;e<this.chars.length;e+=1){let i=this.styles[e],s=n[n.length-1];s&&S(s.style,i)?s.text+=this.chars[e]:n.push({text:this.chars[e],style:i})}return n}};function j(r){return r.replace(/\\(?:e|x1b|x1B|033|u001b|u001B)/g,"\x1B").replace(/\\r/g,"\r")}function q(r){let n=[],e=new d,i=b,s=r.length,t=0,l=()=>{n.push(e.segments()),e=new d};for(;t<s;){let o=r[t],f=o.charCodeAt(0);if(o===`
`)l(),t+=1;else if(o==="\r")r[t+1]===`
`?(l(),t+=2):(e.cursor=0,t+=1);else if(o==="	"){let u=Math.min(g,(Math.floor(e.cursor/m)+1)*m);for(;e.cursor<u;)e.write(" ",i);t+=1}else if(o==="\b")e.cursor=Math.max(0,e.cursor-1),t+=1;else if(o==="\x1B"||o==="\x9B"){let u=E(r,t);t=u.end;let a=u.sequence;if(a?.kind==="csi")if(a.final==="m")i=A(i,M(a.params));else if(a.final==="K"){let c=Number(a.params||0);if(c===0)e.eraseToEnd();else if(c===2)e.eraseAll();else if(c===1)for(let h=0;h<e.cursor;h+=1)e.chars[h]=" "}else a.final==="G"?e.cursor=Math.min(g,Math.max(0,(Number(a.params)||1)-1)):a.final==="C"?e.cursor=Math.min(g,e.cursor+(Number(a.params)||1)):a.final==="D"&&(e.cursor=Math.max(0,e.cursor-(Number(a.params)||1)));else if(a?.kind==="osc"){let c=/^8;[^;]*;(.*)$/s.exec(a.params);c&&(i={...i,link:$(c[1])?c[1]:null})}}else f<32||f===127||f>=128&&f<160||e.write(o,i),t+=1}return n.push(e.segments()),n.length>1&&n[n.length-1].length===0&&/\r?\n$/.test(r)&&n.pop(),n}function $(r){return/^https?:\/\/[^\s]+$/i.test(r)&&_(r)}function E(r,n){let e=n,i="csi";if(r[e]==="\x9B")e+=1;else{let t=r[e+1];if(t==="]")i="osc";else if(t==="[")i="csi";else{if(t===void 0)return{end:e+1,sequence:null};if("PX^_".includes(t))return{end:x(r,e+2),sequence:null};{let l="()*+".includes(t)?3:2;return{end:Math.min(r.length,e+l),sequence:null}}}e+=2}if(i==="osc"){let t=x(r,e),l=r.slice(e,t);return l.endsWith("\x07")?l=l.slice(0,-1):l.endsWith("\x1B\\")&&(l=l.slice(0,-2)),{end:t,sequence:l.length<=2048?{kind:i,params:l,final:""}:null}}let s=e;for(;e<r.length&&e-n<w;){let t=r.charCodeAt(e);if(t>=64&&t<=126){let l=r.slice(s,e),o=/^[\d;:]*$/.test(l);return{end:e+1,sequence:o?{kind:"csi",params:l,final:r[e]}:null}}if(t<32||t>63){if(t>=32&&t<=47){e+=1;continue}return{end:e,sequence:null}}e+=1}return{end:e,sequence:null}}function x(r,n){let e=Math.min(r.length,n+4096);for(let i=n;i<e;i+=1){if(r[i]==="\x07")return i+1;if(r[i]==="\x1B"&&r[i+1]==="\\")return i+2;if(r[i]===`
`)return i}return e}function T(r){let n="";for(let e of r)n+=e.text;return n}function J(r){return q(r).map(T).join(`
`)}function U(r){let n=r.style,e=n.fg,i=n.bg;if(!e&&!i&&!n.bold&&!n.dim&&!n.italic&&!n.underline&&!n.inverse&&!n.strike&&!n.link)return document.createTextNode(r.text);let t=[];n.inverse&&([e,i]=[i,e],e||t.push("fg-inverse"),i||t.push("bg-inverse")),e&&"index"in e&&n.bold&&e.index<8&&(e={index:e.index+8}),n.bold&&t.push("bold"),n.dim&&t.push("dim"),n.italic&&t.push("italic"),n.underline&&t.push("underline"),n.strike&&t.push("strike"),i&&!e&&!n.inverse&&t.push("on-bg");let l=n.link?v("a",{attrs:{href:n.link,rel:"noopener noreferrer nofollow",target:"_blank"}}):v("span");return e&&("index"in e?t.push(`fg-${e.index}`):l.style.color=k(e.rgb)),i&&("index"in i?t.push(`bg-${i.index}`):l.style.backgroundColor=k(i.rgb)),l.className=t.join(" "),l.textContent=r.text,l}function k([r,n,e]){return`rgb(${r|0}, ${n|0}, ${e|0})`}export{I as a,j as b,q as c,T as d,J as e,U as f};
//# sourceMappingURL=chunk-TZGD2GBK.js.map
