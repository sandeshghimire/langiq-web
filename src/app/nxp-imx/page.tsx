export default function NXPiMX() {
    return (
        <div className="px-6 py-6 md:px-8 md:py-8 border-t border-gray-200">
            {/* Two Column Layout for Title and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">NXP i.MX Reference Design</h1>

                    <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1">
                        With over a decade of experience developing with NXP i.MX application processors, I've delivered comprehensive embedded solutions across the i.MX family from i.MX6 to i.MX9 series. This page showcases practical implementations in industrial automation, IoT gateways, and edge computing applications. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>
                    
                    <div className="text-gray-700 animate-fadeInUp stagger-1">
                        <p className="font-semibold mb-2">What's Offered:</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Industrial-grade carrier board designs and schematics</li>
                            <li>Yocto meta-layers for custom Linux distributions</li>
                            <li>BSP packages with U-Boot and kernel configurations</li>
                            <li>Industrial protocol drivers (EtherCAT, PROFINET, CAN)</li>
                            <li>Middleware integration examples (OPC UA, MQTT, Modbus)</li>
                            <li>HMI and control application reference implementations</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/FRDM-i.MX93-TOP.png"
                        alt="NXP i.MX Platform"
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
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Design & Integration</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Soccentric provides complete NXP i.MX hardware ecosystems including custom carrier board designs, power management systems, and peripheral integration for industrial and IoT applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Capabilities:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Industrial Automation - PLC-like controllers with real-time capabilities</li>
                            <li>IoT Gateways - Edge computing with cloud connectivity and protocol translation</li>
                            <li>Human-Machine Interface - Touch displays and industrial control panels</li>
                            <li>Medical Devices - FDA-compliant embedded systems with safety certifications</li>
                            <li>Automotive - In-vehicle infotainment and telematics systems</li>
                            <li>Smart Energy - Metering systems and grid management solutions</li>
                            <li>Security Systems - Access control and surveillance with encryption</li>
                            <li>Communications - Network appliances and protocol converters</li>
                            <li>Custom Designs - Application-specific hardware with optimized BOM</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Pinnacle-Hardware" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Pinnacle-Hardware Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-3 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Embedded Linux & Yocto</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Custom embedded Linux distributions using Yocto Project optimized for NXP i.MX processors, with specialized builds for industrial, medical, and automotive applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Specialized Builds:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Industrial Control:</strong> Real-time kernel patches and deterministic scheduling</li>
                            <li><strong>Medical Systems:</strong> Safety-critical software with regulatory compliance</li>
                            <li><strong>Automotive:</strong> AUTOSAR integration and vehicle network protocols</li>
                            <li><strong>IoT Gateway:</strong> Edge processing and cloud connectivity frameworks</li>
                            <li><strong>Multimedia:</strong> Audio/video processing and display optimization</li>
                        </ul>
                        <p className="mt-3"><strong>Customization Capabilities:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Device tree configuration for custom hardware interfaces</li>
                            <li>Kernel optimization for specific application requirements</li>
                            <li>Package selection and customization for domain-specific needs</li>
                            <li>Security hardening and secure boot implementation</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Pinnacle-Yocto" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Pinnacle-Yocto Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-4 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers & BSP</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Complete Board Support Package (BSP) development and custom device drivers for NXP i.MX peripherals, industrial interfaces, and specialized hardware components.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Industrial Interfaces - CAN, EtherCAT, PROFINET with real-time performance</li>
                            <li>Communication Protocols - Ethernet, USB, PCIe with high-speed data transfer</li>
                            <li>Sensor Integration - Analog/digital I/O, ADC/DAC with industrial accuracy</li>
                            <li>Display Controllers - LCD, TFT, and touch interfaces for HMI applications</li>
                            <li>Storage Systems - NAND Flash, eMMC, SD with wear leveling and security</li>
                            <li>Security Modules - TPM, secure element integration for trusted computing</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Pinnacle-Drivers" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Pinnacle-Drivers Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-5 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware & Frameworks</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Integration of middleware frameworks and communication stacks optimized for NXP i.MX processors in industrial and IoT applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Middleware Stack:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>OPC UA - Industrial communication protocol for factory automation</li>
                            <li>MQTT - Lightweight messaging for IoT and cloud connectivity</li>
                            <li>DDS - Data Distribution Service for real-time systems</li>
                            <li>Modbus - Industrial protocol for PLC and SCADA systems</li>
                            <li>PROFIBUS/PROFINET - Fieldbus protocols for industrial networks</li>
                            <li>EtherCAT - High-performance industrial Ethernet</li>
                            <li>TSN - Time-Sensitive Networking for deterministic communication</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Pinnacle-Middleware" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Pinnacle-Middleware Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Application Development</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        End-to-end application development for NXP i.MX platforms, from embedded controllers to complex industrial and medical systems.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Industrial Automation:</strong> PLC controllers, HMI systems, and SCADA interfaces</li>
                            <li><strong>Medical Devices:</strong> Patient monitoring, diagnostic equipment, and infusion systems</li>
                            <li><strong>Transportation:</strong> Vehicle telematics, fleet management, and infotainment</li>
                            <li><strong>Smart Grid:</strong> Energy metering, grid monitoring, and demand response</li>
                            <li><strong>Building Automation:</strong> HVAC control, access systems, and energy management</li>
                            <li><strong>Retail:</strong> POS systems, inventory management, and customer displays</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Pinnacle-Applications" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Pinnacle-Applications Repository</a></p>
                    </div>
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


