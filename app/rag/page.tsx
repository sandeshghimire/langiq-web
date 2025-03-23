import Link from 'next/link';
import Image from 'next/image';

// Sample code string to avoid JSX evaluation issues
const codeExample = `from langiq_rag import RAGClient

# Initialize the RAG client
rag_client = RAGClient(
  vector_store="pinecone",
  embedding_model="openai"
)

# Add documents to your knowledge base
rag_client.add_documents(
  documents=["path/to/docs1.pdf", "path/to/docs2.pdf"],
  chunk_size=1000,
  chunk_overlap=200
)

# Query your knowledge base with RAG
response = rag_client.query(
  query="What are the key benefits of RAG?",
  model="gpt-4",
  similarity_threshold=0.75
)

# Display the response with citations
print(response.answer)
print(f"Source documents: {response.citations}")`;

export default function RAG() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero section with animated gradient */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900 animate-gradient-slow"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse-slow">
                            Retrieval-Augmented Generation
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                            Enhance AI responses with external knowledge for more accurate, up-to-date, and contextually relevant outputs
                        </p>
                        <a
                            href="https://github.com/langiq/rag-framework"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-blue-500/30 group"
                        >
                            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Get Started on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Introduction section with code editor */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 opacity-80"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="font-handwritten text-4xl text-blue-400 mb-6">What is RAG?</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Retrieval-Augmented Generation (RAG) combines the power of large language models with external knowledge retrieval.
                                This approach allows AI systems to access and reference specific information beyond their training data.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                By integrating retrieval mechanisms, RAG overcomes knowledge limitations, reduces hallucinations,
                                and provides sourced, verifiable information in generated responses.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg px-4 py-2">
                                    <span className="text-blue-300 font-semibold">Vector Databases</span>
                                </div>
                                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg px-4 py-2">
                                    <span className="text-blue-300 font-semibold">Embeddings</span>
                                </div>
                                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg px-4 py-2">
                                    <span className="text-blue-300 font-semibold">Document Chunking</span>
                                </div>
                                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg px-4 py-2">
                                    <span className="text-blue-300 font-semibold">Semantic Search</span>
                                </div>
                                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg px-4 py-2">
                                    <span className="text-blue-300 font-semibold">Knowledge Bases</span>
                                </div>
                            </div>
                        </div>
                        <div className="transform hover:scale-[1.02] transition-all duration-300">
                            {/* Code editor-like component with fancy styling */}
                            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950 border border-blue-700/20 hover:border-blue-600/40 transition-colors">
                                {/* Editor header */}
                                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                                    <div className="flex items-center">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="ml-4 text-gray-400 text-sm">rag_example.py</span>
                                    </div>
                                    <div className="text-xs text-gray-500">LangIQ RAG Framework Demo</div>
                                </div>

                                {/* Editor content */}
                                <div className="p-5 font-mono text-sm">
                                    <pre className="language-python text-gray-300 overflow-x-auto">
                                        <code>{codeExample}</code>
                                    </pre>
                                </div>

                                {/* Editor footer */}
                                <div className="bg-gray-800 px-4 py-1 text-xs text-gray-500 flex justify-between border-t border-gray-700">
                                    <div>Python 3.10.4</div>
                                    <div>LangIQ RAG Framework v1.1.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section with cards */}
            <section className="py-24 bg-gradient-to-b from-gray-950 to-blue-950/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-handwritten text-5xl text-blue-400 mb-6">Key Benefits</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Unlock the full potential of LLMs with our RAG Framework
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Up-to-date Information</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Access the latest information beyond LLM training cutoffs, keeping your AI responses current and relevant.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Enhanced Factual Accuracy</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Ground AI responses in factual data retrieved from your trusted knowledge sources to reduce errors and hallucinations.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Domain-specific Knowledge</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Build specialized AI applications with domain expertise by integrating niche or industry-specific content.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Verifiable Sources</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Provide transparent citations to source documents, increasing trust and allowing users to verify information.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Proprietary Data Integration</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Leverage your organization's proprietary information securely without exposing it to external model training.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Improved Context Awareness</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Provide focused, relevant context to LLMs at inference time for more accurate and contextually appropriate responses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RAG Architecture Components */}
            <section className="py-24 bg-gradient-to-b from-blue-950/30 to-gray-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-handwritten text-5xl text-blue-400 mb-6">RAG Architecture Components</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The building blocks of effective retrieval-augmented generation systems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Document Indexing</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Transform documents into vector embeddings for efficient semantic search and retrieval.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Query Processing</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Analyze user queries and retrieve relevant context from the knowledge base.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-800/20 shadow-lg hover:shadow-blue-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-blue-300 mb-3">Augmented Generation</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Combine retrieved information with AI language capabilities to generate accurate responses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-gradient-to-br from-blue-950/30 to-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="animate-float">
                        <h2 className="font-handwritten text-5xl mb-8 text-white">Leverage Your Knowledge Assets</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Connect your proprietary data with state-of-the-art AI for intelligent, informed responses
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://github.com/langiq/rag-framework"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            Explore GitHub Repo
                        </a>
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
