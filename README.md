# GospelOS — Sustain your calling. Multiply your impact.

Creator Business hackathon entry. An opportunity discovery and relationship pipeline for independent gospel artists. You.com live search grounds results in public sources; the app ranks leads with transparent heuristics and lets an artist draft and approve outreach, track relationships, plan voluntary giving and create a three-party sponsored ministry proposal.

## Run
Python 3.10+ and curl. `python app.py`, then open http://127.0.0.1:8080. For direct REST search, set YOU_API_KEY or YDC_API_KEY on the server before launch; never commit the key. Without a key the app calls You.com's official keyless MCP search. Keyless access documented at https://you.com/docs/using-the-api/authentication. REST API: https://you.com/docs/api-reference/search/v1-search.

Search leads are not confirmed gigs. The research snapshot is labeled. Scores are heuristics, payment unknown unless confirmed. Browser storage is local; export your pipeline. No automated email, bookings, transfers, charitable payments, ownership assignments or voice cloning. Sponsor allocation is a hypothetical proposal. Demo only, isolated from production CRM and private IP.

## Demo
1. Enter Gospel, Newark NJ and choose Bookings. Discover live opportunities; open a source.
2. Draft outreach, approve internally, choose follow-up date and save/export.
3. Switch to Community service for voluntary ministry leads.
4. Demonstrate a $5,000 revenue / $1,000 costs / 10% surplus give-back plan ($400).
5. Sponsor a ministry: $1,000 sponsor, $700 artist, $200 community event, $100 estimated operations. Create proposal; increase artist fee past budget and see rejection.

No claimed bookings, earnings or giving. The application is a reproducible prototype and the underlying CRM and ICM infrastructure are not part of this submission.

## Live demo and evidence
Temporary hackathon demo: https://opinion-excerpt-opinion-arts.trycloudflare.com/ (ephemeral tunnel, uptime not guaranteed). Browser proof is in `browser-proof.log`. Run the browser check with `npm install --no-save playwright`, `npx playwright install chromium`, then `node test_public.cjs` while the server is running. Set DEMO_URL to test a deployed URL. Direct REST credentials are optional and the authenticated REST path has not been live-tested.
