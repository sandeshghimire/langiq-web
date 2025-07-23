export default function Home() {
  return (
    <div>

      {/* Professional Summary */}
      <div className="p-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">About Soccentric</h2>
        <p className="text-gray-700 leading-relaxed  mb-6 ">
          <strong>At Soccentric, we provide comprehensive consulting services in embedded systems by delivering complete turnkey solutions encompassing both hardware and embedded software development. With over 25 years of embedded systems experience and 10+ years as independent consultants, our expertise spans across cutting-edge platforms including <a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a>, <a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a>, <a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a>, and <a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a> solutions.</strong>
        </p>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Our Core Services:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-6">
          <li><strong>Hardware Development:</strong> We specialize in custom hardware design and architecture for platforms including <a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a>, <a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a>, <a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a>, and <a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a>, from initial concept through production. Our services include schematic capture, PCB layout design, board bring-up, and custom enclosure design featuring both active and passive cooling solutions tailored to your application requirements.</li>
          <li><strong>Operating System Development:</strong> We develop Linux-based custom operating systems using the Yocto build environment for <a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a>, <a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a>, <a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a>, and <a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a> platforms. Our team optimizes kernels for specific architectures and implements PREEMPT_RT patches for real-time performance critical applications.</li>
          <li><strong>Driver Development:</strong> We create custom Linux-based drivers for a wide range of devices including IMUs, cameras, displays, motor controllers, and other specialized peripherals across <a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a>, <a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a>, <a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a>, and <a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a> platforms to ensure seamless hardware-software integration.</li>
          <li><strong>Middleware Solutions:</strong> We customize and integrate various middleware solutions including DDS (Data Distribution Service), ROS1/ROS2, Protocol Buffers, MQTT, and other communication protocols optimized for <a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a>, <a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a>, <a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a>, and <a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a> platforms to meet your system's specific requirements.</li>
          <li><strong>Application Development:</strong> We develop custom applications across diverse industries including robotics, automotive, medical devices, defense, and aerospace sectors, leveraging <a href="/amd-xilinx-zynq" className="text-blue-600 hover:text-blue-800 underline">AMD Xilinx Zynq</a>, <a href="/nvidia-jetson" className="text-blue-600 hover:text-blue-800 underline">NVIDIA Jetson</a>, <a href="/nxp-imx" className="text-blue-600 hover:text-blue-800 underline">NXP i.MX</a>, and <a href="/raspberry-pi" className="text-blue-600 hover:text-blue-800 underline">Raspberry Pi</a> platforms, ensuring solutions that meet stringent industry standards and requirements.</li>
        </ul>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Industries We Work With:</h3>
        <ul className="text-gray-700 space-y-2 ml-4">
          <li><strong>Automotive:</strong> Advanced Driver Assistance Systems (ADAS), LiDAR processing systems, and automotive information systems designed for reliability and real-time performance.</li>
          <li><strong>Aerospace and Defense:</strong> Flight control systems engineered to meet demanding safety and performance specifications for critical mission applications.</li>
          <li><strong>Drone and UAV:</strong> Autonomous flight controllers, real-time navigation systems, and payload management solutions for commercial and industrial drone applications.</li>
          <li><strong>Robotics:</strong> Control systems for industrial automation, autonomous navigation, sensor fusion, and real-time decision-making platforms for robotic applications.</li>
          <li><strong>Medical:</strong> Innovative solutions including advanced eye examination systems and kidney diagnostic equipment, developed in compliance with medical device regulations and standards.</li>
        </ul>
      </div>
    </div>
  );
}


