# SoC Centric Website Content Update — Instruction Document

## Instruction to Website Builder/LLM

The website layout, design system, navigation, and styling are ALREADY SET. **Do not change layout, theme, colors, fonts, or structure.** Your job is to **replace/update the page content only** using the content below.

- Each platform gets its own section with sub-pages (Intro, BSP & Board Bring-Up, Kernel & Drivers, Middleware, OTA, DevKit & Debug, RTOS, FPGA where applicable).
- Use real platform names (NVIDIA Jetson, AMD Xilinx Zynq, NXP i.MX, TI Sitara, Intel/AMD x86, Raspberry Pi) in all customer-facing copy. Internal codenames (Arches, Zion, Pinnacle, Joshua, Sequoia) may appear once as product line names if the existing site uses them, otherwise omit.
- Keep tone: solution provider, outcome-focused, engineering credibility. Short paragraphs, scannable bullets.
- Each page should end with a CTA: "Talk to an engineer" / "Request an evaluation image".

---

# PLATFORM 1: NVIDIA Jetson (Arches)

## Page 1 — Intro

**Headline:** Production-Ready Embedded Linux for NVIDIA Jetson

**Subhead:** A custom Yocto-based embedded Linux platform, validated on Jetson TX2, Xavier NX, Orin, and Thor. From board bring-up to OTA-managed fleets — one platform, fully owned by you.

**What it is:**
Arches is a hardened, Yocto/OpenEmbedded-built Linux distribution for the NVIDIA Jetson family. It replaces ad-hoc JetPack/L4T images with a reproducible, auditable, customer-owned build system. Every layer — bootloader, kernel, BSP, middleware, update system — is configured for your hardware and your industry.

**Why it matters:**
- Skip 6–12 months of platform engineering; start application work on day one
- Reproducible builds: every image traceable to source, ideal for regulated industries
- Built on NVIDIA L4T/JetPack foundations with CUDA, TensorRT, DeepStream, and the full accelerated compute stack integrated
- Long-term maintainability: CVE patching, kernel updates, Yocto LTS alignment

**Feature highlights:**
- Custom Yocto-based embedded Linux (meta-tegra integration, Yocto LTS releases)
- Validated on Jetson TX2, Xavier NX, Orin (Nano/NX/AGX), and Thor
- Custom BSP and board bring-up for carrier boards and custom designs
- Bootloader and multi-stage boot (UEFI, CBoot legacy, U-Boot where applicable)
- Linux kernel and device driver development (camera, sensor, I/O)
- Boot-time and kernel optimization (sub-3-second boot targets achievable)
- Middleware and system services (ROS 2, DeepStream, GStreamer pipelines)
- Debugging and profiling (Nsight Systems, perf, ftrace, JTAG)
- OTA with A/B redundant boot and golden image fallback
- Secure boot, fused devices, disk encryption, signed update chains

## Page 2 — BSP & Board Bring-Up

**Headline:** From Schematic to First Boot

We work directly with your hardware engineers from schematic review through first power-on:

- Schematic and pin-mux review before PCB fab — catch boot-strap, power-sequencing, and DDR layout issues early
- Custom BSP: device tree authoring for your carrier board (CSI cameras, PCIe, USB, GPIO, I2C/SPI peripherals)
- Board bring-up and smoke test: structured checklist covering power rails, clocks, memory training, peripheral enumeration
- Custom bootloader work: UEFI customization, CBoot (legacy TX2), boot configuration, splash screens
- Golden boot development: known-good recovery image in protected partition
- Memory partitioning: eMMC/NVMe layout design, redundant partitions, persistent data separation
- Failsafe and rollback boot: watchdog-supervised boot, automatic rollback on boot failure, brick-proof field updates
- Flashing and manufacturing support: massflash tooling, fuse provisioning, production line scripts

## Page 3 — Linux Kernel & Device Drivers

**Headline:** A Kernel Tuned to Your Hardware, Not a Generic Image

