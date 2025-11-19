export default function PlatformSection() {
    return (
        <>
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
        </>
    );
}