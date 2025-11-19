export default function StrategyPlanning() {
    return (
        <div id="strategy-planning" className="p-8 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers complete NXP i.MX hardware ecosystems from custom SoC/SOM designs to integrated components and thermal-optimized enclosures for mission-critical applications. Our open-source hardware reference designs are available on GitHub at <a href="https://github.com/Soccentric/Pinnacles-Hardware" className="text-blue-600 hover:underline">https://github.com/Soccentric/Pinnacles-Hardware</a>.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>AI/ML Processing</strong> - Efficient neural network inference with Arm Ethos-U65 microNPU for edge ML applications.</li>
                <li><strong>Audio Processing</strong> - Advanced audio capture and processing with multiple I2S/TDM interfaces and PDM microphones.</li>
                <li><strong>Video Processing</strong> - Hardware-accelerated video encoding/decoding with MIPI CSI/DSI and LVDS interfaces.</li>
                <li><strong>Real-Time Control</strong> - Dual-core Cortex-M33 for deterministic real-time tasks and industrial automation.</li>
                <li><strong>Industrial Communication</strong> - TSN-enabled Gigabit Ethernet, CAN FD, and I3C interfaces for Industry 4.0 applications.</li>
                <li><strong>Sensor Fusion</strong> - Rich sensor interfaces including ADC, I2C/SPI/UART for IoT and automation systems.</li>
                <li><strong>Low Power Operation</strong> - Optimized power management for battery-powered and energy-constrained devices.</li>
                <li><strong>Secure Computing</strong> - EdgeLock secure enclave with hardware-based security and secure boot capabilities.</li>
                <li><strong>Open-Source Designs</strong> - Complete i.MX schematics, BOM, power management circuits, and EMI/EMC design guidelines available on GitHub.</li>
            </ul>
        </div>
    );
}
