#!/usr/bin/env python3
"""Public-data contract for the Bloomverse field notes.

This validates editorial proof formatting, not a live AWS system or an AI model.
The private commercial implementation is deliberately NOT part of this repo.
"""
import json
import pathlib
import sys

EXPECTED_SCHEMA = "bloomverse.public-evidence.v1"


def check(path: pathlib.Path) -> None:
    record = json.loads(path.read_text(encoding="utf-8"))
    assert record["schema"] == EXPECTED_SCHEMA
    registration = record["agent_registration"]
    assert registration["team_count"] == 2
    assert registration["role_count"] == 20
    assert registration["deterministic_role_workers_executed"] <= registration["role_count"]
    assert registration["independent_model_agents_executed"] == 0

    tests = record["tests"]
    assert tests["python_unit_tests"]["passed"] >= 0
    assert tests["python_unit_tests"]["failed"] == 0
    assert tests["browser_prototype"]["uncaught_page_errors"] == 0
    assert tests["browser_prototype"]["webgl_initialized"] is True

    comparison = record["scripted_flow_comparison"]
    assert comparison["type"] == "synthetic_chrome_not_human_conversion"
    assert comparison["equal_workflows"] is False
    assert comparison["bloomverse"]["actions"] >= 1
    assert comparison["petalrelay"]["actions"] >= 1
    assert comparison["bloomverse"]["elapsed_ms"] > 0
    assert comparison["petalrelay"]["elapsed_ms"] > 0

    limits = record["limits"]
    for field in (
        "real_customers_tested", "paid_orders", "fulfillment_proofs",
        "production_ready_vase_files", "authorized_agent_purchases"
    ):
        assert limits[field] == 0

    filter_report = record["publication_filter"]
    assert filter_report and not any(filter_report.values())
    raw = path.read_text(encoding="utf-8")
    for marker in ("-----BEGIN PRIVATE KEY-----", "sk-proj-", "OPENAI_API_KEY="):
        assert marker not in raw, "Sensitive marker detected in public evidence"
    print("PASS: public editorial contract consistent; no claim of live business proof.")


if __name__ == "__main__":
    source = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else (
        pathlib.Path(__file__).resolve().parents[1] / "evidence" / "sprint-01.json"
    )
    check(source)
