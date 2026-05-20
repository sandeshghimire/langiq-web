export const PROBLEM = {
    sectionLabel: '01 — Independent validation',
    headline: {
        before: 'We validate the hardware',
        accent: 'independently.',
        after: 'Your team keeps building.',
    },
    body: [
        "No source code access. No changes to your development workflow. The IV&V stack runs on its own server, deploys its own target client to the DUT, and operates independently of your build system, CI pipeline, and version control.",
        "Coverage spans five tiers — compute, peripherals, sensors, perception, and environmental conditions. Each tier produces its own evidence shape in the append-only database: timestamped, operator-attributed, and ready for design reviews and certification submissions as-is.",
    ],
    failureModes: [
        {
            label: 'Compute coverage',
            description:
                ' CPU, GPU, NPU, ISP — exercised independently from your application stack, with thermal telemetry captured in lockstep.',
        },
        {
            label: 'Peripherals & sensors',
            description:
                'I²C, SPI, UART, USB, PCIe, MIPI — validated over the actual hardware, with drop counts and error rates logged explicitly per run.',
        },
        {
            label: 'Environmental conditions',
            description:
                'Temperature, humidity, pressure, vibration — authored as test cases, triggered remotely, captured with three-stamp timing.',
        },
    ],
} as const;
