export default function OperatingSystem() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric leverages NVIDIA JetPack SDK for Jetson platform development, focusing on L4T (Linux for Tegra) customization, custom package creation, and build optimization. Core activities include BSP layer management, bootloader integration, device tree customization, CUDA runtime optimization, and automated build workflows for ARM Cortex-A + GPU AI accelerated architectures.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key JetPack Activities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>L4T Kernel Customization</strong> - Customize and extend NVIDIA's Linux for Tegra with board-specific configurations and device drivers</li>
                <li><strong>Custom Package Development</strong> - Create custom deb packages for Jetson-specific drivers, CUDA applications, and hardware-dependent components</li>
                <li><strong>Boot Image Generation</strong> - Configure L4T to produce custom boot images containing CBoot, kernel, and device trees for Jetson boot sequence</li>
                <li><strong>Device Tree Management</strong> - Develop and maintain device tree sources for custom carrier boards and peripheral configurations</li>
                <li><strong>Cross-compilation Toolchain</strong> - Optimize ARM64 toolchain configuration within JetPack for Jetson target architectures including Xavier, Orin, and Nano</li>
                <li><strong>Build System Automation</strong> - Implement automated CI/CD pipelines for reproducible Jetson image builds and BSP validation with CUDA runtime testing</li>
            </ul>
        </div>
    );
}
