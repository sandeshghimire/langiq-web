export default function Drivers() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom device drivers for NXP i.MX platform peripherals using Yocto Project integration. Driver development covers communication interfaces (SPI, I2C, UART, Ethernet), video systems (MIPI, HDMI, cameras), sensors (IMU, temperature, ADC), GPIO control, USB connectivity, and specialized hardware including CAN controllers and security modules for embedded applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Communication Interface Drivers</strong> - UART (multiple instances), SPI/I2C controllers, FlexCAN, Ethernet MAC (10/100/1000 Mbps), USB 2.0/3.0 OTG, PCIe controllers, and FlexSPI with interrupt handling and DMA support</li>
                <li><strong>Audio/Video Peripheral Drivers</strong> - SAI, SPDIF, HDMI, MIPI CSI-2/DSI, LVDS, parallel LCD controller, Vivante GPU, and H.264/H.265 VPU drivers with video processing pipelines</li>
                <li><strong>Memory Controller Drivers</strong> - DDR3/DDR4/LPDDR4 controllers, NAND Flash, eMMC/SD/SDIO, and QSPI controllers for serial NOR flash with optimized data transfer protocols</li>
                <li><strong>Timing & Control Drivers</strong> - GPT, PWM, FlexTimer, Watchdog Timer, and RTC drivers supporting precise timing control and real-time operations</li>
                <li><strong>Analog Interface Drivers</strong> - 12-bit SAR ADC, DAC, and Touch Screen Controller drivers with real-time data acquisition and calibration algorithms</li>
                <li><strong>Security & Crypto Module Drivers</strong> - CAAM, SNVS, CSU, and HAB drivers for hardware encryption, secure key storage, high assurance boot, and TrustZone integration</li>
                <li><strong>GPIO & Power Management Drivers</strong> - IOMUX GPIO with dynamic pin multiplexing, PMU, GPC, and CCM drivers for power management, thermal monitoring, and low-power mode transitions</li>
                <li><strong>Specialized Peripheral Drivers</strong> - ENET QOS, ASRC for audio processing, and MLB drivers for automotive applications with advanced feature integration</li>
            </ul>
        </div>
    );
}
