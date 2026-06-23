# SoCcentric

---

## Slide 1 — SoCcentric
You need Yocto BSP, kernel, bootloader, RTOS, OTA, and SDK on your embedded hardware. We build and own the full software stack — across six silicon families — and hand it off to you. No lock-in.

- Embedded Linux platform engineering across NVIDIA Jetson, Raspberry Pi, AMD Zynq, NXP i.MX, TI Sitara, and Intel / AMD x86.
- BSP, Yocto, kernel, bootloader, RTOS, middleware, OTA, and SDK — owned end to end.
- We work directly with your hardware engineering team from schematic review to production.
- You own the full source, build system, and documentation.
- Skip 6–12 months of platform engineering. Start application work on day one.

---

## Slide 2 — Our Offering
You posted a job for a senior embedded Linux engineer. We are the team behind that job description — BSP, Yocto, kernel, drivers, RTOS, OTA, and SDK, delivered across your silicon family and handed off to your team.

- We cover what is in your embedded Linux job description — from schematic review to SDK handoff.
- Engagement starts at board bring-up and ends when your team can build, debug, and ship independently.
- We work on your hardware, your carrier board, your requirements — not a reference design.
- Reproducible builds, full source handover, SBOM — no dependency on us after handoff.
- Available for a single platform engagement or across all six silicon families.

---

## Slide 3 — Our Platform
Every engagement delivers the same full stack — from silicon to application. BSP, Yocto image, bootloader, kernel, RTOS, middleware, OTA, and SDK. Six silicon families, one methodology, one handoff package.

- Board Bring-Up and BSP — schematic review, device tree, peripheral validation.
- Yocto and Embedded Linux — reproducible, minimal, locked-down, SBOM-ready.
- Bootloader and Boot Optimization — golden boot, failsafe, A/B, boot time targets.
- Linux Kernel and Device Drivers — customized for your hardware, not the devkit.
- RTOS, Middleware, OTA, and SDK — the full stack, validated and handed off.

---

## Slide 4 — NVIDIA Jetson
You need a production image on Jetson TX2, Xavier NX, Orin, or Thor. JetPack is not a production OS. We replace ad-hoc JetPack / L4T images with a reproducible Yocto build — CUDA, TensorRT, and DeepStream intact, fully owned by you.

- Yocto BSP on meta-tegra for TX2, Xavier NX, Orin Nano / NX / AGX, Thor.
- Replaces JetPack / L4T with a reproducible, auditable, customer-owned build.
- CUDA, TensorRT, DeepStream, cuDNN preserved in the Yocto image.
- FreeRTOS on the Cortex-R SPE for hard real-time alongside Linux.
- Signed boot, A/B OTA, application SDK and eSDK — handed off to your team.

---

## Slide 5 — Raspberry Pi
You need a production image for CM4, CM5, Pi 4, or Pi 5. Stock Raspberry Pi OS is not it. We build and own the full software stack — BSP, Yocto, kernel, bootloader, RTOS, OTA — on your carrier board, handed off to you.

- Yocto BSP for CM4, CM5, Pi 4, Pi 5. Pico companion firmware on RP2040 / RP2350.
- Replaces stock Raspberry Pi OS with a minimal, reproducible Yocto build.
- Custom BSP and device tree for your carrier board — not the IO board.
- FreeRTOS or Zephyr on the Pico for hard real-time I/O alongside Linux.
- Signed boot on CM4 / CM5, A/B OTA, application SDK and eSDK — handed off to your team.

---

## Slide 6 — AMD Xilinx Zynq
You need Linux on the processing system and your FPGA design on the programmable logic — versioned, built, and updated together. We deliver the full stack: FSBL, ATF, U-Boot, kernel, rootfs, and bitstream as one owned platform.

- Yocto / PetaLinux BSP for Zynq-7000, UltraScale+ MPSoC, Versal, Kria KV260 / KR260.
- PS + PL + RPU firmware versioned and built as one platform — not patched together.
- FreeRTOS or Zephyr on the RPU with OpenAMP / RPMsg to Linux.
- Bitstream-aware A/B OTA — Linux image and FPGA bitstream updated atomically.
- Application SDK, eSDK, and Vivado JTAG debug — handed off to your team.

---

## Slide 7 — NXP i.MX
You need a secure, production image on i.MX 8M, i.MX 93, or i.MX 95. The NXP BSP is not a product. We build a reproducible Yocto platform with HAB / AHAB secure boot and EdgeLock device identity baked in — fully owned by you.

- Yocto BSP for i.MX 8M Mini / Nano / Plus, i.MX 93, i.MX 95.
- HAB / AHAB secure boot and EdgeLock device identity built into the platform.
- FreeRTOS or Zephyr on Cortex-M7 / M33 with RPMsg to Linux.
- A/B OTA signed and chained to the HAB / AHAB hardware root of trust.
- Application SDK, eSDK, and JTAG debug — handed off to your team.

---

## Slide 8 — TI Sitara
You need a production image on AM335x, AM62x, or AM64x. The TI Processor SDK is not a product. We build a reproducible Yocto platform with PRU-ICSS for sub-microsecond deterministic I/O and long-lifecycle support for industrial deployments.

- Yocto BSP for AM335x, AM62x, AM64x — BeagleBone and TI EVK ecosystems.
- PRU-ICSS firmware for sub-microsecond I/O — EtherCAT, PROFINET, custom protocols.
- FreeRTOS or Zephyr on Cortex-M4F / R5F with RPMsg to Linux.
- A/B OTA covering kernel, rootfs, and PRU firmware atomically.
- Application SDK, eSDK, and CCS JTAG debug — handed off to your team.

---

## Slide 9 — Intel / AMD x86
You have an industrial SBC, COM Express module, or edge server on Intel or AMD silicon. Generic Ubuntu or Debian is not a production OS. We build a reproducible Yocto platform — secure boot, TPM 2.0, workload consolidation — fully owned by you.

- Yocto BSP for industrial SBCs, COM Express / SMARC modules, and edge servers.
- UEFI / coreboot, secure boot with custom keys, TPM 2.0, LUKS + TPM sealing.
- KVM / ACRN consolidation — replace control, HMI, and gateway boxes with one machine.
- A/B OTA via RAUC, Mender, or ostree, chained to UEFI secure boot.
- Application SDK, eSDK, and eBPF-based profiling — handed off to your team.
