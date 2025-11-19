export default function NXPiMX() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            {/* Two Column Layout for Title and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">NXP i.MX Reference Design</h1>

                    <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1 text-sm md:text-base">
                        With over a decade of experience developing with NXP i.MX application processors, I've delivered comprehensive embedded solutions across the i.MX family from i.MX6 to i.MX9 series. This page showcases practical implementations in industrial automation, IoT gateways, and edge computing applications. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>

                    <div className="text-gray-700 animate-fadeInUp stagger-1">
                        <p className="font-semibold mb-2">What's Offered:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial-grade carrier board designs and schematics</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Yocto meta-layers for custom Linux distributions</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>BSP packages with U-Boot and kernel configurations</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial protocol drivers (EtherCAT, PROFINET, CAN)</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Middleware integration examples (OPC UA, MQTT, Modbus)</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>HMI and control application reference implementations</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/FRDM-i.MX93-TOP.png"
                        alt="NXP i.MX Platform"
                        className="max-w-sm md:max-w-md h-auto rounded-lg shadow-lg animate-fadeIn stagger-2 hover-lift"
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
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Design & Integration</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Soccentric provides complete NXP i.MX hardware ecosystems including custom carrier board designs, power management systems, and peripheral integration for industrial and IoT applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Capabilities:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial Automation - PLC-like controllers with real-time capabilities</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>IoT Gateways - Edge computing with cloud connectivity and protocol translation</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Human-Machine Interface - Touch displays and industrial control panels</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Medical Devices - FDA-compliant embedded systems with safety certifications</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Automotive - In-vehicle infotainment and telematics systems</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Smart Energy - Metering systems and grid management solutions</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Security Systems - Access control and surveillance with encryption</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Communications - Network appliances and protocol converters</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Custom Designs - Application-specific hardware with optimized BOM</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pinnacle-Hardware" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-3 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Embedded Linux & Yocto</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Custom embedded Linux distributions using Yocto Project optimized for NXP i.MX processors, with specialized builds for industrial, medical, and automotive applications.
                    </p>
                    <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2"><strong>Specialized Builds:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>Industrial Control:</strong> Real-time kernel patches and deterministic scheduling</li>
                                <li><strong>Medical Systems:</strong> Safety-critical software with regulatory compliance</li>
                                <li><strong>Automotive:</strong> AUTOSAR integration and vehicle network protocols</li>
                                <li><strong>IoT Gateway:</strong> Edge processing and cloud connectivity frameworks</li>
                                <li><strong>Multimedia:</strong> Audio/video processing and display optimization</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2"><strong>Customization Capabilities:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Device tree configuration for custom hardware interfaces</li>
                                <li>Kernel optimization for specific application requirements</li>
                                <li>Package selection and customization for domain-specific needs</li>
                                <li>Security hardening and secure boot implementation</li>
                            </ul>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Pinnacle-Yocto" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-4 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers & BSP</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Complete Board Support Package (BSP) development and custom device drivers for NXP i.MX peripherals, industrial interfaces, and specialized hardware components.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial Interfaces - CAN, EtherCAT, PROFINET with real-time performance</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Communication Protocols - Ethernet, USB, PCIe with high-speed data transfer</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor Integration - Analog/digital I/O, ADC/DAC with industrial accuracy</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Display Controllers - LCD, TFT, and touch interfaces for HMI applications</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Storage Systems - NAND Flash, eMMC, SD with wear leveling and security</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Security Modules - TPM, secure element integration for trusted computing</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pinnacle-Drivers" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-5 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware & Frameworks</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Integration of middleware frameworks and communication stacks optimized for NXP i.MX processors in industrial and IoT applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Middleware Stack:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>OPC UA - Industrial communication protocol for factory automation</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>MQTT - Lightweight messaging for IoT and cloud connectivity</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>DDS - Data Distribution Service for real-time systems</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Modbus - Industrial protocol for PLC and SCADA systems</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>PROFIBUS/PROFINET - Fieldbus protocols for industrial networks</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>EtherCAT - High-performance industrial Ethernet</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>TSN - Time-Sensitive Networking for deterministic communication</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pinnacle-Middleware" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Application Development</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        End-to-end application development for NXP i.MX platforms, from embedded controllers to complex industrial and medical systems.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Industrial Automation:</strong> PLC controllers, HMI systems, and SCADA interfaces</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Medical Devices:</strong> Patient monitoring, diagnostic equipment, and infusion systems</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Transportation:</strong> Vehicle telematics, fleet management, and infotainment</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Smart Grid:</strong> Energy metering, grid monitoring, and demand response</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Building Automation:</strong> HVAC control, access systems, and energy management</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Retail:</strong> POS systems, inventory management, and customer displays</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pinnacle-Applications" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

            </div>

            {/* Footer Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fadeInUp stagger-6">
                <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> All repositories contain complete documentation, build instructions, and practical examples. Our i.MX implementations demonstrate real-world embedded development across industrial, medical, and automotive domains.
                </p>
            </div>
        </div>
    );
}


