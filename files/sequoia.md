# Sequoia — Intel / AMD x86

## 51 / 59 · Sequoia
A custom Yocto-based platform for industrial SBCs, COM Express / SMARC modules, and edge servers — Intel Atom / Core and AMD Ryzen Embedded. The same rigor as our ARM platforms, on x86.

- Validated on industrial SBCs and embedded modules (Atom x6000E, Core, Ryzen Embedded).
- Boot chain: UEFI / coreboot → systemd-boot / GRUB → Linux, secure boot with custom keys.
- Virtualization and workload consolidation (KVM, ACRN).
- The same rigor as our ARM platforms, on x86.

[Download brochure ↓](sequoia-brochure.pdf)

## 52 / 59 · High-speed BSP
x86 bring-up: BIOS / UEFI, ACPI review, and the drivers for your peripheral set.

- Yocto-based embedded Linux for x86_64 (meta-intel, AMD embedded targets).
- Custom BSP: kernel config for your exact peripheral set, out-of-tree driver integration.
- Carrier board bring-up: BIOS / UEFI configuration, ACPI table review.
- Smoke test: PCIe enumeration, storage, network, display, I/O checkout.

## 53 / 59 · TPM / secure boot
A locked, measured boot with TPM 2.0 and golden recovery.

- UEFI / coreboot — customized, hardened, locked for production.
- UEFI Secure Boot with your keys, measured boot with TPM 2.0.
- Golden boot and redundant boot partitions (UEFI boot entries + health-checked fallback).
- Memory / storage partitioning, failsafe and rollback boot.

## 54 / 59 · Determinism without an MCU
Real-time and security on x86 — no microcontroller required.

- Kernel customization and hardening (LTS kernels), config minimization.
- PREEMPT_RT for industrial determinism; Xenomai where hard real-time is required.
- Driver work: custom PCIe cards, industrial I/O, CAN adapters, GPU / iGPU enablement.
- TPM 2.0 integration, measured boot, disk encryption (LUKS + TPM sealing).

## 55 / 59 · Industry-specific images
Pre-integrated, consolidation-ready image variants per vertical.

- sequoia-industrial — Modbus, OPC UA, TSN, soft-PLC integration.
- sequoia-iot / edge — MQTT, container runtime (Docker / Podman), edge orchestration.
- sequoia-vision — OpenVINO / ROCm pipelines, GStreamer, multi-camera ingest.
- sequoia-medical / defense — hardened, audit-ready, SBOM-complete builds.
- Virtualization images: KVM / ACRN for consolidating RT + GUI + connectivity workloads.

## 56 / 59 · Rackscale OTA
Image-based or A/B updates chained to secure boot.

- A/B image updates with golden recovery (RAUC / Mender on x86, or image-based ostree).
- Automatic rollback via boot counting and health checks.
- Cloud / on-prem update server, staged rollouts, delta updates.
- Secure-boot-chained signed updates.

## 57 / 59 · Remote diagnostics
Eval images, SDKs, and modern x86 tracing tools.

- Evaluation images for common industrial SBCs and your hardware.
- Application SDK and Yocto eSDK.
- Debugging: kgdb, kexec / kdump crash analysis, remote gdb.
- Profiling: perf, eBPF-based tracing, boot analysis.

## 58 / 59 · Isolated cores, hypervisor
Deterministic cores and hypervisor consolidation on one box.

- Boot streamlining: UEFI-to-app optimization, kiosk / HMI fast boot.
- CPU isolation, IRQ affinity, cache partitioning for deterministic cores.
- Hypervisor-based consolidation: RTOS or RT-Linux guest alongside HMI guest (ACRN / KVM).
- Jailhouse partitioning for safety-adjacent designs.

## 59 / 59 · Burn-in, identity, fleet
Load-validated virtualization, CI/CD, and production test.

- SR-IOV and virtualization paths validated under load.
- CI/CD with automated image builds and HIL validation.
- Factory imaging, provisioning, and per-device identity.
- Burn-in and production test for compute-dense systems.
