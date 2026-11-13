# ITT TOLD'EM / Failure → Proof
## Evidence-gated AWS-first QA closeout

**System:** Public-safe, self-contained interactive business demonstration.
**Canonical work location:** /home/ubuntu/itt-showcase on AWS small instance.
**Development guard:** No GPU or T4 used. No VPS changes. No client infrastructure modified.

### Acceptance evidence

| Gate | Result | Artifact |
| --- | --- | --- |
| First-party physical source-line review | 482/482 reviewed | EVERY-LINE-AI-AUDIT.md |
| Browser-resolved stylesheet coverage | 271 rules, 2,488 declarations reviewed | CSS-DECLARATION-AUDIT.md |
| CSS duplicate/override inventory | 20 overlapping properties reviewed | qa/css-audit.json |
| Mobile selector contrast and selected-state mismatch | Repaired; automated retest passed | qa/a11y-axe.json |
| WCAG 2A/2AA automated checks | Zero violations in four tested states; 2 incomplete/manual categories each | qa/a11y-axe.json |
| Director Cut and user-interruption race | Repaired; adversarial test passed | qa/director-vs-user-race.log |
| Keyboard/touch receipt fallback | Repaired; focus return, Escape and tap close tested | qa/focus-and-clipboard.log |
| Live mock assertions | Positive and negative fixtures exercised | qa/three-size-browser-acceptance.log |
| Deterministic full QA release gate | 10 of 10 checks passed, build reproduced same SHA256 | qa/LATEST-RECEIPT.json |
| Optional AI review agent | Safe request/response contract tested with local mock; no real model endpoint called | ai-qa-review.py |
| Real iPad Safari | Not tested on physical hardware | OPEN |
| Blind owner/audience comprehension and conversion | Not tested with real participants | OPEN |
| Live client implementation/revenue changes | None claimed | OUT OF SCOPE |

### Public preview performance (single headless Chrome measurements)

- Desktop local first contentful paint: 656 ms.
- Mobile local FCP: 472 ms.
- iPad-shaped Chrome emulation FCP: 656 ms.
- Public mobile Chrome FCP/LCP: 800 ms / 800 ms (single ordinary-network run).
- Public mobile Chrome with approximate slow 4G + four-times CPU throttle: FCP/LCP 1,864 ms / 1,864 ms, CLS 0 in that run.
- These are lab measurements from one AWS headless session, not CrUX field data or physical Safari.
- No horizontal overflow on 320 px, 390 px or desktop acceptance paths.

### AI decision: use where it improves the outcome

The optional AI challenger receives **only curated QA statistics**, not raw private client data. It can return hypotheses for an independent reviewer to examine. It cannot write source, deploy, approve a release, contact prospects, or turn a synthetic PASS into client evidence. By default it makes no network requests.

Potential highest-value work for an AI challenger:
1. Suggest adversarial test cases for code diffs, ranked by actual regression risk.
2. Translate verified test receipts into plain-language business narratives with citations to evidence.
3. Compare screenshot treatment against a small approved reference collection, then measure resulting usability and performance.
4. Draft alternative headlines/CTA language for blinded 5+5 participant tests.
5. Classify redundant source rules for an engineer to assess; never automatically delete CSS without screenshot and mobile regression.

Non-AI first:
- Deterministic routing/security/form fixture assertions.
- Reproducible build and source hashing.
- CSS specificity and accessibility contrast calculations.
- Authorized real-service checks.
- Privacy, consent and release approval.

### Exact replay

Run QA on the AWS instance:

  python3 /home/ubuntu/itt-showcase/qa-runner.py

Optional AI suggestions are OFF by default; running without operator opt-in:

  python3 /home/ubuntu/itt-showcase/ai-qa-review.py

Run only with an approved, configured inference endpoint and its explicitly supplied environment variables. Model suggestions go to qa/AI-SUGGESTIONS-DRAFT.json as unapproved drafts. Model cost, privacy and permission must be evaluated before any external call.

### Remaining physical and business gates

1. An actual iPad user opens the shareable preview in Safari; confirms first-load usability, playable choices, working Director Cut controls, readable mock tests and successful touch navigation.
2. A real independent owner/decision-maker can state the scenario, proposed fix and verification without confusing synthetic with deployed. Gather qualitative usability evidence, not fabricated conversion metrics.
3. Platform-specific security, SEO, form and CRM changes require real client authorization and separate production receipts.

### Shareable link

https://htmlpreview.github.io/?https://github.com/lcobb10-maker/lloyd-cobb-jr-/blob/main/showcase/failure-to-proof/index.html

### Deployment ethics

The demonstration is fictional and generic. No Alpine owner approval, client revenue uplift or completed live repair is claimed. The publicly posted experience must remain generic unless relevant client permission and real evidence are obtained.