export const PLATFORMS = {
    sectionLabel: '04 — Reference platforms',
    headline: 'Dogfooded on six in-house reference test beds.',
    lead: 'We run the Independent V&V Suite against our own reference platforms before any release. Each board covers a distinct target class — automotive SoC, avionics bare-metal, robotics compute, medical SBC, industrial real-time, edge compute. If your product sits in one of these classes, validation starts in days. If your silicon differs, we port the HAL adapter.',
    cards: [
        {
            number: '01',
            name: 'Arches',
            subtitle: 'AUTOMOTIVE SOC TESTBED',
            positioning:
                'Automotive-class SoC with heterogeneous compute, camera, and radar interfaces. We validate the full peripheral stack — GPU, image processor, sensor buses, and thermal behavior — before any automotive suite release.',
            specs: [
                { key: 'CLASS', value: 'Automotive SoC' },
                { key: 'ACCEL', value: 'GPU · NPU · ISP' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '02',
            name: 'Acadia',
            subtitle: 'ROBOTICS COMPUTE SBC',
            positioning:
                'Robotics-class SBC with high-bandwidth peripherals, co-processor I/O, and diverse sensor interfaces. We run full peripheral coverage and environmental soak cycles against this board to qualify the suite for robotics programs.',
            specs: [
                { key: 'CLASS', value: 'Robotics SBC' },
                { key: 'I/O', value: 'I²C · SPI · UART · USB' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '03',
            name: 'Zion',
            subtitle: 'AVIONICS BARE-METAL TESTBED',
            positioning:
                'Avionics-class bare-metal board with a hard real-time execution environment. We validate the FlatBuffers client path, HAL adapter timing, and deterministic event capture against this board before every RTOS-target release.',
            specs: [
                { key: 'CLASS', value: 'Avionics SBC' },
                { key: 'RTOS', value: 'FreeRTOS' },
                { key: 'TRANSPORT', value: 'FlatBuffers' },
                { key: 'OS', value: 'FreeRTOS' },
            ],
        },
        {
            number: '04',
            name: 'Pinnacle',
            subtitle: 'MEDICAL DEVICE SBC',
            positioning:
                'Long-lifecycle medical SBC targeting IEC 62304 and FDA qualification programs. We run prolonged endurance, I²C sensor bus coverage, and environmental stress cycles against this board to validate the evidence trail for medical submissions.',
            specs: [
                { key: 'CLASS', value: 'Medical device SBC' },
                { key: 'BUS', value: 'I²C · SPI · UART' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '05',
            name: 'Joshua',
            subtitle: 'INDUSTRIAL REAL-TIME TESTBED',
            positioning:
                'Industrial real-time control board with deterministic fieldbus interfaces and FreeRTOS execution. We validate cycle-exact timing, event-based trigger accuracy, and FlatBuffers transport fidelity against this board for industrial suite releases.',
            specs: [
                { key: 'CLASS', value: 'Industrial control' },
                { key: 'RTOS', value: 'FreeRTOS' },
                { key: 'TRANSPORT', value: 'FlatBuffers' },
                { key: 'OS', value: 'FreeRTOS' },
            ],
        },
        {
            number: '06',
            name: 'Sequoia',
            subtitle: 'EDGE / DEFENSE COMPUTE',
            positioning:
                'High-compute edge board with multi-lane PCIe, high-bandwidth peripheral I/O, and Linux-based execution. We validate PCIe peripheral behavior, sustained thermal load, and gRPC transport stability against this board for defense-class programs.',
            specs: [
                { key: 'CLASS', value: 'Edge compute / defense' },
                { key: 'I/O', value: 'PCIe · USB · MIPI' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
    ],
} as const;
