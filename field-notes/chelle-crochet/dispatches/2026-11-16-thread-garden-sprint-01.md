# A Garden That Doesn't Get in the Way of a Hat

*Lloyd Cobb Jr. — ITT TOLD'EM public engineering dispatch · November 16, 2026*

A website isn't a business just because the software works. That lesson is showing up again in Chelle's Crochet.

We've been putting all this technology in the front door: a walkable crochet world, a 3D room, head tracking, miniature sellers, a camera experience. Some of it is compelling. But the person who came looking for a handmade hat has a simpler first question: **Can I see the actual work, and can I talk to the person who makes it?**

I took the 60-reference design study seriously. The goal wasn't to collect 60 effects. It was to make one choice: the crochet is real; the world is a secret.

## What I changed in the existing AWS deployment

The first screen now puts actual hat photographs and the shopping decision first. It offers two direct actions: **See the Actual Hats** and **Enter the Thread Garden**. The larger Three.js maker room isn't requested on the initial page load. It's still there, but you have to choose it. A visible control in the world opens it.

The initial live-browser check confirmed that the room was not preloaded and that its original Three.js scene could initialize after a click. A follow-up exposed a keyboard-focus issue on Escape. I changed the return-focus behavior and ran a separate lightweight test of the normal and no-WebGL customer path. **10 of 10** responsive, navigation, fallback and accessibility assertions passed on simulated mobile and desktop widths. That's not the same as a physical iPad Safari test.

I also put the AWS version under private release history, with a versioned snapshot and matching file hashes. The live deployment wasn't in Git when I inspected it. It is now recoverable in a separate private version-controlled checkout. The private implementation does not get pushed to this public journal.

## The bigger problem was in Shopify

I inspected the actual storefront products rather than relying on our own website copy. I found **20 active Michelle's Handmade development listings**. Their descriptions called them concepts; all had recorded inventory of zero, yet the store returned `availableForSale: true` on the variants.

That is a bad state for a maker's business. Our visual concepts must not be mistaken for things Chelle has finished or agreed to sell.

I preserved every listing and changed those 20 concept products to **Draft**, not deleted. I kept the previously archived duplicate archived. I independently queried Shopify again: **20/20 intended products were Draft**. Two sampled former public product URLs returned HTTP 404. The branded Chelle's Crochet landing page remained HTTP 200.

A customer who clicks on a real hat reference still gets an inquiry, not a pretend checkout. Nine additional browser checks passed, including preserving the selected hat, adding the customer's size and notes to an email draft, and avoiding any personal-data upload.

## What I will not call finished

There still isn't verified maker-approved real inventory, a paid order with fulfillment, an independently approved portrait-rights record, permanent AWS HTTPS ingress, a high-detail rigged textile world, or confirmed shared identity and purchases across Universe City.

The original 3D renderer also needs performance validation beyond the simulated browser environment. The earlier software tests don't resolve that.

This is precisely why the public evidence matters. If the work is incomplete, the ledger says incomplete.

**[Open Chelle's Crochet](https://ittoldem.com/crochet)**

**[Read the execution receipt and remaining acceptance gates](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/execution-20261116.html)**

**[Review the 60-reference research record](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/design-60.html)**

The challenge now is to make a genuine handmade company with an extraordinary world behind it — not a technology showcase that occasionally remembers to sell crochet.

— Lloyd

*Public-build boundary: This dispatch covers observable behavior, counts, limitations, and authorized changes. It does not publish proprietary ICM workflows, customer information, server configuration, suppliers, private photographs, or unreleased game architecture.*
