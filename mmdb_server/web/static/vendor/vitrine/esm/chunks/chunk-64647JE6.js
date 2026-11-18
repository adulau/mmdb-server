/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as ht,d as pt}from"./chunk-PVVRLBB4.js";import{I as S,O as ct,Q as M,U as J,X as dt,c as nt,d as q,e as P,j as V,k as U,l as d,m as W,n as ot}from"./chunk-DNNVKOIB.js";import{k as $,l as E,m as lt,q as C}from"./chunk-2IDMCIF6.js";var ut=Object.freeze({tableYes:"Yes",tableNo:"No",tableAll:"All",tableEmpty:"(empty)",tableRows:"{count} rows",tableRowCount:"{count} rows",tableFiltered:"filtered from {total}",tableNoMatch:"No row matches the filters.",tableInvalid:"The data could not be read: {message}",tableTruncated:"The table was cut to its first rows or columns.",tableSelected:"{count} selected",tableSelect:"Select",tableSelectAll:"Select all",tableSelectRow:"Select row {n}",tableSelectGroup:"Select the group",tableSelectAllMatching:"Select all {count}",tableSelectionActions:"Actions on the selection",tableClearSelection:"Clear the selection",tableCopyRows:"Copy rows",tableDetails:"Details",tableExpandRow:"Show details",tableCollapseRow:"Hide details",tableShowFilters:"Show filters",tableHideFilters:"Hide filters",tableFilter:"Filter",tableFilterBy:"Filter {name}",tableFilterText:"Filter\u2026",tableFilterRange:">10, 1..5\u2026",tableRemoveFilter:"Remove the filter on {name}",tableClearAll:"Clear all",tableColumns:"Columns",tableColumnMenu:"{name} column options",tableShowAll:"Show all",tableResetLayout:"Reset layout",tableMoveUp:"Move {name} up",tableMoveDown:"Move {name} down",tableMoveLeft:"Move left",tableMoveRight:"Move right",tableMoved:"{name} moved to position {position}",tablePin:"Pin up to this column",tableUnpin:"Unpin",tableAutoFit:"Fit width to content",tableHideColumn:"Hide column",tableResize:"Drag to resize, double-click to fit",tableGroupBy:"Group by this column",tableGroupedBy:"Grouped by {name}",tableUngroup:"Ungroup",tableSortAsc:"Sort ascending",tableSortDesc:"Sort descending",tableClearSort:"Clear sort",tableSortField:"Sort by",tableNoSort:"No sort",tableSortedBy:"Sorted by {names}",tableSortedAnnounce:"Sorted by {name}, {direction}",tableAscending:"ascending",tableDescending:"descending",tableUnsorted:"Original order",tableFooter:"Footer",tableAgg_count:"Count",tableAgg_sum:"Sum",tableAgg_avg:"Avg",tableAgg_min:"Min",tableAgg_max:"Max",tableAggName_none:"Nothing",tableAggName_count:"Count of values",tableAggName_sum:"Sum",tableAggName_avg:"Average",tableAggName_min:"Minimum",tableAggName_max:"Maximum",tableDensity:"Density: {density}",tableDensity_compact:"compact",tableDensity_normal:"normal",tableDensity_comfortable:"comfortable",tablePageSize:"Rows per page",tablePerPage:"Per page",tablePage:"{page} / {pages}",tableEditCell:"Edit {name}",tableShortcuts:"Keyboard shortcuts",tableKeyMove:"Move between cells",tableKeyRowEnds:"First or last cell of the row",tableKeyTableEnds:"First or last row",tableKeyPage:"One screen up or down",tableKeySelect:"Select the row (on a header: sort)",tableKeyRange:"Extend the selection",tableKeySelectAll:"Select every matching row",tableKeyClear:"Clear the selection, close a menu",tableKeyEnter:"Edit, open details or a group, sort a header",tableKeyEdit:"Edit the cell",tableKeyExpand:"Open or close details and groups",tableKeyCopy:"Copy the selection or the cell",tableKeyMultiSort:"On a header: add to the sort",tableKeyMoveColumn:"On a header: move the column",tableKeyResize:"On a header: resize the column",tableKeySearch:"Search",tableMouseHint:"Shift+click a header to sort on several columns. Ctrl+click or Shift+click rows to select. Drag headers to reorder, their edge to resize.",tableSelectMenu:"Selection options",tableSelectPage:"Select this page",tableSelectMatching:"Select all matching rows",tableSelectEverything:"Select every row (ignore filters)",tableInvertPage:"Invert the page selection",tableUnselectPage:"Unselect this page",tableShowing:"Showing {shown} of {total}",tablePageAnnounce:"Page {page} of {pages}",tableShowMore:"Show {count} more",tableGoToPage:"Page {page}",tableJump:"Go to page",tableJumpShort:"Page\u2026",tablePagination:"Pagination",tableContains:"contains \u201C{text}\u201D",tableIsEmpty:"is empty",tableNot:"not",tableAnd:"AND",tableOr:"OR",tableToggleJoin:"Switch between AND and OR",tableEditCondition:"Edit this condition",tableRemoveCondition:"Remove {name}",tableQueryLabel:"Filter rows",tableQueryMore:"Add a condition\u2026",tableQueryPlaceholder:"Filter: team:Core, score:>50, -status:closed, or any text\u2026",tableOpHint:"compare",tableRangeHint:"range",tableFilterColumn:"filter this column",tableMatchAll:"Match all",tableMatchAny:"Match any",tableClearConditions:"Clear the conditions",tableType_text:"text",tableType_number:"number",tableType_date:"date",tableType_boolean:"yes / no",tableType_url:"link",tableSeeAll:"See all",tableShowLess:"Show less"}),bt={tableYes:"Oui",tableNo:"Non",tableAll:"Tout",tableEmpty:"(vide)",tableRows:"{count} lignes",tableRowCount:"{count} lignes",tableFiltered:"filtr\xE9es sur {total}",tableNoMatch:"Aucune ligne ne correspond aux filtres.",tableInvalid:"Les donn\xE9es n\u2019ont pas pu \xEAtre lues : {message}",tableTruncated:"Le tableau a \xE9t\xE9 limit\xE9 \xE0 ses premi\xE8res lignes ou colonnes.",tableSelected:"{count} s\xE9lectionn\xE9es",tableSelect:"S\xE9lection",tableSelectAll:"Tout s\xE9lectionner",tableSelectRow:"S\xE9lectionner la ligne {n}",tableSelectGroup:"S\xE9lectionner le groupe",tableSelectAllMatching:"S\xE9lectionner les {count}",tableSelectionActions:"Actions sur la s\xE9lection",tableClearSelection:"Vider la s\xE9lection",tableCopyRows:"Copier les lignes",tableDetails:"D\xE9tails",tableExpandRow:"Afficher les d\xE9tails",tableCollapseRow:"Masquer les d\xE9tails",tableShowFilters:"Afficher les filtres",tableHideFilters:"Masquer les filtres",tableFilter:"Filtrer",tableFilterBy:"Filtrer {name}",tableFilterText:"Filtrer\u2026",tableRemoveFilter:"Retirer le filtre sur {name}",tableClearAll:"Tout effacer",tableColumns:"Colonnes",tableColumnMenu:"Options de la colonne {name}",tableShowAll:"Tout afficher",tableResetLayout:"R\xE9initialiser",tableMoveUp:"Monter {name}",tableMoveDown:"Descendre {name}",tableMoveLeft:"D\xE9placer \xE0 gauche",tableMoveRight:"D\xE9placer \xE0 droite",tableMoved:"{name} d\xE9plac\xE9e en position {position}",tablePin:"Figer jusqu\u2019\xE0 cette colonne",tableUnpin:"Lib\xE9rer",tableAutoFit:"Ajuster au contenu",tableHideColumn:"Masquer la colonne",tableResize:"Glisser pour redimensionner, double-clic pour ajuster",tableGroupBy:"Grouper par cette colonne",tableGroupedBy:"Group\xE9 par {name}",tableUngroup:"D\xE9grouper",tableSortAsc:"Tri croissant",tableSortDesc:"Tri d\xE9croissant",tableClearSort:"Retirer le tri",tableSortField:"Trier par",tableNoSort:"Sans tri",tableSortedBy:"Tri\xE9 par {names}",tableSortedAnnounce:"Tri\xE9 par {name}, {direction}",tableAscending:"croissant",tableDescending:"d\xE9croissant",tableUnsorted:"Ordre d\u2019origine",tableFooter:"Pied de tableau",tableAgg_count:"Nombre",tableAgg_sum:"Somme",tableAgg_avg:"Moy.",tableAgg_min:"Min",tableAgg_max:"Max",tableAggName_none:"Rien",tableAggName_count:"Nombre de valeurs",tableAggName_sum:"Somme",tableAggName_avg:"Moyenne",tableAggName_min:"Minimum",tableAggName_max:"Maximum",tableDensity:"Densit\xE9 : {density}",tableDensity_compact:"compacte",tableDensity_normal:"normale",tableDensity_comfortable:"a\xE9r\xE9e",tablePageSize:"Lignes par page",tablePerPage:"Par page",tableEditCell:"Modifier {name}",tableShortcuts:"Raccourcis clavier",tableKeyMove:"Se d\xE9placer entre les cellules",tableKeyRowEnds:"Premi\xE8re ou derni\xE8re cellule de la ligne",tableKeyTableEnds:"Premi\xE8re ou derni\xE8re ligne",tableKeyPage:"Un \xE9cran plus haut ou plus bas",tableKeySelect:"S\xE9lectionner la ligne (sur un en-t\xEAte : trier)",tableKeyRange:"\xC9tendre la s\xE9lection",tableKeySelectAll:"S\xE9lectionner toutes les lignes filtr\xE9es",tableKeyClear:"Vider la s\xE9lection, fermer un menu",tableKeyEnter:"Modifier, ouvrir les d\xE9tails ou un groupe, trier un en-t\xEAte",tableKeyEdit:"Modifier la cellule",tableKeyExpand:"Ouvrir ou fermer d\xE9tails et groupes",tableKeyCopy:"Copier la s\xE9lection ou la cellule",tableKeyMultiSort:"Sur un en-t\xEAte : ajouter au tri",tableKeyMoveColumn:"Sur un en-t\xEAte : d\xE9placer la colonne",tableKeyResize:"Sur un en-t\xEAte : redimensionner la colonne",tableKeySearch:"Rechercher",tableMouseHint:"Maj+clic sur un en-t\xEAte pour trier sur plusieurs colonnes. Ctrl+clic ou Maj+clic sur les lignes pour s\xE9lectionner. Glissez les en-t\xEAtes pour les r\xE9ordonner, leur bord pour redimensionner.",tableSelectMenu:"Options de s\xE9lection",tableSelectPage:"S\xE9lectionner cette page",tableSelectMatching:"S\xE9lectionner toutes les lignes filtr\xE9es",tableSelectEverything:"S\xE9lectionner tout (sans filtres)",tableInvertPage:"Inverser la s\xE9lection de la page",tableUnselectPage:"D\xE9s\xE9lectionner cette page",tableShowing:"{shown} affich\xE9es sur {total}",tablePageAnnounce:"Page {page} sur {pages}",tableShowMore:"Afficher {count} de plus",tableGoToPage:"Page {page}",tableJump:"Aller \xE0 la page",tableJumpShort:"Page\u2026",tablePagination:"Pagination",tableContains:"contient \xAB {text} \xBB",tableIsEmpty:"est vide",tableNot:"pas",tableAnd:"ET",tableOr:"OU",tableToggleJoin:"Basculer entre ET et OU",tableEditCondition:"Modifier cette condition",tableRemoveCondition:"Retirer {name}",tableQueryLabel:"Filtrer les lignes",tableQueryMore:"Ajouter une condition\u2026",tableQueryPlaceholder:"Filtrer : team:Core, score:>50, -status:closed, ou du texte\u2026",tableOpHint:"comparer",tableRangeHint:"intervalle",tableFilterColumn:"filtrer cette colonne",tableMatchAll:"Toutes les conditions",tableMatchAny:"Au moins une",tableClearConditions:"Effacer les conditions",tableType_text:"texte",tableType_number:"nombre",tableType_date:"date",tableType_boolean:"oui / non",tableType_url:"lien",tableSeeAll:"Voir tout",tableShowLess:"R\xE9duire"};var ft=`/*
 * Data table: sticky header and pinned columns, filters, selection bar, groups,
 * details, menus, pager, and a card layout on narrow screens.
 */
.vt {
  --_row-h: 37px;
  --_cell-x: var(--_space-3);
}

.vt[data-density='compact'] {
  --_row-h: 30px;
  --_cell-x: var(--_space-2);
}

.vt[data-density='comfortable'] {
  --_row-h: 46px;
  --_cell-x: var(--_space-4);
}

.tb {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.tb-body {
  background: var(--_surface);
}

/* Without max-height the page scrolls; paging off (virtual) needs its own height. */
.tb-body:has(> .tb-grid) {
  max-height: var(--_max-height, none);
}

.tb-body.virtual {
  height: var(--_max-height, min(70vh, 560px));
  max-height: none;
}

.vt[data-fullscreen] .tb-body.virtual {
  height: auto;
}

/* ---------- Grid ---------- */

.tb-grid {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  font-variant-numeric: tabular-nums;
}

.tb-grid th,
.tb-grid td {
  height: var(--_row-h);
  padding: 0 var(--_cell-x);
  border-bottom: 1px solid var(--_border);
  overflow: hidden;
  background: var(--_surface);
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
}

.vt[data-wrap] .tb-grid td {
  height: auto;
  padding-block: 6px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.tb-grid thead th {
  position: sticky;
  top: 0;
  z-index: 3;
  background: var(--_surface-sunken);
  color: var(--_fg);
  font-weight: 600;
}

.tb-grid thead .tb-filters th {
  top: var(--_row-h);
  height: auto;
  padding-block: 4px;
  font-weight: 400;
}

.tb-grid tfoot td {
  position: sticky;
  bottom: 0;
  z-index: 3;
  border-top: 1px solid var(--_border-strong);
  border-bottom: 0;
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
}

.tb-grid tfoot strong {
  color: var(--_fg);
  font-weight: 600;
}

.tb-agg {
  font-size: var(--_font-size-small);
}

.tb-grid .pinned {
  position: sticky;
  z-index: 2;
}

.tb-grid thead .pinned,
.tb-grid tfoot .pinned {
  z-index: 4;
}

.tb-grid .pin-edge {
  box-shadow: 1px 0 0 var(--_border-strong);
}

.tb-grid .type-number,
.tb-grid .align-end {
  text-align: end;
}

.tb-grid .align-center {
  text-align: center;
}

.tb-grid tbody .tb-row:hover > * {
  background: color-mix(in srgb, var(--_accent-soft) 55%, var(--_surface));
}

.tb-grid tbody .tb-row.selected > * {
  background: color-mix(in srgb, var(--_accent-soft) 100%, var(--_surface));
}

.tb-grid tbody .tb-row.current > * {
  box-shadow:
    inset 0 1px 0 var(--_warning),
    inset 0 -1px 0 var(--_warning);
}

.tb-grid [data-c]:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.tb-grid .editable {
  cursor: text;
}

.tb-ctl {
  padding: 0 !important;
  color: var(--_fg-muted);
  text-align: center !important;
}

.tb-ctl-number {
  padding-inline: var(--_space-2) !important;
  text-align: end !important;
  font-size: var(--_font-size-small);
}

.tb-check {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--_accent);
  vertical-align: middle;
  cursor: pointer;
}

.tb-expand {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_fg-muted);
  cursor: pointer;
}

.tb-expand:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

/* ---------- Header cells ---------- */

.tb-head {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.tb-head-inner {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.tb-head.type-number .tb-head-inner,
.tb-head.align-end .tb-head-inner {
  flex-direction: row-reverse;
}

.tb-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tb-head .icon {
  flex: none;
  width: 14px;
  height: 14px;
  color: var(--_accent-fg);
}

.tb-sort-hint {
  display: inline-flex;
  opacity: 0;
  transition: opacity var(--_duration-fast) var(--_easing);
}

.tb-sort-hint .icon {
  color: var(--_fg-muted);
}

.tb-head:hover .tb-sort-hint,
.tb-head:focus-visible .tb-sort-hint {
  opacity: 1;
}

.tb-sort-rank {
  min-width: 14px;
  padding: 0 3px;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-size: 10px;
  line-height: 14px;
  text-align: center;
}

.tb-menu-btn {
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 22px;
  height: 22px;
  margin-inline-start: auto;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_fg-muted);
  cursor: pointer;
  opacity: 0;
}

.tb-head.type-number .tb-menu-btn,
.tb-head.align-end .tb-menu-btn {
  margin-inline: 0 auto;
}

.tb-head:hover .tb-menu-btn,
.tb-head:focus-within .tb-menu-btn,
.tb-menu-btn[aria-expanded='true'] {
  opacity: 1;
}

.tb-menu-btn:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.tb-menu-btn .icon {
  color: inherit;
}

@media (hover: none) {
  .tb-menu-btn,
  .tb-sort-hint {
    opacity: 1;
  }
}

.tb-resizer {
  position: absolute;
  top: 0;
  inset-inline-end: -4px;
  z-index: 1;
  width: 9px;
  height: 100%;
  cursor: col-resize;
  touch-action: none;
}

.tb-resizer::after {
  content: '';
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 4px;
  width: 1px;
  background: var(--_border-strong);
}

.tb-resizer:hover::after,
.tb-resizer.active::after {
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--_accent);
}

.tb-head.dragging {
  opacity: 0.5;
}

.tb-head.drop-before {
  box-shadow: inset 3px 0 0 var(--_accent);
}

.tb-head.drop-after {
  box-shadow: inset -3px 0 0 var(--_accent);
}

.tb-filter,
.tb-size,
.tb-edit {
  box-sizing: border-box;
  width: 100%;
  min-height: 26px;
  padding: 2px 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  font-size: var(--_font-size-small);
}

.tb-edit {
  min-height: calc(var(--_row-h) - 8px);
  font-size: inherit;
}

.tb-size {
  width: auto;
}

/* ---------- Cells ---------- */

.tb-text {
  white-space: inherit;
}

.tb-link {
  color: var(--_accent-fg);
}

.tb-bool {
  display: inline-flex;
  vertical-align: middle;
}

.tb-bool.yes {
  color: var(--_success);
}

.tb-bool.no {
  color: var(--_fg-muted);
}

.tb-empty {
  height: auto !important;
  padding: var(--_space-6) var(--_space-4) !important;
  color: var(--_fg-muted);
  text-align: center !important;
  white-space: normal !important;
}

.tb-spacer td {
  height: auto;
  padding: 0;
  border: 0;
}

/* ---------- Groups and details ---------- */

.tb-group-cell,
.tb-detail > td {
  overflow: visible !important;
}

.tb-group-cell {
  background: var(--_surface-sunken) !important;
  cursor: pointer;
}

.tb-group-inner {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  position: sticky;
  left: var(--_space-3);
}

.tb-chevron {
  display: inline-flex;
  color: var(--_fg-muted);
}

.tb-group-name {
  color: var(--_fg-muted);
}

.tb-count {
  padding: 0 7px;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-size: var(--_font-size-small);
  line-height: 18px;
}

.tb-detail > td {
  height: auto !important;
  padding: var(--_space-3) var(--_space-5) !important;
  background: var(--_surface-sunken) !important;
  white-space: normal !important;
}

.tb-detail-list,
.tb-card-fields {
  display: grid;
  grid-template-columns: minmax(90px, max-content) 1fr;
  gap: 4px var(--_space-4);
  margin: 0;
}

.tb-detail-list {
  position: sticky;
  left: var(--_space-5);
  max-width: min(900px, 90cqw);
}

.tb-detail-list dt,
.tb-card-fields dt {
  color: var(--_fg-muted);
}

.tb-detail-list dd,
.tb-card-fields dd {
  min-width: 0;
  margin: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

/* ---------- Bars ---------- */

.tb-bulk,
.tb-state {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
}

.tb-bulk {
  background: color-mix(in srgb, var(--_accent-soft) 70%, var(--_surface));
}

.tb-bulk .spacer {
  flex: 1;
}

.tb-bulk-count {
  font-weight: 600;
}

.tb-bulk .text-btn,
.tb-state .text-btn {
  min-height: 26px;
  font-size: var(--_font-size-small);
}

.tb-bulk .text-btn .icon {
  width: 14px;
  height: 14px;
}

.tb-bulk .text-btn.danger {
  border-color: var(--_danger);
  color: var(--_danger);
}

.tb-state {
  background: var(--_surface);
}

.tb-chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  max-width: 320px;
  padding: 0 2px 0 8px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  line-height: 22px;
}

.tb-chip > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tb-chip-x {
  display: inline-grid;
  place-items: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-full);
  background: none;
  color: var(--_fg-muted);
  cursor: pointer;
}

.tb-chip-x:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.tb-chip-x .icon {
  width: 12px;
  height: 12px;
}

.pager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2) var(--_space-3);
  min-height: 40px;
  padding: 0 var(--_space-2) 0 var(--_space-3);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.tb-pager .toolbar {
  display: flex;
  align-items: center;
  gap: 2px;
}

.tb-size-label {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  margin-inline-end: var(--_space-2);
}

.tb-page {
  padding: 0 var(--_space-2);
  color: var(--_fg);
}

/* ---------- Popovers ---------- */

.tb-popover {
  position: absolute;
  top: var(--_space-2);
  right: var(--_space-2);
  z-index: 20;
  min-width: 220px;
  max-width: min(360px, calc(100% - 16px));
  max-height: min(70vh, 460px);
  padding: var(--_space-1);
  overflow: auto;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  box-shadow: 0 10px 30px rgb(0 0 0 / 18%);
  color: var(--_fg);
  overscroll-behavior: contain;
}

.tb-popover hr {
  margin: var(--_space-1) 0;
  border: 0;
  border-top: 1px solid var(--_border);
}

.tb-menu-title {
  padding: var(--_space-2) var(--_space-2) var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.tb-menu-item {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  min-height: 30px;
  padding: 0 var(--_space-2);
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.tb-menu-item:hover:not(:disabled),
.tb-menu-item:focus-visible {
  background: var(--_accent-soft);
}

.tb-menu-item:disabled {
  opacity: 0.45;
  cursor: default;
}

.tb-menu-item .icon {
  width: 15px;
  height: 15px;
  color: var(--_fg-muted);
}

.tb-menu-item[aria-checked='true'] .icon {
  color: var(--_accent-fg);
}

.tb-col-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tb-col-item {
  display: flex;
  align-items: center;
  gap: 2px;
  padding-inline-start: var(--_space-2);
  border-radius: var(--_radius-sm);
}

.tb-col-item:hover {
  background: color-mix(in srgb, var(--_accent-soft) 50%, transparent);
}

.tb-col-item label {
  display: flex;
  flex: 1;
  align-items: center;
  gap: var(--_space-2);
  min-width: 0;
  min-height: 30px;
  cursor: pointer;
}

.tb-col-item label span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tb-col-item input {
  accent-color: var(--_accent);
}

.tb-col-actions {
  display: flex;
  gap: var(--_space-2);
  padding: var(--_space-2);
  border-top: 1px solid var(--_border);
}

.tb-help {
  min-width: min(380px, calc(100% - 16px));
  padding: var(--_space-2) var(--_space-3);
}

.tb-popover-close {
  float: right;
}

.tb-keys {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px var(--_space-3);
  margin: var(--_space-2) 0;
}

.tb-keys dt {
  white-space: nowrap;
}

.tb-keys dd {
  margin: 0;
}

.tb-keys kbd {
  padding: 1px 5px;
  border: 1px solid var(--_border-strong);
  border-bottom-width: 2px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.tb-hint {
  margin: var(--_space-2) 0 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Cards ---------- */

.tb-cards-wrap {
  padding: var(--_space-3);
}

.tb-card-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  margin-bottom: var(--_space-3);
}

.tb-card-tools .tb-filter {
  width: auto;
  min-width: 140px;
}

.tb-card-all {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  margin-inline-end: auto;
}

.tb-cards {
  display: grid;
  gap: var(--_space-2);
}

.tb-card {
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_surface);
}

.tb-card.selected {
  border-color: var(--_accent);
  background: color-mix(in srgb, var(--_accent-soft) 60%, var(--_surface));
}

.tb-card-top {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  margin-bottom: var(--_space-2);
}

.tb-card-title {
  min-width: 0;
  overflow-wrap: anywhere;
}

.tb-card-fields {
  font-size: var(--_font-size-small);
}

.tb-card-group {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  min-height: 36px;
  padding: 0 var(--_space-2);
  border: 0;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: inherit;
  cursor: pointer;
}

@media (pointer: coarse) {
  .tb-check {
    width: 20px;
    height: 20px;
  }

  .tb-resizer {
    width: 16px;
    inset-inline-end: -8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tb-sort-hint {
    transition: none;
  }
}

/* ---------- Sticky header: the table scrolls in a box, its header stays on top ---------- */

.vt[data-sticky] .tb-body:has(> .tb-grid) {
  max-height: var(--_max-height, min(78vh, 760px));
}

/* ---------- Chevrons turn instead of changing ---------- */

.tb-chevron .icon,
.tb-expand .icon,
.tb-card-group .icon {
  transition: transform var(--_duration) var(--_easing);
}

.tb-group[aria-expanded='true'] .tb-chevron .icon,
.tb-expand[aria-expanded='true'] .icon,
.tb-card-group[aria-expanded='true'] .icon {
  transform: rotate(90deg);
}

.tb-expand[aria-expanded='true'] {
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.tb-row:has(.tb-expand[aria-expanded='true']) > * {
  border-bottom-color: transparent;
}

/* ---------- Groups ---------- */

.tb-group-cell {
  border-top: 1px solid var(--_border);
  background: color-mix(in srgb, var(--_accent-soft) 35%, var(--_surface-sunken)) !important;
}

.tb-group-cell:hover {
  background: color-mix(in srgb, var(--_accent-soft) 70%, var(--_surface-sunken)) !important;
}

.tb-group-inner {
  flex-wrap: wrap;
  row-gap: 2px;
}

.tb-group-agg {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  margin-inline-start: var(--_space-3);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.tb-group-agg strong {
  color: var(--_fg);
  font-weight: 600;
}

/* ---------- Details ---------- */

.tb-detail > td {
  padding: 0 !important;
  border-bottom: 1px solid var(--_border) !important;
  background: color-mix(in srgb, var(--_accent-soft) 25%, var(--_surface)) !important;
}

.tb-detail-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
  gap: var(--_space-2);
  margin: var(--_space-2) var(--_space-3) var(--_space-3);
  padding: var(--_space-3);
  border-inline-start: 3px solid var(--_accent);
  border-radius: var(--_radius);
  background: var(--_surface);
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
  animation: tb-open var(--_duration) var(--_easing);
}

.tb-field {
  min-width: 0;
  padding: var(--_space-1) var(--_space-2);
  border-radius: var(--_radius-sm);
}

.tb-field:hover {
  background: var(--_surface-sunken);
}

.tb-field dt {
  margin-bottom: 2px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 500;
}

.tb-field dd {
  margin: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.tb-field.hidden-col dt::after {
  content: ' \xB7';
  color: var(--_border-strong);
}

@keyframes tb-open {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
}

/* ---------- Cell displays ---------- */

.vt {
  --_tone-gray: #6b7280;
  --_tone-red: #dc2626;
  --_tone-orange: #ea580c;
  --_tone-yellow: #ca8a04;
  --_tone-green: #16a34a;
  --_tone-teal: #0d9488;
  --_tone-blue: #2563eb;
  --_tone-purple: #9333ea;
  --_tone-pink: #db2777;
}

.tone-gray {
  --_tone: var(--_tone-gray);
}
.tone-red {
  --_tone: var(--_tone-red);
}
.tone-orange {
  --_tone: var(--_tone-orange);
}
.tone-yellow {
  --_tone: var(--_tone-yellow);
}
.tone-green {
  --_tone: var(--_tone-green);
}
.tone-teal {
  --_tone: var(--_tone-teal);
}
.tone-blue {
  --_tone: var(--_tone-blue);
}
.tone-purple {
  --_tone: var(--_tone-purple);
}
.tone-pink {
  --_tone: var(--_tone-pink);
}

.tb-badges {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 4px;
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
}

.vt[data-wrap] .tb-badges,
.tb-field .tb-badges,
.tb-card .tb-badges,
.tb-cell.open .tb-badges {
  flex-wrap: wrap;
}

.tb-badge {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 5px;
  max-width: 220px;
  padding: 0 8px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--_tone) 30%, transparent);
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone) 13%, var(--_surface));
  color: color-mix(in srgb, var(--_tone) 72%, var(--_fg));
  font-size: var(--_font-size-small);
  font-weight: 500;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tb-badge > span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
}

.tb-badge.status {
  border-color: transparent;
  background: transparent;
  padding-inline-start: 0;
  color: var(--_fg);
}

.tb-dot {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--_tone);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--_tone) 18%, transparent);
}

.tb-more {
  flex: none;
  margin-inline-start: 4px;
  padding: 0 6px;
  border: 0;
  border-radius: var(--_radius-sm);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font: inherit;
  font-size: var(--_font-size-small);
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  white-space: nowrap;
}

.tb-more:hover {
  background: color-mix(in srgb, var(--_accent) 22%, var(--_surface));
}

.tb-more-wrap {
  display: inline-flex;
  align-items: baseline;
  max-width: 100%;
  min-width: 0;
}

.tb-more-wrap > :first-child {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* An opened cell grows: the row takes the height of its text. */
.tb-grid td:has(.tb-more-wrap.open),
.tb-grid td:has(.tb-badges .tb-more[aria-expanded='true']) {
  height: auto;
  padding-block: 6px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.tb-more-wrap.open {
  display: inline;
}

.tb-more-wrap.open .tb-more {
  vertical-align: baseline;
}

.tb-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--_lines, 2);
  white-space: normal;
}

.tb-code {
  padding: 1px 5px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-family: var(--_font-mono);
  font-size: 0.92em;
}

.tb-json {
  color: var(--_fg-muted);
}

.tb-progress-wrap {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  vertical-align: middle;
}

.tb-progress {
  position: relative;
  flex: 1;
  min-width: 40px;
  height: 6px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone) 15%, var(--_surface-sunken));
}

.tb-progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
  background: var(--_tone);
}

.tb-progress-text {
  flex: none;
  min-width: 3.2em;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  text-align: end;
}

.tb-rating {
  letter-spacing: 1px;
  white-space: nowrap;
}

.tb-star {
  color: var(--_border-strong);
}

.tb-star.on {
  color: #f59e0b;
}

.tb-star.half {
  background: linear-gradient(90deg, #f59e0b 50%, var(--_border-strong) 50%);
  background-clip: text;
  color: transparent;
}

.tb-image {
  width: var(--_img, 28px);
  height: var(--_img, 28px);
  border-radius: var(--_radius-sm);
  object-fit: cover;
  vertical-align: middle;
}

.tb-person {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
}

.tb-avatar {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 26px;
  height: 26px;
  overflow: hidden;
  border-radius: 50%;
  background: color-mix(in srgb, var(--_tone) 22%, var(--_surface));
  color: color-mix(in srgb, var(--_tone) 80%, var(--_fg));
  font-size: 11px;
  font-weight: 700;
}

.vt[data-density='compact'] .tb-avatar {
  width: 22px;
  height: 22px;
  font-size: 10px;
}

.tb-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tb-person-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1.2;
}

.tb-person-text > * {
  overflow: hidden;
  text-overflow: ellipsis;
}

.tb-sub {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.tb-color {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.tb-swatch {
  width: 14px;
  height: 14px;
  border: 1px solid var(--_border-strong);
  border-radius: 4px;
}

.tb-blank {
  color: var(--_fg-muted);
}

/* ---------- Query bar ---------- */

.tb-query {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
  background: var(--_surface);
}

.tb-query-icon {
  display: inline-flex;
  padding-top: 6px;
  color: var(--_fg-muted);
}

.tb-query-field {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  min-width: 0;
  min-height: 30px;
  padding: 2px 4px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
}

.tb-query-field:focus-within {
  border-color: var(--_accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--_accent) 18%, transparent);
}

.tb-cond {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  border: 1px solid color-mix(in srgb, var(--_accent) 35%, transparent);
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-size: var(--_font-size-small);
  line-height: 22px;
}

.tb-cond.not {
  border-color: color-mix(in srgb, var(--_danger) 40%, transparent);
  background: color-mix(in srgb, var(--_danger) 10%, var(--_surface));
  color: var(--_danger);
}

.tb-cond.text {
  border-style: dashed;
}

.tb-cond-label {
  max-width: 280px;
  padding: 0 4px 0 9px;
  overflow: hidden;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.tb-join {
  padding: 0 6px;
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_fg-muted);
  font: inherit;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 20px;
  cursor: pointer;
}

.tb-join.or {
  color: var(--_warning);
}

.tb-join:hover {
  background: var(--_surface-sunken);
}

.tb-query-box {
  position: relative;
  flex: 1;
  min-width: 160px;
}

.tb-query-input {
  box-sizing: border-box;
  width: 100%;
  min-height: 24px;
  padding: 0 4px;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--_fg);
  font: inherit;
}

.tb-suggest {
  position: absolute;
  top: calc(100% + 6px);
  left: -4px;
  z-index: 30;
  min-width: min(320px, 90vw);
  max-height: 300px;
  margin: 0;
  padding: var(--_space-1);
  overflow: auto;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  box-shadow: 0 10px 30px rgb(0 0 0 / 18%);
  list-style: none;
}

.tb-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-3);
  min-height: 30px;
  padding: 0 var(--_space-2);
  border-radius: var(--_radius-sm);
  cursor: pointer;
}

.tb-option > span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tb-option.active,
.tb-option:hover {
  background: var(--_accent-soft);
}

.tb-option-hint {
  flex: none;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.tb-match {
  flex: none;
  min-height: 30px;
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  font-size: var(--_font-size-small);
  cursor: pointer;
}

/* ---------- Selection header ---------- */

.tb-ctl-select {
  white-space: nowrap;
}

.tb-select-more {
  display: inline-grid;
  place-items: center;
  width: 14px;
  height: 22px;
  margin-inline-start: 1px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_fg-muted);
  vertical-align: middle;
  cursor: pointer;
}

.tb-select-more:hover,
.tb-select-more[aria-expanded='true'] {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.tb-select-more .icon {
  width: 12px;
  height: 12px;
}

.tb-select-menu .tb-menu-item {
  justify-content: space-between;
}

.tb-row.selected > :first-child {
  box-shadow: inset 3px 0 0 var(--_accent);
}

:host([select-on-click]) .tb-row {
  cursor: pointer;
}

/* ---------- Pager ---------- */

.tb-pager {
  padding-block: 4px;
}

.tb-pager.top {
  border-top: 0;
  border-bottom: 1px solid var(--_border);
}

.tb-pager-end {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.tb-pages {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
}

.tb-page-btn {
  min-width: 28px;
  height: 28px;
  padding: 0 6px;
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_fg);
  font: inherit;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}

.tb-page-btn:hover {
  background: var(--_accent-soft);
}

.tb-page-btn.current {
  background: var(--_accent);
  color: var(--_on-accent);
  font-weight: 600;
}

.tb-gap {
  padding: 0 4px;
  color: var(--_fg-muted);
}

.tb-jump {
  box-sizing: border-box;
  width: 72px;
  min-height: 28px;
  margin-inline-start: var(--_space-2);
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
}

.tb-pager .text-btn {
  min-height: 28px;
  font-size: var(--_font-size-small);
}

/* ---------- Phones ---------- */

.tb-card dd {
  min-width: 0;
}

.tb-card .tb-more-wrap {
  display: inline;
}

.tb-card .tb-more-wrap > :first-child {
  white-space: pre-wrap;
}

@container (max-width: 520px) {
  .tb-query {
    padding-inline: var(--_space-2);
  }

  .tb-query-icon {
    display: none;
  }

  .tb-pager {
    justify-content: center;
    padding-inline: var(--_space-2);
  }

  .tb-pager-end {
    justify-content: center;
  }

  .tb-size-label > span,
  .tb-jump {
    display: none;
  }

  .tb-bulk {
    padding-inline: var(--_space-2);
  }

  .tb-bulk .text-btn > span:not(:only-child) {
    display: none;
  }
}

.tb {
  container-type: inline-size;
}

@media (prefers-reduced-motion: reduce) {
  .tb-detail-list {
    animation: none;
  }

  .tb-chevron .icon,
  .tb-expand .icon,
  .tb-card-group .icon {
    transition: none;
  }
}

/* Row states are layered on the surface: translucent accents must not show what scrolls under pinned columns. */
.tb-grid tbody .tb-row:hover > * {
  --_row-tint: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
  background: linear-gradient(var(--_row-tint), var(--_row-tint)), var(--_surface);
}

.tb-grid tbody .tb-row.selected > * {
  --_row-tint: var(--_accent-soft);
  background: linear-gradient(var(--_row-tint), var(--_row-tint)), var(--_surface);
}

.tb-grid tbody .tb-row.selected:hover > * {
  --_row-tint: color-mix(in srgb, var(--_accent) 20%, transparent);
}

.tb-grid .tb-group-cell {
  --_row-tint: color-mix(in srgb, var(--_accent-soft) 45%, transparent);
  background:
    linear-gradient(var(--_row-tint), var(--_row-tint)), var(--_surface-sunken) !important;
}

.tb-grid .tb-group-cell:hover {
  --_row-tint: var(--_accent-soft);
}

.tb-grid .tb-detail > td {
  --_row-tint: color-mix(in srgb, var(--_accent-soft) 40%, transparent);
  background: linear-gradient(var(--_row-tint), var(--_row-tint)), var(--_surface) !important;
}

.tb-detail-list {
  position: sticky;
  left: var(--_space-3);
  max-width: min(1100px, calc(100cqw - 2 * var(--_space-3)));
}

/* Small screens: keep the essential header buttons. */
@media (max-width: 560px) {
  .header [data-focus-key='help'],
  .header [data-focus-key='density'],
  .header [data-focus-key='expand-all'],
  .header [data-focus-key='collapse-all'],
  .header [data-focus-key='fullscreen'] {
    display: none;
  }
}
`;var Ot=["text","number","date","boolean","url"],I=["none","count","sum","avg","min","max"],gt=500,mt=2e5,yt=/^[-+]?(?:\d{1,3}(?:[ ,]\d{3})+|\d+)?(?:\.\d+)?(?:e[-+]?\d+)?%?$/i,Bt=/^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/,Gt=/^(?:true|false|yes|no)$/i,qt=/^https?:\/\/[^\s]+$/i;function vt(l,t="auto"){let e=l.trim();if(!e)return{columns:[],rows:[]};if(t==="json"||t==="auto"&&/^[[{]/.test(e)){let h;try{h=JSON.parse(e)}catch(u){return{columns:[],rows:[],error:u instanceof Error?u.message:String(u)}}return j(h)}let r=ht(l),[i=[],...a]=r.rows,n=wt(i.map((h,u)=>h.trim()||`column${u+1}`)),o=a.map(h=>Object.fromEntries(n.map((u,b)=>[u,h[b]??""]))),c=xt(n.map(h=>({key:h})),o);return r.error&&(c.error=`Unclosed quote from line ${r.error.line}.`),c}function j(l,t=null){let e=[],s=t;if(Array.isArray(l))e=l;else if(l&&typeof l=="object"){let i=l;Array.isArray(i.rows)?e=i.rows:Array.isArray(i.data)&&(e=i.data),!s&&Array.isArray(i.columns)&&(s=i.columns.map(a=>typeof a=="string"?{key:a}:a))}if(e.length&&Array.isArray(e[0])){let i=e.filter(Array.isArray),a=s?s.map(o=>o.key):wt(i[0].map((o,c)=>v(o)||`column${c+1}`));e=(s?i:i.slice(1)).map(o=>Object.fromEntries(a.map((c,h)=>[c,o[h]]))),s||(s=a.map(o=>({key:o})))}let r=e.filter(i=>i!==null&&typeof i=="object"&&!Array.isArray(i));return xt(s,r)}function xt(l,t){let e=t.length>mt,s=e?t.slice(0,mt):t,r=l?l.filter(a=>a&&typeof a.key=="string"&&a.key):[];if(!r.length){let a=new Set;for(let n=0;n<s.length&&n<1e3;n+=1)for(let o of Object.keys(s[n]))a.add(o);r=[...a].map(n=>({key:n}))}return{columns:r.slice(0,gt).map(a=>{let n=Ot.includes(a.type)?a.type:jt(s,a.key);return{...a,label:a.label??It(a.key),type:n,hidden:!!a.hidden,sortable:a.sortable!==!1,filterable:a.filterable!==!1,editable:!!a.editable,resizable:a.resizable!==!1,aggregate:I.includes(a.aggregate)?a.aggregate:"none"}}),rows:s,truncated:e||r.length>gt}}function wt(l){let t=new Map;return l.map(e=>{let s=t.get(e)??0;return t.set(e,s+1),s?`${e}_${s+1}`:e})}function It(l){let t=l.replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").trim().toLowerCase();return t?t[0].toUpperCase()+t.slice(1):l}function jt(l,t){let e=0,s={number:0,date:0,boolean:0,url:0};for(let r=0;r<l.length&&e<500;r+=1){let i=l[r][t];if(!(i==null||i==="")){if(e+=1,typeof i=="number")s.number+=1;else if(typeof i=="boolean")s.boolean+=1;else if(i instanceof Date)s.date+=1;else if(typeof i=="string"){let a=i.trim();yt.test(a)&&/\d/.test(a)?s.number+=1:Bt.test(a)?s.date+=1:Gt.test(a)?s.boolean+=1:qt.test(a)&&(s.url+=1)}}}if(!e)return"text";for(let r of["number","date","boolean","url"])if(s[r]===e)return r;return"text"}function D(l){return l==null||l===""||typeof l=="number"&&Number.isNaN(l)}function A(l){if(typeof l=="number")return l;if(typeof l=="boolean")return l?1:0;if(l instanceof Date)return l.getTime();if(typeof l!="string")return Number.NaN;let t=l.trim();return t?Number(t.replace(/[ ,%]/g,"")):Number.NaN}function R(l){return l instanceof Date?l.getTime():typeof l=="number"?l:typeof l=="string"&&l.trim()?Date.parse(l.trim()):Number.NaN}function K(l){if(typeof l=="boolean")return l;if(typeof l=="number")return l!==0;if(typeof l!="string")return null;let t=l.trim().toLowerCase();return t==="true"||t==="yes"||t==="1"?!0:t==="false"||t==="no"||t==="0"?!1:null}function v(l){if(l==null)return"";if(typeof l=="string")return l;if(l instanceof Date)return Number.isNaN(l.getTime())?"":l.toISOString();if(typeof l=="object")try{return JSON.stringify(l)}catch{return""}return String(l)}function kt(l,t){let{key:e,type:s}=t;return l.map(r=>{let i=r[e];if(D(i))return null;if(s==="number"){let a=A(i);return Number.isNaN(a)?null:a}if(s==="date"){let a=R(i);return Number.isNaN(a)?null:a}if(s==="boolean"){let a=K(i);return a===null?null:Number(a)}return v(i)})}function _t(l,t,e){return t.length?[...l].sort((s,r)=>{for(let{keys:i,direction:a}of t){let n=i[s],o=i[r];if(n===o)continue;if(n===null)return 1;if(o===null)return-1;let c=typeof n=="number"&&typeof o=="number"?n-o:e.compare(String(n),String(o));if(c)return a==="ascending"?c:-c}return s-r}):l}function Q(l,t){let e=l.trim();if(!e)return null;let s=e.toLowerCase();if(s==="empty")return i=>D(i);if(s==="!empty")return i=>!D(i);if(t==="boolean"){let i=K(e);if(i!==null)return a=>K(a)===i}if(t==="number"||t==="date"){let i=t==="number"?A:R,a=/^(.+?)\s*\.\.\s*(.+)$/.exec(e);if(a){let o=i(a[1]),c=i(a[2]);if(!Number.isNaN(o)&&!Number.isNaN(c))return h=>{let u=i(h);return u>=Math.min(o,c)&&u<=Math.max(o,c)}}let n=/^(>=|<=|!=|>|<|=)\s*(.+)$/.exec(e);if(n){let o=i(n[2]);if(!Number.isNaN(o)){let c={">":h=>h>o,">=":h=>h>=o,"<":h=>h<o,"<=":h=>h<=o,"=":h=>h===o,"!=":h=>h!==o}[n[1]];return h=>{let u=i(h);return!Number.isNaN(u)&&c(u)}}}}if(e.startsWith("=")){let i=s.slice(1);return a=>v(a).toLowerCase()===i}if(e.startsWith("!")&&e.length>1){let i=s.slice(1);return a=>!v(a).toLowerCase().includes(i)}let r=s.split(/\s+/);return i=>{let a=v(i).toLowerCase();return r.every(n=>a.includes(n))}}function Y(l,t,e,s){if(s==="none")return null;if(s==="count"){let c=0;for(let h of t)D(l[h][e.key])||(c+=1);return c}let r=e.type==="date"?R:A,i=0,a=0,n=1/0,o=-1/0;for(let c of t){let h=r(l[c][e.key]);Number.isNaN(h)||(i+=h,a+=1,h<n&&(n=h),h>o&&(o=h))}return a?s==="sum"?i:s==="avg"?i/a:s==="min"?n:o:null}function St(l,t,e){let s=new Map;for(let r of t){let i=v(l[r][e]),a=s.get(i);a?a.push(r):s.set(i,[r])}return[...s].map(([r,i])=>({value:r,indexes:i}))}function Ct(l,t,e){if(e==="json"){let r=l.map(i=>Object.fromEntries(t.map(a=>[a.key,i[a.key]??null])));return JSON.stringify(r,null,2)}let s=[t.map(r=>r.label),...l.map(r=>t.map(i=>v(r[i.key])))].map(r=>r.map(i=>/^[=+\-@\t\r]/.test(i)&&!yt.test(i)?`'${i}`:i));return e==="tsv"?s.map(r=>r.map(i=>i.replace(/[\t\r\n]+/g," ")).join("	")).join(`
`):pt(s,",")}function At(l,t,e){if(typeof e=="string"||e===void 0||e===null){if(t.type==="number"&&typeof e!="string"&&l.trim()!==""){let s=A(l);return Number.isNaN(s)?l:s}return l}if(typeof e=="number"){if(!l.trim())return null;let s=A(l);return Number.isNaN(s)?l:s}return typeof e=="boolean"?K(l)??l:l}var Ht=["text","number","badge","status","tags","progress","rating","link","email","image","avatar","code","date","relative","currency","percent","bytes","color","json","boolean"],X=["gray","red","orange","yellow","green","teal","blue","purple","pink"];function B(l){let t=l.display;return Ht.includes(t)?t:l.type==="url"?"link":l.type==="boolean"?"boolean":l.type==="number"?"number":l.type==="date"?"date":"text"}function st(l,t,e,s){if(D(t))return"";let r=B(l),i=o=>`${l.prefix??""}${o}${l.suffix??""}`,a=typeof l.decimals=="number"?Math.max(0,Math.min(10,l.decimals)):void 0,n=(o={})=>{let c=A(t);if(Number.isNaN(c))return v(t);try{return new Intl.NumberFormat(e,{minimumFractionDigits:a,maximumFractionDigits:a??2,...o}).format(c)}catch{return String(c)}};switch(r){case"number":return typeof t!="number"&&!l.decimals&&!l.prefix&&!l.suffix?v(t):i(l.grouping===!1?String(A(t)):n({useGrouping:l.grouping!==!1}));case"currency":return n({style:"currency",currency:/^[A-Z]{3}$/.test(l.currency??"")?l.currency:"EUR"});case"percent":{let o=A(t);return Number.isNaN(o)?v(t):i(new Intl.NumberFormat(e,{style:"percent",maximumFractionDigits:a??1}).format(l.ratio?o:o/100))}case"bytes":return Xt(A(t),e);case"date":{let o=R(t);return Number.isNaN(o)?v(t):typeof t=="string"&&!l.dateStyle?t:Nt(o,e,l.dateStyle)}case"relative":{let o=R(t);return Number.isNaN(o)?v(t):te(o,e)}case"boolean":{let o=K(t);return o===null?v(t):o?l.trueLabel??s("tableYes"):l.falseLabel??s("tableNo")}case"rating":{let o=A(t);return Number.isNaN(o)?v(t):`${o}/${l.max??5}`}case"progress":{let o=A(t);return Number.isNaN(o)?v(t):`${Math.round(o/(l.max||100)*100)}%`}case"tags":return tt(t).join(", ");case"json":return v(t);default:return i(v(t))}}function $t(l,t,e,s,r){if(D(t)&&B(l)!=="avatar")return d("span",{class:"tb-blank",text:l.emptyText??""});switch(B(l)){case"badge":case"status":return Mt(l,tt(t),r,B(l)==="status");case"tags":return Mt(l,tt(t),r,!1,l.maxItems??3);case"progress":return Vt(l,t,s);case"rating":return Ut(l,t,s);case"link":case"email":return Wt(l,t,e,s);case"image":return Jt(l,t,e,s);case"avatar":return Qt(l,t,e,s);case"code":return Z(l,s,r,"tb-code");case"json":return Z(l,s,r,"tb-code tb-json",80);case"color":return Yt(s);case"relative":return d("time",{class:"tb-text",text:s,attrs:{title:Zt(t,r.locale)}});case"boolean":{let i=K(t);return i===null?d("span",{class:"tb-text",text:s}):l.trueLabel||l.falseLabel?d("span",{class:`tb-badge tone-${i?"green":"gray"}`,text:s}):d("span",{class:`tb-bool ${i?"yes":"no"}`},S(i?"check":"close"),d("span",{class:"sr-only",text:s}))}default:return Z(l,s,r,"tb-text")}}function Z(l,t,e,s,r){let i=l.maxLength??r??0,a=l.lines??0,n=i>0&&t.length>i||a>0&&(t.split(`
`).length>a||t.length>a*70);if(e.expanded&&!e.onToggle)return d("span",{class:s,text:t});if(!n||!e.onToggle){let u=n&&i>0?`${t.slice(0,i).trimEnd()}\u2026`:t;return d("span",{class:s,text:u,attrs:{title:t.length>24?t.slice(0,500):null}})}let o=d("span",{class:`tb-more-wrap${e.expanded?" open":""}`}),c=e.expanded||i<=0?t:`${t.slice(0,i).trimEnd()}\u2026`,h=d("span",{class:`${s}${a&&!e.expanded?" tb-clamp":""}`,text:c});return a&&!e.expanded&&h.style.setProperty("--_lines",String(a)),o.append(h,Et(e)),o}function Et(l,t){return d("button",{class:"tb-more",text:t??l.t(l.expanded?"tableShowLess":"tableSeeAll"),attrs:{type:"button",tabindex:"-1","aria-expanded":String(l.expanded)},on:{click:e=>{e.stopPropagation(),l.onToggle?.()}}})}function Mt(l,t,e,s,r=1/0){let i=d("span",{class:"tb-badges"}),a=e.expanded||!e.onToggle?1/0:r;return t.slice(0,a).forEach(n=>{let o=Dt(l,n);i.append(d("span",{class:`tb-badge tone-${o}${s?" status":""}`,attrs:{title:n}},s?d("span",{class:"tb-dot",attrs:{"aria-hidden":"true"}}):null,d("span",{text:l.labels?.[n]??n})))}),t.length>r&&e.onToggle&&i.append(Et(e,e.expanded?e.t("tableShowLess"):`+${t.length-r}`)),i}function Dt(l,t){let e=l.colors?.[t]??l.colors?.[t.toLowerCase()];if(e&&X.includes(e))return e;if(l.colors&&!l.autoColors)return"gray";let s=0;for(let r of t.toLowerCase())s=s*31+r.charCodeAt(0)|0;return X[1+Math.abs(s)%(X.length-1)]}function Vt(l,t,e){let s=A(t),r=l.max||100,i=Number.isNaN(s)?0:Math.max(0,Math.min(1,s/r)),a=l.thresholds??[.34,.67],n=l.colors?"teal":i<a[0]?"red":i<a[1]?"orange":"green",o=d("span",{class:`tb-progress tone-${l.tone??n}`,attrs:{role:"img","aria-label":e}}),c=d("span",{class:"tb-progress-fill"});return c.style.width=`${i*100}%`,o.append(c),d("span",{class:"tb-progress-wrap"},o,d("span",{class:"tb-progress-text",text:e,attrs:{"aria-hidden":"true"}}))}function Ut(l,t,e){let s=A(t),r=Math.max(1,Math.min(10,l.max??5)),i=d("span",{class:"tb-rating",attrs:{role:"img","aria-label":e,title:e}});for(let a=1;a<=r;a+=1){let n=d("span",{class:`tb-star${s>=a?" on":s>=a-.5?" half":""}`,text:"\u2605",attrs:{"aria-hidden":"true"}});i.append(n)}return i}function Wt(l,t,e,s){let r=l.href?F(l.href,e,!0):v(t),i=B(l)==="email"&&!l.href?et(`mailto:${r}`):et(r),a=l.linkText?F(l.linkText,e):s;if(!i)return d("span",{class:"tb-text",text:a});let n=/^https?:/i.test(i);return d("a",{class:"tb-link",text:a,attrs:{href:i,target:n?"_blank":null,rel:n?"noopener noreferrer nofollow":null,tabindex:"-1",title:a.length>24?a:null}})}function Jt(l,t,e,s){let r=zt(l.src?F(l.src,e,!0):v(t));if(!r)return d("span",{class:"tb-text",text:s});let i=d("img",{class:"tb-image",attrs:{src:r,alt:l.alt?F(l.alt,e):"",loading:"lazy",decoding:"async",referrerpolicy:"no-referrer"}});return l.size&&i.style.setProperty("--_img",`${Math.max(12,Math.min(200,l.size))}px`),i}function Qt(l,t,e,s){let r=l.src?zt(F(l.src,e,!0)):null,i=s.split(/[\s._-]+/).filter(Boolean).slice(0,2).map(o=>o[0]?.toUpperCase()??"").join(""),a=d("span",{class:`tb-avatar tone-${Dt({...l,colors:void 0},s||"?")}`,attrs:{"aria-hidden":"true"}});if(r){let o=d("img",{attrs:{src:r,alt:"",loading:"lazy",decoding:"async",referrerpolicy:"no-referrer"}});o.addEventListener("error",()=>o.replaceWith(document.createTextNode(i))),a.append(o)}else a.textContent=i||"?";let n=l.subtitle?F(l.subtitle,e):"";return d("span",{class:"tb-person"},a,d("span",{class:"tb-person-text"},d("span",{class:"tb-text",text:s}),n?d("span",{class:"tb-sub",text:n}):null))}function Yt(l){let t=l.trim(),e=/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t)||/^(?:rgb|hsl|oklch)a?\([\d\s.,%/+-]+\)$/i.test(t),s=d("span",{class:"tb-swatch",attrs:{"aria-hidden":"true"}});return e&&(s.style.background=t),d("span",{class:"tb-color"},s,d("span",{class:"tb-code",text:t}))}function tt(l){return Array.isArray(l)?l.filter(t=>!D(t)).map(v):D(l)?[]:v(l).split(/\s*[,;|]\s*/).filter(Boolean)}function F(l,t,e=!1){return l.replace(/\{([\w.-]+)\}/g,(s,r)=>{let i=Object.hasOwn(t,r)?v(t[r]):"";return e?encodeURIComponent(i):i})}function et(l){let t=l.trim();if(!t||/[\u0000-\u001f]/.test(t))return null;if(/^(?:\/(?!\/)|\.{1,2}\/|#|\?)/.test(t)||!/^[a-z][a-z\d+.-]*:/i.test(t))return/^\/\//.test(t)?null:t;try{let e=new URL(t);return["http:","https:","mailto:","tel:"].includes(e.protocol)?e.href:null}catch{return null}}function zt(l){let t=et(l);return t&&!/^(?:mailto|tel):/i.test(t)?t:null}function Xt(l,t){if(Number.isNaN(l))return"";let e=["B","KB","MB","GB","TB","PB"],s=0,r=Math.abs(l);for(;r>=1024&&s<e.length-1;)r/=1024,s+=1;let i=new Intl.NumberFormat(t,{maximumFractionDigits:r<10&&s?1:0}).format(r);return`${l<0?"-":""}${i} ${e[s]}`}function Nt(l,t,e){let s=new Date(l);try{return e==="datetime"?s.toLocaleString(t,{dateStyle:"medium",timeStyle:"short"}):e==="time"?s.toLocaleTimeString(t,{timeStyle:"short"}):s.toLocaleDateString(t,{dateStyle:e||"medium"})}catch{return s.toISOString()}}function Zt(l,t){let e=R(l);return Number.isNaN(e)?null:Nt(e,t,"datetime")}function te(l,t,e=Date.now()){let s=(l-e)/1e3,r=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60],["second",1]],i=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(let[a,n]of r)if(Math.abs(s)>=n||a==="second")return i.format(Math.round(s/n),a);return""}lt({en:ut,fr:bt});var G=["compact","normal","comfortable"],it={compact:30,normal:37,comfortable:46},ee=["auto","table","cards"],se=["none","single","multiple"],ie=["auto","json","csv"],Tt=[10,25,50,100,250,500,0],re=["pages","simple","more","none"],Lt=8,ae=56,ne=1200,oe=200,Kt=class extends dt{static type="table";static allowEmpty=!0;static upgradeProperties=["content","data","columns","bulkActions","state"];static componentAttributes=Object.freeze(["format","sortable","filters","selectable","column-menu","resizable","reorderable","group-by","expandable","editable","footer","density","layout","card-breakpoint","page-size","pinned","row-numbers","wrap","row-key","persist","columns","pagination","pager-position","page-sizes","select-all","select-menu","select-on-click","bulk-bar","query-bar","sticky-header"]);static presets={simple:{sortable:!0,resizable:!0,"bulk-bar":!0,"select-menu":!0,"sticky-header":!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,sortable:!0,filters:!0,"column-menu":!0,resizable:!0,reorderable:!0,expandable:!0,"row-numbers":!0,"bulk-bar":!0,"select-menu":!0,"query-bar":!0,"sticky-header":!0}};static styles=[ft];constructor(){super(),this._data=null,this._columnDefs=null,this._bulkActions=[],this.cache=null,this.cacheText=null,this.keyCache=new Map,this.textCache=new Map,this.viewCache=null,this.order=null,this.hiddenKeys=new Set,this.shown=new Set,this.widths=new Map,this.aggregates=new Map,this.sortState=null,this.filterValues=new Map,this.filtersOpen=null,this.groupState=void 0,this.collapsed=new Set,this.expanded=new Set,this.openCells=new Set,this.selected=new Set,this.anchor=null,this.densityState=null,this.pageSizeState=null,this.pinnedState=null,this.page=0,this.query="",this.conditions=[],this.matchAll=!0,this.valueCache=new Map,this.focusQuery=!1,this.focusPos={r:-1,c:0},this.editingCell=null,this.panel=null,this.detailHeights=new Map,this.host=null,this.scroller=null,this.table=null,this.tbody=null,this.resizeObserver=null,this.narrow=!1,this.restored=!1,this.scrollFrame=0,this.dragKey=null,this.filterTimer=void 0,this.tableId=ot("table"),this.pinOffsets={},this.windowRange=null,this.resizing=!1,this.onOutside=t=>{!this.panel||t.composedPath().some(s=>s instanceof Element&&s.matches?.(".tb-popover, [data-popover-anchor]"))||this.closePanel(!1)}}connectedCallback(){super.connectedCallback(),this.restoreState(),this.root.addEventListener("pointerdown",this.onOutside),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(([t])=>{let e=t.contentRect.width>0&&t.contentRect.width<this.cardBreakpoint;e!==this.narrow&&(this.narrow=e,this.layoutAttr==="auto"&&this.requestRender())}),this.resizeObserver.observe(this))}disconnectedCallback(){this.root.removeEventListener("pointerdown",this.onOutside),this.resizeObserver?.disconnect(),this.resizeObserver=null,cancelAnimationFrame(this.scrollFrame),clearTimeout(this.filterTimer),super.disconnectedCallback()}attributeChangedCallback(t,e,s){t==="group-by"&&(this.groupState=void 0),t==="density"&&(this.densityState=null),t==="page-size"&&(this.pageSizeState=null),t==="pinned"&&(this.pinnedState=null),t==="format"||t==="row-key"||t==="columns"?this.invalidateData():this.invalidateView(),super.attributeChangedCallback(t,e,s)}contentChanged(){this._data||this.invalidateData()}get data(){return this.getDataset().rows}set data(t){this._data=Array.isArray(t)?t:null,this.invalidateData(),this.requestRender()}get columns(){return this.allColumns().map(({format:t,render:e,...s})=>({...s,format:t,render:e}))}set columns(t){this._columnDefs=Array.isArray(t)?t:null,this.order=null,this.invalidateData(),this.requestRender()}get bulkActions(){return this._bulkActions}set bulkActions(t){this._bulkActions=Array.isArray(t)?t.filter(e=>e&&typeof e.id=="string"&&typeof e.label=="string"):[],this.requestRender()}get selection(){let t=this.getDataset().rows,e=[];return t.forEach((s,r)=>{this.selected.has(this.rowKey(r))&&e.push(s)}),e}get selectedKeys(){return[...this.selected]}select(t,e={}){e.add||this.selected.clear();for(let s of t)this.selected.add(String(s));this.selectionChanged()}clearSelection(){this.selected.size&&(this.selected.clear(),this.selectionChanged())}selectAll(){if(this.selectionMode==="multiple"){for(let t of this.view().order)this.selected.add(this.rowKey(t));this.selectionChanged()}}getRows(t={}){let e=this.getDataset().rows;return(t.filtered===!1?e.map((r,i)=>i):this.view().order).filter(r=>!t.selected||this.selected.has(this.rowKey(r))).map(r=>e[r])}exportData(t="csv",e={}){return Ct(this.getRows(e),this.visibleColumns(),t)}updateRow(t,e){let s=this.indexOfKey(String(t));return s<0?!1:(Object.assign(this.getDataset().rows[s],e),this.invalidateValues(),this.renderGrid(),!0)}addRows(t){this.getDataset().rows.push(...t.filter(s=>s&&typeof s=="object")),this.invalidateValues(),this.renderGrid()}removeRows(t){let e=new Set([...t].map(String)),s=this.getDataset(),r=s.rows.filter((a,n)=>!e.has(this.rowKey(n))),i=s.rows.map((a,n)=>this.rowKey(n)).filter(a=>!e.has(a));if(s.rows.splice(0,s.rows.length,...r),this.hasAttribute("row-key"))for(let a of e)this.selected.delete(a);else{let a=new Set;i.forEach((n,o)=>this.selected.has(n)&&a.add(this.rowKey(o))),this.selected=a}this.expanded.clear(),this.invalidateValues(),this.renderGrid(),this.selectionChanged()}expandAll(){if(this.groupKey)this.collapsed.clear();else if(this.feature("expandable"))for(let t of this.view().order.slice(0,1e3))this.expanded.add(t);this.invalidateView(),this.renderGrid()}collapseAll(){if(this.groupKey)for(let t of this.view().items)t.kind==="group"&&this.collapsed.add(t.value);else this.expanded.clear();this.invalidateView(),this.renderGrid()}resetLayout(){this.order=null,this.hiddenKeys.clear(),this.shown.clear(),this.widths.clear(),this.aggregates.clear(),this.pinnedState=null,this.columnsChanged()}get state(){return{columns:this.allColumns().map(t=>({key:t.key,hidden:this.isHidden(t),width:this.widths.get(t.key),aggregate:this.aggregates.get(t.key)})),sort:this.sortSpecs.map(t=>({...t})),filters:Object.fromEntries([...this.filterValues].filter(([,t])=>t.trim())),conditions:this.conditions.map(t=>({...t})),match:this.matchAll?"all":"any",groupBy:this.groupKey,density:this.density,pageSize:this.pageSize,pinned:this.pinned}}set state(t){!t||typeof t!="object"||(this.applyState(t),this.invalidateView(),this.requestRender())}get selectionMode(){let t=this.getAttribute("selectable");if(t===null)return this.variant==="full"?"multiple":"none";let e=t.trim().toLowerCase();return e===""||e==="true"?"multiple":e==="false"?"none":P(e,se,"none")}get density(){return this.densityState??P(this.getAttribute("density"),G,"normal")}get pageSize(){if(this.pageSizeState!==null)return this.pageSizeState;let t=this.getAttribute("page-size");return t!==null&&t.trim()==="0"?0:q(t,{min:5,max:1e3,fallback:50})}get pinned(){return this.pinnedState??q(this.getAttribute("pinned"),{min:0,max:20,fallback:0})}get layoutAttr(){return P(this.getAttribute("layout"),ee,"auto")}get cardBreakpoint(){return q(this.getAttribute("card-breakpoint"),{min:0,max:4e3,fallback:560})}get cards(){return this.layoutAttr==="cards"||this.layoutAttr==="auto"&&this.narrow}get groupKey(){let t=this.groupState===void 0?this.getAttribute("group-by"):this.groupState;return t&&this.allColumns().some(e=>e.key===t)?t:null}get sortSpecs(){return(this.sortState??[]).filter(t=>this.allColumns().some(e=>e.key===t.key))}get showFilters(){return this.filtersOpen??this.feature("filters")}get virtual(){return(this.pageSize===0||this.paginationAttr==="none")&&!this.cards&&!this.feature("wrap")}get paginationAttr(){return P(this.getAttribute("pagination"),re,"pages")}get paginationMode(){let t=this.paginationAttr;return(t==="none"||this.pageSize===0)&&!this.virtual?"more":this.pageSize===0?"none":t}get effectivePageSize(){return this.virtual?1/0:this.pageSize||oe}pageWindow(t){let{items:e,base:s}=this.view(),r=this.effectivePageSize,i=(b,p)=>{let f=0;for(let g=b;g<p;g+=1)e[g].kind==="row"&&(f+=1);return f};if(!Number.isFinite(r))return{from:0,to:e.length,pages:1,size:r,rowFrom:0,rowTo:i(0,e.length)};let a=Math.max(1,Math.ceil(s.length/r));this.page=Math.max(0,Math.min(this.page,a-1));let n=this.paginationMode==="more"?0:this.page*r,o=Math.min(s.length,(this.page+1)*r),c=s[n]??e.length,h=o<s.length?s[o]:e.length,u=i(0,c);return{from:c,to:h,pages:a,size:r,rowFrom:u,rowTo:u+i(c,h)}}get columnDefs(){if(this._columnDefs)return this._columnDefs;let t=this.getAttribute("columns");if(!t)return null;try{let e=JSON.parse(t);if(Array.isArray(e))return e.map(s=>typeof s=="string"?{key:s}:s)}catch{return t.split(",").map(e=>({key:e.trim()})).filter(e=>e.key)}return null}getDataset(){if(this._data)return(!this.cache||this.cacheText!==null)&&(this.cache=j(this._data,this.columnDefs),this.cache.rows=this._data,this.cacheText=null),this.cache;let t=this.text??"";if(!this.cache||this.cacheText!==t){let e=P(this.getAttribute("format"),ie,"auto"),s=vt(t,e);this.cache=this.columnDefs?{...j(s.rows,this.columnDefs),error:s.error}:s,this.cacheText=t}return this.cache}invalidateData(){this.cache=null,this.cacheText=null,this.selected.clear(),this.expanded.clear(),this.collapsed.clear(),this.detailHeights.clear(),this.page=0,this.invalidateValues()}invalidateValues(){this.keyCache.clear(),this.textCache.clear(),this.valueCache.clear(),this.invalidateView()}invalidateView(){this.viewCache=null}allColumns(){let{columns:t}=this.getDataset(),e=new Map(t.map(r=>[r.key,r])),s=(this.order??[]).filter(r=>e.has(r));for(let r of t)s.includes(r.key)||s.push(r.key);return s.map(r=>{let i=e.get(r),a=this.widths.get(r),n=this.aggregates.get(r);return{...i,width:a??i.width,aggregate:n??i.aggregate}})}isHidden(t){return this.hiddenKeys.has(t.key)?!0:this.shown.has(t.key)?!1:t.hidden}visibleColumns(){return this.allColumns().filter(t=>!this.isHidden(t))}rowKey(t){let e=this.getAttribute("row-key"),s=this.getDataset().rows[t];return e&&s&&!D(s[e])?v(s[e]):String(t)}indexOfKey(t){let e=this.getDataset().rows;for(let s=0;s<e.length;s+=1)if(this.rowKey(s)===t)return s;return-1}keysOf(t){let e=this.keyCache.get(t.key);return e||(e=kt(this.getDataset().rows,t),this.keyCache.set(t.key,e)),e}textOf(t){let e=this.textCache.get(t.key);return e||(e=this.getDataset().rows.map(r=>this.displayText(t,r).toLowerCase()),this.textCache.set(t.key,e)),e}get collator(){return new Intl.Collator(this.locale,{numeric:!0,sensitivity:"base"})}view(){let t=this.allColumns(),e=JSON.stringify([this.sortSpecs,[...this.filterValues],this.query,this.conditions,this.matchAll,this.groupKey,[...this.collapsed],[...this.expanded],t.map(p=>[p.key,p.type,this.isHidden(p)])]);if(this.viewCache?.key===e)return this.viewCache;let{rows:s}=this.getDataset(),r=s.map((p,f)=>f);for(let p of t){let f=this.filterValues.get(p.key)??"",g=Q(f,p.type);g&&(r=r.filter(m=>g(s[m][p.key])))}let i=this.conditions.map(p=>this.compileCondition(p,t)).filter(p=>p!==null);if(i.length){let p=this.matchAll;r=r.filter(f=>p?i.every(g=>g(f)):i.some(g=>g(f)))}let a=this.query.trim().toLowerCase();if(a){let p=t.filter(f=>!this.isHidden(f)).map(f=>this.textOf(f));r=r.filter(f=>p.some(g=>g[f].includes(a)))}let n=this.sortSpecs.map(p=>{let f=t.find(g=>g.key===p.key);return f?{keys:this.keysOf(f),direction:p.direction}:null}).filter(p=>p!==null);r=_t(r,n,this.collator);let o=[],c=this.feature("expandable"),h=p=>{o.push({kind:"row",index:p}),c&&this.expanded.has(p)&&o.push({kind:"detail",index:p})},u=this.groupKey;if(u)for(let p of St(s,r,u))o.push({kind:"group",value:p.value,indexes:p.indexes}),this.collapsed.has(p.value)||p.indexes.forEach(h);else r.forEach(h);let b=[];return o.forEach((p,f)=>p.kind!=="detail"&&b.push(f)),this.viewCache={items:o,order:r,base:b,key:e},this.viewCache}displayText(t,e){let s=e[t.key];if(t.format)try{return String(t.format(s,e)??"")}catch{return v(s)}return Pt(t.key)&&t.grouping===void 0&&!t.display?v(s):s instanceof Date&&!Number.isNaN(s.getTime())&&!t.display?s.toLocaleString(this.locale):st(t,s,this.locale,this.t)}applyState(t){Array.isArray(t.columns)&&(this.order=t.columns.map(e=>e.key),this.hiddenKeys=new Set(t.columns.filter(e=>e.hidden).map(e=>e.key)),this.shown=new Set(t.columns.filter(e=>!e.hidden).map(e=>e.key)),this.widths=new Map(t.columns.filter(e=>typeof e.width=="number"&&e.width>0).map(e=>[e.key,rt(e.width)])),this.aggregates=new Map(t.columns.filter(e=>e.aggregate&&I.includes(e.aggregate)).map(e=>[e.key,e.aggregate]))),Array.isArray(t.sort)&&(this.sortState=t.sort.filter(e=>e&&typeof e.key=="string").map(e=>({key:e.key,direction:e.direction==="descending"?"descending":"ascending"}))),t.filters&&typeof t.filters=="object"&&(this.filterValues=new Map(Object.entries(t.filters).map(([e,s])=>[e,String(s)]))),Array.isArray(t.conditions)&&(this.conditions=t.conditions.filter(e=>e&&typeof e.value=="string").map(e=>({key:typeof e.key=="string"?e.key:null,value:e.value,not:!!e.not}))),t.match&&(this.matchAll=t.match!=="any"),t.groupBy!==void 0&&(this.groupState=t.groupBy||null),t.density&&G.includes(t.density)&&(this.densityState=t.density),typeof t.pageSize=="number"&&(this.pageSizeState=Tt.includes(t.pageSize)?t.pageSize:null),typeof t.pinned=="number"&&(this.pinnedState=Math.max(0,Math.min(20,t.pinned)))}restoreState(){let t=this.storageKey;if(!(!t||this.restored)){this.restored=!0;try{let e=localStorage.getItem(t);e&&this.applyState(JSON.parse(e))}catch{}}}saveState(){let t=this.storageKey;if(!t)return;let{filters:e,...s}=this.state;try{localStorage.setItem(t,JSON.stringify(s))}catch{}}get storageKey(){let t=this.getAttribute("persist")?.trim();return t?`vitrine-table:${t.slice(0,100)}`:null}columnsChanged(){this.invalidateView(),this.saveState(),this.render(),E(this,$.COLUMN_CHANGE,{columns:this.state.columns})}selectionChanged(){let t=[...this.selected];this.renderGrid(),this.announce(this.t("tableSelected",{count:C(t.length,this.locale)})),E(this,$.SELECT,{keys:t,rows:this.selection,count:t.length})}renderContent(t){let e=this.t,s=this.getDataset();this.frame.dataset.density=this.density,this.frame.toggleAttribute("data-sticky",this.feature("sticky-header")),this.frame.toggleAttribute("data-wrap",this.feature("wrap"));let r=this.feature("expandable")||!!this.groupKey,i=[this.searchButton({run:n=>this.search(n),go:n=>this.goToResult(n),clear:()=>this.search("")}),this.feature("column-menu")||this.feature("filters")?M({icon:"filter",label:e(this.showFilters?"tableHideFilters":"tableShowFilters"),key:"filters",pressed:this.showFilters,onClick:()=>{this.filtersOpen=!this.showFilters,this.render()}}):null,this.feature("column-menu")?M({icon:"columns",label:e("tableColumns"),key:"columns",pressed:this.panel==="columns",onClick:()=>this.togglePanel("columns")}):null,M({icon:"rows",label:e("tableDensity",{density:e(`tableDensity_${this.density}`)}),key:"density",onClick:()=>this.cycleDensity()}),r?M({icon:"expand-all",label:e("expandAll"),key:"expand-all",onClick:()=>this.expandAll()}):null,r?M({icon:"collapse-all",label:e("collapseAll"),key:"collapse-all",onClick:()=>this.collapseAll()}):null,M({icon:"keyboard",label:e("tableShortcuts"),key:"help",pressed:this.panel==="help",onClick:()=>this.togglePanel("help")}),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.exportData("csv"),this.downloadName("table.csv"),"text/csv"):null,this.feature("copy")?this.copyButton(()=>this.exportData("tsv"),e("tableCopyRows")):null];for(let n of i)n?.setAttribute("data-popover-anchor","");let a=[];s.error&&a.push(J(e("tableInvalid",{message:s.error}))),s.truncated&&a.push(J(e("tableTruncated"))),this.host=d("div",{class:"tb",part:"table-host"}),t.append(...this.chrome({badge:this.cards?"":e("table"),actions:i}),...a,this.host),this.scroller=null,this.renderGrid()}renderGrid(){if(!this.host)return;let t=this.scroller?.scrollTop??0,e=this.scroller?.scrollLeft??0,s=this.activeFocusKey(),r=this.root.activeElement?.closest?.(".tb-grid, .tb-cards")!==null&&this.root.activeElement!==null,{order:i,items:a}=this.view(),n=this.pageWindow(a.length),o=d("div",{class:`body tb-body${this.virtual?" virtual":""}`,part:"body",attrs:{tabindex:this.cards?"0":null,role:this.cards?"region":null,"aria-label":this.heading||this.t("table")}});this.scroller=o,this.virtual&&o.addEventListener("scroll",()=>this.onScroll(),{passive:!0}),this.cards?o.append(this.renderCards(a)):o.append(this.renderTable());let c=this.getAttribute("pager-position");this.host.replaceChildren(...[this.queryBar(),this.bulkBar(i),this.stateBar(),c==="top"||c==="both"?this.pager(a.length,i.length,n,"top"):null,o,c==="top"?null:this.pager(a.length,i.length,n,"bottom"),this.renderPanel()].filter(h=>h!==null)),o.scrollTop=t,o.scrollLeft=e,this.virtual&&this.renderBody(),s?this.restoreFocus(s):r&&this.focusCell(this.focusPos.r,this.focusPos.c,!1)}renderTable(){let t=this.t,e=this.visibleColumns(),s=this.controlColumns(),r=e.map(c=>this.widthOf(c)),i=s.reduce((c,h)=>c+h.width,0)+r.reduce((c,h)=>c+h,0),a=d("table",{class:"tb-grid",part:"table",attrs:{id:this.tableId,role:"grid","aria-label":this.heading||t("table"),"aria-rowcount":this.view().order.length+1,"aria-colcount":e.length,"aria-multiselectable":this.selectionMode==="multiple"?"true":null},on:{keydown:c=>this.onGridKey(c),click:c=>this.onGridClick(c),dblclick:c=>this.onGridDoubleClick(c),focusin:c=>this.onGridFocus(c)}});a.style.width=`max(100%, ${i}px)`;let n=d("colgroup");for(let c of s)n.append(H(d("col",{class:`tb-col-${c.id}`}),"width",c.width));e.forEach((c,h)=>n.append(H(d("col",{attrs:{"data-key":c.key}}),"width",r[h]))),this.table=a,this.tbody=d("tbody"),a.append(n,this.renderHead(e,s),this.tbody);let o=this.renderFoot(e,s);return o&&a.append(o),this.applyPinning(a,e,s,r),this.virtual||this.renderBody(),a}controlColumns(){let t=[];if(this.selectionMode!=="none"&&t.push({id:"select",width:40}),this.feature("expandable")&&t.push({id:"expand",width:34}),this.feature("row-numbers")){let e=String(this.getDataset().rows.length).length;t.push({id:"number",width:Math.max(44,e*8+24)})}return t}widthOf(t){if(t.width)return rt(t.width);let e=this.getDataset().rows,s=t.label.length+7,r=Math.max(1,Math.floor(e.length/200));for(let a=0;a<e.length;a+=r){let n=this.displayText(t,e[a]).length;n>s&&(s=n)}let i=Math.round(s*7.6+34);return Math.max(t.type==="boolean"?72:90,Math.min(t.type==="text"?340:220,i))}applyPinning(t,e,s,r){let i=0,a={};for(let o of s)a[`ctl-${o.id}`]=i,i+=o.width;let n=Math.min(this.pinned,e.length);for(let o=0;o<n;o+=1)a[`col-${o}`]=i,i+=r[o];t.style.setProperty("--_pin-edge",`${i}px`),this.pinOffsets=a}pin(t,e){let s=this.pinOffsets?.[e];if(s===void 0)return;t.classList.add("pinned"),t.style.left=`${s}px`;let r=this.visibleColumns(),i=this.pinned>0?`col-${Math.min(this.pinned,r.length)-1}`:null;e===i&&t.classList.add("pin-edge")}renderHead(t,e){let s=this.t,r=d("tr",{attrs:{role:"row","aria-rowindex":1}}),{order:i}=this.view();for(let c of e){let h=d("th",{class:`tb-ctl tb-ctl-${c.id}`,attrs:{role:"columnheader",scope:"col"}});c.id==="select"?this.selectionMode==="multiple"?(h.append(this.headerCheckbox(i)),this.feature("select-menu")&&h.append(d("button",{class:"tb-select-more",attrs:{type:"button",tabindex:"-1","aria-haspopup":"menu","aria-expanded":String(this.panel==="select"),"aria-label":s("tableSelectMenu"),"data-popover-anchor":"","data-focus-key":"select-menu"},on:{click:u=>(u.stopPropagation(),this.togglePanel("select"))}},S("chevron-down")))):h.append(d("span",{class:"sr-only",text:s("tableSelect")})):c.id==="expand"?h.append(d("span",{class:"sr-only",text:s("tableDetails")})):h.append(d("span",{class:"sr-only",text:s("rowNumber")})),this.pin(h,`ctl-${c.id}`),r.append(h)}let a=this.feature("sortable"),n=this.sortSpecs;t.forEach((c,h)=>{let u=n.findIndex(g=>g.key===c.key),b=u>=0?n[u].direction:null,p=d("th",{class:`tb-head type-${c.type}${c.align?` align-${c.align}`:""}`,part:"header-cell",attrs:{role:"columnheader",scope:"col","aria-colindex":h+1,"aria-sort":a&&c.sortable?b??"none":null,"data-r":-1,"data-c":h,"data-key":c.key,tabindex:"-1",draggable:this.feature("reorderable")?"true":null,title:c.label}}),f=d("div",{class:"tb-head-inner"});f.append(d("span",{class:"tb-label",text:c.label})),b?(f.append(S(b==="ascending"?"sort-up":"sort-down")),n.length>1&&f.append(d("span",{class:"tb-sort-rank",text:String(u+1),attrs:{"aria-hidden":"true"}}))):a&&c.sortable&&f.append(d("span",{class:"tb-sort-hint"},S("sort"))),this.feature("column-menu")&&f.append(d("button",{class:"tb-menu-btn",attrs:{type:"button",tabindex:"-1","aria-haspopup":"menu","aria-label":s("tableColumnMenu",{name:c.label}),"data-popover-anchor":"","data-focus-key":`menu-${c.key}`},on:{click:g=>{g.stopPropagation(),this.togglePanel({column:c.key})}}},S("chevron-down"))),p.append(f),this.feature("resizable")&&c.resizable&&p.append(this.resizer(c)),this.feature("reorderable")&&this.makeDraggable(p,c.key),this.pin(p,`col-${h}`),r.append(p)});let o=d("thead",{},r);return this.showFilters&&o.append(this.filterRow(t,e)),o}headerCheckbox(t){let e=this.t,s=this.getAttribute("select-all")==="all",r=s?t.map(o=>this.rowKey(o)):this.pageKeys(),i=r.filter(o=>this.selected.has(o)).length,a=e(s?"tableSelectAll":"tableSelectPage"),n=d("input",{class:"tb-check",attrs:{type:"checkbox","aria-label":a,title:a,"data-focus-key":"select-all",tabindex:"-1"},on:{change:()=>{if(i===r.length&&i){for(let o of r)this.selected.delete(o);this.selectionChanged()}else this.select(r,{add:!0})}}});return n.checked=i>0&&i===r.length,n.indeterminate=i>0&&i<r.length,n}filterRow(t,e){let s=this.t,r=d("tr",{class:"tb-filters"});for(let i of e){let a=d("th",{class:`tb-ctl tb-ctl-${i.id}`});this.pin(a,`ctl-${i.id}`),r.append(a)}return t.forEach((i,a)=>{let n=d("th");if(this.pin(n,`col-${a}`),!i.filterable){r.append(n);return}let o=this.filterValues.get(i.key)??"",c=s("tableFilterBy",{name:i.label}),h;i.type==="boolean"?(h=d("select",{class:"tb-filter",part:"filter",attrs:{"aria-label":c,"data-focus-key":`filter-${i.key}`}},d("option",{attrs:{value:""},text:s("tableAll")}),d("option",{attrs:{value:"true"},text:s("tableYes")}),d("option",{attrs:{value:"false"},text:s("tableNo")}),d("option",{attrs:{value:"empty"},text:s("tableEmpty")})),h.value=o,h.addEventListener("change",()=>this.setFilter(i.key,h.value,!0))):(h=d("input",{class:"tb-filter",part:"filter",attrs:{type:"search","aria-label":c,placeholder:s(i.type==="number"||i.type==="date"?"tableFilterRange":"tableFilterText"),autocomplete:"off",spellcheck:"false",maxlength:200,"data-focus-key":`filter-${i.key}`}}),h.value=o,h.addEventListener("input",()=>this.setFilter(i.key,h.value,!1)),h.addEventListener("keydown",u=>{u.key==="Escape"&&h.value?(u.stopPropagation(),h.value="",this.setFilter(i.key,"",!0)):u.key==="ArrowDown"&&(u.preventDefault(),this.focusCell(this.firstRowItem(),a))})),n.append(h),r.append(n)}),r}renderFoot(t,e){let s=this.feature("footer"),r=t.map(o=>o.aggregate!=="none"?o.aggregate:s&&o.type==="number"&&!Pt(o.key)&&!["rating","progress","percent"].includes(o.display??"")?"sum":"none");if(!s&&r.every(o=>o==="none"))return null;let{rows:i}=this.getDataset(),{order:a}=this.view(),n=d("tr",{class:"tb-foot"});return e.forEach((o,c)=>{let h=d("td",{class:`tb-ctl tb-ctl-${o.id}`,text:c===0?C(a.length,this.locale):"",attrs:{title:c===0?this.t("tableRowCount",{count:a.length}):null}});this.pin(h,`ctl-${o.id}`),n.append(h)}),t.forEach((o,c)=>{let h=r[c],u=Y(i,a,o,h),b=d("td",{class:`type-${o.type}${o.align?` align-${o.align}`:""}`});if(u!==null){let p=o.type==="date"&&h!=="count"?new Date(u).toLocaleDateString(this.locale):C(Math.round(u*100)/100,this.locale);b.append(d("span",{class:"tb-agg",text:this.t(`tableAgg_${h}`)})," ",d("strong",{text:p}))}else c===0&&!e.length&&(b.textContent=this.t("tableRowCount",{count:C(a.length,this.locale)}));this.pin(b,`col-${c}`),n.append(b)}),d("tfoot",{},n)}renderBody(){let t=this.tbody;if(!t)return;let{items:e}=this.view(),s=this.visibleColumns(),r=this.controlColumns(),i=s.length+r.length,a=[],n,o,c=0,h=0;if(this.virtual&&this.scroller){let u=it[this.density],b=e.map(k=>Rt(k,u,this.detailHeights)),p=this.table?.tHead??null,f=Math.max(0,this.scroller.scrollTop-(p?.offsetHeight??0)),g=this.scroller.clientHeight||480,m=0;for(n=0;n<e.length&&m+b[n]<f;)m+=b[n++];n=Math.max(0,n-Lt),c=b.slice(0,n).reduce((k,_)=>k+_,0);let y=0;for(o=n;o<e.length&&y<g+Lt*2*u;)y+=b[o++];h=b.slice(o).reduce((k,_)=>k+_,0),this.windowRange=[n,o]}else({from:n,to:o}=this.pageWindow(e.length));c&&a.push(d("tr",{class:"tb-spacer",attrs:{"aria-hidden":"true"}},H(d("td",{attrs:{colspan:i}}),"height",c)));for(let u=n;u<o;u+=1)a.push(this.renderItem(e[u],u,s,r));if(h&&a.push(d("tr",{class:"tb-spacer",attrs:{"aria-hidden":"true"}},H(d("td",{attrs:{colspan:i}}),"height",h))),e.length||a.push(d("tr",{},d("td",{class:"tb-empty",attrs:{colspan:i},text:this.getDataset().rows.length?this.t("tableNoMatch"):this.t("noRows")}))),t.replaceChildren(...a),this.query&&this.highlight(t),this.virtual){let u=!1;for(let b of t.querySelectorAll("tr.tb-detail")){let p=Number(b.getAttribute("data-index")),f=b.offsetHeight;f&&this.detailHeights.get(p)!==f&&(this.detailHeights.set(p,f),u=!0)}u&&requestAnimationFrame(()=>this.renderBody())}this.syncTabStop()}onScroll(){cancelAnimationFrame(this.scrollFrame),this.scrollFrame=requestAnimationFrame(()=>{let t=this.root.activeElement,e=t instanceof HTMLElement&&this.tbody?.contains(t);this.renderBody(),e&&this.focusCell(this.focusPos.r,this.focusPos.c,!1)})}renderItem(t,e,s,r){let i=this.t,a=s.length+r.length;if(t.kind==="group"){let b=!this.collapsed.has(t.value),p=this.allColumns().find(y=>y.key===this.groupKey),f=t.value===""?i("tableEmpty"):p?this.displayText(p,{[p.key]:this.getDataset().rows[t.indexes[0]][p.key]}):t.value,g=t.indexes.filter(y=>this.selected.has(this.rowKey(y))).length,m=d("td",{class:"tb-group-cell",attrs:{colspan:a,"data-r":e,"data-c":0,tabindex:"-1",role:"gridcell"}},d("span",{class:"tb-group-inner"},d("span",{class:"tb-chevron"},S("chevron-right")),this.selectionMode==="multiple"?this.groupCheckbox(t.indexes,g):null,d("span",{class:"tb-group-name",text:p?`${p.label}: `:""}),d("strong",{text:f}),d("span",{class:"tb-count",text:C(t.indexes.length,this.locale)}),...this.groupAggregates(t.indexes,s)));return d("tr",{class:"tb-group",part:"group-row",attrs:{role:"row","aria-expanded":String(b),"data-group":t.value,"data-r":e}},m)}let{rows:n}=this.getDataset(),o=n[t.index],c=this.rowKey(t.index);if(t.kind==="detail"){let b=d("dl",{class:"tb-detail-list"});for(let p of this.allColumns())b.append(d("div",{class:`tb-field${this.isHidden(p)?" hidden-col":""}`},d("dt",{text:p.label}),d("dd",{},this.cellContent(p,o,!0))));return d("tr",{class:"tb-detail",attrs:{"data-index":t.index,role:"row"}},d("td",{attrs:{colspan:a,role:"gridcell"}},b))}let h=this.selected.has(c),u=d("tr",{class:`tb-row${h?" selected":""}`,part:"row",attrs:{role:"row","aria-rowindex":e+2,"aria-selected":this.selectionMode!=="none"?String(h):null,"data-r":e,"data-key":c}});for(let b of r){let p=d("td",{class:`tb-ctl tb-ctl-${b.id}`});if(b.id==="select")p.append(d("input",{class:"tb-check",attrs:{type:"checkbox",tabindex:"-1","aria-label":i("tableSelectRow",{n:t.index+1})},on:{click:f=>{f.stopPropagation(),f.shiftKey&&this.anchor!==null?this.selectRange(this.anchor,e):this.toggleRow(e)}}})),p.firstChild.checked=h;else if(b.id==="expand"){let f=this.expanded.has(t.index);p.append(d("button",{class:"tb-expand",attrs:{type:"button",tabindex:"-1","aria-expanded":String(f),"aria-label":i(f?"tableCollapseRow":"tableExpandRow")},on:{click:g=>(g.stopPropagation(),this.toggleDetail(t.index))}},S("chevron-right")))}else p.textContent=C(t.index+1,this.locale);this.pin(p,`ctl-${b.id}`),u.append(p)}return s.forEach((b,p)=>{let f=d("td",{class:`tb-cell type-${b.type}${b.align?` align-${b.align}`:""}${this.canEdit(b)?" editable":""}`,part:"cell",attrs:{role:"gridcell","data-r":e,"data-c":p,tabindex:"-1","aria-colindex":p+1}});this.editingCell?.r===e&&this.editingCell.c===p?f.append(this.editor(b,o,e,p)):f.append(this.cellContent(b,o)),this.pin(f,`col-${p}`),u.append(f)}),u}groupAggregates(t,e){let{rows:s}=this.getDataset();return e.filter(r=>r.aggregate!=="none").slice(0,4).map(r=>{let i=Y(s,t,r,r.aggregate);if(i===null)return null;let a=r.type==="date"&&r.aggregate!=="count"?new Date(i).toLocaleDateString(this.locale):r.aggregate==="count"?C(i,this.locale):st({...r,display:r.display==="progress"||r.display==="rating"?"number":r.display},Math.round(i*100)/100,this.locale,this.t);return d("span",{class:"tb-group-agg"},d("span",{text:`${r.label} \xB7 ${this.t(`tableAgg_${r.aggregate}`)}`}),d("strong",{text:a}))}).filter(r=>r!==null)}groupCheckbox(t,e){let s=d("input",{class:"tb-check",attrs:{type:"checkbox",tabindex:"-1","aria-label":this.t("tableSelectGroup")},on:{click:r=>{r.stopPropagation();let i=e===t.length;for(let a of t){let n=this.rowKey(a);i?this.selected.delete(n):this.selected.add(n)}this.selectionChanged()}}});return s.checked=e>0&&e===t.length,s.indeterminate=e>0&&e<t.length,s}cellContent(t,e,s=!1){let r=e[t.key];if(t.render)try{let o=t.render(r,e);return o instanceof Node?o:document.createTextNode(String(o??""))}catch{}let i=this.displayText(t,e),a=this.getDataset().rows.indexOf(e),n=`${this.rowKey(a)}\0${t.key}`;return $t(t,r,e,i,{t:this.t,locale:this.locale,expanded:s||this.openCells.has(n),onToggle:s?null:()=>{if(this.virtual&&this.feature("expandable")){this.toggleDetail(a);return}this.openCells.has(n)?this.openCells.delete(n):this.openCells.add(n),this.cards?this.renderGrid():this.renderBody()}})}renderCards(t){let e=this.t,s=this.visibleColumns(),r=this.pageWindow(t.length),i=d("div",{class:"tb-cards",attrs:{role:"list","aria-label":this.heading||e("table")}}),a=this.feature("sortable"),n=this.sortSpecs[0],o=d("div",{class:"tb-card-tools"});if(this.selectionMode==="multiple"){let{order:u}=this.view(),b=u.filter(f=>this.selected.has(this.rowKey(f))).length,p=d("input",{class:"tb-check",attrs:{type:"checkbox","aria-label":e("tableSelectAll")},on:{change:()=>b===u.length&&b?this.clearSelection():this.selectAll()}});p.checked=b>0&&b===u.length,p.indeterminate=b>0&&b<u.length,o.append(d("label",{class:"tb-card-all"},p,d("span",{text:e("tableSelectAll")})))}if(a){let u=d("select",{class:"tb-filter",attrs:{"aria-label":e("tableSortField"),"data-focus-key":"card-sort"}},d("option",{attrs:{value:""},text:e("tableNoSort")}),...s.filter(b=>b.sortable).map(b=>d("option",{attrs:{value:b.key},text:b.label})));u.value=n?.key??"",u.addEventListener("change",()=>this.setSort(u.value?[{key:u.value,direction:n?.direction??"ascending"}]:[])),o.append(u),n&&o.append(M({icon:n.direction==="ascending"?"sort-up":"sort-down",label:e(n.direction==="ascending"?"tableSortAsc":"tableSortDesc"),key:"card-direction",onClick:()=>this.setSort([{key:n.key,direction:n.direction==="ascending"?"descending":"ascending"}])}))}let c=d("div",{class:"tb-cards-wrap"},o,i),{rows:h}=this.getDataset();for(let u=r.from;u<r.to;u+=1){let b=t[u];if(b.kind==="detail")continue;if(b.kind==="group"){let x=!this.collapsed.has(b.value);i.append(d("button",{class:"tb-card-group",part:"group-row",attrs:{type:"button","aria-expanded":String(x),role:"listitem"},on:{click:()=>this.toggleGroup(b.value)}},S("chevron-right"),d("strong",{text:b.value||e("tableEmpty")}),d("span",{class:"tb-count",text:C(b.indexes.length,this.locale)})));continue}let p=h[b.index],f=this.rowKey(b.index),g=this.selected.has(f),m=d("article",{class:`tb-card${g?" selected":""}`,part:"card",attrs:{role:"listitem","data-key":f}}),[y,...k]=s,_=d("div",{class:"tb-card-top"});if(this.selectionMode!=="none"){let x=d("input",{class:"tb-check",attrs:{type:"checkbox","aria-label":e("tableSelectRow",{n:b.index+1})},on:{change:()=>this.toggleRow(u)}});x.checked=g,_.append(x)}y&&_.append(d("strong",{class:"tb-card-title"},this.cellContent(y,p))),m.append(_);let z=d("dl",{class:"tb-card-fields"});for(let x of k)z.append(d("dt",{text:x.label}),d("dd",{},this.cellContent(x,p)));m.append(z),i.append(m)}return t.length||i.append(d("p",{class:"tb-empty",text:h.length?e("tableNoMatch"):e("noRows")})),this.query&&this.highlight(i),c}bulkBar(t){if(!this.selected.size||this.selectionMode==="none"||!this.feature("bulk-bar"))return null;let e=this.t,s=this.selected.size,r=d("div",{class:"tb-bulk",part:"bulk-bar",attrs:{role:"toolbar","aria-label":e("tableSelectionActions")}});r.append(d("span",{class:"tb-bulk-count",text:e("tableSelected",{count:C(s,this.locale)})}));let i=t.filter(a=>this.selected.has(this.rowKey(a))).length;this.selectionMode==="multiple"&&i<t.length&&r.append(this.textButton(e("tableSelectAllMatching",{count:C(t.length,this.locale)}),"bulk-all",()=>this.selectAll())),r.append(d("span",{class:"spacer"})),r.append(this.textButton(e("copy"),"bulk-copy",async a=>{let n=await V(this.exportData("tsv",{selected:!0}),this.root);a.classList.toggle("done",n),this.announce(e(n?"copied":"copyFailed"))},"copy"),this.textButton("CSV","bulk-csv",()=>U(this.exportData("csv",{selected:!0}),this.downloadName("selection.csv"),"text/csv"),"download"),this.textButton("JSON","bulk-json",()=>U(this.exportData("json",{selected:!0}),"selection.json","application/json"),"download"));for(let a of this._bulkActions){let n=this.textButton(a.label,`bulk-${a.id}`,()=>{E(this,$.BULK_ACTION,{action:a.id,keys:[...this.selected],rows:this.selection})},a.icon);a.danger&&n.classList.add("danger"),r.append(n)}return r.append(M({icon:"close",label:e("tableClearSelection"),key:"bulk-clear",onClick:()=>this.clearSelection()})),r}stateBar(){let t=this.t,e=[],s=this.allColumns(),r=n=>s.find(o=>o.key===n)?.label??n;for(let[n,o]of this.filterValues)o.trim()&&e.push(this.chip(`${r(n)}: ${o}`,t("tableRemoveFilter",{name:r(n)}),()=>this.setFilter(n,"",!0)));let i=this.groupKey;i&&e.push(this.chip(t("tableGroupedBy",{name:r(i)}),t("tableUngroup"),()=>this.setGroup(null)));let a=this.sortSpecs;return a.length>1&&e.push(this.chip(t("tableSortedBy",{names:a.map(n=>r(n.key)).join(", ")}),t("tableClearSort"),()=>this.setSort([]))),e.length?d("div",{class:"tb-state"},...e,e.length>1?this.textButton(t("tableClearAll"),"clear-all",()=>this.clearQuery()):null):null}chip(t,e,s){return d("span",{class:"tb-chip"},d("span",{text:t}),d("button",{class:"tb-chip-x",attrs:{type:"button","aria-label":e,title:e},on:{click:s}},S("close")))}textButton(t,e,s,r){let i=d("button",{class:"text-btn",attrs:{type:"button","data-focus-key":e}});return r&&i.append(S(r)),i.append(d("span",{text:t})),i.addEventListener("click",()=>s(i)),i}pager(t,e,s,r){let i=this.t,a=this.paginationMode,n=this.getDataset().rows.length,{pages:o}=s,c=g=>C(g,this.locale),h;o>1&&a!=="more"?h=i("rowsRange",{from:c(e?s.rowFrom+1:0),to:c(s.rowTo),total:c(e)}):a==="more"&&s.to<t?h=i("tableShowing",{shown:c(s.rowTo),total:c(e)}):h=i("tableRows",{count:c(e)}),e!==n&&(h+=` \xB7 ${i("tableFiltered",{total:c(n)})}`),this.selected.size&&!this.feature("bulk-bar")&&(h+=` \xB7 ${i("tableSelected",{count:c(this.selected.size)})}`);let u=g=>{this.page=Math.max(0,Math.min(o-1,g)),this.renderGrid(),a!=="more"&&this.scroller?.scrollTo({top:0}),this.root.querySelector(`.tb-pager.${r} [data-focus-key="${r}-page-${this.page}"], .tb-pager.${r} .tb-page-btn[aria-current]`)?.focus(),this.announce(i("tablePageAnnounce",{page:c(this.page+1),pages:c(o)}))},b=(g,m,y,k)=>{let _=M({icon:g,label:i(m),key:`${r}-${m}`,onClick:()=>u(y)});return _.disabled=k,_},p=d("div",{class:"toolbar tb-pages"});if(a==="more"){if(s.to<t){let g=Math.min(s.size,e-s.rowTo);p.append(this.textButton(i("tableShowMore",{count:c(g)}),`${r}-more`,()=>u(this.page+1)),this.textButton(i("tableShowAll"),`${r}-more-all`,()=>u(o-1)))}}else if(o>1&&a!=="none"){if(W(p,[a==="pages"?b("chevrons-left","firstPage",0,this.page===0):null,b("chevron-left","previousPage",this.page-1,this.page===0)]),a==="pages")for(let g of le(this.page,o)){if(g<0){p.append(d("span",{class:"tb-gap",text:"\u2026",attrs:{"aria-hidden":"true"}}));continue}let m=g===this.page;p.append(d("button",{class:`tb-page-btn${m?" current":""}`,text:c(g+1),attrs:{type:"button","aria-current":m?"page":null,"aria-label":i("tableGoToPage",{page:c(g+1)}),"data-focus-key":`${r}-page-${g}`},on:{click:()=>u(g)}}))}else p.append(d("span",{class:"tb-page",text:i("tablePage",{page:c(this.page+1),pages:c(o)})}));if(W(p,[b("chevron-right","nextPage",this.page+1,this.page>=o-1),a==="pages"?b("chevrons-right","lastPage",o-1,this.page>=o-1):null]),a==="pages"&&o>7){let g=d("input",{class:"tb-jump",attrs:{type:"number",min:1,max:o,inputmode:"numeric","aria-label":i("tableJump"),placeholder:i("tableJumpShort"),"data-focus-key":`${r}-jump`}});g.addEventListener("keydown",m=>{if(m.key!=="Enter")return;let y=Number(g.value);Number.isFinite(y)&&y>=1&&u(Math.round(y)-1)}),p.append(g)}}let f=d("select",{class:"tb-size",attrs:{"aria-label":i("tablePageSize"),"data-focus-key":`${r}-page-size`}},...[...new Set([...Tt.filter(g=>g),this.pageSize,0])].sort((g,m)=>(g||1/0)-(m||1/0)).map(g=>d("option",{attrs:{value:g},text:g?c(g):i("tableAll")})));return f.value=String(this.pageSize),f.addEventListener("change",()=>{this.pageSizeState=Number(f.value),this.page=0,this.saveState(),this.render()}),d("div",{class:`pager tb-pager ${r}`,part:"pager",attrs:{role:"navigation","aria-label":i("tablePagination")}},d("span",{class:"pager-info",attrs:{"aria-live":r==="bottom"?"polite":null},text:h}),d("div",{class:"tb-pager-end"},nt(this.getAttribute("page-sizes"))!==!1?d("label",{class:"tb-size-label"},d("span",{text:i("tablePerPage")}),f):null,p))}compileCondition(t,e){let{rows:s}=this.getDataset(),r=t.value.trim();if(!r)return null;let i;if(t.key===null){let n=r.toLowerCase(),o=e.filter(c=>!this.isHidden(c)).map(c=>this.textOf(c));i=c=>o.some(h=>h[c].includes(n))}else{let n=e.find(c=>c.key===t.key);if(!n)return null;let o=/^[=!]?[^<>=!.]*,/.test(r)&&!/\.\./.test(r)?r.replace(/^=/,"").split(","):null;if(o){let c=this.textOf(n),h=o.map(b=>b.trim().toLowerCase()).filter(Boolean),u=s.map(b=>v(b[n.key]).toLowerCase());i=b=>h.some(p=>c[b]===p||u[b]===p)}else{let c=Q(r,n.type);if(!c)return null;let h=r.startsWith("=")?r.slice(1).trim().toLowerCase():null,u=h!==null?this.textOf(n):null;i=b=>u&&u[b]===h||c(s[b][n.key])}}let a=i;return t.not?n=>!a(n):a}valuesOf(t){let e=this.valueCache.get(t.key);if(!e){let s=new Map,r=this.getDataset().rows,i=Math.max(1,Math.floor(r.length/2e4));for(let a=0;a<r.length;a+=i){let n=r[a][t.key],o=Array.isArray(n)?n.map(v):[this.displayText(t,r[a])];for(let c of o)c&&c.length<=80&&s.set(c,(s.get(c)??0)+1)}e=[...s].sort((a,n)=>n[1]-a[1]||a[0].localeCompare(n[0])).slice(0,500),this.valueCache.set(t.key,e)}return e}parseCondition(t){let e=t.trim();if(!e)return null;let s=!1;e.startsWith("-")&&e.includes(":")&&(s=!0,e=e.slice(1));let r=e.indexOf(":");if(r>0){let i=e.slice(0,r).trim().toLowerCase(),a=this.allColumns().find(o=>o.key.toLowerCase()===i||o.label.toLowerCase()===i),n=e.slice(r+1).trim();if(a&&n)return n.startsWith("!")&&!n.startsWith("!=")&&n!=="!empty"?{key:a.key,value:n.slice(1),not:!s}:{key:a.key,value:n,not:s}}return{key:null,value:e,not:!1}}conditionLabel(t){let e=this.t;if(t.key===null)return e("tableContains",{text:t.value});let r=this.allColumns().find(o=>o.key===t.key)?.label??t.key,i=t.value,a,n=/^(>=|<=|!=|>|<|=)\s*(.*)$/.exec(i);return/\.\./.test(i)?a=`${r} ${i.replace(/\s*\.\.\s*/," \u2013 ")}`:n?a=`${r} ${n[1]==="="?"=":n[1].replace(">=","\u2265").replace("<=","\u2264").replace("!=","\u2260")} ${n[2]}`:i.includes(",")?a=`${r} \u2208 ${i.split(",").map(o=>o.trim()).filter(Boolean).join(" | ")}`:i.toLowerCase()==="empty"?a=`${r} ${e("tableIsEmpty")}`:a=`${r} ~ ${i}`,t.not?`${e("tableNot")} ${a}`:a}setConditions(t){this.conditions=t,this.page=0,this.invalidateView(),this.focusQuery=!0,this.refreshRows(),this.filterChanged()}restoreQueryFocus(){this.focusQuery&&(this.focusQuery=!1,this.root.querySelector(".tb-query-input")?.focus())}queryBar(){if(!this.feature("query-bar"))return null;let t=this.t,e=d("div",{class:"tb-query",part:"query-bar"}),s=d("div",{class:"tb-query-field"});e.append(d("span",{class:"tb-query-icon",attrs:{"aria-hidden":"true"}},S("filter"))),this.conditions.forEach((f,g)=>{g&&s.append(d("button",{class:`tb-join ${this.matchAll?"and":"or"}`,text:t(this.matchAll?"tableAnd":"tableOr"),attrs:{type:"button",title:t("tableToggleJoin"),"data-focus-key":`join-${g}`},on:{click:()=>{this.matchAll=!this.matchAll,this.setConditions(this.conditions),this.restoreFocus(`join-${g}`)}}}));let m=d("span",{class:`tb-cond${f.not?" not":""}${f.key===null?" text":""}`},d("button",{class:"tb-cond-label",text:this.conditionLabel(f),attrs:{type:"button",title:t("tableEditCondition"),"data-focus-key":`cond-${g}`},on:{click:()=>{let y=this.conditions.filter((x,w)=>w!==g),k=this.allColumns().find(x=>x.key===f.key),_=f.key===null?f.value:`${f.not?"-":""}${k?.key??f.key}:${f.value}`;this.setConditions(y);let z=this.root.querySelector(".tb-query-input");z&&(z.value=_,z.focus(),z.dispatchEvent(new Event("input")))}}}),d("button",{class:"tb-chip-x",attrs:{type:"button","aria-label":t("tableRemoveCondition",{name:this.conditionLabel(f)})},on:{click:()=>this.setConditions(this.conditions.filter((y,k)=>k!==g))}},S("close")));s.append(m)});let r=`${this.tableId}-suggest`,i=d("input",{class:"tb-query-input",attrs:{type:"text",role:"combobox","aria-expanded":"false","aria-controls":r,"aria-autocomplete":"list","aria-label":t("tableQueryLabel"),placeholder:this.conditions.length?t("tableQueryMore"):t("tableQueryPlaceholder"),autocomplete:"off",spellcheck:"false",maxlength:300,"data-focus-key":"query-input"}}),a=d("ul",{class:"tb-suggest",attrs:{id:r,role:"listbox",hidden:!0}}),n=[],o=-1,c=()=>{a.hidden=!0,i.setAttribute("aria-expanded","false"),i.removeAttribute("aria-activedescendant"),o=-1},h=()=>{a.replaceChildren(...n.map((f,g)=>d("li",{class:`tb-option${g===o?" active":""}`,attrs:{id:`${r}-${g}`,role:"option","aria-selected":String(g===o)},on:{pointerdown:m=>{m.preventDefault(),f.apply()}}},d("span",{text:f.label}),f.hint?d("span",{class:"tb-option-hint",text:f.hint}):null))),a.hidden=!n.length,i.setAttribute("aria-expanded",String(n.length>0)),o>=0?i.setAttribute("aria-activedescendant",`${r}-${o}`):i.removeAttribute("aria-activedescendant")},u=f=>{let g=this.parseCondition(f);g&&(i.value="",c(),this.setConditions([...this.conditions,g]))},b=()=>{let f=i.value,g=f.trim(),m=g.startsWith("-")?"-":"",y=m?g.slice(1):g,k=y.indexOf(":"),_=this.allColumns().filter(x=>x.filterable),z=x=>C(x,this.locale);if(n=[],k>0){let x=y.slice(0,k).toLowerCase(),w=_.find(T=>T.key.toLowerCase()===x||T.label.toLowerCase()===x),N=y.slice(k+1);if(w){let T=N.replace(/^[=!~]/,"").toLowerCase();if(w.type==="number"||w.type==="date"){let L=w.type==="number"?"100":"2024-01-01";for(let O of[">","<",">=","<="])N&&!O.startsWith(N[0])||n.push({label:`${w.label} ${O} \u2026`,hint:t("tableOpHint"),apply:()=>p(`${m}${w.key}:${O}`)});N||n.push({label:`${w.label} ${L}..`,hint:t("tableRangeHint"),apply:()=>p(`${m}${w.key}:`)})}let at=this.valuesOf(w).filter(([L])=>!T||L.toLowerCase().includes(T)).slice(0,8);for(let[L,O]of at)n.push({label:`${w.label} = ${L}`,hint:z(O),apply:()=>u(`${m}${w.key}:=${L}`)});N&&!at.some(([L])=>L.toLowerCase()===T)&&n.unshift({label:this.conditionLabel({key:w.key,value:N,not:!!m}),hint:"\u21B5",apply:()=>u(f)})}}else if(y){n.push({label:t("tableContains",{text:y}),hint:"\u21B5",apply:()=>u(y)});let x=y.toLowerCase();for(let w of _)(w.label.toLowerCase().includes(x)||w.key.toLowerCase().includes(x))&&n.push({label:`${w.label}:`,hint:t("tableFilterColumn"),apply:()=>p(`${m}${w.key}:`)});for(let w of _){if(n.length>9)break;for(let[N,T]of this.valuesOf(w))if(N.toLowerCase().startsWith(x)){n.push({label:`${w.label} = ${N}`,hint:z(T),apply:()=>u(`${w.key}:=${N}`)});break}}}else for(let x of _.slice(0,10))n.push({label:`${x.label}:`,hint:t(`tableType_${x.type}`),apply:()=>p(`${x.key}:`)});n=n.slice(0,10),o=n.length&&y?0:-1,h()},p=f=>{i.value=f,i.focus(),b()};return i.addEventListener("input",b),i.addEventListener("focus",b),i.addEventListener("blur",()=>setTimeout(c,100)),i.addEventListener("keydown",f=>{if(f.key==="ArrowDown"||f.key==="ArrowUp"){if(!n.length)return;f.preventDefault(),o=(o+(f.key==="ArrowDown"?1:-1)+n.length)%n.length,h()}else f.key==="Enter"?(f.preventDefault(),o>=0&&n[o]?n[o].apply():u(i.value)):f.key==="Tab"&&o>=0&&!a.hidden&&i.value?(f.preventDefault(),n[o].apply()):f.key==="Escape"?a.hidden?i.value&&(f.stopPropagation(),i.value=""):(f.stopPropagation(),c()):f.key==="Backspace"&&!i.value&&this.conditions.length&&(f.preventDefault(),this.setConditions(this.conditions.slice(0,-1)))}),s.append(d("span",{class:"tb-query-box"},i,a)),e.append(s),this.conditions.length>1&&e.append(d("button",{class:"tb-match",attrs:{type:"button","data-focus-key":"match-mode",title:t("tableToggleJoin")},on:{click:()=>{this.matchAll=!this.matchAll,this.setConditions(this.conditions),this.restoreFocus("match-mode")}}},d("span",{text:t(this.matchAll?"tableMatchAll":"tableMatchAny")}))),this.conditions.length&&e.append(M({icon:"close",label:t("tableClearConditions"),key:"clear-conditions",onClick:()=>this.setConditions([])})),e}pageKeys(){let{items:t}=this.view(),{from:e,to:s}=this.virtual?{from:0,to:t.length}:this.pageWindow(t.length),r=[];for(let i=e;i<s;i+=1){let a=t[i];if(a.kind==="row")r.push(this.rowKey(a.index));else if(a.kind==="group"&&this.collapsed.has(a.value))for(let n of a.indexes)r.push(this.rowKey(n))}return r}selectMenu(t){let e=this.t;t.setAttribute("role","menu"),t.setAttribute("aria-label",e("tableSelectMenu")),t.classList.add("tb-select-menu");let s=o=>C(o,this.locale),{order:r}=this.view(),i=this.getDataset().rows.length,a=this.pageKeys(),n=(o,c,h,u=!1)=>{let b=d("button",{class:"tb-menu-item",attrs:{type:"button",role:"menuitem",disabled:u}},d("span",{text:o}),d("span",{class:"tb-option-hint",text:c}));return b.addEventListener("click",()=>{this.panel=null,h(),this.restoreFocus("select-all")}),b};t.append(n(e("tableSelectPage"),s(a.length),()=>this.select(a,{add:!0})),n(e("tableSelectMatching"),s(r.length),()=>this.selectAll())),r.length!==i&&t.append(n(e("tableSelectEverything"),s(i),()=>this.select(this.getDataset().rows.map((o,c)=>this.rowKey(c))))),t.append(d("hr"),n(e("tableInvertPage"),s(a.length),()=>{for(let o of a)this.selected.has(o)?this.selected.delete(o):this.selected.add(o);this.selectionChanged()}),n(e("tableUnselectPage"),"",()=>{for(let o of a)this.selected.delete(o);this.selectionChanged()},!a.some(o=>this.selected.has(o))),n(e("tableClearSelection"),s(this.selected.size),()=>this.clearSelection(),!this.selected.size)),t.querySelector("button:not([disabled])")?.setAttribute("data-autofocus","")}togglePanel(t){let e=typeof t=="string"?this.panel===t:typeof this.panel=="object"&&this.panel?.column===t.column;this.panel=e?null:t,this.renderGrid(),this.panel&&this.root.querySelector(".tb-popover [data-autofocus], .tb-popover button, .tb-popover input")?.focus()}closePanel(t=!0){let e=this.panel;if(!e||(this.panel=null,this.renderGrid(),!t))return;let s=typeof e=="string"?e==="select"?"select-menu":e:`menu-${e.column}`,r=this.root.querySelector(`[data-focus-key="${CSS.escape(s)}"]`);r?r.focus():typeof e=="object"&&this.focusHeader(e.column)}renderPanel(){let t=this.panel;if(!t)return null;let e=d("div",{class:"tb-popover",part:"menu",on:{keydown:s=>{let r=s;if(r.key==="Escape")r.stopPropagation(),this.closePanel();else if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(r.altKey)return;let i=[...e.querySelectorAll('[role="menuitem"], [role="menuitemradio"], .tb-col-item input')],a=i.indexOf(this.root.activeElement);if(!i.length)return;r.preventDefault(),i[(a+(r.key==="ArrowDown"?1:-1)+i.length)%i.length].focus()}}}});return t==="help"?this.helpPanel(e):t==="columns"?this.columnsPanel(e):t==="select"?this.selectMenu(e):this.columnMenu(e,t.column),(typeof t=="object"||t==="select")&&queueMicrotask(()=>{let s=this.root.querySelector(typeof t=="object"?`th[data-key="${CSS.escape(t.column)}"]`:"th.tb-ctl-select"),r=this.host;if(!s||!r)return;let i=s.getBoundingClientRect(),a=r.getBoundingClientRect(),n=Math.max(4,Math.min(i.left-a.left,a.width-e.offsetWidth-4));e.style.left=`${n}px`,e.style.right="auto",e.style.top=`${i.bottom-a.top+2}px`}),e}columnMenu(t,e){let s=this.t,r=this.allColumns().find(b=>b.key===e);if(!r)return;t.setAttribute("role","menu"),t.setAttribute("aria-label",s("tableColumnMenu",{name:r.label}));let i=(b,p,f,g=!1)=>{let m=d("button",{class:"tb-menu-item",attrs:{type:"button",role:"menuitem",disabled:g}},S(p),d("span",{text:b}));return m.addEventListener("click",()=>{f()}),m},a=this.visibleColumns(),n=a.findIndex(b=>b.key===e),o=this.sortSpecs.find(b=>b.key===e);this.feature("sortable")&&r.sortable&&(t.append(i(s("tableSortAsc"),"sort-up",()=>this.menuDone(()=>this.setSort([{key:e,direction:"ascending"}]))),i(s("tableSortDesc"),"sort-down",()=>this.menuDone(()=>this.setSort([{key:e,direction:"descending"}])))),o&&t.append(i(s("tableClearSort"),"sort",()=>this.menuDone(()=>this.setSort(this.sortSpecs.filter(b=>b.key!==e))))),t.append(d("hr"))),r.filterable&&t.append(i(s("tableFilter"),"filter",()=>{this.filtersOpen=!0,this.panel=null,this.render(),this.root.querySelector(`[data-focus-key="filter-${CSS.escape(e)}"]`)?.focus()})),t.append(this.groupKey===e?i(s("tableUngroup"),"list",()=>this.menuDone(()=>this.setGroup(null))):i(s("tableGroupBy"),"list",()=>this.menuDone(()=>this.setGroup(e))),d("hr"),i(s("tableMoveLeft"),"chevron-left",()=>this.menuDone(()=>this.moveColumn(e,-1)),n<=0),i(s("tableMoveRight"),"chevron-right",()=>this.menuDone(()=>this.moveColumn(e,1)),n>=a.length-1),i(this.pinned>n?s("tableUnpin"):s("tablePin"),"lock",()=>this.menuDone(()=>this.setPinned(this.pinned>n?n:n+1))),i(s("tableAutoFit"),"columns",()=>this.menuDone(()=>this.autoFit(e))),i(s("tableHideColumn"),"eye-off",()=>this.menuDone(()=>this.setHidden(e,!0)),a.length<=1));let c=r.type==="number"||r.type==="date"?I:["none","count"];t.append(d("hr"),d("div",{class:"tb-menu-title",text:s("tableFooter")}));let h=r.aggregate;for(let b of c){if(r.type==="date"&&(b==="sum"||b==="avg"))continue;let p=d("button",{class:"tb-menu-item",attrs:{type:"button",role:"menuitemradio","aria-checked":String(h===b)}},S(h===b?"check":"status-circle"),d("span",{text:s(`tableAggName_${b}`)}));p.addEventListener("click",()=>this.menuDone(()=>{this.aggregates.set(e,b),this.columnsChanged()})),t.append(p)}t.querySelector("button:not([disabled])")?.setAttribute("data-autofocus","")}menuDone(t){let e=this.panel;this.panel=null,t(),this.renderGrid(),typeof e=="object"&&e&&this.focusHeader(e.column)}columnsPanel(t){let e=this.t;t.classList.add("tb-columns"),t.setAttribute("role","dialog"),t.setAttribute("aria-label",e("tableColumns")),t.append(d("div",{class:"tb-menu-title",text:e("tableColumns")}));let s=d("ul",{class:"tb-col-list"}),r=this.allColumns(),i=r.filter(a=>!this.isHidden(a)).length;r.forEach((a,n)=>{let o=!this.isHidden(a),c=d("input",{attrs:{type:"checkbox","data-focus-key":`col-${a.key}`,"aria-keyshortcuts":"Alt+ArrowUp Alt+ArrowDown"},on:{change:()=>this.setHidden(a.key,!c.checked,!0),keydown:u=>{let b=u;b.altKey&&(b.key==="ArrowUp"||b.key==="ArrowDown")&&(b.preventDefault(),this.moveColumn(a.key,b.key==="ArrowUp"?-1:1,!0))}}});c.checked=o,c.disabled=o&&i<=1;let h=(u,b,p,f)=>{let g=M({icon:b,label:p,key:`col-${a.key}-${u}`,onClick:()=>this.moveColumn(a.key,u,!0)});return g.disabled=f,g};s.append(d("li",{class:"tb-col-item"},d("label",{},c,d("span",{text:a.label})),h(-1,"chevron-up",e("tableMoveUp",{name:a.label}),n===0),h(1,"chevron-down",e("tableMoveDown",{name:a.label}),n===r.length-1)))}),t.append(s,d("div",{class:"tb-col-actions"},this.textButton(e("tableShowAll"),"show-all",()=>{this.hiddenKeys.clear();for(let a of r)this.shown.add(a.key);this.columnsChanged()}),this.textButton(e("tableResetLayout"),"reset-layout",()=>this.resetLayout())))}helpPanel(t){let e=this.t;t.classList.add("tb-help"),t.setAttribute("role","dialog"),t.setAttribute("aria-label",e("tableShortcuts"));let s=/Mac|iP(?:hone|ad)/.test(globalThis.navigator?.platform??"")?"\u2318":"Ctrl",r=[["\u2191 \u2193 \u2190 \u2192",e("tableKeyMove")],["Home / End",e("tableKeyRowEnds")],[`${s}+Home / End`,e("tableKeyTableEnds")],["PageUp / PageDown",e("tableKeyPage")],["Space",e("tableKeySelect")],["Shift+\u2191 \u2193",e("tableKeyRange")],[`${s}+A`,e("tableKeySelectAll")],["Esc",e("tableKeyClear")],["Enter",e("tableKeyEnter")],["F2",e("tableKeyEdit")],["+ / \u2212",e("tableKeyExpand")],[`${s}+C`,e("tableKeyCopy")],["Shift+Enter",e("tableKeyMultiSort")],["Alt+\u2190 \u2192",e("tableKeyMoveColumn")],["Alt+Shift+\u2190 \u2192",e("tableKeyResize")],["/",e("tableKeySearch")]];t.append(d("div",{class:"tb-menu-title",text:e("tableShortcuts")}));let i=d("dl",{class:"tb-keys"});for(let[n,o]of r)i.append(d("dt",{},d("kbd",{text:n})),d("dd",{text:o}));t.append(i,d("p",{class:"tb-hint",text:e("tableMouseHint")}));let a=M({icon:"close",label:e("searchClose"),key:"help-close",onClick:()=>this.closePanel()});a.classList.add("tb-popover-close"),a.setAttribute("data-autofocus",""),t.prepend(a)}setSort(t){this.sortState=t,this.page=0,this.invalidateView(),this.saveState(),this.renderGrid();let e=t[0],s=this.allColumns().find(r=>r.key===e?.key);this.announce(e?this.t("tableSortedAnnounce",{name:s?.label??e.key,direction:this.t(e.direction==="ascending"?"tableAscending":"tableDescending")}):this.t("tableUnsorted")),E(this,$.SORT,{column:e?.key??null,name:s?.label??null,direction:e?.direction??"none",sort:t.map(r=>({...r}))})}cycleSort(t,e){if(!this.allColumns().find(n=>n.key===t)?.sortable||!this.feature("sortable"))return;let r=this.sortSpecs,i=r.find(n=>n.key===t),a=i?i.direction==="ascending"?{key:t,direction:"descending"}:null:{key:t,direction:"ascending"};if(e){let n=r.filter(o=>o.key!==t);this.setSort(a?i?r.map(o=>o.key===t?a:o):[...n,a]:n)}else this.setSort(a?[a]:[]);this.focusHeader(t)}setFilter(t,e,s){this.filterValues.set(t,e),e||this.filterValues.delete(t),clearTimeout(this.filterTimer);let r=()=>{this.page=0,this.invalidateView();let i=this.activeFocusKey();s?this.renderGrid():this.refreshRows(),i&&this.restoreFocus(i),this.filterChanged()};s?r():this.filterTimer=setTimeout(r,140)}refreshRows(){if(!this.host||!this.table||this.cards){this.renderGrid();return}let{order:t,items:e}=this.view(),s=this.pageWindow(e.length);this.renderBody();let r=this.visibleColumns(),i=this.controlColumns(),a=this.renderFoot(r,i);this.table.tFoot&&this.table.tFoot.remove(),a&&this.table.append(a);let n=this.table.querySelector("thead .tb-check");n&&n.replaceWith(this.headerCheckbox(t));for(let b of this.host.querySelectorAll(":scope > .tb-bulk, :scope > .tb-state, :scope > .tb-pager, :scope > .tb-query"))b.remove();let o=this.bulkBar(t),c=this.stateBar(),h=this.queryBar(),u=this.getAttribute("pager-position");(u==="top"||u==="both")&&this.scroller?.before(this.pager(e.length,t.length,s,"top")),c&&this.host.prepend(c),o&&this.host.prepend(o),h&&this.host.prepend(h),u!=="top"&&this.scroller?.after(this.pager(e.length,t.length,s,"bottom")),this.restoreQueryFocus()}filterChanged(){let{order:t}=this.view();E(this,$.FILTER_CHANGE,{filters:Object.fromEntries(this.filterValues),query:this.query,shown:t.length})}clearQuery(){this.filterValues.clear(),this.groupState=null,this.sortState=[],this.page=0,this.invalidateView(),this.saveState(),this.renderGrid(),this.filterChanged()}setGroup(t){this.groupState=t,this.collapsed.clear(),this.page=0,this.invalidateView(),this.saveState(),this.render()}setHidden(t,e,s=!1){e?(this.hiddenKeys.add(t),this.shown.delete(t)):(this.hiddenKeys.delete(t),this.shown.add(t)),s||(this.panel=null),this.columnsChanged(),s&&this.restoreFocus(`col-${t}`)}moveColumn(t,e,s=!1){let r=this.allColumns().map(c=>c.key),i=this.visibleColumns().map(c=>c.key),a=r.indexOf(t),n;if(s)n=a+e;else{let c=i.indexOf(t)+e;if(c<0||c>=i.length)return;n=r.indexOf(i[c])}if(a<0||n<0||n>=r.length)return;r.splice(a,1),r.splice(n,0,t),this.order=r,this.columnsChanged(),s?this.restoreFocus(`col-${t}`):this.focusHeader(t);let o=this.allColumns().find(c=>c.key===t);this.announce(this.t("tableMoved",{name:o?.label??t,position:this.visibleColumns().findIndex(c=>c.key===t)+1}))}setPinned(t){this.pinnedState=t,this.columnsChanged()}setWidth(t,e,s=!0){let r=rt(e);this.widths.set(t,r);let i=this.table?.querySelector(`col[data-key="${CSS.escape(t)}"]`);if(i&&(i.style.width=`${r}px`),this.table){let a=0;for(let n of this.table.querySelectorAll("col"))a+=parseFloat(n.style.width)||0;this.table.style.width=`max(100%, ${a}px)`}s&&(this.pinned?this.columnsChanged():(this.saveState(),E(this,$.COLUMN_CHANGE,{columns:this.state.columns})))}autoFit(t){this.widths.delete(t);let e=this.allColumns().find(s=>s.key===t);e&&this.setWidth(t,this.widthOf({...e,width:void 0}))}cycleDensity(){let t=G[(G.indexOf(this.density)+1)%G.length];this.densityState=t,this.saveState(),this.render(),this.announce(this.t("tableDensity",{density:this.t(`tableDensity_${t}`)}))}toggleGroup(t){let e=this.collapsed.has(t);e?this.collapsed.delete(t):this.collapsed.add(t),this.invalidateView(),this.renderGrid(),E(this,$.TOGGLE,{group:t,expanded:e})}toggleDetail(t){let e=!this.expanded.has(t);e?this.expanded.add(t):this.expanded.delete(t),this.invalidateView(),this.renderGrid(),E(this,$.TOGGLE,{key:this.rowKey(t),expanded:e})}toggleRow(t){let e=this.view().items[t];if(!e||e.kind!=="row"||this.selectionMode==="none")return;let s=this.rowKey(e.index);this.selected.has(s)?this.selected.delete(s):(this.selectionMode==="single"&&this.selected.clear(),this.selected.add(s)),this.anchor=t,this.selectionChanged()}selectRange(t,e){if(this.selectionMode!=="multiple"){this.toggleRow(e);return}let{items:s}=this.view();for(let r=Math.min(t,e);r<=Math.max(t,e);r+=1){let i=s[r];i?.kind==="row"&&this.selected.add(this.rowKey(i.index))}this.selectionChanged()}search(t){return this.query=t,this.page=0,this.invalidateView(),this.refreshRows(),this.filterChanged(),{total:t?this.view().order.length:0,capped:!1}}goToResult(t){let{items:e,order:s}=this.view(),r=s[t],i=e.findIndex(a=>a.kind==="row"&&a.index===r);i>=0&&this.revealItem(i,()=>{let a=this.root.querySelector(`tr[data-r="${i}"]`);for(let n of this.root.querySelectorAll("tr.current"))n.classList.remove("current");a?.classList.add("current"),a?.scrollIntoView({block:"nearest"})})}highlight(t){for(let e of t.querySelectorAll(".tb-text, .tb-link"))new ct(e).run(this.query)}canEdit(t){return!this.feature("editable")||t.render?!1:this.getDataset().columns.some(s=>s.editable)?t.editable:!0}editor(t,e,s,r){let i=e[t.key],a=d("input",{class:"tb-edit",attrs:{type:(t.type==="number","text"),inputmode:t.type==="number"?"decimal":null,"aria-label":this.t("tableEditCell",{name:t.label}),"data-focus-key":"cell-editor"}});a.value=i instanceof Date?i.toISOString():v(i);let n=!1,o=(c,h=0)=>{if(!n){if(n=!0,this.editingCell=null,c&&this.commitEdit(t,e,a.value),this.renderBody(),h){let u=this.nextEditable(s,r,h);if(u){this.startEdit(u.r,u.c);return}}this.focusCell(s,r)}};return a.addEventListener("keydown",c=>{c.stopPropagation(),c.key==="Enter"?(c.preventDefault(),o(!0)):c.key==="Escape"?(c.preventDefault(),o(!1)):c.key==="Tab"&&(c.preventDefault(),o(!0,c.shiftKey?-1:1))}),a.addEventListener("blur",()=>o(!0)),queueMicrotask(()=>{a.focus(),a.select()}),a}nextEditable(t,e,s){let r=this.visibleColumns(),{items:i}=this.view(),a=t,n=e+s;for(let o=0;o<1e4;o+=1){if(n>=r.length?(n=0,a+=1):n<0&&(n=r.length-1,a-=1),a<0||a>=i.length)return null;if(i[a].kind==="row"&&this.canEdit(r[n]))return{r:a,c:n};n+=s}return null}startEdit(t,e){let s=this.view().items[t],r=this.visibleColumns()[e];return!s||s.kind!=="row"||!r||!this.canEdit(r)?!1:(this.revealItem(t,()=>{this.editingCell={r:t,c:e},this.focusPos={r:t,c:e},this.renderBody()}),!0)}commitEdit(t,e,s){let r=e[t.key];if(v(r)===s)return;let i=At(s,t,r),a=this.getDataset().rows.indexOf(e);if(E(this,$.CELL_EDIT,{key:this.rowKey(a),column:t.key,value:i,previous:r,row:e})&&(e[t.key]=i,this.keyCache.delete(t.key),this.textCache.delete(t.key),this.invalidateView(),this.table?.tFoot)){let o=this.renderFoot(this.visibleColumns(),this.controlColumns());this.table.tFoot.remove(),o&&this.table.append(o)}}firstRowItem(){let{items:t}=this.view(),{from:e}=this.pageWindow(t.length);return t.length?Math.min(e,t.length-1):-1}revealItem(t,e){if(t<0){e();return}let s=this.effectivePageSize;if(Number.isFinite(s)){let r=Math.floor(Math.max(0,this.view().base.findIndex(a=>a>=t))/s),i=this.paginationMode==="more"?Math.max(r,this.page):r;i!==this.page&&(this.page=i,this.renderGrid())}else if(this.virtual&&this.scroller&&this.windowRange){let[r,i]=this.windowRange;if(t<r+1||t>=i-1){let a=it[this.density],{items:n}=this.view(),o=0;for(let b=0;b<t;b+=1)o+=Rt(n[b],a,this.detailHeights);let c=this.table?.tHead?.offsetHeight??0,h=this.scroller.clientHeight,u=this.scroller.scrollTop;o<u?this.scroller.scrollTop=o:o+a+c>u+h&&(this.scroller.scrollTop=o+a+c-h),this.renderBody()}}e()}focusCell(t,e,s=!0){let{items:r}=this.view(),i=this.visibleColumns();if(!i.length)return;let a=Math.max(-1,Math.min(r.length-1,t)),n=Math.max(0,Math.min(i.length-1,e));this.focusPos={r:a,c:n};let o=()=>{this.syncTabStop();let c=this.cellAt(a,n);c?.focus({preventScroll:!s}),s&&c?.scrollIntoView({block:"nearest",inline:"nearest"})};s?this.revealItem(a,o):o()}cellAt(t,e){return this.table?t===-1?this.table.querySelector(`th[data-r="-1"][data-c="${e}"]`):this.table.querySelector(`td[data-r="${t}"][data-c="${e}"]`)??this.table.querySelector(`td[data-r="${t}"][data-c="0"]`):null}syncTabStop(){if(!this.table)return;for(let r of this.table.querySelectorAll('[data-c][tabindex="0"]'))r.setAttribute("tabindex","-1");let{r:t,c:e}=this.focusPos;(this.cellAt(t,e)??this.cellAt(-1,0))?.setAttribute("tabindex","0")}focusHeader(t){let e=this.visibleColumns().findIndex(s=>s.key===t);e>=0&&this.focusCell(-1,e)}onGridFocus(t){let e=t.target.closest?.("[data-c]");if(!e)return;let s=Number(e.getAttribute("data-r")),r=Number(e.getAttribute("data-c"));(s!==this.focusPos.r||r!==this.focusPos.c)&&(this.focusPos={r:s,c:r},this.syncTabStop())}onGridClick(t){let e=t.target;if(e.closest("input, select, a, .tb-resizer"))return;let s=e.closest('th[data-r="-1"]');if(s){if(this.resizing)return;this.cycleSort(s.getAttribute("data-key"),t.shiftKey);return}let r=e.closest("tr.tb-group");if(r){this.toggleGroup(r.getAttribute("data-group")),this.focusCell(Number(r.getAttribute("data-r")),0,!1);return}let i=e.closest("td[data-c]");if(!i)return;let a=Number(i.getAttribute("data-r")),n=Number(i.getAttribute("data-c"));this.focusPos={r:a,c:n},this.selectionMode!=="none"&&(t.shiftKey&&this.anchor!==null?(t.preventDefault(),this.selectRange(this.anchor,a)):t.ctrlKey||t.metaKey||this.feature("select-on-click")?this.toggleRow(a):this.anchor=a),this.syncTabStop()}onGridDoubleClick(t){let e=t.target.closest("td[data-c]");if(!e||t.target.closest("input"))return;let s=Number(e.getAttribute("data-r")),r=Number(e.getAttribute("data-c"));this.startEdit(s,r)||this.activate(s)}activate(t){let e=this.view().items[t];e?.kind==="row"&&E(this,$.ROW_ACTIVATE,{key:this.rowKey(e.index),row:this.getDataset().rows[e.index]})}onGridKey(t){let e=t.target;if(e.matches("input, select, textarea"))return;let s=e.closest("[data-c]");if(!s)return;let{items:r}=this.view(),i=this.visibleColumns(),a=Number(s.getAttribute("data-r")),n=Number(s.getAttribute("data-c")),o=t.ctrlKey||t.metaKey,c=a>=0?r[a]:null,h=Math.max(5,Math.floor((this.scroller?.clientHeight??400)/it[this.density])-1),u=()=>{t.preventDefault(),t.stopPropagation()},b=(g,m)=>{let y=g+m;for(;y>=0&&y<r.length&&r[y].kind==="detail";)y+=m>0?1:-1;return y<-1&&(y=-1),y>=r.length&&(y=g),y},p=t.key;if(a===-1){let g=i[n];if(t.altKey&&(p==="ArrowLeft"||p==="ArrowRight")){u(),t.shiftKey?this.feature("resizable")&&this.setWidth(g.key,this.widthOf(g)+(p==="ArrowLeft"?-16:16)):this.feature("reorderable")&&this.moveColumn(g.key,p==="ArrowLeft"?-1:1);return}if(p==="Enter"||p===" "){u(),this.cycleSort(g.key,t.shiftKey);return}if(p==="ArrowDown"&&t.altKey||p==="ContextMenu"){u(),this.feature("column-menu")&&this.togglePanel({column:g.key});return}}switch(p){case"ArrowRight":u(),c?.kind==="group"&&this.collapsed.has(c.value)&&this.toggleGroup(c.value),this.focusCell(a,n+1);return;case"ArrowLeft":u(),c?.kind==="group"&&!this.collapsed.has(c.value)&&this.toggleGroup(c.value),this.focusCell(a,n-1);return;case"ArrowDown":{u();let g=b(a,1);t.shiftKey&&c&&this.selectionMode==="multiple"&&(this.anchor===null&&(this.anchor=a),this.focusPos={r:g,c:n},this.selectRange(this.anchor,g)),this.focusCell(g,n);return}case"ArrowUp":{u();let g=b(a,-1);t.shiftKey&&c&&g>=0&&this.selectionMode==="multiple"&&(this.anchor===null&&(this.anchor=a),this.focusPos={r:g,c:n},this.selectRange(this.anchor,g)),this.focusCell(g,n);return}case"Home":u(),this.focusCell(o?b(-1,1):a,0);return;case"End":u(),this.focusCell(o?r.length-1:a,i.length-1);return;case"PageDown":u(),this.focusCell(Math.min(r.length-1,Math.max(0,a)+h),n);return;case"PageUp":u(),this.focusCell(Math.max(0,a-h),n);return;default:}if(!c){p==="/"&&this.feature("search")?(u(),this.openSearch()):p==="?"&&(u(),this.togglePanel("help"));return}if(c.kind==="group"){(p==="Enter"||p===" "||p==="+"||p==="-")&&(u(),(p==="+"?this.collapsed.has(c.value):p!=="-"||!this.collapsed.has(c.value))&&this.toggleGroup(c.value),this.focusCell(a,0,!1));return}let f=c.index;if(p===" ")u(),t.shiftKey&&this.anchor!==null?this.selectRange(this.anchor,a):this.toggleRow(a),this.focusCell(a,n,!1);else if(p==="Enter")u(),this.startEdit(a,n)||(this.feature("expandable")?(this.toggleDetail(f),this.focusCell(a,n,!1)):this.activate(a));else if(p==="F2")u(),this.startEdit(a,n);else if(p==="+"||p==="-"){if(!this.feature("expandable"))return;u(),this.expanded.has(f)!==(p==="+")&&this.toggleDetail(f),this.focusCell(a,n,!1)}else if(o&&p.toLowerCase()==="a"){if(this.selectionMode!=="multiple")return;u(),this.selectAll(),this.focusCell(a,n,!1)}else if(o&&p.toLowerCase()==="c"){u();let g=this.selected.size?this.exportData("tsv",{selected:!0}):this.displayText(i[n],this.getDataset().rows[f]);V(g,this.root).then(m=>{this.announce(this.t(m?"copied":"copyFailed")),m&&E(this,$.COPY,{text:g})})}else if(p==="Escape"){if(!this.selected.size)return;u(),this.clearSelection(),this.focusCell(a,n,!1)}else p==="/"&&this.feature("search")?(u(),this.openSearch()):p==="?"&&(u(),this.togglePanel("help"))}openSearch(){this.searchOpen||(this.searchOpen=!0,this.render()),this.searchBar?.focus()}resizer(t){let e=d("span",{class:"tb-resizer",attrs:{"aria-hidden":"true",title:this.t("tableResize")}});return e.addEventListener("click",s=>s.stopPropagation()),e.addEventListener("dblclick",s=>{s.stopPropagation(),this.autoFit(t.key)}),e.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation();let r=e.parentElement,i=s.clientX,a=r.getBoundingClientRect().width,n=getComputedStyle(this).direction==="rtl";this.resizing=!0,e.setPointerCapture?.(s.pointerId),e.classList.add("active");let o=h=>this.setWidth(t.key,a+(n?i-h.clientX:h.clientX-i),!1),c=()=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c),e.classList.remove("active"),this.setWidth(t.key,this.widths.get(t.key)??a),setTimeout(()=>this.resizing=!1,0)};e.addEventListener("pointermove",o),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}),e}makeDraggable(t,e){t.addEventListener("dragstart",s=>{if(this.resizing){s.preventDefault();return}this.dragKey=e,s.dataTransfer?.setData("text/plain",e),s.dataTransfer&&(s.dataTransfer.effectAllowed="move"),t.classList.add("dragging")}),t.addEventListener("dragend",()=>{this.dragKey=null,t.classList.remove("dragging");for(let s of this.root.querySelectorAll(".drop-before, .drop-after"))s.classList.remove("drop-before","drop-after")}),t.addEventListener("dragover",s=>{if(!this.dragKey||this.dragKey===e)return;s.preventDefault();let r=t.getBoundingClientRect(),i=s.clientX>r.left+r.width/2;t.classList.toggle("drop-after",i),t.classList.toggle("drop-before",!i)}),t.addEventListener("dragleave",()=>t.classList.remove("drop-before","drop-after")),t.addEventListener("drop",s=>{s.preventDefault();let r=this.dragKey;if(!r||r===e)return;let i=t.classList.contains("drop-after"),a=this.allColumns().map(n=>n.key).filter(n=>n!==r);a.splice(a.indexOf(e)+(i?1:0),0,r),this.order=a,this.dragKey=null,this.columnsChanged(),this.focusHeader(r)})}};function Rt(l,t,e){return l.kind==="detail"?e.get(l.index)??160:t}function Pt(l){return/^id$|[_-]id$|[a-z]Id$/i.test(l)&&!/[a-z]id$/.test(l.slice(-3))}function H(l,t,e){return l.style[t]=`${e}px`,l}function le(l,t){if(t<=7)return Array.from({length:t},(i,a)=>a);let e=new Set([0,t-1,l,l-1,l+1]);l<=3&&[1,2,3,4].forEach(i=>e.add(i)),l>=t-4&&[t-5,t-4,t-3,t-2].forEach(i=>e.add(i));let s=[...e].filter(i=>i>=0&&i<t).sort((i,a)=>i-a),r=[];return s.forEach((i,a)=>{a&&i-s[a-1]>1&&r.push(i-s[a-1]===2?i-1:-1),r.push(i)}),r}function rt(l){return Math.round(Math.max(ae,Math.min(ne,l)))}export{Kt as a};
//# sourceMappingURL=chunk-64647JE6.js.map
