import HeaderSection from './components/HeaderSection';
import SourceCodeNotice from './components/SourceCodeNotice';
import ProjectSection from './components/ProjectSection';
import FooterNote from './components/FooterNote';

export default function RaspberryPi() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            <HeaderSection />
            <SourceCodeNotice />

            <div className="space-y-4 md:space-y-6">

                <ProjectSection
                    title="Hardware Integration & HATs"
                    description="Soccentric delivers custom Hardware Attached on Top (HAT) designs and sensor integrations for Raspberry Pi, enabling rapid prototyping and production-ready embedded solutions."
                    githubUrl="https://github.com/Soccentric/Pi-Hardware"
                    staggerClass="stagger-2"
                >
                    <p className="mb-2"><strong>Key Capabilities:</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>IoT Sensors - Environmental monitoring, motion detection, and data acquisition</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Communication Modules - WiFi, Bluetooth, LoRa, and cellular connectivity</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Display Interfaces - LCD, OLED, and e-ink displays for user interfaces</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Power Management - Battery systems and solar power integration</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Industrial Interfaces - RS-485, CAN, and Modbus for industrial applications</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Audio Systems - Microphone arrays and speaker interfaces</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>GPS & Navigation - Location tracking and navigation systems</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Camera Integration - CSI camera modules with image processing</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Custom HATs - Application-specific hardware expansion boards</span>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection
                    title="Embedded Linux & Raspbian"
                    description="Custom Linux distributions and system configurations optimized for Raspberry Pi platforms, with specialized builds for various applications and performance requirements."
                    githubUrl="https://github.com/Soccentric/Pi-Yocto"
                    staggerClass="stagger-3"
                >
                    <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2"><strong>Specialized Builds:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>IoT Gateway:</strong> Lightweight distributions for edge computing and cloud connectivity</li>
                                <li><strong>Robotics:</strong> Real-time kernel patches and ROS integration</li>
                                <li><strong>Media Center:</strong> Kodi and multimedia optimization</li>
                                <li><strong>Security:</strong> Hardened systems with encryption and secure boot</li>
                                <li><strong>Headless:</strong> Minimal systems for remote management and automation</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2"><strong>Customization Capabilities:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Device tree overlays for custom hardware and peripherals</li>
                                <li>Kernel modules and drivers for specialized applications</li>
                                <li>Package management and system optimization</li>
                                <li>Network configuration and security hardening</li>
                            </ul>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection
                    title="Device Drivers & Interfaces"
                    description="Custom device drivers and interface implementations for Raspberry Pi GPIO, I2C, SPI, UART, and specialized peripherals optimized for various applications."
                    githubUrl="https://github.com/Soccentric/Pi-Drivers"
                    staggerClass="stagger-4"
                >
                    <p className="mb-2"><strong>Driver Categories:</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>GPIO Control - Digital I/O with interrupt handling and PWM</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>I2C/SPI Interfaces - Sensor communication and peripheral control</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>UART Serial - RS-232/485 communication for industrial protocols</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>USB Interfaces - Host and device mode with custom drivers</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Camera Interfaces - CSI-2 camera drivers with image processing</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Audio Drivers - I2S and PWM audio with DSP capabilities</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Network Interfaces - Ethernet, WiFi, and Bluetooth drivers</span>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection
                    title="Middleware & Protocols"
                    description="Integration of middleware frameworks and communication protocols optimized for Raspberry Pi in IoT and edge computing applications."
                    githubUrl="https://github.com/Soccentric/Pi-Middleware"
                    staggerClass="stagger-5"
                >
                    <p className="mb-2"><strong>Middleware Stack:</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>MQTT - Lightweight messaging for IoT applications</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>CoAP - Constrained Application Protocol for resource-constrained devices</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>WebSocket - Real-time bidirectional communication</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>REST APIs - HTTP-based services and cloud integration</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Modbus - Industrial protocol for automation systems</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>DDS - Data Distribution Service for real-time systems</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Bluetooth Low Energy - Wireless sensor networks</span>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection
                    title="Application Development"
                    description="End-to-end application development for Raspberry Pi platforms, from simple IoT devices to complex robotics and automation systems."
                    githubUrl="https://github.com/Soccentric/Pi-Applications"
                    staggerClass="stagger-6"
                >
                    <p className="mb-2"><strong>Application Domains:</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>IoT & Home Automation:</strong> Smart home devices, environmental monitoring, and energy management</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>Robotics:</strong> Autonomous robots, drone control systems, and robotic arms</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>Industrial:</strong> Process monitoring, quality control, and predictive maintenance</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>Education:</strong> STEM projects, interactive displays, and learning platforms</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>Media & Entertainment:</strong> Digital signage, media players, and interactive installations</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>Agriculture:</strong> Smart farming, irrigation control, and crop monitoring</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><strong>Healthcare:</strong> Medical devices, patient monitoring, and telemedicine</span>
                        </div>
                    </div>
                </ProjectSection>

            </div>

            <FooterNote />
        </div>
    );
}


