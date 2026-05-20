export const HIL_EVIDENCE = {
    sectionLabel: '07 — Certification evidence',
    headline: 'Every channel calibrated. Every run traceable.',
    lead: 'Calibration provenance on every measurement channel. Signed, timestamped, requirement-mapped test reports. Append-only evidence database — every run, every parameter, every result. The same IV&V evidence framework, with HIL hardware provenance added.',
    principle: 'Every channel calibrated. Every run signed. Every artifact traceable to a requirement.',
    columns: [
        {
            number: '01',
            title: 'ISO 26262',
            subtitle: 'Automotive functional safety',
            items: [
                'Fault-injection results with DUT state at each fault trigger',
                'CAN-FD bus error rates mapped to ASIL requirement identifiers',
                'Thermal cycling records with calibrated temperature provenance',
                'Traceable test-to-requirement linkage per chassis run',
            ],
        },
        {
            number: '02',
            title: 'DO-178C / DO-254',
            subtitle: 'Airborne SW / HW',
            items: [
                'Hardware-level test artifacts with tool qualification and calibration data',
                'Repeatable build-and-run records — same configuration, identical artifacts',
                'Brain card firmware and schema versions snapshotted at run start',
                'Timestamped operator log for every state-changing action',
            ],
        },
        {
            number: '03',
            title: 'IEC 62304 / FDA',
            subtitle: 'Medical device SW lifecycle',
            items: [
                'Software-of-unknown-provenance mitigation evidence per 62304 §8',
                'Lifecycle-aligned logs with calibrated analog channel provenance',
                'Long-running endurance records with current and voltage monitoring',
                'Append-only store — invalidations recorded with reason, never silent deletes',
            ],
        },
        {
            number: '04',
            title: 'IEC 61508',
            subtitle: 'Industrial functional safety',
            items: [
                'Functional-safety integrity evidence across SIL target tiers',
                'Plant-in-the-loop fault records with closed-loop timing provenance',
                'Event-based trigger logs with FPGA-accurate three-stamp timing',
                'Explicit drop-count reporting on every bus and analog channel',
            ],
        },
    ],
} as const;
