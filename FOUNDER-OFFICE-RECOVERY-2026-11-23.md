# Founder Office Recovery — Engineering Evidence and Release Boundaries

**Date:** 2026-11-23  
**Project:** ITT TOLD’EM / Universe City / ICM  
**Status:** In progress; **not production accepted**.

## Founder directive and accountability

The goal is a usable, walkable Founder Office running on AWS, with real authenticated workstation tasks, persistent PostgreSQL results, real iPad Safari traversal, and independent end-to-end acceptance. The founder explicitly rejected repeated status reports, isolated prototypes, and unverified completion claims.

A key engineering failure was treating component tests as progress equivalent to a completed user journey. That is not sufficient. The recovery sequence prioritizes canonical AWS source integration, authenticated execution, persistent cross-device history, and independent device validation before release.

## Reproducible component-level findings

- An isolated workstation handler on AWS passed **12/12** regression checks after a retry fix. These tests simulate HTTP and worker responses; they are **not** proof of a deployed game.
- A real PostgreSQL **16.16** HTTP fixture validated actor-scoped history, bounded chronological results, request-id concurrency, and denial of unauthorized requests. Fixture identities are not equivalent to a production Nakama authentication journey.
- A previously observed baseline could lose the returned task ID under a concurrent conflict. A candidate serialized requests by actor and returned a consistent ID.
- A browser retry candidate now preserves the pending request ID in session storage after a failed dispatch, reuses it on retry, and clears it only after verified completion. Its additional regression test passed.
- Source reconciliation remains unresolved: the authoritative private repository's game entry point and a more recent AWS recovery candidate differ substantially. Blind replacement would risk unrelated features.

## Unmet acceptance evidence

Physical iPad Safari navigation, actual in-world workstation-to-worker completion, authenticated cross-device persistence after restart, independent QA, and authorized AWS staging deployment have **not** been demonstrated.

## Public engineering lesson

Release claims must be tied to the **user path**, not only to unit tests, simulations, commits, or successful HTTP responses. Candidate, staged, deployed, and independently accepted are distinct states.

This public note intentionally excludes credentials, customer data, private source code, network addresses, and deployment secrets. It does not assert a production release.
