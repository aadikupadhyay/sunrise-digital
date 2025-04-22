
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  approach: string[];
  results: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  tags: string[];
  featured: boolean;
}

const portfolioItems: Record<string, PortfolioItem> = {
  'tech-innovations': {
    id: 'tech-innovations',
    title: 'Digital Transformation Campaign',
    client: 'TechGrowth Inc.',
    industry: 'Technology',
    category: 'digital-marketing',
    image: 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    images: [
      'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ],
    description: 'A comprehensive digital marketing campaign that increased brand awareness and lead generation for a growing tech company.',
    challenge: 'TechGrowth Inc. was struggling to stand out in a crowded tech marketplace. They had excellent products but lacked visibility and weren\'t generating enough qualified leads to sustain their growth goals.',
    solution: 'We developed a comprehensive digital transformation strategy focusing on content marketing, SEO, targeted PPC campaigns, and social media presence to increase brand visibility and generate more qualified leads.',
    approach: [
      'Conducted a comprehensive digital audit to identify strengths, weaknesses, and opportunities',
      'Developed a targeted content marketing strategy focused on key industry pain points',
      'Implemented technical SEO improvements to increase organic visibility',
      'Created and managed highly targeted PPC campaigns across Google and LinkedIn',
      'Established a consistent social media presence with engaging, shareable content'
    ],
    results: [
      { label: 'Increase in Website Traffic', value: '215%' },
      { label: 'New Qualified Leads', value: '180+' },
      { label: 'Conversion Rate Increase', value: '32%' },
      { label: 'ROI on Marketing Spend', value: '345%' }
    ],
    testimonial: {
      text: "The team at Sunrise Digitals completely transformed our digital presence. Not only did they drastically improve our visibility, but the quality of leads we're now getting has significantly increased our conversion rates.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechGrowth Inc."
    },
    tags: ['Digital Marketing', 'SEO', 'Content Strategy'],
    featured: true,
  },
  'ecommerce-redesign': {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Website Redesign',
    client: 'StyleHouse',
    industry: 'Retail',
    category: 'web-development',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ],
    description: 'Complete redesign of an e-commerce platform focused on improving user experience, mobile responsiveness, and conversion rate.',
    challenge: 'StyleHouse\'s outdated website had a high bounce rate, poor mobile experience, and low conversion rates. Shopping cart abandonment was high, and the site wasn\'t effectively showcasing their product range.',
    solution: 'We completely redesigned the e-commerce platform with a focus on user experience, mobile responsiveness, and streamlined checkout process. The new site included enhanced product visualization, personalized recommendations, and simplified navigation.',
    approach: [
      'Conducted user research to identify pain points in the existing customer journey',
      'Developed a modern, responsive design optimized for all devices',
      'Implemented an intuitive product categorization and filtering system',
      'Created a simplified, three-step checkout process to reduce abandonment',
      'Integrated product recommendations and cross-selling features',
      'Optimized site speed and performance'
    ],
    results: [
      { label: 'Conversion Rate', value: '+75%' },
      { label: 'Mobile Traffic', value: '+120%' },
      { label: 'Avg. Order Value', value: '+28%' },
      { label: 'Cart Abandonment', value: '-45%' }
    ],
    testimonial: {
      text: "Our new website is not just beautiful, it's driving real results. The user experience is seamless, and our customers love how easy it is to find and purchase products. Our online sales have increased dramatically.",
      author: "Michael Chen",
      position: "CEO, StyleHouse"
    },
    tags: ['Web Development', 'UX Design', 'E-Commerce'],
    featured: true,
  }
};

const PortfolioDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? portfolioItems[projectId] : null;
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Log error if project doesn't exist
    if (!project && projectId) {
      console.error(`Project with ID "${projectId}" not found`);
    }
  }, [projectId, project]);

  // Reset the active image index when the project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // If project doesn't exist, show not found message
  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Sorry, the project you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild>
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.industry}
            </span>
            <h1 className="heading-xl mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-brand-navy font-medium mb-6">
              {project.client}
            </p>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <img 
              src={project.images[activeImageIndex]} 
              alt={`${project.title} showcase ${activeImageIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[600px]"
            />
          </div>
          {project.images.length > 1 && (
            <div className="flex space-x-4 justify-center">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    activeImageIndex === index ? 'border-brand-blue scale-110' : 'border-transparent opacity-70'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="heading-md mb-4">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mb-10">
                <h2 className="heading-md mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="mb-10">
                <h2 className="heading-md mb-4">Our Solution</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.solution}
                </p>
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  {project.approach.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-md mb-6">Results & Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {project.results.map((result, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <h3 className="text-3xl font-bold text-brand-blue mb-2">{result.value}</h3>
                      <p className="text-gray-600">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.testimonial && (
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-blue mt-10">
                  <p className="text-lg italic text-gray-700 mb-4">"{project.testimonial.text}"</p>
                  <div>
                    <p className="font-medium">{project.testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{project.testimonial.position}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Industry</p>
                    <p className="font-medium">{project.industry}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Services</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs py-1 px-2 bg-brand-blue/10 text-brand-blue rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy text-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Ready for similar results?</h3>
                <p className="mb-6">
                  We can help your business achieve the same level of success. Let's discuss your project.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">More Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(portfolioItems)
              .filter(item => item.id !== project.id)
              .slice(0, 2)
              .map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-brand-blue font-medium text-sm mb-3">
                      {item.client}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link to={`/portfolio/${item.id}`}>
                        View Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" /> View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
