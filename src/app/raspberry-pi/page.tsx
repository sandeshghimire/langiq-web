export default function RaspberryPi() {
    return (
        <div className="px-6 py-6 md:px-8 md:py-8 border-t border-gray-200">
            {/* Two Column Layout for Title and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">Raspberry Pi Reference Design</h1>

                    <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1">
                        With extensive experience across the entire Raspberry Pi ecosystem from Pi Zero to Raspberry Pi 5, I've developed comprehensive embedded solutions for IoT, robotics, and edge computing applications. This page showcases practical implementations leveraging the Pi's versatility and community ecosystem. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>

                    <div className="text-gray-700 animate-fadeInUp stagger-1">
                        <p className="font-semibold mb-2">What's Offered:</p>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Custom HAT designs with full hardware documentation</li>
                            <li>Raspbian/Ubuntu customization scripts and configurations</li>
                            <li>GPIO, I2C, SPI driver examples and libraries</li>
                            <li>IoT gateway implementations with cloud integration</li>
                            <li>Sensor integration examples and data acquisition code</li>
                            <li>Python/C++ application frameworks for rapid development</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/CM5-V2_1.jpg"
                        alt="Raspberry Pi Platform"
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

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-2 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Integration & HATs</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Soccentric delivers custom Hardware Attached on Top (HAT) designs and sensor integrations for Raspberry Pi, enabling rapid prototyping and production-ready embedded solutions.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Capabilities:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>IoT Sensors - Environmental monitoring, motion detection, and data acquisition</li>
                            <li>Communication Modules - WiFi, Bluetooth, LoRa, and cellular connectivity</li>
                            <li>Display Interfaces - LCD, OLED, and e-ink displays for user interfaces</li>
                            <li>Power Management - Battery systems and solar power integration</li>
                            <li>Industrial Interfaces - RS-485, CAN, and Modbus for industrial applications</li>
                            <li>Audio Systems - Microphone arrays and speaker interfaces</li>
                            <li>GPS & Navigation - Location tracking and navigation systems</li>
                            <li>Camera Integration - CSI camera modules with image processing</li>
                            <li>Custom HATs - Application-specific hardware expansion boards</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pi-Hardware" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-3 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Embedded Linux & Raspbian</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Custom Linux distributions and system configurations optimized for Raspberry Pi platforms, with specialized builds for various applications and performance requirements.
                    </p>
                    <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2"><strong>Specialized Builds:</strong></p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li><strong>IoT Gateway:</strong> Lightweight distributions for edge computing and cloud connectivity</li>
                                <li><strong>Robotics:</strong> Real-time kernel patches and ROS integration</li>
                                <li><strong>Media Center:</strong> Kodi and multimedia optimization</li>
                                <li><strong>Security:</strong> Hardened systems with encryption and secure boot</li>
                                <li><strong>Headless:</strong> Minimal systems for remote management and automation</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2"><strong>Customization Capabilities:</strong></p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Device tree overlays for custom hardware and peripherals</li>
                                <li>Kernel modules and drivers for specialized applications</li>
                                <li>Package management and system optimization</li>
                                <li>Network configuration and security hardening</li>
                            </ul>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Pi-Yocto" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-4 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers & Interfaces</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Custom device drivers and interface implementations for Raspberry Pi GPIO, I2C, SPI, UART, and specialized peripherals optimized for various applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>GPIO Control - Digital I/O with interrupt handling and PWM</li>
                            <li>I2C/SPI Interfaces - Sensor communication and peripheral control</li>
                            <li>UART Serial - RS-232/485 communication for industrial protocols</li>
                            <li>USB Interfaces - Host and device mode with custom drivers</li>
                            <li>Camera Interfaces - CSI-2 camera drivers with image processing</li>
                            <li>Audio Drivers - I2S and PWM audio with DSP capabilities</li>
                            <li>Network Interfaces - Ethernet, WiFi, and Bluetooth drivers</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pi-Drivers" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-5 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware & Protocols</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Integration of middleware frameworks and communication protocols optimized for Raspberry Pi in IoT and edge computing applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Middleware Stack:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>MQTT - Lightweight messaging for IoT applications</li>
                            <li>CoAP - Constrained Application Protocol for resource-constrained devices</li>
                            <li>WebSocket - Real-time bidirectional communication</li>
                            <li>REST APIs - HTTP-based services and cloud integration</li>
                            <li>Modbus - Industrial protocol for automation systems</li>
                            <li>DDS - Data Distribution Service for real-time systems</li>
                            <li>Bluetooth Low Energy - Wireless sensor networks</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pi-Middleware" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift relative">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Application Development</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        End-to-end application development for Raspberry Pi platforms, from simple IoT devices to complex robotics and automation systems.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>IoT & Home Automation:</strong> Smart home devices, environmental monitoring, and energy management</li>
                            <li><strong>Robotics:</strong> Autonomous robots, drone control systems, and robotic arms</li>
                            <li><strong>Industrial:</strong> Process monitoring, quality control, and predictive maintenance</li>
                            <li><strong>Education:</strong> STEM projects, interactive displays, and learning platforms</li>
                            <li><strong>Media & Entertainment:</strong> Digital signage, media players, and interactive installations</li>
                            <li><strong>Agriculture:</strong> Smart farming, irrigation control, and crop monitoring</li>
                            <li><strong>Healthcare:</strong> Medical devices, patient monitoring, and telemedicine</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Pi-Applications" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

            </div>

            {/* Footer Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fadeInUp stagger-6">
                <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> All repositories contain complete documentation, build instructions, and practical examples. Our Raspberry Pi implementations demonstrate versatile embedded development across IoT, robotics, and consumer applications.
                </p>
            </div>
        </div>
    );
}


