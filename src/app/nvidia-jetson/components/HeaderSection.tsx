export default function HeaderSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase animate-fadeInUp">NVIDIA Jetson Reference Design</h1>

                <p className="text-gray-700 leading-relaxed mb-3 animate-fadeInUp stagger-1 text-sm md:text-base">
                    Over the past decade, I've developed extensive expertise with NVIDIA Jetson platforms, leveraging their powerful GPU acceleration and AI processing capabilities. This page showcases practical implementations across the Jetson ecosystem, from edge AI applications to robotics and autonomous systems. All projects are available on my <a href="https://github.com/Soccentric" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>

                <div className="text-gray-700 animate-fadeInUp stagger-1 text-sm md:text-base">
                    <p className="font-semibold mb-2">What's Offered:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Complete hardware designs with schematics and PCB layouts</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Custom Yocto/Linux BSP configurations and recipes</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>Device drivers and kernel modules source code</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>AI/ML inference examples with TensorRT optimization</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>ROS/ROS2 integration packages for robotics</li>
                        <li className="flex items-start"><span className="text-gray-600 mr-2">•</span>End-to-end application examples with documentation</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <img
                    src="/som-k26-main.jpg"
                    alt="NVIDIA Jetson Platform"
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