/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as D,b as H,c as P,d as h,f as S}from"./chunk-TZGD2GBK.js";import{d as O}from"./chunk-E4EMJARX.js";import{a as x}from"./chunk-YCSGENO5.js";import{k as N,n as L,o as b,q as M,r as $}from"./chunk-3VQOL2NW.js";import{J as k,O as C,Q as A,X as E,b as w,d as f,l}from"./chunk-DNNVKOIB.js";import{h as T,k as y,l as g,q as _}from"./chunk-2IDMCIF6.js";var B=`/*
 * Terminal: commands and ANSI-colored output on the code background.
 * The 16 ANSI colors map to theme colors, so every theme keeps its contrast;
 * each can be overridden with a public token (--vt-ansi-red\u2026).
 */
.vt {
  --_prompt: var(--vt-terminal-prompt, var(--_accent-fg));
}

.term-body {
  background: var(--_code-bg);
}

.terminal {
  width: max-content;
  min-width: 100%;
  padding: var(--_space-3) var(--_space-4);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  font-variant-ligatures: none;
  line-height: var(--_line-height);
  tab-size: 8;
  white-space: pre;
}

.terminal.wrapped {
  width: auto;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.terminal .line {
  display: block;
}

/* ---------- Commands ---------- */

.entry.command {
  position: relative;
  padding-right: calc(var(--_space-5) + 8px);
}

.entry.command + .entry.command,
.entry.output + .entry.command {
  margin-top: var(--_space-1);
}

.prompt {
  color: var(--_prompt);
  font-weight: 600;
  user-select: none;
  -webkit-user-select: none;
}

.cmd {
  color: var(--_code-fg);
}

.cmd-copy {
  position: absolute;
  top: 50%;
  right: 0;
  width: 26px;
  height: 26px;
  margin-top: -13px;
  opacity: 0;
  transition: opacity var(--_duration-fast) var(--_easing);
}

.entry.command:hover .cmd-copy,
.cmd-copy:focus-visible,
.cmd-copy.done {
  opacity: 1;
}

@media (hover: none) {
  .cmd-copy {
    opacity: 0.7;
  }
}

/* ---------- Output ---------- */

.entry.output {
  color: color-mix(in srgb, var(--_code-fg) 88%, var(--_code-bg-solid));
}

.collapsed-lines {
  display: none;
}

.output-more {
  display: block;
  margin: var(--_space-1) 0 var(--_space-2);
  padding: 2px var(--_space-2);
  border: 1px dashed color-mix(in srgb, var(--_code-gutter) 60%, transparent);
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_accent-fg);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
  white-space: normal;
  cursor: pointer;
}

.output-more:hover {
  border-style: solid;
}

/* ---------- Typing replay ---------- */

.entry.typing-hidden {
  visibility: hidden;
}

.typing-cursor {
  display: inline-block;
  width: 0.6em;
  height: 1.15em;
  margin-left: 1px;
  vertical-align: text-bottom;
  background: var(--_accent);
  animation: vt-caret 1s steps(1) infinite;
}

@keyframes vt-caret {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typing-cursor {
    animation: none;
  }
}

/* ---------- Edit mode: editor above, live preview below ---------- */

.term-edit {
  display: grid;
  grid-template-rows: auto auto;
}

.term-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

.vt[data-fullscreen] .term-edit {
  flex: 1 1 auto;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 0;
}

.vt[data-fullscreen] .term-edit > .editor-body {
  max-height: none;
}
`;var U=Object.freeze(["$","\u276F"]),q=8;function j(a){if(a===null)return[...U];let t=a.trim();return!t||t.toLowerCase()==="none"?[]:t.split(/\s+/).filter(r=>r.length<=16).slice(0,q)}function G(a){if(!a.length)return()=>null;let t=a.slice().sort((e,n)=>n.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),r=new RegExp(`^([\\w@:~./\\\\-]{0,120}?(?:${t.join("|")}))(?: |$)`);return e=>{let n=r.exec(e);return n?{prompt:n[1],rest:e.slice(n[0].length)}:null}}function I(a,t){let r=G(t),e=[],n=null,o=null;return a.forEach((p,s)=>{let c=h(p);if(o){o.lines.push(c),/\\$/.test(c)||(o=null);return}let i=r(c);if(i){n=null;let d={type:"command",prompt:i.prompt,lines:[i.rest],line:s+1};e.push(d),/\\$/.test(i.rest)&&(o=d);return}n||(n={type:"output",lines:[],line:s+1},e.push(n)),n.lines.push(p)}),e}function R(a){return a.filter(t=>t.type==="command").map(t=>t.lines.join(`
`)).join(`
`)}var u=class{constructor(t,r){this.container=t,this.options=r,this.abort=null,this.finals=new Map,this.observer=null,this.playing=!1}start(){this.stop();let t=this.entries();if(t.length){for(let r of t)r.classList.add("typing-hidden");if(this.playing=!0,typeof IntersectionObserver>"u"){this.play();return}this.observer=new IntersectionObserver(r=>{r.some(e=>e.isIntersecting)&&(this.observer?.disconnect(),this.observer=null,this.play())},{threshold:.2}),this.observer.observe(this.container)}}entries(){return Array.from(this.container.querySelectorAll(".entry"))}async play(){let t=new AbortController;this.abort=t;let{signal:r}=t;try{for(let e of this.entries())e.classList.remove("typing-hidden"),e.classList.contains("command")?(await this.type(e,r),await v(350,r)):await v(250,r);this.end()}catch{}}async type(t,r){let e=t.querySelector(".cmd");if(!e)return;let n=Array.from(e.childNodes);this.finals.set(e,n);let o=this.options.commandText(e),p=document.createTextNode(""),s=document.createElement("span");s.className="typing-cursor",s.setAttribute("aria-hidden","true"),e.replaceChildren(p,s);let c=this.options.speed;for(let i=1;i<=o.length;i+=1)p.data=o.slice(0,i),await v(c*(.6+i*7919%10/12),r);e.replaceChildren(...n),this.finals.delete(e)}stop(){this.abort?.abort(),this.abort=null,this.observer?.disconnect(),this.observer=null;for(let[t,r]of this.finals)t.replaceChildren(...r);this.finals.clear();for(let t of this.entries())t.classList.remove("typing-hidden");this.playing&&this.end()}end(){this.playing=!1,this.options.onEnd?.()}};function v(a,t){return new Promise((r,e)=>{if(t.aborted){e(new Error("stopped"));return}let n=setTimeout(r,a);t.addEventListener("abort",()=>{clearTimeout(n),e(new Error("stopped"))},{once:!0})})}var K=2e3,z=class extends E{static type="terminal";static fromData=O;static dataAttributes=Object.freeze(["prompt","label"]);static componentAttributes=Object.freeze(["prompt","escapes","colors","command-copy","collapse-output","typing","typing-speed","wrap"]);static presets={simple:{colors:!0,"command-copy":!0,wrap:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,colors:!0,"command-copy":!0,wrap:!0}};static styles=[w,x,D,B];static keepCarriageReturns=!0;constructor(){super(),this.parsed=null,this.expanded=new Set,this.player=null,this.editor=null,this.previewHost=null,this.previewTimer=void 0,this.commandTexts=new WeakMap,this.typingDone=!1}disconnectedCallback(){this.player?.stop(),this.player=null,clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.expanded.clear(),this.typingDone=!1}attributeChangedCallback(t,r,e){(t==="prompt"||t==="escapes")&&(this.parsed=null),t==="typing"&&(this.typingDone=!1),super.attributeChangedCallback(t,r,e)}parse(){let t=this.text??"",r=this.getAttribute("prompt"),e=this.feature("escapes"),n=`${r}\0${e}\0${t}`;if(this.parsed?.key!==n){let o=e?H(t):t;this.parsed={key:n,entries:I(P(o),j(r))}}return this.parsed.entries}get commands(){return this.parse().filter(t=>t.type==="command").map(t=>t.lines.join(`
`))}get entries(){return this.parse().map(t=>t.type==="command"?{type:"command",prompt:t.prompt,text:t.lines.join(`
`)}:{type:"output",text:t.lines.map(h).join(`
`)})}plainText(){return this.parse().map(t=>t.type==="command"?`${t.prompt} ${t.lines.join(`
`)}`:t.lines.map(h).join(`
`)).join(`
`)}renderContent(t){let r=this.t;this.player?.stop(),this.player=null;let e=l("div",{class:"panel"}),n=[],o=null;if(this.editing){let i=this.createEditor();this.previewHost=l("div",{class:"body term-body term-preview",part:"body preview"}),e.classList.add("term-edit"),e.append(l("div",{class:"body editor-body",part:"body source"},i.element),this.previewHost),this.renderPreview(),n=this.historyButtons(i)}else this.previewHost=null,e.append(this.renderTranscript());let p={run:i=>{this.player?.stop();let d=this.root.querySelector(".terminal");return o=d?new C(d,{skip:".prompt, .sr-only, button"}):null,o?o.run(i):{total:0,capped:!1}},go:i=>{let d=o?.go(i)??null,m=d?.closest(".collapsed-lines");m&&m.classList.remove("collapsed-lines"),M(d)},clear:()=>o?.clear()},s=this.feature("typing")&&!this.editing,c=[this.searchButton(p),...n,s?A({icon:"replay",label:r("replay"),key:"replay",part:"replay-button",onClick:()=>this.replay()}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.plainText(),this.downloadName("session.txt"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>R(this.parse()),r("copyCommands")):null];t.append(...this.chrome({badge:"",actions:c}),e),this.editor?.align(),s&&!this.typingDone&&!V()&&this.replay()}replay(){let t=this.root.querySelector(".terminal");!t||this.editing||(this.typingDone=!0,this.player?.stop(),this.player=new u(t,{speed:f(this.getAttribute("typing-speed"),{min:5,max:200,fallback:35}),commandText:r=>this.commandTexts.get(r)??"",onEnd:()=>g(this,y.TYPING_END,{})}),this.player.start())}renderTranscript(){let t=this.parse(),r=l("div",{class:`terminal${this.feature("wrap")?" wrapped":""}`,part:"terminal"});return(!t.length||t.length===1&&Q(t[0]))&&r.append(l("div",{class:"empty",part:"empty",text:this.t("empty")})),t.forEach((e,n)=>{r.append(e.type==="command"?this.commandRow(e,n):this.outputBlock(e,n))}),l("div",{class:"body term-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||this.t("terminal")}},r)}commandRow(t,r){let e=t.lines.join(`
`),n=l("span",{class:"cmd",part:"command-text"});this.commandTexts.set(n,e),e.length<=K?n.append(N(e,"bash")):n.textContent=e;let o=l("div",{class:"entry command",part:"command",attrs:{"data-line":t.line}},l("span",{class:"sr-only",text:`${this.t("command")}: `}),l("span",{class:"prompt",part:"prompt",text:`${t.prompt} `,attrs:{"aria-hidden":"true"}}),n);if(this.feature("command-copy")&&e.trim()){let p=this.copyButton(()=>e,this.t("copyCommand"),`copy-command-${r}`);p.classList.add("cmd-copy"),p.setAttribute("part","button command-copy"),o.append(p)}return o}outputBlock(t,r){let e=l("div",{class:"entry output",part:"output",attrs:{"data-line":t.line}}),n=t.lines,o=f(this.getAttribute("collapse-output"),{min:0,max:1e5,fallback:0}),p=o>0&&n.length>o+1&&!this.expanded.has(r),s=p?o:n.length;if(this.appendLines(e,n,0,s),p){let c=l("div",{class:"collapsed-lines"});this.appendLines(c,n,s,n.length);let i=l("button",{class:"more output-more",part:"output-more",text:this.t("showMoreLines",{count:_(n.length-s,this.locale)}),attrs:{type:"button","data-focus-key":`output-more-${r}`},on:{click:()=>{this.expanded.add(r),c.classList.remove("collapsed-lines"),i.remove()}}});e.append(c,i)}return e}appendLines(t,r,e,n){let o=this.feature("colors"),p=(s,c,i)=>{let d=document.createDocumentFragment();for(let m=c;m<i;m+=1)d.append(W(r[m],o));s.appendChild(d)};if(n-e<=L){p(t,e,n);return}for(let s=e;s<n;s+=b){let c=Math.min(n,s+b),i=l("span",{class:"chunk",attrs:{"data-count":c-s}});i.style.setProperty("--_chunk-lines",String(c-s)),t.append(i),s===e?p(i,s,c):(i.setAttribute("data-pending",""),k(i,()=>{i.removeAttribute("data-pending"),p(i,s,c)}))}}createEditor(){return this.editor?.destroy(),this.editor=new $({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!0,highlightLimit:T().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>g(this,y.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){this.parsed=null,clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.renderPreview(),120)}renderPreview(){let t=this.previewHost;if(!t)return;let r=t.scrollTop,e=this.renderTranscript();t.replaceChildren(...Array.from(e.childNodes)),t.scrollTop=r,this.searchOpen&&this.searchQuery&&this.searchBar?.run()}};function Q(a){return a.type==="output"&&a.lines.every(t=>!h(t).trim())}function V(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function W(a,t){let r=l("span",{class:"line"});for(let e of a)r.append(t?S(e):document.createTextNode(e.text));return r.append(`
`),r}export{z as a};
//# sourceMappingURL=chunk-XM2EWQUO.js.map
