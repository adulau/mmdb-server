/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as _}from"./chunk-3FW46UG7.js";import{a as w}from"./chunk-YY743YSD.js";import{a as c}from"./chunk-YCSGENO5.js";import{A as g,B as v,C as y,D as x,Q as m,b as u,d as l,e as p,l as a,n as d,x as n,y as h,z as f}from"./chunk-DNNVKOIB.js";import{m as b}from"./chunk-2IDMCIF6.js";var k=`/*
 * Testimonials: quotes with their author, in a grid, a list or a carousel.
 */
.testimonials-list {
  display: grid;
  gap: var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.testimonials-list.grid {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
}

.testimonials-item {
  display: flex;
  flex-direction: column;
  gap: var(--_space-3);
  height: 100%;
  min-width: 0;
  margin: 0;
  padding: var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.testimonials-quote {
  flex: 1;
  margin: 0;
  color: var(--_fg);
  font: 400 15px / 1.55 var(--_font-ui);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.testimonials-author {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
  min-width: 0;
}

.testimonials-avatar {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1 var(--_font-ui);
  object-fit: cover;
}

.testimonials-who {
  display: grid;
  min-width: 0;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.45 var(--_font-ui);
  overflow-wrap: anywhere;
}

.testimonials-who strong {
  color: var(--_fg);
  font-size: var(--_font-size-ui);
  font-weight: 600;
}

.testimonials-who a {
  color: var(--_accent-fg);
}

/* ---------- Ratings ---------- */

.testimonials-stars {
  position: relative;
  display: inline-block;
  flex: none;
  font: 400 16px / 1 var(--_font-ui);
  letter-spacing: 1px;
  white-space: nowrap;
}

.testimonials-empty {
  color: var(--_border-strong);
}

.testimonials-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--_value, 0);
  overflow: hidden;
  color: var(--_warning);
}

.testimonials-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  margin: 0;
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

/* ---------- Carousel ---------- */

.testimonials-carousel {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.testimonials-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--_space-2);
}

.testimonials-position {
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1.3 var(--_font-ui);
  font-variant-numeric: tabular-nums;
}
`;var C=Object.freeze({testimonialsRating:"{rating} out of 5",testimonialsSummary:"{rating} out of 5, from {count} reviews",testimonialsPrevious:"Previous testimonial",testimonialsNext:"Next testimonial",testimonialsPause:"Pause",testimonialsPlay:"Play",testimonialsCarousel:"Testimonials",testimonialsPosition:"{n} of {total}",testimonialsSource:"Read the source",testimonialsEmpty:"No testimonials yet."}),P=Object.freeze({testimonialsRating:"{rating} sur 5",testimonialsSummary:"{rating} sur 5, pour {count} avis",testimonialsPrevious:"T\xE9moignage pr\xE9c\xE9dent",testimonialsNext:"T\xE9moignage suivant",testimonialsPause:"Pause",testimonialsPlay:"Lecture",testimonialsCarousel:"T\xE9moignages",testimonialsPosition:"{n} sur {total}",testimonialsSource:"Voir la source",testimonialsEmpty:"Aucun t\xE9moignage pour le moment."});b({en:C,fr:P});var q=["grid","list","carousel"],I=5;function T(o){let t=y(o,["items","testimonials","reviews","quotes"]);if(!t.ok)return t;let e=[];for(let i of t.items){let s=n(i,["quote","text","review","content","body"],4e3);if(!s)continue;let r=v(i.rating??i.stars),S=n(i,["company","organization"],200),E=n(i,["role","title","position"],200);e.push({quote:s,author:n(i,["author","name"],200),role:[E,S].filter(Boolean).join(", "),avatar:f(i.avatar??i.image??i.photo),rating:r===null?null:Math.max(0,Math.min(5,r)),url:h(i.url??i.source??i.href),date:g(i.date)})}return{ok:!0,items:e}}function L(o){let t=o.map(e=>e.rating).filter(e=>e!==null);return t.length?{rating:t.reduce((e,i)=>e+i,0)/t.length,count:t.length}:null}var z=class extends w{static type="testimonials";static componentAttributes=Object.freeze(["layout","interval","summary"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0}};static styles=[u,c,_,k];constructor(){super(),this.panelId=d("panel"),this.index=0,this.playing=!0,this.held=!1,this.timer=void 0}get items(){let t=T(this.text??"");return t.ok?t.items:[]}get canPlay(){return l(this.getAttribute("interval"),{min:I,max:3600,fallback:0})>0&&!(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches)}connectedCallback(){super.connectedCallback(),this.frame.addEventListener("pointerenter",()=>this.held=!0),this.frame.addEventListener("pointerleave",()=>this.held=!1),this.frame.addEventListener("focusin",()=>this.held=!0),this.frame.addEventListener("focusout",()=>this.held=!1),this.startTimer()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),e!==i&&this.isConnected&&(t==="interval"||t==="layout")&&this.startTimer()}contentChanged(){this.index=0}startTimer(){clearInterval(this.timer);let t=l(this.getAttribute("interval"),{min:I,max:3600,fallback:0});!t||!this.canPlay||this.layout!=="carousel"||(this.timer=setInterval(()=>{if(!this.playing||this.held||document.hidden)return;let e=this.items.length;e>1&&this.go(1,e)},t*1e3))}get layout(){return p(this.getAttribute("layout"),q,"grid")}go(t,e){this.index=(this.index+t+e)%e,this.render()}renderContent(t){let e=T(this.text??""),i=a("div",{class:"body data-body testimonials-body",part:"body"});e.ok?e.items.length?this.renderItems(i,e.items):i.append(a("p",{class:"data-none",text:this.t("testimonialsEmpty")})):i.append(this.dataNotice(e)),this.frameWith(t,i,this.panelId,{file:"testimonials.json"})}renderItems(t,e){let i=L(e);i&&i.count>1&&this.flag("summary")&&t.append(this.summaryView(i)),this.layout==="carousel"?t.append(this.carousel(e)):t.append(a("ul",{class:`testimonials-list ${this.layout}`},...e.map(s=>a("li",{},this.itemView(s)))))}summaryView({rating:t,count:e}){let i=this.oneDecimal(t);return a("p",{class:"testimonials-summary",part:"summary"},this.stars(t),a("span",{text:this.t("testimonialsSummary",{rating:i,count:e})}))}oneDecimal(t){try{return new Intl.NumberFormat(this.locale,{maximumFractionDigits:1}).format(t)}catch{return t.toFixed(1)}}stars(t){let e=a("span",{class:"testimonials-fill",text:"\u2605\u2605\u2605\u2605\u2605"});return e.style.setProperty("--_value",`${t/5*100}%`),a("span",{class:"testimonials-stars",part:"rating",attrs:{role:"img","aria-label":this.t("testimonialsRating",{rating:this.oneDecimal(t)})}},a("span",{class:"testimonials-empty",text:"\u2605\u2605\u2605\u2605\u2605"}),e)}itemView(t){let e=this.t;return a("figure",{class:"testimonials-item",part:"item"},t.rating!==null?this.stars(t.rating):null,a("blockquote",{class:"testimonials-quote",part:"quote",text:t.quote}),a("figcaption",{class:"testimonials-author",part:"author"},t.author||t.avatar?this.avatarView(t):null,a("span",{class:"testimonials-who"},t.author?a("strong",{text:t.author}):null,t.role?a("span",{text:t.role}):null,t.date!==null?a("time",{text:this.formatDate(t.date,{dateStyle:"medium"}),attrs:{datetime:new Date(t.date).toISOString()}}):null,t.url?a("a",{text:e("testimonialsSource"),attrs:{href:t.url,rel:"noopener noreferrer"}}):null)))}avatarView(t){let e=()=>a("span",{class:"testimonials-avatar",part:"avatar",text:x(t.author),attrs:{"aria-hidden":"true"}});if(!t.avatar)return e();let i=a("img",{class:"testimonials-avatar",part:"avatar",attrs:{src:t.avatar,alt:"",loading:"lazy",decoding:"async",referrerpolicy:"no-referrer"},on:{error:()=>i.replaceWith(e())}});return i}carousel(t){let e=this.t,i=t.length,s=Math.min(this.index,i-1),r=this.canPlay&&i>1;return a("section",{class:"testimonials-carousel",attrs:{"aria-roledescription":"carousel","aria-label":e("testimonialsCarousel")}},a("div",{class:"testimonials-slide",attrs:{"aria-live":r&&this.playing?"off":"polite"}},this.itemView(t[s])),i>1?a("div",{class:"testimonials-controls",part:"controls"},m({icon:"chevron-left",label:e("testimonialsPrevious"),key:"previous",onClick:()=>this.go(-1,i)}),a("span",{class:"testimonials-position",text:e("testimonialsPosition",{n:s+1,total:i})}),m({icon:"chevron-right",label:e("testimonialsNext"),key:"next",onClick:()=>this.go(1,i)}),r?a("button",{class:"text-btn",text:e(this.playing?"testimonialsPause":"testimonialsPlay"),attrs:{type:"button","data-focus-key":"play"},on:{click:()=>{this.playing=!this.playing,this.render()}}}):null):null)}};export{z as a};
//# sourceMappingURL=chunk-4MWZX25V.js.map
