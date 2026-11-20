# Engineering Field Note — Five-Route Challenge
**20 November 2026 | Public methodology | Status: experimental, not a production release**

A public record of evidence-led spatial commerce research, maintained by Lloyd Cobb Jr. This is a reporting document, not a disclosure of proprietary implementation. All rights reserved. No source-code license, patent license, commercial rights or third-party asset permissions are granted.

## The rule
For each claimed breakthrough, compare a proposed candidate against **four fundamentally different solution families**, plus the incumbent production baseline. Architectural alternatives must differ in mechanism rather than merely changing a parameter, library version or visual preset. No solution is presumed best. An independent evaluator can reject every candidate.

## Research agenda
The following are public technology categories, not an announcement of our architecture or selected implementation. Each row is a five-route research question. A route may be eliminated only with a documented hard-constraint failure or a measured counterexample; unexecuted routes stay marked untested.

| Research question | Five distinct candidate families | Evidence required |
|---|---|---|
| Material detail | Full-resolution capture; spatial tiles; multiscale residuals; analytic material synthesis; overview reconstruction | Reference-patch error, detail authenticity, cold/warm bytes, decode and inspection latency |
| Garment shape | Physical scanning; digital pattern construction; manual CAD; multi-view reconstruction; licensed existing digital twin | Dimension error, seam and silhouette match, rights, rig compatibility |
| Lighting | Baked lightmaps; image-based lighting; real-time raster shadows; hybrid screen-space lighting; path-traced reference | Blind preference, color accuracy, frame times, memory |
| Environment | Hand-authored level; modular kit; procedural layout; captured environment; map-derived reconstruction | Traversal correctness, collisions, visual consistency, loading cost |
| Characters | Authored keyframes; captured motion; procedural biomechanics; physics-driven control; video-derived motion retargeting | Foot slip, joint limits, outfit continuity, latency, user preference |
| Inspection and camera | Direct orbit; point-of-interest navigation; guided shot sequence; first-person controls; automatic composition | Completion time, mis-taps, motion discomfort, accessibility |
| Runtime delivery | Full upfront bundle; spatial streaming; content-adaptive LOD; progressive asset representation; remote rendering | Frame-time percentiles, network, peak memory, input latency, cost |
| Commerce | Conventional accessible catalog; spatial product pick; conversational selection; guided outfit builder; assistive visual search | Correct items and variants, purchase completion, price/inventory consistency, returns guardrails |
| Product intelligence | Deterministic facets; lexical retrieval; embedding retrieval; multimodal retrieval; human-curated recommendations | Relevance, constraint compliance, hallucinations, latency, cost |
| Quality assurance | Component/property tests; browser journey tests; visual diffs; physical-device human testing; independent adversarial review | Detection of seeded defects, false positives, repeatability, coverage |

The assurance row is complementary rather than mutually exclusive: retain necessary layers even if one layer detects more seeded failures. External product assets require documented authorization, provenance and commercial usage rights. Estimated or synthetic details must not be presented as verified physical features.

## Decision and test protocol
1. Freeze the research question, reference objects, baseline, primary outcome, adverse conditions, failure thresholds, resource ceiling and accessibility/security requirements before testing.
2. Review at least five authoritative or mechanically informative precedents per research question (50 across this initial agenda); record publication, version, license, relevance, evidence quality and limitations privately. Count unique sources, not search results or repeated summaries.
3. Build the smallest isolated candidate for each family. Use identical inputs and output requirements; isolate confounders. Never substitute generated imagery for operational proof.
4. Use randomized execution order, cold/warm cache strata, repeat runs, representative devices and adverse network conditions. Keep raw samples, environment, build identifiers, failures and uncertainty intervals. Use at least 30 repeated timing runs per controlled configuration as a starting point, not a universal power calculation; size human studies using a predeclared effect and power analysis.
5. Apply mandatory gates first: rights, accessibility, security, data correctness, recoverability and safety. Reject any critical failure regardless of visual score.
6. Compare quality, performance, cost and usability on the Pareto frontier. Use a preregistered weighted score only after hard gates: visual fidelity 25, interaction 20, originality 20, commerce 15, performance 10, accessibility 10. Report tradeoffs and independent blinded review; avoid claiming superiority from a single benchmark.
7. Re-run the winning candidate against the incumbent, verify regression tests on representative physical devices, confirm rollback, and require owner release approval. Missing measurements are unknown, never zero or a pass.
8. Maintain traceable private evidence: requirement, candidate ID, baseline, test method, fixture hash, raw samples, confidence, counterexamples, decision, build, reviewer and release status. Public receipts may contain only cleared aggregate measurements and limitations.

## First experiment: isolated synthetic detail reconstruction
A controlled local CPU microbenchmark compared five distinct representations on a deterministic synthetic image: three 256×256 inspection regions, 30 reconstruction timing repetitions per region per route. All routes started from a resident overview. Payload reflects incremental bytes for an independent cold inspection region, not complete session traffic. Three tested representations reconstructed the reference pixels exactly. Two reconstruction/synthesis methods did not. This demonstrates the feasibility of a five-route comparison and the importance of an authenticity check; it does not establish real fabric fidelity, browser performance, GPU performance, shopping behavior or production readiness. Production route selection is open. No private assets or commercial implementation are included here.

## Release evidence
Public standards and proposed targets, not achieved scores:
- Field performance at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
- Rendering: 60 FPS target on supported physical devices; report p95 frame time, dropped frames and memory, not average FPS alone.
- Accessibility: evaluate against WCAG 2.2 AA, including non-3D shopping alternatives and manual assistive-technology checks.
- Commerce: exact item/variant/price correctness in the acceptance suite, replay-safe operations and no cross-account state leaks.
- End-to-end: browse, inspect, choose, purchase in authorized test mode, persist state, reconnect, recover; record actual device and build evidence. Never imply a real purchase from a mock.
- Status vocabulary: planned → prototype → measured → independently verified → approved → deployed → production observed. Stages cannot be skipped.

## Public reference standards
- [Khronos glTF physically based rendering](https://www.khronos.org/gltf/pbr/)
- [Khronos KTX texture format](https://www.khronos.org/ktx/)
- [Khronos geometry and texture compression tooling](https://github.com/KhronosGroup/glTF-Compressor)
- [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Shopify supported product media](https://help.shopify.com/en/manual/products/product-media/product-media-types)
- [MDN WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/SSDF)

These are initial references, not a claim that the 50-precedent review or all 50 candidate experiments are complete.

## Disclosure boundary
Publish high-level questions, public standards, sanitized synthetic receipts and accurately labeled status. Never publish private source, prompts, infrastructure identifiers, access credentials, customer data, unpublished algorithms, commercial terms, supplier assets, screenshots containing sensitive information, or implementation-specific optimization details. Review potential patent disclosures before publication; a rights-reserved notice alone does not preserve patent rights or trade secrets. Keep the private engineering repositories private. No production changes are authorized by this note.

**Current status:** research charter and initial synthetic experiment; production qualification pending.
