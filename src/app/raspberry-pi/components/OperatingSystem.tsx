export default function OperatingSystem() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric leverages Buildroot and Yocto Project for Raspberry Pi CM4/CM5 platform development, focusing on meta-raspberrypi layer integration, custom recipe creation, and optimized build configurations. Core activities include BSP customization, U-Boot configuration, device tree overlays, GPU firmware integration, and automated build workflows for ARM Cortex-A72/A76 architectures with VideoCore GPU support.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Development Activities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>meta-raspberrypi Layer Integration</strong> - Customize and extend official Raspberry Pi layer with CM4/CM5-specific configurations, machine definitions, and board support packages</li>
                <li><strong>Buildroot Optimization</strong> - Create lightweight, custom Linux distributions optimized for CM4/CM5 with minimal footprint and fast boot times for embedded applications</li>
                <li><strong>Boot Configuration Management</strong> - Configure bootloader chains including GPU firmware, U-Boot, and Linux kernel with custom config.txt and cmdline.txt optimization</li>
                <li><strong>Device Tree Overlay Development</strong> - Create and maintain device tree overlays for hardware peripherals, HAT compatibility, and dynamic configuration management</li>
                <li><strong>Cross-compilation Toolchain</strong> - Optimize ARM Cortex-A72/A76 toolchain configuration within Yocto/Buildroot for CM4/CM5 target architectures with NEON and VFP support</li>
                <li><strong>Automated Build Systems</strong> - Implement CI/CD pipelines for reproducible CM4/CM5 image builds, OTA update generation, and comprehensive BSP validation testing</li>
            </ul>
        </div>
    );
}
