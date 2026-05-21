export const USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Nine industries. Purpose-built validation programs.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Forward-camera and radar fusion ECU under thermal cycling.',
            vignette:
                'ISO 26262 ASIL-B evidence for a camera and radar ECU across a 25–95 °C sweep. Concurrent MIPI and radar interfaces captured frame-drop counts, bus error rates, and thermal telemetry — mapped directly to ASIL-B test-to-requirement linkage.',
            subsystems: ['MIPI camera pipeline', 'Radar interface', 'I²C sensor bus', 'Thermal telemetry'],
            testModes: ['Monitoring', 'Event-based'],
        },
        {
            industry: 'Aerospace',
            title: 'UAV mission computer MIPI and IMU stack across pressure altitude profiles.',
            vignette:
                'DO-254 hardware artifact evidence for a UAV carrying a MIPI camera array and six-axis IMU. Camera sync timing and UART telemetry quality logged at each altitude step, with all run records retained for structural-coverage review.',
            subsystems: ['MIPI camera array', 'Six-axis IMU', 'UART telemetry link', 'Pressure simulation'],
            testModes: ['One-shot', 'Monitoring'],
        },
        {
            industry: 'Defence',
            title: 'Tactical edge compute module under MIL-STD-810 vibration and EMI profiles.',
            vignette:
                'MIL-STD-810 and MIL-STD-461 compliance records for a deployed tactical compute. GPIO walk, CAN telemetry, and power-rail monitoring ran under combined vibration and EMI stress — producing tamper-evident run records for programme certification review.',
            subsystems: ['CAN telemetry bus', 'GPIO fault walk', 'Power-rail monitoring', 'EMI/vibration chamber'],
            testModes: ['Monitoring', 'Event-based'],
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC Ethernet and I/O modules under IEC 61508 SIL-2 validation.',
            vignette:
                'IEC 61508 SIL-2 evidence for a safety PLC Ethernet safety bus and digital I/O modules. Event-triggered and long-run tests captured bus latency distributions and fault-response times for SIL-2 functional-safety review.',
            subsystems: ['Ethernet safety bus', 'Digital I/O modules', 'Fault-response timing', 'Long-run endurance'],
            testModes: ['Long-running', 'Event-based'],
        },
        {
            industry: 'Robotics',
            title: 'AGV navigation stack LiDAR and motor controller chain under vibration.',
            vignette:
                'ISO 10218 platform evidence for an AGV LiDAR and motor-controller chain over SPI. Event-based validation triggered on scan-gap and motor-fault signals; monitoring captured SPI bus integrity and latency distribution under peak vibration.',
            subsystems: ['LiDAR scan interface', 'Motor controller (SPI)', 'IMU', 'Vibration chamber'],
            testModes: ['Event-based', 'Monitoring'],
        },
        {
            industry: 'Electric Vehicles',
            title: 'Battery management system cell monitoring under charge–discharge cycling.',
            vignette:
                'ISO 26262 ASIL-D evidence for an EV BMS cell voltage and temperature monitoring stack. Five-hundred charge–discharge cycles captured I²C sensor bus integrity, analog accuracy, and fault-response timing across temperature extremes.',
            subsystems: ['I²C cell voltage sensors', 'Temperature monitoring', 'Analog accuracy (±1 mV)', 'Fault-response timing'],
            testModes: ['Long-running', 'Event-based'],
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control SBC vital software validation under EN 50128 SIL-3.',
            vignette:
                'EN 50128 SIL-3 platform evidence for a vital train control unit. Long-run and one-shot test modes captured Ethernet latency, UART fault-injection response, and power-cycle recovery time for safety authority submission.',
            subsystems: ['Ethernet safety bus', 'UART fault injection', 'Power-cycle recovery', 'Long-run endurance'],
            testModes: ['One-shot', 'Long-running'],
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite payload compute board SpaceWire and power bus across radiation simulation.',
            vignette:
                'ECSS-Q-ST-60 hardware evidence for a LEO payload board SpaceWire interface and power-distribution bus. Transaction rates, error flags, and power-rail transients logged across temperature and SEU conditions with calibration provenance on every measurement.',
            subsystems: ['SpaceWire interface', 'Power-distribution bus', 'SEU simulation', 'Temperature cycling'],
            testModes: ['Monitoring', 'Event-based'],
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart grid edge controller communication and I/O under IEC 62443 evidence program.',
            vignette:
                'IEC 62443 security and functional evidence for a grid-edge controller UART, Ethernet, and digital I/O stack. Monitoring and event-based tests captured protocol deviations, timing anomalies, and power-rail integrity under simulated grid disturbance profiles.',
            subsystems: ['Ethernet / Modbus-RTU', 'Digital I/O states', 'Power-rail integrity', 'Grid disturbance simulation'],
            testModes: ['Monitoring', 'Event-based'],
        },
    ],
} as const;
