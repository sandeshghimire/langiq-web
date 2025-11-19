export default function HeaderSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">AMD Xilinx Zynq Reference Design</h1>

                <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1 text-sm md:text-base">
                    With over 12 years of experience working with AMD Xilinx Zynq, Zynq Ultrascale Plus, and Versal SoC platforms, including SoC and SoM modules such as Ultrazed and KV260, I've developed extensive expertise. Using the ZUBOARD ICZ as a reference design foundation, this page showcases practical implementations across the entire Zynq ecosystem, from hardware design to application development. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>

                <div className="text-gray-700 animate-fadeInUp stagger-1">
                    <p className="font-semibold mb-2">What's Offered:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>FPGA designs with Verilog/VHDL source code and IP cores</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Vivado/Vitis project files and build scripts</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>PetaLinux/Yocto configurations for Zynq platforms</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Custom device drivers for FPGA-PS interfaces</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>RPU firmware examples for real-time processing</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Complete system-on-chip application examples</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <img
                    src="/zuboard.png"
                    alt="ZUBOARD ICZ Reference Design"
                    className="max-w-sm md:max-w-md h-auto rounded-lg shadow-lg animate-fadeIn stagger-2 hover-lift"
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                        WebkitMaskComposite: 'source-in'
                    }}
                />
            </div>
        </div>
    );
}