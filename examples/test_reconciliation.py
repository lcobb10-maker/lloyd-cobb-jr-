"""Standalone portfolio illustration using invented records.
No production data, implementation or private dependencies.
Run: python3 -B -m unittest discover -s examples -p 'test_*.py'
"""
from collections import defaultdict
from decimal import Decimal
import unittest


def reconcile(rows):
    """Return totals per category; reject duplicates and invalid amounts."""
    totals = defaultdict(Decimal)
    seen = set()
    for key, category, raw in rows:
        if not key or not category or key in seen:
            raise ValueError("Missing identifier/category or duplicate record")
        amount = Decimal(raw)
        if not amount.is_finite() or amount < 0:
            raise ValueError("Amounts must be finite and nonnegative")
        seen.add(key)
        totals[category] += amount
    return dict(totals)


class ReconciliationTests(unittest.TestCase):
    def test_exact_decimal_totals(self):
        self.assertEqual(reconcile([("a", "A", "0.10"), ("b", "A", "0.20")]),
                         {"A": Decimal("0.30")})

    def test_grouping(self):
        self.assertEqual(reconcile([("a", "A", "2"), ("b", "B", "3")]),
                         {"A": Decimal("2"), "B": Decimal("3")})

    def test_duplicate_rejected(self):
        with self.assertRaises(ValueError):
            reconcile([("a", "A", "1"), ("a", "B", "2")])

    def test_invalid_amount_rejected(self):
        for value in ("NaN", "Infinity", "-1"):
            with self.subTest(value=value), self.assertRaises(ValueError):
                reconcile([("a", "A", value)])

    def test_empty_input(self):
        self.assertEqual(reconcile([]), {})

    def test_missing_identifier_rejected(self):
        with self.assertRaises(ValueError):
            reconcile([("", "A", "1")])


if __name__ == "__main__":
    unittest.main()
