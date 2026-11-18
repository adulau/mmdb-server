/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as S}from"./chunk-3VQOL2NW.js";import{O as E,U as M,X as C,c as w,l,n as x}from"./chunk-DNNVKOIB.js";import{f as y,h as f,k as v,l as k,m as T,q as g}from"./chunk-2IDMCIF6.js";var A=`/*
 * Math: display equations, numbers, inline math in text, and TeX that could not be read.
 * The rules for <math> come from Temml's own stylesheet (Temml-Latin-Modern.css, MIT
 * License), without its web fonts: browsers draw MathML with a math font of the system.
 */
:host([inline]) {
  display: inline;
  vertical-align: baseline;
}

.vt.inline-math {
  display: inline;
  border: 0;
  border-radius: 0;
  background: none;
  color: inherit;
  font: inherit;
}

.math-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4) var(--_space-5);
  overflow-x: auto;
  background: var(--_surface);
  color: var(--_fg);
  font-size: var(--vt-math-size, 1.15em);
  line-height: 1.6;
}

.math-body.inline {
  display: inline;
  padding: 0;
  overflow: visible;
  background: none;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
}

/* Text with math: a single flow, paragraphs at blank lines. */
:host([delimiters]) .math-body:not(.inline) {
  display: block;
  font-family: var(--vt-font-body, inherit);
  font-size: var(--vt-font-size-body, inherit);
  line-height: 1.65;
  white-space: pre-line;
}

:host([delimiters]) .math-display {
  margin-block: var(--_space-3);
  white-space: normal;
}

.math-break {
  display: block;
  height: var(--_space-3);
}

.math-display {
  position: relative;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  text-align: center;
}

.math-display.numbered {
  padding-inline: 4em;
}

.math-number {
  position: absolute;
  top: 50%;
  inset-inline-end: 0;
  transform: translateY(-50%);
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
  font-variant-numeric: tabular-nums;
}

.math-tex {
  color: var(--_code-fg);
  font: 400 var(--_font-size) / var(--_line-height) var(--_font-mono);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.math-display .math-tex {
  display: block;
  text-align: start;
}

.math-display.error {
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-2) var(--_space-3);
  border-inline-start: 3px solid var(--_danger);
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_danger) 6%, transparent);
  text-align: start;
}

.math-error {
  color: var(--_danger);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.math-inline.error .math-error {
  margin-inline-start: 0.5ch;
}

.math-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}

/* ---------- MathML: Temml-Latin-Modern.css of Temml 0.14.0 (MIT License), without its fonts ---------- */

math {
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size-adjust: none;
  text-indent: 0;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  direction: ltr;
  /* Prevent Firefox from omitting the dot on i or j. */
  font-feature-settings: 'dtls' off;
}

math * {
  border-color: currentColor;
}

math {
  font-family: var(--vt-font-math, 'Latin Modern Math', 'STIX Two Math', 'Cambria Math', math);
}

/* display: block is necessary in Firefox and Safari.
 * Not in Chromium, which recognizes display: "block math" written inline. */
math.tml-display {
  display: block;
  width: 100%;
}

/* Cramped superscripts in WebKit */
mfrac > :nth-child(2),
msqrt,
mover > :first-child {
  math-shift: compact;
}

.menclose {
  display: inline-block;
  position: relative;
  padding: 0.5ex 0ex;
}
.tml-cancelto {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5ex 0ex;
  background-color: currentColor;
  /* Use the SVG as an alpha mask (painted by background-color) */
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><defs><marker id='a' markerHeight='5' markerUnits='strokeWidth' markerWidth='7' orient='auto' refX='7' refY='2.5'><path fill='black' d='m0 0 7 2.5L0 5z'/></marker></defs><line x2='100%25' y1='100%25' stroke='black' stroke-width='.06em' marker-end='url(%23a)' vector-effect='non-scaling-stroke'/></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><defs><marker id='a' markerHeight='5' markerUnits='strokeWidth' markerWidth='7' orient='auto' refX='7' refY='2.5'><path fill='black' d='m0 0 7 2.5L0 5z'/></marker></defs><line x2='100%25' y1='100%25' stroke='black' stroke-width='.06em' marker-end='url(%23a)' vector-effect='non-scaling-stroke'/></svg>");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
}

@supports (-moz-appearance: none) {
  /* \\vec w/o italic correction for Firefox */
  .tml-vec {
    transform: scale(0.75);
  }
  /* Fix \\cancelto in Firefox */
  .ff-narrow {
    width: 0em;
  }
  .ff-nudge-left {
    margin-left: -0.2em;
  }
  /* Squash hidden mrows in \\bordermatrix. Messes with centering, but necessary to squash. */
  .ff-squash mtd {
    display: block;
    height: 0;
  }
}

@supports (not (-moz-appearance: none)) {
  /* Chromium and WebKit */
  /* prime vertical alignment */
  /* Italic correction on superscripts */
  .tml-sml-pad {
    padding-left: 0.05em;
  }
  .tml-med-pad {
    padding-left: 0.1em;
  }
  .tml-lrg-pad {
    padding-left: 0.15em;
  }
}

@supports (-webkit-backdrop-filter: blur(1px)) {
  /* WebKit vertical & italic correction on accents */
  .wbk-acc {
    /* lower by x-height distance */
    transform: translate(0em, 0.431em);
  }
  .wbk-sml {
    transform: translate(0.07em, 0);
  }
  .wbk-sml-acc {
    transform: translate(0.07em, 0.431em);
  }
  .wbk-sml-vec {
    transform: scale(0.75) translate(0.07em, 0);
  }
  .wbk-med {
    transform: translate(0.14em, 0);
  }
  .wbk-med-acc {
    transform: translate(0.14em, 0.431em);
  }
  .wbk-med-vec {
    transform: scale(0.75) translate(0.14em, 0);
  }
  .wbk-lrg {
    transform: translate(0.21em, 0);
  }
  .wbk-lrg-acc {
    transform: translate(0.21em, 0.431em);
  }
  .wbk-lrg-vec {
    transform: scale(0.75) translate(0.21em, 0);
  }
}

/* \\cancel & \\phase use background images. Get them to print. */
menclose {
  -webkit-print-color-adjust: exact; /* Chrome & Edge */
  print-color-adjust: exact;
}

/* Array cell justification in Firefox & WebKit */
.tml-right {
  text-align: right;
}
.tml-left {
  text-align: left;
}

/* For CD labels that grow to the left in Firefox and WebKit */
.tml-shift-left {
  margin-left: -200%;
}

/* Styles for Chromium only */
@supports (not (-webkit-backdrop-filter: blur(1px))) and (not (-moz-appearance: none)) {
  /* Italic correction on accents */
  .chr-sml {
    transform: translate(0.07em, 0);
  }
  .chr-sml-vec {
    transform: scale(0.75) translate(0.07em, 0);
  }
  .chr-med {
    transform: translate(0.14em, 0);
  }
  .chr-med-vec {
    transform: scale(0.75) translate(0.14em, 0);
  }
  .chr-lrg {
    transform: translate(0.21em, 0);
  }
  .chr-lrg-vec {
    transform: scale(0.75) translate(0.21em, 0);
  }

  /* For CD labels that grow to the left */
  .tml-shift-left {
    margin-left: -100%;
  }

  /* MathML Core & Chromium do not support the MathML 3.0 element <menclose> attributes. */
  /* So use styles. */
  menclose {
    position: relative;
    padding: 0.5ex 0ex;
  }

  .tml-overline {
    padding: 0.1em 0 0 0;
    border-top: 0.065em solid;
  }

  .tml-underline {
    padding: 0 0 0.1em 0;
    border-bottom: 0.065em solid;
  }

  .tml-cancel {
    display: inline-block;
    position: absolute;
    left: 0.5px;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
  }
  .upstrike {
    clip-path: polygon(0.05em 100%, 0em calc(100% - 0.05em), calc(100% - 0.05em) 0em, 100% 0.05em);
  }
  .downstrike {
    clip-path: polygon(0em 0.05em, 0.05em 0em, 100% calc(100% - 0.05em), calc(100% - 0.05em) 100%);
  }
  .sout {
    clip-path: polygon(
      0em calc(55% + 0.0333em),
      0em calc(55% - 0.0333em),
      100% calc(55% - 0.0333em),
      100% calc(55% + 0.0333em)
    );
  }
  .tml-xcancel {
    clip-path: polygon(
      0.05em 0em,
      0em 0.05em,
      calc(50% - 0.05em) 50%,
      0em calc(100% - 0.05em),
      0.05em 100%,
      50% calc(50% + 0.05em),
      calc(100% - 0.05em) 100%,
      100% calc(100% - 0.05em),
      calc(50% + 0.05em) 50%,
      100% 0.05em,
      calc(100% - 0.05em) 0%,
      50% calc(50% - 0.05em)
    );
  }

  .longdiv-top {
    border-top: 0.067em solid;
    padding: 0.1em 0.2em 0.2em 0.433em;
  }
  .longdiv-arc {
    position: absolute;
    top: 0;
    bottom: 0.1em;
    left: -0.4em;
    width: 0.7em;
    border: 0.067em solid;
    transform: translateY(-0.067em);
    border-radius: 70%;
    clip-path: inset(0 0 0 0.4em);
    box-sizing: border-box;
  }
  .menclose {
    display: inline-block;
    text-align: left;
    position: relative;
  }

  .phasor-bottom {
    border-bottom: 0.067em solid;
    padding: 0.2em 0.2em 0.1em 0.6em;
  }
  .phasor-angle {
    display: inline-block;
    position: absolute;
    left: 0.5px;
    bottom: -0.04em;
    height: 100%;
    aspect-ratio: 0.5;
    background-color: currentColor;
    clip-path: polygon(0.05em 100%, 0em calc(100% - 0.05em), calc(100% - 0.05em) 0em, 100% 0.05em);
  }

  .tml-fbox {
    padding: 3pt;
    border: 1px solid;
  }

  .circle-pad {
    padding: 0.267em;
  }
  .textcircle {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 0.067em solid;
    border-radius: 50%;
  }

  .actuarial {
    padding: 0.03889em 0.03889em 0 0.03889em;
    border-width: 0.08em 0.08em 0em 0em;
    border-style: solid;
    margin-right: 0.03889em;
  }

  /* Stretch \\widetilde */
  .tml-tilde-2 {
    transform: scale(2, 1.1);
  }
  .tml-tilde-3 {
    transform: scale(3, 1.3);
  }
  .tml-tilde-4 {
    transform: scale(4, 1.4);
  }
  /* Stretch \\widehat */
  .tml-hat-1 {
    transform: scale(1.8, 1.1);
  }
  .tml-hat-2 {
    transform: scale(3.5, 1.1);
  }
  .tml-hat-3 {
    transform: scale(5.4, 1.3);
  }
  .tml-hat-4 {
    transform: scale(7.2, 1.4);
  }

  /* set array cell justification */
  .tml-right {
    text-align: -webkit-right;
  }
  .tml-left {
    text-align: -webkit-left;
  }
}

.special-fraction {
  font-family: 'Times New Roman', Times, 'STIX TWO', Tinos, serif;
}

/* flex-wrap for line-breaking in Chromium */
math {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
}
math > mrow {
  padding: 0.5ex 0ex;
}

/* Default mtd top padding is 0.5ex per MathML-Core and user-agent CSS */
/* We adjust for jot and small */
mtable.tml-jot > mtr > mtd {
  padding-top: 0.7ex;
  padding-bottom: 0.7ex;
}
mtable.tml-small mtd {
  padding-top: 0.35ex;
  padding-bottom: 0.35ex;
}

/* Firefox */
@supports (-moz-appearance: none) {
  /* Avoid flex-wrap */
  math {
    display: inline;
  }
  math > mrow {
    padding: 0;
  }
  /* Adjust Firefox spacing between array rows */
  mtd,
  mtable.tml-small mtd {
    padding-top: 0;
    padding-bottom: 0;
  }
  mtable.tml-jot > mtr > mtd {
    padding-top: 0.2ex;
    padding-bottom: 0.2ex;
  }
}

/* AMS environment auto-numbering via CSS counter. */
.tml-eqn::before {
  counter-increment: tmlEqnNo;
  content: '(' counter(tmlEqnNo) ')';
}

.math-body {
  counter-reset: tmlEqnNo;
}
`;function _(a){let e=[],t="",r=0;for(let i of a.split(`
`)){if(r+=(i.match(/\\begin\{/g)??[]).length-(i.match(/\\end\{/g)??[]).length,!i.trim()&&r<=0){t.trim()&&e.push(t.trim()),t="",r=0;continue}t+=`${t?`
`:""}${i}`}return t.trim()&&e.push(t.trim()),e.slice(0,500).map(i=>i.replace(/^\$\$([\s\S]*)\$\$$|^\\\[([\s\S]*)\\\]$/,(n,o,s)=>(o??s).trim()))}function q(a){let e=[],t="",r=0,i=()=>{t&&e.push({type:"text",text:t.replace(/\\\$/g,"$")}),t=""};for(;r<a.length;){let n=a.slice(r,r+2),o=n==="$$"?["$$","$$",!0]:n==="\\["?["\\[","\\]",!0]:n==="\\("?["\\(","\\)",!1]:a[r]==="$"&&a[r-1]!=="\\"&&!/\s/.test(a[r+1]??" ")?["$","$",!1]:null;if(!o||a[r]==="\\"&&a[r-1]==="\\"){t+=a[r],r+=1;continue}let[s,c,h]=o,d=K(a,r+s.length,c);if(d<0){t+=a[r],r+=1;continue}let u=a.slice(r+s.length,d);i(),e.push({type:"math",tex:u.trim(),display:h}),r=d+c.length}return i(),e}function K(a,e,t){for(let r=e;r<a.length&&r-e<=2e4;r+=1){if(a[r]==="\\"&&t!=="\\]"&&t!=="\\)"){r+=1;continue}if(a.startsWith(t,r)&&!(t==="$"&&(/\s/.test(a[r-1]??"")||/\d/.test(a[r+1]??"")))&&!((t==="\\]"||t==="\\)")&&a[r-1]==="\\"))return r}return-1}function z(a){if(!a?.trim())return{};try{let e=JSON.parse(a);if(typeof e!="object"||e===null||Array.isArray(e))return{};let t=Object.create(null);for(let[r,i]of Object.entries(e).slice(0,200))/^\\[A-Za-z]{1,40}$/.test(r)&&typeof i=="string"&&(t[r]=i.slice(0,2e3));return t}catch{return{}}}var R=new Set(`math semantics annotation mrow mi mn mo ms mtext mspace mpadded mphantom mfrac msqrt mroot
  msub msup msubsup munder mover munderover mmultiscripts mprescripts none mtable mtr mtd
  menclose mstyle merror maction mlabeledtr`.split(/\s+/)),Y=new Set(`display displaystyle scriptlevel mathvariant mathsize mathcolor mathbackground dir class
  stretchy symmetric largeop movablelimits fence separator form lspace rspace minsize maxsize
  width height depth voffset linethickness notation encoding columnalign rowalign columnspan
  rowspan columnlines rowlines columnspacing rowspacing frame framespacing accent accentunder
  linebreak xmlns`.split(/\s+/)),D=new Set(`width height padding padding-top padding-right padding-bottom padding-left padding-inline-start
  padding-inline-end margin margin-left margin-right margin-top margin-bottom text-align
  font-weight font-style font-family color background-color border border-top border-right
  border-bottom border-left border-color border-style border-width position top right bottom
  left transform white-space math-depth math-style display vertical-align min-width`.split(/\s+/));function L(a){for(let e of Array.from(a.querySelectorAll("*"))){if(!e.isConnected&&!a.contains(e))continue;let t=e.localName;if(!R.has(t)&&t!=="span"){e.replaceWith(document.createTextNode(e.textContent??""));continue}for(let r of Array.from(e.attributes)){let i=r.name.toLowerCase();i!=="style"&&(!Y.has(i)||!$(r.value))&&e.removeAttribute(r.name)}e.localName==="annotation"&&e.getAttribute("encoding")!=="application/x-tex"&&e.remove(),H(e)}}function $(a){return a.length<=200&&!/[<>"'`\\]|url\s*\(|expression\s*\(|javascript:|@/i.test(a)}function H(a){let e=a.style;if(e)for(let t of Array.from(e)){let r=e.getPropertyValue(t);(!D.has(t)||!$(r))&&e.removeProperty(t)}}function j(a){return new XMLSerializer().serializeToString(a)}var p=null;function X(){if(p)return p;let a=f().vendorUrl||y(),e={ready:!1,engine:null,promise:Promise.resolve(null)};return e.promise=import(new URL("temml.js",a||location.href).href).then(t=>(e.engine={render:t.render,ParseError:t.ParseError},e.ready=!0,e.engine),t=>{throw p=null,t}),p=e,e}function F(a){if(!a||typeof a.render!="function")throw new TypeError("[vitrine] useMathEngine(): expected Temml (an object with render()).");let e={render:a.render.bind(a),ParseError:a.ParseError};p={ready:!0,engine:e,promise:Promise.resolve(e)}}var N=Object.freeze({mathEquation:"Equation {index}",mathEquations:"{count} equations",mathCopyTex:"Copy TeX",mathCopyMathml:"Copy MathML",mathError:"This TeX could not be read: {message}",mathLoadFailed:"The math renderer could not be loaded: the TeX is shown as it is written."}),W={mathEquation:"\xC9quation {index}",mathEquations:"{count} \xE9quations",mathCopyTex:"Copier le TeX",mathCopyMathml:"Copier le MathML",mathError:"Ce TeX n\u2019a pas pu \xEAtre lu : {message}",mathLoadFailed:"Le moteur de formules n\u2019a pas pu \xEAtre charg\xE9 : le TeX est affich\xE9 tel qu\u2019il est \xE9crit."};T({en:N,fr:W});var V=class extends C{static type="math";static componentAttributes=Object.freeze(["inline","delimiters","numbered","macros","copy-mathml"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,fullscreen:!0,"copy-mathml":!0}};static styles=[A];static useEngine(e){F(e)}constructor(){super(),this.panelId=x("panel"),this.editor=null,this.previewTimer=void 0,this.loadFailed=!1}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}get inline(){return w(this.getAttribute("inline"))===!0}engine(){let e=X();return e.ready?e.engine:(this.loadFailed||e.promise.then(()=>this.requestRender(),()=>{this.loadFailed=!0,this.requestRender()}),null)}renderContent(e){let t=this.t,r=this.text??"",i=this.engine(),n=this.inline;e.classList.toggle("inline-math",n);let o=l(n?"span":"div",{class:`body math-body${n?" inline":""}`,part:"body"});this.loadFailed&&!i&&o.append(M(t("mathLoadFailed")));let s=[];if(this.feature("delimiters"))for(let m of q(r))m.type==="text"?o.append(this.textView(m.text)):(s.push(m.tex),o.append(this.mathView(m.tex,m.display,i,null)));else if(n)s.push(r.trim()),o.append(this.mathView(r.trim(),!1,i,null));else{let m=_(r),O=this.feature("numbered");m.forEach((b,P)=>{s.push(b),o.append(this.mathView(b,!0,i,O?P+1:null))})}if(n){e.append(o);return}let c=l("div",{class:"panel",attrs:{id:this.panelId}}),h=[];if(this.editing){let m=this.createEditor();c.classList.add("math-edit"),c.append(l("div",{class:"body editor-body",part:"body source"},m.element),o),h=this.historyButtons(m)}else c.append(o);let d=this.feature("delimiters")?r:s.join(`

`),u=[this.feature("delimiters")?this.searchButton(new E(o)):null,...h,this.editToggleButton(),this.fullscreenButton(),this.feature("copy-mathml")&&i?this.copyTextButton(()=>Array.from(o.querySelectorAll("math"),j).join(`
`),t("mathCopyMathml"),"copy-mathml"):null,this.feature("copy")?this.copyButton(()=>d,t("mathCopyTex")):null],B=s.length>1&&!this.feature("delimiters")?t("mathEquations",{count:g(s.length,this.locale)}):"TeX";e.append(...this.chrome({badge:B,actions:u}),c),this.editor?.align()}textView(e){let t=document.createDocumentFragment();return e.split(/\n[^\S\n]*\n/).forEach((r,i)=>{i&&t.append(l("span",{class:"math-break",attrs:{"aria-hidden":"true"}})),t.append(r)}),t}mathView(e,t,r,i){let n=l(t?"div":"span",{class:t?"math-display":"math-inline",part:t?"equation":void 0});if(!r||!e)return n.append(l("code",{class:"math-tex",text:e})),n;let o=l("span",{class:"math-target"});try{if(e.length>2e4)throw new Error(`more than ${2e4} characters`);r.render(e,o,{displayMode:t,throwOnError:!0,trust:!1,annotate:!0,maxExpand:1e3,maxSize:50,macros:{...z(this.getAttribute("macros"))},xml:!1,wrap:t?"none":"tex"}),L(o);for(let s of Array.from(o.querySelectorAll("math")))s.setAttribute("part","math");n.append(...Array.from(o.childNodes))}catch(s){let c=s instanceof Error?s.message.replace(/^Temml parse error: /,"").slice(0,500):String(s);return n.classList.add("error"),n.setAttribute("part","tex-error"),n.append(l("code",{class:"math-tex",text:e}),l("span",{class:"math-error",attrs:{role:"note"},text:this.t("mathError",{message:c})})),n}return i!==null&&(n.classList.add("numbered"),n.append(l("span",{class:"math-number",part:"number",text:`(${g(i,this.locale)})`}))),n}createEditor(){return this.editor?.destroy(),this.editor=new S({text:this.text??"",language:"latex",lineNumbers:!1,wrap:!0,highlightLimit:f().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>k(this,v.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),150)}};export{V as a};
//# sourceMappingURL=chunk-7LNJMRUS.js.map
