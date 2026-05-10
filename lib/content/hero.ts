export const HERO = {
    eyebrow: 'silicon-centric/ IV&V — independent verification and validation',
    headline: {
        line1: 'Independent',
        accent1: 'Validation',
        line2: 'and',
        accent2: 'Verification.',
        line3: '',
        line4: '',
    },
    subhead:
        'Independently validate and verify your embedded hardware from silicon to sensor — CPU cores, cache, peripherals, and connected devices, with a complete evidence trail.',
    note: 'Xilinx Zynq MPSoC · NVIDIA Jetson · NXP i.MX 93/95 · TI Sitara · Raspberry Pi',
    ctas: {
        primary: 'Connect',
        secondary: 'Architecture',
    },
    stats: [
        { number: '6', label: 'Reference platforms' },
        { number: '3', label: 'Test modes' },
        { number: '5', label: 'Coverage tiers' },
    ],
    telemetry:
        'IV&V / TELEMETRY :: ACTIVE      NODE_COUNT 02 :: SAMPLES',
    telemetrySuffix: '      UPTIME 99.94%      SCHEMA v1.0.0',
} as const;
