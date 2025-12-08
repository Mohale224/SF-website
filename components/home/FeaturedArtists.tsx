// components/home/FeaturedArtists.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Award, Palette } from 'lucide-react';

export default function FeaturedArtists() {
  const [activeArtist, setActiveArtist] = useState<number | null>(null);

  const artists = [
    {
      id: 1,
      name: 'Matseliso Moloi',
      craft: 'Textile Weaver & Designer',
      location: 'Maseru, Lesotho',
      bio: 'Specializes in traditional Basotho blanket weaving with contemporary patterns.',
      image: '/artists/matseliso.jpg',
      featuredWorks: 24,
      yearsExperience: 15,
      instagram: '@matseliso_textiles'
    },
    {
      id: 2,
      name: 'Thabo Nkosi',
      craft: 'Fashion Designer',
      location: 'Johannesburg, South Africa',
      bio: 'Blends modern tailoring with traditional Basotho motifs and silhouettes.',
      image: '/artists/thabo.jpg',
      featuredWorks: 18,
      yearsExperience: 12,
      instagram: '@thabo_nkosi_designs'
    },
    {
      id: 3,
      name: 'Lerato Mohapi',
      craft: 'Beadwork Artist',
      location: 'Bloemfontein, South Africa',
      bio: 'Creates intricate beadwork inspired by Basotho cultural symbolism.',
      image: '/artists/lerato.jpg',
      featuredWorks: 32,
      yearsExperience: 8,
      instagram: '@lerato_beadwork'
    },
    {
      id: 4,
      name: 'David Mokhoro',
      craft: 'Leather Craftsman',
      location: 'Quthing, Lesotho',
      bio: 'Traditional leatherworking techniques applied to modern accessories.',
      image: '/artists/david.jpg',
      featuredWorks: 15,
      yearsExperience: 20,
      instagram: '@mokhoro_leather'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
            Featured Artists
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Masters of <span className="text-amber-400">Craft</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the talented artisans keeping Basotho traditions alive through their craft
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-800/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              onMouseEnter={() => setActiveArtist(index)}
              onMouseLeave={() => setActiveArtist(null)}
            >
              {/* Artist Image */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent"></div>
                {/* Placeholder for artist image */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-gray-900 flex items-end justify-center">
                  <div className="mb-8 text-center">
                    <Palette size={48} className="text-amber-400/30 mx-auto mb-2" />
                    <div className="text-amber-400/20 text-2xl font-bold">{artist.name.split(' ')[0]}</div>
                  </div>
                </div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1 bg-amber-600/20 backdrop-blur-sm rounded-full">
                    <Award size={12} className="text-amber-400" />
                    <span className="text-amber-400 text-xs font-semibold">Featured</span>
                  </div>
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-amber-300 transition-colors">
                  {artist.name}
                </h3>
                <p className="text-amber-400 text-sm mb-3">{artist.craft}</p>
                <p className="text-gray-400 text-sm mb-4">{artist.bio}</p>
                
                {/* Stats */}
                <div className="flex justify-between mb-6">
                  <div className="text-center">
                    <div className="text-amber-400 font-bold">{artist.featuredWorks}</div>
                    <div className="text-gray-500 text-xs">Works</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold">{artist.yearsExperience}</div>
                    <div className="text-gray-500 text-xs">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold">{artist.location.split(',')[0]}</div>
                    <div className="text-gray-500 text-xs">Location</div>
                  </div>
                </div>

                {/* Instagram & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Instagram size={16} />
                    <span className="text-sm">{artist.instagram}</span>
                  </div>
                  <Link
                    href={`/artists/${artist.id}`}
                    className="text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center gap-1"
                  >
                    View Profile
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-t from-amber-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View All Artists */}
        <div className="text-center">
          <Link
            href="/artists"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-700/20 to-amber-900/20 border border-amber-800/30 hover:border-amber-700/50 text-amber-400 hover:text-amber-300 font-semibold rounded-full transition-all duration-300 hover:bg-amber-800/10"
          >
            Explore All Artists
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-amber-800/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
}