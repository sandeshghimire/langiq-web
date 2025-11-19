export default function Hardware() {
    return (
        <div id="hardware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers complete AMD Xilinx Zynq hardware ecosystems from custom SoC/SOM designs to integrated components and thermal-optimized enclosures for mission-critical applications. Our open-source hardware reference designs are available on GitHub at <a href="https://github.com/Soccentric/Zion-Hardware" className="text-blue-600 hover:underline">https://github.com/Soccentric/Zion-Hardware</a>.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Hardware Acceleration</strong> - FPGA fabric for custom logic and DSP operations enabling high-performance programmable computing.</li>
                <li><strong>AI/ML Processing</strong> - Dedicated DPU and programmable logic for neural network inference and machine learning acceleration.</li>
                <li><strong>Video Processing</strong> - Hardware codecs for real-time video analytics, encoding/decoding with 4K60 HEVC/H.264 support.</li>
                <li><strong>High-Performance Computing</strong> - Parallel processing architecture combining CPU + FPGA for demanding embedded applications.</li>
                <li><strong>Real-Time Systems</strong> - Dual-core R5F processors for deterministic control tasks and real-time operations.</li>
                <li><strong>Signal Processing</strong> - Extensive DSP resources for advanced audio/video processing and custom algorithms.</li>
                <li><strong>Custom Interfaces</strong> - Programmable I/O with PCIe, Ethernet, USB 3.0, and high-speed transceivers for specialized connectivity.</li>
                <li><strong>Security Features</strong> - Hardware-based encryption, secure boot, and TrustZone integration for trusted execution.</li>
                <li><strong>Open-Source Designs</strong> - Complete Zynq schematics, FPGA IP cores, Vivado projects, and software drivers available on GitHub.</li>
            </ul>
        </div>
    );
}
