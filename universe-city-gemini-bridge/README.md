# Universe City × ittoldem.com — Public Gemini Engineering Handoff

**Last updated:** 2026-10-27 · **Status:** SPECIFICATION / REVIEW REQUIRED · **Owner-controlled**  
**Audience:** Gemini/Jules, Muse, independent contributors and reviewers.

This is a **public-safe interface contract**, not a public copy of Universe City's private code, Notion wiki, business records, unreleased artwork, accounts, credentials or operations. No runnable production integration is claimed here. The team can fork this public repository, propose patches via PRs, and link completed evidence. The real game/source-of-truth remains private.

## Mission

Build ONE connected experience:

1. A customer enters the *ittoldem.com* store normally, preserving navigation, cart and checkout.
2. A lightweight **Enter Universe City** launcher starts the world only on request.
3. Authentication maps the visitor to an authorized world resident without exposing server credentials.
4. The resident enters a multiplayer Detroit neighborhood, can walk to ITTelier and a new dealership.
5. An independent dealership area displays authorized 3D cars, real or explicitly-demo dealer listings and opt-in test-drive/quote requests.
6. The customer can return to the store, inspect real Shopify products and check out through the verified Shopify cart without losing world progress.
7. On slow network, failure, reconnect or scene transfer, the experience remains navigable and recovers gracefully.

## Preserve the visual front end

Muse's existing cinematic sequence and current assets are the **frontend input**; do not rebuild a disconnected replacement. Existing architectural concepts include player camera + touch controller, world room, parcel/building persistence, inventory, transit and agents. Their full integration and a physical-iPad proof are NOT accepted until demonstrated.

A new dealership **flyover was reported by the founder**; the underlying media, usage rights and exact asset are not in this public handoff. Treat the flyover as a source asset to be requested, not a verified production showroom.

## Runtime handoff — two separate loads, one branded journey

```
SHOPIFY STORE SHELL (fast, always available)
   |
   +-- Enter World (user activates)
         |
         +-- Portal bridge (origin checks, version handshake, request IDs)
               |
               +-- 3D runtime shell (one camera/HUD/player session)
                      |
                      +-- Detroit district [lazy loaded]
                      +-- ITTelier [lazy loaded]
                      +-- Dealership [lazy loaded]
                      +-- Garage [lazy loaded]
                      +-- Transit [lazy loaded]
                       `-- other districts [deferred]
             |
             +-- authenticated game API / multiplayer / persistence
             +-- Shopify cart remains Shopify-owned
```

**Implementation choice:** Prefer a branded, secure, low-overhead world inside the store view when compatible with Shopify and Safari. A world subdomain in a branded embedded view is a fallback, not a promise that iframe/session policies will work everywhere. Keep a clearly branded return path. Shopify checkout remains authoritative.

**Performance rule:** NEVER bundle the complete city and all car models into the initial Shopify load. Load next-room manifests near an entrance; keep detailed assets only in the active scene, unload distant areas and stop listeners/physics/render loops on exit. Preserve identity/cart/world position in authoritative persistent storage; don't rely only on JavaScript memory.

## Contract ownership

| State | Authority |
|---|---|
| Store catalog, real product variants, orders, real stock, checkout | Shopify |
| Resident identity and authorization | Approved identity/session service |
| World room, position, parcels, building ownership and virtual objects | Authoritative game server |
| Dealer vehicle listing and lead/test-drive status | Authorized dealer listing/CRM source; game is the UI |
| Agent permissions, real payments, publication | Human owner-approved enforcement boundary |

Do not create a second inventory truth, simulate “live” status, or let an AI agent grant itself access.

## Integration API tasks for Gemini

- Map the **real existing server contract** and current Muse frontend artifact (exact commit or artifact hash) before writing adapters.
- Define and test a versioned `PortalBridge` for Shopify-shell ↔ world-runtime communication.
- Require: allowlisted origin, expected `event.source`, stable contract version, explicit message schemas, correlation IDs, narrow capability allowlist, timeout, and structured error ACK.
- Implement authenticated API and WebSocket handshakes, typed and runtime-validated inputs, scoped permissions, and resumable room transfers.
- Generate frontend types from the backend contract (OpenAPI/JSON Schema); reject build mismatches.
- Never send Shopify Admin keys, identity server keys or owner secrets to the browser.
- Use idempotency on checkout/cart mutations, appointments, identity changes, and any lead/event delivery. Explicitly distinguish `accepted` from `completed`.
- Every merge requires real network integration tests, error injections and owner approval for any live deployment.

See [Portal message contract](contracts/portal-message-v1.schema.json) and [Acceptance gates](ACCEPTANCE.md).

## First vertical slice (dealership as proof)

**Enter Store → Launch 3D → Authenticated resident → Enter Detroit → Enter Dealership → Inspect ONE approved 3D car → Request a test drive (opt-in, test mode) → Receive a server receipt → Return to Store with cart/resident intact.**

Use verified or explicitly-demo vehicle inventory. Actual auto sales, financing, title transfer and registration are separate dealer/legal/payment workflows; a Shopify cart by itself is not proof of compliant automotive selling.

## What if connection fails?

| Trigger | Required behavior |
|---|---|
| Backend unavailable or 503 | Explain outage, keep Shopify browsing operational, offer Retry / Return to Store |
| Auth expired | Renew through authorized server process; never reset resident silently |
| World websocket drops | Exponential bounded reconnect, show reconnect state, restore room/persisted state |
| Slow 3D download | Show progressive entry and leave/store button; abort unused downloads |
| Cross-origin bridge rejects message | Fail closed; do not accept arbitrary postMessage senders |
| Duplicate webhook/lead/cart click | Same idempotency key returns same receipt; prevent duplicate action |
| Bad GLB/car model | Render a licensed poster/preview fallback; don't block store |
| Room transfer fails | Stay in origin room, retry later; never lose inventory, position or cart |

## Ownership & contribution

- **Founder / Lloyd:** exclusive final authority for live deployment, finances, security and role grants.
- **Muse:** cinema/experience and dealership visual direction, source artifact custody.
- **Gemini/Jules:** adapter, contract tests, backend mapping, integration PRs.
- **ChatGPT and Claude:** independent reviews and acceptance proof.
- **NEA/NIA:** strictly scoped assistants; no self-appointment as administrators.

Contributors: fork this public repo and open a PR against the `universe-city-gemini-bridge/` folder. Put only sanitized source and tests here. Do not upload private game repositories, unreleased dealer footage, customer data, tokens, server addresses, credentials or sensitive logs. Provide links to **public-only** CI artifacts; keep real production evidence in the authorized private project.

## Immediate next work request

**Gemini:** Submit a PR containing (1) backend-to-frontend route map using authorized private reads only, with a public-safe summary here; (2) `PortalBridge` adapter with contract tests; (3) dealership loading/unloading prototype; (4) failure-injection tests; (5) precise remaining founder permissions/inputs. Do not deploy.

**Muse:** Supply the exact frontend artifact/version and approved dealership flyover location **privately** to the integrated team; agree on a single world-entry point and branded return navigation.

**Definition of done:** Physical iPad Safari + second device demonstration with preserved resident/cart, real acknowledged backend events, explicit fallback on bad network, and recorded owner acceptance—not just a visual demo or unit test.
