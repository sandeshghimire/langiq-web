export const DATALOGGER_TEST_MODES = {
    sectionLabel: '03 — Logging modes',
    headline: 'Four modes. One evidence trail.',
    lead: 'One-shot for discrete captures. Monitoring for continuous live sampling. Event-based for condition-triggered capture with three-stamp timing. Long-running for hours or days of field logging with progress and intermediate evidence. All modes write to the same uniform data format.',
    modes: [
        {
            title: 'One-shot',
            monoLabel: 'MODE 01 / ONE-SHOT',
            description:
                'Discrete test, captured result. Arm, trigger once, capture a defined window, write to evidence store. Used for acceptance tests, single-event capture, and repeatable bench measurements where a clean, bounded artifact is required.',
            example: 'e.g., single power-on sequence captured and written to the evidence store',
        },
        {
            title: 'Monitoring',
            monoLabel: 'MODE 02 / MONITORING',
            description:
                'Continuous sampling, streamed live with bounded buffering and drop reporting. The logger runs indefinitely at the configured sample rate, streaming to the GUI or SDK in real time while writing locally. Drop events are counted and reported explicitly — never silently discarded.',
            example: 'e.g., 24-hour environmental monitoring streamed live and stored locally',
        },
        {
            title: 'Event-based',
            monoLabel: 'MODE 03 / EVENT-BASED',
            description:
                'Fires on a configured condition with three-stamp timing: condition-detect, capture-start, and capture-end. Trigger on threshold crossing, protocol message match, digital edge, or a Boolean combination across sensors. Pre-trigger buffer configurable.',
            example: 'e.g., vibration threshold breach triggers 500 ms pre/post capture with three-stamp record',
        },
        {
            title: 'Long-running',
            monoLabel: 'MODE 04 / LONG-RUNNING',
            description:
                'Hours or days of execution with progress reporting and intermediate evidence checkpoints. Segments output at configurable intervals so partial data is accessible without stopping the run. Supports OTA config updates mid-run via LoggerOS.',
            example: 'e.g., 7-day field deployment with hourly evidence checkpoints and remote status via web UI',
        },
    ],
} as const;
