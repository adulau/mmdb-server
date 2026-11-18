/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as Y}from"./chunk-3FW46UG7.js";import{a as X}from"./chunk-YY743YSD.js";import{a as j}from"./chunk-YCSGENO5.js";import{B as L,D as H,I as E,Q as G,R as F,b as q,c as R,e as K,l as a,n as h,v as m,w as x,x as _,y as z}from"./chunk-DNNVKOIB.js";import{k as v,l as S,m as U}from"./chunk-2IDMCIF6.js";var W=`/*
 * Board: filters, then columns side by side that scroll on their own (or one under the other
 * in the list view and on narrow elements), cards that can be dragged, and the task dialog.
 */
.board-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.board-search {
  flex: 1 1 220px;
  width: auto;
}

.board-people {
  flex: 0 1 200px;
  width: auto;
}

.board-scroll {
  min-width: 0;
  overflow-x: auto;
}

.board-columns {
  display: grid;
  gap: var(--_space-3);
  align-items: start;
}

.board-columns.as-board {
  grid-template-columns: repeat(var(--_count), minmax(240px, 1fr));
}

.board-columns.as-list {
  grid-template-columns: minmax(0, 1fr);
}

@container (max-width: 560px) {
  .board-columns.as-board {
    grid-template-columns: minmax(0, 1fr);
  }
}

.board-column {
  display: flex;
  flex-direction: column;
  gap: var(--_space-2);
  min-width: 0;
  padding: var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.board-column.over {
  border-color: var(--_warning);
}

.board-column.collapsed {
  align-self: stretch;
}

.board-column-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2);
  padding: 2px 2px 0 var(--_space-1);
}

.board-column-title {
  display: flex;
  flex: 1;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--_space-2);
  min-width: 0;
  margin: 0;
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.board-count {
  flex: none;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1.4 var(--_font-ui);
  font-variant-numeric: tabular-nums;
}

.board-count.over {
  color: var(--_warning);
  font-weight: 700;
}

.board-list {
  display: grid;
  gap: var(--_space-2);
  min-height: 12px;
  max-height: var(--vt-board-height, 70vh);
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;
}

.as-list .board-list {
  max-height: none;
}

.board-empty {
  padding: 0 var(--_space-1);
}

/* ---------- Cards ---------- */

.board-card {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border);
  border-left: 3px solid var(--_tone, var(--_border));
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  user-select: none;
}

.as-list .board-card {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
}

.priority-low {
  --_tone: var(--_fg-muted);
}

.priority-medium {
  --_tone: var(--_info);
}

.priority-high {
  --_tone: var(--_warning);
}

.priority-urgent {
  --_tone: var(--_danger);
}

.board-card.grabbed {
  box-shadow: 0 0 0 2px var(--_accent);
}

.board-card-head {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-1);
  min-width: 0;
}

.board-handle {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 20px;
  height: 22px;
  margin-left: -6px;
  color: var(--_fg-muted);
  cursor: grab;
  touch-action: none;
}

.board-handle .icon {
  width: 14px;
  height: 14px;
}

.board-card-title {
  flex: 1;
  min-width: 0;
  margin: 0;
  font: 600 14px / 1.4 var(--_font-ui);
  overflow-wrap: anywhere;
}

.board-open {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--_fg);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

a.board-open {
  color: var(--_accent-fg);
}

span.board-open {
  cursor: default;
}

.board-open:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 4px;
  border-radius: 2px;
}

.board-text {
  margin: 0;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
  overflow-wrap: anywhere;
}

.board-labels {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.board-labels li {
  padding: 0 7px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.6 var(--_font-ui);
}

.board-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-3);
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.4 var(--_font-ui);
}

.board-priority {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--_fg);
  font-weight: 600;
}

.board-priority::before {
  width: 8px;
  height: 8px;
  border-radius: var(--_radius-full);
  background: var(--_tone, var(--_fg-muted));
  content: '';
}

.board-priority.low {
  --_tone: var(--_fg-muted);
}

.board-priority.medium {
  --_tone: var(--_info);
}

.board-priority.high {
  --_tone: var(--_warning);
}

.board-priority.urgent {
  --_tone: var(--_danger);
}

.board-due {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.board-due .icon {
  width: 13px;
  height: 13px;
}

.board-due.overdue {
  color: var(--_danger);
  font-weight: 600;
}

.board-avatar {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin-left: auto;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_fg);
  font: 600 10px / 1 var(--_font-ui);
}

.board-progress {
  display: block;
  height: 5px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_border);
}

.board-fill {
  display: block;
  width: var(--_value, 0);
  height: 100%;
  background: var(--_accent);
}

/* ---------- Dragging ---------- */

.board-dragging {
  cursor: grabbing;
}

.board-placeholder {
  border-style: dashed;
  opacity: 0.45;
}

.board-ghost {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  box-shadow: 0 12px 28px rgb(0 0 0 / 22%);
  opacity: 0.95;
  pointer-events: none;
  rotate: 1.5deg;
}

/* ---------- Adding ---------- */

.board-add {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
  min-height: 32px;
  padding: 0 var(--_space-2);
  border: 1px dashed var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-ui) / 1.4 var(--_font-ui);
  cursor: pointer;
}

.board-add:hover {
  border-color: var(--_accent);
  color: var(--_fg);
}

.board-add:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.board-add .icon {
  width: 15px;
  height: 15px;
}

/* ---------- Table ---------- */

.board-table-wrap {
  min-width: 0;
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.board-table-wrap:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.board-table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1.45 var(--_font-ui);
}

.board-table th,
.board-table td {
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: left;
  vertical-align: top;
}

.board-table tbody th {
  font-weight: 500;
}

.board-sort,
.board-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.board-link {
  color: var(--_accent-fg);
  font-weight: 500;
}

.board-sort .icon {
  width: 14px;
  height: 14px;
}

.board-sort:focus-visible,
.board-link:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

/* ---------- Dialog ---------- */

.board-dialog {
  width: min(94vw, 640px);
  max-height: 92vh;
  padding: 0;
  overflow: auto;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  color: var(--_fg);
}

.board-dialog::backdrop {
  background: rgb(0 0 0 / 55%);
}

.board-form {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4) var(--_space-5);
}

.board-form-title {
  margin: 0;
  font: 600 16px / 1.3 var(--_font-ui);
}

.board-form-row {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.board-form-row label {
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.board-form-hint {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.board-form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--_space-3);
}

.board-textarea {
  min-height: 90px;
  padding: var(--_space-2) var(--_space-3);
  resize: vertical;
}

.board-form-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  padding-top: var(--_space-2);
  border-top: 1px solid var(--_border);
}

.board-spacer {
  flex: 1;
}

.board-button {
  min-height: 36px;
  padding: 0 var(--_space-4);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
  cursor: pointer;
}

.board-button:hover {
  background: var(--_accent-soft);
}

.board-button:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.board-button.primary {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.board-button.danger {
  border-color: var(--_danger);
  color: var(--_danger);
}

.board-button.danger.confirm {
  background: var(--_danger);
  color: var(--_surface);
}

@media (pointer: coarse) {
  .board-handle {
    width: 36px;
    height: 36px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .board-ghost {
    rotate: none;
  }
}
`;var O=class{constructor(t,e,r){this.root=t,this.layer=e,this.callbacks=r,this.pending=null,this.dragging=!1,this.ghost=null,this.justDropped=!1,this.onMove=this.onMove.bind(this),this.onUp=this.onUp.bind(this),this.onKey=this.onKey.bind(this)}attach(t){t.addEventListener("pointerdown",e=>this.onDown(e)),t.addEventListener("click",e=>{this.justDropped&&(this.justDropped=!1,e.preventDefault(),e.stopPropagation())},!0)}onDown(t){if(t.button!==0||this.pending)return;let e=t.target,r=e.closest("[data-task]");if(!r)return;let i=e.closest(".board-handle");if(t.pointerType!=="mouse"&&!i||!i&&e.closest("input, textarea, select, a, .board-action"))return;let o=r.getBoundingClientRect();this.pending={id:r.dataset.task,card:r,x:t.clientX,y:t.clientY,dx:t.clientX-o.left,dy:t.clientY-o.top},window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),window.addEventListener("keydown",this.onKey,!0)}onMove(t){let e=this.pending;if(e){if(!this.dragging){if(Math.hypot(t.clientX-e.x,t.clientY-e.y)<5)return;this.begin(e)}t.preventDefault(),this.place(t.clientX,t.clientY),this.scroll(t.clientX,t.clientY)}}begin(t){this.dragging=!0;let e=t.card.getBoundingClientRect(),r=t.card.cloneNode(!0);r.classList.add("board-ghost"),r.removeAttribute("data-task"),r.setAttribute("aria-hidden","true"),r.style.setProperty("width",`${e.width}px`),this.ghost=r,this.layer.append(r),t.card.classList.add("board-placeholder"),this.layer.classList.add("board-dragging"),this.callbacks.start(t.id)}place(t,e){let r=this.pending;this.ghost?.style.setProperty("transform",`translate(${t-r.dx}px, ${e-r.dy}px)`);let o=this.root.elementFromPoint(t,e)?.closest("[data-list]");if(!o)return;let c=[...o.querySelectorAll("[data-task]")].filter(s=>s!==r.card).find(s=>{let n=s.getBoundingClientRect();return e<n.top+n.height/2});c?c.previousElementSibling!==r.card&&o.insertBefore(r.card,c):o.lastElementChild!==r.card&&o.append(r.card)}scroll(t,e){let r=this.root.querySelector(".board-scroll");if(r){let o=r.getBoundingClientRect();t<o.left+48?r.scrollLeft-=14:t>o.right-48&&(r.scrollLeft+=14)}let i=this.root.elementFromPoint(t,e)?.closest("[data-list]");if(i&&i.scrollHeight>i.clientHeight){let o=i.getBoundingClientRect();e<o.top+48?i.scrollTop-=14:e>o.bottom-48&&(i.scrollTop+=14)}e<48?window.scrollBy(0,-14):e>window.innerHeight-48&&window.scrollBy(0,14)}onUp(){let t=this.pending,e=this.dragging&&t,r="",i=0;if(e){let o=t.card.closest("[data-list]");r=o.dataset.list??"",i=[...o.querySelectorAll("[data-task]")].indexOf(t.card)}this.stop(),e&&(this.justDropped=!0,setTimeout(()=>this.justDropped=!1,0),this.callbacks.drop(t.id,r,Math.max(0,i)))}onKey(t){if(t.key!=="Escape"||!this.pending)return;t.preventDefault(),t.stopPropagation();let e=this.dragging;this.stop(),e&&this.callbacks.cancel()}stop(){this.ghost?.remove(),this.ghost=null,this.pending?.card.classList.remove("board-placeholder"),this.layer.classList.remove("board-dragging"),this.pending=null,this.dragging=!1,window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onUp),window.removeEventListener("keydown",this.onKey,!0)}};var M=["none","low","medium","high","urgent"],D=["backlog","todo","planned","next","in-progress","review","beta","done"],P=Object.freeze({tasks:2e3,columns:30,labels:20}),J={"to do":"todo","to-do":"todo",later:"planned",soon:"next",doing:"in-progress","in progress":"in-progress",in_progress:"in-progress",wip:"in-progress",now:"in-progress",active:"in-progress","in review":"review",testing:"review",qa:"review",shipped:"done",released:"done",complete:"done",completed:"done",closed:"done"};function A(d){let t=x(d,60).toLowerCase();return Object.hasOwn(J,t)?J[t]:t||"todo"}function I(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function N(d){let t=x(d,20).toLowerCase(),e={p0:"urgent",critical:"urgent",blocker:"urgent",p1:"high",p2:"medium",normal:"medium",p3:"low",minor:"low"};return Object.hasOwn(e,t)?e[t]:M.includes(t)?t:"none"}function lt(d){let t=x(d,40),e=/^(\d{4}-\d{2}-\d{2})/.exec(t);return e&&!Number.isNaN(Date.parse(`${e[1]}T00:00:00Z`))?e[1]:""}function dt(d,t,e){let r=_(d,["title","name","summary","text"],500);if(!r)return null;let i=_(d,["id","uuid","key"],200);(!i||e.has(i))&&(i=I()),e.add(i);let o=Array.isArray(d.labels??d.tags)?d.labels??d.tags:d.label||d.tag?[d.label??d.tag]:[],l=L(d.progress),c=L(d.votes),s=m(d.assignee)?_(d.assignee,["name","login"],100):x(d.assignee??d.owner,100);return{id:i,title:r,description:_(d,["description","body","details"],5e3),column:A(d.column??d.status??d.state??t),priority:N(d.priority),labels:[...new Set(o.slice(0,P.labels).map(n=>x(m(n)?n.name:n,60)).filter(Boolean))],assignee:s,due:lt(d.due??d.dueDate??d.deadline),progress:l===null?null:Math.max(0,Math.min(100,l)),votes:c!==null&&c>=0?Math.floor(c):null,when:_(d,["when","quarter","target","eta"],60),url:z(d.url??d.href)}}function Z(d,t){let e=[];for(let o of d.slice(0,P.columns)){let l=A(m(o)?o.id??o.status??o.title:o);if(e.some(s=>s.id===l))continue;let c=m(o)?L(o.limit??o.wip):null;e.push({id:l,title:m(o)?_(o,["title","label","name"],100):x(o,100),limit:c!==null&&c>0?Math.floor(c):null})}let r=o=>D.includes(o)?D.indexOf(o):D.length,i=[...new Set(t.map(o=>o.column))].filter(o=>!e.some(l=>l.id===o));for(let o of i.sort((l,c)=>r(l)-r(c)).slice(0,P.columns))e.push({id:o,title:"",limit:null});if(!e.length)for(let o of["todo","in-progress","done"])e.push({id:o,title:"",limit:null});return e}function $(d){if(!d.trim())return{ok:!0,board:{columns:Z([],[]),tasks:[]}};let t;try{t=JSON.parse(d)}catch(s){return{ok:!1,error:"json",message:s instanceof Error?s.message:""}}let e=m(t)?t:{},r=Array.isArray(t)?t:[e.tasks,e.items,e.cards,e.features].find(Array.isArray),i=Array.isArray(e.columns)?e.columns:[];if(!r&&!i.length)return{ok:!1,error:"shape",message:'"tasks", "columns"'};let o=new Set,l=[],c=(s,n)=>{let u=m(s)&&l.length<P.tasks?dt(s,n,o):null;u&&l.push(u)};for(let s of r??[])c(s,"todo");for(let s of i){if(!m(s))continue;let n=[s.tasks,s.items,s.cards].find(Array.isArray)??[];for(let u of n)c(u,A(s.id??s.status??s.title))}return{ok:!0,board:{columns:Z(i,l),tasks:l}}}function Q(d){let t=d.columns.map(({id:r,title:i,limit:o})=>({id:r,...i?{title:i}:{},...o?{limit:o}:{}})),e=d.tasks.map(r=>{let i={id:r.id,title:r.title,column:r.column};return r.description&&(i.description=r.description),r.priority!=="none"&&(i.priority=r.priority),r.labels.length&&(i.labels=r.labels),r.assignee&&(i.assignee=r.assignee),r.due&&(i.due=r.due),r.progress!==null&&(i.progress=r.progress),r.votes!==null&&(i.votes=r.votes),r.when&&(i.when=r.when),r.url&&(i.url=r.url),i});return JSON.stringify({columns:t,tasks:e},null,2)}function V(d,t,e,r){let i=d.tasks.find(p=>p.id===t);if(!i||!d.columns.some(p=>p.id===e))return d;let o=d.tasks.filter(p=>p.id!==t),l={...i,column:e},c=o.filter(p=>p.column===e),s=Math.max(0,Math.min(r,c.length)),n=c[s],u=n?o.indexOf(n):c.length?o.indexOf(c[c.length-1])+1:o.length;return{...d,tasks:[...o.slice(0,u),l,...o.slice(u)]}}function tt(d,t){return V({...d,tasks:[...d.tasks,t]},t.id,t.column,1/0)}function et(d,t,e){return{...d,tasks:d.tasks.map(r=>r.id===t?{...r,...e,id:t}:r)}}function rt(d,t){return{...d,tasks:d.tasks.filter(e=>e.id!==t)}}function ot(d,{query:t,label:e,assignee:r}){let i=t.toLowerCase().split(/\s+/).filter(Boolean);return d.filter(o=>{if(e!==null&&!o.labels.includes(e)||r!==null&&o.assignee!==r)return!1;let l=`${o.title}
${o.description}
${o.labels.join(" ")}
${o.assignee}`.toLowerCase();return i.every(c=>l.includes(c))})}var it=Object.freeze({boardStatus_backlog:"Backlog",boardStatus_todo:"To do",boardStatus_planned:"Planned",boardStatus_next:"Next","boardStatus_in-progress":"In progress",boardStatus_review:"In review",boardStatus_beta:"Beta",boardStatus_done:"Done",boardPriority_low:"Low",boardPriority_medium:"Medium",boardPriority_high:"High",boardPriority_urgent:"Urgent",boardPriority_none:"No priority",boardViews:"View",boardViewBoard:"Board",boardViewList:"List",boardViewTable:"Table",boardColumns:"Columns of the board",boardSearch:"Filter the tasks",boardLabels:"Labels",boardAll:"All",boardEveryone:"Everyone",boardAssignee:"Assignee",boardAdd:"Add a task",boardAddTo:"Add a task to {column}",boardNewTitle:"Title of the new task",boardEmpty:"No tasks",boardNone:"No task matches.",boardCount:"{count} tasks",boardLimit:"{count} of {limit}",boardOverLimit:"Over the limit of {limit}",boardCollapse:"Collapse {column}",boardExpand:"Expand {column}",boardTask:"{title}, {column}, {position} of {count}",boardDrag:"Move {title}",boardGrabbed:"{title} picked up. Use the arrows to move it, Space to drop it, Escape to cancel.",boardMoved:"{title} moved to {column}, position {position} of {count}.",boardDropped:"{title} dropped in {column}, position {position}.",boardCancelled:"Move cancelled. {title} is back in {column}.",boardEdit:"Edit {title}",boardEditTask:"Edit the task",boardNewTask:"New task",boardTitle:"Title",boardDescription:"Description",boardColumn:"Column",boardPriority:"Priority",boardLabelsHint:"Separated by commas",boardDue:"Due date",boardProgress:"Progress (%)",boardSave:"Save",boardCancel:"Cancel",boardDelete:"Delete",boardConfirmDelete:"Delete for good",boardDeleted:"{title} deleted.",boardAdded:"{title} added to {column}.",boardOverdue:"Overdue",boardDueOn:"Due {date}",boardProgressValue:"{percent}% done",boardVotes:"{count} votes",boardTitleColumn:"Task",boardKeys:"Enter to edit, Space to pick up and move with the arrows, Delete to delete."}),at=Object.freeze({boardStatus_backlog:"R\xE9serve",boardStatus_todo:"\xC0 faire",boardStatus_planned:"Pr\xE9vu",boardStatus_next:"Bient\xF4t","boardStatus_in-progress":"En cours",boardStatus_review:"En relecture",boardStatus_beta:"B\xEAta",boardStatus_done:"Termin\xE9",boardPriority_low:"Basse",boardPriority_medium:"Moyenne",boardPriority_high:"Haute",boardPriority_urgent:"Urgente",boardPriority_none:"Sans priorit\xE9",boardViews:"Vue",boardViewBoard:"Tableau",boardViewList:"Liste",boardViewTable:"Table",boardColumns:"Colonnes du tableau",boardSearch:"Filtrer les t\xE2ches",boardLabels:"\xC9tiquettes",boardAll:"Toutes",boardEveryone:"Tout le monde",boardAssignee:"Responsable",boardAdd:"Ajouter une t\xE2che",boardAddTo:"Ajouter une t\xE2che \xE0 {column}",boardNewTitle:"Titre de la nouvelle t\xE2che",boardEmpty:"Aucune t\xE2che",boardNone:"Aucune t\xE2che ne correspond.",boardCount:"{count} t\xE2ches",boardLimit:"{count} sur {limit}",boardOverLimit:"Au-del\xE0 de la limite de {limit}",boardCollapse:"Replier {column}",boardExpand:"D\xE9plier {column}",boardTask:"{title}, {column}, {position} sur {count}",boardDrag:"D\xE9placer {title}",boardGrabbed:"{title} saisie. D\xE9placez-la avec les fl\xE8ches, Espace pour la poser, \xC9chap pour annuler.",boardMoved:"{title} d\xE9plac\xE9e vers {column}, position {position} sur {count}.",boardDropped:"{title} pos\xE9e dans {column}, position {position}.",boardCancelled:"D\xE9placement annul\xE9. {title} est revenue dans {column}.",boardEdit:"Modifier {title}",boardEditTask:"Modifier la t\xE2che",boardNewTask:"Nouvelle t\xE2che",boardTitle:"Titre",boardDescription:"Description",boardColumn:"Colonne",boardPriority:"Priorit\xE9",boardLabelsHint:"S\xE9par\xE9es par des virgules",boardDue:"\xC9ch\xE9ance",boardProgress:"Avancement (%)",boardSave:"Enregistrer",boardCancel:"Annuler",boardDelete:"Supprimer",boardConfirmDelete:"Supprimer d\xE9finitivement",boardDeleted:"{title} supprim\xE9e.",boardAdded:"{title} ajout\xE9e \xE0 {column}.",boardOverdue:"En retard",boardDueOn:"\xC9ch\xE9ance {date}",boardProgressValue:"{percent} % termin\xE9",boardVotes:"{count} votes",boardTitleColumn:"T\xE2che",boardKeys:"Entr\xE9e pour modifier, Espace pour saisir puis d\xE9placer avec les fl\xE8ches, Suppr pour supprimer."});U({en:it,fr:at});var ct=["board","list","table"],st=class extends X{static type="board";static allowEmpty=!0;static componentAttributes=Object.freeze(["view","views","readonly","filters","persist","now"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,views:!0}};static styles=[q,j,Y,W];constructor(){super(),this.panelId=h("panel"),this.hintId=h("hint"),this.state=null,this.viewState=null,this.query="",this.label=null,this.assignee=null,this.collapsed=new Set,this.adding=null,this.focusTask=null,this.grabbed=null,this.dialog=null,this.sort={key:"column",up:!0},this.drag=new O(this.root,this.frame,{start:t=>this.focusTask=t,drop:(t,e,r)=>this.drop(t,e,r),cancel:()=>this.render()})}get current(){if(this.state)return this.state;let t=this.loadSaved(),e=$(t??this.text??""),r=$("");return this.state=e.ok?e.board:r.board,this.state}get board(){return structuredClone(this.current)}get tasks(){return structuredClone(this.current.tasks)}get readonly(){return R(this.getAttribute("readonly"))===!0}get view(){return this.viewState??K(this.getAttribute("view"),ct,"board")}contentChanged(){this.state=null,this.grabbed=null}loadSaved(){let t=this.getAttribute("persist")?.trim();if(!t)return null;try{return localStorage.getItem(`vitrine-board:${t}`)}catch{return null}}save(t){let e=this.getAttribute("persist")?.trim();if(e)try{localStorage.setItem(`vitrine-board:${e}`,t)}catch{}}commit(t,e,r){if(!S(this,e,r))return this.render(),!1;this.state=t;let i=Q(t);return this.text=i,this._content=i,this.save(i),this.render(),S(this,v.CHANGE,{value:JSON.parse(i)}),!0}addTask(t){let e=this.current,r={id:t.id||I(),title:String(t.title).slice(0,500),description:t.description??"",column:e.columns.some(i=>i.id===t.column)?t.column:e.columns[0].id,priority:N(t.priority),labels:t.labels??[],assignee:t.assignee??"",due:t.due??"",progress:t.progress??null,votes:t.votes??null,when:t.when??"",url:t.url??null};return this.commit(tt(e,r),v.TASK_ADD,{task:r})?r:null}updateTask(t,e){let r=this.current.tasks.find(i=>i.id===t);return r?this.commit(et(this.current,t,e),v.TASK_EDIT,{task:r,changes:e}):!1}moveTask(t,e,r=1/0){let i=this.current.tasks.find(l=>l.id===t);if(!i)return!1;let o=A(e);return this.commit(V(this.current,t,o,r),v.TASK_MOVE,{task:i,from:i.column,to:o,index:r})}removeTask(t){let e=this.current.tasks.find(r=>r.id===t);return e?this.commit(rt(this.current,t),v.TASK_DELETE,{task:e}):!1}drop(t,e,r){if(!this.current.tasks.find(s=>s.id===t))return;let o=this.visible(this.current.tasks).filter(s=>s.column===e&&s.id!==t),l=this.current.tasks.filter(s=>s.column===e&&s.id!==t),c=o[r]?l.indexOf(o[r]):l.length;this.focusTask=t,this.moveTask(t,e,c)&&this.announceMove("boardDropped",t)}announceMove(t,e){let r=this.current.tasks.find(o=>o.id===e);if(!r)return;let i=this.current.tasks.filter(o=>o.column===r.column);this.announce(this.t(t,{title:r.title,column:this.columnName(this.columnOf(r.column)),position:i.indexOf(r)+1,count:i.length}))}columnOf(t){return this.current.columns.find(e=>e.id===t)??{id:t,title:"",limit:null}}columnName(t){return t.title?t.title:D.includes(t.id)?this.t(`boardStatus_${t.id}`):t.id.charAt(0).toUpperCase()+t.id.slice(1)}visible(t){return ot(t,{query:this.query,label:this.label,assignee:this.assignee})}renderContent(t){let e=this.t,r=this.state?null:$(this.loadSaved()??this.text??""),i=a("div",{class:"body data-body board-body",part:"body"});if(r&&!r.ok)i.append(this.dataNotice(r));else{let n=this.current;this.flag("filters")&&n.tasks.length&&i.append(this.filters(n));let u=this.visible(n.tasks);this.view==="table"?i.append(this.tableView(u)):i.append(this.boardView(n,u)),i.append(a("p",{class:"sr-only",text:e("boardKeys"),attrs:{id:this.hintId}}))}let o=this.feature("views")?F({tabs:[{id:"board",label:e("boardViewBoard")},{id:"list",label:e("boardViewList")},{id:"table",label:e("boardViewTable")}],selected:this.view,label:e("boardViews"),panelId:this.panelId,onSelect:n=>this.setView(n)}):null,{panel:l,history:c}=this.previewPanel(i,this.panelId);t.append(...this.chrome({badge:e("boardCount",{count:this.current.tasks.length}),tabs:o,actions:[...c,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("board.json"),"application/json"):null,this.feature("copy")?this.copyButton(()=>this.text??""):null]}),l),this.dialog&&t.append(this.taskDialog());let s=this.root.querySelector(".board-columns");s instanceof HTMLElement&&!this.readonly&&this.drag.attach(s),this.editor?.align()}setView(t){this.viewState=t,this.render(),S(this,v.TAB_CHANGE,{tab:t}),this.root.querySelector(`[data-focus-key="tab-${t}"]`)?.focus()}filters(t){let e=this.t,r=[...new Set(t.tasks.flatMap(o=>o.labels))].slice(0,30),i=[...new Set(t.tasks.map(o=>o.assignee).filter(Boolean))].slice(0,50);return a("div",{class:"board-filters",part:"filters"},a("input",{class:"data-input board-search",attrs:{type:"search",value:this.query,placeholder:e("boardSearch"),"aria-label":e("boardSearch"),"data-focus-key":"search"},on:{input:o=>{this.query=o.target.value.slice(0,200),this.render(),S(this,v.FILTER_CHANGE,{query:this.query,label:this.label,assignee:this.assignee,shown:this.visible(this.current.tasks).length})}}}),i.length?a("select",{class:"data-input board-people",attrs:{"aria-label":e("boardAssignee"),"data-focus-key":"people"},on:{change:o=>{let l=o.target.value;this.assignee=l||null,this.render()}}},a("option",{text:e("boardEveryone"),attrs:{value:""}}),...i.map(o=>a("option",{text:o,attrs:{value:o,selected:o===this.assignee}}))):null,r.length?a("div",{class:"data-chips",attrs:{role:"group","aria-label":e("boardLabels")}},...[[e("boardAll"),null],...r.map(o=>[o,o])].map(([o,l],c)=>a("button",{class:"data-chip",text:o,attrs:{type:"button","aria-pressed":String(this.label===l),"data-focus-key":`label-${c}`},on:{click:()=>{this.label=l,this.render()}}}))):null)}boardView(t,e){let r=this.view==="list",i=a("div",{class:`board-columns ${r?"as-list":"as-board"}`},...t.columns.map(o=>this.columnView(o,e.filter(l=>l.column===o.id),t.tasks.filter(l=>l.column===o.id).length)));return i.style.setProperty("--_count",String(t.columns.length)),r?i:a("div",{class:"board-scroll",attrs:{role:"region","aria-label":this.t("boardColumns"),tabindex:"-1"}},i)}columnView(t,e,r){let i=this.t,o=this.columnName(t),l=this.collapsed.has(t.id),c=t.limit!==null&&r>t.limit,s=a("div",{class:"board-column-head"},a("h3",{class:"board-column-title",part:"column-title"},a("span",{text:o}),a("span",{class:`board-count${c?" over":""}`,text:t.limit?i("boardLimit",{count:r,limit:t.limit}):String(r),attrs:{title:c?i("boardOverLimit",{limit:t.limit}):null}}),c?a("span",{class:"sr-only",text:i("boardOverLimit",{limit:t.limit})}):null),this.view==="board"?G({icon:l?"chevron-right":"chevron-left",label:i(l?"boardExpand":"boardCollapse",{column:o}),key:`collapse-${t.id}`,pressed:l,onClick:()=>{l?this.collapsed.delete(t.id):this.collapsed.add(t.id),this.render()}}):null),n=a("section",{class:`board-column${l&&this.view==="board"?" collapsed":""}${c?" over":""}`,part:"column",attrs:{"aria-label":o,"data-column":t.id}},s);if(l&&this.view==="board")return n;let u=a("ul",{class:"board-list",attrs:{"data-list":t.id,"aria-label":o}},...e.map((p,f)=>this.cardView(p,o,f,e.length)));return n.append(u),e.length||n.append(a("p",{class:"data-none board-empty",text:i(this.query||this.label||this.assignee?"boardNone":"boardEmpty")})),this.readonly||n.append(this.addRow(t,o)),n}cardView(t,e,r,i){let o=this.t,l=this.focusTask??this.firstShownId(),c=this.grabbed?.id===t.id,s=a(this.readonly&&t.url?"a":this.readonly?"span":"button",{class:"board-open",attrs:{type:this.readonly?null:"button",href:this.readonly?t.url:null,rel:this.readonly&&t.url?"noopener noreferrer":null,tabindex:this.readonly&&!t.url?null:t.id===l?"0":"-1","aria-label":o("boardTask",{title:t.title,column:e,position:r+1,count:i}),"aria-describedby":this.readonly?null:this.hintId,"aria-pressed":this.readonly?null:String(c),"data-focus-key":`task-${t.id}`},on:this.readonly?{keydown:n=>this.navigate(n,t)}:{click:()=>this.openEditor(t.id,t.column),keydown:n=>this.cardKey(n,t),focus:()=>this.focusTask=t.id}},t.title);return a("li",{class:`board-card priority-${t.priority}${c?" grabbed":""}`,part:"card",attrs:{"data-task":t.id}},a("div",{class:"board-card-head"},this.readonly?null:a("span",{class:"board-handle",part:"handle",attrs:{"aria-hidden":"true",title:o("boardDrag",{title:t.title})}},E("grip")),a("h4",{class:"board-card-title"},s)),t.description&&this.view!=="list"?a("p",{class:"board-text",text:t.description.slice(0,280)}):null,t.labels.length?a("ul",{class:"board-labels"},...t.labels.map(n=>a("li",{part:"label",text:n}))):null,t.progress!==null?this.progressView(t.progress):null,this.metaRow(t))}firstShownId(){return this.visible(this.current.tasks)[0]?.id??null}metaRow(t){let e=this.t,r=[];return t.priority!=="none"&&r.push(a("span",{class:`board-priority ${t.priority}`,part:"priority",text:e(`boardPriority_${t.priority}`)})),t.due&&r.push(this.dueView(t)),t.when&&r.push(a("span",{class:"board-when",text:t.when})),t.votes!==null&&r.push(a("span",{class:"board-when",text:e("boardVotes",{count:t.votes})})),t.assignee&&r.push(a("span",{class:"board-avatar",text:H(t.assignee),attrs:{title:t.assignee}},a("span",{class:"sr-only",text:t.assignee}))),r.length?a("div",{class:"board-meta"},...r):null}dueView(t){let e=this.t,r=Date.parse(`${t.due}T00:00:00Z`),i=new Date(this.now).toISOString().slice(0,10),o=t.due<i&&t.column!=="done",l=this.formatDate(r,{dateStyle:"medium",timeZone:"UTC"});return a("time",{class:`board-due${o?" overdue":""}`,attrs:{datetime:t.due}},E("calendar"),a("span",{text:o?`${e("boardOverdue")} \xB7 ${l}`:e("boardDueOn",{date:l})}))}progressView(t){let e=Math.round(t),r=a("span",{class:"board-fill"});return r.style.setProperty("--_value",`${e}%`),a("span",{class:"board-progress",attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":String(e),"aria-label":this.t("boardProgressValue",{percent:e})}},r)}addRow(t,e){let r=this.t;if(this.adding!==t.id)return a("button",{class:"board-add board-action",attrs:{type:"button","aria-label":r("boardAddTo",{column:e}),"data-focus-key":`add-${t.id}`},on:{click:()=>{this.adding=t.id,this.render(),this.root.querySelector(`[data-focus-key="new-${t.id}"]`)?.focus()}}},E("plus"),a("span",{text:r("boardAdd")}));let i=a("input",{class:"data-input board-new",attrs:{type:"text",placeholder:r("boardNewTitle"),"aria-label":r("boardNewTitle"),maxlength:500,"data-focus-key":`new-${t.id}`},on:{keydown:o=>{let l=o.key;if(l==="Escape")this.adding=null,this.render(),this.root.querySelector(`[data-focus-key="add-${t.id}"]`)?.focus();else if(l==="Enter"&&i.value.trim()){o.preventDefault();let c=this.addTask({title:i.value.trim(),column:t.id});c&&this.announce(r("boardAdded",{title:c.title,column:e})),this.root.querySelector(`[data-focus-key="new-${t.id}"]`)?.focus()}},blur:()=>{i.value.trim()||(this.adding=null,queueMicrotask(()=>this.render()))}}});return a("div",{class:"board-new-row"},i)}tableView(t){let e=this.t,r=this.current.columns.map(s=>s.id),i={urgent:0,high:1,medium:2,low:3,none:4},o={title:(s,n)=>s.title.localeCompare(n.title,this.locale),column:(s,n)=>r.indexOf(s.column)-r.indexOf(n.column),priority:(s,n)=>i[s.priority]-i[n.priority],assignee:(s,n)=>(s.assignee||"\uFFFF").localeCompare(n.assignee||"\uFFFF",this.locale),due:(s,n)=>(s.due||"9999").localeCompare(n.due||"9999")},l=[...t].sort((s,n)=>o[this.sort.key](s,n)*(this.sort.up?1:-1)),c=[["title","boardTitleColumn"],["column","boardColumn"],["priority","boardPriority"],["assignee","boardAssignee"],["due","boardDue"]];return a("div",{class:"board-table-wrap",attrs:{role:"region",tabindex:"0","aria-label":e("boardViewTable")}},a("table",{class:"board-table"},a("thead",{},a("tr",{},...c.map(([s,n])=>this.sortHead(s,e(n))))),a("tbody",{},...l.map(s=>this.tableRow(s)))),l.length?null:a("p",{class:"data-none",text:e("boardNone")}))}sortHead(t,e){let r=this.sort.key===t;return a("th",{attrs:{scope:"col","aria-sort":r?this.sort.up?"ascending":"descending":null}},a("button",{class:"board-sort",attrs:{type:"button","data-focus-key":`sort-${t}`},on:{click:()=>{this.sort={key:t,up:r?!this.sort.up:!0},this.render()}}},e,r?E(this.sort.up?"chevron-up":"chevron-down"):null))}tableRow(t){let e=this.t,r=this.readonly?t.url?a("a",{text:t.title,attrs:{href:t.url,rel:"noopener noreferrer"}}):t.title:a("button",{class:"board-link",text:t.title,attrs:{type:"button","data-focus-key":`row-${t.id}`},on:{click:()=>this.openEditor(t.id,t.column)}});return a("tr",{},a("th",{attrs:{scope:"row"}},r),a("td",{text:this.columnName(this.columnOf(t.column))}),a("td",{},t.priority==="none"?"":a("span",{class:`board-priority ${t.priority}`,text:e(`boardPriority_${t.priority}`)})),a("td",{text:t.assignee}),a("td",{},t.due?this.dueView(t):""))}navigate(t,e){let r=this.current.columns.filter(u=>!this.collapsed.has(u.id)||this.view!=="board"),i=this.visible(this.current.tasks),o=u=>i.filter(p=>p.column===u),l=o(e.column),c=l.indexOf(e),s=r.findIndex(u=>u.id===e.column),n;if(t.key==="ArrowDown")n=l[c+1];else if(t.key==="ArrowUp")n=l[c-1];else if(t.key==="Home")n=l[0];else if(t.key==="End")n=l[l.length-1];else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){let u=t.key==="ArrowLeft"?-1:1;for(let p=s+u;p>=0&&p<r.length&&!n;p+=u){let f=o(r[p].id);n=f[Math.min(c,f.length-1)]}}else return!1;return t.preventDefault(),n&&this.focusOn(n.id),!0}focusOn(t){this.focusTask=t;for(let e of this.root.querySelectorAll(".board-open[tabindex]"))e.setAttribute("tabindex",e.getAttribute("data-focus-key")===`task-${t}`?"0":"-1");this.root.querySelector(`[data-focus-key="task-${CSS.escape(t)}"]`)?.focus()}cardKey(t,e){if(this.grabbed){this.grabbedKey(t,e);return}t.key===" "?(t.preventDefault(),this.grabbed={id:e.id,origin:this.current},this.render(),this.focusOn(e.id),this.announce(this.t("boardGrabbed",{title:e.title}))):t.key==="Delete"?(t.preventDefault(),this.openEditor(e.id,e.column,!0)):this.navigate(t,e)}grabbedKey(t,e){let r=this.grabbed,i=this.current,o=i.columns.filter(u=>!this.collapsed.has(u.id)),l=i.tasks.filter(u=>u.column===e.column),c=l.findIndex(u=>u.id===e.id),s=o.findIndex(u=>u.id===e.column),n=null;if(t.key==="ArrowUp"&&c>0?n=[e.column,c-1]:t.key==="ArrowDown"&&c<l.length-1?n=[e.column,c+1]:t.key==="ArrowLeft"&&s>0?n=[o[s-1].id,c]:t.key==="ArrowRight"&&s<o.length-1&&(n=[o[s+1].id,c]),n)t.preventDefault(),this.state=V(i,e.id,n[0],n[1]),this.render(),this.focusOn(e.id),this.announceMove("boardMoved",e.id);else if(t.key===" "||t.key==="Enter"){t.preventDefault();let u=this.current.tasks.find(g=>g.id===e.id),p=r.origin.tasks.find(g=>g.id===e.id),f=this.current;this.state=r.origin,this.grabbed=null;let T=f.tasks.filter(g=>g.column===u.column).indexOf(u);this.commit(f,v.TASK_MOVE,{task:p,from:p.column,to:u.column,index:T})&&this.announceMove("boardDropped",e.id),this.focusOn(e.id)}else t.key==="Escape"?(t.preventDefault(),this.state=r.origin,this.grabbed=null,this.render(),this.focusOn(e.id),this.announce(this.t("boardCancelled",{title:e.title,column:this.columnName(this.columnOf(e.column))}))):t.key.startsWith("Arrow")&&t.preventDefault()}openEditor(t,e,r=!1){this.readonly||(this.dialog={id:t,column:e,confirm:r},this.render())}taskDialog(){let t=this.t,e=this.dialog,r=this.current.tasks.find(b=>b.id===e.id),i={title:h("f"),description:h("f"),column:h("f"),priority:h("f"),labels:h("f"),assignee:h("f"),due:h("f"),progress:h("f")},o=(b,k,w,C="")=>a("div",{class:"board-form-row"},a("label",{text:t(k),attrs:{for:w.id}}),w,C?a("span",{class:"board-form-hint",text:C}):null),l=(b,k,w)=>a("input",{class:"data-input",attrs:{id:b,type:k,value:w}}),c=a("input",{class:"data-input",attrs:{id:i.title,type:"text",value:r?.title??"",required:!0,maxlength:500,"data-focus-key":"editor-title"}}),s=a("textarea",{class:"data-input board-textarea",attrs:{id:i.description,rows:4}});s.value=r?.description??"";let n=a("select",{class:"data-input",attrs:{id:i.column}},...this.current.columns.map(b=>a("option",{text:this.columnName(b),attrs:{value:b.id,selected:b.id===(r?.column??e.column)}}))),u=a("select",{class:"data-input",attrs:{id:i.priority}},...M.map(b=>a("option",{text:t(`boardPriority_${b}`),attrs:{value:b,selected:b===(r?.priority??"none")}}))),p=l(i.labels,"text",(r?.labels??[]).join(", ")),f=l(i.assignee,"text",r?.assignee??""),T=l(i.due,"date",r?.due??""),g=a("input",{class:"data-input",attrs:{id:i.progress,type:"number",min:0,max:100,step:1,value:r?.progress??""}}),B=a("form",{class:"board-form",attrs:{novalidate:null}},a("h3",{class:"board-form-title",text:t(r?"boardEditTask":"boardNewTask")}),o("title","boardTitle",c),o("description","boardDescription",s),a("div",{class:"board-form-grid"},o("column","boardColumn",n),o("priority","boardPriority",u),o("assignee","boardAssignee",f),o("due","boardDue",T)),a("div",{class:"board-form-grid"},o("labels","boardLabels",p,t("boardLabelsHint")),o("progress","boardProgress",g)),this.editorActions(r));B.addEventListener("submit",b=>{if(b.preventDefault(),!c.value.trim()){c.focus();return}let k=g.value===""?null:Math.max(0,Math.min(100,Number(g.value))),w={title:c.value.trim().slice(0,500),description:s.value.slice(0,5e3),priority:N(u.value),labels:[...new Set(p.value.split(",").map(C=>C.trim()).filter(Boolean))].slice(0,20),assignee:f.value.trim().slice(0,100),due:/^\d{4}-\d{2}-\d{2}$/.test(T.value)?T.value:"",progress:Number.isFinite(k)?k:null};this.closeEditor(),r?(n.value!==r.column&&this.moveTask(r.id,n.value),this.updateTask(r.id,w)):this.addTask({...w,title:w.title,column:n.value})});let y=a("dialog",{class:"board-dialog",part:"editor",attrs:{"aria-label":t(r?"boardEditTask":"boardNewTask")},on:{close:()=>this.dialog&&this.closeEditor(),click:b=>b.target===y&&y.close()}},B);return queueMicrotask(()=>{y.isConnected&&(typeof y.showModal=="function"&&!y.open&&y.showModal(),y.querySelector(e.confirm?'[data-focus-key="delete"]':'[data-focus-key="editor-title"]')?.focus())}),y}editorActions(t){let e=this.t,r=this.dialog;return a("div",{class:"board-form-actions"},t?a("button",{class:`board-button danger${r.confirm?" confirm":""}`,text:e(r.confirm?"boardConfirmDelete":"boardDelete"),attrs:{type:"button","data-focus-key":"delete"},on:{click:()=>{if(!r.confirm){r.confirm=!0,this.render();return}this.closeEditor(),this.removeTask(t.id)&&this.announce(e("boardDeleted",{title:t.title})),this.focusTask=this.firstShownId()}}}):null,a("span",{class:"board-spacer"}),a("button",{class:"board-button",text:e("boardCancel"),attrs:{type:"button","data-focus-key":"cancel"},on:{click:()=>this.closeEditor()}}),a("button",{class:"board-button primary",text:e("boardSave"),attrs:{type:"submit","data-focus-key":"save"}}))}closeEditor(){let t=this.dialog?.id;this.dialog=null,this.render(),t&&this.focusOn(t)}};export{st as a};
//# sourceMappingURL=chunk-KVEF62YP.js.map
