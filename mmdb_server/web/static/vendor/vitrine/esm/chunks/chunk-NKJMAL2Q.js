/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as q}from"./chunk-YCSGENO5.js";import{r as Z}from"./chunk-3VQOL2NW.js";import{J as F,K,M as S,N as X,Q as J,U as Q,X as Y,b as z,l as d,n as U,o as W}from"./chunk-DNNVKOIB.js";import{h as G,k as C,l as A,m as V,q as M}from"./chunk-2IDMCIF6.js";var tt=Object.freeze({gitInvalid:"This history could not be read: {message}",gitCount:"{count} commits",gitHistory:"Commit history",gitNoMatch:"No commit to show.",gitBranches:"Branches",gitAllBranches:"All branches",gitDetails:"Commit details",gitCloseDetails:"Close details",gitCommit:"Commit",gitCopyHash:"Copy hash",gitParents:"Parents",gitAuthor:"Author",gitDate:"Date",gitRefs:"Refs",gitPage:"Page",gitOpenPage:"Open the commit"}),et={gitInvalid:"Impossible de lire cet historique : {message}",gitCount:"{count} commits",gitHistory:"Historique des commits",gitNoMatch:"Aucun commit \xE0 afficher.",gitBranches:"Branches",gitAllBranches:"Toutes les branches",gitDetails:"D\xE9tails du commit",gitCloseDetails:"Fermer les d\xE9tails",gitCommit:"Commit",gitCopyHash:"Copier le hash",gitParents:"Parents",gitAuthor:"Auteur",gitDate:"Date",gitRefs:"R\xE9f\xE9rences",gitPage:"Page",gitOpenPage:"Ouvrir le commit"};var rt=`/*
 * Commit graph: branch buttons, one row per commit with its lanes, hash, labels, subject,
 * author and date, and the details panel of the selected commit.
 */
.vt {
  --_git-1: var(--vt-git-1, var(--vt-chart-1, var(--_accent)));
  --_git-2: var(--vt-git-2, var(--vt-chart-2, var(--_info)));
  --_git-3: var(--vt-git-3, var(--vt-chart-3, var(--_warning)));
  --_git-4: var(--vt-git-4, var(--vt-chart-4, var(--_syntax-keyword)));
  --_git-5: var(--vt-git-5, var(--vt-chart-5, var(--_danger)));
  --_git-6: var(--vt-git-6, var(--vt-chart-6, var(--_syntax-string)));
  --_git-7: var(--vt-git-7, var(--vt-chart-7, var(--_syntax-number)));
  --_git-8: var(--vt-git-8, var(--vt-chart-8, var(--_fg-muted)));
  /* Kept in sync with LANE and ROW in vt-git.js. */
  --_git-lane: 16px;
  --_git-row: 30px;
}

.git-body {
  background: var(--_surface);
  /* Without a height limit the page scrolls, not the graph. */
  overscroll-behavior: auto;
}

:host([max-height]) .git-body,
.vt[data-fullscreen] .git-body {
  overscroll-behavior: contain;
}

/* ---------- Branch buttons ---------- */

.branch-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: var(--_space-3) var(--_space-5);
  border-bottom: 1px solid var(--_border);
  background: var(--_surface);
}

.branch-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1 var(--_font-mono);
  cursor: pointer;
  transition: border-color var(--_duration-fast) var(--_easing);
}

.branch-chip:hover {
  border-color: var(--_border-strong);
}

.branch-chip[aria-pressed='true'] {
  border-color: color-mix(in srgb, var(--_accent) 50%, var(--_border));
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-weight: 600;
}

.chip-count {
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1 var(--_font-mono);
}

/* ---------- Rows ---------- */

.git-list {
  padding: var(--_space-1) 0;
}

.git-chunk[data-pending] {
  block-size: calc(var(--_rows) * var(--_git-row));
}

.git-row {
  display: grid;
  grid-template-columns:
    calc(var(--_lanes) * var(--_git-lane)) max-content minmax(0, 1fr)
    auto auto;
  gap: var(--_space-3);
  align-items: center;
  height: var(--_git-row);
  padding: 0 var(--_space-4) 0 var(--_space-3);
  color: var(--_fg);
  font: var(--_font-size-ui) / 1.2 var(--_font-ui);
  cursor: pointer;
}

.git-row:hover {
  background: var(--_surface-sunken);
}

.git-row:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.git-row.selected {
  background: var(--_accent-soft);
}

.git-row.match .git-subject {
  background: var(--_highlight);
}

.git-row.current {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.git-lanes {
  display: block;
  overflow: visible;
}

.lane {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
}

.dot {
  stroke: var(--_surface);
  stroke-width: 2;
}

.git-row.merge .dot {
  fill: var(--_surface);
  stroke-width: 2.5;
}

.dot.head {
  stroke-width: 2.5;
}

.lane-0 {
  stroke: var(--_git-1);
  fill: var(--_git-1);
}
.lane-1 {
  stroke: var(--_git-2);
  fill: var(--_git-2);
}
.lane-2 {
  stroke: var(--_git-3);
  fill: var(--_git-3);
}
.lane-3 {
  stroke: var(--_git-4);
  fill: var(--_git-4);
}
.lane-4 {
  stroke: var(--_git-5);
  fill: var(--_git-5);
}
.lane-5 {
  stroke: var(--_git-6);
  fill: var(--_git-6);
}
.lane-6 {
  stroke: var(--_git-7);
  fill: var(--_git-7);
}
.lane-7 {
  stroke: var(--_git-8);
  fill: var(--_git-8);
}

path.lane {
  fill: none;
}

.dot:not(.head) {
  stroke: var(--_surface);
}

.git-row.merge .dot.lane-0 {
  stroke: var(--_git-1);
}
.git-row.merge .dot.lane-1 {
  stroke: var(--_git-2);
}
.git-row.merge .dot.lane-2 {
  stroke: var(--_git-3);
}
.git-row.merge .dot.lane-3 {
  stroke: var(--_git-4);
}
.git-row.merge .dot.lane-4 {
  stroke: var(--_git-5);
}
.git-row.merge .dot.lane-5 {
  stroke: var(--_git-6);
}
.git-row.merge .dot.lane-6 {
  stroke: var(--_git-7);
}
.git-row.merge .dot.lane-7 {
  stroke: var(--_git-8);
}

.dot.head {
  stroke: var(--_fg);
}

.git-hash {
  color: var(--_fg-muted);
  font: var(--_font-size-small) / 1 var(--_font-mono);
}

.git-message {
  display: flex;
  gap: 6px;
  align-items: center;
  min-width: 0;
  overflow: hidden;
}

.git-subject {
  overflow: hidden;
  border-radius: var(--_radius-sm);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.git-author,
.git-date {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.git-date {
  font-family: var(--_font-mono);
}

/* ---------- Branch and tag labels ---------- */

.git-ref {
  flex: none;
  padding: 2px 6px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: 600 var(--_font-size-small) / 1.2 var(--_font-mono);
  white-space: nowrap;
}

.git-ref.ref-head {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.git-ref.ref-remote {
  border-style: dashed;
  color: var(--_fg-muted);
  font-weight: 500;
}

.git-ref.ref-tag {
  border-color: color-mix(in srgb, var(--_warning) 45%, var(--_border));
  background: color-mix(in srgb, var(--_warning) 10%, var(--_surface));
}

/* ---------- Details ---------- */

.git-details {
  margin: var(--_space-2) var(--_space-4) var(--_space-4);
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_surface-sunken);
}

.git-details-head {
  display: flex;
  gap: var(--_space-2);
  align-items: flex-start;
  justify-content: space-between;
}

.git-details h3 {
  margin: 0;
  color: var(--_fg);
  font: 600 var(--_font-size) / 1.4 var(--_font-ui);
}

.git-facts {
  display: grid;
  gap: var(--_space-1);
  margin: var(--_space-2) 0 0;
  font-size: var(--_font-size-ui);
}

.git-facts > div {
  display: grid;
  grid-template-columns: 7em minmax(0, 1fr);
  gap: var(--_space-2);
  align-items: center;
}

.git-facts dt {
  color: var(--_fg-muted);
}

.git-facts dd {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  min-width: 0;
  margin: 0;
  color: var(--_fg);
}

.git-facts code {
  overflow-wrap: anywhere;
  font: var(--_font-size-small) / 1.4 var(--_font-mono);
}

.git-parent {
  padding: 2px 6px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_accent-fg);
  font: var(--_font-size-small) / 1.2 var(--_font-mono);
  cursor: pointer;
}

.git-parent:hover {
  border-color: var(--_accent);
}

.git-body-text {
  margin: var(--_space-3) 0 0;
  color: var(--_fg);
  font: var(--_font-size-small) / 1.5 var(--_font-mono);
  white-space: pre-wrap;
}

.git-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .git-row {
    grid-template-columns: calc(var(--_lanes) * var(--_git-lane)) max-content minmax(0, 1fr);
  }

  .git-author,
  .git-date {
    display: none;
  }
}
`;var N=2e4,_=class extends Error{constructor(t){super(t),this.name="GitError"}},pt=/^[0-9a-f]{4,64}$/i,nt=/^[0-9a-f]{4,64}\|/i,O=/^[*|/\\_ .\-o]*/,st=/^[|/\\_ ]*/,mt=/^commit ([0-9a-f]{4,64})((?: [0-9a-f]{4,64})*)\s*(?:\((.*)\))?\s*$/i;function at(e){let t=e.trim();if(!t)return[];if(/^[[{]/.test(t))return j(kt(t));let r=t.split(`
`,1)[0].replace(O,"");return nt.test(r)?j(Ct(t)):j(Ht(t))}var m=e=>typeof e=="object"&&e!==null&&!Array.isArray(e);function p(e,t=1e4){return typeof e=="number"&&Number.isFinite(e)?String(e):typeof e=="string"?e.slice(0,t):""}function ot(e){let t=p(e,2e3).trim();return t&&/^https?:\/\//i.test(t)&&W(t)?t:null}function L(e){if(!m(e))return p(e,64).trim();let t=m(e.commit)?e.commit:m(e.target)?e.target:e;return p(t.sha??t.oid??t.hash??t.id,64).trim()}function $(e){return Array.isArray(e)?e:m(e)?Array.isArray(e.nodes)?e.nodes:Array.isArray(e.edges)?e.edges.map(t=>m(t)?t.node:null):null:null}function vt(e){if(!m(e))return!1;let t=e.hash??e.sha??e.oid??e.id;return typeof t=="string"&&t.trim()!==""&&("parents"in e||"parent_ids"in e||"message"in e||"commit"in e||"subject"in e||"messageHeadline"in e)}function bt(e){if(Array.isArray(e))return e;let t=[e];for(let r=0;r<8&&t.length;r+=1){let s=[];for(let n of t){let i=$(n);if(i&&(i.length===0||vt(i[0])))return i;if(m(n))for(let a of Object.values(n).slice(0,50))s.push(a)}t=s.slice(0,500)}return null}function ct(e){return e.replace(/\s*<[^>]*>\s*$/,"").trim()}function wt(e){let t=m(e.commit)?e.commit.author:null,r=e.author;return ct(p(t?.name)||p(e.author_name)||(m(r)?p(r.name??r.raw??r.user?.display_name??r.login??r.user?.login):p(r))).slice(0,200)}function _t(e){let t=m(e.commit)?e.commit:null;return p(e.date??t?.author?.date??t?.committer?.date??e.committedDate??e.authoredDate??e.committed_date??e.authored_date??(m(e.author)?e.author.date:void 0),100)}function yt(e){let t=p(e.hash??e.sha??e.oid??e.id,64).trim();if(!t)return null;let r=$(e.parents)??$(e.parent_ids)??(typeof e.parents=="string"?e.parents.split(/[\s,]+/):[]),s=p(e.message??(m(e.commit)?e.commit.message:void 0)),n=_t(e);return{hash:t,parents:r.slice(0,64).map(L).filter(Boolean),author:wt(e),date:n,time:R(n),subject:p(e.subject??e.title??e.messageHeadline??s.split(`
`)[0],1e3),body:p(e.body??e.messageBody??s.split(`
`).slice(1).join(`
`)).trim(),refs:Array.isArray(e.refs)?k(e.refs.map(i=>p(i,200)).join(", ")):k(p(e.refs,2e3)),url:ot(e.url_html??e.html_url??e.web_url??e.url??e.links?.html?.href)}}function it(e,t,r){let s=[],n=$(e);return n?s=n.filter(m).map(i=>[p(i.name??i.ref,200).replace(/^refs\/(?:heads|tags)\//,""),L(i)]):m(e)&&(s=Object.entries(e).map(([i,a])=>[i.slice(0,200),L(a)])),s.filter(([i,a])=>i&&a).slice(0,500).map(([i,a])=>({hash:a,ref:{name:i,type:t,head:t==="branch"&&i===r}}))}function xt(e,t){let r=p(t.head??t.default_branch??t.defaultBranch,200),s=[...it(t.branches,"branch",r),...it(t.tags,"tag",r)];for(let{hash:n,ref:i}of s){let a=H(e,n);a&&!a.refs.some(c=>c.name===i.name&&c.type===i.type)&&a.refs.push(i)}}function kt(e){let t;try{t=JSON.parse(e)}catch(i){throw new _(i instanceof Error?i.message:String(i))}let r=bt(t);if(!r)throw new _("expected an array of commits");let s=[],n=new Set;for(let i of r.slice(0,N)){let a=m(i)?yt(i):null;!a||n.has(a.hash)||(n.add(a.hash),s.push(a))}return m(t)&&xt(s,t),s}function Ct(e){let t=[];for(let r of e.split(`
`)){let s=r.replace(O,"").trim();if(!nt.test(s))continue;let[n,i="",a="",c="",o="",...l]=s.split("|");if(t.push({hash:n,parents:i.split(/\s+/).filter(Boolean),author:a.trim(),date:c.trim(),time:R(c.trim()),subject:l.join("|").trim(),body:"",refs:k(o),url:null}),t.length>=N)break}return t}function At(e,t){let r=new Map,s=(n,i)=>{let a=t.get(n);if(!a?.size)return;let c=r.get(i)??new Set;for(let o of a)c.add(o);r.set(i,c)};for(let n=0;n<e.length;n+=1){let i=e[n];i==="|"?s(n,n):i==="/"||i==="_"?s(n+1,n-1):i==="\\"&&s(n-1,n+1)}return r}function $t(e,t){let r=/^(Merge|Author|AuthorDate|Date|Commit|CommitDate):\s*(.*)$/.exec(t);if(r&&!e.message){let[,n,i]=r;n==="Merge"?e.merge=i.split(/\s+/).filter(Boolean):n==="Author"?e.author=ct(i).slice(0,200):(n==="Date"||n==="AuthorDate")&&!e.date&&(e.date=i.trim(),e.time=R(e.date));return}let s=t.trim();e.subject?e.body.length<1e4&&(e.body=e.body?`${e.body}
${s}`:s):s&&(e.subject=s.slice(0,1e3))}function Ht(e){let t=/^[*|/\\_ ]*commit [0-9a-f]{4,64}/im.test(e),r=[],s=new Map,n={waiting:new Map,column:new Map,distance:new Map},i=!1;for(let a of e.split(`
`)){let c=a.replace(/\s+$/,"");if(t&&r.length&&!c.replace(st,"")&&(r[r.length-1].message=!0),!c.trim())continue;let o=c.match(t?/^[*|/\\_ ]*/:O)[0],l=o.search(/[*o]/);/[*|/\\_]/.test(o)&&(i=!0);let h=At(o,n.waiting),f=c.slice(o.length),u=l>=0||/^commit /.test(c),v=t?u?Mt(f):null:l>=0||!i?St(f):null;if(!v){t&&r.length&&$t(r[r.length-1],c.replace(st,"")),n.waiting=h;continue}if(s.has(v.hash)){n.waiting=h;continue}if(Et(v,l,i,n,h,s,r),r.push(v),s.set(v.hash,v),n.waiting=h,r.length>=N)break}if(!r.length)throw new _("no commit found");return Dt(r,i,n),r.map(({merge:a,given:c,message:o,...l})=>({...l,body:l.body.trim()}))}function Et(e,t,r,s,n,i,a){let c=t>=0?t:0;if(r){for(let l of s.waiting.get(c)??[]){let h=i.get(l);h&&!h.given&&h.parents.push(e.hash),s.distance.set(`${l} ${e.hash}`,Math.abs(c-(s.column.get(l)??c)))}s.column.set(e.hash,c),n.set(c,new Set([e.hash]));return}let o=a[a.length-1];o&&!o.given&&o.parents.push(e.hash)}function Dt(e,t,r){for(let s of e){if(!t&&!s.given&&s.merge?.length&&(s.parents=s.merge.map(i=>H(e,i)?.hash??i)),s.parents.length<2||s.given)continue;let n=i=>r.distance.get(`${s.hash} ${i}`)??0;s.parents.sort((i,a)=>n(i)-n(a))}}function Mt(e){let t=mt.exec(e.trim());if(!t)return null;let r=t[2].trim().split(/\s+/).filter(Boolean);return{hash:t[1],parents:r,given:r.length>0,author:"",date:"",time:null,subject:"",body:"",refs:k(t[3]??""),url:null}}function St(e){let t=/^([0-9a-f]{4,64})\s*(?:\(([^)]*)\))?\s*(.*)$/i.exec(e.trim());return!t||!pt.test(t[1])?null:{hash:t[1],parents:[],author:"",date:"",time:null,subject:t[3],body:"",refs:k(t[2]??""),url:null}}function k(e){let t=e.split(",").map(n=>n.trim()).filter(Boolean),r=new Set(["origin","upstream"]);for(let n of t){let i=/^(?:refs\/remotes\/)?([^/\s]+)\/HEAD$/.exec(n);i&&r.add(i[1])}let s=[];for(let n of t)if(n.startsWith("tag:"))s.push({name:n.slice(4).trim(),type:"tag",head:!1});else if(n.startsWith("HEAD -> "))s.push({name:n.slice(8).trim(),type:"branch",head:!0});else if(n==="HEAD")s.push({name:"HEAD",type:"head",head:!0});else{if(/\/HEAD$/.test(n))continue;{let i=n.replace(/^refs\/(?:heads|remotes)\//,""),a=n.startsWith("refs/remotes/")||r.has(i.split("/")[0]);s.push({name:i,type:a&&i.includes("/")?"remote":"branch",head:!1})}}return s}function R(e){let t=e.trim();if(!t)return null;if(/^\d{9,13}$/.test(t))return Number(t)*(t.length<=10?1e3:1);let r=/^\w{3} (\w{3}) (\d{1,2}) (\d{2}:\d{2}:\d{2}) (\d{4}) ([+-]\d{4})$/.exec(t);if(r){let[,n,i,a,c,o]=r,l=Date.parse(`${i} ${n} ${c} ${a} GMT${o}`);return Number.isNaN(l)?null:l}let s=Date.parse(t);return Number.isNaN(s)?null:s}function j(e){let t=new Map(e.map((o,l)=>[o.hash,l]));if(e.every((o,l)=>o.parents.every(h=>(t.get(h)??1/0)>l)))return e;let s=e.map(()=>0);for(let o of e)for(let l of new Set(o.parents)){let h=t.get(l);h!==void 0&&h!==t.get(o.hash)&&(s[h]+=1)}let n=(o,l)=>(e[l].time??-1/0)-(e[o].time??-1/0)||o-l,i=new B(n);e.forEach((o,l)=>s[l]===0&&i.push(l));let a=[],c=new Set;for(;i.size;){let o=i.pop();c.add(o),a.push(e[o]);for(let l of new Set(e[o].parents)){let h=t.get(l);h===void 0||h===o||c.has(h)||(s[h]-=1,s[h]===0&&i.push(h))}}return a.length<e.length&&e.forEach((o,l)=>!c.has(l)&&a.push(o)),a}var B=class{constructor(t){this.compare=t,this.items=[]}get size(){return this.items.length}push(t){let r=this.items;r.push(t);for(let s=r.length-1;s>0;){let n=s-1>>1;if(this.compare(r[s],r[n])>=0)break;[r[s],r[n]]=[r[n],r[s]],s=n}}pop(){let t=this.items,r=t[0],s=t.pop();if(t.length&&s!==void 0){t[0]=s;for(let n=0;;){let[i,a]=[n*2+1,n*2+2],c=n;if(i<t.length&&this.compare(t[i],t[c])<0&&(c=i),a<t.length&&this.compare(t[a],t[c])<0&&(c=a),c===n)break;[t[n],t[c]]=[t[c],t[n]],n=c}}return r}};function lt(e){let t=new Set(e.map(o=>o.hash)),r=[],s=[],n=0,i=0,a=[],c=()=>{let o=r.indexOf(null);return o===-1?r.length:o};for(let o of e){let l=r.indexOf(o.hash),h=l===-1;h&&(l=c(),r[l]=o.hash,s[l]=n++);let f=s.slice(),u=[],v=[];r.forEach((g,w)=>{g!==null&&(g===o.hash?u.push(w):v.push(w))});for(let g of u)g!==l&&(r[g]=null);let y=o.parents.filter(g=>t.has(g)),x=[];if(y.length){r[l]=y[0],x.push(l);for(let g of y.slice(1)){let w=r.indexOf(g);w===-1&&(w=c(),r[w]=g,s[w]=n++),x.includes(w)||x.push(w)}}else r[l]=null;for(;r.length&&r[r.length-1]===null;)r.pop();i=Math.max(i,l+1,...x.map(g=>g+1),...v.map(g=>g+1)),a.push({col:l,passes:v,into:h?u.filter(g=>g!==l):u,out:x,top:f,bottom:s.slice()})}return{rows:a,width:i}}function T(e,t){let r=new Map(e.map(i=>[i.hash,i])),s=new Set,n=[t];for(;n.length;){let i=n.pop();if(s.has(i))continue;let a=r.get(i);a&&(s.add(i),n.push(...a.parents))}return s}function I(e){let t=[];for(let r of e)for(let s of r.refs)s.type!=="head"&&t.push({ref:s,hash:r.hash});return t}function H(e,t){let r=t.toLowerCase();return e.find(s=>s.hash.toLowerCase()===r)??(r.length>=4?e.find(s=>s.hash.toLowerCase().startsWith(r)||r.startsWith(s.hash.toLowerCase())):void 0)}function ht(e,t){return e.url?e.url:!t||!t.includes("{hash}")?null:ot(t.replace(/\{hash\}/g,encodeURIComponent(e.hash)))}V({en:tt,fr:et});var jt="http://www.w3.org/2000/svg",E=16,b=30,D=100,Lt=24,dt=8,ft=class extends Y{static type="git";static componentAttributes=Object.freeze(["branch-filter","branch","author","date","date-format","hash-length","selected","commit-url"]);static presets={simple:{author:!0,date:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,author:!0,date:!0,"branch-filter":!0}};static styles=[z,q,rt];constructor(){super(),this.parsed=null,this.branchChoice=null,this.selectedHash=null,this.selectionRead=!1,this.active=0,this.query="",this.found=[],this.listId=U("git"),this.listHost=null,this.detailsHost=null,this.chunks=[],this.view=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.view=null}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,commits:at(t),error:null}}catch(r){this.parsed={text:t,commits:[],error:r instanceof Error?r:new _(String(r))}}return this.view=null,this.parsed}get commits(){return structuredClone(this.parse().commits)}get branch(){return this.branchChoice??this.getAttribute("branch")??""}shown(){let{commits:t}=this.parse(),r=this.branch;if(this.view&&this.view.branch===r)return this.view;let s=r?I(t).find(a=>a.ref.name===r):void 0,n=s?T(t,s.hash):null,i=n?t.filter(a=>n.has(a.hash)):t;return this.view={branch:r,commits:i,layout:lt(i)},this.view}get hashLength(){let t=Number(this.getAttribute("hash-length"));return Number.isInteger(t)&&t>=4&&t<=64?t:7}matchesQuery(t){if(!this.query)return!1;let r=this.query.toLowerCase();return t.hash.toLowerCase().startsWith(r)||[t.subject,t.author,t.body,...t.refs.map(s=>s.name)].some(s=>s.toLowerCase().includes(r))}renderContent(t){let r=this.t,{commits:s,error:n}=this.parse();if(!this.selectionRead){this.selectionRead=!0;let u=this.getAttribute("selected");u&&(this.selectedHash=H(s,u)?.hash??null)}let i=d("div",{class:"panel"}),a=d("div",{class:"body git-body",part:"body"});n?a.append(Q(r("gitInvalid",{message:n.message}))):s.length?(this.listHost=d("div",{class:"git-list",part:"graph",attrs:{id:this.listId,role:"listbox","aria-label":this.heading||r("gitHistory")},on:{keydown:u=>this.onKey(u)}}),this.detailsHost=d("div",{class:"git-details-host"}),a.append(this.listHost,this.detailsHost),this.renderList()):a.append(d("div",{class:"empty",part:"empty",text:r("empty")}));let c=[];if(this.editing){let u=this.createEditor();i.classList.add("git-edit"),i.append(d("div",{class:"body editor-body",part:"body source"},u.element),a),c=this.historyButtons(u)}else i.append(a);let o={run:u=>(this.query=u.slice(0,X).trim(),this.renderList(),{total:this.found.length,capped:this.found.length>=S}),go:u=>{for(let y of this.listHost?.querySelectorAll(".git-row.current")??[])y.classList.remove("current");let v=this.row(this.found[u]);v?.classList.add("current"),v?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.renderList()}},l=/^\s*[[{]/.test(this.text??""),h=[this.searchButton(o),...c,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(l?"git-log.json":"git-log.txt"),l?"application/json":"text/plain"):null,this.feature("copy")?this.copyButton(()=>this.text??"",r("copy")):null],f=s.length?r("gitCount",{count:M(s.length,this.locale)}):"";if(t.append(...this.chrome({badge:f,actions:h}),i),this.feature("branch-filter")&&s.length&&!n){let u=this.branchBar(s);u&&i.prepend(u)}this.editor?.align()}branchBar(t){let r=I(t).filter(a=>a.ref.type!=="tag");if(!r.length)return null;let s=d("div",{class:"branch-bar",attrs:{role:"group","aria-label":this.t("gitBranches")}}),n=this.branch,i=(a,c,o)=>d("button",{class:`branch-chip${c?` ref-${c.type}`:""}`,part:"branch-filter",attrs:{type:"button","aria-pressed":String(n===a),"data-focus-key":`branch-${a}`},on:{click:()=>{this.branchChoice=a,this.active=0,this.render(),A(this,C.FILTER_CHANGE,{branch:a,shown:this.shown().commits.length})}}},a||this.t("gitAllBranches"),d("span",{class:"chip-count",text:M(o,this.locale)}));s.append(i("",null,t.length));for(let{ref:a,hash:c}of r.slice(0,Lt))s.append(i(a.name,a,T(t,c).size));return s}renderList(){let t=this.listHost;if(!t)return;let{commits:r,layout:s}=this.shown();if(this.found=[],r.forEach((a,c)=>{this.found.length<S&&this.matchesQuery(a)&&this.found.push(c)}),!r.length){t.replaceChildren(d("div",{class:"empty",part:"empty",text:this.t("gitNoMatch")})),this.renderDetails();return}let n=r.findIndex(a=>a.hash===this.selectedHash);n>=0&&(this.active=n),this.active=Math.min(this.active,r.length-1),t.style.setProperty("--_lanes",String(Math.max(1,s.width)));let i=new Set(this.found);this.chunks=[];for(let a=0;a<r.length;a+=D){let c=Math.min(r.length,a+D),o=d("div",{class:"git-chunk",attrs:{"data-pending":"","data-first":String(a),role:"presentation"}});o.style.setProperty("--_rows",String(c-a));let l=()=>{o.removeAttribute("data-pending"),o.style.removeProperty("--_rows");for(let h=a;h<c;h+=1)o.append(this.rowElement(r[h],h,s,i.has(h)))};this.chunks.push(o),a===0||this.active>=a&&this.active<c?l():F(o,l)}t.replaceChildren(...this.chunks),this.renderDetails()}row(t){if(t===void 0||t<0)return null;let r=this.chunks[Math.floor(t/D)];return r?(K(r),r.children[t%D]??null):null}rowElement(t,r,s,n){let i=t.hash===this.selectedHash,a=["git-row"];i&&a.push("selected"),n&&a.push("match"),t.parents.length>1&&a.push("merge");let c=d("div",{class:a.join(" "),part:i?"commit commit-selected":"commit",attrs:{id:`${this.listId}-${r}`,role:"option",tabindex:r===this.active?"0":"-1","aria-selected":String(i),"data-index":String(r),"data-focus-key":`commit-${t.hash}`},on:{click:o=>{o.target instanceof Element&&o.target.closest("button")||this.select(r,!0)}}},Bt(s,r,t.refs.some(o=>o.head)),d("span",{class:"git-hash",part:"hash",text:t.hash.slice(0,this.hashLength)}),d("span",{class:"git-message"},...t.refs.map(o=>ut(o)),d("span",{class:"git-subject",part:"subject",text:t.subject})));return this.feature("author")&&t.author&&c.append(d("span",{class:"git-author",text:t.author})),this.feature("date")&&t.date&&c.append(this.dateElement(t,"git-date")),c}dateElement(t,r){if(t.time===null)return d("span",{class:r,text:t.date});let s=new Date(t.time),n=new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"short"}).format(s),i=this.getAttribute("date-format")!=="absolute";return d("time",{class:r,attrs:{datetime:s.toISOString(),title:i?n:null},text:i?Nt(t.time,this.locale):n})}renderDetails(){let t=this.detailsHost;if(!t)return;let r=this.shown().commits.find(o=>o.hash===this.selectedHash);if(!r){t.replaceChildren();return}let s=this.t,n=d("dl",{class:"git-facts"}),i=(o,...l)=>n.append(d("div",{},d("dt",{text:o}),d("dd",{},...l)));i(s("gitCommit"),d("code",{text:r.hash}),this.copyButton(()=>r.hash,s("gitCopyHash"),"copy-hash")),r.parents.length&&i(s("gitParents"),...r.parents.map(o=>d("button",{class:"git-parent",attrs:{type:"button","data-focus-key":`parent-${o}`},text:o.slice(0,this.hashLength),on:{click:()=>this.jump(o)}}))),r.author&&i(s("gitAuthor"),r.author),r.date&&i(s("gitDate"),this.dateElement(r,"git-full-date")),r.refs.length&&i(s("gitRefs"),...r.refs.map(o=>ut(o)));let a=ht(r,this.getAttribute("commit-url"));a&&i(s("gitPage"),d("a",{text:s("gitOpenPage"),attrs:{href:a,rel:"noopener noreferrer"}}));let c=d("section",{class:"git-details",part:"details",attrs:{"aria-label":s("gitDetails")}},d("div",{class:"git-details-head"},d("h3",{text:r.subject||r.hash}),J({icon:"close",label:s("gitCloseDetails"),key:"close-details",onClick:()=>{this.selectedHash=null,this.renderList(),this.row(this.active)?.focus()}})),n);r.body&&c.append(d("pre",{class:"git-body-text",text:r.body})),t.replaceChildren(c)}select(t,r){let s=this.shown().commits[t];s&&(this.selectedHash=s.hash,this.active=t,this.renderList(),r&&this.row(t)?.focus(),A(this,C.SELECT,{commit:structuredClone(s)}))}jump(t){let r=this.shown().commits.findIndex(s=>s.hash===t);r===-1&&this.branch&&(this.branchChoice="",this.render(),r=this.shown().commits.findIndex(s=>s.hash===t)),r!==-1&&(this.select(r,!0),this.row(r)?.scrollIntoView({block:"nearest"}))}onKey(t){let r=t.target instanceof HTMLElement?t.target.closest(".git-row"):null;if(!r||t.target!==r)return;let s=Number(r.getAttribute("data-index")),n=this.shown().commits.length,i=Math.max(1,Math.floor((this.listHost?.clientHeight||b*10)/b)-1),a={ArrowDown:s+1,ArrowUp:s-1,PageDown:s+i,PageUp:s-i,Home:0,End:n-1};t.key in a?(t.preventDefault(),this.moveTo(Math.max(0,Math.min(n-1,a[t.key])))):(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.select(s,!0))}moveTo(t){let r=this.row(this.active),s=this.row(t);s&&(r?.setAttribute("tabindex","-1"),s.setAttribute("tabindex","0"),this.active=t,s.focus(),s.scrollIntoView({block:"nearest"}))}createEditor(){this.editor?.destroy();let t=/^\s*[[{]/.test(this.text??"");return this.editor=new Z({text:this.text??"",language:t?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:G().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:r=>this.edited(r),onChange:r=>A(this,C.CHANGE,{value:r}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.view=null,this.render()},400)}};function ut(e){let t=e.head?"head":e.type;return d("span",{class:`git-ref ref-${t}`,part:`ref ref-${t}`,text:e.type==="tag"?e.name:e.head&&e.type==="branch"?`HEAD \u2192 ${e.name}`:e.name})}function P(e,t){let r=document.createElementNS(jt,e);for(let[s,n]of Object.entries(t))r.setAttribute(s,String(n));return r}function Bt(e,t,r){let{rows:s,width:n}=e,i=s[t],a=b/2,c=f=>E/2+f*E,o=P("svg",{class:"git-lanes",width:Math.max(1,n)*E,height:b,viewBox:`0 0 ${Math.max(1,n)*E} ${b}`,"aria-hidden":"true",focusable:"false",part:"lanes"}),l=(f,u)=>o.append(P("path",{d:f,class:`lane lane-${(u??0)%dt}`}));for(let f of i.passes)l(`M${c(f)} 0V${b}`,i.top[f]);for(let f of i.into)l(f===i.col?`M${c(f)} 0V${a}`:`M${c(f)} 0C${c(f)} ${a*.9} ${c(i.col)} ${a*.4} ${c(i.col)} ${a}`,i.top[f]);for(let f of i.out)l(f===i.col?`M${c(f)} ${a}V${b}`:`M${c(i.col)} ${a}C${c(i.col)} ${b-a*.4} ${c(f)} ${b-a*.9} ${c(f)} ${b}`,i.bottom[f]);let h=(i.bottom[i.col]??i.top[i.col]??0)%dt;return o.append(P("circle",{cx:c(i.col),cy:a,r:r?5:4,class:`dot lane-${h}${r?" head":""}`})),o}function Nt(e,t){let r=(e-Date.now())/1e3,s=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]],n=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(let[i,a]of s)if(Math.abs(r)>=a)return n.format(Math.round(r/a),i);return n.format(Math.round(r),"second")}export{ft as a};
//# sourceMappingURL=chunk-NKJMAL2Q.js.map
