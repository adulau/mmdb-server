/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as fe,g as be,h as me,i as xe,k as we}from"./chunk-3VQOL2NW.js";import{I as ke,l as G}from"./chunk-DNNVKOIB.js";var rr=`/*
 * Rendered Markdown. The content inherits the host page font (it is the host's content);
 * only the chrome uses the UI font. Spec: docs/DESIGN_SYSTEM.md \xA73.3.
 */
.vt.md {
  font-family: var(--vt-font-body, inherit);
  font-size: var(--vt-font-size-body, inherit);
}

.vt {
  container-type: inline-size;
}

.panel {
  min-width: 0;
}

.panel.split {
  /* Panes scroll on their own so they can be kept in sync; max-height sets their size. */
  --_split-height: var(--_max-height, min(70vh, 640px));
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.panel.split > .body {
  height: var(--_split-height);
  max-height: none;
}

.panel.split > .body + .body {
  border-left: 1px solid var(--_border);
}

.panel.split:is([data-preview='top'], [data-preview='bottom']) {
  grid-template-columns: minmax(0, 1fr);
}

.panel.split:is([data-preview='top'], [data-preview='bottom']) > .body {
  height: calc(var(--_split-height) / 2);
}

.panel.split:is([data-preview='top'], [data-preview='bottom']) > .body + .body {
  border-top: 1px solid var(--_border);
  border-left: 0;
}

@container (max-width: 640px) {
  .panel.split {
    grid-template-columns: minmax(0, 1fr);
  }

  .panel.split > .body {
    height: calc(var(--_split-height) / 2);
  }

  .panel.split > .body + .body {
    border-top: 1px solid var(--_border);
    border-left: 0;
  }
}

.md-body {
  padding: var(--_space-5);
  background: var(--_surface);
}

/* ---------- Table of contents ---------- */

.toc {
  margin: 0 0 var(--_space-5);
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.toc summary {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
}

.toc-list {
  margin: var(--_space-2) 0 var(--_space-1);
  padding: 0;
  list-style: none;
}

.toc-list li {
  padding: 2px 0;
}

.toc-list a {
  color: var(--_accent-fg);
  text-decoration: none;
}

.toc-list a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.toc-level-1 {
  padding-left: var(--_space-4) !important;
}

.toc-level-2 {
  padding-left: var(--_space-6) !important;
}

.toc-level-3 {
  padding-left: 48px !important;
}

/* ---------- Typography ---------- */

.markdown {
  color: var(--_fg);
  line-height: 1.65;
  overflow-wrap: break-word;
}

.markdown > :first-child,
.markdown > [data-vt-line]:first-child + * {
  margin-top: 0;
}

.markdown > :last-child {
  margin-bottom: 0;
}

.markdown :is(h1, h2, h3, h4, h5, h6) {
  position: relative;
  margin: 1.6em 0 0.6em;
  color: var(--_fg);
  font-weight: 650;
  line-height: 1.25;
  scroll-margin-top: var(--_space-4);
}

.markdown h1 {
  font-size: 1.75em;
  letter-spacing: -0.02em;
}

.markdown h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid var(--_border);
  font-size: 1.4em;
  letter-spacing: -0.01em;
}

.markdown h3 {
  font-size: 1.2em;
}

.markdown h4 {
  font-size: 1.05em;
}

.markdown :is(h5, h6) {
  color: var(--_fg-muted);
  font-size: 0.95em;
}

.markdown :is(h1, h2, h3, h4, h5, h6):focus {
  outline: none;
}

.anchor {
  display: inline-grid;
  place-items: center;
  width: 1.4em;
  height: 1.4em;
  margin-left: 0.25em;
  border-radius: var(--_radius-sm);
  color: var(--_fg-muted);
  vertical-align: middle;
  opacity: 0;
  transition: opacity var(--_duration-fast) var(--_easing);
}

.anchor .icon {
  width: 0.8em;
  height: 0.8em;
}

:is(h1, h2, h3, h4, h5, h6):hover .anchor,
.anchor:focus-visible {
  opacity: 1;
}

.anchor:hover {
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

@media (hover: none) {
  .anchor {
    opacity: 0.6;
  }
}

.markdown :is(p, ul, ol, dl, blockquote, .table-wrap, .code-block, details, figure) {
  margin: 0 0 1em;
}

.markdown a {
  color: var(--_accent-fg);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

.markdown a:hover {
  text-decoration-thickness: 2px;
}

.markdown :is(ul, ol) {
  padding-left: 1.6em;
}

.markdown li + li {
  margin-top: 0.25em;
}

.markdown li > :is(ul, ol) {
  margin: 0.25em 0 0;
}

.markdown li:has(> input[type='checkbox']) {
  list-style: none;
}

.markdown li > input[type='checkbox'] {
  margin: 0 0.5em 0 -1.4em;
  vertical-align: -0.1em;
  accent-color: var(--_accent);
}

.markdown blockquote {
  padding: 0 0 0 1em;
  border-left: 3px solid var(--_border-strong);
  color: var(--_fg-muted);
}

.markdown hr {
  height: 0;
  margin: 2em 0;
  border: 0;
  border-top: 1px solid var(--_border);
}

.markdown img {
  max-width: 100%;
  height: auto;
  border-radius: var(--_radius-sm);
}

.vt-blocked-image {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  padding: 2px 8px;
  border: 1px dashed var(--_border-strong);
  border-radius: var(--_radius-sm);
  color: var(--_fg-muted);
  font-size: 0.875em;
}

.vt-blocked-image:empty::before {
  content: '\\25A1';
}

.markdown :is(code, kbd, samp) {
  font-family: var(--_font-mono);
  font-size: 0.875em;
}

.markdown :not(pre) > code {
  padding: 0.12em 0.35em;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.markdown kbd {
  padding: 0.1em 0.4em;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  box-shadow: inset 0 -1px 0 var(--_border-strong);
}

.markdown mark {
  background: var(--_highlight);
  color: inherit;
}

/* ---------- Code blocks ---------- */

.code-block {
  position: relative;
}

.code-block pre {
  margin: 0;
  padding: var(--_space-3) var(--_space-4);
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
  tab-size: var(--_tab-size);
}

.code-block pre code {
  font-size: inherit;
}

.code-block > .btn {
  position: absolute;
  top: var(--_space-1);
  right: var(--_space-1);
  border: 1px solid var(--_border);
  background: var(--_surface);
  opacity: 0;
}

.code-block:hover > .btn,
.code-block > .btn:focus-visible,
.code-block > .btn.done {
  opacity: 1;
}

@media (hover: none) {
  .code-block > .btn {
    opacity: 1;
  }
}

/* ---------- Tables ---------- */

.table-wrap {
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.markdown table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.925em;
  font-variant-numeric: tabular-nums;
}

.markdown :is(th, td) {
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.markdown tr:last-child td {
  border-bottom: 0;
}

.markdown th {
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}

.markdown :is(th, td)[align='center'] {
  text-align: center;
}

.markdown :is(th, td)[align='right'] {
  text-align: end;
}

.markdown details {
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.markdown summary {
  cursor: pointer;
  font-weight: 600;
}
`;function le(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var I=le();function Ce(r){I=r}var C={exec:()=>null};function P(r){let e=[];return t=>{let s=Math.max(0,Math.min(3,t-1)),n=e[s];return n||(n=r(s),e[s]=n),n}}function h(r,e=""){let t=typeof r=="string"?r:r.source,s={replace:(n,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(w.caret,"$1"),t=t.replace(n,a),s},getRegex:()=>new RegExp(t,e)};return s}var Le=((r="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+r)}catch{return!1}})(),w={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\][ \t]+\S/,listReplaceTask:/^\[[ xX]\][ \t]+/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:P(r=>new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:P(r=>new RegExp(`^ {0,${r}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:P(r=>new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)),headingBeginRegex:P(r=>new RegExp(`^ {0,${r}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:P(r=>new RegExp(`^ {0,${r}}#`)),htmlBeginRegex:P(r=>new RegExp(`^ {0,${r}}(?:</?(?:${j})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:P(r=>new RegExp(`^ {0,${r}}>`))},Qe=/^(?:[ \t]*(?:\n|$))+/,Ne=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,je=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/,N=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ue=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ae=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Ie=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/,Ee=h(Ie).replace(/bull/g,ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Fe=h(Ie).replace(/bull/g,ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),oe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,We=/^[^\n]+/,ce=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/,Xe=h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ce).replace("title",/(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(),Ge=h(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,ae).getRegex(),j="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ve=h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",pe).replace("tag",j).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),qe=r=>h(oe).replace("hr",N).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",r).replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",j).getRegex(),Ye=qe(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Je=qe(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Ke=h(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph",Je).getRegex(),he={blockquote:Ke,code:Ne,def:Xe,fences:je,heading:Ue,hr:N,html:Ve,lheading:Ee,list:Ge,newline:Qe,paragraph:Ye,table:C,text:We},ye=h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",N).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",j).getRegex(),et={...he,lheading:Fe,table:ye,paragraph:h(oe).replace("hr",N).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ye).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",j).getRegex()},tt={...he,html:h(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment",pe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:C,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:h(oe).replace("hr",N).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ee).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},rt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Be=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,st=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,v=/[\p{P}\p{S}]/u,D=/[\s\p{P}\p{S}]/u,U=/[^\s\p{P}\p{S}]/u,it=h(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,D).getRegex(),lt=/[\p{Pi}\p{Ps}"']/u,Ze=/(?!~)[\p{P}\p{S}]/u,at=/(?!~)[\s\p{P}\p{S}]/u,ot=/(?:[^\s\p{P}\p{S}]|~)/u,ct=h(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Le?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),De=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,pt=h(De,"u").replace(/punct/g,v).getRegex(),ht=h(De,"u").replace(/punct/g,Ze).getRegex(),ut=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,gt=h(ut,"u").replace(/openQuote/g,lt).replace(/punct/g,v).getRegex(),Me="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",dt=h(Me,"gu").replace(/notPunctSpace/g,U).replace(/punctSpace/g,D).replace(/punct/g,v).getRegex(),kt=h(Me,"gu").replace(/notPunctSpace/g,ot).replace(/punctSpace/g,at).replace(/punct/g,Ze).getRegex(),ft="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",bt=h(ft,"gu").replace(/notPunctSpace/g,U).replace(/punctSpace/g,D).replace(/punct/g,v).getRegex(),mt=h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,U).replace(/punctSpace/g,D).replace(/punct/g,v).getRegex(),xt="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",wt=h(xt,"gu").replace(/notPunctSpace/g,U).replace(/punctSpace/g,D).replace(/punct/g,v).getRegex(),yt=h(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,v).getRegex(),_t="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",St=h(_t,"gu").replace(/notPunctSpace/g,U).replace(/punctSpace/g,D).replace(/punct/g,v).getRegex(),$t=h(/\\(punct)/,"gu").replace(/punct/g,v).getRegex(),vt=h(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,v).getRegex(),Rt=h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),At=h(pe).replace("(?:-->|$)","-->").getRegex(),zt=h("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",At).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Oe=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,J=h(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Oe).getRegex(),Tt=h(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",J).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(),Pt=h(/^!?\[(label)\]\[(ref)\]/).replace("label",J).replace("ref",ce).getRegex(),Ct=h(/^!?\[(ref)\](?:\[\])?/).replace("ref",ce).getRegex(),_e=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Lt=h(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Oe).getRegex(),It=h("reflink|nolink(?!\\()","g").replace("reflink",h(/^!?\[(label)\]\[(ref)\]/).replace("label",Lt).replace("ref",_e).getRegex()).replace("nolink",h(/^!?\[(ref)\](?:\[\])?/).replace("ref",_e).getRegex()).getRegex(),Se=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Et=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,qt=h(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,Et).getRegex(),ue={_backpedal:C,anyPunctuation:$t,anyPunctuationOutsideCode:vt,autolink:Rt,blockSkip:ct,br:Be,code:nt,del:C,delLDelim:C,delRDelim:C,emStrongLDelim:pt,emStrongRDelimAst:dt,emStrongRDelimUnd:mt,escape:rt,link:Tt,nolink:Ct,punctuation:it,reflink:Pt,reflinkSearch:It,tag:zt,text:st,url:C},Bt={...ue,emStrongLDelim:gt,emStrongRDelimAst:bt,emStrongRDelimUnd:wt,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",J).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",J).getRegex()},ne={...ue,emStrongRDelimAst:kt,emStrongLDelim:ht,delLDelim:yt,delRDelim:St,url:h(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",qt).replace("protocol",Se).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:h(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",Se).replace(/emailProtocol/g,/(?:mailto|xmpp):/).replace("wwwStart",Le?"(?<![^\\s*_~(])www\\.":"www\\.").getRegex()},Zt={...ne,br:h(Be).replace("{2,}","*").getRegex(),text:h(ne.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},V={normal:he,gfm:et,pedantic:tt},H={normal:ue,gfm:ne,breaks:Zt,pedantic:Bt},Dt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$e=r=>Dt[r];function _(r,e){if(e){if(w.escapeTest.test(r))return r.replace(w.escapeReplace,$e)}else if(w.escapeTestNoEncode.test(r))return r.replace(w.escapeReplaceNoEncode,$e);return r}function Mt(r){return w.numericCharacterReference.test(r)?r.replace(w.numericCharacterReferenceOrAmpersand,(e,t,s)=>{if(t===void 0&&s===void 0)return"&amp;";let n=t===void 0?Number.parseInt(s,16):Number.parseInt(t,10);return n===0||n>1114111||n>=55296&&n<=57343?"\uFFFD":n===38?"&amp;":String.fromCodePoint(n)}):r}function ve(r){try{r=encodeURI(r).replace(w.percentDecode,"%")}catch{return null}return r}function Re(r,e){let t=r.replace(w.findPipe,(i,a,l)=>{let p=!1,o=a;for(;--o>=0&&l[o]==="\\";)p=!p;return p?"|":" |"}),s=t.split(w.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(w.slashPipe,"|");return s}function A(r,e,t){let s=r.length;if(s===0)return"";let n=0;for(;n<s;){let i=r.charAt(s-n-1);if(i===e&&!t)n++;else if(i!==e&&t)n++;else break}return r.slice(0,s-n)}function Ae(r){let e=r.split(`
`),t=e.length-1;for(;t>=0&&w.blankLine.test(e[t]);)t--;return e.length-t<=2?r:e.slice(0,t+1).join(`
`)}function K(r){return r.trim().replace(w.multipleSpaceGlobal," ").toLowerCase().toUpperCase().toLowerCase()}function ze(r,e){if(r.indexOf(e[0])===-1&&r.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])t++;else if(r[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}var Z=new WeakMap;function ge(r){let e={"*":-1,_:-1},t=-1,s=r.length;for(let n=0;n<s;n++){let i=r[n];if(i!=="*"&&i!=="_"&&i!=="~")continue;let a=n===0?`
`:r[n-1],l=n+1;for(;l<s&&r[l]===i;)l++;a!==" "&&a!=="	"&&a!==`
`&&a!=="\r"&&a!=="\f"&&(i==="~"?t=n:e[i]=n),n=l-1}return{maskedSrc:r,lastPossibleEmStrongCloserIndex:e,lastPossibleDelCloserIndex:t}}function Ot(r,e){let t=ge(e),s=Z.get(r);s?s.push(t):Z.set(r,[t])}function Ht(r){let e=Z.get(r);e&&(e.pop(),e.length===0&&Z.delete(r))}function Qt(r,e,t){let s=Z.get(r)?.at(-1);return s&&s.maskedSrc===e?s.lastPossibleEmStrongCloserIndex[t]:ge(e).lastPossibleEmStrongCloserIndex[t]}function Nt(r,e){let t=Z.get(r)?.at(-1);return t&&t.maskedSrc===e?t.lastPossibleDelCloserIndex:ge(e).lastPossibleDelCloserIndex}function Y(r,e=0){let t=e,s="";for(let n of r)if(n==="	"){let i=4-t%4;s+=" ".repeat(i),t+=i}else s+=n,t++;return s}function Te(r,e,t,s,n){let i=e.href,a=e.title||null,l=r[1].replace(n.other.outputLinkReplace,"$1"),p=r[0].charAt(0)==="!",o=s.state.inLink,c=s.state.linkEmitted,u=s.state.inRawBlock;s.state.inLink=!0,s.state.linkEmitted=!1;let d=s.inlineTokens(l),g=s.state.linkEmitted;if(s.state.linkEmitted=c,s.state.inLink=o,!p){if(g){s.state.inRawBlock=u;return}s.state.linkEmitted=!0}return{type:p?"image":"link",raw:t,href:i,title:a,text:l,tokens:d}}function jt(r,e,t){let s=r.match(t.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(i=>{let a=i.match(t.other.beginningSpace);if(a===null)return i;let[l]=a;return i.slice(Math.min(l.length,n.length))}).join(`
`)}function Pe(r,e,t,s){if(!e.includes("<"))return!1;for(let n=0;n<e.length;n++){if(e[n]==="\\"){n++;continue}if(e[n]==="`"){let l=s.inline.code.exec(e.slice(n));if(l){n+=l[0].length-1;continue}}if(e[n]!=="<")continue;let i=r.slice(t+n),a=s.inline.tag.exec(i)||s.inline.autolink.exec(i);if(a){if(a[0].length>e.length-n)return!0;n+=a[0].length-1}}return!1}var B=class{options;rules;lexer;constructor(r){this.options=r||I}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=this.options.pedantic?e[0]:Ae(e[0]),s=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:s}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],s=jt(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=A(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceTabChar.test(s))&&(t=s.trim())}return{type:"heading",raw:A(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:A(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=A(e[0],`
`).split(`
`),s="",n="",i=[];for(;t.length>0;){let a=!1,l=[],p;for(p=0;p<t.length;p++)if(this.rules.other.blockquoteStart.test(t[p]))l.push(t[p]),a=!0;else if(!a)l.push(t[p]);else break;t=t.slice(p);let o=l.join(`
`),c=o.replace(this.rules.other.blockquoteMarkerWhitespace,(g,b,m)=>b+Y(m,b.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${o}`:o,n=n?`${n}
${c}`:c;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=u,t.length===0)break;let d=i.at(-1);if(d?.type==="code"||d?.type==="heading"||d?.type==="hr"||d?.type==="html"||d?.type==="table")break;if(d?.type==="blockquote"){let g=d,b=t.join(`
`),m=g.raw+`
`+b.replace(this.rules.other.blockquoteSetextReplace2,""),k=this.blockquote(m);i[i.length-1]=k;let y=m.substring(k.raw.length).replace(/^\n/,""),x=y?y.split(`
`).length:0,R=x?t.slice(0,-x):t;if(R.length>0&&(s=`${s}
${R.join(`
`)}`),n=n.substring(0,n.length-g.text.length)+k.text,t=t.slice(R.length),t.length>0&&this.rules.other.blockquoteStart.test(t[0]))continue;break}else if(d?.type==="list"){let g=d,b=g.raw+`
`+t.join(`
`),m=this.list(b);i[i.length-1]=m;let k=m.raw.length>g.raw.length?b.slice(g.raw.length+1,m.raw.length).split(`
`).length:0;if(k>0){let y=t.slice(0,k).join(`
`);s=`${s}
${y}`,n=`${n}
${y}`}t=t.slice(k);continue}}return{type:"blockquote",raw:s,tokens:i,text:n}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=r,s=()=>t.length-r.length,n=e[1].trim(),i=n.length>1,a={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");let l=this.rules.other.listItemRegex(n),p=!1;for(;r;){let c=!1,u="";if(!(e=l.exec(r))||this.rules.block.hr.test(r))break;let d=s();r=r.substring(e[0].length);let g=e[2].split(`
`,1)[0],b=e[1].length,m=this.options.pedantic?Y(g,b):g.replace(this.rules.other.leadingSpaceTab,E=>Y(E,b)),k=r.split(`
`,1)[0],y=!m.trim(),x=0;if(this.options.pedantic?(x=2,u=m.trimStart()):y?x=b+1:(x=m.search(this.rules.other.nonSpaceChar),x=x>4?1:x,u=m.slice(x),x+=b),y&&this.rules.other.blankLine.test(k)&&(r=r.substring(k.length+1),c=!0),!c){let E=this.rules.other.nextBulletRegex(x),M=this.rules.other.hrRegex(x),F=this.rules.other.fencesBeginRegex(x),W=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(x):this.rules.other.headingBeginRegex(x),T=this.rules.other.htmlBeginRegex(x),X=this.rules.other.blockquoteBeginRegex(x);for(;r;){let O=r.split(`
`,1)[0],q;if(k=O,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),q=k):q=k.replace(this.rules.other.leadingSpaceTab,re=>Y(re)),F.test(k)||W.test(k)||T.test(k)||X.test(k)||E.test(k)||M.test(k))break;if(q.search(this.rules.other.nonSpaceChar)>=x||!k.trim())u+=`
`+q.slice(x);else{if(y||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(m)||W.test(m)||T.test(m)||M.test(m))break;let re=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(k)&&this.rules.block.lheading.test(`${m}
${k}`)?`    ${q.replace(/^ {0,3}/,"")}`:k;u+=`
`+re}y=!k.trim(),r=r.substring(O.length+1),m=q.slice(x)}}let R=t.slice(d,s());a.loose||(p?a.loose=!0:this.rules.other.doubleBlankLine.test(R)&&(p=!0)),a.items.push({type:"list_item",raw:R,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]})}let o=a.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;a.raw=t.slice(0,s()).trimEnd();for(let c of a.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!a.loose){let u=c.tokens.filter(g=>g.type==="space"),d=u.length>0&&u.some(g=>this.rules.other.anyLine.test(g.raw));a.loose=d}for(let c of a.items){let u=c.tokens[0];if(c.task&&(u?.type==="text"||u?.type==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}let d=this.rules.other.listTaskCheckbox.exec(c.raw);if(d){let g={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};c.checked=g.checked,a.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=g.raw+c.tokens[0].raw,c.tokens[0].text=g.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(g)):c.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):c.tokens.unshift(g)}}else c.task&&(c.task=!1)}if(a.loose)for(let c of a.items){c.loose=!0;for(let u of c.tokens)u.type==="text"&&(u.type="paragraph")}return a}}html(r){let e=this.rules.block.html.exec(r);if(e){let t=Ae(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(r){let e=this.rules.block.def.exec(r);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&ze(e[2],"()")!==-1)return;let t=K(e[1]),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:A(e[0],`
`),href:s,title:n}}}table(r){let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Re(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:A(e[0],`
`),header:[],align:[],rows:[]};if(t.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(let a of n)i.rows.push(Re(a,i.header.length).map((l,p)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[p]})));return i}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e){let t=e[1].trim();return{type:"heading",raw:A(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(r);if(e){let t=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Pe(r,e[1],t,this.rules))return;let s=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let l=A(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{let l=ze(e[2],"()");if(l===-2)return;if(l>-1){let p=(e[0].indexOf("!")===0?5:4)+e[1].length+l;e[2]=e[2].substring(0,l),e[0]=e[0].substring(0,p).trim(),e[3]=""}}let n=A(e[0].slice(0,-1),"\\");if((e[0].length-n.length)%2===0)return;let i=e[2],a="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(i);l&&(i=l[1],a=l[3])}else a=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),Te(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let s=t[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Pe(r,t[1],s,this.rules))return;let n=e[K(t[2]||t[1])];if(!n){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return Te(t,n,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(r);if(!s||!s[1]&&!s[2]&&!s[3]&&!s[4])return;let n=s[0][0],i=t===n,a=e.length-r.length,l=a;for(;!this.options.pedantic&&l>0&&e[l-1]===n;)l--;let p=[...e.slice(Math.max(0,l-2),l)].at(-1)??"",o=p==="*"||p==="_"||!!this.rules.inline.punctuation.exec(p);l<a&&(t=p);let c=l<a?o:!!this.rules.inline.punctuation.exec(t);if(s[4]&&t.match(this.rules.other.unicodeAlphaNumeric))return;let u=s[1]||s[3]||"";if(!u||!t||c){let d=[...s[0]].length-1,g,b,m=d,k=0,y=a-l+d,x=!this.options.pedantic&&!!p.trim()&&(!!u||n==="*"&&!o);if(n!=="*"&&n!=="_")return;let R=n==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd,E=Qt(this,e,n),M=e.length-r.length+d;if(E<M)return;e=e.slice(-1*r.length+d);let F=E-M;for(R.lastIndex=0;(s=R.exec(e))!==null&&!(s.index>F);){if(g=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!g)continue;if(b=[...g].length,s[3]||s[4]){m+=b;continue}else if(s[5]||s[6]||x){if(i&&(s[5]||s[6]))break;if(y%3&&!((y+b)%3)){k+=b;continue}}if(m-=b,m>0)continue;b=Math.min(b,b+m+k);let W=[...s[0]][0].length,T=r.slice(0,d+s.index+W+b);if(Math.min(d,b)%2){let O=T.slice(1,-1);return{type:"em",raw:T,text:O,tokens:this.lexer.inlineTokens(O)}}let X=T.slice(2,-2);return{type:"strong",raw:T,text:X,tokens:this.lexer.inlineTokens(X)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),n=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&n&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,t=""){let s=this.rules.inline.delLDelim.exec(r);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let n=[...s[0]].length-1,i,a,l=n,p=this.rules.inline.delRDelim,o=Nt(this,e),c=e.length-r.length+n;if(o<c)return;e=e.slice(-1*r.length+n);let u=o-c;for(p.lastIndex=0;(s=p.exec(e))!==null&&!(s.index>u);){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(a=[...i].length,a!==n))continue;if(s[3]||s[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let d=[...s[0]][0].length,g=r.slice(0,n+s.index+d+a),b=g.slice(n,-n);return{type:"del",raw:g,text:b,tokens:this.lexer.inlineTokens(b)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,autolink:!0,tokens:[{type:"text",raw:t,text:t}]}}}url(r){let e;if(e=this.rules.inline.url.exec(r)){let t,s;if(e[2]==="@")t=e[0],s="mailto:"+t;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);t=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:t,href:s,autolink:!0,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:t?e[0]:Mt(e[0]),escaped:t}}}},S=class se{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||I,this.options.tokenizer=this.options.tokenizer||new B,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:w,block:V.normal,inline:H.normal};this.options.pedantic?(t.block=V.pedantic,t.inline=H.pedantic):this.options.gfm&&(t.block=V.gfm,this.options.breaks?t.inline=H.breaks:t.inline=H.gfm),this.tokenizer.rules=t}static get rules(){return{block:V,inline:H}}static lex(e,t){return new se(t).lex(e)}static lexInline(e,t){return new se(t).inlineTokens(e)}lex(e){e=e.replace(w.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.state.inRawBlock=!1,this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(w.tabCharGlobal,"    ").replace(w.spaceLine,""));let n=1/0;for(;e;){if(e.length<n)n=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(l=>(i=l.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let l=t.at(-1);i.raw.length===1&&l!==void 0?l.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let l=t.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.text,this.inlineQueue.at(-1).src=l.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let l=t.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.raw,this.inlineQueue.at(-1).src=l.text):(this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}),t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let l=1/0,p=e.slice(1),o;this.options.extensions.startBlock.forEach(c=>{o=c.call({lexer:this},p),typeof o=="number"&&o>=0&&(l=Math.min(l,o))}),l<1/0&&l>=0&&(a=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let l=t.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(i),s=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let l=t.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes("["))return!1;let t=this.tokenizer.rules.inline.link;for(let s of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(s[0])&&e.charAt(s.index-1)!=="!")return!0;for(let s of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let n=s[0],i=n.lastIndexOf("[");if(!(n.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,K(n.slice(i+1,-1))))&&!(i>1&&this.linkInText(n.slice(1,i-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let s=this.state.linkParenPossible;this.state.linkParenPossible=s&&e.includes(")");try{return this.#e(e,t)}finally{this.state.linkParenPossible=s}}#e(e,t){let s=e.includes("*")||e.includes("_")||e.includes("~")||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==B.prototype.emStrong||this.tokenizer.del!==B.prototype.del?this.#r(e):e;Ot(this.tokenizer,s);try{return this.#t(e,s,t)}finally{Ht(this.tokenizer)}}#t(e,t,s){let n=!1,i="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}n||(i=""),n=!1;let l;if(this.options.extensions?.inline?.some(o=>(l=o.call({lexer:this},e,s))?(e=e.substring(l.raw.length),s.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let o=s.at(-1);l.type==="text"&&o?.type==="text"?(o.raw+=l.raw,o.text+=l.text):s.push(l);continue}if(l=this.tokenizer.emStrong(e,t,i)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.del(e,t,i)){e=e.substring(l.raw.length),s.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),s.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),s.push(l);continue}let p=e;if(this.options.extensions?.startInline){let o=1/0,c=e.slice(1),u;this.options.extensions.startInline.forEach(d=>{u=d.call({lexer:this},c),typeof u=="number"&&u>=0&&(o=Math.min(o,u))}),o<1/0&&o>=0&&(p=e.substring(0,o+1))}if(l=this.tokenizer.inlineText(p)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(i=l.raw.slice(-1)),n=!0;let o=s.at(-1);o?.type==="text"?(o.raw+=l.raw,o.text+=l.text):s.push(l);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return s}#r(e){let t=e;if(this.tokens.links&&e.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,n=i=>{let a=i.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,K(i.slice(a+1,-1))))return i;if(a>1&&i.charAt(0)!=="!"){let l=i.slice(1,a-1);if(this.linkInText(l))return"["+l.replace(s,n)+"]["+"a".repeat(i.length-a-2)+"]"}return"["+"a".repeat(i.length-2)+"]"};t=t.replace(s,n)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(s,n,i)=>i?"+".repeat(s.length):n?n+s.slice(n.length,-n.length).replace(/`/g,"+")+n:s),t=t.replace(this.tokenizer.rules.inline.blockSkip,(s,n,i)=>{let a=i?i.length:0;return s.slice(0,a)+"["+"a".repeat(s.length-a-2)+"]"}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},ee=class{options;parser;constructor(r){this.options=r||I}space(r){return""}code({text:r,lang:e,escaped:t}){let s=(e||"").match(w.notSpaceStart)?.[0],n=r?r.replace(w.endingNewline,"")+`
`:"";return s?'<pre><code class="language-'+_(s)+'">'+(t?n:_(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:_(n,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,s="";for(let a=0;a<r.items.length;a++){let l=r.items[a];s+=this.listitem(l)}let n=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+n+i+`>
`+s+"</"+n+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let n=0;n<r.header.length;n++)t+=this.tablecell(r.header[n]);e+=this.tablerow({text:t});let s="";for(let n=0;n<r.rows.length;n++){let i=r.rows[n];t="";for(let a=0;a<i.length;a++)t+=this.tablecell(i[a]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${_(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,text:t,tokens:s,autolink:n}){let i=n?_(t,!0):this.parser.parseInline(s),a=ve(r);if(a===null)return i;r=_(a,n);let l='<a href="'+r+'"';return e&&(l+=' title="'+_(e)+'"'),l+=">"+i+"</a>",l}image({href:r,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let n=ve(r);if(n===null)return _(t);r=n;let i=`<img src="${_(r)}" alt="${_(t)}"`;return e&&(i+=` title="${_(e)}"`),i+=">",i}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:_(r.text)}},de=class{parser;strong({text:r,tokens:e}){return e?this.parser.parseInline(e,this):r}em({text:r,tokens:e}){return e?this.parser.parseInline(e,this):r}codespan({text:r}){return r}del({text:r,tokens:e}){return e?this.parser.parseInline(e,this):r}html({text:r}){return r}text({text:r}){return r}link({text:r,tokens:e}){return e?this.parser.parseInline(e,this):r}image({text:r,tokens:e}){return e?this.parser.parseInline(e,this):r}br(){return""}checkbox({raw:r}){return r}},$=class ie{options;renderer;textRenderer;constructor(e){this.options=e||I,this.options.renderer=this.options.renderer||new ee,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new de,this.textRenderer.parser=this}static parse(e,t){return new ie(t).parse(e)}static parseInline(e,t){return new ie(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let a=n,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){t+=l||"";continue}}let i=n;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let s="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){s+=l||"";continue}}let a=i;switch(a.type){case"escape":{s+=t.text(a);break}case"html":{s+=t.html(a);break}case"link":{s+=t.link(a);break}case"image":{s+=t.image(a);break}case"checkbox":{s+=t.checkbox(a);break}case"strong":{s+=t.strong(a);break}case"em":{s+=t.em(a);break}case"codespan":{s+=t.codespan(a);break}case"br":{s+=t.br(a);break}case"del":{s+=t.del(a);break}case"text":{s+=t.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},Q=class{options;block;constructor(r){this.options=r||I}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(r=this.block){return r?S.lex:S.lexInline}provideParser(r=this.block){return r?$.parse:$.parseInline}};function z(r,e){if(Array.isArray(e))for(let t=0;t<e.length;t++)r.push(e[t]);else r.push(e)}var te=class{defaults=le();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=$;Renderer=ee;TextRenderer=de;Lexer=S;Tokenizer=B;Hooks=Q;constructor(...r){this.use(...r)}walkTokens(r,e){let t=[];for(let s of r)switch(z(t,e.call(this,s)),s.type){case"table":{let n=s;for(let i of n.header)z(t,this.walkTokens(i.tokens,e));for(let i of n.rows)for(let a of i)z(t,this.walkTokens(a.tokens,e));break}case"list":{let n=s;z(t,this.walkTokens(n.items,e));break}default:{let n=s;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(i=>{let a=n[i].flat(1/0);z(t,this.walkTokens(a,e))}):n.tokens&&z(t,this.walkTokens(n.tokens,e))}}return t}use(...r){let e=this.defaults.extensions||{renderers:Object.create(null),childTokens:Object.create(null)};return r.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let i=e.renderers[n.name];i?e.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[n.level];i?i.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),t.renderer){let n=this.defaults.renderer||new ee(this.defaults);for(let i in t.renderer){if(!(i in n))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,l=t.renderer[a],p=n[a];n[a]=(...o)=>{let c=l.apply(n,o);return c===!1&&(c=p.apply(n,o)),c===!1?"":c??""}}s.renderer=n}if(t.tokenizer){let n=this.defaults.tokenizer||new B(this.defaults);for(let i in t.tokenizer){if(!(i in n))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,l=t.tokenizer[a],p=n[a];n[a]=(...o)=>{let c=l.apply(n,o);return c===!1&&(c=p.apply(n,o)),c}}s.tokenizer=n}if(t.hooks){let n=this.defaults.hooks||new Q;for(let i in t.hooks){if(!(i in n))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,l=t.hooks[a],p=n[a];Q.passThroughHooks.has(i)?n[a]=o=>{if(n.options.async&&Q.passThroughHooksRespectAsync.has(i))return(async()=>{let u=await l.call(n,o);return p.call(n,u)})();let c=l.call(n,o);return p.call(n,c)}:n[a]=(...o)=>{if(n.options.async)return(async()=>{let u=await l.apply(n,o);return u===!1&&(u=await p.apply(n,o)),u})();let c=l.apply(n,o);return c===!1&&(c=p.apply(n,o)),c}}s.hooks=n}if(t.walkTokens){let n=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(a){let l=[];return z(l,i.call(this,a)),n&&z(l,n.call(this,a)),l}}this.defaults={...this.defaults,...s}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return S.lex(r,e??this.defaults)}parser(r,e){return $.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let s={...t},n={...this.defaults,...s},i=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=r),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(e):e,l=await(n.hooks?await n.hooks.provideLexer(r):r?S.lex:S.lexInline)(a,n),p=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(p,n.walkTokens));let o=await(n.hooks?await n.hooks.provideParser(r):r?$.parse:$.parseInline)(p,n);return n.hooks?await n.hooks.postprocess(o):o})().catch(i);try{n.hooks&&(e=n.hooks.preprocess(e));let a=(n.hooks?n.hooks.provideLexer(r):r?S.lex:S.lexInline)(e,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let l=(n.hooks?n.hooks.provideParser(r):r?$.parse:$.parseInline)(a,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(a){return i(a)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let s="<p>An error occurred:</p><pre>"+_(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},L=new te;function f(r,e){return L.parse(r,e)}f.options=f.setOptions=function(r){return L.setOptions(r),f.defaults=L.defaults,Ce(f.defaults),f};f.getDefaults=le;f.defaults=I;function Ut(...r){return L.use(...r),f.defaults=L.defaults,Ce(f.defaults),f}f.use=Ut;f.walkTokens=function(r,e){return L.walkTokens(r,e)};f.parseInline=L.parseInline;f.Parser=$;f.parser=$.parse;f.Renderer=ee;f.TextRenderer=de;f.Lexer=S;f.lexer=S.lex;f.Tokenizer=B;f.Hooks=Q;f.parse=f;var nr=f.options,sr=f.setOptions,ir=f.walkTokens,lr=f.parseInline;var ar=$.parse,or=S.lex;var Ft=300;function Wt(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Xt=new te({gfm:!0,breaks:!1,async:!1,renderer:{html(r){let e=Wt(r.text);return r.block?`<p>${e}</p>`:e}}}),Gt=new te({gfm:!0,breaks:!1,async:!1});function wr(r,e){let t=e.allowHtml?Gt:Xt,s=Yt(),n=Vt(t,r,s),i=fe(n,{images:e.images,externalLinks:e.externalLinks,baseUrl:e.baseUrl,lineMarkers:s}),a=Jt(i,e),l=er(i,e);for(let p of Array.from(i.querySelectorAll('li > input[type="checkbox"]'))){let o=(p.parentElement?.textContent??"").replace(/\s+/g," ").trim().slice(0,200);o&&p.setAttribute("aria-label",o)}for(let p of Array.from(i.querySelectorAll("table"))){let o=p.querySelector("caption")?.textContent?.trim(),c=G("div",{class:"table-wrap",attrs:{tabindex:"0",role:"region","aria-label":o||e.tableLabel}});p.replaceWith(c),c.append(p)}return{fragment:i,headings:a,codeBlocks:l}}function Vt(r,e,t){let s=r.lexer(e),n=1,i="";for(let a of s)a.type!=="space"&&a.type!=="def"&&(i+=`<span data-vt-line="${n}:${t}"></span>`),i+=r.parser(Object.assign([a],{links:s.links})),n+=(a.raw.match(/\n/g)??[]).length;return i}function Yt(){let r=new Uint8Array(12);return crypto.getRandomValues(r),Array.from(r,e=>e.toString(16).padStart(2,"0")).join("")}function Jt(r,e){let t=[],s=new Map;for(let n of Array.from(r.querySelectorAll("h1, h2, h3, h4, h5, h6"))){let i=(n.textContent??"").trim(),a=Kt(i,s);if(n.id=a,n.setAttribute("tabindex","-1"),t.length<Ft&&t.push({level:Number(n.localName[1]),text:i.slice(0,200),id:a}),e.anchors){let l=G("a",{class:"anchor",part:"anchor",attrs:{href:`#${a}`,"aria-label":`${e.anchorLabel}: ${i.slice(0,100)}`}});l.append(ke("link")),n.append(l)}}return t}function Kt(r,e){let t=r.trim().toLowerCase().replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu,"").replace(/ /g,"-").slice(0,100)||"section",s=t;for(let n=e.get(t)??0;e.has(s);n+=1)s=`${t}-${n+1}`,e.set(t,n+1);return e.set(s,e.get(s)??0),s}function er(r,e){let t=[];for(let s of Array.from(r.querySelectorAll("pre > code"))){let n=s.parentElement,i=/language-([\w#+.-]+)/.exec(s.className)?.[1]??"",a=be(i),l=(s.textContent??"").replace(/\n$/,"");a&&a!=="plaintext"&&l.length<=e.highlightLimit&&(me(a)?s.replaceChildren(we(l,a)):xe(a).then(o=>o&&e.onLanguageLoaded())),n.setAttribute("tabindex","0");let p=G("div",{class:"code-block",part:"code-block",attrs:{"data-language":a??""}});n.replaceWith(p),p.append(n),t.push(p)}return t}export{rr as a,wr as b};
//# sourceMappingURL=chunk-C2EP2PL6.js.map