- Kernel customization on NVIDIA's downstream kernel (5.10/5.15/6.x per JetPack release) — config pruning, feature selection, security hardening
- PREEMPT_RT patch porting and validation for deterministic latency on Orin/Thor
- Boot streamlining: initramfs minimization, deferred module loading, parallelized init — measured boot-time budgets
- Device driver development: V4L2 camera drivers (CSI/GMSL/FPD-Link), IIO sensor drivers, custom PCIe/USB/SPI/I2C device drivers
- Driver porting for custom hardware: bring vendor reference drivers up to your kernel version and device tree
- Power management: deep sleep states, dynamic frequency scaling, thermal management profiles
- Kernel debugging: kgdb, crash dump analysis, lockup and latency diagnosis

## Page 4 — Middleware & Industry Images

**Headline:** Industry-Specific Images, Ready to Deploy

Pre-integrated middleware stacks delivered as named image variants:

- **arches-robotics:** ROS 2 (Humble/Jazzy), DDS tuning, Isaac ROS GEMs, real-time executor configuration
- **arches-iot:** MQTT (Mosquitto/paho), Azure IoT / AWS IoT Greengrass connectivity, edge telemetry agents
- **arches-automotive:** SocketCAN with MCP251x/native CAN, PREEMPT_RT, AUTOSAR-adjacent gateway patterns, ISO 26262-aware development workflow
- **arches-medical:** IEC 62304-aligned build traceability, SBOM generation, audit-ready change logs
- **arches-vision:** DeepStream, GStreamer, TensorRT pipelines, multi-camera synchronization
- System services: systemd hardening, watchdog services, logging/journald policies, read-only rootfs with overlay

## Page 5 — OTA & Fleet Updates

**Headline:** Field Updates Without Field Failures

- Custom OTA system built on A/B redundant partitions (Mender, RAUC, or SWUpdate — selected per project)
- Golden boot image: factory-recovery partition that can never be overwritten by an update
- Automatic rollback: failed update or failed health check reverts to last known-good slot
- Cloud connectivity: hosted or on-premise update server, fleet grouping, staged rollouts, delta updates to minimize bandwidth
- Dashboard: simple web UI for release management — upload image, select fleet, monitor rollout, one-click rollback
- Signed updates: cryptographically verified update chain tied to secure boot
- Compliance artifacts: update audit logs, version traceability per device

## Page 6 — DevKit, SDK, Debugging & Profiling

**Headline:** Everything Your Application Team Needs

- Development kit: pre-flashed evaluation image for Jetson devkits and your custom hardware
- Application SDK: cross-toolchain, sysroot, CMake/Yocto SDK integration for your app developers
- eSDK (extensible SDK): full Yocto workflow for kernel and image customization by your own team
- Boot and runtime profiling: systemd-analyze, bootchart, perf, Nsight Systems for GPU/CPU pipelines
- Remote debugging: gdbserver workflows, VS Code integration, core dump collection from the field
- CI/CD integration: automated image builds, hardware-in-the-loop smoke tests, artifact signing
- Documentation: bring-up guide, developer onboarding guide, image release notes

## Page 7 — RTOS & Heterogeneous Compute

**Headline:** Real-Time Where You Need It

Jetson Orin/Thor include Cortex-R52 sensor processing engines (SPE); TX2/Xavier include Cortex-R5:

- FreeRTOS firmware development on the SPE for hard real-time sensor fusion, IMU sampling, safety supervision
- Linux ↔ RTOS communication: shared memory mailboxes, IVC channels
- Offload architecture: deterministic control loops on the R-core, perception on the GPU, coordination on Linux
- RTOS device drivers for SPE-attached peripherals (SPI/I2C/UART/GPIO/CAN)
- Watchdog and health supervision from the real-time domain

*(No FPGA page — Jetson has no programmable logic.)*

---

# PLATFORM 2: AMD Xilinx Zynq (Zion)

## Page 1 — Intro

**Headline:** Production-Ready Embedded Linux for AMD Xilinx Zynq

