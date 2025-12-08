import Link from 'next/link';
import { Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Basotho Blanket Weaving',
      excerpt: 'Discover the traditional techniques and cultural significance behind Basotho blanket patterns.',
      author: 'Matseliso Moloi',
      date: '2024-02-15',
      readTime: '5 min read',
      category: 'Craftsmanship',
      tags: ['weaving', 'tradition', 'textiles'],
      featured: true
    },
    {
      id: 2,
      title: 'Modern Interpretations of Traditional Motifs',
      excerpt: 'How contemporary designers are reimagining Basotho patterns for modern fashion.',
      author: 'Thabo Nkosi',
      date: '2024-02-10',
      readTime: '7 min read',
      category: 'Design',
      tags: ['modern', 'patterns', 'design'],
      featured: true
    },
    {
      id: 3,
      title: 'Sustainable Fashion in Southern Africa',
      excerpt: 'Exploring eco-friendly practices in the African fashion industry.',
      author: 'Lerato Mohapi',
      date: '2024-02-05',
      readTime: '8 min read',
      category: 'Sustainability',
      tags: ['eco-friendly', 'sustainable', 'africa'],
      featured: false
    },
    {
      id: 4,
      title: 'The Cultural Significance of Mokorotlo Hats',
      excerpt: 'Understanding the history and symbolism of this iconic Basotho headwear.',
      author: 'David Mokhoro',
      date: '2024-01-28',
      readTime: '6 min read',
      category: 'Culture',
      tags: ['heritage', 'symbolism', 'accessories'],
      featured: false
    },
    {
      id: 5,
      title: 'Building a Community Through Craft',
      excerpt: 'How Sesotho Fashioneng supports local artisans and their communities.',
      author: 'Nthabiseng Motsoeneng',
      date: '2024-01-20',
      readTime: '4 min read',
      category: 'Community',
      tags: ['artisans', 'community', 'impact'],
      featured: false
    },
    {
      id: 6,
      title: 'From Lesotho to the World',
      excerpt: 'The journey of Basotho fashion gaining international recognition.',
      author: 'Katleho Mokoena',
      date: '2024-01-15',
      readTime: '9 min read',
      category: 'Global',
      tags: ['international', 'recognition', 'growth'],
      featured: false
    },
  ];

  const categories = [
    { name: 'All', count: 15 },
    { name: 'Craftsmanship', count: 4 },
    { name: 'Design', count: 3 },
    { name: 'Culture', count: 5 },
    { name: 'Sustainability', count: 2 },
    { name: 'Community', count: 1 },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cultural <span className="text-amber-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Stories, interviews, and articles about Basotho heritage, fashion, and craftsmanship.
            Stay updated with our latest insights and cultural explorations.
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {posts.filter(p => p.featured).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-amber-900/20 to-gray-900"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                    <div className="text-amber-400 group-hover:text-amber-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 bg-gray-800/50 hover:bg-amber-600 border border-gray-800 hover:border-amber-600 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span>{category.name}</span>
                    <span className="text-gray-400 text-sm">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.filter(p => !p.featured).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-amber-900/20 to-gray-900"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-400">{post.category}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-amber-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="text-gray-400">{formatDate(post.date)}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-12 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-2xl p-8 border border-amber-800/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest articles, cultural insights, and event announcements.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}