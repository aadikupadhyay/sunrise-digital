import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, BarChart2, Target } from 'lucide-react';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  coverImage: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

const serviceData: Record<string, ServiceData> = {
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.',
    icon: 'BarChart2',
    coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: [
      'Strategic campaign planning and execution',
      'Multi-channel marketing approach',
      'Target audience analysis and segmentation',
      'Conversion rate optimization',
      'Performance tracking and reporting',
      'Budget optimization and ROI analysis'
    ],
    benefits: [
      {
        title: 'Increased Brand Visibility',
        description: 'Expand your digital footprint and reach more potential customers across multiple platforms.',
        icon: 'Target'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Turn more visitors into leads and customers with optimized campaigns and landing pages.',
        icon: 'BarChart2'
      },
      {
        title: 'Better ROI',
        description: 'Maximize your marketing budget with data-driven decisions and strategic optimization.',
        icon: 'BarChart2'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Analysis & Strategy',
        description: 'We audit your current marketing efforts and develop a customized strategy based on your goals.'
      },
      {
        step: 2,
        title: 'Campaign Development',
        description: 'Our team creates compelling campaigns across relevant channels to reach your target audience.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'We launch your campaigns and continuously monitor their performance for optimal results.'
      },
      {
        step: 4,
        title: 'Analysis & Optimization',
        description: 'Regular reporting and data analysis guide ongoing optimizations to improve performance.'
      }
    ],
    faq: [
      {
        question: 'How long does it take to see results from digital marketing?',
        answer: 'Results can vary based on factors like industry competition, marketing channels used, and budget. Some channels like PPC can show immediate results, while SEO typically takes 3-6 months to show significant improvements. We provide regular reports to track progress from day one.'
      },
      {
        question: 'What budget do I need for effective digital marketing?',
        answer: 'We work with businesses of all sizes and can tailor strategies to fit various budgets. Our focus is on maximizing ROI regardless of spend level. After understanding your goals, we\'ll recommend an appropriate budget to achieve them.'
      },
      {
        question: 'How do you measure the success of marketing campaigns?',
        answer: 'We establish clear KPIs at the start of each campaign aligned with your business goals. These might include metrics like conversion rate, cost per acquisition, organic traffic growth, engagement rates, and ultimately, ROI. We provide transparent reporting on all these metrics.'
      }
    ]
  },
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom website design and development solutions that provide seamless user experiences and drive conversions.',
    icon: 'Monitor',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: [
      'Responsive website design and development',
      'E-commerce solutions with secure payment gateways',
      'Content management system integration',
      'Website maintenance and support',
      'Performance optimization and speed improvements',
      'Accessibility compliance and testing'
    ],
    benefits: [
      {
        title: 'Professional Online Presence',
        description: 'Make a strong first impression with a modern, professional website that reflects your brand.',
        icon: 'Users'
      },
      {
        title: 'Improved User Experience',
        description: 'Keep visitors engaged with intuitive navigation and fast-loading pages designed for conversions.',
        icon: 'Target'
      },
      {
        title: 'Mobile Compatibility',
        description: 'Reach users on any device with fully responsive designs that adapt to all screen sizes.',
        icon: 'Smartphone'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'We learn about your business, goals, and target audience to plan the perfect website.'
      },
      {
        step: 2,
        title: 'Design',
        description: 'Our design team creates wireframes and visual mockups for your approval before development.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'We build your website using modern technologies and best practices for performance.'
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Thorough testing across devices and browsers ensures a flawless launch of your new site.'
      }
    ],
    faq: [
      {
        question: 'How long does it take to build a website?',
        answer: 'The timeline depends on the complexity of your project. A basic business website typically takes 4-6 weeks, while more complex e-commerce sites may take 8-12 weeks. We\'ll provide a detailed timeline during our initial consultation.'
      },
      {
        question: 'Will I be able to update the website myself?',
        answer: 'Yes! We build most websites on user-friendly content management systems that allow you to make basic updates yourself. We also provide training sessions to ensure you feel comfortable managing your site content.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Absolutely. We offer various maintenance packages to keep your site secure, up-to-date, and running smoothly. These include regular updates, security monitoring, performance optimization, and technical support.'
      }
    ]
  },
  'social-media': {
    id: 'social-media',
    title: 'Social Media',
    description: 'Strategic social media management to build brand awareness, engage your audience, and grow your online community.',
    icon: 'MessageSquare',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: [
      'Social media strategy development',
      'Content creation and curation',
      'Community management and engagement',
      'Social media advertising campaigns',
      'Influencer marketing partnerships',
      'Analytics and performance reporting'
    ],
    benefits: [
      {
        title: 'Enhanced Brand Awareness',
        description: 'Increase visibility and recognition of your brand across popular social platforms.',
        icon: 'Users'
      },
      {
        title: 'Community Building',
        description: 'Foster meaningful connections with your audience through regular engagement and interaction.',
        icon: 'MessageSquare'
      },
      {
        title: 'Targeted Advertising',
        description: 'Reach ideal customers with precision-targeted social ads that maximize your budget.',
        icon: 'Target'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Platform Research',
        description: 'We identify which social platforms will best reach your target audience and business goals.'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'We create a comprehensive social media strategy with content themes and posting schedules.'
      },
      {
        step: 3,
        title: 'Content Creation',
        description: 'Our creative team produces engaging content designed to resonate with your audience.'
      },
      {
        step: 4,
        title: 'Community Management',
        description: 'We actively engage with your audience and monitor performance to refine strategies.'
      }
    ],
    faq: [
      {
        question: 'Which social media platforms should my business use?',
        answer: 'The best platforms depend on your specific business, target audience, and goals. We conduct research to identify where your audience is most active and which platforms will drive the most value for your business.'
      },
      {
        question: 'How often should we post on social media?',
        answer: 'Posting frequency varies by platform and audience. Quality always trumps quantity. We typically recommend 3-5 posts per week on Facebook, 1 daily post on Instagram, 5-10 daily tweets on Twitter, and 2-5 posts per week on LinkedIn, but we customize this based on your specific needs.'
      },
      {
        question: 'Do you handle social media advertising?',
        answer: 'Yes, we offer comprehensive social media advertising services including strategy development, audience targeting, ad creation, campaign management, and performance optimization to maximize your ad spend ROI.'
      }
    ]
  },
  'seo': {
    id: 'seo',
    title: 'SEO Services',
    description: 'Search engine optimization techniques to improve your website\'s visibility and rank higher in search results.',
    icon: 'Search',
    coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    features: [
      'Comprehensive SEO audits and strategy',
      'On-page optimization for content and structure',
      'Off-page SEO and link building',
      'Technical SEO improvements',
      'Local SEO for physical locations',
      'Regular ranking and traffic reporting'
    ],
    benefits: [
      {
        title: 'Improved Search Rankings',
        description: 'Climb higher in search engine results for keywords relevant to your business.',
        icon: 'TrendingUp'
      },
      {
        title: 'Increased Organic Traffic',
        description: 'Drive more qualified visitors to your website without paying for each click.',
        icon: 'BarChart2'
      },
      {
        title: 'Long-Term Results',
        description: 'Build sustainable organic search visibility that continues to deliver value over time.',
        icon: 'Target'
      }
    ],
    process: [
      {
        step: 1,
        title: 'SEO Audit',
        description: 'We analyze your current SEO performance and identify opportunities for improvement.'
      },
      {
        step: 2,
        title: 'Keyword Research',
        description: 'We identify the most valuable search terms for your business and target audience.'
      },
      {
        step: 3,
        title: 'On-Page Optimization',
        description: 'We optimize your website content and structure for both users and search engines.'
      },
      {
        step: 4,
        title: 'Off-Page SEO',
        description: 'We build your site\'s authority through quality backlinks and digital PR strategies.'
      }
    ],
    faq: [
      {
        question: 'How long does SEO take to show results?',
        answer: 'SEO is a long-term strategy. While some improvements can be seen in a few weeks, significant results typically take 3-6 months. The timeline depends on your website\'s current state, industry competition, and the aggressiveness of your strategy.'
      },
      {
        question: 'What makes your SEO approach different?',
        answer: 'We focus on sustainable, white-hat SEO techniques that build long-term value rather than quick fixes that may lead to penalties. Our approach combines technical optimization, quality content creation, and strategic link building tailored to your specific business goals.'
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer: 'We don\'t make guarantees about specific rankings as search algorithms are constantly changing and outside our control. However, we have a strong track record of improving rankings and traffic for our clients, and we provide transparent reporting on all SEO metrics.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Log error if service doesn't exist
    if (!service && serviceId) {
      console.error(`Service with ID "${serviceId}" not found`);
    }
  }, [serviceId, service]);

  // If service doesn't exist, show not found message
  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Sorry, the service you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Render the service details
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {service.description}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact" className="px-8">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={service.coverImage} 
                alt={service.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">How We Can Help</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Sunrise Digitals, we understand that navigating the digital landscape can be overwhelming. Our {service.title.toLowerCase()} solutions are designed to simplify the process while delivering exceptional results for your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 text-brand-orange">
                      <Check className="h-5 w-5" />
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg mb-4">Our Process</h2>
              <p className="text-lg text-gray-600">
                We follow a proven methodology to ensure consistent, high-quality results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="bg-white rounded-lg shadow-md p-6 relative border-t-4 border-brand-orange">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg mb-4">Key Benefits</h2>
              <p className="text-lg text-gray-600">
                Here's how our {service.title.toLowerCase()} services can transform your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                    {benefit.icon === 'Target' && <Target className="h-6 w-6" />}
                    {benefit.icon === 'BarChart2' && <BarChart2 className="h-6 w-6" />}
                    {benefit.icon === 'Users' && <Users className="h-6 w-6" />}
                    {benefit.icon === 'MessageSquare' && <Users className="h-6 w-6" />}
                    {benefit.icon === 'TrendingUp' && <Users className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our {service.title.toLowerCase()} services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {service.faq.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let's discuss how our {service.title.toLowerCase()} solutions can help your business grow. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg" asChild>
                <Link to="/services">
                  Explore Other Services
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

export default ServiceDetail;
