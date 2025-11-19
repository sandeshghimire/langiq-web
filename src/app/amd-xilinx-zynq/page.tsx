export default function AMDZynq() {
    return (
        <div className="px-6 py-6 md:px-8 md:py-8 border-t border-gray-200">
            {/* Two Column Layout for Title and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">AMD Xilinx Zynq Reference Design</h1>

                    <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1">
                        Over the past decade, I've developed extensive expertise with AMD Xilinx Zynq platforms, using the ZUBOARD ICZ as a reference design foundation. This page showcases practical implementations across the entire Zynq ecosystem, from hardware design to application development. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>
                    
                    <div className="text-gray-700 animate-fadeInUp stagger-1">
                        <p className="font-semibold mb-2">What's Offered:</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>FPGA designs with Verilog/VHDL source code and IP cores</li>
                            <li>Vivado/Vitis project files and build scripts</li>
                            <li>PetaLinux/Yocto configurations for Zynq platforms</li>
                            <li>Custom device drivers for FPGA-PS interfaces</li>
                            <li>RPU firmware examples for real-time processing</li>
                            <li>Complete system-on-chip application examples</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/zuboard.png"
                        alt="ZUBOARD ICZ Reference Design"
                        className="max-w-md h-auto rounded-lg shadow-lg animate-fadeIn stagger-2 hover-lift"
                        style={{
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                            WebkitMaskComposite: 'source-in'
                        }}
                    />
                </div>
            </div>

            {/* Single Column Layout for Content */}
            <div className="space-y-6">

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-2 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Design Projects</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Based on Zynq architecture, we've developed several hardware projects including custom carrier boards, expansion modules, and specialized interfaces. These designs leverage the ZUBOARD ICZ reference while optimizing for specific application requirements.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Projects:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Custom Zynq carrier boards for industrial automation</li>
                            <li>High-speed interface modules (PCIe, Ethernet, USB 3.0)</li>
                            <li>Camera and sensor integration boards</li>
                            <li>Power-optimized designs for edge computing</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Zion-Hardware" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Zion-Hardware Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-3 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">RTL & FPGA Design</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed comprehensive RTL FPGA designs for Zynq programmable logic fabric, implementing custom IP cores, high-speed interfaces, and domain-specific accelerators.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>FPGA Projects Include:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Custom IP cores for industrial protocols (EtherCAT, PROFINET)</li>
                            <li>High-speed data acquisition and processing pipelines</li>
                            <li>Real-time image processing and computer vision accelerators</li>
                            <li>Custom interfaces for specialized sensors and actuators</li>
                            <li>DSP cores for signal processing applications</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Zion-FPGA" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Zion-FPGA Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-4 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Yocto-Based Embedded Linux</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Created domain-specific Yocto builds optimized for various applications, with full customization capabilities for device tree, U-Boot, and kernel configurations.
                    </p>
                    <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2"><strong>Specialized Builds:</strong></p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li><strong>ROS Integration:</strong> Robotics frameworks with real-time kernel patches</li>
                                <li><strong>Rust Runtime:</strong> Memory-safe embedded applications</li>
                                <li><strong>IoT Gateway:</strong> Cloud connectivity and edge processing</li>
                                <li><strong>DDS Middleware:</strong> Real-time data distribution systems</li>
                                <li><strong>Medical Devices:</strong> Regulatory-compliant embedded systems</li>
                                <li><strong>Automotive:</strong> AUTOSAR-compatible software stacks</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2"><strong>Customization Capabilities:</strong></p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Device tree overlays for custom hardware</li>
                                <li>U-Boot configuration and secure boot</li>
                                <li>Kernel optimization and real-time patches</li>
                                <li>Package customization and dependency management</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Zion-Yocto" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Zion-Yocto Repository</a></p>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-5 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed comprehensive device drivers for Zynq peripherals, custom hardware interfaces, and specialized devices across various application domains.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>High-speed interface drivers (PCIe, USB 3.0, Gigabit Ethernet)</li>
                            <li>Industrial protocol drivers (CAN, EtherCAT, Modbus)</li>
                            <li>Sensor and actuator drivers (cameras, motors, encoders)</li>
                            <li>Custom FPGA IP core drivers</li>
                            <li>Real-time I/O drivers with DMA support</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Zion-Drivers" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Zion-Drivers Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">RPU-Based Firmware</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Implemented Real-Time Processing Unit (RPU) firmware for critical real-time tasks, safety systems, and low-latency processing requirements.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>RPU Applications:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Motor control and servo systems</li>
                            <li>Real-time data acquisition and processing</li>
                            <li>Safety-critical system monitoring</li>
                            <li>Industrial automation controllers</li>
                            <li>High-speed communication protocols</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Zion-RPU" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Zion-RPU Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Zynq Applications</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed complete applications leveraging Zynq's heterogeneous architecture, combining ARM processing with FPGA acceleration for optimal performance.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Industrial Automation:</strong> PLC controllers, SCADA systems, and process control</li>
                            <li><strong>Medical Imaging:</strong> Real-time image processing and diagnostic systems</li>
                            <li><strong>Automotive:</strong> ADAS processing, infotainment systems, and vehicle control</li>
                            <li><strong>Communications:</strong> Software-defined radio and network processing</li>
                            <li><strong>Scientific Research:</strong> Data acquisition and real-time analysis systems</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Zion-Applications" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Zion-Applications Repository</a></p>
                    </div>
                </section>

            </div>

            {/* Footer Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fadeInUp stagger-6">
                <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> All repositories contain complete documentation, build instructions, and practical examples. The ZUBOARD ICZ reference design serves as the foundation for these implementations, demonstrating real-world Zynq development across multiple domains and applications.
                </p>
            </div>
        </div>
    );
}


