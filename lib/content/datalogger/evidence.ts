export const DATALOGGER_EVIDENCE = {
    sectionLabel: '07 — Compliance',
    headline: 'Independence. Append-only evidence. Reproducible runs.',
    lead: 'The Datalogger accelerates certification by providing independence (own OS + HAL), append-only evidence, a uniform data format across all protocols and industries, and reproducible runs. AI-assisted analysis helps engineers generate reports — but the engineer owns the conclusions, keeping evidence admissible.',
    principle: 'Independence. Append-only evidence. Uniform data format. Engineer-owned conclusions.',
    aiNote: 'AI assists analysis — it does not own the conclusion. Every AI-generated draft is reviewed and approved by the engineer before it enters the evidence record. The evidence store is append-only; AI consumes it but never alters it. This is what keeps evidence admissible under DO-178C, IEC 62304, IEC 61508, and ISO 26262.',
    columns: [
        {
            number: '01',
            title: 'IEC 62304',
            subtitle: 'Medical device SW lifecycle',
            items: [
                'Own OS (LoggerOS) and HAL provide independence — no shared components with the DUT under test',
                'Append-only store — invalidations recorded with reason and operator identity, never silent deletes',
                'Uniform data format means IV&V queries apply directly to field data without transformation',
                'AI-assisted analysis and report generation; engineer reviews and approves all conclusions',
            ],
        },
        {
            number: '02',
            title: 'IEC 61508',
            subtitle: 'Industrial functional safety',
            items: [
                'Functional-safety integrity evidence across SIL target tiers',
                'Event-based trigger logs with three-stamp timing and configurable pre-trigger buffer',
                'Reproducible runs — same configuration produces identical artifact shape every time',
                'Explicit drop-count reporting on every sensor and protocol channel',
                'AI-assisted analysis generates draft reports; the engineer reviews and approves all conclusions — AI does not certify results',
            ],
        },
        {
            number: '03',
            title: 'ISO 26262',
            subtitle: 'Automotive functional safety',
            items: [
                'Road-load and field records traceable from sensor capture through to requirement linkage',
                'Tamper-evident log with hardware-signed segments and AES-256 at-rest encryption',
                'Native IV&V node — field capture replays as HIL stimulus at original timing for regression',
                'One data format across all protocols; same evidence queries apply from bench to field',
                'AI-assisted analysis correlates field anomalies against bench IV&V results in a single query; the engineer owns every conclusion and the evidence record is never altered',
            ],
        },
        {
            number: '04',
            title: 'DO-178C',
            subtitle: 'Airborne SW',
            items: [
                'IRIG-106 Ch10, ARINC 429, and MIL-STD-1553 capture with timestamp accuracy to sub-microsecond',
                'Repeatable capture configurations — same setup, identical artifact shape for re-test evidence',
                'Secure boot and hardware-signed segments satisfy tool qualification provenance requirements',
                'AI-assisted analysis generates draft reports; human engineer owns final certification conclusions',
            ],
        },
    ],
    closingLine: 'Where it used to take weeks to assemble a submission from raw logs, AI-assisted analysis turns captured runs into draft reports in hours — anomalies flagged, results summarized, ready for your engineers to review and sign.',
} as const;
