"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import DataPacket interface

// Import DataPacket interface
import { DataPacket } from '../types/dataPacket';

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

    // Load handwritten font
    const loadFonts = async () => {
      const font = new FontFace('Caveat', 'url(https://fonts.gstatic.com/s/caveat/v10/Wnz6HAc5bAfYB2Q7YjYY.woff2)');
      try {
        await font.load();
        document.fonts.add(font);
        console.log('Font loaded successfully');
      } catch (error) {
        console.error('Font loading failed:', error);
      }
    };

    loadFonts();

    // Calculate cluster positions around a circle with 30% increased radius
    const centerX = canvas.width * 0.5;
    const centerY = canvas.height * 0.5;
    const radius = Math.min(canvas.width, canvas.height) * 0.39; // Increased by 30%

    // Helper function to calculate position on a circle
    const posOnCircle = (angle: number, distance: number = 1) => {
      return {
        x: centerX + Math.cos(angle) * radius * distance,
        y: centerY + Math.sin(angle) * radius * distance
      };
    };

    // Calculate equal angles for 7 clusters
    const clusterCount = 7;
    const angleStep = (Math.PI * 2) / clusterCount;

    // Animation elements with cluster structure
    const elements: {
      user: {
        x: number;
        y: number;
        radius: number;
        color: string;
        glowing: boolean;
        glowIntensity: number;
        glowColor: string;
        ringSize: number;
        isSquare?: boolean; // Add isSquare property for square shape
      };
      langiq: {
        x: number;
        y: number;
        radius: number;
        color: string;
        glowing: boolean;
        glowIntensity: number;
        glowColor: string;
        ringSize: number;
      };
      clusters: {
        name: string;
        x: number;
        y: number;
        radius: number;
        color: string;
        glowing: boolean;
        glowIntensity: number;
        glowColor: string;
        ringSize: number;
        nodes: {
          name: string;
          x: number;
          y: number;
          radius: number;
          color: string;
          glowing: boolean;
          glowIntensity: number;
          glowColor: string;
          ringSize: number;
        }[];
      }[];
      dataPackets: DataPacket[];
    } = {
      user: {
        x: centerX - radius * 1.04, // Increased distance by 30% (from 0.8 to 1.04)
        y: centerY,
        radius: 39, // Increased size by 30% (from 30 to 39)
        color: '#4285F4',
        glowing: false,
        glowIntensity: 0,
        glowColor: '#4285F4',
        ringSize: 5,
        isSquare: true // Setting user shape to square
      },
      langiq: {
        x: centerX,
        y: centerY,
        radius: 50,
        color: '#34A853',
        glowing: false,
        glowIntensity: 0,
        glowColor: '#34A853',
        ringSize: 8
      },
      clusters: [
        {
          name: "Frontier Models",
          ...posOnCircle(angleStep * 0),
          radius: 35,
          color: '#EA4335',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#EA4335',
          ringSize: 6,
          nodes: [
            {
              name: "Gemini",
              ...posOnCircle(angleStep * 0 - 0.15, 0.9),
              radius: 20,
              color: '#EA4335',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#EA4335',
              ringSize: 3
            },
            {
              name: "GPT-4",
              ...posOnCircle(angleStep * 0, 0.9),
              radius: 20,
              color: '#EA4335',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#EA4335',
              ringSize: 3
            },
            {
              name: "Claude 3",
              ...posOnCircle(angleStep * 0 + 0.15, 0.9),
              radius: 20,
              color: '#EA4335',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#EA4335',
              ringSize: 3
            },
            {
              name: "DeepSeek-V2",
              ...posOnCircle(angleStep * 0 + 0.3, 0.9),
              radius: 20,
              color: '#EA4335',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#EA4335',
              ringSize: 3
            }
          ]
        },
        {
          name: "Fine-tuned Models",
          ...posOnCircle(angleStep * 1),
          radius: 35,
          color: '#FBBC05',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#FBBC05',
          ringSize: 6,
          nodes: [
            {
              name: "Med-PaLM",
              ...posOnCircle(angleStep * 1 - 0.15, 0.9),
              radius: 20,
              color: '#FBBC05',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#FBBC05',
              ringSize: 3
            },
            {
              name: "GPT-4 Turbo",
              ...posOnCircle(angleStep * 1, 0.9),
              radius: 20,
              color: '#FBBC05',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#FBBC05',
              ringSize: 3
            },
            {
              name: "Claude Specialized",
              ...posOnCircle(angleStep * 1 + 0.15, 0.9),
              radius: 20,
              color: '#FBBC05',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#FBBC05',
              ringSize: 3
            }
          ]
        },
        {
          name: "Open Source Models",
          ...posOnCircle(angleStep * 2),
          radius: 35,
          color: '#4285F4',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#4285F4',
          ringSize: 6,
          nodes: [
            {
              name: "Llama 3",
              ...posOnCircle(angleStep * 2 - 0.15, 0.9),
              radius: 20,
              color: '#4285F4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#4285F4',
              ringSize: 3
            },
            {
              name: "Qwen",
              ...posOnCircle(angleStep * 2, 0.9),
              radius: 20,
              color: '#4285F4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#4285F4',
              ringSize: 3
            },
            {
              name: "Phi",
              ...posOnCircle(angleStep * 2 + 0.15, 0.9),
              radius: 20,
              color: '#4285F4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#4285F4',
              ringSize: 3
            },
            {
              name: "Mistral",
              ...posOnCircle(angleStep * 2 + 0.3, 0.9),
              radius: 20,
              color: '#4285F4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#4285F4',
              ringSize: 3
            }
          ]
        },
        {
          name: "Frameworks",
          ...posOnCircle(angleStep * 3),
          radius: 35,
          color: '#34A853',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#34A853',
          ringSize: 6,
          nodes: [
            {
              name: "Hugging Face",
              ...posOnCircle(angleStep * 3 - 0.15, 0.9),
              radius: 20,
              color: '#34A853',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#34A853',
              ringSize: 3
            },
            {
              name: "Transformers",
              ...posOnCircle(angleStep * 3, 0.9),
              radius: 20,
              color: '#34A853',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#34A853',
              ringSize: 3
            },
            {
              name: "Multimodal",
              ...posOnCircle(angleStep * 3 + 0.15, 0.9),
              radius: 20,
              color: '#34A853',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#34A853',
              ringSize: 3
            }
          ]
        },
        {
          name: "Retrieval",
          ...posOnCircle(angleStep * 4),
          radius: 35,
          color: '#9C27B0',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#9C27B0',
          ringSize: 6,
          nodes: [
            {
              name: "Vector DBs",
              ...posOnCircle(angleStep * 4 - 0.15, 0.9),
              radius: 20,
              color: '#9C27B0',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#9C27B0',
              ringSize: 3
            },
            {
              name: "RAG Systems",
              ...posOnCircle(angleStep * 4, 0.9),
              radius: 20,
              color: '#9C27B0',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#9C27B0',
              ringSize: 3
            },
            {
              name: "Knowledge Bases",
              ...posOnCircle(angleStep * 4 + 0.15, 0.9),
              radius: 20,
              color: '#9C27B0',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#9C27B0',
              ringSize: 3
            }
          ]
        },
        {
          name: "Tools & Interfaces",
          ...posOnCircle(angleStep * 5),
          radius: 35,
          color: '#FF5722',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#FF5722',
          ringSize: 6,
          nodes: [
            {
              name: "Web Search",
              ...posOnCircle(angleStep * 5 - 0.15, 0.9),
              radius: 20,
              color: '#FF5722',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#FF5722',
              ringSize: 3
            },
            {
              name: "Web Crawling",
              ...posOnCircle(angleStep * 5, 0.9),
              radius: 20,
              color: '#FF5722',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#FF5722',
              ringSize: 3
            },
            {
              name: "APIs & SDKs",
              ...posOnCircle(angleStep * 5 + 0.15, 0.9),
              radius: 20,
              color: '#FF5722',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#FF5722',
              ringSize: 3
            }
          ]
        },
        {
          name: "Multi-agent Systems",
          ...posOnCircle(angleStep * 6),
          radius: 35,
          color: '#00BCD4',
          glowing: false,
          glowIntensity: 0,
          glowColor: '#00BCD4',
          ringSize: 6,
          nodes: [
            {
              name: "LangChain",
              ...posOnCircle(angleStep * 6 - 0.15, 0.9),
              radius: 20,
              color: '#00BCD4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#00BCD4',
              ringSize: 3
            },
            {
              name: "AutoGPT",
              ...posOnCircle(angleStep * 6, 0.9),
              radius: 20,
              color: '#00BCD4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#00BCD4',
              ringSize: 3
            },
            {
              name: "Agent Networks",
              ...posOnCircle(angleStep * 6 + 0.15, 0.9),
              radius: 20,
              color: '#00BCD4',
              glowing: false,
              glowIntensity: 0,
              glowColor: '#00BCD4',
              ringSize: 3
            }
          ]
        }
      ],
      dataPackets: []
    };

    // Helper function to convert hex to rgb
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : '255, 255, 255';
    };

    // Helper function to draw a node with glow and ring
    const drawNode = (node: any, text: string) => {
      // Draw outer white ring
      ctx.beginPath();
      if (node.isSquare) {
        // Draw square outer ring
        const outerSize = node.radius + node.ringSize;
        ctx.rect(node.x - outerSize, node.y - outerSize, outerSize * 2, outerSize * 2);
      } else {
        ctx.arc(node.x, node.y, node.radius + node.ringSize, 0, Math.PI * 2);
      }
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fill();

      // Draw glow if the node is glowing
      if (node.glowing && node.glowIntensity > 0) {
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius,
          node.x, node.y, node.radius * (1.5 + node.glowIntensity * 0.5)
        );
        gradient.addColorStop(0, node.glowColor);
        gradient.addColorStop(1, `rgba(${hexToRgb(node.glowColor)}, 0)`);

        ctx.beginPath();
        if (node.isSquare) {
          // Draw square glow
          const glowSize = node.radius * (1.5 + node.glowIntensity * 0.5);
          ctx.rect(node.x - glowSize, node.y - glowSize, glowSize * 2, glowSize * 2);
        } else {
          ctx.arc(node.x, node.y, node.radius * (1.5 + node.glowIntensity * 0.5), 0, Math.PI * 2);
        }
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw the node
      ctx.beginPath();
      if (node.isSquare) {
        // Draw square node
        ctx.rect(node.x - node.radius, node.y - node.radius, node.radius * 2, node.radius * 2);
      } else {
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      }
      ctx.fillStyle = node.color;
      ctx.fill();

      // Add text
      ctx.fillStyle = '#FFF';
      // Use handwritten font
      const fontSize = Math.max(node.radius * 0.7, 10);
      ctx.font = `${fontSize}px 'Caveat', cursive`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Handle multi-line text
      const words = text.split(' ');
      if (words.length > 1 && node.radius > 25) {
        ctx.fillText(words[0], node.x, node.y - fontSize * 0.5);
        ctx.fillText(words.slice(1).join(' '), node.x, node.y + fontSize * 0.5);
      } else {
        ctx.fillText(text, node.x, node.y);
      }

      // Reduce glow intensity over time
      if (node.glowIntensity > 0) {
        node.glowIntensity -= 0.05;
        if (node.glowIntensity <= 0) {
          node.glowing = false;
          node.glowIntensity = 0;
        }
      }
    };

    // Rename the class to AnimatedPacket to avoid conflict with the imported DataPacket interface
    class AnimatedPacket implements DataPacket {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      color: string;
      size: number;
      arrived: boolean;
      nextTarget: { x: number, y: number } | null;
      targetNode: any;
      // Add these properties to satisfy the DataPacket interface
      id?: string;
      type?: string;
      content?: any;
      timestamp?: number;

      constructor(startX: number, startY: number, targetX: number, targetY: number, color: string, targetNode: any) {
        this.x = startX;
        this.y = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = 2 + Math.random() * 2;
        this.color = color;
        this.size = 5 + Math.random() * 5;
        this.arrived = false;
        this.nextTarget = null;
        this.targetNode = targetNode;
        // Initialize interface properties
        this.id = Math.random().toString(36).substring(2, 9);
        this.type = 'animated';
        this.timestamp = Date.now();
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 5) {
          // Make target node glow when packet arrives
          if (this.targetNode) {
            this.targetNode.glowing = true;
            this.targetNode.glowIntensity = 1.0;
            // Set the glow color to match the packet color
            this.targetNode.glowColor = this.color;
          }

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
        // Draw packet with glowing trail
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, `rgba(${hexToRgb(this.color)}, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Generate data packets
    const createDataPacket = () => {
      // User to LangIQ
      if (Math.random() > 0.6) {
        const packet = new AnimatedPacket(
          elements.user.x,
          elements.user.y,
          elements.langiq.x,
          elements.langiq.y,
          '#4285F4',
          elements.langiq
        );
        elements.dataPackets.push(packet);
      }

      // LangIQ to random cluster
      if (elements.clusters.length > 0) {
        const randomClusterIndex = Math.floor(Math.random() * elements.clusters.length);
        const targetCluster = elements.clusters[randomClusterIndex];

        const packet = new AnimatedPacket(
          elements.langiq.x,
          elements.langiq.y,
          targetCluster.x,
          targetCluster.y,
          targetCluster.color,
          targetCluster
        );

        // After reaching the cluster, randomly go to one of its nodes
        if (targetCluster.nodes.length > 0) {
          const randomNodeIndex = Math.floor(Math.random() * targetCluster.nodes.length);
          const targetNode = targetCluster.nodes[randomNodeIndex];

          packet.nextTarget = {
            x: targetNode.x,
            y: targetNode.y
          };
          packet.targetNode = targetNode;
        }

        elements.dataPackets.push(packet);
      }

      // Random cluster node back to LangIQ
      if (Math.random() > 0.7 && elements.clusters.length > 0) {
        const randomClusterIndex = Math.floor(Math.random() * elements.clusters.length);
        const sourceCluster = elements.clusters[randomClusterIndex];

        if (sourceCluster.nodes.length > 0) {
          const randomNodeIndex = Math.floor(Math.random() * sourceCluster.nodes.length);
          const sourceNode = sourceCluster.nodes[randomNodeIndex];

          const packet = new AnimatedPacket(
            sourceNode.x,
            sourceNode.y,
            elements.langiq.x,
            elements.langiq.y,
            sourceCluster.color,
            elements.langiq
          );

          elements.dataPackets.push(packet);
        }
      }

      // Direct connection between clusters occasionally
      if (Math.random() > 0.85 && elements.clusters.length > 1) {
        const sourceClusterIndex = Math.floor(Math.random() * elements.clusters.length);
        let targetClusterIndex;
        do {
          targetClusterIndex = Math.floor(Math.random() * elements.clusters.length);
        } while (targetClusterIndex === sourceClusterIndex);

        const sourceCluster = elements.clusters[sourceClusterIndex];
        const targetCluster = elements.clusters[targetClusterIndex];

        if (sourceCluster.nodes.length > 0 && targetCluster.nodes.length > 0) {
          const sourceNodeIndex = Math.floor(Math.random() * sourceCluster.nodes.length);
          const targetNodeIndex = Math.floor(Math.random() * targetCluster.nodes.length);

          const sourceNode = sourceCluster.nodes[sourceNodeIndex];
          const targetNode = targetCluster.nodes[targetNodeIndex];

          const packet = new AnimatedPacket(
            sourceNode.x,
            sourceNode.y,
            targetNode.x,
            targetNode.y,
            sourceCluster.color,
            targetNode
          );

          elements.dataPackets.push(packet);
        }
      }
    };

    // Animation render function
    const render = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new data packets
      if (time - lastPacketTime > 300) {
        createDataPacket();
        lastPacketTime = time;
      }

      // Draw nodes
      drawNode(elements.user, 'User');
      drawNode(elements.langiq, 'LangIQ');

      // Draw clusters and their nodes
      elements.clusters.forEach(cluster => {
        drawNode(cluster, cluster.name);
        cluster.nodes.forEach(node => {
          drawNode(node, node.name);
        });
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
      lastTime = time;
      animationFrameId = requestAnimationFrame(render);
    };

    // Animation loop
    let animationFrameId: number;
    let lastTime = 0;
    let lastPacketTime = 0;

    // Start animation
    animationFrameId = requestAnimationFrame(render);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-center p-0 math-paper-bg text-white relative overflow-hidden">
      {/* Background Canvas - slightly transparent to show the math paper */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-80"
      />

      {/* Content */}
      <div className="z-10 text-center w-full max-w-4xl px-4">
        <motion.h1
          className="text-5xl font-bold mb-6 handwriting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >

        </motion.h1>

        <motion.p
          className="text-xl mb-8 handwriting-alt"
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



        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link href="/services" className="mr-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 handwriting">
              Get Started
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 handwriting">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
        className="w-full h-full absolute top-0 left-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {/* Top Left - Model Ecosystem */}
        <motion.div
          className="content-box p-5 absolute top-20 left-6 max-w-[320px] sm:max-w-[380px] pointer-events-auto"
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-400 handwriting">Model Ecosystem</h3>
          <p className="mb-4 handwriting-alt">Access state-of-the-art models from leading AI companies:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 handwriting-alt">
            <li>Google (PaLM, Gemini)</li>
            <li>Anthropic (Claude)</li>
            <li>OpenAI (GPT-4, DALL-E)</li>
            <li>Open Source (Llama 2, Mistral, Falcon)</li>
            <li>Local deployment with Ollama & VLLM</li>
          </ul>
        </motion.div>

        {/* Top Right - Advanced AI Techniques */}
        <motion.div
          className="content-box p-5 absolute top-20 right-6 max-w-[320px] sm:max-w-[380px] pointer-events-auto"
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-green-400 handwriting">Advanced AI Techniques</h3>
          <p className="mb-4 handwriting-alt">Leverage cutting-edge AI capabilities:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 handwriting-alt">
            <li>Retrieval-Augmented Generation (RAG)</li>
            <li>Vector databases (ChromaDB, Pinecone, FAISS)</li>
            <li>LLM Fine-Tuning (LoRA, QLoRA, PEFT)</li>
            <li>Multi-Agent Systems (LangChain, AutoGen)</li>
            <li>Tool & API Integration</li>
          </ul>
        </motion.div>

        {/* Bottom Left - Data Processing */}
        <motion.div
          className="content-box p-5 absolute bottom-8 left-6 max-w-[320px] sm:max-w-[380px] pointer-events-auto"
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-400 handwriting">Data Processing</h3>
          <p className="mb-4 handwriting-alt">Transform and enrich your data:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 handwriting-alt">
            <li>Tokenization & Normalization</li>
            <li>Stemming & Lemmatization</li>
            <li>Named Entity Recognition (NER)</li>
            <li>Sentiment Analysis</li>
            <li>Topic Modeling (LDA, NMF)</li>
          </ul>
        </motion.div>

        {/* Bottom Right - Multi-Modal Output */}
        <motion.div
          className="content-box p-5 absolute bottom-8 right-6 max-w-[320px] sm:max-w-[380px] pointer-events-auto"
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-purple-400 handwriting">Multi-Modal Output</h3>
          <p className="mb-4 handwriting-alt">Get results in various formats:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 handwriting-alt">
            <li>Text (Markdown, HTML)</li>
            <li>Images (PNG, JPEG via Stable Diffusion)</li>
            <li>Videos (MP4 via RunwayML)</li>
            <li>Speech (WAV, MP3 via gTTS)</li>
            <li>Tailored reports & presentations</li>
          </ul>
        </motion.div>
      </motion.section>
    </main>
  );
}