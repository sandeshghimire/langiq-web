export default function Drivers() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom device drivers for Raspberry Pi CM4/CM5 platform peripherals using Buildroot and Yocto Project integration. Driver development covers communication interfaces (SPI, I2C, UART, Ethernet), video systems (MIPI CSI, HDMI, cameras), sensors (IMU, temperature, ADC), GPIO control, USB connectivity, and specialized hardware including CAN controllers and industrial I/O modules for embedded applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Communication Protocol Drivers</strong> - Custom SPI, I2C, UART, CAN (via MCP2515/SJA1000), and Gigabit Ethernet drivers with interrupt handling and DMA support for high-performance data transfer</li>
                <li><strong>Camera & Display Drivers</strong> - MIPI CSI-2 camera drivers, HDMI output optimization, DSI display drivers, and V4L2 integration with hardware-accelerated encoding/decoding via GPU</li>
                <li><strong>Sensor Interface Drivers</strong> - IMU, accelerometer, gyroscope, magnetometer, temperature sensors, and external ADC drivers with real-time data acquisition through I2C/SPI interfaces</li>
                <li><strong>GPIO & Pin Management</strong> - Advanced GPIO drivers supporting dynamic pin function assignment, interrupt handling, and integration with HAT EEPROM identification for automatic configuration</li>
                <li><strong>PCIe Device Drivers</strong> - Custom drivers for PCIe expansion cards including NVMe storage controllers, network adapters, and specialized hardware accelerators via CM4/CM5 PCIe Gen 2 interface</li>
                <li><strong>USB & Power Management</strong> - USB host/OTG drivers, power monitoring via INA219, battery management integration, and thermal throttling drivers for optimal CM4/CM5 performance management</li>
            </ul>
        </div>
    );
}
