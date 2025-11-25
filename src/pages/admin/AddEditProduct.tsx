import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminSidebar } from '../../components/AdminSidebar';
import { ThemeToggle } from '../../components/ThemeToggle';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { products, categories, brands } from '../../data/products';

export default function AddEditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  const existingProduct = isEdit ? products.find(p => p.id === id) : null;

  const [formData, setFormData] = useState({
    name: existingProduct?.name || '',
    category: existingProduct?.category || '',
    brand: existingProduct?.brand || '',
    price: existingProduct?.price || 0,
    sku: existingProduct?.sku || '',
    description: existingProduct?.description || '',
    inStock: existingProduct?.inStock ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save - in real app, would call API
    console.log('Saving product:', formData);
    navigate('/admin/products');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {isEdit ? 'Edit Product' : 'Add New Product'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {isEdit ? 'Update product information' : 'Add a new product to your inventory'}
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Product Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300">Category</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300">Brand</label>
                  <select
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select brand</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Price"
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                />

                <Input
                  label="SKU"
                  required
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                />

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    className="rounded text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="inStock" className="text-gray-700 dark:text-gray-300">
                    In Stock
                  </label>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" size="lg">
                  {isEdit ? 'Update Product' : 'Add Product'}
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate('/admin/products')}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

