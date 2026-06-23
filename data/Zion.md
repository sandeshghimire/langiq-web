# AMD Xilinx Zynq

---

## Slide 1 — AMD Xilinx Zynq
You need Linux on the processing system and your FPGA design on the programmable logic — versioned, built, and updated together. We deliver the full stack: FSBL, ATF, U-Boot, kernel, rootfs, and bitstream as one owned platform.

- Yocto / PetaLinux BSP for Zynq-7000, UltraScale+ MPSoC, Versal, Kria KV260 / KR260.
- PS + PL + RPU firmware versioned and built as one platform — not patched together.
- Custom FSBL, PMU firmware, ATF, U-Boot, kernel, and bitstream management.
- Bitstream-aware A/B OTA — Linux image and FPGA bitstream updated atomically.
- You own the full source, build system, bitstream pipeline, and documentation. No lock-in.

---

## Slide 2 — Board Bring-Up and BSP
We work directly with your hardware engineering team. Schematic and PCB review before fab, MIO/EMIO planning, custom FSBL and BSP for your board, then bring-up covering PS boot, DDR calibration, PL configuration, and every peripheral.

- Schematic and PCB review — MIO/EMIO planning, DDR config, power sequencing.
- Custom FSBL and PMU firmware configuration for your board.
- Device tree for PS peripherals and PL IP — overlays per bitstream.
- Memory calibration — DDR bring-up and stress test.
- Peripheral bring-up — GEM Ethernet, USB, CAN, SPI, I2C, PL configuration check.

---

## Slide 3 — Yocto and Embedded Linux
PetaLinux gets you running. A product means reproducible builds where the processing system, programmable logic, and RPU firmware are versioned together. We build on meta-xilinx — the whole stack owned by you.

- Reproducible Yocto build on meta-xilinx (PetaLinux-compatible, rel-v2025.x).
- PS + PL + RPU firmware in one versioned build — the Zynq-specific promise.
- Read-only rootfs, hardened system services, no stray packages.
- Full source, recipes, and build system handed over — you own it, no lock-in.
- SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 / DO-178C ready.

---

## Slide 4 — Bootloader and Boot Optimization
A corrupted image or failed update never bricks a Zynq device. We configure the full multi-stage boot chain from BootROM to Linux, implement QSPI golden recovery with multiboot support, and tune boot time for your requirements.

- Multi-stage boot: BootROM → FSBL → bitstream → ATF → U-Boot → kernel, fully customized.
- Golden boot in QSPI — multiboot register fallback to a known-good state.
- Automatic rollback — watchdog-supervised, reverts on failed boot or health check.
- Boot media strategy: QSPI, eMMC, SD per project.
- U-Boot board port, boot.scr logic, memory partitioning and redundant slot layout.

---

## Slide 5 — Linux Kernel & Device Drivers
We customize the xlnx kernel for your Zynq design — including drivers for your PL-attached IP. AXI DMA, AXI GPIO, custom AXI peripherals, and V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks.

- Kernel customization on xlnx trees — config hardening, mainline alignment.
- PREEMPT_RT porting and latency validation.
- PL IP drivers — AXI DMA, AXI GPIO, custom AXI peripherals via UIO or kernel modules.
- V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks.
- GEM Ethernet, CAN, SPI, I2C, USB — PS peripheral drivers for your carrier.

---

## Slide 6 — RTOS and Microcontroller
The UltraScale+ RPU runs hard real-time alongside Linux on the APU, coordinated over OpenAMP. We deliver FreeRTOS or Zephyr on the RPU, OpenAMP/RPMsg communication, and the full bitstream lifecycle as one integrated platform.

- FreeRTOS and Zephyr on the RPU — lockstep or split Cortex-R5F configuration.
- OpenAMP / RPMsg communication between Linux (APU) and RTOS (RPU).
- Real-time motor control, safety supervision, and deterministic I/O on the RPU.
- Runtime bitstream loading via FPGA Manager; partial reconfiguration for live PL updates.
- Bitstream versioning, signing, and packaging integrated into the platform build.

---

## Slide 7 — Middleware
We integrate the middleware stack your application needs — industrial networking, robotics, vision, or automotive protocols — built into the Yocto image and validated on your Zynq hardware, with PL acceleration where it applies.

- zion-industrial — EtherCAT (PL-assisted), PROFINET, OPC UA, Modbus, TSN.
- zion-robotics — ROS 2 on KR260, PL-accelerated perception, time-synchronized I/O.
- zion-vision — GStreamer with PL acceleration, Vitis AI runtime integration.
- zion-automotive — SocketCAN, PREEMPT_RT, gateway architectures.
- zion-medical — IEC 62304-aligned traceable builds, SBOM, audit-ready workflow.

---

## Slide 8 — OTA and Fleet Management
On Zynq, an update covers both the Linux image and the FPGA bitstream — atomically. A bad update never bricks a device. We implement full-stack A/B OTA with golden recovery for both the OS and the programmable logic.

- Full-stack A/B — Linux image and FPGA bitstream updated atomically in one transaction.
- Golden image + golden bitstream recovery — both fallback independently.
- Automatic rollback on failed boot or health check.
- Signed, encrypted updates chained to the hardware root of trust.
- Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server.

---

## Slide 9 — SDK, Debugging and Profiling
Your application and FPGA teams need to develop, debug, and profile without rebuilding from scratch. We deliver a cross-toolchain, eSDK, JTAG debug via Vivado, and CI/CD with both image and bitstream builds on real hardware.

- Evaluation image for Kria KV260 / KR260 and ZCU boards — running before your hardware exists.
- Application SDK — cross-toolchain and sysroot for your app team's x86 machines.
- Yocto eSDK — full build system handed to your platform team to modify and rebuild.
- Cross-debug — JTAG via Vivado hardware manager, kgdb, gdbserver.
- CI/CD with hardware-in-the-loop validation of both image and bitstream builds.
