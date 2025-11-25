import { AdminSidebar } from '../../components/AdminSidebar';
import { ThemeToggle } from '../../components/ThemeToggle';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import { mockDashboardStats, mockOrders } from '../../data/mockData';

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: `₹${mockDashboardStats.revenue.toLocaleString()}`,
      change: `+${mockDashboardStats.revenueChange}%`,
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      label: 'Orders',
      value: mockDashboardStats.totalOrders.toString(),
      change: `+${mockDashboardStats.ordersChange}%`,
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      label: 'Products',
      value: mockDashboardStats.totalProducts.toString(),
      change: '-2.4%',
      trend: 'down',
      icon: Package,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      label: 'Customers',
      value: mockDashboardStats.totalUsers.toString(),
      change: `+${mockDashboardStats.usersChange}%`,
      trend: 'up',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
  ];

  const recentOrders = mockOrders.slice(0, 4);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here's what's happening today.</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${ 
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Customer</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Products</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Amount</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{order.customerName}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{order.products.length} items</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">₹{order.totalAmount.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          order.status === 'delivered' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : order.status === 'shipped'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : order.status === 'processing'
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                            : 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
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

