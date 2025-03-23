import Link from 'next/link';

export default function PromptEngineering() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                            Prompt Engineering
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Master the art of crafting effective prompts to maximize AI model capabilities
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-purple-400 mb-6">Why Prompt Engineering Matters</h2>
                            <p className="text-gray-300 mb-4">
                                Prompt engineering is the science and art of crafting inputs to AI language models to produce desired outputs.
                                As language models become more sophisticated, the way we communicate with them significantly impacts their effectiveness.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Well-designed prompts can be the difference between mediocre and exceptional AI performance, helping models understand context,
                                follow instructions precisely, and deliver relevant, accurate responses.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Get Expert Help
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-purple-400 mb-4">Key Techniques</h3>
                            <ul className="space-y-3">
                                {[
                                    "Context setting and framing",
                                    "Role-based prompting",
                                    "Chain-of-thought reasoning",
                                    "Few-shot examples and demonstrations",
                                    "Instruction clarity and specificity",
                                    "Constraint specification",
                                    "Output format control",
                                    "Iterative refinement strategies"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-400 mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-purple-400 mb-6">Our Approach to Prompt Engineering</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Analysis",
                                    description: "We analyze your specific use case and desired outcomes to identify the most effective prompting strategies."
                                },
                                {
                                    title: "Design",
                                    description: "Our experts craft customized prompts, incorporating advanced techniques to optimize AI performance."
                                },
                                {
                                    title: "Refinement",
                                    description: "Through iterative testing and optimization, we continuously improve prompt effectiveness."
                                }
                            ].map((phase, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{phase.title}</h3>
                                    <p className="text-gray-300">{phase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Ready to Enhance Your AI Capabilities?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Our prompt engineering expertise can help you unlock the full potential of AI language models
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
