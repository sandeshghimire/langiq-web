# TI Sitara

---

## Slide 1 — TI Sitara
You need a production image on AM335x, AM62x, or AM64x. The TI Processor SDK is not a product. We build a reproducible Yocto platform with PRU-ICSS for sub-microsecond deterministic I/O and long-lifecycle support for industrial deployments.

- Yocto BSP for AM335x, AM62x, AM64x — BeagleBone and TI EVK ecosystems.
- Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux, including SYSFW / TIFS on AM6x.
- PRU-ICSS firmware for sub-microsecond deterministic I/O and industrial protocols.
- RTOS on Cortex-M4F (AM62x) and R5F (AM64x) with RPMsg to Linux.
- You own the full source, build system, and documentation. No lock-in.

---

## Slide 2 — Board Bring-Up and BSP
We work directly with your hardware engineering team. SYSFW integration on AM6x is non-trivial — we review the schematic before fab, build the BSP for your carrier, and bring up boot, memory, and every peripheral on your board.

- Schematic and PCB review — DDR routing and config, power sequencing (PMIC), boot straps.
- Custom BSP and device tree for your carrier — every interface mapped to your hardware.
- Boot verification — SPL / U-Boot port, SYSFW / TIFS integration on AM6x.
- Memory validation — DDR bring-up and stress test.
- Peripheral bring-up — CPSW / ICSSG Ethernet, CAN, USB, ADC, display, industrial I/O.

---

## Slide 3 — Yocto and Embedded Linux
The TI Processor SDK gets you running. Industrial products ship for a decade — you need reproducible builds you can patch, audit, and maintain for the life of the product. We build on meta-ti with strong mainline alignment.

- Reproducible Yocto build on meta-ti — TI Processor SDK aligned, same inputs, same image.
- Mainline kernel alignment — strong upstream support means long-term CVE patches and maintainability.
- Read-only rootfs, hardened system services, no stray packages.
- Full source, recipes, and build system handed over — you own it, no lock-in.
- SBOM generation — traceable to exact source revisions, IEC 61508 / IEC 62304 ready.

---

## Slide 4 — Bootloader and Boot Optimization
Industrial devices are unattended. A failed update or corrupted image must never stop a line. We configure the full boot chain including SYSFW on AM6x, implement golden recovery, and tune boot time for your fast-start requirements.

- Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux, fully customized per AM variant.
- SYSFW / TIFS integration on AM62x and AM64x.
- Golden boot image — watchdog-supervised, automatic rollback on failed boot.
- Secure boot and signed images for deployments that require it.
- Boot time optimization for industrial fast-start requirements.

---

## Slide 5 — Linux Kernel & Device Drivers
Sitara is a first-class PREEMPT_RT target. We customize the kernel for your hardware, build the PRU-ICSS interface drivers, and develop drivers for industrial Ethernet, CAN, ADC, and display on your specific carrier board.

- Kernel customization on TI trees — strong mainline support, config minimization.
- PREEMPT_RT — Sitara is a first-class real-time Linux target.
- PRU-ICSS interface drivers and remoteproc integration.
- Industrial Ethernet drivers — CPSW (AM335x / AM62x) and ICSSG (AM64x).
- CAN, ADC, touch, display (LCDC / DSS), custom SPI / I2C — drivers for your peripheral set.

---

## Slide 6 — RTOS and Microcontroller
PRU-ICSS delivers sub-microsecond deterministic I/O — the reason industrial customers choose Sitara. EtherCAT, PROFINET, and custom protocols run on the PRU in software-defined logic, alongside FreeRTOS or Zephyr on the Cortex-R/M cores.

- PRU-ICSS firmware — sub-microsecond I/O, EtherCAT, PROFINET, custom industrial protocols.
- FreeRTOS / Zephyr on Cortex-M4F (AM62x) and R5F (AM64x).
- RPMsg / remoteproc communication between Linux and the real-time domains.
- Encoder and PWM interfaces for motor control applications.
- Watchdog and health supervision from the real-time domain.

---

## Slide 7 — Middleware
We integrate the middleware stack your application needs — industrial Ethernet protocols, cloud connectivity, or automation stacks — built into the Yocto image and validated on your Sitara hardware.

- joshua-industrial — EtherCAT (PRU-ICSS), PROFINET, EtherNet/IP, Modbus, OPC UA, TSN.
- joshua-automation — real-time control stacks, motor control integration.
- joshua-iot — MQTT, edge gateways, protocol translation.
- joshua-energy — Modbus / DNP3, RS-485, metering protocols.
- Read-only rootfs, watchdog, hardened system services across all variants.

---

## Slide 8 — OTA and Fleet Management
Industrial gear is unattended and long-lived. A failed update must never stop a line. We implement A/B OTA covering kernel, rootfs, and PRU firmware together — automatic rollback, signed updates, built for unattended industrial sites.

- A/B updates covering kernel, rootfs, and PRU firmware atomically.
- Golden recovery image — automatic rollback on failed boot or health check.
- Signed update chain — device only runs images it can verify.
- Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server.
- Dashboard UI for fleet and release management.

---

## Slide 9 — SDK, Debugging and Profiling
Your application team needs to build, debug, and profile on Sitara without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, JTAG debug via CCS, and CI/CD with hardware-in-the-loop on real Sitara hardware.

- Evaluation image for TI EVKs and BeagleBone boards — running before your hardware exists.
- Application SDK — cross-toolchain and sysroot for your app team's x86 machines.
- Yocto eSDK — full build system handed to your platform team to modify and rebuild.
- Debugging — JTAG (CCS / XDS), kgdb, gdbserver, boot and latency profiling.
- CI/CD with hardware-in-the-loop smoke tests on real Sitara hardware.
