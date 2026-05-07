export const USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Four industries. Specific validation programs.',
    cards: [
        {
            industry: 'AUTOMOTIVE / ADAS',
            title: 'Forward-camera + radar fusion ECU under thermal cycling.',
            vignette:
                'An ADAS ECU integrating a MIPI camera pipeline and radar interface required ISO 26262 ASIL-B platform evidence before safety sign-off. The suite ran the camera and radar subsystems concurrently under a thermal sweep from 25 °C to 95 °C, capturing frame-drop counts, bus error rates, and thermal telemetry throughout. Evidence mapped directly to ASIL-B test-to-requirement linkage.',
            subsystems: ['MIPI camera pipeline', 'Radar interface', 'GPU / ISP', 'I²C sensor bus', 'Thermal telemetry'],
            testModes: ['Monitoring', 'Event-based'],
        },
        {
            industry: 'AEROSPACE & DEFENSE',
            title: 'UAV mission computer MIPI camera + IMU stack across pressure altitudes.',
            vignette:
                'A UAV mission computer carrying a MIPI camera array and a six-axis IMU needed DO-254 hardware artifact evidence and repeatable build-and-run records across simulated pressure altitude profiles. The suite logged IMU axis alignment, camera sync timing, and UART telemetry link quality at each altitude step. All run records were retained for DO-254 structural-coverage review.',
            subsystems: ['MIPI camera array', 'Six-axis IMU', 'UART telemetry link', 'Environmental chamber (pressure)'],
            testModes: ['One-shot', 'Monitoring'],
        },
        {
            industry: 'MEDICAL DEVICES',
            title: 'Patient-monitor SBC I²C sensor bus under continuous duty.',
            vignette:
                'A patient-monitor SBC polling multiple I²C sensors continuously required IEC 62304 lifecycle evidence and FDA software-of-unknown-provenance mitigation records. The suite ran a 72-hour long-running test sampling the I²C bus at 500 Hz, logging NACK counts, timing drift, and any anomalous sensor state transitions. The resulting artifacts satisfied the IEC 62304 lifecycle-aligned log requirement.',
            subsystems: ['I²C sensor bus', 'ADC channels', 'UART debug interface', 'Thermal sensor'],
            testModes: ['Long-running', 'Event-based'],
        },
        {
            industry: 'INDUSTRIAL / ROBOTICS',
            title: 'AGV LiDAR + motor-controller chain under vibration.',
            vignette:
                'An AGV platform combining a LiDAR unit and a motor-controller chain over SPI required IEC 61508 functional-safety evidence under operating vibration profiles. The suite ran event-based validation triggering on LiDAR scan-gap events and motor-fault signals, with monitoring mode capturing SPI bus integrity and latency distribution throughout. Environmental-stress records documented behavior at peak vibration load.',
            subsystems: ['LiDAR (scan interface)', 'Motor controller (SPI)', 'IMU', 'Environmental chamber (vibration)'],
            testModes: ['Event-based', 'Monitoring'],
        },
    ],
} as const;
