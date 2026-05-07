export const EVIDENCE = {
    sectionLabel: '07 — Regulatory evidence',
    headline: 'Every run produces the artifacts certification programs need.',
    lead: 'Every test run, every parameter, every result — captured, time-stamped, and traceable. The evidence database is append-only: runs are never silently deleted, operator actions are logged with identity and timestamp, and schema versions are snapshotted per run.',
    principle: 'Every run, every parameter, every result — captured, time-stamped, and traceable.',
    columns: [
        {
            number: '01',
            title: 'ISO 26262',
            subtitle: 'Automotive functional safety',
            items: [
                'Fault-injection test results with pass/fail and device state at trigger',
                'Coverage evidence mapped to ASIL requirement identifiers',
                'Traceable test-to-requirement linkage per run',
                'Thermal cycling records across the rated operating range',
            ],
        },
        {
            number: '02',
            title: 'DO-178C / DO-254',
            subtitle: 'Airborne SW / HW',
            items: [
                'Structural and hardware-level test artifacts with tool qualification data',
                'Repeatable build-and-run records — same inputs produce identical artifacts',
                'Firmware and schema versions snapshotted at run start',
                'Timestamped operator log for every state-changing action',
            ],
        },
        {
            number: '03',
            title: 'IEC 62304 / FDA',
            subtitle: 'Medical device SW lifecycle',
            items: [
                'Software-of-unknown-provenance mitigation evidence per 62304 §8',
                'Lifecycle-aligned logs with operator identity and immutable timestamps',
                'Long-running endurance records for continuous-duty device qualification',
                'Append-only store — invalidations recorded with reason, never silent deletes',
            ],
        },
        {
            number: '04',
            title: 'IEC 61508',
            subtitle: 'Industrial functional safety',
            items: [
                'Functional-safety integrity evidence across SIL target tiers',
                'Environmental-stress test records: temperature, humidity, vibration',
                'Event-based trigger logs with three-stamp timing on every record',
                'Explicit drop-count reporting — "did the test miss data?" answered numerically',
            ],
        },
    ],
} as const;
