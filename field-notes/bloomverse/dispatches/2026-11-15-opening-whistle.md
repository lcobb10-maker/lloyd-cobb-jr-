# The first whistle: two flower companies walk into a sprint

*By Lloyd Cobb Jr. · Field dispatch 001 · November 15, 2026*

On one screen, a small bouquet turns against a dark background. A visitor changes the petals from burgundy to violet and the vase from obsidian to porcelain. On the other screen, the visitor doesn't see a 3D world at all. Just a question: **Who is this for?**

Two teams. One assignment. Build a better flower company.

I started with a sketch and the kind of idea that has a tendency to grow legs before the first line of code gets written. A bouquet you could orbit. Flowers you could select. A vessel that might eventually leave the screen as a 3D-printed object. An agent that could help somebody give the right gift.

But a beautiful arrangement isn't the same thing as a flower business. Somewhere between the screen and the doorstep, someone has to count stems, price delivery, check the vessel, and answer for the order.

That's the part I wanted to put under pressure.

## A company on each side of the floor

**Bloomverse** plays for experience. The product starts with a 360-degree floral studio. You can rotate the piece, change the material of the vase, choose flower styles, and export a design brief. The prototype uses actual browser 3D, not a still image posing as a working feature.

**PetalRelay**, the challenger, doesn't want the customer to spend ten minutes admiring its technology. It wants to know who the gift is for, then get a suitable choice in front of the buyer. Three bouquets. Fewer decisions. A cleaner route to approval.

I assigned ten roles to each company: operations, technology, research, growth, finance, security, and independent review. Here's the distinction that matters: those twenty slots ran as **deterministic workers**. They are not twenty independently thinking AI agents yet. The live model connection remains disabled pending credentials and a spending approval.

If the label says AI but the test says scripted, the test gets the last word.

## The opening box score

On November 15, the initial AWS run wrote twenty role artifacts. Seventeen Python checks passed, without a failure. The browser opened both prototypes. WebGL initialized. Petal colors and vase materials changed. The guided gift prompt responded. The challenger selected a bundle without triggering a purchase.

Then came a small but useful head-to-head: a six-action Bloomverse script took **4.104 seconds**; a three-action PetalRelay script took **1.735 seconds**.

It would be easy to print a headline calling PetalRelay the winner.

It would also be wrong.

The scripts don't perform identical work. One exports a customized design. The other prepares a selection. There are no real customers in the comparison, no completed orders, no delivered flowers, and no evidence of a superior conversion rate.

That is not the finish line. It is the first measurement.

## The thing nobody can fake

The test suite tells me the interface can make the move. It does not tell me whether the florist can make the bouquet.

A production-ready vase has to survive more than a beautiful render. A real order needs materials, substitutions, labor, delivery economics, customer approval, and a clear set of instructions for Michelle to fulfill. An AI assistant has no business spending somebody else's money without permission.

Those are the next checkpoints.

The public record will show which ones clear the bar, and which ones don't. The private implementation stays private. I am not publishing the commercial agent architecture, original methods, unpublished designs, credentials, or anything that would hand the company's competitive machinery away.

I came up through reporting. The scene matters. The people matter. But if the numbers don't back the story, I am not running the headline.

This is the first whistle.

The score will have to be earned.

---

**Source notes:** [Sanitized sprint-01 evidence](../evidence/sprint-01.json) · [Public verification script](../proof/verify_public_receipt.py). These sources are self-reported, selected engineering records, not an independent audit of the private AWS environment.

**Disclosure:** No real customer purchases, florist deliveries, independent model-agent work or production manufacturing were completed in this dispatch.
