// components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Events', href: '/events' },
    { name: 'Artists', href: '/artists' },
    { name: 'Movement', href: '/movement' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SF</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Sesotho Fashioneng</h1>
              <p className="text-xs text-amber-300">Fashion Rooted in Heritage</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-amber-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-amber-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors">
              <User size={20} />
            </button>
            <button className="relative text-gray-300 hover:text-amber-400 transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-600 text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-amber-400 py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800 flex items-center space-x-4">
                <button className="text-gray-300 hover:text-amber-400">
                  <Search size={20} />
                </button>
                <button className="text-gray-300 hover:text-amber-400">
                  <User size={20} />
                </button>
                <button className="text-gray-300 hover:text-amber-400 relative">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-600 text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}