'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Ticket, Filter } from 'lucide-react';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: 'Mokhorō Annual Showcase',
      date: '2024-03-15',
      time: '18:00',
      location: 'Maseru Cultural Centre',
      city: 'Maseru, Lesotho',
      type: 'fashion-show',
      status: 'upcoming',
      description: 'Annual celebration of Basotho textile art',
      tickets: { available: 120, sold: 85 }
    },
    {
      id: 2,
      title: 'Heritage Fashion Week',
      date: '2024-04-22',
      time: '10:00',
      location: 'Sandton Convention Centre',
      city: 'Johannesburg, South Africa',
      type: 'exhibition',
      status: 'upcoming',
      description: 'Three days of cultural fashion exhibitions',
      tickets: { available: 500, sold: 320 }
    },
    {
      id: 3,
      title: 'Textile Traditions Workshop',
      date: '2024-05-08',
      time: '14:00',
      location: 'Cape Town Design Studio',
      city: 'Cape Town, South Africa',
      type: 'workshop',
      status: 'upcoming',
      description: 'Hands-on traditional weaving techniques',
      tickets: { available: 25, sold: 18 }
    },
    {
      id: 4,
      title: 'Basotho Craft Fair',
      date: '2023-11-20',
      time: '09:00',
      location: 'Bloemfontein Market',
      city: 'Bloemfontein, South Africa',
      type: 'market',
      status: 'past',
      description: 'Local artisans showcase their crafts',
      tickets: { available: 0, sold: 200 }
    },
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'past', label: 'Past Events' },
    { id: 'fashion-show', label: 'Fashion Shows' },
    { id: 'workshop', label: 'Workshops' },
  ];

  const filteredEvents = events.filter(event => 
    activeFilter === 'all' ? true : 
    activeFilter === 'upcoming' ? event.status === 'upcoming' :
    activeFilter === 'past' ? event.status === 'past' :
    event.type === activeFilter
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
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
            Cultural <span className="text-amber-400">Experiences</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Join us in celebrating Basotho heritage through fashion shows, workshops, and cultural exhibitions.
            Experience the fusion of tradition and contemporary design.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
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

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-amber-800/50 transition-all duration-300"
              >
                {/* Event Header */}
                <div className="p-6 border-b border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'upcoming' 
                          ? 'bg-green-600/20 text-green-400'
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-400">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-gray-400">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar size={18} className="text-amber-400" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock size={18} className="text-amber-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin size={18} className="text-amber-400" />
                      <span className="text-sm">{event.location}, {event.city}</span>
                    </div>
                  </div>

                  {/* Tickets Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-400">Tickets</div>
                      <div className="text-amber-400 font-bold">
                        {event.tickets.sold} / {event.tickets.sold + event.tickets.available} sold
                      </div>
                    </div>
                    {event.status === 'upcoming' && (
                      <Link
                        href={`/events/${event.id}`}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold text-sm transition-colors"
                      >
                        <Ticket size={16} />
                        Get Tickets
                      </Link>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-amber-600 h-2 rounded-full"
                      style={{ width: `${(event.tickets.sold / (event.tickets.sold + event.tickets.available)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Link */}
          <div className="mt-12 text-center">
            <Link
              href="/events/calendar"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-600/50 hover:border-amber-600 text-amber-400 hover:text-amber-300 rounded-lg font-semibold transition-colors"
            >
              <Calendar size={20} />
              View Event Calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}