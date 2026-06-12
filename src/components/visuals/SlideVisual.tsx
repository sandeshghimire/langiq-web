"use client";

import React from "react";
import type { PlatformData } from "@/data/platforms";
import {
    TerminalStatic,
    BusEnumeration,
} from "./TerminalVisuals";
import {
    BootChainDiagram,
    ProtocolStack,
    StatStrip,
    SpecSheet,
    OtaTimeline,
    BarChart,
    CodeBlock,
    CapabilityGrid,
} from "./DiagramVisuals";
import {
    ArchesRpmsgLink,
    AcadiaPinout,
    ZionFabricMap,
    PinnacleTimeline,
    JoshuaTiming,
    SequoiaPcieLanes,
    ManufacturingTimeline,
} from "./PlatformVisuals";

/**
 * Per-platform, per-stage visual selector. Returns a React node that
 * renders the right "data panel" for the given platformId / stage
 * combination.
 *
 * This component is the *only* place that knows about specific
 * (platform, stage) → visual mappings. Every other consumer (page
 * templates) just calls `<SlideVisual platform={...} stage={...} />`
 * and gets back a node, or `null` for stages that intentionally stay
 * text-only.
 */
export function SlideVisual({
    platform,
    stage,
    active,
}: {
    platform: PlatformData;
    stage: number;
    active: boolean;
}) {
    const accent = platform.accent;

    // Per-platform boot-chain content for BootChainDiagram.
    if (stage === 3) {
        return (
            <BootChainDiagram
                active={active}
                stages={platform.bootChain}
                accent={accent}
            />
        );
    }

    // ── Per-platform, per-stage overrides ─────────────────────────────
    if (platform.id === "arches") {
        if (stage === 1) {
            return (
                <ArchesRpmsgLink active={active} accent={accent} />
            );
        }
        if (stage === 2) {
            return (
                <BusEnumeration
                    active={active}
                    accent={accent}
                    buses={[
                        { name: "i2c-0", addr: "0x4a", devices: 3 },
                        { name: "i2c-1", addr: "0x4b", devices: 2 },
                        { name: "spi-0", addr: "0x10", devices: 1 },
                        { name: "spi-1", addr: "0x11", devices: 2 },
                        { name: "pcie-x1", addr: "0x0001", devices: 1 },
                        { name: "ethernet", addr: "eth0", devices: 1 },
                        { name: "can-0", addr: "can0", devices: 1 },
                    ]}
                />
            );
        }
        if (stage === 4) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="drivers/soccentric-imx335.c"
                    status="BUILT"
                    code={[
                        { text: "// Camera sensor driver — Bring-up verified" },
                        { text: "static int imx335_probe(struct i2c_client *client)" },
                        { text: "{" },
                        { text: "  struct soccentric_cam *cam;" },
                        { text: "  cam = devm_kzalloc(&client->dev, sizeof(*cam), GFP_KERNEL);" },
                        { text: "  cam->i2c = i2c_get_adapter(2);" },
                        { text: "  cam->lanes = 4;          // MIPI CSI-2" },
                        { text: "  cam->dma_ch = soccentric_dma_request(SCRC_DMA_CAM);" },
                        { text: "  return soccentric_cam_register(cam);" },
                        { text: "}" },
                    ]}
                />
            );
        }
        if (stage === 5) {
            return (
                <ProtocolStack
                    active={active}
                    accent={accent}
                    layers={[
                        { name: "Application", role: "Your domain logic", protocols: ["rclcpp", "ROS 2"] },
                        { name: "Middleware", role: "Pub/sub, serialization", protocols: ["DDS", "Cyclone"] },
                        { name: "Acceleration", role: "Inference runtime", protocols: ["TensorRT", "DeepStream"] },
                        { name: "Transport", role: "Telemetry & cloud", protocols: ["MQTT", "gRPC"] },
                        { name: "RT I/O", role: "Deterministic motor", protocols: ["RPMsg", "RPMSG"] },
                    ]}
                />
            );
        }
        if (stage === 6) {
            return (
                <OtaTimeline
                    active={active}
                    accent={accent}
                />
            );
        }
        if (stage === 7) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="sdk/boot-analyze.py"
                    status="RUN"
                    code={[
                        { text: "# Boot analysis — runs on every CI image" },
                        { text: "from soccentric import BootLog" },
                        { text: "" },
                        { text: "log = BootLog.from_serial('/dev/ttyS0')" },
                        { text: "log.parse()  # parses 1,200+ lines" },
                        { text: "report = log.analyze(stage_budgets={" },
                        { text: "    'SPL':  400,   # ms" },
                        { text: "    'U-Boot': 600, # ms" },
                        { text: "    'kernel':  900 # ms" },
                        { text: "})" },
                        { text: "report.fail_if_overrun()  # CI gate" },
                    ]}
                />
            );
        }
        if (stage === 8) {
            return (
                <StatStrip
                    active={active}
                    accent={accent}
                    label="INFERENCE LATENCY"
                    status="P50 / P99"
                    stats={[
                        { value: "12.4", unit: "ms", label: "YOLOv8" },
                        { value: "8.1", unit: "ms", label: "TensorRT" },
                        { value: "4.2", unit: "ms", label: "DLA" },
                    ]}
                />
            );
        }
        if (stage === 9) {
            return (
                <ManufacturingTimeline
                    active={active}
                    accent={accent}
                    steps={[
                        { day: "Day 1", label: "Schematic review" },
                        { day: "Week 1", label: "BSP kickoff" },
                        { day: "Week 4", label: "First boot" },
                        { day: "Week 8", label: "Pilot line" },
                    ]}
                />
            );
        }
    }

    if (platform.id === "acadia") {
        if (stage === 1) {
            return <AcadiaPinout active={active} accent={accent} />;
        }
        if (stage === 2) {
            return (
                <BusEnumeration
                    active={active}
                    accent={accent}
                    buses={[
                        { name: "i2c-0", addr: "0x50", devices: 2 },
                        { name: "i2c-1", addr: "0x51", devices: 3 },
                        { name: "spi-0", addr: "0x10", devices: 1 },
                        { name: "uart-0", addr: "ttyS0", devices: 1 },
                        { name: "ethernet", addr: "eth0", devices: 1 },
                        { name: "wifi", addr: "wlan0", devices: 1 },
                    ]}
                />
            );
        }
        if (stage === 4) {
            return (
                <TerminalStatic
                    active={active}
                    accent={accent}
                    label="DRIVER LOAD"
                    status="BUILT-IN"
                    lines={[
                        "$ modprobe soccentric-mmc",
                        "  soccentric-mmc: registered (mmc0, mmc1)",
                        "$ modprobe soccentric-can",
                        "  soccentric-can: can0 up @ 1 Mbps",
                        "$ modprobe soccentric-pio",
                        "  soccentric-pio: 32 lines registered",
                        "$ modprobe soccentric-rp2040",
                        "  rp2040: link up (I/O co-processor)",
                        "  rpmsg-soc: channel 'soccentric-pio' ready ✓",
                    ]}
                />
            );
        }
        if (stage === 5) {
            return (
                <ProtocolStack
                    active={active}
                    accent={accent}
                    layers={[
                        { name: "Building systems", role: "BACnet / Modbus bridge", protocols: ["MQTT", "Modbus"] },
                        { name: "Telemetry", role: "Cloud & on-prem", protocols: ["MQTT", "HTTPS"] },
                        { name: "Coordination", role: "Multi-node", protocols: ["DDS", "ROS 2"] },
                        { name: "Industrial", role: "Plant-side", protocols: ["OPC UA", "Modbus"] },
                    ]}
                />
            );
        }
        if (stage === 6) {
            return <OtaTimeline active={active} accent={accent} />;
        }
        if (stage === 7) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="recipes/soccentric-image.bb"
                    status="YOCTO"
                    code={[
                        { text: "# Reproducible Yocto build for Acadia carrier" },
                        { text: "inherit core-image" },
                        { text: "" },
                        { text: "IMAGE_INSTALL += \"soccentric-init soccentric-watchdog\"" },
                        { text: "IMAGE_INSTALL += \"rauc rauc-mark-good\"" },
                        { text: "IMAGE_INSTALL += \"mosquitto-clients can-utils\"" },
                        { text: "" },
                        { text: "MACHINE = \"soccentric-acadia-cm5\"" },
                        { text: "DISTRO_FEATURES += \"systemd wifi\"" },
                        { text: "RAUC_SLOT_BOOTNAME = \"A\"" },
                    ]}
                />
            );
        }
        if (stage === 8) {
            return (
                <BarChart
                    active={active}
                    accent={accent}
                    label="THERMAL PROFILE"
                    status="SEALED ENCL"
                    rows={[
                        { label: "Idle", value: 38, unit: "°C" },
                        { label: "Wi-Fi burst", value: 52, unit: "°C" },
                        { label: "Compute load", value: 68, unit: "°C" },
                        { label: "OTA flash", value: 71, unit: "°C" },
                        { label: "Throttle", value: 85, unit: "°C" },
                    ]}
                />
            );
        }
        if (stage === 9) {
            return (
                <ManufacturingTimeline
                    active={active}
                    accent={accent}
                    steps={[
                        { day: "Day 1", label: "Pi CM5 + carrier" },
                        { day: "Week 1", label: "EEPRON golden image" },
                        { day: "Week 2", label: "Provisioning CLI" },
                        { day: "Week 3", label: "Pilot run" },
                    ]}
                />
            );
        }
    }

    if (platform.id === "zion") {
        if (stage === 1) {
            return <ZionFabricMap active={active} accent={accent} />;
        }
        if (stage === 2) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="device-tree/zion.dts"
                    status="DTS"
                    code={[
                        { text: "&amba {" },
                        { text: "    fabric_axi: axi@40000000 {" },
                        { text: "        compatible = \"soccentric,fabric-axi\";" },
                        { text: "        reg = <0x0 0x40000000 0x0 0x10000000>;" },
                        { text: "        dma-coherent;" },
                        { text: "        #dma-cells = <1>;" },
                        { text: "        ranges;" },
                        { text: "    };" },
                        { text: "};" },
                        { text: "&gem0 { status = \"okay\"; phy-mode = \"rgmii\"; };" },
                    ]}
                />
            );
        }
        if (stage === 4) {
            return (
                <TerminalStatic
                    active={active}
                    accent={accent}
                    label="DMA PROBE"
                    status="PASS"
                    lines={[
                        "Loading soccentric-fabric.ko ...",
                        "  fabric-axi: matched 4 DMA channels",
                        "  fabric-axi: 8 user IP blocks enumerated",
                        "  axi-dma-mm2s: ch 0..3 ready (1 GB/s each)",
                        "  axi-dma-s2mm: ch 0..3 ready",
                        "  cache-coherent: enabled (CCI-500)",
                        "  measured: 942 MB/s sustained, 0 overruns ✓",
                    ]}
                />
            );
        }
        if (stage === 5) {
            return (
                <ProtocolStack
                    active={active}
                    accent={accent}
                    layers={[
                        { name: "Sensor fusion", role: "Camera + radar + lidar", protocols: ["ROS 2", "DDS"] },
                        { name: "Defense bus", role: "1553 / ARINC-429", protocols: ["Custom", "Deterministic"] },
                        { name: "Fabric IP", role: "Pre-process in PL", protocols: ["HDL", "Verilog"] },
                        { name: "Telemetry", role: "Fleet visibility", protocols: ["MQTT", "DDS"] },
                    ]}
                />
            );
        }
        if (stage === 6) {
            return (
                <OtaTimeline
                    active={active}
                    accent={accent}
                />
            );
        }
        if (stage === 7) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="sdk/fabric-update.sh"
                    status="eSDK"
                    code={[
                        { text: "#!/usr/bin/env bash" },
                        { text: "# Field-updatable bitstream over the air" },
                        { text: "set -euo pipefail" },
                        { text: "" },
                        { text: "BITSTREAM=\"$1\"" },
                        { text: "rboot -s B --write \"$BITSTREAM\"" },
                        { text: "rboot -s B --verify" },
                        { text: "rboot --swap-active" },
                        { text: "echo \"✓ bitstream live on slot B\"" },
                    ]}
                />
            );
        }
        if (stage === 8) {
            return (
                <StatStrip
                    active={active}
                    accent={accent}
                    label="AXI LATENCY"
                    status="MEASURED"
                    stats={[
                        { value: "42", unit: "ns", label: "AXI read" },
                        { value: "1.4", unit: "μs", label: "Camera→R5" },
                        { value: "97", unit: "%", label: "Budget used" },
                    ]}
                />
            );
        }
        if (stage === 9) {
            return (
                <SpecSheet
                    active={active}
                    accent={accent}
                    label="SECURE BOOT"
                    status="HAB / Zynq"
                    rows={[
                        { k: "Fuses", v: "eFuse locked" },
                        { k: "Keys", v: "RSA-4096" },
                        { k: "Bitstream", v: "AES-256 encrypted" },
                        { k: "Image", v: "Signed (SHA-384)" },
                        { k: "Rollback", v: "Monotonic counter" },
                        { k: "Partition", v: "ASIL-B / ISO 26262" },
                    ]}
                />
            );
        }
    }

    if (platform.id === "pinnacle") {
        if (stage === 1) {
            return <PinnacleTimeline active={active} accent={accent} />;
        }
        if (stage === 2) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="conf/machine/soccentric-imx8.conf"
                    status="YOCTO"
                    code={[
                        { text: "# SoCcentric BSP for NXP i.MX 8M Plus" },
                        { text: "PREFERRED_PROVIDER_virtual/kernel = \"linux-yocto\"" },
                        { text: "KERNEL_DEVICETREE += \"soccentric-imx8mplus.dtb\"" },
                        { text: "" },
                        { text: "MACHINE_FEATURES += \"pci wifi bluetooth\"" },
                        { text: "MACHINE_FEATURES += \"display codec can-fd\"" },
                        { text: "" },
                        { text: "DISTRO = \"poky-soccentric\"" },
                        { text: "DISTRO_FEATURES += \" wayland opengl\"" },
                        { text: "HAB_SIGN_CMD = \"soccentric-hab-sign\"" },
                    ]}
                />
            );
        }
        if (stage === 4) {
            return (
                <TerminalStatic
                    active={active}
                    accent={accent}
                    label="KERNEL BOOT"
                    status="DETERMINISTIC"
                    lines={[
                        "[    0.000000] Linux 6.6.21-soccentric+ (audit@ci)",
                        "[    0.082001] soccentric-imx8: BSP v3.2.1 (signed)",
                        "[    0.102487] fsl-sai 30020000.sai: registered",
                        "[    0.121043] mxc-jpeg 58400000.jpeg: probe ok",
                        "[    0.148901] can-fd can0: 5 Mbps, fd-capable",
                        "[    0.182441] ieee1588: PTP clock registered",
                        "[    0.214098] tsn 5b000000.ethernet: TSN cap verified ✓",
                    ]}
                />
            );
        }
        if (stage === 5) {
            return (
                <ProtocolStack
                    active={active}
                    accent={accent}
                    layers={[
                        { name: "Medical HMI", role: "Display + touch", protocols: ["Wayland", "Qt"] },
                        { name: "Compliance", role: "Audited middleware", protocols: ["OPC UA", "Modbus"] },
                        { name: "Instrument", role: "Real-time data", protocols: ["MQTT", "DDS"] },
                        { name: "Display", role: "Video / codec", protocols: ["GStreamer", "V4L2"] },
                    ]}
                />
            );
        }
        if (stage === 6) {
            return (
                <OtaTimeline
                    active={active}
                    accent={accent}
                />
            );
        }
        if (stage === 7) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="ci/release.sh"
                    status="CI"
                    code={[
                        { text: "#!/usr/bin/env bash" },
                        { text: "# Release-engineered image build" },
                        { text: "set -euo pipefail" },
                        { text: "" },
                        { text: "source poky/oe-init-build-env build-pinnacle" },
                        { text: "bitbake soccentric-image-instrument" },
                        { text: "" },
                        { text: "soccentric-sign-image \\" },
                        { text: "    --key release.pem \\" },
                        { text: "    --slot A,B \\" },
                        { text: "    --manifest build/manifest.json" },
                    ]}
                />
            );
        }
        if (stage === 8) {
            return (
                <StatStrip
                    active={active}
                    accent={accent}
                    label="BOOT TIME"
                    status="P99"
                    stats={[
                        { value: "1.4", unit: "s", label: "Cold boot" },
                        { value: "320", unit: "ms", label: "Resume" },
                        { value: "12", unit: "W", label: "Peak power" },
                    ]}
                />
            );
        }
        if (stage === 9) {
            return (
                <SpecSheet
                    active={active}
                    accent={accent}
                    label="PROVISIONING"
                    status="REGULATED"
                    rows={[
                        { k: "Identity", v: "TPM 2.0 sealed" },
                        { k: "Enrollment", v: "Per-device cert" },
                        { k: "Audit", v: "Append-only log" },
                        { k: "Compliance", v: "IEC 61508 / 62304" },
                        { k: "Fuse", v: "OTP locked at EOL" },
                        { k: "Returns", v: "Secure retirement" },
                    ]}
                />
            );
        }
    }

    if (platform.id === "joshua") {
        if (stage === 1) {
            return <JoshuaTiming active={active} accent={accent} />;
        }
        if (stage === 2) {
            return (
                <BusEnumeration
                    active={active}
                    accent={accent}
                    buses={[
                        { name: "i2c-0", addr: "0x4a", devices: 4 },
                        { name: "spi-0", addr: "0x10", devices: 2 },
                        { name: "ethercat", addr: "ec0", devices: 1 },
                        { name: "profinet", addr: "pn0", devices: 1 },
                        { name: "can-0", addr: "can0", devices: 1 },
                        { name: "pru-0/1", addr: "0x4b000", devices: 2 },
                    ]}
                />
            );
        }
        if (stage === 4) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="pru/pwm_cycle.pru0.c"
                    status="CYCLE-EXACT"
                    code={[
                        { text: "// 200 MHz PRU — 5ns per cycle" },
                        { text: "#include <pru/io.h>" },
                        { text: "" },
                        { text: "void main(void) {" },
                        { text: "  while (1) {" },
                        { text: "    __R30 = 0x1;   // set pin HIGH" },
                        { text: "    __delay_cycles(1000);  // 5 μs" },
                        { text: "    __R30 = 0x0;   // set pin LOW" },
                        { text: "    __delay_cycles(1000);  // 5 μs" },
                        { text: "  }" },
                        { text: "}" },
                    ]}
                />
            );
        }
        if (stage === 5) {
            return (
                <ProtocolStack
                    active={active}
                    accent={accent}
                    layers={[
                        { name: "Fieldbus", role: "Deterministic on PRU", protocols: ["EtherCAT", "PROFINET"] },
                        { name: "Plant", role: "Modbus / OPC UA", protocols: ["Modbus", "OPC UA"] },
                        { name: "Telemetry", role: "Northbound", protocols: ["MQTT", "DDS"] },
                        { name: "RT side", role: "PRU firmware", protocols: ["PRU", "RPMsg"] },
                    ]}
                />
            );
        }
        if (stage === 6) {
            return <OtaTimeline active={active} accent={accent} />;
        }
        if (stage === 7) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="sdk/timing-analyze.py"
                    status="LA-VERIFIED"
                    code={[
                        { text: "# Compare measured vs promised deadlines" },
                        { text: "from soccentric import LogicTrace" },
                        { text: "" },
                        { text: "trace = LogicTrace.open('pwm_run.sr')" },
                        { text: "stats = trace.stats(channel='PRU_0')" },
                        { text: "" },
                        { text: "assert stats.jitter_us < 0.1" },
                        { text: "assert stats.min_period_us == 10.0" },
                        { text: "print(f'PRU_0 jitter: {stats.jitter_us} μs ✓')" },
                    ]}
                />
            );
        }
        if (stage === 8) {
            return (
                <StatStrip
                    active={active}
                    accent={accent}
                    label="CONTROL LOOP"
                    status="CYCLE-EXACT"
                    stats={[
                        { value: "100", unit: "kHz", label: "PWM" },
                        { value: "0", unit: "ns", label: "PRU jitter" },
                        { value: "10", unit: "μs", label: "Loop period" },
                    ]}
                />
            );
        }
        if (stage === 9) {
            return (
                <ManufacturingTimeline
                    active={active}
                    accent={accent}
                    steps={[
                        { day: "Day 1", label: "Schematic + spec" },
                        { day: "Week 2", label: "PRU firmware" },
                        { day: "Week 5", label: "EtherCAT certification" },
                        { day: "Week 8", label: "Line trial" },
                    ]}
                />
            );
        }
    }

    if (platform.id === "sequoia") {
        if (stage === 1) {
            return <SequoiaPcieLanes active={active} accent={accent} />;
        }
        if (stage === 2) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="lspci -tv (BSP output)"
                    status="TREE"
                    code={[
                        { text: "-[0000:00]-+-00.0  Intel Core i9-13900" },
                        { text: "             +-01.0-[01]----00.0  NVIDIA RTX A4000" },
                        { text: "             +-02.0-[02]----00.0  Intel X710 10GbE" },
                        { text: "             +-03.0-[03]----00.0  Samsung NVMe 990 PRO" },
                        { text: "             +-04.0-[04]----00.0  Intel ACC100 5G" },
                        { text: "             +-05.0-[05]----00.0  Custom capture" },
                        { text: "             +-06.0-[06]----00.0  Custom I/O" },
                    ]}
                />
            );
        }
        if (stage === 4) {
            return (
                <TerminalStatic
                    active={active}
                    accent={accent}
                    label="ISOLATED CORES"
                    status="DETERMINISTIC"
                    lines={[
                        "systemd: cpu-affinity 0-3 = housekeeping",
                        "systemd: cpu-affinity 4-15 = isolated (nohz_full)",
                        "isolcpus=4-15  rcu_nocbs=4-15  irqaffinity=0-3",
                        "PREEMPT_RT: 6.6.21-rt15-soccentric",
                        "ACRN: dom0 (Linux) + domU (RTOS) configured",
                        "SR-IOV: 8 VFs allocated to capture cards ✓",
                    ]}
                />
            );
        }
        if (stage === 5) {
            return (
                <ProtocolStack
                    active={active}
                    accent={accent}
                    layers={[
                        { name: "Containers", role: "Edge workload", protocols: ["Docker", "K3s"] },
                        { name: "Hypervisor", role: "Linux + RTOS", protocols: ["ACRN", "Xen"] },
                        { name: "Messaging", role: "High-throughput", protocols: ["DDS", "MQTT"] },
                        { name: "Legacy", role: "Industrial glue", protocols: ["OPC UA", "Modbus"] },
                    ]}
                />
            );
        }
        if (stage === 6) {
            return <OtaTimeline active={active} accent={accent} />;
        }
        if (stage === 7) {
            return (
                <CodeBlock
                    active={active}
                    accent={accent}
                    filename="diag/lights-out.sh"
                    status="REMOTE"
                    code={[
                        { text: "#!/usr/bin/env bash" },
                        { text: "# Lights-out edge diagnostics" },
                        { text: "set -euo pipefail" },
                        { text: "" },
                        { text: "soccentric-diag ping-bmc \"$1\"" },
                        { text: "soccentric-diag dump-uefi-journal --last 1h" },
                        { text: "soccentric-diag check-image-hash A,B" },
                        { text: "soccentric-diag collect-pcap --out /tmp" },
                        { text: "echo \"✓ diag bundle uploaded\"" },
                    ]}
                />
            );
        }
        if (stage === 8) {
            return (
                <BarChart
                    active={active}
                    accent={accent}
                    label="PCIe THROUGHPUT"
                    status="GEN4"
                    rows={[
                        { label: "NVMe seq read", value: 7400, unit: " MB/s" },
                        { label: "10GbE line rate", value: 9410, unit: " MB/s" },
                        { label: "GPU P2P", value: 25200, unit: " MB/s" },
                        { label: "Capture cards", value: 6800, unit: " MB/s" },
                    ]}
                />
            );
        }
        if (stage === 9) {
            return (
                <SpecSheet
                    active={active}
                    accent={accent}
                    label="BURN-IN"
                    status="PRODUCTION"
                    rows={[
                        { k: "Soak", v: "72h @ 55°C" },
                        { k: "Thermals", v: "Cycle -20 → 70°C" },
                        { k: "Vibration", v: "MIL-STD-810G" },
                        { k: "Power cycle", v: "1000× hot" },
                        { k: "Image hash", v: "Recorded per unit" },
                        { k: "Certificate", v: "Co-signed, returned" },
                    ]}
                />
            );
        }
    }

    // ── Generic fallbacks (per stage across all platforms) ──────────
    if (stage === 1) {
        return (
            <CapabilityGrid
                active={active}
                accent={accent}
                items={[
                    { name: "BSP", sub: "Bring-up" },
                    { name: "Boot", sub: "Multi-stage" },
                    { name: "Kernel", sub: "Custom" },
                    { name: "Drivers", sub: "From scratch" },
                    { name: "OTA", sub: "A/B signed" },
                    { name: "SDK", sub: "eSDK" },
                ]}
            />
        );
    }
    if (stage === 4) {
        return (
            <TerminalStatic
                active={active}
                accent={accent}
                label="DRIVER PROBE"
                status="BUILT-IN"
                lines={[
                    "loading soccentric-platform.ko ...",
                    "  matched: soccentric-carrier rev 1.2",
                    "  i2c-adapter: 3 busses enumerated",
                    "  spi-controller: 2 channels ready",
                    "  can-fd: can0, can1 up @ 5 Mbps",
                    "  net-eth0: link up 1 Gbps",
                    "✓ all subsystems healthy",
                ]}
            />
        );
    }
    if (stage === 5) {
        return (
            <ProtocolStack
                active={active}
                accent={accent}
                layers={[
                    { name: "Application", role: "Your domain", protocols: ["app", "ui"] },
                    { name: "Middleware", role: "Pub/sub", protocols: ["DDS", "MQTT"] },
                    { name: "Protocols", role: "Industrial", protocols: ["OPC UA", "Modbus"] },
                    { name: "Transport", role: "Telemetry", protocols: ["MQTT", "HTTPS"] },
                ]}
            />
        );
    }
    if (stage === 6) {
        return <OtaTimeline active={active} accent={accent} />;
    }
    if (stage === 7) {
        return (
            <CodeBlock
                active={active}
                accent={accent}
                filename="sdk/soccentric.h"
                status="HEADER"
                code={[
                    { text: "#include <soccentric/boot.h>" },
                    { text: "#include <soccentric/ota.h>" },
                    { text: "#include <soccentric/diag.h>" },
                    { text: "" },
                    { text: "int main(void) {" },
                    { text: "  scrc_boot_log(" },
                    { text: "    SCRC_STAGE_APP_READY," },
                    { text: "    \"ok\"" },
                    { text: "  );" },
                    { text: "  return 0;" },
                    { text: "}" },
                ]}
            />
        );
    }
    if (stage === 8) {
        return (
            <StatStrip
                active={active}
                accent={accent}
                label="PROFILED METRICS"
                status="RELEASED"
                stats={[
                    { value: "1.2", unit: "s", label: "Cold boot" },
                    { value: "98", unit: "%", label: "CPU efficiency" },
                    { value: "47", unit: "°C", label: "Steady temp" },
                ]}
            />
        );
    }
    if (stage === 9) {
        return (
            <ManufacturingTimeline
                active={active}
                accent={accent}
                steps={[
                    { day: "Day 1", label: "Spec freeze" },
                    { day: "Week 2", label: "BSP release" },
                    { day: "Week 4", label: "Golden image" },
                    { day: "Week 6", label: "Pilot run" },
                ]}
            />
        );
    }

    return null;
}
