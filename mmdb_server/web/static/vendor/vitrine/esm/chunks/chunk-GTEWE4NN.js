/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
var a=`/*
 * CSV table. Header names are data: their case is kept (no uppercase label style).
 */
.table-host {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.table-body {
  background: var(--_surface);
}

.grid {
  min-width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
  font-variant-numeric: tabular-nums;
}

.grid th,
.grid td {
  max-width: 40ch;
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.grid thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--_surface-sunken);
  color: var(--_fg);
  font-weight: 600;
  white-space: nowrap;
}

.grid tbody tr:hover > * {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.grid .col-number {
  text-align: end;
}

.grid .row-number {
  position: sticky;
  left: 0;
  z-index: 1;
  width: 1%;
  background: var(--_surface);
  color: var(--_fg-muted);
  font-weight: 400;
  text-align: end;
  white-space: nowrap;
}

.grid thead .row-number {
  z-index: 3;
  background: var(--_surface-sunken);
}

.grid .sort {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.grid .col-number .sort {
  flex-direction: row-reverse;
}

.grid .sort .name {
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid .sort .icon {
  flex: none;
  width: 14px;
  height: 14px;
  color: var(--_fg-muted);
}

.grid [aria-sort='ascending'] .icon,
.grid [aria-sort='descending'] .icon {
  color: var(--_accent-fg);
}

.grid .no-rows {
  padding: var(--_space-5);
  color: var(--_fg-muted);
  text-align: center;
}

.pager {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-3);
  min-height: 40px;
  padding: 0 var(--_space-2) 0 var(--_space-3);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}
`;export{a};
//# sourceMappingURL=chunk-GTEWE4NN.js.map
