import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export function Header() {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { favourites } = useFavourites();
  const { isAuthenticated, user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
              Securova
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search security products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Products
            </Link>
            <Link to="/favourites" className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              <Heart className="w-5 h-5" />
              {favourites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {favourites.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  <User className="w-5 h-5" />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/account" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    My Account
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Login
              </Link>
            )}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </form>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <Link to="/" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setShowMobileMenu(false)}>
              Home
            </Link>
            <Link to="/products" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setShowMobileMenu(false)}>
              Products
            </Link>
            <Link to="/favourites" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setShowMobileMenu(false)}>
              Favourites ({favourites.length})
            </Link>
            <Link to="/cart" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setShowMobileMenu(false)}>
              Cart ({getTotalItems()})
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setShowMobileMenu(false)}>
                  My Account
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setShowMobileMenu(false)}>
                Login
              </Link>
            )}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

