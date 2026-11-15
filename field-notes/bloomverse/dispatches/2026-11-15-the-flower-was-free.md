# The flower was free. But where was the flower?

*By Lloyd Cobb Jr. · Field dispatch 003 · November 15, 2026*

The screen said FREE.

That sounded good. I clicked through the first version of Bloomverse, picked a digital flower, and found a problem that didn't take a team of twenty to explain: the visitor couldn't actually take the flower home.

There was a review. There was a JSON file. There was a product idea.

But you can't give your mother a JSON file and call it flowers.

I sent that back to the build.

## What changed

Now a visitor can choose a flower, change its petals and vase, select **Digital flower**, and actually make one. The same bouquet they've been turning in the 3D studio becomes a personalized 1080 × 1350 PNG greeting card.

There's room for the recipient's name and a personal note. No account. No credit card. No request to hand over somebody's contact information. The image is composed in the browser and downloaded locally.

If the device supports sharing images, there's a native sharing option. If it doesn't, the screen says so and lets you save the PNG. We tested the fallback. We haven't claimed to have tested a real iPad share sheet.

Here's the [working experience](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/bloomverse-ux/), and here's an [actual PNG produced by the test](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/bloomverse-ux/sample-digital-flower.png). The preview hostname is temporary.

## The box score

I wanted to see whether this was a feature or just another button with a promise attached.

- **10 of 10** digital-gift tests passed against the public HTTPS build: creation, visible 1080 × 1350 image, personalized changes, download, honest share fallback, no console errors, and the original physical-gift review still working.
- **5 of 5** edge-case checks passed, including switching occasions without accidentally replacing somebody's handwritten note and handling a long unbroken message.
- **19 of 19** original interface regression checks passed.
- A simulated mobile-screen control audit went from **11 undersized controls out of 15** in the earlier version to **0 out of 29** in the updated atelier, using a 44-pixel threshold.
- **29 Python checks** passed across the ICM workflow and design-research audit.

In the browser test, the application generated a real PNG of about **1.7 MB**. The network recorder saw **zero POST requests** while creating the recipient's card. Those findings belong to the tested session, not every possible browser or device.

The [sanitized evidence receipt](../evidence/2026-11-15-digital-flower-ux.json) carries the numbers, method and remaining limits.

## Why the distinction matters

The two flower companies were supposed to challenge one another. Bloomverse wants the experience to feel extraordinary. PetalRelay keeps asking why every gift has to be complicated.

That is the kind of argument I want to see in the work.

A premium interface has no value if somebody has to understand the interface before they can do something kind.

One working free gift does not establish a company. But it gives the company a small piece of the promise it can actually keep.

The 3D still needs real iPad Safari testing. There are no confirmed florist orders. The vase has not been printed. The guide is scripted, not a connected AI florist. The future storefront will need accurate inventory, prices, delivery, and human approval before taking anybody's money.

I won't hang an opening-day ribbon on a software demo.

But I can point to the flower somebody can now take with them.

That's an improvement you can see.

---

**Source notes:** [Public UX evidence](../evidence/2026-11-15-digital-flower-ux.json) · [Live design prototype](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/bloomverse-ux/) · [Generated flower](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/bloomverse-ux/sample-digital-flower.png).

**IP and testing disclosure:** This is public engineering reporting, not a release of the private ICM orchestration or internal commercial methods. Browser-delivered presentation code is necessarily inspectable. All reported interactions were tested in Chromium with emulated mobile settings, not physical iPad Safari. No real customer purchase or fulfillment is claimed.
