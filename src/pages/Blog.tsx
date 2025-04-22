import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Newsletter from '@/components/shared/Newsletter';
import { ArrowRight, Search, Calendar, Clock, User, Mail } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const blogData: BlogPost[] = [
    {
      id: 'digital-marketing-trends-2023',
      title: 'Top Digital Marketing Trends to Watch in 2023',
      excerpt: 'Explore the emerging digital marketing trends that will shape the industry this year and how businesses can leverage them for growth.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Digital Marketing',
      author: {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      },
      date: 'May 15, 2023',
      readTime: '8 min read',
      featured: true,
      tags: ['Digital Marketing', 'Trends', 'Strategy'],
    },
    {
      id: 'seo-best-practices-guide',
      title: 'The Ultimate Guide to SEO Best Practices in 2023',
      excerpt: 'Learn the essential SEO strategies and tactics that can help your website rank higher in search engine results pages.',
      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'SEO',
      author: {
        name: 'David Wilson',
        role: 'SEO Specialist',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      },
      date: 'April 28, 2023',
      readTime: '12 min read',
      featured: true,
      tags: ['SEO', 'Best Practices', 'Google'],
    },
    {
      id: 'social-media-strategy-ecommerce',
      title: 'Building an Effective Social Media Strategy for E-Commerce',
      excerpt: 'Discover how to create a social media strategy that drives traffic, engagement, and conversions for your e-commerce business.',
      image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Social Media',
      author: {
        name: 'Jessica Taylor',
        role: 'Social Media Manager',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      },
      date: 'April 10, 2023',
      readTime: '10 min read',
      featured: false,
      tags: ['Social Media', 'E-Commerce', 'Strategy'],
    },
    {
      id: 'content-marketing-roi',
      title: 'How to Measure and Maximize Content Marketing ROI',
      excerpt: 'Learn how to track, measure, and optimize the return on investment of your content marketing efforts with practical strategies and tools.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Content Marketing',
      author: {
        name: 'Michael Chen',
        role: 'Content Strategist',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      },
      date: 'March 22, 2023',
      readTime: '9 min read',
      featured: false,
      tags: ['Content Marketing', 'ROI', 'Analytics'],
    },
    {
      id: 'web-design-user-experience',
      title: 'Web Design Principles That Enhance User Experience',
      excerpt: 'Discover the key web design principles and best practices that can significantly improve user experience and boost conversions.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Web Development',
      author: {
        name: 'Alex Rodriguez',
        role: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      },
      date: 'March 15, 2023',
      readTime: '7 min read',
      featured: false,
      tags: ['Web Design', 'UX', 'Conversions'],
    },
    {
      id: 'email-marketing-automation',
      title: 'Leveraging Email Marketing Automation for Business Growth',
      excerpt: 'Learn how to implement effective email marketing automation strategies that nurture leads and drive conversions for your business.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Email Marketing',
      author: {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      },
      date: 'February 28, 2023',
      readTime: '6 min read',
      featured: true,
      tags: ['Email Marketing', 'Automation', 'Lead Generation'],
    },
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'SEO', label: 'SEO' },
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Content Marketing', label: 'Content Marketing' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Email Marketing', label: 'Email Marketing' },
  ];

  useEffect(() => {
    setBlogPosts(blogData);
    setFilteredPosts(blogData);
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
    let filtered = [...blogPosts];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm, blogPosts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-purple/10 dark:from-brand-blue/20 dark:via-gray-900 dark:to-brand-purple/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Insights, strategies, and trends in digital marketing to help you 
              stay ahead in today's competitive landscape.
            </p>
            <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Featured <span className="gradient-text">Articles</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our most popular resources on digital marketing strategies and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts
              .filter(post => post.featured)
              .slice(0, 2)
              .map((post, index) => (
                <div 
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-sm font-medium bg-white dark:bg-gray-800 text-brand-blue dark:text-brand-blue rounded-full py-1 px-3 shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <Button variant="link" size="sm" asChild>
                        <Link to={`/blog/${post.id}`} className="flex items-center">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Latest <span className="gradient-text">Articles</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with our latest insights, strategies, and industry trends.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.value
                      ? 'bg-gradient-primary text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${100 * index}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium bg-white dark:bg-gray-800 text-brand-blue dark:text-brand-blue rounded-full py-1 px-3 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="text-xs font-medium">{post.author.name}</span>
                    </div>
                    <Button variant="link" size="sm" asChild>
                      <Link to={`/blog/${post.id}`} className="flex items-center text-sm">
                        Read
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We couldn't find any articles that match your search criteria. Please try another search or category.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setActiveCategory('all')}>
                  View All Articles
                </Button>
                <Button variant="outline" onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="heading-md mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stay up-to-date with the latest digital marketing trends, strategies, and insights 
                delivered straight to your inbox. No spam, just valuable content to help your business grow.
              </p>
              <Newsletter variant="inline" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                <Mail className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
