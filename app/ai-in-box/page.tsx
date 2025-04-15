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
    <div className={`min-h-screen ${montserrat.className}`}>
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
        <div className="grid-bg absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className={`font-handwritten text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              LangIQ: AI in a Box
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              All-in-one AI hardware, optimized OS, and the complete LangIQ software suite—ready out of the box.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className={`py-12 bg-gray-900 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-400 mb-4 flex items-center justify-center gap-2">
              <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              LangIQ AI Box Lineup
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Purpose-built systems for every AI workload—from research to enterprise deployment. Each box ships with our full software stack, pre-configured for performance.
            </p>
          </div>

          {/* Product Cards */}
          <div className="space-y-24">
            {/* x86 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">🔹 AI Box - x86</h3>
                <dl className="space-y-2 text-gray-300">
                  <div><dt className="font-medium text-purple-300 inline">CPU:</dt> <dd className="inline">16 cores / 32 threads</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">GPU:</dt> <dd className="inline">40-core high-performance</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Memory:</dt> <dd className="inline">128GB RAM</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Storage:</dt> <dd className="inline">4TB SSD</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Cooling:</dt> <dd className="inline">Advanced liquid cooling</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Connectivity:</dt> <dd className="inline">10GbE, WiFi 6E, Bluetooth 5.2</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Best for:</dt> <dd className="inline">Inference, small/mid model training</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Use cases:</dt> <dd className="inline">Prototyping, education, SMB AI</dd></div>
                </dl>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500">
                <Image src="/ai-box-standard.jpg" alt="LangIQ AI Box - x86" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Plus - ARM64 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500 order-2 md:order-1">
                <Image src="/ai-box-plus.jpg" alt="LangIQ AI Box Plus - ARM64" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6 order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">🔹 AI Box Plus - ARM64</h3>
                <dl className="space-y-2 text-gray-300">
                  <div><dt className="font-medium text-purple-300 inline">CPU:</dt> <dd className="inline">20-core ARM x64</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">GPU:</dt> <dd className="inline">NVIDIA GB10 Superchip</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Memory:</dt> <dd className="inline">128GB RAM</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Storage:</dt> <dd className="inline">4TB SSD</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Power:</dt> <dd className="inline">Up to 40% less than x86</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Thermals:</dt> <dd className="inline">24/7 operation, low noise</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Best for:</dt> <dd className="inline">Mid/high inference, mid training</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Use cases:</dt> <dd className="inline">Production, continuous workloads, SME AI</dd></div>
                </dl>
              </div>
            </div>

            {/* Pro - ARM64 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">🔹 AI Box Pro - ARM64</h3>
                <dl className="space-y-2 text-gray-300">
                  <div><dt className="font-medium text-purple-300 inline">GPU:</dt> <dd className="inline">1x NVIDIA Blackwell Ultra</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">CPU:</dt> <dd className="inline">1x Grace-72 Core Neoverse V2</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">GPU Mem:</dt> <dd className="inline">Up to 288GB HBM3e</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">CPU Mem:</dt> <dd className="inline">Up to 496GB LPDDR5X</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Accel:</dt> <dd className="inline">Dedicated tensor cores</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Expansion:</dt> <dd className="inline">Add GPUs/NVMe</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Best for:</dt> <dd className="inline">Advanced AI, high-end training</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Use cases:</dt> <dd className="inline">Enterprise, CV, LLM fine-tuning</dd></div>
                </dl>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500">
                <Image src="/ai-box-pro.jpg" alt="LangIQ AI Box Pro - ARM64" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Pro MAX - ARM64 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500 order-2 md:order-1">
                <Image src="/ai-box-pro-max.jpg" alt="LangIQ AI Box Pro MAX - ARM64" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6 order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">🔹 AI Box Pro MAX - ARM64</h3>
                <dl className="space-y-2 text-gray-300">
                  <div><dt className="font-medium text-purple-300 inline">CPU:</dt> <dd className="inline">AMD Threadripper, 192 cores</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">GPU:</dt> <dd className="inline">Up to 4x NVIDIA RTX PRO 6000 Blackwell</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Memory:</dt> <dd className="inline">Up to 1TB RAM</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Storage:</dt> <dd className="inline">36TB SSD</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Networking:</dt> <dd className="inline">Dual 100GbE, RDMA</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Form:</dt> <dd className="inline">Rack-mount, redundant PSU</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Best for:</dt> <dd className="inline">Power users, scale training</dd></div>
                  <div><dt className="font-medium text-purple-300 inline">Use cases:</dt> <dd className="inline">Labs, orgs, multi-model, custom dev</dd></div>
                </dl>
              </div>
            </div>
          </div>

          {/* Included Software Section */}
          <div className="bg-gray-800 p-8 rounded-xl border border-purple-500/30 my-20 shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center flex items-center gap-2 justify-center">
              <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              What's Inside
            </h3>
            <div className="text-gray-300">
              <p className="mb-4 text-center">Every AI Box includes a fully-optimized software stack for AI/ML development and deployment:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* System Software */}
                <div>
                  <h4 className="text-xl font-medium text-purple-300 mb-3">System & Environment</h4>
                  <ul className="space-y-2 mb-4">
                    <li>• <span className="font-medium">LangIQ OS</span>: Ubuntu-based, custom kernel for AI/ML</li>
                    <li>• <span className="font-medium">Hardware Acceleration Suite</span>: GPU libraries, auto scaling</li>
                    <li>• <span className="font-medium">Performance Toolkit</span>: CUDA, cuDNN, TensorRT pre-tuned</li>
                    <li>• <span className="font-medium">Dev Environment</span>: Jupyter, VSCode, PyCharm, LangIQ plugins</li>
                  </ul>
                </div>
                {/* LangIQ Libraries */}
                <div>
                  <h4 className="text-xl font-medium text-purple-300 mb-3">LangIQ Library Suite</h4>
                  <ul className="pl-2 space-y-3 mb-4">
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">Prompt Library</span>: 200+ templates, versioning, testing</li>
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">RAG/CAG Library</span>: Vector DBs, hybrid/multimodal, connectors</li>
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">Tools & MCP</span>: Tool-use, context mgmt, 50+ tools</li>
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">LLM Augmentation</span>: PEFT, LoRA, QLoRA, distillation</li>
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">LLM Fine-Tune</span>: SFT, RLHF, DPO, data tools</li>
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">Agents Orchestration</span>: Multi-agent, memory, monitoring</li>
                    <li className="border-l-2 border-purple-500/50 pl-4 py-1"><span className="font-medium text-purple-200">App Dev Framework</span>: Auth, user mgmt, deploy templates</li>
                  </ul>
                </div>
              </div>
              {/* Additional Software */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-medium text-purple-300 mb-3">Tools & Utilities</h4>
                  <ul className="space-y-2 mb-4">
                    <li>• <span className="font-medium">AI Studio</span>: Visual AI app builder</li>
                    <li>• <span className="font-medium">Monitoring Dashboard</span>: Real-time tracking</li>
                    <li>• <span className="font-medium">Model Repo Manager</span>: Version, deploy, endpoints</li>
                    <li>• <span className="font-medium">Data Pipeline</span>: ETL for AI datasets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-purple-300 mb-3">Support & Resources</h4>
                  <ul className="space-y-2">
                    <li>• 1 year updates & security patches</li>
                    <li>• Early access to new features</li>
                    <li>• Full docs & code samples</li>
                    <li>• Learning Hub: tutorials, workshops, certs</li>
                    <li>• Community forum & direct engineer access</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <p className="text-center text-purple-200">
                  All software is tuned for your hardware and updated regularly for peak performance and compatibility.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-purple-400 mb-10 text-center">FAQ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-medium text-purple-400 mb-2">Custom configuration?</h4>
                <p className="text-gray-300">Yes! All models can be customized. Contact us for tailored specs.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-medium text-purple-400 mb-2">What support is included?</h4>
                <p className="text-gray-300">12 months of priority support for hardware and software.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-medium text-purple-400 mb-2">Third-party AI frameworks?</h4>
                <p className="text-gray-300">Absolutely. PyTorch, TensorFlow, JAX, and more are fully supported.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-medium text-purple-400 mb-2">Delivery timeframe?</h4>
                <p className="text-gray-300">Standard: 2-3 weeks. Custom: 4-6 weeks, depending on specs.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
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
