/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
var M=Object.create;var S=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var re=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}};var V=(e,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of q(t))!G.call(e,r)&&r!==a&&S(e,r,{get:()=>t[r],enumerable:!(s=j(t,r))||s.enumerable});return e};var oe=(e,t,a)=>(a=e!=null?M(z(e)):{},V(t||!e||!e.__esModule?S(a,"default",{value:e,enumerable:!0}):a,e));var m=Object.freeze({theme:"auto",lightTheme:"light",darkTheme:"dark",lang:"en",maxSize:2097152,highlightLimit:3e5,maxDepth:512,fetchTimeout:15e3,languagesUrl:"",syntaxTheme:"",syntaxThemeDark:"",syntaxThemesUrl:"",vendorUrl:""}),F=Object.freeze({maxSize:50*1024*1024,highlightLimit:5*1024*1024,maxDepth:1e4,fetchTimeout:12e4}),c={...m},b=new Set;function l(){return Object.freeze({...c})}function ie(e){if(!e||typeof e!="object")return l();let t={...c};for(let[s,r]of Object.entries(e))H(s,r);let a=new Set(Object.keys(c).filter(s=>c[s]!==t[s]));if(a.size)for(let s of b)s(a);return l()}function H(e,t){if(!Object.prototype.hasOwnProperty.call(m,e)){console.warn(`[vitrine] Unknown configuration option "${e}".`);return}let a=e;if(typeof m[a]==="number"){let r=F[a];if(typeof t!="number"||!Number.isFinite(t)||t<=0){console.warn(`[vitrine] Option "${e}" must be a positive number.`);return}c[a]=Math.min(Math.floor(t),r??t);return}if(typeof t!="string"||t.length>2048){console.warn(`[vitrine] Option "${e}" must be a string.`);return}c[a]=t.trim()}function ce(e){return b.add(e),()=>b.delete(e)}var de=Object.freeze({READY:"vt-ready",COPY:"vt-copy",SEARCH:"vt-search",TAB_CHANGE:"vt-tab-change",INPUT:"vt-input",CHANGE:"vt-change",MODE_CHANGE:"vt-mode-change",TAG_ADD:"vt-tag-add",TAG_REMOVE:"vt-tag-remove",TAG_CREATE:"vt-tag-create",TAG_CLICK:"vt-tag-click",SORT:"vt-sort",FULLSCREEN_CHANGE:"vt-fullscreen-change",LAYOUT_CHANGE:"vt-layout-change",SELECT:"vt-select",TOGGLE:"vt-toggle",FILTER_CHANGE:"vt-filter-change",TYPING_END:"vt-typing-end",CHANGE_NAVIGATE:"vt-change-navigate",STEP_TOGGLE:"vt-step-toggle",JOB_CHANGE:"vt-job-change",MATCH:"vt-match",BULK_ACTION:"vt-bulk-action",CELL_EDIT:"vt-cell-edit",COLUMN_CHANGE:"vt-column-change",ROW_ACTIVATE:"vt-row-activate",STATUS_CHANGE:"vt-status-change",DATE_CHANGE:"vt-date-change",EVENT_SELECT:"vt-event-select",PRICING_CHANGE:"vt-pricing-change",PLAN_SELECT:"vt-plan-select",TASK_ADD:"vt-task-add",TASK_MOVE:"vt-task-move",TASK_EDIT:"vt-task-edit",TASK_DELETE:"vt-task-delete",COUNTDOWN_END:"vt-countdown-end",FILE_ADD:"vt-file-add",FILE_REMOVE:"vt-file-remove",UPLOAD_START:"vt-upload-start",UPLOAD_PROGRESS:"vt-upload-progress",UPLOAD_DONE:"vt-upload-done",UPLOAD_ERROR:"vt-upload-error",ERROR:"vt-error"});function ge(e,t,a){return e.dispatchEvent(new CustomEvent(t,{detail:a,bubbles:!0,composed:!0,cancelable:!0}))}var v=Object.freeze({copy:"Copy",copyCode:"Copy code",copied:"Copied",copyFailed:"Copy failed",copySource:"Copy source",download:"Download",search:"Search",searchPlaceholder:"Search\u2026",searchNext:"Next match",searchPrevious:"Previous match",searchClose:"Close search",searchCount:"{current} / {total}",searchCountCapped:"{current} / {total}+",searchNone:"No matches",searchResults:"{total} matches",wrap:"Toggle line wrap",showMore:"Show all {count} lines",preview:"Preview",source:"Source",split:"Split",swapPanes:"Swap panes",stackPanes:"Stack panes",syncScroll:"Sync scrolling",tabs:"View",actions:"Actions",toc:"Table of contents",anchor:"Link to this section",table:"Table",tree:"Tree",raw:"Raw",expandAll:"Expand all",collapseAll:"Collapse all",copyPath:"Copy path",copyValue:"Copy value",items:"{count} items",item:"1 item",keys:"{count} keys",key:"1 key",showMoreItems:"Show {count} more",showFullString:"Show full string ({count} characters)",truncated:"Partially expanded: too many nodes.",loading:"Loading\u2026",errorTitle:"Unable to display content",invalidJson:"Invalid JSON at line {line}, column {column}: {message}.",invalidJsonRaw:"Invalid JSON at line {line}, column {column} \u2014 showing raw text.",empty:"Nothing to display",tooLarge:"Content is too large ({size} characters, limit {limit}).",jsonInvalid:"This JSON could not be read: {message}",jsonPathMissing:'Nothing was found at "{path}" in this JSON.',jsonUnusable:"This data cannot be shown by this element.",dataNoList:"Expected a list, or an object with a list under {keys}.",tooDeep:"Nesting is too deep (limit {limit}).",tooComplex:"This document is nested too deeply to display.",unserializable:"This value cannot be converted to JSON (circular reference or BigInt).",highlightSkipped:"Content is large: syntax highlighting is disabled.",loadFailed:'Could not load "{url}": {reason}',remoteBlocked:'Cross-origin URL blocked. Add the "allow-remote" attribute to allow it.',unsafeUrl:"URL blocked: only http(s) URLs can be loaded.",timeout:"Request timed out.",added:"Added",removed:"Removed",code:"Code",edit:"Edit",splitView:"Side by side",unifiedView:"Unified",diffStats:"+{added} \u2212{removed}",diffSimplified:"Many changes: the comparison is simplified to removed and added blocks.",noDifferences:"No differences",previousChange:"Previous change",nextChange:"Next change",changePosition:"{current} of {total}",changeTotal:"{count} changes",terminal:"Terminal",command:"Command",copyCommand:"Copy command",copyCommands:"Copy commands",replay:"Replay",showMoreLines:"Show {count} more lines",files:"Files",copyTree:"Copy tree",treeStats:"{folders} folders, {files} files",invalidTree:"This tree could not be read: {message}",treeTruncated:"Only the first {limit} entries are shown.",status_added:"added",status_removed:"removed",status_modified:"modified",status_highlighted:"highlighted",httpExchange:"Exchange",httpRequest:"Request",httpResponse:"Response",httpBody:"Body",httpHeaders:"Headers",httpQuery:"Query",httpNone:"None",httpNoBody:"No body",copyUrl:"Copy URL",codeLanguage:"Language",showSecrets:"Show secrets",hideSecrets:"Hide secrets",secretsShown:"Secrets shown",secretsHidden:"Secrets hidden",secretsInCode:"Credentials are masked in this code. Replace them with your own.",invalidHttp:"This HTTP message could not be read: {message}",log:"Log",followLog:"Follow new lines",levelToggle:"Show or hide {level} entries",logNoMatch:"No entry matches the filters.",chartView:"Chart",legend:"Legend",seriesToggle:"Show or hide {name}",copyData:"Copy data",chartSummary:"{type} with {series} series and {points} points.",chartRange:"{name} from {min} to {max}",chart_line:"Line chart",chart_area:"Area chart",chart_bar:"Bar chart",chart_pie:"Donut chart",chartError:"This data could not be charted: {message}",chartTruncated:"Only the first 5,000 points of each series are shown.",chartLoadFailed:"The chart library could not be loaded: {message}",openapiInvalid:"This API description could not be read: {message}",openapiYamlFailed:"The YAML reader could not be loaded: {message}",openapiTruncated:"Only the first 2,000 endpoints are shown.",openapiServers:"Servers",openapiAuth:"Authentication",openapiEndpoints:"Endpoints",openapiTags:"Tags",openapiAllTags:"All",openapiNoMatch:"No endpoint matches.",openapiDeprecated:"deprecated",openapiParameters:"Parameters",openapiName:"Name",openapiIn:"In",openapiType:"Type",openapiDescription:"Description",openapiRequired:"required",openapiRequestBody:"Request body",openapiResponses:"Responses",openapiExample:"Example",openapiExampleValue:"Example",unchangedLines:"Show {count} unchanged lines",copyPatch:"Copy patch",changes:"Changes",original:"Original",modified:"Modified",patch:"Patch",tags:"Tags",noTags:"No tags",addTag:"Add a tag",tagPlaceholder:"tag",suggestions:"Suggestions",createTag:'Create "{tag}"',removeTag:"Remove {tag}",tagAdded:"{tag} added",tagRemoved:"{tag} removed",pressAgainToRemove:"Press Backspace again to remove {tag}",tagDuplicate:"{tag} is already selected.",tagDisabled:"{tag} cannot be selected.",tagLimit:"You can select up to {max} tags.",tagNotAllowed:"{tag} is not in the list.",tagTooLong:"{tag} is too long.",tagInvalid:"{tag} is not a valid tag.",tagRefused:"{tag} was refused.",tagsRequired:"Select at least one tag.",tagCount:"{count} tags",tagCountOne:"1 tag",tagCountMax:"{count} / {max} tags",browseTags:"Browse all tags",otherTags:"Other",clearTags:"Remove all tags",filterTags:"Filter tags",tagsFound:"{count} tags",invalidTags:'The tags must be a JSON array, or an object with "value" and "options".',rowsRange:"Rows {from}\u2013{to} of {total}",noRows:"No rows",firstPage:"First page",previousPage:"Previous page",nextPage:"Next page",lastPage:"Last page",sortBy:"Sort by {name}",column:"Column {n}",rowNumber:"Row",csvStatus:"{rows} rows \xD7 {columns} columns",csvUnclosed:"Unclosed quote starting at line {line}.",tooManyColumns:"Only the first {limit} columns are shown.",matchingRows:"{count} matching rows",undo:"Undo",redo:"Redo",fullscreen:"Full screen",exitFullscreen:"Exit full screen",stopEditing:"Stop editing",editor:"Editor",validJson:"Valid JSON"}),B=Object.freeze({copy:"Copier",copyCode:"Copier le code",copied:"Copi\xE9",copyFailed:"\xC9chec de la copie",copySource:"Copier la source",download:"T\xE9l\xE9charger",search:"Rechercher",searchPlaceholder:"Rechercher\u2026",searchNext:"R\xE9sultat suivant",searchPrevious:"R\xE9sultat pr\xE9c\xE9dent",searchClose:"Fermer la recherche",searchCount:"{current} / {total}",searchCountCapped:"{current} / {total}+",searchNone:"Aucun r\xE9sultat",searchResults:"{total} r\xE9sultats",wrap:"Activer/d\xE9sactiver le retour \xE0 la ligne",showMore:"Afficher les {count} lignes",preview:"Aper\xE7u",source:"Source",split:"C\xF4te \xE0 c\xF4te",swapPanes:"Inverser les panneaux",stackPanes:"Empiler les panneaux",syncScroll:"Synchroniser le d\xE9filement",tabs:"Affichage",actions:"Actions",toc:"Table des mati\xE8res",anchor:"Lien vers cette section",table:"Tableau",tree:"Arbre",raw:"Brut",expandAll:"Tout d\xE9plier",collapseAll:"Tout replier",copyPath:"Copier le chemin",copyValue:"Copier la valeur",items:"{count} \xE9l\xE9ments",item:"1 \xE9l\xE9ment",keys:"{count} cl\xE9s",key:"1 cl\xE9",showMoreItems:"Afficher {count} de plus",showFullString:"Afficher toute la cha\xEEne ({count} caract\xE8res)",truncated:"D\xE9pliage partiel : trop de n\u0153uds.",loading:"Chargement\u2026",errorTitle:"Impossible d\u2019afficher le contenu",invalidJson:"JSON invalide \xE0 la ligne {line}, colonne {column} : {message}.",invalidJsonRaw:"JSON invalide \xE0 la ligne {line}, colonne {column} \u2014 affichage du texte brut.",empty:"Rien \xE0 afficher",tooLarge:"Contenu trop volumineux ({size} caract\xE8res, limite {limit}).",jsonInvalid:"Ce JSON n'a pas pu \xEAtre lu : {message}",jsonPathMissing:"Rien n\u2019a \xE9t\xE9 trouv\xE9 \xE0 \xAB {path} \xBB dans ce JSON.",jsonUnusable:"Ces donn\xE9es ne peuvent pas \xEAtre affich\xE9es par cet \xE9l\xE9ment.",dataNoList:"Une liste \xE9tait attendue, ou un objet avec une liste sous {keys}.",tooDeep:"Imbrication trop profonde (limite {limit}).",tooComplex:"Ce document est trop imbriqu\xE9 pour \xEAtre affich\xE9.",unserializable:"Cette valeur ne peut pas \xEAtre convertie en JSON (r\xE9f\xE9rence circulaire ou BigInt).",highlightSkipped:"Contenu volumineux : coloration syntaxique d\xE9sactiv\xE9e.",loadFailed:"Impossible de charger \xAB {url} \xBB : {reason}",remoteBlocked:"URL d\u2019une autre origine bloqu\xE9e. Ajoutez l\u2019attribut \xAB allow-remote \xBB pour l\u2019autoriser.",unsafeUrl:"URL bloqu\xE9e : seules les URL http(s) peuvent \xEAtre charg\xE9es.",timeout:"D\xE9lai de la requ\xEAte d\xE9pass\xE9.",added:"Ajout\xE9",removed:"Supprim\xE9",code:"Code",edit:"Modifier",splitView:"C\xF4te \xE0 c\xF4te",unifiedView:"Unifi\xE9",diffStats:"+{added} \u2212{removed}",diffSimplified:"Beaucoup de changements : la comparaison est simplifi\xE9e en blocs retir\xE9s et ajout\xE9s.",noDifferences:"Aucune diff\xE9rence",previousChange:"Modification pr\xE9c\xE9dente",nextChange:"Modification suivante",changePosition:"{current} sur {total}",changeTotal:"Modifications : {count}",terminal:"Terminal",command:"Commande",copyCommand:"Copier la commande",copyCommands:"Copier les commandes",replay:"Rejouer",showMoreLines:"Afficher {count} lignes de plus",files:"Fichiers",copyTree:"Copier l'arborescence",treeStats:"{folders} dossiers, {files} fichiers",invalidTree:"Impossible de lire cette arborescence : {message}",treeTruncated:"Seules les {limit} premi\xE8res entr\xE9es sont affich\xE9es.",status_added:"ajout\xE9",status_removed:"supprim\xE9",status_modified:"modifi\xE9",status_highlighted:"mis en \xE9vidence",httpExchange:"\xC9change",httpRequest:"Requ\xEAte",httpResponse:"R\xE9ponse",httpBody:"Corps",httpHeaders:"En-t\xEAtes",httpQuery:"Param\xE8tres",httpNone:"Aucun",httpNoBody:"Pas de corps",copyUrl:"Copier l'URL",codeLanguage:"Langage",showSecrets:"Afficher les secrets",hideSecrets:"Masquer les secrets",secretsShown:"Secrets affich\xE9s",secretsHidden:"Secrets masqu\xE9s",secretsInCode:"Les identifiants sont masqu\xE9s dans ce code. Remplacez-les par les v\xF4tres.",invalidHttp:"Impossible de lire ce message HTTP : {message}",log:"Journal",followLog:"Suivre les nouvelles lignes",levelToggle:"Afficher ou masquer les entr\xE9es {level}",logNoMatch:"Aucune entr\xE9e ne correspond aux filtres.",chartView:"Graphique",legend:"L\xE9gende",seriesToggle:"Afficher ou masquer {name}",copyData:"Copier les donn\xE9es",chartSummary:"{type} avec {series} s\xE9ries et {points} points.",chartRange:"{name} de {min} \xE0 {max}",chart_line:"Graphique en courbes",chart_area:"Graphique en aires",chart_bar:"Graphique en barres",chart_pie:"Graphique en anneau",chartError:"Impossible de tracer ces donn\xE9es : {message}",chartTruncated:"Seuls les 5 000 premiers points de chaque s\xE9rie sont affich\xE9s.",chartLoadFailed:"Impossible de charger la biblioth\xE8que de graphiques : {message}",openapiInvalid:"Impossible de lire cette description d\u2019API : {message}",openapiYamlFailed:"Impossible de charger le lecteur YAML : {message}",openapiTruncated:"Seuls les 2 000 premiers points d\u2019acc\xE8s sont affich\xE9s.",openapiServers:"Serveurs",openapiAuth:"Authentification",openapiEndpoints:"Points d\u2019acc\xE8s",openapiTags:"Tags",openapiAllTags:"Tous",openapiNoMatch:"Aucun point d\u2019acc\xE8s ne correspond.",openapiDeprecated:"obsol\xE8te",openapiParameters:"Param\xE8tres",openapiName:"Nom",openapiIn:"Emplacement",openapiType:"Type",openapiDescription:"Description",openapiRequired:"requis",openapiRequestBody:"Corps de la requ\xEAte",openapiResponses:"R\xE9ponses",openapiExample:"Exemple",openapiExampleValue:"Exemple",unchangedLines:"Afficher {count} lignes inchang\xE9es",copyPatch:"Copier le patch",changes:"Modifications",original:"Original",modified:"Modifi\xE9",patch:"Patch",tags:"Tags",noTags:"Aucun tag",addTag:"Ajouter un tag",tagPlaceholder:"tag",suggestions:"Suggestions",createTag:"Cr\xE9er \xAB {tag} \xBB",removeTag:"Retirer {tag}",tagAdded:"{tag} ajout\xE9",tagRemoved:"{tag} retir\xE9",pressAgainToRemove:"Appuyez de nouveau sur Retour arri\xE8re pour retirer {tag}",tagDuplicate:"{tag} est d\xE9j\xE0 s\xE9lectionn\xE9.",tagDisabled:"{tag} ne peut pas \xEAtre s\xE9lectionn\xE9.",tagLimit:"Vous pouvez s\xE9lectionner jusqu\u2019\xE0 {max} tags.",tagNotAllowed:"{tag} n\u2019est pas dans la liste.",tagTooLong:"{tag} est trop long.",tagInvalid:"{tag} n\u2019est pas un tag valide.",tagRefused:"{tag} a \xE9t\xE9 refus\xE9.",tagsRequired:"S\xE9lectionnez au moins un tag.",tagCount:"{count} tags",tagCountOne:"1 tag",tagCountMax:"{count} / {max} tags",browseTags:"Parcourir tous les tags",otherTags:"Autres",clearTags:"Retirer tous les tags",filterTags:"Filtrer les tags",tagsFound:"{count} tags",invalidTags:"Les tags doivent \xEAtre un tableau JSON, ou un objet avec \xAB value \xBB et \xAB options \xBB.",rowsRange:"Lignes {from}\u2013{to} sur {total}",noRows:"Aucune ligne",firstPage:"Premi\xE8re page",previousPage:"Page pr\xE9c\xE9dente",nextPage:"Page suivante",lastPage:"Derni\xE8re page",sortBy:"Trier par {name}",column:"Colonne {n}",rowNumber:"Ligne",csvStatus:"{rows} lignes \xD7 {columns} colonnes",csvUnclosed:"Guillemet non ferm\xE9 \xE0 partir de la ligne {line}.",tooManyColumns:"Seules les {limit} premi\xE8res colonnes sont affich\xE9es.",matchingRows:"{count} lignes correspondantes",undo:"Annuler",redo:"R\xE9tablir",fullscreen:"Plein \xE9cran",exitFullscreen:"Quitter le plein \xE9cran",stopEditing:"Terminer la modification",editor:"\xC9diteur",validJson:"JSON valide"}),y={},u=new Map;function ue(e){for(let[t,a]of Object.entries(e))t==="en"?Object.assign(y,a):u.set(t,{...u.get(t)??{},...a});for(let t of f)t()}var p=new Map([["en",v],["fr",B]]);function pe(e,t){if(typeof e!="string"||!/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(e))throw new TypeError(`[vitrine] Invalid locale code "${e}".`);let a={};for(let[s,r]of Object.entries(t??{}))(Object.prototype.hasOwnProperty.call(v,s)||Object.prototype.hasOwnProperty.call(y,s))&&typeof r=="string"&&(a[s]=r.slice(0,500));p.set(e,Object.freeze({...p.get(e)??{},...a}));for(let s of f)s()}var f=new Set;function fe(e){return f.add(e),()=>f.delete(e)}function me(e){let t=p.get(e),a=p.get(String(e).split("-")[0]);return(s,r)=>{let o=String(e).split("-")[0],i=t?.[s]??a?.[s]??u.get(e)?.[s]??u.get(o)?.[s]??v[s]??y[s]??String(s);return r?i.replace(/\{(\w+)\}/g,(h,d)=>Object.prototype.hasOwnProperty.call(r,d)?String(r[d]):h):i}}function be(e,t){try{return new Intl.NumberFormat(t).format(e)}catch{return String(e)}}var C=`/* Vitrine Light \u2014 default light theme. Values: docs/DESIGN_SYSTEM.md \xA72. */
[data-theme='light'] {
  color-scheme: light;
  --vt-bg: #f3f4f1;
  --vt-surface: #ffffff;
  --vt-surface-sunken: #eaece7;
  --vt-surface-raised: #ffffff;
  --vt-border: #d6d9d2;
  --vt-border-strong: #b9beb4;
  --vt-fg: #11151c;
  --vt-fg-muted: #4a5260;
  --vt-accent: #14b8a6;
  --vt-accent-fg: #0a6e6f;
  --vt-on-accent: #11151c;
  --vt-accent-soft: rgba(20, 184, 166, 0.12);
  --vt-highlight: rgba(242, 169, 59, 0.35);
  --vt-highlight-current: rgba(242, 169, 59, 0.7);
  --vt-line-highlight: rgba(20, 184, 166, 0.1);
  --vt-success: #0a6e6f;
  --vt-warning: #a6510b;
  --vt-danger: #b2384f;
  --vt-info: #2f55c9;
  --vt-diff-added: rgba(20, 184, 166, 0.12);
  --vt-diff-removed: rgba(178, 56, 79, 0.12);
  --vt-shadow: 0 8px 24px rgba(17, 21, 28, 0.12);
  --vt-syntax-keyword: #7a3ec8;
  --vt-syntax-string: #0a6e6f;
  --vt-syntax-number: #a6510b;
  --vt-syntax-function: #2f55c9;
  --vt-syntax-type: #b2384f;
  --vt-syntax-comment: #5f6773;
  --vt-syntax-attr: #2f55c9;
  --vt-syntax-tag: #b2384f;
  --vt-syntax-meta: #4a5260;
}
`;var E=`/* Vitrine Dark \u2014 default dark theme. Values: docs/DESIGN_SYSTEM.md \xA72. */
[data-theme='dark'] {
  color-scheme: dark;
  --vt-bg: #11151c;
  --vt-surface: #171c25;
  --vt-surface-sunken: #0c0f14;
  --vt-surface-raised: #1e2430;
  --vt-border: #262d3a;
  --vt-border-strong: #3a4354;
  --vt-fg: #e8eae6;
  --vt-fg-muted: #9aa3b2;
  --vt-accent: #14b8a6;
  --vt-accent-fg: #14b8a6;
  --vt-on-accent: #11151c;
  --vt-accent-soft: rgba(20, 184, 166, 0.16);
  --vt-highlight: rgba(242, 169, 59, 0.3);
  --vt-highlight-current: rgba(242, 169, 59, 0.6);
  --vt-line-highlight: rgba(20, 184, 166, 0.12);
  --vt-success: #14b8a6;
  --vt-warning: #f2a93b;
  --vt-danger: #ff8f73;
  --vt-info: #7c9cff;
  --vt-diff-added: rgba(20, 184, 166, 0.16);
  --vt-diff-removed: rgba(255, 143, 115, 0.14);
  --vt-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  --vt-syntax-keyword: #c4a5ff;
  --vt-syntax-string: #5eead4;
  --vt-syntax-number: #f2a93b;
  --vt-syntax-function: #7c9cff;
  --vt-syntax-type: #ff8f73;
  --vt-syntax-comment: #8a93a3;
  --vt-syntax-attr: #7c9cff;
  --vt-syntax-tag: #ff8f73;
  --vt-syntax-meta: #9aa3b2;
}
`;var A=`/* Vitrine Dim \u2014 softer, blue-grey dark theme for long reading sessions. */
[data-theme='dim'] {
  color-scheme: dark;
  --vt-bg: #1b2230;
  --vt-surface: #212a3a;
  --vt-surface-sunken: #192030;
  --vt-surface-raised: #29334a;
  --vt-border: #33405a;
  --vt-border-strong: #46557a;
  --vt-fg: #dce2ec;
  --vt-fg-muted: #a3adc0;
  --vt-accent: #14b8a6;
  --vt-accent-fg: #2dd4bf;
  --vt-on-accent: #11151c;
  --vt-accent-soft: rgba(45, 212, 191, 0.16);
  --vt-highlight: rgba(242, 169, 59, 0.3);
  --vt-highlight-current: rgba(242, 169, 59, 0.6);
  --vt-line-highlight: rgba(45, 212, 191, 0.12);
  --vt-success: #2dd4bf;
  --vt-warning: #f2a93b;
  --vt-danger: #ff9b82;
  --vt-info: #8faeff;
  --vt-diff-added: rgba(45, 212, 191, 0.16);
  --vt-diff-removed: rgba(255, 155, 130, 0.16);
  --vt-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  --vt-syntax-keyword: #c9aeff;
  --vt-syntax-string: #6ee7d5;
  --vt-syntax-number: #f5b85c;
  --vt-syntax-function: #8faeff;
  --vt-syntax-type: #ff9b82;
  --vt-syntax-comment: #95a0b5;
  --vt-syntax-attr: #8faeff;
  --vt-syntax-tag: #ff9b82;
  --vt-syntax-meta: #a3adc0;
}
`;var R=`/* Vitrine Paper \u2014 warm, low-glare light theme. */
[data-theme='paper'] {
  color-scheme: light;
  --vt-bg: #f4efe4;
  --vt-surface: #fbf8f1;
  --vt-surface-sunken: #f0e9da;
  --vt-surface-raised: #fffdf8;
  --vt-border: #ddd3c0;
  --vt-border-strong: #c3b79f;
  --vt-fg: #2b2620;
  --vt-fg-muted: #5c5347;
  --vt-accent: #14b8a6;
  --vt-accent-fg: #0a6566;
  --vt-on-accent: #11151c;
  --vt-accent-soft: rgba(20, 184, 166, 0.14);
  --vt-highlight: rgba(242, 169, 59, 0.38);
  --vt-highlight-current: rgba(242, 169, 59, 0.72);
  --vt-line-highlight: rgba(20, 184, 166, 0.11);
  --vt-success: #0a6566;
  --vt-warning: #974a09;
  --vt-danger: #a63148;
  --vt-info: #2b4fbd;
  --vt-diff-added: rgba(20, 184, 166, 0.14);
  --vt-diff-removed: rgba(166, 49, 72, 0.12);
  --vt-shadow: 0 8px 24px rgba(43, 38, 32, 0.12);
  --vt-syntax-keyword: #7239bd;
  --vt-syntax-string: #0a6566;
  --vt-syntax-number: #974a09;
  --vt-syntax-function: #2b4fbd;
  --vt-syntax-type: #a63148;
  --vt-syntax-comment: #6b6255;
  --vt-syntax-attr: #2b4fbd;
  --vt-syntax-tag: #a63148;
  --vt-syntax-meta: #5c5347;
}
`;var N=`/* Vitrine High Contrast \u2014 maximum legibility (WCAG AAA text contrast). */
[data-theme='high-contrast'] {
  color-scheme: dark;
  --vt-bg: #000000;
  --vt-surface: #000000;
  --vt-surface-sunken: #0a0a0a;
  --vt-surface-raised: #141414;
  --vt-border: #8a8a8a;
  --vt-border-strong: #ffffff;
  --vt-fg: #ffffff;
  --vt-fg-muted: #d6d6d6;
  --vt-accent: #2ee6d0;
  --vt-accent-fg: #5eead4;
  --vt-on-accent: #000000;
  --vt-accent-soft: rgba(46, 230, 208, 0.22);
  --vt-highlight: rgba(255, 214, 0, 0.35);
  --vt-highlight-current: rgba(255, 214, 0, 0.55);
  --vt-line-highlight: rgba(46, 230, 208, 0.18);
  --vt-success: #5eead4;
  --vt-warning: #ffd166;
  --vt-danger: #ffa08a;
  --vt-info: #a8c1ff;
  --vt-diff-added: rgba(46, 230, 208, 0.22);
  --vt-diff-removed: rgba(255, 160, 138, 0.24);
  --vt-shadow: 0 0 0 1px #ffffff;
  --vt-syntax-keyword: #dcc2ff;
  --vt-syntax-string: #7cf5e0;
  --vt-syntax-number: #ffd166;
  --vt-syntax-function: #a8c1ff;
  --vt-syntax-type: #ffb3a1;
  --vt-syntax-comment: #c8c8c8;
  --vt-syntax-attr: #a8c1ff;
  --vt-syntax-tag: #ffb3a1;
  --vt-syntax-meta: #e0e0e0;
}
`;var W=Object.freeze(["bg","surface","surface-sunken","surface-raised","border","border-strong","fg","fg-muted","accent","accent-fg","on-accent","accent-soft","highlight","highlight-current","line-highlight","success","warning","danger","info","diff-added","diff-removed","shadow","syntax-keyword","syntax-string","syntax-number","syntax-function","syntax-type","syntax-comment","syntax-attr","syntax-tag","syntax-meta"]),n=new Map,g=new CSSStyleSheet,X=/^[a-z][a-z0-9-]{0,39}$/,Z=new Set(["auto"]);function ee(e){let t=/\[data-theme='([a-z0-9-]+)'\]/.exec(e)?.[1];if(!t)throw new Error("[vitrine] Theme file without a [data-theme] selector.");let a=/color-scheme:\s*(light|dark)\s*;/.exec(e)?.[1]==="dark"?"dark":"light",s={};for(let[,r,o]of e.matchAll(/--vt-([a-z0-9-]+)\s*:\s*([^;]+);/g))s[r]=o.trim();return{name:t,definition:{colorScheme:a,tokens:s}}}for(let e of[C,E,A,R,N]){let{name:t,definition:a}=ee(e);n.set(t,a)}var Oe=Object.freeze([...n.keys()]);function te(e){return typeof e!="string"||e.length===0||e.length>200||/[;{}<>\\]/.test(e)?!1:!/(?:url|image|image-set|cross-fade|element|src)\s*\(|@import|expression/i.test(e)}function Le(e,t={}){if(typeof e!="string"||!X.test(e)||Z.has(e))throw new TypeError(`[vitrine] Invalid theme name "${e}". Use lowercase letters, digits, "-".`);let a=t.colorScheme==="dark"?"dark":t.colorScheme==="light"?"light":void 0,s=t.extends??(a==="dark"?"dark":"light"),r=n.get(s);if(!r)throw new TypeError(`[vitrine] Unknown base theme "${s}".`);let o={...r.tokens};for(let[i,h]of Object.entries(t.tokens??{})){let d=i.replace(/^--vt-/,"");W.includes(d)?te(h)?o[d]=h.trim():console.warn(`[vitrine] Unsafe or invalid value for theme token "${i}" ignored.`):console.warn(`[vitrine] Unknown theme token "${i}" ignored.`)}return n.set(e,{colorScheme:a??r.colorScheme,tokens:o}),O(),L(),e}function Pe(){return[...n.keys()]}function _e(e){let t=n.get(e);return t?{colorScheme:t.colorScheme,tokens:{...t.tokens}}:void 0}function O(){for(;g.cssRules.length;)g.deleteRule(0);for(let[e,t]of n){let a=g.insertRule(`.vt[data-theme="${e}"] {}`,g.cssRules.length),s=g.cssRules[a].style;s.setProperty("color-scheme",t.colorScheme);for(let[r,o]of Object.entries(t.tokens))s.setProperty(`--_${r}`,`var(--vt-${r}, ${o})`)}}O();var x=typeof matchMedia=="function"?matchMedia("(prefers-color-scheme: dark)"):null,w=new Set;function L(){for(let e of w)e()}x?.addEventListener?.("change",L);function Ue(e){return w.add(e),()=>w.delete(e)}function De(e){let t=l(),a=e?.trim().toLowerCase()||t.theme;if(a!=="auto"&&!n.has(a)&&(a=n.has(t.theme)?t.theme:"auto"),a!=="auto")return a;let s=x?.matches?t.darkTheme:t.lightTheme;return n.has(s)?s:x?.matches?"dark":"light"}var P="",_="",U="";function Me(e){P=e}function je(){return P}function qe(e){U=e}function ze(){return U}function ae(e){_=e}function D(){return _}var T=Object.freeze({"1c-light":0,"a11y-dark":1,"a11y-light":0,agate:1,"an-old-hope":1,androidstudio:1,"arduino-light":0,arta:1,ascetic:0,"atom-one-dark":1,"atom-one-dark-reasonable":1,"atom-one-light":0,"base16-3024":1,"base16-apathy":1,"base16-apprentice":1,"base16-ashes":1,"base16-atelier-cave":1,"base16-atelier-cave-light":0,"base16-atelier-dune":1,"base16-atelier-dune-light":0,"base16-atelier-estuary":1,"base16-atelier-estuary-light":0,"base16-atelier-forest":1,"base16-atelier-forest-light":0,"base16-atelier-heath":1,"base16-atelier-heath-light":0,"base16-atelier-lakeside":1,"base16-atelier-lakeside-light":0,"base16-atelier-plateau":1,"base16-atelier-plateau-light":0,"base16-atelier-savanna":1,"base16-atelier-savanna-light":0,"base16-atelier-seaside":1,"base16-atelier-seaside-light":0,"base16-atelier-sulphurpool":1,"base16-atelier-sulphurpool-light":0,"base16-atlas":1,"base16-bespin":1,"base16-black-metal":1,"base16-black-metal-bathory":1,"base16-black-metal-burzum":1,"base16-black-metal-dark-funeral":1,"base16-black-metal-gorgoroth":1,"base16-black-metal-immortal":1,"base16-black-metal-khold":1,"base16-black-metal-marduk":1,"base16-black-metal-mayhem":1,"base16-black-metal-nile":1,"base16-black-metal-venom":1,"base16-brewer":1,"base16-bright":1,"base16-brogrammer":1,"base16-brush-trees":0,"base16-brush-trees-dark":1,"base16-chalk":1,"base16-circus":1,"base16-classic-dark":1,"base16-classic-light":0,"base16-codeschool":1,"base16-colors":1,"base16-cupcake":0,"base16-cupertino":0,"base16-danqing":1,"base16-darcula":1,"base16-dark-violet":1,"base16-darkmoss":1,"base16-darktooth":1,"base16-decaf":1,"base16-default-dark":1,"base16-default-light":0,"base16-dirtysea":0,"base16-dracula":1,"base16-edge-dark":1,"base16-edge-light":0,"base16-eighties":1,"base16-embers":1,"base16-equilibrium-dark":1,"base16-equilibrium-gray-dark":1,"base16-equilibrium-gray-light":0,"base16-equilibrium-light":0,"base16-espresso":1,"base16-eva":1,"base16-eva-dim":1,"base16-flat":1,"base16-framer":1,"base16-fruit-soda":0,"base16-gigavolt":1,"base16-github":0,"base16-google-dark":1,"base16-google-light":0,"base16-grayscale-dark":1,"base16-grayscale-light":0,"base16-green-screen":1,"base16-gruvbox-dark-hard":1,"base16-gruvbox-dark-medium":1,"base16-gruvbox-dark-pale":1,"base16-gruvbox-dark-soft":1,"base16-gruvbox-light-hard":0,"base16-gruvbox-light-medium":0,"base16-gruvbox-light-soft":0,"base16-hardcore":1,"base16-harmonic16-dark":1,"base16-harmonic16-light":0,"base16-heetch-dark":1,"base16-heetch-light":0,"base16-helios":1,"base16-hopscotch":1,"base16-horizon-dark":1,"base16-horizon-light":0,"base16-humanoid-dark":1,"base16-humanoid-light":0,"base16-ia-dark":1,"base16-ia-light":0,"base16-icy-dark":1,"base16-ir-black":1,"base16-isotope":1,"base16-kimber":1,"base16-london-tube":1,"base16-macintosh":1,"base16-marrakesh":1,"base16-materia":1,"base16-material":1,"base16-material-darker":1,"base16-material-lighter":0,"base16-material-palenight":1,"base16-material-vivid":1,"base16-mellow-purple":1,"base16-mexico-light":0,"base16-mocha":1,"base16-monokai":1,"base16-nebula":1,"base16-nord":1,"base16-nova":1,"base16-ocean":1,"base16-oceanicnext":1,"base16-one-light":0,"base16-onedark":1,"base16-outrun-dark":1,"base16-papercolor-dark":1,"base16-papercolor-light":0,"base16-paraiso":1,"base16-pasque":1,"base16-phd":1,"base16-pico":1,"base16-pop":1,"base16-porple":1,"base16-qualia":1,"base16-railscasts":1,"base16-rebecca":1,"base16-ros-pine":1,"base16-ros-pine-dawn":0,"base16-ros-pine-moon":1,"base16-sagelight":0,"base16-sandcastle":1,"base16-seti-ui":1,"base16-shapeshifter":0,"base16-silk-dark":1,"base16-silk-light":0,"base16-snazzy":1,"base16-solar-flare":1,"base16-solar-flare-light":0,"base16-solarized-dark":1,"base16-solarized-light":0,"base16-spacemacs":1,"base16-summercamp":1,"base16-summerfruit-dark":1,"base16-summerfruit-light":0,"base16-synth-midnight-terminal-dark":1,"base16-synth-midnight-terminal-light":0,"base16-tango":1,"base16-tender":1,"base16-tomorrow":0,"base16-tomorrow-night":1,"base16-twilight":1,"base16-unikitty-dark":1,"base16-unikitty-light":0,"base16-vulcan":1,"base16-windows-10":1,"base16-windows-10-light":0,"base16-windows-95":1,"base16-windows-95-light":0,"base16-windows-high-contrast":1,"base16-windows-high-contrast-light":0,"base16-windows-nt":1,"base16-windows-nt-light":0,"base16-woodland":1,"base16-xcode-dusk":1,"base16-zenburn":1,"brown-paper":0,"codepen-embed":1,"color-brewer":0,"cybertopia-cherry":0,"cybertopia-dimmer":0,"cybertopia-icecap":0,"cybertopia-saturated":0,dark:1,default:0,devibeans:1,docco:0,equinox:0,far:1,felipec:1,foundation:0,github:0,"github-dark":1,"github-dark-dimmed":1,gml:1,googlecode:0,"gradient-dark":1,"gradient-light":0,grayscale:0,hybrid:1,idea:0,"intellij-light":0,"ir-black":1,"isbl-editor-dark":1,"isbl-editor-light":0,"kimbie-dark":1,"kimbie-light":0,lightfair:0,lioshi:1,magula:0,"mono-blue":0,monokai:1,"monokai-sublime":1,"night-owl":1,"nnfx-dark":1,"nnfx-light":0,nord:1,obsidian:1,"panda-syntax-dark":1,"panda-syntax-light":0,"paraiso-dark":1,"paraiso-light":0,pojoaque:0,purebasic:0,"qtcreator-dark":1,"qtcreator-light":0,rainbow:1,"rose-pine":1,"rose-pine-dawn":0,"rose-pine-moon":1,routeros:0,"school-book":0,"shades-of-purple":1,srcery:1,"stackoverflow-dark":1,"stackoverflow-light":0,sunburst:1,"tokyo-night-dark":1,"tokyo-night-light":0,"tomorrow-night-blue":1,"tomorrow-night-bright":1,vs:0,"vs-dark":1,vs2015:1,xcode:0,xt256:1});var k=new Map,I=new Map;function Je(e){if(typeof e!="string")return null;let t=e.trim().toLowerCase().replace(/\//g,"-");return!t||t.length>60?null:Object.prototype.hasOwnProperty.call(T,t)?t:null}function $e(){return Object.keys(T)}function Ye(e){return I.get(e)}function Ke(e){let t=k.get(e);if(t)return t;let a=se(e);return k.set(e,a),a}async function se(e){let t=l().syntaxThemesUrl||D();if(!t)return null;try{let a=new URL(`${e}.css`,new URL(t.endsWith("/")?t:`${t}/`,document.baseURI));if(a.protocol!=="https:"&&a.protocol!=="http:")return null;let s=await fetch(a.href,{credentials:"same-origin"});if(!s.ok)throw new Error(`HTTP ${s.status}`);let r=await s.text(),o=new CSSStyleSheet;return o.replaceSync(r),I.set(e,o),o}catch(a){return console.warn(`[vitrine] Could not load the "${e}" syntax theme.`,a),k.delete(e),null}}export{re as a,oe as b,Me as c,je as d,qe as e,ze as f,ae as g,l as h,ie as i,ce as j,de as k,ge as l,ue as m,pe as n,fe as o,me as p,be as q,g as r,Oe as s,Le as t,Pe as u,_e as v,Ue as w,De as x,Je as y,$e as z,Ye as A,Ke as B};
//# sourceMappingURL=chunk-2IDMCIF6.js.map
