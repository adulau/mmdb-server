/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as K,b as Z,d as j}from"./chunk-IDMNVFFV.js";import{a as W,c as Q,e as $,f as Y}from"./chunk-TZGD2GBK.js";import{r as G}from"./chunk-3VQOL2NW.js";import{I as S,N as q,Q as R,U as V,X,e as E,l as c,n as H}from"./chunk-DNNVKOIB.js";import{h as D,k as F,l as O,m as U,q as w}from"./chunk-2IDMCIF6.js";var tt=`/*
 * Test report: the result of the run with a bar, status buttons, suites that open, and
 * each test with its status, duration, message and details.
 */
.tr-body {
  display: grid;
  align-content: start;
  gap: 0;
  padding: 0;
  background: var(--_surface);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
  overscroll-behavior: auto;
}

:host([max-height]) .tr-body,
.vt[data-fullscreen] .tr-body {
  overscroll-behavior: contain;
}

/* ---------- Summary ---------- */

.tr-summary {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.tr-headline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
  color: var(--_fg);
  font-size: calc(var(--_font-size-ui) + 2px);
}

.tr-summary.ok .tr-headline .icon {
  color: var(--_success);
}

.tr-summary.bad .tr-headline .icon {
  color: var(--_danger);
}

.tr-summary.muted .tr-headline .icon {
  color: var(--_fg-muted);
}

.tr-facts {
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
  font-variant-numeric: tabular-nums;
}

.tr-bar {
  display: flex;
  gap: 2px;
  height: 8px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.tr-bar > span {
  flex-basis: 0;
  min-width: 4px;
}

.tr-bar-passed {
  background: var(--_success);
}

.tr-bar-failed {
  background: var(--_danger);
}

.tr-bar-skipped {
  background: var(--_border-strong);
}

/* ---------- Status buttons ---------- */

.tr-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: var(--_space-3) var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.tr-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1 var(--_font-ui);
  cursor: pointer;
  transition: border-color var(--_duration-fast) var(--_easing);
}

.tr-chip:hover {
  border-color: var(--_border-strong);
}

.tr-chip[aria-pressed='true'] {
  border-color: color-mix(in srgb, var(--_accent) 50%, var(--_border));
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-weight: 600;
}

.tr-chip .icon {
  width: 14px;
  height: 14px;
}

.chip-failed .icon {
  color: var(--_danger);
}

.chip-passed .icon {
  color: var(--_success);
}

.chip-skipped .icon {
  color: var(--_fg-muted);
}

.tr-chip .chip-count {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

/* ---------- Suites ---------- */

.tr-suite + .tr-suite {
  border-top: 1px solid var(--_border);
}

.tr-suite-title {
  margin: 0;
  font: inherit;
}

.tr-suite-header {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  min-height: 40px;
  padding: var(--_space-2) var(--_space-4);
  border: 0;
  background: none;
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
  text-align: start;
  cursor: pointer;
}

.tr-suite-header:hover {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.tr-suite-header:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.tr-suite-header > .icon:first-child {
  flex: none;
  color: var(--_fg-muted);
  transition: transform var(--_duration) var(--_easing);
}

.tr-suite-header[aria-expanded='true'] > .icon:first-child {
  transform: rotate(90deg);
}

.tr-suite-header .icon + .icon {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_success);
}

.has-failures .tr-suite-header .icon + .icon {
  color: var(--_danger);
}

.tr-suite-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tr-suite-counts {
  display: flex;
  flex: none;
  gap: var(--_space-3);
  color: var(--_fg-muted);
  font-weight: 400;
  font-variant-numeric: tabular-nums;
}

.tr-failed-count {
  color: var(--_danger);
  font-weight: 600;
}

/* ---------- Tests ---------- */

.tr-cases {
  margin: 0;
  padding: 0 0 var(--_space-2);
  list-style: none;
}

.tr-case {
  padding: var(--_space-1) var(--_space-4) var(--_space-1) calc(var(--_space-4) + 24px);
}

.tr-case.current {
  background: var(--_highlight);
}

.tr-row {
  display: flex;
  align-items: baseline;
  gap: var(--_space-2);
}

.tr-icon {
  flex: none;
  align-self: center;
  display: inline-flex;
}

.tr-icon .icon {
  width: 14px;
  height: 14px;
}

.status-passed .tr-icon {
  color: var(--_success);
}

.status-failed .tr-icon,
.status-error .tr-icon {
  color: var(--_danger);
}

.status-skipped .tr-icon {
  color: var(--_fg-muted);
}

.tr-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: anywhere;
}

.status-skipped .tr-name {
  color: var(--_fg-muted);
}

.tr-class {
  color: var(--_fg-muted);
}

.tr-flaky {
  flex: none;
  padding: 0 6px;
  border: 1px solid color-mix(in srgb, var(--_warning) 50%, var(--_border));
  border-radius: var(--_radius-sm);
  color: var(--_warning);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.tr-time {
  flex: none;
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.tr-message {
  margin: 2px 0 0 calc(14px + var(--_space-2));
  color: var(--_fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.status-failed .tr-message,
.status-error .tr-message {
  color: var(--_danger);
}

.status-skipped .tr-message {
  color: var(--_fg-muted);
}

.tr-toggle {
  margin: 2px 0 0 calc(14px + var(--_space-2) - 8px);
}

.tr-details {
  display: grid;
  gap: var(--_space-1);
  margin: var(--_space-1) 0 var(--_space-2) calc(14px + var(--_space-2));
}

.tr-label {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.tr-pre {
  max-height: 360px;
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font: 400 var(--_font-size-small) / var(--_line-height) var(--_font-mono);
  white-space: pre;
}

.tr-more {
  margin: 0 0 var(--_space-2) calc(var(--_space-4) + 16px);
}

.tr-suites > .empty {
  padding: var(--_space-5);
}

.tr-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var N=5e4,st=2e4;var x=class extends Error{},C=r=>({name:"",classname:"",status:"passed",duration:null,message:"",details:"",output:"",errors:"",file:"",line:null,flaky:!1,...r}),k=r=>({name:"",file:"",cases:[],duration:null,timestamp:"",output:"",...r}),h=(r,t=st)=>typeof r=="string"?r.slice(0,t):r==null?"":String(r).slice(0,t),y=r=>typeof r=="object"&&r!==null&&!Array.isArray(r);function _(r,t){let s=typeof r=="number"?r:typeof r=="string"?Number(r.replace(/,/g,"")):NaN;return Number.isFinite(s)&&s>=0?s*t:null}function et(r){let t=(r.charCodeAt(0)===65279?r.slice(1):r).trim();if(!t)throw new x("empty");let s;if(t.startsWith("<"))s=ft(t);else if(/^[[{]/.test(t))s=bt(JSON.parse(t));else if(/^(?:TAP version \d+|1\.\.\d+|(?:not )?ok\b)/m.test(t))s=ht(t);else throw new x("format");return pt(s)}function pt(r){r.suites=r.suites.filter(a=>a.cases.length||a.output);let t={total:0,passed:0,failed:0,error:0,skipped:0},s=0,e=!1;for(let a of r.suites){for(let n of a.cases)t.total+=1,t[n.status]+=1;let i=a.duration??a.cases.reduce((n,o)=>n+(o.duration??0),0);(a.duration!==null||a.cases.some(n=>n.duration!==null))&&(e=!0),s+=i}return r.totals=t,r.duration===null&&e&&(r.duration=s),r}function T(r,t){let s=t.replace(/^\n+|\s+$/g,"");if(r){let a=$(r).trim();return{message:a,details:$(s)===a?"":s}}let e=s.split(`
`).find(a=>$(a).trim())??"";return{message:$(e).trim(),details:s}}var b=(r,t)=>r.attrs.find(s=>s.name===t)?.value??"",B=r=>r.children.filter(t=>t.type==="element");function ft(r){let t=K(r,{maxDepth:64});if(!t.ok)throw new x(`${t.error.message} (line ${t.error.line}, column ${t.error.column})`);let s=Z(t.value);if(!s||!/^test(?:suites|suite|run)$/.test(s.name))throw new x("junit");let e=[],a=0,i=(n,o)=>{let p=b(n,"name"),l=p?[...o,p]:o,u=k({name:l.join(" \u203A ")||b(n,"package"),file:b(n,"file")||b(n,"filepath"),duration:_(b(n,"time"),1e3),timestamp:b(n,"timestamp")});for(let f of B(n))f.name==="testsuite"?i(f,l):f.name==="testcase"&&a<N?(u.cases.push(mt(f,u.file)),a+=1):(f.name==="system-out"||f.name==="system-err")&&(u.output+=h(j(f)).trim());(u.cases.length||u.output)&&e.push(u)};if(s.name==="testsuite")i(s,[]);else for(let n of B(s))n.name==="testsuite"&&i(n,[]);return{format:"junit",name:s.name==="testsuite"?"":b(s,"name"),suites:e,totals:{total:0,passed:0,failed:0,error:0,skipped:0},duration:s.name==="testsuites"?_(b(s,"time"),1e3):null}}function mt(r,t){let s=C({name:b(r,"name"),classname:b(r,"classname")||b(r,"class"),duration:_(b(r,"time"),1e3),file:b(r,"file")||t,line:Number(b(r,"line"))||null});for(let e of B(r)){let a=h(j(e));if(e.name==="failure"||e.name==="error"){if(s.status==="error"||s.status==="failed"&&e.name==="failure")continue;s.status=e.name==="error"?"error":"failed";let i=b(e,"type"),{message:n,details:o}=T(b(e,"message"),a);s.message=i&&n&&!n.startsWith(i)?`${i}: ${n}`:n||i,s.details=o}else e.name==="skipped"&&s.status==="passed"?(s.status="skipped",s.message=(b(e,"message")||a).trim()):/^(?:flaky|rerun)(?:Failure|Error)$/.test(e.name)?(s.flaky=!0,s.details||(s.details=a.trim())):e.name==="system-out"?s.output+=a.trim():e.name==="system-err"&&(s.errors+=a.trim())}return s}function ht(r){let t=r.split(`
`),s=[],e=k({name:""}),a=new Map,i=null,n=0;for(let o=0;o<t.length;o+=1){let p=t[o],l=/^ */.exec(p)?.[0].length??0,u=p.trim(),f=/^# Subtest:\s*(.*)$/.exec(u);if(f){let A=k({name:f[1].trim()});a.set(l,A),s.push(A);continue}if(u==="---"&&i){let A=[];for(o+=1;o<t.length&&t[o].trim()!=="...";o+=1)A.push(t[o]);let M=gt(A);i.details=M.slice(0,st);let L=/^(?:message|error):\s*(?:['"]?)(.*?)['"]?\s*$/m.exec(M);L?.[1]&&!/^[|>][-+]?$/.test(L[1])&&(i.message||=L[1]);let z=/^duration_ms:\s*([\d.]+)\s*$/m.exec(M);z&&(i.duration=Number(z[1]));continue}let d=/^(not )?ok\b(?:\s+(\d+))?(?:\s*-)?\s*(.*?)(?:\s+#\s*(skip|todo)\b\s*(.*))?$/i.exec(u);if(!d)continue;let g=d[3].replace(/\\#/g,"#").trim(),m=a.get(l);if(m&&m.name===g){if(a.delete(l),m.cases.length){i=null;continue}s.splice(s.indexOf(m),1)}if(n>=N)continue;let v=d[4]?.toLowerCase();i=C({name:g||`#${d[2]??n+1}`,status:v==="skip"||v==="todo"?"skipped":d[1]?"failed":"passed",message:v?`${v.toUpperCase()}${d[5]?`: ${d[5].trim()}`:""}`:""}),((l>0?a.get(l-4):null)??e).cases.push(i),n+=1}return e.cases.length&&s.unshift(e),{format:"tap",name:"",suites:s,totals:{total:0,passed:0,failed:0,error:0,skipped:0},duration:null}}function gt(r){let t=Math.min(...r.filter(s=>s.trim()).map(s=>/^ */.exec(s)?.[0].length??0));return r.map(s=>s.slice(Number.isFinite(t)?t:0)).join(`
`).trimEnd()}function bt(r){if(y(r)&&Array.isArray(r.testResults))return yt(r);if(y(r)&&y(r.stats)&&Array.isArray(r.tests))return vt(r);if(y(r)&&Array.isArray(r.suites))return xt(r);let t=Array.isArray(r)?r:y(r)&&Array.isArray(r.tests)?r.tests:null;if(!t)throw new x("format");return at(t,y(r)?h(r.name,200):"")}function rt(r){let t=String(r??"").toLowerCase();return/^(?:fail|failed|failure|broken|timedout|timed_out|interrupted)$/.test(t)?"failed":/^(?:error|errored)$/.test(t)?"error":/^(?:skip|skipped|pending|todo|disabled|ignored|excluded)$/.test(t)?"skipped":"passed"}function yt(r){let t=[],s=0;for(let e of r.testResults){if(!y(e))continue;let a=h(e.name??e.testFilePath,1e3),i=Number(e.startTime),n=Number(e.endTime),o=k({name:J(a),file:a,duration:Number.isFinite(i)&&Number.isFinite(n)&&n>=i?n-i:null}),p=Array.isArray(e.assertionResults)?e.assertionResults:[];for(let l of p){if(!y(l)||s>=N)continue;let u=Array.isArray(l.failureMessages)?l.failureMessages.map(m=>h(m)).join(`

