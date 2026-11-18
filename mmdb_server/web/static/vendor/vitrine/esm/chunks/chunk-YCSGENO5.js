/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
var i=`/*
 * Code view: used by <vt-code>, the Markdown source tab and the JSON raw view.
 */
.code-view {
  position: relative;
}

.code {
  display: grid;
  width: max-content;
  min-width: 100%;
  margin: 0;
  padding: var(--_space-3) 0;
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  font-variant-ligatures: var(--vt-font-ligatures, none);
  line-height: var(--_line-height);
  tab-size: var(--_tab-size);
}

.wrap .code {
  width: auto;
}

.line {
  display: flex;
  min-width: 0;
}

/* Long code: off-screen blocks of lines skip layout and paint. */
.chunk.revealed {
  content-visibility: visible;
}

.chunk {
  display: block;
  content-visibility: auto;
  contain-intrinsic-block-size: auto
    calc(var(--_chunk-lines) * var(--_font-size) * var(--_line-height));
}

/* A block whose lines are not built yet keeps the height they will take. */
.chunk[data-pending] {
  block-size: calc(var(--_chunk-lines) * var(--_font-size) * var(--_line-height));
}

.gutter {
  position: sticky;
  left: 0;
  z-index: 1;
  flex: none;
  min-width: calc(var(--_digits, 2) * 1ch + 2 * var(--_space-3));
  padding: 0 var(--_space-3);
  border-right: 1px solid color-mix(in srgb, var(--_code-gutter) 35%, transparent);
  background: var(--_code-bg-solid);
  color: var(--_code-gutter);
  font-size: var(--_font-size-small);
  line-height: calc(var(--_font-size) * var(--_line-height));
  font-variant-numeric: tabular-nums;
  text-align: right;
  user-select: none;
  -webkit-user-select: none;
}

.gutter::before {
  content: attr(data-n);
}

.sign {
  flex: none;
  width: 2ch;
  padding-left: var(--_space-2);
  color: var(--_fg-muted);
  user-select: none;
  -webkit-user-select: none;
}

.content {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0 var(--_space-4);
  white-space: pre;
}

.sign + .content {
  padding-left: var(--_space-1);
}

.wrap .content {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.line.highlighted {
  background: var(--_line-highlight);
}

.line.highlighted .gutter {
  box-shadow: inset 2px 0 0 var(--_accent);
  color: var(--_code-fg);
}

.line.added {
  background: var(--_diff-added);
}

.line.removed {
  background: var(--_diff-removed);
}

.line.added .sign::before {
  content: '+';
  color: var(--_success);
}

.line.removed .sign::before {
  content: '\\2212';
  color: var(--_danger);
}

.line.hunk .content {
  color: var(--_info);
}

/* Collapsible: show the first N lines, fade the rest. */
.collapsed .code {
  max-height: calc(
    (var(--_collapse-lines) + 0.6) * var(--_font-size) * var(--_line-height) + var(--_space-3)
  );
  overflow: hidden;
}

.collapsed .code-view::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: calc(0.9 * var(--_font-size) * var(--_line-height));
  background: linear-gradient(transparent, var(--_code-bg-solid));
  pointer-events: none;
}

.more {
  display: flex;
  justify-content: center;
  padding: var(--_space-2);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
}

/* ---------- Editor: a transparent textarea laid over the highlighted code ---------- */

.editor {
  position: relative;
  width: max-content;
  min-width: 100%;
}

.editor.wrap {
  width: auto;
}

.editor-layer {
  pointer-events: none;
}

/* Bold or italic tokens can shift characters in some fonts: keep the layer regular. */
.editor-layer .code * {
  font-style: inherit !important;
  font-weight: inherit !important;
}

/* An empty last line still needs its height under the caret. */
.editor-layer .content:empty::before {
  content: '\\200b';
}

.editor-input {
  position: absolute;
  top: 0;
  left: var(--_editor-gutter, 0px);
  width: calc(100% - var(--_editor-gutter, 0px));
  height: 100%;
  margin: 0;
  padding: var(--_space-3) var(--_space-4);
  overflow: hidden;
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  -webkit-text-fill-color: transparent;
  caret-color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  font-variant-ligatures: var(--vt-font-ligatures, none);
  line-height: var(--_line-height);
  tab-size: var(--_tab-size);
  white-space: pre;
  overflow-wrap: normal;
  resize: none;
}

.editor.wrap .editor-input {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.editor-input::selection {
  background: color-mix(in srgb, var(--_accent) 32%, transparent);
}

.editor-input::placeholder {
  color: var(--_fg-muted);
  -webkit-text-fill-color: var(--_fg-muted);
  opacity: 1;
}

/* Long text: plain text while typing, highlighting after a pause. */
.editor.pending .editor-input {
  color: var(--_fg);
  -webkit-text-fill-color: var(--_fg);
}

.editor.pending .editor-layer .content {
  visibility: hidden;
}

.body:has(.editor-input:focus) {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.edit-status {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-2) var(--_space-3);
  border-top: 1px solid var(--_border);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}

.edit-status.ok {
  color: var(--_success);
}

.edit-status.bad {
  color: var(--_danger);
}

.edit-status .icon {
  width: 14px;
  height: 14px;
  flex: none;
}
`;export{i as a};
//# sourceMappingURL=chunk-YCSGENO5.js.map
