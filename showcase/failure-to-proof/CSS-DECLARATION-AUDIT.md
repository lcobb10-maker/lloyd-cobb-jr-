# Failure → Proof — CSS Rule and Declaration Audit

CSSOM rule-level audit of the assembled experience. Complements the source line audit. Third-party font CSS excluded.
Generated: 2026-11-13T12:19:50.363864+00:00
Rules: 289; properties: 2633; overlapping values: 20; unmatched at first view: 7.

## Actionable findings

- FIXED: selected CSS used [aria-current=true] despite accessible value aria-current=step. Now selectors agree.
- FIXED: low contrast numbers in mobile mission navigation; axe WCAG 2A/2AA retest reports no violations in four tested states.
- Duplicated declarations largely represent intentionally ordered visual refinements and browser-expanded background shorthands; do not blindly delete.
- Nonmatching selectors can be legitimate dynamic and media states; require interaction or breakpoint tests before deletion.
- Safari and human screen-reader verification remain open.

## Every CSSOM rule and expanded declaration

### Rule 1: `:root`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `--bg` | `#070a0d` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--cream` | `#f4f1e9` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--muted` | `#9aadb7` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--dim` | `#70838c` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--gold` | `#ffcc8f` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--teal` | `#7de0d3` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--red` | `#ff887d` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--surface` | `#0e1820` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `--edge` | `#334553` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 2: `*`
Media: global; first-view DOM matches: 209; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `box-sizing` | `border-box` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 3: `html`
Media: global; first-view DOM matches: 1; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `scroll-behavior` | `smooth` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 4: `body`
Media: global; first-view DOM matches: 1; property count: 25

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `var(--cream)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `14px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.6` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"DM Sans", system-ui, sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `overflow-x` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 5: `button, a`
Media: global; first-view DOM matches: 18; property count: 19

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `inherit` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 6: `button`
Media: global; first-view DOM matches: 16; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `cursor` | `pointer` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 7: `a`
Media: global; first-view DOM matches: 2; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `inherit` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `text-decoration-line` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `text-decoration-thickness` | `initial` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `text-decoration-style` | `initial` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `text-decoration-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 8: `:focus-visible`
Media: global; first-view DOM matches: 0; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `outline-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `outline-style` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `outline-width` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `outline-offset` | `4px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 9: `.shell`
Media: global; first-view DOM matches: 1; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `max-width` | `1650px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `100vh` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `clamp(16px, 4.3vw, 73px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `clamp(16px, 4.3vw, 73px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 10: `.mast`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `100px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(57, 80, 93, 0.267)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 11: `.identity`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 12: `.identity b`
Media: global; first-view DOM matches: 1; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `14px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.17em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 13: `.identity small`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(145, 167, 177)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `letter-spacing` | `0.22em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 14: `.emblem`
Media: global; first-view DOM matches: 1; property count: 43

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `48px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `48px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgba(197, 164, 122, 0.54)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgba(197, 164, 122, 0.54)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(197, 164, 122, 0.54)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgba(197, 164, 122, 0.54)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `30px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(230, 193, 142)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `position` | `relative` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 15: `.emblem span`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `right` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 16: `.build-status`
Media: global; first-view DOM matches: 1; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.11em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(176, 198, 195)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 17: `.build-status i, .pulse`
Media: global; first-view DOM matches: 2; property count: 17

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `inline-block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgb(106, 227, 195) 0px 0px 16px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 18: `.site-link`
Media: global; first-view DOM matches: 1; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(123, 136, 144)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-bottom` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.1em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 19: `.site-link span`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 20: `.intro`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `clamp(42px, 6vw, 95px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `36px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `position` | `relative` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 21: `.eyebrow, .section-kicker`
Media: global; first-view DOM matches: 4; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.2em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 22: `.eyebrow`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 23: `.eyebrow .orbit`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `var(--teal)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `18px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 24: `.slash`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(100, 121, 135)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 25: `.intro h1`
Media: global; first-view DOM matches: 1; property count: 25

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `clamp(42px, 6.6vw, 112px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `0.99` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `-0.072em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-top` | `22px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `21px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `max-width` | `1350px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 26: `.intro h1 em`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 27: `.intro > p`
Media: global; first-view DOM matches: 1; property count: 8

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `clamp(13px, 1.15vw, 18px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `max-width` | `770px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(185, 199, 202)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `margin-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `line-height` | `1.7` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 28: `.intro-footer`
Media: global; first-view DOM matches: 1; property count: 12

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-wrap` | `wrap` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.15em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(133, 157, 169)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `margin-top` | `39px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 29: `.intro-footer .pulse`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-right` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 30: `.experience`
Media: global; first-view DOM matches: 1; property count: 28

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(64, 86, 101)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(64, 86, 101)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(64, 86, 101)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(64, 86, 101)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(8, 17, 27)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.6) 0px 20px 80px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `position` | `relative` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 31: `.experience-toolbar`
Media: global; first-view DOM matches: 1; property count: 22

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `76px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `25px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `25px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(64, 84, 96)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(13, 28, 40)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 32: `.exp-label`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-wrap` | `wrap` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 33: `.exp-label > span`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.12em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(185, 197, 205)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 34: `.exp-label b`
Media: global; first-view DOM matches: 1; property count: 20

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `20px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 35: `.tracking`
Media: global; first-view DOM matches: 1; property count: 25

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.1em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(182, 197, 200)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 36: `.progress-rail`
Media: global; first-view DOM matches: 1; property count: 12

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(51, 70, 82)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `width` | `110px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 37: `.progress-rail span`
Media: global; first-view DOM matches: 1; property count: 17

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `width` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `transition-behavior` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-duration` | `0.35s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-timing-function` | `ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-property` | `width` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 38: `.simulation-stage`
Media: global; first-view DOM matches: 1; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `clamp(340px, 41vw, 615px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `position` | `relative` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-x` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-y` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `radial-gradient(at 57% 47%, rgb(39, 67, 86), rgb(8, 14, 21) 73%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `isolation` | `isolate` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 39: `.stage-fog`
Media: global; first-view DOM matches: 1; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `-30%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `-30%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `-30%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `-30%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `radial-gradient(at 45% 52%, rgba(126, 175, 187, 0.106), transparent 50%), radial-gradient(at 65% 17%, rgba(218, 183, ...` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `filter` | `blur(10px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `pointer-events` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 40: `.stage-grid`
Media: global; first-view DOM matches: 1; property count: 11

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(rgba(157, 190, 206, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(157, 190, 206, 0.09) 1px...` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `46px 46px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `perspective(650px) rotateX(63deg) scale(2.9)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transform-origin` | `center bottom` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `mask-image` | `linear-gradient(transparent 3%, black 100%)` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `pointer-events` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 41: `.stage-grid::after`
Media: global; first-view DOM matches: 0; property count: 15

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `content` | `""` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(transparent, rgba(232, 193, 139, 0.07), transparent)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 42: `.left-stage-label, .right-stage-label`
Media: global; first-view DOM matches: 2; property count: 24

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `z-index` | `5` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.18em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(198, 215, 215)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `top` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 43: `.left-stage-label`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `left` | `24px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 44: `.right-stage-label`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `right` | `24px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `var(--teal)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 45: `.scene-container`
Media: global; first-view DOM matches: 1; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `min(75%, 890px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `90%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `50%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `50%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `transform` | `translate(-50%, -48%)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `perspective` | `1450px` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 46: `.glass-browser`
Media: global; first-view DOM matches: 1; property count: 38

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `79%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `5%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(11, 25, 36)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgba(131, 164, 181, 0.36)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgba(131, 164, 181, 0.36)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(131, 164, 181, 0.36)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgba(131, 164, 181, 0.36)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `rotateY(-10deg) rotateX(4deg)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transform-style` | `preserve-3d` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.6) 40px 45px 65px, rgba(144, 199, 206, 0.07) 0px 0px 65px, rgb(60, 84, 102) 0px 15px 0px -8px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transition-behavior` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-duration` | `0.55s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-timing-function` | `ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-property` | `box-shadow` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 47: `.glass-browser.fixed`
Media: global; first-view DOM matches: 0; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `box-shadow` | `rgba(0, 0, 0, 0.6) 25px 35px 65px, rgba(112, 238, 208, 0.255) 0px 0px 70px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |

### Rule 48: `.browser-chrome`
Media: global; first-view DOM matches: 1; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `36px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(rgb(38, 55, 71), rgb(21, 35, 48))` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(81, 107, 124)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 49: `.dots`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 50: `.dots i`
Media: global; first-view DOM matches: 3; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(213, 141, 132)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `width` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `inline-block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 51: `.dots i:nth-child(2)`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(225, 182, 119)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 52: `.dots i:nth-child(3)`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(137, 215, 186)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 53: `.address`
Media: global; first-view DOM matches: 1; property count: 62

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `flex-grow` | `1` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-shrink` | `1` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-basis` | `0%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(65, 90, 108)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(65, 90, 108)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(65, 90, 108)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(65, 90, 108)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(13, 23, 33)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-left-radius` | `3px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-right-radius` | `3px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-right-radius` | `3px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-left-radius` | `3px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(196, 213, 217)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `padding-top` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-x` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-y` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `text-overflow` | `ellipsis` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `white-space-collapse` | `collapse` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `text-wrap-mode` | `nowrap` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 54: `.padlock`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(185, 208, 214)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `letter-spacing` | `0.08em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 55: `.browser-content`
Media: global; first-view DOM matches: 1; property count: 13

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `calc(100% - 36px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(140deg, rgb(35, 55, 71), rgb(20, 38, 52))` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `position` | `relative` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-x` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-y` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 56: `.browser-brand`
Media: global; first-view DOM matches: 1; property count: 15

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `43px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.17em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(113, 138, 154, 0.15)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 57: `.logo-box`
Media: global; first-view DOM matches: 1; property count: 20

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `18px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 58: `.no-real`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-left` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(207, 180, 137)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 59: `.visual-scene`
Media: global; first-view DOM matches: 1; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `relative` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `calc(100% - 91px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-x` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `overflow-y` | `hidden` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `radial-gradient(at 45% 50%, rgb(52, 84, 107), rgb(7, 21, 34) 74%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 60: `.visual-scene .shine`
Media: global; first-view DOM matches: 1; property count: 24

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `90%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `180%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(95deg, transparent, rgba(151, 195, 213, 0.08), transparent)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `rotate(21deg) translate(-45%, 0px)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-duration` | `7s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timing-function` | `ease-in-out` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-iteration-count` | `infinite` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-direction` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-fill-mode` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-play-state` | `running` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-name` | `scan` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timeline` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-start` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-end` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 61: `.visual-orb`
Media: global; first-view DOM matches: 1; property count: 11

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `min(29vw, 300px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `min(29vw, 300px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `left` | `11%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `20%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `filter` | `drop-shadow(rgba(140, 211, 240, 0.2) 0px 0px 38px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform-style` | `preserve-3d` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 62: `.orb-core`
Media: global; first-view DOM matches: 1; property count: 19

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `16%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `16%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `16%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `16%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `radial-gradient(circle at 25% 24%, rgb(184, 207, 214), rgb(49, 90, 116) 40%, rgb(9, 32, 45) 77%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.667) -19px -18px 35px inset, rgba(255, 223, 166, 0.14) 13px 12px 23px inset` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 63: `.orb-ring`
Media: global; first-view DOM matches: 1; property count: 39

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-right-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-left-radius` | `50%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `2px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `2px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `2px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `2px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgba(219, 189, 137, 0.467)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgba(219, 189, 137, 0.467)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(219, 189, 137, 0.467)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgba(219, 189, 137, 0.467)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `rotateX(63deg) rotateY(20deg)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `box-shadow` | `rgba(212, 185, 133, 0.22) 0px 0px 22px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `animation-duration` | `9s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timing-function` | `linear` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-iteration-count` | `infinite` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-direction` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-fill-mode` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-play-state` | `running` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-name` | `orbit` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timeline` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-start` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-end` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 64: `.film-beam`
Media: global; first-view DOM matches: 1; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `-13%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `9%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `110%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `20%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(90deg, transparent, rgba(157, 189, 203, 0.19), transparent)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `skewX(-25deg)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `filter` | `blur(6px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 65: `.plate-small`
Media: global; first-view DOM matches: 1; property count: 36

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `20%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `7%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `44%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgba(6, 19, 31, 0.87)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgba(185, 191, 190, 0.42)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgba(185, 191, 190, 0.42)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(185, 191, 190, 0.42)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgba(185, 191, 190, 0.42)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.6) 0px 20px 60px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `backdrop-filter` | `blur(8px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 66: `.plate-small span`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.2em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 67: `.plate-small strong`
Media: global; first-view DOM matches: 1; property count: 26

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `clamp(32px, 4.5vw, 68px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.1` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(245, 233, 214)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `letter-spacing` | `-0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 68: `.plate-small small`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(196, 212, 219)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 69: `.browser-foot`
Media: global; first-view DOM matches: 1; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `48px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(11, 26, 36)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgba(155, 180, 190, 0.15)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 70: `.foot-line`
Media: global; first-view DOM matches: 2; property count: 11

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(78, 96, 112)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `height` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `28%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 71: `.foot-line.short`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `14%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 72: `.foot-button`
Media: global; first-view DOM matches: 1; property count: 18

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-left` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(218, 185, 137)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(22, 32, 42)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 73: `.artifact`
Media: global; first-view DOM matches: 2; property count: 37

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgba(13, 30, 44, 0.85)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `backdrop-filter` | `blur(10px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(97, 128, 143)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(97, 128, 143)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(97, 128, 143)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(97, 128, 143)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `3px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `3px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-width` | `124px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.533) 0px 12px 30px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 74: `.artifact span`
Media: global; first-view DOM matches: 2; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.14em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(181, 206, 216)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 75: `.artifact strong`
Media: global; first-view DOM matches: 2; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 76: `.artifact-top`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `left` | `-5%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `12%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 77: `.artifact-bottom`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `right` | `-7%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `20%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 78: `.artifact-bottom strong`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `var(--red)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 79: `.mission-callout`
Media: global; first-view DOM matches: 1; property count: 24

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `4` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `19px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `23px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `23px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-left-width` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgba(9, 23, 36, 0.85)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `backdrop-filter` | `blur(15px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `max-width` | `510px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.533) 0px 8px 25px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 80: `.callout-overline`
Media: global; first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.16em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-bottom` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 81: `.mission-callout strong`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `16px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--cream)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 82: `.mission-callout p`
Media: global; first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(192, 211, 218)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `margin-top` | `3px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 83: `.interaction`
Media: global; first-view DOM matches: 1; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `clamp(18px, 3vw, 39px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `clamp(18px, 3vw, 39px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `clamp(18px, 3vw, 39px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `clamp(18px, 3vw, 39px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(125deg, rgb(14, 29, 41), rgb(10, 21, 33))` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(70, 91, 104)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 84: `.interaction-top`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `flex-start` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `24px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `24px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 85: `.interaction-top h2`
Media: global; first-view DOM matches: 1; property count: 24

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `600` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `clamp(23px, 3vw, 39px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.16` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `-0.035em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-top` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 86: `.interaction-top p`
Media: global; first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `13px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(178, 200, 205)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `margin-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 87: `.timer`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 88: `.timer span`
Media: global; first-view DOM matches: 1; property count: 20

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `53px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(232, 195, 143)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 89: `.timer small`
Media: global; first-view DOM matches: 1; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.5` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.11em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(172, 193, 199)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 90: `.choices`
Media: global; first-view DOM matches: 1; property count: 8

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `grid-template-columns` | `repeat(3, minmax(0px, 1fr))` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `25px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 91: `.choices button`
Media: global; first-view DOM matches: 3; property count: 61

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `min-height` | `87px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `text-align` | `left` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `padding-top` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(88, 113, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(88, 113, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(88, 113, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(88, 113, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(22, 44, 58)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(233, 241, 237)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `13px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `transition-behavior` | `normal, normal, normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-duration` | `0.18s, 0.18s, 0.18s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-timing-function` | `ease, ease, ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-delay` | `0s, 0s, 0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-property` | `background, border-color, transform` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 92: `.choices button span`
Media: global; first-view DOM matches: 3; property count: 27

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(119, 139, 151)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(119, 139, 151)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(119, 139, 151)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(119, 139, 151)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `width` | `27px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `27px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-grow` | `0` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-shrink` | `0` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-basis` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 93: `.choices button:hover`
Media: global; first-view DOM matches: 0; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(32, 61, 76)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `translateY(-2px)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 94: `.choices button[aria-pressed="true"]`
Media: global; first-view DOM matches: 0; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(48, 70, 79)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgb(228, 190, 143) 0px 0px 0px 1px inset` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 95: `.choices button[aria-pressed="true"] span`
Media: global; first-view DOM matches: 0; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(25, 36, 46)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 96: `.feedback`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `min-height` | `27px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(184, 203, 208)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 97: `.feedback.warn`
Media: global; first-view DOM matches: 0; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(255, 192, 170)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |

### Rule 98: `.feedback.good`
Media: global; first-view DOM matches: 0; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(158, 230, 206)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |

### Rule 99: `.action-bar`
Media: global; first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-wrap` | `wrap` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 100: `.button-primary, .button-secondary, .button-proof`
Media: global; first-view DOM matches: 7; property count: 57

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `min-height` | `48px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.09em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(214, 181, 133)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(214, 181, 133)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(214, 181, 133)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(214, 181, 133)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(20, 34, 46)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `inline-flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 101: `.button-primary:disabled`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `opacity` | `0.45` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `cursor` | `not-allowed` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 102: `.button-secondary`
Media: global; first-view DOM matches: 2; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `transparent` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(103, 132, 146)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(103, 132, 146)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(103, 132, 146)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(103, 132, 146)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(214, 229, 227)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 103: `.outcome`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(73, 101, 116)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `22px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `24px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 104: `.outcome[hidden], .conclusion[hidden]`
Media: global; first-view DOM matches: 2; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `none` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 105: `.outcome-header`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 106: `.outcome-header #outcomeBadge`
Media: global; first-view DOM matches: 1; property count: 24

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(255, 207, 150)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(182, 148, 112)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(182, 148, 112)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(182, 148, 112)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(182, 148, 112)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.1em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 107: `.outcome > p`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `13px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(197, 214, 218)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 108: `.outcome-steps`
Media: global; first-view DOM matches: 1; property count: 8

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `grid-template-columns` | `repeat(3, minmax(0px, 1fr))` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 109: `.outcome-steps > div`
Media: global; first-view DOM matches: 3; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-left-width` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(20, 40, 54)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 110: `.outcome-steps > div:nth-child(1)`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 111: `.outcome-steps > div:nth-child(2)`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 112: `.outcome-steps span`
Media: global; first-view DOM matches: 3; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `21px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 113: `.outcome-steps strong`
Media: global; first-view DOM matches: 3; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.13em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-top` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 114: `.outcome-steps p`
Media: global; first-view DOM matches: 3; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(192, 210, 216)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `margin-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `line-height` | `1.6` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 115: `.button-proof`
Media: global; first-view DOM matches: 2; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(23, 46, 59)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(202, 239, 228)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(119, 203, 181)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(119, 203, 181)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(119, 203, 181)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(119, 203, 181)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 116: `.button-proof:disabled`
Media: global; first-view DOM matches: 0; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `opacity` | `0.6` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `cursor` | `wait` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 117: `#testStatus`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(161, 219, 211)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-top` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 118: `.mission-selector`
Media: global; first-view DOM matches: 1; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `grid-template-columns` | `repeat(3, minmax(0px, 1fr))` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(64, 85, 102)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(16, 34, 48)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 119: `.mission-selector button`
Media: global; first-view DOM matches: 3; property count: 37

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `transparent` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(64, 85, 102)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `min-height` | `97px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `22px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `22px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `text-align` | `left` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(208, 218, 221)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 120: `.mission-selector button:last-child`
Media: global; first-view DOM matches: 1; property count: 17

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `0px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `currentcolor` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 121: `.mission-selector button[aria-current="step"]`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(27, 56, 70)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 122: `.mission-selector b`
Media: global; first-view DOM matches: 3; property count: 20

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `36px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(166, 187, 198)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 123: `.mission-selector button[aria-current="step"] b, .mission-selector button.complete b`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 124: `.mission-selector button.complete b`
Media: global; first-view DOM matches: 0; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `var(--teal)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 125: `.mission-selector strong`
Media: global; first-view DOM matches: 3; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 126: `.mission-selector small`
Media: global; first-view DOM matches: 3; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(173, 193, 200)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `margin-top` | `3px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 127: `.conclusion`
Media: global; first-view DOM matches: 1; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `text-align` | `center` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `padding-top` | `clamp(55px, 9vw, 118px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `25px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `85px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `25px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `radial-gradient(rgb(22, 45, 55), rgb(7, 11, 14) 75%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 128: `.conclusion-icon`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `44px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 129: `.conclusion h2`
Media: global; first-view DOM matches: 1; property count: 24

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `clamp(33px, 5.4vw, 75px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.05` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `-0.06em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-top` | `15px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 130: `.conclusion h2 em`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 131: `.conclusion > p`
Media: global; first-view DOM matches: 1; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `max-width` | `730px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(192, 211, 214)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `15px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 132: `.conclusion-counters`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `grid-template-columns` | `repeat(3, 1fr)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `max-width` | `820px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `42px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `42px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `auto` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 133: `.conclusion-counters > div`
Media: global; first-view DOM matches: 3; property count: 30

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(73, 96, 107)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(73, 96, 107)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(73, 96, 107)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(73, 96, 107)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(20, 39, 50)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 134: `.conclusion-counters b`
Media: global; first-view DOM matches: 3; property count: 21

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `42px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `Georgia, serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `var(--gold)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 135: `.conclusion-counters span`
Media: global; first-view DOM matches: 3; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.1em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(182, 201, 208)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 136: `.conclusion-actions`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-wrap` | `wrap` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 137: `.footer`
Media: global; first-view DOM matches: 1; property count: 12

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `30px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `30px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-wrap` | `wrap` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(145, 170, 182)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.13em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 138: `.build-status`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `none` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 139: `.intro h1`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `clamp(43px, 8vw, 68px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 140: `.scene-container`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `91%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 141: `.plate-small`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `52%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `2%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 142: `.visual-orb`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `left` | `6%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `30vw` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `30vw` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 143: `.simulation-stage`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `490px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 144: `.choices`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `grid-template-columns` | `1fr` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 145: `.choices button`
Media: (max-width: 800px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `min-height` | `62px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 146: `.outcome-steps`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `grid-template-columns` | `1fr` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 147: `.mission-selector button`
Media: (max-width: 800px); first-view DOM matches: 3; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 148: `.mission-selector b`
Media: (max-width: 800px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `23px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 149: `.mission-selector strong`
Media: (max-width: 800px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 150: `.mission-callout`
Media: (max-width: 800px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `left` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 151: `.shell`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 152: `.mast`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `74px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 153: `.identity b`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 154: `.identity small`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.1em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 155: `.emblem`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `35px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `35px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `22px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 156: `.site-link`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 157: `.intro`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `38px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `22px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 158: `.intro h1`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `clamp(37px, 10.6vw, 60px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.03` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 159: `.intro > p`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `13px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 160: `.intro-footer`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `27px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.7` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 161: `.experience-toolbar`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `min-height` | `67px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 162: `.exp-label`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `row-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 163: `.exp-label > span`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 164: `.exp-label b`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `16px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 165: `.tracking`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `row-gap` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 166: `.tracking .progress-rail`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `38px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 167: `.simulation-stage`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `365px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 168: `.left-stage-label, .right-stage-label`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `7px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `top` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 169: `.left-stage-label`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `left` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 170: `.right-stage-label`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `right` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 171: `.scene-container`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `81%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `47%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `91%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 172: `.glass-browser`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `transform` | `rotateY(-5deg) rotateX(2deg)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `height` | `80%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 173: `.browser-chrome`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `25px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 174: `.browser-content`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `calc(100% - 25px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 175: `.browser-brand`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `31px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 176: `.browser-foot`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `38px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 177: `.visual-scene`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `height` | `calc(100% - 69px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 178: `.visual-orb`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `160px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `160px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `-5%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `10%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 179: `.plate-small`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `top` | `18%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `63%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `3%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 180: `.plate-small strong`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `34px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 181: `.plate-small span, .plate-small small`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 182: `.foot-button`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `7px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `padding-top` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 183: `.artifact`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `min-width` | `69px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 184: `.artifact span`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `6px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 185: `.artifact strong`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 186: `.artifact-top`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `left` | `-1%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `10%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 187: `.artifact-bottom`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `right` | `-2%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `10%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 188: `.mission-callout`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `bottom` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 189: `.callout-overline`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 190: `.mission-callout strong`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 191: `.mission-callout p`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 192: `.interaction`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 193: `.interaction-top h2`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `24px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 194: `.interaction-top p`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 195: `.timer span`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `36px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 196: `.timer small`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `none` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 197: `.choices`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 198: `.choices button`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `padding-top` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 199: `.action-bar button`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 200: `.outcome-header`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `align-items` | `start` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 201: `.outcome-steps`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `row-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 202: `.mission-selector button`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 8

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `4px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `78px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 203: `.mission-selector b`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `20px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 204: `.mission-selector strong`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 205: `.mission-selector small`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 206: `.conclusion-counters`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `row-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 207: `.conclusion-counters b`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `30px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 208: `.conclusion-counters span`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 209: `.conclusion-actions a, .conclusion-actions button`
Media: (max-width: 540px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 210: `*`
Media: (prefers-reduced-motion: reduce); first-view DOM matches: 209; property count: 17

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `animation-duration` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timing-function` | `ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-iteration-count` | `1` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-direction` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-fill-mode` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-play-state` | `running` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-name` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timeline` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-start` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-end` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-behavior` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-duration` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-timing-function` | `ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-property` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `scroll-behavior` | `auto` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 211: `.hero-actions`
Media: global; first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `flex-wrap` | `wrap` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `24px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 212: `.hero-actions button`
Media: global; first-view DOM matches: 2; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 213: `.hero-actions > span`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.1em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(163, 184, 192)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-weight` | `700` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 214: `.hero-actions`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `15px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 215: `.hero-actions button`
Media: (max-width: 540px); first-view DOM matches: 2; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `44px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 216: `.hero-actions > span`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 217: `.intro-footer`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |

### Rule 218: `.intro`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `clamp(32px, 4.5vw, 72px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |
| `padding-bottom` | `26px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |

### Rule 219: `.intro h1`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `clamp(40px, 7.4vw, 108px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | OVERLAP: later CSS override |
| `max-width` | `1280px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |
| `margin-top` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |
| `margin-bottom` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |

### Rule 220: `.intro > p`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `max-width` | `650px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |

### Rule 221: `.hero-actions`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `18px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |

### Rule 222: `.button-watch`
Media: global; first-view DOM matches: 1; property count: 62

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `inline-flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(12, 36, 49)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(241, 209, 163)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(186, 162, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(186, 162, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(186, 162, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(186, 162, 126)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `min-height` | `48px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `transition-behavior` | `normal, normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-duration` | `0.2s, 0.2s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-timing-function` | `ease, ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-delay` | `0s, 0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `transition-property` | `background, box-shadow` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 223: `.button-watch:hover, .button-watch[aria-pressed="true"]`
Media: global; first-view DOM matches: 0; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(41, 73, 90)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgb(241, 200, 137) 0px 0px 0px 1px inset` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 224: `.intro-footer`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | OVERLAP: later CSS override |

### Rule 225: `.simulation-stage`
Media: global; first-view DOM matches: 1; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `radial-gradient(at 64% 32%, rgba(50, 78, 96, 0.667), transparent 39%), radial-gradient(at 25% 110%, rgb(17, 45, 58), ...` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-position-x` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-position-y` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-size` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-repeat` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-attachment` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-origin` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-clip` | `initial, initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: identical |

### Rule 226: `.visual-orb`
Media: global; first-view DOM matches: 1; property count: 13

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `perspective` | `800px` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `filter` | `drop-shadow(rgba(142, 211, 243, 0.24) 0px 0px 50px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | OVERLAP: later CSS override |
| `animation-duration` | `6.3s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timing-function` | `ease-in-out` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-iteration-count` | `infinite` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-direction` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-fill-mode` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-play-state` | `running` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-name` | `float-object` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timeline` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-start` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-end` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 227: `.visual-orb .orb-core`
Media: global; first-view DOM matches: 1; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `radial-gradient(circle at 25% 24%, rgb(208, 232, 233), rgb(65, 102, 125) 37%, rgb(8, 29, 44) 75%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.667) -19px -18px 35px inset, rgba(255, 223, 166, 0.14) 13px 12px 23px inset, rgba(154, 193, 204, 0.2)...` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 228: `.mission-glyph`
Media: global; first-view DOM matches: 1; property count: 31

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `z-index` | `2` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `align-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-items` | `center` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `600` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `clamp(36px, 6.8vw, 99px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(244, 229, 198)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `text-shadow` | `rgba(0, 0, 0, 0.733) 0px 5px 24px, rgba(230, 197, 139, 0.4) 0px 0px 17px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `transform` | `translateZ(38px)` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 229: `.visual-scene[data-mission="trust"] .orb-core`
Media: global; first-view DOM matches: 0; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `radial-gradient(circle at 25% 24%, rgb(199, 211, 239), rgb(74, 103, 135) 37%, rgb(17, 31, 64) 75%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 230: `.visual-scene[data-mission="lead"] .orb-core`
Media: global; first-view DOM matches: 0; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `radial-gradient(circle at 25% 24%, rgb(212, 234, 223), rgb(69, 110, 101) 37%, rgb(8, 30, 37) 75%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 231: `.repaired .visual-orb .orb-core`
Media: global; first-view DOM matches: 0; property count: 10

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `radial-gradient(circle at 25% 24%, rgb(219, 255, 242), rgb(61, 131, 117) 37%, rgb(16, 47, 56) 75%)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgba(140, 216, 198, 0.333) 0px 0px 42px, rgba(0, 0, 0, 0.6) -18px -17px 30px inset` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 232: `.repaired .mission-glyph`
Media: global; first-view DOM matches: 0; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(186, 245, 217)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 233: `.director-overlay[hidden], .test-log[hidden], .execution-plan[hidden]`
Media: global; first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `none` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 234: `.director-overlay`
Media: global; first-view DOM matches: 1; property count: 17

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `z-index` | `11` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `background-image` | `linear-gradient(100deg, rgba(2, 7, 12, 0.96) 0%, rgba(7, 18, 28, 0.86) 28%, rgba(3, 8, 17, 0.314) 70%, rgba(3, 8, 17,...` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `pointer-events` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `backdrop-filter` | `blur(1.2px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 235: `.director-top`
Media: global; first-view DOM matches: 1; property count: 29

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `15px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `justify-content` | `space-between` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `color` | `rgb(232, 203, 157)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.15em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 236: `.director-message`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `31%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `clamp(14px, 3vw, 44px)` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `44%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `text-shadow` | `rgba(0, 0, 0, 0.867) 0px 7px 24px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 237: `.director-message b`
Media: global; first-view DOM matches: 1; property count: 22

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `block` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `750` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `clamp(25px, 3.4vw, 52px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.07` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `-0.04em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(246, 234, 215)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 238: `.director-message p`
Media: global; first-view DOM matches: 1; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `clamp(12px, 1.2vw, 16px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(195, 216, 215)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `line-height` | `1.6` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 239: `.director-bar`
Media: global; first-view DOM matches: 1; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(58, 76, 86)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 240: `.director-bar > div`
Media: global; first-view DOM matches: 1; property count: 11

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `background-image` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `width` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `height` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 241: `.director-overlay #directorStop`
Media: global; first-view DOM matches: 1; property count: 37

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `pointer-events` | `auto` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `bottom` | `19px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `19px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(180, 172, 149)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(180, 172, 149)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(180, 172, 149)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(180, 172, 149)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgba(10, 29, 41, 0.91)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(242, 227, 199)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 242: `.test-log`
Media: global; first-view DOM matches: 1; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `list-style-position` | `initial` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `list-style-image` | `initial` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `list-style-type` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 243: `.test-log li`
Media: global; first-view DOM matches: 0; property count: 36

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-top-color` | `rgb(84, 114, 123)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-right-color` | `rgb(84, 114, 123)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-bottom-color` | `rgb(84, 114, 123)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-left-color` | `rgb(84, 114, 123)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `background-color` | `rgb(13, 39, 53)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `display` | `flex` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `align-items` | `start` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `row-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `column-gap` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `padding-top` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `padding-right` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `padding-bottom` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `padding-left` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `color` | `rgb(216, 228, 228)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |

### Rule 244: `.test-log li b`
Media: global; first-view DOM matches: 0; property count: 22

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `letter-spacing` | `0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | CHECK DYNAMIC STATE |
| `color` | `var(--teal)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | CHECK DYNAMIC STATE |
| `min-width` | `38px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |

### Rule 245: `.test-log li[data-result="fail"]`
Media: global; first-view DOM matches: 0; property count: 13

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-color` | `rgb(184, 121, 116)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(184, 121, 116)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(184, 121, 116)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(184, 121, 116)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(48, 33, 43)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 246: `.test-log li[data-result="fail"] b`
Media: global; first-view DOM matches: 0; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(255, 183, 175)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 247: `.execution-plan`
Media: global; first-view DOM matches: 1; property count: 31

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `15px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `17px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(81, 106, 113)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(81, 106, 113)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(81, 106, 113)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(81, 106, 113)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(16, 39, 53)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 248: `.execution-plan > strong`
Media: global; first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(235, 196, 143)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `letter-spacing` | `0.13em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 249: `.plan-grid`
Media: global; first-view DOM matches: 1; property count: 5

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `grid` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `grid-template-columns` | `repeat(3, minmax(0px, 1fr))` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `row-gap` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `column-gap` | `10px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-top` | `12px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 250: `.plan-grid > div`
Media: global; first-view DOM matches: 3; property count: 16

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-width` | `2px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(169, 142, 102)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(22, 46, 57)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 251: `.plan-grid > div:nth-child(2)`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-color` | `rgb(133, 183, 191)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 252: `.plan-grid > div:nth-child(3)`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-color` | `rgb(143, 217, 181)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 253: `.plan-grid b`
Media: global; first-view DOM matches: 3; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `color` | `rgb(229, 202, 159)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `font-size` | `10px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.08em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 254: `.plan-grid p`
Media: global; first-view DOM matches: 3; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `12px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(196, 214, 218)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `line-height` | `1.6` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `margin-top` | `6px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 255: `.plan-caveat`
Media: global; first-view DOM matches: 1; property count: 6

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `margin-left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `color` | `rgb(159, 193, 199)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 256: `.button-copy`
Media: global; first-view DOM matches: 1; property count: 53

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `13px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(173, 192, 194)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(173, 192, 194)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(173, 192, 194)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(173, 192, 194)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgb(21, 46, 60)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(241, 223, 197)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `min-height` | `43px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 257: `.button-copy:disabled`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `opacity` | `0.48` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `cursor` | `not-allowed` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 258: `.intro`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `26px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 259: `.intro h1`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `clamp(37px, 9vw, 68px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.03` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 260: `.intro > p`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `13px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `1.6` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 261: `.hero-actions button`
Media: (max-width: 700px); first-view DOM matches: 2; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `44px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 262: `.hero-actions > span`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `display` | `none` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 263: `.intro-footer`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `margin-top` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 264: `.director-message`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 3

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `top` | `25%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `left` | `14px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `56%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 265: `.director-message b`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `clamp(21px, 5.4vw, 32px)` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 266: `.director-message p`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 267: `.director-overlay #directorStop`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `bottom` | `39px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 268: `.plan-grid`
Media: (max-width: 700px); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `grid-template-columns` | `1fr` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 269: `.plan-grid > div`
Media: (max-width: 700px); first-view DOM matches: 3; property count: 4

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `padding-top` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

### Rule 270: `.plan-grid p`
Media: (max-width: 700px); first-view DOM matches: 3; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `font-size` | `11px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 271: `.visual-orb`
Media: (prefers-reduced-motion: reduce); first-view DOM matches: 1; property count: 11

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `animation-duration` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timing-function` | `ease` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-delay` | `0s` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-iteration-count` | `1` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-direction` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-fill-mode` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-play-state` | `running` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-name` | `none` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-timeline` | `auto` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-start` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |
| `animation-range-end` | `normal` | Does this communicate state and respect reduced motion without excess CPU? | AI storyboard optional; browser performance required. | REGRESSION CHECK |

### Rule 272: `.simulation-stage > .spatial-render`
Media: global; first-view DOM matches: 0; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `0` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | CHECK DYNAMIC STATE |
| `pointer-events` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | CHECK DYNAMIC STATE |

### Rule 273: `.simulation-stage > .stage-grid`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `1` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `opacity` | `0.26` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 274: `.simulation-stage > .stage-fog`
Media: global; first-view DOM matches: 1; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `1` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `opacity` | `0.32` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 275: `.simulation-stage > .scene-container`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `2` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 276: `.simulation-stage .mission-callout`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `5` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 277: `.simulation-stage > .stage-grid`
Media: (prefers-reduced-motion: reduce); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `opacity` | `0.48` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 278: `.simulation-stage > .stage-fog`
Media: (prefers-reduced-motion: reduce); first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `opacity` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 279: `.visual-scene > .spatial-render`
Media: global; first-view DOM matches: 0; property count: 9

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `top` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `right` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `bottom` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `left` | `0px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `width` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `height` | `100%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | CHECK DYNAMIC STATE |
| `z-index` | `0` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | CHECK DYNAMIC STATE |
| `pointer-events` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | CHECK DYNAMIC STATE |

### Rule 280: `.visual-scene .plate-small`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `3` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 281: `.visual-scene .visual-orb`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `1` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 282: `.visual-scene .shine, .visual-scene .film-beam`
Media: global; first-view DOM matches: 2; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `z-index` | `2` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `pointer-events` | `none` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 283: `.quality-toggle`
Media: global; first-view DOM matches: 1; property count: 57

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `position` | `absolute` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `z-index` | `9` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |
| `right` | `20px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `37px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgb(211, 184, 137)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(211, 184, 137)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(211, 184, 137)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(211, 184, 137)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgba(9, 30, 44, 0.867)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(255, 225, 170)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `padding-top` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `7px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `11px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-style` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-caps` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-ligatures` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-numeric` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-east-asian` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-alternates` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size-adjust` | `none` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-language-override` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-kerning` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-optical-sizing` | `auto` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-feature-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variation-settings` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-position` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-variant-emoji` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-weight` | `800` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-stretch` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-size` | `9px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `line-height` | `normal` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `font-family` | `"Space Grotesk", system-ui, sans-serif` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `letter-spacing` | `0.07em` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |
| `min-height` | `34px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `backdrop-filter` | `blur(7px)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 284: `.quality-toggle[aria-pressed="true"]`
Media: global; first-view DOM matches: 0; property count: 14

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `border-top-color` | `rgb(121, 214, 193)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgb(121, 214, 193)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgb(121, 214, 193)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgb(121, 214, 193)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `color` | `rgb(194, 241, 228)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-image` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `rgba(19, 55, 47, 0.86)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 285: `.quality-toggle:disabled`
Media: global; first-view DOM matches: 0; property count: 2

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `opacity` | `0.7` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `cursor` | `not-allowed` | Is this declaration necessary and browser compatible? | AI can suggest edge cases; CSSOM and tests decide. | REGRESSION CHECK |

### Rule 286: `.quality-toggle`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 8

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `top` | `26px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `5px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `8px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `min-height` | `29px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `font-size` | `8px` | Does this remain legible and communicate hierarchy from 320px to desktop? | AI copy critique optional; contrast and layout tests required. | REGRESSION CHECK |

### Rule 287: `.visual-scene .plate-small`
Media: global; first-view DOM matches: 1; property count: 33

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `right` | `3%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `width` | `37%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `16px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `background-image` | `linear-gradient(145deg, rgba(6, 20, 32, 0.92), rgba(9, 25, 36, 0.85))` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-x` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-position-y` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-size` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-repeat` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-attachment` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-origin` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-clip` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `background-color` | `initial` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-width` | `1px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-style` | `solid` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-top-color` | `rgba(158, 179, 180, 0.55)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-right-color` | `rgba(158, 179, 180, 0.55)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-bottom-color` | `rgba(158, 179, 180, 0.55)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-left-color` | `rgba(158, 179, 180, 0.55)` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-source` | `none` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-slice` | `100%` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-width` | `1` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-outset` | `0` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `border-image-repeat` | `stretch` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |
| `box-shadow` | `rgba(0, 0, 0, 0.533) 0px 14px 45px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 288: `.visual-scene .plate-small strong`
Media: global; first-view DOM matches: 1; property count: 1

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `text-shadow` | `rgba(255, 255, 255, 0.063) 0px 2px 14px` | Does this preserve contrast and hierarchy at mobile scale? | AI screenshot critique optional; axe/browser evidence decisive. | REGRESSION CHECK |

### Rule 289: `.visual-scene .plate-small`
Media: (max-width: 540px); first-view DOM matches: 1; property count: 7

| Property | Value | Improvement question | AI contribution | Status |
|---|---|---|---|---|
| `width` | `46%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `right` | `3%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-top` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-right` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-bottom` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `padding-left` | `9px` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |
| `top` | `17%` | Could simpler layout preserve hierarchy, usability and keyboard flow? | Use measured layout; AI may propose refactor but cannot self-certify. | REGRESSION CHECK |

## Category counts

- VISUAL: 1096
- LAYOUT: 707
- TYPOGRAPHY: 693
- MOTION: 94
- OTHER: 43

## Limits
- CSSOM expands CSS shorthands; property counts represent browser-resolved declarations, not separately authored declarations.
- Hover, modal, complete and media-responsive rules may be invisible to the initial selector-match snapshot.
- AI judgment cannot substitute for physical Safari or a person completing usability tasks.
