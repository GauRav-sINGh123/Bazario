import  { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsCount = 5;  
  const user:boolean=false
  const isAdmit:boolean=false

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-black">Bazario</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-indigo-600">Shop</a>
            <a href="/categories" className="text-gray-700 hover:text-indigo-600">Categories</a>
          </nav>

        

          {/* Right Icons */}
          <div className="flex items-center space-x-4">  
            <button 
              className="relative text-gray-700 hover:text-indigo-600 mr-4"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            {
              user?(<div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-indigo-600">
                  <User className="h-6 w-6" />
                </button>
                <div className="hidden group-hover:block absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Orders</Link>
                  <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Settings</Link>
                  {
                    isAdmit&&  <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Dashboard</Link>
                  }
                  <hr className="my-2" />
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-50">
                    Sign out
                  </button>
                </div>
              </div>):(
                <Link to="/signin" className="border border-black text-black hover:bg-gray-100 px-5 py-2  text-sm font-medium transition-colors duration-300">
                Login
              </Link>
               
               )
            }
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
              <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Home
              </Link>
              <Link to="/shop" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Shop
              </Link>
              <Link to="/categories" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Categories
              </Link>
             {
              isAdmit&&  <Link to="/dashboard" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Dashboard
              </Link>
             }
            </div>
            
          </div>
        )}
      </div>
    </header>
  );
}