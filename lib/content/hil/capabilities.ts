export const HIL_CAPABILITIES = {
    sectionLabel: '05 — What the HIL does',
    headline: 'Five test disciplines. Hardware-up.',
    lead: 'From pin-level GPIO validation to rest-of-bus emulation, fault injection to plant-in-the-loop motor control. Every discipline produces the same calibrated, traceable evidence trail — ready for your IV&V dashboard and certification submission.',
    features: [
        {
            icon: 'Cpu',
            title: 'Firmware bring-up',
            description:
                'GPIO walk, peripheral smoke test, console capture, and boot-time health check. Engineer plugs in the DUT, opens the Web UI, and has a pass/fail result in under five minutes. Every signal state logged with FPGA edge timestamps.',
        },
        {
            icon: 'Route',
            title: 'Bus emulation',
            description:
                'CAN-FD, EtherCAT, PROFINET, and SPI bus emulation with up to 12 virtual nodes per channel. The DUT believes it is in the real vehicle, machine, or network. Bus traffic captured with Wireshark-compatible pcap for post-run analysis.',
        },
        {
            icon: 'Zap',
            title: 'Fault injection',
            description:
                'Stuck-high GPIO, CAN bit errors mid-frame, brown-out at programmable voltages, sensor signal clipping. Each fault injected deterministically by the FPGA, DUT response captured, scored against expected behavior, and persisted in the evidence database.',
        },
        {
            icon: 'Activity',
            title: 'Synthetic sensor injection',
            description:
                'Programmable analog waveforms on calibrated DAC channels for ADC validation and sensor emulation. IMU, pressure, temperature, and encoder signals synthesized to spec. Deterministic timestamping aligned to the rest of the simulated environment.',
        },
        {
            icon: 'Shield',
            title: 'Certification evidence',
            description:
                'Calibration provenance on every measurement channel. Signed, timestamped, requirement-mapped test reports. Append-only evidence database — every run, every parameter, every result. ISO 26262, DO-178C, IEC 62304, and IEC 61508 artifact shapes supported.',
        },
    ],
} as const;
