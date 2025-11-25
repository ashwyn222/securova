import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';
import { Button } from '../../components/ui/Button';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';
import { Heart, ShoppingCart, Star, Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isFavourite, toggleFavourite } = useFavourites();

  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Product not found
            </h2>
            <Button onClick={() => navigate('/products')}>Back to Products</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock additional images (in real app, product would have multiple images)
  const images = [product.image];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  // Mock reviews
  const reviews = [
    {
      id: 1,
      author: 'John Smith',
      rating: 5,
      date: 'Nov 15, 2024',
      comment: 'Excellent quality and works perfectly. Installation was straightforward.',
    },
    {
      id: 2,
      author: 'Sarah Johnson',
      rating: 4,
      date: 'Nov 10, 2024',
      comment: 'Great product, though shipping took a bit longer than expected.',
    },
    {
      id: 3,
      author: 'Mike Chen',
      rating: 5,
      date: 'Nov 5, 2024',
      comment: 'Best purchase for my security system. Highly recommended!',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-orange-500">
                  Home
                </button>
              </li>
              <li>/</li>
              <li>
                <button onClick={() => navigate('/products')} className="hover:text-orange-500">
                  Products
                </button>
              </li>
              <li>/</li>
              <li>
                <button
                  onClick={() => navigate(`/products/${product.category.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="hover:text-orange-500"
                >
                  {product.category}
                </button>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-white">{product.name}</li>
            </ol>
          </nav>

          {/* Product Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg mb-4">
                <ImageWithFallback
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-1 aspect-square rounded-lg overflow-hidden ${
                        idx === currentImageIndex ? 'ring-2 ring-orange-500' : ''
                      }`}
                    >
                      <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm mb-4">
                {product.category}
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">SKU: {product.sku}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                    <Check className="w-5 h-5" />
                    <span>In Stock</span>
                  </div>
                ) : (
                  <div className="text-red-600 dark:text-red-400">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Quantity */}
              {product.inStock && (
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        -
                      </button>
                      <span className="px-6 py-2 border-x border-gray-300 dark:border-gray-600">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {product.inStock && (
                  <>
                    <Button onClick={handleAddToCart} className="flex-1 flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </Button>
                    <Button onClick={handleBuyNow} variant="secondary" className="flex-1">
                      Buy Now
                    </Button>
                  </>
                )}
                <button
                  onClick={() => toggleFavourite(product.id)}
                  className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-orange-500 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavourite(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-orange-500 transition-colors">
                  <Share2 className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Brand */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Brand: </span>
                <span className="font-bold text-gray-900 dark:text-white">{product.brand}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-16">
            <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 border-b-2 transition-colors ${
                    activeTab === 'description'
                      ? 'border-orange-500 text-orange-500'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-4 border-b-2 transition-colors ${
                    activeTab === 'specifications'
                      ? 'border-orange-500 text-orange-500'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 border-b-2 transition-colors ${
                    activeTab === 'reviews'
                      ? 'border-orange-500 text-orange-500'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Reviews ({reviews.length})
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Product Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Technical Specifications
                  </h3>
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr
                          key={key}
                          className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/30' : ''}
                        >
                          <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">
                            {key}
                          </td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Customer Reviews
                  </h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {review.author}
                            </h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

