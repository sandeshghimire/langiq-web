export default function Summary() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h1 className="text-xl font-bold text-black mb-2 uppercase">AMD Xilinx Zynq</h1>
            <p className="text-gray-700 leading-relaxed font-normal mb-6">

                AMD Zynq is a System-on-Chip platform combining ARM processors with programmable FPGA fabric on one chip. The Processing System (PS) runs standard software on ARM Cortex cores, while Programmable Logic (PL) handles hardware acceleration and custom interfaces. This hybrid architecture enables hardware-software co-design for applications requiring both processing power and real-time custom logic, including industrial automation, automotive, and communications systems.
            </p>

            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Why Choose Soccentric's AMD Xilinx Zynq platform </h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">

                Soccentric delivers 15+ years of proven AMD Xilinx Zynq expertise across the complete development stack. From custom SoC/SOM hardware design to Yocto/PetaLinux OS development, device drivers, and middleware integration (ROS1/2, DDS). Our comprehensive capabilities include cross-industry application development, OTA updates, and robust fault/alarm systems. Choose Soccentric for production-ready, enterprise-grade Zynq solutions with full hardware-software co-design expertise.
            </p>
        </div>
    );
}
