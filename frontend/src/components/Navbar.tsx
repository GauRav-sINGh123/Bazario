import  { useState } from "react";
import { ShoppingCart, Search,User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold ">
                Bazario
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Sale
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <Search className="h-5 w-5 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
              <div className="relative group">
                <ShoppingCart className="h-5 w-5 text-gray-600 group-hover:text-purple-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </div>
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Shop
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Sale
              </a>
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-600">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
