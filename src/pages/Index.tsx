
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';
import Newsletter from '@/components/shared/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <div className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="heading-md mb-6">Stay Updated with Marketing Trends</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join our newsletter to receive the latest insights, tips, and trends in digital marketing 
                  delivered straight to your inbox. No spam, just valuable content to help your business grow.
                </p>
                <Newsletter variant="inline" />
              </div>
              <div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-3">Ready for a Free Consultation?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Let's discuss how our strategies can help your business thrive in the digital landscape.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center mb-2">
                      <div>
                        <p className="text-2xl font-bold text-brand-blue">500+</p>
                        <p className="text-sm text-gray-500">Clients Worldwide</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-purple">98%</p>
                        <p className="text-sm text-gray-500">Client Satisfaction</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-full -mr-8 -mt-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
