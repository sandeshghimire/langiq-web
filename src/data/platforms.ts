export interface SlideData {
  stage: number;
  eyebrow: string;
  heading: string;
  bullets: string[];
}

export interface PlatformData {
  id: string;
  name: string;
  chipFamily: string;
  accent: string; // CSS color
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
    edgeOneLiner: "Inference on the GPU. Control loops on the MCU. One board does the whole robot.",
    industries: {
      primary: ["Robotics"],
      secondary: ["Automotive / ADAS"]
    },
    bootChain: ["BootROM", "BCT/MB1", "MB2", "UEFI", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "SOCCENTRIC // ARCHES // OVERVIEW",
        heading: "Arches",
        bullets: [
          "Jetson SoM: ARM cores, CUDA GPU, deep-learning and vision accelerators.",
          "Custom carrier adds storage, sensor interfaces, and actuator connectivity the devkit lacks.",
          "STM32 co-processor runs motor loops, watchdogs, and strict-deadline I/O — jitter-free.",
          "Built for robots, drones, smart cameras, and autonomous platforms."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP",
        heading: "Carrier BSP",
        bullets: [
          "Full board support package for your carrier, not the reference devkit.",
          "Bring-up and validation alongside your hardware team, from first power-on.",
          "Every interface enumerated, tested, documented: CSI cameras, CAN, NVMe, Ethernet.",
          "Jetson-to-STM32 link over RPMsg — defined, driven, and verified."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER",
        heading: "Boot chain",
        bullets: [
          "Jetson boot chain customized end to end: BCT, MB1/MB2, UEFI, kernel handoff.",
          "Golden boot image — a known-good state the device always recovers to.",
          "Failsafe recovery from corrupted flash or interrupted updates.",
          "Initial provisioning flow ready for first power-on at the factory."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Real-time kernel",
        bullets: [
          "Custom kernels tuned for real-time performance and fast boot.",
          "Drivers written from scratch for your sensors and actuators.",
          "Device trees and HAL matched exactly to your carrier.",
          "CUDA, TensorRT, and DeepStream stacks integrated and validated."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE",
        heading: "Edge stack",
        bullets: [
          "ROS 2 configured for your robot's compute and sensor graph.",
          "DDS tuned for multi-node, multi-camera data flow.",
          "MQTT bridging for fleet telemetry and cloud reporting.",
          "Customized to your requirements — not shipped as defaults."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & RECOVERY",
        heading: "Secure OTA",
        bullets: [
          "A/B update mechanism — devices never brick in the field.",
          "Automatic rollback on failed or interrupted updates.",
          "Kernel, GPU stack, and applications updated independently.",
          "Fleet-wide deployment from your cloud or ours."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / SDK & TOOLS",
        heading: "Developer SDK",
        bullets: [
          "Custom SDK and eSDK — your team builds apps, not infrastructure.",
          "Boot logging and boot analysis built into every image.",
          "On-device diagnostics for field troubleshooting.",
          "Cross-compilation environments ready on day one."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / PERFORMANCE",
        heading: "Performance profiling",
        bullets: [
          "GPU and accelerator profiling for inference pipelines.",
          "Boot-time analysis and optimization — measured, not guessed.",
          "System tuning across CPU, GPU, memory, and I/O.",
          "Analysis tooling your team keeps after handoff."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Factory tooling",
        bullets: [
          "Factory provisioning tools and first-boot workflows.",
          "Per-device identity, keys, and cloud enrollment.",
          "Manufacturing test suites for the production line.",
          "First boot on your hardware in weeks, not quarters."
        ]
      }
    ]
  },
  {
    id: "acadia",
    name: "Acadia",
    chipFamily: "Raspberry Pi CM5",
    accent: "#c43a3a",
    edgeOneLiner: "Your prototype already runs on it. Now it survives the factory floor.",
    industries: {
      primary: ["IoT / Smart building"],
      secondary: ["Medical"]
    },
    bootChain: ["EEPROM bootloader", "firmware (start.elf)", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "SOCCENTRIC // ACADIA // OVERVIEW",
        heading: "Acadia",
        bullets: [
          "Raspberry Pi CM4/CM5 on a ruggedized, industrial-grade carrier.",
          "Industrial connectors, power conditioning, EMC-aware layout — built for deployment.",
          "Pico W (RP2040) companion: deterministic I/O plus decoupled wireless.",
          "The Pi ecosystem your team already knows — production-hardened."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP",
        heading: "Industrial BSP",
        bullets: [
          "Industrial carrier BSP, not hobbyist GPIO headers.",
          "Bring-up and validation on your carrier, interface by interface.",
          "Device tree overlays for every peripheral you add.",
          "Linux-to-RP2040 interface defined, driven, and verified."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER",
        heading: "Failsafe boot",
        bullets: [
          "Pi EEPROM boot flow configured and locked for production.",
          "Golden boot image with verified fallback — recoverable from anything.",
          "Failsafe recovery from corrupted storage or interrupted updates.",
          "Factory provisioning baked into the first-boot sequence."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Hardened Linux",
        bullets: [
          "Custom kernels tuned for boot time and your workload.",
          "Drivers written for your industrial peripherals from scratch.",
          "Device trees and HAL matched to your carrier exactly.",
          "Mainline-tracking builds — security patches without surprises."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE",
        heading: "Industrial middleware",
        bullets: [
          "MQTT pipelines for sensors, telemetry, and building systems.",
          "DDS or ROS 2 where coordination demands it.",
          "Protocol bridges to your existing infrastructure.",
          "Configured for your deployment — not generic defaults."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & RECOVERY",
        heading: "Kiosk updates",
        bullets: [
          "A/B updates across the fleet — kiosks and nodes never brick.",
          "Automatic rollback on failed or interrupted updates.",
          "Staged rollouts: pilot devices first, fleet second.",
          "Managed from your cloud or ours."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / SDK & TOOLS",
        heading: "Build tools",
        bullets: [
          "Custom SDK on the ecosystem your developers already use.",
          "Boot logging, boot analysis, and diagnostics in every image.",
          "Reproducible Yocto builds — or Raspberry Pi OS, hardened.",
          "Cross-compilation ready on day one."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / PERFORMANCE",
        heading: "Thermal profiling",
        bullets: [
          "Thermal and power profiling for sealed enclosures.",
          "Boot-time optimization for instant-on products.",
          "I/O and wireless throughput tuned and verified.",
          "Tooling your team keeps after handoff."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Production setup",
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
    chipFamily: "Xilinx Zynq",
    accent: "#6b4fd3",
    edgeOneLiner: "When the deadline is in microseconds, software isn't enough.",
    industries: {
      primary: ["Defense", "Aerospace"],
      secondary: ["Automotive / ADAS"]
    },
    bootChain: ["BootROM", "FSBL", "bitstream", "U-Boot", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "SOCCENTRIC // ZION // OVERVIEW",
        heading: "Zion",
        bullets: [
          "Zynq-7000 and UltraScale+ MPSoC: ARM cores and FPGA fabric on one die.",
          "Latency measured in clock cycles, not scheduler ticks.",
          "Lockstep Cortex-R5 cores for safety-critical paths.",
          "SoM-on-carrier or fully custom board — your volume decides."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP",
        heading: "PS-PL BSP",
        bullets: [
          "PetaLinux/Yocto BSP that loads your bitstream and stitches fabric into the device tree.",
          "Bring-up across PS and PL together, validated as one system.",
          "OpenAMP and RPMsg between A53, R5, and fabric — defined and verified.",
          "AXI DMA paths characterized, not assumed."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER",
        heading: "Hardware boot",
        bullets: [
          "Full chain owned: BootROM, FSBL, bitstream load, U-Boot, kernel.",
          "Golden boot with verified fallback bitstream and image.",
          "Failsafe recovery from corrupted flash or failed configuration.",
          "Secure boot and encrypted bitstreams where the program demands it."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "DMA drivers",
        bullets: [
          "Custom drivers for your fabric IP — your hardware, addressable from Linux.",
          "Device trees spanning processors and programmable logic.",
          "PREEMPT_RT and core isolation where software real-time is still required.",
          "Cache coherency and DMA verified under load, not on paper."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE",
        heading: "Bus middleware",
        bullets: [
          "DDS tuned for deterministic, high-channel data distribution.",
          "Custom protocol stacks for bespoke aerospace and defense buses.",
          "ROS 2 where robotics meets programmable logic.",
          "Sensor fusion pre-processing in fabric — before the CPU sees a byte."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & RECOVERY",
        heading: "Bitstream OTA",
        bullets: [
          "Field-updatable hardware: bitstreams ship over the air with A/B fallback.",
          "Partial reconfiguration — swap one accelerator while the rest keeps running.",
          "Automatic rollback on failed bitstream or image writes.",
          "Deterministic frame-to-actuation latency, preserved across updates."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / SDK & TOOLS",
        heading: "Logic SDK",
        bullets: [
          "eSDK covering both software and fabric interfaces.",
          "Boot logging and analysis across FSBL, U-Boot, and kernel.",
          "Hardware-in-the-loop test rigs for PS/PL integration.",
          "JTAG-deep debug workflows, documented for your team."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / PERFORMANCE",
        heading: "AXI optimization",
        bullets: [
          "Fabric and interconnect profiling: AXI throughput, latency, contention.",
          "Sub-microsecond control-loop timing, measured and proven.",
          "ADAS pipelines: provable camera-radar-lidar latency budgets.",
          "Optimization across PS, PL, and the boundary between them."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Security fuses",
        bullets: [
          "Factory programming of fuses, keys, and golden images.",
          "Per-device provisioning and secure identity.",
          "Production test covering processors and fabric together.",
          "ISO 26262-aligned partitioning where automotive demands it."
        ]
      }
    ]
  },
  {
    id: "pinnacle",
    name: "Pinnacle",
    chipFamily: "NXP i.MX",
    accent: "#1f6fd6",
    edgeOneLiner: "Silicon that outlives your product plan. Linux that passes your audit.",
    industries: {
      primary: ["Medical", "Industrial automation"],
      secondary: ["Aerospace"]
    },
    bootChain: ["BootROM", "SPL", "U-Boot", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "SOCCENTRIC // PINNACLE // OVERVIEW",
        heading: "Pinnacle",
        bullets: [
          "NXP i.MX: industrial ARM with 10–15 years guaranteed availability.",
          "Mainline Linux — clean Yocto builds, predictable updates.",
          "Displays, codecs, multiple Ethernet, CAN-FD, PCIe, TSN: the industrial peripheral set.",
          "SoM-on-carrier or fully custom board — your volume decides."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP",
        heading: "Mainline BSP",
        bullets: [
          "Yocto BSP built on mainline, not a vendor fork you can't maintain.",
          "Bring-up and validation with your hardware team from first power-on.",
          "Custom layers, recipes, and machine configs — organized for the long haul.",
          "Reproducible builds your auditors can trace."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER",
        heading: "HAB secure boot",
        bullets: [
          "SPL and U-Boot customized for your board and boot media.",
          "HAB secure boot: signed images from BootROM to kernel.",
          "Golden boot and failsafe recovery — the device always comes back.",
          "Provisioning flow designed for regulated manufacturing."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "Auditable drivers",
        bullets: [
          "Custom kernels with a documented patch set — auditable, upgradable.",
          "Drivers from scratch for your instruments and interfaces.",
          "Device trees and HAL matched to your hardware exactly.",
          "PREEMPT_RT tuning where determinism is required."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE",
        heading: "Medical HMI",
        bullets: [
          "MQTT and DDS pipelines for connected instruments and gateways.",
          "OPC UA and Modbus where the factory floor speaks first.",
          "Audio, video, and display stacks for medical HMIs.",
          "Configured to your requirements — and your compliance scope."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & RECOVERY",
        heading: "Long-term OTA",
        bullets: [
          "A/B updates with signed images and automatic rollback.",
          "Security patches across a 15-year deployment window.",
          "Staged fleet rollouts with full audit trails.",
          "Devices in the field never brick — by design."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / SDK & TOOLS",
        heading: "Traceable tooling",
        bullets: [
          "Custom SDK and eSDK for your application teams.",
          "Boot logging, analysis, and diagnostics in every image.",
          "CI/CD pipelines for image builds and regression testing.",
          "Documentation that survives certification review."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / PERFORMANCE",
        heading: "Startup tuning",
        bullets: [
          "Boot-time optimization for instant-on instruments.",
          "Power profiling for battery and thermal budgets.",
          "Multimedia pipeline tuning: capture, codec, display.",
          "Long-term performance baselines, tracked release to release."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Audit enrollment",
        bullets: [
          "Factory provisioning with per-device keys and identity.",
          "Manufacturing test aligned to IEC 61508 / IEC 62304 mappings.",
          "First-boot enrollment into your device cloud.",
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
    edgeOneLiner: "FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.",
    industries: {
      primary: ["Industrial automation"],
      secondary: ["Robotics", "Energy"]
    },
    bootChain: ["BootROM", "SPL/MLO", "U-Boot", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "SOCCENTRIC // JOSHUA // OVERVIEW",
        heading: "Joshua",
        bullets: [
          "TI Sitara: industrial ARM Linux with the PRU-ICSS real-time subsystem.",
          "PRUs: 200 MHz deterministic cores with direct pin access, cycle-exact.",
          "The niche between general ARM Linux and full FPGA — at a fraction of the cost.",
          "SoM-based or fully custom board — your volume decides."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP",
        heading: "PRU-Linux BSP",
        bullets: [
          "Yocto BSP covering ARM and PRU subsystems as one platform.",
          "Bring-up and validation from first power-on, alongside your EEs.",
          "remoteproc and RPMsg between Linux and PRUs — defined and verified.",
          "Every industrial interface enumerated, tested, documented."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER",
        heading: "Unattended boot",
        bullets: [
          "BootROM, SPL, U-Boot — customized for your board and media.",
          "Golden boot and failsafe recovery for unattended industrial sites.",
          "Secure boot and signed images where the deployment demands it.",
          "Provisioning designed for the production line, not the lab."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "PRU firmware",
        bullets: [
          "PRU firmware in cycle-exact assembly or C — no Linux jitter, ever.",
          "Custom drivers bridging deterministic I/O into Linux cleanly.",
          "Device trees and HAL matched to your hardware exactly.",
          "PREEMPT_RT tuning on the ARM side where it helps."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE",
        heading: "PRU EtherCAT",
        bullets: [
          "EtherCAT and PROFINET masters and slaves on PRU — wire-speed, deterministic.",
          "OPC UA and Modbus for the rest of the plant.",
          "MQTT northbound for telemetry and fleet visibility.",
          "Protocol stacks configured to your network, not generic defaults."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & RECOVERY",
        heading: "Failsafe OTA",
        bullets: [
          "A/B updates covering kernel, rootfs, and PRU firmware together.",
          "Automatic rollback — a failed update never stops a line.",
          "Staged rollouts across plants and sites.",
          "Managed from your infrastructure or ours."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / SDK & TOOLS",
        heading: "Timing analyzer",
        bullets: [
          "SDK spanning Linux applications and PRU firmware development.",
          "Boot logging, analysis, and diagnostics in every image.",
          "Logic-analyzer-verified timing — we prove the deadlines.",
          "CI/CD for reproducible, release-engineered images."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / PERFORMANCE",
        heading: "Sub-microsecond loops",
        bullets: [
          "Cycle-exact PWM, stepper, and encoder timing — measured, not promised.",
          "Strict-deadline sensor sampling with zero scheduler jitter.",
          "Control-loop latency budgets characterized end to end.",
          "System tuning across ARM, PRU, and the boundary."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Deterministic factory",
        bullets: [
          "Factory provisioning and per-device identity workflows.",
          "Manufacturing test for ARM, PRU, and industrial I/O together.",
          "First-boot cloud enrollment for fleet management.",
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
    edgeOneLiner: "If it only runs on x86, it runs here — with all the I/O it needs.",
    industries: {
      primary: ["Networking / Edge compute"],
      secondary: ["Defense"]
    },
    bootChain: ["UEFI/coreboot", "bootloader", "kernel"],
    slides: [
      {
        stage: 1,
        eyebrow: "SOCCENTRIC // SEQUOIA // OVERVIEW",
        heading: "Sequoia",
        bullets: [
          "Intel and AMD: the highest single-thread and multi-core compute available.",
          "PCIe lane counts and high-speed I/O that ARM SoCs don't expose.",
          "Runs Windows stacks, legacy industrial software, and x86-tuned workloads natively.",
          "SoM-based or fully custom board — your volume decides."
        ]
      },
      {
        stage: 2,
        eyebrow: "STAGE 02 / BSP",
        heading: "High-speed BSP",
        bullets: [
          "Yocto or hardened distro builds for your exact board.",
          "Bring-up and validation: PCIe trees, NVMe, NICs, accelerators.",
          "Firmware coordination across UEFI, BMC, and platform controllers.",
          "Reproducible images, release-engineered from day one."
        ]
      },
      {
        stage: 3,
        eyebrow: "STAGE 03 / BOOTLOADER",
        heading: "TPM boot",
        bullets: [
          "UEFI or coreboot — customized, hardened, and locked for production.",
          "UEFI Secure Boot with your keys, measured boot with TPM.",
          "Golden boot and failsafe recovery for unattended edge sites.",
          "Provisioning integrated into your imaging and deployment flow."
        ]
      },
      {
        stage: 4,
        eyebrow: "STAGE 04 / KERNEL & DRIVERS",
        heading: "ACRN partition",
        bullets: [
          "Custom kernels: PREEMPT_RT, isolated cores, deterministic without an MCU.",
          "Drivers for your capture cards, accelerators, and custom I/O.",
          "Hypervisor partitioning — Xen or ACRN — Linux and RTOS on one die.",
          "SR-IOV and virtualization paths validated under load."
        ]
      },
      {
        stage: 5,
        eyebrow: "STAGE 05 / MIDDLEWARE",
        heading: "Container edge",
        bullets: [
          "DDS and MQTT pipelines sized for edge-server throughput.",
          "Container runtimes hardened for embedded deployment.",
          "Virtualization stacks validated on your exact silicon.",
          "Bridges to legacy industrial software that must keep running."
        ]
      },
      {
        stage: 6,
        eyebrow: "STAGE 06 / OTA & RECOVERY",
        heading: "Rackscale OTA",
        bullets: [
          "A/B image updates with automatic rollback at fleet scale.",
          "Signed updates verified against your secure boot chain.",
          "Staged rollouts: rack, site, fleet.",
          "Edge nodes recover without a site visit."
        ]
      },
      {
        stage: 7,
        eyebrow: "STAGE 07 / SDK & TOOLS",
        heading: "Remote diagnostics",
        bullets: [
          "SDKs for your application and virtualization teams.",
          "Boot logging and analysis across firmware and kernel.",
          "CI/CD for image builds, regression, and release management.",
          "Diagnostics designed for remote, lights-out operation."
        ]
      },
      {
        stage: 8,
        eyebrow: "STAGE 08 / PERFORMANCE",
        heading: "PCIe characterization",
        bullets: [
          "Real-time latency on isolated cores — measured under load.",
          "PCIe and storage throughput characterized end to end.",
          "GPU and accelerator integration for vision rigs.",
          "Power and thermal tuning for fanless and rugged builds."
        ]
      },
      {
        stage: 9,
        eyebrow: "STAGE 09 / MANUFACTURING",
        heading: "Burn-in testing",
        bullets: [
          "Factory imaging, provisioning, and per-device identity.",
          "Burn-in and production test for compute-dense systems.",
          "First-boot enrollment into your management plane.",
          "The software runs. The I/O keeps up. The fleet stays up."
        ]
      }
    ]
  }
];

export function getPlatformById(id: string): PlatformData | undefined {
  return platforms.find((p) => p.id === id);
}
