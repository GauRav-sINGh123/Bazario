import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04', 
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105', 
  'https://images.unsplash.com/photo-1479064555552-3ef4979f8908', 
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e', 
  'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561', 
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 9000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 order-2 md:order-1">
        <div className="space-y-6 mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-500 mt-4 md:mt-0">
            Featured Product
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Signature Collection
          </h1>
          <p className="text-lg text-gray-600">
            Elevate your everyday style
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/shop"
              className="px-8 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              Shop Now
            </a>
            <a
              href="/collection"
              className="px-8 py-3 text-sm font-medium border border-black text-black hover:bg-gray-100 transition-colors duration-300"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[50vh] md:h-screen order-1 md:order-2 overflow-hidden">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

