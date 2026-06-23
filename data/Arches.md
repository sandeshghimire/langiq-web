# NVIDIA Jetson

---

## Slide 1 — NVIDIA Jetson
You need a production image on Jetson TX2, Xavier NX, Orin, or Thor. JetPack is not a production OS. We replace ad-hoc JetPack / L4T images with a reproducible Yocto build — CUDA, TensorRT, and DeepStream intact, fully owned by you.

- Yocto BSP on meta-tegra for TX2, Xavier NX, Orin Nano / NX / AGX, Thor.
- Replaces JetPack / L4T with a reproducible, auditable, customer-owned build.
- CUDA, TensorRT, DeepStream, cuDNN preserved in the Yocto image.
- Signed boot, A/B OTA, RTOS on the Cortex-R SPE.
- You own the full source, build system, and documentation. No lock-in.

---

## Slide 2 — Board Bring-Up and BSP
We work directly with your hardware engineering team. Schematic and PCB review before fab, custom BSP for your Jetson carrier, then methodical board bring-up covering boot, memory, cameras, and every peripheral on your board.

- Schematic and PCB review — power sequencing, DDR layout, boot straps, CSI lane routing.
- Custom BSP and device tree for your carrier — CSI cameras, PCIe, USB, GPIO, I2C, SPI.
- Boot verification — UEFI / CBoot config, fuse provisioning, massflash tooling.
- Memory validation — eMMC / NVMe layout, redundant partitions, persistent data separation.
- Peripheral bring-up — camera, PCIe, USB, CAN-FD, display, industrial I/O enumeration.

---

## Slide 3 — Yocto and Embedded Linux
JetPack gets you a demo. Shipping a product means a reproducible, auditable build you can maintain, patch, and hand off. We build on meta-tegra — the full accelerated compute stack, owned by you, not locked to JetPack.

- Reproducible Yocto build on meta-tegra — same inputs, same image, every time.
- CUDA, TensorRT, DeepStream, cuDNN built into the image — not bolt-ons.
- Read-only rootfs, hardened system services, no stray packages.
- Full source, recipes, and build system handed over — you own it, no lock-in.
- SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 / DO-178C ready.

---

## Slide 4 — Bootloader and Boot Optimization
A failed update never bricks a Jetson device. We configure the full multi-stage boot chain, implement a golden recovery image in a protected partition, and tune boot time for your application requirements.

- Multi-stage boot: BootROM → BCT/MB1 → MB2 → UEFI → kernel, fully customized.
- Golden boot image in a protected partition — always recovers to a known-good state.
- Automatic rollback — watchdog-supervised, reverts on failed boot or health check.
- eMMC / NVMe layout: redundant OS partitions, persistent data separation.
- Massflash tooling, fuse provisioning, and production-line flashing scripts.

---

## Slide 5 — Linux Kernel & Device Drivers
We customize the NVIDIA downstream kernel for your specific carrier board. PREEMPT_RT for deterministic latency, camera and sensor driver development, and boot streamlining for your startup time requirements.

- Kernel customization on NVIDIA downstream kernel — 5.10 / 5.15 / 6.x per JetPack release.
- PREEMPT_RT porting and validation for deterministic latency on Orin / Thor.
- V4L2 camera drivers — CSI, GMSL, FPD-Link for your specific sensors.
- Custom PCIe, USB, SPI, I2C, IIO sensor drivers for your carrier peripherals.
- Boot streamlining — initramfs minimization, deferred module loading, parallelized init.

---

## Slide 6 — RTOS and Microcontroller
Linux handles perception and connectivity. The Cortex-R Sensor Processing Engine (SPE) handles hard real-time — sensor fusion, safety supervision, and deterministic I/O where a missed deadline is a real failure.

- FreeRTOS on the SPE — Cortex-R52 on Orin / Thor, R5 on TX2 / Xavier.
- Linux ↔ RTOS communication via shared-memory mailboxes and IVC channels.
- Real-time sensor fusion, IMU sampling, and safety supervision on the R-core.
- GPU handles perception; R-core handles control — deterministic offload architecture.
- Watchdog and health supervision from the real-time domain.

---

## Slide 7 — Middleware
We integrate the middleware stack your application needs — ROS 2, vision pipelines, cloud connectivity, or automotive protocols — built into the Yocto image and validated on your Jetson hardware.

- arches-robotics — ROS 2 (Humble / Jazzy), DDS tuning, Isaac ROS GEMs, real-time executor.
- arches-vision — DeepStream, GStreamer, TensorRT pipelines, multi-camera synchronization.
- arches-iot — MQTT, AWS IoT Greengrass, Azure IoT, edge telemetry agents.
- arches-automotive — SocketCAN, PREEMPT_RT, ISO 26262-aware gateway patterns.
- arches-medical — IEC 62304-aligned build traceability, SBOM, audit-ready change logs.

---

## Slide 8 — OTA and Fleet Management
You need to update Jetson devices in the field without bricking them. We implement A/B OTA with a golden recovery image, automatic rollback, and signed updates chained to secure boot — a bad update never stops a device permanently.

- A/B redundant partitions via Mender, RAUC, or SWUpdate — selected per project.
- Golden boot image — factory-recovery partition that cannot be overwritten by an update.
- Automatic rollback on failed update, failed boot, or failed health check.
- Signed updates cryptographically chained to the Jetson secure boot chain.
- Staged rollouts — fleet grouping, 1% → 10% → all, delta updates for slow links.

---

## Slide 9 — SDK, Debugging and Profiling
Your application team needs to build, debug, and profile on Jetson without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, and CI/CD pipeline with hardware-in-the-loop validation on real Jetson hardware.

- Evaluation image for Jetson devkits and your custom carrier — running before your hardware exists.
- Application SDK — cross-toolchain and sysroot for your app team's x86 machines.
- Yocto eSDK — full build system handed to your platform team to modify and rebuild.
- Profiling — Nsight Systems, systemd-analyze, bootchart, perf, ftrace.
- CI/CD with hardware-in-the-loop smoke tests on real Jetson hardware.
