
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-brand-blue/5 via-white to-brand-orange/5 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 text-brand-blue">
              <h1 className="text-9xl font-bold mb-2">404</h1>
            </div>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" /> Return to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/search">
                  <Search className="mr-2 h-5 w-5" /> Search Our Site
                </Link>
              </Button>
              <Button variant="ghost" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
              </Button>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/services" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  Services
                </Link>
                <Link to="/portfolio" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  Portfolio
                </Link>
                <Link to="/blog" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  Blog
                </Link>
                <Link to="/contact" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
