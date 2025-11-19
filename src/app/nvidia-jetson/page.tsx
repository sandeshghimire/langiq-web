import HeaderSection from './components/HeaderSection';
import SourceCodeNotice from './components/SourceCodeNotice';
import ProjectSection from './components/ProjectSection';
import FooterNote from './components/FooterNote';

export default function NVIDIAJetson() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            <HeaderSection />
            <SourceCodeNotice />

            <div className="space-y-4 md:space-y-6">
                <ProjectSection
                    title="Hardware Design Projects"
                    description="Soccentric delivers complete NVIDIA Jetson hardware ecosystems including custom carrier board designs for Jetson Nano, Xavier, Orin, and Thor SOMs. Our expertise spans camera sensor integration (Sony IMX, ON Semiconductor, OmniVision), MIPI interfaces, communication protocols (I2C, SPI, UART, GPIO), sensor fusion systems, and thermal-optimized enclosures for edge AI and autonomous applications."
                    githubUrl="https://github.com/Soccentric/Arches-Hardware"
                    staggerClass="stagger-2"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="JetPack SDK & AI Frameworks"
                    description="Comprehensive development using NVIDIA JetPack SDK with CUDA, TensorRT, DeepStream, and Isaac frameworks for high-performance AI applications on Jetson platforms."
                    githubUrl="https://github.com/Soccentric/Arches-AI"
                    staggerClass="stagger-3"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="Embedded Linux & Yocto"
                    description="Custom embedded Linux distributions using Yocto Project optimized for Jetson platforms, with specialized builds for robotics, autonomous systems, and edge AI applications."
                    githubUrl="https://github.com/Soccentric/Arches-Yocto"
                    staggerClass="stagger-4"
                >
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
                </ProjectSection>

                <ProjectSection
                    title="Device Drivers & Interfaces"
                    description="Custom device drivers and interface implementations for Jetson peripherals, sensors, cameras, and specialized hardware components optimized for AI and robotics applications."
                    githubUrl="https://github.com/Soccentric/Arches-Drivers"
                    staggerClass="stagger-5"
                >
                    <p className="mb-2"><strong>Driver Categories:</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Camera Interfaces - MIPI CSI-2, USB3 Vision with CUDA acceleration</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor Integration - IMU, LIDAR, RADAR with real-time processing</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Communication Protocols - CAN, Ethernet, PCIe with high-speed data transfer</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>AI Accelerators - Custom IP cores and GPU interface drivers</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Real-Time I/O - Deterministic drivers for robotics and control systems</li>
                    </ul>
                </ProjectSection>

                <ProjectSection
                    title="Robotics & Autonomous Systems"
                    description="Complete robotics and autonomous systems development using Jetson's AI capabilities, including ROS integration, computer vision, and real-time control systems."
                    githubUrl="https://github.com/Soccentric/Arches-Robotics"
                    staggerClass="stagger-6"
                >
                    <p className="mb-2"><strong>Application Areas:</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Autonomous Navigation - SLAM, path planning, and obstacle avoidance</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Computer Vision - Object detection, tracking, and scene understanding</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Manipulation - Robotic arm control and dexterous manipulation</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor Fusion - Multi-modal data integration for robust perception</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Human-Robot Interaction - Natural interfaces and collaborative robotics</li>
                    </ul>
                </ProjectSection>

                <ProjectSection
                    title="Jetson Applications"
                    description="End-to-end application development leveraging Jetson's heterogeneous architecture for AI-powered solutions across various industries and use cases."
                    githubUrl="https://github.com/Soccentric/Arches-Applications"
                    staggerClass="stagger-6"
                >
                    <p className="mb-2"><strong>Application Domains:</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Autonomous Vehicles:</strong> ADAS, sensor fusion, and decision-making systems</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Industrial Automation:</strong> Quality inspection, predictive maintenance, and process control</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Smart Cities:</strong> Video analytics, traffic management, and public safety</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Healthcare:</strong> Medical imaging analysis and diagnostic assistance</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Aerospace:</strong> UAV control systems and autonomous navigation</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span><strong>Retail:</strong> Customer analytics, inventory management, and loss prevention</li>
                    </ul>
                </ProjectSection>
            </div>

            <FooterNote />
        </div>
    );
}


