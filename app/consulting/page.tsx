import Link from 'next/link';
// Removing unused Image import

// Sample code string to avoid JSX evaluation issues
const codeExample = `from langiq import FineTuningClient
from datasets import load_dataset
from transformers import pipeline

# Initialize the fine-tuning client
client = FineTuningClient(
  provider="huggingface",
  base_model="gpt2"
)

# Load and prepare dataset
dataset = load_dataset("your_dataset")
processed_dataset = client.prepare_dataset(
  dataset,
  text_column="text",
  label_column="label"
)

# Set up fine-tuning configuration
fine_tuning_job = client.create_fine_tuning_job(
  training_dataset=processed_dataset,
  evaluation_dataset=processed_dataset.select(range(100)),
  epochs=3,
  batch_size=16,
  learning_rate=5e-5
)

# Start fine-tuning
result = client.run_fine_tuning_job(fine_tuning_job)

# Save and use the fine-tuned model
fine_tuned_model = result.model
client.save_model(fine_tuned_model, "my-fine-tuned-model")

# Use the model with Hugging Face pipeline
nlp = pipeline("text-generation", model=fine_tuned_model)
print(nlp("Your prompt here"))`;

export default function FineTuningPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero section with animated gradient */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-900 animate-gradient-slow"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse-slow">
                            Model Fine-Tuning
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                            Customize and enhance language models for your specific tasks with our seamless fine-tuning pipeline
                        </p>
                        <a
                            href="https://github.com/langiq/fine-tuning"
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
                            <h2 className="font-handwritten text-4xl text-teal-400 mb-6">Fine-Tuning Made Simple</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Our LangIQ library makes it effortless to fine-tune language models using HuggingFace&apos;s
                                powerful pipeline, allowing you to customize models for your specific business needs.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                With just a few lines of code, you can prepare your dataset, configure training parameters,
                                and create specialized models that outperform generic ones on your unique tasks.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">HuggingFace Integration</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Custom Datasets</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Parameter Optimization</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Evaluation Metrics</span>
                                </div>
                                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg px-4 py-2">
                                    <span className="text-teal-300 font-semibold">Pipeline Deployment</span>
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
                                        <span className="ml-4 text-gray-400 text-sm">langiq_fine_tuning.py</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Fine-Tuning Demo</div>
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
                                    <div>LangIQ v1.0.0</div>
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
                        <h2 className="font-handwritten text-5xl text-teal-400 mb-6">Key Features</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Everything you need to create, train, and deploy custom fine-tuned models
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Dataset Preparation</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Streamlined tools for cleaning, formatting, and augmenting your training data
                                to ensure optimal fine-tuning results with minimal effort.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Parameter Optimization</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Smart hyperparameter tuning that automatically discovers the best configuration
                                for your specific use case and model architecture.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Training Monitoring</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Real-time training visualizations and metrics tracking to help you understand
                                model progress and identify when to stop training for optimal results.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Model Evaluation</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Comprehensive evaluation suite with customizable metrics to ensure your
                                fine-tuned model meets performance requirements on real-world tasks.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Deployment Pipeline</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Seamless deployment options including HuggingFace pipeline integration
                                that makes it easy to put your fine-tuned models into production.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-teal-800/20 shadow-lg hover:shadow-teal-700/5 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-xl text-teal-300 mb-3">Versioning & Management</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Built-in model versioning and management tools to keep track of different
                                fine-tuned variants and their performance characteristics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-gradient-to-br from-teal-950/30 to-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="animate-float">
                        <h2 className="font-handwritten text-5xl mb-8 text-white">Start Fine-Tuning Your Models Today</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Create custom models tailored to your specific use cases with our HuggingFace integrated pipeline
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://github.com/langiq/fine-tuning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-teal-500/30"
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
