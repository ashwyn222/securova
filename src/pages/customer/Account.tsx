import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';
import { User, Package, Heart, Settings } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

type Tab = 'orders' | 'profile' | 'favourites' | 'settings';

export default function Account() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('orders');

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  // Mock user orders
  const userOrders = mockOrders.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            My Account
          </h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{user?.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'orders'
                        ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    <span>Orders</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </button>

                  <button
                    onClick={() => navigate('/favourites')}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Favourites</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="outline" fullWidth onClick={logout}>
                    Logout
                  </Button>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                {/* Orders Tab */}
                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      My Orders
                    </h2>
                    {userOrders.length > 0 ? (
                      <div className="space-y-4">
                        {userOrders.map((order) => (
                          <div
                            key={order.id}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <p className="font-bold text-gray-900 dark:text-white">
                                  Order {order.id}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Placed on {new Date(order.orderDate).toLocaleDateString()}
                                </p>
                              </div>
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                  order.status === 'delivered'
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                    : order.status === 'shipped'
                                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                                }`}
                              >
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </div>
                            <div className="space-y-2">
                              {order.products.map((item) => (
                                <p key={item.productId} className="text-sm text-gray-700 dark:text-gray-300">
                                  {item.productName} × {item.quantity}
                                </p>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <p className="font-bold text-gray-900 dark:text-white">
                                Total: ₹{order.totalAmount.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">No orders yet</p>
                    )}
                  </div>
                )}

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Profile Settings
                    </h2>
                    <form className="space-y-6">
                      <Input label="Full Name" defaultValue={user?.name} />
                      <Input label="Email" type="email" defaultValue={user?.email} />
                      <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
                      <Button type="submit">Save Changes</Button>
                    </form>
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Account Settings
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                          Change Password
                        </h3>
                        <form className="space-y-4">
                          <Input label="Current Password" type="password" />
                          <Input label="New Password" type="password" />
                          <Input label="Confirm New Password" type="password" />
                          <Button type="submit">Update Password</Button>
                        </form>
                      </div>

                      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                          Email Preferences
                        </h3>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              Order updates
                            </span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              Promotional emails
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

