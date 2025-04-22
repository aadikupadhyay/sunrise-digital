
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, Users, Search, HandCoins } from 'lucide-react';

const Hero = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    iconRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      iconRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-brand-purple/10 via-white to-brand-blue/10 dark:from-brand-purple/20 dark:via-gray-900 dark:to-brand-blue/20 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="heading-xl mb-6">
              <span className="block">Digital Marketing</span>
              <span className="gradient-text">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            We simplify digital marketing for businesses-branding, websites, SEO, Social and ads-all in one place. Affordable, consistent, and built to grow with you. Trust us to deliver excellence and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                ref={(el) => (iconRefs.current[0] = el)} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg opacity-0 card-hover"
                style={{ animationDelay: '200ms' }}
              >
                <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data-Driven Strategies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Data-driven marketing strategies leveraging insights to deliver exceptional results.
                </p>
              </div>
              
              <div 
                ref={(el) => (iconRefs.current[1] = el)} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg opacity-0 card-hover sm:mt-12"
                style={{ animationDelay: '400ms' }}
              >
                <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Target Audience Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Tailored strategies designed to engage and resonate with businesses specific target audience.
                </p>
              </div>
              
              <div 
                ref={(el) => (iconRefs.current[2] = el)} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg opacity-0 card-hover sm:mt-0 md:mt-0"
                style={{ animationDelay: '600ms' }}
              >
                <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <HandCoins className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Budget-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">
                Powerful strategies tailored to your budget. Professional digital marketing, without compromising on quality.
                </p>
              </div>
              
              <div 
                ref={(el) => (iconRefs.current[3] = el)} 
                className="bg-gradient-primary rounded-xl p-6 shadow-lg opacity-0 card-hover sm:mt-12"
                style={{ animationDelay: '800ms' }}
              >
                <h3 className="text-lg font-semibold mb-2 text-white">Ready to Grow?</h3>
                <p className="text-white/90 mb-4">
                  Schedule a free consultation to discover how we can help.
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Background Patterns */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 border border-brand-blue/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 border border-brand-purple/10 rounded-full" />
        <div className="absolute top-1/4 right-1/3 w-40 h-40 border border-brand-deep-purple/10 rounded-full" />
      </div> */}
    </section>
  );
};

export default Hero;
