
import { useErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  error: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const { resetBoundary } = useErrorBoundary();
  const navigate = useNavigate();


  const handleGoHome = () => {
    resetBoundary();  
    navigate('/');    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-yellow-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Oops! Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">We're sorry, but we encountered an unexpected error.</p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error details</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error?.message || 'Unknown error occurred'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <button
              onClick={resetBoundary}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </button>
            <button
              onClick={handleGoHome}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Home className="mr-2 h-4 w-4" />
              Go to homepage
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            If the problem persists, please contact our{' '}
            <a href="/support" className="font-medium text-indigo-600 hover:text-indigo-500">
              customer support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
