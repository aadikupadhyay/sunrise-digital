
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

// Define data types for searchable content
interface SearchableItem {
  id: string;
  title: string;
  content: string;
  type: 'blog' | 'service' | 'portfolio';
  excerpt?: string;
  date?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  image?: string;
  category?: string;
  url: string;
}

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState<SearchableItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Sample content to search through
  const searchableContent: SearchableItem[] = [
    {
      id: 'digital-marketing-strategies-2023',
      title: 'Effective Digital Marketing Strategies for Small Businesses in 2023',
      content: 'Discover the most effective digital marketing strategies that small businesses can implement in 2023 to boost their online presence and drive growth. This guide covers local SEO, content marketing, social media strategies, email personalization, video marketing, conversion rate optimization, and analytics.',
      type: 'blog',
      excerpt: 'Discover the most effective digital marketing strategies that small businesses can implement in 2023 to boost their online presence and drive growth.',
      date: 'May 15, 2023',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      category: 'Digital Marketing',
      url: '/blog/digital-marketing-strategies-2023'
    },
    {
      id: 'web-design-trends',
      title: 'Web Design Trends That Will Dominate in 2023',
      content: 'Explore the cutting-edge web design trends that are set to dominate the digital landscape in 2023 and beyond. This article discusses minimalism 2.0, immersive scrolling experiences, micro-interactions, accessibility-first design, and more.',
      type: 'blog',
      excerpt: 'Explore the cutting-edge web design trends that are set to dominate the digital landscape in 2023 and beyond.',
      date: 'April 28, 2023',
      author: {
        name: 'Michael Chen',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Web Design',
      url: '/blog/web-design-trends'
    },
    {
      id: 'tech-innovations',
      title: 'Digital Transformation Campaign',
      content: 'A comprehensive digital marketing campaign that increased brand awareness and lead generation for a growing tech company. We developed a content marketing strategy, implemented SEO improvements, created PPC campaigns, and established a social media presence.',
      type: 'portfolio',
      image: 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category: 'Digital Marketing',
      url: '/portfolio/tech-innovations'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Services',
      content: 'Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business. We offer strategic campaign planning, multi-channel marketing, target audience analysis, conversion rate optimization, performance tracking, and budget optimization.',
      type: 'service',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      url: '/services/digital-marketing'
    },
    {
      id: 'web-development',
      title: 'Web Development Services',
      content: 'Custom website design and development solutions that provide seamless user experiences and drive conversions. We offer responsive website design, e-commerce solutions, content management system integration, website maintenance, performance optimization, and accessibility compliance.',
      type: 'service',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      url: '/services/web-development'
    }
  ];

  useEffect(() => {
    const performSearch = () => {
      setLoading(true);
      
      if (!query || query.trim().length < 2) {
        setResults([]);
        setLoading(false);
        return;
      }

      // Simple search algorithm that checks for the query in the title and content
      const searchResults = searchableContent.filter(item => {
        const normalizedQuery = query.toLowerCase();
        const normalizedTitle = item.title.toLowerCase();
        const normalizedContent = item.content.toLowerCase();
        
        return normalizedTitle.includes(normalizedQuery) || normalizedContent.includes(normalizedQuery);
      });

      // Sort results by relevance (title matches first, then content matches)
      searchResults.sort((a, b) => {
        const aTitleMatch = a.title.toLowerCase().includes(query.toLowerCase());
        const bTitleMatch = b.title.toLowerCase().includes(query.toLowerCase());
        
        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;
        return 0;
      });

      // Simulate API delay
      setTimeout(() => {
        setResults(searchResults);
        setLoading(false);
      }, 500);
    };

    performSearch();
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Search Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-8 text-center">
              {query ? `Search Results for "${query}"` : 'Search Our Site'}
            </h1>
            <form action="/search" method="get" className="mb-8">
              <div className="flex">
                <input
                  type="search"
                  name="q"
                  defaultValue={query}
                  placeholder="What are you looking for?"
                  className="w-full p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  autoComplete="off"
                />
                <Button type="submit" className="rounded-l-none">
                  <Search size={18} className="mr-2" /> Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-blue rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Searching for results...</p>
            </div>
          ) : (
            <>
              {query && (
                <div className="mb-8">
                  <p className="text-lg text-gray-600">
                    {results.length > 0
                      ? `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`
                      : `No results found for "${query}"`}
                  </p>
                </div>
              )}

              {results.length > 0 ? (
                <div className="space-y-8">
                  {results.map((result) => (
                    <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-5">
                        {result.image && (
                          <div className="md:col-span-1">
                            <Link to={result.url}>
                              <img
                                src={result.image}
                                alt={result.title}
                                className="w-full h-full object-cover object-center min-h-[200px]"
                              />
                            </Link>
                          </div>
                        )}
                        <div className={`p-6 ${result.image ? 'md:col-span-4' : 'md:col-span-5'}`}>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`text-xs font-medium py-1 px-2 rounded-full ${
                              result.type === 'blog' 
                                ? 'bg-brand-orange/10 text-brand-orange' 
                                : result.type === 'service' 
                                  ? 'bg-brand-blue/10 text-brand-blue'
                                  : 'bg-brand-navy/10 text-brand-navy'
                            }`}>
                              {result.type === 'blog' 
                                ? 'Blog Article' 
                                : result.type === 'service' 
                                  ? 'Service' 
                                  : 'Portfolio Project'}
                            </span>
                            {result.category && (
                              <span className="text-xs text-gray-600 border border-gray-200 rounded-full py-1 px-2">
                                {result.category}
                              </span>
                            )}
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold mb-2">
                            <Link to={result.url} className="hover:text-brand-blue transition-colors">
                              {result.title}
                            </Link>
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {result.excerpt || result.content.substring(0, 150) + '...'}
                          </p>
                          {result.type === 'blog' && result.date && result.author && (
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <User className="h-4 w-4 mr-1" />
                              <span className="mr-4">{result.author.name}</span>
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{result.date}</span>
                            </div>
                          )}
                          <Button variant="outline" size="sm" asChild>
                            <Link to={result.url}>
                              {result.type === 'blog' 
                                ? 'Read Article' 
                                : result.type === 'service' 
                                  ? 'View Service' 
                                  : 'View Project'}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <div className="text-6xl mb-4">🔍</div>
                  <h2 className="text-2xl font-bold mb-4">No Results Found</h2>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    We couldn't find any content matching your search term. Please try using different keywords or check out our suggestions below.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/blog">Blog Articles</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/services">Services</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/portfolio">Portfolio</Link>
                    </Button>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default SearchResults;
