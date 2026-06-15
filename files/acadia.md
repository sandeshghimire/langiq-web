# Acadia — Raspberry Pi

## 11 / 19 · Acadia
A custom Yocto-based platform for Compute Module 4 / 5, Pi 4 / 5, and Pico — turning the world's most popular SBC into a real industrial product platform.

- Minimal, reproducible Yocto build replacing stock Raspberry Pi OS for production.
- Validated on Compute Module 4, Compute Module 5, Pi 4, Pi 5; companion firmware on Pico / Pico W.
- Locked-down, updatable, secure, manufacturable — not a hobbyist image.
- Custom BSP and carrier-board bring-up for CM4 / CM5 designs.

[Download brochure ↓](acadia-brochure.pdf)

## 12 / 19 · Carrier-board bring-up
From carrier design review to a verified boot on your own hardware.

- CM4 / CM5 carrier board design review with your hardware team.
- Custom BSP: device tree overlays for your carrier — cameras, displays, CAN, RS-485, industrial I/O.
- Board bring-up and smoke test: storage, network, peripheral checkout, I/O validation.
- Bootloader: EEPROM configuration, signed boot enablement, boot-order policy.

## 13 / 19 · Failsafe boot
Golden images and tryboot fallback that keep a device recoverable.

- Boot-chain customization: EEPROM bootloader config, tryboot A/B mechanism, U-Boot option.
- Golden boot and tryboot-based fallback — recoverable from corrupted storage or failed updates.
- Storage partitioning: eMMC on CM, NVMe on CM5 / Pi 5; failsafe and rollback boot.
- Factory provisioning baked into the first-boot sequence.

## 14 / 19 · Production kernel
A minimized Raspberry Pi kernel with the drivers your carrier needs.

- Kernel customization on Raspberry Pi kernel trees; config minimization for boot time.
- PREEMPT_RT builds for control applications.
- Driver development: camera (libcamera / Unicam / CSI), DSI / DPI displays, CAN (MCP2515 / MCP251xFD).
- GPIO / PWM / I²C / SPI integration with deterministic userspace APIs.

## 15 / 19 · Industry-specific images
Pre-integrated, hardened image variants tuned per vertical.

- rpi-iot — MQTT, cloud agents, fleet telemetry.
- rpi-industrial — Modbus, OPC UA, RS-485 stacks.
- rpi-robotics — ROS 2 builds tuned for Pi 5.
- rpi-kiosk / hmi — Wayland kiosk images, Qt / LVGL / Chromium kiosk modes.
- Hardened system services, read-only rootfs with overlayfs, watchdog.

## 16 / 19 · A/B updates, signed boot
Safe field updates chained to a signed boot.

- A/B updates using the native tryboot mechanism or RAUC / Mender.
- Golden recovery image, automatic rollback on failed boot.
- Cloud connectivity, staged rollouts, delta updates, dashboard UI for fleet OTA management.
- Signed updates; signed boot chain on CM4 / CM5.

## 17 / 19 · Build, debug, ship
Eval images, SDKs, and CI/CD for your own team.

- Evaluation images for Pi 4 / 5 and CM4 / CM5 IO boards.
- Application SDK and Yocto eSDK for your application teams.
- Debugging and profiling: perf, ftrace, remote gdb, boot analysis.
- CI/CD integration and hardware-in-the-loop smoke tests.

## 18 / 19 · Pico companions
Hard real-time on the Pico, paired with Linux for everything else.

- FreeRTOS and Zephyr firmware on RP2040 / RP2350 (Pico / Pico W).
- Linux for connectivity and UI, Pico for hard real-time I/O — clean separation of concerns.
- PIO (Programmable I/O) development for custom protocols and precise timing.
- UART / SPI / USB communication links with structured protocols.

## 19 / 19 · Prototype to production
From first power-on to a manufacturable product, with no rewrite.

- Factory provisioning and per-device identity workflows.
- Manufacturing test suites for the production line.
- Cloud enrollment at first boot, automatically.
- Prototype to production — no replatforming, no rewrite.
