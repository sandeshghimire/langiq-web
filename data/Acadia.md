# Raspberry Pi

---

## Slide 1 — Raspberry Pi
You need a production image for CM4, CM5, Pi 4, or Pi 5. Stock Raspberry Pi OS is not it. We build and own the full software stack — BSP, Yocto, kernel, bootloader, RTOS, OTA — on your carrier board, handed off to you.

- Yocto BSP for CM4, CM5, Pi 4, Pi 5. Pico companion firmware on RP2040 / RP2350.
- Replaces stock Raspberry Pi OS with a minimal, reproducible Yocto build.
- Custom BSP and device tree for your carrier board — not the IO board.
- Signed boot chain on CM4 / CM5. A/B OTA via tryboot or RAUC.
- You own the full source, build system, and documentation. No lock-in.

---

## Slide 2 — Board Bring-Up and BSP
We work directly with your hardware engineering team. Schematic and PCB review before fab, custom BSP development, then methodical board bring-up covering boot, memory, and every peripheral on your board.

- Schematic and PCB review — power sequencing, DDR layout, boot straps, high-speed lanes.
- Custom BSP and device tree for your carrier — every interface mapped to your hardware.
- Boot verification — EEPROM config, boot-order policy, signed boot on CM4 / CM5.
- Memory validation — eMMC, NVMe, SD bring-up and stress test.
- Peripheral bring-up — CSI/DSI cameras, CAN, RS-485, USB, I2C, SPI, industrial I/O.

---

## Slide 3 — Yocto and Embedded Linux
Stock Raspberry Pi OS is built for general use. Your product needs a minimal, reproducible, locked-down image you can rebuild, audit, and maintain for the life of the product. That is what Yocto gives you — and what we deliver.

- Reproducible Yocto build on meta-raspberrypi — same inputs, same image, every time.
- Replaces stock Raspberry Pi OS — no unneeded packages, no default credentials, no stray services.
- Read-only rootfs, hardened system services, minimal attack surface.
- Full source, recipes, and build system handed over — you own it, no lock-in.
- SBOM generation — know exactly what is in your image and where it came from.

---

## Slide 4 — Bootloader and Boot Optimization
A failed update or corrupted image never bricks the device. We configure the full boot chain for your storage and boot policy, implement a golden recovery image, and tune boot time for your application requirements.

- EEPROM bootloader config, tryboot A/B mechanism, U-Boot option per project.
- Golden boot image in a protected partition — survives a bad update or corrupted storage.
- Automatic rollback on failed boot or failed health check.
- Storage partitioning: eMMC on CM4, NVMe on CM5 / Pi 5, redundant OS slots.
- Boot time optimization — trimmed init, deferred services, fast-boot for kiosk and HMI targets.

---

## Slide 5 — Linux Kernel & Device Drivers
We customize the kernel for your hardware — not the generic Raspberry Pi config. Driver development for your specific peripherals, config minimization for faster boot and smaller attack surface, and PREEMPT_RT for control applications.

- Kernel config minimization — remove what your product does not use.
- PREEMPT_RT builds for bounded, deterministic latency on control applications.
- Camera drivers — libcamera, Unicam, CSI pipelines for your specific sensors.
- Display drivers — DSI and DPI panels.
- CAN, I2C, SPI, GPIO, PWM, RS-485 — drivers for your exact peripheral set.

---

## Slide 6 — RTOS and Microcontroller
The Raspberry Pi cannot do hard real-time. The Pico can. We split the system by criticality — Linux on the Pi for networking, UI, and compute; FreeRTOS or Zephyr on the Pico for deterministic I/O and control loops.

- FreeRTOS and Zephyr firmware on RP2040 / RP2350 (Pico / Pico W).
- PIO (Programmable I/O) for custom protocols and precise timing without CPU involvement.
- UART, SPI, and USB communication links between Pi and Pico with structured protocols.
- RTOS drivers for sensors, encoders, PWM, and safety-critical I/O on the Pico.
- Watchdog and health supervision from the real-time domain.

---

## Slide 7 — Middleware
We integrate the middleware stack your application needs — communication protocols, cloud connectivity, and industry-specific stacks — built into the Yocto image and validated on your hardware.

- MQTT and cloud agents — AWS IoT, Azure IoT, fleet telemetry.
- Modbus, OPC UA, RS-485 for industrial gateway and machine integration.
- ROS 2 builds tuned for Pi 5 for robotics applications.
- Wayland kiosk, Qt, LVGL, Chromium for HMI and display applications.
- Read-only rootfs, watchdog, hardened system services across all variants.

---

## Slide 8 — OTA and Fleet Management
You need to update devices in the field without bricking them or sending a truck. We implement A/B OTA with a golden recovery image, automatic rollback, and staged rollouts — so a bad update never stops a device permanently.

- A/B updates via tryboot or RAUC — two OS slots, automatic switchback on failure.
- Golden recovery image in a protected partition — survives a bad A and a bad B.
- Signed updates chained to the CM4 / CM5 secure boot chain.
- Staged rollouts — push to 1% of the fleet, validate, then the rest.
- Delta updates — ship only changed bytes, critical for metered or slow connections.

---

## Slide 9 — SDK, Debugging and Profiling
Your application team needs to build, debug, and profile on the target without touching Yocto. We deliver a cross-toolchain, sysroot, and full eSDK — everything needed to develop on the platform from day one.

- Evaluation image for Pi 4 / 5 and CM4 / CM5 IO boards — running before your carrier exists.
- Application SDK — cross-toolchain and sysroot for your app team's x86 machines.
- Yocto eSDK — full build system handed to your platform team to modify and rebuild.
- Remote debugging — gdbserver, perf, ftrace, boot analysis.
- CI/CD integration with hardware-in-the-loop smoke tests on real hardware.
