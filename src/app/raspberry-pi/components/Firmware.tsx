export default function Firmware() {
    return (
        <div id="firmware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Firmware Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers comprehensive firmware solutions for Raspberry Pi Pico and Pico 2 microcontrollers, specializing in MicroPython, C/C++ SDK development, and real-time embedded applications for IoT and automation projects.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>MicroPython Development</strong> - Design and implement MicroPython-based firmware for rapid prototyping and development on Raspberry Pi Pico and Pico 2, leveraging the ease of Python for IoT applications.</li>
                <li><strong>C/C++ SDK Programming</strong> - Develop optimized firmware using the official Pico SDK with C/C++ for performance-critical applications requiring direct hardware control and minimal overhead.</li>
                <li><strong>Dual-Core Programming</strong> - Utilize both ARM Cortex-M0+ cores on Raspberry Pi Pico 2 for parallel processing, implementing efficient task distribution and inter-core communication using FIFOs and spinlocks.</li>
                <li><strong>PIO (Programmable I/O) Programming</strong> - Create custom protocols and interfaces using the powerful PIO state machines for bit-banging, custom serial protocols, and precise timing control.</li>
                <li><strong>Real-Time Applications</strong> - Develop time-sensitive firmware for sensor data acquisition, motor control, and automation systems with microsecond-level precision using hardware timers and interrupts.</li>
                <li><strong>IoT Connectivity</strong> - Implement wireless communication protocols including WiFi, Bluetooth, and LoRa integration for connected device applications and remote monitoring systems.</li>
            </ul>
        </div>
    );
}
