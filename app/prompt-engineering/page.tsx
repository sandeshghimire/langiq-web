import Link from 'next/link';
import Image from 'next/image';

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
                            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-purple-800/30">
                                <h3 className="font-handwritten text-xl text-purple-400 mb-2">LangIQ Prompt Library</h3>
                                <p className="text-gray-300 mb-3">
                                    We've developed an open-source Python library with advanced prompt engineering techniques and templates.
                                    Access our toolkit on GitHub to supercharge your AI applications.
                                </p>
                                <a
                                    href="https://github.com/langiq/prompt-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-purple-400 hover:text-purple-300"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    Explore our GitHub Repository
                                </a>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Get Expert Help
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/prompt-engineering-code.jpg"
                                    alt="LangIQ Prompt Engineering Code Example"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-xl"
                                />
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
