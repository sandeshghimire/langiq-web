// Project: AI Studio

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
              AI Studio
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              A universal framework for LLM application development, designed for startups and companies of all sizes to adopt AI workflows with graphical tools for application development, model interfacing, and custom solutions
            </p>
          </div>
        </div>
      </section>

      {/* AI Studio Hero Image section */}
      <section className={`py-12 bg-gray-900 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <Image
              src="/ai-studio.png"
              alt="AI Studio Visualization"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Download section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Download AI Studio</h3>
            <p className="text-gray-400 mb-8">Public downloads launching soon. Stay tuned!</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  label: 'Windows (x86)', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0h13V3H9z M9 15H3V9h6v6z" /></svg>
                  )
                },
                {
                  label: 'Windows (ARM64)', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0h13V3H9z M9 15H3V9h6v6z" /></svg>
                  )
                },
                {
                  label: 'Linux', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m14 0v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9" /></svg>
                  )
                },
                {
                  label: 'macOS', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M12 4v2m5.66 2.34l-1.41 1.41M20 12h-2m-1.93 6.07l-1.41-1.41M12 18v2M7.76 16.66l-1.41 1.41M4 12H2m3.34-5.66l-1.41-1.41" /></svg>
                  )
                },
              ].map((platform, idx) => (
                <button
                  key={platform.label}
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center gap-3 bg-purple-700/60 cursor-not-allowed px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-lg opacity-70 border-2 border-dashed border-purple-400 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 relative group"
                  tabIndex={-1}
                  title="Download not available yet"
                >
                  {platform.icon}
                  <span>{platform.label}</span>
                  <span className="absolute -top-3 right-2 bg-yellow-400 text-xs text-gray-900 px-2 py-0.5 rounded shadow group-hover:scale-110 transition-transform">Soon</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-handwritten text-4xl md:text-5xl text-center mb-16 text-purple-400 animate-fadeIn">Studio Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { title: 'Graphical AI Development', description: 'Build AI applications visually with our intuitive interface, eliminating the need for extensive coding knowledge' },
              { title: 'Frontier Model Integration', description: 'Seamless connections to leading AI models from OpenAI, Google, Anthropic, DeepSeek, XAI with unified interface' },
              { title: 'Local LLM Support', description: 'Interface with open-source and open-weight LLMs like Meta LLAMA, DeepSeek, Microsoft PI, and Alibaba QWN' },
              { title: 'Vector Database Creation', description: 'Convert your data into vector databases and work with both local and frontier embeddings for knowledge bases' },
              { title: 'Model Augmentation', description: 'Enhance model knowledge by generating synthetic data based on your existing data for improved performance' },
              { title: 'State-of-the-Art Fine-Tuning', description: 'Utilize Hugging Face transformer pipeline for advanced model fine-tuning and customization' },
              { title: 'Agentic Solutions', description: 'Solve unique business challenges using multiple coordinated agents working together in your workflow' },
              { title: 'Customizable Workspace', description: 'Personalize AI Studio for your specific needs, creating your own dedicated environment for solving unique problems' },
              { title: 'Team Collaboration', description: 'Work together with colleagues on shared workspaces and projects while tracking progress effectively' },
              { title: 'Performance Monitoring', description: 'Access graphical interfaces for monitoring, debugging performance, identifying issues, and implementing fixes' },
              { title: 'Parallel Model Testing', description: 'Engage with multiple AI models simultaneously to compare responses and streamline research' },
              { title: 'Real-Time Data Retrieval', description: 'Integrate the latest online information into AI conversations via web search for up-to-date responses' },
              { title: 'Knowledge Management', description: 'Import and organize information with files, folders, vaults, transcriptions, and customizable knowledge stacks' },
              { title: 'Prompt Engineering Tools', description: 'Craft, test, and refine prompts with real-time feedback and version control for optimal outputs' },
              { title: 'Data Visualization', description: 'Generate rich visualizations of model outputs, performance metrics, and response patterns for deeper insights' },
              { title: 'Deployment Pipeline', description: 'One-click deployment to production environments with monitoring, scaling, and rollback capabilities' },
              { title: 'Templates Library', description: 'Access pre-built templates for common AI use cases including chatbots, content generation, and data analysis' },
              { title: 'Conversation Management', description: 'Enhance AI interactions with tools for regenerating responses, refining answers, and exploring topics deeper' },
              { title: 'Privacy-First Design', description: 'Keep sensitive data secure with options for local processing and controlled information sharing' },
              { title: 'Multiple Workspaces', description: 'Create isolated environments for different projects with data separation and device synchronization' },
              { title: 'Media Attachments', description: 'Attach and interact with images, documents, and other media within AI conversations for comprehensive analysis' },
              { title: 'Custom Model Configuration', description: 'Tailor AI model settings to fit specific needs, adjusting parameters for performance and creativity' },
              { title: 'API Integrations', description: 'Connect with external APIs and services for extended functionality and automation capabilities' },
              { title: 'Comprehensive Search', description: 'Easily retrieve past conversations and search through chat history for quick reference and insights' },
              { title: 'Export & Backup', description: 'Save and export conversations and projects, ensuring important work is backed up and accessible' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-750 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20 border border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-violet-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-handwritten text-5xl mb-6 text-white animate-fadeIn">Transform Your AI Strategy Today</h2>
          <p className="text-xl text-gray-300 mb-10 animate-fadeIn animation-delay-300">
            Join organizations of all sizes who have accelerated their AI adoption with our comprehensive LangIQ AI Studio. From development to deployment, we provide everything you need to create custom AI solutions for your unique challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105 animate-bounce animation-duration-2000"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
