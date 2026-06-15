# Pinnacle — NXP i.MX

## 31 / 39 · Pinnacle
A custom Yocto-based platform for NXP i.MX 8M (Mini / Nano / Plus), i.MX 93, and i.MX 95 — secure, power-efficient, industrial-grade.

- Validated on i.MX 8M family, i.MX 93 (FRDM), scalable to i.MX 95.
- Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux.
- Secure boot (HAB / AHAB), EdgeLock security integration.
- RTOS on Cortex-M core (FreeRTOS / Zephyr) with RPMsg.

[Download brochure ↓](pinnacle-brochure.pdf)

## 32 / 39 · DDR, power, straps
Bring-up that gets i.MX DDR calibration and the boot chain right.

- Schematic review: DDR configuration and calibration (critical on i.MX), power tree, boot-mode straps.
- Custom BSP: device tree for your board, pinmux via config tools, peripheral integration.
- Board bring-up and smoke test with a structured checklist.
- Custom bootloader: U-Boot SPL port, DDR init, boot-media strategy (eMMC / SD / QSPI).

## 33 / 39 · HAB / AHAB secure boot
A signed, recoverable boot built for regulated manufacturing.

- Golden boot development and redundant boot via bootloader fallback logic.
- Memory partitioning, failsafe and rollback boot.
- HAB / AHAB secure boot provisioning and key-management support.
- Factory provisioning designed for regulated manufacturing.

## 34 / 39 · Industrial kernel
A tuned kernel with fast HMI boot, the NPU, and your bus drivers in place.

- Kernel customization on NXP downstream trees, mainline migration paths.
- PREEMPT_RT porting and validation.
- Boot streamlining: SPL-to-app optimization, sub-2-second HMI boot targets.
- Driver work: V4L2 (MIPI CSI, ISP on 8M Plus), audio (SAI / codecs), display, CAN-FD, TSN.

## 35 / 39 · Industry-specific images
Pre-integrated, hardened image variants tuned per vertical.

- pinnacle-iot — MQTT, cloud agents, EdgeLock-backed device identity.
- pinnacle-industrial — Modbus, OPC UA, TSN networking, real-time I/O.
- pinnacle-automotive — CAN-FD stacks, RT patch, instrument-cluster fast-boot profile.
- pinnacle-medical — IEC 62304-aligned traceable builds, SBOM.
- HMI stack options: Qt, LVGL, Flutter embedded, Wayland / Weston tuning.

## 36 / 39 · A/B, signed, audited
Safe field updates chained to the HAB / AHAB root of trust.

- A/B OTA (Mender / RAUC / SWUpdate) with golden recovery image.
- Automatic rollback on failed boot or health check.
- Cloud connectivity, staged fleet rollouts, delta updates.
- Updates signed and chained to HAB / AHAB root of trust.

## 37 / 39 · Traceable tooling
Eval images, SDKs, and debug built for audit-ready work.

- Evaluation images for NXP EVKs (including FRDM i.MX 93) and your custom hardware.
- Application SDK and Yocto eSDK for your application teams.
- Debugging: JTAG (Lauterbach / Segger), kgdb, gdbserver, core-dump pipelines.
- Profiling: perf, LTTng, boot profiling, power profiling.

## 38 / 39 · M7 / M33 cores
Deterministic control and low-power supervision on the Cortex-M domain.

- FreeRTOS / Zephyr on the Cortex-M core (M7 on 8M Plus, M33 on i.MX 93).
- RPMsg / Messaging Unit communication with Linux.
- Real-time control, sensor acquisition, low-power supervision on the M-core.
- Heterogeneous architecture design: which workload runs where, and why.

## 39 / 39 · Audit-ready builds
NPU, power management, and provisioning for a decade-long product.

- NPU integration: eIQ runtime on 8M Plus / i.MX 93 Ethos-U65.
- Power management: low-power modes, suspend / resume tuning for battery devices.
- Factory provisioning with per-device keys and identity.
- A platform your product can stand on for a decade.
