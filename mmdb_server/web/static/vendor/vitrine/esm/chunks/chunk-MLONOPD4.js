/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as I,j as O}from"./chunk-UIOV74BI.js";import{d as m}from"./chunk-C4TT3NA3.js";import{a as T}from"./chunk-3FW46UG7.js";import{a as C}from"./chunk-YY743YSD.js";import{a as w}from"./chunk-YCSGENO5.js";import{A as x,b as h,l as a,n as v,v as u,w as p,x as d,y as g}from"./chunk-DNNVKOIB.js";import{k as y,l as b,m as _}from"./chunk-2IDMCIF6.js";var E=`/*
 * Countdown: a row of numbers with their units. Numbers keep their width so nothing moves when
 * they change.
 */
.countdown-body {
  justify-items: center;
  text-align: center;
}

.countdown-title {
  margin: 0;
  color: var(--_fg);
  font: 600 18px / 1.3 var(--_font-ui);
  overflow-wrap: anywhere;
}

.countdown-text,
.countdown-date {
  margin: 0;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
}

.countdown-timer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--_space-2);
}

.countdown-cell {
  display: grid;
  gap: 2px;
  min-width: 72px;
  padding: var(--_space-3) var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.countdown-value {
  color: var(--_fg);
  font: 700 28px / 1.1 var(--_font-ui);
  font-variant-numeric: tabular-nums;
}

.countdown-unit {
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.3 var(--_font-ui);
}

.countdown-ended {
  margin: 0;
  color: var(--_fg);
  font: 600 18px / 1.4 var(--_font-ui);
}

.countdown-action {
  color: var(--_accent-fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
}
`;var N=Object.freeze({countdownEnded:"It has started.",countdownTime:"Time left",countdownNoDate:"No date to count down to.",countdownOn:"On {date}"}),k=Object.freeze({countdownEnded:"C'est parti.",countdownTime:"Temps restant",countdownNoDate:"Aucune date pour le compte \xE0 rebours.",countdownOn:"Le {date}"});_({en:N,fr:k});var l=[["day",86400],["hour",3600],["minute",60],["second",1]];function j(c,t){if(typeof c=="string"&&t&&m(t)){let e=I(c,t);if(e)return O(e,t)}return x(c)}function M(c,t,e){let n;try{n=JSON.parse(c)}catch{n=c.trim()}let r=[n];Array.isArray(n)?r=n:u(n)&&Array.isArray(n.events)&&(r=n.events);let i=[];for(let s of r.slice(0,1e3)){let o=u(s)?s:{to:s},z=p(o.timezone??o.timeZone,100)||e,f=j(o.to??o.date??o.target??o.start,z);f!==null&&i.push({to:f,title:d(o,["title","name"],300),description:p(o.description,1e3),ended:d(o,["ended","expired","done"],300),url:g(o.url??o.href),cta:d(o,["cta","action","link"],100)})}return i.length?(i.sort((s,o)=>s.to-o.to),i.find(s=>s.to>t)??i[i.length-1]):null}function D(c,t=l.map(([e])=>e)){let e=Math.max(0,Math.floor(c/1e3));return l.filter(([n])=>t.includes(n)).map(([n,r])=>{let i=Math.floor(e/r);return e-=i*r,{unit:n,value:i}})}var S=class extends C{static type="countdown";static allowEmpty=!0;static componentAttributes=Object.freeze(["to","timezone","units","now"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[h,w,T,E];constructor(){super(),this.panelId=v("panel"),this.timer=void 0,this.cells=new Map,this.wasEnded=!1}get timeZone(){return this.getAttribute("timezone")?.trim()||null}get countdown(){let t=this.text?.trim()||this.getAttribute("to")?.trim()||"";return t?M(t,this.now,this.timeZone):null}get ended(){let t=this.countdown;return t!==null&&t.to<=this.now}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.timer=void 0}connectedCallback(){super.connectedCallback(),this.wasEnded=!1}get units(){let t=(this.getAttribute("units")??"").toLowerCase().split(/[\s,]+/).map(e=>e.replace(/s$/,"")).filter(e=>l.some(([n])=>n===e));return t.length?t:l.map(([e])=>e)}renderContent(t){clearInterval(this.timer),this.timer=void 0;let e=this.countdown,n=a("div",{class:"body data-body countdown-body",part:"body"});e?this.renderCountdown(n,e):n.append(a("p",{class:"data-none",text:this.t("countdownNoDate")})),this.frameWith(t,n,this.panelId,{file:"",download:!1})}renderCountdown(t,e){let n=this.t,r=e.to<=this.now;this.wasEnded=r,e.title&&t.append(a("h3",{class:"countdown-title",part:"title",text:e.title})),e.description&&t.append(a("p",{class:"countdown-text",text:e.description})),r?t.append(a("p",{class:"countdown-ended",part:"ended",text:e.ended||n("countdownEnded")})):(t.append(this.timerView(e)),t.append(a("time",{class:"countdown-date",text:n("countdownOn",{date:this.formatDate(e.to,{dateStyle:"long",timeStyle:"short",timeZone:this.validZone})}),attrs:{datetime:new Date(e.to).toISOString()}})),this.getAttribute("now")||(this.timer=setInterval(()=>this.tick(e),1e3))),e.url&&t.append(a("a",{class:"countdown-action",part:"action",text:e.cta||e.url,attrs:{href:e.url,rel:"noopener noreferrer"}}))}get validZone(){let t=this.timeZone;return t&&m(t)?t:void 0}timerView(t){this.cells=new Map;let e=D(t.to-this.now,this.units);return a("div",{class:"countdown-timer",part:"timer",attrs:{role:"timer","aria-label":this.t("countdownTime")}},...e.map(({unit:n,value:r})=>{let i=a("span",{class:"countdown-value",part:"value"}),s=a("span",{class:"countdown-unit",part:"unit-name"});return this.cells.set(n,{value:i,name:s}),this.write(n,r),a("span",{class:"countdown-cell",part:"unit"},i,s)}))}write(t,e){let n=this.cells.get(t);if(!n)return;let r=String(e),i=t;try{let s=new Intl.NumberFormat(this.locale,{style:"unit",unit:t,unitDisplay:"long"}).formatToParts(e);r=s.filter(o=>o.type!=="unit"&&o.type!=="literal").map(o=>o.value).join(""),i=s.find(o=>o.type==="unit")?.value??t}catch{}n.value.textContent!==r&&(n.value.textContent=r),n.name.textContent!==i&&(n.name.textContent=i)}tick(t){let e=t.to-this.now;if(e>0){for(let{unit:n,value:r}of D(e,this.units))this.write(n,r);return}clearInterval(this.timer),this.timer=void 0,this.render(),this.announce(t.ended||this.t("countdownEnded")),b(this,y.COUNTDOWN_END,{to:new Date(t.to).toISOString()})}};export{S as a};
//# sourceMappingURL=chunk-MLONOPD4.js.map
