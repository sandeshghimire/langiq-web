export interface SlideData {
  stage: number;
  eyebrow: string;
  heading: string;
  subtitle: string;
  bullets: string[];
}

export interface PlatformData {
  id: string;
  name: string;
  chipFamily: string;
  accent: string; // CSS color
  // Section counter offset: each platform shows a unique number band
  // (arches 01–09, acadia 11–19, zion 21–29, …) so the counter alone
  // tells you which page you're on.
  counterBase: number;
  edgeOneLiner: string;
  industries: {
    primary: string[];
    secondary: string[];
  };
  bootChain: string[];
  slides: SlideData[];
}

export const platforms: PlatformData[] = [
  {
    id: "arches",
    name: "Arches",
    chipFamily: "NVIDIA Jetson",
    accent: "#0f7a4d",
    counterBase: 10,
    edgeOneLiner:
      "A custom Yocto-based embedded Linux platform, validated on Jetson TX2, Xavier NX, Orin, and Thor — from board bring-up to OTA-managed fleets.",
    industries: {
      primary: ["Robotics", "Automotive / ADAS"],
      secondary: ["Drones", "Smart cameras", "Industrial inspection"]
    },
    bootChain: ["BootROM", "BCT/MB1", "MB2", "UEFI", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "STAGE 01 / OVERVIEW",
        heading: "Arches",
        subtitle:
          "A custom Yocto-based embedded Linux platform, validated on Jetson TX2, Xavier NX, Orin, and Thor — from board bring-up to OTA-managed fleets.",
        bullets: [
          "Hardened, Yocto-built Linux for the NVIDIA Jetson family — TX2, Xavier NX, Orin, Thor.",
          "Replaces ad-hoc JetPack / L4T images with a reproducible, auditable, customer-owned build.",
          "Every layer — bootloader, kernel, BSP, middleware, update system — configured for your hardware.",
          "Skip 6–12 months of platform engineering. Start application work on day one."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP & BOARD BRING-UP",
        heading: "Schematic to first boot",
        subtitle:
          "Board bring-up and BSP, from schematic review to a verified first boot on your carrier.",
        bullets: [
          "Schematic and pin-mux review before PCB fab — power sequencing and DDR layout caught early.",
          "Custom BSP: device tree for your carrier — CSI cameras, PCIe, USB, GPIO, I²C / SPI peripherals.",
          "Board bring-up and smoke test covering power rails, clocks, memory training, peripheral enumeration.",
          "Custom bootloader work: UEFI customization, CBoot (legacy TX2), boot configuration, splash screens."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER & GOLDEN BOOT",
        heading: "Failsafe boot",
        subtitle:
          "A recoverable boot policy with golden images, automatic rollback, and manufacturing support.",
        bullets: [
          "Golden boot image in a protected partition — a known-good state the device always recovers to.",
          "Failsafe and rollback boot: watchdog-supervised, automatic rollback on boot failure, brick-proof updates.",
          "Memory partitioning: eMMC / NVMe layout design, redundant partitions, persistent data separation.",
          "Flashing and manufacturing support: massflash tooling, fuse provisioning, production-line scripts."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Kernel tuned to your hardware",
        subtitle:
          "The NVIDIA kernel shaped to your board, with the drivers your peripherals need.",
        bullets: [
          "Kernel customization on NVIDIA's downstream kernel (5.10 / 5.15 / 6.x per JetPack release).",
          "PREEMPT_RT patch porting and validation for deterministic latency on Orin / Thor.",
          "Boot streamlining: initramfs minimization, deferred module loading, parallelized init.",
          "V4L2 camera drivers (CSI / GMSL / FPD-Link), IIO sensor drivers, custom PCIe / USB / SPI / I²C drivers."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE & INDUSTRY IMAGES",
        heading: "Industry-specific images",
        subtitle: "Pre-integrated, hardened image variants tuned per vertical.",
        bullets: [
          "arches-robotics — ROS 2 (Humble / Jazzy), DDS tuning, Isaac ROS GEMs, real-time executor.",
          "arches-iot — MQTT (Mosquitto / paho), Azure IoT / AWS IoT Greengrass, edge telemetry agents.",
          "arches-automotive — SocketCAN, PREEMPT_RT, AUTOSAR-adjacent gateway patterns, ISO 26262-aware workflow.",
          "arches-medical — IEC 62304-aligned build traceability, SBOM generation, audit-ready change logs.",
          "arches-vision — DeepStream, GStreamer, TensorRT pipelines, multi-camera synchronization."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & FLEET UPDATES",
        heading: "Field updates, no field failures",
        subtitle: "Safe A/B OTA with a guaranteed way back.",
        bullets: [
          "A/B redundant partitions (Mender, RAUC, or SWUpdate — selected per project).",
          "Golden boot image + automatic rollback on failed update or failed health check.",
          "Cloud or on-premise update server, fleet grouping, staged rollouts, delta updates.",
          "Signed updates cryptographically verified and chained to secure boot."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / DEVKIT, SDK, DEBUG",
        heading: "Everything your app team needs",
        subtitle:
          "Eval images, SDKs, profiling, and CI/CD handed to your own team.",
        bullets: [
          "Pre-flashed evaluation image for Jetson devkits and your custom hardware.",
          "Application SDK + eSDK: cross-toolchain, sysroot, CMake / Yocto SDK integration.",
          "Boot and runtime profiling: systemd-analyze, bootchart, perf, Nsight Systems for GPU / CPU.",
          "CI/CD: automated image builds, hardware-in-the-loop smoke tests, artifact signing."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / RTOS & HETEROGENEOUS COMPUTE",
        heading: "Real-time where you need it",
        subtitle: "Deterministic control on the Cortex-R SPE alongside Linux.",
        bullets: [
          "FreeRTOS firmware on the SPE (Cortex-R52 on Orin / Thor, R5 on TX2 / Xavier).",
          "Linux ↔ RTOS communication: shared-memory mailboxes, IVC channels.",
          "Offload architecture: deterministic control on the R-core, perception on the GPU.",
          "Watchdog and health supervision from the real-time domain."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Production-ready, day one",
        subtitle:
          "Per-device identity, manufacturing test, and compliance-ready builds.",
        bullets: [
          "Per-device identity, keys, and cloud enrollment at first boot.",
          "Manufacturing test suites for the production line.",
          "Reproducible builds with SBOMs — ready for ISO 26262, IEC 62304, IEC 61508, DO-178C.",
          "First boot on your hardware in weeks, not quarters."
        ]
      }
    ]
  },
  {
    id: "acadia",
    name: "Acadia",
    chipFamily: "Raspberry Pi",
    accent: "#c43a3a",
    counterBase: 20,
    edgeOneLiner:
      "A custom Yocto-based platform for Compute Module 4 / 5, Pi 4 / 5, and Pico — turning the world's most popular SBC into a real industrial product platform.",
    industries: {
      primary: ["IoT / Smart building", "Medical"],
      secondary: ["Kiosks", "Industrial gateways"]
    },
    bootChain: ["BootROM", "EEPROM bootloader", "firmware (start.elf)", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "STAGE 01 / OVERVIEW",
        heading: "Acadia",
        subtitle:
          "A custom Yocto-based platform for Compute Module 4 / 5, Pi 4 / 5, and Pico — turning the world's most popular SBC into a real industrial product platform.",
        bullets: [
          "Minimal, reproducible Yocto build replacing stock Raspberry Pi OS for production.",
          "Validated on Compute Module 4, Compute Module 5, Pi 4, Pi 5; companion firmware on Pico / Pico W.",
          "Locked-down, updatable, secure, manufacturable — not a hobbyist image.",
          "Custom BSP and carrier-board bring-up for CM4 / CM5 designs."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP & BOARD BRING-UP",
        heading: "Carrier-board bring-up",
        subtitle:
          "From carrier design review to a verified boot on your own hardware.",
        bullets: [
          "CM4 / CM5 carrier board design review with your hardware team.",
          "Custom BSP: device tree overlays for your carrier — cameras, displays, CAN, RS-485, industrial I/O.",
          "Board bring-up and smoke test: storage, network, peripheral checkout, I/O validation.",
          "Bootloader: EEPROM configuration, signed boot enablement, boot-order policy."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER & GOLDEN BOOT",
        heading: "Failsafe boot",
        subtitle:
          "Golden images and tryboot fallback that keep a device recoverable.",
        bullets: [
          "Boot-chain customization: EEPROM bootloader config, tryboot A/B mechanism, U-Boot option.",
          "Golden boot and tryboot-based fallback — recoverable from corrupted storage or failed updates.",
          "Storage partitioning: eMMC on CM, NVMe on CM5 / Pi 5; failsafe and rollback boot.",
          "Factory provisioning baked into the first-boot sequence."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Production kernel",
        subtitle:
          "A minimized Raspberry Pi kernel with the drivers your carrier needs.",
        bullets: [
          "Kernel customization on Raspberry Pi kernel trees; config minimization for boot time.",
          "PREEMPT_RT builds for control applications.",
          "Driver development: camera (libcamera / Unicam / CSI), DSI / DPI displays, CAN (MCP2515 / MCP251xFD).",
          "GPIO / PWM / I²C / SPI integration with deterministic userspace APIs."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE & INDUSTRY IMAGES",
        heading: "Industry-specific images",
        subtitle: "Pre-integrated, hardened image variants tuned per vertical.",
        bullets: [
          "rpi-iot — MQTT, cloud agents, fleet telemetry.",
          "rpi-industrial — Modbus, OPC UA, RS-485 stacks.",
          "rpi-robotics — ROS 2 builds tuned for Pi 5.",
          "rpi-kiosk / hmi — Wayland kiosk images, Qt / LVGL / Chromium kiosk modes.",
          "Hardened system services, read-only rootfs with overlayfs, watchdog."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & FLEET UPDATES",
        heading: "A/B updates, signed boot",
        subtitle: "Safe field updates chained to a signed boot.",
        bullets: [
          "A/B updates using the native tryboot mechanism or RAUC / Mender.",
          "Golden recovery image, automatic rollback on failed boot.",
          "Cloud connectivity, staged rollouts, delta updates, dashboard UI for fleet OTA management.",
          "Signed updates; signed boot chain on CM4 / CM5."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / DEVKIT, SDK, DEBUG",
        heading: "Build, debug, ship",
        subtitle: "Eval images, SDKs, and CI/CD for your own team.",
        bullets: [
          "Evaluation images for Pi 4 / 5 and CM4 / CM5 IO boards.",
          "Application SDK and Yocto eSDK for your application teams.",
          "Debugging and profiling: perf, ftrace, remote gdb, boot analysis.",
          "CI/CD integration and hardware-in-the-loop smoke tests."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / RTOS & MICROCONTROLLER COMPANIONS",
        heading: "Pico companions",
        subtitle:
          "Hard real-time on the Pico, paired with Linux for everything else.",
        bullets: [
          "FreeRTOS and Zephyr firmware on RP2040 / RP2350 (Pico / Pico W).",
          "Linux for connectivity and UI, Pico for hard real-time I/O — clean separation of concerns.",
          "PIO (Programmable I/O) development for custom protocols and precise timing.",
          "UART / SPI / USB communication links with structured protocols."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Prototype to production",
        subtitle:
          "From first power-on to a manufacturable product, with no rewrite.",
        bullets: [
          "Factory provisioning and per-device identity workflows.",
          "Manufacturing test suites for the production line.",
          "Cloud enrollment at first boot, automatically.",
          "Prototype to production — no replatforming, no rewrite."
        ]
      }
    ]
  },
  {
    id: "zion",
    name: "Zion",
    chipFamily: "AMD Xilinx Zynq",
    accent: "#6b4fd3",
    counterBase: 30,
    edgeOneLiner:
      "A custom Yocto / PetaLinux-based platform for Zynq-7000, Zynq UltraScale+ MPSoC, Versal, and Kria SOMs — processing system and programmable logic, engineered as one platform.",
    industries: {
      primary: ["Defense", "Aerospace", "Automotive / ADAS"],
      secondary: ["Industrial vision", "5G / wireless"]
    },
    bootChain: ["BootROM", "FSBL", "bitstream", "U-Boot", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "STAGE 01 / OVERVIEW",
        heading: "Zion",
        subtitle:
          "A custom Yocto / PetaLinux-based platform for Zynq-7000, Zynq UltraScale+ MPSoC, Versal, and Kria SOMs — processing system and programmable logic, engineered as one platform.",
        bullets: [
          "Reproducible, Yocto-built Linux for the AMD adaptive SoC portfolio.",
          "Validated on Zynq-7000, Zynq UltraScale+ MPSoC, Versal AI Edge, Kria KV260 / KR260.",
          "Unifies the full boot chain: FSBL / PMU firmware, ATF, U-Boot, kernel, rootfs, bitstream.",
          "Real-time RPU domain folded into one versioned build."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP & BOARD BRING-UP",
        heading: "PS + PL, one system",
        subtitle:
          "Bring-up that configures and verifies the programmable logic alongside the processing system.",
        bullets: [
          "Schematic / pin review: MIO / EMIO planning, DDR configuration, power sequencing.",
          "Custom FSBL and PMU firmware configuration.",
          "Device tree authoring for PS peripherals and PL IP (overlays per bitstream).",
          "Board bring-up and smoke test: memory calibration, peripheral checkout, PL configuration check."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER & GOLDEN BOOT",
        heading: "Hardware boot, owned",
        subtitle: "A fully customized multi-stage boot with golden recovery.",
        bullets: [
          "Multi-stage boot: BootROM → FSBL → ATF → U-Boot → Linux, fully customized.",
          "Custom bootloader: U-Boot board port, boot.scr logic, QSPI / eMMC / SD boot media strategy.",
          "Golden boot: fallback boot image in QSPI with multiboot register support.",
          "Failsafe and rollback: Zynq multiboot + watchdog-driven recovery."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "PL-aware kernel",
        subtitle: "A hardened kernel with drivers for the programmable-logic IP.",
        bullets: [
          "Kernel customization on xlnx kernel trees, config hardening, mainline alignment.",
          "PREEMPT_RT porting and latency validation.",
          "Drivers for PL-attached IP: AXI DMA, AXI GPIO, custom AXI peripherals via UIO or custom kernel modules.",
          "V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE & INDUSTRY IMAGES",
        heading: "Industry-specific images",
        subtitle: "Pre-integrated variants with PL acceleration where it counts.",
        bullets: [
          "zion-robotics — ROS 2 on KR260, PL-accelerated perception, time-synchronized I/O.",
          "zion-industrial — Modbus, OPC UA, EtherCAT (PL-assisted), TSN networking.",
          "zion-automotive — SocketCAN, RT patch, gateway architectures.",
          "zion-medical — traceable builds, SBOM, IEC 62304-aligned workflow.",
          "Vision / DSP middleware: GStreamer with PL acceleration, Vitis AI runtime integration."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & FLEET UPDATES",
        heading: "Bitstream-aware OTA",
        subtitle:
          "Atomic updates that version Linux and the bitstream together.",
        bullets: [
          "A/B update system aware of both Linux images and FPGA bitstreams — atomic update.",
          "Golden image + golden bitstream recovery path.",
          "Cloud or on-prem update server, staged rollouts, delta updates.",
          "Signed, encrypted updates chained to a hardware root of trust."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / DEVKIT, SDK, DEBUG",
        heading: "PS/PL tooling",
        subtitle:
          "Eval images, SDKs, and cross-debug across software and logic.",
        bullets: [
          "Evaluation images for Kria KV260 / KR260 and ZCU boards.",
          "Application SDK and Yocto eSDK for your teams.",
          "Cross-debug: JTAG via Vivado HW manager, kgdb, gdbserver.",
          "Profiling: perf, LTTng, PL / PS interface utilization analysis."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / RTOS & FPGA MANAGEMENT",
        heading: "RPU + bitstream",
        subtitle:
          "Hard real-time on the RPU and a first-class bitstream lifecycle.",
        bullets: [
          "FreeRTOS and Zephyr on the RPU (lockstep or split mode).",
          "OpenAMP / RPMsg communication between Linux (APU) and RTOS (RPU).",
          "Bitstream lifecycle: versioning, signing, packaging into the platform build.",
          "Runtime bitstream loading via FPGA Manager; partial reconfiguration for live PL updates."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Fuses, keys, goldens",
        subtitle:
          "PL co-validation and factory programming across software and fabric.",
        bullets: [
          "PL driver development (UIO / custom kernel modules) and userspace APIs.",
          "Co-validation: PS / PL interface stress testing and timing verification.",
          "Factory programming of fuses, keys, and golden images.",
          "Production test covering processors and fabric together."
        ]
      }
    ]
  },
  {
    id: "pinnacle",
    name: "Pinnacle",
    chipFamily: "NXP i.MX",
    accent: "#1f6fd6",
    counterBase: 40,
    edgeOneLiner:
      "A custom Yocto-based platform for NXP i.MX 8M (Mini / Nano / Plus), i.MX 93, and i.MX 95 — secure, power-efficient, industrial-grade.",
    industries: {
      primary: ["Medical", "Industrial automation"],
      secondary: ["Aerospace", "Automotive gateways"]
    },
    bootChain: ["BootROM", "SPL", "U-Boot", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "STAGE 01 / OVERVIEW",
        heading: "Pinnacle",
        subtitle:
          "A custom Yocto-based platform for NXP i.MX 8M (Mini / Nano / Plus), i.MX 93, and i.MX 95 — secure, power-efficient, industrial-grade.",
        bullets: [
          "Validated on i.MX 8M family, i.MX 93 (FRDM), scalable to i.MX 95.",
          "Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux.",
          "Secure boot (HAB / AHAB), EdgeLock security integration.",
          "RTOS on Cortex-M core (FreeRTOS / Zephyr) with RPMsg."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP & BOARD BRING-UP",
        heading: "DDR, power, straps",
        subtitle: "Bring-up that gets i.MX DDR calibration and the boot chain right.",
        bullets: [
          "Schematic review: DDR configuration and calibration (critical on i.MX), power tree, boot-mode straps.",
          "Custom BSP: device tree for your board, pinmux via config tools, peripheral integration.",
          "Board bring-up and smoke test with a structured checklist.",
          "Custom bootloader: U-Boot SPL port, DDR init, boot-media strategy (eMMC / SD / QSPI)."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER & GOLDEN BOOT",
        heading: "HAB / AHAB secure boot",
        subtitle: "A signed, recoverable boot built for regulated manufacturing.",
        bullets: [
          "Golden boot development and redundant boot via bootloader fallback logic.",
          "Memory partitioning, failsafe and rollback boot.",
          "HAB / AHAB secure boot provisioning and key-management support.",
          "Factory provisioning designed for regulated manufacturing."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Industrial kernel",
        subtitle:
          "A tuned kernel with fast HMI boot, the NPU, and your bus drivers in place.",
        bullets: [
          "Kernel customization on NXP downstream trees, mainline migration paths.",
          "PREEMPT_RT porting and validation.",
          "Boot streamlining: SPL-to-app optimization, sub-2-second HMI boot targets.",
          "Driver work: V4L2 (MIPI CSI, ISP on 8M Plus), audio (SAI / codecs), display, CAN-FD, TSN."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE & INDUSTRY IMAGES",
        heading: "Industry-specific images",
        subtitle: "Pre-integrated, hardened image variants tuned per vertical.",
        bullets: [
          "pinnacle-iot — MQTT, cloud agents, EdgeLock-backed device identity.",
          "pinnacle-industrial — Modbus, OPC UA, TSN networking, real-time I/O.",
          "pinnacle-automotive — CAN-FD stacks, RT patch, instrument-cluster fast-boot profile.",
          "pinnacle-medical — IEC 62304-aligned traceable builds, SBOM.",
          "HMI stack options: Qt, LVGL, Flutter embedded, Wayland / Weston tuning."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & FLEET UPDATES",
        heading: "A/B, signed, audited",
        subtitle:
          "Safe field updates chained to the HAB / AHAB root of trust.",
        bullets: [
          "A/B OTA (Mender / RAUC / SWUpdate) with golden recovery image.",
          "Automatic rollback on failed boot or health check.",
          "Cloud connectivity, staged fleet rollouts, delta updates.",
          "Updates signed and chained to HAB / AHAB root of trust."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / DEVKIT, SDK, DEBUG",
        heading: "Traceable tooling",
        subtitle: "Eval images, SDKs, and debug built for audit-ready work.",
        bullets: [
          "Evaluation images for NXP EVKs (including FRDM i.MX 93) and your custom hardware.",
          "Application SDK and Yocto eSDK for your application teams.",
          "Debugging: JTAG (Lauterbach / Segger), kgdb, gdbserver, core-dump pipelines.",
          "Profiling: perf, LTTng, boot profiling, power profiling."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / RTOS (CORTEX-M DOMAIN)",
        heading: "M7 / M33 cores",
        subtitle:
          "Deterministic control and low-power supervision on the Cortex-M domain.",
        bullets: [
          "FreeRTOS / Zephyr on the Cortex-M core (M7 on 8M Plus, M33 on i.MX 93).",
          "RPMsg / Messaging Unit communication with Linux.",
          "Real-time control, sensor acquisition, low-power supervision on the M-core.",
          "Heterogeneous architecture design: which workload runs where, and why."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Audit-ready builds",
        subtitle:
          "NPU, power management, and provisioning for a decade-long product.",
        bullets: [
          "NPU integration: eIQ runtime on 8M Plus / i.MX 93 Ethos-U65.",
          "Power management: low-power modes, suspend / resume tuning for battery devices.",
          "Factory provisioning with per-device keys and identity.",
          "A platform your product can stand on for a decade."
        ]
      }
    ]
  },
  {
    id: "joshua",
    name: "Joshua",
    chipFamily: "TI Sitara",
    accent: "#d4622a",
    counterBase: 50,
    edgeOneLiner:
      "A custom Yocto-based platform for AM335x, AM62x, and AM64x — the industrial workhorse line. Deterministic I/O with PRU-ICSS, industrial networking, long-lifecycle support.",
    industries: {
      primary: ["Industrial automation", "Energy"],
      secondary: ["Robotics", "Motor drives"]
    },
    bootChain: ["BootROM", "SPL/MLO", "U-Boot", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "STAGE 01 / OVERVIEW",
        heading: "Joshua",
        subtitle:
          "A custom Yocto-based platform for AM335x, AM62x, and AM64x — the industrial workhorse line. Deterministic I/O with PRU-ICSS, industrial networking, long-lifecycle support.",
        bullets: [
          "Validated on AM335x, AM62x, AM64x (BeagleBone and TI EVK ecosystems).",
          "Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux (incl. SYSFW / TIFS on AM6x).",
          "PRU-ICSS firmware and RTOS on Cortex-M4F / R5F cores.",
          "Industrial workhorse with long-lifecycle support."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP & BOARD BRING-UP",
        heading: "Industrial bring-up",
        subtitle:
          "Bring-up through the AM6x SYSFW/SPL chain, with every industrial peripheral verified.",
        bullets: [
          "Schematic review: DDR routing / config, power sequencing (PMIC integration), boot-strap pins.",
          "Custom BSP and device tree development.",
          "Board bring-up and smoke test.",
          "Custom bootloader: SPL / U-Boot port, boot-media strategy, SYSFW integration on AM6x."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER & GOLDEN BOOT",
        heading: "Unattended boot",
        subtitle: "A failsafe boot built for unattended industrial sites.",
        bullets: [
          "Golden boot development, memory partitioning.",
          "Failsafe and rollback boot with watchdog supervision — built for unattended industrial sites.",
          "Secure boot and signed images where the deployment demands it.",
          "Provisioning designed for the production line, not the lab."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "PRU + ARM",
        subtitle:
          "A first-class real-time kernel with PRU-ICSS drivers and remoteproc.",
        bullets: [
          "Kernel customization on TI trees with strong mainline support on Sitara.",
          "PREEMPT_RT porting — Sitara is a first-class RT target.",
          "Boot streamlining for industrial fast-start requirements.",
          "PRU-ICSS interface drivers and remoteproc integration."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE & INDUSTRY IMAGES",
        heading: "Industry-specific images",
        subtitle: "Pre-integrated industrial image variants, hardened and ready.",
        bullets: [
          "joshua-industrial — EtherCAT (via PRU-ICSS), PROFINET, EtherNet/IP, Modbus, OPC UA, TSN on AM64x.",
          "joshua-iot — MQTT, edge gateways, protocol translation.",
          "joshua-automation — real-time control stacks, motor control integration.",
          "joshua-medical — traceable builds, SBOM, audit-ready workflow.",
          "System services hardening, read-only rootfs, watchdog supervision."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & FLEET UPDATES",
        heading: "Failsafe OTA",
        subtitle: "Safe updates that cover the PRU firmware alongside Linux.",
        bullets: [
          "A/B updates covering kernel, rootfs, and PRU firmware together.",
          "Automatic rollback — a failed update never stops a line.",
          "Cloud or on-prem server, staged rollouts, delta updates.",
          "Dashboard UI for fleet / release management with signed update chain."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / DEVKIT, SDK, DEBUG",
        heading: "Timing tooling",
        subtitle: "Eval images, SDKs, and latency-focused profiling.",
        bullets: [
          "Evaluation images for TI EVKs / BeagleBone and custom boards.",
          "Application SDK and Yocto eSDK.",
          "Debugging: JTAG (CCS / XDS), kgdb, gdbserver.",
          "Profiling: perf, LTTng, boot and latency profiling."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / RTOS & PRU-ICSS",
        heading: "Sub-microsecond I/O",
        subtitle:
          "PRU-ICSS determinism and RTOS control across the real-time domains.",
        bullets: [
          "FreeRTOS / Zephyr on Cortex-M4F (AM62x) and R5F (AM64x) cores.",
          "PRU-ICSS firmware: deterministic sub-microsecond I/O, custom industrial protocols.",
          "RPMsg / remoteproc communication between Linux and real-time domains.",
          "Encoder / PWM interfaces and mixed-criticality industrial architectures."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Deterministic factory",
        subtitle: "Industrial I/O, custom drivers, and per-device provisioning.",
        bullets: [
          "Industrial Ethernet (CPSW / ICSSG), CAN, ADC / touch, display (LCDC / DSS) support.",
          "Custom SPI / I²C device drivers.",
          "Factory provisioning and per-device identity workflows.",
          "Deterministic real-time — at a cost FPGA can't match."
        ]
      }
    ]
  },
  {
    id: "sequoia",
    name: "Sequoia",
    chipFamily: "Intel / AMD x86",
    accent: "#4a6478",
    counterBase: 60,
    edgeOneLiner:
      "A custom Yocto-based platform for industrial SBCs, COM Express / SMARC modules, and edge servers — Intel Atom / Core and AMD Ryzen Embedded. The same rigor as our ARM platforms, on x86.",
    industries: {
      primary: ["Networking / Edge compute", "Defense"],
      secondary: ["Medical", "Industrial vision"]
    },
    bootChain: ["UEFI/coreboot", "bootloader", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "STAGE 01 / OVERVIEW",
        heading: "Sequoia",
        subtitle:
          "A custom Yocto-based platform for industrial SBCs, COM Express / SMARC modules, and edge servers — Intel Atom / Core and AMD Ryzen Embedded. The same rigor as our ARM platforms, on x86.",
        bullets: [
          "Validated on industrial SBCs and embedded modules (Atom x6000E, Core, Ryzen Embedded).",
          "Boot chain: UEFI / coreboot → systemd-boot / GRUB → Linux, secure boot with custom keys.",
          "Virtualization and workload consolidation (KVM, ACRN).",
          "The same rigor as our ARM platforms, on x86."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP & BOARD BRING-UP",
        heading: "High-speed BSP",
        subtitle:
          "x86 bring-up: BIOS / UEFI, ACPI review, and the drivers for your peripheral set.",
        bullets: [
          "Yocto-based embedded Linux for x86_64 (meta-intel, AMD embedded targets).",
          "Custom BSP: kernel config for your exact peripheral set, out-of-tree driver integration.",
          "Carrier board bring-up: BIOS / UEFI configuration, ACPI table review.",
          "Smoke test: PCIe enumeration, storage, network, display, I/O checkout."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER & GOLDEN BOOT",
        heading: "TPM / secure boot",
        subtitle: "A locked, measured boot with TPM 2.0 and golden recovery.",
        bullets: [
          "UEFI / coreboot — customized, hardened, locked for production.",
          "UEFI Secure Boot with your keys, measured boot with TPM 2.0.",
          "Golden boot and redundant boot partitions (UEFI boot entries + health-checked fallback).",
          "Memory / storage partitioning, failsafe and rollback boot."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Determinism without an MCU",
        subtitle: "Real-time and security on x86 — no microcontroller required.",
        bullets: [
          "Kernel customization and hardening (LTS kernels), config minimization.",
          "PREEMPT_RT for industrial determinism; Xenomai where hard real-time is required.",
          "Driver work: custom PCIe cards, industrial I/O, CAN adapters, GPU / iGPU enablement.",
          "TPM 2.0 integration, measured boot, disk encryption (LUKS + TPM sealing)."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE & INDUSTRY IMAGES",
        heading: "Industry-specific images",
        subtitle: "Pre-integrated, consolidation-ready image variants per vertical.",
        bullets: [
          "sequoia-industrial — Modbus, OPC UA, TSN, soft-PLC integration.",
          "sequoia-iot / edge — MQTT, container runtime (Docker / Podman), edge orchestration.",
          "sequoia-vision — OpenVINO / ROCm pipelines, GStreamer, multi-camera ingest.",
          "sequoia-medical / defense — hardened, audit-ready, SBOM-complete builds.",
          "Virtualization images: KVM / ACRN for consolidating RT + GUI + connectivity workloads."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & FLEET UPDATES",
        heading: "Rackscale OTA",
        subtitle: "Image-based or A/B updates chained to secure boot.",
        bullets: [
          "A/B image updates with golden recovery (RAUC / Mender on x86, or image-based ostree).",
          "Automatic rollback via boot counting and health checks.",
          "Cloud / on-prem update server, staged rollouts, delta updates.",
          "Secure-boot-chained signed updates."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / DEVKIT, SDK, DEBUG",
        heading: "Remote diagnostics",
        subtitle: "Eval images, SDKs, and modern x86 tracing tools.",
        bullets: [
          "Evaluation images for common industrial SBCs and your hardware.",
          "Application SDK and Yocto eSDK.",
          "Debugging: kgdb, kexec / kdump crash analysis, remote gdb.",
          "Profiling: perf, eBPF-based tracing, boot analysis."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / REAL-TIME & WORKLOAD CONSOLIDATION",
        heading: "Isolated cores, hypervisor",
        subtitle: "Deterministic cores and hypervisor consolidation on one box.",
        bullets: [
          "Boot streamlining: UEFI-to-app optimization, kiosk / HMI fast boot.",
          "CPU isolation, IRQ affinity, cache partitioning for deterministic cores.",
          "Hypervisor-based consolidation: RTOS or RT-Linux guest alongside HMI guest (ACRN / KVM).",
          "Jailhouse partitioning for safety-adjacent designs."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Burn-in, identity, fleet",
        subtitle: "Load-validated virtualization, CI/CD, and production test.",
        bullets: [
          "SR-IOV and virtualization paths validated under load.",
          "CI/CD with automated image builds and HIL validation.",
          "Factory imaging, provisioning, and per-device identity.",
          "Burn-in and production test for compute-dense systems."
        ]
      }
    ]
  }
];

export function getPlatformById(id: string): PlatformData | undefined {
  return platforms.find((p) => p.id === id);
}
