'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  collection: {
    id: number;
    name: string;
    description: string;
    image: string;
    itemsCount: number;
    slug: string;
  };
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

export default function CollectionCard({ collection, index, hoveredIndex, onHover }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
  };

  // Generate a gradient based on index
  const gradients = [
    'from-amber-900/30 via-amber-800/20 to-gray-900',
    'from-amber-800/30 via-amber-700/20 to-gray-900',
    'from-amber-700/30 via-amber-600/20 to-gray-900',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <Link
      href={`/shop/collections/${collection.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 transition-all duration-500 hover:border-amber-800/50 hover:transform hover:scale-[1.02]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image/Pattern */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '120px'
            }}></div>
          </div>
          
          {/* Animated elements */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
            isHovered ? 'scale-110 opacity-30' : 'scale-100 opacity-20'
          }`}>
            <div className="text-6xl font-bold text-amber-400/30">
              {collection.name.split(' ')[0].charAt(0)}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-70' : 'opacity-50'
        }`}></div>

        {/* Collection indicator */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-amber-400">Collection</span>
          </div>
        </div>

        {/* Items count */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full">
            <span className="text-sm font-semibold text-amber-400">
              {collection.itemsCount} items
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
          {collection.name}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {collection.description}
        </p>

        {/* Explore button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-400 group-hover:text-amber-300 transition-colors">
            <span className="font-semibold">Explore Collection</span>
            <ArrowRight className={`transition-transform duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`} size={20} />
          </div>
          
          {/* Featured tag */}
          <div className="px-3 py-1 bg-amber-600/20 rounded-full">
            <span className="text-xs font-semibold text-amber-400">Featured</span>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isHovered ? 'glow-sm' : ''
      }`}></div>

      {/* Border animation */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
        isHovered ? 'border-amber-400/20' : ''
      }`}></div>
    </Link>
  );
}