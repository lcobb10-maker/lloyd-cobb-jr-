# Acceptance gates — public engineering checklist

**Evidence states:** PROPOSED / SOURCE PRESENT / LOCALLY TESTED / STAGED / END-TO-END TESTED / OWNER ACCEPTED / BLOCKED. No automatic status promotion.

## A. Baseline
- [ ] Current Muse frontend link, immutable artifact hash, build instructions and deployed preview identified.
- [ ] Backend endpoint map derived from **actual code**, no invented route.
- [ ] State authority chart (Shopify / identity / Colyseus / persistence / dealership).
- [ ] Both projects' code legally/technically accessible to authorized contributor. Public PR contains no private code.
- [ ] Identify existing scene loader and transfer mechanism before introducing another.

## B. Store ↔ game connection
- [ ] World app deferred until a user chooses “Enter Universe City”.
- [ ] Portal handshake validates exact origin, event source, contract version, request correlation and capability.
- [ ] Authenticated resident session issued by actual identity backend.
- [ ] World room joined via actual secured backend WebSocket.
- [ ] Cart request maps to *verified* Shopify variant ID; Shopify remains checkout owner.
- [ ] Return to store works and does not lose cart, consent or resident state.

## C. Dealership first sale/lead demonstration
- [ ] Approved rights to flyover, dealer branding and listing media recorded privately.
- [ ] One car asset loads as a real GLB/3D scene asset; licensed 2D fallback works.
- [ ] Grounded listing fields and inventory status; explicitly 'demo' if no trusted feed.
- [ ] Quote/test-drive request: explicit consent → deduplicated server receipt → status view.
- [ ] No representation of vehicle title transfer/financing/sale without compliance workflow.
- [ ] Region unloaded after exit, and re-enter loads correctly ten successive times.

## D. Mobile & performance
- [ ] Actual iPad Safari video of entry, left movement, right independent yaw/pitch, two-finger input, product interaction and world exit.
- [ ] Initial Shopify page loads without importing 3D runtime.
- [ ] Scene-specific bundle sizes, textures, LOD, GPU/frame budgets measured (p50 and p95; do not invent targets).
- [ ] Browser-tab hidden/pause, WebGL context loss recovery, no retained scene event handlers.
- [ ] Network throttle test and optional low-quality fallback.
- [ ] Travel transfer preloads next region without unloading old until destination acknowledged.

## E. Failures, security and durability
- [ ] Wrong-origin cross-document message rejected.
- [ ] Spoofed sender/source message rejected.
- [ ] Expired credentials recover without revealing session keys.
- [ ] WebSocket drop: bounded reconnect + preserved world location.
- [ ] Server 503/timeout: normal store remains usable; return button visible.
- [ ] Duplicate test-drive request and duplicate cart add do not multiply same action.
- [ ] Bad asset returns a placeholder/preview **clearly labeled fallback**.
- [ ] No agent can edit permissions or initiate live spend without owner approval.
- [ ] Evidence includes tests, timestamps, sanitized correlation IDs, code hash, manual video.
- [ ] Rollback and recovery steps documented and verified in staging.

## F. Acceptance summary template

| ID | Test | Env/device | Expected | Observed | PASS/FAIL/BLOCKED | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | Enter world from store | physical iPad Safari | Player enters authenticated room | NOT RUN | BLOCKED | — |
| 02 | Open dealership | physical iPad Safari | One optimized 3D car appears | NOT RUN | BLOCKED | — |
| 03 | Dealer lead request | Staging backend | Exactly one receipt, no duplicate | NOT RUN | BLOCKED | — |
| 04 | Return from 3D | physical iPad Safari | Cart and resident state intact | NOT RUN | BLOCKED | — |
| 05 | Two residents | 2 simultaneous devices | Shared presence and independent state | NOT RUN | BLOCKED | — |

**Agent contribution workflow:** Fork this public repository, branch, commit proposed bridge code, open a PR. Do not claim production was changed or expose confidential logs. The owner reviews all merges/deployments.