**Subhead:** Custom Yocto/PetaLinux-based platform for Zynq-7000, Zynq UltraScale+ MPSoC, Versal, and Kria SOMs (KV260/KR260). Processing system and programmable logic, engineered as one platform.

**What it is:**
Zion is a reproducible, Yocto-built Linux platform for the AMD adaptive SoC portfolio. It unifies the full boot chain (FSBL/PMU firmware, ARM Trusted Firmware, U-Boot), kernel, rootfs, FPGA bitstream management, and the real-time RPU domain into a single versioned build.

**Feature highlights:**
- Custom Yocto-based embedded Linux (meta-xilinx, PetaLinux-compatible, Yocto rel-v2025.x)
- Validated on Zynq-7000, UltraScale+ MPSoC, Versal AI Edge, Kria KV260/KR260
- Custom BSP and board bring-up for custom carrier and SOM designs
- Multi-stage boot: BootROM → FSBL → ATF → U-Boot → Linux, fully customized
- Kernel and driver development for PS peripherals and PL-attached IP
- Boot and kernel optimization
- Middleware: ROS 2, industrial protocols, vision pipelines on PL
- OTA with A/B boot, golden image, and bitstream-aware updates
- FPGA bitstream lifecycle management and PL driver development
- RTOS on Cortex-R5F RPU (FreeRTOS, Zephyr) with OpenAMP

## Page 2 — BSP & Board Bring-Up

- Schematic/pin review with your hardware team: MIO/EMIO planning, DDR configuration, power sequencing
- Custom FSBL and PMU firmware configuration
- Device tree authoring for PS peripherals and PL IP (device tree overlays per bitstream)
- Board bring-up and smoke test: memory calibration, peripheral checkout, PL configuration check
- Custom bootloader: U-Boot board port, boot.scr logic, QSPI/eMMC/SD boot media strategy
- Golden boot development: fallback boot image in QSPI with multiboot register support
- Memory partitioning and image layout for redundant boot
- Failsafe and rollback: Zynq multiboot + watchdog-driven recovery

## Page 3 — Linux Kernel & Device Drivers

- Kernel customization on xlnx kernel trees, config hardening, mainline alignment where possible
- PREEMPT_RT porting and latency validation
- Boot streamlining and optimization (FSBL to userspace budgets)
- Drivers for PL-attached IP: AXI DMA, AXI GPIO, custom AXI peripherals via UIO or custom kernel drivers
- V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks
- Driver development for custom hardware on PS interfaces (CAN, SPI, I2C, GEM Ethernet, USB)

## Page 4 — Middleware & Industry Images

- **zion-robotics:** ROS 2 on KR260, PL-accelerated perception, time-synchronized I/O
- **zion-industrial:** Modbus, OPC UA, EtherCAT (PL-assisted), TSN networking
- **zion-automotive:** SocketCAN, RT patch, gateway architectures
- **zion-medical:** traceable builds, SBOM, IEC 62304-aligned workflow
- Vision/DSP middleware: GStreamer with PL acceleration, Vitis AI runtime integration

## Page 5 — OTA

- A/B update system aware of both Linux images and FPGA bitstreams — atomic update of the full hardware/software set
- Golden image + golden bitstream recovery path
- Cloud or on-prem update server, staged rollouts, delta updates
- Dashboard UI for release and fleet management with rollback
- Signed, encrypted updates chained to hardware root of trust

## Page 6 — DevKit, SDK, Debugging & Profiling

- Evaluation images for Kria KV260/KR260 and ZCU boards
- Application SDK and Yocto eSDK for customer teams
- Cross-debug: JTAG via Vivado HW manager, kgdb, gdbserver
- Profiling: perf, LTTng, PL/PS interface utilization analysis
- CI/CD: automated image+bitstream builds, HIL smoke tests

## Page 7 — RTOS (Cortex-R5F RPU)

