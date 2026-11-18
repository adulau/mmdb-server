/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
var o=`/*
 * Shared by the elements that show a preview of JSON: the body, the editor above it, and the
 * small pieces they have in common.
 */
.data-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4) var(--_space-5);
  background: var(--_surface);
  container-type: inline-size;
  overscroll-behavior: auto;
}

:host([max-height]) .data-body,
.vt[data-fullscreen] .data-body {
  overscroll-behavior: contain;
}

.data-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}

.data-none {
  margin: 0;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
}

.data-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
}

.data-chip {
  min-height: 28px;
  padding: 2px 10px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-small) / 1.4 var(--_font-ui);
  cursor: pointer;
}

.data-chip:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.data-chip[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  color: var(--_fg);
}

.data-chip:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.data-input {
  width: 100%;
  min-height: 36px;
  padding: 0 var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.data-input:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

@media (pointer: coarse) {
  .data-chip {
    min-height: 44px;
  }
}
`;export{o as a};
//# sourceMappingURL=chunk-3FW46UG7.js.map
