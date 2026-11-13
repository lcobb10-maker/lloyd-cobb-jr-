# Failure → Proof — Prioritized Engineering & AI Improvement Register

This is the actionable counterpart to the 482-line and 2,488-property audits. Each row defines a real outcome, supporting evidence, an intervention, a falsification or acceptance test, and when AI adds value. No row is a claim about a live client's website.

| Priority | Issue / evidence | Purposeful intervention | Measurable outcome / test | AI contribution | State |
| --- | --- | --- | --- | --- | --- |
| P0 | Timed simulation previously resembled a production PASS | Deterministic route/MFA/inbox mock assertions with synthetic labeling | Wrong redirect, disabled MFA and misrouted inquiry must fail | AI may propose other counterexamples; never decides PASS | REPAIRED / tests passed |
| P1 | Director Cut timers could finish after the visitor exits | Cancel pending synthetic checks on manual interruption or mission switch | Wait beyond the old timer; completion remains zero after stop | Rules and state machines beat AI | REPAIRED / race test passed |
| P1 | Mission 01 selected state used aria-current=step, CSS still styled true | Align CSS and accessible state semantics | Active state visually highlighted and announces step | Static lint/browser rule, not AI | REPAIRED / browser test passed |
| P1 | Mobile numbered navigation contrast ratio 3.54 against dark background | Brighter #a6bbc6 + selected state hierarchy | Automated contrast violation removed; no horizontal overflow | Contrast algorithm, not AI | REPAIRED / axe passed |
| P1 | Copy fallback lacked a close and focus return | Accessible dialog with close, Escape and focus restoration | Mobile tap and keyboard assertions pass | Deterministic DOM test, not AI | REPAIRED / tests passed |
| P1 | Unrestricted AI release decisions would invent success evidence | Separate read-only AI challenger from deterministic QA gate | AI suggestions cannot edit source or approve release | Optional LLM proposes adversarial hypotheses | BUILT / local mock contract passed; no live LLM inference |
| P2 | 271 CSS rules / 2,488 expanded declarations contain 20 repeated property bindings | Preserve intentional cascade; remove only proven redundancies | Zero visible diff and same computed properties at three viewports | AI suggests consolidation; regression tests authorize it | AUDITED / no automatic destructive cleanup |
| P2 | Public page relies on Google Fonts CSS; system fallback exists | Test slow-network degradation before self-hosting fonts | Public mobile FCP/LCP baseline 800ms and slowed emulation 1,864ms | No AI needed unless generated asset strategy proposed | MEASURED / no evidence that redesign improves performance |
| P2 | CSS illustration may be mistaken for actual AAA walkable 3D | Label simulation; only invest in real spatial scene if business use-case justifies it | Blind viewers distinguish preview from real production proof | AI can draft cinematic storyboard or assets, not prove real-time rendering | LABELING PRESENT / high-end art remains optional |
| P2 | UI has three missions but real business value remains a hypothesis | Small, consented user comprehension trial: 5 text-first vs 5 interactive-first | Measure comprehension, time to first action and confusion around simulation labels | AI prepares blind prompts; humans provide outcome data | OPEN: real independent participants required |
| P2 | iPad-shaped Chromium emulation is not Safari | Physical iPad Safari touch, reduced-motion and VoiceOver journey | Visitor completes all three missions and receipt without assistance | AI may organize evidence; cannot simulate hardware proof | OPEN: physical iPad needed |
| P2 | Client case study could be viewed as fictional marketing | Obtain owner permission and verify before/after service outcome | Dated real intake and business metrics tied to approved changes | AI can draft narrative only from approved documents | OPEN: consent and real customer outcome needed |
| P3 | App's statically authored prompts are not changing from user mistakes | Record only privacy-safe local error categories for a usability pilot | More visitors choose correct repair after feedback without longer time | AI may propose clearer error copy; no background inference | PROPOSAL — test before adding runtime complexity |
| P3 | Automated CI is not yet hooked to repository triggers | Link on-demand AWS QA receipt to authorized release workflow | No release from passing unit tests alone without owner acceptance | AI review only optionally after deterministic baseline | PENDING: release workflow approval |

## Guardrails

- Do not run the GPU/T4 or add external model inference to the public browser.
- Do not transmit client records, source credentials, contact details or unapproved screenshots to a model.
- Challenge model suggestions against caching, deterministic rules, simple code and human intervention.
- The automatic QA gate is repeatable on AWS and currently passed 10/10 checks; it is **not** a claim of physical Safari or client acceptance.
- Avoid extra visual elements that have no evidence, decision or measurable business consequence.

## Practical next acceptance

A physical iPad user opens the live generic demo, tries the 20-second director cut, completes the three repair choices, reads the mock receipt and reports any gesture/UI obstruction. Next, show the text audit and the interactive demo to people unfamiliar with either. Do not call the presentation more effective until those viewers demonstrate it.

## Cinematic + speed release (2026-11-13)

| Priority | Finding | Fix or deliberate decision | Objective receipt / remaining proof |
| --- | --- | --- | --- |
| P1 | Rendering a complex shader on initial load hurt software-rendered Chrome | **Lite default**; WebGL2 compiles only on explicit opt-in or cinematic deep link | Zero initial GPU draws in visual-modes.json |
| P1 | The 3D camera was mirrored and concealed the sculpture behind the evidence plate | Correct camera handedness and move the stage composition into the visible area | Visual screenshots and six-mode visual browser suite |
| P1 | Direct cinematic query arguments broke GitHub HTML preview URL parsing | Use `#cinematic=1` fragment, leaving preview's source query untouched | Public desktop, mobile and deep-link tests |
| P1 | Reduced-motion, low-data and unsupported GPU needed safe fallback | Respect browser preferences; disable WebGL or fall back on context/render failure; stop offscreen frames | Automated browser fallback and toggle assertions |
| P2 | Brand font stylesheet blocked first content | Load custom font CSS nonblocking with system fallback | Local throttled A/B median FCP 592 → 400 ms; candidate CLS 0.00062 |
| P2 | Realistic lighting needed to remain independent of huge media transfers | Implement procedural metal/architectural scene with no external texture/model requests | Candidate gzip estimate ~50.8 KB vs prior ~45.7 KB; FIDELITY-SPEED-REPORT.md |
| P2 | WebGL2 software benchmark has insufficient FPS for a global default | Leave high-fidelity mode optional, dynamically downgrade, do not promise 60 FPS | Physical iPad Safari GPU/thermal verification OPEN |
| P3 | More animated words would distract from business consequences | Preserve owner decisions and real mock acceptance checks as the primary interaction | Blind viewer comprehension A/B testing OPEN |

**AI decision:** No model is required for geometry rendering or caching. A bounded AI creative reviewer can propose better material palettes and composition, but physical visual/performance measurements and user comprehension determine acceptance.