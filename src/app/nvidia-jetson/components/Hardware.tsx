export default function Hardware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Hardware Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers complete NVIDIA Jetson hardware ecosystems from custom carrier board designs to integrated AI components and thermal-optimized enclosures for edge AI and autonomous applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Custom Carrier Board Design</strong> - Develop tailored carrier boards for NVIDIA Jetson modules optimized for specific AI application requirements and form factors.</li>
                <li><strong>AI Component Integration</strong> - Seamlessly integrate cameras, LiDAR, IMUs, displays, and high-speed interfaces into cohesive AI-ready hardware solutions.</li>
                <li><strong>High-Speed Data Systems</strong> - Design and implement advanced camera interfaces, PCIe Gen4, and high-bandwidth memory systems for real-time AI processing.</li>
                <li><strong>Sensor Fusion Solutions</strong> - Integrate multiple sensor types including cameras, radar, LiDAR, and inertial measurement units for comprehensive AI perception systems.</li>
                <li><strong>Custom Enclosure Design</strong> - Engineer application-specific enclosures with optimized mechanical design for various edge deployment environments and form factors.</li>
                <li><strong>Thermal Management</strong> - Implement both active and passive cooling solutions to ensure optimal GPU and AI accelerator performance under demanding operational conditions.</li>
            </ul>
        </div>
    );
}
