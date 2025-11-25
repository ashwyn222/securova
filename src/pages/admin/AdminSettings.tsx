import { AdminSidebar } from '../../components/AdminSidebar';
import { ThemeToggle } from '../../components/ThemeToggle';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export default function AdminSettings() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your admin account and preferences</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="max-w-4xl space-y-6">
            {/* Profile Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile Settings</h2>
              <form className="space-y-6">
                <Input label="Full Name" defaultValue="Admin User" />
                <Input label="Email" type="email" defaultValue="admin@securova.com" />
                <Button type="submit">Save Changes</Button>
              </form>
            </div>

            {/* Password Change */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Change Password</h2>
              <form className="space-y-6">
                <Input label="Current Password" type="password" />
                <Input label="New Password" type="password" />
                <Input label="Confirm New Password" type="password" />
                <Button type="submit">Update Password</Button>
              </form>
            </div>

            {/* Store Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Store Settings</h2>
              <form className="space-y-6">
                <Input label="Store Name" defaultValue="Securova" />
                <Input label="Support Email" type="email" defaultValue="support@securova.com" />
                <Input label="Support Phone" type="tel" defaultValue="+1 (800) 555-0123" />
                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300">Store Address</label>
                  <textarea
                    rows={3}
                    defaultValue="123 Security Blvd, Tech Valley, CA 94025"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <Button type="submit">Save Settings</Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

