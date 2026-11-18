/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as v,b as j,d as g,e as q,h as T,i as B,j as U,k as P}from"./chunk-C4TT3NA3.js";import{l as Z}from"./chunk-E4EMJARX.js";import{a as A}from"./chunk-YCSGENO5.js";import{k as V,r as I}from"./chunk-3VQOL2NW.js";import{M as R,N as H,U as y,X as W,b as M,d as L,l as o,n as F}from"./chunk-DNNVKOIB.js";import{h as O,k as w,l as _,m as $,q as k}from"./chunk-2IDMCIF6.js";var G=Object.freeze({cron:"Cron schedule",cronAt:"at {time}",cronEverySecond:"every second",cronEveryMinute:"every minute",cronEveryHour:"every hour",cronEveryNSeconds:"every {n} seconds",cronEveryNMinutes:"every {n} minutes",cronEveryNHours:"every {n} hours",cronEveryNDays:"every {n} days",cronEveryNMonths:"every {n} months",cronEveryStep:"every {step}",cronSecondOne:"at second {list}",cronSecondMany:"at seconds {list}",cronMinuteOne:"at minute {list}",cronMinuteMany:"at minutes {list}",cronHourOne:"past hour {list}",cronHourMany:"past hours {list}",cronBetween:"between {from} and {to}",cronRange:"{from} through {to}",cronStepRange:"every {step} from {from} through {to}",cronDaysOne:"on day {list} of the month",cronDaysMany:"on days {list} of the month",cronLastDay:"on the last day of the month",cronLastDayOffset:"{n} days before the last day of the month",cronLastWeekday:"on the last weekday of the month",cronNearestWeekday:"on the weekday nearest day {day}",cronLastDow:"on the last {day} of the month",cronNth:"on the {ordinal} {day} of the month",cronOrdinal1:"first",cronOrdinal2:"second",cronOrdinal3:"third",cronOrdinal4:"fourth",cronOrdinal5:"fifth",cronWeekdays:"on {list}",cronWeekdayRange:"{from} through {to}",cronInMonths:"in {list}",cronOr:"{a} or {b}",cronReboot:"At startup",cronAny:"any",cronField_second:"Second",cronField_minute:"Minute",cronField_hour:"Hour",cronField_day:"Day of month",cronField_month:"Month",cronField_weekday:"Day of week",cronNextRuns:"Next runs",cronTimeZone:"Time zone: {zone}",cronNever:"No run in the next 8 years.",cronNoRuns:"Runs only at startup.",cronWeek:"Hours of the week",cronWeekNote:"Days of the month and months are not shown.",cronCell:"{day} {hour}: {count} runs",cronSchedule:"Schedule",cronDescription:"Description",cronNextRun:"Next run",cronUser:"User",cronCommand:"Command",cronNoMatch:"No entry matches the search.",cronEmptyTab:"No entry in this crontab.",cronInvalidLines:"{count} lines could not be read (first: line {line}).",cronVariables:"Variables",cronBadZone:'Unknown time zone "{zone}"; the local time zone is used.',cronErrorAt:"Field {n} ({field}), column {column}: {message}",cronErrorAtAll:"{message}",cronError_fields:"{count} fields found; 5 or 6 are expected.",cronError_syntax:'"{token}" cannot be read.',cronError_range:"{value} is outside {min}\u2013{max}.",cronError_step:'The step of "{token}" must be a positive number.',cronError_reversed:'"{token}" goes backwards ({from} is after {to}).',cronError_special:'"{token}" is not allowed in this field.',cronError_macro:"Unknown macro {name}.",cronError_empty:"The expression is empty.",cronValid:"Valid expression"}),X={cron:"Planification cron",cronAt:"\xE0 {time}",cronEverySecond:"chaque seconde",cronEveryMinute:"chaque minute",cronEveryHour:"chaque heure",cronEveryNSeconds:"toutes les {n} secondes",cronEveryNMinutes:"toutes les {n} minutes",cronEveryNHours:"toutes les {n} heures",cronEveryNDays:"tous les {n} jours",cronEveryNMonths:"tous les {n} mois",cronEveryStep:"tous les {step}",cronSecondOne:"\xE0 la seconde {list}",cronSecondMany:"aux secondes {list}",cronMinuteOne:"\xE0 la minute {list}",cronMinuteMany:"aux minutes {list}",cronHourOne:"pendant l\u2019heure {list}",cronHourMany:"pendant les heures {list}",cronBetween:"entre {from} et {to}",cronRange:"{from} \xE0 {to}",cronStepRange:"tous les {step} de {from} \xE0 {to}",cronDaysOne:"le {list} du mois",cronDaysMany:"les jours {list} du mois",cronLastDay:"le dernier jour du mois",cronLastDayOffset:"{n} jours avant le dernier jour du mois",cronLastWeekday:"le dernier jour ouvr\xE9 du mois",cronNearestWeekday:"le jour ouvr\xE9 le plus proche du {day}",cronLastDow:"le dernier {day} du mois",cronNth:"le {ordinal} {day} du mois",cronOrdinal1:"premier",cronOrdinal2:"deuxi\xE8me",cronOrdinal3:"troisi\xE8me",cronOrdinal4:"quatri\xE8me",cronOrdinal5:"cinqui\xE8me",cronWeekdays:"le {list}",cronWeekdayRange:"du {from} au {to}",cronInMonths:"en {list}",cronOr:"{a} ou {b}",cronReboot:"Au d\xE9marrage",cronAny:"toutes",cronField_second:"Seconde",cronField_minute:"Minute",cronField_hour:"Heure",cronField_day:"Jour du mois",cronField_month:"Mois",cronField_weekday:"Jour de la semaine",cronNextRuns:"Prochaines ex\xE9cutions",cronTimeZone:"Fuseau horaire : {zone}",cronNever:"Aucune ex\xE9cution dans les 8 prochaines ann\xE9es.",cronNoRuns:"S\u2019ex\xE9cute seulement au d\xE9marrage.",cronWeek:"Heures de la semaine",cronWeekNote:"Les jours du mois et les mois ne sont pas repr\xE9sent\xE9s.",cronCell:"{day} {hour} : {count} ex\xE9cutions",cronSchedule:"Planification",cronDescription:"Description",cronNextRun:"Prochaine ex\xE9cution",cronUser:"Utilisateur",cronCommand:"Commande",cronNoMatch:"Aucune entr\xE9e ne correspond \xE0 la recherche.",cronEmptyTab:"Aucune entr\xE9e dans cette crontab.",cronInvalidLines:"{count} lignes n\u2019ont pas pu \xEAtre lues (premi\xE8re : ligne {line}).",cronVariables:"Variables",cronBadZone:"Fuseau horaire \xAB {zone} \xBB inconnu ; le fuseau local est utilis\xE9.",cronErrorAt:"Champ {n} ({field}), colonne {column} : {message}",cronErrorAtAll:"{message}",cronError_fields:"{count} champs trouv\xE9s ; 5 ou 6 sont attendus.",cronError_syntax:"\xAB {token} \xBB ne peut pas \xEAtre lu.",cronError_range:"{value} est hors de {min}\u2013{max}.",cronError_step:"Le pas de \xAB {token} \xBB doit \xEAtre un nombre positif.",cronError_reversed:"\xAB {token} \xBB va \xE0 l\u2019envers ({from} est apr\xE8s {to}).",cronError_special:"\xAB {token} \xBB n\u2019est pas permis dans ce champ.",cronError_macro:"Macro {name} inconnue.",cronError_empty:"L\u2019expression est vide.",cronValid:"Expression valide"};var J=`/*
 * Cron schedules: labelled fields, a description, the next runs and the hours of the week,
 * or a crontab as a table with the selected entry under it.
 */
.cron-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.cron-detail {
  display: grid;
  gap: var(--_space-4);
  padding-top: var(--_space-4);
  border-top: 1px solid var(--_border);
}

.cron-detail:empty {
  display: none;
}

/* ---------- Fields ---------- */

.cron-fields {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--_space-2);
}

.cron-fields .field {
  --_tone: var(--_accent);
  display: inline-grid;
  justify-items: center;
  gap: 2px;
  min-width: 4.5rem;
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid color-mix(in srgb, var(--_tone) 40%, var(--_border));
  border-radius: var(--_radius);
  background: color-mix(in srgb, var(--_tone) 8%, var(--_surface));
  cursor: help;
}

.cron-fields .field code {
  color: var(--_tone);
  font-family: var(--_font-mono);
  font-size: calc(var(--_font-size) * 1.15);
  font-weight: 600;
}

.cron-fields .field.any code {
  color: var(--_fg-muted);
}

.cron-fields .field-name {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.cron-fields .f-second {
  --_tone: var(--vt-chart-6, var(--_syntax-string));
}

.cron-fields .f-minute {
  --_tone: var(--vt-chart-1, var(--_accent));
}

.cron-fields .f-hour {
  --_tone: var(--vt-chart-2, var(--_syntax-function));
}

.cron-fields .f-day {
  --_tone: var(--vt-chart-3, var(--_warning));
}

.cron-fields .f-month {
  --_tone: var(--vt-chart-4, var(--_syntax-keyword));
}

.cron-fields .f-weekday {
  --_tone: var(--vt-chart-5, var(--_syntax-number));
}

.cron-fields .field.invalid {
  --_tone: var(--_danger);
  border-style: dashed;
  border-width: 2px;
}

.cron-fields .field:not(.f-second, .f-minute, .f-hour, .f-day, .f-month, .f-weekday) {
  --_tone: var(--_fg);
}

.cron-fields .field.invalid {
  --_tone: var(--_danger);
}

.cron-macro {
  align-self: center;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
}

.cron-description {
  margin: 0;
  color: var(--_fg);
  font-size: calc(var(--_font-size-ui) * 1.1);
  font-weight: 600;
}

/* ---------- Next runs ---------- */

.cron-runs-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-3);
}

.cron-runs h3,
.cron-week-figure figcaption {
  margin: 0;
  color: var(--_fg);
  font-size: var(--_font-size-ui);
  font-weight: 600;
}

.cron-zone,
.cron-note,
.cron-none {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.cron-note,
.cron-none {
  margin: var(--_space-1) 0 0;
}

.cron-run-list {
  display: grid;
  gap: 2px;
  margin: var(--_space-2) 0 0;
  padding: 0;
  list-style: none;
  counter-reset: run;
}

.cron-run-list li {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-3);
  padding: 4px var(--_space-2);
  border-radius: var(--_radius-sm);
  counter-increment: run;
}

.cron-run-list li::before {
  min-width: 1.5em;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  content: counter(run);
}

.cron-run-list li:nth-child(odd) {
  background: var(--_surface-sunken);
}

.cron-run-list time {
  font-family: var(--_font-mono);
  font-variant-numeric: tabular-nums;
}

.cron-relative {
  color: var(--_fg-muted);
}

/* ---------- Week grid ---------- */

.cron-week-figure {
  margin: 0;
}

.cron-week-scroll {
  margin-top: var(--_space-2);
  overflow-x: auto;
}

.cron-week {
  border-collapse: separate;
  border-spacing: 2px;
  font-size: var(--_font-size-small);
}

.cron-week th {
  padding: 0 var(--_space-1);
  color: var(--_fg-muted);
  font-weight: 400;
  text-align: start;
  white-space: nowrap;
}

.cron-week th.hour {
  font-family: var(--_font-mono);
  text-align: start;
}

.cron-week .cell {
  width: 14px;
  min-width: 14px;
  height: 14px;
  padding: 0;
  border-radius: 3px;
  background: var(--_surface-sunken);
}

.cron-week .cell.l1 {
  background: color-mix(in srgb, var(--_accent) 30%, var(--_surface));
}

.cron-week .cell.l2 {
  background: color-mix(in srgb, var(--_accent) 50%, var(--_surface));
}

.cron-week .cell.l3 {
  background: color-mix(in srgb, var(--_accent) 75%, var(--_surface));
}

.cron-week .cell.l4 {
  background: var(--_accent);
}

/* ---------- Crontab ---------- */

.cron-vars {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2) var(--_space-4);
  margin: 0;
  font-size: var(--_font-size-small);
}

.cron-vars div {
  display: flex;
  gap: 4px;
}

.cron-vars dt::after {
  color: var(--_fg-muted);
  content: '=';
}

.cron-vars dd {
  margin: 0;
}

.cron-vars code {
  font-family: var(--_font-mono);
}

.cron-table-wrap {
  overflow-x: auto;
}

.cron-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.cron-table th,
.cron-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.cron-table thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--_surface-sunken);
  font-weight: 600;
  white-space: nowrap;
}

.cron-table tr.entry:hover > * {
  background: color-mix(in srgb, var(--_accent-soft) 50%, transparent);
}

.cron-table tr.entry.selected > *,
.cron-table tr.entry.current > * {
  background: var(--_accent-soft);
}

.cron-table .next {
  color: var(--_fg-muted);
  white-space: nowrap;
}

.cron-table .command code,
.cron-table .user code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  white-space: pre-wrap;
  word-break: break-word;
}

.schedule-button {
  padding: 2px var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
}

.schedule-button code {
  font-family: var(--_font-mono);
}

.schedule-button[aria-pressed='true'] {
  border-color: var(--_accent);
  color: var(--_accent);
}

.cron-body mark.match {
  border-radius: 2px;
  background: var(--_highlight);
  color: inherit;
}

/* ---------- Editing ---------- */

.cron-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}

.cron-status {
  padding: 6px var(--_space-4);
  border-bottom: 1px solid var(--_border);
  background: var(--_surface-sunken);
  color: var(--_success);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}

.cron-status.invalid {
  color: var(--_danger);
}
`;function re(s,e){return new Intl.DateTimeFormat(s,{month:"long",timeZone:"UTC"}).format(Date.UTC(2001,e-1,1))}function h(s,e,t="long"){return new Intl.DateTimeFormat(s,{weekday:t,timeZone:"UTC"}).format(Date.UTC(2001,0,7+e%7))}function m(s,e,t="conjunction"){if(e.length<2)return e[0]??"";try{return new Intl.ListFormat(s,{style:"long",type:t}).format(e)}catch{return e.join(", ")}}var E=s=>String(s).padStart(2,"0");function C(s,e,t){return`${E(s)}:${E(e)}${t===null?"":`:${E(t)}`}`}var b=s=>s.items.every(e=>e.kind==="value");function z(s){let[e]=s.items;return s.items.length===1&&e.kind==="any"&&e.step>1?e.step:null}function ne(s,e,t){return s.name==="month"?re(t,e):s.name==="weekday"?h(t,e):String(e)}function p(s,e,t){let n=r=>ne(s,r,t);return s.items.map(r=>{switch(r.kind){case"value":return n(r.value);case"range":return r.step>1?e("cronStepRange",{step:r.step,from:n(r.from),to:n(r.to)}):e("cronRange",{from:n(r.from),to:n(r.to)});case"any":return e("cronEveryStep",{step:r.step});case"last":return r.offset?e("cronLastDayOffset",{n:r.offset}):e("cronLastDay");case"lastWeekday":return e("cronLastWeekday");case"weekday":return e("cronNearestWeekday",{day:r.day});case"lastDow":return e("cronLastDow",{day:h(t,r.dow)});case"nth":return e("cronNth",{ordinal:e(`cronOrdinal${r.n}`),day:h(t,r.dow)});default:return""}})}function N(s,e,t){let n=s.name==="second"?"Second":s.name==="minute"?"Minute":"Hour";if(s.any)return s.name==="hour"?"":e(`cronEvery${n}`);let r=z(s);if(r)return e(`cronEveryN${n}s`,{n:r});let[a]=s.items;if(s.name==="hour"&&s.items.length===1&&a.kind==="range"&&a.step===1)return e("cronBetween",{from:C(a.from,0,null),to:C(a.to,59,null)});let i=s.items.length>1||a.kind!=="value";return e(`cron${n}${i?"Many":"One"}`,{list:m(t,p(s,e,t))})}function oe(s,e,t){let[n,r,a]=s.fields,i=b(n)&&n.values.length===1;if(i&&b(r)&&r.values.length===1&&b(a)&&a.values.length<=6){let l=s.seconds&&n.values[0]!==0?n.values[0]:null,d=a.values.map(u=>C(u,r.values[0],l));return[e("cronAt",{time:m(t,d)})]}let c=[];return s.seconds&&!(i&&n.values[0]===0)&&c.push(N(n,e,t)),c.push(N(r,e,t)),a.any&&b(r)&&r.values.length===1?c.push(e("cronEveryHour")):c.push(N(a,e,t)),c.filter(Boolean)}function se(s,e,t){let[,,,n,r,a]=s.fields,i=[],c=n.any?"":ae(n,e,t),l=a.any?"":ie(a,e,t);if(c&&l?i.push(e("cronOr",{a:c,b:l})):(c||l)&&i.push(c||l),!r.any){let d=z(r);i.push(d?e("cronEveryNMonths",{n:d}):e("cronInMonths",{list:m(t,p(r,e,t))}))}return i}function ae(s,e,t){let n=z(s);if(n)return e("cronEveryNDays",{n});let r=s.items.filter(c=>c.kind==="value"||c.kind==="range"),a=s.items.filter(c=>c.kind!=="value"&&c.kind!=="range"),i=[];if(r.length){let c=r.length>1||r[0].kind!=="value",l=m(t,p({...s,items:r},e,t));i.push(e(c?"cronDaysMany":"cronDaysOne",{list:l}))}return i.push(...p({...s,items:a},e,t)),m(t,i)}function ie(s,e,t){let[n]=s.items;if(s.items.length===1&&n.kind==="range"&&n.step===1)return e("cronWeekdayRange",{from:h(t,n.from),to:h(t,n.to)});let r=s.items.filter(c=>c.kind!=="lastDow"&&c.kind!=="nth"),a=s.items.filter(c=>c.kind==="lastDow"||c.kind==="nth"),i=[];return r.length&&i.push(e("cronWeekdays",{list:m(t,p({...s,items:r},e,t))})),i.push(...p({...s,items:a},e,t)),m(t,i)}function S(s,e,t){if(s.error)return"";if(s.reboot)return e("cronReboot");let r=[...oe(s,e,t),...se(s,e,t)].join(", ");return r.charAt(0).toLocaleUpperCase(t)+r.slice(1)}function Q(s,e,t){let n=e(`cronField_${s.name}`),r=s.any?e("cronAny"):m(t,p(s,e,t));return`${n}: ${r}`}$({en:G,fr:X});var ce=[1,2,3,4,5,6,0],K=class extends W{static type="cron";static fromData=Z;static dataAttributes=Object.freeze(["timezone","count","label"]);static componentAttributes=Object.freeze(["expression","count","timezone","now","system","grid","fields"]);static presets={simple:{grid:!0,fields:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,grid:!0,fields:!0}};static styles=[M,A,J];static allowEmpty=!0;constructor(){super(),this.panelId=F("panel"),this.query="",this.matchCount=0,this.selectedLine=0,this.tableHost=null,this.detailHost=null,this.editor=null,this.previewTimer=void 0,this.tickTimer=void 0,this.parsed=null}disconnectedCallback(){clearTimeout(this.previewTimer),clearTimeout(this.tickTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null}get source(){return this.text||this.getAttribute("expression")||""}get isTab(){return P(this.source)}model(){let e=`${this.isTab?"tab":"one"}|${this.hasAttribute("system")}|${this.source}`;return this.parsed?.key!==e&&(this.parsed={key:e,value:this.isTab?U(this.source,{system:this.feature("system")}):j(this.source)}),this.parsed.value}get schedule(){return this.isTab?null:this.model()}get entries(){return this.isTab?[...this.model().entries]:[]}get timeZone(){let e=this.getAttribute("timezone");return e&&g(e)?e:q()}get now(){let e=this.getAttribute("now");if(e){let t=/^\d+$/.test(e)?Number(e):Date.parse(e);if(Number.isFinite(t))return t}return Date.now()}get count(){return L(this.getAttribute("count"),{min:0,max:50,fallback:5})}renderContent(e){let t=this.t;clearTimeout(this.tickTimer);let n=o("div",{class:"panel",attrs:{id:this.panelId}}),r=o("div",{class:"body cron-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||t("cron")}});r.append(...this.zoneNotice());let a=null;this.source.trim()?this.isTab?a=this.renderTab(r):r.append(...this.expressionView(this.model())):r.append(o("div",{class:"empty",part:"empty",text:t("empty")}));let i=[];if(this.editing){let d=this.createEditor();n.classList.add("cron-edit"),n.append(o("div",{class:"body editor-body",part:"body source"},d.element),this.status(),r),i=this.historyButtons(d)}else n.append(r);let c=[a?this.searchButton(a):null,...i,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.source,this.downloadName("crontab"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>this.source,t("copy")):null],l=this.isTab?"CRONTAB":"CRON";e.append(...this.chrome({badge:this.source.trim()?l:"",actions:c}),n),this.editor?.align(),this.scheduleTick()}scheduleTick(){if(this.hasAttribute("now")||this.editing||!this.source.trim())return;let e=6e4-Date.now()%6e4+50;this.tickTimer=setTimeout(()=>{!this.editing&&!this.searchQuery&&this.render()},e)}zoneNotice(){let e=this.getAttribute("timezone");return e&&!g(e)?[y(this.t("cronBadZone",{zone:e}))]:[]}status(){let e=this.model(),t="";return"entries"in e?e.invalid.length&&(t=this.invalidText(e)):e.error&&(t=this.errorText(e)),o("div",{class:`cron-status${t?" invalid":""}`,part:"status",attrs:{role:"status"},text:t||this.t("cronValid")})}errorText(e){let t=e.error;if(!t)return"";let n=this.t,r=n(`cronError_${t.code}`,t.params);if(t.field<0)return n("cronErrorAtAll",{message:r});let a=e.seconds?t.field+1:t.field;return n("cronErrorAt",{n:a,field:n(`cronField_${v[t.field].name}`),column:t.column,message:r})}invalidText(e){let[t]=e.invalid,n=this.t("cronInvalidLines",{count:k(e.invalid.length,this.locale),line:t.line});if(!t.error)return n;let r={source:t.text,macro:null,reboot:!1,seconds:!1,fields:[],error:t.error};return`${n} ${this.errorText(r)}`}expressionView(e,t=this.timeZone){let n=this.t;if(e.error)return[this.fieldsView(e),y(this.errorText(e))];let r=[];return this.feature("fields")&&!e.reboot&&r.push(this.fieldsView(e)),r.push(o("p",{class:"cron-description",part:"description",text:S(e,n,this.locale)})),this.count&&r.push(this.runsView(e,t)),this.feature("grid")&&!e.reboot&&r.push(this.weekView(e)),r}fieldsView(e){let t=this.t,n=o("div",{class:"cron-fields",part:"fields"});if(e.macro&&!e.error&&n.append(o("code",{class:"cron-macro",text:`${e.source} =`})),e.error){let a=e.source.split(/\s+/),i=a.length===5||a.length===6,c=e.error.field-(a.length===6?0:1);return a.forEach((l,d)=>{let u=i&&d===c;n.append(o("span",{class:`field${u?" invalid":""}`,part:"field"},o("code",{text:l}),i?o("span",{class:"field-name",text:t(`cronField_${v[d+(a.length===6?0:1)].name}`)}):null))}),n}let r=e.seconds?0:1;for(let a=r;a<v.length;a+=1){let i=e.fields[a];n.append(o("span",{class:`field f-${i.name}${i.any?" any":""}`,part:"field",attrs:{title:Q(i,t,this.locale)}},o("code",{text:i.source}),o("span",{class:"field-name",text:t(`cronField_${i.name}`)})))}return n}runsView(e,t){let n=this.t,r=o("section",{class:"cron-runs",attrs:{"aria-label":n("cronNextRuns")}},o("div",{class:"cron-runs-head"},o("h3",{text:n("cronNextRuns")}),o("span",{class:"cron-zone",text:n("cronTimeZone",{zone:t})})));if(e.reboot)return r.append(o("p",{class:"cron-none",text:n("cronNoRuns")})),r;let a=this.now,i=T(e,{from:a,count:this.count,timeZone:t});if(!i.length)return r.append(o("p",{class:"cron-none",text:n("cronNever")})),r;let c=this.dateFormat(t,!!e.seconds);return r.append(o("ol",{class:"cron-run-list",part:"runs"},...i.map(l=>o("li",{},o("time",{attrs:{datetime:l.toISOString()},text:c.format(l)}),o("span",{class:"cron-relative",text:Y(l.getTime(),a,this.locale)}))))),r}dateFormat(e,t){return new Intl.DateTimeFormat(this.locale,{timeZone:e,weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:t?"2-digit":void 0,hourCycle:"h23"})}weekView(e){let t=this.t,n=B(e),r=Math.max(1,...n.flat()),a=o("table",{class:"cron-week",part:"week"});a.append(o("thead",{attrs:{"aria-hidden":"true"}},o("tr",{},o("th"),...Array.from({length:24},(d,u)=>o("th",{class:"hour",text:u%3===0?String(u):""})))));let i=o("tbody");for(let d of ce){let u=h(this.locale,d,"short"),D=o("tr",{},o("th",{attrs:{scope:"row"},text:u}));for(let f=0;f<24;f+=1){let x=n[d][f],ee=x?Math.max(1,Math.ceil(x/r*4)):0;D.append(o("td",{class:`cell l${ee}`,attrs:{title:t("cronCell",{day:h(this.locale,d),hour:`${String(f).padStart(2,"0")}:00`,count:k(x,this.locale)})}}))}i.append(D)}a.append(i);let[,,,c,l]=e.fields;return o("figure",{class:"cron-week-figure"},o("figcaption",{text:t("cronWeek")}),o("div",{class:"cron-week-scroll"},a),!c.any||!l.any?o("p",{class:"cron-note",text:t("cronWeekNote")}):null)}renderTab(e){let t=this.model();return t.invalid.length&&e.append(y(this.invalidText(t))),t.variables.length&&e.append(o("dl",{class:"cron-vars",attrs:{"aria-label":this.t("cronVariables")}},...t.variables.map(n=>o("div",{},o("dt",{},o("code",{text:n.name})),o("dd",{},o("code",{text:n.value})))))),t.entries.some(n=>n.line===this.selectedLine)||(this.selectedLine=t.entries[0]?.line??0),this.tableHost=o("div",{class:"cron-table-wrap"}),this.detailHost=o("div",{class:"cron-detail"}),e.append(this.tableHost,this.detailHost),this.renderTable(),this.renderDetail(),{run:n=>(this.query=n.slice(0,H).trim(),this.renderTable(),{total:this.matchCount,capped:this.matchCount>=R}),go:n=>{let r=this.tableHost?.querySelectorAll("tr.entry")??[];for(let a of r)a.classList.remove("current");r[n]?.classList.add("current"),r[n]?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.renderTable()}}}entryZone(e){return e.timeZone&&g(e.timeZone)?e.timeZone:this.timeZone}renderTable(){let e=this.tableHost;if(!e)return;let t=this.t,n=this.model(),r=this.feature("system"),a=this.query.toLowerCase();this.matchCount=0;let i=o("tbody");for(let l of n.entries){let d=S(l.parsed,t,this.locale);a&&![l.schedule,l.command,l.user,l.comment,d].some(u=>u.toLowerCase().includes(a))||(this.matchCount+=1,i.append(this.entryRow(l,d,r)))}if(!this.matchCount){e.replaceChildren(o("div",{class:"empty",part:"empty",text:n.entries.length?t("cronNoMatch"):t("cronEmptyTab")}));return}let c=o("tr",{},o("th",{attrs:{scope:"col"},text:t("cronSchedule")}),o("th",{attrs:{scope:"col"},text:t("cronDescription")}),o("th",{attrs:{scope:"col"},text:t("cronNextRun")}),r?o("th",{attrs:{scope:"col"},text:t("cronUser")}):null,o("th",{attrs:{scope:"col"},text:t("cronCommand")}));e.replaceChildren(o("table",{class:"cron-table",part:"table"},o("thead",{},c),i))}entryRow(e,t,n){let r=this.entryZone(e),[a]=T(e.parsed,{from:this.now,count:1,timeZone:r}),i=e.line===this.selectedLine,c=o("code",{class:"hljs language-bash",part:"command"});c.append(V(e.command,"bash"));let l=o("tr",{class:`entry${i?" selected":""}`,attrs:{"data-line":e.line}},o("td",{class:"schedule"},o("button",{class:"schedule-button",attrs:{type:"button","aria-pressed":String(i),"data-focus-key":`entry-${e.line}`,title:e.comment||null},on:{click:()=>this.select(e)}},o("code",{text:e.schedule}))),o("td",{class:"description",text:t}),o("td",{class:"next"},a?o("time",{attrs:{datetime:a.toISOString(),title:this.dateFormat(r,!1).format(a)},text:Y(a.getTime(),this.now,this.locale)}):o("span",{class:"cron-none",text:"\u2014"})),n?o("td",{class:"user"},o("code",{text:e.user})):null,o("td",{class:"command"},c));return this.query&&le(l,this.query),l}select(e){this.selectedLine=e.line;for(let t of this.tableHost?.querySelectorAll("tr.entry")??[]){let n=Number(t.dataset.line)===e.line;t.classList.toggle("selected",n),t.querySelector(".schedule-button")?.setAttribute("aria-pressed",String(n))}this.renderDetail(),_(this,w.SELECT,{line:e.line,schedule:e.schedule,command:e.command})}renderDetail(){let e=this.detailHost;if(!e)return;let t=this.entries.find(n=>n.line===this.selectedLine);if(!t){e.replaceChildren();return}e.replaceChildren(...this.expressionView(t.parsed,this.entryZone(t)))}createEditor(){return this.editor?.destroy(),this.editor=new I({text:this.source,language:this.isTab?"bash":"plaintext",lineNumbers:this.isTab,wrap:!1,highlightLimit:O().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>_(this,w.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.render()},200)}};function Y(s,e,t){let n=(s-e)/1e3,r=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60],["second",1]],a=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(let[i,c]of r)if(Math.abs(n)>=c||i==="second")return a.format(Math.round(n/c),i);return""}function le(s,e){let t=e.toLowerCase(),n=document.createTreeWalker(s,NodeFilter.SHOW_TEXT),r=[];for(let a=n.nextNode();a;a=n.nextNode())r.push(a);for(let a of r){let i=a,c=(i.nodeValue??"").toLowerCase().indexOf(t);for(;c>=0;){let l=i.splitText(c),d=l.splitText(t.length),u=o("mark",{class:"match",part:"match"});l.replaceWith(u),u.append(l),i=d,c=(i.nodeValue??"").toLowerCase().indexOf(t)}}}export{K as a};
//# sourceMappingURL=chunk-7UZPX6MC.js.map
