# Failure → Proof / Reproducible source and QA

This folder contains the authored frontend sources for the independent ITT TOLD'EM demo.
The public entrypoint is one compiled HTML file at the parent path /index.html.
All scenarios use generic synthetic example data. No live client is accessed or changed.

## Rebuild

Get GSAP core 3.12.5 in the same source folder (not checked in here separately):

  curl -fsSL https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js -o gsap.min.js

Expected SHA-256 of the approved distribution:

  28033e449a31ebcc396e5be8b13b63152bf03094288fb5867034321927bce087

Then execute:

  python3 build.py

The build emits index.html inside the source folder. Release this build only after QA.
The AWS QA copy is located at /home/ubuntu/itt-showcase.

## QA architecture / AI role

- Deterministic source checks: JavaScript syntax, reproducible build hashes, line-by-line review.
- Adversarial fixture tests: bad redirect, disabled MFA and misrouted synthetic inquiries must fail.
- Browser tests: mobile, 320px, desktop, dynamic scenes, keyboard and Director Cut cancellation.
- Accessibility: axe WCAG 2A/2AA + best-practice pass, with manual physical device testing still required.
- Bounded optional AI challenger: receives curated QA numbers, proposes a small set of counterexamples, and writes draft suggestions. It cannot modify source or approve any release. AI inference is off by default and needs an explicitly approved endpoint/key.
- Privacy: no private customer identifiers, analytics, source emails or credentials enter the external model request.

Code edits are checked against actual tests, never counted as success merely because an LLM recommends them.

## Open gates

Physical iPad Safari verification, actual human comprehension research, real owner consent, and verified post-deployment business outcomes cannot be completed by a browser emulator.

See the parent QA-CLOSEOUT.md and the main line audit reports in this showcase folder.