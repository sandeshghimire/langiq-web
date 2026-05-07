export const CAPABILITIES = {
    sectionLabel: '05 — What we validate',
    headline: 'Five coverage tiers. Hardware-up.',
    lead: 'Independent validation from the compute layer down to the environmental chamber. Each tier has its own test logic in the HAL, its own evidence shape in the database, and its own artifact in the audit trail.',
    features: [
        {
            icon: 'CircuitBoard',
            title: 'Compute',
            description:
                'CPU, GPU, graphics processor, media processor, NPU and ISP where present — each exercised under load via the HAL, independently of the application stack. Example check: sustained GPU utilization at rated clock with thermal telemetry captured at 10 Hz throughout.',
        },
        {
            icon: 'Route',
            title: 'Peripherals & busses',
            description:
                'I²C, SPI, UART, USB, PCIe, MIPI, and similar — validated over the actual bus at operating frequency, not emulated. Drop counts reported explicitly per run. Example check: PCIe link stress at rated bandwidth with error-rate and retrain-count logged over a 30-minute window.',
        },
        {
            icon: 'Zap',
            title: 'Sensors & actuators',
            description:
                'IMU, ADC, DAC, and the long tail of on-board sensors and actuators exercised through the HAL adapter. Example check: IMU axis-alignment verification and noise-floor measurement at room temperature, followed by the same check at thermal extremes.',
        },
        {
            icon: 'Eye',
            title: 'Perception devices',
            description:
                'Cameras, LiDAR, radar, ToF — high-bandwidth devices validated for frame integrity, sync timing, and transport reliability under load. Example check: camera pipeline frame-drop count and latency distribution measured under concurrent LiDAR polling across a 60-second one-shot run.',
        },
        {
            icon: 'Thermometer',
            title: 'Environmental conditions',
            description:
                'Temperature, humidity, pressure, and thermal load — authored as test cases in the Web UI and triggered remotely. Monitoring mode streams telemetry continuously; event-based mode fires on threshold crossings. Example check: I²C bus error rate sampled at 1 kHz while the chamber ramps from 25 °C to 85 °C, with an event fired on any NACK.',
        },
    ],
} as const;
