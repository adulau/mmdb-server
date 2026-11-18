/*! DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0) https://github.com/cure53/DOMPurify | Mermaid 12.3.0 (MIT) https://github.com/mermaid-js/mermaid | Mermaid parser 2.0.1 (MIT) https://github.com/mermaid-js/mermaid | D3 7.9.2 (ISC) https://github.com/d3/d3 | d3-sankey 0.12.3 (BSD-3-Clause) https://github.com/d3/d3-sankey | dagre-d3-es 7.0.14 (MIT) https://github.com/tbo47/dagre-es | Cytoscape.js 3.35.0 (MIT) https://github.com/cytoscape/cytoscape.js | cytoscape-fcose 2.2.0 (MIT) https://github.com/iVis-at-Bilkent/cytoscape.js-fcose | cytoscape-cose-bilkent 4.1.0 (MIT) https://github.com/cytoscape/cytoscape.js-cose-bilkent | layout-base 1.0.2 (MIT) https://github.com/iVis-at-Bilkent/layout-base | cose-base 1.0.3 (MIT) https://github.com/iVis-at-Bilkent/cose-base | KaTeX 0.18.10 (MIT) https://github.com/KaTeX/KaTeX | Lodash 4.18.1 (MIT) https://github.com/lodash/lodash | es-toolkit 1.53.2 (MIT) https://github.com/toss/es-toolkit | Chevrotain 13.2.0 (Apache-2.0) https://github.com/Chevrotain/chevrotain | Iconify utils 3.1.7 (MIT) https://github.com/iconify/iconify | venn.js 2.0.0 (MIT) https://github.com/upsetjs/venn.js | khroma 2.1.0 (MIT) https://github.com/fabiospampinato/khroma | Rough.js 4.6.6 (MIT) https://github.com/rough-stuff/rough | Stylis 4.4.0 (MIT) https://github.com/thysultan/stylis | Day.js 1.11.23 (MIT) https://github.com/iamkun/dayjs | sanitize-url 7.1.2 (MIT) https://github.com/braintree/sanitize-url | ts-dedent 2.3.0 (MIT) https://github.com/tamino-martinius/node-ts-dedent | Full texts: THIRD_PARTY_NOTICES.md */
import{a as ot}from"./chunk-QFIMXRG3.js";import{w as tt}from"./chunk-I5ROCNQ2.js";import{a as nt}from"./chunk-S3ZG7UQ6.js";import"./chunk-6DLXUVWS.js";import"./chunk-QSXZIGNV.js";import"./chunk-LOC2TY7W.js";import"./chunk-H6CVVJYQ.js";import"./chunk-3SN2W4MR.js";import"./chunk-YTW5G662.js";import"./chunk-ITJGVHTV.js";import"./chunk-QDDCYBUY.js";import"./chunk-AF62ZJLI.js";import"./chunk-OMEXLFXP.js";import"./chunk-ESXQQFDS.js";import"./chunk-UMGR4KWQ.js";import"./chunk-QAWAA3XT.js";import"./chunk-HQDG5JW7.js";import"./chunk-4FLNLDES.js";import"./chunk-LUTX6ESU.js";import{a as it}from"./chunk-USHCRUTH.js";import{o as at,p as rt}from"./chunk-PMKIDBMH.js";import{b as R,e as et}from"./chunk-GTVAMZHW.js";import{$ as Y,P as V,U as X,V as Z,W as j,X as q,Y as J,Z as K,_ as Q,r as U}from"./chunk-UWKO4ZAI.js";import{g as T}from"./chunk-X5IUKMEG.js";import{a as l}from"./chunk-U3NVMOHI.js";import"./chunk-XZ5BR2GN.js";var lt=U.pie,L={sections:new Map,showData:!1,config:lt},b=L.sections,O=L.showData,St=structuredClone(lt),xt=l(()=>structuredClone(St),"getConfig"),wt=l(()=>{b=new Map,O=L.showData,X()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);b.has(t)||(b.set(t,a),T.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),$t=l(()=>b,"getSections"),Dt=l(t=>{O=t},"setShowData"),yt=l(()=>O,"getShowData"),st={getConfig:xt,clear:wt,setDiagramTitle:K,getDiagramTitle:Q,setAccTitle:Z,getAccTitle:j,setAccDescription:q,getAccDescription:J,addSection:Ct,getSections:$t,setShowData:Dt,getShowData:yt},Tt=l((t,a)=>{ot(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),bt={parse:l(async t=>{let a=await nt("pie",t);T.debug(a),Tt(a,st)},"parse")},At=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=At,_t=l(t=>{let a=[...t.values()].reduce((n,m)=>n+m,0),W=[...t.entries()].map(([n,m])=>({label:n,value:m})).filter(n=>n.value/a*100>=1);return et().value(n=>n.value).sort(null)(W)},"createPieArcs"),zt=l((t,a,W,F)=>{T.debug(`rendering pie chart
`+t);let n=F.db,m=Y(),h=rt(n.getConfig(),m.pie),H=40,i=18,c=4,S=450,x=S,A=it(a),$=A.append("g");$.attr("transform","translate("+x/2+","+S/2+")");let{themeVariables:o}=m,[M]=at(o.pieOuterStrokeWidth);M??=2;let ct=h.legendPosition,P=h.textPosition,dt=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(x,S)/2-H,gt=R().innerRadius(dt*f).outerRadius(f),pt=R().innerRadius(f*P).outerRadius(f*P),w=$.append("g");w.append("circle").attr("cx",0).attr("cy",0).attr("r",f+M/2).attr("class","pieOuterCircle");let D=n.getSections(),ht=_t(D),ft=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12],k=0;D.forEach(e=>{k+=e});let G=ht.filter(e=>(e.data.value/k*100).toFixed(0)!=="0"),_=tt(ft).domain([...D.keys()]);w.selectAll("mySlices").data(G).enter().append("path").attr("d",gt).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),w.selectAll("mySlices").data(G).enter().append("text").text(e=>(e.data.value/k*100).toFixed(0)+"%").attr("transform",e=>"translate("+pt.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let ut=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(S-50)/2).attr("class","pieTitleText"),C=[...D.entries()].map(([e,r])=>({label:e,value:r})),u=$.selectAll(".legend").data(C).enter().append("g").attr("class","legend");u.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),u.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);let v=Math.max(...u.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),y=S,z=x+H,s=i+c,E=C.length*s;switch(ct){case"center":u.attr("transform",(e,r)=>{let d=s*C.length/2,g=-v/2-(i+c),p=r*s-d;return"translate("+g+","+p+")"});break;case"top":y+=E,u.attr("transform",(e,r)=>{let d=f,g=-v/2-(i+c),p=r*s-d;return`translate(${g}, ${p})`}),w.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,u.attr("transform",(e,r)=>{let d=-f-s,g=-v/2-(i+c),p=r*s-d;return"translate("+g+","+p+")"});break;case"left":z+=i+c+v,u.attr("transform",(e,r)=>{let d=s*C.length/2,g=-f-(i+c),p=r*s-d;return"translate("+g+","+p+")"}),w.attr("transform",()=>`translate(${v+i+c}, 0)`);break;default:z+=i+c+v,u.attr("transform",(e,r)=>{let d=s*C.length/2,g=12*i,p=r*s-d;return"translate("+g+","+p+")"});break}let B=ut.node()?.getBoundingClientRect().width??0,mt=x/2-B/2,vt=x/2+B/2,N=Math.min(0,mt),I=Math.max(z,vt)-N;A.attr("viewBox",`${N} 0 ${I} ${y}`),V(A,y,I,h.useMaxWidth)},"draw"),Et={draw:zt},Bt={parser:bt,db:st,renderer:Et,styles:kt};export{Bt as diagram};
