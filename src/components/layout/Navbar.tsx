
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdownItems: [
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Social Media', path: '/services/social-media' },
        { name: 'SEO Services', path: '/services/seo' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-navy">Sunrise <span className="text-brand-orange">Digitals</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              link.dropdownItems ? (
                <li key={link.name} className="relative group">
                  <button 
                    className={`flex items-center space-x-1 py-2 ${
                      location.pathname === link.path || location.pathname.startsWith(link.path + '/') 
                        ? 'text-brand-orange font-medium' 
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                      {link.dropdownItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-brand-blue"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`py-2 ${
                      location.pathname === link.path
                        ? 'text-brand-orange font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            ))}
          </ul>
          <div className="flex items-center space-x-4 gap-5">
            <button 
              onClick={toggleSearch}
              className="text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-blue"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Button asChild>
              <Link to="/contact" className="whitespace-nowrap">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="text-gray-700 dark:text-gray-200 hover:text-brand-blue"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            className="text-gray-700 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 animate-fade-in">
          <div className="container-custom">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-blue dark:bg-gray-800 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
              />
              <Button type="submit" className="rounded-l-none pt-[21px] pb-[21px]">
                <Search size={18} />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden absolute w-full bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container-custom">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.dropdownItems ? (
                <li key={link.name}>
                  <button 
                    className={`flex items-center justify-between w-full py-2 ${
                      location.pathname === link.path || location.pathname.startsWith(link.path + '/') 
                        ? 'text-brand-orange font-medium' 
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                    onClick={toggleServices}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <ul className={`ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-4 mt-2 space-y-2 transition-all ${
                    servicesOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                  }`}>
                    {link.dropdownItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className="block py-2 text-gray-700 dark:text-gray-200 hover:text-brand-blue"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-2 ${
                      location.pathname === link.path
                        ? 'text-brand-orange font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:text-brand-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            ))}
            <li>
              <Button asChild className="w-full mt-4">
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
