
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blogs', path: '/blog' },
      { name: 'Our Team', path: '/about#team' },
    ],
    services: [
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Social Media', path: '/services/social-media' },
      { name: 'SEO Services', path: '/services/seo' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Testimonials', path: '/#testimonials' },
      { name: 'FAQ', path: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container-custom">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-brand-navy">Sunrise <span className="text-brand-orange">Digitals</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Building Trust, Delivering Excellence. We empower small businesses with cutting-edge digital marketing solutions that establish a powerful online presence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <MapPin size={18} className="text-brand-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    D-40 Nehru Colony, Dehardun, UK 248001
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Phone size={18} className="text-brand-blue mr-3 flex-shrink-0" />
                  <a href="tel:+11234567890" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue">
                    +91 - 8864848548
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Mail size={18} className="text-brand-blue mr-3 flex-shrink-0" />
                  <a href="mailto:info@sunrisedigitals.com" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue">
                    info@sunrisedigimedia.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sunrise Digitals. All rights reserved.
            </p>
            <div className="flex flex-wrap space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
