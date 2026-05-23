export const TEST_MODES = {
    sectionLabel: '03 — Test modes',
    headline: 'Standardized test modes. Every peripheral. Every condition.',
    lead: 'The same vocabulary whether you are testing an IMU, a PCIe SSD, a camera, or a motor controller. Test suites are portable across peripherals and platforms without modification. From a single boot-time health check to a 72-hour thermal soak, the framework produces the same record shape and the same audit trail.',
    modes: [
        {
            title: 'One-shot',
            monoLabel: 'MODE 01 / ONESHOT',
            description:
                'A single discrete test: configure, execute, capture result, return. Used for boot-time health checks, peripheral acceptance gates, and deterministic functional checks. Fast, repeatable, audit-friendly.',
            example: 'e.g., IMU self-test on boot',
        },
        {
            title: 'Monitoring',
            monoLabel: 'MODE 02 / MONITOR',
            description:
                'Continuous sampling at a configured rate, streamed live with bounded buffering and explicit drop-count reporting. Used for thermal soak, vibration sweeps, and link-quality observation under sustained load.',
            example: 'e.g., 1 kHz IMU stream under thermal cycling',
        },
        {
            title: 'Event-based',
            monoLabel: 'MODE 03 / EVENT',
            description:
                'The device fires when a configured condition is met — threshold crossing, fault, state change, or environmental trigger. Captures the exact moment with timestamps from origin, relay, and server.',
            example: 'e.g., temperature threshold crossed',
        },
        {
            title: 'Long-running',
            monoLabel: 'MODE 04 / LONGRUN',
            description:
                'Hours or days of continuous execution with periodic progress snapshots and intermediate result capture. Used for endurance qualification and catching faults that only surface over time.',
            example: 'e.g., 72 h thermal endurance run',
        },
    ],
} as const;
