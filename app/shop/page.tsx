import Link from 'next/link';
import { ArrowRight, Filter, Grid, List } from 'lucide-react';

export default function ShopPage() {
  const categories = [
    { name: 'Traditional Wear', count: 42, slug: 'traditional' },
    { name: 'Modern Fusion', count: 28, slug: 'modern-fusion' },
    { name: 'Accessories', count: 36, slug: 'accessories' },
    { name: 'Limited Editions', count: 12, slug: 'limited' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Mokorotlo Jacket', price: 'R1,299', category: 'Modern Fusion' },
    { id: 2, name: 'Basotho Blanket Scarf', price: 'R899', category: 'Accessories' },
    { id: 3, name: 'Heritage Trousers', price: 'R1,499', category: 'Traditional' },
    { id: 4, name: 'Mountain Kingdom Dress', price: 'R2,199', category: 'Modern Fusion' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shop <span className="text-amber-400">Basotho</span> Heritage
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Discover our collection of contemporary fashion pieces inspired by Basotho traditions.
            Each item tells a story of craftsmanship and cultural heritage.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Categories</h2>
            <Link 
              href="/shop/categories" 
              className="text-amber-400 hover:text-amber-300 flex items-center gap-2"
            >
              View All <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/shop/categories/${category.slug}`}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👘</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-300">{category.name}</h3>
                <p className="text-gray-400">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-amber-900/20 to-gray-900"></div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <span className="text-amber-400 font-bold">{product.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{product.category}</p>
                  <button className="w-full py-2 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collections Banner */}
      <div className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-2xl p-8 md:p-12 border border-amber-800/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Collections
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Each collection is a curated expression of Basotho heritage, blending traditional motifs with contemporary design.
            </p>
            <Link
              href="/shop/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors"
            >
              View Collections <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}