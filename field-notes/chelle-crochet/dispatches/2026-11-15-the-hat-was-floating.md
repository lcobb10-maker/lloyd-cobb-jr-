# The hat was floating. The code said it was working.

*Engineering field note · Lloyd Cobb Jr. · November 15, 2026*

I opened Chelle's Crochet on an iPad and saw the problem staring back at me. The hat was above the person's head. The page looked like a collection of pleasant templates instead of the business we were trying to build.

We'd previously tested the buttons and the camera preview. We had not proved that a hat could follow a face. Those are different tests, and calling the first one a victory was the mistake.

I traced it to the position. The old renderer painted the hat at fixed canvas coordinates. It had never been given a face detector. Of course the hat floated. There was nothing connecting it to the person.

So we changed the mechanism, not the marketing.

The new fitting study loads a face-landmark model only when somebody supplies a photo or starts a camera. It runs in the browser, using model and WebAssembly assets served from our AWS origin. The face geometry is translated into the visible canvas, including the mirrored front-facing camera. The brim follows the measured forehead and head width. It smooths movement rather than jumping every frame. If detection fails, the screen says so and offers manual placement.

The hat is still an illustrative textured overlay, not a physical simulation. The wool texture comes from photographs already on Chelle's site, not a fabricated claim of available inventory.

I tested more than whether the webcam turned green. I moved a local portrait 50 pixels in a synthetic video stream. A live tracker held face lock for multiple frames and the position moved from **0.4928 to 0.3987** of the preview width. The decrease is correct for a mirrored camera. The model also found a face in a real published reference photograph; I could switch manual alignment off and back on and recover the anchor. In the Shopify iframe, camera permission could be delegated and the model returned a real face lock.

**35 of 35 browser checks passed** across model anchoring, moving video, embedded Shopify behavior, and desktop/mobile layout. That is an engineering result from Chromium, not proof that a physical iPad Safari camera has passed. The first cold model load took about 6–8 seconds in our test environment.

The visual problem mattered too. We removed the cluttered heart-and-floating-cards opening, stopped treating decorative graphics as product evidence, and put the real photographed olive and red hats into an editorial black-and-ivory entrance. There's a straight line from *see the real hats* to *try one on* to *ask the maker*.

No Shopify theme was replaced. No purchase is pretended. No customer photograph is uploaded by the fitting code. The hosting still uses a temporary Cloudflare ingress, which needs to be made permanent.

You can inspect the [updated storefront](https://ittoldem.com/crochet), the [real mobile browser screenshot](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/editorial-home-mobile-v2.png), the [new fitting screenshot](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/fitlab-face-tracking-v2.png), and the [test receipt](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/fitlab-v2-release.json).

A tracked face is not a finished business. But it's finally tracking a face.

— Lloyd

*Public-work boundary: This note publishes sanitized observations, screenshots using existing public product photography, and test evidence. It does not publish proprietary ICM orchestration, credentials, private customer media, supplier costs, or unapproved production methods.*