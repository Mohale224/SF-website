'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mokorotlo Inspired Jacket',
      size: 'M',
      color: 'Charcoal',
      price: 1299.99,
      quantity: 1,
      image: '/images/products/jacket-1.jpg'
    },
    {
      id: 2,
      name: 'Basotho Blanket Scarf',
      size: 'One Size',
      color: 'Traditional Pattern',
      price: 899.99,
      quantity: 2,
      image: '/images/products/scarf-1.jpg'
    },
    {
      id: 3,
      name: 'Heritage Trousers',
      size: '32',
      color: 'Cream',
      price: 1499.99,
      quantity: 1,
      image: '/images/products/trousers-1.jpg'
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 149.99;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 mb-6"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold mb-2">Your Shopping Cart</h1>
          <p className="text-gray-400">{cartItems.length} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 text-gray-700 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some items to get started</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-900/20 to-gray-900 rounded-lg"></div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <div className="flex gap-4 text-gray-400 text-sm">
                              <span>Size: {item.size}</span>
                              <span>Color: {item.color}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-amber-600 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-amber-600 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-amber-400">
                              R{(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-gray-400 text-sm">
                              R{item.price.toFixed(2)} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="mt-6 flex justify-between items-center">
                <Link
                  href="/shop"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Continue Shopping
                </Link>
                <button
                  onClick={() => setCartItems([])}
                  className="text-gray-400 hover:text-red-400 flex items-center gap-2"
                >
                  <Trash2 size={20} />
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold">R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className={shipping === 0 ? 'text-green-400' : ''}>
                      {shipping === 0 ? 'FREE' : `R${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax (15%)</span>
                    <span>R{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-amber-400">R{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="w-full pl-4 pr-20 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-lg rounded-lg text-center transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Proceed to Checkout
                </Link>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm mb-3">We accept</p>
                  <div className="flex gap-3">
                    {['Visa', 'MasterCard', 'PayPal', 'Apple Pay'].map((method) => (
                      <div
                        key={method}
                        className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-400"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mt-6 p-4 bg-amber-900/10 rounded-lg border border-amber-800/30">
                  <p className="text-sm text-amber-300">
                    <span className="font-bold">Free shipping</span> on orders over R2000
                  </p>
                  <p className="text-xs text-amber-400/70 mt-1">
                    Estimated delivery: 5-7 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}