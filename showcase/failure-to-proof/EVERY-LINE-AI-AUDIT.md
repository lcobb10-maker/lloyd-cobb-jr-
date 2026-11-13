# Failure to Proof — adversarial, per-source-line improvement and AI review

Audit time: 2026-11-13T10:54:00.097189+00:00
Scope: each authored physical line in six canonical source files. Generated HTML is derived from these sources and is not counted twice. Minified vendored GSAP excluded; dependency risk assessed separately.

## Executive findings
- P0: mock assertions rather than timer-only fake passes; previous repair retained and negative assertions verified.
- P1: interrupted Director Cut previously risked zombie test completion; added explicit manual interruption and cancellation.
- P1: no real-client security exposure or marketing outcome is claimed. Real deployment requires permission.
- P2: accessibility bugs remain in clipboard fallback and aria-current; third-party font dependency and screen-reader testing remain open.
- AI belongs in evidence-limited offline review and design hypothesis generation. Do not add an LLM to a deterministic browser test or a public critical path.

## AI decision matrix
| Improvement | AI role | Non-AI baseline | Decision | Verification |
|---|---|---|---|---|
| User-copy clarity | Suggest executive-friendly versions | Static reviewed copy | Optional offline | Blind comprehension study |
| Security assessment | Summarize cited headers | Header parser and authorized audit | Explain only | Source-bound factual review |
| Test generation | Propose adversarial mutations | Deterministic unit/browser tests | Assist test writing | Mutant actually fails |
| Visual redesign | Generate concepts for art director | CSS layout and approved real assets | Optional | Mobile LCP and quality comparison |
| Live pass/fail | Never delegate to AI | Explicit assertions | Reject AI | Executable positive/negative tests |
| Owner messaging | Draft from permissioned evidence | Manual owner-supplied facts | Conditional | Owner approval of all claims |
| Automated outreach | No unsupervised communications | Authorized owner response | Reject pending consent | No unintended contact |

## Per-line audit

### template.html — 77 physical lines

