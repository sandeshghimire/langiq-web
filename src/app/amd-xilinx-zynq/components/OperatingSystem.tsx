export default function OperatingSystem() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric leverages Yocto Project for AMD Xilinx Zynq platform development, focusing on meta-xilinx layer integration, custom recipe creation, and bitbake optimization. Core activities include BSP layer management, FSBL/U-Boot integration, device tree customization, FPGA bitstream handling, and automated build workflows for ARM Cortex-A + FPGA hybrid architectures.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Yocto Activities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>meta-xilinx Layer Integration</strong> - Customize and extend official AMD Xilinx layer with board-specific configurations and machine definitions</li>
                <li><strong>Recipe Development</strong> - Create custom bitbake recipes for Zynq-specific drivers, FPGA manager integration, and hardware-dependent packages</li>
                <li><strong>Boot Image Generation</strong> - Configure Yocto to produce BOOT.BIN files containing FSBL, bitstreams, and U-Boot for Zynq boot sequence</li>
                <li><strong>Device Tree Management</strong> - Develop and maintain device tree overlays through Yocto recipes for dynamic FPGA configuration</li>
                <li><strong>Cross-compilation Toolchain</strong> - Optimize ARM Cortex-A9/A53 toolchain configuration within Yocto for Zynq target architectures</li>
                <li><strong>Build System Automation</strong> - Implement bitbake-based CI/CD pipelines for reproducible Zynq image builds and BSP validation testing</li>
            </ul>
        </div>
    );
}
