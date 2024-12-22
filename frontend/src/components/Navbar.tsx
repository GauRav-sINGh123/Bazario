import  { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, Heart } from 'lucide-react';
import CartSidebar from './CartSidebar';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsCount = 0;  

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">ShopHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-indigo-600">Shop</a>
            <a href="/categories" className="text-gray-700 hover:text-indigo-600">Categories</a>
            <a href="/deals" className="text-gray-700 hover:text-indigo-600">Deals</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex text-gray-700 hover:text-indigo-600">
              <Heart className="h-6 w-6" />
            </button>
            <button 
              className="relative text-gray-700 hover:text-indigo-600"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600">
                <User className="h-6 w-6" />
              </button>
              <div className="hidden group-hover:block absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Profile</a>
                <a href="/orders" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Orders</a>
                <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Settings</a>
                <hr className="my-2" />
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-50">
                  Sign out
                </button>
              </div>
            </div>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Home
              </a>
              <a href="/shop" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Shop
              </a>
              <a href="/categories" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Categories
              </a>
              <a href="/deals" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Deals
              </a>
            </div>
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}