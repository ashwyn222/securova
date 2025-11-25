import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
        <p className="text-gray-500 dark:text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate('/')} size="lg" className="flex items-center space-x-2 mx-auto">
          <Home className="w-5 h-5" />
          <span>Go Home</span>
        </Button>
      </div>
    </div>
  );
}

