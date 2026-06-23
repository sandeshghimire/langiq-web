# NXP i.MX

---

## Slide 1 — NXP i.MX
You need a secure, production image on i.MX 8M, i.MX 93, or i.MX 95. The NXP BSP is not a product. We build a reproducible Yocto platform with HAB / AHAB secure boot and EdgeLock device identity baked in — fully owned by you.

- Yocto BSP for i.MX 8M Mini / Nano / Plus, i.MX 93, i.MX 95.
- Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux.
- HAB / AHAB secure boot and EdgeLock device identity built into the platform.
- RTOS on Cortex-M7 (8M Plus) or M33 (i.MX 93) with RPMsg to Linux.
- You own the full source, build system, and documentation. No lock-in.

---

## Slide 2 — Board Bring-Up and BSP
We work directly with your hardware engineering team. DDR calibration is critical on i.MX — we review the schematic before fab, build the BSP for your carrier, and bring up boot, memory, and every peripheral on your board.

- Schematic and PCB review — DDR config and calibration, power tree, boot-mode straps.
- Custom BSP and device tree — pinmux via NXP config tools, peripheral integration.
- Boot verification — U-Boot SPL port, DDR init, boot media strategy (eMMC / SD / QSPI).
- Memory validation — DDR calibration, eMMC bring-up and stress test.
- Peripheral bring-up — MIPI CSI, LVDS / DSI displays, CAN-FD, Ethernet, USB, I2C, SPI.

---

## Slide 3 — Yocto and Embedded Linux
The NXP BSP gets you running. A product means reproducible builds with HAB / AHAB and EdgeLock baked in — not bolted on. We build on meta-imx — the full secure stack, owned by you, not tied to the NXP release cycle.

- Reproducible Yocto build on meta-imx / meta-freescale — same inputs, same image, every time.
- HAB / AHAB secure boot chain and EdgeLock device identity built into the image.
- Read-only rootfs, hardened system services, no stray packages.
- Full source, recipes, and build system handed over — you own it, no lock-in.
- SBOM generation — traceable to exact source revisions, ISO 26262 / IEC 62304 ready.

---

## Slide 4 — Bootloader and Boot Optimization
A failed update never bricks an i.MX device. We configure the full boot chain with HAB / AHAB secure boot provisioning, implement a golden recovery image, and tune boot time — sub-2-second targets for HMI applications.

- Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux, fully customized.
- HAB / AHAB secure boot provisioning and key management.
- Golden boot and redundant boot fallback — automatic rollback on failure.
- Memory partitioning: eMMC / SD / QSPI layout, redundant OS slots.
- Boot time optimization — SPL-to-app, sub-2-second HMI boot targets.

---

## Slide 5 — Linux Kernel & Device Drivers
We customize the NXP downstream kernel for your specific carrier board. PREEMPT_RT for deterministic latency, display and camera driver development, TSN on i.MX 93, and sub-2-second boot for HMI applications.

- Kernel customization on NXP downstream trees — mainline migration paths.
- PREEMPT_RT porting and validation for control applications.
- V4L2 camera drivers — MIPI CSI and ISP on i.MX 8M Plus.
- Display drivers — LVDS, MIPI DSI, HDMI; audio drivers — SAI / codecs.
- CAN-FD, TSN Ethernet (i.MX 93), USB — drivers for your exact peripheral set.

---

## Slide 6 — RTOS and Microcontroller
The i.MX Cortex-M core runs deterministic control and low-power supervision alongside Linux. We deliver FreeRTOS or Zephyr on the M-core, RPMsg communication with Linux, and always-on supervision while Linux sleeps.

- FreeRTOS / Zephyr on Cortex-M7 (i.MX 8M Plus) or M33 (i.MX 93).
- RPMsg / Messaging Unit communication between Linux and the M-core.
- Real-time control, sensor acquisition, and low-power supervision on the M-core.
- Always-on supervision while Linux is in suspend — differentiator for battery products.
- Heterogeneous architecture design — which workload runs where, and why.

---

## Slide 7 — Middleware
We integrate the middleware stack your application needs — industrial protocols, automotive stacks, cloud connectivity, or HMI frameworks — built into the Yocto image and validated on your i.MX hardware.

- pinnacle-industrial — Modbus, OPC UA, TSN networking, real-time I/O.
- pinnacle-automotive — CAN-FD stacks, PREEMPT_RT, instrument-cluster fast-boot profile.
- pinnacle-iot — MQTT, cloud agents, EdgeLock-backed device identity.
- pinnacle-hmi — Qt, LVGL, Flutter embedded, Wayland / Weston tuning.
- pinnacle-medical — IEC 62304-aligned traceable builds, SBOM, audit-ready workflow.

---

## Slide 8 — OTA and Fleet Management
You need to update i.MX devices in the field without bricking them. We implement A/B OTA with signed updates chained to the HAB / AHAB root of trust, golden recovery, and automatic rollback — the device only runs images it can verify.

- A/B OTA via Mender, RAUC, or SWUpdate — selected per project.
- Golden recovery image — cannot be overwritten by an update.
- Automatic rollback on failed boot or health check.
- Signed updates chained to the HAB / AHAB hardware root of trust.
- Staged rollouts — fleet grouping, delta updates, cloud or on-prem update server.

---

## Slide 9 — SDK, Debugging and Profiling
Your application team needs to build, debug, and profile on i.MX without touching Yocto. We deliver a cross-toolchain, sysroot, eSDK, JTAG debug, and power profiling — and CI/CD with hardware-in-the-loop on real i.MX hardware.

- Evaluation image for NXP EVKs including FRDM i.MX 93 — running before your hardware exists.
- Application SDK — cross-toolchain and sysroot for your app team's x86 machines.
- Yocto eSDK — full build system handed to your platform team to modify and rebuild.
- Debugging — JTAG (Lauterbach / Segger), kgdb, gdbserver, core-dump pipelines.
- Profiling — perf, LTTng, boot profiling, power profiling for battery products.
