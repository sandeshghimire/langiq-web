# Zion — AMD Xilinx Zynq

## 21 / 29 · Zion
A custom Yocto / PetaLinux-based platform for Zynq-7000, Zynq UltraScale+ MPSoC, Versal, and Kria SOMs — processing system and programmable logic, engineered as one platform.

- Reproducible, Yocto-built Linux for the AMD adaptive SoC portfolio.
- Validated on Zynq-7000, Zynq UltraScale+ MPSoC, Versal AI Edge, Kria KV260 / KR260.
- Unifies the full boot chain: FSBL / PMU firmware, ATF, U-Boot, kernel, rootfs, bitstream.
- Real-time RPU domain folded into one versioned build.

[Download brochure ↓](zion-brochure.pdf)

## 22 / 29 · PS + PL, one system
Bring-up that configures and verifies the programmable logic alongside the processing system.

- Schematic / pin review: MIO / EMIO planning, DDR configuration, power sequencing.
- Custom FSBL and PMU firmware configuration.
- Device tree authoring for PS peripherals and PL IP (overlays per bitstream).
- Board bring-up and smoke test: memory calibration, peripheral checkout, PL configuration check.

## 23 / 29 · Hardware boot, owned
A fully customized multi-stage boot with golden recovery.

- Multi-stage boot: BootROM → FSBL → ATF → U-Boot → Linux, fully customized.
- Custom bootloader: U-Boot board port, boot.scr logic, QSPI / eMMC / SD boot media strategy.
- Golden boot: fallback boot image in QSPI with multiboot register support.
- Failsafe and rollback: Zynq multiboot + watchdog-driven recovery.

## 24 / 29 · PL-aware kernel
A hardened kernel with drivers for the programmable-logic IP.

- Kernel customization on xlnx kernel trees, config hardening, mainline alignment.
- PREEMPT_RT porting and latency validation.
- Drivers for PL-attached IP: AXI DMA, AXI GPIO, custom AXI peripherals via UIO or custom kernel modules.
- V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks.

## 25 / 29 · Industry-specific images
Pre-integrated variants with PL acceleration where it counts.

- zion-robotics — ROS 2 on KR260, PL-accelerated perception, time-synchronized I/O.
- zion-industrial — Modbus, OPC UA, EtherCAT (PL-assisted), TSN networking.
- zion-automotive — SocketCAN, RT patch, gateway architectures.
- zion-medical — traceable builds, SBOM, IEC 62304-aligned workflow.
- Vision / DSP middleware: GStreamer with PL acceleration, Vitis AI runtime integration.

## 26 / 29 · Bitstream-aware OTA
Atomic updates that version Linux and the bitstream together.

- A/B update system aware of both Linux images and FPGA bitstreams — atomic update.
- Golden image + golden bitstream recovery path.
- Cloud or on-prem update server, staged rollouts, delta updates.
- Signed, encrypted updates chained to a hardware root of trust.

## 27 / 29 · PS/PL tooling
Eval images, SDKs, and cross-debug across software and logic.

- Evaluation images for Kria KV260 / KR260 and ZCU boards.
- Application SDK and Yocto eSDK for your teams.
- Cross-debug: JTAG via Vivado HW manager, kgdb, gdbserver.
- Profiling: perf, LTTng, PL / PS interface utilization analysis.

## 28 / 29 · RPU + bitstream
Hard real-time on the RPU and a first-class bitstream lifecycle.

- FreeRTOS and Zephyr on the RPU (lockstep or split mode).
- OpenAMP / RPMsg communication between Linux (APU) and RTOS (RPU).
- Bitstream lifecycle: versioning, signing, packaging into the platform build.
- Runtime bitstream loading via FPGA Manager; partial reconfiguration for live PL updates.

## 29 / 29 · Fuses, keys, goldens
PL co-validation and factory programming across software and fabric.

- PL driver development (UIO / custom kernel modules) and userspace APIs.
- Co-validation: PS / PL interface stress testing and timing verification.
- Factory programming of fuses, keys, and golden images.
- Production test covering processors and fabric together.
