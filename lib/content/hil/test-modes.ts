export const HIL_TEST_MODES = {
    sectionLabel: '03 — Hardware tiers',
    headline: 'Three chassis tiers. One architecture.',
    lead: 'HIL-Bench for desk-side bring-up, HIL-Rack for overnight CI regression, HIL-Cert for certification-grade evidence. Each tier shares the same K26 brain card, the same Yocto BSP, and the same IV&V integration. Fault injection — GPIO stuck faults, CAN bit errors, brown-out sweeps — runs as a campaign across all three tiers.',
    modes: [
        {
            title: 'HIL-Bench',
            monoLabel: 'TIER 01 / BENCH',
            description:
                'Four-slot desktop chassis for firmware bring-up at the engineer\'s desk. Plug in the DUT, open a browser to the Web UI, run a smoke test, and have results in under five minutes from power-on.',
            example: 'e.g., GPIO walk and CAN loopback on first board-spin',
        },
        {
            title: 'HIL-Rack',
            monoLabel: 'TIER 02 / RACK',
            description:
                'Six-slot 2U rackmount chassis for headless CI regression. Triggered by a Git push, results posted as JUnit XML to the IV&V dashboard. Failed runs include captured waveforms, bus traces, and console logs as artifacts.',
            example: 'e.g., overnight regression suite on real silicon',
        },
        {
            title: 'HIL-Cert',
            monoLabel: 'TIER 03 / CERT',
            description:
                'Eight-slot 3U chassis with calibrated measurement channels, PTP time sync, and signed evidence output. The certification regression pack produces a traceable report mapping each test to its requirement, including calibration provenance for every measurement channel.',
            example: 'e.g., ISO 26262 ASIL-B compliance evidence run',
        },
        {
            title: 'Fault Injection',
            monoLabel: 'MODE 04 / FAULT',
            description:
                'Deterministic fault injection campaign across all tiers. Stuck-high GPIO, CAN bit errors mid-frame, brown-out at varying voltages, sensor signal clipping — each fault scripted, injected, and scored against expected DUT behavior.',
            example: 'e.g., brown-out sweep at 3.3 V ± 15%',
        },
    ],
} as const;
