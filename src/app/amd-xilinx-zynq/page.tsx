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
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>FPGA designs with Verilog/VHDL source code and IP cores</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Vivado/Vitis project files and build scripts</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>PetaLinux/Yocto configurations for Zynq platforms</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Custom device drivers for FPGA-PS interfaces</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>RPU firmware examples for real-time processing</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Complete system-on-chip application examples</li>
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

            {/* Source Code Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 animate-fadeInUp stagger-1">
                <p className="text-blue-800 text-sm leading-relaxed">
                    <strong>Note:</strong> All the project descriptions below have source code available on GitHub. The source code designs are copyrighted to sandesh@soccentric.com however you may use them on commercial and non-commercial projects as needed without author's credits.
                </p>
            </div>

            {/* Single Column Layout for Content */}
            <div className="space-y-6">

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-2 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Design Projects</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Based on Zynq architecture, we've developed several hardware projects including custom carrier boards, expansion modules, and specialized interfaces. These designs leverage the ZUBOARD ICZ reference while optimizing for specific application requirements.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Projects:</strong></p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Custom Zynq carrier boards for industrial automation</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>High-speed interface modules (PCIe, Ethernet, USB 3.0)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Camera and sensor integration boards</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Power-optimized designs for edge computing</span>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Zion-Hardware" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-3 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">RTL & FPGA Design</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed comprehensive RTL FPGA designs for Zynq programmable logic fabric, implementing custom IP cores, high-speed interfaces, and domain-specific accelerators.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>FPGA Projects Include:</strong></p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Custom IP cores for industrial protocols (EtherCAT, PROFINET)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>High-speed data acquisition and processing pipelines</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Real-time image processing and computer vision accelerators</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Custom interfaces for specialized sensors and actuators</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>DSP cores for signal processing applications</span>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Zion-FPGA" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-4 hover-lift relative">
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
                    <a href="https://github.com/Soccentric/Zion-Yocto" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-5 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed comprehensive device drivers for Zynq peripherals, custom hardware interfaces, and specialized devices across various application domains.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>High-speed interface drivers (PCIe, USB 3.0, Gigabit Ethernet)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Industrial protocol drivers (CAN, EtherCAT, Modbus)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Sensor and actuator drivers (cameras, motors, encoders)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Custom FPGA IP core drivers</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Real-time I/O drivers with DMA support</span>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Zion-Drivers" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">RPU-Based Firmware</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Implemented Real-Time Processing Unit (RPU) firmware for critical real-time tasks, safety systems, and low-latency processing requirements.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>RPU Applications:</strong></p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Motor control and servo systems</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Real-time data acquisition and processing</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Safety-critical system monitoring</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Industrial automation controllers</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>High-speed communication protocols</span>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Zion-RPU" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Zynq Applications</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed complete applications leveraging Zynq's heterogeneous architecture, combining ARM processing with FPGA acceleration for optimal performance.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span><strong>Industrial Automation:</strong> PLC controllers, SCADA systems, and process control</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span><strong>Medical Imaging:</strong> Real-time image processing and diagnostic systems</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span><strong>Automotive:</strong> ADAS processing, infotainment systems, and vehicle control</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span><strong>Communications:</strong> Software-defined radio and network processing</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span><strong>Scientific Research:</strong> Data acquisition and real-time analysis systems</span>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Zion-Applications" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
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


