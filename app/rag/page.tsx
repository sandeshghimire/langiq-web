"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Sample Python code string for RAG implementation
const codeExample = `from langiq_rag_library import LangiqRAGClient

# Initialize the RAG client with your preferred model
client = LangiqRAGClient(
  provider="openai",
  model="gpt-4"
)

# Process and index documents for the vector database
client.ingest_documents(
  sources=["reports/", "documentation.pdf", "data.xlsx"],
  chunk_size=512,
  overlap=50
)

# Query the vector database with RAG
response = client.query(
  question="What were our Q2 sales figures?",
  temperature=0.7,
  max_tokens=500
)

# Display the response with source attribution
print(response.text)
print(f"Source documents: {response.sources}")

# Get detailed performance metrics
metrics = client.get_metrics()
print(f"Response time: {metrics['response_time']}s")
print(f"Retrieved chunks: {metrics['chunks_retrieved']}")`;

// JavaScript code example for RAG
const jsCodeExample = `import { LangiqRAGClient } from 'langiq-rag-library';

// Initialize the RAG client with your preferred model
const client = new LangiqRAGClient({
  provider: "openai",
  model: "gpt-4"
});

// Process and index documents for the vector database
async function buildVectorDatabase() {
  await client.ingestDocuments({
    sources: ["reports/", "documentation.pdf", "data.xlsx"],
    chunkSize: 512,
    overlap: 50
  });
  
  console.log("Vector database created successfully");
}

// Query the vector database with RAG
async function queryDatabase() {
  const response = await client.query({
    question: "What were our Q2 sales figures?",
    temperature: 0.7,
    maxTokens: 500
  });

  // Display the response with source attribution
  console.log(response.text);
  console.log(\`Source documents: \${response.sources}\`);

  // Get detailed performance metrics
  const metrics = client.getMetrics();
  console.log(\`Response time: \${metrics.responseTime}s\`);
  console.log(\`Retrieved chunks: \${metrics.chunksRetrieved}\`);
}

buildVectorDatabase().then(queryDatabase);`;

