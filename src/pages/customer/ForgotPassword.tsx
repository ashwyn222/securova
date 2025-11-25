import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            {!submitted ? (
              <>
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                  Forgot Password?
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                  Enter your email and we'll send you a reset link
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <Button type="submit" fullWidth size="lg">
                    Send Reset Link
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/login" className="text-orange-500 hover:text-orange-600">
                    Back to Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                  Check Your Email
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                  We've sent a password reset link to {email}
                </p>
                <Link to="/login">
                  <Button fullWidth size="lg">
                    Back to Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

