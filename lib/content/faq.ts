export const FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'Do you build IV&V for our specific hardware?',
            answer:
                'Yes. We design and develop IV&V to fit your hardware and requirements. We start from six in-house platforms — covering roughly 90% of real-world embedded devices — and port the HAL to your exact part. Where your silicon is a derivative of a family we already run on, that\'s a short step.',
        },
        {
            question: 'Do you need access to our source code?',
            answer:
                'No. IV&V runs on its own server, deploys its own client to the target, and validates the hardware independently — through our OS and our HAL. No source-code access, no changes to your build system, CI, or version control.',
        },
        {
            question: 'Which platforms do you support?',
            answer:
                'We run today on NVIDIA Jetson, Raspberry Pi, Xilinx Zynq, NXP i.MX, TI Sitara, and x86 — our six in-house platforms. If your board is built on any of these families, validation starts fast. If it\'s something else, we port the HAL.',
        },
        {
            question: 'How do we actually run tests?',
            answer:
                'Three ways: a web UI for full operator control, a Python SDK to build testing into your own workflow, and a direct API path through the client and HAL for quick single-device checks. Plus a GUI per component.',
        },
        {
            question: 'What kinds of tests can it run?',
            answer:
                'Four types: one-shot (discrete checks and acceptance gates), monitoring (continuous live sampling), event-based (fires on a condition, with three-stamp timing), and long-running (hours or days, for endurance and faults that only surface over time).',
        },
        {
            question: 'Can one server test more than one board?',
            answer:
                'Yes. A single server manages and runs validation on multiple target devices at once — qualify a whole batch or several board variants in parallel from one console.',
        },
        {
            question: 'What happens to the test data?',
            answer:
                'Every test, log, and event is captured to the server — timestamped, operator-attributed, append-only. Runs are never silently deleted; invalidations are recorded with a reason. Optionally sync to the cloud for centralized tracking across sites and fleets, or stay fully on-prem.',
        },
        {
            question: 'How does the AI work — and is it safe for certification?',
            answer:
                'A local LLM analyzes your test data to flag anomalies and draft reports — on-prem, no cloud required. It accelerates the analysis; your engineers own every conclusion that enters the record. That\'s what keeps the output admissible for certification.',
        },
        {
            question: 'How does this help with certification?',
            answer:
                'IV&V captures the records certification programs need automatically, and AI-assisted reporting turns raw runs into draft submissions in hours instead of weeks. We map to ISO 26262, DO-178C / DO-254, IEC 62304, and IEC 61508.',
        },
        {
            question: 'Do you offer hardware-in-the-loop and field data capture too?',
            answer:
                'Yes. The SoCcentric HIL attaches to the same server — adding real-time hardware interfacing, fault injection, and hardware-in-the-loop testing. The Datalogger captures field data into the same records store. One stack, lab to field.',
        },
        {
            question: 'How long have you been doing this?',
            answer:
                '25+ years in embedded systems, with a decade-plus in field datalogging. IV&V runs on our own platforms before it ever reaches yours.',
        },
    ],
} as const;
