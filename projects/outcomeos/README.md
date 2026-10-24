# OutcomeOS — Action-to-Evidence Engine

Independent proof-driven workshop and 30-day execution tool, developed as an **original reference MVP**, inspired by business problems observed in the supplied Beyond the Panel materials. Not affiliated with that event or its speakers/sponsors. No source images or protected event branding are included.

## Run now (no installation needed)

Requires Python 3.10+. From this directory:

```bash
python server.py
# Open http://127.0.0.1:8778
```

Create a workspace account (12+ character password), pick a sector template or an original idea, save a pilot, add assigned steps and evidence, monitor targets versus actuals, change status, calculate unit economics, customize a workspace label, and export data. Each user owns a distinct organization; all read/write records are restricted to that organization.

Run tests:

```bash
python -m pytest -q
```

Change storage path: `OUTCOMEOS_DB=/safe/path/workspace.sqlite3 python server.py`. Local-only bind is the default. This is **not** publicly deployed, payment-enabled or a production security-hardened multi-tenant service.

## Actually implemented

- Persistent SQLite storage, PBKDF2 password hashes with unique salts, HttpOnly / SameSite sessions, per-organization query filtering, server-side field and evidence URL validation, cross-origin write restriction, basic security headers.
- Cross-industry starter templates, outcome goals/actuals, action assignments, completion checkboxes, evidence notes/HTTPS links, status dashboard, org JSON export, simple white-label workspace title.
- Interactive unit-economics calculator with explicit assumptions. Custom proposed `MPI = lifetime contribution / CAC`; no scientific or accepted industry benchmark is claimed.
- Fully independent UI with no dependencies and no paid integrations.

## Not implemented / release gates

- Production hosting, domain, TLS termination, backups/restores, incident monitoring, security assessment, accessibility audit, brute-force limits, email verification, password reset, SSO, shared seats/invitations, fine-grained permission roles, tamper-resistant audit logs, independent evidence verification, paid subscription checkout, Stripe webhooks, tenant-wide billing, service-level commitments, legal license acceptance, approved logo usage, external CRM integrations or consumer-specific consent flows.
- This `ThreadingHTTPServer` is a local development reference only. Do not bind publicly or use real financial, medical, or sensitive athlete information. For production, use an authenticated production-grade web server, database migration tooling, security review, and appropriate privacy controls.

## Revenue strategy (hypotheses; not sales)

- $29 original toolkit → $79 guided session → $2,500 facilitated organizational pilot → $950/month follow-through → $5,000/year white-label methodology license.
- Pilot-first contract should include scope, specific proof criteria, rights to resell, data handling, and exact support cost. License revenue is not near-zero-fulfillment in the presence of onboarding/support/customization.
- Use paid B2B validation before investing in enterprise access control, customer-facing billing, and white-label domains.

See `docs/LAUNCH.md`, `docs/PROOF_STANDARD.md` and `docs/VIDEO_SCRIPT.md`.
