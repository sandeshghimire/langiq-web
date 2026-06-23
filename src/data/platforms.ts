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
        heading: "NVIDIA Jetson",
        subtitle:
          "You need a production image on Jetson TX2, Xavier NX, Orin, or Thor. JetPack is not a production OS. We replace ad-hoc JetPack / L4T images with a reproducible Yocto build — CUDA, TensorRT, and DeepStream intact, fully owned by you.",
        bullets: [
          "Yocto BSP on meta-tegra for TX2, Xavier NX, Orin Nano / NX / AGX, Thor.",
          "Replaces JetPack / L4T with a reproducible, auditable, customer-owned build.",
          "CUDA, TensorRT, DeepStream, cuDNN preserved in the Yocto image.",
          "Signed boot, A/B OTA, RTOS on the Cortex-R SPE.",
          "You own the full source, build system, and documentation. No lock-in."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BOARD BRING-UP & BSP",
        heading: "Board Bring-Up and BSP",
        subtitle:
          "We work directly with your hardware engineering team. Schematic and PCB review before fab, custom BSP for your Jetson carrier, then methodical board bring-up covering boot, memory, cameras, and every peripheral on your board.",
        bullets: [
          "Schematic and PCB review — power sequencing, DDR layout, boot straps, CSI lane routing.",
          "Custom BSP and device tree for your carrier — CSI cameras, PCIe, USB, GPIO, I2C, SPI.",
          "Boot verification — UEFI / CBoot config, fuse provisioning, massflash tooling.",
          "Memory validation — eMMC / NVMe layout, redundant partitions, persistent data separation.",
          "Peripheral bring-up — camera, PCIe, USB, CAN-FD, display, industrial I/O enumeration."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / YOCTO & EMBEDDED LINUX",
        heading: "Yocto and Embedded Linux",
        subtitle:
          "JetPack gets you a demo. Shipping a product means a reproducible, auditable build you can maintain, patch, and hand off. We build on meta-tegra — the full accelerated compute stack, owned by you, not locked to JetPack.",
        bullets: [
          "Reproducible Yocto build on meta-tegra — same inputs, same image, every time.",
          "CUDA, TensorRT, DeepStream, cuDNN built into the image — not bolt-ons.",
          "Read-only rootfs, hardened system services, no stray packages.",
          "Full source, recipes, and build system handed over — you own it, no lock-in.",
          "SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 / DO-178C ready."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / BOOTLOADER & BOOT OPTIMIZATION",
        heading: "Bootloader and Boot Optimization",
        subtitle:
          "A failed update never bricks a Jetson device. We configure the full multi-stage boot chain, implement a golden recovery image in a protected partition, and tune boot time for your application requirements.",
        bullets: [
          "Multi-stage boot: BootROM → BCT/MB1 → MB2 → UEFI → kernel, fully customized.",
          "Golden boot image in a protected partition — always recovers to a known-good state.",
          "Automatic rollback — watchdog-supervised, reverts on failed boot or health check.",
          "eMMC / NVMe layout: redundant OS partitions, persistent data separation.",
          "Massflash tooling, fuse provisioning, and production-line flashing scripts."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / KERNEL & DEVICE DRIVERS",
        heading: "Linux Kernel & Device Drivers",
        subtitle:
          "We customize the NVIDIA downstream kernel for your specific carrier board. PREEMPT_RT for deterministic latency, camera and sensor driver development, and boot streamlining for your startup time requirements.",
        bullets: [
          "Kernel customization on NVIDIA downstream kernel — 5.10 / 5.15 / 6.x per JetPack release.",
          "PREEMPT_RT porting and validation for deterministic latency on Orin / Thor.",
          "V4L2 camera drivers — CSI, GMSL, FPD-Link for your specific sensors.",
          "Custom PCIe, USB, SPI, I2C, IIO sensor drivers for your carrier peripherals.",
          "Boot streamlining — initramfs minimization, deferred module loading, parallelized init."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / RTOS & MICROCONTROLLER",
        heading: "RTOS and Microcontroller",
        subtitle:
          "Linux handles perception and connectivity. The Cortex-R Sensor Processing Engine (SPE) handles hard real-time — sensor fusion, safety supervision, and deterministic I/O where a missed deadline is a real failure.",
        bullets: [
          "FreeRTOS on the SPE — Cortex-R52 on Orin / Thor, R5 on TX2 / Xavier.",
          "Linux ↔ RTOS communication via shared-memory mailboxes and IVC channels.",
          "Real-time sensor fusion, IMU sampling, and safety supervision on the R-core.",
          "GPU handles perception; R-core handles control — deterministic offload architecture.",
          "Watchdog and health supervision from the real-time domain."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / MIDDLEWARE",
        heading: "Middleware",
        subtitle:
          "We integrate the middleware stack your application needs — ROS 2, vision pipelines, cloud connectivity, or automotive protocols — built into the Yocto image and validated on your Jetson hardware.",
        bullets: [
          "arches-robotics — ROS 2 (Humble / Jazzy), DDS tuning, Isaac ROS GEMs, real-time executor.",
          "arches-vision — DeepStream, GStreamer, TensorRT pipelines, multi-camera synchronization.",
          "arches-iot — MQTT, AWS IoT Greengrass, Azure IoT, edge telemetry agents.",
          "arches-automotive — SocketCAN, PREEMPT_RT, ISO 26262-aware gateway patterns.",
          "arches-medical — IEC 62304-aligned build traceability, SBOM, audit-ready change logs."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / OTA & FLEET MANAGEMENT",
        heading: "OTA and Fleet Management",
        subtitle:
          "You need to update Jetson devices in the field without bricking them. We implement A/B OTA with a golden recovery image, automatic rollback, and signed updates chained to secure boot — a bad update never stops a device permanently.",
        bullets: [
          "A/B redundant partitions via Mender, RAUC, or SWUpdate — selected per project.",
          "Golden boot image — factory-recovery partition that cannot be overwritten by an update.",
          "Automatic rollback on failed update, failed boot, or failed health check.",
          "Signed updates cryptographically chained to the Jetson secure boot chain.",
          "Staged rollouts — fleet grouping, 1% → 10% → all, delta updates for slow links."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / SDK, DEBUG & PROFILING",
        heading: "SDK, Debugging and Profiling",
        subtitle:
          "Your application team needs to build, debug, and profile on Jetson without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, and CI/CD pipeline with hardware-in-the-loop validation on real Jetson hardware.",
        bullets: [
          "Evaluation image for Jetson devkits and your custom carrier — running before your hardware exists.",
          "Application SDK — cross-toolchain and sysroot for your app team's x86 machines.",
          "Yocto eSDK — full build system handed to your platform team to modify and rebuild.",
          "Profiling — Nsight Systems, systemd-analyze, bootchart, perf, ftrace.",
          "CI/CD with hardware-in-the-loop smoke tests on real Jetson hardware."
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
        heading: "Raspberry Pi",
        subtitle:
          "You need a production image for CM4, CM5, Pi 4, or Pi 5. Stock Raspberry Pi OS is not it. We build and own the full software stack — BSP, Yocto, kernel, bootloader, RTOS, OTA — on your carrier board, handed off to you.",
        bullets: [
          "Yocto BSP for CM4, CM5, Pi 4, Pi 5. Pico companion firmware on RP2040 / RP2350.",
          "Replaces stock Raspberry Pi OS with a minimal, reproducible Yocto build.",
          "Custom BSP and device tree for your carrier board — not the IO board.",
          "Signed boot chain on CM4 / CM5. A/B OTA via tryboot or RAUC.",
          "You own the full source, build system, and documentation. No lock-in."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BOARD BRING-UP & BSP",
        heading: "Board Bring-Up and BSP",
        subtitle:
          "We work directly with your hardware engineering team. Schematic and PCB review before fab, custom BSP development, then methodical board bring-up covering boot, memory, and every peripheral on your board.",
        bullets: [
          "Schematic and PCB review — power sequencing, DDR layout, boot straps, high-speed lanes.",
          "Custom BSP and device tree for your carrier — every interface mapped to your hardware.",
          "Boot verification — EEPROM config, boot-order policy, signed boot on CM4 / CM5.",
          "Memory validation — eMMC, NVMe, SD bring-up and stress test.",
          "Peripheral bring-up — CSI/DSI cameras, CAN, RS-485, USB, I2C, SPI, industrial I/O."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / YOCTO & EMBEDDED LINUX",
        heading: "Yocto and Embedded Linux",
        subtitle:
          "Stock Raspberry Pi OS is built for general use. Your product needs a minimal, reproducible, locked-down image you can rebuild, audit, and maintain for the life of the product. That is what Yocto gives you — and what we deliver.",
        bullets: [
          "Reproducible Yocto build on meta-raspberrypi — same inputs, same image, every time.",
          "Replaces stock Raspberry Pi OS — no unneeded packages, no default credentials, no stray services.",
          "Read-only rootfs, hardened system services, minimal attack surface.",
          "Full source, recipes, and build system handed over — you own it, no lock-in.",
          "SBOM generation — know exactly what is in your image and where it came from."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / BOOTLOADER & BOOT OPTIMIZATION",
        heading: "Bootloader and Boot Optimization",
        subtitle:
          "A failed update or corrupted image never bricks the device. We configure the full boot chain for your storage and boot policy, implement a golden recovery image, and tune boot time for your application requirements.",
        bullets: [
          "EEPROM bootloader config, tryboot A/B mechanism, U-Boot option per project.",
          "Golden boot image in a protected partition — survives a bad update or corrupted storage.",
          "Automatic rollback on failed boot or failed health check.",
          "Storage partitioning: eMMC on CM4, NVMe on CM5 / Pi 5, redundant OS slots.",
          "Boot time optimization — trimmed init, deferred services, fast-boot for kiosk and HMI targets."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / KERNEL & DEVICE DRIVERS",
        heading: "Linux Kernel & Device Drivers",
        subtitle:
          "We customize the kernel for your hardware — not the generic Raspberry Pi config. Driver development for your specific peripherals, config minimization for faster boot and smaller attack surface, and PREEMPT_RT for control applications.",
        bullets: [
          "Kernel config minimization — remove what your product does not use.",
          "PREEMPT_RT builds for bounded, deterministic latency on control applications.",
          "Camera drivers — libcamera, Unicam, CSI pipelines for your specific sensors.",
          "Display drivers — DSI and DPI panels.",
          "CAN, I2C, SPI, GPIO, PWM, RS-485 — drivers for your exact peripheral set."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / RTOS & MICROCONTROLLER",
        heading: "RTOS and Microcontroller",
        subtitle:
          "The Raspberry Pi cannot do hard real-time. The Pico can. We split the system by criticality — Linux on the Pi for networking, UI, and compute; FreeRTOS or Zephyr on the Pico for deterministic I/O and control loops.",
        bullets: [
          "FreeRTOS and Zephyr firmware on RP2040 / RP2350 (Pico / Pico W).",
          "PIO (Programmable I/O) for custom protocols and precise timing without CPU involvement.",
          "UART, SPI, and USB communication links between Pi and Pico with structured protocols.",
          "RTOS drivers for sensors, encoders, PWM, and safety-critical I/O on the Pico.",
          "Watchdog and health supervision from the real-time domain."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / MIDDLEWARE",
        heading: "Middleware",
        subtitle:
          "We integrate the middleware stack your application needs — communication protocols, cloud connectivity, and industry-specific stacks — built into the Yocto image and validated on your hardware.",
        bullets: [
          "MQTT and cloud agents — AWS IoT, Azure IoT, fleet telemetry.",
          "Modbus, OPC UA, RS-485 for industrial gateway and machine integration.",
          "ROS 2 builds tuned for Pi 5 for robotics applications.",
          "Wayland kiosk, Qt, LVGL, Chromium for HMI and display applications.",
          "Read-only rootfs, watchdog, hardened system services across all variants."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / OTA & FLEET MANAGEMENT",
        heading: "OTA and Fleet Management",
        subtitle:
          "You need to update devices in the field without bricking them or sending a truck. We implement A/B OTA with a golden recovery image, automatic rollback, and staged rollouts — so a bad update never stops a device permanently.",
        bullets: [
          "A/B updates via tryboot or RAUC — two OS slots, automatic switchback on failure.",
          "Golden recovery image in a protected partition — survives a bad A and a bad B.",
          "Signed updates chained to the CM4 / CM5 secure boot chain.",
          "Staged rollouts — push to 1% of the fleet, validate, then the rest.",
          "Delta updates — ship only changed bytes, critical for metered or slow connections."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / SDK, DEBUG & PROFILING",
        heading: "SDK, Debugging and Profiling",
        subtitle:
          "Your application team needs to build, debug, and profile on the target without touching Yocto. We deliver a cross-toolchain, sysroot, and full eSDK — everything needed to develop on the platform from day one.",
        bullets: [
          "Evaluation image for Pi 4 / 5 and CM4 / CM5 IO boards — running before your carrier exists.",
          "Application SDK — cross-toolchain and sysroot for your app team's x86 machines.",
          "Yocto eSDK — full build system handed to your platform team to modify and rebuild.",
          "Remote debugging — gdbserver, perf, ftrace, boot analysis.",
          "CI/CD integration with hardware-in-the-loop smoke tests on real hardware."
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
        heading: "AMD Xilinx Zynq",
        subtitle:
          "You need Linux on the processing system and your FPGA design on the programmable logic — versioned, built, and updated together. We deliver the full stack: FSBL, ATF, U-Boot, kernel, rootfs, and bitstream as one owned platform.",
        bullets: [
          "Yocto / PetaLinux BSP for Zynq-7000, UltraScale+ MPSoC, Versal, Kria KV260 / KR260.",
          "PS + PL + RPU firmware versioned and built as one platform — not patched together.",
          "Custom FSBL, PMU firmware, ATF, U-Boot, kernel, and bitstream management.",
          "Bitstream-aware A/B OTA — Linux image and FPGA bitstream updated atomically.",
          "You own the full source, build system, bitstream pipeline, and documentation. No lock-in."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BOARD BRING-UP & BSP",
        heading: "Board Bring-Up and BSP",
        subtitle:
          "We work directly with your hardware engineering team. Schematic and PCB review before fab, MIO/EMIO planning, custom FSBL and BSP for your board, then bring-up covering PS boot, DDR calibration, PL configuration, and every peripheral.",
        bullets: [
          "Schematic and PCB review — MIO/EMIO planning, DDR config, power sequencing.",
          "Custom FSBL and PMU firmware configuration for your board.",
          "Device tree for PS peripherals and PL IP — overlays per bitstream.",
          "Memory calibration — DDR bring-up and stress test.",
          "Peripheral bring-up — GEM Ethernet, USB, CAN, SPI, I2C, PL configuration check."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / YOCTO & EMBEDDED LINUX",
        heading: "Yocto and Embedded Linux",
        subtitle:
          "PetaLinux gets you running. A product means reproducible builds where the processing system, programmable logic, and RPU firmware are versioned together. We build on meta-xilinx — the whole stack owned by you.",
        bullets: [
          "Reproducible Yocto build on meta-xilinx (PetaLinux-compatible, rel-v2025.x).",
          "PS + PL + RPU firmware in one versioned build — the Zynq-specific promise.",
          "Read-only rootfs, hardened system services, no stray packages.",
          "Full source, recipes, and build system handed over — you own it, no lock-in.",
          "SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 / DO-178C ready."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / BOOTLOADER & BOOT OPTIMIZATION",
        heading: "Bootloader and Boot Optimization",
        subtitle:
          "A corrupted image or failed update never bricks a Zynq device. We configure the full multi-stage boot chain from BootROM to Linux, implement QSPI golden recovery with multiboot support, and tune boot time for your requirements.",
        bullets: [
          "Multi-stage boot: BootROM → FSBL → bitstream → ATF → U-Boot → kernel, fully customized.",
          "Golden boot in QSPI — multiboot register fallback to a known-good state.",
          "Automatic rollback — watchdog-supervised, reverts on failed boot or health check.",
          "Boot media strategy: QSPI, eMMC, SD per project.",
          "U-Boot board port, boot.scr logic, memory partitioning and redundant slot layout."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / KERNEL & DEVICE DRIVERS",
        heading: "Linux Kernel & Device Drivers",
        subtitle:
          "We customize the xlnx kernel for your Zynq design — including drivers for your PL-attached IP. AXI DMA, AXI GPIO, custom AXI peripherals, and V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks.",
        bullets: [
          "Kernel customization on xlnx trees — config hardening, mainline alignment.",
          "PREEMPT_RT porting and latency validation.",
          "PL IP drivers — AXI DMA, AXI GPIO, custom AXI peripherals via UIO or kernel modules.",
          "V4L2 capture pipelines for MIPI CSI and PL-based ISP blocks.",
          "GEM Ethernet, CAN, SPI, I2C, USB — PS peripheral drivers for your carrier."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / RTOS & MICROCONTROLLER",
        heading: "RTOS and Microcontroller",
        subtitle:
          "The UltraScale+ RPU runs hard real-time alongside Linux on the APU, coordinated over OpenAMP. We deliver FreeRTOS or Zephyr on the RPU, OpenAMP/RPMsg communication, and the full bitstream lifecycle as one integrated platform.",
        bullets: [
          "FreeRTOS and Zephyr on the RPU — lockstep or split Cortex-R5F configuration.",
          "OpenAMP / RPMsg communication between Linux (APU) and RTOS (RPU).",
          "Real-time motor control, safety supervision, and deterministic I/O on the RPU.",
          "Runtime bitstream loading via FPGA Manager; partial reconfiguration for live PL updates.",
          "Bitstream versioning, signing, and packaging integrated into the platform build."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / MIDDLEWARE",
        heading: "Middleware",
        subtitle:
          "We integrate the middleware stack your application needs — industrial networking, robotics, vision, or automotive protocols — built into the Yocto image and validated on your Zynq hardware, with PL acceleration where it applies.",
        bullets: [
          "zion-industrial — EtherCAT (PL-assisted), PROFINET, OPC UA, Modbus, TSN.",
          "zion-robotics — ROS 2 on KR260, PL-accelerated perception, time-synchronized I/O.",
          "zion-vision — GStreamer with PL acceleration, Vitis AI runtime integration.",
          "zion-automotive — SocketCAN, PREEMPT_RT, gateway architectures.",
          "zion-medical — IEC 62304-aligned traceable builds, SBOM, audit-ready workflow."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / OTA & FLEET MANAGEMENT",
        heading: "OTA and Fleet Management",
        subtitle:
          "On Zynq, an update covers both the Linux image and the FPGA bitstream — atomically. A bad update never bricks a device. We implement full-stack A/B OTA with golden recovery for both the OS and the programmable logic.",
        bullets: [
          "Full-stack A/B — Linux image and FPGA bitstream updated atomically in one transaction.",
          "Golden image + golden bitstream recovery — both fallback independently.",
          "Automatic rollback on failed boot or health check.",
          "Signed, encrypted updates chained to the hardware root of trust.",
          "Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / SDK, DEBUG & PROFILING",
        heading: "SDK, Debugging and Profiling",
        subtitle:
          "Your application and FPGA teams need to develop, debug, and profile without rebuilding from scratch. We deliver a cross-toolchain, eSDK, JTAG debug via Vivado, and CI/CD with both image and bitstream builds on real hardware.",
        bullets: [
          "Evaluation image for Kria KV260 / KR260 and ZCU boards — running before your hardware exists.",
          "Application SDK — cross-toolchain and sysroot for your app team's x86 machines.",
          "Yocto eSDK — full build system handed to your platform team to modify and rebuild.",
          "Cross-debug — JTAG via Vivado hardware manager, kgdb, gdbserver.",
          "CI/CD with hardware-in-the-loop validation of both image and bitstream builds."
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
        heading: "NXP i.MX",
        subtitle:
          "You need a secure, production image on i.MX 8M, i.MX 93, or i.MX 95. The NXP BSP is not a product. We build a reproducible Yocto platform with HAB / AHAB secure boot and EdgeLock device identity baked in — fully owned by you.",
        bullets: [
          "Yocto BSP for i.MX 8M Mini / Nano / Plus, i.MX 93, i.MX 95.",
          "Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux.",
          "HAB / AHAB secure boot and EdgeLock device identity built into the platform.",
          "RTOS on Cortex-M7 (8M Plus) or M33 (i.MX 93) with RPMsg to Linux.",
          "You own the full source, build system, and documentation. No lock-in."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BOARD BRING-UP & BSP",
        heading: "Board Bring-Up and BSP",
        subtitle:
          "We work directly with your hardware engineering team. DDR calibration is critical on i.MX — we review the schematic before fab, build the BSP for your carrier, and bring up boot, memory, and every peripheral on your board.",
        bullets: [
          "Schematic and PCB review — DDR config and calibration, power tree, boot-mode straps.",
          "Custom BSP and device tree — pinmux via NXP config tools, peripheral integration.",
          "Boot verification — U-Boot SPL port, DDR init, boot media strategy (eMMC / SD / QSPI).",
          "Memory validation — DDR calibration, eMMC bring-up and stress test.",
          "Peripheral bring-up — MIPI CSI, LVDS / DSI displays, CAN-FD, Ethernet, USB, I2C, SPI."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / YOCTO & EMBEDDED LINUX",
        heading: "Yocto and Embedded Linux",
        subtitle:
          "The NXP BSP gets you running. A product means reproducible builds with HAB / AHAB and EdgeLock baked in — not bolted on. We build on meta-imx — the full secure stack, owned by you, not tied to the NXP release cycle.",
        bullets: [
          "Reproducible Yocto build on meta-imx / meta-freescale — same inputs, same image, every time.",
          "HAB / AHAB secure boot chain and EdgeLock device identity built into the image.",
          "Read-only rootfs, hardened system services, no stray packages.",
          "Full source, recipes, and build system handed over — you own it, no lock-in.",
          "SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 ready."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / BOOTLOADER & BOOT OPTIMIZATION",
        heading: "Bootloader and Boot Optimization",
        subtitle:
          "A failed update never bricks an i.MX device. We configure the full boot chain with HAB / AHAB secure boot provisioning, implement a golden recovery image, and tune boot time — sub-2-second targets for HMI applications.",
        bullets: [
          "Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux, fully customized.",
          "HAB / AHAB secure boot provisioning and key management.",
          "Golden boot and redundant boot fallback — automatic rollback on failure.",
          "Memory partitioning: eMMC / SD / QSPI layout, redundant OS slots.",
          "Boot time optimization — SPL-to-app, sub-2-second HMI boot targets."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / KERNEL & DEVICE DRIVERS",
        heading: "Linux Kernel & Device Drivers",
        subtitle:
          "We customize the NXP downstream kernel for your specific carrier board. PREEMPT_RT for deterministic latency, display and camera driver development, TSN on i.MX 93, and sub-2-second boot for HMI applications.",
        bullets: [
          "Kernel customization on NXP downstream trees — mainline migration paths.",
          "PREEMPT_RT porting and validation for control applications.",
          "V4L2 camera drivers — MIPI CSI and ISP on i.MX 8M Plus.",
          "Display drivers — LVDS, MIPI DSI, HDMI; audio drivers — SAI / codecs.",
          "CAN-FD, TSN Ethernet (i.MX 93), USB — drivers for your exact peripheral set."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / RTOS & MICROCONTROLLER",
        heading: "RTOS and Microcontroller",
        subtitle:
          "The i.MX Cortex-M core runs deterministic control and low-power supervision alongside Linux. We deliver FreeRTOS or Zephyr on the M-core, RPMsg communication with Linux, and always-on supervision while Linux sleeps.",
        bullets: [
          "FreeRTOS / Zephyr on Cortex-M7 (i.MX 8M Plus) or M33 (i.MX 93).",
          "RPMsg / Messaging Unit communication between Linux and the M-core.",
          "Real-time control, sensor acquisition, and low-power supervision on the M-core.",
          "Always-on supervision while Linux is in suspend — differentiator for battery products.",
          "Heterogeneous architecture design — which workload runs where, and why."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / MIDDLEWARE",
        heading: "Middleware",
        subtitle:
          "We integrate the middleware stack your application needs — industrial protocols, automotive stacks, cloud connectivity, or HMI frameworks — built into the Yocto image and validated on your i.MX hardware.",
        bullets: [
          "pinnacle-industrial — Modbus, OPC UA, TSN networking, real-time I/O.",
          "pinnacle-automotive — CAN-FD stacks, PREEMPT_RT, instrument-cluster fast-boot profile.",
          "pinnacle-iot — MQTT, cloud agents, EdgeLock-backed device identity.",
          "pinnacle-hmi — Qt, LVGL, Flutter embedded, Wayland / Weston tuning.",
          "pinnacle-medical — IEC 62304-aligned traceable builds, SBOM, audit-ready workflow."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / OTA & FLEET MANAGEMENT",
        heading: "OTA and Fleet Management",
        subtitle:
          "You need to update i.MX devices in the field without bricking them. We implement A/B OTA with signed updates chained to the HAB / AHAB root of trust, golden recovery, and automatic rollback — the device only runs images it can verify.",
        bullets: [
          "A/B OTA via Mender, RAUC, or SWUpdate — selected per project.",
          "Golden recovery image — cannot be overwritten by an update.",
          "Automatic rollback on failed boot or health check.",
          "Signed updates chained to the HAB / AHAB hardware root of trust.",
          "Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / SDK, DEBUG & PROFILING",
        heading: "SDK, Debugging and Profiling",
        subtitle:
          "Your application team needs to build, debug, and profile on i.MX without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, JTAG debug, and power profiling — and CI/CD with hardware-in-the-loop on real i.MX hardware.",
        bullets: [
          "Evaluation image for NXP EVKs including FRDM i.MX 93 — running before your hardware exists.",
          "Application SDK — cross-toolchain and sysroot for your app team's x86 machines.",
          "Yocto eSDK — full build system handed to your platform team to modify and rebuild.",
          "Debugging — JTAG (Lauterbach / Segger), kgdb, gdbserver, core-dump pipelines.",
          "Profiling — perf, LTTng, boot profiling, power profiling for battery products."
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
        heading: "TI Sitara",
        subtitle:
          "You need a production image on AM335x, AM62x, or AM64x. The TI Processor SDK is not a product. We build a reproducible Yocto platform with PRU-ICSS for sub-microsecond deterministic I/O and long-lifecycle support for industrial deployments.",
        bullets: [
          "Yocto BSP for AM335x, AM62x, AM64x — BeagleBone and TI EVK ecosystems.",
          "Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux, including SYSFW / TIFS on AM6x.",
          "PRU-ICSS firmware for sub-microsecond deterministic I/O and industrial protocols.",
          "RTOS on Cortex-M4F (AM62x) and R5F (AM64x) with RPMsg to Linux.",
          "You own the full source, build system, and documentation. No lock-in."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BOARD BRING-UP & BSP",
        heading: "Board Bring-Up and BSP",
        subtitle:
          "We work directly with your hardware engineering team. SYSFW integration on AM6x is non-trivial — we review the schematic before fab, build the BSP for your carrier, and bring up boot, memory, and every peripheral on your board.",
        bullets: [
          "Schematic and PCB review — DDR routing and config, power sequencing (PMIC), boot straps.",
          "Custom BSP and device tree for your carrier — every interface mapped to your hardware.",
          "Boot verification — SPL / U-Boot port, SYSFW / TIFS integration on AM6x.",
          "Memory validation — DDR bring-up and stress test.",
          "Peripheral bring-up — CPSW / ICSSG Ethernet, CAN, USB, ADC, display, industrial I/O."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / YOCTO & EMBEDDED LINUX",
        heading: "Yocto and Embedded Linux",
        subtitle:
          "The TI Processor SDK gets you running. Industrial products ship for a decade — you need reproducible builds you can patch, audit, and maintain for the life of the product. We build on meta-ti with strong mainline alignment.",
        bullets: [
          "Reproducible Yocto build on meta-ti — TI Processor SDK aligned, same inputs, same image.",
          "Mainline kernel alignment — strong upstream support means long-term CVE patches and maintainability.",
          "Read-only rootfs, hardened system services, no stray packages.",
          "Full source, recipes, and build system handed over — you own it, no lock-in.",
          "SBOM generation — traceable to exact source revisions, IEC 61508 / IEC 62304 ready."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / BOOTLOADER & BOOT OPTIMIZATION",
        heading: "Bootloader and Boot Optimization",
        subtitle:
          "Industrial devices are unattended. A failed update or corrupted image must never stop a line. We configure the full boot chain including SYSFW on AM6x, implement golden recovery, and tune boot time for your fast-start requirements.",
        bullets: [
          "Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux, fully customized per AM variant.",
          "SYSFW / TIFS integration on AM62x and AM64x.",
          "Golden boot image — watchdog-supervised, automatic rollback on failed boot.",
          "Secure boot and signed images for deployments that require it.",
          "Boot time optimization for industrial fast-start requirements."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / KERNEL & DEVICE DRIVERS",
        heading: "Linux Kernel & Device Drivers",
        subtitle:
          "Sitara is a first-class PREEMPT_RT target. We customize the kernel for your hardware, build the PRU-ICSS interface drivers, and develop drivers for industrial Ethernet, CAN, ADC, and display on your specific carrier board.",
        bullets: [
          "Kernel customization on TI trees — strong mainline support, config minimization.",
          "PREEMPT_RT — Sitara is a first-class real-time Linux target.",
          "PRU-ICSS interface drivers and remoteproc integration.",
          "Industrial Ethernet drivers — CPSW (AM335x / AM62x) and ICSSG (AM64x).",
          "CAN, ADC, touch, display (LCDC / DSS), custom SPI / I2C — drivers for your peripheral set."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / RTOS & MICROCONTROLLER",
        heading: "RTOS and Microcontroller",
        subtitle:
          "PRU-ICSS delivers sub-microsecond deterministic I/O — the reason industrial customers choose Sitara. EtherCAT, PROFINET, and custom protocols run on the PRU in software-defined logic, alongside FreeRTOS or Zephyr on the Cortex-R/M cores.",
        bullets: [
          "PRU-ICSS firmware — sub-microsecond I/O, EtherCAT, PROFINET, custom industrial protocols.",
          "FreeRTOS / Zephyr on Cortex-M4F (AM62x) and R5F (AM64x).",
          "RPMsg / remoteproc communication between Linux and the real-time domains.",
          "Encoder and PWM interfaces for motor control applications.",
          "Watchdog and health supervision from the real-time domain."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / MIDDLEWARE",
        heading: "Middleware",
        subtitle:
          "We integrate the middleware stack your application needs — industrial Ethernet protocols, cloud connectivity, or automation stacks — built into the Yocto image and validated on your Sitara hardware.",
        bullets: [
          "joshua-industrial — EtherCAT (PRU-ICSS), PROFINET, EtherNet/IP, Modbus, OPC UA, TSN.",
          "joshua-automation — real-time control stacks, motor control integration.",
          "joshua-iot — MQTT, edge gateways, protocol translation.",
          "joshua-energy — Modbus / DNP3, RS-485, metering protocols.",
          "Read-only rootfs, watchdog, hardened system services across all variants."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / OTA & FLEET MANAGEMENT",
        heading: "OTA and Fleet Management",
        subtitle:
          "Industrial gear is unattended and long-lived. A failed update must never stop a line. We implement A/B OTA covering kernel, rootfs, and PRU firmware together — automatic rollback, signed updates, built for unattended industrial sites.",
        bullets: [
          "A/B updates covering kernel, rootfs, and PRU firmware atomically.",
          "Golden recovery image — automatic rollback on failed boot or health check.",
          "Signed update chain — device only runs images it can verify.",
          "Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server.",
          "Dashboard UI for fleet and release management."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / SDK, DEBUG & PROFILING",
        heading: "SDK, Debugging and Profiling",
        subtitle:
          "Your application team needs to build, debug, and profile on Sitara without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, JTAG debug via CCS, and CI/CD with hardware-in-the-loop on real Sitara hardware.",
        bullets: [
          "Evaluation image for TI EVKs and BeagleBone boards — running before your hardware exists.",
          "Application SDK — cross-toolchain and sysroot for your app team's x86 machines.",
          "Yocto eSDK — full build system handed to your platform team to modify and rebuild.",
          "Debugging — JTAG (CCS / XDS), kgdb, gdbserver, boot and latency profiling.",
          "CI/CD with hardware-in-the-loop smoke tests on real Sitara hardware."
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
        heading: "Intel / AMD x86",
        subtitle:
          "You have an industrial SBC, COM Express module, or edge server on Intel or AMD silicon. Generic Ubuntu or Debian is not a production OS. We build a reproducible Yocto platform — secure boot, TPM 2.0, workload consolidation — fully owned by you.",
        bullets: [
          "Yocto BSP for industrial SBCs, COM Express / SMARC modules, and edge servers.",
          "Intel Atom x6000E, Core, AMD Ryzen Embedded — validated and maintained.",
          "UEFI / coreboot, secure boot with custom keys, TPM 2.0, LUKS + TPM sealing.",
          "KVM / ACRN workload consolidation — RT, HMI, and connectivity on one machine.",
          "You own the full source, build system, and documentation. No lock-in."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BOARD BRING-UP & BSP",
        heading: "Board Bring-Up and BSP",
        subtitle:
          "We work directly with your hardware engineering team. BIOS / UEFI configuration, ACPI table review, and a custom kernel config for your exact peripheral set — then a methodical smoke test across PCIe, storage, network, and I/O.",
        bullets: [
          "BIOS / UEFI configuration and ACPI table review for your board.",
          "Custom Yocto BSP for x86_64 — meta-intel or AMD embedded targets.",
          "Kernel config for your exact peripheral set — out-of-tree driver integration.",
          "PCIe enumeration, storage, network, display, and I/O smoke test.",
          "Secure boot key enrollment and coreboot configuration where applicable."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / YOCTO & EMBEDDED LINUX",
        heading: "Yocto and Embedded Linux",
        subtitle:
          "Most x86 industrial systems run hand-built Ubuntu or Debian with no reproducibility story. A product means a minimal, reproducible, locked-down Yocto image with measured boot and disk encryption — owned and maintainable for the product lifecycle.",
        bullets: [
          "Reproducible Yocto build on meta-intel / AMD embedded — same inputs, same image, every time.",
          "Replaces hand-built Ubuntu / Debian — minimal, no unneeded packages, no stray services.",
          "TPM 2.0, measured boot, LUKS disk encryption with TPM sealing.",
          "Full source, recipes, and build system handed over — you own it, no lock-in.",
          "SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 / DO-178C ready."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / BOOTLOADER & BOOT OPTIMIZATION",
        heading: "Bootloader and Boot Optimization",
        subtitle:
          "A failed update never bricks an x86 device. We configure UEFI or coreboot with custom secure boot keys, implement golden and redundant boot partitions with health-checked fallback, and tune boot time for your application.",
        bullets: [
          "UEFI / coreboot — customized, hardened, locked for production.",
          "UEFI secure boot with your keys, measured boot with TPM 2.0.",
          "Golden boot and redundant UEFI boot entries with health-checked fallback.",
          "Memory and storage partitioning, redundant OS slots, failsafe and rollback boot.",
          "Boot time optimization — UEFI-to-app, fast boot for kiosk and HMI targets."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / KERNEL & DEVICE DRIVERS",
        heading: "Linux Kernel & Device Drivers",
        subtitle:
          "We customize and harden an LTS kernel for your specific x86 hardware. PREEMPT_RT or Xenomai for deterministic latency, custom PCIe and industrial I/O drivers, and GPU / iGPU enablement for vision and HMI applications.",
        bullets: [
          "Kernel customization and hardening on LTS kernels — config minimization.",
          "PREEMPT_RT for industrial determinism; Xenomai where hard real-time is required.",
          "Custom PCIe card drivers, industrial I/O, CAN adapters.",
          "Intel / AMD GPU and iGPU enablement for vision and HMI workloads.",
          "TPM 2.0 integration, measured boot, LUKS + TPM sealing."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / RTOS & MICROCONTROLLER",
        heading: "RTOS and Microcontroller",
        subtitle:
          "x86 has the headroom to replace multiple boxes with one. We use KVM or ACRN to run a real-time guest alongside an HMI guest, with CPU isolation and IRQ affinity — consolidating control, display, and connectivity onto a single machine.",
        bullets: [
          "KVM / ACRN hypervisor — RT-Linux or RTOS guest alongside HMI and connectivity guests.",
          "CPU isolation, IRQ affinity, and cache partitioning for deterministic real-time cores.",
          "Jailhouse partitioning for safety-adjacent designs.",
          "SR-IOV for virtualized network and I/O devices.",
          "Replace three boxes with one — control, HMI, and gateway on a single machine."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / MIDDLEWARE",
        heading: "Middleware",
        subtitle:
          "We integrate the middleware stack your application needs — industrial protocols, container runtimes, vision pipelines, or soft-PLC — built into the Yocto image and validated on your x86 hardware.",
        bullets: [
          "sequoia-industrial — Modbus, OPC UA, TSN, soft-PLC integration.",
          "sequoia-edge — MQTT, Docker / Podman container runtime, edge orchestration.",
          "sequoia-vision — OpenVINO / ROCm pipelines, GStreamer, multi-camera ingest.",
          "sequoia-medical / defense — hardened, audit-ready, SBOM-complete builds.",
          "Virtualization images — KVM / ACRN consolidating RT, GUI, and connectivity workloads."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / OTA & FLEET MANAGEMENT",
        heading: "OTA and Fleet Management",
        subtitle:
          "You need to update x86 industrial and edge devices in the field without bricking them. We implement A/B OTA with signed updates chained to secure boot, automatic rollback, and staged rollouts — cloud or on-prem.",
        bullets: [
          "A/B image updates via RAUC, Mender, or ostree — selected per project.",
          "Golden recovery and redundant UEFI boot entries — automatic rollback on failure.",
          "Signed updates chained to the UEFI secure boot chain.",
          "Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server.",
          "Boot counting and health-check-driven automatic rollback."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / SDK, DEBUG & PROFILING",
        heading: "SDK, Debugging and Profiling",
        subtitle:
          "Your application team needs to build, debug, and profile on x86 without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, remote debug, eBPF tracing, and CI/CD with hardware-in-the-loop on real x86 hardware.",
        bullets: [
          "Evaluation image for common industrial SBCs and your hardware — running from day one.",
          "Application SDK — cross-toolchain and sysroot for your app team's x86 machines.",
          "Yocto eSDK — full build system handed to your platform team to modify and rebuild.",
          "Debugging — kgdb, kexec / kdump crash analysis, remote gdb.",
          "Profiling — perf, eBPF-based tracing, boot analysis."
        ]
      }
    ]
  }
];

export function getPlatformById(id: string): PlatformData | undefined {
  return platforms.find((p) => p.id === id);
}
