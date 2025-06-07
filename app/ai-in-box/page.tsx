"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${montserrat.className} snap-y snap-mandatory overflow-y-scroll h-screen`}>
      {/* Hero section - Full Screen */}
      <section className="min-h-screen py-20 relative overflow-hidden flex items-center snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
        <div className="grid-bg absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className={`font-handwritten text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              LangIQ: AI in a Box
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Pre-configured AI LLM box solutions where our OS and software stack come pre-installed, helping you seamlessly transition your business to the future of work with LLMs
            </p>
            <p
              className={`text-lg md:text-xl text-gray-400 mb-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              At LangIQ.ai, we empower your organization to migrate from traditional operations to intelligent, LLM-based workflows, ensuring you unlock transformative efficiencies and achieve measurable business impact
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Lineup Introduction - Full Screen */}
      <section className={`min-h-screen bg-gray-900 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex items-center snap-start snap-always`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-purple-400 mb-6">LangIQ AI Box Product Lineup</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              We provide entry-level, mid-tier, and state-of-the-art hardware solutions optimized for AI workloads, ranging from inference to training at scale.
              Each system comes with our complete software stack pre-installed to help businesses transform their operations.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              From small businesses taking their first steps into AI to enterprises requiring cutting-edge performance,
              our AI Box lineup ensures you have the right foundation to unlock transformative efficiencies with LLMs.
            </p>
          </div>
        </div>
      </section>

      {/* LangIQ AI Box - x86 - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box - x86 (Entry Level)</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">CPU:</span> 16 cores, 32 threads</li>
                <li><span className="font-medium text-purple-300">GPU:</span> 40-core high-performance</li>
                <li><span className="font-medium text-purple-300">Memory:</span> 128GB RAM</li>
                <li><span className="font-medium text-purple-300">Storage:</span> 4TB SSD</li>
                <li><span className="font-medium text-purple-300">Cooling:</span> Advanced liquid cooling system for sustained performance</li>
                <li><span className="font-medium text-purple-300">Connectivity:</span> 10Gb Ethernet, WiFi 6E, Bluetooth 5.2</li>
                <li><span className="font-medium text-purple-300">Best for:</span> Model inference, small to mid-size model training and augmentation</li>
                <li><span className="font-medium text-purple-300">Business transformation:</span> Perfect for small businesses starting their LLM journey and transitioning to intelligent workflows</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500">
              <Image
                src="/ai-box-standard.jpg"
                alt="LangIQ AI Box - x86"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LangIQ AI Box Plus - ARM64 - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500 order-2 md:order-1">
              <Image
                src="/ai-box-plus.jpg"
                alt="LangIQ AI Box Plus - ARM64"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box Plus - ARM64 (Mid-Tier)</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">CPU:</span> 20-core ARM x64</li>
                <li><span className="font-medium text-purple-300">GPU:</span> NVIDIA GB10 Superchip</li>
                <li><span className="font-medium text-purple-300">Memory:</span> 128GB RAM</li>
                <li><span className="font-medium text-purple-300">Storage:</span> 4TB SSD</li>
                <li><span className="font-medium text-purple-300">Power efficiency:</span> Up to 40% lower power consumption vs x86 equivalent</li>
                <li><span className="font-medium text-purple-300">Thermal design:</span> Optimized for 24/7 operation with minimal noise</li>
                <li><span className="font-medium text-purple-300">Best for:</span> Medium to high-end model inference, mid-size model training</li>
                <li><span className="font-medium text-purple-300">Business transformation:</span> Ideal for growing businesses scaling their LLM operations and achieving measurable impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LangIQ AI Box Pro - ARM64 - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box Pro - ARM64 (State-of-the-Art)</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">GPU:</span> 1x NVIDIA Blackwell Ultra</li>
                <li><span className="font-medium text-purple-300">CPU:</span> 1x Grace-72 Core Neoverse V2</li>
                <li><span className="font-medium text-purple-300">GPU Memory:</span> Up to 288GB HBM3e | 8 TB/s</li>
                <li><span className="font-medium text-purple-300">CPU Memory:</span> Up to 496GB LPDDR5X | Up to 396 GB/s</li>
                <li><span className="font-medium text-purple-300">Hardware acceleration:</span> Dedicated tensor cores for AI/ML operations</li>
                <li><span className="font-medium text-purple-300">Expansion:</span> Support for additional GPUs and NVMe storage</li>
                <li><span className="font-medium text-purple-300">Best for:</span> Advanced AI workloads, optimized for medium to high-end model inference and training</li>
                <li><span className="font-medium text-purple-300">Business transformation:</span> Enterprise-grade solution for organizations demanding cutting-edge LLM performance and transformative efficiencies</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500">
              <Image
                src="/ai-box-pro.jpg"
                alt="LangIQ AI Box Pro - ARM64"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LangIQ AI Box Pro MAX - ARM64 - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500 order-2 md:order-1">
              <Image
                src="/ai-box-pro-max.jpg"
                alt="LangIQ AI Box Pro MAX - ARM64"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box Pro MAX - ARM64 (Ultimate Enterprise)</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">CPU:</span> AMD Threadripper with 192 cores</li>
                <li><span className="font-medium text-purple-300">GPU:</span> Multiple NVIDIA RTX PRO 6000 Blackwell Workstation Edition (up to 4x)</li>
                <li><span className="font-medium text-purple-300">Memory:</span> Up to 1TB RAM</li>
                <li><span className="font-medium text-purple-300">Storage:</span> 36TB SSD</li>
                <li><span className="font-medium text-purple-300">Networking:</span> Dual 100Gb Ethernet with RDMA support</li>
                <li><span className="font-medium text-purple-300">Form factor:</span> Rack-mountable with redundant power supply</li>
                <li><span className="font-medium text-purple-300">Best for:</span> AI power users requiring high-end inference and mid-size model training at scale</li>
                <li><span className="font-medium text-purple-300">Business transformation:</span> The ultimate solution for large enterprises ready to completely revolutionize their operations with the most advanced LLM capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Included Software Section - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center py-12 snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-gray-800 p-8 rounded-xl border border-purple-500/30 shadow-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Pre-Installed Software Stack</h3>
            <div className="text-gray-300">
              <p className="mb-4">Every LangIQ AI Box comes with our comprehensive software stack pre-configured and optimized for your hardware, enabling immediate deployment of LLM-based workflows:</p>

              {/* System Software */}
              <div className="mb-6">
                <h4 className="text-xl font-medium text-purple-300 mb-3">System & Environment</h4>
                <ul className="space-y-2 mb-4">
                  <li>• <span className="font-medium">LangIQ OS</span> — Ubuntu-based operating system with custom kernel optimizations for AI/ML workloads</li>
                  <li>• <span className="font-medium">Hardware Acceleration Suite</span> — GPU-accelerated libraries with automatic scaling and load balancing</li>
                  <li>• <span className="font-medium">Performance Toolkit</span> — CUDA, cuDNN, and TensorRT pre-configured with optimized parameters</li>
                  <li>• <span className="font-medium">Development Environment</span> — Jupyter, VSCode, and PyCharm with LangIQ extensions pre-installed</li>
                </ul>
              </div>

              {/* LangIQ Libraries */}
              <div className="mb-6">
                <h4 className="text-xl font-medium text-purple-300 mb-3">LangIQ Library Suite</h4>
                <p className="mb-3">Our comprehensive collection of libraries designed to accelerate AI development and deployment:</p>
                <ul className="pl-2 space-y-3 mb-4">
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ Prompt Library</span>
                    <p className="mt-1">Streamline prompt engineering with templates, versioning, and optimization tools. Includes 200+ prompt templates for common tasks and automated prompt testing framework.</p>
                  </li>
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ RAG/CAG Library</span>
                    <p className="mt-1">Build advanced retrieval and context-augmented systems with support for vector databases, hybrid search, and multi-modal context integration. Pre-configured connectors for PostgreSQL, Chroma, Pinecone and more.</p>
                  </li>
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ Tools and MCP Library</span>
                    <p className="mt-1">Extend AI capabilities with tools and multi-context processing. Includes tool-use frameworks, context window management, and function calling abstractions with 50+ ready-to-use tools.</p>
                  </li>
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ LLM Augmentation Library</span>
                    <p className="mt-1">Enhance models with domain-specific knowledge through PEFT, LoRA, and QLoRA techniques. Supports knowledge distillation and model merging with automated evaluation pipelines.</p>
                  </li>
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ LLM Fine-Tune Library</span>
                    <p className="mt-1">Optimize models for specific use cases with easy-to-use APIs for supervised fine-tuning, RLHF, and DPO. Includes data preparation tools and evaluation frameworks.</p>
                  </li>
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ Agents Orchestration Library</span>
                    <p className="mt-1">Create and manage AI agent workflows with agent communication protocols, memory management, and monitoring tools. Supports multi-agent systems with 20+ agent templates.</p>
                  </li>
                  <li className="border-l-2 border-purple-500/50 pl-4 py-1">
                    <span className="font-medium text-purple-200">LangIQ Application Development Framework</span>
                    <p className="mt-1">Build production-ready AI applications with authentication, user management, monitoring, and deployment tools. Includes templates for web, mobile, and API-based AI applications.</p>
                  </li>
                </ul>
              </div>

              {/* Additional Software */}
              <div className="mb-6">
                <h4 className="text-xl font-medium text-purple-300 mb-3">Tools & Utilities</h4>
                <ul className="space-y-2 mb-4">
                  <li>• <span className="font-medium">LangIQ AI Studio</span> — Visual development environment for building and testing AI applications</li>
                  <li>• <span className="font-medium">LangIQ Monitoring Dashboard</span> — Real-time performance tracking and resource management</li>
                  <li>• <span className="font-medium">Model Repository Manager</span> — Organize, version and deploy models with one-click inference endpoints</li>
                  <li>• <span className="font-medium">Data Processing Pipeline</span> — ETL tools optimized for AI training and fine-tuning datasets</li>
                </ul>
              </div>

              {/* Support & Updates */}
              <div className="mb-4">
                <h4 className="text-xl font-medium text-purple-300 mb-3">Support & Resources</h4>
                <ul className="space-y-2">
                  <li>• One year of software updates and security patches with automated deployment</li>
                  <li>• Priority access to new LangIQ library releases and beta features</li>
                  <li>• Comprehensive documentation and code examples for all libraries</li>
                  <li>• Access to LangIQ Learning Hub with tutorials, workshops and certification courses</li>
                  <li>• Community forum membership with direct access to LangIQ engineers</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <p className="text-center text-purple-200">
                  All software components are pre-configured and optimized for your specific hardware configuration, ensuring immediate readiness for business transformation and LLM deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Transformation Section - Full Screen */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900/20 flex items-center py-12 snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-purple-400 mb-6">Transform Your Business Operations</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Seamlessly transition from traditional operations to intelligent, LLM-based workflows with our pre-configured solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-medium text-purple-400 mb-2">Entry Level</h4>
              </div>
              <p className="text-gray-300 text-center">
                Perfect for small businesses taking their first steps into AI. Start your LLM journey with our x86 AI Box and begin transforming workflows immediately.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-xl font-medium text-purple-400 mb-2">Mid-Tier</h4>
              </div>
              <p className="text-gray-300 text-center">
                Scale your AI operations with our Plus and Pro models. Achieve measurable business impact while maintaining efficiency and cost-effectiveness.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-medium text-purple-400 mb-2">State-of-the-Art</h4>
              </div>
              <p className="text-gray-300 text-center">
                Complete business transformation with our Pro MAX. Unlock the full potential of LLMs for enterprise-level operations and revolutionary efficiency gains.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-xl border border-purple-500/30">
              <h4 className="text-2xl font-medium text-purple-300 mb-4">Ready to Transform Your Business?</h4>
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                Our pre-configured AI LLM box solutions eliminate the complexity of setup and deployment.
                With everything pre-installed and optimized, you can focus on transforming your business operations
                rather than managing infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-purple-200">
                <span className="bg-purple-800/50 px-4 py-2 rounded-lg">✓ Pre-configured OS & Software</span>
                <span className="bg-purple-800/50 px-4 py-2 rounded-lg">✓ Immediate LLM Deployment</span>
                <span className="bg-purple-800/50 px-4 py-2 rounded-lg">✓ Business-Ready Solutions</span>
                <span className="bg-purple-800/50 px-4 py-2 rounded-lg">✓ Measurable Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center py-12 snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div>
            <h3 className="text-3xl font-semibold text-purple-400 mb-10 text-center">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-medium text-purple-400 mb-2">Is custom configuration available?</h4>
                <p className="text-gray-300">Yes, we offer extensive customization options for all AI Box models including memory upgrades, storage expansion, and specialized GPU configurations to meet your specific LLM requirements.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-medium text-purple-400 mb-2">What support is included?</h4>
                <p className="text-gray-300">Each AI Box includes 12 months of priority technical support covering hardware, software, and LangIQ library assistance, plus dedicated consultation for business transformation strategies.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-medium text-purple-400 mb-2">Can I run third-party AI frameworks?</h4>
                <p className="text-gray-300">Absolutely. While our LangIQ libraries are pre-installed and optimized, the systems support all major AI frameworks including PyTorch, TensorFlow, JAX, and Hugging Face transformers.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-medium text-purple-400 mb-2">What's the typical delivery timeframe?</h4>
                <p className="text-gray-300">Standard configurations ship within 2-3 weeks with white-glove setup service. Custom configurations take 4-6 weeks and include personalized configuration for your business needs.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-medium text-purple-400 mb-2">Do you provide training and onboarding?</h4>
                <p className="text-gray-300">Yes, every AI Box purchase includes comprehensive onboarding sessions, team training workshops, and access to our LangIQ Academy for ongoing skill development.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-medium text-purple-400 mb-2">What about data security and compliance?</h4>
                <p className="text-gray-300">All AI Boxes come with enterprise-grade security features, encryption at rest and in transit, and compliance frameworks for GDPR, HIPAA, and SOC 2 requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Full Screen */}
      <section className="min-h-screen bg-gray-900 flex items-center snap-start snap-always">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              <span>Request Pricing & Availability</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
