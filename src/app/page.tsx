export default function Home() {
  return (
    <div>

      {/* Professional Summary */}
      <div className="p-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">About LangIQ</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>At LangIQ, we specialize in embedded systems consulting and development, providing comprehensive solutions for hardware-software integration, firmware development, and system optimization across various embedded platforms. Our expertise spans from low-level hardware interfaces to high-level application development, ensuring robust, efficient, and scalable embedded solutions for diverse industries and applications.</strong>
        </p>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Our Core Services:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-6">
          <li><strong><a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq:</a></strong> Comprehensive development services for Zynq SoC platforms, including programmable logic design, ARM processing, and heterogeneous computing solutions.</li>

          <li><strong><a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson:</a></strong> AI-enabled embedded development on Jetson platforms, combining GPU acceleration with embedded system expertise for edge computing applications.</li>

          <li><strong><a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX:</a></strong> Full-stack development for i.MX application processors, from bare-metal programming to Linux-based systems and multimedia applications.</li>

          <li><strong><a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi:</a></strong> Prototyping and product development using Raspberry Pi platforms, leveraging its versatility for IoT, robotics, and embedded applications.</li>
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


