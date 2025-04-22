
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  image: string;
  description: string;
  results: {
    label: string;
    value: string;
  }[];
  tags: string[];
  featured: boolean;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Project data
  const projectsData: Project[] = [
    {
      id: 'tech-innovations',
      title: 'Digital Transformation Campaign',
      client: 'TechGrowth Inc.',
      industry: 'Technology',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'A comprehensive digital marketing campaign that increased brand awareness and lead generation for a growing tech company.',
      results: [
        { label: 'Increase in Website Traffic', value: '215%' },
        { label: 'New Qualified Leads', value: '180+' },
        { label: 'Conversion Rate Increase', value: '32%' },
      ],
      tags: ['Digital Marketing', 'SEO', 'Content Strategy'],
      featured: true,
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-Commerce Website Redesign',
      client: 'StyleHouse',
      industry: 'Retail',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Complete redesign of an e-commerce platform focused on improving user experience, mobile responsiveness, and conversion rate.',
      results: [
        { label: 'Conversion Rate', value: '+75%' },
        { label: 'Mobile Traffic', value: '+120%' },
        { label: 'Avg. Order Value', value: '+28%' },
      ],
      tags: ['Web Development', 'UX Design', 'E-Commerce'],
      featured: true,
    },
    {
      id: 'social-restaurant',
      title: 'Social Media Revamp',
      client: 'Urban Bites Restaurant',
      industry: 'Food & Beverage',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Strategic social media management that transformed the restaurant\'s online presence and drove significant foot traffic.',
      results: [
        { label: 'Instagram Followers', value: '+340%' },
        { label: 'Engagement Rate', value: '12.5%' },
        { label: 'In-store Traffic', value: '+45%' },
      ],
      tags: ['Social Media', 'Content Creation', 'Community Management'],
      featured: false,
    },
    {
      id: 'seo-healthcare',
      title: 'SEO & Content Strategy',
      client: 'MediCare Services',
      industry: 'Healthcare',
      category: 'seo',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Comprehensive SEO optimization and content strategy that significantly improved organic search visibility and patient inquiries.',
      results: [
        { label: 'Organic Traffic', value: '+245%' },
        { label: 'Keyword Rankings', value: '90+ in Top 10' },
        { label: 'Patient Inquiries', value: '+78%' },
      ],
      tags: ['SEO', 'Content Strategy', 'Healthcare Marketing'],
      featured: true,
    },
    {
      id: 'branding-finance',
      title: 'Brand Identity Overhaul',
      client: 'Future Finance',
      industry: 'Financial Services',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Complete rebrand including new visual identity, messaging, and digital presence for a financial services company.',
      results: [
        { label: 'Brand Recognition', value: '+62%' },
        { label: 'Customer Trust Score', value: '+48%' },
        { label: 'New Client Acquisition', value: '+35%' },
      ],
      tags: ['Branding', 'Design', 'Digital Strategy'],
      featured: false,
    },
    {
      id: 'campaign-nonprofit',
      title: 'Fundraising Campaign',
      client: 'Green Earth Foundation',
      industry: 'Non-profit',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Multi-channel fundraising campaign that exceeded donation targets and increased donor engagement and retention.',
      results: [
        { label: 'Fundraising Goal', value: '165% Achieved' },
        { label: 'New Donors', value: '720+' },
        { label: 'Donor Retention', value: '+42%' },
      ],
      tags: ['Fundraising', 'Campaign Strategy', 'Digital Marketing'],
      featured: false,
    },
  ];

  // Categories for filter
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'seo', label: 'SEO' },
    { value: 'branding', label: 'Branding' },
  ];

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

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

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.category === filter);
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-purple/10 dark:from-brand-blue/20 dark:via-gray-900 dark:to-brand-purple/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our collection of successful projects that have delivered 
              measurable results for businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Highlighting some of our most impactful work that demonstrates our expertise and results-driven approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-sm font-medium bg-brand-blue/80 rounded-full py-1 px-3">
                          {project.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-brand-blue font-medium text-sm mb-3">
                      {project.client}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/portfolio/${project.id}`}>
                        View Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">All <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Browse our complete portfolio of successful projects across different industries and services.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category.value
                      ? 'bg-gradient-primary text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setFilter(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${100 * index}ms` }}
              >
                <div className="relative h-60 overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                    <div className="p-4 text-white">
                      <span className="text-sm font-medium bg-brand-blue/80 rounded-full py-1 px-3">
                        {project.industry}
                      </span>
                    </div>
                    <div className="p-4">
                      <Link 
                        to={`/portfolio/${project.id}`} 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-brand-blue font-medium text-sm mb-3">
                    {project.client}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/portfolio/${project.id}`}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We couldn't find any projects that match your filter. Please try another category.
              </p>
              <Button onClick={() => setFilter('all')}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let's create your success story together. Contact us to discuss how our 
              tailored digital marketing strategies can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/services">
                  Explore Our Services
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

export default Portfolio;
