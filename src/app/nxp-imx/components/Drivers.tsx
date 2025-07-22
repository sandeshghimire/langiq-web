export default function Drivers() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom device drivers for NXP i.MX platform peripherals using Yocto Project integration. Driver development covers communication interfaces (SPI, I2C, UART, Ethernet), video systems (MIPI, HDMI, cameras), sensors (IMU, temperature, ADC), GPIO control, USB connectivity, and specialized hardware including CAN controllers and security modules for embedded applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Communication Protocol Drivers</strong> - Custom SPI, I2C, UART, CAN-FD, and Ethernet MAC drivers with interrupt handling and DMA support for high-performance data transfer</li>
                <li><strong>Video & Display Drivers</strong> - MIPI CSI-2/DSI, HDMI, LVDS, and H.264/H.265 VPU drivers integrated with Vivante GPU and video processing pipelines</li>
                <li><strong>Sensor Interface Drivers</strong> - IMU, accelerometer, gyroscope, magnetometer, temperature, and ADC drivers with real-time data acquisition and calibration algorithms</li>
                <li><strong>GPIO & Pin Management</strong> - IOMUX GPIO drivers supporting dynamic pin multiplexing, interrupt handling, and advanced GPIO features with pad control</li>
                <li><strong>Security Module Drivers</strong> - CAAM (Cryptographic Acceleration and Assurance Module) drivers for hardware encryption, secure key storage, and TrustZone integration</li>
                <li><strong>System Monitor & Power Drivers</strong> - PMIC drivers for power management, thermal monitoring, battery management, and low-power mode transitions via I2C/SPI interfaces</li>
            </ul>
        </div>
    );
}
