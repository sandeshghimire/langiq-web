export const DATALOGGER_PROBLEM = {
    sectionLabel: '01 — What we do.',
    headline: {
        before: 'Custom dataloggers.',
        accent: 'Built for your industry.',
        after: 'Ready for the field.',
    },
    body: [
        'SoCcentric develops custom dataloggers for long-term data collection across many industries. We do not sell off-the-shelf SKUs. We scope to the customer’s industry and requirements, then build — starting from proven templates, not blank pages. We have been building custom dataloggers for 10+ years.',
        'The Datalogger is the third SoCcentric product, built as a complement to HIL and IV&V. Where HIL simulates the world in the lab and IV&V records what a system does on the bench, the Datalogger captures the real world in the field. Together they close the loop: one BSP, one protocol library, one data format, one evidence store — bench to field and back.',
    ],
    failureModes: [
        {
            label: '11 sensors standard — SoCcentric-Logger-Base',
            description:
                'Every board ships with the SoCcentric-Logger-Base: shock, vibration, temperature, humidity, light, sound, pressure, GPS, gyroscope, IMU, and magnetometer — 11 sensors as the standard foundation. [Founder decision: GPS may be optional, making the base 10 sensors. Confirm before publishing.]',
        },
        {
            label: 'Industry-specific — 15 verticals',
            description:
                'Fifteen verticals each have their own protocol set, storage format, and industry template. The reusable template layer sits between the Logger-Base and the per-customer delta — so we build on proven patterns, not blank pages.',
        },
        {
            label: 'Extreme temperature + long-range, long-term logging',
            description:
                'Operates in extreme temperatures. Enclosure can be designed for harsh-weather and demanding field deployment per customer requirement. Supports long-range connectivity and hours-to-days logging campaigns.',
        },
        {
            label: 'High-speed logging — PCIe NVMe up to 8 TB',
            description:
                'PCIe NVMe storage up to 8 TB for high-throughput, high-duration logging. Supports SD card, NVMe SSD, and eMMC depending on tier. No data gaps; no proprietary readers required for exported files.',
        },
        {
            label: 'Developer tooling + AI-first analysis',
            description:
                'loggerLib Python SDK ships with every unit to automate configuration, runs, streaming, and display. Cross-platform GUI for industry- and protocol-specific control. Collected data can be sent to an LLM for analysis and to generate reports — AI assists the engineer; the engineer owns the conclusions.',
        },
    ],
} as const;
