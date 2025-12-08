import Link from 'next/link';
import { Shield, Compass, Users, Heart, Target, Star } from 'lucide-react';

export default function MovementPage() {
  const values = [
    {
      icon: <Shield className="text-amber-400" size={32} />,
      title: 'Preservation',
      description: 'Protecting and promoting traditional Basotho craftsmanship techniques that have been passed down through generations.'
    },
    {
      icon: <Compass className="text-amber-400" size={32} />,
      title: 'Innovation',
      description: 'Blending heritage with contemporary design to create pieces that resonate with modern audiences while honoring tradition.'
    },
    {
      icon: <Users className="text-amber-400" size={32} />,
      title: 'Community',
      description: 'Supporting local artisans and their communities through fair trade practices and sustainable partnerships.'
    },
    {
      icon: <Heart className="text-amber-400" size={32} />,
      title: 'Sustainability',
      description: 'Using ethically sourced materials and environmentally conscious production methods.'
    },
    {
      icon: <Target className="text-amber-400" size={32} />,
      title: 'Authenticity',
      description: 'Ensuring every piece accurately represents Basotho culture with respect and integrity.'
    },
    {
      icon: <Star className="text-amber-400" size={32} />,
      title: 'Excellence',
      description: 'Maintaining the highest standards of quality in craftsmanship and design.'
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Sesotho Fashioneng began as a small collective of Basotho artisans in Maseru.'
    },
    {
      year: '2019',
      title: 'First Collection',
      description: 'Launch of the Mokorotlo Collection at Lesotho Fashion Week.'
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Transitioned to online platforms, reaching international audiences.'
    },
    {
      year: '2021',
      title: 'Artist Network',
      description: 'Formalized partnerships with artisans across Southern Africa.'
    },
    {
      year: '2022',
      title: 'Cultural Events',
      description: 'Hosted first major cultural showcase in Johannesburg.'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Featured in international fashion and cultural publications.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-amber-400">Movement</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Sesotho Fashioneng is more than a brand—it's a cultural movement dedicated to preserving 
            Basotho heritage through contemporary fashion. We bridge tradition and innovation, 
            creating spaces where culture thrives in the modern world.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-800/30">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-amber-600/20 rounded-full mb-4">
                <Star className="text-amber-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To preserve Basotho cultural heritage through fashion, empower local artisans, 
                and create contemporary pieces that celebrate tradition while embracing innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-800"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                      <div className="text-amber-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <p className="text-gray-300 mb-6">
                Since our founding, Sesotho Fashioneng has made significant contributions to 
                preserving Basotho culture and supporting local communities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <div className="font-bold">150+ Artisans Supported</div>
                    <div className="text-gray-400 text-sm">Providing sustainable income opportunities</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <div className="font-bold">12 Workshops Conducted</div>
                    <div className="text-gray-400 text-sm">Teaching traditional techniques to new generations</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <div className="font-bold">International Recognition</div>
                    <div className="text-gray-400 text-sm">Showcasing Basotho culture globally</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="text-gray-400 mb-6">
                Whether you're an artist, designer, or cultural enthusiast, there are many ways 
                to get involved and support our mission.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/artists"
                  className="block w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold text-center transition-colors"
                >
                  Explore Our Artists
                </Link>
                <Link
                  href="/events"
                  className="block w-full py-3 px-6 border-2 border-amber-600/50 hover:border-amber-600 text-amber-400 hover:text-amber-300 rounded-lg font-semibold text-center transition-colors"
                >
                  Attend Our Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}