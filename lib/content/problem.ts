export const PROBLEM = {
    sectionLabel: '01 — Independent validation',
    headline: {
        before: 'We validate the hardware',
        accent: 'independently.',
        after: 'Your team keeps building.',
    },
    body: [
        "No access to your source code. No changes to your development workflow. SoCcentric deploys its own stack directly against the device under test — and produces a timestamped, traceable evidence trail ready for design reviews and certification submissions..",
        "The result: independent coverage across compute, peripherals, sensors, and environmental conditions, with an evidence trail your design reviews and certification submissions can use directly.",
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
