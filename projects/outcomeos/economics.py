"""Explicit, testable unit-economics model; projections are not actual results."""
from math import isfinite


def model(monthly_revenue, monthly_fulfillment, monthly_support, monthly_other, cac, expected_months, seats=1):
    values = [monthly_revenue, monthly_fulfillment, monthly_support, monthly_other, cac, expected_months, seats]
    if any(not isinstance(x, (int, float)) or isinstance(x, bool) or not isfinite(x) or x < 0 for x in values):
        raise ValueError('Inputs must be finite nonnegative numbers')
    if expected_months <= 0 or seats < 1 or seats != int(seats):
        raise ValueError('Positive lifetime and whole-number customer count are required')
    monthly_cost = monthly_fulfillment + monthly_support + monthly_other
    monthly_contribution = monthly_revenue - monthly_cost
    lifetime_contribution = monthly_contribution * expected_months
    after_cac = lifetime_contribution - cac
    return dict(
        monthly_contribution=round(monthly_contribution, 2),
        contribution_margin_pct=round(100 * monthly_contribution / monthly_revenue, 2) if monthly_revenue else None,
        lifetime_contribution=round(lifetime_contribution, 2),
        net_contribution_after_cac=round(after_cac, 2),
        total_net_contribution=round(after_cac * seats, 2),
        ltv_to_cac=round(lifetime_contribution / cac, 2) if cac else None,
        cac_payback_months=round(cac / monthly_contribution, 2) if monthly_contribution > 0 else None,
        mpi=round(lifetime_contribution / cac, 2) if cac else None,
    )
