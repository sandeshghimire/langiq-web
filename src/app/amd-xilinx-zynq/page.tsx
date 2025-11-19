import HeaderSection from './components/HeaderSection';
import SourceCodeNotice from './components/SourceCodeNotice';
import ProjectSection from './components/ProjectSection';
import FooterNote from './components/FooterNote';

export default function AMDZynq() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            <HeaderSection />
            <SourceCodeNotice />

            <div className="space-y-6">
                <ProjectSection
                    title="Hardware Design Projects"
                    description="Based on Zynq architecture, we've developed several hardware projects including custom carrier boards, expansion modules, and specialized interfaces. These designs leverage the ZUBOARD ICZ reference while optimizing for specific application requirements."
                    githubUrl="https://github.com/Soccentric/Zion-Hardware"
                    staggerClass="stagger-2"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="RTL & FPGA Design"
                    description="Developed comprehensive RTL FPGA designs for Zynq programmable logic fabric, implementing custom IP cores, high-speed interfaces, and domain-specific accelerators."
                    githubUrl="https://github.com/Soccentric/Zion-FPGA"
                    staggerClass="stagger-3"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="Yocto-Based Embedded Linux"
                    description="Created domain-specific Yocto builds optimized for various applications, with full customization capabilities for device tree, U-Boot, and kernel configurations."
                    githubUrl="https://github.com/Soccentric/Zion-Yocto"
                    staggerClass="stagger-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2"><strong>Specialized Builds:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
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
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Device tree overlays for custom hardware</li>
                                <li>U-Boot configuration and secure boot</li>
                                <li>Kernel optimization and real-time patches</li>
                                <li>Package customization and dependency management</li>
                            </ul>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection
                    title="Device Drivers"
                    description="Developed comprehensive device drivers for Zynq peripherals, custom hardware interfaces, and specialized devices across various application domains."
                    githubUrl="https://github.com/Soccentric/Zion-Drivers"
                    staggerClass="stagger-5"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="RPU-Based Firmware"
                    description="Implemented Real-Time Processing Unit (RPU) firmware for critical real-time tasks, safety systems, and low-latency processing requirements."
                    githubUrl="https://github.com/Soccentric/Zion-RPU"
                    staggerClass="stagger-6"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="Zynq Applications"
                    description="Developed complete applications leveraging Zynq's heterogeneous architecture, combining ARM processing with FPGA acceleration for optimal performance."
                    githubUrl="https://github.com/Soccentric/Zion-Applications"
                    staggerClass="stagger-6"
                >
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
                </ProjectSection>
            </div>

            <FooterNote />
        </div>
    );
}


