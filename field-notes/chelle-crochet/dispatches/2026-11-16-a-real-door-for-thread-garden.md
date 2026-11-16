# The Storefront Needed a Real Door

*Lloyd Cobb Jr. — ITT TOLD’EM field report · November 16, 2026*

We had a crochet storefront, a 3D garden and a private fitting studio. On paper, three experiences. In the browser, a customer could still run into a wall.

One problem was simple: the experiences were sitting behind a temporary Cloudflare address. Another was more embarrassing. The first Shopify pages returned HTTP 200, but the content inside their frames wasn't showing. The AWS server was sending `frame-ancestors 'none'` and `X-Frame-Options: DENY`. The outer page was alive. The experience was blocked.

I corrected that by permitting **only the public Chelle storefront, Thread Garden and Fit Studio** to be framed by our `ittoldem.com` storefront. Other documents retain the stricter protection. I restarted and checked the AWS service, then tested the actual client JavaScript inside the Shopify frames.

I also gave each experience a real branded entrance:

- [Chelle’s Crochet — the maker’s storefront](https://ittoldem.com/pages/chelle-crochet)
- [The Thread Garden — a shareable miniature world](https://ittoldem.com/pages/chelle-thread-garden)
- [The Fit Studio — private digital hat fitting](https://ittoldem.com/pages/chelle-fitlab)

They’re connected from the main Shopify page now, not merely hidden inside a development showcase.

Then a separate issue turned up. We had moved 20 unapproved crochet concepts to Draft, as we should have, but the old editorial interface still linked to their former public product URLs. Those links had become 404s. I replaced that route with a maker inquiry and removed the implied retail price from those unapproved visual studies. No fictional checkout, no made-up inventory.

The world’s shared link now points to the branded Shopify page rather than the temporary tunnel. I exported and inspected the story-image workflow in Chromium; the image file was generated. The branded navigation, concept inquiries and world sharing went through live browser checks.

**Latest record: 39 of 39 scoped browser and navigation checks passed across four suites.** Those are scoped tests, not a certification of every promise in the master plan.

The next work is harder, and I'm not going to pretend otherwise. The 3D textile characters still need visual and performance qualification. The virtual hat needs a real iPad Safari camera test. Universe City identity and entitlements are not yet integrated. Chelle’s own approved products, pricing, materials and fulfillment rules must exist before accepting real orders. The AWS origin still uses a temporary public tunnel underneath these branded pages.

This is the actual advantage of building in public: you can see the difference between a site that answers and an experience that works. You can see what we fixed, and you can see what we have not.

[Live release evidence and open acceptance gates](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/live-release-evidence.html)

— Lloyd

*Public-build boundary: No customer portraits, supplier economics, sensitive infrastructure, credentials, or proprietary ICM orchestration are published.*