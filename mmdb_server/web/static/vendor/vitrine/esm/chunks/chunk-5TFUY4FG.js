/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as U}from"./chunk-MHTQX5EH.js";import{a as $}from"./chunk-3FW46UG7.js";import{a as j}from"./chunk-YY743YSD.js";import{I as A,c as T,d as _,l as d,n as y,v as P}from"./chunk-DNNVKOIB.js";import{k as v,l as w,m as L}from"./chunk-2IDMCIF6.js";var F=`/*
 * Date picker: the field (from field.css), a calendar under it, and the usual periods on its
 * side. Days are a grid of 40px cells, so a finger can choose them.
 */
.date-anchor {
  position: relative;
}

.date-box {
  gap: var(--_space-1);
  padding-right: var(--_space-1);
}

.date-side {
  display: contents;
}

.date-input {
  min-width: 0;
  font-variant-numeric: tabular-nums;
}

.range .date-input {
  flex: 1 1 8ch;
}

.date-dash {
  flex: none;
  color: var(--_fg-muted);
}

.date-toggle[aria-expanded='true'] {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.date-format {
  color: var(--_fg-muted);
}

/* ---------- Calendar ---------- */

.date-popup {
  position: absolute;
  z-index: 20;
  top: calc(100% + 4px);
  left: 0;
  display: flex;
  gap: var(--_space-3);
  max-width: min(100vw - 32px, 100%);
  width: max-content;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_surface-raised);
  box-shadow: 0 12px 32px rgb(0 0 0 / 0.18);
  color: var(--_fg);
}

.date-popup.inline {
  position: static;
  max-width: 100%;
  box-shadow: none;
}

.date-main {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.date-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2);
}

.date-title {
  margin: 0;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
}

.date-move:disabled {
  opacity: 0.35;
  cursor: default;
}

.date-months {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-4);
}

.date-month-name {
  margin: 0 0 var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
}

/* With one month the title above says it already. */
.date-months > .date-month:only-child .date-month-name {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.date-grid {
  border-collapse: collapse;
  table-layout: fixed;
}

.date-grid th {
  width: 40px;
  height: 28px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 500;
  text-align: center;
}

.date-grid td {
  width: 40px;
  height: 40px;
  padding: 0;
  text-align: center;
}

.date-day {
  position: relative;
  border-radius: var(--_radius-sm);
  cursor: pointer;
  font-variant-numeric: tabular-nums;
}

.date-day:hover {
  background: var(--_accent-soft);
}

.date-day:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.date-day.today .date-number {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.date-day.in-range,
.date-day.preview {
  border-radius: 0;
  background: var(--_accent-soft);
}

.date-day.in-range.week-start,
.date-day.preview.week-start {
  border-top-left-radius: var(--_radius-sm);
  border-bottom-left-radius: var(--_radius-sm);
}

.date-day.in-range.week-end,
.date-day.preview.week-end {
  border-top-right-radius: var(--_radius-sm);
  border-bottom-right-radius: var(--_radius-sm);
}

.date-day.start,
.date-day.end {
  background: var(--_accent);
  color: var(--_on-accent);
}

.date-day.blocked {
  color: var(--_fg-muted);
  cursor: not-allowed;
  opacity: 0.55;
  text-decoration: line-through;
}

.date-day.blocked:hover {
  background: transparent;
}

.date-day[aria-disabled='true']:not(.blocked) {
  cursor: default;
}

.date-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--_space-2);
}

.date-status {
  flex: 1 1 12em;
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Usual periods ---------- */

.date-presets {
  display: grid;
  align-content: start;
  gap: 2px;
  min-width: 10em;
  margin: 0;
  padding: 0 var(--_space-3) 0 0;
  border-right: 1px solid var(--_border);
  list-style: none;
}

.date-preset {
  width: 100%;
  padding: var(--_space-1) var(--_space-2);
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.date-preset:hover,
.date-preset[aria-pressed='true'] {
  background: var(--_accent-soft);
}

.date-preset[aria-pressed='true'] {
  font-weight: 600;
}

.date-preset:disabled {
  background: transparent;
  color: var(--_fg-muted);
  cursor: default;
  text-decoration: line-through;
}

.date-preset:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

/* ---------- Phones ---------- */

@media (max-width: 600px) {
  .date-popup {
    flex-direction: column;
  }

  .date-presets {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 var(--_space-2);
    border-right: 0;
    border-bottom: 1px solid var(--_border);
  }

  .date-preset {
    width: auto;
  }
}

@media (forced-colors: active) {
  .date-day.start,
  .date-day.end {
    outline: 2px solid Highlight;
  }

  .date-day.in-range,
  .date-day.preview {
    outline: 1px dashed Highlight;
  }
}
`;var R=p(1,1,1),E=p(9999,12,31),Q=["sun","mon","tue","wed","thu","fri","sat"];function p(a,t,s){let e=new Date(0);return e.setUTCFullYear(a,t-1,s),Math.round(e.getTime()/864e5)}function m(a){let t=new Date(a*864e5);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate()}}function x(a){return((a+4)%7+7)%7}function I(a,t,s){if(!Number.isInteger(a)||a<1||a>9999||!Number.isInteger(t)||t<1||t>12||!Number.isInteger(s)||s<1||s>31)return null;let e=p(a,t,s);return m(e).day===s?e:null}function f(a){let t=/^\s*(\d{4})-(\d{2})-(\d{2})\s*$/.exec(String(a??""));return t?I(Number(t[1]),Number(t[2]),Number(t[3])):null}function k(a){let{year:t,month:s,day:e}=m(a);return`${String(t).padStart(4,"0")}-${String(s).padStart(2,"0")}-${String(e).padStart(2,"0")}`}function q(a){try{let s=new Intl.DateTimeFormat(a,{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}).formatToParts(Date.UTC(2e3,10,22)).map(e=>e.type).filter(e=>e==="day"||e==="month"||e==="year");if(s.length===3)return s}catch{}return["day","month","year"]}function Y(a,t,s){let e=String(a??"").trim();if(!e||e.length>40)return null;let i=f(e);if(i!==null)return i;if(/^\d{4}[^\d]\d{1,2}[^\d]\d{1,2}$/.test(e)){let[l,h,g]=e.split(/[^\d]/).map(Number);return I(l,h,g)}let r=e.split(/[^\d]+/).filter(Boolean);if(r.length<2||r.length>3||r.some(l=>l.length>4))return null;let o=t.filter(l=>r.length===3||l!=="year"),n={day:0,month:0,year:m(s).year};return o.forEach((l,h)=>{let g=r[h],b=Number(g);l==="year"&&g.length<=2&&(b+=2e3),n[l]=b}),I(n.year,n.month,n.day)}function B(a){try{let s=new Intl.Locale(a),e=s.getWeekInfo?.()??s.weekInfo;if(e&&Number.isInteger(e.firstDay))return e.firstDay%7}catch{}let t=/-([A-Z]{2})\b/.exec(a)?.[1]??(/^(en|ja|he|zh|ko|pt)\b/.test(a)?"US":"");return["US","CA","JP","IL","BR","MX","PH","KR","TW","IN","SA","ZA","AU","HK"].includes(t)?0:1}function u(a){let{year:t,month:s}=m(a);return p(t,s,1)}function c(a,t){let{year:s,month:e,day:i}=m(a),r=s*12+(e-1)+t,o=Math.floor(r/12),n=r%12+1,l=m(p(o,n+1,1)-1).day;return p(o,n,Math.min(i,l))}function W(a,t){let s=u(a),e=(x(s)-t+7)%7,i=s-e;return Array.from({length:6},(r,o)=>Array.from({length:7},(n,l)=>i+o*7+l))}function V(a){let t={days:new Set,ranges:[],weekdays:new Set},s=[];if(Array.isArray(a))s=a;else if(typeof a=="string"){let e=a.trim();if(e.startsWith("["))try{let i=JSON.parse(e);Array.isArray(i)&&(s=i)}catch{s=[]}else s=e.split(/[\s,;]+/)}for(let e of s.slice(0,5e3)){if(e&&typeof e=="object"){let g=e,b=f(g.start??g.from),S=f(g.end??g.to);b!==null&&S!==null&&t.ranges.push(b<=S?[b,S]:[S,b]);continue}let i=String(e??"").trim().toLowerCase();if(!i)continue;let r=Q.indexOf(i.slice(0,3));if(r>=0&&/^[a-z]+$/.test(i)){t.weekdays.add(r);continue}let[o,n]=i.split("/"),l=f(o),h=n===void 0?l:f(n);l===null||h===null||(l===h?t.days.add(l):t.ranges.push(l<=h?[l,h]:[h,l]))}return t}function D(a,t,s=R,e=E){return a<s||a>e||t.days.has(a)||t.weekdays.has(x(a))?!0:t.ranges.some(([i,r])=>a>=i&&a<=r)}function N(a,t,s,e,i){for(let r=0,o=a;r<400;r+=1,o+=t){if(o<e||o>i)return null;if(!D(o,s,e,i))return o}return null}function M(a,t){if(a&&typeof a=="object"&&!Array.isArray(a)){let o=a;return z(f(o.start??o.from),t?f(o.end??o.to):null)}let s=String(a??"").trim();if(s.startsWith("{"))try{return M(JSON.parse(s),t)}catch{return{start:null,end:null}}let[e,i]=s.slice(0,100).split(/[/,]|\s[–—-]\s/).map(o=>o.trim()),r=f(e);return z(r,t?f(i):null)}function z(a,t){return a!==null&&t!==null&&t<a?{start:t,end:a}:{start:a,end:t}}function H(a,t,s=O){let e=a-(x(a)-t+7)%7,i=u(a),{year:r}=m(a),o={today:[a,a],yesterday:[a-1,a-1],last7:[a-6,a],last30:[a-29,a],thisWeek:[e,e+6],lastWeek:[e-7,e-1],nextWeek:[e+7,e+13],next30:[a,a+29],thisMonth:[i,c(i,1)-1],lastMonth:[c(i,-1),i-1],thisYear:[p(r,1,1),p(r,12,31)]};return s.filter(n=>o[n]).map(n=>({key:n,start:o[n][0],end:o[n][1]}))}var O=["today","yesterday","last7","last30","thisMonth","lastMonth","thisYear"];var K=Object.freeze({dateRequired:"required",dateChoose:"Choose a date",dateChooseRange:"Choose dates",dateStart:"Start",dateEnd:"End",datePrevMonth:"Previous month",dateNextMonth:"Next month",dateToday:"Today",dateClear:"Clear",dateClose:"Close",dateChooseEnd:"Now choose the end date.",dateChosen:"{date} chosen.",dateRangeChosen:"From {start} to {end}.",dateUnavailable:"not available",datePresets:"Periods",datePreset_today:"Today",datePreset_yesterday:"Yesterday",datePreset_last7:"Last 7 days",datePreset_last30:"Last 30 days",datePreset_thisWeek:"This week",datePreset_lastWeek:"Last week",datePreset_nextWeek:"Next week",datePreset_next30:"Next 30 days",datePreset_thisMonth:"This month",datePreset_lastMonth:"Last month",datePreset_thisYear:"This year",dateFormatHint:"Format: {format}",dateFormat_day:"dd",dateFormat_month:"mm",dateFormat_year:"yyyy",dateValueMissing:"Choose a date.",dateValueMissingRange:"Choose a start and an end date.",dateEndMissing:"Choose the end date.",dateBadInput:"Enter a date such as {example}.",dateTooEarly:"Choose {min} or later.",dateTooLate:"Choose {max} or earlier.",dateBlocked:"This date is not available.",dateRangeTooShort:"Choose at least {count} days.",dateRangeTooLong:"Choose at most {count} days."}),Z=Object.freeze({dateRequired:"obligatoire",dateChoose:"Choisir une date",dateChooseRange:"Choisir les dates",dateStart:"D\xE9but",dateEnd:"Fin",datePrevMonth:"Mois pr\xE9c\xE9dent",dateNextMonth:"Mois suivant",dateToday:"Aujourd\u2019hui",dateClear:"Effacer",dateClose:"Fermer",dateChooseEnd:"Choisissez maintenant la date de fin.",dateChosen:"{date} choisi.",dateRangeChosen:"Du {start} au {end}.",dateUnavailable:"indisponible",datePresets:"P\xE9riodes",datePreset_today:"Aujourd\u2019hui",datePreset_yesterday:"Hier",datePreset_last7:"7 derniers jours",datePreset_last30:"30 derniers jours",datePreset_thisWeek:"Cette semaine",datePreset_lastWeek:"Semaine derni\xE8re",datePreset_nextWeek:"Semaine prochaine",datePreset_next30:"30 prochains jours",datePreset_thisMonth:"Ce mois-ci",datePreset_lastMonth:"Mois dernier",datePreset_thisYear:"Cette ann\xE9e",dateFormatHint:"Format : {format}",dateFormat_day:"jj",dateFormat_month:"mm",dateFormat_year:"aaaa",dateValueMissing:"Choisissez une date.",dateValueMissingRange:"Choisissez une date de d\xE9but et de fin.",dateEndMissing:"Choisissez la date de fin.",dateBadInput:"Saisissez une date comme {example}.",dateTooEarly:"Choisissez le {min} ou apr\xE8s.",dateTooLate:"Choisissez le {max} ou avant.",dateBlocked:"Cette date n\u2019est pas disponible.",dateRangeTooShort:"Choisissez au moins {count} jours.",dateRangeTooLong:"Choisissez au plus {count} jours."});L({en:K,fr:Z});var G={label:"label",hint:"hint",mode:"mode",name:"name",value:"value",required:"required",min:"min",max:"max",disabledDates:"disabled-dates",disabled:"disabled-dates",firstDay:"first-day",months:"months",presets:"presets",inline:"inline",clearable:"clearable",minDays:"min-days",maxDays:"max-days",placeholder:"placeholder"},J=class extends j{static type="date-picker";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["mode","name","hint","value","required","disabled","readonly","min","max","disabled-dates","first-day","months","presets","inline","clearable","min-days","max-days","now"]);static dataAttributes=Object.freeze([...new Set(Object.values(G))]);static presets={simple:{},full:{}};static styles=[$,U,F];static fromData(t){if(typeof t=="string")return{content:"",attributes:{value:t}};if(!P(t))return{content:""};let s={};for(let[i,r]of Object.entries(G)){if(!Object.hasOwn(t,i))continue;let o=t[i];s[r]=Array.isArray(o)?JSON.stringify(o):o}let e=P(t.value)?t.value:t;return(Object.hasOwn(e,"start")||Object.hasOwn(e,"end"))&&(s.value=[e.start,e.end].filter(i=>typeof i=="string").join("/")),{content:"",attributes:s}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:y("label"),start:y("date"),end:y("date"),hint:y("hint"),error:y("error"),popup:y("calendar"),status:y("status")},this.start=null,this.end=null,this.ready=!1,this.open=!1,this.pending=!1,this.view=0,this.focusDay=null,this.typed={start:null,end:null},this.showErrors=!1,this.formDisabled=!1,this.customMessage="",this.rulesCache=null,this.outside=null,this.addEventListener("invalid",t=>{t.preventDefault(),this.showErrors=!0,this.refreshState(),this.form?.querySelector(":invalid")===this&&this.focus()}),this.addEventListener("focusout",t=>{let s=t.relatedTarget;this.open&&s&&s!==this&&!this.contains(s)&&this.close(!1)})}get isRange(){return(this.getAttribute("mode")??"").trim().toLowerCase()==="range"}has(t){return T(this.getAttribute(t))===!0}get disabled(){return this.formDisabled||this.has("disabled")}get locked(){return this.disabled||this.has("readonly")}get inline(){return this.has("inline")}get today(){let t=f(this.getAttribute("now"));if(t!==null)return t;let s=new Date(this.now);return p(s.getFullYear(),s.getMonth()+1,s.getDate())}limit(t){let s=(this.getAttribute(t)??"").trim().toLowerCase();return(s==="today"?this.today:f(s))??(t==="min"?R:E)}get rules(){let t=this.getAttribute("disabled-dates")??"";return this.rulesCache?.text!==t&&(this.rulesCache={text:t,rules:V(t)}),this.rulesCache.rules}blocked(t){return D(t,this.rules,this.limit("min"),this.limit("max"))}get firstDay(){let t=this.getAttribute("first-day");return t===null?B(this.locale):_(t,{min:0,max:6,fallback:1})}get monthCount(){return _(this.getAttribute("months"),{min:1,max:3,fallback:this.isRange?2:1})}get presetKeys(){if(!this.isRange)return[];let t=this.getAttribute("presets");return t===null||t.trim()===""||T(t)===!0?O:T(t)===!1?[]:t.split(/[\s,]+/).filter(Boolean)}get value(){return this.readInitial(),this.isRange?this.start!==null&&this.end!==null?`${k(this.start)}/${k(this.end)}`:"":this.start===null?"":k(this.start)}set value(t){this.readInitial();let{start:s,end:e}=M(t,this.isRange);this.start=s,this.end=this.isRange?e:null,this.pending=!1,this.typed={start:null,end:null},this.render()}get startDate(){return this.readInitial(),this.start===null?"":k(this.start)}get endDate(){return this.readInitial(),this.end===null?"":k(this.end)}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.refreshState(),this.internals?.reportValidity()??!0}setCustomValidity(t){this.customMessage=String(t??""),this.customMessage&&(this.showErrors=!0),this.refreshState()}focus(t){this.root.querySelector('[data-focus-key="start"], [data-focus-key="toggle"]')?.focus(t)}readInitial(){if(this.ready)return;this.ready=!0;let{start:t,end:s}=M(this.getAttribute("value"),this.isRange);this.start=t,this.end=this.isRange?s:null,this.pending=!1,this.typed={start:null,end:null}}attributeChangedCallback(t,s,e){(t==="value"||t==="mode")&&s!==e&&(this.ready=!1),super.attributeChangedCallback(t,s,e)}formResetCallback(){this.ready=!1,this.showErrors=!1,this.customMessage="",this.open=!1,this.render()}formDisabledCallback(t){this.formDisabled=t,this.requestRender()}formStateRestoreCallback(t){typeof t=="string"&&(this.value=t)}disconnectedCallback(){super.disconnectedCallback(),this.stopOutside()}short(t){return this.formatDate(t*864e5,{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"})}long(t){return this.formatDate(t*864e5,{dateStyle:"full",timeZone:"UTC"})}medium(t){return this.formatDate(t*864e5,{dateStyle:"medium",timeZone:"UTC"})}get pattern(){let t=this.t;try{return new Intl.DateTimeFormat(this.locale,{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}).formatToParts(Date.UTC(2e3,10,22)).map(s=>s.type==="day"||s.type==="month"||s.type==="year"?t(`dateFormat_${s.type}`):s.value).join("")}catch{return"yyyy-mm-dd"}}check(){let t=this.t;if(this.disabled)return{flags:{},message:""};if(this.customMessage)return{flags:{customError:!0},message:this.customMessage};if(this.typed.start!==null||this.typed.end!==null)return{flags:{badInput:!0},message:t("dateBadInput",{example:this.short(this.today)})};let{start:s,end:e}=this;if(s===null)return this.has("required")?{flags:{valueMissing:!0},message:t(this.isRange?"dateValueMissingRange":"dateValueMissing")}:{flags:{},message:""};if(this.isRange&&e===null)return{flags:{valueMissing:!0},message:t("dateEndMissing")};let i=this.limit("min"),r=this.limit("max");if(s<i)return{flags:{rangeUnderflow:!0},message:t("dateTooEarly",{min:this.medium(i)})};if((e??s)>r)return{flags:{rangeOverflow:!0},message:t("dateTooLate",{max:this.medium(r)})};if(D(s,this.rules)||e!==null&&D(e,this.rules))return{flags:{customError:!0},message:t("dateBlocked")};if(this.isRange&&e!==null){let n=e-s+1,l=_(this.getAttribute("min-days"),{min:0,max:1e5,fallback:0}),h=_(this.getAttribute("max-days"),{min:0,max:1e5,fallback:0});if(l&&n<l)return{flags:{rangeUnderflow:!0},message:t("dateRangeTooShort",{count:l})};if(h&&n>h)return{flags:{rangeOverflow:!0},message:t("dateRangeTooLong",{count:h})}}return{flags:{},message:""}}refreshState(){this.readInitial();let{flags:t,message:s}=this.check();if(this.internals){let r=this.disabled?null:this.value;this.internals.setFormValue(r,r);let o=this.root.querySelector('[data-focus-key="start"]')??void 0;this.internals.setValidity(t,s,Object.keys(t).length?o:void 0)}let e=!!s&&this.showErrors,i=this.root.getElementById(this.ids.error);i&&(i.textContent=e?s:""),i?.parentElement?.classList.toggle("has-error",e);for(let r of this.root.querySelectorAll(".date-input"))e?r.setAttribute("aria-invalid","true"):r.removeAttribute("aria-invalid")}get detail(){return{value:this.value,start:this.startDate,end:this.endDate}}commit(){this.showErrors=!0,this.refreshState(),w(this,v.INPUT,this.detail),w(this,v.CHANGE,this.detail)}renderContent(t){this.readInitial();let s=this.t,e=this.has("required"),i=this.getAttribute("hint"),r=d("div",{class:`field date-picker${this.disabled?" disabled":""}${this.isRange?" range":""}`,part:"body"},d("div",{class:"field-top"},d(this.isRange?"span":"label",{class:"field-label",part:"label",attrs:{id:this.ids.label,for:this.isRange?null:this.ids.start}},(this.getAttribute("label")??"").trim().slice(0,300),e?d("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,e?d("span",{class:"sr-only",text:` (${s("dateRequired")})`}):null)),d("div",{class:"date-anchor"},this.box(),this.open||this.inline?this.calendar():null),d("div",{class:"field-meta"},d("p",{class:"field-hint",part:"hint",text:i?`${i} `:"",attrs:{id:this.ids.hint}},d("span",{class:"date-format",text:s("dateFormatHint",{format:this.pattern})}))),d("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}));t.append(r),this.refreshState(),this.open&&!this.inline?this.watchOutside():this.stopOutside()}box(){let t=this.t,s=this.start!==null||this.typed.start!==null||this.typed.end!==null;return d("div",{class:"field-box date-box"},this.input("start"),this.isRange?d("span",{class:"date-dash",text:"\u2013",attrs:{"aria-hidden":"true"}}):null,this.isRange?this.input("end"):null,this.has("clearable")&&!this.locked&&s?d("button",{class:"field-icon-button",attrs:{type:"button","aria-label":t("dateClear"),"data-focus-key":"clear"},on:{click:()=>this.clear()}},A("close")):null,this.inline?null:d("button",{class:"field-icon-button date-toggle",part:"toggle",attrs:{type:"button",disabled:this.locked,"aria-label":t(this.isRange?"dateChooseRange":"dateChoose"),"aria-haspopup":"dialog","aria-expanded":String(this.open),"aria-controls":this.open?this.ids.popup:null,"data-focus-key":"toggle"},on:{click:()=>this.open?this.close():this.openCalendar()}},A("calendar")))}input(t){let s=this.t,e=t==="start"?this.start:this.end,i=this.typed[t],r=d("input",{class:"field-input date-input",part:"control",attrs:{id:this.ids[t],type:"text",inputmode:"numeric",autocomplete:"off",placeholder:this.getAttribute("placeholder")||this.pattern,disabled:this.disabled,readonly:this.has("readonly"),required:this.has("required")&&(t==="start"||this.isRange),"aria-labelledby":this.isRange?`${this.ids.label} ${this.ids[t]}-name`:null,"aria-describedby":`${this.ids.hint} ${this.ids.error}`,"data-focus-key":t},on:{change:()=>this.typedIn(t,r.value),keydown:o=>{let n=o;n.key==="ArrowDown"&&n.altKey&&!this.inline?(n.preventDefault(),this.openCalendar(t)):n.key==="Escape"&&this.open&&(n.preventDefault(),this.close())}}});return r.value=i??(e===null?"":this.short(e)),this.isRange?d("span",{class:"date-side"},d("span",{class:"sr-only",text:s(t==="start"?"dateStart":"dateEnd"),attrs:{id:`${this.ids[t]}-name`}}),r):r}typedIn(t,s){let e=s.trim()?Y(s,q(this.locale),this.today):null;this.typed[t]=s.trim()&&e===null?s:null,t==="start"?this.start=e:this.end=e,this.start!==null&&this.end!==null&&this.end<this.start&&([this.start,this.end]=[this.end,this.start]),this.pending=!1,e!==null&&(this.view=u(e)),this.render(),this.commit()}clear(){this.start=null,this.end=null,this.pending=!1,this.typed={start:null,end:null},this.render(),this.focus(),this.commit()}calendar(){let t=this.t,s=this.monthCount;this.view||(this.view=u(this.start??this.today));let e=Array.from({length:s},(n,l)=>c(this.view,l)),i=this.rovingDay(e),r=H(this.today,this.firstDay,this.presetKeys),o=`${this.ids.popup}-title`;return d("div",{class:`date-popup${this.inline?" inline":""}`,part:"calendar",attrs:{id:this.ids.popup,role:this.inline?"group":"dialog","aria-label":t(this.isRange?"dateChooseRange":"dateChoose")},on:{keydown:n=>{n.key==="Escape"&&!this.inline&&(n.preventDefault(),n.stopPropagation(),this.close())}}},r.length&&!this.locked?d("ul",{class:"date-presets",part:"presets",attrs:{"aria-label":t("datePresets")}},...r.map(n=>d("li",{},d("button",{class:"date-preset",text:t(`datePreset_${n.key}`),attrs:{type:"button","aria-pressed":String(this.start===n.start&&this.end===n.end),disabled:n.start<this.limit("min")||n.end>this.limit("max"),"data-focus-key":`preset-${n.key}`},on:{click:()=>this.choosePeriod(n.start,n.end)}})))):null,d("div",{class:"date-main"},d("div",{class:"date-nav"},this.navButton(-1),d("p",{class:"date-title",text:e.map(n=>this.monthName(n)).join(" \u2013 "),attrs:{id:o,"aria-live":"polite"}}),this.navButton(1)),d("div",{class:"date-months"},...e.map(n=>this.monthTable(n,i))),d("div",{class:"date-foot"},this.isRange?d("p",{class:"date-status",text:this.pending?t("dateChooseEnd"):"",attrs:{id:this.ids.status}}):null,this.locked?null:d("button",{class:"text-btn",text:t("dateToday"),attrs:{type:"button","data-focus-key":"today",disabled:this.blocked(this.today)&&!this.isRange},on:{click:()=>this.goToday()}}),this.locked||this.start===null&&!this.pending?null:d("button",{class:"text-btn",text:t("dateClear"),attrs:{type:"button","data-focus-key":"clear-all"},on:{click:()=>this.clear()}}),this.inline?null:d("button",{class:"text-btn",text:t("dateClose"),attrs:{type:"button","data-focus-key":"close"},on:{click:()=>this.close()}}))))}navButton(t){let s=c(this.view,t),e=u(this.limit("min")),i=u(this.limit("max")),r=t<0?s<e:c(s,this.monthCount-1)>i;return d("button",{class:"field-icon-button date-move",attrs:{type:"button",disabled:r,"aria-label":this.t(t<0?"datePrevMonth":"dateNextMonth"),"data-focus-key":t<0?"prev":"next"},on:{click:()=>{this.view=s,this.focusDay!==null&&(this.focusDay=c(this.focusDay,t)),this.render();let o=this.root.querySelector(`[data-focus-key="${t<0?"prev":"next"}"]`);o instanceof HTMLButtonElement&&o.disabled&&this.root.querySelector('.date-day[tabindex="0"]')?.focus()}}},A(t<0?"chevron-left":"chevron-right"))}monthName(t){return this.formatDate(t*864e5,{month:"long",year:"numeric",timeZone:"UTC"})}rovingDay(t){let s=t[0],e=c(t[t.length-1],1)-1;for(let i of[this.focusDay,this.start,this.today])if(i!==null&&i>=s&&i<=e)return i;return N(s,1,this.rules,this.limit("min"),this.limit("max"))??s}monthTable(t,s){let e=this.firstDay,i=W(t,e),{month:r}=m(t),o=`${this.ids.popup}-${t}`,n=Array.from({length:7},(l,h)=>tt+(e+h)%7);return d("div",{class:"date-month"},d("p",{class:"date-month-name",text:this.monthName(t),attrs:{id:o}}),d("table",{class:"date-grid",attrs:{role:"grid","aria-labelledby":o},on:{keydown:l=>this.gridKey(l)}},d("thead",{},d("tr",{},...n.map(l=>d("th",{text:this.formatDate(l*864e5,{weekday:"narrow",timeZone:"UTC"}),attrs:{scope:"col",abbr:this.formatDate(l*864e5,{weekday:"long",timeZone:"UTC"})}})))),d("tbody",{},...i.filter(l=>l.some(h=>m(h).month===r)).map(l=>d("tr",{},...l.map(h=>m(h).month===r?this.dayCell(h,s):d("td",{class:"date-empty",attrs:{role:"gridcell"}})))))))}dayCell(t,s){let{start:e,end:i}=this,r=this.blocked(t),o=t===e||t===i||e!==null&&i!==null&&t>e&&t<i,n=["date-day"];return t===this.today&&n.push("today"),r&&n.push("blocked"),o&&n.push("selected"),t===e&&n.push("start"),(t===i||t===e&&i===null&&!this.pending)&&n.push("end"),e!==null&&i!==null&&t>e&&t<i&&n.push("in-range"),x(t)===this.firstDay&&n.push("week-start"),x(t)===(this.firstDay+6)%7&&n.push("week-end"),d("td",{class:n.join(" "),part:"day",attrs:{role:"gridcell",tabindex:t===s?"0":"-1","aria-selected":String(o),"aria-disabled":r||this.locked?"true":null,"aria-current":t===this.today?"date":null,"data-day":String(t),"data-focus-key":`day-${t}`},on:{click:()=>this.chooseDay(t),pointerenter:()=>this.preview(t),focus:()=>{this.focusDay=t,this.preview(t)}}},d("span",{class:"date-number",text:String(m(t).day),attrs:{"aria-hidden":"true"}}),d("span",{class:"sr-only",text:r?`${this.long(t)}, ${this.t("dateUnavailable")}`:this.long(t)}))}preview(t){if(!this.pending||this.start===null)return;let[s,e]=t<this.start?[t,this.start]:[this.start,t];for(let i of this.root.querySelectorAll(".date-day")){let r=Number(i.dataset.day);i.classList.toggle("preview",r>=s&&r<=e)}}chooseDay(t){if(!(this.locked||this.blocked(t))){if(this.focusDay=t,!this.isRange){this.start=t,this.typed={start:null,end:null},this.announce(this.t("dateChosen",{date:this.long(t)})),this.finish();return}if(!this.pending||this.start===null){this.start=t,this.end=null,this.pending=!0,this.typed={start:null,end:null},this.render(),this.announce(this.t("dateChooseEnd")),w(this,v.INPUT,this.detail);return}this.choosePeriod(Math.min(this.start,t),Math.max(this.start,t))}}choosePeriod(t,s){this.start=t,this.end=s,this.pending=!1,this.typed={start:null,end:null},this.view=u(t),this.focusDay=t,this.announce(this.t("dateRangeChosen",{start:this.long(t),end:this.long(s)})),this.finish()}finish(){this.inline?this.render():this.close(),this.commit()}goToday(){let t=this.today;if(this.view=u(t),this.focusDay=t,!this.isRange&&!this.blocked(t)){this.chooseDay(t);return}this.render(),this.focusCell(t)}openCalendar(t="start"){if(this.locked||this.inline)return;this.open=!0;let e=(t==="end"?this.end:null)??this.start??N(Math.max(this.today,this.limit("min")),1,this.rules,this.limit("min"),this.limit("max"))??this.today;this.focusDay=e,this.view=t==="end"&&this.end!==null&&this.monthCount>1?c(u(e),1-this.monthCount):u(e),this.view<u(this.limit("min"))&&(this.view=u(this.limit("min"))),this.render(),this.focusCell(e),w(this,v.TOGGLE,{expanded:!0})}close(t=!0){this.open&&(this.open=!1,this.pending=!1,this.showErrors=!0,this.render(),t&&this.root.querySelector('[data-focus-key="toggle"]')?.focus(),w(this,v.TOGGLE,{expanded:!1}))}focusCell(t){this.root.querySelector(`[data-day="${t}"]`)?.focus()}gridKey(t){let s=t.target.closest?.("[data-day]");if(!(s instanceof HTMLElement))return;let e=Number(s.dataset.day),i=(x(e)-this.firstDay+7)%7,r={ArrowLeft:()=>e-1,ArrowRight:()=>e+1,ArrowUp:()=>e-7,ArrowDown:()=>e+7,Home:()=>e-i,End:()=>e+6-i,PageUp:()=>c(e,t.shiftKey?-12:-1),PageDown:()=>c(e,t.shiftKey?12:1)};if(r[t.key]){t.preventDefault();let o=Math.min(E,Math.max(R,r[t.key]()));this.focusDay=o;let n=c(this.view,this.monthCount)-1;o<this.view?this.view=u(o):o>n&&(this.view=c(u(o),1-this.monthCount)),this.render(),this.focusCell(o),this.preview(o)}else(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.chooseDay(e),(this.pending||this.inline)&&this.focusCell(e))}watchOutside(){this.outside||(this.outside=t=>{t.type==="keydown"?t.key==="Escape"&&!t.defaultPrevented&&(t.preventDefault(),this.close()):t.composedPath().includes(this)||this.close(!1)},document.addEventListener("pointerdown",this.outside,!0),document.addEventListener("keydown",this.outside))}stopOutside(){this.outside&&(document.removeEventListener("pointerdown",this.outside,!0),document.removeEventListener("keydown",this.outside),this.outside=null)}},tt=3;export{J as a};
//# sourceMappingURL=chunk-5TFUY4FG.js.map
