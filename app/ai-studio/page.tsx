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
              A powerful environment for designing, testing, and deploying advanced AI solutions with intuitive tools for prompt engineering, model fine-tuning, and application development
            </p>
          </div>
        </div>
      </section>

      {/* AI Studio Hero Image section */}
      <section className={`py-12 bg-gray-900 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <Image
              src="/msty-hero-image-light.webp"
              alt="AI Studio Visualization"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Download section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-purple-400 mb-8">Download AI Studio</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#windows-x86"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0h13V3H9z M9 15H3V9h6v6z" />
                </svg>
                <span>Windows (x86)</span>
              </a>
              <a
                href="#windows-arm64"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0h13V3H9z M9 15H3V9h6v6z" />
                </svg>
                <span>Windows (ARM64)</span>
              </a>
              <a
                href="#linux"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m14 0v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9" />
                </svg>
                <span>Linux</span>
              </a>
              <a
                href="#macos"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M12 4v2m5.66 2.34l-1.41 1.41M20 12h-2m-1.93 6.07l-1.41-1.41M12 18v2M7.76 16.66l-1.41 1.41M4 12H2m3.34-5.66l-1.41-1.41" />
                </svg>
                <span>macOS</span>
              </a>
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
              { title: 'Prompt Playground', description: 'Interactive environment for crafting, testing, and refining prompts with real-time feedback and version control' },
              { title: 'Model Integration', description: 'Seamless connections to leading AI models including OpenAI, Anthropic, Cohere, and custom models with unified interface' },
              { title: 'Visual Prompt Builder', description: 'Drag-and-drop interface for creating complex prompt chains and workflows without writing code' },
              { title: 'Data Visualization', description: 'Rich visualizations of model outputs, performance metrics, and response patterns for deeper insights' },
              { title: 'Collaboration', description: 'Team workspaces with shared projects, commenting, and version history for effective team coordination' },
              { title: 'Testing & Evaluation', description: 'Automated testing suite for prompt robustness, model performance, and output quality assurance' },
              { title: 'Deployment Pipeline', description: 'One-click deployment to production environments with monitoring, scaling, and rollback capabilities' },
              { title: 'Templates Library', description: 'Pre-built templates for common AI use cases including chatbots, content generation, and data analysis' },
              { title: 'Offline-First Design', description: 'Operates seamlessly without an internet connection, ensuring privacy and reliability while supporting online AI services like OpenAI, Claude, and others' },
              { title: 'Parallel Multiverse Chats', description: 'Engage with multiple AI models simultaneously, compare responses side-by-side, and streamline research and decision-making' },
              { title: 'Conversation Crafting Tools', description: 'Enhance AI interactions by regenerating responses, refining answers, exploring topics deeper, and cloning conversations for iterative discussions' },
              { title: 'Real-Time Data Retrieval', description: 'Integrate the latest online information into AI conversations via web search, ensuring relevant and up-to-date responses' },
              { title: 'Knowledge Stack', description: 'Import and manage information with files, folders, Obsidian vaults, YouTube transcriptions, and multiple customizable knowledge stacks' },
              { title: 'Unified Model Access', description: 'Seamlessly switch between AI models from platforms like Hugging Face, Ollama, Open Router, and other model providers' },
              { title: 'Prompt Library', description: 'Utilize a curated collection of predefined prompts, customize them, and create new ones to optimize AI outputs' },
              { title: 'Discovery and Visualization', description: 'Use delve mode and Flowchat™ to navigate AI-generated knowledge, track thought processes, and visually organize complex ideas' },
              { title: 'Ollama Integration', description: 'Run and integrate existing Ollama models effortlessly within the AI Studio environment' },
              { title: 'Ultimate Privacy', description: 'No personal data leaves your device, ensuring total control over sensitive information' },
              { title: 'Offline Mode', description: 'Full functionality without an internet connection, allowing private and secure AI interactions anywhere' },
              { title: 'Folders Organization', description: 'Organize and manage conversations efficiently with a structured folder system' },
              { title: 'Multiple Workspaces', description: 'Create isolated environments for different projects, ensuring data separation and seamless synchronization across devices' },
              { title: 'Attachments Support', description: 'Attach and interact with images, documents, and other media within AI conversations' },
              { title: 'Custom AI Model Configuration', description: 'Tailor model settings to fit specific needs, adjusting parameters for performance, response style, and creativity' },
              { title: 'Multi-Device Syncing', description: 'Keep conversations and settings consistent across multiple devices with secure synchronization' },
              { title: 'API Integrations', description: 'Connect with external APIs for extended functionalities and automation' },
              { title: 'Session History & Search', description: 'Retrieve past conversations and search through chat history for quick reference' },
              { title: 'Customizable UI', description: 'Adjust themes, layouts, and workspace configurations for a personalized experience' },
              { title: 'Voice Input & Output', description: 'Utilize speech-to-text and text-to-speech for hands-free AI interactions' },
              { title: 'Collaboration Features', description: 'Share AI-generated insights and discussions with team members or collaborators' },
              { title: 'Export & Backup Options', description: 'Save and export conversations, ensuring important discussions are backed up and accessible' },
              { title: 'Fine-Tuned AI Behavior', description: 'Modify response behavior using temperature settings, prompt engineering, and model-specific optimizations' }
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
          <h2 className="font-handwritten text-5xl mb-6 text-white animate-fadeIn">Ready to Elevate Your AI Projects?</h2>
          <p className="text-xl text-gray-300 mb-10 animate-fadeIn animation-delay-300">
            Join thousands of AI developers who have accelerated their workflow and improved output quality with our comprehensive studio tools. From ideation to deployment, AI Studio provides everything you need in one place.
          </p>
          <Link
            href="/ai-studio/signup"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105 animate-bounce animation-duration-2000"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
