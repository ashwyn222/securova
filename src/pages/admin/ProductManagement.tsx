import { Link } from 'react-router-dom';
import { AdminSidebar } from '../../components/AdminSidebar';
import { ThemeToggle } from '../../components/ThemeToggle';
import { Button } from '../../components/ui/Button';
import { products } from '../../data/products';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function ProductManagement() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Product Management</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your product inventory</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/admin/products/add">
                <Button className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Add Product</span>
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Product</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Category</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Price</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Stock</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">{product.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{product.sku}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{product.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">₹{product.price}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          product.inStock
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Link to={`/admin/products/edit/${product.id}`}>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                          </Link>
                          <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

