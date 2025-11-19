export default function NVIDIAJetson() {
    return (
        <div className="p-8 border-t border-gray-200">
            {/* Two Column Layout for Title and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-6 uppercase">NVIDIA Jetson Case Study</h1>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Over the past decade, I've developed extensive expertise with NVIDIA Jetson platforms, leveraging their powerful GPU acceleration and AI processing capabilities. This page showcases practical implementations across the Jetson ecosystem, from edge AI applications to robotics and autonomous systems. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="/som-k26-main.png"
                        alt="NVIDIA Jetson Platform"
                        className="max-w-md h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Single Column Layout for Content */}
            <div className="space-y-8">

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Design Projects</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Soccentric delivers complete NVIDIA Jetson hardware ecosystems including custom carrier board designs for Jetson Nano, Xavier, Orin, and Thor SOMs. Our expertise spans camera sensor integration (Sony IMX, ON Semiconductor, OmniVision), MIPI interfaces, communication protocols (I2C, SPI, UART, GPIO), sensor fusion systems, and thermal-optimized enclosures for edge AI and autonomous applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Key Capabilities:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>AI/ML Inference - High-performance deep learning inference with TensorRT optimization</li>
                            <li>Computer Vision - Real-time image processing with multiple MIPI CSI-2 camera interfaces</li>
                            <li>Generative AI - Support for transformer-based models with Ampere architecture GPU</li>
                            <li>Robotics - Advanced motion planning and control algorithms for autonomous systems</li>
                            <li>Video Analytics - Multi-stream video processing with AI-enhanced analytics</li>
                            <li>Edge Computing - Distributed intelligence with efficient edge processing</li>
                            <li>Real-Time Processing - Deterministic latency with configurable power profiles</li>
                            <li>Multi-Modal AI - Combined vision, speech, and sensor data processing</li>
                            <li>Open-Source Designs - Complete hardware schematics and thermal management</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Arches-Hardware" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Arches-Hardware Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">JetPack SDK & AI Frameworks</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Comprehensive development using NVIDIA JetPack SDK with CUDA, TensorRT, DeepStream, and Isaac frameworks for high-performance AI applications on Jetson platforms.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>AI Development Stack:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>CUDA Programming - GPU-accelerated computing and custom kernels</li>
                            <li>TensorRT Optimization - High-performance neural network inference</li>
                            <li>DeepStream SDK - Multi-stream video analytics and AI pipelines</li>
                            <li>Isaac SDK - Robotics and autonomous systems development</li>
                            <li>Computer Vision - OpenCV with CUDA acceleration and vision APIs</li>
                            <li>Machine Learning - PyTorch, TensorFlow with GPU optimization</li>
                            <li>Edge AI - Model quantization and deployment for resource-constrained devices</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Arches-AI" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Arches-AI Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Embedded Linux & Yocto</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Custom embedded Linux distributions using Yocto Project optimized for Jetson platforms, with specialized builds for robotics, autonomous systems, and edge AI applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Specialized Builds:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>ROS Integration:</strong> Robotics frameworks with real-time kernel patches</li>
                            <li><strong>Autonomous Systems:</strong> Sensor fusion and navigation middleware</li>
                            <li><strong>Edge AI:</strong> Optimized AI inference with minimal latency</li>
                            <li><strong>IoT Gateway:</strong> Cloud connectivity and edge processing capabilities</li>
                            <li><strong>Real-Time Systems:</strong> Deterministic scheduling for critical applications</li>
                        </ul>
                        <p className="mt-3"><strong>Customization Capabilities:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Device tree overlays for custom hardware integration</li>
                            <li>Kernel optimization for AI workloads and real-time performance</li>
                            <li>Package customization for domain-specific applications</li>
                            <li>Security hardening and OTA update systems</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Arches-Yocto" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Arches-Yocto Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Device Drivers & Interfaces</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Custom device drivers and interface implementations for Jetson peripherals, sensors, cameras, and specialized hardware components optimized for AI and robotics applications.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Driver Categories:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Camera Interfaces - MIPI CSI-2, USB3 Vision with CUDA acceleration</li>
                            <li>Sensor Integration - IMU, LIDAR, RADAR with real-time processing</li>
                            <li>Communication Protocols - CAN, Ethernet, PCIe with high-speed data transfer</li>
                            <li>AI Accelerators - Custom IP cores and GPU interface drivers</li>
                            <li>Real-Time I/O - Deterministic drivers for robotics and control systems</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Arches-Drivers" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Arches-Drivers Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Robotics & Autonomous Systems</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Complete robotics and autonomous systems development using Jetson's AI capabilities, including ROS integration, computer vision, and real-time control systems.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Areas:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Autonomous Navigation - SLAM, path planning, and obstacle avoidance</li>
                            <li>Computer Vision - Object detection, tracking, and scene understanding</li>
                            <li>Manipulation - Robotic arm control and dexterous manipulation</li>
                            <li>Sensor Fusion - Multi-modal data integration for robust perception</li>
                            <li>Human-Robot Interaction - Natural interfaces and collaborative robotics</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Arches-Robotics" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Arches-Robotics Repository</a></p>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Jetson Applications</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        End-to-end application development leveraging Jetson's heterogeneous architecture for AI-powered solutions across various industries and use cases.
                    </p>
                    <div className="text-gray-700">
                        <p className="mb-2"><strong>Application Domains:</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Autonomous Vehicles:</strong> ADAS, sensor fusion, and decision-making systems</li>
                            <li><strong>Industrial Automation:</strong> Quality inspection, predictive maintenance, and process control</li>
                            <li><strong>Smart Cities:</strong> Video analytics, traffic management, and public safety</li>
                            <li><strong>Healthcare:</strong> Medical imaging analysis and diagnostic assistance</li>
                            <li><strong>Aerospace:</strong> UAV control systems and autonomous navigation</li>
                            <li><strong>Retail:</strong> Customer analytics, inventory management, and loss prevention</li>
                        </ul>
                        <p className="mt-3"><strong>GitHub:</strong> <a href="https://github.com/Soccentric/Arches-Applications" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Arches-Applications Repository</a></p>
                    </div>
                </section>

            </div>

            {/* Footer Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> All repositories contain complete documentation, build instructions, and practical examples. Our Jetson implementations demonstrate real-world AI and robotics development across multiple domains and applications.
                </p>
            </div>
        </div>
    );
}


