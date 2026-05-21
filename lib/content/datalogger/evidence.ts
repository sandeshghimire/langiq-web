export const DATALOGGER_EVIDENCE = {
    sectionLabel: '07 — Certification evidence',
    headline: 'Every channel calibrated. Every capture traceable.',
    lead: 'Calibration provenance on every analog input. Signed, timestamped, requirement-mapped capture records. Append-only evidence database — every session, every channel, every sample. The IV&V evidence framework extended with Datalogger channel and time-reference provenance.',
    principle: 'Every channel calibrated. Every capture signed. Every artifact traceable to a requirement.',
    columns: [
        {
            number: '01',
            title: 'ISO 26262',
            subtitle: 'Automotive functional safety',
            items: [
                'Road-load data records with calibrated analog and CAN-FD channel provenance',
                'Power-rail telemetry correlated to ASIL requirement identifiers',
                'GPS-disciplined timestamps correlated across multi-unit campaigns',
                'Traceable test-to-requirement linkage per capture session',
            ],
        },
        {
            number: '02',
            title: 'DO-178C / DO-254',
            subtitle: 'Airborne SW / HW',
            items: [
                'Flight-data records with FPGA-accurate timestamps and tool qualification evidence',
                'Repeatable capture configurations — same setup, identical artifact shape',
                'Brain card firmware and schema versions snapshotted at session start',
                'Timestamped operator log for every state-changing action',
            ],
        },
        {
            number: '03',
            title: 'IEC 62304 / FDA',
            subtitle: 'Medical device SW lifecycle',
            items: [
                'Long-run endurance records with calibrated analog channel provenance',
                'Software-of-unknown-provenance mitigation evidence per 62304 §8',
                'Append-only store — invalidations recorded with reason, never silent deletes',
                'Lifecycle-aligned logs with individual channel calibration certificates',
            ],
        },
        {
            number: '04',
            title: 'IEC 61508',
            subtitle: 'Industrial functional safety',
            items: [
                'Functional-safety integrity evidence across SIL target tiers',
                'Run-time fault records with triggered pre/post windows and channel provenance',
                'Event-based trigger logs with FPGA-accurate three-stamp timing',
                'Explicit drop-count reporting on every bus and analog channel',
            ],
        },
    ],
} as const;
