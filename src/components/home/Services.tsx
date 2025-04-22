
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PencilLine, Megaphone, ArrowRight, BarChart2, Globe, Monitor, MessageSquare, } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section ref={sectionRef} id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`heading-lg mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          We offer end-to-end digital marketing services tailored for all businesses. Whether you're just starting out or looking to grow, our solutions are built to be affordable, effective, and scalable so you can focus on your business while we handle the rest.
          </p>
        </div>

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

        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
