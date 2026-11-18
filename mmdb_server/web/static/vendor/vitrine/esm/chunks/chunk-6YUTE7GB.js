/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as P,c as B,d as S,f as z}from"./chunk-TZGD2GBK.js";import{a as $}from"./chunk-YCSGENO5.js";import{r as O}from"./chunk-3VQOL2NW.js";import{I as v,M as x,N as T,Q as _,U as M,X as I,b as L,l as u,n as E}from"./chunk-DNNVKOIB.js";import{h as N,k as h,l as g,m as q,q as j}from"./chunk-2IDMCIF6.js";var H=Object.freeze({jobInvalid:"This job could not be read: {message}",jobProgress:"Job progress",jobInProgress:"In progress",jobSteps:"{done} of {total} steps",jobNoSteps:"No steps yet.",jobNoMatch:"No log line matches.",jobNoLog:"No output.",jobCopyLog:"Copy log",jobAnnounce:"Job {status}",jobAnnounceStep:"Running: {step}",jobStatusQueued:"Queued",jobStatusRunning:"Running",jobStatusSuccess:"Succeeded",jobStatusFailure:"Failed",jobStatusCancelled:"Cancelled",jobStatusSkipped:"Skipped"}),J={jobInvalid:"Impossible de lire ce job : {message}",jobProgress:"Progression du job",jobInProgress:"En cours",jobSteps:"{done} \xE9tapes sur {total}",jobNoSteps:"Aucune \xE9tape pour l\u2019instant.",jobNoMatch:"Aucune ligne de log ne correspond.",jobNoLog:"Aucune sortie.",jobCopyLog:"Copier le log",jobAnnounce:"Job {status}",jobAnnounceStep:"En cours : {step}",jobStatusQueued:"En attente",jobStatusRunning:"En cours",jobStatusSuccess:"R\xE9ussi",jobStatusFailure:"\xC9chou\xE9",jobStatusCancelled:"Annul\xE9",jobStatusSkipped:"Ignor\xE9"};var F=`/*
 * Job: a summary with the status, duration and progress bar, then steps that open to
 * show their logs.
 */
.job-body {
  padding: var(--_space-4) var(--_space-5);
  background: var(--_surface);
  /* Without a height limit the page scrolls, not the job. */
  overscroll-behavior: auto;
}

:host([max-height]) .job-body,
.vt[data-fullscreen] .job-body {
  overscroll-behavior: contain;
}

/* ---------- Statuses ---------- */

.status-queued,
.status-skipped,
.status-cancelled {
  --_tone: var(--_fg-muted);
}

.status-running {
  --_tone: var(--_info);
}

.status-success {
  --_tone: var(--_success);
}

.status-failure {
  --_tone: var(--_danger);
}

.job-status {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  color: var(--_tone);
  font: 600 var(--_font-size-ui) / 1 var(--_font-ui);
}

.job-status .icon {
  width: 16px;
  height: 16px;
}

.job-status.status-running .icon {
  animation: vt-job-spin 1s linear infinite;
}

@keyframes vt-job-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---------- Summary ---------- */

.job-summary {
  display: grid;
  gap: var(--_space-2);
  padding-bottom: var(--_space-4);
  margin-bottom: var(--_space-3);
  border-bottom: 1px solid var(--_border);
}

.job-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-3);
}

.job-title h2 {
  margin: 0;
  color: var(--_fg);
  font: 600 16px / 1.3 var(--_font-ui);
}

.job-percent {
  margin-left: auto;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-ui) / 1 var(--_font-mono);
  font-variant-numeric: tabular-nums;
}

.job-facts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-4);
  color: var(--_fg-muted);
  font: var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.job-duration {
  color: var(--_fg-muted);
  font: var(--_font-size-small) / 1 var(--_font-mono);
  font-variant-numeric: tabular-nums;
}

/* ---------- Progress bars ---------- */

.job-progress {
  position: relative;
  height: 6px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone, var(--_accent)) 15%, var(--_surface-sunken));
}

.job-progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--_value, 0%);
  border-radius: inherit;
  background: var(--_tone, var(--_accent));
  transition: width var(--_duration) var(--_easing);
}

.job-progress.indeterminate .job-progress-fill {
  width: 35%;
  animation: vt-job-slide 1.4s var(--_easing) infinite;
}

@keyframes vt-job-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(300%);
  }
}

.job-progress.mini {
  flex: 0 1 120px;
  height: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .job-status.status-running .icon,
  .job-progress.indeterminate .job-progress-fill {
    animation: none;
  }

  /* Without motion, an unknown progress reads as a half-filled, faded bar. */
  .job-progress.indeterminate .job-progress-fill {
    width: 50%;
    opacity: 0.6;
  }
}

/* ---------- Steps ---------- */

.job-steps {
  display: grid;
  gap: var(--_space-1);
  padding: 0;
  margin: 0;
  list-style: none;
}

.job-step {
  overflow: hidden;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.job-step.status-failure {
  border-color: color-mix(in srgb, var(--_danger) 40%, var(--_border));
}

.job-step-head {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  min-height: 36px;
  padding: 0 var(--_space-3);
  border: 0;
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1.3 var(--_font-ui);
  text-align: left;
  cursor: pointer;
  transition: background-color var(--_duration-fast) var(--_easing);
}

.job-step-head:hover {
  background: color-mix(in srgb, var(--_fg) 4%, var(--_surface));
}

.job-step-head:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.job-step-head > .icon {
  width: 14px;
  height: 14px;
  flex: none;
  color: var(--_fg-muted);
  transition: transform var(--_duration-fast) var(--_easing);
}

.job-step-head[aria-expanded='true'] > .icon {
  transform: rotate(90deg);
}

.job-step-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.job-step-word {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.job-step.status-skipped .job-step-name,
.job-step.status-queued .job-step-name {
  color: var(--_fg-muted);
}

/* ---------- Logs ---------- */

.job-log {
  max-height: min(50vh, 420px);
  padding: var(--_space-2) 0;
  overflow: auto;
  border-top: 1px solid var(--_border);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font: var(--_font-size-small) / var(--_line-height) var(--_font-mono);
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

.job-log:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.job-line {
  display: flex;
  min-width: max-content;
}

.job-ln {
  flex: none;
  width: 4.5ch;
  padding-right: var(--_space-3);
  color: var(--_fg-muted);
  text-align: right;
  user-select: none;
}

.job-text {
  padding-right: var(--_space-4);
  white-space: pre;
}

.job-log-empty {
  padding: 0 var(--_space-4);
  color: var(--_fg-muted);
}

mark.match {
  border-radius: 2px;
  background: var(--_highlight);
  color: inherit;
}

mark.match.current {
  background: var(--_highlight-current);
}

/* ---------- Edit mode ---------- */

.job-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}
`;var V={pending:"queued",waiting:"queued",queued:"queued",todo:"queued",running:"running",in_progress:"running","in-progress":"running",started:"running",success:"success",succeeded:"success",passed:"success",ok:"success",done:"success",completed:"success",failure:"failure",failed:"failure",error:"failure",errored:"failure",cancelled:"cancelled",canceled:"cancelled",aborted:"cancelled",skipped:"skipped",neutral:"skipped"},p=class extends Error{constructor(t){super(t),this.name="JobError"}};function f(r,t="queued"){let e=String(r??"").trim().toLowerCase();return Object.hasOwn(V,e)?V[e]:t}function tt(r){if(typeof r=="number")return Number.isFinite(r)&&r>=0?r*1e3:null;let t=String(r??"").trim().toLowerCase();if(!t)return null;if(/^\d+(\.\d+)?$/.test(t))return Number(t)*1e3;let e={ms:1,s:1e3,m:6e4,h:36e5},s=0,o=!1;for(let n of t.matchAll(/(\d+(?:\.\d+)?)\s*(ms|s|m|h)\b/g))s+=Number(n[1])*e[n[2]],o=!0;return o?s:null}function D(r){if(!r)return null;let t=Date.parse(r);return Number.isNaN(t)?null:t}function et(r){if(r==null||r==="")return null;let t=Number(String(r).replace("%",""));return Number.isFinite(t)?Math.min(100,Math.max(0,t)):null}function X(r){let t=String(r.started??r.startedAt??r.started_at??r.start??""),e=String(r.finished??r.finishedAt??r.completed_at??r.end??r.ended??""),s=f(r.status??r.conclusion??r.state),o=tt(r.duration),n=D(t),a=D(e);return o===null&&n!==null&&a!==null&&a>=n&&(o=a-n),{name:String(r.name??r.title??""),status:s,started:t,finished:e,duration:o,progress:et(r.progress)}}function st(r,t){let e=r&&typeof r=="object"?r:{},s=X(e),o=Array.isArray(e.log)?e.log.join(`
`):String(e.log??e.output??"");return{...s,name:s.name||`Step ${t+1}`,log:o}}function G(r){let t=Array.isArray(r)?{steps:r}:r&&typeof r=="object"?r:null;if(!t)throw new p('a job is an object with "steps", or an array of steps');let s=(Array.isArray(t.steps)?t.steps:[]).slice(0,500).map(st),o=X(t);return!("status"in t)&&!("conclusion"in t)&&!("state"in t)&&(o.status=y(s)),{...o,steps:s}}function y(r){let t=e=>r.some(s=>s.status===e);return t("failure")?"failure":t("running")?"running":t("cancelled")?"cancelled":!r.length||t("queued")?t("success")?"running":"queued":r.every(e=>e.status==="skipped")?"skipped":"success"}function rt(r){let t={name:""},e=[],s=t,o=!0,n=[],a=()=>{s!==t&&(s.log=n.join(`
`).replace(/\n+$/,"")),n=[]};for(let i of r.split(`
`)){let l=/^(#{1,2})\s+(.+?)\s*$/.exec(i);if(l){if(a(),l[1]==="#"&&!e.length)s=t;else{if(e.length>=500)break;s={},e.push(s)}s.name=l[2],o=!0;continue}let d=o&&/^(status|started|finished|duration|progress)\s*:\s*(.*)$/i.exec(i);if(d){s[d[1].toLowerCase()]=d[2].trim();continue}o&&!i.trim()&&!n.length||(o=!1,s!==t&&n.push(i))}return a(),G({...t,steps:e})}function R(r){if(!r.trim())return null;if(/^\s*[[{]/.test(r)){let t;try{t=JSON.parse(r)}catch(e){throw new p(e instanceof Error?e.message:String(e))}return G(t)}return rt(r)}var Q=new Set(["success","failure","cancelled","skipped"]);function w(r){return Q.has(r.status)?100:r.status==="queued"?0:r.progress}function U(r){if(r.progress!==null)return r.progress;if(Q.has(r.status))return 100;if(!r.steps.length)return r.status==="queued"?0:null;let t=0;for(let e of r.steps){let s=w(e);t+=s??50}return Math.round(t/r.steps.length)}function W(r){if(r.duration!==null)return r.duration;let t=r.steps.filter(e=>e.duration!==null);return t.length?t.reduce((e,s)=>e+s.duration,0):null}function k(r){if(r<1e3)return`${Math.round(r)} ms`;let t=Math.round(r/1e3);if(t<60)return`${t} s`;let e=Math.floor(t/60);return e<60?`${e} min ${String(t%60).padStart(2,"0")} s`:`${Math.floor(e/60)} h ${String(e%60).padStart(2,"0")} min`}function C(r){return r.steps.map(t=>`## ${t.name} (${t.status})
${t.log}`.trimEnd()).join(`

`)}q({en:H,fr:J});var ot=5e3,Y=class extends I{static type="job";static componentAttributes=Object.freeze(["progress","durations","open-failed","follow"]);static presets={simple:{progress:!0,durations:!0,"open-failed":!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,progress:!0,durations:!0,"open-failed":!0}};static styles=[L,$,P,F];constructor(){super(),this.parsed=null,this.toggled=new Map,this.query="",this.matchCount=0,this.panelId=E("panel"),this.listHost=null,this.editor=null,this.previewTimer=void 0,this.lastStatus=""}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.toggled.clear()}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,job:R(t),error:null}}catch(e){this.parsed={text:t,job:null,error:e instanceof Error?e:new p(String(e))}}return this.parsed}get job(){let t=this.parse().job;return t?structuredClone(t):null}mutate(t){let e=this.parse().job,s=e?structuredClone(e):{name:"",status:"queued",started:"",finished:"",duration:null,progress:null,steps:[]},o=new Map(s.steps.map(i=>[i.name,i.status])),n=s.status;t(s);let a=JSON.stringify(s,null,2);this.text=a,this.error=null,this.parsed={text:a,job:s,error:null};for(let i of s.steps){let l=o.get(i.name);l&&l!==i.status&&g(this,h.JOB_CHANGE,{status:i.status,step:i.name,previous:l})}n!==s.status&&g(this,h.JOB_CHANGE,{status:s.status,step:null,previous:n}),!this.editing&&this.requestRender()}update(t){this.mutate(e=>{Object.assign(e,t),t.status!==void 0&&(e.status=f(t.status,e.status))})}setStep(t,e){this.mutate(s=>{let o=s.steps.find(n=>n.name===t);o||(o={name:t,status:"queued",started:"",finished:"",duration:null,progress:null,log:""},s.steps.push(o)),Object.assign(o,e,{name:t}),e.status!==void 0&&(o.status=f(e.status,o.status)),s.status=y(s.steps)})}appendLog(t,e){this.mutate(s=>{let o=s.steps.find(n=>n.name===t);o||(o={name:t,status:"running",started:"",finished:"",duration:null,progress:null,log:""},s.steps.push(o)),o.log=o.log?`${o.log}
${String(e)}`:String(e)})}isOpen(t){let e=this.toggled.get(t.name);return e!==void 0?e:this.query?t.log.toLowerCase().includes(this.query.toLowerCase()):this.feature("open-failed")&&t.status==="failure"}renderContent(t){let e=this.t,{job:s,error:o}=this.parse(),n=u("div",{class:"panel",attrs:{id:this.panelId}}),a=u("div",{class:"body job-body",part:"body"});o?a.append(M(e("jobInvalid",{message:o.message}))):s?(a.append(this.summary(s)),this.listHost=u("ol",{class:"job-steps",part:"steps"}),a.append(this.listHost),this.renderSteps(),this.announceStatus(s)):a.append(u("div",{class:"empty",part:"empty",text:e("empty")}));let i=[];if(this.editing){let c=this.createEditor();n.classList.add("job-edit"),n.append(u("div",{class:"body editor-body",part:"body source"},c.element),a),i=this.historyButtons(c)}else n.append(a);let l={run:c=>(this.query=c.slice(0,T).trim(),this.toggled.clear(),this.renderSteps(),{total:this.matchCount,capped:this.matchCount>=x}),go:c=>{let A=this.listHost?.querySelectorAll("mark.match")??[];for(let K of A)K.classList.remove("current");let b=A[c];b&&(b.classList.add("current"),b.scrollIntoView({block:"nearest",inline:"nearest"}))},clear:()=>{this.query="",this.renderSteps()}},d=[this.searchButton(l),...i,s&&!this.editing?_({icon:"expand-all",label:e("expandAll"),key:"expand-all",onClick:()=>this.openAll(!0)}):null,s&&!this.editing?_({icon:"collapse-all",label:e("collapseAll"),key:"collapse-all",onClick:()=>this.openAll(!1)}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>{let c=this.parse().job;return c?C(c):""},this.downloadName("job.log"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>{let c=this.parse().job;return c?C(c):""},e("jobCopyLog")):null],m=s?this.statusLabel(s.status):"";t.append(...this.chrome({badge:m,actions:d}),n),this.editor?.align()}get heading(){return super.heading||this.parse().job?.name||""}statusLabel(t){let e=`jobStatus${t[0].toUpperCase()}${t.slice(1)}`;return this.t(e)}statusView(t,e=!0){let s=t==="cancelled"?"skipped":t==="queued"?"circle":t;return u("span",{class:`job-status status-${t}`,part:"status"},v(`status-${s}`),u("span",{class:e?"status-word":"sr-only",text:this.statusLabel(t)}))}progressBar(t,e,s=""){let o=u("div",{class:`job-progress ${s}${t===null?" indeterminate":""}`,attrs:{role:"progressbar","aria-label":e,"aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t===null?null:String(Math.round(t)),"aria-valuetext":t===null?this.t("jobInProgress"):`${Math.round(t)} %`}}),n=u("span",{class:"job-progress-fill"});return t!==null&&n.style.setProperty("--_value",`${t}%`),o.append(n),o}summary(t){let e=this.t,s=t.steps.filter(l=>l.status!=="queued"&&l.status!=="running").length,o=W(t),n=u("div",{class:"job-facts"},u("span",{text:e("jobSteps",{done:j(s,this.locale),total:j(t.steps.length,this.locale)})}));this.feature("durations")&&o!==null&&n.append(u("span",{class:"job-duration",text:k(o)}));let a=U(t),i=u("div",{class:`job-summary status-${t.status}`,part:"summary"},u("div",{class:"job-title"},this.statusView(t.status),t.name?u("h2",{text:t.name}):null,a!==null?u("span",{class:"job-percent",text:`${a} %`}):null),n);if(this.feature("progress")){let l=this.progressBar(t.status==="running"&&t.progress===null&&!t.steps.length?null:a,e("jobProgress"));l.setAttribute("part","progress"),i.append(l)}return i}renderSteps(){let t=this.listHost,e=this.parse().job;if(!(!t||!e)){if(this.matchCount=0,!e.steps.length){t.replaceChildren(u("li",{class:"empty",part:"empty",text:this.t("jobNoSteps")}));return}if(t.replaceChildren(...e.steps.map((s,o)=>this.stepItem(s,o))),this.query&&!this.matchCount&&t.append(u("li",{class:"empty",part:"empty",text:this.t("jobNoMatch")})),this.feature("follow")){let s=t.querySelector(".job-step.status-running .job-log");s&&(s.scrollTop=s.scrollHeight)}}}stepItem(t,e){let s=this.isOpen(t),o=`${this.panelId}-log-${e}`,n=w(t),a=u("button",{class:"job-step-head",part:"step-head",attrs:{type:"button","aria-expanded":String(s),"aria-controls":o,"data-focus-key":`step-${e}`},on:{click:()=>this.toggle(t,!s,e)}},v("chevron-right"),this.statusView(t.status,!1),u("span",{class:"job-step-name",text:t.name}),t.status==="running"?this.progressBar(n,t.name,"mini"):u("span",{class:"job-step-word",text:this.statusLabel(t.status)}),this.feature("durations")&&t.duration!==null?u("span",{class:"job-duration",text:k(t.duration)}):null),i=u("li",{class:`job-step status-${t.status}`,part:`step step-${t.status}`},a),l=this.logView(t,o);return s&&i.append(l),i}logView(t,e){let s=u("div",{class:"job-log ansi",part:"step-log",attrs:{id:e,tabindex:"0",role:"region","aria-label":t.name}});if(!t.log)return s.append(u("div",{class:"job-log-empty",text:this.t("jobNoLog")})),s;let o=B(t.log).slice(0,ot),n=this.query.toLowerCase();return o.forEach((a,i)=>{let l=u("div",{class:"job-line"},u("span",{class:"job-ln",attrs:{"aria-hidden":"true"},text:String(i+1)})),d=u("span",{class:"job-text"});if(n&&S(a).toLowerCase().includes(n))this.markLine(d,a,n);else for(let m of a)d.append(z(m));l.append(d),s.append(l)}),s}markLine(t,e,s){let o=S(e),n=o.toLowerCase(),a=0,i=n.indexOf(s);for(;i!==-1&&this.matchCount<x;)t.append(o.slice(a,i),u("mark",{class:"match",text:o.slice(i,i+s.length)})),this.matchCount+=1,a=i+s.length,i=n.indexOf(s,a);t.append(o.slice(a))}toggle(t,e,s){this.toggled.set(t.name,e),this.renderSteps(),this.restoreFocus(`step-${s}`),g(this,h.STEP_TOGGLE,{name:t.name,open:e})}openAll(t){let e=this.parse().job;if(e){for(let s of e.steps)this.toggled.set(s.name,t);this.renderSteps()}}announceStatus(t){let e=t.steps.find(o=>o.status==="running"),s=`${t.status}:${e?.name??""}`;this.lastStatus&&this.lastStatus!==s&&this.announce(e&&t.status==="running"?this.t("jobAnnounceStep",{step:e.name}):this.t("jobAnnounce",{status:this.statusLabel(t.status)})),this.lastStatus=s}createEditor(){this.editor?.destroy();let t=/^\s*[[{]/.test(this.text??"");return this.editor=new O({text:this.text??"",language:t?"json":"markdown",lineNumbers:!0,wrap:!1,highlightLimit:N().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>g(this,h.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.render()},400)}};export{Y as a};
//# sourceMappingURL=chunk-6YUTE7GB.js.map
