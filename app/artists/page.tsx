'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Award, MapPin, Instagram } from 'lucide-react';

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const artists = [
    {
      id: 1,
      name: 'Matseliso Moloi',
      specialty: 'Textile Weaver',
      location: 'Maseru, Lesotho',
      experience: '15 years',
      featuredWorks: 24,
      instagram: '@matseliso_textiles',
      featured: true,
      tags: ['weaving', 'textiles', 'traditional']
    },
    {
      id: 2,
      name: 'Thabo Nkosi',
      specialty: 'Fashion Designer',
      location: 'Johannesburg, South Africa',
      experience: '12 years',
      featuredWorks: 18,
      instagram: '@thabo_nkosi_designs',
      featured: true,
      tags: ['fashion', 'tailoring', 'modern']
    },
    {
      id: 3,
      name: 'Lerato Mohapi',
      specialty: 'Beadwork Artist',
      location: 'Bloemfontein, South Africa',
      experience: '8 years',
      featuredWorks: 32,
      instagram: '@lerato_beadwork',
      featured: false,
      tags: ['beadwork', 'jewelry', 'craft']
    },
    {
      id: 4,
      name: 'David Mokhoro',
      specialty: 'Leather Craftsman',
      location: 'Quthing, Lesotho',
      experience: '20 years',
      featuredWorks: 15,
      instagram: '@mokhoro_leather',
      featured: false,
      tags: ['leather', 'accessories', 'traditional']
    },
    {
      id: 5,
      name: 'Nthabiseng Motsoeneng',
      specialty: 'Pattern Designer',
      location: 'Pretoria, South Africa',
      experience: '7 years',
      featuredWorks: 28,
      instagram: '@nthabiseng_patterns',
      featured: false,
      tags: ['patterns', 'digital', 'modern']
    },
    {
      id: 6,
      name: 'Katleho Mokoena',
      specialty: 'Embroidery Artist',
      location: 'Durban, South Africa',
      experience: '10 years',
      featuredWorks: 19,
      instagram: '@katleho_embroidery',
      featured: false,
      tags: ['embroidery', 'textiles', 'detailed']
    },
  ];

  const filters = [
    { id: 'all', label: 'All Artists' },
    { id: 'featured', label: 'Featured' },
    { id: 'lesotho', label: 'Based in Lesotho' },
    { id: 'textiles', label: 'Textile Arts' },
    { id: 'craft', label: 'Traditional Craft' },
  ];

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artist.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' ? true :
                         activeFilter === 'featured' ? artist.featured :
                         activeFilter === 'lesotho' ? artist.location.includes('Lesotho') :
                         activeFilter === 'textiles' ? artist.tags.includes('textiles') || artist.tags.includes('weaving') :
                         activeFilter === 'craft' ? artist.tags.includes('traditional') || artist.tags.includes('craft') :
                         true;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Masters of <span className="text-amber-400">Craft</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Meet the talented artisans and designers who bring Basotho heritage to life through their craft.
            Each artist contributes unique skills and perspectives to our movement.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search artists by name, specialty, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-amber-600 border-amber-600 text-white'
                    : 'border-gray-700 text-gray-400 hover:border-amber-800/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artists/${artist.id}`}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                {/* Artist Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {artist.featured && (
                        <div className="flex items-center gap-1 mb-2">
                          <Award size={14} className="text-amber-400" />
                          <span className="text-xs text-amber-400 font-semibold">Featured Artist</span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold group-hover:text-amber-300">{artist.name}</h3>
                      <p className="text-amber-400">{artist.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-400">{artist.featuredWorks}</div>
                      <div className="text-xs text-gray-400">Works</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={16} />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span>🕒 {artist.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Instagram size={16} />
                      <span>{artist.instagram}</span>
                    </div>
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="px-6 py-4 border-t border-gray-800 bg-gray-900/50">
                  <div className="text-center">
                    <span className="text-amber-400 text-sm font-semibold group-hover:text-amber-300">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">{artists.length}</div>
              <div className="text-gray-400">Featured Artists</div>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">3</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">128</div>
              <div className="text-gray-400">Total Works</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}