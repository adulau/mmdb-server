/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{j as q}from"./chunk-E4EMJARX.js";import{a as G}from"./chunk-YCSGENO5.js";import{r as $}from"./chunk-3VQOL2NW.js";import{U as v,X as B,b as R,l as c,n as F}from"./chunk-DNNVKOIB.js";import{h as O,k as T,l as N,m as P,q as A}from"./chunk-2IDMCIF6.js";var z=Object.freeze({regex:"Regular expression",regexPattern:"Pattern",regexTestText:"Test text",regexFlags:"Flags",regexMatches:"Matches",regexMatch:"Match",regexPosition:"Position",regexResult:"Replacement result",regexExplanation:"Explanation",regexInvalid:"Invalid pattern: {message}",regexInvalidBadge:"Invalid",regexCount:"{count} matches",regexNoMatch:"No match.",regexNoText:"No test text.",regexCapped:"Only the first {max} matches are shown.",regexTimeout:"Matching stopped after {ms} ms: this pattern is slow on this text.",regexTruncated:"Only the first {max} characters are tested.",regexRisky:"This pattern repeats a repetition, which can freeze the page on some texts. It was not run.",regexRunAnyway:"Run anyway",regexCopyPattern:"Copy the pattern",regexCopyMatches:"Copy matches as JSON",regexMatchTitle:"Match {n}",regexGroupTitle:"Group {n}",regexNamedGroupTitle:"Group {n} ({name})",regexUnmatched:"not matched",regexEmptyMatch:"empty",regexFlag_d:"indices",regexFlag_g:"global",regexFlag_i:"ignore case",regexFlag_m:"multiline",regexFlag_s:"dot matches all",regexFlag_u:"unicode",regexFlag_v:"unicode sets",regexFlag_y:"sticky",regexGroup:"Capturing group {n}",regexNamedGroup:"Group \u201C{name}\u201D ({n})",regexNonCapture:"Group (not captured)",regexLookahead:"Followed by",regexNegLookahead:"Not followed by",regexLookbehind:"Preceded by",regexNegLookbehind:"Not preceded by",regexModifiers:"With flags {name}",regexAlternation:"One of these alternatives",regexAlternative:"Alternative {n}",regexRepeat:"Repeated {times}:",regexClass:"One character among {items}",regexNegClass:"One character not among {items}",regexAny:"Any character",regexAnyNoBreak:"Any character except a line break",regexLineStart:"Start of a line",regexLineEnd:"End of a line",regexTextStart:"Start of the text",regexTextEnd:"End of the text",regexBoundary:"Word boundary",regexNotBoundary:"Not a word boundary",regexDigit:"A digit",regexNotDigit:"A character that is not a digit",regexWord:"A word character (letter, digit or _)",regexNotWord:"A character that is not a word character",regexSpace:"A whitespace character",regexNotSpace:"A character that is not whitespace",regexProperty:"A character with the Unicode property {text}",regexNotProperty:"A character without the Unicode property {text}",regexControl:"The character {text}",regexCode:"The character {text}",regexBackref:"The same text as group {ref}",regexLiteral:"The text \u201C{text}\u201D",regexZeroOrMore:"zero or more times",regexOneOrMore:"one or more times",regexOptional:"optional",regexExactly:"exactly {n} times",regexAtLeast:"{n} times or more",regexBetween:"between {min} and {max} times",regexLazy:"(as few as possible)"}),I={regex:"Expression r\xE9guli\xE8re",regexPattern:"Motif",regexTestText:"Texte de test",regexFlags:"Options",regexMatches:"Correspondances",regexMatch:"Correspondance",regexPosition:"Position",regexResult:"R\xE9sultat du remplacement",regexExplanation:"Explication",regexInvalid:"Motif invalide : {message}",regexInvalidBadge:"Invalide",regexCount:"{count} correspondances",regexNoMatch:"Aucune correspondance.",regexNoText:"Aucun texte de test.",regexCapped:"Seules les {max} premi\xE8res correspondances sont affich\xE9es.",regexTimeout:"Recherche arr\xEAt\xE9e apr\xE8s {ms} ms : ce motif est lent sur ce texte.",regexTruncated:"Seuls les {max} premiers caract\xE8res sont test\xE9s.",regexRisky:"Ce motif r\xE9p\xE8te une r\xE9p\xE9tition, ce qui peut bloquer la page sur certains textes. Il n\u2019a pas \xE9t\xE9 ex\xE9cut\xE9.",regexRunAnyway:"Ex\xE9cuter quand m\xEAme",regexCopyPattern:"Copier le motif",regexCopyMatches:"Copier les correspondances en JSON",regexMatchTitle:"Correspondance {n}",regexGroupTitle:"Groupe {n}",regexNamedGroupTitle:"Groupe {n} ({name})",regexUnmatched:"non trouv\xE9",regexEmptyMatch:"vide",regexFlag_d:"indices",regexFlag_g:"global",regexFlag_i:"casse ignor\xE9e",regexFlag_m:"multiligne",regexFlag_s:"point pour tout",regexFlag_u:"unicode",regexFlag_v:"ensembles unicode",regexFlag_y:"collant",regexGroup:"Groupe capturant {n}",regexNamedGroup:"Groupe \xAB {name} \xBB ({n})",regexNonCapture:"Groupe (non captur\xE9)",regexLookahead:"Suivi de",regexNegLookahead:"Non suivi de",regexLookbehind:"Pr\xE9c\xE9d\xE9 de",regexNegLookbehind:"Non pr\xE9c\xE9d\xE9 de",regexModifiers:"Avec les options {name}",regexAlternation:"Une de ces possibilit\xE9s",regexAlternative:"Possibilit\xE9 {n}",regexRepeat:"R\xE9p\xE9t\xE9 {times} :",regexClass:"Un caract\xE8re parmi {items}",regexNegClass:"Un caract\xE8re hors de {items}",regexAny:"N\u2019importe quel caract\xE8re",regexAnyNoBreak:"N\u2019importe quel caract\xE8re sauf un saut de ligne",regexLineStart:"D\xE9but d\u2019une ligne",regexLineEnd:"Fin d\u2019une ligne",regexTextStart:"D\xE9but du texte",regexTextEnd:"Fin du texte",regexBoundary:"Limite de mot",regexNotBoundary:"Pas une limite de mot",regexDigit:"Un chiffre",regexNotDigit:"Un caract\xE8re qui n\u2019est pas un chiffre",regexWord:"Un caract\xE8re de mot (lettre, chiffre ou _)",regexNotWord:"Un caract\xE8re qui n\u2019est pas un caract\xE8re de mot",regexSpace:"Un espace",regexNotSpace:"Un caract\xE8re qui n\u2019est pas un espace",regexProperty:"Un caract\xE8re avec la propri\xE9t\xE9 Unicode {text}",regexNotProperty:"Un caract\xE8re sans la propri\xE9t\xE9 Unicode {text}",regexControl:"Le caract\xE8re {text}",regexCode:"Le caract\xE8re {text}",regexBackref:"Le m\xEAme texte que le groupe {ref}",regexLiteral:"Le texte \xAB {text} \xBB",regexZeroOrMore:"z\xE9ro fois ou plus",regexOneOrMore:"une fois ou plus",regexOptional:"facultatif",regexExactly:"exactement {n} fois",regexAtLeast:"{n} fois ou plus",regexBetween:"entre {min} et {max} fois",regexLazy:"(le moins possible)"};var U=`/*
 * Regular expressions: the pattern colored by part, flag buttons, the test text with
 * matches and groups marked, the match table and the explanation tree.
 */
.vt {
  --_group-1: var(--vt-chart-2, var(--_info));
  --_group-2: var(--vt-chart-3, var(--_warning));
  --_group-3: var(--vt-chart-4, var(--_syntax-keyword));
  --_group-4: var(--vt-chart-5, var(--_danger));
  --_group-5: var(--vt-chart-6, var(--_syntax-string));
  --_group-6: var(--vt-chart-7, var(--_syntax-number));
}

.re-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
}

.re-results {
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
}

/* ---------- Pattern ---------- */

.re-pattern-row {
  overflow-x: auto;
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
}

.re-pattern {
  color: var(--_code-fg);
  font: 500 var(--_font-size) / var(--_line-height) var(--_font-mono);
  white-space: pre;
}

.tok-delim {
  color: var(--_fg-muted);
}

.tok {
  border-radius: 3px;
}

.tok-group,
.tok-alt {
  color: var(--_syntax-keyword);
  font-weight: 700;
}

.tok-look {
  color: var(--_syntax-function);
  font-weight: 700;
}

.tok-class {
  color: var(--_syntax-string);
}

.tok-quant {
  color: var(--_syntax-number);
}

.tok-anchor,
.tok-any {
  color: var(--_syntax-type);
  font-weight: 700;
}

.tok-escape,
.tok-backref {
  color: var(--_syntax-attr);
}

.tok.paired {
  outline: 1px solid var(--_accent);
  background: var(--_accent-soft);
}

.re-field {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
  padding: 0 var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  font-family: var(--_font-mono);
}

.re-field:focus-within {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.re-slash {
  color: var(--_fg-muted);
}

.re-input {
  flex: 1 1 auto;
  min-width: 0;
  height: 36px;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--_code-fg);
  font: 500 var(--_font-size) / 1 var(--_font-mono);
}

/* ---------- Flags ---------- */

.re-flags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.re-flag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1 var(--_font-ui);
  cursor: pointer;
}

.re-flag:hover {
  border-color: var(--_border-strong);
}

.re-flag:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.re-flag[aria-pressed='true'] {
  border-color: color-mix(in srgb, var(--_accent) 50%, var(--_border));
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.re-flag code {
  font: 700 var(--_font-size-small) / 1 var(--_font-mono);
}

.re-flag-name {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.re-run {
  margin-inline-start: var(--_space-2);
}

/* ---------- Text and matches ---------- */

.re-text {
  overflow: auto;
  max-height: var(--_max-height, 320px);
  margin: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font: var(--_font-size) / var(--_line-height) var(--_font-mono);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: var(--_tab-size);
}

.re-text:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.re-match {
  border-radius: 3px;
  background: var(--_highlight);
  box-shadow: inset 0 -2px 0 var(--_accent);
  color: inherit;
}

.re-match.odd {
  background: color-mix(in srgb, var(--_highlight) 55%, var(--_accent-soft));
}

.re-match.empty {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  margin: 0 -1px;
  vertical-align: text-bottom;
  background: var(--_accent);
  box-shadow: none;
}

.re-group {
  --_g: var(--_group-1);
  border-radius: 2px;
  background: color-mix(in srgb, var(--_g) 22%, transparent);
  box-shadow: inset 0 -2px 0 var(--_g);
}

.g2 {
  --_g: var(--_group-2);
}

.g3 {
  --_g: var(--_group-3);
}

.g4 {
  --_g: var(--_group-4);
}

.g5 {
  --_g: var(--_group-5);
}

.g6 {
  --_g: var(--_group-6);
}

/* ---------- Sections ---------- */

.re-section {
  min-width: 0;
}

.re-heading {
  margin: 0 0 var(--_space-2);
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.re-replace-source {
  color: var(--_fg-muted);
  font: var(--_font-size-small) var(--_font-mono);
}

.re-table-wrap {
  overflow: auto;
  max-height: 320px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.re-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.re-table th,
.re-table td {
  padding: 5px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.re-table thead th {
  position: sticky;
  top: 0;
  background: var(--_surface-sunken);
  font-weight: 600;
  white-space: nowrap;
}

.re-table code {
  font-family: var(--_font-mono);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.re-table .num,
.re-table .pos {
  width: 1%;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.re-swatch {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-inline-end: 6px;
  border-radius: 2px;
  background: var(--_g, var(--_group-1));
}

.blank {
  color: var(--_fg-muted);
  font-style: italic;
}

/* ---------- Explanation ---------- */

.re-explain summary {
  cursor: pointer;
}

.re-explain ul {
  margin: 0;
  padding-inline-start: var(--_space-4);
  border-inline-start: 1px solid var(--_border);
  list-style: none;
}

.re-explain > ul {
  padding-inline-start: 0;
  border: 0;
}

.re-explain-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-2);
  padding: 3px 0;
  color: var(--_fg);
  font-size: var(--_font-size-ui);
}

.re-explain-source {
  padding: 1px 6px;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font: var(--_font-size-small) var(--_font-mono);
  white-space: pre;
}

.vt[data-fullscreen] .re-body {
  overflow: auto;
}
`;var ne={capture:"regexGroup",named:"regexNamedGroup","non-capture":"regexNonCapture",lookahead:"regexLookahead","negative-lookahead":"regexNegLookahead",lookbehind:"regexLookbehind","negative-lookbehind":"regexNegLookbehind",modifiers:"regexModifiers"},ie={digit:"regexDigit","not-digit":"regexNotDigit",word:"regexWord","not-word":"regexNotWord",space:"regexSpace","not-space":"regexNotSpace",property:"regexProperty","not-property":"regexNotProperty",control:"regexControl",code:"regexCode"};function H(i,t,e,a){let r=e.includes("m"),l=e.includes("s"),n=(s,g,h=[])=>({text:g,source:t.slice(s.start,s.end),start:s.start,end:s.end,children:h}),f=(s,g,h)=>{let o;return s===0&&g===1/0?o=a("regexZeroOrMore"):s===1&&g===1/0?o=a("regexOneOrMore"):s===0&&g===1?o=a("regexOptional"):s===g?o=a("regexExactly",{n:s}):g===1/0?o=a("regexAtLeast",{n:s}):o=a("regexBetween",{min:s,max:g}),h?`${o} ${a("regexLazy")}`:o},x=s=>{switch(s.type){case"seq":return s.items.flatMap(x);case"alt":return[n(s,a("regexAlternation"),s.alternatives.map((g,h)=>({...n(g,a("regexAlternative",{n:h+1}),x(g))})))];case"group":return[n(s,a(ne[s.kind],{n:s.n,name:s.name}),x(s.body))];case"quant":{let g=x(s.target),h=f(s.min,s.max,s.lazy);return g.length===1&&!g[0].children.length?[n(s,`${g[0].text}, ${h}`)]:[n(s,a("regexRepeat",{times:h}),g)]}case"class":{let g=s.items.join(" ");return[n(s,a(s.negate?"regexNegClass":"regexClass",{items:g}))]}case"any":return[n(s,a(l?"regexAny":"regexAnyNoBreak"))];case"anchor":return[n(s,a({start:r?"regexLineStart":"regexTextStart",end:r?"regexLineEnd":"regexTextEnd",boundary:"regexBoundary","not-boundary":"regexNotBoundary"}[s.kind]))];case"escape":return[n(s,a(ie[s.kind]??"regexCode",{text:s.text}))];case"backref":return[n(s,a("regexBackref",{ref:s.ref}))];case"literal":return s.text?[n(s,a("regexLiteral",{text:s.text}))]:[];default:return[]}};return x(i)}var C=["d","g","i","m","s","u","v","y"],X={d:"digit",D:"not-digit",w:"word",W:"not-word",s:"space",S:"not-space"},D={n:"\\n",r:"\\r",t:"\\t",f:"\\f",v:"\\v",0:"\\0"};function M(i){let t=new Set(String(i??"").split(""));return t.has("v")&&t.delete("u"),C.filter(e=>t.has(e)).join("")}function S(i,t){if(i.length>2e3)return{regex:null,error:"pattern too long"};try{return{regex:new RegExp(i,t),error:""}}catch(e){return{regex:null,error:(e instanceof Error?e.message:String(e)).replace(/^Invalid regular expression: /,"")}}}function L(i){let t=i.slice(0,2e3),e=0,a=0,r=()=>{let o=e,p=[l()],d=[];for(;t[e]==="|";)d.push(e),e+=1,p.push(l());return p.length===1?p[0]:{type:"alt",start:o,end:e,alternatives:p,pipes:d}},l=()=>{let o=e,p=[];for(;e<t.length&&t[e]!=="|"&&t[e]!==")";){let d=f(),u=n(d),m=p[p.length-1],b=y=>y.type==="literal"&&y.end-y.start===y.text.length;if(b(u)&&m&&b(m)&&m.end===u.start){if(m.type!=="literal"||u.type!=="literal")continue;m.text+=u.text,m.end=u.end}else p.push(u)}return{type:"seq",start:o,end:e,items:p}},n=o=>{let p=e,d=t[e],u,m;if(d==="*")[u,m]=[0,1/0];else if(d==="+")[u,m]=[1,1/0];else if(d==="?")[u,m]=[0,1];else if(d==="{"){let y=/^\{(\d+)(,(\d*))?\}/.exec(t.slice(e));if(!y)return o;u=Number(y[1]),m=y[2]===void 0?u:y[3]?Number(y[3]):1/0,e+=y[0].length-1}else return o;e+=1;let b=t[e]==="?";return b&&(e+=1),{type:"quant",start:o.start,end:e,target:o,min:u,max:m,lazy:b,qStart:p}},f=()=>{let o=e,p=t[e];return p==="("?x():p==="["?s():p==="."?{type:"any",start:o,end:e+=1}:p==="^"?{type:"anchor",start:o,end:e+=1,kind:"start"}:p==="$"?{type:"anchor",start:o,end:e+=1,kind:"end"}:p==="\\"?g():(e+=1,{type:"literal",start:o,end:e,text:p})},x=()=>{let o=e;e+=1;let p="capture",d="",u=t.slice(e),m=[["?:","non-capture"],["?=","lookahead"],["?!","negative-lookahead"],["?<=","lookbehind"],["?<!","negative-lookbehind"]],b=/^\?<([A-Za-z_$][\w$]*)>/.exec(u),y=/^\?[imsx-]+:/.exec(u),E=m.find(([ae])=>u.startsWith(ae));b?(p="named",d=b[1],e+=b[0].length):E?(p=E[1],e+=E[0].length):y&&(p="modifiers",d=y[0].slice(1,-1),e+=y[0].length);let Q=p==="capture"||p==="named"?++a:0,ee=e,te=r(),re=e;return t[e]===")"&&(e+=1),{type:"group",start:o,end:e,kind:p,n:Q,name:d,open:ee,close:re,body:te}},s=()=>{let o=e;e+=1;let p=t[e]==="^";p&&(e+=1);let d=[],u=0,m="";for(;e<t.length;){let b=t[e];if(b==="\\")m+=t.slice(e,e+2),e+=2;else{if(b==="["&&(u+=1),b==="]"){if(u===0)break;u-=1}m+=b,e+=1}u===0&&t[e]!=="-"&&!m.endsWith("-")&&(d.push(m),m="")}return m&&d.push(m),t[e]==="]"&&(e+=1),{type:"class",start:o,end:e,negate:p,items:d}},g=()=>{let o=e,p=t[e+1]??"";if(e+=2,p==="b"||p==="B")return{type:"anchor",start:o,end:e,kind:p==="b"?"boundary":"not-boundary"};if(X[p])return{type:"escape",start:o,end:e,kind:X[p],text:p};if(/[1-9]/.test(p)){let u=/^\d*/.exec(t.slice(e));return e+=u?u[0].length:0,{type:"backref",start:o,end:e,ref:t.slice(o+1,e)}}if(p==="k"){let u=/^<([^>]+)>/.exec(t.slice(e));if(u)return e+=u[0].length,{type:"backref",start:o,end:e,ref:u[1]}}if(p==="p"||p==="P"){let u=/^\{([^}]+)\}/.exec(t.slice(e));if(u)return e+=u[0].length,{type:"escape",start:o,end:e,kind:p==="p"?"property":"not-property",text:u[1]}}let d=/^(x[0-9a-fA-F]{2}|u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|c[A-Za-z])/.exec(t.slice(e-1));return d?(e+=d[0].length-1,{type:"escape",start:o,end:e,kind:"code",text:`\\${d[0]}`}):D[p]?{type:"escape",start:o,end:e,kind:"control",text:D[p]}:{type:"literal",start:o,end:e,text:p}},h=r();for(;e<t.length;){let o={type:"literal",start:e,end:e+1,text:")"};e+=1;let p=r();h={type:"seq",start:0,end:e,items:[h,o,p]}}return{tree:h,groups:a}}function k(i){switch(i.type){case"literal":return new Set([i.text.charAt(0).toLowerCase()]);case"group":return i.kind==="capture"||i.kind==="named"||i.kind==="non-capture"?k(i.body):null;case"seq":return i.items.length?k(i.items[0]):null;case"quant":return i.min>0?k(i.target):null;case"alt":{let t=new Set;for(let e of i.alternatives){let a=k(e);if(!a)return null;for(let r of a)t.add(r)}return t}default:return null}}function oe(i){let t=new Set;for(let e of i.alternatives){let a=k(e);if(!a)return!0;for(let r of a){if(t.has(r))return!0;t.add(r)}}return!1}var ce=3;function _(i,t=!1){switch(i.type){case"quant":{let e=i.max>1;return t&&e?!0:_(i.target,t||e)}case"group":return _(i.body,t);case"seq":return i.items.filter(e=>e.type==="quant"&&e.max===1/0).length>=ce?!0:i.items.some(e=>_(e,t));case"alt":return t&&oe(i)?!0:i.alternatives.some(e=>_(e,t));default:return!1}}function W(i,t){let e=performance.now(),a=t.length>1e5,r=a?t.slice(0,1e5):t,l=i.flags;l.includes("d")||(l+="d");let n=i.global||i.sticky,f=new RegExp(i.source,n?l:`${l}g`),x=i.unicode||i.flags.includes("v"),s=[],g=!1,h=!1;for(;;){let o=f.exec(r);if(!o)break;let p=o.indices;if(s.push({index:o.index,end:o.index+o[0].length,text:o[0],groups:o.slice(1),ranges:p?p.slice(1).map(d=>d?[d[0],d[1]]:void 0):[],named:o.groups?{...o.groups}:{}}),!i.global)break;if(o[0].length===0){let d=r.codePointAt(f.lastIndex)??0;if(f.lastIndex+=x&&d>65535?2:1,f.lastIndex>r.length)break}if(s.length>=1e3){g=!0;break}if(performance.now()-e>100){h=!0;break}}return{matches:s,capped:g,timedOut:h,truncated:a,ms:performance.now()-e}}function j(i,t){let e="",a=!1;for(let r=0;r<i.length;r+=1){let l=i[r];l==="\\"?(e+=i.slice(r,r+2),r+=1):l===`
`?e+="\\n":l==="\r"?e+="\\r":(l==="["?a=!0:l==="]"&&(a=!1),e+=l==="/"&&!a?"\\/":l)}return`/${e||"(?:)"}/${t}`}function V(i){let t=[],e=0,a=r=>{switch(r.type){case"alt":r.alternatives.forEach((l,n)=>{a(l),n<r.pipes.length&&t.push({start:r.pipes[n],end:r.pipes[n]+1,kind:"alt"})});break;case"seq":r.items.forEach(a);break;case"group":{let l=++e,n=r.kind.includes("look")?"look":"group";t.push({start:r.start,end:r.open,kind:n,pair:l}),a(r.body),r.end>r.close&&t.push({start:r.close,end:r.end,kind:n,pair:l});break}case"quant":a(r.target),t.push({start:r.qStart,end:r.end,kind:"quant"});break;case"literal":r.end-r.start>r.text.length&&t.push({start:r.start,end:r.end,kind:"escape"});break;default:t.push({start:r.start,end:r.end,kind:r.type})}};return a(i),t.sort((r,l)=>r.start-l.start)}P({en:z,fr:I});var Z=6,ue=12,K=class extends B{static type="regex";static fromData=q;static dataAttributes=Object.freeze(["pattern","flags","replace"]);static componentAttributes=Object.freeze(["pattern","flags","replace","flag-buttons","explain","table"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,"flag-buttons":!0,explain:!0,table:!0}};static styles=[R,G,U];static allowEmpty=!0;static upgradeProperties=["content","pattern","flags"];constructor(){super(),this.patternState=null,this.flagState=null,this.forceRun=!1,this.cache=null,this.resultsHost=null,this.editor=null,this.timer=void 0,this.textId=F("regex-text")}disconnectedCallback(){clearTimeout(this.timer),this.editor?.destroy(),super.disconnectedCallback()}attributeChangedCallback(t,e,a){t==="pattern"&&(this.patternState=null,this.forceRun=!1),t==="flags"&&(this.flagState=null),super.attributeChangedCallback(t,e,a)}get pattern(){return(this.patternState??this.getAttribute("pattern")??"").slice(0,2e3)}set pattern(t){this.setAttribute("pattern",String(t??""))}get flags(){return M(this.flagState??this.getAttribute("flags")??"g")}set flags(t){this.setAttribute("flags",String(t??""))}get results(){return(this.run().result?.matches??[]).map(t=>({...t,groups:[...t.groups],ranges:[...t.ranges],named:{...t.named}}))}run(){let t=this.text??"",e=`${this.flags}\0${this.forceRun}\0${this.pattern}\0${t}`;if(this.cache?.key===e)return this.cache;let{regex:a,error:r}=S(this.pattern,this.flags),l=!!a&&_(L(this.pattern).tree)&&!this.forceRun,n=a&&!l?W(a,t):null;return this.cache={key:e,result:n,error:r,risky:l},n&&N(this,T.MATCH,{count:n.matches.length,capped:n.capped,timedOut:n.timedOut}),this.cache}matchesJson(){let t=this.run().result?.matches??[];return JSON.stringify(t.map(e=>({index:e.index,match:e.text,groups:e.groups,...Object.keys(e.named).length?{named:e.named}:{}})),null,2)}renderContent(t){let e=this.t,a=c("div",{class:"body re-body",part:"body"}),r=[];if(this.editing){let n=c("input",{class:"re-input",part:"pattern-input",attrs:{type:"text",value:this.pattern,"aria-label":e("regexPattern"),spellcheck:"false",autocomplete:"off",maxlength:2e3,"data-focus-key":"regex-pattern"},on:{input:x=>{this.patternState=x.target.value,this.forceRun=!1,this.changed()}}});n.value=this.pattern;let f=this.createEditor();a.append(c("label",{class:"re-field"},c("span",{class:"re-slash",text:"/"}),n,c("span",{class:"re-slash",text:`/${this.flags}`})),c("div",{class:"editor-body",part:"source"},f.element)),r=this.historyButtons(f)}this.resultsHost=c("div",{class:"re-results"}),a.append(this.resultsHost),this.renderResults();let l=[...r,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.matchesJson(),this.downloadName("matches.json"),"application/json"):null,this.feature("copy")?this.copyButton(()=>this.matchesJson(),e("regexCopyMatches"),"copy-matches"):null,this.feature("copy")?this.copyButton(()=>j(this.pattern,this.flags),e("regexCopyPattern")):null];t.append(...this.chrome({badge:this.badge(),actions:l}),a),this.editor?.align()}badge(){let{result:t,error:e}=this.run();if(e)return this.t("regexInvalidBadge");if(!t)return"";let a=t.matches.length;return this.t("regexCount",{count:`${A(a,this.locale)}${t.capped||t.timedOut?"+":""}`})}renderResults(){let t=this.resultsHost;if(!t)return;let e=this.t,{result:a,error:r,risky:l}=this.run(),{tree:n,groups:f}=L(this.pattern),x=[this.patternView(n)];this.feature("flag-buttons")&&x.push(this.flagButtons()),r&&x.push(v(e("regexInvalid",{message:r}))),l&&x.push(this.riskyNotice()),a?.truncated&&x.push(v(e("regexTruncated",{max:A(1e5,this.locale)}))),a?.capped&&x.push(v(e("regexCapped",{max:A(1e3,this.locale)}))),a?.timedOut&&x.push(v(e("regexTimeout",{ms:100})));let s=w(n);x.push(this.textView(a?.matches??[],s));let g=this.getAttribute("replace");g!==null&&a&&!r&&x.push(this.replaceView(g,a)),this.feature("table")&&a&&x.push(this.matchTable(a.matches,f,s)),this.feature("explain")&&this.pattern&&!r&&x.push(this.explanation(n)),t.replaceChildren(...x.filter(o=>o!==null));let h=this.root.querySelector('[part~="badge"]');h&&(h.textContent=this.badge())}patternView(t){let e=this.pattern,a=c("code",{class:"re-pattern",part:"pattern",attrs:{"aria-label":this.t("regexPattern")}});a.append(c("span",{class:"tok-delim",text:"/"}));let r=0;for(let n of V(t))n.start<r||(n.start>r&&a.append(e.slice(r,n.start)),a.append(c("span",{class:`tok tok-${n.kind}`,text:e.slice(n.start,n.end),attrs:{"data-pair":n.pair??null}})),r=n.end);r<e.length&&a.append(e.slice(r)),a.append(c("span",{class:"tok-delim",text:`/${this.flags}`}));let l=(n,f)=>{let x=n.target.closest?.("[data-pair]"),s=x instanceof HTMLElement?x.dataset.pair:null;if(s)for(let g of a.querySelectorAll(`[data-pair="${s}"]`))g.classList.toggle("paired",f)};return a.addEventListener("mouseover",n=>l(n,!0)),a.addEventListener("mouseout",n=>l(n,!1)),c("div",{class:"re-pattern-row"},a)}flagButtons(){let t=this.t,e=this.flags,a=c("div",{class:"re-flags",part:"flags",attrs:{role:"group","aria-label":t("regexFlags")}});for(let r of C)a.append(c("button",{class:"re-flag",attrs:{type:"button","aria-pressed":String(e.includes(r)),title:t(`regexFlag_${r}`),"data-focus-key":`flag-${r}`},on:{click:()=>this.toggleFlag(r)}},c("code",{text:r}),c("span",{class:"re-flag-name",text:t(`regexFlag_${r}`)})));return a}toggleFlag(t){let e=new Set(this.flags.split(""));e.has(t)?e.delete(t):(e.add(t),t==="u"&&e.delete("v"),t==="v"&&e.delete("u")),this.flagState=M([...e].join("")),this.render(),this.changed(!0)}riskyNotice(){let t=v(this.t("regexRisky"));return t.append(c("button",{class:"text-btn re-run",text:this.t("regexRunAnyway"),attrs:{type:"button","data-focus-key":"regex-run"},on:{click:()=>{this.forceRun=!0,this.renderResults()}}})),t}textView(t,e){let a=this.text??"",r=c("pre",{class:"re-text",part:"text",attrs:{id:this.textId,tabindex:"0",role:"region","aria-label":this.t("regexTestText")}});if(!a)return r.append(c("span",{class:"empty",text:this.t("regexNoText")})),r;let l=0;return t.forEach((n,f)=>{n.index>l&&r.append(a.slice(l,n.index)),r.append(this.markMatch(n,f,a,e)),l=Math.max(l,n.end)}),l<a.length&&r.append(a.slice(l)),r}markMatch(t,e,a,r){let l=this.t,n=c("mark",{class:`re-match${e%2?" odd":""}${t.text?"":" empty"}`,part:"match",attrs:{title:l("regexMatchTitle",{n:e+1})}});if(!t.text)return n;let f=new Set([t.index,t.end]);for(let s of t.ranges)s&&f.add(s[0]).add(s[1]);let x=[...f].filter(s=>s>=t.index&&s<=t.end).sort((s,g)=>s-g);for(let s=0;s<x.length-1;s+=1){let[g,h]=[x[s],x[s+1]],o=-1;t.ranges.forEach((d,u)=>{!d||d[0]>g||d[1]<h||(o<0||d[1]-d[0]<=t.ranges[o][1]-t.ranges[o][0])&&(o=u)});let p=a.slice(g,h);if(o<0)n.append(p);else{let d=o+1,u=r.get(d);n.append(c("span",{class:`re-group g${o%Z+1}`,part:"group",text:p,attrs:{title:u?l("regexNamedGroupTitle",{n:d,name:u}):l("regexGroupTitle",{n:d})}}))}}return n}replaceView(t,e){if(e.capped||e.timedOut||e.truncated)return null;let{regex:a}=S(this.pattern,this.flags);if(!a)return null;let r=(this.text??"").replace(a,t);return c("section",{class:"re-section",attrs:{"aria-label":this.t("regexResult")}},c("h3",{class:"re-heading"},this.t("regexResult")," ",c("code",{class:"re-replace-source",text:t})),c("pre",{class:"re-text re-replaced",part:"replace",text:r}))}matchTable(t,e,a){let r=this.t,l=c("section",{class:"re-section",attrs:{"aria-label":r("regexMatches")}},c("h3",{class:"re-heading",text:r("regexMatches")}));if(!t.length)return l.append(c("div",{class:"empty",part:"empty",text:r("regexNoMatch")})),l;let n=Math.min(e,ue),f=c("tr",{},c("th",{class:"num",attrs:{scope:"col"},text:"#"}),c("th",{attrs:{scope:"col"},text:r("regexPosition")}),c("th",{attrs:{scope:"col"},text:r("regexMatch")}));for(let s=1;s<=n;s+=1){let g=a.get(s);f.append(c("th",{attrs:{scope:"col"}},c("span",{class:`re-swatch g${(s-1)%Z+1}`,attrs:{"aria-hidden":"true"}}),g?`${s} \xB7 ${g}`:String(s)))}let x=c("tbody");return t.forEach((s,g)=>{let h=c("tr",{},c("td",{class:"num",text:String(g+1)}),c("td",{class:"pos",text:`${s.index}\u2013${s.end}`}),c("td",{},Y(s.text,r)));for(let o=0;o<n;o+=1)h.append(c("td",{},Y(s.groups[o],r)));x.append(h)}),l.append(c("div",{class:"re-table-wrap"},c("table",{class:"re-table",part:"table"},c("thead",{},f),x))),l}explanation(t){let e=this.t,a=H(t,this.pattern,this.flags,e),r=l=>c("ul",{},...l.map(n=>c("li",{},c("div",{class:"re-explain-line"},c("code",{class:"re-explain-source",text:n.source}),c("span",{text:n.text})),n.children.length?r(n.children):null)));return c("details",{class:"re-section re-explain",part:"explanation",attrs:{open:!0}},c("summary",{class:"re-heading",text:e("regexExplanation")}),r(a))}changed(t=!1){let e=()=>{this.renderResults(),N(this,T.CHANGE,{pattern:this.pattern,flags:this.flags,value:this.text??""})};clearTimeout(this.timer),t?N(this,T.CHANGE,{pattern:this.pattern,flags:this.flags,value:this.text??""}):this.timer=setTimeout(e,150)}createEditor(){return this.editor?.destroy(),this.editor=new $({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!0,highlightLimit:O().highlightLimit,label:this.t("regexTestText"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),history:this.editHistory??void 0}),this.editor}contentEdited(){this.changed()}};function Y(i,t){return i===void 0?c("span",{class:"blank",text:t("regexUnmatched")}):i===""?c("span",{class:"blank",text:t("regexEmptyMatch")}):c("code",{text:i.length>200?`${i.slice(0,199)}\u2026`:i})}function w(i,t=new Map){if(i.type==="group")i.kind==="named"&&t.set(i.n,i.name),w(i.body,t);else if(i.type==="quant")w(i.target,t);else if(i.type==="seq")for(let e of i.items)w(e,t);else if(i.type==="alt")for(let e of i.alternatives)w(e,t);return t}export{K as a};
//# sourceMappingURL=chunk-XYQ7BEUD.js.map
