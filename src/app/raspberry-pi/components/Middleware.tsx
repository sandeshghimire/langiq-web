export default function Middleware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored middleware solutions optimized for Raspberry Pi CM4/CM5 platforms, leveraging quad-core ARM Cortex-A72/A76 processors and VideoCore GPU acceleration for high-performance embedded applications requiring deterministic real-time communication and edge computing capabilities.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>ROS/ROS2</strong>: Robot Operating System with full Raspberry Pi CM4/CM5 support and ARM hardware acceleration</li>
                <li><strong>Communication & Networking</strong>: OpenDDS - High-performance Data Distribution Service implementation, ZeroMQ - Lightweight messaging library for distributed applications, MQTT - IoT messaging protocol with various broker implementations, GStreamer - Multimedia framework with VideoCore GPU acceleration for CM4/CM5</li>
                <li><strong>Real-time & System</strong>: Xenomai - Real-time framework (with compatible kernel versions), RT-Preempt patches - Soft real-time capabilities for Linux kernel, SystemD - System and service manager, D-Bus - Inter-process communication system</li>
                <li><strong>AI/ML Frameworks</strong>: PyTorch - Deep learning framework with ARM optimization, TensorFlow Lite - Machine learning platform optimized for edge devices, OpenCV - Computer vision library with ARM NEON acceleration, ONNX Runtime - Cross-platform inference engine</li>
                <li><strong>Industrial & IoT</strong>: Eclipse Mosquitto - MQTT broker, Node-RED - Flow-based programming for IoT, InfluxDB - Time-series database, Grafana - Metrics visualization and monitoring</li>
            </ul>
        </div>
    );
}

