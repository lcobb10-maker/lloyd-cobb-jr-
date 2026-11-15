# The flower before the feature

*By Lloyd Cobb Jr. · Field dispatch 002 · November 15, 2026*

The first version of Bloomverse gave people a bouquet they could turn around on the screen. You could touch the flowers, change the color, switch the vase, and see the result.

It worked. But working is a low bar when the person who walked in is trying to tell somebody they love them.

I had built a flower interface. I had not built a particularly good way to give flowers.

So I sent two research lanes looking through design galleries. One inspected 100 distinct Godly pages—23 websites and 77 templates. The other inspected 120 Awwwards site pages. We collected metadata and source links, then inspected 31 shortlisted preview images. That's not 220 live hands-on usability studies, and I won't write it like it was.

What I brought back was a simpler question: *Why are we making the customer learn the software before telling us who the flowers are for?*

## Put the person first

In the redesigned [Bloomverse preview](https://drops-merchandise-immunology-data.trycloudflare.com/showcases/bloomverse-ux/), the customer starts with love, a celebration, remembrance, business, or an unexpected gesture. Those choices shape a suggested flower, color, and vase. People who want to go deeper can switch into the 3D atelier. People who don't can move toward a review.

That was the competition's useful lesson. The premium experience needs the speed of the challenger, and the challenger could use some of the premium experience's heart.

The new interface also has a 360-degree procedural flower study, original flower artwork, an optional guided question, a real design-review dialog, and a downloadable JSON concept brief. The flowers and vase change in the browser. The quote remains an estimate. The conversational guidance is rule-based, not an independently operating AI florist.

This is a better *prototype*. It is not a fulfilled flower order.

## The box score

We tested both versions in mobile-sized Chromium at 390 pixels wide. The earlier screen had **11 of 15 visible buttons** narrower or shorter than 44 pixels. The redesigned atelier had **0 of 29** below that threshold.

They aren't identical interfaces, so these counts don't prove higher conversion. They do show that the controls got larger without horizontal overflow.

The new design also cleared **19 of 19 browser checks** across the main interaction path: WebGL starts, occasions change the suggested bouquet, digital gifting is labeled as a concept, flower and vase choices update, rotation works, a person can review the gift, and a JSON design brief downloads. A subsequent test checked the mobile return-to-preview control, touch target sizes, reduced-motion handling, and basic accessible labels. The public HTTPS preview returned 200 and opened the review path without browser errors.

That is measurable progress. I still need real users, real devices, real florist prices, a manufacturable vase, and Michelle's production approval.

## Where the idea came from

[Aerosound on Godly](https://godly.design/templates/aerosound) reminded me how much work a single well-presented object can do. [Aperol](https://godly.design/templates/aperol) showed the value of letting a story breathe. [Genomines on Awwwards](https://www.awwwards.com/sites/genomines) and [RI.Studio](https://www.awwwards.com/sites/ri-studio-2) pushed the spatial possibilities.

Those references are credited. Their art and implementation are not in this project.

The public page is a **sanitized front-end demonstration**, not the private ICM engine, supplier data, payment integration, or commercial orchestration code. The Cloudflare preview address is temporary.

I still want the kind of interface that makes somebody say, *How did they do that?*

But if you need to send flowers to your mother, the site ought to help you do that first.

That is the next standard.

---

**Technical disclosure:** Research counts refer to individual source-page inspections and selected visual previews. UX tests used automated Chromium and simulated touch; not physical iPad Safari. The public demonstration does not accept payment, confirm inventory, place an order, print a vase, or deliver flowers. Measured results are engineering checks rather than evidence of customer satisfaction or sales growth.
