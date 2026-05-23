export const DATALOGGER_CAPABILITIES = {
    sectionLabel: '05 — Capabilities',
    headline: 'Standard sensors. Flexible storage. Evidence-ready.',
    lead: 'The SoCcentric-Logger-Base ships 11 sensors on every board. Storage scales to 8 TB NVMe. Clock accuracy to sub-microsecond. Every parameter is scoped to the customer — power, connectivity, enclosure, trigger engine, and export format.',
    features: [
        {
            icon: 'Activity',
            title: 'SoCcentric-Logger-Base — 11 standard sensors',
            description:
                'Shock, vibration, temperature, humidity, light, sound, pressure, GPS, gyroscope, IMU, and magnetometer on every board as standard. [Founder decision: GPS may be optional, making the base 10 sensors. Confirm before publishing.] The Logger-Base is the consistent foundation every customer starts from.',
        },
        {
            icon: 'Cpu',
            title: 'Storage — PCIe NVMe up to 8 TB',
            description:
                'SD card, NVMe SSD, or eMMC depending on tier. PCIe NVMe up to 8 TB for high-throughput, long-duration logging campaigns. Hardware-signed segments, tamper-evident log, AES-256 at-rest encryption. No proprietary readers required for exported files.',
        },
        {
            icon: 'Zap',
            title: 'Trigger engine — < 100 ns PL-resident response',
            description:
                'Capture on event, threshold, pattern match, schedule, or external sync. Configurable pre-trigger buffer. Deterministic PL-resident response under 100 ns for time-critical capture. Three-stamp timing on every event: condition-detect, capture-start, capture-end.',
        },
        {
            icon: 'BarChart2',
            title: 'Clock accuracy — PTP IEEE 1588 + GNSS + IRIG-B',
            description:
                'PTP IEEE 1588 (< 1 µs), GNSS, and IRIG-B time references. Sub-microsecond accuracy after lock. Supports multi-unit campaigns with aligned timestamps across all deployed loggers.',
        },
        {
            icon: 'Globe',
            title: 'Connectivity — Ethernet, WiFi, LTE, GPS',
            description:
                'Ethernet standard. WiFi and LTE optional. GPS optional per customer requirement. [Founder decision: GPS optionality affects the standard sensor count — confirm 10 vs 11.] Satellite uplink available for remote deployments.',
        },
        {
            icon: 'Shield',
            title: 'Export formats — uniform + industry-specific',
            description:
                'One uniform data format across all protocols and industries. Plus industry-specific export: IV&V native, MF4/MDF4, PCAP, BLF, CSV, FMU dataset, COMTRADE, IRIG-106 Ch10, TDMS, HDF5, EDF/EDF+, TOA5. Same SDK and GUI queries apply to every Datalogger regardless of vertical.',
        },
        {
            icon: 'Thermometer',
            title: 'Extreme temperature + rugged enclosure',
            description:
                'Operates in extreme temperatures. Enclosure can be designed for harsh-weather and demanding field deployment per customer requirement. Power options: USB or battery (portable); mains/redundant for rack or sealed tiers. Battery optional, configured to need.',
        },
        {
            icon: 'Lock',
            title: 'Evidence integrity',
            description:
                'Hardware-signed segments, tamper-evident log, secure boot, and AES-256 at-rest encryption. Append-only evidence — invalidations written as new records, never silent deletes. Cert targets accelerated: IEC 62304, IEC 61508, ISO 26262, DO-178C.',
        },
        {
            icon: 'Brain',
            title: 'AI-assisted analysis and reporting',
            description:
                'Captured data can be sent to an LLM for dataset summarisation, anomaly detection, cross-run correlation, and structured report generation. The uniform data format means the same AI analysis applies to any capture, from any vertical, on any unit. Runs on-prem on the x86 host with optional GPU — or cloud, customer-controlled. AI assists; the engineer reviews and owns every conclusion.',
        },
    ],
} as const;
