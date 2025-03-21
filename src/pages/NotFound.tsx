
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-9xl font-bold text-navy mb-4 opacity-20">404</h1>
          <p className="text-3xl text-navy-light font-medium mb-8">Page not found</p>
          <p className="text-lg text-navy-light/70 mb-10">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-navy text-white rounded-lg px-8 py-4 font-medium hover:bg-navy/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