| Line | Current source cue | Priority | Improvement question | AI: where useful / where not | Status |
|---:|---|---|---|---|---|
| 1 | `<!doctype html>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 2 | `<html lang="en">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 3 | `<head>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 4 | `<meta charset="utf-8">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 5 | `<meta name="viewport" content="width=device-width,initial-scale=1">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 6 | `<meta name="theme-color" content="#050910">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 7 | `<meta name="description" content="A 60-second interactive challenge: fin…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 8 | `<title>Failure → Proof / ITT TOLD'EM</title>` | P1 | Are demo and no-live-client-data notices clear? | AI might critique claims; review permissions manually. | Visible on homepage. |
| 9 | `<link rel="preconnect" href="https://fonts.googleapis.com">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 10 | `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 11 | `<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;50…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 12 | `<style>/*BUILD_CSS*/</style>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 13 | `</head>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 14 | `<body>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 15 | `<main class="shell">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 16 | `<header class="mast">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 17 | `<div class="identity"><div class="emblem">I<span>T</span></div><div><b>I…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 18 | `<div class="build-status"><i></i> INTERACTIVE CONCEPT · NO LIVE CLIENT D…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 19 | `<a class="site-link" href="https://ittoldem.com/" target="_blank" rel="n…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 20 | `</header>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 21 | `<section class="intro">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 22 | `<div class="eyebrow"><span class="orbit">✳</span> EXPERIENCE 001 <span c…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 23 | `<h1>FIND THE FRICTION.<br><em>PLAY THE REPAIR.</em></h1>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 24 | `<p>One customer gets stuck. You diagnose the problem, choose what matter…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 25 | `<div class="hero-actions"><button id="jumpToGame" class="button-primary"…` | P2 | Can viewers distinguish Play from Watch quickly? | AI can draft alternatives; A/B test with viewers. | Pilot not run. |
| 26 | `<div class="intro-footer"><span><span class="pulse"></span> BUILT FOR BU…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 27 | `</section>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 28 | `<section class="experience" aria-label="Interactive business-repair simu…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 29 | `<div class="experience-toolbar">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 30 | `<div class="exp-label"><span>01 — CUSTOMER JOURNEY</span><b id="missionT…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 31 | `<div class="tracking"><span id="missionCounter">MISSION 01 / 03</span><s…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 32 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 33 | `<div class="simulation-stage" id="stage">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 34 | `<div class="stage-fog" aria-hidden="true"></div><div class="stage-grid" …` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 35 | `<div class="left-stage-label">REAL EXPERIENCE / HYPOTHETICAL SCENARIO</d…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 36 | `<div class="right-stage-label" id="stageResult">SIMULATION RUNNING</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 37 | `<div class="scene-container">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 38 | `<div class="glass-browser" id="browserArt">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 39 | `<div class="browser-chrome"><div class="dots"><i></i><i></i><i></i></div…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 40 | `<div class="browser-content">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 41 | `<div class="browser-brand"><span class="logo-box">A</span> AN EXAMPLE BU…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 42 | `<div class="visual-scene" id="visualScene"><div class="shine"></div><div…` | P2 | Does rendered art make any false photorealistic 3D claim? | AI imagery can help but would not prove actual WebGL. | CSS perspective only; clearly demo. |
| 43 | `<div class="browser-foot"><div class="foot-line"></div><div class="foot-…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 44 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 45 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 46 | `<div class="artifact artifact-top" aria-hidden="true"><span>TRACE ID</sp…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 47 | `<div class="artifact artifact-bottom" aria-hidden="true"><span>PATH STAT…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 48 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 49 | `<div id="directorOverlay" class="director-overlay" hidden aria-live="pol…` | P2 | Does this control have a real effect and accessible label? | AI can draft wording; runtime test required. | TEST |
| 50 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 51 | `<div class="interaction">` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 52 | `<div class="interaction-top"><div><span class="section-kicker">YOUR MOVE…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 53 | `<div class="choices" id="choices"></div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 54 | `<div class="feedback" id="feedback" role="status" aria-live="polite">Sel…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 55 | `<div class="action-bar"><button class="button-primary" id="advance" disa…` | P2 | Does this control have a real effect and accessible label? | AI can draft wording; runtime test required. | TEST |
| 56 | `<div class="outcome" id="outcome" hidden>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 57 | `<div class="outcome-header"><span class="section-kicker">WHAT PROVES THI…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 58 | `<p id="outcomeDetail"></p>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 59 | `<div class="outcome-steps"><div><span>01</span><strong>PROBLEM</strong><…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 60 | `<button id="runTest" class="button-proof">▶ SIMULATE ACCEPTANCE TEST</bu…` | P2 | Does this control have a real effect and accessible label? | AI can draft wording; runtime test required. | TEST |
| 61 | `<div id="testStatus" role="status" aria-live="polite"></div><ol id="test…` | P1 | Does every simulation link repair to real release ownership? | AI summarize verified receipts offline only. | Owner, build, release mapped. |
| 62 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 63 | `</div>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 64 | `<div class="mission-selector" id="missionSelector" aria-label="Select a …` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 65 | `</section>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 66 | `<section class="conclusion" id="conclusion" hidden>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 67 | `<div class="conclusion-icon">✳</div><div class="section-kicker">DEBRIEF …` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 68 | `<h2>THE REAL PRODUCT<br>ISN'T THE ANIMATION.<br><em>IT'S THE PROOF.</em>…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 69 | `<p>We trace where a customer journey might fail, design an appropriate r…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 70 | `<div class="conclusion-counters"><div><b>03</b><span>SIMULATED FAILURE P…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 71 | `<div class="conclusion-actions"><button class="button-primary" id="repla…` | P2 | Does this control have a real effect and accessible label? | AI can draft wording; runtime test required. | TEST |
| 72 | `</section>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 73 | `<footer class="footer"><span>DESIGN + ENGINEERING + VERIFIABLE OUTCOMES<…` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 74 | `</main>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 75 | `<script>/*BUILD_GSAP*/</script>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 76 | `<script>/*BUILD_APP*/</script>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |
| 77 | `</body></html>` | P3 | What semantic, narrative, or interactive purpose does this element serve? | AI can suggest comprehension improvements; validate with viewers. | REVIEW |

### style.css — 24 physical lines

| Line | Current source cue | Priority | Improvement question | AI: where useful / where not | Status |
|---:|---|---|---|---|---|
| 1 | `` | P4 | Could this blank line improve grouping and legibility? | No AI needed. | KEEP |
| 2 | `:root{--bg:#070a0d;--cream:#f4f1e9;--muted:#9aadb7;--dim:#70838c;--gold:…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 3 | `html{background:var(--bg);scroll-behavior:smooth}body{margin:0;color:var…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 4 | `:focus-visible{outline:2px solid var(--gold);outline-offset:4px}.shell{m…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 5 | `.mast{height:100px;display:flex;align-items:center;justify-content:space…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 6 | `.intro{padding:clamp(42px,6vw,95px) 0 36px;position:relative}.eyebrow,.s…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 7 | `.intro h1{font:700 clamp(42px,6.6vw,112px)/.99 'Space Grotesk',sans-seri…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 8 | `.experience{border:1px solid #405665;background:#08111b;box-shadow:0 20p…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 9 | `.simulation-stage{height:clamp(340px,41vw,615px);position:relative;overf…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 10 | `.scene-container{width: min(75%,890px);height:90%;position:absolute;left…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 11 | `.browser-content{height:calc(100% - 36px);background:linear-gradient(140…` | P3 | Does this animation illustrate a state transition instead of decorating? | AI design critique optional, no model at runtime. | REVIEW |
| 12 | `.artifact{position:absolute;background:#0d1e2cd9;backdrop-filter:blur(10…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 13 | `.mission-callout{z-index:4;position:absolute;bottom:19px;left:23px;right…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 14 | `.interaction{padding:clamp(18px,3vw,39px);background:linear-gradient(125…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 15 | `.feedback{min-height:27px;color:#b8cbd0;font-size:12px}.feedback.warn{co…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 16 | `.outcome{border-top:1px solid #496574;padding-top:22px;margin-top:24px}.…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 17 | `.mission-selector{display:grid;grid-template-columns:repeat(3,minmax(0,1…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 18 | `.conclusion{text-align:center;padding:clamp(55px,9vw,118px) 25px 85px;ba…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 19 | `@media(max-width:800px){.build-status{display:none}.intro h1{font-size:c…` | P2 | Does this responsive rule pass 320px and 390px browser acceptance? | AI screenshot comparison possible; browser test authoritative. | TEST |
| 20 | `@media(max-width:540px){.shell{padding:0 10px}.mast{height:74px;padding:…` | P2 | Does this responsive rule pass 320px and 390px browser acceptance? | AI screenshot comparison possible; browser test authoritative. | TEST |
| 21 | `@media(prefers-reduced-motion:reduce){*{animation:none!important;transit…` | P2 | Does this responsive rule pass 320px and 390px browser acceptance? | AI screenshot comparison possible; browser test authoritative. | TEST |
| 22 | `` | P4 | Could this blank line improve grouping and legibility? | No AI needed. | KEEP |
| 23 | `.hero-actions{display:flex;align-items:center;gap:18px;flex-wrap:wrap;ma…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 24 | `@media(max-width:540px){.hero-actions{margin-top:15px}.hero-actions butt…` | P2 | Does this responsive rule pass 320px and 390px browser acceptance? | AI screenshot comparison possible; browser test authoritative. | TEST |

### upgrade.css — 58 physical lines

| Line | Current source cue | Priority | Improvement question | AI: where useful / where not | Status |
|---:|---|---|---|---|---|
| 1 | `` | P4 | Could this blank line improve grouping and legibility? | No AI needed. | KEEP |
| 2 | `/* 2026 release pass: meaning-first art direction and actual synthetic t…` | P4 | Is this comment true, current, and useful? | AI may flag stale docs; verify in code. | REVIEW |
| 3 | `.intro{padding-top:clamp(32px,4.5vw,72px);padding-bottom:26px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 4 | `.intro h1{font-size:clamp(40px,7.4vw,108px);max-width:1280px;margin-top:…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 5 | `.intro>p{max-width:650px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 6 | `.hero-actions{margin-top:18px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 7 | `.button-watch{display:inline-flex;align-items:center;justify-content:cen…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 8 | `.button-watch:hover,.button-watch[aria-pressed=true]{background:#29495a;…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 9 | `.intro-footer{margin-top:20px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 10 | `.simulation-stage{background:radial-gradient(ellipse at 64% 32%,#324e60a…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 11 | `.visual-orb{perspective:800px;filter:drop-shadow(0 0 50px #8ed3f33d);ani…` | P3 | Does this animation illustrate a state transition instead of decorating? | AI design critique optional, no model at runtime. | REVIEW |
| 12 | `.visual-orb .orb-core{background:radial-gradient(circle at 25% 24%,#d0e8…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 13 | `.mission-glyph{position:absolute;z-index:2;inset:0;display:grid;place-it…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 14 | `.visual-scene[data-mission=trust] .orb-core{background:radial-gradient(c…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 15 | `.visual-scene[data-mission=lead] .orb-core{background:radial-gradient(ci…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 16 | `.repaired .visual-orb .orb-core{background:radial-gradient(circle at 25%…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 17 | `.repaired .mission-glyph{color:#baf5d9}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 18 | `@keyframes float-object{50%{transform:translateY(-7px) rotate(3deg)}}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 19 | `.director-overlay[hidden],.test-log[hidden],.execution-plan[hidden]{disp…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 20 | `.director-overlay{position:absolute;inset:0;z-index:11;background:linear…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 21 | `.director-top{position:absolute;top:15px;left:20px;right:20px;display:fl…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 22 | `.director-message{position:absolute;top:31%;left:clamp(14px,3vw,44px);wi…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 23 | `.director-message b{display:block;font:750 clamp(25px,3.4vw,52px)/1.07 '…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 24 | `.director-message p{margin-top:14px;font-size:clamp(12px,1.2vw,16px);col…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 25 | `.director-bar{position:absolute;bottom:0;left:0;right:0;height:5px;backg…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 26 | `.director-bar>div{background:var(--gold);width:0;height:100%}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 27 | `.director-overlay #directorStop{pointer-events:auto;position:absolute;bo…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 28 | `.test-log{list-style:none;display:grid;gap:7px;margin:14px 0;padding:0}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 29 | `.test-log li{border:1px solid #54727b;background:#0d2735;display:flex;al…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 30 | `.test-log li b{font:800 10px 'Space Grotesk',sans-serif;letter-spacing:.…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 31 | `.test-log li[data-result=fail]{border-color:#b87974;background:#30212b}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 32 | `.test-log li[data-result=fail] b{color:#ffb7af}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 33 | `.execution-plan{margin-top:15px;padding:17px;border:1px solid #516a71;ba…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 34 | `.execution-plan>strong{font-size:10px;color:#ebc48f;letter-spacing:.13em…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 35 | `.plan-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));ga…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 36 | `.plan-grid>div{border-top:2px solid #a98e66;padding:9px;background:#162e…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 37 | `.plan-grid>div:nth-child(2){border-top-color:#85b7bf}.plan-grid>div:nth-…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 38 | `.plan-grid b{color:#e5ca9f;font-size:10px;letter-spacing:.08em}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 39 | `.plan-grid p{font-size:12px;color:#c4d6da;line-height:1.6;margin-top:6px…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 40 | `.plan-caveat{font-size:11px!important;color:#9fc1c7!important;margin:13p…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 41 | `.button-copy{margin-top:13px;border:1px solid #adc0c2;background:#152e3c…` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 42 | `.button-copy:disabled{opacity:.48;cursor:not-allowed}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 43 | `@media(max-width:700px){` | P2 | Does this responsive rule pass 320px and 390px browser acceptance? | AI screenshot comparison possible; browser test authoritative. | TEST |
| 44 | `.intro{padding-top:26px;padding-bottom:14px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 45 | `.intro h1{font-size:clamp(37px,9vw,68px);line-height:1.03}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 46 | `.intro>p{font-size:13px;line-height:1.6}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 47 | `.hero-actions button{width:100%;min-height:44px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 48 | `.hero-actions>span{display:none}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 49 | `.intro-footer{margin-top:14px;padding-bottom:8px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 50 | `.director-message{top:25%;left:14px;width:56%}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 51 | `.director-message b{font-size:clamp(21px,5.4vw,32px)}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 52 | `.director-message p{font-size:11px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 53 | `.director-overlay #directorStop{bottom:39px;right:8px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 54 | `.plan-grid{grid-template-columns:1fr}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 55 | `.plan-grid>div{padding:9px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 56 | `.plan-grid p{font-size:11px}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 57 | `}` | P3 | Can this rule be simplified without changing visible layout? | AI could suggest CSS cleanup; compare computed style and screenshots. | REVIEW |
| 58 | `@media(prefers-reduced-motion:reduce){.visual-orb{animation:none!importa…` | P2 | Does this responsive rule pass 320px and 390px browser acceptance? | AI screenshot comparison possible; browser test authoritative. | TEST |

### app.js — 153 physical lines

| Line | Current source cue | Priority | Improvement question | AI: where useful / where not | Status |
|---:|---|---|---|---|---|
| 1 | `(()=>{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 2 | `'use strict';` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 3 | `const $=id=>document.getElementById(id),gsap=window.gsap,reduced=matchMe…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 4 | `const missions=[` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 5 | `{id:'route',title:'THE DEAD END',short:'THE DEAD LINK',category:'CUSTOME…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 6 | `{id:'trust',title:'THE TRUST CHECK',short:'THE TRUST GAP',category:'BROW…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 7 | `{id:'lead',title:'THE MISSING REPLY',short:'THE LOST INQUIRY',category:'…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 8 | `];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 9 | `const state={index:0,phase:'choose',picked:-1,completed:new Set(),testTi…` | P1 | Can director timers be owned and canceled safely? | No runtime AI; use deterministic state transitions. | Patched and adversarially tested. |
| 10 | `const number=n=>String(n).padStart(2,'0');` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 11 | `function motion(target,vars){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 12 | `if(reduced//!gsap)return;` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 13 | `gsap.fromTo(target,{opacity:0,y:12},{opacity:1,y:0,duration:.55,stagger:…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 14 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 15 | `function clearTimers(){state.testTimers.forEach(clearTimeout);state.test…` | P1 | Can timer cancellation prevent a phantom verification? | AI not useful; write race tests. | Retested cancellation. |
| 16 | `/*INJECT_UPGRADE*/` | P4 | Is this comment true, current, and useful? | AI may flag stale docs; verify in code. | REVIEW |
| 17 | `function renderMission(index){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 18 | `clearTimers();state.index=index;state.phase=state.completed.has(index)?'…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 19 | `const m=missions[index];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 20 | `$('missionTitle').textContent=m.title;$('missionCounter').textContent='M…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 21 | `$('question').textContent=m.question;$('guidance').textContent='Pick the…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 22 | `$('urlBox').textContent=m.url;$('screenHeading').textContent=m.status;$(…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 23 | `$('artifactState').textContent='UNRESOLVED';$('artifactState').style.col…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 24 | `$('calloutLabel').textContent='RED TEAM / POTENTIAL FAILURE';$('calloutT…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 25 | `$('stageResult').textContent='ILLUSTRATIVE · NO CLIENT DATA';$('stage').…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 26 | `$('missionGlyph').textContent={route:'↗',trust:'◇',lead:'✉'}[m.id];$('vi…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 27 | `$('feedback').textContent='Choose the action that repairs the actual jou…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 28 | `$('outcome').hidden=true;$('testStatus').textContent='';$('testLog').rep…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 29 | `$('runTest').disabled=false;$('runTest').textContent='▶ SIMULATE ACCEPTA…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 30 | `$('advance').textContent='CHOOSE A REPAIR FIRST →';$('advance').disabled…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 31 | `const chooser=$('choices');chooser.replaceChildren();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 32 | `m.options.forEach(([name],i)=>{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 33 | `const b=document.createElement('button');b.type='button';b.dataset.index…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 34 | `const n=document.createElement('span');n.textContent=number(i+1);const t…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 35 | `b.addEventListener('click',()=>{if(state.director.active)interruptDirect…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 36 | `});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 37 | `$('missionSelector').replaceChildren();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 38 | `missions.forEach((mission,i)=>{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 39 | `const b=document.createElement('button');b.type='button';if(i===index)b.…` | P2 | Is aria-current correctly tokenized for accessibility? | AI can surface the semantic issue, but test DOM directly. | Open: currently uses true/false strings. |
| 40 | `const numberEl=document.createElement('b');numberEl.textContent=state.co…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 41 | `const words=document.createElement('div');const h=document.createElement…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 42 | `b.addEventListener('click',()=>{if(state.director.active)interruptDirect…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 43 | `$('missionSelector').append(b);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 44 | `});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 45 | `renderScore();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 46 | `if(state.phase==='passed'){revealRepair({alreadyTested:true})}` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 47 | `motion(['#browserArt','#callout','#question'],{stagger:.11});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 48 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 49 | `function choose(index){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 50 | `const m=missions[state.index];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 51 | `state.picked=index;document.querySelectorAll('#choices button').forEach(…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 52 | `if(index===m.right){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 53 | `$('feedback').textContent='✓ Strong decision. This action addresses the …` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 54 | `$('advance').disabled=false;$('advance').textContent='WATCH THE PROPOSED…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 55 | `}else{` | P2 | Does a wrong answer teach a measurable business insight? | Optional AI-assisted editorial variants; verify with real viewers. | Manual comprehension study open. |
| 56 | `$('feedback').textContent='↳ '+m.options[index][1];$('feedback').classNa…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 57 | `$('advance').disabled=true;$('advance').textContent='CHOOSE THE ACTUAL R…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 58 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 59 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 60 | `function revealRepair({alreadyTested=false,skipScroll=false}={}){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 61 | `const m=missions[state.index];state.phase=alreadyTested?'passed':'repair…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 62 | `$('outcome').hidden=false;$('outcomeProblem').textContent=m.problem;$('o…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 63 | `const releasePlans={route:['Approve the destination for retired URLs.','…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 64 | `const plan=releasePlans[m.id];$('planOwner').textContent=plan[0];$('plan…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 65 | `$('outcomeDetail').textContent='Here is the specific change and the proo…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 66 | `$('outcomeBadge').textContent=alreadyTested?'SIMULATED TEST REVIEWED':'P…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 67 | `$('urlBox').textContent=m.fixedUrl;$('screenHeading').textContent=m.fixe…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 68 | `$('missionGlyph').textContent={route:'↪',trust:'◆',lead:'✓'}[m.id];` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 69 | `$('artifactState').textContent='PROPOSED';$('artifactState').style.color…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 70 | `$('calloutLabel').textContent='BUILD TEAM / PROPOSED REMEDIATION';$('cal…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 71 | `$('stageResult').textContent='AFTER / SIMULATION ONLY';$('browserArt').c…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 72 | `$('advance').disabled=!alreadyTested;$('advance').textContent=alreadyTes…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 73 | `if(alreadyTested){$('runTest').disabled=true;$('runTest').textContent='S…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 74 | `else {$('runTest').disabled=false;$('runTest').textContent='▶ SIMULATE A…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 75 | `if(gsap&&!reduced){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 76 | `gsap.fromTo('#visualOrb',{scale:.82,rotation:-14,opacity:.45},{scale:1.0…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 77 | `gsap.fromTo('#screenHeading',{opacity:0,scale:.75,y:20},{opacity:1,scale…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 78 | `gsap.fromTo('#callout',{opacity:0,y:18},{opacity:1,y:0,duration:.65,ease…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 79 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 80 | `if(alreadyTested){renderReceipt(state.receipts.get(state.index),true)}` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 81 | `if(!alreadyTested&&!skipScroll){$('outcome').scrollIntoView({behavior:re…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 82 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 83 | `function simulateTest(){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 84 | `if(state.phase!=='repair')return;` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 85 | `const m=missions[state.index];state.phase='testing';` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 86 | `$('runTest').disabled=true;$('runTest').textContent='RUNNING MOCK FIXTUR…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 87 | `$('testLog').hidden=false;$('testLog').replaceChildren();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 88 | `$('copyReceipt').disabled=true;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 89 | `const evaluations=runSyntheticChecks(m.id);` | P0 | Can the fixture assertion fail when deliberately corrupted? | AI may propose mutations, but checks must remain deterministic. | Tampered route, MFA and inbox rejected. |
| 90 | `const receipt={mission:m.id,startedAt:new Date().toISOString(),checks:[]…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 91 | `let idx=0;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 92 | `const addCheck=()=>{` | P1 | Can delayed UI work mutate a newly selected mission? | No AI required, explicit lifecycle and test. | Repaired and tested. |
| 93 | `if(idx>=evaluations.length){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 94 | `const allPassed=receipt.checks.every(c=>c.pass);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 95 | `receipt.status=allPassed?'PASS':'FAIL';receipt.finishedAt=new Date().toI…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 96 | `state.receipts.set(state.index,receipt);state.testTimers=[];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 97 | `if(allPassed){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 98 | `state.completed.add(state.index);state.phase='passed';` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 99 | `$('runTest').textContent='MOCK FIXTURE PASSED ✓';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 100 | `$('testStatus').textContent='MOCK PASS — synthetic local fixtures only. …` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 101 | `$('outcomeBadge').textContent='MOCK PASS · NOT DEPLOYED';` | P1 | Does every result say MOCK rather than pretending a live fix? | AI can check claims for hallucinated evidence, but not assert success. | Retained simulation labels. |
| 102 | `$('artifactState').textContent='MOCK PASS';$('artifactState').style.colo…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 103 | `$('calloutLabel').textContent='QA TEAM / EVIDENCE REQUIRED';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 104 | `$('calloutTitle').textContent='The synthetic checks passed.';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 105 | `$('calloutBody').textContent='The real-world release still needs owner a…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 106 | `$('advance').disabled=false;$('advance').textContent=state.completed.siz…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 107 | `$('copyReceipt').disabled=false;renderScore();refreshSelector();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 108 | `if(gsap&&!reduced)gsap.fromTo('#outcomeBadge',{opacity:.18,scale:.88},{o…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 109 | `}else{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 110 | `state.phase='repair';$('runTest').disabled=false;$('runTest').textConten…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 111 | `$('testStatus').textContent='MOCK FAIL — at least one assertion failed. …` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 112 | `$('outcomeBadge').textContent='MOCK FAIL · INVESTIGATE';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 113 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 114 | `return;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 115 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 116 | `const item=evaluations[idx++];receipt.checks.push(item);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 117 | `const li=document.createElement('li');li.dataset.result=item.pass?'pass'…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 118 | `const badge=document.createElement('b');badge.textContent=item.pass?'PAS…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 119 | `const label=document.createElement('span');label.textContent=item.label;` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 120 | `li.append(badge,label);$('testLog').append(li);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 121 | `$('testStatus').textContent='Test '+idx+' of '+evaluations.length+': '+(…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 122 | `state.testTimers.push(setTimeout(addCheck,420));` | P1 | What owns this timer, and is it canceled on route changes? | No AI required, explicit state machines safer. | TEST |
| 123 | `};` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 124 | `state.testTimers.push(setTimeout(addCheck,240));` | P1 | What owns this timer, and is it canceled on route changes? | No AI required, explicit state machines safer. | TEST |
| 125 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 126 | `function renderScore(){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 127 | `$('scoreText').textContent=state.completed.size+' / 3 REVIEWED';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 128 | `$('progressFill').style.width=(state.completed.size/3*100)+'%';` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 129 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 130 | `function refreshSelector(){document.querySelectorAll('#missionSelector b…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 131 | `function advance(){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 132 | `if(state.phase==='choose'&&state.picked===missions[state.index].right)re…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 133 | `else if(state.phase==='repair')$('outcome').scrollIntoView({behavior:red…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 134 | `else if(state.phase==='passed'){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 135 | `if(state.completed.size===3){$('conclusion').hidden=false;$('conclusion'…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 136 | `else{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 137 | `const next=missions.findIndex((_,i)=>!state.completed.has(i));` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 138 | `renderMission(next<0?0:next);$('stage').scrollIntoView({behavior:reduced…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 139 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 140 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 141 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 142 | `$('jumpToGame').addEventListener('click',()=>{stopDirector();$('stage').…` | P2 | Does main CTA land near the actual choice? | AI can critique screenshot, but user testing required. | Live test still needed. |
| 143 | `$('watchDemo').addEventListener('click',startDirector);` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 144 | `$('directorStop').addEventListener('click',interruptDirectorForManualUse…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 145 | `$('copyReceipt').addEventListener('click',()=>{const r=state.receipts.ge…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 146 | `$('shareSummary').addEventListener('click',()=>{const summary='FAILURE →…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 147 | `$('advance').addEventListener('click',()=>{if(state.director.active)inte…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 148 | `$('runTest').addEventListener('click',()=>{if(state.director.active)inte…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 149 | `$('skip').addEventListener('click',()=>{if(state.director.active)interru…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 150 | `$('replay').addEventListener('click',()=>{stopDirector();state.completed…` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 151 | `renderMission(0);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 152 | `window.__ITT_PUBLIC_DEMO__={getState:()=>({mission:state.index,phase:sta…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 153 | `})();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |

### upgrade_runtime.js — 157 physical lines

| Line | Current source cue | Priority | Improvement question | AI: where useful / where not | Status |
|---:|---|---|---|---|---|
| 1 | `` | P4 | Could this blank line improve grouping and legibility? | No AI needed. | KEEP |
| 2 | `/* The suite below checks deterministic local fixtures, never production…` | P4 | Is this comment true, current, and useful? | AI may flag stale docs; verify in code. | REVIEW |
| 3 | `The same assertions can be challenged with an override in QA to prove th…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 4 | `paths do not award completion credits. */` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 5 | `function runSyntheticChecks(id,override={}){` | P1 | Are tests real assertions rather than cosmetic timers? | LLM cannot declare PASS; deterministic assertions. | Mock suite verified. |
| 6 | `if(id==='route'){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 7 | `const routes={old:{status:301,location:'/about'},current:{status:200},..…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 8 | `return [` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 9 | `{label:'Retired URL returns a permanent 301 redirect',pass:routes.old?.s…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 10 | `{label:'Redirect points to the approved current path',pass:routes.old?.l…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 11 | `{label:'Destination loads without another redirect',pass:routes.current?…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 12 | `];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 13 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 14 | `if(id==='trust'){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 15 | `const config={httpsRedirect:true,ownerMFA:true,mediaLoads:true,contactWo…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 16 | `return [` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 17 | `{label:'Mock site enforces an HTTPS redirect',pass:config.httpsRedirect=…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 18 | `{label:'Mock administrator requires MFA',pass:config.ownerMFA===true},` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 19 | `{label:'Mock contact form and video remain usable',pass:config.mediaLoad…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 20 | `];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 21 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 22 | `if(id==='lead'){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 23 | `const mock={` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 24 | `submitted:{id:'DEMO-INQUIRY-001',consent:true},` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 25 | `inbox:{id:'DEMO-INQUIRY-001'},` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 26 | `acknowledged:{id:'DEMO-INQUIRY-001'},` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 27 | `...override` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 28 | `};` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 29 | `return [` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 30 | `{label:'Synthetic inquiry was submitted with consent',pass:mock.submitte…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 31 | `{label:'Mock inbox contains the same inquiry identifier',pass:!!mock.sub…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 32 | `{label:'Mock owner acknowledgment matches the inquiry',pass:!!mock.submi…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 33 | `];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 34 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 35 | `throw Error('No synthetic suite for '+id);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 36 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 37 | `function renderReceipt(receipt,fromReload=false){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 38 | `if(!receipt)return;` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 39 | `$('testLog').replaceChildren();$('testLog').hidden=false;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 40 | `receipt.checks.forEach(item=>{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 41 | `const li=document.createElement('li');li.dataset.result=item.pass?'pass'…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 42 | `const badge=document.createElement('b');badge.textContent=item.pass?'PAS…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 43 | `const label=document.createElement('span');label.textContent=item.label;…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 44 | `});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 45 | `$('testStatus').textContent=(receipt.status==='PASS'?'MOCK SUITE PASS':'…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 46 | `$('copyReceipt').disabled=receipt.status!=='PASS';` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 47 | `if(fromReload)$('outcomeBadge').textContent='MOCK REVIEWED · NOT LIVE';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 48 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 49 | `function formatReceipt(r){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 50 | `return [` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 51 | `'ITT TOLD’EM / FAILURE → PROOF',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 52 | `'DEMONSTRATION TEST RECEIPT — NOT A PRODUCTION AUDIT',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 53 | `'Scenario: '+r.mission,` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 54 | `'Status: '+r.status,` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 55 | `'Started: '+r.startedAt,` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 56 | `'Finished: '+r.finishedAt,` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 57 | `'Fixture type: synthetic, deterministic, in-browser',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 58 | `'',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 59 | `...r.checks.map((x,i)=>(i+1)+'. '+(x.pass?'PASS':'FAIL')+' — '+x.label),` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 60 | `'',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 61 | `'No real website was modified, contacted or probed.',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 62 | `'No real customer lead or security account was accessed.',` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 63 | `'Client authorization and actual live acceptance evidence remain require…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 64 | `].join('\n');` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 65 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 66 | `async function copyText(value,button){` | P2 | Can keyboard/mobile users dismiss fallback copying and recover focus? | No AI needed; accessible dialog and close control. | Open. |
| 67 | `const original=button.textContent;` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 68 | `try{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 69 | `if(!navigator.clipboard?.writeText)throw Error('Clipboard permission una…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 70 | `await navigator.clipboard.writeText(value);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 71 | `button.textContent='COPIED ✓';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 72 | `}catch(e){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 73 | `// Browser clipboard permissions can be unavailable in embedded previews…` | P4 | Is this comment true, current, and useful? | AI may flag stale docs; verify in code. | REVIEW |
| 74 | `// Provide an explicit touch-accessible, keyboard-dismissable fallback.` | P4 | Is this comment true, current, and useful? | AI may flag stale docs; verify in code. | REVIEW |
| 75 | `const previous=document.activeElement;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 76 | `const dialog=document.createElement('div');` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 77 | `dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','t…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 78 | `dialog.setAttribute('aria-label','Copy the mock test receipt');` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 79 | `dialog.style.cssText='position:fixed;inset:0;z-index:99;background:#0207…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 80 | `const panel=document.createElement('div');` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 81 | `panel.style.cssText='width:min(700px,100%);height:min(560px,90vh);displa…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 82 | `const heading=document.createElement('strong');heading.textContent='Sele…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 83 | `const pane=document.createElement('textarea');pane.value=value;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 84 | `pane.setAttribute('aria-label','Text of mock acceptance receipt');` | P1 | Does Stop cancel scheduled director work? | No AI; cancel timers. | Repaired and tested. |
| 85 | `pane.readOnly=true;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 86 | `pane.style.cssText='width:100%;flex:1;min-height:130px;resize:none;backg…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 87 | `const closeButton=document.createElement('button');closeButton.type='but…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 88 | `closeButton.textContent='CLOSE & RETURN TO EXPERIENCE';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 89 | `closeButton.style.cssText='padding:12px;background:#dfbd8b;color:#0b1926…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 90 | `const dismiss=()=>{document.removeEventListener('keydown',keyboard);dial…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 91 | `const keyboard=e=>{if(e.key==='Escape'){e.preventDefault();dismiss()}els…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 92 | `closeButton.addEventListener('click',dismiss);` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 93 | `dialog.addEventListener('click',e=>{if(e.target===dialog)dismiss()});` | P2 | Does this handler conflict with autoplay, touch, keyboard, or earlier listeners? | AI can generate edge cases, then execute deterministic tests. | TEST |
| 94 | `document.addEventListener('keydown',keyboard);` | P1 | Can manual actions interrupt autoplay without corruption? | No AI; explicit event ownership. | Repaired and tested. |
| 95 | `panel.append(heading,pane,closeButton);dialog.append(panel);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 96 | `document.body.appendChild(dialog);pane.focus();pane.select();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 97 | `button.textContent='RECEIPT READY TO SELECT';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 98 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 99 | `setTimeout(()=>{button.textContent=original},3000);` | P1 | What owns this timer, and is it canceled on route changes? | No AI required, explicit state machines safer. | TEST |
| 100 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 101 | `function directorCue(title,body){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 102 | `$('directorTitle').textContent=title;$('directorBody').textContent=body;` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 103 | `if(gsap&&!reduced)gsap.fromTo('.director-message',{opacity:.18,y:20},{op…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 104 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 105 | `function stopDirector(){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 106 | `const d=state.director;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 107 | `d.timers.forEach(clearTimeout);d.timers=[];` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 108 | `if(d.interval){clearInterval(d.interval);d.interval=null}` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 109 | `if(gsap)gsap.killTweensOf('#directorBar');` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 110 | `d.active=false;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 111 | `$('directorOverlay').hidden=true;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 112 | `$('watchDemo').setAttribute('aria-pressed','false');` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 113 | `$('watchDemo').textContent='▶ WATCH THE DIRECTOR CUT';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 114 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 115 | `function interruptDirectorForManualUse(){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 116 | `if(!state.director.active)return;` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 117 | `stopDirector();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 118 | `// Prevent a pending director-initiated synthetic test from awarding a r…` | P4 | Is this comment true, current, and useful? | AI may flag stale docs; verify in code. | REVIEW |
| 119 | `if(state.phase==='testing'){` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 120 | `clearTimers();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 121 | `state.phase='repair';` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 122 | `$('runTest').disabled=false;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 123 | `$('runTest').textContent='▶ SIMULATE ACCEPTANCE TEST';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 124 | `$('outcomeBadge').textContent='INTERRUPTED · NOT VERIFIED';` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 125 | `$('testStatus').textContent='Previous mock check canceled. Run the compl…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 126 | `$('copyReceipt').disabled=true;` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 127 | `$('testLog').replaceChildren();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 128 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 129 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 130 | `function startDirector(){` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 131 | `if(state.director.active){stopDirector();return}` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 132 | `stopDirector();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 133 | `renderMission(0);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 134 | `const d=state.director;d.active=true;d.begin=Date.now();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 135 | `$('directorOverlay').hidden=false;$('watchDemo').setAttribute('aria-pres…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 136 | `$('directorBar').style.width='0%';$('directorTime').textContent='00:00 /…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 137 | `directorCue('ONE BROKEN LINK. ONE INTERRUPTED JOURNEY.','A potential cus…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 138 | `$('stage').scrollIntoView({behavior:reduced?'auto':'smooth',block:'cente…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 139 | `if(gsap&&!reduced)gsap.fromTo('#directorBar',{width:'0%'},{width:'100%',…` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 140 | `const timed=(ms,fn)=>{d.timers.push(setTimeout(()=>{if(d.active)fn()},ms…` | P1 | What owns this timer, and is it canceled on route changes? | No AI required, explicit state machines safer. | TEST |
| 141 | `timed(3800,()=>directorCue('LOOK FOR THE ACTUAL FAILURE.','More animatio…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 142 | `timed(6900,()=>{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 143 | `choose(missions[0].right);revealRepair({skipScroll:true});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 144 | `directorCue('ONE PRECISE INTERVENTION.','The proposed 301 redirect would…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 145 | `});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 146 | `timed(10600,()=>{` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 147 | `directorCue('NOW VERIFY THE CLAIM.','The local test harness checks that …` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 148 | `simulateTest();` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 149 | `});` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 150 | `timed(15100,()=>directorCue('A MOCK PASS IS NOT A CLIENT RESULT.','The r…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 151 | `timed(19500,()=>{stopDirector();$('outcome').scrollIntoView({behavior:re…` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 152 | `d.interval=setInterval(()=>{` | P1 | What owns this timer, and is it canceled on route changes? | No AI required, explicit state machines safer. | TEST |
| 153 | `if(!d.active)return;` | P2 | What happens under the opposite branch or invalid state? | AI can suggest counterexamples; deterministic tests run them. | TEST |
| 154 | `const sec=Math.min(20,Math.floor((Date.now()-d.begin)/1000));` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 155 | `$('directorTime').textContent='00:'+String(sec).padStart(2,'0')+' / 00:2…` | P2 | Is this string accurate, useful and explicitly marked simulated where required? | AI can simplify jargon but cannot fabricate evidence. | REVIEW |
| 156 | `},300);` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |
| 157 | `}` | P3 | What user outcome would break if this line were removed? Could it be simpler? | AI should help only if measured benefit exceeds cost and risk. | REVIEW |

### build.py — 13 physical lines

| Line | Current source cue | Priority | Improvement question | AI: where useful / where not | Status |
|---:|---|---|---|---|---|
| 1 | `from pathlib import Path` | P2 | Can build validate placeholders and reproduce output? | AI not needed; deterministic checksum and CI. | Manual rebuild tested; CI pending. |
| 2 | `root=Path(__file__).resolve().parent` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 3 | `text=(root/'template.html').read_text()` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 4 | `app=(root/'app.js').read_text()` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 5 | `assert app.count('/*INJECT_UPGRADE*/')==1` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 6 | `app=app.replace('/*INJECT_UPGRADE*/',(root/'upgrade_runtime.js').read_te…` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 7 | `css=(root/'style.css').read_text()+'\n'+(root/'upgrade.css').read_text()` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 8 | `for anchor,content in [('/*BUILD_CSS*/',css),('/*BUILD_GSAP*/',(root/'gs…` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 9 | `assert text.count(anchor)==1,(anchor,text.count(anchor))` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 10 | `text=text.replace(anchor,content)` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 11 | `assert '/*BUILD' not in text and '/*INJECT_UPGRADE*/' not in text` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 12 | `(root/'index.html').write_text(text)` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |
| 13 | `print('built public-safe interactive demo:',len(text),'characters, no ex…` | P2 | Does this build instruction fail safely and produce a deterministic artifact? | Use lint, compilation and hashes instead of an LLM. | TEST |

## Hard requirements for the next pass
- Validate accessibility with physical keyboard and screen reader; add an accessible close button for copy fallback.
- Review CSS per declaration, not just physical line: CSS files contain compact multi-rule lines.
- Compare user comprehension for a 60-second static video against the interactive experience; do not assume more animation improves conversion.
- Run touch and reduced-motion tests on physical iPad Safari.
- Verify new content version on publicly opened preview and record exact SHA256.
- No background AI agent or continuous monitoring was installed as part of this one-time audit.

[executed on device: ip-172-31-16-100 (50bc0c0a-54ae-4fd1-a42c-5555eeb267df)]
