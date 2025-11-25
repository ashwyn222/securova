import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavouritesContext';
import { AuthProvider } from './context/AuthContext';

// Customer Pages
import HomePage from './pages/customer/HomePage';
import ProductListing from './pages/customer/ProductListing';
import ProductDetails from './pages/customer/ProductDetails';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
import OrderConfirmation from './pages/customer/OrderConfirmation';
import Login from './pages/customer/Login';
import SignUp from './pages/customer/SignUp';
import ForgotPassword from './pages/customer/ForgotPassword';
import Account from './pages/customer/Account';
import Favourites from './pages/customer/Favourites';
import SearchResults from './pages/customer/SearchResults';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProductManagement from './pages/admin/ProductManagement';
import AddEditProduct from './pages/admin/AddEditProduct';
import OrdersManagement from './pages/admin/OrdersManagement';
import UserManagement from './pages/admin/UserManagement';
import AdminSettings from './pages/admin/AdminSettings';

// Error Page
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <FavouritesProvider>
              <Routes>
                {/* Customer Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/products/:category" element={<ProductListing />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/account" element={<Account />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/search" element={<SearchResults />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<ProductManagement />} />
                <Route path="/admin/products/add" element={<AddEditProduct />} />
                <Route path="/admin/products/edit/:id" element={<AddEditProduct />} />
                <Route path="/admin/orders" element={<OrdersManagement />} />
                <Route path="/admin/users" element={<UserManagement />} />
                <Route path="/admin/settings" element={<AdminSettings />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </FavouritesProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

