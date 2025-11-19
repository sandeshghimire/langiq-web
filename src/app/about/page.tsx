export default function About() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            <h1 className="text-xl md:text-2xl font-bold text-black mb-4 uppercase animate-fadeInUp">About Me</h1>

            <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp stagger-1 text-sm md:text-base">
                With over a decade of consulting experience in embedded systems development, I specialize in comprehensive hardware-software integration across the entire embedded technology stack. My expertise spans from low-level hardware design to high-level application development, ensuring robust, efficient, and scalable solutions for diverse industries and applications.
            </p>

            <h2 className="text-lg md:text-xl font-semibold text-black mb-3 uppercase tracking-wide animate-fadeInUp stagger-2">Core Expertise Areas:</h2>
            <div className="text-gray-700 mb-4 text-sm md:text-base">
                <p className="mb-3 animate-fadeInUp stagger-2 hover:translate-x-2 transition-smooth"><strong>Hardware Development:</strong> Custom board design, schematic development, PCB layout, component selection, and prototyping for embedded systems.</p>
                <p className="mb-3 animate-fadeInUp stagger-3 hover:translate-x-2 transition-smooth"><strong>Firmware Development:</strong> Low-level firmware programming, bootloader development, secure boot implementation, and real-time systems programming.</p>
                <p className="mb-3 animate-fadeInUp stagger-4 hover:translate-x-2 transition-smooth"><strong>FPGA & RTL Development:</strong> Digital design, HDL coding (Verilog/VHDL), synthesis, timing analysis, and FPGA implementation for custom logic and interfaces.</p>
                <p className="mb-3 animate-fadeInUp stagger-5 hover:translate-x-2 transition-smooth"><strong>Embedded Linux:</strong> Kernel customization, bootloader development (U-Boot), device driver implementation, and system integration using Yocto/Buildroot.</p>
                <p className="mb-3 animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong>Middleware:</strong> ROS/ROS2 for robotics, DDS for real-time communication, IoT protocols (MQTT, CoAP), and OTA update systems.</p>
                <p className="mb-3 animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong>Embedded Application Development:</strong> Cross-platform application development with cloud connectivity, IoT integration, and user interface design.</p>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black mb-3 uppercase tracking-wide animate-fadeInUp stagger-3">Platform Experience</h2>
            <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp stagger-3 text-sm md:text-base">
                Through this website, I share my extensive experience working with four major embedded platforms that represent the cutting edge of embedded computing technology. Each platform page showcases practical implementations, development techniques, and real-world applications across various industries.
            </p>

            <div className="text-gray-700 mb-4 text-sm md:text-base">
                <p className="mb-2 animate-fadeInUp stagger-4 hover:translate-x-2 transition-smooth"><strong><a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a></strong> - Programmable SoC platforms combining FPGA fabric with ARM processors for heterogeneous computing solutions.</p>
                <p className="mb-2 animate-fadeInUp stagger-4 hover:translate-x-2 transition-smooth"><strong><a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a></strong> - AI-enabled embedded computing platforms with GPU acceleration for edge computing and AI applications.</p>
                <p className="mb-2 animate-fadeInUp stagger-5 hover:translate-x-2 transition-smooth"><strong><a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a></strong> - High-performance application processors optimized for multimedia, industrial, and automotive applications.</p>
                <p className="mb-2 animate-fadeInUp stagger-5 hover:translate-x-2 transition-smooth"><strong><a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a></strong> - Versatile single-board computers ideal for prototyping, IoT projects, and production embedded systems.</p>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-black mb-3 uppercase tracking-wide animate-fadeInUp stagger-4">Consulting Approach</h2>
            <p className="text-gray-700 leading-relaxed animate-fadeInUp stagger-5 text-sm md:text-base">
                My consulting services focus on delivering end-to-end embedded solutions that bridge the gap between hardware capabilities and software requirements. Whether you're developing a new product, optimizing an existing system, or integrating complex embedded technologies, I provide the technical expertise and practical experience needed to bring your embedded projects to successful completion.
            </p>
        </div>
    );
}


