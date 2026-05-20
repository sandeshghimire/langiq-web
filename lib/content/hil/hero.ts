export const HIL_HERO = {
    eyebrow: 'silicon-centric / HIL — hardware-in-the-loop test platform',
    headline: {
        line1: 'Modular',
        accent1: 'Hardware-in-the-Loop',
        line2: '',
        accent2: 'Test Platform.',
        line3: '',
        line4: '',
    },
    subhead:
        'Drop your DUT onto the matching platform adapter, point the IV&V framework at it, and run a full regression suite before lunch. Built on Kria K26 — same Yocto BSP, same engineers, same evidence trail.',
    note: 'HIL-Bench · HIL-Rack · HIL-Cert · AMD Kria K26 · Yocto Linux · FreeRTOS',
    ctas: {
        primary: 'Connect',
        secondary: 'Architecture',
    },
    stats: [
        { number: '3', label: 'Chassis tiers' },
        { number: '6', label: 'Platform adapters' },
        { number: '5', label: 'Extension card types' },
    ],
    telemetry:
        'HIL / TELEMETRY :: ACTIVE      CHASSIS_COUNT 01 :: CYCLES',
    telemetrySuffix: '      UPTIME 99.97%      SCHEMA v1.0.0',
} as const;
