export const EVIDENCE = {
    sectionLabel: '07 — Compliance',
    headline: 'A major part of getting you certified.',
    lead: 'Certification programs live or die on records and analysis. IV&V captures every test, log, and event automatically — timestamped, operator-attributed, append-only — and our local AI drafts the analysis and reports that turn raw runs into submission-ready documentation. The AI accelerates the work; your engineers own every conclusion that enters the record. Together, IV&V and AI-assisted reporting become a major part of how you reach certification.',
    principle: 'Every run, every parameter, every result — captured, time-stamped, and traceable.',
    columns: [
        {
            number: '01',
            title: 'ISO 26262',
            subtitle: 'Automotive functional safety',
            items: [
                'Fault-injection test results with pass/fail and device state at trigger',
                'Coverage records mapped to ASIL requirement identifiers',
                'Traceable test-to-requirement linkage per run',
                'Thermal cycling records across the rated operating range',
            ],
        },
        {
            number: '02',
            title: 'DO-178C / DO-254',
            subtitle: 'Airborne SW / HW',
            items: [
                'Structural and hardware-level test records with tool qualification data',
                'Repeatable build-and-run — same inputs produce identical artifacts',
                'Firmware and schema versions snapshotted at run start',
                'Timestamped operator log for every state-changing action',
            ],
        },
        {
            number: '03',
            title: 'IEC 62304 / FDA',
            subtitle: 'Medical device SW lifecycle',
            items: [
                'SOUP mitigation per 62304 §8',
                'Lifecycle-aligned logs with operator identity and immutable timestamps',
                'Long-running endurance records for continuous-duty qualification',
                'Append-only store — invalidations recorded with reason, never silent deletes',
            ],
        },
        {
            number: '04',
            title: 'IEC 61508',
            subtitle: 'Industrial functional safety',
            items: [
                'Functional-safety integrity records across SIL target tiers',
                'Environmental-stress records: temperature, humidity, vibration',
                'Event-based trigger logs with three-stamp timing on every record',
                'Explicit drop-count reporting — "did the test miss data?" answered numerically',
            ],
        },
    ],
    closingLine: 'Where it used to take weeks to assemble a submission from raw logs, AI-assisted analysis turns captured runs into draft reports in hours — anomalies flagged, results summarized, ready for your engineers to review and sign.',
} as const;
