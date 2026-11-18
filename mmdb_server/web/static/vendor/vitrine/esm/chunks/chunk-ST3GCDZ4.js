/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as D}from"./chunk-YCSGENO5.js";import{c as v,d as $,e as U,f as q,p as I,r as M}from"./chunk-3VQOL2NW.js";import{R as F,S as j,U as z,W as K,X as O,b as E,e as S,l as u,n as L}from"./chunk-DNNVKOIB.js";import{f as B,h as p,k as T,l as k,m as N,v as V,x as A}from"./chunk-2IDMCIF6.js";var R=`/*
 * Diagram: the drawing, scaled to the width of the element, the source view, and the
 * reason when a diagram cannot be drawn.
 */
.dg-body {
  padding: 0;
  background: var(--_surface);
  overscroll-behavior: auto;
}

:host([max-height]) .dg-body,
.vt[data-fullscreen] .dg-body {
  overscroll-behavior: contain;
}

.dg-canvas {
  display: grid;
  justify-items: center;
  min-height: 120px;
  padding: var(--_space-4);
  overflow: auto;
}

.dg-canvas:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.dg-canvas.pending {
  align-content: center;
}

.dg-canvas > svg {
  display: block;
  max-width: 100%;
  height: auto;
}

.vt[data-fullscreen] .dg-canvas > svg {
  max-height: calc(100vh - var(--_header-height) - var(--_space-6));
}

.dg-source {
  align-self: stretch;
  justify-self: stretch;
  overflow-x: auto;
  background: var(--_code-bg);
}

.dg-canvas > .dg-source {
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.dg-source .code {
  padding-inline: var(--_space-4);
}

.dg-error {
  justify-self: stretch;
  display: grid;
  gap: var(--_space-1);
  margin-bottom: var(--_space-3);
  padding: var(--_space-2) var(--_space-3);
  border-inline-start: 3px solid var(--_danger);
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_danger) 6%, transparent);
  color: var(--_danger);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
}

.dg-error p {
  margin: 0;
  font-weight: 600;
}

.dg-message {
  margin: 0;
  color: var(--_fg);
  font: 400 var(--_font-size-small) / var(--_line-height) var(--_font-mono);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.dg-canvas > .notice {
  justify-self: stretch;
  margin-bottom: var(--_space-3);
}

.dg-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var f=null;function G(){if(f)return f;let a=p().vendorUrl||B(),t={ready:!1,engine:null,promise:Promise.resolve(null)};return t.promise=import(new URL("mermaid.js",a||location.href).href).then(e=>(e.useSanitizers({html:q,fragment:$,css:v}),t.engine={render:e.renderDiagram},t.ready=!0,t.engine),e=>{throw f=null,e}),f=t,t}function P(a){if(!a||typeof a.render!="function")throw new TypeError("[vitrine] useDiagramEngine(): expected an object with render().");f={ready:!0,engine:a,promise:Promise.resolve(a)}}var H=Object.freeze({diagram:"Diagram",diagramSource:"Source",diagramDrawing:"Drawing the diagram\u2026",diagramCopySource:"Copy source",diagramDownloadSvg:"Download SVG",diagramErrorTitle:"This diagram could not be drawn.",diagramLoadFailed:"The diagram renderer could not be loaded: the source is shown instead.",diagramUnsafe:"The drawing was refused by the sanitizer."}),J={diagram:"Diagramme",diagramSource:"Source",diagramDrawing:"Dessin du diagramme\u2026",diagramCopySource:"Copier la source",diagramDownloadSvg:"T\xE9l\xE9charger le SVG",diagramErrorTitle:"Ce diagramme n\u2019a pas pu \xEAtre dessin\xE9.",diagramLoadFailed:"Le moteur de diagrammes n\u2019a pas pu \xEAtre charg\xE9 : la source est affich\xE9e \xE0 la place.",diagramUnsafe:"Le dessin a \xE9t\xE9 refus\xE9 par le nettoyage."};N({en:H,fr:J});var Y=["diagram","source"],Z=["classic","handDrawn"],X=class extends O{static type="diagram";static componentAttributes=Object.freeze(["tabs","default-tab","look","line-numbers"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,tabs:!0}};static styles=[E,D,R];static useEngine(t){P(t)}constructor(){super(),this.drawing=null,this.drawingKey=null,this.tab=null,this.diagramSheet=null,this.paletteKey=null,this.loadFailed=!1,this.panelId=L("panel"),this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}get svg(){return this.drawing?.svg?.cloneNode(!0)??null}updateSheets(t){super.updateSheets(t),this.diagramSheet&&(this.root.adoptedStyleSheets=[...this.root.adoptedStyleSheets,this.diagramSheet])}applyTheme(){if(super.applyTheme(),this.paletteKey===null||!this.isConnected)return;JSON.stringify(this.palette())!==this.paletteKey&&this.requestRender()}get currentTab(){return this.feature("tabs")?this.tab??S(this.getAttribute("default-tab"),Y,"diagram"):"diagram"}palette(){let t=getComputedStyle(this.frame),e=m=>ee(t.getPropertyValue(m).trim()),r=e("--_surface"),o=e("--_surface-sunken"),s=e("--_surface-raised"),i=e("--_fg"),n=e("--_fg-muted"),c=e("--_border"),d=e("--_border-strong"),g=e("--_accent"),l=te(e("--_accent-soft"),r),b=e("--_info"),w=e("--_warning"),y=e("--_danger"),Q=e("--_success"),_=V(A(this.getAttribute("theme")))?.colorScheme==="dark",C=[g,b,w,e("--_syntax-keyword"),y,e("--_syntax-string"),e("--_syntax-number"),n];return{darkMode:_,background:r,fontFamily:t.getPropertyValue("--_font-ui").trim()||"system-ui, sans-serif",fontSize:"14px",primaryColor:o,primaryTextColor:i,primaryBorderColor:d,secondaryColor:l,secondaryTextColor:i,secondaryBorderColor:g,tertiaryColor:s,tertiaryTextColor:i,tertiaryBorderColor:c,lineColor:n,textColor:i,mainBkg:o,nodeBorder:d,nodeTextColor:i,clusterBkg:r,clusterBorder:c,titleColor:i,edgeLabelBackground:r,noteBkgColor:s,noteTextColor:i,noteBorderColor:d,actorBkg:o,actorBorder:d,actorTextColor:i,actorLineColor:n,signalColor:i,signalTextColor:i,labelBoxBkgColor:o,labelBoxBorderColor:d,labelTextColor:i,loopTextColor:i,activationBkgColor:l,activationBorderColor:g,sequenceNumberColor:r,sectionBkgColor:l,altSectionBkgColor:r,sectionBkgColor2:o,taskBkgColor:g,taskBorderColor:g,taskTextColor:_?r:i,taskTextOutsideColor:i,activeTaskBkgColor:b,activeTaskBorderColor:b,doneTaskBkgColor:n,doneTaskBorderColor:n,critBkgColor:y,critBorderColor:y,todayLineColor:w,gridColor:c,errorBkgColor:y,errorTextColor:r,pieStrokeColor:r,pieOuterStrokeColor:c,pieTitleTextColor:i,pieSectionTextColor:r,pieLegendTextColor:i,git0:g,git1:b,git2:w,git3:C[3],git4:Q,...Object.fromEntries(C.map((m,x)=>[`pie${x+1}`,m])),...Object.fromEntries(C.map((m,x)=>[`cScale${x}`,m]))}}ensureDrawing(t){let e=this.palette();this.paletteKey=JSON.stringify(e);let r=S(this.getAttribute("look"),Z,"classic"),o=JSON.stringify([t,this.paletteKey,r]);if(this.drawing?.key===o)return this.drawing;if(this.drawingKey===o)return null;let s=G();if(!s.ready)return this.loadFailed||s.promise.then(()=>this.requestRender(),()=>{this.loadFailed=!0,this.requestRender()}),null;let i=s.engine;return this.drawingKey=o,i.render(t,{themeVariables:e,look:r,fontFamily:e.fontFamily}).then(n=>{let c=typeof n=="string"?{svg:n,css:""}:n,{svg:d,css:g}=U(c.svg),l=[v(c.css??""),g].filter(Boolean).join(`
`);return{key:o,svg:d,css:l,error:d?"":this.t("diagramUnsafe")}},n=>({key:o,svg:null,css:"",error:re(n)})).then(n=>{this.drawingKey===o&&(this.drawingKey=null,this.drawing=n,this.diagramSheet=n.css?K(n.css):null,this.applyTheme(),this.requestRender())}),null}renderContent(t){let e=this.t,r=(this.text??"").trim(),o=this.currentTab,s=u("div",{class:"panel",attrs:{id:this.panelId}}),i=u("div",{class:`body dg-body tab-${o}`,part:"body"});o==="source"?i.append(this.sourceView(r)):i.append(this.canvasView(r));let n=[];if(this.editing){let l=this.createEditor();s.classList.add("dg-edit"),s.append(u("div",{class:"body editor-body",part:"body source"},l.element),i),n=this.historyButtons(l)}else s.append(i);let c=this.feature("tabs")&&!this.editing?F({tabs:[{id:"diagram",label:e("diagram"),icon:"chart"},{id:"source",label:e("diagramSource"),icon:"code"}],selected:o,label:e("tabs"),panelId:this.panelId,onSelect:l=>{this.tab=l,this.render(),this.root.querySelector(`[data-tab="${l}"]`)?.focus(),k(this,T.TAB_CHANGE,{tab:l})}}):null;c&&s.setAttribute("role","tabpanel");let d=this.drawing,g=[...n,this.editToggleButton(),this.fullscreenButton(),this.feature("download")&&d?.svg?this.downloadButton(()=>oe(d.svg,d.css),this.downloadName("diagram.svg"),"image/svg+xml"):null,this.feature("copy")?this.copyButton(()=>this.text??"",e("diagramCopySource")):null];t.append(...this.chrome({badge:"Mermaid",tabs:c,actions:g}),s),this.editor?.align()}canvasView(t){let e=this.t,r=u("div",{class:"dg-canvas",part:"canvas",attrs:{tabindex:"0",role:"region","aria-label":this.heading||e("diagram")}}),o=this.ensureDrawing(t);if(this.loadFailed&&!o)return r.append(z(e("diagramLoadFailed")),this.sourceView(t)),r;if(!o)return r.classList.add("pending"),r.append(j(e)),r;if(o.error||!o.svg)return r.append(u("div",{class:"dg-error",part:"diagram-error",attrs:{role:"note"}},u("p",{text:e("diagramErrorTitle")}),u("pre",{class:"dg-message",text:o.error})),this.sourceView(t)),r;let s=o.svg.cloneNode(!0);return s.setAttribute("part","diagram"),this.heading&&!s.hasAttribute("aria-labelledby")&&s.setAttribute("aria-label",this.heading),r.append(s),r}sourceView(t){let e=I(t,{language:"plaintext",lineNumbers:this.feature("line-numbers"),startLine:1,highlightRanges:[],diff:!1,highlightLimit:p().highlightLimit});return u("div",{class:"dg-source",part:"source"},e.element)}createEditor(){return this.editor?.destroy(),this.editor=new M({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:p().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>k(this,T.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),400)}},h;function ee(a){if(h===void 0)try{h=document.createElement("canvas").getContext("2d")}catch{h=null}return!h||!a?a||"#888888":(h.fillStyle="#888888",h.fillStyle=a,String(h.fillStyle))}function te(a,t){let e=/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/.exec(a),r=/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(t);if(!e||!r)return a;let o=Number(e[4]),s=i=>Math.round(Number(e[i])*o+parseInt(r[i],16)*(1-o)).toString(16).padStart(2,"0");return`#${s(1)}${s(2)}${s(3)}`}function re(a){return(a instanceof Error?a.message:typeof a=="string"?a:String(a)).slice(0,2e3)}function oe(a,t){let e=document.implementation.createDocument("http://www.w3.org/2000/svg","svg",null),r=e.importNode(a,!0);if(r.removeAttribute("part"),t){let o=e.createElementNS("http://www.w3.org/2000/svg","style");o.textContent=t,r.insertBefore(o,r.firstChild)}return`<?xml version="1.0" encoding="UTF-8"?>
${new XMLSerializer().serializeToString(r)}
`}export{X as a};
//# sourceMappingURL=chunk-ST3GCDZ4.js.map
