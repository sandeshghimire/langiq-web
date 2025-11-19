export default function HeaderSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">Raspberry Pi Reference Design</h1>

                <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1 text-sm md:text-base">
                    With extensive experience across the entire Raspberry Pi ecosystem from Pi Zero to Raspberry Pi 5, I've developed comprehensive embedded solutions for IoT, robotics, and edge computing applications. This page showcases practical implementations leveraging the Pi's versatility and community ecosystem. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>

                <div className="text-gray-700 animate-fadeInUp stagger-1">
                    <p className="font-semibold mb-2">What's Offered:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Custom HAT designs with full hardware documentation</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Raspbian/Ubuntu customization scripts and configurations</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>GPIO, I2C, SPI driver examples and libraries</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>IoT gateway implementations with cloud integration</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Sensor integration examples and data acquisition code</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Python/C++ application frameworks for rapid development</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <img
                    src="/CM5-V2_1.jpg"
                    alt="Raspberry Pi Platform"
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