import Link from 'next/link';
import Image from 'next/image';

// Sample code string to avoid JSX evaluation issues
const codeExample = `import { LangiqSDK } from 'langiq-sdk';

// Initialize the SDK with your API key
const langiq = new LangiqSDK({
  apiKey: process.env.LANGIQ_API_KEY
});

// App development with LangIQ libraries
async function buildIntelligentApp() {
  // Initialize RAG system
  const ragEngine = langiq.rag.create({
    documents: './data/knowledge_base',
    embedding: 'text-embedding-3-large',
    indexType: 'hybrid'
  });

  // Set up model with fine-tuning and augmentation
  const model = langiq.model.create({
    baseModel: 'gpt-4',
    augmentations: ['factuality', 'reasoning', 'creativity'],
    fineTuned: langiq.finetuning.load('customer-support-v2')
  });

  // Configure tools for external capabilities
  const tools = langiq.tools.registerAll([
    langiq.tools.webSearch(),
    langiq.tools.database(dbConfig),
    langiq.tools.apiConnector(apiConfig)
  ]);

  // Create an agent with multiple capabilities
  const agent = langiq.agent.create({
    model: model,
    rag: ragEngine,
    tools: tools,
    mcp: langiq.mcp.enable(['research', 'coding', 'analysis'])
  });

  // Run your application
  return await agent.execute({
    task: "Build a market analysis dashboard for renewable energy sector",
    outputFormat: "react-component"
  });
}`;

export default function AppDevelopment() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero section with animated gradient */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-900 animate-gradient-slow"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse-slow">
                            LangIQ App Development
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                            Build powerful AI applications with LangIQ's comprehensive suite of libraries and tools
                        </p>
                        <a
                            href="https://github.com/langiq/sdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-teal-600/80 hover:bg-teal-600 backdrop-blur-sm px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-teal-500/30 group"
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
                            <h2 className="font-handwritten text-4xl text-teal-400 mb-6">Build with LangIQ Libraries</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Develop advanced AI applications using our comprehensive suite of libraries that work together
                                seamlessly to enhance your application's intelligence and capabilities.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                From RAG and fine-tuning to tools integration and agent frameworks, LangIQ provides everything
                                developers need to build production-ready AI applications.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">RAG Library</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Langiq_pe</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Tools & MCP</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Model Augmentation</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Fine-tuning</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Agent Framework</span>
                                </div>
                            </div>
                        </div>
                        <div className="transform hover:scale-[1.02] transition-all duration-300">
                            {/* Code editor-like component with fancy styling */}
                            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950 border border-teal-700/20 hover:border-teal-600/40 transition-colors">
                                {/* Editor header */}
                                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                                    <div className="flex items-center">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="ml-4 text-gray-400 text-sm">app_development.js</span>
                                    </div>
                                    <div className="text-xs text-gray-500">LangIQ SDK Demo</div>
                                </div>

                                {/* Editor content */}
                                <div className="p-5 font-mono text-sm">
                                    <pre className="language-javascript text-gray-300 overflow-x-auto">
                                        <code>{codeExample}</code>
                                    </pre>
                                </div>

                                {/* Editor footer */}
                                <div className="bg-gray-800 px-4 py-1 text-xs text-gray-500 flex justify-between border-t border-gray-700">
                                    <div>LangIQ SDK v2.1.0</div>
                                    <div>Intelligent Application Framework</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section with cards */}
            <section className="py-24 bg-gradient-to-b from-gray-950 to-teal-950/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-handwritten text-5xl text-teal-400 mb-6">LangIQ Libraries</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A comprehensive ecosystem of libraries for building advanced AI applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">LangIQ RAG Library</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Advanced retrieval augmented generation with hybrid search, semantic chunking, and
                                context management for knowledge-intensive applications.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Langiq_pe Library</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Performance engineering for LLMs with prompt optimization, caching, batching, and
                                distributed inference for production applications.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Tools & MCP Library</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Connect AI models to external tools and manage multiple processing contexts for
                                complex problem-solving in your applications.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Model Augmentation Library</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Enhance foundation models with specialized capabilities for reasoning, creativity,
                                factuality, and domain-specific knowledge.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Fine-tuning Library</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Streamlined fine-tuning workflows with data preparation, training management,
                                evaluation tools, and model deployment optimizations.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Agent Library</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Build autonomous AI agents with planning, memory, reflection capabilities and
                                multi-agent collaboration frameworks for complex tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-gradient-to-br from-teal-950/30 to-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="animate-float">
                        <h2 className="font-handwritten text-5xl mb-8 text-white">Build Intelligent Apps Today</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Leverage the full suite of LangIQ libraries to create powerful AI-driven applications
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://github.com/langiq/sdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-teal-500/30"
                        >
                            Get the SDK
                        </a>
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg"
                        >
                            Get Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
