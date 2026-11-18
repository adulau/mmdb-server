/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
var r=`/*
 * Form field: a label row, the control, a hint and a counter, and the error. The frame of
 * the other elements is not drawn: a field sits in a form like a native one.
 */
:host {
  margin-block: var(--vt-margin, 0 var(--_space-4));
}

.vt {
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
}

/* A theme set on the element is drawn on its own background, so its text stays readable on any page. */
:host([theme]:not([theme='auto'])) .vt {
  padding: var(--_space-2);
  background: var(--_surface);
  border-radius: var(--_radius-sm);
}

.field {
  position: relative;
  display: grid;
  gap: var(--_space-1);
  min-width: 0;
  color: var(--_fg);
  font: 400 14px / 1.45 var(--_font-ui);
}

.field-top {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
  min-width: 0;
}

.field-label {
  color: var(--_fg);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.field-required {
  margin-left: 2px;
  color: var(--_danger);
}

.field-optional {
  margin-left: var(--_space-2);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 400;
}

/* ---------- Help ---------- */

.field-tip-button,
.field-icon-button {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg-muted);
  cursor: pointer;
}

.field-tip-button .icon,
.field-icon-button .icon {
  width: 16px;
  height: 16px;
}

.field-tip-button:hover,
.field-tip-button[aria-expanded='true'],
.field-icon-button:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.field-tip-button:focus-visible,
.field-icon-button:focus-visible,
.field-tip-close:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.field-tip {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border);
  border-left: 3px solid var(--_accent);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  font-size: var(--_font-size-ui);
}

.field-tip p {
  flex: 1;
  margin: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.field-tip-close {
  flex: none;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg-muted);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}

/* ---------- Text inputs ---------- */

.field-box {
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 40px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
}

.field-box:focus-within {
  border-color: var(--_accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_accent) 35%, transparent);
}

.has-error .field-box,
.field:has(.field-error:not(:empty)) .field-box {
  border-color: var(--_danger);
}

.field-input {
  flex: 1;
  min-width: 0;
  min-height: 38px;
  padding: 0 var(--_space-3);
  border: 0;
  background: transparent;
  color: var(--_fg);
  font: inherit;
  outline: none;
}

textarea.field-input {
  min-height: 80px;
  max-height: 400px;
  padding: var(--_space-2) var(--_space-3);
  resize: vertical;
}

.field-input[type='color'] {
  min-width: 64px;
  padding: 4px;
}

.field-input[type='range'] {
  accent-color: var(--_accent);
}

.field-input::placeholder {
  color: var(--_fg-muted);
  opacity: 0.8;
}

.field-prefix,
.field-suffix,
.field-output {
  flex: none;
  padding: 0 var(--_space-2);
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.field-prefix {
  padding-left: var(--_space-3);
}

.field-icon-button {
  margin-right: 4px;
}

.disabled .field-box,
.disabled .field-trigger {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ---------- Hint, counter, error ---------- */

.field-meta {
  display: flex;
  justify-content: space-between;
  gap: var(--_space-3);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.field-meta:empty,
.field-meta:has(> span:only-child:empty) {
  display: none;
}

.field-hint {
  margin: 0;
  overflow-wrap: anywhere;
}

.field-counter {
  flex: none;
  margin-left: auto;
  font-variant-numeric: tabular-nums;
}

.field-counter.near {
  color: var(--_warning);
  font-weight: 600;
}

.field-error {
  margin: 0;
  color: var(--_danger);
  font-size: var(--_font-size-ui);
  font-weight: 500;
}

.field-error:empty {
  display: none;
}

/* ---------- Check box and switch ---------- */

.field-check {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
}

.field-check-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 32px;
  cursor: pointer;
}

.field-check-input,
.field-choice input {
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--_accent-fg);
}

.field-check-input:focus-visible,
.field-choice input:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.field-switch-input {
  position: absolute;
  width: 40px;
  height: 22px;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.field-switch {
  position: relative;
  flex: none;
  width: 40px;
  height: 22px;
  border-radius: var(--_radius-full);
  background: var(--_border-strong);
  transition: background 120ms ease;
}

.field-switch::after {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: var(--_radius-full);
  background: var(--_surface);
  content: '';
  transition: transform 120ms ease;
}

.field-switch-input:checked + .field-switch {
  background: var(--_accent);
}

.field-switch-input:checked + .field-switch::after {
  transform: translateX(18px);
}

.field-switch-input:focus-visible + .field-switch {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.field-switch-state {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Radio buttons and check boxes ---------- */

.field-choices {
  display: grid;
  gap: var(--_space-1);
}

.field-choice {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  padding: var(--_space-1) 0;
  cursor: pointer;
}

.field-choice input {
  flex: none;
  margin-top: 2px;
}

.field-choice.disabled {
  color: var(--_fg-muted);
  cursor: not-allowed;
}

.field-choice-text,
.field-option-text {
  display: grid;
  min-width: 0;
  overflow-wrap: anywhere;
}

.field-option-note {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- List ---------- */

.field-list {
  position: relative;
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.field-trigger {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2);
  min-width: 0;
  min-height: 38px;
  padding: 0 var(--_space-3);
  border: 0;
  background: transparent;
  color: var(--_fg);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.field-trigger:focus-visible {
  outline: none;
}

.field-trigger.empty .field-trigger-text {
  color: var(--_fg-muted);
}

.field-trigger-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.field-trigger .icon {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
}

.field-popup {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  z-index: 20;
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  box-shadow: 0 8px 24px rgb(0 0 0 / 14%);
}

.field-listbox {
  max-height: 260px;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;
  outline: none;
}

.field-listbox:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.field-group {
  padding: var(--_space-2) var(--_space-2) 2px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.field-option {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  padding: 6px var(--_space-2);
  border-radius: 4px;
  cursor: pointer;
}

.field-option.active {
  background: var(--_accent-soft);
}

.field-option.disabled {
  color: var(--_fg-muted);
  cursor: not-allowed;
}

.field-check-mark {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 16px;
  height: 20px;
  color: var(--_accent-fg);
}

.field-check-mark .icon {
  width: 16px;
  height: 16px;
}

.field-empty {
  padding: var(--_space-2);
  color: var(--_fg-muted);
}

.field-list-actions {
  display: flex;
  justify-content: space-between;
  gap: var(--_space-2);
  padding-top: var(--_space-2);
  border-top: 1px solid var(--_border);
}

.field-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.field-chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 4px 2px 10px;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_fg);
  font-size: var(--_font-size-ui);
}

.field-chip button {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg-muted);
  cursor: pointer;
}

.field-chip button:hover {
  background: color-mix(in srgb, var(--_fg) 10%, transparent);
  color: var(--_fg);
}

.field-chip button:focus-visible {
  outline: 2px solid var(--_accent);
}

.field-chip .icon {
  width: 14px;
  height: 14px;
}

@media (pointer: coarse) {
  .field-tip-button,
  .field-icon-button {
    width: 44px;
    height: 44px;
  }

  .field-option {
    padding-block: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .field-switch,
  .field-switch::after {
    transition: none;
  }
}
`;export{r as a};
//# sourceMappingURL=chunk-MHTQX5EH.js.map
