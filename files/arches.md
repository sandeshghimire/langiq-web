# Arches — NVIDIA Jetson

## 01 / 09 · Arches
A custom Yocto-based embedded Linux platform, validated on Jetson TX2, Xavier NX, Orin, and Thor — from board bring-up to OTA-managed fleets.

- Hardened, Yocto-built Linux for the NVIDIA Jetson family — TX2, Xavier NX, Orin, Thor.
- Replaces ad-hoc JetPack / L4T images with a reproducible, auditable, customer-owned build.
- Every layer — bootloader, kernel, BSP, middleware, update system — configured for your hardware.
- Skip 6–12 months of platform engineering. Start application work on day one.

[Download brochure ↓](arches-brochure.pdf)

## 02 / 09 · Schematic to first boot
Board bring-up and BSP, from schematic review to a verified first boot on your carrier.

- Schematic and pin-mux review before PCB fab — power sequencing and DDR layout caught early.
- Custom BSP: device tree for your carrier — CSI cameras, PCIe, USB, GPIO, I²C / SPI peripherals.
- Board bring-up and smoke test covering power rails, clocks, memory training, peripheral enumeration.
- Custom bootloader work: UEFI customization, CBoot (legacy TX2), boot configuration, splash screens.

## 03 / 09 · Failsafe boot
A recoverable boot policy with golden images, automatic rollback, and manufacturing support.

- Golden boot image in a protected partition — a known-good state the device always recovers to.
- Failsafe and rollback boot: watchdog-supervised, automatic rollback on boot failure, brick-proof updates.
- Memory partitioning: eMMC / NVMe layout design, redundant partitions, persistent data separation.
- Flashing and manufacturing support: massflash tooling, fuse provisioning, production-line scripts.

## 04 / 09 · Kernel tuned to your hardware
The NVIDIA kernel shaped to your board, with the drivers your peripherals need.

- Kernel customization on NVIDIA's downstream kernel (5.10 / 5.15 / 6.x per JetPack release).
- PREEMPT_RT patch porting and validation for deterministic latency on Orin / Thor.
- Boot streamlining: initramfs minimization, deferred module loading, parallelized init.
- V4L2 camera drivers (CSI / GMSL / FPD-Link), IIO sensor drivers, custom PCIe / USB / SPI / I²C drivers.

## 05 / 09 · Industry-specific images
Pre-integrated, hardened image variants tuned per vertical.

- arches-robotics — ROS 2 (Humble / Jazzy), DDS tuning, Isaac ROS GEMs, real-time executor.
- arches-iot — MQTT (Mosquitto / paho), Azure IoT / AWS IoT Greengrass, edge telemetry agents.
- arches-automotive — SocketCAN, PREEMPT_RT, AUTOSAR-adjacent gateway patterns, ISO 26262-aware workflow.
- arches-medical — IEC 62304-aligned build traceability, SBOM generation, audit-ready change logs.
- arches-vision — DeepStream, GStreamer, TensorRT pipelines, multi-camera synchronization.

## 06 / 09 · Field updates, no field failures
Safe A/B OTA with a guaranteed way back.

- A/B redundant partitions (Mender, RAUC, or SWUpdate — selected per project).
- Golden boot image + automatic rollback on failed update or failed health check.
- Cloud or on-premise update server, fleet grouping, staged rollouts, delta updates.
- Signed updates cryptographically verified and chained to secure boot.

## 07 / 09 · Everything your app team needs
Eval images, SDKs, profiling, and CI/CD handed to your own team.

- Pre-flashed evaluation image for Jetson devkits and your custom hardware.
- Application SDK + eSDK: cross-toolchain, sysroot, CMake / Yocto SDK integration.
- Boot and runtime profiling: systemd-analyze, bootchart, perf, Nsight Systems for GPU / CPU.
- CI/CD: automated image builds, hardware-in-the-loop smoke tests, artifact signing.

## 08 / 09 · Real-time where you need it
Deterministic control on the Cortex-R SPE alongside Linux.

- FreeRTOS firmware on the SPE (Cortex-R52 on Orin / Thor, R5 on TX2 / Xavier).
- Linux ↔ RTOS communication: shared-memory mailboxes, IVC channels.
- Offload architecture: deterministic control on the R-core, perception on the GPU.
- Watchdog and health supervision from the real-time domain.

## 09 / 09 · Production-ready, day one
Per-device identity, manufacturing test, and compliance-ready builds.

- Per-device identity, keys, and cloud enrollment at first boot.
- Manufacturing test suites for the production line.
- Reproducible builds with SBOMs — ready for ISO 26262, IEC 62304, IEC 61508, DO-178C.
- First boot on your hardware in weeks, not quarters.
