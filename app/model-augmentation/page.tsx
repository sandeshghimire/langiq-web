import Link from 'next/link';

export default function ModelAugmentation() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                            Model Augmentation
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Expand AI capabilities beyond their native limitations through innovative augmentation techniques
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-indigo-400 mb-6">What is Model Augmentation?</h2>
                            <p className="text-gray-300 mb-4">
                                Model augmentation involves enhancing AI language models with additional capabilities,
                                specialized knowledge, or improved reasoning abilities without altering their fundamental architecture.
                            </p>
                            <p className="text-gray-300 mb-4">
                                These techniques help overcome inherent model limitations, extend functionality,
                                and optimize performance for specific tasks or domains without the resource-intensive
                                process of retraining from scratch.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Discover Augmentation Solutions
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-indigo-400 mb-4">Augmentation Approaches</h3>
                            <ul className="space-y-3">
                                {[
                                    "Knowledge injection and retrieval",
                                    "Specialized adapter modules",
                                    "Reasoning frameworks integration",
                                    "Multi-model orchestration",
                                    "Context window expansion techniques",
                                    "Domain-specific enhancement layers",
                                    "Tool integration and function calling",
                                    "Hybrid AI architectures"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-indigo-400 mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-indigo-400 mb-6">Our Augmentation Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Assessment",
                                    description: "Analyze your use case to identify model limitations and augmentation opportunities."
                                },
                                {
                                    title: "Custom Augmentation",
                                    description: "Design and implement specialized augmentation solutions tailored to your requirements."
                                },
                                {
                                    title: "Integration",
                                    description: "Seamlessly integrate augmented capabilities into your existing AI systems and workflows."
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-indigo-400 mb-3">{service.title}</h3>
                                    <p className="text-gray-300">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-indigo-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Push Beyond AI Limitations</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Enhance your AI systems with advanced augmentation techniques tailored to your specific needs
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-indigo-500/30"
                    >
                        Start the Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
}
