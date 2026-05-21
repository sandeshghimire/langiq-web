export const DATALOGGER_PLATFORMS = {
    sectionLabel: '04 — Channel interfaces',
    headline: 'Five interface categories. Every signal your system produces.',
    lead: 'The Datalogger front-end organises inputs into five categories, each with independently configurable sample rates, trigger conditions, and ranges. Channels are individually isolated to prevent ground loops and cross-contamination between DUT subsystems.',
    cards: [
        {
            number: '01',
            name: 'Analog In',
            subtitle: 'ADC CHANNELS',
            positioning:
                'High-resolution differential analog input channels for voltage, current, temperature, and sensor-signal capture. Each channel individually calibrated with traceable provenance stored in the evidence database.',
            specs: [
                { key: 'CHANNELS', value: '16 differential inputs' },
                { key: 'RESOLUTION', value: '24-bit delta-sigma' },
                { key: 'RATE', value: 'Up to 1 MSPS burst' },
                { key: 'RANGE', value: '±10 V programmable' },
            ],
        },
        {
            number: '02',
            name: 'Digital In',
            subtitle: 'DIO CAPTURE',
            positioning:
                'Edge-capture digital input channels for GPIO state logging, PWM frequency measurement, and protocol framing. Timestamped by the FPGA fabric to sub-microsecond accuracy — independent of APU scheduling.',
            specs: [
                { key: 'CHANNELS', value: '64 inputs' },
                { key: 'VOLTAGE', value: '1.8 V / 3.3 V / 5 V' },
                { key: 'TIMESTAMP', value: 'FPGA · sub-µs' },
                { key: 'TRIGGER', value: 'Edge / Level / Pattern' },
            ],
        },
        {
            number: '03',
            name: 'Bus Capture',
            subtitle: 'PROTOCOL LOGGER',
            positioning:
                'Non-intrusive passive bus monitoring for CAN-FD, UART, SPI, I²C, and Ethernet simultaneously. The DUT never sees the Datalogger on the bus. Full frame capture with FPGA-accurate inter-frame timing and Wireshark-compatible pcap export.',
            specs: [
                { key: 'CAN-FD', value: 'Up to 8 Mbit/s · passive' },
                { key: 'UART', value: '4 channels · any baud rate' },
                { key: 'SPI / I²C', value: '4 channels each · decoded' },
                { key: 'ETHERNET', value: '1× GbE tap · pcap output' },
            ],
        },
        {
            number: '04',
            name: 'Power Monitor',
            subtitle: 'VOLTAGE & CURRENT',
            positioning:
                'Simultaneous voltage and current monitoring on up to 8 power rails at 1 kHz continuous. Used for supply-rail characterisation, brown-out correlation, inrush analysis, and power-budget evidence in safety-critical programs.',
            specs: [
                { key: 'RAILS', value: '8 simultaneous' },
                { key: 'VOLTAGE', value: '0–30 V, 0.1 mV resolution' },
                { key: 'CURRENT', value: 'Up to 10 A, 0.1 mA' },
                { key: 'RATE', value: '1 kHz continuous' },
            ],
        },
        {
            number: '05',
            name: 'GPS / PTP',
            subtitle: 'TIME REFERENCE',
            positioning:
                'External time reference for aligning Datalogger captures with other instruments or multi-unit campaigns. GPS-disciplined oscillator for field use; PTP follower for lab. Typical multi-unit jitter after alignment is under 200 ns.',
            specs: [
                { key: 'GPS', value: 'u-blox module · NMEA + PPS' },
                { key: 'PTP', value: 'IEEE 1588-2019 follower' },
                { key: 'ACCURACY', value: 'Sub-100 ns to reference' },
                { key: 'HOLDOVER', value: 'TCXO · ±1 µs/min' },
            ],
        },
        {
            number: '06',
            name: 'Storage',
            subtitle: 'APPEND-ONLY NVMe',
            positioning:
                'Local NVMe with Write-Once-Read-Many policy enforced at the driver level. Each record signed at write time. Capacity scales from 2 TB (Bench) to 8 TB (Rack/Cert). Optional encrypted cloud replication over TLS for off-site evidence archiving.',
            specs: [
                { key: 'CAPACITY', value: '2 TB – 8 TB NVMe' },
                { key: 'POLICY', value: 'WORM — no silent deletes' },
                { key: 'SIGNING', value: 'IV&V platform key' },
                { key: 'REPLICATION', value: 'TLS cloud sync (opt.)' },
            ],
        },
    ],
} as const;
