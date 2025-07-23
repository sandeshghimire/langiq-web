export default function Drivers() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom device drivers for Raspberry Pi CM4/CM5 platform peripherals using Buildroot and Yocto Project integration. Driver development leverages CM4's dual MIPI interfaces and PCIe Gen 2, while CM5 adds dual HDMI 2.1 outputs, PCIe 2.0 dual-lane support, and enhanced AI/ML acceleration. Our expertise covers comprehensive peripheral integration including display systems, camera interfaces, connectivity protocols, GPIO management, and specialized hardware acceleration for industrial embedded applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Display & Camera Drivers</strong> - Dual MIPI DSI display drivers, dual MIPI CSI camera interfaces, HDMI 2.0 (CM4) and dual HDMI 2.1 4K@60Hz (CM5) output optimization, V4L2 integration with hardware video encode/decode acceleration via GPU</li>
                <li><strong>Connectivity Protocol Drivers</strong> - Gigabit Ethernet MAC drivers, Wi-Fi 802.11ac dual-band and Bluetooth 5.0 integration, PCIe Gen 2 single-lane (CM4) and PCIe 2.0 dual-lane (CM5) device drivers with DMA support for high-performance data transfer</li>
                <li><strong>GPIO & Interface Drivers</strong> - 40-pin GPIO header equivalent drivers with up to 6x UART, 6x SPI, 6x I2C interfaces, up to 28x PWM channels, I2S audio interface drivers supporting dynamic pin assignment and interrupt handling</li>
                <li><strong>USB & Storage Drivers</strong> - USB 2.0 host/device controller (CM4), USB 3.0/2.0 controllers (CM5), eMMC storage interface drivers, SD card interface integration via carrier board with optimized data transfer protocols</li>
                <li><strong>AI/ML & Hardware Acceleration</strong> - CM5 enhanced AI/ML acceleration drivers, hardware video encode/decode optimization, GPU integration for computational workloads, and specialized hardware accelerator drivers via PCIe interfaces</li>
                <li><strong>Power & Thermal Management</strong> - Enhanced power management drivers (CM5), thermal throttling optimization, battery management integration, and real-time monitoring via I2C interfaces for optimal CM4/CM5 performance and reliability</li>
            </ul>
        </div>
    );
}
