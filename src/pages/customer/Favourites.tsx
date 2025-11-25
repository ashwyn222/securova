import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';
import { Button } from '../../components/ui/Button';
import { useFavourites } from '../../context/FavouritesContext';
import { products } from '../../data/products';
import { Heart } from 'lucide-react';

export default function Favourites() {
  const { favourites } = useFavourites();
  const favouriteProducts = products.filter(p => favourites.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            My Favourites
          </h1>
          
          {favouriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favouriteProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <Heart className="w-16 h-16 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No favourites yet
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Start adding products to your wishlist
              </p>
              <Link to="/products">
                <Button size="lg">Browse Products</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

