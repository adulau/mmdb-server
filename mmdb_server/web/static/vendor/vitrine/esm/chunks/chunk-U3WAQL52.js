/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as D}from"./chunk-PVVRLBB4.js";import{a as I}from"./chunk-YCSGENO5.js";import{r as j}from"./chunk-3VQOL2NW.js";import{R as O,S as L,U as w,X as F,b as $,d as M,e as S,l as h,n as z}from"./chunk-DNNVKOIB.js";import{f as N,h as y,k as v,l as x,q as A}from"./chunk-2IDMCIF6.js";var V=`/*
 * Charts: a legend of toggle buttons above the plot (drawn by Apache ECharts in the theme
 * colors), and the data table view.
 */
.vt {
  --_chart-1: var(--vt-chart-1, var(--_accent));
  --_chart-2: var(--vt-chart-2, var(--_info));
  --_chart-3: var(--vt-chart-3, var(--_warning));
  --_chart-4: var(--vt-chart-4, var(--_syntax-keyword));
  --_chart-5: var(--vt-chart-5, var(--_danger));
  --_chart-6: var(--vt-chart-6, var(--_syntax-string));
  --_chart-7: var(--vt-chart-7, var(--_syntax-number));
  --_chart-8: var(--vt-chart-8, var(--_fg-muted));
}

.chart-body {
  padding: var(--_space-3) var(--_space-3) var(--_space-2);
  background: var(--_surface);
}

.plot {
  position: relative;
  width: 100%;
  min-height: 120px;
  border-radius: var(--_radius-sm);
}

.plot:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.plot > .loading {
  height: 100%;
}

/* ---------- Legend ---------- */

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 var(--_space-1) var(--_space-3);
}

.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-small) / 1 var(--_font-ui);
  cursor: pointer;
  transition:
    opacity var(--_duration-fast) var(--_easing),
    border-color var(--_duration-fast) var(--_easing);
}

.legend-item:hover {
  border-color: var(--_border-strong);
}

.legend-item[aria-pressed='false'] {
  opacity: 0.45;
}

.legend-item[aria-pressed='false'] .swatch {
  background: transparent;
  box-shadow: inset 0 0 0 2px var(--_c);
}

.swatch {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: var(--_c);
}

.s-0 {
  --_c: var(--_chart-1);
}
.s-1 {
  --_c: var(--_chart-2);
}
.s-2 {
  --_c: var(--_chart-3);
}
.s-3 {
  --_c: var(--_chart-4);
}
.s-4 {
  --_c: var(--_chart-5);
}
.s-5 {
  --_c: var(--_chart-6);
}
.s-6 {
  --_c: var(--_chart-7);
}
.s-7 {
  --_c: var(--_chart-8);
}

/* ---------- Table view ---------- */

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--_font-size-ui);
  font-variant-numeric: tabular-nums;
}

.data-table th,
.data-table td {
  padding: 7px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: right;
  white-space: nowrap;
}

.data-table th:first-child {
  text-align: left;
}

.data-table thead th {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.data-table tbody th {
  font-weight: 500;
}

/* ---------- Edit mode ---------- */

.chart-edit > .editor-body {
  max-height: min(36vh, 300px);
  border-bottom: 1px solid var(--_border);
}
`;var _=null;function R(){if(_)return _;let o=y().vendorUrl||N(),t={ready:!1,echarts:null,promise:Promise.resolve()};return t.promise=import(new URL("echarts.js",o||location.href).href).then(e=>(t.echarts=e.echarts,t.ready=!0,e.echarts),e=>{throw _=null,e}),_=t,t}var g=5e3,U=12,p=class extends Error{};function C(o){if(typeof o=="number")return Number.isFinite(o)?o:null;if(typeof o!="string")return null;let t=o.trim().replace(/[\s,_](?=\d{3}\b)/g,"").replace(/%$/,"");if(!t||!/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(t))return null;let e=Number(t);return Number.isFinite(e)?e:null}function Y(o){return o?.trim()?o.split(/[\s,]+/).map(t=>t.trim()).filter(Boolean):null}function B(o,t,e){let a=t.length>g,s=a?t.slice(0,g):t,r=e.x?o.indexOf(e.x):-1;if(e.x&&r<0)throw new p(`No column named "${e.x}".`);let l=Y(e.y??null),n;if(l)n=l.map(c=>{let i=o.indexOf(c);if(i<0)throw new p(`No column named "${c}".`);return i});else{let c=o.map((i,m)=>{let u=s.map(f=>f[m]).filter(f=>f!==""&&f!=null);return u.length>0&&u.filter(f=>C(f)!==null).length>=u.length*.8});r<0&&(r=c.findIndex(i=>!i)),r<0&&(r=0),n=o.map((i,m)=>m).filter(i=>i!==r&&c[i])}if(r<0&&(r=o.findIndex((c,i)=>!n.includes(i)),r<0&&(r=-1)),!n.length)throw new p("No numeric column to plot.");return{labels:s.map((c,i)=>String(c[r]??i+1)),series:n.slice(0,U).map(c=>({name:o[c]||`Series ${c+1}`,values:s.map(i=>C(i[c]))})),truncated:a}}function P(o){return Array.isArray(o)?o.slice(0,g).map(t=>C(t)):[]}function W(o,t={}){let e=o.trim();if(!e)return{labels:[],series:[],truncated:!1};if(/^[[{]/.test(e)){let s;try{s=JSON.parse(e)}catch(r){throw new p(r instanceof Error?r.message:"Invalid JSON.")}if(Array.isArray(s)&&s.every(r=>typeof r!="object"||r===null)){let r=P(s);return{labels:r.map((l,n)=>String(n+1)),series:[{name:"Value",values:r}],truncated:s.length>g}}if(Array.isArray(s)){let r=s.filter(n=>n&&typeof n=="object"&&!Array.isArray(n)),l=[...new Set(r.flatMap(n=>Object.keys(n)))];return B(l,r.map(n=>l.map(c=>n[c])),t)}if(s&&typeof s=="object"){let r=Array.isArray(s.labels)?s.labels.slice(0,g).map(String):[],l=Array.isArray(s.datasets)?s.datasets:Array.isArray(s.series)?s.series:null;if(!l)throw new p('Expected "labels" with "series" or "datasets".');let n=l.slice(0,U).map((i,m)=>({name:String(i?.name??i?.label??`Series ${m+1}`),values:P(Array.isArray(i)?i:i?.data)})),c=Math.max(r.length,...n.map(i=>i.values.length));for(;r.length<c;)r.push(String(r.length+1));return{labels:r,series:n,truncated:c>g}}throw new p("Unsupported JSON shape.")}let{rows:a}=D(e);if(a.length<2)throw new p("Expected a header row and at least one data row.");return B(a[0].map(s=>s.trim()),a.slice(1),t)}function H(o){let t=s=>/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s,e=["label",...o.series.map(s=>s.name)].map(t).join(","),a=o.labels.map((s,r)=>[t(s),...o.series.map(l=>l.values[r]===null||l.values[r]===void 0?"":String(l.values[r]))].join(","));return[e,...a].join(`
`)}var Z=["line","area","bar","pie"],Q=["chart","table"],k=8,G=class extends F{static type="chart";static componentAttributes=Object.freeze(["type","stacked","smooth","horizontal","zoom","x","y","height","legend","grid","points","unit","compact","min","max","tabs","view"]);static presets={simple:{grid:!0},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,tabs:!0,grid:!0}};static styles=[$,I,V];constructor(){super(),this.parsed=null,this.hiddenSeries=new Set,this.viewState=null,this.panelId=z("panel"),this.plot=null,this.instance=null,this.resize=null,this.active=-1,this.animateIn=!0,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){this.dispose(),clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}dispose(){this.resize?.disconnect(),this.resize=null,this.instance?.dispose(),this.instance=null}contentChanged(){this.parsed=null,this.hiddenSeries.clear(),this.animateIn=!0}attributeChangedCallback(t,e,a){(t==="x"||t==="y")&&(this.parsed=null),t==="view"&&(this.viewState=null),super.attributeChangedCallback(t,e,a)}parse(){let t=this.text??"",e=this.getAttribute("x"),a=this.getAttribute("y"),s=`${e}\0${a}\0${t}`;if(this.parsed?.key!==s)try{this.parsed={key:s,data:W(t,{x:e,y:a}),error:null}}catch(r){this.parsed={key:s,data:null,error:r instanceof Error?r:new p(String(r))}}return this.parsed}set data(t){super.data=t}get data(){let t=this.parse().data;return t?{labels:[...t.labels],series:t.series.map(e=>({name:e.name,values:[...e.values]})),truncated:t.truncated}:{labels:[],series:[],truncated:!1}}get chartType(){return S(this.getAttribute("type"),Z,"line")}get view(){return this.viewState??S(this.getAttribute("view"),Q,"chart")}format(t){if(t==null||Number.isNaN(t))return"\u2013";let e=this.feature("compact"),a=new Intl.NumberFormat(this.locale,{notation:e?"compact":"standard",maximumFractionDigits:e?1:2}).format(t),s=(this.getAttribute("unit")??"").slice(0,12);return s?`${a}${/^[%‰]$/.test(s)?"":"\u202F"}${s}`:a}renderContent(t){let e=this.t,{data:a,error:s}=this.parse(),r=h("div",{class:"panel",attrs:{id:this.panelId}}),l=[];this.dispose(),this.plot=null;let n;if(s?n=h("div",{class:"body chart-body",part:"body"},w(e("chartError",{message:s.message}))):!a||!a.labels.length?n=h("div",{class:"body chart-body",part:"body"},h("div",{class:"empty",part:"empty",text:e("empty")})):this.view==="table"&&!this.editing?n=h("div",{class:"body chart-body",part:"body"},this.table(a)):n=h("div",{class:"body chart-body",part:"body"},...this.chart(a)),this.editing){let u=this.createEditor();r.classList.add("chart-edit"),r.append(h("div",{class:"body editor-body",part:"body source"},u.element),n),l=this.historyButtons(u)}else r.append(n);a?.truncated&&r.prepend(w(e("chartTruncated")));let c=this.feature("tabs")&&!this.editing&&a&&!s?O({tabs:[{id:"chart",label:e("chartView"),icon:"chart"},{id:"table",label:e("table"),icon:"table"}],selected:this.view,label:e("tabs"),panelId:this.panelId,onSelect:u=>{this.viewState=u,this.animateIn=u==="chart",this.render(),x(this,v.TAB_CHANGE,{tab:u})}}):null;c&&r.setAttribute("role","tabpanel");let i=()=>a?H(a):this.text??"",m=[...l,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(i,this.downloadName("chart.csv"),"text/csv"):null,this.feature("copy")?this.copyButton(i,e("copyData")):null];t.append(...this.chrome({badge:c?"":e("chartView"),tabs:c,actions:m}),r),this.editor?.align(),this.plot&&this.draw()}chart(t){let e=this.t,a=M(this.getAttribute("height"),{min:120,max:800,fallback:300}),r=!(this.chartType==="pie")&&J(this,"legend",t.series.length>1),l=[];if(r){let n=h("div",{class:"legend",part:"legend",attrs:{role:"group","aria-label":e("legend")}});t.series.forEach((c,i)=>{n.append(h("button",{class:`legend-item s-${i%k}`,part:"legend-item",attrs:{type:"button","aria-pressed":String(!this.hiddenSeries.has(i)),"data-focus-key":`series-${i}`,title:e("seriesToggle",{name:c.name})},on:{click:()=>this.toggleSeries(i)}},h("span",{class:"swatch",attrs:{"aria-hidden":"true"}}),c.name))}),l.push(n)}return this.plot=h("div",{class:"plot",part:"plot",attrs:{tabindex:"0",role:"img","aria-roledescription":e("chartView"),"aria-label":this.summary(t)},on:{keydown:n=>this.onKeyDown(n),blur:()=>this.hideTip()}}),this.plot.style.height=`${a}px`,l.push(this.plot),l}toggleSeries(t){let e=this.parse().data;if(!e)return;this.hiddenSeries.has(t)?this.hiddenSeries.delete(t):this.hiddenSeries.size<e.series.length-1&&this.hiddenSeries.add(t),this.root.querySelector(`[data-focus-key="series-${t}"]`)?.setAttribute("aria-pressed",String(!this.hiddenSeries.has(t))),this.instance&&this.instance.setOption(this.option(e),{notMerge:!0})}summary(t){let e=this.t,a=t.series.map(s=>{let r=s.values.filter(l=>l!==null);return e("chartRange",{name:s.name,min:this.format(r.length?Math.min(...r):null),max:this.format(r.length?Math.max(...r):null)})});return`${this.heading?`${this.heading}. `:""}${e("chartSummary",{type:e(`chart_${this.chartType}`),series:A(t.series.length,this.locale),points:A(t.labels.length,this.locale)})} ${a.join("; ")}.`}draw(){let t=this.plot;if(!t)return;let e=R();if(!e.ready){t.replaceChildren(L(this.t)),e.promise.then(()=>{this.plot===t&&this.draw()},r=>{this.plot===t&&t.replaceChildren(w(this.t("chartLoadFailed",{message:String(r?.message??r)})))});return}let a=this.parse().data;if(!a)return;t.replaceChildren();let s=e.echarts;this.instance=s.init(t,null,{renderer:"canvas",locale:this.locale.startsWith("fr")?"FR":"EN"}),this.instance.setOption(this.option(a)),this.animateIn=!1,this.instance.on("click",r=>{this.active=r.dataIndex??-1,this.select()}),this.resize=new ResizeObserver(()=>this.instance?.resize()),this.resize.observe(t)}palette(){let t=h("span",{attrs:{"aria-hidden":"true"}});t.style.display="none",this.frame.append(t);let e=r=>(t.style.color=`var(${r})`,getComputedStyle(t).color),s={series:Array.from({length:k},(r,l)=>e(`--_chart-${l+1}`)),fg:e("--_fg"),muted:e("--_fg-muted"),border:e("--_border"),surface:e("--_surface-raised"),font:getComputedStyle(this.frame).fontFamily,mono:getComputedStyle(t).getPropertyValue("--_font-mono")||"monospace"};return t.remove(),s}option(t){let e=this.chartType,a=this.palette(),s=matchMedia("(prefers-reduced-motion: reduce)").matches,r=t.series.map((d,b)=>!this.hiddenSeries.has(b)),l=t.series.map((d,b)=>({series:d,index:b})).filter(({index:d})=>r[d]),n={renderMode:"richText",confine:!0,backgroundColor:a.surface,borderColor:a.border,borderWidth:1,padding:[8,10],textStyle:{color:a.fg,fontFamily:a.font,fontSize:12},valueFormatter:d=>this.format(d)},c={animation:!s,animationDuration:this.animateIn?900:400,animationEasing:"cubicOut",animationDurationUpdate:450,textStyle:{fontFamily:a.font,color:a.muted},aria:{enabled:!0,label:{description:this.summary(t)}}};if(e==="pie"){let d=l[0]?.series??t.series[0];return{...c,color:a.series,tooltip:{...n,trigger:"item"},series:[{name:d.name,type:"pie",radius:["46%","74%"],center:["50%","52%"],avoidLabelOverlap:!0,itemStyle:{borderColor:a.surface,borderWidth:2,borderRadius:4},label:{color:a.fg,formatter:"{b}"},labelLine:{lineStyle:{color:a.border}},emphasis:{scaleSize:6},data:t.labels.map((b,X)=>({name:b,value:d.values[X]??0}))}]}}let i=e==="bar"&&this.feature("horizontal"),m=this.feature("stacked")&&e!=="line",u=J(this,"points",t.labels.length<=60),f=this.feature("zoom"),E={type:"category",data:t.labels,boundaryGap:e==="bar",axisLine:{lineStyle:{color:a.border}},axisTick:{show:!1},axisLabel:{color:a.muted,hideOverlap:!0}},T={type:"value",min:K(this,"min")??void 0,max:K(this,"max")??void 0,scale:e==="line",splitLine:{show:this.feature("grid"),lineStyle:{color:a.border,type:"dashed"}},axisLabel:{color:a.muted,formatter:d=>this.format(d)}};return{...c,color:l.map(({index:d})=>a.series[d%k]),grid:{left:12,right:20,top:20,bottom:f?52:12,containLabel:!0},tooltip:{...n,trigger:"axis",axisPointer:{type:e==="bar"?"shadow":"line",lineStyle:{color:a.muted,type:"dashed"},shadowStyle:{color:"rgba(127, 127, 127, 0.08)"}}},xAxis:i?T:E,yAxis:i?{...E,inverse:!0}:T,dataZoom:f?[{type:"inside",[i?"yAxisIndex":"xAxisIndex"]:0},{type:"slider",height:18,bottom:10,borderColor:a.border,fillerColor:"rgba(20, 184, 166, 0.12)",handleStyle:{color:a.series[0]},textStyle:{color:a.muted},dataBackground:{lineStyle:{color:a.border},areaStyle:{color:a.border}}}]:[],series:l.map(({series:d})=>({name:d.name,type:e==="bar"?"bar":"line",data:d.values.map(b=>b===null?"-":b),stack:m?"total":void 0,smooth:e!=="bar"&&this.feature("smooth")?.35:!1,showSymbol:u,symbolSize:6,connectNulls:!1,lineStyle:{width:2.2},areaStyle:e==="area"?{opacity:m?.55:.16}:void 0,barMaxWidth:38,itemStyle:e==="bar"?{borderRadius:i?[0,4,4,0]:[4,4,0,0]}:void 0,emphasis:{focus:"series"},universalTransition:!0}))}}onKeyDown(t){let e=this.parse().data,a=e?.labels.length??0;if(!e||!a||!this.instance)return;let s=this.active,r=null;if(t.key==="ArrowRight"||t.key==="ArrowDown")r=Math.min(a-1,s+1);else if(t.key==="ArrowLeft"||t.key==="ArrowUp")r=Math.max(0,s-1);else if(t.key==="Home")r=0;else if(t.key==="End")r=a-1;else if(t.key==="Escape"){this.hideTip();return}else if((t.key==="Enter"||t.key===" ")&&s>=0){t.preventDefault(),this.select();return}r!==null&&(t.preventDefault(),this.active=r,this.instance.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:r}),this.announce(`${e.labels[r]}: ${e.series.filter((l,n)=>!this.hiddenSeries.has(n)).map(l=>`${l.name} ${this.format(l.values[r]??null)}`).join(", ")}`))}hideTip(){this.active=-1,this.instance?.dispatchAction({type:"hideTip"})}select(){let t=this.parse().data;!t||this.active<0||x(this,v.SELECT,{index:this.active,label:t.labels[this.active],values:Object.fromEntries(t.series.map(e=>[e.name,e.values[this.active]??null]))})}table(t){return h("table",{class:"data-table",part:"table",attrs:{"aria-label":this.heading||this.t("chartView")}},h("thead",{},h("tr",{},h("th",{attrs:{scope:"col"},text:this.getAttribute("x")||""}),...t.series.map(e=>h("th",{attrs:{scope:"col"},text:e.name})))),h("tbody",{},...t.labels.map((e,a)=>h("tr",{},h("th",{attrs:{scope:"row"},text:e}),...t.series.map(s=>h("td",{text:this.format(s.values[a]??null)}))))))}createEditor(){return this.editor?.destroy(),this.editor=new j({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":"plaintext",lineNumbers:!1,wrap:!1,highlightLimit:y().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>x(this,v.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null;let t=this.parse().data;t&&this.instance?this.instance.setOption(this.option(t),{notMerge:!0}):this.render()},250)}};function J(o,t,e){return o.getAttribute(t)===null?e:o.feature(t)}function K(o,t){let e=o.getAttribute(t);if(e===null||e.trim()==="")return null;let a=Number(e);return Number.isFinite(a)?a:null}export{G as a};
//# sourceMappingURL=chunk-U3WAQL52.js.map
