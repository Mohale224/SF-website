// components/home/UpcomingEvents.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Ticket, ArrowRight } from 'lucide-react';

export default function UpcomingEvents() {
  const [activeEvent, setActiveEvent] = useState<number>(0);

  const events = [
    {
      id: 1,
      title: 'Mokhorō Annual Showcase',
      date: '2024-03-15',
      time: '18:00',
      location: 'Maseru Cultural Centre',
      city: 'Maseru, Lesotho',
      description: 'A celebration of Basotho textile art and modern fashion fusion',
      ticketTypes: [
        { name: 'General', price: 'R250' },
        { name: 'VIP', price: 'R750' }
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Heritage Fashion Week',
      date: '2024-04-22',
      time: '10:00',
      location: 'Sandton Convention Centre',
      city: 'Johannesburg, South Africa',
      description: 'Three days of cultural fashion exhibitions and workshops',
      ticketTypes: [
        { name: 'Day Pass', price: 'R350' },
        { name: 'Weekend Pass', price: 'R850' }
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Textile Traditions Workshop',
      date: '2024-05-08',
      time: '14:00',
      location: 'Cape Town Design Studio',
      city: 'Cape Town, South Africa',
      description: 'Hands-on workshop on traditional Basotho weaving techniques',
      ticketTypes: [
        { name: 'Workshop', price: 'R500' },
        { name: 'Workshop + Materials', price: 'R750' }
      ],
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
            Upcoming Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Cultural <span className="text-amber-400">Experiences</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us in celebrating Basotho heritage through fashion shows, workshops, and exhibitions
          </p>
        </div>

        {/* Events Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Event */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm font-semibold">
                      Featured Event
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{events[0].title}</h3>
                  <p className="text-gray-300 mb-6">{events[0].description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="text-amber-400" size={20} />
                      <span>{formatDate(events[0].date)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="text-amber-400" size={20} />
                      <span>{events[0].time} (SAST)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="text-amber-400" size={20} />
                      <span>{events[0].location}, {events[0].city}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-8">
                    {events[0].ticketTypes.map((ticket, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm text-gray-400">{ticket.name}</div>
                        <div className="text-amber-400 font-bold text-lg">{ticket.price}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/events/${events[0].id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors"
                  >
                    <Ticket size={20} />
                    Get Tickets
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-amber-900/30 to-gray-900 rounded-xl overflow-hidden">
                    {/* Event image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-amber-400/30 mb-4">
                          {new Date(events[0].date).getDate()}
                        </div>
                        <div className="text-amber-300/50 uppercase tracking-wider">
                          {new Date(events[0].date).toLocaleDateString('en-US', { month: 'long' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events List */}
          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(1).map((event) => (
              <div
                key={event.id}
                className="group bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-amber-800/50 p-6 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold text-2xl">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin size={16} />
                      <span>{event.city.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/events/${event.id}`}
                    className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1"
                  >
                    Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events */}
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-600/50 hover:border-amber-600 text-amber-400 hover:text-amber-300 font-semibold rounded-full transition-all duration-300 hover:bg-amber-600/10"
            >
              View All Events
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}></div>
      </div>
    </section>
  );
}