import Link from 'next/link';
import Image from 'next/image';

// Sample code string to avoid JSX evaluation issues
const codeExample = `from langiq_pe import LangiqClient

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

export default function PromptEngineering() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero section with animated gradient */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900 animate-gradient-slow"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse-slow">
                            Langiq_pe Library
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                            A comprehensive toolkit for prompt engineering and LLM integration
                        </p>
                        <a
                            href="https://github.com/langiq/langiq_pe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30 group"
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
                            <h2 className="font-handwritten text-4xl text-purple-400 mb-6">Introducing Langiq_pe</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                We've developed a powerful Python-based library called Langiq_pe that streamlines prompt engineering
                                and LLM integration for developers and AI practitioners.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Available on GitHub, Langiq_pe makes it easy to interact with both commercial and open-source
                                language models through a clean, unified interface.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg px-4 py-2">
                                    <span className="text-purple-300 font-semibold">OpenAI</span>
                                </div>
                                <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg px-4 py-2">
                                    <span className="text-purple-300 font-semibold">Anthropic</span>
                                </div>
                                <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg px-4 py-2">
                                    <span className="text-purple-300 font-semibold">Google</span>
                                </div>
                                <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg px-4 py-2">
                                    <span className="text-purple-300 font-semibold">Ollama</span>
                                </div>
                                <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg px-4 py-2">
                                    <span className="text-purple-300 font-semibold">HuggingFace</span>
                                </div>
                            </div>
                        </div>
                        <div className="transform hover:scale-[1.02] transition-all duration-300">
                            {/* Code editor-like component with fancy styling */}
                            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950 border border-purple-700/20 hover:border-purple-600/40 transition-colors">
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
                                    <div className="text-xs text-gray-500">Langiq_pe Demo</div>
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
                                    <div>Langiq_pe v1.2.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section with cards */}
            <section className="py-24 bg-gradient-to-b from-gray-950 to-purple-950/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-handwritten text-5xl text-purple-400 mb-6">Key Features</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Langiq_pe provides everything you need to build powerful AI applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-purple-300 mb-3">Frontier LLM Integration</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Connect your applications to leading commercial LLMs including OpenAI, Anthropic,
                                Google, and DeepSeek through a unified interface.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-purple-300 mb-3">Local Model Support</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Build applications that communicate with local models using Ollama, VLLM,
                                and HuggingFace Transformer pipelines.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-purple-300 mb-3">Advanced Prompting</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Implement sophisticated prompt engineering strategies including few-shot learning
                                and chain-of-thought prompting with simple API calls.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-purple-300 mb-3">Parameter Control</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Fine-tune LLM behavior by controlling various parameters such as temperature, top-p,
                                and frequency penalty to optimize outputs.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-purple-300 mb-3">Performance Tracking</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Monitor response times, token usage, and cost metrics to optimize your implementation
                                and track usage patterns.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-800/20 shadow-lg hover:shadow-purple-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-purple-300 mb-3">Debug Information</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Collect comprehensive debug information to analyze model behavior and optimize your prompts
                                for better results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-gradient-to-br from-purple-950/30 to-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="animate-float">
                        <h2 className="font-handwritten text-5xl mb-8 text-white">Start Building With Langiq_pe Today</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Transform your AI applications with our powerful prompt engineering library
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://github.com/langiq/langiq_pe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
                        >
                            Download Library
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
