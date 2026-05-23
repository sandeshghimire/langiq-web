export const DATALOGGER_ARCHITECTURE = {
    sectionLabel: '02 — Architecture',
    headline: {
        before: 'Layered.',
        accent: 'Complementary.',
        after: 'Closed loop.',
    },
    lead: 'The Datalogger is built as a complement to HIL and IV&V. Where HIL simulates the world in the lab and IV&V records what a system does on the bench, the Datalogger captures the real world in the field. One BSP, one protocol library, one data format, one evidence store — bench to field and back.',
    components: [
        {
            number: '01',
            label: 'siliconcentric-Logger-Base PCB',
            description: '11 default sensors on every board: shock, vibration, temperature, humidity, light, sound, pressure, GPS, gyroscope, IMU, and magnetometer. The standard foundation every customer starts from.',
        },
        {
            number: '02',
            label: 'Industry / protocol configuration layer',
            description: 'Slot cards and a shared soft-IP protocol library handle industry-specific bus protocols. 15 verticals, each with its own protocol set and storage format. The reusable template layer between the Logger-Base and the per-customer delta.',
        },
        {
            number: '03',
            label: 'LoggerOS',
            description: 'The Datalogger’s operating system — a branded siliconcentric Yocto BSP build. Deterministic, PL-resident response where timing matters. Manages capture, storage, OTA updates, and connectivity.',
        },
        {
            number: '04',
            label: 'Uniform data format',
            description: 'One well-defined data format across all protocols and industries. The same SDK, GUI, and IV&V queries apply to every Datalogger regardless of vertical. Any field capture replays as a HIL stimulus at original timing.',
        },
        {
            number: '05',
            label: 'Web UI + NFC + OTA',
            description: 'Onboard web interface to configure over Ethernet or WiFi. NFC quick-connect for instant tap-to-pair. Built-in OTA updates delivered via LoggerOS — no manual firmware flashing.',
        },
        {
            number: '06',
            label: 'loggerLib + Cross-platform GUI',
            description: 'loggerLib is the Python SDK: automate configuration, runs, streaming, and display. The cross-platform GUI is industry- and protocol-specific — configure, control, and visualize data without writing code.',
        },
        {
            number: '07',
            label: 'Cloud connectivity (optional)',
            description: 'Optional cloud integration to configure, monitor, and stream data directly from the field. Supports cellular and satellite uplinks depending on deployment. Customer-controlled — not required for standalone operation.',
        },
        {
            number: '08',
            label: 'IV&V + HIL integration',
            description: 'Native IV&V node. Field captures feed directly into the IV&V evidence database. Any logged stimulus replays as a HIL test case at original timing. One toolchain from bench to field and back.',
        },
        {
            number: '09',
            label: 'AI analysis layer (optional)',
            description: 'The uniform data format and IV&V evidence store feed an optional AI analysis layer. Runs on the x86 host with optional GPU — no cloud required for customers who cannot send data off-prem. Summarises large datasets, detects anomalies, correlates captures across runs, and generates draft reports. The evidence store is append-only; AI consumes it but never alters it. The engineer reviews and owns every conclusion.',
        },
    ],
} as const;
