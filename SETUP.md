# Securova - Setup Guide

This guide will help you complete the setup and run the Securova marketplace website.

## Current Status

✅ Project structure created
✅ Configuration files (package.json, tsconfig.json, vite.config.ts, tailwind.config.js)
✅ Context providers (Theme, Cart, Favourites, Auth)
✅ UI components (Button, Input, Card, ImageWithFallback)
✅ Shared components (Header, Footer, ProductCard, AdminSidebar, ThemeToggle)
✅ Data files (products.ts, mockData.ts)
✅ Main App with routing
✅ Customer pages: HomePage, ProductListing, ProductDetails, Cart, Login, SignUp
⏳ Remaining customer pages need to be created
⏳ Admin pages need to be created

## Quick Start

### 1. Install Dependencies

```bash
cd /Users/ashwinkumar.sharma/Projects/securova
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Remaining Files to Create

The following page files still need to be created. I'll provide templates for each:

### Customer Pages (src/pages/customer/)

1. **Checkout.tsx** - Multi-step checkout process
2. **Account.tsx** - User account management
3. **Favourites.tsx** - Wishlist page
4. **SearchResults.tsx** - Search results page
5. **ForgotPassword.tsx** - Password recovery
6. **OrderConfirmation.tsx** - Order success page

### Admin Pages (src/pages/admin/)

1. **AdminLogin.tsx** - Admin authentication
2. **AdminDashboard.tsx** - Admin dashboard with stats
3. **ProductManagement.tsx** - Product CRUD operations
4. **AddEditProduct.tsx** - Add/Edit product form
5. **OrdersManagement.tsx** - Order management
6. **UserManagement.tsx** - User management
7. **AdminSettings.tsx** - Admin settings

### Error Page

1. **NotFound.tsx** (src/pages/) - 404 page

## File Templates

I've created the core structure. You can create the remaining files using these simple templates:

### Template for Favourites.tsx

```typescript
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';
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
              <Heart className="w-24 h-24 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-600 dark:text-gray-400">No favourites yet</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

### Template for NotFound.tsx

```typescript
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
        <Button onClick={() => navigate('/')}>
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Button>
      </div>
    </div>
  );
}
```

## Testing the Application

Once you've installed dependencies and started the dev server:

1. Visit `http://localhost:5173` - Homepage
2. Browse products at `/products`
3. Test the cart functionality
4. Try the login/signup flow (any credentials work - it's mocked)
5. Toggle dark mode using the theme toggle

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Next Steps

1. Create the remaining page files using the templates above
2. Customize the styling and content as needed
3. Add real API integration (replace mock data)
4. Add form validation
5. Implement real authentication
6. Add payment gateway integration
7. Deploy to your hosting platform

## Troubleshooting

### Port already in use
If port 5173 is in use, Vite will automatically try the next available port.

### Module not found errors
Run `npm install` again to ensure all dependencies are installed.

### Dark mode not working
Check that the ThemeContext is properly wrapping the app in App.tsx.

## Support

For issues or questions, refer to the main README.md file or check the inline code comments.

