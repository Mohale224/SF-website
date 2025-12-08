'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Package, Ticket, Heart, Settings, LogOut, CreditCard, MapPin } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-02-15',
      status: 'Delivered',
      total: 1299.99,
      items: 2
    },
    {
      id: 'ORD-2023-045',
      date: '2023-12-10',
      status: 'Delivered',
      total: 2399.98,
      items: 3
    },
    {
      id: 'ORD-2023-032',
      date: '2023-11-05',
      status: 'Delivered',
      total: 899.99,
      items: 1
    },
  ];

  const tickets = [
    {
      id: 'TKT-2024-001',
      event: 'Mokhorō Annual Showcase',
      date: '2024-03-15',
      type: 'VIP',
      status: 'Confirmed'
    },
    {
      id: 'TKT-2023-012',
      event: 'Heritage Fashion Week',
      date: '2023-10-20',
      type: 'Weekend Pass',
      status: 'Used'
    },
  ];

  const savedItems = [
    {
      id: 1,
      name: 'Mountain Kingdom Dress',
      price: 2199.99,
      category: 'Modern Fusion'
    },
    {
      id: 2,
      name: 'Traditional Blanket Shawl',
      price: 1499.99,
      category: 'Accessories'
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User size={20} /> },
    { id: 'orders', label: 'Orders', icon: <Package size={20} /> },
    { id: 'tickets', label: 'Tickets', icon: <Ticket size={20} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
          <p className="text-gray-400">Welcome back, Thabo! Here's your activity overview.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              {/* User Profile */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">TN</span>
                </div>
                <h3 className="text-xl font-bold">Thabo Nkosi</h3>
                <p className="text-gray-400 text-sm">thabo@example.com</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 rounded-lg transition-colors">
                  <LogOut size={20} />
                  <span>Log Out</span>
                </button>
              </nav>

              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Member Since</span>
                    <span>2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Orders</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Loyalty Points</span>
                    <span className="text-amber-400">1,250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                        <Package className="text-amber-400" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">3</div>
                        <div className="text-gray-400">Total Orders</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                        <Ticket className="text-amber-400" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">2</div>
                        <div className="text-gray-400">Upcoming Events</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                        <Heart className="text-amber-400" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">5</div>
                        <div className="text-gray-400">Saved Items</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Recent Orders</h3>
                    <Link href="/dashboard?tab=orders" className="text-amber-400 hover:text-amber-300 text-sm">
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {orders.slice(0, 2).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                        <div>
                          <div className="font-semibold">{order.id}</div>
                          <div className="text-sm text-gray-400">{order.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">R{order.total.toFixed(2)}</div>
                          <div className="text-sm text-gray-400">{order.items} items</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Upcoming Events</h3>
                    <Link href="/dashboard?tab=tickets" className="text-amber-400 hover:text-amber-300 text-sm">
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {tickets.filter(t => t.status === 'Confirmed').map((ticket) => (
                      <div key={ticket.id} className="p-4 bg-gray-900/50 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{ticket.event}</h4>
                          <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-semibold">
                            {ticket.type}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>{ticket.date}</span>
                          <span>Ticket ID: {ticket.id}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">Order History</h3>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-6 bg-gray-900/50 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <div className="font-bold text-lg">{order.id}</div>
                          <div className="text-gray-400">{order.date}</div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-semibold">
                            {order.status}
                          </span>
                          <div className="text-right">
                            <div className="font-bold text-lg">R{order.total.toFixed(2)}</div>
                            <div className="text-gray-400 text-sm">{order.items} items</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-amber-600 transition-colors">
                          View Details
                        </button>
                        <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-amber-600 transition-colors">
                          Track Order
                        </button>
                        <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-amber-600 transition-colors">
                          Download Invoice
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tickets Tab */}
            {activeTab === 'tickets' && (
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">My Tickets</h3>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="p-6 bg-gray-900/50 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <div className="font-bold text-lg">{ticket.event}</div>
                          <div className="text-gray-400">{ticket.date}</div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            ticket.status === 'Confirmed' 
                              ? 'bg-green-600/20 text-green-400'
                              : 'bg-gray-700 text-gray-400'
                          }`}>
                            {ticket.status}
                          </span>
                          <div className="text-right">
                            <div className="font-bold">{ticket.type}</div>
                            <div className="text-gray-400 text-sm">ID: {ticket.id}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors">
                          Download Ticket
                        </button>
                        <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-amber-600 transition-colors">
                          View Event Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">Saved Items</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-900/50 rounded-lg">
                      <div className="w-24 h-24 bg-gradient-to-br from-amber-900/20 to-gray-900 rounded-lg"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                        <p className="text-gray-400 text-sm mb-3">{item.category}</p>
                        <div className="flex justify-between items-center">
                          <div className="text-amber-400 font-bold">R{item.price.toFixed(2)}</div>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 bg-amber-600 hover:bg-amber-700 rounded text-sm font-semibold transition-colors">
                              Add to Cart
                            </button>
                            <button className="px-3 py-1 border border-gray-700 hover:border-red-600 rounded text-sm transition-colors">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">Account Settings</h3>
                
                {/* Personal Information */}
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="Thabo"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Nkosi"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="thabo@example.com"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+27 71 234 5678"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-lg">Shipping Address</h4>
                    <button className="text-amber-400 hover:text-amber-300 text-sm">
                      Add New Address
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-amber-400 mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Primary Address</div>
                        <div className="text-gray-400">
                          123 Fashion Street<br />
                          Sandton<br />
                          Johannesburg 2196<br />
                          South Africa
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-lg">Payment Methods</h4>
                    <button className="text-amber-400 hover:text-amber-300 text-sm">
                      Add New Card
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="text-amber-400" size={20} />
                        <div>
                          <div className="font-semibold">Visa ending in 4242</div>
                          <div className="text-gray-400 text-sm">Expires 06/2025</div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-400">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}