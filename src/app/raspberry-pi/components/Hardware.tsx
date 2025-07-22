export default function Hardware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers complete Raspberry Pi CM4/CM5 hardware ecosystems from custom carrier board designs to integrated components and thermal-optimized enclosures for mission-critical applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Custom Carrier Board Design</strong> - Develop tailored carrier boards based on Raspberry Pi CM4/CM5 specifications for specific application requirements with optimized power delivery and signal routing.</li>
                <li><strong>Component Integration</strong> - Seamlessly integrate IMUs, displays, cameras, sensors, and high-speed ADC/DAC systems into cohesive hardware solutions utilizing CM4/CM5 GPIO, I2C, SPI, and USB interfaces.</li>
                <li><strong>PCIe Expansion Systems</strong> - Design and implement PCIe Gen 2 expansion solutions for CM4/CM5 enabling integration of high-performance peripherals, NVMe storage, and custom accelerator cards.</li>
                <li><strong>Camera & Display Solutions</strong> - Integrate multiple MIPI CSI cameras (up to 2x on CM4/CM5) and DSI displays with custom lens assemblies and image processing pipelines for computer vision applications.</li>
                <li><strong>Industrial I/O Interfaces</strong> - Engineer robust industrial interfaces including CAN bus, RS485, Modbus, and isolated digital I/O with protection circuits suitable for harsh environments.</li>
                <li><strong>Thermal Management</strong> - Implement both active and passive cooling solutions optimized for CM4/CM5 thermal characteristics to ensure optimal performance and reliability under demanding operational conditions.</li>
            </ul>
        </div>
    );
}
