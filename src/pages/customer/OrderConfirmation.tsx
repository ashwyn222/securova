import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-2xl w-full mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              Thank you for your purchase
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Order ID: <span className="font-bold text-gray-900 dark:text-white">{orderId}</span>
            </p>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We've sent a confirmation email with your order details.
                You can track your order status from your account page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/account">
                <Button size="lg">View Orders</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

