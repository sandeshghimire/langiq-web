export const DATALOGGER_FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'Is this off-the-shelf?',
            answer:
                'No. SoCcentric builds custom dataloggers scoped to each customer\'s industry and requirements. We start from proven templates — not blank pages — so you get the speed of a template with the fit of a custom build. No fixed SKUs, no catalog items. Configure-to-order.',
        },
        {
            question: 'What sensors are standard on every board?',
            answer:
                'The SoCcentric-Logger-Base ships 11 sensors standard: shock, vibration, temperature, humidity, light, sound, pressure, GPS, gyroscope, IMU, and magnetometer. [Founder decision: GPS may be optional, making the standard package 10 sensors. Confirm before publishing.] Additional sensors are available per customer requirement.',
        },
        {
            question: 'What protocols and industries are supported?',
            answer:
                '15 verticals: industrial automation/process, environmental/hydrology/meteorology, utilities (power and water), building automation/HVAC, energy metering, automotive/vehicle, medical devices, aerospace/flight test, rail, oil & gas/SCADA, lab/scientific DAQ, agriculture, marine, and consumer/generic IoT. Each vertical has its own protocol set, storage format, and industry template.',
        },
        {
            question: 'How do I configure the Datalogger?',
            answer:
                'Four ways: onboard web UI over Ethernet or WiFi (no software install required); NFC quick-connect for tap-to-pair in the field; the loggerLib Python SDK for programmatic automation; or the cross-platform GUI for industry- and protocol-specific control and visualization.',
        },
        {
            question: 'How does the Datalogger relate to HIL and IV&V?',
            answer:
                'The Datalogger is a native IV&V node. Field captures feed directly into the IV&V evidence database — same dashboard, same queries. Any field-captured stimulus can replay as a HIL test case at original timing. One BSP, one protocol library, one data format, one evidence store across all three products.',
        },
        {
            question: 'Can it run in harsh environments?',
            answer:
                'Yes. The Datalogger operates in extreme temperatures. The enclosure can be designed for harsh-weather and demanding field deployment per customer requirement. Power options scale from USB/battery (portable) to mains/redundant power for rack or sealed industrial tiers.',
        },
        {
            question: 'How is collected data analyzed?',
            answer:
                'The Datalogger is AI-first. Collected data can be sent to an LLM for analysis and to generate reports and structured data. The AI assists the engineer — the engineer reviews and owns the conclusions. This keeps evidence admissible for certification work where human accountability matters.',
        },
        {
            question: 'Can AI analysis run on-prem?',
            answer:
                'Yes. The AI analysis layer runs on the x86 host with an optional GPU — no data leaves the network unless the customer chooses cloud. For customers operating under data-sovereignty or air-gap requirements, the on-prem path gives full AI-assisted analysis and report generation without any external connectivity.',
        },
        {
            question: 'Is AI-generated output cert-admissible?',
            answer:
                'AI-generated drafts are not the certified output — the engineer is. The AI analysis layer produces summaries, anomaly flags, correlation reports, and draft documents. The engineer reviews, approves, and signs the conclusion. That reviewed conclusion is what enters the evidence record. The evidence store is append-only; AI consumes it but never alters it. This separation is what keeps evidence admissible under DO-178C, IEC 62304, IEC 61508, and ISO 26262.',
        },
        {
            question: 'How is the Datalogger updated?',
            answer:
                'Built-in OTA updates are delivered via LoggerOS, the Datalogger\'s Yocto BSP build. No manual reflashing. Updates can be pushed to units deployed in the field. Long-running sessions support mid-run configuration updates without stopping the log.',
        },
        {
            question: 'How long has SoCcentric been building dataloggers?',
            answer:
                '10+ years. SoCcentric has been building custom dataloggers across many industries for over a decade. The templates, protocol library, and tooling reflect that accumulated experience — so customers benefit from what has already been proven in the field.',
        },
    ],
} as const;
