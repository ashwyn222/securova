import { AdminSidebar } from '../../components/AdminSidebar';
import { ThemeToggle } from '../../components/ThemeToggle';
import { mockUsers } from '../../data/mockData';

export default function UserManagement() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Manage customer accounts</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Customer</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Registered</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Orders</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Total Spent</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{user.email}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{user.phone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {new Date(user.registeredDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {user.orderCount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        ${user.totalSpent.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          user.status === 'active'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        }`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
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

