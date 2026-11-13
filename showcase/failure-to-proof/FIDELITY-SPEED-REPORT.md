# Failure → Proof · Visual Fidelity & Data-Speed Report

**Scope:** ITT TOLD'EM public-safe interactive showcase.  
**Environment:** AWS small development instance, no GPU instance, no VPS changes.  
**Intent:** Better visual depth while reducing time to first meaningful content and avoiding unnecessary bandwidth or GPU work.

## Before / after

| Metric | Previous version | Candidate fidelity version | Evidence / interpretation |
|---|---:|---:|---|
| First contentful paint — throttled local Chrome median | 592 ms | 400 ms | Three samples per version, alternated order, 150 ms latency, ~1.36 Mbps download and 4× CPU throttle; 32% lower median |
| Largest contentful paint — same lab samples | 592 ms | 400 ms | Same test conditions; hero text is LCP |
| Cumulative layout shift — same local run | 0 | 0.00062 | Small nonblocking-font swap; well below 0.1 but not literally zero |
| Single HTML raw size | 126,853 bytes | 141,132 bytes | Higher fidelity adds 14,279 bytes (11.2%) |
| Local gzip compression estimate | 45,736 bytes | 50,837 bytes | Approximately 5.1 KB larger; **not** a verified HTTP-transfer metric |
| Default GPU frames | 0 | 0 | Lite is default; WebGL compiles only on explicit user choice |
| External 3D textures, videos or geometry downloads | 0 | 0 | Shader-generated meshes and materials; no imported Three.js |
| Full authored-code review | 482 source lines | 786 source lines | New first-party renderer and fragment shader included |
| CSS review | 271 rules, 2,488 browser-expanded declarations | 289 rules, 2,633 declarations | Current CSSOM includes the new quality control and media layering |
| 3D view | CSS perspective illustration | Optional WebGL2 analytic spatial studio | Reflective floor, metallic rings, architectural columns, lighting and ambient shading, with CSS fallback |

The loading improvement comes from nonblocking custom-font CSS and preserving a content-first default render. No improvement to sales, actual client forms or public hosting latency is implied by a local Chrome experiment.

## Visual fidelity and practical behavior

The default still renders the designed dark-mode CSS scene immediately. The **CINEMATIC 3D** button opts into a procedural WebGL2 scene inside the mock browser's media surface. The shader models actual 3D intersections, metal-like reflectance, a reflective floor and adjustable scene lighting. The camera orientation was corrected so the sculpture appears on the visible side instead of behind the text panel.

The shader compiles only after the user's explicit selection, or after an explicitly requested cinematic deep link loads and the browser is idle. The renderer:

- pauses when the stage is outside the viewport or the tab is hidden;
- dynamically reduces internal resolution when frame pacing is persistently poor;
- falls back to the existing CSS visual if WebGL2 is unavailable or the renderer is too slow;
- can be toggled off without rendering further frames;
- respects reduced-motion and data-saver preferences.

**Important limitation:** The shader is physically inspired procedural graphics, not photogrammetry, cinematic PBR textures or a verified 60 FPS AAA scene. The AWS software-rendered Chromium test is not representative of physical iPad GPU performance.

## Published-preview laboratory check

With the immutable release opened through GitHub HTML Preview on the AWS
headless Chrome runner, one 390 px mobile navigation measured:

- Standard network: FCP/LCP **288 ms**, CLS **0** in that run.
- Simulated slow 4G with four-times CPU throttle: FCP/LCP **552 ms**, CLS **0** in that run.
- Zero horizontal overflow, zero JavaScript runtime errors, and the playable
  mission controls remained available.

See `qa/performance.json`. These are lab measurements in a single environment
with browser caches and provider behavior that may differ from a real visitor.
The earlier public 800 ms / 1,864 ms measurements are from a different run,
so treat them as directional rather than a controlled public-hosting A/B.

## Data-path assessment

This showcase has no live API or database to optimize. Its business scenarios, repair decisions and mock acceptance checks are static first-party data bundled with the HTML. No 3D textures, media clips or customer data are fetched. The main bandwidth tradeoff is the approximately 5.1 KB additional gzipped shader/renderer logic; it is paid once as part of the page, not on every frame. Google Fonts CSS remains external but is loaded without blocking initial render.

For a larger PhotoCraft or Universe City deployment, speed would be addressed separately through versioned asset manifests, immutable caching, adaptive media tiers, measurement of actual API latencies, and CDN hosting. Those are architectural recommendations, **not features deployed by this static showcase**.

## Acceptance tests

- Lite default has zero WebGL draws at first content.
- Cinematic opt-in creates and draws from a real WebGL2 context.
- Turning it off stops the frame loop.
- Unsupported WebGL2 falls back and disables the control.
- Reduced-motion mode retains the CSS scene.
- 320 px mobile, 390 px mobile and desktop UI remain usable.
- Game missions, owner-plan fields and synthetic test receipts still work.
- Full QA receipt (see \`qa/LATEST-RECEIPT.json\`) is the release authority, not this report.

## Unresolved validation

- Physical iPad Safari: GPU frame pacing, touch controls, shader compilation, thermal behavior and VoiceOver.
- External human panel: evidence that added visual fidelity improves understanding and perceived quality rather than distracting.
- CDN/production metrics: actual field Core Web Vitals and complete HTTP transfer measurements; the present A/B is a local throttled comparison.
- Real customer business outcomes require owner consent and production changes; the showcase makes none.

## Reproducible release artifact

- Immutable source commit: 8045ddb32120675210f090952e4f3fe8e2d5bb70.
- Clean rebuild from that revision and approved GSAP SHA-256 matches the tested HTML byte for byte.
- Final HTML SHA-256: d142d6fbda1a2909e2e1c847bc7ed8dc98758a3bc79dedbc5124526bc60285d9.
- `#cinematic=1` is supported for the GitHub preview because query parameters alter the preview loader URL.