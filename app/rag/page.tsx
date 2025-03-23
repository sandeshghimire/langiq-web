import Link from 'next/link';

export default function RAG() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            Retrieval-Augmented Generation
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Enhance AI responses with external knowledge for more accurate, up-to-date, and contextually relevant outputs
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-blue-400 mb-6">What is RAG?</h2>
                            <p className="text-gray-300 mb-4">
                                Retrieval-Augmented Generation (RAG) combines the power of large language models with external knowledge retrieval.
                                This approach allows AI systems to access and reference specific information beyond their training data.
                            </p>
                            <p className="text-gray-300 mb-4">
                                By integrating retrieval mechanisms, RAG overcomes knowledge limitations, reduces hallucinations,
                                and provides sourced, verifiable information in generated responses.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Explore RAG Solutions
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-blue-400 mb-4">Key Benefits</h3>
                            <ul className="space-y-3">
                                {[
                                    "Access to up-to-date information",
                                    "Enhanced factual accuracy",
                                    "Domain-specific knowledge integration",
                                    "Reduced hallucinations and misinformation",
                                    "Verifiable sources and citations",
                                    "Customizable knowledge bases",
                                    "Proprietary data utilization",
                                    "Improved context awareness"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-blue-400 mb-6">RAG Architecture Components</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Document Indexing",
                                    description: "Transform documents into vector embeddings for efficient semantic search and retrieval."
                                },
                                {
                                    title: "Query Processing",
                                    description: "Analyze user queries and retrieve relevant context from the knowledge base."
                                },
                                {
                                    title: "Augmented Generation",
                                    description: "Combine retrieved information with AI language capabilities to generate accurate responses."
                                }
                            ].map((component, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-blue-400 mb-3">{component.title}</h3>
                                    <p className="text-gray-300">{component.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Leverage Your Knowledge Assets</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Connect your proprietary data with state-of-the-art AI for intelligent, informed responses
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
