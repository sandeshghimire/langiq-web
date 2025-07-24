export default function Drivers() {
    return (
        <div id="drivers" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom device drivers for AMD Xilinx Zynq platform peripherals using Yocto Project integration. Driver development covers communication interfaces (SPI, I2C, UART, Ethernet), video systems (MIPI, HDMI, cameras), sensors (IMU, temperature, ADC), GPIO control, USB connectivity, and specialized hardware including transceivers and motor controllers for embedded applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Communication Protocol Drivers</strong> - Custom SPI, I2C, UART, CAN, Ethernet MAC, 10G-T1, PCIe, TDM, WiFi, and Bluetooth drivers with interrupt handling and DMA support for high-performance data transfer</li>
                <li><strong>Video & Display Drivers</strong> - MIPI/CSI-2/DSI, GMSL2, HDMI, DisplayPort, and H.264/H.265 codec drivers integrated with Mali GPU and video processing pipelines</li>
                <li><strong>Sensor Interface Drivers</strong> - IMU, accelerometer, gyroscope, magnetometer, temperature, and ADC drivers with real-time data acquisition and calibration algorithms</li>
                <li><strong>GPIO & Pin Management</strong> - MIO/EMIO GPIO drivers supporting dynamic pin multiplexing, interrupt handling, and FPGA fabric interfacing through extended GPIO</li>
                <li><strong>High-Speed Transceiver Drivers</strong> - GTH/GTP SerDes drivers for 6.25-28 Gb/s transceivers supporting PCIe, SATA, and custom high-speed protocols</li>
                <li><strong>System Monitor & Power Drivers</strong> - On-chip ADC drivers for voltage/temperature monitoring, power management integration, and system health diagnostics via PMBus/I2C interfaces</li>
            </ul>
        </div>
    );
}
