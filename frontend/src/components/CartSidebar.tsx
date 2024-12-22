import { X, Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem } from '../types/types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_CART_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    price: 89.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    description: '',
    category: 'shoes'
  }
];

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const cartTotal = SAMPLE_CART_ITEMS.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {SAMPLE_CART_ITEMS.map((item) => (
              <div key={item.id} className="flex space-x-4">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=100&h=100&q=80`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded ml-2">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}