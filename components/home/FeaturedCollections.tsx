// components/home/FeaturedCollections.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CollectionCard from '@/components/shop/CollectionCard';

export default function FeaturedCollections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      name: 'Mokorotlo Collection',
      description: 'Inspired by traditional Basotho hats',
      image: '/collections/mokorotlo.jpg',
      itemsCount: 24,
      slug: 'mokorotlo-collection'
    },
    {
      id: 2,
      name: 'Mantša Blanket Series',
      description: 'Modern take on traditional blankets',
      image: '/collections/blanket-series.jpg',
      itemsCount: 18,
      slug: 'blanket-series'
    },
    {
      id: 3,
      name: 'Lesotho Highlands',
      description: 'Earthy tones from mountain landscapes',
      image: '/collections/highlands.jpg',
      itemsCount: 32,
      slug: 'lesotho-highlands'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
            Featured Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Contemporary <span className="text-amber-400">Basotho</span> Craft
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each collection tells a story of heritage, woven into modern fashion pieces
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/shop/collections"
            className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-lg transition-colors"
          >
            View All Collections
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-800/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
}