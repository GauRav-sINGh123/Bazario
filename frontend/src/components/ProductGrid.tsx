import{ useState } from 'react';
import { Heart, ShoppingCart, Filter, ChevronDown } from 'lucide-react';
import type { Product } from '../types/types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    price: 89.99,
    description: 'Comfortable and stylish sneakers for everyday wear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    category: 'shoes'
  },
  {
    id: '2',
    name: 'Leather Backpack',
    price: 129.99,
    description: 'Durable leather backpack with multiple compartments',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
    category: 'accessories'
  },
  
];

const CATEGORIES = ['All', 'Shoes', 'Accessories', 'Clothing', 'Electronics'];
const SORT_OPTIONS = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filters and Sorting */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-gray-700 md:hidden"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>

          <div className={`w-full md:w-auto space-y-4 md:space-y-0 md:flex md:items-center md:space-x-6 ${
            showFilters ? 'block' : 'hidden md:flex'
          }`}>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={`${product.image}?auto=format&fit=crop&w=400&h=400&q=80`}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute top-4 right-4 space-y-2">
                <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">
                  <Heart className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              <button className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}