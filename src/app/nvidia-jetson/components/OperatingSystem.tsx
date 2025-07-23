export default function OperatingSystem() {
    return (
        <div id="operating-system" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom embedded Linux distributions for NVIDIA Jetson platforms using Yocto Project with meta-tegra layer. Our expertise covers BSP development, custom meta-layers, recipe creation, kernel customization, OTA update systems, and comprehensive AI/ML framework integration including JetPack SDK, CUDA, TensorRT, DeepStream, OpenCV, TensorFlow, and PyTorch for production-ready edge AI solutions.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Yocto & Meta-Tegra Activities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Meta-Tegra BSP Integration</strong> - Leverage meta-tegra layer for NVIDIA Jetson Nano, Xavier, Orin, and Thor SOMs with L4T kernel and bootloader support</li>
                <li><strong>Custom Meta-Layer Development</strong> - Create application-specific meta-layers with custom BitBake recipes for hardware drivers and AI applications</li>
                <li><strong>Kernel Customization & Patches</strong> - Apply custom kernel patches, device tree overlays, and driver modifications through Yocto framework</li>
                <li><strong>JetPack SDK Integration</strong> - Seamlessly integrate CUDA, cuDNN, TensorRT, and DeepStream through custom Yocto recipes and BSP layers</li>
                <li><strong>AI Framework Packaging</strong> - Package OpenCV with CUDA acceleration, TensorFlow Lite, PyTorch Mobile, and ONNX Runtime for ARM64 optimization</li>
                <li><strong>OTA Update System</strong> - Implement secure OTA updates using SWUpdate/Mender with A/B partitions, rollback capabilities, and remote fleet management</li>
            </ul>
        </div>
    );
}
