import Link from 'next/link';
import Image from 'next/image';

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
                            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-teal-800/30">
                                <h3 className="font-handwritten text-xl text-teal-400 mb-2">LangIQ Tools & MCP Library</h3>
                                <p className="text-gray-300 mb-3">
                                    Our GitHub library provides a robust framework for integrating external tools with language models
                                    and implementing Multi-Context Processing. Easily connect your LLMs to APIs, databases, and specialized
                                    functions.
                                </p>
                                <a
                                    href="https://github.com/langiq/tools-mcp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-teal-400 hover:text-teal-300"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    Explore our GitHub Repository
                                </a>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Explore Tool Integration
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/tools-mcp-system.jpg"
                                    alt="LangIQ Tools Integration and MCP System"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-xl"
                                />
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
