export default function Hardware() {
    return (
        <div id="hardware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers complete NVIDIA Jetson hardware ecosystems including custom carrier board designs for Jetson Nano, Xavier, Orin, and Thor SOMs. Our expertise spans camera sensor integration (Sony IMX, ON Semiconductor, OmniVision), MIPI interfaces, communication protocols (I2C, SPI, UART, GPIO), sensor fusion systems, and thermal-optimized enclosures for edge AI and autonomous applications. Our open-source hardware reference designs are available on GitHub at <a href="https://github.com/Soccentric/Arches-Hardware" className="text-blue-600 hover:underline">https://github.com/Soccentric/Arches-Hardware</a>.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>AI/ML Inference</strong> - High-performance deep learning inference with TensorRT optimization and up to 275 TOPS AI performance.</li>
                <li><strong>Computer Vision</strong> - Real-time image processing, object detection, and tracking with multiple MIPI CSI-2 camera interfaces.</li>
                <li><strong>Generative AI</strong> - Support for transformer-based models and generative tasks with Ampere architecture GPU.</li>
                <li><strong>Robotics</strong> - Advanced motion planning and control algorithms for autonomous systems and robotics applications.</li>
                <li><strong>Video Analytics</strong> - Multi-stream video processing with AI-enhanced analytics and hardware-accelerated codecs.</li>
                <li><strong>Edge Computing</strong> - Distributed intelligence with cloud-native workflows and efficient edge processing.</li>
                <li><strong>Real-Time Processing</strong> - Deterministic latency for critical applications with configurable power profiles (7W-60W).</li>
                <li><strong>Multi-Modal AI</strong> - Combined vision, speech, and sensor data processing with rich peripheral interfaces.</li>
                <li><strong>Open-Source Designs</strong> - Complete hardware schematics, BOM, manufacturing files, and thermal management designs available on GitHub.</li>
            </ul>
        </div>
    );
}
