import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';
import { Button } from '../../components/ui/Button';
import { products, categories } from '../../data/products';
import { Shield, Lock, Fingerprint, Camera, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  const categoryIcons = {
    'Fingerprint Sensors': Fingerprint,
    'Smart Locks': Lock,
    'Access Control': Shield,
    'Biometric Devices': Camera,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Smart Security <span className="bg-gradient-to-r from-orange-500 to-teal-400 bg-clip-text text-transparent">Starts Here</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Discover cutting-edge security hardware solutions. From biometric sensors to smart locks, protect what matters most with Securova.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button size="lg" className="flex items-center space-x-2">
                      <span>Shop Now</span>
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-teal-500 rounded-3xl blur-3xl opacity-30"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80"
                    alt="Security Hardware"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Categories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Browse our specialized security hardware collections
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <Link
                    key={category}
                    to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:scale-105">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {category}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Explore products
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Featured Products
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Top picks for your security needs
                </p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="hidden sm:flex items-center space-x-2">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link to="/products">
                <Button variant="outline" className="flex items-center space-x-2 mx-auto">
                  <span>View All Products</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Secure Transactions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your payments are protected with industry-leading encryption
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                  <Lock className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Authentic Products
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All products are sourced directly from verified manufacturers
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Expert Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our security experts are here to help you choose the right solution
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

