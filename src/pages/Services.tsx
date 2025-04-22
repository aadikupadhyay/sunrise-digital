
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
// import { ArrowRight, BarChart2, Monitor, MessageSquare, Search, Globe, TrendingUp, Target, Mail } from 'lucide-react';
import { Mail, PencilLine, Megaphone, ArrowRight, BarChart2, Globe, Monitor, MessageSquare, } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md card-hover opacity-0 h-full flex flex-col"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center mb-6 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-brand-blue hover:text-brand-purple font-medium"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "PPC Services",
      description: "Get immediate traction with smart ad campaigns. From Google to social platforms, we craft and manage PPC strategies that maximize ROI and minimize waste.",
      link: "/services/digital-marketing",
      delay: 100,
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "More than just a digital storefront. We design websites that reflect your brand, guide your visitors, and convert curiosity into action—optimized for all screens and built to grow with you.",
      link: "/services/web-development",
      delay: 200,
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Social Media",
      description: "Your brand deserves to be seen—and heard. We manage your social media with strategic consistency, creative content, and a tone that fits your audience.",
      link: "/services/social-media",
      delay: 300,
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO Services",
      description: "Visibility is everything. We boost your search rankings through practical, proven SEO strategies that bring the right people to your website—organically and consistently.",
      link: "/services/seo",
      delay: 400,
    },
    {
      icon: <PencilLine className="h-8 w-8" />,
      title: "Content Marketing",
      description: "We create content that tells your story, connects with your audience, and drives meaningful action—every headline, caption, and call-to-action counts.",
      link: "/services/content-marketing",
      delay: 500,
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "We believe in numbers with meaning. Every campaign comes with crystal-clear reporting, helping you understand performance and sharpen strategy over time.",
      link: "/services/analytics",
      delay: 600,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-purple/10 dark:from-brand-blue/20 dark:via-gray-900 dark:to-brand-purple/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              <span>Our</span> <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive digital marketing solutions designed to elevate your brand, 
              engage your audience, and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="heading-lg mb-4">Ready to Elevate Your Digital Presence?</h2>
              <p className="text-lg text-white/90 mb-6">
                Contact us today for a free consultation and discover how our tailored 
                strategies can help your business achieve its goals.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Beyond our core offerings, we provide specialized services to meet your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md card-hover">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold">Content Marketing</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Strategic content creation and distribution to attract and engage your target audience, 
                build trust, and drive profitable customer actions.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services/content-marketing">
                  Learn More
                </Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md card-hover">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center mr-4">
                  <BarChart2 className="h-5 w-5 text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive data analysis and reporting to track performance, gain valuable insights, 
                and make data-driven decisions for your marketing campaigns.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services/analytics">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
