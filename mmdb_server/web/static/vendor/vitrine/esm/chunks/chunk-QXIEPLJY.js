/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
var r=`/*
 * JSON tree. Colors reuse the syntax roles so code and JSON look the same.
 * Spec: docs/DESIGN_SYSTEM.md \xA72.4 and \xA76 (tree-toggle).
 */
.tree-body {
  padding: var(--_space-2) 0;
}

.tree,
.group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tree {
  min-width: 100%;
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
}

.item {
  outline: none;
}

.row {
  display: flex;
  align-items: baseline;
  gap: 0;
  min-height: calc(var(--_font-size) * var(--_line-height));
  padding: 1px var(--_space-4) 1px calc(var(--_space-3) + var(--_level, 0) * 1.25em);
  cursor: default;
}

.row > * {
  flex: none;
  white-space: pre;
}

.row > .key {
  flex: 0 0 auto;
  max-width: min(50%, 48ch);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.row:hover {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.item[aria-selected='true'] > .row {
  background: var(--_accent-soft);
}

.item:focus-visible > .row {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
  border-radius: 2px;
}

.toggle {
  display: inline-grid;
  flex: none;
  place-items: center;
  align-self: center;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  color: var(--_fg-muted);
  cursor: pointer;
}

.toggle .icon {
  width: 14px;
  height: 14px;
  transition: transform var(--_duration) var(--_easing);
}

.item[aria-expanded='true'] > .row > .toggle .icon {
  transform: rotate(90deg);
}

.toggle.leaf {
  cursor: default;
}

.vt:not([data-syntax-theme]) .key {
  color: var(--_syntax-attr);
}

.vt:not([data-syntax-theme]) .index {
  color: var(--_syntax-meta);
}

.vt:not([data-syntax-theme]) .punct {
  color: var(--_syntax-meta);
}

.row > .value.string,
.row > .value-wrap {
  flex: 0 1 auto;
  min-width: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.vt:not([data-syntax-theme]) .value.string {
  color: var(--_syntax-string);
}

.vt:not([data-syntax-theme]) .value.number {
  color: var(--_syntax-number);
}

.vt:not([data-syntax-theme]) .value.literal {
  color: var(--_syntax-keyword);
}

/* Dates and times of formats that have them (TOML). */
.vt:not([data-syntax-theme]) .value.date {
  color: var(--_syntax-type);
}

.count {
  margin-left: var(--_space-2);
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}

.type {
  margin-left: var(--_space-2);
  padding: 0 5px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
  line-height: 1.5;
}

.inline-more,
.more-label {
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}

.inline-more {
  margin-left: var(--_space-2);
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_accent-fg);
  cursor: pointer;
}

.more-item > .row {
  cursor: pointer;
}

.more-label {
  color: var(--_accent-fg);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ---------- Path bar ---------- */

.pathbar {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 36px;
  padding: 0 var(--_space-2) 0 var(--_space-3);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
}

.path-text {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* With a syntax theme, badges and counts take the colors of the code area. */
.vt[data-syntax-theme] .count {
  color: color-mix(in srgb, var(--_code-fg) 80%, var(--_code-bg-solid));
}

.vt[data-syntax-theme] .type {
  border-color: color-mix(in srgb, var(--_code-fg) 30%, transparent);
  background: transparent;
  color: color-mix(in srgb, var(--_code-fg) 80%, var(--_code-bg-solid));
}
`;export{r as a};
//# sourceMappingURL=chunk-QXIEPLJY.js.map
