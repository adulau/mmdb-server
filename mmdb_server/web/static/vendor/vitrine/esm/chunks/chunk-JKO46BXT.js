/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as se}from"./chunk-GTEWE4NN.js";import{b as ee,c as te}from"./chunk-PVVRLBB4.js";import{a as D}from"./chunk-YCSGENO5.js";import{g as G,h as J,i as Z,p as H,r as Y}from"./chunk-3VQOL2NW.js";import{E as V,I as T,O as X,Q as F,U as W,X as K,b as I,c as U,d as B,e as P,l as u,n as Q}from"./chunk-DNNVKOIB.js";import{h as v,k as _,l as N,m as z,q as A}from"./chunk-2IDMCIF6.js";var re=`/*
 * SQL: each statement with its query, parameters, error and result table.
 */
.sql-body {
  padding: 0;
  background: var(--_surface);
  overscroll-behavior: auto;
}

:host([max-height]) .sql-body,
.vt[data-fullscreen] .sql-body {
  overscroll-behavior: contain;
}

.sql-statement + .sql-statement {
  border-top: 1px solid var(--_border);
}

.sql-query {
  overflow-x: auto;
  background: var(--_code-bg);
}

.sql-query .code {
  padding-inline: var(--_space-4);
}

.sql-query .line .gutter {
  margin-inline-start: calc(-1 * var(--_space-2));
}

.sql-params-box {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-2) var(--_space-3);
  padding: var(--_space-2) var(--_space-4);
  border-top: 1px solid var(--_border);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
}

.sql-label {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.sql-params {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
}

.sql-params dt {
  color: var(--_syntax-attr);
  font-family: var(--_font-mono);
}

.sql-params dd {
  margin: 0 0 0 calc(-1 * var(--_space-2));
}

.sql-params dd::before {
  content: '= ';
  color: var(--_fg-muted);
}

.sql-params code {
  color: var(--_syntax-string);
  font-family: var(--_font-mono);
}

.sql-error {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  padding: var(--_space-3) var(--_space-4);
  border-top: 1px solid var(--_border);
  background: color-mix(in srgb, var(--_danger) 8%, transparent);
  color: var(--_danger);
}

.sql-error .icon {
  flex: none;
  margin-top: 2px;
}

.sql-error pre {
  margin: 0;
  color: var(--_fg);
  font: 400 var(--_font-size) / var(--_line-height) var(--_font-mono);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.sql-result {
  border-top: 1px solid var(--_border);
}

.sql-summary,
.sql-more-bar {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
  min-height: 36px;
  padding: var(--_space-1) var(--_space-4);
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
  font-variant-numeric: tabular-nums;
}

.sql-summary .spacer {
  flex: 1 1 auto;
}

.sql-summary + .sql-table,
.sql-summary + div > .sql-table {
  border-top: 1px solid var(--_border);
}

.sql-table {
  overflow: auto;
  max-height: 420px;
}

.sql-table:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.sql-table .grid td {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.grid .sql-null {
  color: var(--_fg-muted);
  font-style: italic;
}

.sql-more-bar {
  border-top: 1px solid var(--_border);
}

.sql-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}

/* With a height limit on the element, the element scrolls, not each table. */
:host([max-height]) .sql-table,
.vt[data-fullscreen] .sql-table {
  max-height: none;
}
`;var S=(e="")=>({sql:e,params:[],result:null,message:"",error:"",duration:null});function ce(e){let s=e.trim();if(!s)return[];if(/^[[{]/.test(s))try{return Ee(JSON.parse(s))}catch(t){if(!(t instanceof SyntaxError))throw t}return we(e)}var qe=/^(?:[\w.$@-]{1,64}[=\-('"*~][#>]|mysql>|MariaDB \[[^\]]{0,64}\]>|sqlite>|D|duckdb>|SQL>|\s*->|\s*\.{3}>|\s*'>|\s*">)[ \t]?/;function R(e){let s=qe.exec(e);return!s||s[0].trim()==="D"&&!/^D [^ ]/.test(e)?null:e.slice(s[0].length)}function we(e){let s=e.split(`
`),t=s.some(a=>R(a)!==null&&R(a)!=="");if(!t&&!s.some((a,f)=>ne(s,f)))return[S(e.trim())];let o=[],r=null,n=!1,l=a=>!!(a.result||a.message||a.error||a.duration!==null);for(let a=0;a<s.length&&o.length<=500;a+=1){let f=s[a],i=t?R(f):null;if(i!==null){if(!i.trim()&&(!r||n))continue;(!r||n||l(r))&&(r=S(),o.push(r)),r.sql+=(r.sql?`
`:"")+i,n=L(r.sql);continue}let p=ne(s,a);if(p){r||(r=S(),o.push(r)),r.result&&(r=S(),o.push(r)),r.result=p.result,n=!0,a=p.end-1;continue}if(f.trim()){if(r&&(n||t)&&xe(r,f,s,a)){n=!0;continue}if(!t&&r&&l(r)){r=S(f),o.push(r),n=L(r.sql);continue}r||(r=S(),o.push(r)),t&&n?r.message+=(r.message?`
`:"")+f.trim():(r.sql+=(r.sql?`
`:"")+f,n=L(r.sql))}}for(let a of o)a.sql=a.sql.trim();return o.filter(a=>a.sql||l(a))}function L(e){let s=e.trim();if(/^[\\.][a-z]/i.test(s))return!0;if(!s.endsWith(";")&&!/\\[gG]$/.test(s))return!1;let t=M(s);return t[t.length-1]?.type==="punct"||/\\[gG]$/.test(s)}function xe(e,s,t,o){let r=s.trim(),n;if(n=/^\((\d+) rows?\)$/.exec(r))return e.result&&(e.result.total=Number(n[1])),!0;if(n=/^(\d+) rows? in set(?:, \d+ warnings?)? \(([\d.]+) sec\)$/.exec(r))return e.result&&(e.result.total=Number(n[1])),e.duration=Number(n[2])*1e3,!0;if(n=/^Empty set(?:, \d+ warnings?)? \(([\d.]+) sec\)$/.exec(r))return e.result??={columns:[],rows:[],total:0},e.duration=Number(n[1])*1e3,!0;if(n=/^(Query OK, .*?)(?: \(([\d.]+) sec\))?$/.exec(r))return e.message=n[1],n[2]&&(e.duration=Number(n[2])*1e3),!0;if(n=/^Time: ([\d.,]+) ms/.exec(r))return e.duration=Number(n[1].replace(/,/g,"")),!0;if(n=/^Run Time: real ([\d.]+)/.exec(r))return e.duration=Number(n[1])*1e3,!0;if(n=/^(?:ERROR(?:\s+\d+\s+\([\w]+\))?|(?:Parse |Runtime |Binder |Catalog |Parser )?[Ee]rror(?: near line \d+)?)\s*:\s*(.*)$/.exec(r)){e.error=n[1];for(let l=o+1;l<t.length&&l<=o+4&&/^(?:LINE \d+:|\s+\^|DETAIL:|HINT:)/.test(t[l]);l+=1)e.error+=`
${t[l].trimEnd()}`,t[l]="";return!0}return/^(?:INSERT \d+ \d+|UPDATE \d+|DELETE \d+|SELECT \d+|MERGE \d+|COPY \d+|FETCH \d+|MOVE \d+|(?:CREATE|DROP|ALTER|TRUNCATE|GRANT|REVOKE|COMMENT|SET|RESET|BEGIN|START TRANSACTION|COMMIT|ROLLBACK|SAVEPOINT|RELEASE|PREPARE|EXECUTE|DEALLOCATE|DO|CALL|VACUUM|ANALYZE|EXPLAIN|LISTEN|NOTIFY|LOCK|REFRESH MATERIALIZED VIEW|CLUSTER|REINDEX|DISCARD)(?: [A-Z ]+)?)$/.test(r)?(e.message=r,!0):/^(?:NOTICE|WARNING|INFO|Warning \(Code \d+\)):/.test(r)?(e.message+=(e.message?`
`:"")+r,!0):!1}function ne(e,s){let t=e[s]??"";if(/^\s*\+(?:-+\+)+\s*$/.test(t))return le(e,s,"+","|","-");if(/^\s*[┌╭]─/.test(t))return le(e,s,"\u252C","\u2502","\u2500");let o=e[s+1]??"";return t.trim()&&/^\s*-+(?:\+-+)*\s*$/.test(o)&&o.includes("-")?Se(e,s):null}function oe(e,s){let t=[];for(let o=0;o<e.length;o+=1)e[o]===s&&t.push(o);return t.slice(0,501).map((o,r,n)=>[o+1,n[r+1]??-1])}function O(e,s,t){return s.every(([,r])=>r<0||e[r]===t||e[r]===void 0)?s.map(([r,n])=>e.slice(r,n<0?void 0:n).trim()):e.trim().replace(new RegExp(`^\\${t}|\\${t}$`,"g"),"").split(t).map(r=>r.trim())}function le(e,s,t,o,r){let n=e[s],l=t==="+"?"+":null,a=oe(n,t);if(l)a=a.slice(0,-1);else{let y=n.search(/[┌╭]/),m=n.search(/[┐╮]/),g=oe(n,t).map(([w])=>w-1),b=[y,...g,m];a=b.slice(0,-1).map((w,x)=>[w+1,b[x+1]])}if(!a.length)return null;let f=y=>new RegExp(`^\\s*[${r==="-"?"+":"\u251C\u255E\u2514\u2570\u2534\u253C\u2524\u2518\u256F"}][${r}+\u251C\u253C\u2524\u2534\u2514\u2518\u255E\u256A\u2561\u2550\u2570\u256F ]*\\s*$`).test(y)&&y.includes(r==="-"?"-":"\u2500"),i=[],p=[],q=!1,d=s+1;for(;d<e.length;d+=1){let y=e[d];if(f(y)){if(!q)q=!0;else if(/^\s*[+└╰]/.test(y)){d+=1;break}continue}if(!y.trimStart().startsWith(o))break;let m=O(y,a,o);q?p.length<1e5&&p.push(m.map(g=>g==="NULL"?null:g)):i.push(m)}if(!i.length)return null;let[c,h]=i;return{result:{columns:c.map((y,m)=>({name:y,type:h?.[m]??""})),rows:p,total:null},end:d}}function Se(e,s){let t=e[s+1],o=[];for(let i=0;i<t.length;i+=1)t[i]==="+"&&o.push(i);let r=[-1,...o.slice(0,500),-2],n=r.slice(0,-1).map((i,p)=>[i+1,r[p+1]===-2?-1:r[p+1]]),l=O(e[s],n,"|"),a=[],f=s+2;for(;f<e.length;f+=1){let i=e[f];if(!i.trim()||/^\(\d+ rows?\)$/.test(i.trim())||n.length>1&&!i.includes("|"))break;a.length<1e5&&a.push(O(i,n,"|"))}return{result:{columns:l.map(i=>({name:i,type:""})),rows:a,total:null},end:f}}var E=e=>typeof e=="object"&&e!==null&&!Array.isArray(e);function Ee(e){return(Array.isArray(e)?e:E(e)&&Array.isArray(e.statements)?e.statements:[e]).slice(0,500).map(t=>{if(typeof t=="string")return S(t.trim());if(!E(t))throw new TypeError("A statement must be an object or a string.");return Ae(t)})}function Ae(e){let s=e.query??e.sql??e.text??e.statement??"",t=S(typeof s=="string"?s.trim():"");t.params=Ce(e.params??e.parameters??e.values??e.bindings);let o=Array.isArray(e.rows)?e.rows:Array.isArray(e.data)?e.data:null,r=Array.isArray(e.columns)?e.columns:Array.isArray(e.fields)?e.fields:null;(o||r)&&(t.result=ve(o??[],r));let n=e.rowCount??e.total??e.count;t.result&&typeof n=="number"&&Number.isFinite(n)&&(t.result.total=n);let l=e.duration??e.time??e.elapsed;typeof l=="number"&&Number.isFinite(l)&&l>=0&&(t.duration=l),typeof e.message=="string"?t.message=e.message.slice(0,4e3):typeof e.command=="string"&&!t.result&&(t.message=e.command);let a=e.error;return typeof a=="string"?t.error=a.slice(0,4e3):E(a)&&typeof a.message=="string"&&(t.error=a.message.slice(0,4e3)),t}function Ce(e){return Array.isArray(e)?e.slice(0,200).map((s,t)=>({name:`$${t+1}`,value:ae(s)})):E(e)?Object.entries(e).slice(0,200).map(([s,t])=>({name:/^[:@$?]/.test(s)?s:`:${s}`,value:ae(t)})):[]}function ae(e){return e==null?"NULL":typeof e=="string"?`'${e.replace(/'/g,"''").slice(0,2e3)}'`:typeof e=="number"||typeof e=="boolean"||typeof e=="bigint"?String(e).toUpperCase()==="TRUE"||String(e).toUpperCase()==="FALSE"?String(e).toUpperCase():String(e):`'${(JSON.stringify(e)??"").slice(0,2e3)}'`}function ve(e,s){let t=(s??[]).slice(0,500).map(n=>{if(typeof n=="string")return{name:n,type:""};if(E(n)){let l=n.type??n.dataType??n.format??"";return{name:String(n.name??""),type:typeof l=="string"?l:""}}return{name:String(n),type:""}}),o=e.some(E);if(!t.length&&o){let n=new Set;for(let l of e.slice(0,1e3))if(E(l))for(let a of Object.keys(l))n.size<500&&n.add(a);t=[...n].map(l=>({name:l,type:""}))}!t.length&&e.length&&Array.isArray(e[0])&&(t=e[0].slice(0,500).map((n,l)=>({name:`${l+1}`,type:""})));let r=e.slice(0,1e5).map(n=>Array.isArray(n)?t.map((l,a)=>$(n[a])):E(n)?t.map(l=>$(n[l.name])):t.map((l,a)=>a===0?$(n):null));return{columns:t,rows:r,total:null}}function $(e){return e==null?null:typeof e=="string"?e:typeof e=="object"?JSON.stringify(e)??"":String(e)}function M(e){let s=[],t=0,o=(r,n)=>{s.push({type:r,text:e.slice(t,n)}),t=n};for(;t<e.length;){let r=e[t],n=e.slice(t,t+2);if(/\s/.test(r)){let l=t+1;for(;l<e.length&&/\s/.test(e[l]);)l+=1;o("space",l)}else if(n==="--"||r==="#"){let l=e.indexOf(`
`,t);o("comment",l<0?e.length:l)}else if(n==="/*"){let l=e.indexOf("*/",t+2);o("comment",l<0?e.length:l+2)}else if(r==="'"||/[eEnNbBxX]/.test(r)&&e[t+1]==="'")o("string",ie(e,r==="'"?t:t+1,"'"));else if(r==='"'||r==="`")o("ident",ie(e,t,r));else if(r==="["&&/^\[[\w\s.$#@-]{1,128}\]/.test(e.slice(t,t+131)))o("ident",e.indexOf("]",t)+1);else if(r==="$"&&/^\$(?:[A-Za-z_]\w*)?\$/.test(e.slice(t))){let l=/^\$(?:[A-Za-z_]\w*)?\$/.exec(e.slice(t))[0],a=e.indexOf(l,t+l.length);o("string",a<0?e.length:a+l.length)}else if(/\d/.test(r)||r==="."&&/\d/.test(e[t+1]??"")){let l=/^(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)/i.exec(e.slice(t));o("number",t+(l?l[0].length:1))}else if(/[\p{L}_@$:?]/u.test(r)){let l=/^[:@$?]?[\p{L}\p{N}_$#]*/u.exec(e.slice(t));o("word",t+Math.max(1,l?l[0].length:1))}else if(r==="(")o("open",t+1);else if(r===")")o("close",t+1);else if(r===",")o("comma",t+1);else if(r===";")o("punct",t+1);else if(r===".")o("op",t+1);else{let l=/^(?:::|->>|->|#>>|#>|<=|>=|<>|!=|\|\||<<|>>|=>|[-+*/%=<>!~^&|])/.exec(e.slice(t));o("op",t+(l?l[0].length:1))}}return s}function ie(e,s,t){let o=s+1;for(;o<e.length;)if(e[o]==="\\"&&t==="'"&&e[s-1]?.toLowerCase()==="e")o+=2;else if(e[o]===t)if(e[o+1]===t)o+=2;else return o+1;else o+=1;return e.length}var _e=new Set(`select from where and or not in is null like ilike between exists as on join inner left right
  full outer cross natural using group by order having limit offset fetch first next rows only
  union all intersect except distinct insert into values update set delete returning with
  recursive create table view index unique primary key foreign references default check
  constraint drop alter add column rename to if case when then else end asc desc nulls last
  over partition window filter lateral true false begin commit rollback transaction grant revoke
  truncate cascade restrict materialized replace conflict do nothing explain analyze verbose
  temporary temp sequence schema database trigger function procedure returns language
  interval cast collate escape some any similar top percent ties merge matched`.split(/\s+/)),Ne=["select","from","where","group by","order by","having","limit","offset","fetch","union all","union","intersect","except","values","set","returning","insert into","update","delete from","with recursive","with","on conflict","window","join","inner join","left join","left outer join","right join","right outer join","full join","full outer join","cross join","natural join","merge into","when matched","when not matched","partition by"].map(e=>e.split(" ")),Te=new Set(["select","group by","order by","set","returning","partition by"]),Re=/\b(?:in|from|join|as|exists|any|all|some|values|on|and|or|not|over|using|filter|within|into|table|lateral|then|else|when|select|where|by|is)$/i;function k(e,s={}){let t=s.indent??"  ",o=s.uppercase!==!1,r=M(e).filter(c=>c.type!=="space"||/\n[^\S\n]*\n/.test(c.text)),n=[{base:0,close:0,layout:!0,clause:"",list:!1}],l="",a=!0,f=()=>n[n.length-1],i=(c,h=!1)=>{l=l.replace(/[ \t]+$/,""),l&&(!a||h)&&(l+=`
`),l+=t.repeat(Math.max(0,c)),a=!0},p=(c,h=!0)=>{!a&&h&&!/[\s(]$/.test(l)&&(l+=" "),l+=c,a=!1},q=()=>{let c=l.slice(l.lastIndexOf(`
`)+1);return Math.floor((c.length-c.trimStart().length)/Math.max(1,t.length))},d=c=>{l=l.replace(/[ \t]+$/,"")+c,a=!1};for(let c=0;c<r.length;c+=1){let h=r[c],y=h.text.toLowerCase(),m=f();switch(h.type){case"space":i(0);break;case"word":{let g=m.layout?ue(r,c):null;if(g){i(m.base),p(g.words.map(x=>o?x.toUpperCase():x).join(" "),!1),m.clause=g.words.join(" "),c=g.end,m.list=Te.has(m.clause)&&Le(r,c+1)>1,m.list&&i(m.base+1);break}let b=/^(?:where|having|on|.*join)$/.test(m.clause);if(m.layout&&b&&(y==="and"||y==="or")&&!$e(r,c)){i(m.base+1),p(o?y.toUpperCase():h.text,!1);break}let w=o&&_e.has(y)&&!pe(r,c);/(?:\.|::)$/.test(l)?d(w?y.toUpperCase():h.text):p(w?y.toUpperCase():h.text);break}case"open":{let g=Oe(r,c),b=g==="select"||g==="with"||g==="values";/[\p{L}\p{N}_"`\]]$/u.test(l)&&!Re.test(l)&&m.clause!=="insert into"?d("("):p("(");let x=q();n.push({base:b?x+1:m.base,close:x,layout:b,clause:"",list:!1});break}case"close":{let g=n.length>1?n.pop():null;g?.layout?(i(g.close),p(")",!1)):d(")");break}case"comma":d(","),m.layout&&m.list&&i(m.base+1);break;case"punct":d(";"),n.length=1,n[0].clause="",n[0].list=!1,c<r.length-1&&(i(0),i(0,!0));break;case"comment":p(h.text),/^(?:--|#)/.test(h.text)&&c<r.length-1&&i(m.base+(m.list?1:0));break;default:h.text==="."||h.text==="::"?d(h.text):p(h.text)}}return l.replace(/[ \t]+$/gm,"").replace(/\n{3,}/g,`

`).trim()}function Le(e,s){let t=0,o=1;for(let r=s;r<e.length;r+=1){let n=e[r];if(n.type==="open")t+=1;else if(n.type==="close"){if(t===0)break;t-=1}else{if(n.type==="punct")break;if(t===0&&n.type==="comma")o+=1;else if(t===0&&n.type==="word"&&ue(e,r))break}}return o}function ue(e,s){if(pe(e,s))return null;let t=null;for(let o of Ne){let r=s,n=!0;for(let l=0;l<o.length;l+=1){for(;l>0&&e[r]?.type==="space";)r+=1;if(e[r]?.type!=="word"||e[r].text.toLowerCase()!==o[l]){n=!1;break}l<o.length-1&&(r+=1)}n&&(!t||o.length>t.words.length)&&(t={words:o,end:r})}return t}function pe(e,s){return e[s-1]?.text==="."||e[s+1]?.text==="."}function $e(e,s){for(let t=s-1,o=0;t>=0&&o<6;t-=1){if(e[t].type==="space")continue;o+=1;let r=e[t].text.toLowerCase();if(r==="between")return!0;if(r==="and"||r==="or"||e[t].type==="comma")return!1}return!1}function Oe(e,s){for(let t=s+1;t<e.length;t+=1)if(!(e[t].type==="space"||e[t].type==="comment"))return e[t].type==="word"?e[t].text.toLowerCase():"";return""}function fe(e){for(let s of M(e)){if(s.type==="space"||s.type==="comment"||s.type==="open")continue;if(s.type!=="word")return"";let t=s.text.toUpperCase();return/^[A-Z]{2,12}$/.test(t)?t:""}return""}function de(e,s=","){let t=o=>{let r=o??"";return new RegExp(`["\\r\\n${s==="	"?"\\t":s}]`).test(r)?`"${r.replace(/"/g,'""')}"`:r};return[e.columns.map(o=>t(o.name)),...e.rows.map(o=>o.map(t))].map(o=>o.join(s)).join(`
`)}var me=Object.freeze({sqlQuery:"Query",sqlStatement:"Statement {index}",sqlResult:"Result of statement {index}",sqlRows:"{count} rows",sqlRow:"1 row",sqlRowsShown:"{shown} of {count} rows",sqlNoRows:"No rows",sqlDuration:"{time}",sqlParams:"Parameters",sqlError:"Error",sqlNull:"NULL",sqlFormat:"Format the query",sqlAsWritten:"Show the query as written",sqlCopyQuery:"Copy query",sqlCopyCsv:"Copy as CSV",sqlDownloadCsv:"Download CSV",sqlShowRows:"Show {count} more rows",sqlSortBy:"Sort by {name}",sqlStatements:"{count} statements",sqlInvalid:"This JSON could not be read as SQL results: {message}",sqlNotRun:"Shown only: nothing is sent to a database."}),he={sqlQuery:"Requ\xEAte",sqlStatement:"Instruction {index}",sqlResult:"R\xE9sultat de l\u2019instruction {index}",sqlRows:"{count} lignes",sqlRow:"1 ligne",sqlRowsShown:"{shown} lignes sur {count}",sqlNoRows:"Aucune ligne",sqlParams:"Param\xE8tres",sqlError:"Erreur",sqlFormat:"Mettre en forme la requ\xEAte",sqlAsWritten:"Afficher la requ\xEAte telle qu\u2019\xE9crite",sqlCopyQuery:"Copier la requ\xEAte",sqlCopyCsv:"Copier en CSV",sqlDownloadCsv:"T\xE9l\xE9charger le CSV",sqlShowRows:"Afficher {count} lignes de plus",sqlSortBy:"Trier par {name}",sqlStatements:"{count} instructions",sqlInvalid:"Ce JSON n\u2019a pas pu \xEAtre lu comme des r\xE9sultats SQL : {message}",sqlNotRun:"Affichage seulement : rien n\u2019est envoy\xE9 \xE0 une base de donn\xE9es."};z({en:me,fr:he});var Me=["sql","postgresql","mysql","sqlite","mssql","oracle"],ge={sql:"SQL",postgresql:"PostgreSQL",mysql:"MySQL",sqlite:"SQLite",mssql:"SQL Server",oracle:"Oracle"};function ke(e){if(typeof e=="string")return e;let s={};if(typeof e=="object"&&e!==null&&!Array.isArray(e)){let t=e,o=t.dialect??t.database;typeof o=="string"&&(s.dialect=o)}return{content:V(e),attributes:s}}var ye=class extends K{static type="sql";static fromData=ke;static dataAttributes=Object.freeze(["dialect"]);static componentAttributes=Object.freeze(["dialect","format","format-toggle","line-numbers","max-rows","results","query","sortable"]);static presets={simple:{results:!0,query:!0,sortable:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,results:!0,query:!0,sortable:!0,"format-toggle":!0}};static styles=[I,D,se,re];constructor(){super(),this.parsed=null,this.formatChoice=null,this.sorts=new Map,this.shown=new Map,this.panelId=Q("panel"),this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.sorts.clear(),this.shown.clear()}parse(){let s=this.text??"";if(this.parsed?.text===s)return this.parsed;try{this.parsed={text:s,statements:ce(s),error:null}}catch(t){this.parsed={text:s,statements:[],error:t instanceof Error?t:new Error(String(t))}}return this.parsed}get statements(){return structuredClone(this.parse().statements)}get dialect(){let s=(this.getAttribute("dialect")??"").trim().toLowerCase(),t={postgres:"postgresql",pg:"postgresql",pgsql:"postgresql",mariadb:"mysql",sqlite3:"sqlite","sql-server":"mssql",sqlserver:"mssql",tsql:"mssql",plsql:"oracle"}[s];return P(t??s,Me,"sql")}get language(){let s=G(this.dialect==="postgresql"?"pgsql":"sql")??"plaintext";return s!=="plaintext"&&!J(s)&&Z(s).then(t=>t&&this.requestRender()),s}get formatted(){return this.formatChoice??this.feature("format")}flag(s){return this.feature(s)&&U(this.getAttribute(s))!==!1}renderContent(s){let t=this.t,{statements:o,error:r}=this.parse(),n=u("div",{class:"body sql-body",part:"body"});r?n.append(W(t("sqlInvalid",{message:r.message}))):o.forEach((c,h)=>n.append(this.statementView(c,h,o.length))),!r&&!o.length&&n.append(u("div",{class:"empty",part:"empty",text:t("empty")}));let l=u("div",{class:"panel",attrs:{id:this.panelId}}),a=[];if(this.editing){let c=this.createEditor();l.classList.add("sql-edit"),l.append(u("div",{class:"body editor-body",part:"body source"},c.element),n),a=this.historyButtons(c)}else l.append(n);let f=new X(n),i=/^\s*[[{]/.test(this.text??""),p=()=>o.map(c=>this.formatted?k(c.sql):c.sql).filter(Boolean).join(`

`),q=[this.searchButton(f),...a,this.feature("format-toggle")&&o.some(c=>c.sql)?F({icon:"wrap",label:this.formatted?t("sqlAsWritten"):t("sqlFormat"),key:"format",part:"format-button",pressed:this.formatted,onClick:()=>{this.formatChoice=!this.formatted,this.render()}}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(i?"results.json":"query.sql"),i?"application/json":"application/sql"):null,this.feature("copy")&&o.some(c=>c.sql)?this.copyButton(p,t("sqlCopyQuery")):null],d=o.length>1?`${ge[this.dialect]} \xB7 ${t("sqlStatements",{count:A(o.length,this.locale)})}`:ge[this.dialect];s.append(...this.chrome({badge:d,actions:q}),l),this.editor?.align()}statementView(s,t,o){let r=this.t,n=o>1?r("sqlStatement",{index:t+1}):r("sqlQuery"),l=u("section",{class:"sql-statement",part:"statement",attrs:{"aria-label":n,"data-kind":fe(s.sql).toLowerCase()}});if(s.sql&&this.flag("query")){let f=H(this.formatted?k(s.sql):s.sql,{language:this.language,lineNumbers:this.feature("line-numbers"),startLine:1,highlightRanges:[],diff:!1,highlightLimit:v().highlightLimit});l.append(u("div",{class:"sql-query",part:"query"},f.element))}s.params.length&&l.append(this.paramsView(s)),s.error&&l.append(u("div",{class:"sql-error",part:"sql-error",attrs:{role:"note"}},T("alert"),u("span",{class:"sr-only",text:`${r("sqlError")}: `}),u("pre",{text:s.error})));let a=this.summaryText(s);if(this.flag("results")&&(s.result||a)){let f=u("div",{class:"sql-result",part:"result"}),i=u("div",{class:"sql-summary",part:"summary"});if(a&&i.append(u("span",{text:a})),s.result?.columns.length&&this.feature("copy")){let p=s.result;i.append(u("span",{class:"spacer"}),this.copyTextButton(()=>de(p),r("sqlCopyCsv"),`csv-${t}`))}i.childElementCount&&f.append(i),s.result?.columns.length&&f.append(this.tableView(s.result,t,o)),l.append(f)}return l}paramsView(s){let t=u("dl",{class:"sql-params",part:"params"});for(let o of s.params)t.append(u("dt",{text:o.name}),u("dd",{},u("code",{text:o.value})));return u("div",{class:"sql-params-box"},u("span",{class:"sql-label",text:this.t("sqlParams")}),t)}summaryText(s){let t=this.t,o=[],r=s.result;if(r){let n=r.total??r.rows.length;o.push(n===0?t("sqlNoRows"):n===1?t("sqlRow"):t("sqlRows",{count:A(n,this.locale)}))}return s.duration!==null&&o.push(this.formatDuration(s.duration)),s.message&&o.push(s.message),o.join(" \xB7 ")}formatDuration(s){let t=(o,r)=>new Intl.NumberFormat(this.locale,{maximumFractionDigits:r}).format(o);return s>=1e3?`${t(s/1e3,2)} s`:`${t(s,s<10?3:0)} ms`}tableView(s,t,o){let r=this.t,n=s.columns.map((g,b)=>ee(s.rows.map(w=>w.map(x=>x??"")),b)),l=this.rowOrder(s,t,n),a=B(this.getAttribute("max-rows"),{min:1,max:1e5,fallback:200}),f=this.shown.get(t)??a,i=this.flag("sortable"),p=this.sorts.get(t),q=u("tr");s.columns.forEach((g,b)=>{let w=p?.column===b?p.direction:null,x=g.name||String(b+1),C=u("th",{class:`col-${n[b]}`,part:"header-cell",attrs:{scope:"col","aria-sort":i?w??"none":null,title:g.type||null}}),j=u("span",{class:"name",text:x});i?C.append(u("button",{class:"sort",attrs:{type:"button","data-focus-key":`sort-${t}-${b}`,title:r("sqlSortBy",{name:x})},on:{click:()=>this.sortBy(t,b,x)}},j,T(w==="ascending"?"sort-up":w==="descending"?"sort-down":"sort"))):C.append(j),q.append(C)});let d=u("tbody");for(let g of l.slice(0,f)){let b=u("tr");s.rows[g].forEach((w,x)=>{b.append(w===null?u("td",{class:`col-${n[x]} sql-null`,part:"cell null",text:r("sqlNull")}):u("td",{class:`col-${n[x]}`,part:"cell",text:w}))}),d.append(b)}s.rows.length||d.append(u("tr",{},u("td",{class:"no-rows",attrs:{colspan:s.columns.length},text:r("sqlNoRows")})));let c=u("table",{class:"grid",part:"table"},u("thead",{},q),d),h=u("div",{class:"sql-table",attrs:{tabindex:"0",role:"region","aria-label":o>1?r("sqlResult",{index:t+1}):r("sqlResult",{index:1})}},c),y=l.length-f;if(y<=0)return h;let m=u("button",{class:"text-btn sql-more",text:r("sqlShowRows",{count:A(Math.min(y,a),this.locale)}),attrs:{type:"button","data-focus-key":`more-${t}`},on:{click:()=>{this.shown.set(t,f+a),this.render()}}});return u("div",{},h,u("div",{class:"sql-more-bar"},u("span",{text:r("sqlRowsShown",{shown:A(f,this.locale),count:A(l.length,this.locale)})}),m))}rowOrder(s,t,o){let r=s.rows.map((i,p)=>p),n=this.sorts.get(t);if(!n)return r;let l=o[n.column],a=n.direction==="ascending"?1:-1,f=s.rows.map(i=>{let p=i[n.column];return p===null||p===""?null:te(p,l)});return r.sort((i,p)=>{let q=f[i],d=f[p];return q===null||typeof q=="number"&&Number.isNaN(q)?d===null?i-p:1:d===null||typeof d=="number"&&Number.isNaN(d)?-1:(typeof q=="number"&&typeof d=="number"?q-d:String(q).localeCompare(String(d),this.locale,{numeric:!0}))*a||i-p})}sortBy(s,t,o){let r=this.sorts.get(s),n=r?.column!==t?"ascending":r.direction==="ascending"?"descending":null;n?this.sorts.set(s,{column:t,direction:n}):this.sorts.delete(s),this.render(),N(this,_.SORT,{statement:s,column:t,name:o,direction:n??"none"})}createEditor(){return this.editor?.destroy(),this.editor=new Y({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":this.language,lineNumbers:!0,wrap:!1,highlightLimit:v().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:s=>this.edited(s),onChange:s=>N(this,_.CHANGE,{value:s}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.previewTimer=setTimeout(()=>this.render(),200)}};export{ye as a};
//# sourceMappingURL=chunk-JKO46BXT.js.map
