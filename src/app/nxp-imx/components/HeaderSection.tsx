export default function HeaderSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">NXP i.MX Reference Design</h1>

                <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1 text-sm md:text-base">
                    With over a decade of experience developing with NXP i.MX application processors, I've delivered comprehensive embedded solutions across the i.MX family from i.MX6 to i.MX9 series. This page showcases practical implementations in industrial automation, IoT gateways, and edge computing applications. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>

                <div className="text-gray-700 animate-fadeInUp stagger-1">
                    <p className="font-semibold mb-2">What's Offered:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial-grade carrier board designs and schematics</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Yocto meta-layers for custom Linux distributions</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>BSP packages with U-Boot and kernel configurations</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Industrial protocol drivers (EtherCAT, PROFINET, CAN)</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Middleware integration examples (OPC UA, MQTT, Modbus)</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>HMI and control application reference implementations</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <img
                    src="/FRDM-i.MX93-TOP.png"
                    alt="NXP i.MX Platform"
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