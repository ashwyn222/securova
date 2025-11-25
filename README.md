# Securova - Smart Security Marketplace

A modern, full-featured e-commerce platform for security hardware products built with React, TypeScript, and Tailwind CSS.

## Features

### Customer Features
- 🏠 Modern homepage with hero section and featured products
- 🛍️ Product listing with advanced filters (category, brand, price)
- 🔍 Product search functionality
- 📦 Detailed product pages with specifications and reviews
- 🛒 Shopping cart with quantity management
- 💳 Checkout process
- ❤️ Favorites/Wishlist functionality
- 👤 User authentication (Login/Signup)
- 📱 Fully responsive design
- 🌙 Dark mode support

### Admin Features
- 📊 Dashboard with sales analytics
- 📦 Product management (Add/Edit/Delete)
- 📋 Order management
- 👥 User management
- ⚙️ Settings panel

### Technical Features
- ⚡ Built with Vite for fast development
- 🎨 Tailwind CSS for styling
- 🔄 React Router for navigation
- 📦 Context API for state management
- 🎯 TypeScript for type safety
- 🎨 Lucide React for icons
- 🌓 Light/Dark theme with persistence

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd securova
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
securova/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/             # UI components (Button, Input, Card)
│   │   ├── figma/          # Figma-specific components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── AdminSidebar.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/            # React Context providers
│   │   ├── ThemeContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── FavouritesContext.tsx
│   │   └── AuthContext.tsx
│   ├── data/               # Mock data and types
│   │   ├── products.ts
│   │   └── mockData.ts
│   ├── pages/              # Page components
│   │   ├── customer/       # Customer-facing pages
│   │   ├── admin/          # Admin panel pages
│   │   └── NotFound.tsx
│   ├── styles/
│   │   └── globals.css     # Global styles and Tailwind
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Available Routes

### Customer Routes
- `/` - Homepage
- `/products` - All products
- `/products/:category` - Products by category
- `/product/:id` - Product details
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/order-confirmation/:orderId` - Order confirmation
- `/login` - Customer login
- `/signup` - Customer signup
- `/forgot-password` - Password recovery
- `/account` - User account
- `/favourites` - Wishlist
- `/search` - Search results

### Admin Routes
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/products` - Product management
- `/admin/products/add` - Add new product
- `/admin/products/edit/:id` - Edit product
- `/admin/orders` - Orders management
- `/admin/users` - User management
- `/admin/settings` - Admin settings

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Context API** - State management

## Features in Detail

### Theme Support
The application supports both light and dark themes with automatic persistence using localStorage.

### Shopping Cart
- Add/remove products
- Update quantities
- Automatic price calculations
- Tax and shipping calculations
- Free shipping threshold

### Product Filtering
- Filter by category
- Filter by brand
- Filter by price range
- Sort by popularity, price, rating, etc.

### Authentication
Mock authentication system with:
- Customer login/signup
- Admin login
- Protected routes
- User session management

## Mock Data

The application uses mock data for demonstration purposes:
- 12 sample products across 4 categories
- Sample orders and users for admin panel
- Mock authentication (any email/password will work)

## Customization

### Adding New Products
Edit `src/data/products.ts` to add or modify products.

### Styling
- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

### Theme Colors
Modify CSS variables in `src/styles/globals.css` for custom color schemes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support, email support@securova.com or visit our website.

