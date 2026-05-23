export const PLATFORMS = {
    sectionLabel: '04 — Reference platforms',
    headline: 'Six home-grown platforms. Real silicon, running today.',
    lead: 'We run IV&V on six in-house platforms spanning the silicon families most embedded products are built on — NVIDIA Jetson, Raspberry Pi, Xilinx Zynq, NXP i.MX, TI Sitara, and x86. We don\'t claim to support everything. We support these families today — and because your board is almost certainly a derivative of one of them, porting the HAL to your exact part is a short step, not a rebuild.',
    cards: [
        {
            number: '01',
            name: 'Arches',
            subtitle: 'NVIDIA JETSON — AI AT THE EDGE',
            positioning:
                'Built on the NVIDIA Jetson SoM family — ARM application cores plus a CUDA-capable GPU, with deep-learning and vision accelerators on higher-end modules. A SoCcentric carrier adds storage, sensor interfaces, and actuator connectivity; an integrated STM32 co-processor handles deterministic motor loops, time-critical I/O, and watchdog logic while the Jetson runs Linux and GPU workloads. Typical: robots, drones, smart cameras, autonomous mobile platforms, industrial inspection.',
            specs: [
                { key: 'SILICON', value: 'NVIDIA Jetson SoM' },
                { key: 'ACCEL', value: 'CUDA GPU · DLA · ISP' },
                { key: 'CO-PROC', value: 'STM32' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '02',
            name: 'Acadia',
            subtitle: 'RASPBERRY PI CM — INDUSTRIAL-GRADE',
            positioning:
                'Built on CM4 and CM5 Compute Modules on a ruggedized SoCcentric carrier — stronger connectors, power conditioning, EMC-aware layout, commercial-grade I/O. The full Raspberry Pi software ecosystem in environments a bare Pi couldn\'t survive. An RP2040 (Pico W) acts as the real-time co-processor with deterministic dual-core Cortex-M0+ execution and decoupled wireless. Typical: industrial monitoring nodes, kiosks, smart-building controllers, entry-level edge.',
            specs: [
                { key: 'SILICON', value: 'RPi CM4 / CM5' },
                { key: 'CO-PROC', value: 'RP2040 (Pico W)' },
                { key: 'I/O', value: 'I²C · SPI · UART · USB' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '03',
            name: 'Zion',
            subtitle: 'XILINX ZYNQ — ARM AND FPGA',
            positioning:
                'Supports Zynq-7000 (Cortex-A9 + fabric) and Zynq UltraScale+ MPSoC (Cortex-A53/R5 + larger fabric, GPU, video codecs), with on-die low-latency CPU↔fabric interconnect. Module-on-carrier for moderate volumes, or fully custom Zynq-on-PCB for tighter form factors and certification. Typical: software-defined radio, high-channel DAQ, custom-protocol systems, real-time motor control, machine vision, aerospace and defense.',
            specs: [
                { key: 'SILICON', value: 'Zynq-7000 / MPSoC' },
                { key: 'FABRIC', value: 'Artix-7 / UltraScale+' },
                { key: 'TRANSPORT', value: 'gRPC / FlatBuffers' },
                { key: 'OS', value: 'Yocto Linux / FreeRTOS' },
            ],
        },
        {
            number: '04',
            name: 'Pinnacle',
            subtitle: 'NXP i.MX — BUILT TO OUTLIVE THE PROGRAM',
            positioning:
                'Built on the NXP i.MX family, with NXP\'s 10–15 year availability guarantee — critical for medical, industrial, and infrastructure programs that can\'t tolerate mid-lifecycle silicon EOL. Mature mainline Linux, clean Yocto builds, rich multimedia and connectivity, and NXP functional-safety variants suitable for IEC 61508 / 62304. SoM-on-carrier or fully custom SoC-on-PCB. Typical: patient monitors, industrial gateways, medical imaging accessories, connected appliances.',
            specs: [
                { key: 'SILICON', value: 'NXP i.MX' },
                { key: 'LIFECYCLE', value: '10–15 yr availability' },
                { key: 'BUS', value: 'I²C · SPI · UART · USB' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '05',
            name: 'Joshua',
            subtitle: 'TI SITARA — DETERMINISTIC REAL-TIME',
            positioning:
                'Built on TI Sitara processors — long-lifecycle availability plus the distinctive PRU subsystem: 200 MHz cycle-exact RISC cores with direct I/O pin access, running custom industrial protocols, stepper drives, precise PWM, and strict-deadline sampling without Linux jitter. Sits between general ARM-Linux and FPGA-grade real-time. Typical: industrial control, motor drives, EtherCAT / PROFINET masters and slaves, PLCs, energy-sector equipment.',
            specs: [
                { key: 'SILICON', value: 'TI Sitara' },
                { key: 'RT-CORE', value: 'PRU (200 MHz)' },
                { key: 'FIELDBUS', value: 'EtherCAT · PROFINET' },
                { key: 'OS', value: 'Yocto Linux / FreeRTOS' },
            ],
        },
        {
            number: '06',
            name: 'Sequoia',
            subtitle: 'INTEL / AMD x86 — WHEN x86 IS THE ANSWER',
            positioning:
                'A high-performance x86 SBC platform for the three cases that demand it: highest available compute, x86-only software stacks (Windows, legacy industrial, x86-validated virtualization), and high-PCIe-lane-count I/O. Ships without a separate real-time MCU — determinism comes through PREEMPT_RT, isolated cores, or hypervisor partitioning. Typical: edge servers, industrial PCs, GPU-accelerated vision rigs, defense compute payloads, x86-only software.',
            specs: [
                { key: 'SILICON', value: 'Intel / AMD x86' },
                { key: 'I/O', value: 'PCIe · USB · NVMe' },
                { key: 'RT', value: 'PREEMPT_RT / Xen / ACRN' },
                { key: 'OS', value: 'Linux' },
            ],
        },
    ],
} as const;
