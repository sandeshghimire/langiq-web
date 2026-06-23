# Intel / AMD x86

---

## Slide 1 — Intel / AMD x86
You have an industrial SBC, COM Express module, or edge server on Intel or AMD silicon. Generic Ubuntu or Debian is not a production OS. We build a reproducible Yocto platform — secure boot, TPM 2.0, workload consolidation — fully owned by you.

- Yocto BSP for industrial SBCs, COM Express / SMARC modules, and edge servers.
- Intel Atom x6000E, Core, AMD Ryzen Embedded — validated and maintained.
- UEFI / coreboot, secure boot with custom keys, TPM 2.0, LUKS + TPM sealing.
- KVM / ACRN workload consolidation — RT, HMI, and connectivity on one machine.
- You own the full source, build system, and documentation. No lock-in.

---

## Slide 2 — Board Bring-Up and BSP
We work directly with your hardware engineering team. BIOS / UEFI configuration, ACPI table review, and a custom kernel config for your exact peripheral set — then a methodical smoke test across PCIe, storage, network, and I/O.

- BIOS / UEFI configuration and ACPI table review for your board.
- Custom Yocto BSP for x86_64 — meta-intel or AMD embedded targets.
- Kernel config for your exact peripheral set — out-of-tree driver integration.
- PCIe enumeration, storage, network, display, and I/O smoke test.
- Secure boot key enrollment and coreboot configuration where applicable.

---

## Slide 3 — Yocto and Embedded Linux
Most x86 industrial systems run hand-built Ubuntu or Debian with no reproducibility story. A product means a minimal, reproducible, locked-down Yocto image with measured boot and disk encryption — owned and maintainable for the product lifecycle.

- Reproducible Yocto build on meta-intel / AMD embedded — same inputs, same image, every time.
- Replaces hand-built Ubuntu / Debian — minimal, no unneeded packages, no stray services.
- TPM 2.0, measured boot, LUKS disk encryption with TPM sealing.
- Full source, recipes, and build system handed over — you own it, no lock-in.
- SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 / DO-178C ready.

---

## Slide 4 — Bootloader and Boot Optimization
A failed update never bricks an x86 device. We configure UEFI or coreboot with custom secure boot keys, implement golden and redundant boot partitions with health-checked fallback, and tune boot time for your application.

- UEFI / coreboot — customized, hardened, locked for production.
- UEFI secure boot with your keys, measured boot with TPM 2.0.
- Golden boot and redundant UEFI boot entries with health-checked fallback.
- Memory and storage partitioning, redundant OS slots, failsafe and rollback boot.
- Boot time optimization — UEFI-to-app, fast boot for kiosk and HMI targets.

---

## Slide 5 — Linux Kernel & Device Drivers
We customize and harden an LTS kernel for your specific x86 hardware. PREEMPT_RT or Xenomai for deterministic latency, custom PCIe and industrial I/O drivers, and GPU / iGPU enablement for vision and HMI applications.

- Kernel customization and hardening on LTS kernels — config minimization.
- PREEMPT_RT for industrial determinism; Xenomai where hard real-time is required.
- Custom PCIe card drivers, industrial I/O, CAN adapters.
- Intel / AMD GPU and iGPU enablement for vision and HMI workloads.
- TPM 2.0 integration, measured boot, LUKS + TPM sealing.

---

## Slide 6 — RTOS and Microcontroller
x86 has the headroom to replace multiple boxes with one. We use KVM or ACRN to run a real-time guest alongside an HMI guest, with CPU isolation and IRQ affinity — consolidating control, display, and connectivity onto a single machine.

- KVM / ACRN hypervisor — RT-Linux or RTOS guest alongside HMI and connectivity guests.
- CPU isolation, IRQ affinity, and cache partitioning for deterministic real-time cores.
- Jailhouse partitioning for safety-adjacent designs.
- SR-IOV for virtualized network and I/O devices.
- Replace three boxes with one — control, HMI, and gateway on a single machine.

---

## Slide 7 — Middleware
We integrate the middleware stack your application needs — industrial protocols, container runtimes, vision pipelines, or soft-PLC — built into the Yocto image and validated on your x86 hardware.

- sequoia-industrial — Modbus, OPC UA, TSN, soft-PLC integration.
- sequoia-edge — MQTT, Docker / Podman container runtime, edge orchestration.
- sequoia-vision — OpenVINO / ROCm pipelines, GStreamer, multi-camera ingest.
- sequoia-medical / defense — hardened, audit-ready, SBOM-complete builds.
- Virtualization images — KVM / ACRN consolidating RT, GUI, and connectivity workloads.

---

## Slide 8 — OTA and Fleet Management
You need to update x86 industrial and edge devices in the field without bricking them. We implement A/B OTA with signed updates chained to secure boot, automatic rollback, and staged rollouts — cloud or on-prem.

- A/B image updates via RAUC, Mender, or ostree — selected per project.
- Golden recovery and redundant UEFI boot entries — automatic rollback on failure.
- Signed updates chained to the UEFI secure boot chain.
- Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server.
- Boot counting and health-check-driven automatic rollback.

---

## Slide 9 — SDK, Debugging and Profiling
Your application team needs to build, debug, and profile on x86 without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, remote debug, eBPF tracing, and CI/CD with hardware-in-the-loop on real x86 hardware.

- Evaluation image for common industrial SBCs and your hardware — running from day one.
- Application SDK — cross-toolchain and sysroot for your app team's x86 machines.
- Yocto eSDK — full build system handed to your platform team to modify and rebuild.
- Debugging — kgdb, kexec / kdump crash analysis, remote gdb.
- Profiling — perf, eBPF-based tracing, boot analysis.
