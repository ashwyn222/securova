import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';
import { Button } from './ui/Button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isFavourite, toggleFavourite } = useFavourites();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleFavourite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavourite(product.id);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Favourite Button */}
          <button
            onClick={handleToggleFavourite}
            className="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavourite(product.id)
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-400'
              }`}
            />
          </button>

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-sm rounded-full">
              Out of Stock
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Category */}
          <span className="text-xs text-orange-500 dark:text-orange-400 uppercase tracking-wide mb-1">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="mb-2 text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price & Add to Cart */}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ₹{product.price}
            </span>
            {product.inStock && (
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="flex items-center space-x-1"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

