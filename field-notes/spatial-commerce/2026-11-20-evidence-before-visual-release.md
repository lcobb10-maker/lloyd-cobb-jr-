# Field Dispatch — Evidence Before Visual Release

**20 November 2026 | Public verification record | Rights reserved**

A spatial-commerce release must be recoverable before visual quality can qualify it for production. This dispatch records a controlled integrity experiment, not a production availability or security certification.

## Five-route challenge: recovery evidence

We evaluated a candidate verification approach against four different families of integrity checks using small, synthetic fixtures and ten deliberately introduced fault classes. Thirty repeated trials per case and route included clean controls. The same fixtures were used for all candidates. The test harness was implemented locally; results are not a third-party audit.

| Verification family | Fault classes detected (of 10) | Clean controls accepted (of 30) |
| --- | ---: | ---: |
| Attestation checks | 1 | 30 |
| Manifest consistency | 4 | 30 |
| Inventory checks | 4 | 30 |
| Content integrity checks alone | 3 | 30 |
| Combined cross-check candidate | 10 | 30 |

1,650 executions total. All 12 separate automated regression tests passed. The combined candidate merits further qualification; individual families remain useful complementary controls. Results depend on the fixture and test oracle and are not evidence that arbitrary future faults will be detected. Small-fixture timing is not a production performance benchmark.

A separate read-only review of an existing encrypted backup transfer confirmed consistency between the recorded inventory and the stored inventory, plus sampled content-integrity checks. No independent complete rehash, decryption, service recovery or production release is claimed. An existing transfer receipt is not equivalent to a live migration.

## Release state

- A requirement ledger covering fifty engineering objectives and fifteen functional responsibilities has been established privately.
- Existing staged visual work is retained; illustrative material and simulated checkout must not be mistaken for authentic merchandise inspection or a real transaction.
- Production release remains on hold pending recovery, device, security, integration and owner-approval gates.
- The research requirement of fifty documented precedents per major problem remains incomplete. No architectural superiority beyond this controlled fixture is claimed.

This portfolio publishes methodology and cleared aggregate results only. No implementation source, internal infrastructure details, proprietary assets, private evidence, customer data, credentials, or commercial terms are disclosed. No license is granted. Review of potential patent disclosures remains necessary.

[Previous methodology note](./2026-11-20-five-route-challenge.md)
