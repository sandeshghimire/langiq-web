export default function OperatingSystem() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric leverages Yocto Project for NXP i.MX platform development, focusing on meta-freescale layer integration, custom recipe creation, and bitbake optimization. Core activities include BSP layer management, U-Boot/ATF integration, device tree customization, ARM TrustZone handling, and automated build workflows for ARM Cortex-A and Cortex-M architectures.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Yocto Activities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>meta-freescale Layer Integration</strong> - Customize and extend official NXP layer with board-specific configurations and machine definitions for i.MX family</li>
                <li><strong>Recipe Development</strong> - Create custom bitbake recipes for i.MX-specific drivers, VPU integration, GPU drivers, and hardware-dependent packages</li>
                <li><strong>Boot Image Generation</strong> - Configure Yocto to produce boot images containing SPL, U-Boot, ATF, and kernel for i.MX secure boot sequence</li>
                <li><strong>Device Tree Management</strong> - Develop and maintain device tree overlays through Yocto recipes for dynamic peripheral configuration and pin multiplexing</li>
                <li><strong>Cross-compilation Toolchain</strong> - Optimize ARM Cortex-A7/A9/A53/A72 toolchain configuration within Yocto for various i.MX target architectures</li>
                <li><strong>Build System Automation</strong> - Implement bitbake-based CI/CD pipelines for reproducible i.MX image builds and BSP validation testing with secure boot support</li>
            </ul>
        </div>
    );
}
