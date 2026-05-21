export const DATALOGGER_CAPABILITIES = {
    sectionLabel: '05 — What the Datalogger does',
    headline: 'Five capture disciplines. Evidence up.',
    lead: 'From high-resolution analog capture to passive protocol bus monitoring, power-rail analysis to GPS-synchronised multi-unit campaigns. Every discipline writes to the same append-only evidence database — ready for the IV&V dashboard and certification submission.',
    features: [
        {
            icon: 'Activity',
            title: 'Analog signal capture',
            description:
                'Up to 16 calibrated differential analog channels at configurable rates up to 1 MSPS burst. Individual channel calibration with traceable provenance. Used for ADC/DAC validation, sensor characterisation, and power-supply analysis. Calibration certificate included in every certification report.',
        },
        {
            icon: 'Cpu',
            title: 'Protocol bus monitoring',
            description:
                'Passive, non-intrusive capture on CAN-FD, UART, SPI, I²C, and Ethernet simultaneously. Full frames with FPGA-accurate inter-frame timestamps. Export to Wireshark-compatible pcap and CSV. The DUT never sees the Datalogger on the bus — no protocol disruption.',
        },
        {
            icon: 'Zap',
            title: 'Triggered event capture',
            description:
                'Configurable trigger conditions across any channel — digital edge, analog threshold, CAN message ID, or a Boolean combination. Pre- and post-trigger window configurable per capture. Captures the exact moment of fault onset with context.',
        },
        {
            icon: 'BarChart2',
            title: 'Power rail analysis',
            description:
                'Simultaneous voltage and current on 8 rails at 1 kHz, correlated with digital events and bus traffic in the same evidence record. Detects brown-out onset, inrush events, and supply coupling. Rail maps to evidence requirement automatically.',
        },
        {
            icon: 'Shield',
            title: 'Certification evidence',
            description:
                'Calibration provenance on every analog channel. Signed, timestamped, requirement-mapped capture records. Append-only evidence database — every session, every channel, every sample. ISO 26262, DO-178C, IEC 62304, and IEC 61508 artifact shapes supported.',
        },
    ],
} as const;
