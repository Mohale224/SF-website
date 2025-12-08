// app/page.tsx
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import FeaturedArtists from '@/components/home/FeaturedArtists';
import CulturalPatterns from '@/components/home/CulturalPatterns';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <div className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
      <Navbar />
      
      <main className="relative">
        <Hero />
        <FeaturedCollections />
        <UpcomingEvents />
        <FeaturedArtists />
        <CulturalPatterns />
      </main>
      
      <Footer />
    </div>
  );
}