- FreeRTOS and Zephyr on the RPU (lockstep or split mode)
- OpenAMP/RPMsg communication between Linux (APU) and RTOS (RPU)
- Real-time motor control, safety supervision, deterministic I/O on the RPU
- RTOS device drivers and middleware for RPU-owned peripherals
- Mixed-criticality architecture design and partitioning

## Page 8 — FPGA & Bitstream Management

- Bitstream lifecycle: versioning, signing, packaging into the platform build
- Runtime bitstream loading via FPGA Manager; device tree overlays per design
- Partial reconfiguration support for live PL updates
- Custom firmware and PL IP integration: AXI register maps, interrupt wiring, DMA design collaboration with your FPGA team
- PL driver development (UIO/custom kernel modules) and userspace APIs
- Co-validation: PS/PL interface stress testing and timing verification

---

# PLATFORM 3: NXP i.MX (Pinnacle)

## Page 1 — Intro

**Headline:** Production-Ready Embedded Linux for NXP i.MX

**Subhead:** Custom Yocto-based platform for i.MX 8M (Mini/Nano/Plus), i.MX 93, and i.MX 95 — validated on NXP EVKs including FRDM i.MX 93. Secure, power-efficient, industrial-grade.

**Feature highlights:**
- Custom Yocto-based embedded Linux (meta-freescale/meta-imx, Yocto LTS)
- Validated on i.MX 8M family, i.MX 93 (FRDM), scalable to i.MX 95
- Custom BSP and board bring-up
- Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux
- Kernel and device driver development
- Boot-time and kernel optimization (fast-boot HMI and automotive profiles)
- Middleware and system services
- Debugging and profiling
- OTA with A/B and golden boot
- Secure boot (HAB/AHAB), EdgeLock security integration
- RTOS on Cortex-M core (FreeRTOS/Zephyr) with RPMsg

## Page 2 — BSP & Board Bring-Up

- Schematic review: DDR configuration and calibration (critical on i.MX), power tree, boot mode straps
- Custom BSP: device tree for your board, pinmux via config tools, peripheral integration
- Board bring-up and smoke test with structured checklist
- Custom bootloader: U-Boot SPL port, DDR init, boot media strategy (eMMC/SD/QSPI)
- Golden boot development and redundant boot via bootloader fallback logic
- Memory partitioning, failsafe and rollback boot
- HAB/AHAB secure boot provisioning and key management support

## Page 3 — Linux Kernel & Device Drivers

- Kernel customization on NXP downstream trees, mainline migration paths
- PREEMPT_RT porting and validation
- Boot streamlining: SPL-to-app optimization, sub-2-second HMI boot targets
- Driver development: V4L2 (MIPI CSI cameras, ISP on 8M Plus), audio (SAI/audio codecs), display (LVDS/MIPI DSI/HDMI), CAN-FD, Ethernet with TSN (i.MX 93)
- NPU integration: eIQ runtime on 8M Plus / i.MX 93 Ethos-U65
- Power management: low-power modes, suspend/resume tuning for battery devices

## Page 4 — Middleware & Industry Images

- **pinnacle-iot:** MQTT, cloud agents, EdgeLock-backed device identity
- **pinnacle-industrial:** Modbus, OPC UA, TSN networking, real-time I/O
- **pinnacle-automotive:** CAN-FD stacks, RT patch, instrument cluster fast-boot profile
- **pinnacle-medical:** IEC 62304-aligned traceable builds, SBOM
- HMI stack options: Qt, LVGL, Flutter embedded, Wayland/Weston tuning

## Page 5 — OTA

- A/B OTA (Mender/RAUC/SWUpdate) with golden recovery image
- Automatic rollback on failed boot or health check
- Cloud connectivity, staged fleet rollouts, delta updates
- Simple dashboard UI for OTA management and rollback
- Updates signed and chained to HAB/AHAB root of trust

## Page 6 — DevKit, SDK, Debugging & Profiling

