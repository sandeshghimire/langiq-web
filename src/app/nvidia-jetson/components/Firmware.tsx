export default function Firmware() {
    return (
        <div id="firmware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Firmware Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric specializes in NVIDIA Jetson firmware development, including bootloader customization, secure boot implementation, and firmware updates. Our expertise covers Jetson BSP integration, firmware optimization for power management, and over-the-air update systems for production deployments.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Firmware Development Expertise:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Bootloader Development</strong> - Custom UEFI/EDK2 bootloader, secure boot with TPM, and fast boot optimizations for Jetson platforms.</li>
                <li><strong>Secure Boot & TrustZone</strong> - Hardware-backed security with ARM TrustZone, secure firmware updates, and root of trust establishment.</li>
                <li><strong>Power Management Firmware</strong> - Custom power profiles, DVFS (Dynamic Voltage and Frequency Scaling), and thermal management firmware.</li>
                <li><strong>OTA Update Systems</strong> - Secure over-the-air firmware updates, A/B partitioning, and rollback capabilities for field deployments.</li>
                <li><strong>Device Tree Customization</strong> - Hardware description and configuration through device tree overlays for custom carrier boards.</li>
                <li><strong>Firmware Testing & Validation</strong> - Automated firmware testing, stress testing, and validation for production reliability.</li>
            </ul>
        </div>
    );
}
