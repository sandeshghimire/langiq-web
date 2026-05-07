export const PROBLEM = {
    sectionLabel: '01 — Independent validation',
    headline: {
        before: 'We validate the hardware',
        accent: 'independently.',
        after: 'Your team keeps building.',
    },
    body: [
        "The Independent V&V Suite runs its own stack — our HAL, our target client, our server — against the device under test, without requiring access to your source code or touching your development workflow.",
        "The result: independent coverage across compute, peripherals, sensors, and environmental conditions, with an evidence trail your design reviews and certification submissions can use directly.",
    ],
    failureModes: [
        {
            label: 'Compute coverage',
            description:
                'Every CPU, GPU, and on-die accelerator exercised under load — independently, from outside the application stack. Results captured with timestamps and traceable to specific hardware states.',
        },
        {
            label: 'Peripherals & sensors',
            description:
                'I²C, SPI, UART, USB, PCIe, MIPI, IMU, ADC, DAC, cameras, LiDAR, radar — validated over the actual buses. Every run logs drop counts, timing, and error conditions explicitly.',
        },
        {
            label: 'Environmental conditions',
            description:
                'Test cases authored in the Web UI run the device under temperature, humidity, and pressure conditions. Monitoring and event-based modes capture exactly how hardware behaves as conditions shift.',
        },
    ],
} as const;
