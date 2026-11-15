# How this beat gets reported

I treat my own product claims the way I would treat anybody else's numbers: find the source, identify the missing context, and don't let an exciting sentence outrun the evidence.

## Three separate columns

**Observed:** A test actually ran, a page actually rendered, a file was checked, or a buyer actually completed the described step. The report names which environment was observed.

**Modeled:** A budget, conversion target, hypothetical design preference, or business score is a scenario. It stays hypothetical until measured.

**Unverified:** A sprint is scheduled but hasn't run; the software hasn't reached a live storefront; a customer hasn't ordered; a printer hasn't produced the object; an AI agent hasn't executed.

### Reproducibility

Public proof utilities check the internal consistency of sanitized evidence. They do **not** independently attest to private infrastructure. The origin of the measurements and any access limitations must stay in view.

The public repository has a small GitHub Actions test for that narrow contract. Secrets, provider credentials, production settings, agent prompts, unlicensed designs and private source are excluded.

### Dispatch format

Each dispatch should carry the date, a scene-setting lead, the competing hypotheses, one real result, one counterargument, what failed or remains unseen, and the next falsifiable acceptance criterion.

**Never** write:
- "Twenty AI agents worked" when twenty deterministic workers ran.
- "Customers preferred it" after scripted tests with no customers.
- "Revenue is growing" when there were no paid orders.
- "Production ready" while fulfillment and manufacturing gates are open.
- "Independent proof" when only a self-reported artifact exists.

**Do** write what was tested, how it was measured, what it does not establish, and what would change the conclusion.

## Next independently verifiable gates

1. iPad touch interaction captured with reproducible evidence.
2. Florist-approved bill of materials, lead time, and substitution rules.
3. Watertight vase model printed and physically inspected.
4. Shopify sandbox purchase-to-production packet with verified totals.
5. Human participants completing the same buyer tasks in both experiences.
6. Owner-controlled spending authorization for agent gifting.

The intended beat is **four three-hour engineering sprints per day**. Publication should follow verified work, not the clock. No new evidence means no victory post.

[Return to Bloomverse](./README.md).