`):"",{message:f,details:d}=T("",u),g=Array.isArray(l.ancestorTitles)?l.ancestorTitles.map(m=>h(m,500)):[];o.cases.push(C({name:h(l.title,1e3),classname:g.join(" \u203A "),status:rt(l.status),duration:_(l.duration,1),message:f,details:d,file:a,line:y(l.location)&&Number.isFinite(Number(l.location.line))?Number(l.location.line):null})),s+=1}if(!p.length&&typeof e.message=="string"&&e.message){let{message:l,details:u}=T("",h(e.message));o.cases.push(C({name:J(a),status:"error",message:l,details:u,file:a}))}t.push(o)}return{format:"jest",name:"",suites:t,totals:{total:0,passed:0,failed:0,error:0,skipped:0},duration:null}}function vt(r){let t=new Map;for(let e of r.tests.slice(0,N)){if(!y(e))continue;let a=h(e.file,1e3),i=h(e.fullTitle,2e3),n=h(e.title,1e3),o=y(e.err)?e.err:{},p=typeof o.message=="string"||typeof o.stack=="string",l=e.pending===!0||(r.pending??[]).some(g=>y(g)&&g.fullTitle===e.fullTitle),{message:u,details:f}=T(h(o.message),h(o.stack)),d=t.get(a);d||(d=k({name:J(a),file:a}),t.set(a,d)),d.cases.push(C({name:n,classname:i.endsWith(n)?i.slice(0,-n.length).trim():"",status:p?"failed":l?"skipped":"passed",duration:_(e.duration,1),message:p?u:"",details:p?f:"",file:a}))}let s=r.stats;return{format:"mocha",name:"",suites:[...t.values()],totals:{total:0,passed:0,failed:0,error:0,skipped:0},duration:_(s.duration,1)}}function xt(r){let t=[];for(let s of r.suites){if(!y(s))continue;let e=Array.isArray(s.tests)?s.tests:Array.isArray(s.cases)?s.cases:[],a=at(e,"").suites[0]??k({});a.name=h(s.name??s.title,1e3),a.file=h(s.file,1e3),a.duration=_(s.duration,1),t.push(a)}return{format:"json",name:h(r.name,200),suites:t,totals:{total:0,passed:0,failed:0,error:0,skipped:0},duration:_(r.duration,1)}}function at(r,t){let s=new Map;for(let e of r.slice(0,N)){if(!y(e))continue;let a=h(e.suite??e.classname??e.file??"",1e3),i=s.get(a);i||(i=k({name:a,file:h(e.file,1e3)}),s.set(a,i));let n=y(e.error)?e.error:null,{message:o,details:p}=T(h(e.message??n?.message??""),h(e.details??e.stack??n?.stack??""));i.cases.push(C({name:h(e.name??e.title,1e3),classname:h(e.classname,1e3),status:rt(e.status??(e.passed===!1?"failed":e.skipped?"skipped":"passed")),duration:_(e.duration??e.time,typeof e.time=="number"&&e.duration===void 0?1e3:1),message:o,details:p,output:h(e.output??e.stdout),file:h(e.file,1e3),line:Number.isFinite(Number(e.line))&&e.line!=null?Number(e.line):null}))}return{format:"json",name:t,suites:[...s.values()],totals:{total:0,passed:0,failed:0,error:0,skipped:0},duration:null}}function J(r){let t=r.replace(/\\/g,"/").split("/"),s=Math.max(t.lastIndexOf("src"),t.lastIndexOf("test"),t.lastIndexOf("tests"),t.lastIndexOf("__tests__"));return s>0?t.slice(s).join("/"):t.slice(-2).join("/")}function it(r){let t=[];for(let s of r.suites)for(let e of s.cases)e.status!=="failed"&&e.status!=="error"||(t.push(`\u2717 ${[s.name,e.classname,e.name].filter(Boolean).join(" \u203A ")}`),e.message&&t.push(`  ${e.message}`));return t.join(`
`)}var nt=Object.freeze({testsCount:"{count} tests",testsOne:"1 test",testsPassed:"Passed",testsFailed:"Failed",testsErrors:"Errors",testsSkipped:"Skipped",testsAll:"All",testsStatus:"Status",testsSummaryPassed:"All {count} tests passed",testsSummaryFailed:"{failed} of {count} tests failed",testsSummaryNone:"No tests were run",testsBar:"{passed} passed, {failed} failed, {skipped} skipped",testsStatusPassed:"passed",testsStatusFailed:"failed",testsStatusError:"error",testsStatusSkipped:"skipped",testsFlaky:"Flaky",testsFlakyNote:"Failed, then passed when run again",testsUnnamedSuite:"Tests",testsDetails:"Show details",testsHideDetails:"Hide details",testsOutput:"Output",testsStderr:"Errors written",testsSlowest:"Slowest first",testsInOrder:"In order",testsCopyFailures:"Copy failures",testsNoMatch:"No tests match.",testsShowMore:"Show {count} more tests",testsInvalidEmpty:"The report is empty.",testsInvalidFormat:"This is not a test report: expected JUnit XML, TAP, or JSON from Jest, Vitest or Mocha.",testsInvalidJunit:"This XML is not a JUnit report: its root must be <testsuites> or <testsuite>.",testsInvalid:"The report could not be read: {message}"}),ot={testsCount:"{count} tests",testsOne:"1 test",testsPassed:"R\xE9ussis",testsFailed:"\xC9chou\xE9s",testsErrors:"Erreurs",testsSkipped:"Ignor\xE9s",testsAll:"Tous",testsStatus:"\xC9tat",testsSummaryPassed:"Les {count} tests ont r\xE9ussi",testsSummaryFailed:"{failed} tests sur {count} ont \xE9chou\xE9",testsSummaryNone:"Aucun test n\u2019a \xE9t\xE9 lanc\xE9",testsBar:"{passed} r\xE9ussis, {failed} \xE9chou\xE9s, {skipped} ignor\xE9s",testsStatusPassed:"r\xE9ussi",testsStatusFailed:"\xE9chou\xE9",testsStatusError:"erreur",testsStatusSkipped:"ignor\xE9",testsFlaky:"Instable",testsFlakyNote:"A \xE9chou\xE9, puis r\xE9ussi en le relan\xE7ant",testsUnnamedSuite:"Tests",testsDetails:"Afficher les d\xE9tails",testsHideDetails:"Masquer les d\xE9tails",testsOutput:"Sortie",testsStderr:"Erreurs \xE9crites",testsSlowest:"Les plus lents d\u2019abord",testsInOrder:"Dans l\u2019ordre",testsCopyFailures:"Copier les \xE9checs",testsNoMatch:"Aucun test ne correspond.",testsShowMore:"Afficher {count} tests de plus",testsInvalidEmpty:"Le rapport est vide.",testsInvalidFormat:"Ce n\u2019est pas un rapport de tests : JUnit XML, TAP, ou JSON de Jest, Vitest ou Mocha attendu.",testsInvalidJunit:"Ce XML n\u2019est pas un rapport JUnit : sa racine doit \xEAtre <testsuites> ou <testsuite>.",testsInvalid:"Le rapport n\u2019a pas pu \xEAtre lu : {message}"};U({en:nt,fr:ot});var lt=["all","failed","passed","skipped"],_t=["failed","all","none"],kt=["order","duration","name"],P=200,wt={junit:"JUnit",tap:"TAP",jest:"Jest",mocha:"Mocha",json:"JSON"},ut={passed:"status-success",failed:"status-failure",error:"alert",skipped:"status-skipped"},ct=class extends X{static type="test-report";static componentAttributes=Object.freeze(["status","open","sort","status-filter","output"]);static presets={simple:{output:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,output:!0,"status-filter":!0}};static styles=[W,tt];constructor(){super(),this.parsed=null,this.statusChoice=null,this.sortChoice=null,this.suiteState=new Map,this.openCases=new Set,this.shown=new Map,this.query="",this.matchCount=0,this.panelId=H("panel"),this.listHost=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.suiteState.clear(),this.openCases.clear(),this.shown.clear()}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,report:et(t),error:null}}catch(s){this.parsed={text:t,report:null,error:s instanceof Error?s:new Error(String(s))}}return this.parsed}get report(){let t=this.parse().report;return t?structuredClone(t):null}get status(){return this.statusChoice??E(this.getAttribute("status"),lt,"all")}get sortOrder(){return this.sortChoice??E(this.getAttribute("sort"),kt,"order")}visible(t){let s=this.status;if(s==="failed"&&t.status!=="failed"&&t.status!=="error"||(s==="passed"||s==="skipped")&&t.status!==s)return!1;if(!this.query)return!0;let e=this.query.toLowerCase();return[t.name,t.classname,t.message].some(a=>a.toLowerCase().includes(e))}isOpen(t,s){let e=this.suiteState.get(s);if(e!==void 0)return e;if(this.query||this.status!=="all")return!0;let a=E(this.getAttribute("open"),_t,"failed");return a==="all"?!0:a==="none"?!1:t.cases.some(i=>i.status==="failed"||i.status==="error")}renderContent(t){let s=this.t,{report:e,error:a}=this.parse(),i=c("div",{class:"panel",attrs:{id:this.panelId}}),n=c("div",{class:"body tr-body",part:"body"});this.listHost=null,a||!e?n.append(V(this.errorText(a))):(n.append(this.summaryView(e)),this.feature("status-filter")&&e.totals.total&&n.append(this.statusBar(e)),this.listHost=c("div",{class:"tr-suites"}),n.append(this.listHost),this.renderList());let o=[];if(this.editing){let g=this.createEditor();i.classList.add("tr-edit"),i.append(c("div",{class:"body editor-body",part:"body source"},g.element),n),o=this.historyButtons(g)}else i.append(n);let p={run:g=>(this.query=g.slice(0,q).trim(),this.renderList(),this.filterChanged(),{total:this.matchCount,capped:!1}),go:g=>{let m=this.listHost?.querySelectorAll(".tr-case")??[];for(let v of m)v.classList.remove("current");m[g]?.classList.add("current"),m[g]?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.renderList()}},l=e?e.totals.failed+e.totals.error:0,u=(this.text??"").trimStart(),f=u.startsWith("<")?"xml":/^[[{]/.test(u)?"json":"tap",d=[this.searchButton(p),...o,e?.totals.total&&!this.editing?R({icon:"sort-down",label:this.sortOrder==="duration"?s("testsInOrder"):s("testsSlowest"),key:"sort",part:"sort-button",pressed:this.sortOrder==="duration",onClick:()=>{this.sortChoice=this.sortOrder==="duration"?"order":"duration",this.render()}}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(`report.${f}`),f==="xml"?"application/xml":f==="json"?"application/json":"text/plain"):null,this.feature("copy")&&e&&l?this.copyButton(()=>it(e),s("testsCopyFailures")):null];t.append(...this.chrome({badge:e?wt[e.format]:"",actions:d}),i),this.editor?.align()}errorText(t){let s=this.t;if(t instanceof x){if(t.message==="empty")return s("testsInvalidEmpty");if(t.message==="format")return s("testsInvalidFormat");if(t.message==="junit")return s("testsInvalidJunit")}return s("testsInvalid",{message:t?.message??""})}summaryView(t){let s=this.t,{total:e,passed:a,failed:i,error:n,skipped:o}=t.totals,p=i+n,l=m=>w(m,this.locale),u=e?p?"bad":"ok":"muted",f=e?p?s("testsSummaryFailed",{failed:l(p),count:l(e)}):s("testsSummaryPassed",{count:l(e)}):s("testsSummaryNone"),d=[];o&&d.push(`${l(o)} ${s("testsStatusSkipped")}`),n&&d.push(`${l(n)} ${s("testsStatusError")}`),t.duration!==null&&d.push(this.formatDuration(t.duration));let g=c("div",{class:"tr-bar",part:"bar",attrs:{role:"img","aria-label":s("testsBar",{passed:l(a),failed:l(p),skipped:l(o)})}});for(let[m,v]of[["passed",a],["failed",p],["skipped",o]]){if(!v)continue;let I=c("span",{class:`tr-bar-${m}`});I.style.flexGrow=String(v),g.append(I)}return c("div",{class:`tr-summary ${u}`,part:"summary",attrs:{role:"status"}},c("div",{class:"tr-headline"},S(u==="ok"?"status-success":u==="bad"?"status-failure":"status-circle"),c("strong",{text:f}),d.length?c("span",{class:"tr-facts",text:d.join(" \xB7 ")}):null),e?g:null)}statusBar(t){let{total:s,passed:e,failed:a,error:i,skipped:n}=t.totals,o={all:s,failed:a+i,passed:e,skipped:n},p={all:"testsAll",failed:"testsFailed",passed:"testsPassed",skipped:"testsSkipped"},l=c("div",{class:"tr-filters",attrs:{role:"group","aria-label":this.t("testsStatus")}});for(let u of lt)u!=="all"&&!o[u]||l.append(c("button",{class:`tr-chip chip-${u}`,part:"status-filter",attrs:{type:"button","aria-pressed":String(this.status===u),"data-focus-key":`status-${u}`},on:{click:()=>{this.statusChoice=u,this.suiteState.clear(),this.render(),this.filterChanged()}}},u==="all"?null:S(ut[u]),this.t(p[u]),c("span",{class:"chip-count",text:w(o[u],this.locale)})));return l}filterChanged(){O(this,F.FILTER_CHANGE,{status:this.status,query:this.query,shown:this.matchCount})}renderList(){let t=this.listHost,s=this.parse().report;if(!t||!s)return;let e=[];this.matchCount=0,s.suites.forEach((a,i)=>{let n=a.cases.filter(o=>this.visible(o));this.matchCount+=n.length,!(!n.length&&(this.query||this.status!=="all"))&&e.push(this.suiteView(a,i,n))}),t.replaceChildren(...e.length?e:[c("p",{class:"empty",part:"empty",text:this.t("testsNoMatch")})])}suiteView(t,s,e){let a=this.t,i=this.isOpen(t,s),n=`${this.panelId}-suite-${s}`,o=t.cases.filter(m=>m.status==="failed"||m.status==="error").length,p=t.name||a("testsUnnamedSuite"),l=c("button",{class:"tr-suite-header",part:"suite-header",attrs:{type:"button","aria-expanded":String(i),"aria-controls":n,"data-focus-key":`suite-${s}`},on:{click:()=>{this.suiteState.set(s,!i),this.renderList(),O(this,F.TOGGLE,{suite:t.name,expanded:!i})}}},S("chevron-right"),S(o?"status-failure":t.cases.every(m=>m.status==="skipped")?"status-skipped":"status-success"),c("span",{class:"tr-suite-name",text:p,attrs:{title:t.file||null}}),c("span",{class:"tr-suite-counts"},o?c("span",{class:"tr-failed-count",text:`${w(o,this.locale)} ${a("testsStatusFailed")}`}):null,c("span",{text:t.cases.length===1?a("testsOne"):a("testsCount",{count:w(t.cases.length,this.locale)})}),t.duration!==null?c("span",{text:this.formatDuration(t.duration)}):null)),u=c("section",{class:`tr-suite${o?" has-failures":""}`,part:"suite",attrs:{"aria-label":p}},c("h3",{class:"tr-suite-title"},l));if(!i)return u;let f=this.sortCases(e),d=this.shown.get(s)??P,g=c("ul",{class:"tr-cases",attrs:{id:n}});for(let m of f.slice(0,d))g.append(this.caseView(m,s,t.cases.indexOf(m)));return u.append(g),f.length>d&&u.append(c("button",{class:"text-btn tr-more",text:a("testsShowMore",{count:w(Math.min(P,f.length-d),this.locale)}),attrs:{type:"button","data-focus-key":`more-${s}`},on:{click:()=>{this.shown.set(s,d+P),this.renderList()}}})),u}sortCases(t){let s=this.sortOrder;if(s==="order")return t;let e=[...t];return s==="duration"?e.sort((a,i)=>(i.duration??-1)-(a.duration??-1)):e.sort((a,i)=>a.name.localeCompare(i.name,this.locale,{numeric:!0}))}caseView(t,s,e){let a=this.t,i=`${s}:${e}`,n=!!(t.details||this.feature("output")&&(t.output||t.errors)),o=this.openCases.has(i),p=a(`testsStatus${t.status[0].toUpperCase()}${t.status.slice(1)}`),l=c("li",{class:`tr-case status-${t.status}`,part:`case case-${t.status}`}),u=c("div",{class:"tr-row"},c("span",{class:"tr-icon"},S(ut[t.status]),c("span",{class:"sr-only",text:`${p}: `})),c("span",{class:"tr-name"},t.classname?c("span",{class:"tr-class",text:`${t.classname} \u203A `}):null,t.name),t.flaky?c("span",{class:"tr-flaky",text:a("testsFlaky"),attrs:{title:a("testsFlakyNote")}}):null,t.duration!==null?c("span",{class:"tr-time",text:this.formatDuration(t.duration)}):null);if(l.append(u),t.message&&l.append(c("p",{class:"tr-message",part:"message",text:t.message})),!n)return l;let f=`${this.panelId}-case-${s}-${e}`;if(l.append(c("button",{class:"text-btn tr-toggle",text:a(o?"testsHideDetails":"testsDetails"),attrs:{type:"button","aria-expanded":String(o),"aria-controls":f,"data-focus-key":`case-${i}`},on:{click:()=>{o?this.openCases.delete(i):this.openCases.add(i),this.renderList()}}})),!o)return l;let d=c("div",{class:"tr-details",part:"details",attrs:{id:f}});return t.details&&d.append(this.ansiBlock(t.details)),this.feature("output")&&(t.output&&d.append(c("span",{class:"tr-label",text:a("testsOutput")}),this.ansiBlock(t.output)),t.errors&&d.append(c("span",{class:"tr-label",text:a("testsStderr")}),this.ansiBlock(t.errors))),l.append(d),l}ansiBlock(t){let s=c("pre",{class:"tr-pre"});return Q(t).forEach((e,a)=>{a&&s.append(`
`);for(let i of e)s.append(Y(i))}),s}formatDuration(t){let s=(e,a)=>new Intl.NumberFormat(this.locale,{maximumFractionDigits:a}).format(e);return t>=6e4?`${Math.floor(t/6e4)} min ${s(t%6e4/1e3,0)} s`:t>=1e3?`${s(t/1e3,2)} s`:`${s(t,t<10?1:0)} ms`}createEditor(){this.editor?.destroy();let t=(this.text??"").trimStart();return this.editor=new G({text:this.text??"",language:t.startsWith("<")?"xml":/^[[{]/.test(t)?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:D().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:s=>this.edited(s),onChange:s=>O(this,F.CHANGE,{value:s}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.previewTimer=setTimeout(()=>this.render(),200)}};export{ct as a};
//# sourceMappingURL=chunk-ZE6W54RC.js.map
