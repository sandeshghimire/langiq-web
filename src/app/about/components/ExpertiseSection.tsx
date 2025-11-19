export default function ExpertiseSection() {
    return (
        <>
            <h2 className="text-lg md:text-xl font-semibold text-black mb-3 uppercase tracking-wide animate-fadeInUp stagger-2">Core Expertise Areas:</h2>
            <div className="text-gray-700 mb-4 text-sm md:text-base">
                <p className="mb-3 animate-fadeInUp stagger-2 hover:translate-x-2 transition-smooth"><strong>Hardware Development:</strong> Custom board design, schematic development, PCB layout, component selection, and prototyping for embedded systems.</p>
                <p className="mb-3 animate-fadeInUp stagger-3 hover:translate-x-2 transition-smooth"><strong>Firmware Development:</strong> Low-level firmware programming, bootloader development, secure boot implementation, and real-time systems programming.</p>
                <p className="mb-3 animate-fadeInUp stagger-4 hover:translate-x-2 transition-smooth"><strong>FPGA & RTL Development:</strong> Digital design, HDL coding (Verilog/VHDL), synthesis, timing analysis, and FPGA implementation for custom logic and interfaces.</p>
                <p className="mb-3 animate-fadeInUp stagger-5 hover:translate-x-2 transition-smooth"><strong>Embedded Linux:</strong> Kernel customization, bootloader development (U-Boot), device driver implementation, and system integration using Yocto/Buildroot.</p>
                <p className="mb-3 animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong>Middleware:</strong> ROS/ROS2 for robotics, DDS for real-time communication, IoT protocols (MQTT, CoAP), and OTA update systems.</p>
                <p className="mb-3 animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong>Embedded Application Development:</strong> Cross-platform application development with cloud connectivity, IoT integration, and user interface design.</p>
            </div>
        </>
    );
}