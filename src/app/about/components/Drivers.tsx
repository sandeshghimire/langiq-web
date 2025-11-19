export default function Drivers() {
    return (
        <div id="drivers" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric provides comprehensive device driver development for embedded systems, ensuring proper hardware-software integration across various platforms. Our driver development covers kernel-mode and user-space drivers, hardware abstraction layers, and performance optimization. We develop drivers for communication interfaces, sensors, displays, storage devices, and specialized hardware components.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Communication Protocol Drivers</strong> - UART, SPI, I2C, CAN, Ethernet, USB, and wireless protocol implementations with interrupt and DMA support.</li>
                <li><strong>Sensor Drivers</strong> - Interface drivers for various sensors including IMU, GPS, temperature, pressure, and environmental sensors.</li>
                <li><strong>Display & Graphics Drivers</strong> - LCD, OLED, and touchscreen drivers with graphics acceleration and multi-display support.</li>
                <li><strong>Storage Drivers</strong> - NAND flash, eMMC, SD card, and external storage device drivers with wear leveling and error correction.</li>
                <li><strong>Network Drivers</strong> - Ethernet, WiFi, Bluetooth, and cellular modem drivers with security and performance optimizations.</li>
                <li><strong>Real-Time Drivers</strong> - Low-latency drivers for time-critical applications with deterministic behavior.</li>
                <li><strong>Hardware Abstraction</strong> - Platform-independent driver frameworks and board support package development.</li>
            </ul>
        </div>
    );
}
