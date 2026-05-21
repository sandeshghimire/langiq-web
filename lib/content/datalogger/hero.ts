export const DATALOGGER_HERO = {
    eyebrow: 'silicon-centric / Datalogger — multi-channel data acquisition & logging platform',
    headline: {
        line1: 'Silicon-native',
        accent1: 'Data Acquisition',
        line2: '',
        accent2: '& Logging.',
        line3: '',
        line4: '',
    },
    subhead:
        'Capture, timestamp, and archive every signal from your embedded system. Multi-channel analog, digital, and bus capture on real silicon — FPGA-accurate, calibrated, append-only. Same Yocto BSP, same IV&V evidence framework.',
    note: 'Kria K26 · Yocto Linux · FreeRTOS · AMD FPGA · CAN-FD · Analog I/O · UART · SPI · I²C',
    ctas: {
        primary: 'Connect',
        secondary: 'Architecture',
    },
    stats: [
        { number: '128', label: 'Log channels' },
        { number: '1 MSPS', label: 'Burst sample rate' },
        { number: '∞', label: 'Append-only retention' },
    ],
    telemetry:
        'DATALOGGER / TELEMETRY :: ACTIVE      CHANNELS 128 :: SAMPLES',
    telemetrySuffix: '      UPTIME 99.98%      SCHEMA v1.0.0',
} as const;
