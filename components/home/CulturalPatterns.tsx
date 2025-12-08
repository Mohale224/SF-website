// components/home/CulturalPatterns.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Shield, Users } from 'lucide-react';

export default function CulturalPatterns() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      drawPattern(ctx, canvas.width, canvas.height);
    };

    const drawPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw traditional Basotho-inspired patterns
      const gridSize = 80;
      const offsetX = width / 2;
      const offsetY = height / 2;
      
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.1)';
      ctx.lineWidth = 2;
      
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          // Draw diamond patterns (inspired by Basotho blankets)
          ctx.beginPath();
          ctx.moveTo(x + gridSize / 2, y);
          ctx.lineTo(x + gridSize, y + gridSize / 2);
          ctx.lineTo(x + gridSize / 2, y + gridSize);
          ctx.lineTo(x, y + gridSize / 2);
          ctx.closePath();
          ctx.stroke();
          
          // Draw smaller inner patterns
          if ((x / gridSize + y / gridSize) % 2 === 0) {
            ctx.beginPath();
            ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize / 6, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const values = [
    {
      icon: <Shield className="text-amber-400" size={24} />,
      title: 'Preservation',
      description: 'Keeping traditional Basotho craftsmanship alive'
    },
    {
      icon: <Compass className="text-amber-400" size={24} />,
      title: 'Innovation',
      description: 'Blending heritage with contemporary design'
    },
    {
      icon: <Users className="text-amber-400" size={24} />,
      title: 'Community',
      description: 'Supporting local artisans and their communities'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Canvas */}
      <div className="absolute inset-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
                Our Movement
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                More Than <span className="text-amber-400">Fashion</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Sesotho Fashioneng is a cultural movement dedicated to preserving 
                Basotho heritage through contemporary fashion. Each piece tells a 
                story of tradition, craftsmanship, and identity.
              </p>
              
              {/* Values */}
              <div className="space-y-6 mb-10">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/movement"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn About Our Movement
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Right Column - Pattern Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                {/* Pattern Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-amber-900/20 to-gray-900 rounded-lg border border-amber-800/30 flex items-center justify-center"
                    >
                      <div className="text-amber-400/30 text-2xl">●▲■</div>
                    </div>
                  ))}
                </div>
                
                {/* Pattern Info */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-amber-300">
                    Symbolic Patterns
                  </h4>
                  <p className="text-gray-400">
                    Each pattern in our designs carries cultural significance, 
                    from traditional Basotho blanket motifs to contemporary 
                    interpretations of mountain landscapes.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span>Traditional Motifs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-amber-700 rounded-full"></div>
                      <span>Modern Interpretations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-amber-800/10 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}