export default function PromptEngineering() {
    // Add state for scroll-based animations
    const [isVisible, setIsVisible] = useState({
        hero: false,
        image: false,
        intro: false,
        features: false,
        cta: false
    });

    // Effect for scroll-based animations
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;

            // Update visibility state based on scroll position
            setIsVisible({
                hero: scrollPosition > 200,
                image: scrollPosition > 600,
                intro: scrollPosition > 1000,
                features: scrollPosition > 1800,
                cta: scrollPosition > 2600
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero section with animated gradient */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900 animate-gradient-slow"></div>
                <div className="grid-bg absolute inset-0 opacity-10 animate-pulse-slower"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse-slow font-bold tracking-tight">
                            LangIQ RAG Library
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-slide-up delay-300 font-light max-w-2xl mx-auto">
                            Our universal retrieval-augmented generation library enables you to develop vector databases from your structured and unstructured data in any format, providing essential context for smarter AI interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hero image section */}
            <section className="py-16 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`relative rounded-xl overflow-hidden shadow-2xl border border-purple-700/30 transition-all duration-1000 transform ${isVisible.image ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse-slow"></div>
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <div className="w-full h-full group relative">
                            <Image
                                src="/rag.png"
                                alt="LangIQ AI Studio RAG Interface"
                                width={1200}
                                height={600}
                                className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 shadow-inner z-20 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                    <p className="text-xl text-gray-300 mt-8 mb-10 leading-relaxed animate-slide-up delay-300 text-center max-w-4xl mx-auto font-light">
                        Test and verify RAG capabilities using our LangIQ AI Studio — a powerful interface powered by the same LangIQ RAG library you'll use in production.
                    </p>
                </div>
            </section>

            {/* Introduction section with Python code editor */}
            <section className="py-28 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 opacity-80"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="font-handwritten text-5xl text-purple-400 mb-6 animate-glow">RAG Library Implementation</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Consistent APIs across languages with powerful vector database features for both Python and JavaScript
                        </p>
                    </div>

                    {/* Python section with code and description side by side */}
                    <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center mb-28 transition-all duration-1000 ${isVisible.intro ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="lg:col-span-3 transform hover:scale-[1.02] transition-all duration-300 animate-float-slow order-2 lg:order-1">
                            {/* Python code editor */}
                            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950 border border-purple-700/20 hover:border-purple-600/40 transition-colors hover:shadow-lg hover:shadow-purple-600/10 group">
                                {/* Editor header */}
                                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                                    <div className="flex items-center">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="ml-4 text-gray-400 text-sm">langiq_rag_example.py</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Python Example</div>
                                </div>

                                {/* Editor content with typing animation */}
                                <div className="p-6 font-mono text-sm relative group">
                                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="animate-pulse-fast w-2 h-4 bg-purple-400"></div>
                                    </div>
                                    <pre className="language-python text-gray-300 overflow-x-auto animate-typing">
                                        <code className="group-hover:text-white transition-colors duration-300">{codeExample}</code>
                                    </pre>
                                </div>

                                {/* Editor footer */}
                                <div className="bg-gray-800 px-4 py-1 text-xs text-gray-500 flex justify-between border-t border-gray-700">
                                    <div>Python 3.10.4</div>
                                    <div>LangIQ RAG Library v1.2.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-6 animate-fade-in-left order-1 lg:order-2">
                            <h3 className="font-handwritten text-3xl text-purple-400 mb-4">Python Library</h3>
                            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                                Our Python RAG library efficiently processes diverse document formats, creating optimized vector databases to provide contextual information for more accurate LLM responses.
                            </p>
                            <ul className="space-y-3">
                                {["Multi-format document ingestion", "Efficient vector database creation", "Semantic search capabilities", "Source citation tracking"].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* JavaScript section with code and description side by side - reversed order */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                        <div className="lg:col-span-2 space-y-6 animate-fade-in-right delay-300">
                            <h3 className="font-handwritten text-3xl text-purple-400 mb-4">JavaScript Library</h3>
                            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                                Our JavaScript RAG library seamlessly processes documents and builds vector databases for enhanced context, working with both web and Node.js environments.
                            </p>
                            <ul className="space-y-3">
                                {["Full TypeScript support", "Browser & server compatibility", "Streaming query responses", "Customizable chunking strategies"].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:col-span-3 transform hover:scale-[1.02] transition-all duration-300 animate-float-slow delay-300">
                            {/* JavaScript code editor */}
                            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950 border border-purple-700/20 hover:border-purple-600/40 transition-colors hover:shadow-lg hover:shadow-purple-600/10 group">
                                {/* Editor header */}
                                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                                    <div className="flex items-center">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="ml-4 text-gray-400 text-sm">langiq_rag_example.js</span>
                                    </div>
                                    <div className="text-xs text-gray-500">JavaScript Example</div>
                                </div>

                                {/* Editor content with improved animation */}
                                <div className="p-6 font-mono text-sm relative group">
                                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="animate-pulse-fast w-2 h-4 bg-purple-400"></div>
                                    </div>
                                    <pre className="language-javascript text-gray-300 overflow-x-auto animate-typing-delay">
                                        <code className="group-hover:text-white transition-colors duration-300">{jsCodeExample}</code>
                                    </pre>
                                </div>

                                {/* Editor footer */}
                                <div className="bg-gray-800 px-4 py-1 text-xs text-gray-500 flex justify-between border-t border-gray-700">
                                    <div>Node.js 18.x</div>
                                    <div>LangIQ RAG Library v1.2.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section with cards */}
            <section className="py-28 bg-gradient-to-b from-gray-950 to-purple-950/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="font-handwritten text-5xl text-purple-400 mb-8 animate-glow">Key Features</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                            LangIQ RAG Library provides everything you need to build context-aware AI applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Universal Format Support",
                                description: "Process and index Microsoft docs, text files, PowerPoint, PDF, database records, reports, and Excel files through a single unified interface.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            },
                            {
                                title: "Efficient Vector Database",
                                description: "Automatically structure and store your data in an optimized vector database for fast, accurate retrieval during LLM interactions.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            },
                            {
                                title: "Context-Enhanced AI",
                                description: "Provide relevant context from your data to LLMs, dramatically improving response accuracy and relevance for domain-specific questions.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            },
                            {
                                title: "Production Ready",
                                description: "Build applications with our production-ready library available in both JavaScript and Python, ensuring reliable performance in any environment.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            },
                            {
                                title: "AI Studio Integration",
                                description: "Test and verify RAG capabilities using our LangIQ AI Studio before implementing them in your production applications.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            },
                            {
                                title: "Model Compatibility",
                                description: "Use your RAG system with both cloud-based frontier models and locally hosted open-source models based on your requirements.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            }
                        ].map((feature, index) => (
                            <div key={feature.title}
                                className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/20 transition-all hover:-translate-y-2 hover:border-purple-600/40 animate-fade-in-up relative overflow-hidden group"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Add animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-800/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl group-hover:animate-gradient-xy transition-opacity"></div>

                                <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-800/70 transition-colors animate-pulse-slow relative">
                                    <svg className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        {feature.icon}
                                    </svg>
                                </div>
                                <h3 className="font-medium text-xl text-purple-300 mb-4 relative">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed relative">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-28 bg-gradient-to-br from-purple-950/30 to-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className={`transition-all duration-1000 transform ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <h2 className="font-handwritten text-5xl mb-10 text-white animate-glow font-bold tracking-tight">Start Building With LangIQ RAG Today</h2>
                        <p className="text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
                            Transform your AI applications with our powerful RAG/CAG library — supporting documents of any format for context-aware AI interactions
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-800 hover:bg-gray-700 px-10 py-5 rounded-lg text-white font-medium text-lg transition-all shadow-xl hover:shadow-gray-500/20 hover:scale-105 animate-bounce-subtle relative group overflow-hidden border border-gray-700"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <span className="relative z-10">Get Support</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
