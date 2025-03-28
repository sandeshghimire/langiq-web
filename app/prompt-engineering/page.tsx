"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Sample Python code string to avoid JSX evaluation issues
const codeExample = `from langiq_prompt_library import LangiqClient

# Initialize the client with your preferred model
client = LangiqClient(
  provider="openai",
  model="gpt-4"
)

# Create a prompt with chain-of-thought reasoning
response = client.generate(
  prompt="Explain the concept of neural networks",
  temperature=0.7,
  chain_of_thought=True,
  max_tokens=500
)

# Display the response
print(response.text)

# Get detailed performance metrics
metrics = client.get_metrics()
print(f"Response time: {metrics['response_time']}s")
print(f"Tokens used: {metrics['tokens_used']}")`;

// JavaScript code example
const jsCodeExample = `import { LangiqClient } from 'langiq-prompt-library';

// Initialize the client with your preferred model
const client = new LangiqClient({
  provider: "openai",
  model: "gpt-4"
});

// Create a prompt with chain-of-thought reasoning
async function generateResponse() {
  const response = await client.generate({
    prompt: "Explain the concept of neural networks",
    temperature: 0.7,
    chainOfThought: true,
    maxTokens: 500
  });

  // Display the response
  console.log(response.text);

  // Get detailed performance metrics
  const metrics = client.getMetrics();
  console.log(\`Response time: \${metrics.responseTime}s\`);
  console.log(\`Tokens used: \${metrics.tokensUsed}\`);
}

generateResponse();`;

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
                            LangIQ Prompt Library
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-slide-up delay-300 font-light max-w-2xl mx-auto">
                            Our production-ready library enables your applications to interface with large language frontier models through a single, unified API available in both JavaScript and Python.
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
                                src="/pe.png"
                                alt="LangIQ AI Studio Interface"
                                width={1200}
                                height={600}
                                className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 shadow-inner z-20 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                    <p className="text-xl text-gray-300 mt-8 mb-10 leading-relaxed animate-slide-up delay-300 text-center max-w-4xl mx-auto font-light">
                        Design, test, and verify prompt library capabilities using our LangIQ AI Studio — a powerful interface powered by the same LangIQ prompt library you'll use in production.
                    </p>
                </div>
            </section>

            {/* Introduction section with Python code editor */}
            <section className="py-28 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 opacity-80"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible.intro ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="space-y-8 animate-fade-in-left">
                            <h2 className="font-handwritten text-4xl text-purple-400 mb-6 animate-glow">Introducing LangIQ Prompt Library</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Our production-ready library enables your applications to interface with large language frontier models
                                through a single, unified API available in both JavaScript and Python.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Design, test, and verify prompt library capabilities using our LangIQ AI Studio — a powerful
                                interface powered by the same LangIQ prompt library you'll use in production.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                {['OpenAI', 'Google', 'XAI', 'DeepSeek', 'Anthropic'].map((provider, index) => (
                                    <div key={provider}
                                        className="bg-purple-900/20 backdrop-blur-sm border border-purple-700/30 rounded-lg px-4 py-2 hover:bg-purple-800/30 hover:border-purple-500/40 transition-all hover:scale-105 animate-fade-in shadow-lg"
                                        style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                                        <span className="text-purple-300 font-semibold">{provider}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="transform hover:scale-[1.02] transition-all duration-300 animate-float-slow">
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
                                        <span className="ml-4 text-gray-400 text-sm">langiq_example.py</span>
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
                                    <div>LangIQ Prompt Library v1.2.0</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* JavaScript example row - reversed columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-28">
                        <div className="transform hover:scale-[1.02] transition-all duration-300 animate-float-slow delay-300">
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
                                        <span className="ml-4 text-gray-400 text-sm">langiq_example.js</span>
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
                                    <div>LangIQ Prompt Library v1.2.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 animate-fade-in-right delay-300">
                            <h2 className="font-handwritten text-4xl text-purple-400 mb-6 animate-glow">Multi-Language Support</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Build applications in your preferred language with the same powerful capabilities. Our
                                library provides consistent APIs across both JavaScript and Python environments.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Whether you're building with Node.js, React, or Python frameworks, LangIQ Prompt Library
                                enables you to perform many tasks using a single, unified API.
                            </p>
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
                            LangIQ Prompt Library provides everything you need to build powerful AI applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Universal Model Access",
                                description: "Connect your applications to frontier LLMs including OpenAI, Google, XAI, DeepSeek, and Anthropic through a unified interface.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            },
                            {
                                title: "Production Ready",
                                description: "Build applications with our production-ready library available in both JavaScript and Python, ensuring reliable performance in any environment.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            },
                            {
                                title: "Advanced Prompting",
                                description: "Implement sophisticated prompt engineering strategies with simple API calls to optimize your model interactions and outputs.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            },
                            {
                                title: "AI Studio Integration",
                                description: "Design, test, and verify prompt capabilities using our LangIQ AI Studio before implementing them in your production applications.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            },
                            {
                                title: "Performance Tracking",
                                description: "Monitor response times, token usage, and cost metrics to optimize your implementation and track usage patterns across different LLMs.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            },
                            {
                                title: "Single API Solution",
                                description: "Perform many LLM tasks using a single API, simplifying integration and allowing easy swapping between different language models.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
                        <h2 className="font-handwritten text-5xl mb-10 text-white animate-glow font-bold tracking-tight">Start Building With LangIQ Today</h2>
                        <p className="text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
                            Transform your AI applications with our powerful universal prompt library
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <a
                            href="https://github.com/langiq/langiq-prompt-library"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 px-10 py-5 rounded-lg text-white font-medium text-lg transition-all shadow-xl hover:shadow-purple-500/30 hover:scale-105 animate-bounce-subtle relative group overflow-hidden"
                        >
                            <span className="relative z-10">Download Library</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </a>
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
