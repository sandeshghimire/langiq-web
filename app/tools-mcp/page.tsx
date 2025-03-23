import Link from 'next/link';

export default function ToolsAndMCP() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
                            Tools and MCP
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Empower AI models with external tools and Multi-Context Processing for complex problem-solving
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-teal-400 mb-6">Tools Integration</h2>
                            <p className="text-gray-300 mb-4">
                                AI models can be significantly enhanced through integration with external tools and services.
                                By connecting language models to specialized tools, we enable them to perform actions beyond text generation.
                            </p>
                            <p className="text-gray-300 mb-4">
                                These tools can include API calls, database queries, code execution, mathematical calculations,
                                image generation, and more, expanding the AI's capabilities to solve complex, multi-step problems.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Explore Tool Integration
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-teal-400 mb-4">Common AI Tools</h3>
                            <ul className="space-y-3">
                                {[
                                    "Web search and browsing",
                                    "Database interactions",
                                    "Code execution environments",
                                    "Data analysis and visualization",
                                    "API integrations",
                                    "File and document processing",
                                    "Image and audio generation",
                                    "External knowledge bases"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-teal-400 mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-teal-400 mb-6">Multi-Context Processing (MCP)</h2>
                        <p className="text-gray-300 mb-8">
                            Multi-Context Processing enables AI models to maintain and process multiple contexts simultaneously,
                            allowing for more sophisticated reasoning and problem-solving across different domains and information sources.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Context Management",
                                    description: "Techniques for efficiently handling multiple, potentially conflicting information streams."
                                },
                                {
                                    title: "Cross-Context Reasoning",
                                    description: "Methods for drawing connections and inferences across disparate knowledge domains."
                                },
                                {
                                    title: "Dynamic Context Switching",
                                    description: "Strategies for prioritizing relevant contexts based on evolving conversational requirements."
                                }
                            ].map((component, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-teal-400 mb-3">{component.title}</h3>
                                    <p className="text-gray-300">{component.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-teal-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Enhance Your AI Capabilities</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let us help you integrate powerful tools and advanced context processing into your AI solutions
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-teal-500/30"
                    >
                        Request a Demo
                    </Link>
                </div>
            </section>
        </div>
    );
}