- Evaluation images for NXP EVKs (incl. FRDM i.MX 93) and your custom hardware
- Application SDK and Yocto eSDK
- Debugging: JTAG (Lauterbach/Segger), kgdb, gdbserver, core dump pipelines
- Profiling: perf, LTTng, boot profiling, power profiling
- CI/CD integration with automated builds and HIL tests

## Page 7 — RTOS (Cortex-M Domain)

- FreeRTOS/Zephyr on the Cortex-M core (M7 on 8M Plus, M33 on i.MX 93)
- RPMsg/Messaging Unit communication with Linux
- Real-time control, sensor acquisition, low-power supervision on the M-core
- RTOS device drivers and middleware for M-core peripherals
- Heterogeneous architecture design: which workload runs where, and why

*(No FPGA page — i.MX has no programmable logic.)*

---

# PLATFORM 4: TI Sitara (Joshua)

## Page 1 — Intro

**Headline:** Production-Ready Embedded Linux for TI Sitara

**Subhead:** Custom Yocto-based platform for AM335x, AM62x, and AM64x — the industrial workhorse line. Deterministic I/O with PRU-ICSS, industrial networking, long-lifecycle support.

**Feature highlights:**
- Custom Yocto-based embedded Linux (meta-ti, TI Processor SDK alignment, Yocto LTS)
- Validated on AM335x, AM62x, AM64x (BeagleBone and TI EVK ecosystems)
- Custom BSP and board bring-up
- Multi-stage boot: ROM → SPL/tiboot3 → U-Boot → Linux (incl. SYSFW/TIFS on AM6x)
- Kernel and device driver development
- Boot and kernel optimization
- Industrial middleware and system services
- Debugging and profiling
- OTA with A/B and golden boot
- PRU-ICSS firmware and RTOS on Cortex-M4F/R5F cores

## Page 2 — BSP & Board Bring-Up

- Schematic review: DDR routing/config, power sequencing (PMIC integration), boot strap pins
- Custom BSP and device tree development
- Board bring-up and smoke test
- Custom bootloader: SPL/U-Boot port, boot media strategy, SYSFW integration on AM6x
- Golden boot development, memory partitioning
- Failsafe and rollback boot with watchdog supervision

## Page 3 — Linux Kernel & Device Drivers

- Kernel customization on TI trees with strong mainline support on Sitara
- PREEMPT_RT porting — Sitara is a first-class RT target
- Boot streamlining for industrial fast-start requirements
- Driver development: industrial Ethernet (CPSW/ICSSG), CAN, ADC/touch, display (LCDC/DSS), custom SPI/I2C devices
- PRU-ICSS interface drivers and remoteproc integration

## Page 4 — Middleware & Industry Images

- **joshua-industrial:** EtherCAT (via PRU-ICSS), PROFINET, EtherNet/IP, Modbus, OPC UA, TSN on AM64x
- **joshua-iot:** MQTT, edge gateways, protocol translation
- **joshua-automation:** real-time control stacks, motor control integration
- **joshua-medical:** traceable builds, SBOM, audit-ready workflow
- System services hardening, read-only rootfs, watchdog supervision

## Page 5 — OTA

- A/B OTA with golden recovery image and automatic rollback
- Cloud or on-prem server, staged rollouts, delta updates
- Dashboard UI for fleet/release management
- Signed update chain

## Page 6 — DevKit, SDK, Debugging & Profiling

- Evaluation images for TI EVKs/BeagleBone and custom boards
- Application SDK and Yocto eSDK
- Debugging: JTAG (CCS/XDS), kgdb, gdbserver
- Profiling: perf, LTTng, boot and latency profiling
- CI/CD with HIL smoke testing

## Page 7 — RTOS & PRU-ICSS

- FreeRTOS/Zephyr on Cortex-M4F (AM62x) and R5F (AM64x) cores
- PRU-ICSS firmware development: deterministic sub-microsecond I/O, custom industrial protocols, encoder/PWM interfaces
- RPMsg/remoteproc communication between Linux and real-time domains
- RTOS device drivers and middleware
- Mixed-criticality industrial architectures

