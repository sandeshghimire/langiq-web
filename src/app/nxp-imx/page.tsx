import HeaderSection from './components/HeaderSection';
import SourceCodeNotice from './components/SourceCodeNotice';
import ProjectSection from './components/ProjectSection';
import FooterNote from './components/FooterNote';

export default function NXPiMX() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            <HeaderSection />
            <SourceCodeNotice />

            <div className="space-y-6">

                <ProjectSection
                    title="Hardware Design & Integration"
                    description="Soccentric provides complete NXP i.MX hardware ecosystems including custom carrier board designs, power management systems, and peripheral integration for industrial and IoT applications."
                    githubUrl="https://github.com/Soccentric/Pinnacle-Hardware"
                    staggerClass="stagger-2"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="Embedded Linux & Yocto"
                    description="Custom embedded Linux distributions using Yocto Project optimized for NXP i.MX processors, with specialized builds for industrial, medical, and automotive applications."
                    githubUrl="https://github.com/Soccentric/Pinnacle-Yocto"
                    staggerClass="stagger-3"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="Device Drivers & BSP"
                    description="Complete Board Support Package (BSP) development and custom device drivers for NXP i.MX peripherals, industrial interfaces, and specialized hardware components."
                    githubUrl="https://github.com/Soccentric/Pinnacle-Drivers"
                    staggerClass="stagger-4"
                >
                    <p className="mb-2"><strong>Driver Categories:</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial Interfaces - CAN, EtherCAT, PROFINET with real-time performance</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Communication Protocols - Ethernet, USB, PCIe with high-speed data transfer</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor Integration - Analog/digital I/O, ADC/DAC with industrial accuracy</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Display Controllers - LCD, TFT, and touch interfaces for HMI applications</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Storage Systems - NAND Flash, eMMC, SD with wear leveling and security</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Security Modules - TPM, secure element integration for trusted computing</li>
                    </ul>
                </ProjectSection>

                <ProjectSection
                    title="Middleware & Frameworks"
                    description="Integration of middleware frameworks and communication stacks optimized for NXP i.MX processors in industrial and IoT applications."
                    githubUrl="https://github.com/Soccentric/Pinnacle-Middleware"
                    staggerClass="stagger-5"
                >
                    <p className="mb-2"><strong>Middleware Stack:</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>OPC UA - Industrial communication protocol for factory automation</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>MQTT - Lightweight messaging for IoT applications</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>DDS - Data Distribution Service for real-time systems</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Modbus - Industrial protocol for PLC and SCADA systems</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>PROFIBUS/PROFINET - Fieldbus protocols for industrial networks</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>EtherCAT - High-performance industrial Ethernet</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>TSN - Time-Sensitive Networking for deterministic communication</li>
                    </ul>
                </ProjectSection>

                <ProjectSection
                    title="Application Development"
                    description="End-to-end application development for NXP i.MX platforms, from embedded controllers to complex industrial and medical systems."
                    githubUrl="https://github.com/Soccentric/Pinnacle-Applications"
                    staggerClass="stagger-6"
                >
                    <p className="mb-2"><strong>Application Domains:</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Industrial Automation:</strong> PLC controllers, HMI systems, and SCADA interfaces</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Medical Devices:</strong> Patient monitoring, diagnostic equipment, and infusion systems</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Transportation:</strong> Vehicle telematics, fleet management, and infotainment</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Smart Grid:</strong> Energy metering, grid monitoring, and demand response</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Building Automation:</strong> HVAC control, access systems, and energy management</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Retail:</strong> POS systems, inventory management, and customer displays</li>
                    </ul>
                </ProjectSection>

            </div>

            <FooterNote />
        </div>
    );
}


