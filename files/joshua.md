# Joshua — TI Sitara

## 41 / 49 · Joshua
A custom Yocto-based platform for AM335x, AM62x, and AM64x — the industrial workhorse line. Deterministic I/O with PRU-ICSS, industrial networking, long-lifecycle support.

- Validated on AM335x, AM62x, AM64x (BeagleBone and TI EVK ecosystems).
- Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux (incl. SYSFW / TIFS on AM6x).
- PRU-ICSS firmware and RTOS on Cortex-M4F / R5F cores.
- Industrial workhorse with long-lifecycle support.

[Download brochure ↓](joshua-brochure.pdf)

## 42 / 49 · Industrial bring-up
Bring-up through the AM6x SYSFW/SPL chain, with every industrial peripheral verified.

- Schematic review: DDR routing / config, power sequencing (PMIC integration), boot-strap pins.
- Custom BSP and device tree development.
- Board bring-up and smoke test.
- Custom bootloader: SPL / U-Boot port, boot-media strategy, SYSFW integration on AM6x.

## 43 / 49 · Unattended boot
A failsafe boot built for unattended industrial sites.

- Golden boot development, memory partitioning.
- Failsafe and rollback boot with watchdog supervision — built for unattended industrial sites.
- Secure boot and signed images where the deployment demands it.
- Provisioning designed for the production line, not the lab.

## 44 / 49 · PRU + ARM
A first-class real-time kernel with PRU-ICSS drivers and remoteproc.

- Kernel customization on TI trees with strong mainline support on Sitara.
- PREEMPT_RT porting — Sitara is a first-class RT target.
- Boot streamlining for industrial fast-start requirements.
- PRU-ICSS interface drivers and remoteproc integration.

## 45 / 49 · Industry-specific images
Pre-integrated industrial image variants, hardened and ready.

- joshua-industrial — EtherCAT (via PRU-ICSS), PROFINET, EtherNet/IP, Modbus, OPC UA, TSN on AM64x.
- joshua-iot — MQTT, edge gateways, protocol translation.
- joshua-automation — real-time control stacks, motor control integration.
- joshua-medical — traceable builds, SBOM, audit-ready workflow.
- System services hardening, read-only rootfs, watchdog supervision.

## 46 / 49 · Failsafe OTA
Safe updates that cover the PRU firmware alongside Linux.

- A/B updates covering kernel, rootfs, and PRU firmware together.
- Automatic rollback — a failed update never stops a line.
- Cloud or on-prem server, staged rollouts, delta updates.
- Dashboard UI for fleet / release management with signed update chain.

## 47 / 49 · Timing tooling
Eval images, SDKs, and latency-focused profiling.

- Evaluation images for TI EVKs / BeagleBone and custom boards.
- Application SDK and Yocto eSDK.
- Debugging: JTAG (CCS / XDS), kgdb, gdbserver.
- Profiling: perf, LTTng, boot and latency profiling.

## 48 / 49 · Sub-microsecond I/O
PRU-ICSS determinism and RTOS control across the real-time domains.

- FreeRTOS / Zephyr on Cortex-M4F (AM62x) and R5F (AM64x) cores.
- PRU-ICSS firmware: deterministic sub-microsecond I/O, custom industrial protocols.
- RPMsg / remoteproc communication between Linux and real-time domains.
- Encoder / PWM interfaces and mixed-criticality industrial architectures.

## 49 / 49 · Deterministic factory
Industrial I/O, custom drivers, and per-device provisioning.

- Industrial Ethernet (CPSW / ICSSG), CAN, ADC / touch, display (LCDC / DSS) support.
- Custom SPI / I²C device drivers.
- Factory provisioning and per-device identity workflows.
- Deterministic real-time — at a cost FPGA can't match.
