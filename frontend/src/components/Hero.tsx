 
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[700px] bg-cover bg-center" 
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">New Collection 2024</span>
          <h1 className="mt-4 text-6xl font-bold text-white leading-tight">Elevate Your Style This Season</h1>
          <p className="mt-4 text-xl text-gray-300">Discover our curated collection of premium fashion pieces designed for the modern lifestyle.</p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors flex items-center">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}