/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as N}from"./chunk-3FW46UG7.js";import{a as S}from"./chunk-YY743YSD.js";import{a as x}from"./chunk-YCSGENO5.js";import{C as I,Q as d,b,d as k,e as f,l as s,n as _,p as y,v as E,w as C,x as O,y as A,z as v}from"./chunk-DNNVKOIB.js";import{k as u,l as m,m as L}from"./chunk-2IDMCIF6.js";var z=`/*
 * Gallery: a grid of thumbnails and a viewer. The viewer is a modal dialog, so the browser keeps
 * the focus inside it and Escape closes it.
 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(var(--_columns, auto-fill), minmax(min(100%, 160px), 1fr));
  gap: var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.gallery-item {
  display: grid;
  gap: var(--_space-1);
  align-content: start;
  min-width: 0;
}

.gallery-open {
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  cursor: zoom-in;
}

.gallery-open.static {
  cursor: default;
}

.gallery-open:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.gallery-open img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.aspect-square img {
  aspect-ratio: 1;
}

.aspect-photo img {
  aspect-ratio: 4 / 3;
}

.aspect-wide img {
  aspect-ratio: 16 / 9;
}

.gallery-open img.failed {
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.4 var(--_font-ui);
}

.gallery-caption {
  margin: 0;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.45 var(--_font-ui);
  overflow-wrap: anywhere;
}

/* ---------- Viewer ---------- */

.gallery-viewer {
  width: min(96vw, 1200px);
  max-width: none;
  height: min(94vh, 900px);
  max-height: none;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  color: var(--_fg);
}

.gallery-viewer[open] {
  display: flex;
  flex-direction: column;
}

.gallery-viewer::backdrop {
  background: rgb(0 0 0 / 70%);
}

.gallery-stage {
  display: grid;
  flex: 1;
  place-items: center;
  min-height: 0;
  padding: var(--_space-2);
  background: var(--_surface-sunken);
}

.gallery-stage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery-stage img.failed {
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.gallery-bar {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-2) var(--_space-3);
  border-top: 1px solid var(--_border);
}

.gallery-position {
  flex: none;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1.3 var(--_font-ui);
}

.gallery-text {
  flex: 1;
  min-width: 0;
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
  overflow-wrap: anywhere;
}

.gallery-text p {
  margin: 0;
}

.gallery-text a {
  color: var(--_accent-fg);
}
`;var P=Object.freeze({galleryOpen:"Open image {n} of {total}: {name}",galleryImage:"Image {n}",galleryViewer:"Image viewer",galleryPrevious:"Previous image",galleryNext:"Next image",galleryClose:"Close",galleryPosition:"{n} of {total}",galleryEmpty:"No images to show.",galleryFailed:"This image could not be loaded.",galleryLink:"More about this image"}),V=Object.freeze({galleryOpen:"Ouvrir l'image {n} sur {total} : {name}",galleryImage:"Image {n}",galleryViewer:"Visionneuse d'images",galleryPrevious:"Image pr\xE9c\xE9dente",galleryNext:"Image suivante",galleryClose:"Fermer",galleryPosition:"{n} sur {total}",galleryEmpty:"Aucune image \xE0 afficher.",galleryFailed:"Cette image n'a pas pu \xEAtre charg\xE9e.",galleryLink:"En savoir plus sur cette image"});L({en:P,fr:V});var G=["square","wide","photo","natural"],q=["allow","same-origin"];function T(h,t="allow"){let r=h;try{let e=JSON.parse(h),l=Array.isArray(e)?e:E(e)?e.images??e.items:null;Array.isArray(l)&&(r=JSON.stringify(l.map(o=>typeof o=="string"?{src:o}:o)))}catch{}let a=I(r,["images","items","photos"]);if(!a.ok)return a;let i=[];for(let e of a.items){let l=v(e.src??e.url??e.image);if(!l||t==="same-origin"&&!y(l))continue;let o=v(e.thumb??e.thumbnail),n=Number(e.width),c=Number(e.height);i.push({src:l,thumb:o&&(t!=="same-origin"||y(o))?o:l,alt:O(e,["alt","title"],500),caption:C(e.caption??e.description,1e3),href:A(e.href??e.link),width:n>0&&n<1e5?n:null,height:c>0&&c<1e5?c:null})}return{ok:!0,images:i}}var j=class extends S{static type="gallery";static componentAttributes=Object.freeze(["columns","aspect","viewer","captions","images"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0}};static styles=[b,x,N,z];constructor(){super(),this.panelId=_("panel"),this.viewer=null,this.current=null}get policy(){return f(this.getAttribute("images"),q,"allow")}get images(){let t=T(this.text??"",this.policy);return t.ok?t.images:[]}contentChanged(){this.current=null}renderContent(t){let r=T(this.text??"",this.policy),a=s("div",{class:"body data-body gallery-body",part:"body"});r.ok?r.images.length?a.append(this.grid(r.images)):a.append(s("p",{class:"data-none",text:this.t("galleryEmpty")})):a.append(this.dataNotice(r)),this.frameWith(t,a,this.panelId,{file:"gallery.json"}),r.ok&&this.current!==null&&this.current<r.images.length&&this.openViewer(t,r.images)}grid(t){let r=k(this.getAttribute("columns"),{min:1,max:12,fallback:0}),a=f(this.getAttribute("aspect"),G,"photo"),i=s("ul",{class:`gallery-grid aspect-${a}`,part:"grid"},...t.map((e,l)=>this.item(e,l,t.length)));return r&&i.style.setProperty("--_columns",String(r)),i}item(t,r,a){let i=this.t,e=this.picture(t.thumb,t,"thumbnail"),l=t.alt||t.caption||i("galleryImage",{n:r+1}),o=this.flag("viewer")?s("button",{class:"gallery-open",attrs:{type:"button","aria-label":i("galleryOpen",{n:r+1,total:a,name:l}),"data-focus-key":`image-${r}`},on:{click:()=>this.show(r)}},e):s("div",{class:"gallery-open static"},e);return s("li",{class:"gallery-item",part:"item"},o,t.caption&&this.flag("captions")?s("p",{class:"gallery-caption",part:"caption",text:t.caption}):null)}picture(t,r,a){let i=s("img",{part:a,attrs:{src:t,alt:r.alt,loading:"lazy",decoding:"async",referrerpolicy:"no-referrer",width:r.width,height:r.height},on:{error:()=>{i.classList.add("failed"),i.setAttribute("alt",this.t("galleryFailed"))}}});return i}show(t){let r=this.images;if(!r[t])return;let a=this.current!==null;this.current=t,this.render();let i=r[t];m(this,u.SELECT,{index:t,src:i.src,alt:i.alt}),a||m(this,u.TOGGLE,{expanded:!0})}openViewer(t,r){let a=this.t,i=this.current,e=r[i],l=r.length,o=g=>this.show((i+g+l)%l),n=s("dialog",{class:"gallery-viewer",part:"viewer",attrs:{"aria-label":a("galleryViewer")},on:{keydown:g=>{let{key:p}=g;p==="ArrowLeft"?o(-1):p==="ArrowRight"?o(1):p==="Home"?this.show(0):p==="End"&&this.show(l-1)},click:g=>{g.target===n&&n.close()},close:()=>n===this.viewer&&this.closeViewer(i)}},s("div",{class:"gallery-stage"},this.picture(e.src,{...e,width:null,height:null},"image")),s("div",{class:"gallery-bar"},s("span",{class:"gallery-position",text:a("galleryPosition",{n:i+1,total:l}),attrs:{"aria-live":"polite"}}),s("div",{class:"gallery-text"},e.caption||e.alt?s("p",{text:e.caption||e.alt}):null,e.href?s("a",{text:a("galleryLink"),attrs:{href:e.href,rel:"noopener noreferrer"}}):null),l>1?d({icon:"chevron-left",label:a("galleryPrevious"),key:"viewer-previous",onClick:()=>o(-1)}):null,l>1?d({icon:"chevron-right",label:a("galleryNext"),key:"viewer-next",onClick:()=>o(1)}):null,d({icon:"close",label:a("galleryClose"),key:"viewer-close",onClick:()=>n.close()})));this.viewer=n,t.append(n);let c=this.root.activeElement;typeof n.showModal=="function"?n.showModal():n.setAttribute("open","");let w=c instanceof HTMLElement?c.dataset.focusKey:null;w?.startsWith("viewer-")&&n.querySelector(`[data-focus-key="${w}"]`)?.focus()}closeViewer(t){this.current!==null&&(this.current=null,this.viewer=null,this.render(),this.root.querySelector(`[data-focus-key="image-${t}"]`)?.focus(),m(this,u.TOGGLE,{expanded:!1}))}};export{j as a};
//# sourceMappingURL=chunk-QYD5QK77.js.map
