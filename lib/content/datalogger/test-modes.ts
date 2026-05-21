export const DATALOGGER_TEST_MODES = {
    sectionLabel: '03 — Logging modes',
    headline: 'Four modes. One evidence trail.',
    lead: 'Continuous logging for burn-in and endurance. Triggered logging for fault-onset capture. Burst mode for high-rate transient acquisition. Streaming mode for real-time dashboard visibility. All modes write to the same append-only store and produce the same IV&V-compatible certification artifact.',
    modes: [
        {
            title: 'Continuous',
            monoLabel: 'MODE 01 / CONTINUOUS',
            description:
                'Log all configured channels at a user-defined sample rate, indefinitely. Automatically segments the output at a configurable interval. Used for burn-in tests, long-run endurance programs, and field data collection campaigns.',
            example: 'e.g., 72-hour burn-in at 1 kSPS analog + full CAN-FD bus capture',
        },
        {
            title: 'Triggered',
            monoLabel: 'MODE 02 / TRIGGERED',
            description:
                'Arm the Datalogger and wait for a configurable trigger condition — digital edge, analog threshold crossing, CAN message ID, or a Boolean combination across channels. Capture a configurable pre/post window around the event.',
            example: 'e.g., capture 500 ms pre/post a CAN-FD error frame',
        },
        {
            title: 'Burst',
            monoLabel: 'MODE 03 / BURST',
            description:
                'Switch all analog channels to maximum sample rate (up to 1 MSPS) for a short configurable window. Used to capture high-frequency transients, power-supply noise, resonance events, or EMI signatures that would be aliased at normal operating rates.',
            example: 'e.g., 1 MSPS burst on a suspected EMI event at motor start',
        },
        {
            title: 'Streaming',
            monoLabel: 'MODE 04 / STREAMING',
            description:
                'Stream live data to the IV&V dashboard, a Grafana endpoint, or a custom consumer over gRPC — while simultaneously writing to the append-only store. Used for real-time visibility during test campaigns and road-load data collection.',
            example: 'e.g., live ECU telemetry during a road-load data collection drive',
        },
    ],
} as const;
