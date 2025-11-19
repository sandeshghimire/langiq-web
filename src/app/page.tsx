export default function Home() {
  return (
    <div>
      {/* Professional Summary */}
      <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200 animate-fadeInUp stagger-1">
        <h2 className="text-lg md:text-xl font-semibold text-black mb-3 uppercase tracking-wide">About Soccentric</h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
          <strong>At Soccentric, we specialize in embedded systems consulting and development, providing comprehensive solutions for hardware-software integration, firmware development, and system optimization across various embedded platforms. Our expertise spans from low-level hardware interfaces to high-level application development, ensuring robust, efficient, and scalable embedded solutions for diverse industries and applications.</strong>
        </p>

        <h3 className="text-base md:text-lg font-semibold text-black mb-2 uppercase tracking-wide animate-fadeInUp stagger-2">Our Core Services:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-4 text-sm md:text-base">
          <li className="animate-fadeInUp stagger-2 hover:translate-x-2 transition-smooth"><strong>Hardware Engineering:</strong> Custom board design, schematic development, PCB layout, component selection, and prototyping for embedded systems.</li>

          <li className="animate-fadeInUp stagger-3 hover:translate-x-2 transition-smooth"><strong>Operating System Development:</strong> Embedded Linux customization, RTOS implementation, kernel development, and system integration.</li>

          <li className="animate-fadeInUp stagger-4 hover:translate-x-2 transition-smooth"><strong>Driver Development:</strong> Device driver implementation for communication interfaces, sensors, displays, and specialized hardware components.</li>

          <li className="animate-fadeInUp stagger-5 hover:translate-x-2 transition-smooth"><strong>Firmware Development:</strong> Low-level firmware programming, bootloader development, secure boot implementation, and real-time systems.</li>

          <li className="animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong>Middleware Solutions:</strong> Communication protocols, data processing frameworks, system services, and interoperability layers.</li>

          <li className="animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong>Application Development:</strong> User interface design, control systems, data processing applications, and cross-platform software solutions.</li>
        </ul>

        <h3 className="text-base md:text-lg font-semibold text-black mb-2 uppercase tracking-wide animate-fadeInUp stagger-3">Platforms We Support:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-4 text-sm md:text-base">
          <li className="animate-fadeInUp stagger-3 hover:translate-x-2 transition-smooth"><strong><a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a></strong> - Programmable SoC platforms with FPGA fabric and ARM processors</li>

          <li className="animate-fadeInUp stagger-4 hover:translate-x-2 transition-smooth"><strong><a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a></strong> - AI-enabled embedded computing with GPU acceleration</li>

          <li className="animate-fadeInUp stagger-5 hover:translate-x-2 transition-smooth"><strong><a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a></strong> - High-performance application processors for multimedia and industrial applications</li>

          <li className="animate-fadeInUp stagger-6 hover:translate-x-2 transition-smooth"><strong><a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a></strong> - Versatile single-board computers for prototyping and production</li>
        </ul>


      </div>
    </div>
  );
}


