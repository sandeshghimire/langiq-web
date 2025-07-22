export default function Middleware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored AI and robotics middleware solutions optimized for NVIDIA Jetson platforms, leveraging ARM Cortex-A78AE processors, GPU acceleration, and dedicated AI engines for high-performance edge AI applications requiring real-time processing and computer vision.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>Jetson AI Optimization</strong>: NVIDIA DeepStream SDK with custom plugins, ROS2 with CUDA acceleration, Isaac ROS with hardware-accelerated computer vision nodes</li>
                <li><strong>Real-Time AI Inference</strong>: TensorRT optimized models, NVIDIA Triton Inference Server for edge deployment, custom CUDA kernels for specialized AI workloads</li>
                <li><strong>GPU Hardware Acceleration</strong>: Hardware-accelerated computer vision pipelines, custom CUDA-based image processing, GPU-optimized neural network inference engines</li>
                <li><strong>ARM Cortex Integration</strong>: Ubuntu-based Linux with real-time kernel patches, containerized AI applications with Docker, multi-core load balancing for AI workloads</li>
                <li><strong>Autonomous Vehicle Applications</strong>: NVIDIA DRIVE SDK integration, sensor fusion for autonomous navigation, real-time object detection and tracking systems</li>
                <li><strong>Edge AI Enhancement</strong>: NVIDIA TAO Toolkit for custom model training, edge analytics with streaming data processing, federated learning systems for distributed AI</li>
            </ul>
        </div>
    );
}
