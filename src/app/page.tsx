"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Reference to the canvas for animation
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation setup when component mounts
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation elements
    const elements = {
      user: { x: canvas.width * 0.1, y: canvas.height * 0.5, radius: 30, color: '#4285F4' },
      langiq: { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 50, color: '#34A853' },
      models: [
        { name: 'PaLM/Gemini', x: canvas.width * 0.75, y: canvas.height * 0.3, radius: 25, color: '#EA4335' },
        { name: 'Claude', x: canvas.width * 0.8, y: canvas.height * 0.45, radius: 25, color: '#FBBC05' },
        { name: 'GPT-4', x: canvas.width * 0.75, y: canvas.height * 0.6, radius: 25, color: '#4285F4' },
        { name: 'Llama/Mistral', x: canvas.width * 0.8, y: canvas.height * 0.75, radius: 25, color: '#34A853' }
      ],
      tools: [
        { name: 'Databases', x: canvas.width * 0.25, y: canvas.height * 0.25, radius: 20, color: '#EA4335' },
        { name: 'APIs', x: canvas.width * 0.2, y: canvas.height * 0.75, radius: 20, color: '#FBBC05' },
        { name: 'Vector DBs', x: canvas.width * 0.7, y: canvas.height * 0.15, radius: 20, color: '#4285F4' },
        { name: 'Multi-Agent', x: canvas.width * 0.6, y: canvas.height * 0.85, radius: 20, color: '#34A853' }
      ],
      dataPackets: []
    };

    // Animation loop
    let animationFrameId: number;
    let lastTime = 0;

    // Data packet class for animation
    class DataPacket {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      color: string;
      size: number;
      arrived: boolean;
      nextTarget: { x: number, y: number } | null;

      constructor(startX: number, startY: number, targetX: number, targetY: number, color: string) {
        this.x = startX;
        this.y = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = 2 + Math.random() * 2;
        this.color = color;
        this.size = 5 + Math.random() * 5;
        this.arrived = false;
        this.nextTarget = null;
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 5) {
          if (this.nextTarget) {
            this.targetX = this.nextTarget.x;
            this.targetY = this.nextTarget.y;
            this.nextTarget = null;
          } else {
            this.arrived = true;
          }
          return;
        }

        this.x += (dx / distance) * this.speed;
        this.y += (dy / distance) * this.speed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Generate data packets
    const createDataPacket = () => {
      // User to LangIQ
      if (Math.random() > 0.5) {
        const packet = new DataPacket(
          elements.user.x,
          elements.user.y,
          elements.langiq.x,
          elements.langiq.y,
          '#4285F4'
        );
        elements.dataPackets.push(packet);
      }

      // LangIQ to Models/Tools
      const targets = [...elements.models, ...elements.tools];
      const randomTarget = targets[Math.floor(Math.random() * targets.length)];
      const packet = new DataPacket(
        elements.langiq.x,
        elements.langiq.y,
        randomTarget.x,
        randomTarget.y,
        randomTarget.color
      );
      elements.dataPackets.push(packet);

      // Models/Tools back to LangIQ
      if (Math.random() > 0.7) {
        const sourceIndex = Math.floor(Math.random() * targets.length);
        const source = targets[sourceIndex];
        const packet = new DataPacket(
          source.x,
          source.y,
          elements.langiq.x,
          elements.langiq.y,
          source.color
        );
        elements.dataPackets.push(packet);
      }
    };

    // Animation render function
    const render = (time: number) => {
      const deltaTime = time - lastTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new data packets
      if (deltaTime > 300) {
        createDataPacket();
        lastTime = time;
      }

      // Draw connections
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.lineWidth = 1;

      // User to LangIQ
      ctx.beginPath();
      ctx.moveTo(elements.user.x, elements.user.y);
      ctx.lineTo(elements.langiq.x, elements.langiq.y);
      ctx.stroke();

      // LangIQ to Models and Tools
      [...elements.models, ...elements.tools].forEach(item => {
        ctx.beginPath();
        ctx.moveTo(elements.langiq.x, elements.langiq.y);
        ctx.lineTo(item.x, item.y);
        ctx.stroke();
      });

      // Draw elements
      // Draw user
      ctx.beginPath();
      ctx.arc(elements.user.x, elements.user.y, elements.user.radius, 0, Math.PI * 2);
      ctx.fillStyle = elements.user.color;
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('User', elements.user.x, elements.user.y + 5);

      // Draw LangIQ
      ctx.beginPath();
      ctx.arc(elements.langiq.x, elements.langiq.y, elements.langiq.radius, 0, Math.PI * 2);
      ctx.fillStyle = elements.langiq.color;
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.font = '16px Arial';
      ctx.fillText('LangIQ', elements.langiq.x, elements.langiq.y + 5);

      // Draw models
      elements.models.forEach(model => {
        ctx.beginPath();
        ctx.arc(model.x, model.y, model.radius, 0, Math.PI * 2);
        ctx.fillStyle = model.color;
        ctx.fill();
        ctx.fillStyle = '#FFF';
        ctx.font = '12px Arial';
        ctx.fillText(model.name, model.x, model.y + 5);
      });

      // Draw tools
      elements.tools.forEach(tool => {
        ctx.beginPath();
        ctx.arc(tool.x, tool.y, tool.radius, 0, Math.PI * 2);
        ctx.fillStyle = tool.color;
        ctx.fill();
        ctx.fillStyle = '#FFF';
        ctx.font = '12px Arial';
        ctx.fillText(tool.name, tool.x, tool.y + 5);
      });

      // Update and draw data packets
      elements.dataPackets.forEach((packet, index) => {
        packet.update();
        packet.draw(ctx);

        if (packet.arrived) {
          elements.dataPackets.splice(index, 1);
        }
      });

      // Continue animation loop
      animationFrameId = requestAnimationFrame(render);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(render);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Content */}
      <div className="z-10 text-center max-w-4xl">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LangIQ
        </motion.h1>

        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Universal AI Interface for Intelligent Data Processing
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Input</h2>
            <ul className="text-left space-y-2">
              <li>• Universal Data Ingestion</li>
              <li>• Multiple File Formats</li>
              <li>• Database Connections</li>
              <li>• Natural Language Prompts</li>
              <li>• API Integration</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-green-400">Processing</h2>
            <ul className="text-left space-y-2">
              <li>• Intelligent Analysis</li>
              <li>• Model Orchestration</li>
              <li>• Frontier AI Models</li>
              <li>• RAG with Vector DBs</li>
              <li>• Multi-Agent Systems</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-yellow-400">Output</h2>
            <ul className="text-left space-y-2">
              <li>• Multi-Modal Results</li>
              <li>• Contextualized Responses</li>
              <li>• Customizable Formats</li>
              <li>• Data Visualizations</li>
              <li>• Actionable Insights</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 mr-4">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
        className="mt-20 w-full max-w-6xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Powerful Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/70 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Model Ecosystem</h3>
            <p className="mb-4">Access state-of-the-art models from leading AI companies:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Google (PaLM, Gemini)</li>
              <li>Anthropic (Claude)</li>
              <li>OpenAI (GPT-4, DALL-E)</li>
              <li>Open Source (Llama 2, Mistral, Falcon)</li>
              <li>Local deployment with Ollama & VLLM</li>
            </ul>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Advanced AI Techniques</h3>
            <p className="mb-4">Leverage cutting-edge AI capabilities:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>Vector databases (ChromaDB, Pinecone, FAISS)</li>
              <li>LLM Fine-Tuning (LoRA, QLoRA, PEFT)</li>
              <li>Multi-Agent Systems (LangChain, AutoGen)</li>
              <li>Tool & API Integration</li>
            </ul>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Data Processing</h3>
            <p className="mb-4">Transform and enrich your data:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Tokenization & Normalization</li>
              <li>Stemming & Lemmatization</li>
              <li>Named Entity Recognition (NER)</li>
              <li>Sentiment Analysis</li>
              <li>Topic Modeling (LDA, NMF)</li>
            </ul>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Multi-Modal Output</h3>
            <p className="mb-4">Get results in various formats:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Text (Markdown, HTML)</li>
              <li>Images (PNG, JPEG via Stable Diffusion)</li>
              <li>Videos (MP4 via RunwayML)</li>
              <li>Speech (WAV, MP3 via gTTS)</li>
              <li>Tailored reports & presentations</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </main>
  );
}