import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 200 ? 0 : 15; // Free shipping over $200
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start shopping to add items to your cart
            </p>
            <Link to="/products">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-full sm:w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        className="font-bold text-gray-900 dark:text-white hover:text-orange-500 transition-colors mb-2 block"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {item.category}
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300 dark:border-gray-600">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-right sm:text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Subtotal
                    </p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Tax (10%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  {subtotal < 200 && (
                    <p className="text-sm text-teal-600 dark:text-teal-400">
                      Add ₹{(200 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Total
                    </span>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/checkout')}
                  fullWidth
                  size="lg"
                  className="mb-4"
                >
                  Proceed to Checkout
                </Button>

                <Link to="/products">
                  <Button variant="outline" fullWidth>
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