*(No FPGA page.)*

---

# PLATFORM 5: Intel/AMD x86 (Sequoia)

## Page 1 — Intro

**Headline:** Production-Ready Embedded Linux for Intel & AMD x86

**Subhead:** Custom Yocto-based platform for industrial SBCs, COM Express/SMARC modules, and edge servers — Intel Atom/Core and AMD Ryzen Embedded. The same rigor as our ARM platforms, on x86.

**Feature highlights:**
- Custom Yocto-based embedded Linux for x86_64 (meta-intel, AMD embedded targets)
- Validated on industrial SBCs and embedded modules (Atom x6000E, Core, Ryzen Embedded)
- Custom BSP and board bring-up for carrier designs
- Boot chain: UEFI/coreboot → systemd-boot/GRUB → Linux, secure boot with custom keys
- Kernel and device driver development
- Boot and kernel optimization
- Middleware and system services
- Virtualization and workload consolidation (KVM, ACRN)
- Debugging and profiling
- OTA with A/B and golden boot

## Page 2 — BSP & Board Bring-Up

- Carrier board bring-up with your hardware team: BIOS/UEFI configuration, ACPI table review
- Custom BSP: kernel config for your exact peripheral set, out-of-tree driver integration
- Smoke test: PCIe enumeration, storage, network, display, I/O checkout
- Custom boot: UEFI secure boot key enrollment, coreboot where applicable, boot policy
- Golden boot and redundant boot partitions (UEFI boot entries + health-checked fallback)
- Memory/storage partitioning, failsafe and rollback boot

## Page 3 — Linux Kernel & Device Drivers

- Kernel customization and hardening (LTS kernels), config minimization
- PREEMPT_RT for industrial determinism; Xenomai where hard real-time is required
- Boot streamlining: UEFI-to-app optimization, kiosk/HMI fast boot
- Driver work: custom PCIe cards, industrial I/O, CAN adapters, GPU/iGPU enablement (Intel/AMD media stacks)
- TPM 2.0 integration, measured boot, disk encryption (LUKS + TPM sealing)

## Page 4 — Middleware & Industry Images

- **sequoia-industrial:** Modbus, OPC UA, TSN, soft-PLC integration
- **sequoia-iot/edge:** MQTT, container runtime (Docker/Podman), edge orchestration
- **sequoia-vision:** OpenVINO/ROCm pipelines, GStreamer, multi-camera ingest
- **sequoia-medical/defense:** hardened, audit-ready, SBOM-complete builds
- Virtualization images: KVM/ACRN for consolidating RT + GUI + connectivity workloads on one box

## Page 5 — OTA

- A/B image updates with golden recovery (RAUC/Mender on x86, or image-based ostree)
- Automatic rollback via boot counting and health checks
- Cloud/on-prem update server, staged rollouts, delta updates
- Dashboard UI for fleet management
- Secure-boot-chained signed updates

## Page 6 — DevKit, SDK, Debugging & Profiling

- Evaluation images for common industrial SBCs and your hardware
- Application SDK and Yocto eSDK
- Debugging: kgdb, kexec/kdump crash analysis, remote gdb
- Profiling: perf, eBPF-based tracing, boot analysis
- CI/CD with automated image builds and HIL validation

## Page 7 — Real-Time & Workload Consolidation

- PREEMPT_RT and Xenomai configuration and latency validation on x86
- CPU isolation, IRQ affinity, cache partitioning for deterministic cores
- Hypervisor-based consolidation: RTOS or RT-Linux guest alongside HMI guest (ACRN/KVM)
- Jailhouse partitioning for safety-adjacent designs

*(No FPGA page; PCIe FPGA card integration available as custom work — ties into Orion.)*

---

# PLATFORM 6: Raspberry Pi

## Page 1 — Intro

**Headline:** Production-Ready Embedded Linux for Raspberry Pi

**Subhead:** Custom Yocto-based platform for Compute Module 4/5, Raspberry Pi 4/5, and Pico — turning the world's most popular SBC into a real industrial product platform.

