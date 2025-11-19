export default function Middleware() {
    return (
        <div id="middleware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored AI and robotics middleware solutions optimized for NVIDIA Jetson platforms, leveraging ARM Cortex-A78AE processors, GPU acceleration, and dedicated AI engines for high-performance edge AI applications requiring real-time processing and computer vision.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>NVIDIA Native Middleware</strong>: JetPack SDK, DeepStream SDK, Isaac SDK, Triton Inference Server, TensorRT, VPI (Vision Programming Interface)</li>
                <li><strong>ROS/ROS2 for Robotics</strong>: Advanced robotics middleware for drones and UAVs with real-time navigation, autonomous flight control, and sensor integration</li>
                <li><strong>DDS (Data Distribution Service)</strong>: High-performance real-time data distribution for mission-critical applications requiring low-latency communication</li>
                <li><strong>IoT Messaging Protocols</strong>: ZeroMQ for high-performance messaging, MQTT for lightweight IoT device communication and telemetry</li>
                <li><strong>GStreamer Multimedia Framework</strong>: Hardware-accelerated video processing, streaming pipelines, and real-time media handling with NVIDIA hardware integration</li>
                <li><strong>Container & Orchestration</strong>: Docker containerization, Kubernetes orchestration, and edge computing deployment strategies for scalable AI applications</li>
                <li><strong>Real-time & System Integration</strong>: Xenomai real-time framework, RT-Preempt kernel patches, SystemD service management, D-Bus inter-process communication</li>
                <li><strong>AI/ML Frameworks</strong>: PyTorch with CUDA acceleration, TensorFlow with GPU support, OpenCV with CUDA acceleration, ONNX Runtime cross-platform inference engine</li>
            </ul>
        </div>
    );
}
