export default function NVIDIAJetson() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            {/* Two Column Layout for Title and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">NVIDIA Jetson Reference Design</h1>

                    <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1 text-sm md:text-base">
                        Over the past decade, I've developed extensive expertise with NVIDIA Jetson platforms, leveraging their powerful GPU acceleration and AI processing capabilities. This page showcases practical implementations across the Jetson ecosystem, from edge AI applications to robotics and autonomous systems. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>

                    <div className="text-gray-700 animate-fadeInUp stagger-1 text-sm md:text-base">
                        <p className="font-semibold mb-2">What's Offered:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Complete hardware designs with schematics and PCB layouts</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Custom Yocto/Linux BSP configurations and recipes</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Device drivers and kernel modules source code</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>AI/ML inference examples with TensorRT optimization</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>ROS/ROS2 integration packages for robotics</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>End-to-end application examples with documentation</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/som-k26-main.jpg"
                        alt="NVIDIA Jetson Platform"
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
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 mb-6 animate-fadeInUp stagger-1">
                <p className="text-blue-800 text-xs md:text-sm leading-relaxed">
                    <strong>Note:</strong> All the project descriptions below have source code available on GitHub. The source code designs are copyrighted to sandesh@soccentric.com however you may use them on commercial and non-commercial projects as needed without author's credits.
                </p>
            </div>

            {/* Single Column Layout for Content */}
            <div className="space-y-4 md:space-y-6">

                <section className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-2 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Design Projects</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        Soccentric delivers complete NVIDIA Jetson hardware ecosystems including custom carrier board designs for Jetson Nano, Xavier, Orin, and Thor SOMs. Our expertise spans camera sensor integration (Sony IMX, ON Semiconductor, OmniVision), MIPI interfaces, communication protocols (I2C, SPI, UART, GPIO), sensor fusion systems, and thermal-optimized enclosures for edge AI and autonomous applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Capabilities:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>AI/ML Inference - High-performance deep learning inference with TensorRT optimization</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Computer Vision - Real-time image processing with multiple MIPI CSI-2 camera interfaces</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Generative AI - Support for transformer-based models with Ampere architecture GPU</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Robotics - Advanced motion planning and control algorithms for autonomous systems</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Video Analytics - Multi-stream video processing with AI-enhanced analytics</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Edge Computing - Distributed intelligence with efficient edge processing</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Real-Time Processing - Deterministic latency with configurable power profiles</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Multi-Modal AI - Combined vision, speech, and sensor data processing</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Open-Source Designs - Complete hardware schematics and thermal management</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Arches-Hardware" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-3 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">JetPack SDK & AI Frameworks</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        Comprehensive development using NVIDIA JetPack SDK with CUDA, TensorRT, DeepStream, and Isaac frameworks for high-performance AI applications on Jetson platforms.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>AI Development Stack:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>CUDA Programming - GPU-accelerated computing and custom kernels</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>TensorRT Optimization - High-performance neural network inference</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>DeepStream SDK - Multi-stream video analytics and AI pipelines</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Isaac SDK - Robotics and autonomous systems development</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Computer Vision - OpenCV with CUDA acceleration and vision APIs</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Machine Learning - PyTorch, TensorFlow with GPU optimization</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Edge AI - Model quantization and deployment for resource-constrained devices</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Arches-AI" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-4 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Embedded Linux & Yocto</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        Custom embedded Linux distributions using Yocto Project optimized for Jetson platforms, with specialized builds for robotics, autonomous systems, and edge AI applications.
                    </p>
                    <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <div>
                            <p className="mb-2"><strong>Specialized Builds:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>ROS Integration:</strong> Robotics frameworks with real-time kernel patches</li>
                                <li><strong>Autonomous Systems:</strong> Sensor fusion and navigation middleware</li>
                                <li><strong>Edge AI:</strong> Optimized AI inference with minimal latency</li>
                                <li><strong>IoT Gateway:</strong> Cloud connectivity and edge processing capabilities</li>
                                <li><strong>Real-Time Systems:</strong> Deterministic scheduling for critical applications</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2"><strong>Customization Capabilities:</strong></p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Device tree overlays for custom hardware integration</li>
                                <li>Kernel optimization for AI workloads and real-time performance</li>
                                <li>Package customization for domain-specific applications</li>
                                <li>Security hardening and OTA update systems</li>
                            </ul>
                        </div>
                    </div>
                    <a href="https://github.com/Soccentric/Arches-Yocto" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-5 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers & Interfaces</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        Custom device drivers and interface implementations for Jetson peripherals, sensors, cameras, and specialized hardware components optimized for AI and robotics applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Camera Interfaces - MIPI CSI-2, USB3 Vision with CUDA acceleration</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor Integration - IMU, LIDAR, RADAR with real-time processing</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Communication Protocols - CAN, Ethernet, PCIe with high-speed data transfer</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>AI Accelerators - Custom IP cores and GPU interface drivers</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Real-Time I/O - Deterministic drivers for robotics and control systems</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Arches-Drivers" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Robotics & Autonomous Systems</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        Complete robotics and autonomous systems development using Jetson's AI capabilities, including ROS integration, computer vision, and real-time control systems.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Areas:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Autonomous Navigation - SLAM, path planning, and obstacle avoidance</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Computer Vision - Object detection, tracking, and scene understanding</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Manipulation - Robotic arm control and dexterous manipulation</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor Fusion - Multi-modal data integration for robust perception</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Human-Robot Interaction - Natural interfaces and collaborative robotics</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Arches-Robotics" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

                <section className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm animate-fadeInUp stagger-6 hover-lift relative">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-4 uppercase tracking-wide">Jetson Applications</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        End-to-end application development leveraging Jetson's heterogeneous architecture for AI-powered solutions across various industries and use cases.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Autonomous Vehicles:</strong> ADAS, sensor fusion, and decision-making systems</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Industrial Automation:</strong> Quality inspection, predictive maintenance, and process control</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Smart Cities:</strong> Video analytics, traffic management, and public safety</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Healthcare:</strong> Medical imaging analysis and diagnostic assistance</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Aerospace:</strong> UAV control systems and autonomous navigation</li>
                            <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Retail:</strong> Customer analytics, inventory management, and loss prevention</li>
                        </ul>
                    </div>
                    <a href="https://github.com/Soccentric/Arches-Applications" className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </section>

            </div>

            {/* Footer Note */}
            <div className="mt-8 p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fadeInUp stagger-6">
                <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> All repositories contain complete documentation, build instructions, and practical examples. Our Jetson implementations demonstrate real-world AI and robotics development across multiple domains and applications.
                </p>
            </div>
        </div>
    );
}


