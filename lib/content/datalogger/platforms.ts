export const DATALOGGER_PLATFORMS = {
    sectionLabel: '04 — Interfaces',
    headline: 'Six ways to connect, configure, and control.',
    lead: 'The Datalogger provides multiple interfaces to fit every workflow — from a browser-based web UI for first setup to a Python SDK for full automation. All interfaces talk to the same device; use whichever fits the task.',
    cards: [
        {
            number: '01',
            name: 'Onboard Web UI',
            subtitle: 'BROWSER-BASED SETUP',
            positioning:
                'Configure the Datalogger from any browser over Ethernet or WiFi. Set sensors, sampling rates, trigger conditions, logging modes, and export formats without installing any software. Accessible from first power-on.',
            specs: [
                { key: 'ACCESS', value: 'Ethernet or WiFi' },
                { key: 'INSTALL', value: 'None — browser only' },
                { key: 'SCOPE', value: 'Full configuration + status' },
                { key: 'AUTH', value: 'Credential-protected' },
            ],
        },
        {
            number: '02',
            name: 'NFC Quick-connect',
            subtitle: 'TAP TO PAIR',
            positioning:
                'Tap a phone or NFC-enabled device to pair and connect instantly. No network setup required on-site. Useful for field deployment where typing an IP address or joining a WiFi network is impractical.',
            specs: [
                { key: 'METHOD', value: 'NFC tap-to-pair' },
                { key: 'RANGE', value: 'Contact / near-field' },
                { key: 'USE CASE', value: 'Field deploy, quick setup' },
                { key: 'FALLBACK', value: 'Web UI over WiFi' },
            ],
        },
        {
            number: '03',
            name: 'loggerLib SDK',
            subtitle: 'PYTHON API',
            positioning:
                'loggerLib is the Python SDK that ships with every unit. Automate configuration, runs, streaming, and display. Integrate the Datalogger into existing test scripts, CI pipelines, or data workflows without touching the GUI.',
            specs: [
                { key: 'LANGUAGE', value: 'Python 3' },
                { key: 'SHIPS WITH', value: 'Every unit' },
                { key: 'SCOPE', value: 'Config, run, stream, display' },
                { key: 'INTEGRATION', value: 'CI/CD, test scripts' },
            ],
        },
        {
            number: '04',
            name: 'Cross-platform GUI',
            subtitle: 'DESKTOP APPLICATION',
            positioning:
                'Industry- and protocol-specific desktop application to configure, control, and visualize data. Each vertical has its own GUI profile — the right controls and visualizations for that industry, not a generic instrument panel.',
            specs: [
                { key: 'PLATFORM', value: 'Windows, macOS, Linux' },
                { key: 'SCOPE', value: 'Configure, control, visualize' },
                { key: 'PROFILES', value: 'Per-industry, per-protocol' },
                { key: 'EXPORT', value: 'All supported formats' },
            ],
        },
        {
            number: '05',
            name: 'Cloud connectivity',
            subtitle: 'OPTIONAL REMOTE ACCESS',
            positioning:
                'Optional cloud integration to configure, monitor, and stream data directly from the field. Supports cellular and satellite uplinks depending on deployment tier. Fully customer-controlled — not required for standalone operation.',
            specs: [
                { key: 'CONNECTIVITY', value: 'Cellular, satellite (opt.)' },
                { key: 'SCOPE', value: 'Config, monitor, stream' },
                { key: 'REQUIRED', value: 'No — fully optional' },
                { key: 'SECURITY', value: 'TLS, AES-256 at rest' },
            ],
        },
        {
            number: '06',
            name: 'Built-in OTA',
            subtitle: 'LOGROS UPDATES',
            positioning:
                'Over-the-air firmware and configuration updates delivered via LoggerOS. No manual reflashing required. Push updates to deployed units in the field, including mid-run configuration changes in long-running logging sessions.',
            specs: [
                { key: 'DELIVERY', value: 'OTA via LoggerOS' },
                { key: 'SCOPE', value: 'Firmware + configuration' },
                { key: 'MID-RUN', value: 'Config updates supported' },
                { key: 'ROLLBACK', value: 'Previous version retained' },
            ],
        },
    ],
} as const;
