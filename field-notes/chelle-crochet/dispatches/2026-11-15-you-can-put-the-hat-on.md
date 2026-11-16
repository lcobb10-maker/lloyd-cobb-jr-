# You can actually put the hat on now

*Lloyd Cobb Jr. — Engineering field dispatch, November 15, 2026*

A pretty website doesn't answer the question a customer came with.

She sees a crochet hat. She wants to know whether it fits. How much is it? Can she order one? And if she can't yet, can she at least see how it might look?

Chelle's Crochet was doing some lovely storytelling. But some of the experience looked more like an art department experimenting than a merchant getting ready to do business. There was a 3D village on the page, and its JavaScript entry point was missing from the AWS release. Visitors could see the promise without walking through it.

So I went looking for the handoff between imagination and actually doing something.

## First, the people making hats

I checked 50 distinct headwear reference URLs, starting with a public hat-brand directory and adding specialist crochet, kufi and handmade-headwear references. We got analyzable HTTP 200 pages from 32 of them. Eighteen were rate-limited or inaccessible. The audit logged page titles, URLs and static HTML signals for prices, sizing, buying, shipping, returns, video and virtual try-on. Those are signals, not proof of every competitor's real interactions. I didn't pretend to inspect the inaccessible pages.

The immediate lesson: we're not ready to win by pretending we have more items in stock. We can win by making the handmade process visible and making the path to the maker shorter.

[See the 50-reference register and its limitations](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/headwear-50.html).

## The world you can walk into

The AWS crochet world now has a working Three.js scene, scroll-linked parallax and animated maker characters. I added a separate, visible market-TV navigation panel and walk controls, with keyboard alternatives. The screen points to real red and moss-green hat photographs, not a fictional shopping checkout. The soundtrack is an opt-in, original, low-volume synthesized ambient tone; there is a mute control.

The nine browser assertions for that TV/walk lane passed. The spatial walk follows a guided camera timeline; it isn't a collision-authoritative multiplayer game. That's an important distinction.

## Your face, the hat and a shareable picture

We also built a manual hat try-on in the browser. You can load your own picture—or choose a camera preview after giving permission—place an illustrated crochet hat over your head, drag it, size it and rotate it. Then you save a real **1080 × 1920 Instagram Story image**. The browser did not transmit the test photo to the server. I tested a synthetic photo, the controls, and the output PNG. Nine checks passed. Four more synthetic-camera permission/start-stop checks passed.

It is not live face tracking, nor is it a native Instagram filter. Those are different engineering acceptance gates. What works today is a private fitting study with an actual file you can share.

[Try the hat on a photo](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/#hat-tryon).

## Then I made the answer to 'how do I buy?' unmistakable

There are two authentic hat photographs on the site. They are **references, not verified stock**. A customer can choose a look, measure their head, specify size and colors, and send a maker inquiry. Chelle needs to confirm materials, price, turnaround and fulfillment before money changes hands.

We put that ordering explanation on the public Shopify page at **[ittoldem.com/crochet](https://ittoldem.com/crochet)** and embedded the AWS experience there. All ten browser checks on the Shopify journey passed.

The machine side got attention too: a read-only agent-catalog JSON and site guide, plus a private local MCP adapter with four safe discovery/instruction tools. The adapter can find references and tell a shopper what to do. It can't charge anyone, promise an inventory count, or take a customer's photo. MCP protocol initialization, tool listing, tool call and resource read were exercised. A public remote MCP endpoint is not running.

I didn't add fake product offers to search-engine structured data. We aren't going to buy SEO relevance by misrepresenting inventory.

## What the box score really means

**32 of 32 recorded browser assertions passed**, across walk/TV, local try-on, synthetic camera and the Shopify customer journey. The [public proof ledger](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/chelle-crochet-wayne-nj/proof-20261115.html) links the actual screenshots and machine-readable evidence. The SHA-256 receipt is `5f156a8e88cc027bccf0303067f36f977b6a086a2e0c1ca011c6c9128a045922`.

That score isn't 32 customer interviews. It isn't an iPad Safari certification. The Cloudflare Quick Tunnel is temporary. And no completed paid crochet hat order has been verified.

But now someone can walk through the story, find the real hat, try on an illustrated version privately, and find the human who might make it. The customer isn't being told that a picture is an order.

You can see the difference between an experiment and the beginnings of a business.

— Lloyd

*Public-build boundaries: This field note includes links, truthful tests, design choices and limitations. Private ICM orchestration, supplier details, credentials, client notes and unreleased commercial logic are not published.*
