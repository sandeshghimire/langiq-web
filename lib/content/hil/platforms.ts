export const HIL_PLATFORMS = {
    sectionLabel: '04 — Slot cards',
    headline: 'Six card slots. Every interface your DUT needs.',
    lead: 'The HIL-Bus backplane connects the K26 brain card to up to six slot cards. The base set covers the common-denominator interfaces. Add extension cards for the protocols and signals your specific program requires. One chassis, any DUT class.',
    cards: [
        {
            number: '01',
            name: 'DIO Card',
            subtitle: 'DIGITAL I/O',
            positioning:
                'Programmable digital I/O card for GPIO walk, edge capture, and PWM generation. Fault injection capable — individually pullable to stuck-high, stuck-low, or floating. Used for every DUT bring-up smoke test.',
            specs: [
                { key: 'CHANNELS', value: '32 in / 32 out' },
                { key: 'VOLTAGE', value: '1.8V / 3.3V / 5V' },
                { key: 'FAULT', value: 'Stuck-H · Stuck-L · Float' },
                { key: 'TIMING', value: 'FPGA edge-timestamped' },
            ],
        },
        {
            number: '02',
            name: 'AIO Card',
            subtitle: 'ANALOG I/O',
            positioning:
                'Calibrated analog I/O card for ADC/DAC validation and synthetic sensor injection. Each channel individually calibrated with provenance stored in the evidence database. Used for voltage sweep and sensor emulation.',
            specs: [
                { key: 'ADC', value: '16-ch · 16-bit · 1 MSPS' },
                { key: 'DAC', value: '8-ch · 16-bit · 1 MSPS' },
                { key: 'CALIBRATION', value: 'Per-channel · Traceable' },
                { key: 'RANGE', value: '±10V programmable' },
            ],
        },
        {
            number: '03',
            name: 'CAN Card',
            subtitle: 'CAN / CAN-FD BUS',
            positioning:
                'CAN and CAN-FD bus interface card for rest-of-bus emulation and fault injection. Emulates up to 12 nodes on a CAN-FD bus concurrently. Injects bit errors, ID collisions, and timing faults deterministically.',
            specs: [
                { key: 'CHANNELS', value: '4 CAN-FD channels' },
                { key: 'SPEED', value: 'Up to 8 Mbit/s data phase' },
                { key: 'EMULATION', value: 'Up to 12 virtual nodes' },
                { key: 'FAULT', value: 'Bit error · ID collision' },
            ],
        },
        {
            number: '04',
            name: 'Adapter Card',
            subtitle: 'PLATFORM ADAPTER',
            positioning:
                'DUT-specific platform adapter PCB — connector, power conditioning, and signal translation for each of the six siliconcentric compute platforms. Swap the adapter to change the DUT. Custom adapters available for non-siliconcentric silicon.',
            specs: [
                { key: 'PLATFORMS', value: 'Arches · Acadia · Zion' },
                { key: 'PLATFORMS2', value: 'Pinnacle · Joshua · Sequoia' },
                { key: 'POWER', value: 'Programmable DUT supply' },
                { key: 'CUSTOM', value: 'Non-siliconcentric silicon' },
            ],
        },
        {
            number: '05',
            name: 'Power Card',
            subtitle: 'POWER CONDITIONING',
            positioning:
                'Programmable DUT power supply and monitoring card. Voltage programmable from 1.0V to 5.5V in 1 mV steps. Current monitoring at 1 kHz. Brown-out, power-cycle, and current-fault injection for resilience testing.',
            specs: [
                { key: 'VOLTAGE', value: '1.0–5.5V, 1 mV steps' },
                { key: 'CURRENT', value: 'Up to 5A, monitored 1 kHz' },
                { key: 'FAULT', value: 'Brown-out · Power-cycle' },
                { key: 'PROTECTION', value: 'OCP · OVP · Thermal' },
            ],
        },
        {
            number: '06',
            name: 'Ethernet Card',
            subtitle: 'ETHERNET BUS',
            positioning:
                'Multi-port Ethernet switch and tap card for network-based DUT interfaces. Traffic capture, latency measurement, and link-fault injection. Supports PTP for time-synchronized test scenarios across the chassis.',
            specs: [
                { key: 'PORTS', value: '4× GbE + 1× uplink' },
                { key: 'CAPTURE', value: 'Wireshark-compatible pcap' },
                { key: 'FAULT', value: 'Link drop · Latency inject' },
                { key: 'TIMING', value: 'PTP grandmaster' },
            ],
        },
    ],
} as const;