**What it is:**
Raspberry Pi is fantastic for prototypes — and risky for products when you ship stock Raspberry Pi OS. Our platform replaces it with a minimal, reproducible Yocto build: locked-down, updatable, secure, and manufacturable.

**Feature highlights:**
- Custom Yocto-based embedded Linux (meta-raspberrypi, Yocto LTS)
- Validated on CM4, CM5, Pi 4, Pi 5; companion firmware on Pico/Pico W (RP2040/RP2350)
- Custom BSP and carrier board bring-up for CM4/CM5 designs
- Boot chain customization: EEPROM bootloader config, tryboot A/B mechanism, U-Boot option
- Kernel and device driver development
- Boot and kernel optimization
- Middleware and system services
- Debugging and profiling
- OTA with A/B (tryboot) and golden boot
- Secure boot (CM4/CM5 signed boot), encrypted storage

## Page 2 — BSP & Board Bring-Up

- CM4/CM5 carrier board design review with your hardware team
- Custom BSP: device tree overlays for your carrier (cameras, displays, CAN, RS-485, industrial I/O)
- Board bring-up and smoke test
- Bootloader: EEPROM configuration, signed boot enablement, boot order policy
- Golden boot and tryboot-based fallback
- Storage partitioning (eMMC on CM, NVMe on CM5/Pi 5), failsafe and rollback boot

## Page 3 — Linux Kernel & Device Drivers

- Kernel customization on Raspberry Pi kernel trees, config minimization
- PREEMPT_RT builds for control applications
- Boot streamlining: fast-boot kiosk/HMI profiles
- Driver development: camera (libcamera/Unicam/CSI), DSI/DPI displays, CAN (MCP2515/MCP251xFD), industrial sensors, custom HATs
- GPIO/PWM/I2C/SPI integration with deterministic userspace APIs

## Page 4 — Middleware & Industry Images

- **rpi-iot:** MQTT, cloud agents, fleet telemetry
- **rpi-industrial:** Modbus, OPC UA, RS-485 stacks
- **rpi-robotics:** ROS 2 builds tuned for Pi 5
- **rpi-kiosk/hmi:** Wayland kiosk images, Qt/LVGL/Chromium kiosk modes
- Hardened system services, read-only rootfs with overlayfs, watchdog

## Page 5 — OTA

- A/B updates using the native tryboot mechanism or RAUC/Mender
- Golden recovery image, automatic rollback
- Cloud connectivity, staged rollouts, delta updates
- Dashboard UI for fleet OTA management
- Signed updates; signed boot chain on CM4/CM5

## Page 6 — DevKit, SDK, Debugging & Profiling

- Evaluation images for Pi 4/5 and CM4/CM5 IO boards
- Application SDK and Yocto eSDK
- Debugging and profiling: perf, ftrace, remote gdb, boot analysis
- CI/CD integration and HIL smoke tests

## Page 7 — RTOS & Microcontroller Companions (Pico)

- FreeRTOS and Zephyr firmware on RP2040/RP2350 (Pico/Pico W)
- Pi ↔ Pico architectures: Linux for connectivity/UI, Pico for hard real-time I/O
- PIO (Programmable I/O) development for custom protocols and precise timing
- RTOS device drivers and middleware
- UART/SPI/USB communication links with structured protocols

*(No FPGA page.)*

---

# Cross-Platform Closing Section (site-wide, one page or footer band)

**Why SoC Centric:**
- One engineering methodology across six platforms covering ~90% of the embedded Linux market
- Customer owns everything: full source, build system, documentation — no lock-in
- Reproducible Yocto builds with SBOMs — ready for ISO 26262, IEC 62304, IEC 61508, DO-178C environments
- Natural growth path: platform → independent V&V (Polaris) → hardware-in-the-loop validation (Orion) → field data logging (Vela) via SiliconCentric

**CTA:** Request an evaluation image for your target platform, or schedule a 30-minute platform architecture call.