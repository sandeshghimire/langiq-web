export default function Home() {
  return (
    <div>

      {/* Professional Summary */}
      <div className="p-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">About Soccentric</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>At Soccentric, we specialize in embedded systems consulting and development, providing comprehensive solutions for hardware-software integration, firmware development, and system optimization across various embedded platforms. Our expertise spans from low-level hardware interfaces to high-level application development, ensuring robust, efficient, and scalable embedded solutions for diverse industries and applications.</strong>
        </p>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Our Core Services:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-6">
          <li><strong>Hardware Engineering:</strong> Custom board design, schematic development, PCB layout, component selection, and prototyping for embedded systems.</li>

          <li><strong>Operating System Development:</strong> Embedded Linux customization, RTOS implementation, kernel development, and system integration.</li>

          <li><strong>Driver Development:</strong> Device driver implementation for communication interfaces, sensors, displays, and specialized hardware components.</li>

          <li><strong>Firmware Development:</strong> Low-level firmware programming, bootloader development, secure boot implementation, and real-time systems.</li>

          <li><strong>Middleware Solutions:</strong> Communication protocols, data processing frameworks, system services, and interoperability layers.</li>

          <li><strong>Application Development:</strong> User interface design, control systems, data processing applications, and cross-platform software solutions.</li>
        </ul>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Platforms We Support:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-6">
          <li><strong><a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a></strong> - Programmable SoC platforms with FPGA fabric and ARM processors</li>

          <li><strong><a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a></strong> - AI-enabled embedded computing with GPU acceleration</li>

          <li><strong><a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a></strong> - High-performance application processors for multimedia and industrial applications</li>

          <li><strong><a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a></strong> - Versatile single-board computers for prototyping and production</li>
        </ul>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Technologies & Frameworks We Use:</h3>
        <div className="text-gray-700 mb-6">
          <p className="mb-3"><strong>Programming & Development:</strong> C/C++, Python, Embedded Linux, Yocto, Buildroot, Qt, GTK+</p>
          <p className="mb-3"><strong>Hardware & Interfaces:</strong> GPIO, I2C, SPI, UART, USB, Ethernet, CAN, PCIe, FPGA</p>
          <p className="mb-3"><strong>Operating Systems:</strong> Linux (Kernel, Device Drivers), FreeRTOS, Zephyr, Bare-metal</p>
          <p className="mb-3"><strong>Tools & Platforms:</strong> Xilinx Vivado/Vitis, NVIDIA JetPack/SDK, ARM DS-5, GDB, OpenOCD, JTAG</p>
          <p className="mb-3"><strong>Protocols & Standards:</strong> TCP/IP, MQTT, CoAP, Modbus, PROFIBUS, Industrial Ethernet</p>
        </div>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Industries We Serve:</h3>
        <ul className="text-gray-700 space-y-2 ml-4">
          <li><strong>Industrial Automation:</strong> PLC systems, SCADA integration, real-time control, sensor networks, and industrial communication protocols.</li>
          <li><strong>IoT & Edge Computing:</strong> Connected devices, edge analytics, low-power designs, wireless communication, and cloud integration.</li>
          <li><strong>Automotive:</strong> ECU development, infotainment systems, ADAS integration, CAN bus networks, and automotive-grade software.</li>
          <li><strong>Medical Devices:</strong> Regulatory-compliant embedded systems, patient monitoring, diagnostic equipment, and medical device integration.</li>
          <li><strong>Consumer Electronics:</strong> Smart home devices, wearables, multimedia systems, and user interface development.</li>
          <li><strong>Aerospace & Defense:</strong> Mission-critical systems, avionics, unmanned systems, and ruggedized embedded solutions.</li>
        </ul>
      </div>
    </div>
  );
}


