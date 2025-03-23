import Link from 'next/link';

export default function FineTuning() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                            Fine Tuning
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Customize AI language models to excel at your specific tasks through advanced fine-tuning techniques
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-amber-400 mb-6">Why Fine-Tune Models?</h2>
                            <p className="text-gray-300 mb-4">
                                Fine-tuning adapts pre-trained language models to specific domains, tasks, or stylistic requirements
                                through additional training on carefully curated datasets.
                            </p>
                            <p className="text-gray-300 mb-4">
                                This process allows organizations to create AI models that better understand industry terminology,
                                follow consistent formatting, adhere to brand guidelines, and perform specialized tasks with higher accuracy.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Explore Fine-Tuning Options
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-amber-400 mb-4">Fine-Tuning Benefits</h3>
                            <ul className="space-y-3">
                                {[
                                    "Domain-specific expertise and terminology",
                                    "Consistent response formats and styles",
                                    "Brand voice and tone alignment",
                                    "Reduced need for complex prompting",
                                    "Improved task-specific performance",
                                    "More efficient resource utilization",
                                    "Enhanced compliance with guidelines",
                                    "Competitive differentiation"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-amber-400 mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-amber-400 mb-6">Our Fine-Tuning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Requirements Analysis",
                                    description: "Define specific objectives, performance targets, and success criteria for your fine-tuned model."
                                },
                                {
                                    title: "Data Preparation",
                                    description: "Collect, clean, and structure training data to effectively represent desired model behavior."
                                },
                                {
                                    title: "Training & Optimization",
                                    description: "Execute fine-tuning with optimized parameters and evaluate against performance benchmarks."
                                },
                                {
                                    title: "Deployment & Monitoring",
                                    description: "Implement the model in production with ongoing performance monitoring and refinement."
                                }
                            ].map((phase, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-amber-400 mb-3">{phase.title}</h3>
                                    <p className="text-gray-300">{phase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-amber-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Ready for a Custom AI Solution?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let us help you develop a fine-tuned model that perfectly matches your specific requirements
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-amber-500/30"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
