export default function Hardware() {
    return (
        <div id="hardware" className="p-8 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers complete Raspberry Pi CM4/CM5 hardware ecosystems from custom carrier board designs to integrated components and thermal-optimized enclosures for mission-critical applications. Our open-source hardware reference designs are available on GitHub at <a href="https://github.com/Soccentric/Acadia-Hardware" className="text-blue-600 hover:underline">https://github.com/Soccentric/Acadia-Hardware</a>.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Video Processing</strong> - Hardware-accelerated 4Kp60 HEVC/H.264 decoding and encoding with dual HDMI 2.0 ports.</li>
                <li><strong>Graphics</strong> - Advanced 3D graphics with OpenGL ES 3.1 and Vulkan 1.3 support for multimedia applications.</li>
                <li><strong>Real-Time Processing</strong> - Low-latency GPIO and peripheral control with up to 30 GPIO pins for embedded systems.</li>
                <li><strong>Industrial Automation</strong> - Robust operation in harsh environments with extended temperature ranges (-40°C to +85°C).</li>
                <li><strong>Edge Computing</strong> - Efficient processing for IoT and embedded applications with PCIe Gen 2 expansion.</li>
                <li><strong>Multimedia</strong> - Support for high-resolution displays and dual 4-lane MIPI CSI-2 camera inputs.</li>
                <li><strong>Networking</strong> - Gigabit Ethernet with IEEE 1588 PTP support for synchronized industrial systems.</li>
                <li><strong>Wireless Connectivity</strong> - Integrated 2.4/5.0 GHz Wi-Fi and Bluetooth 5.0 for IoT and smart device applications.</li>
                <li><strong>Open-Source Designs</strong> - Complete schematics, BOM, PCB layout files, and assembly guides available on GitHub.</li>
            </ul>
        </div>
    );
}
