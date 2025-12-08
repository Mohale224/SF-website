// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sesotho Fashioneng</h3>
                <p className="text-sm text-gray-400">Fashion Rooted in Heritage</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Preserving Basotho culture through contemporary fashion and craftsmanship.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'twitter', 'pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-300 hover:text-white capitalize">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Shop', 'Events', 'Artists', 'Movement', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-bold mb-6">Collections</h4>
            <ul className="space-y-3">
              {['Mokorotlo Series', 'Blanket Traditions', 'Mountain Kingdom', 'Limited Editions'].map((collection) => (
                <li key={collection}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {collection}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive updates on collections, events, and cultural insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sesotho Fashioneng. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-amber-400">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400">Terms of Service</a>
              <a href="#" className="hover:text-amber-400">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}