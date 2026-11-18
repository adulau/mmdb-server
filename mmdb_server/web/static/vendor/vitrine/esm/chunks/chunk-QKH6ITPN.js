/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as v}from"./chunk-3FW46UG7.js";import{a as b}from"./chunk-YY743YSD.js";import{a as m}from"./chunk-YCSGENO5.js";import{C as w,I as x,b as q,l as a,n as d,x as c}from"./chunk-DNNVKOIB.js";import{k as p,l as u,m as y}from"./chunk-2IDMCIF6.js";var k=`/*
 * Questions and answers: an accordion with hairlines between the questions.
 */
.faq-list {
  min-width: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.faq-item + .faq-item {
  border-top: 1px solid var(--_border);
}

.faq-heading {
  margin: 0;
  font: inherit;
}

.faq-question {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--_space-3);
  width: 100%;
  min-height: 44px;
  padding: var(--_space-3);
  border: 0;
  background: transparent;
  color: var(--_fg);
  font: 600 14px / 1.45 var(--_font-ui);
  text-align: left;
  overflow-wrap: anywhere;
  cursor: pointer;
}

.faq-question:hover {
  background: var(--_accent-soft);
}

.faq-question:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.faq-question .icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  color: var(--_fg-muted);
}

.faq-answer {
  padding: 0 var(--_space-3) var(--_space-3);
  color: var(--_fg);
  font: 400 14px / 1.55 var(--_font-ui);
}

.faq-text {
  margin: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

/* The answer reads as part of the item, not as a second frame. */
.faq-answer vt-markdown::part(container) {
  border: 0;
  background: transparent;
}

.faq-answer vt-markdown::part(body) {
  padding: 0;
  background: transparent;
}
`;function E(n){return n.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,80)}function f(n){let e=w(n,["items","faq","faqs","questions"]);if(!e.ok)return e;let t=new Set,r=[];for(let s of e.items){let o=c(s,["question","q","title"],500);if(!o)continue;let i=E(c(s,["id"],80)||o)||`question-${r.length+1}`,l=i;for(let g=2;t.has(l);g+=1)l=`${i}-${g}`;t.add(l),r.push({id:l,question:o,answer:c(s,["answer","a","text","content"],2e4),category:c(s,["category","group","topic"],100)})}return{ok:!0,items:r}}function h(n,e,t){let r=e.toLowerCase().split(/\s+/).filter(Boolean);return n.filter(s=>{if(t!==null&&s.category!==t)return!1;let o=`${s.question}
${s.answer}`.toLowerCase();return r.every(i=>o.includes(i))})}function C(n){return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:n.map(e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}))}}var A=Object.freeze({faqSearch:"Search the questions",faqCategories:"Categories",faqAll:"All",faqNone:"No question matches your search.",faqCount:"{count} questions",faqExpandAll:"Open all",faqCollapseAll:"Close all"}),S=Object.freeze({faqSearch:"Rechercher dans les questions",faqCategories:"Cat\xE9gories",faqAll:"Toutes",faqNone:"Aucune question ne correspond \xE0 votre recherche.",faqCount:"{count} questions",faqExpandAll:"Tout ouvrir",faqCollapseAll:"Tout fermer"});y({en:A,fr:S});var $=6,_=class extends b{static type="faq";static componentAttributes=Object.freeze(["filter","categories","single","open","markdown","links"]);static presets={simple:{markdown:!0},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,markdown:!0}};static styles=[q,m,v,k];constructor(){super(),this.panelId=d("panel"),this.idPrefix=d("faq"),this.opened=null,this.query="",this.category=null}get items(){let e=f(this.text??"");return e.ok?e.items:[]}get structuredData(){return C(this.items)}connectedCallback(){super.connectedCallback();let e=()=>{this.flag("links")&&this.openFromAddress(this.items)&&this.render()};window.addEventListener("hashchange",e),this._cleanups.push(()=>window.removeEventListener("hashchange",e))}contentChanged(){this.opened=null}openFromAddress(e){let t=N(location.hash);return!t||!e.some(r=>r.id===t)?!1:(this.opened??=new Set,this.hasAttribute("single")&&this.opened.clear(),this.opened.add(t),this.category=null,this.query="",!0)}firstOpened(e){let t=this.getAttribute("open")?.trim()??"";return t==="all"?new Set(e.map(r=>r.id)):t==="first"?new Set(e.slice(0,1).map(r=>r.id)):new Set(t.split(/\s+/).filter(Boolean))}renderContent(e){let t=f(this.text??""),r=a("div",{class:"body data-body faq-body",part:"body"});t.ok?this.renderItems(r,t.items):r.append(this.dataNotice(t)),this.frameWith(e,r,this.panelId,{file:"faq.json"})}renderItems(e,t){let r=this.t;this.opened===null&&(this.opened=this.firstOpened(t),this.flag("links")&&this.openFromAddress(t));let s=[...new Set(t.map(l=>l.category).filter(Boolean))];(this.hasAttribute("filter")?this.flag("filter"):t.length>=$)&&e.append(this.filterField()),s.length>1&&this.flag("categories")&&e.append(this.categoryChips(s));let i=h(t,this.query,this.category);i.length?e.append(a("div",{class:"faq-list"},...i.map(l=>this.itemView(l)))):t.length&&e.append(a("p",{class:"data-none",text:r("faqNone")}))}filterField(){let e=this.t;return a("input",{class:"data-input",part:"filter",attrs:{type:"search",value:this.query,placeholder:e("faqSearch"),"aria-label":e("faqSearch"),"data-focus-key":"filter"},on:{input:t=>{this.query=t.target.value.slice(0,200),this.render();let r=h(this.items,this.query,this.category).length;this.announce(r?e("faqCount",{count:r}):e("faqNone")),u(this,p.SEARCH,{query:this.query,matches:r})}}})}categoryChips(e){let t=this.t,r=[[t("faqAll"),null],...e.map(s=>[s,s])];return a("div",{class:"data-chips",attrs:{role:"group","aria-label":t("faqCategories")}},...r.map(([s,o],i)=>a("button",{class:"data-chip",part:"category",text:s,attrs:{type:"button","aria-pressed":String(this.category===o),"data-focus-key":`category-${i}`},on:{click:()=>{this.category=o,this.render()}}})))}itemView(e){let t=this.opened?.has(e.id)??!1,r=`${this.idPrefix}-${e.id}`;return a("div",{class:`faq-item${t?" open":""}`,part:"item",attrs:{"data-id":e.id}},a("h3",{class:"faq-heading"},a("button",{class:"faq-question",part:"question",attrs:{type:"button","aria-expanded":String(t),"aria-controls":t?r:null,"data-focus-key":`question-${e.id}`},on:{click:()=>this.toggle(e.id)}},a("span",{text:e.question}),x(t?"chevron-up":"chevron-down"))),t?a("div",{class:"faq-answer",part:"answer",attrs:{id:r}},this.answerView(e.answer)):null)}answerView(e){if(this.feature("markdown")&&customElements.get("vt-markdown")){let t=document.createElement("vt-markdown");return t.setAttribute("images","block"),t.setAttribute("theme",this.frame.dataset.theme??"auto"),t.setAttribute("lang-ui",this.locale),t.content=e,t}return a("p",{class:"faq-text",text:e})}toggle(e){this.opened??=new Set;let t=!this.opened.has(e);this.hasAttribute("single")&&this.flag("single")&&this.opened.clear(),t?this.opened.add(e):this.opened.delete(e),this.render(),u(this,p.TOGGLE,{id:e,expanded:t})}};function N(n){try{return decodeURIComponent(n.slice(1)).slice(0,100)}catch{return""}}export{_ as a};
//# sourceMappingURL=chunk-QKH6ITPN.js.map
