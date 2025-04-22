
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowRight, Clock, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  relatedPosts: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'digital-marketing-strategies-2023': {
    id: 'digital-marketing-strategies-2023',
    title: 'Effective Digital Marketing Strategies for Small Businesses in 2023',
    slug: 'digital-marketing-strategies-2023',
    excerpt: 'Discover the most effective digital marketing strategies that small businesses can implement in 2023 to boost their online presence and drive growth.',
    content: `
      <p class="mb-6 text-lg">The digital marketing landscape is constantly evolving, and staying ahead of the curve is essential for small businesses looking to compete in today's online marketplace. In 2023, several key strategies have emerged as particularly effective for small businesses with limited resources but ambitious growth goals.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">1. Focus on Local SEO</h2>
      <p class="mb-6">For small businesses serving specific geographic areas, local SEO remains one of the most cost-effective marketing strategies. Google's local search algorithms continue to evolve, placing greater emphasis on relevance, proximity, and prominence.</p>
      <p class="mb-6">Key local SEO tactics for 2023 include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Optimizing your Google Business Profile with complete, accurate information</li>
        <li>Generating and managing reviews across platforms</li>
        <li>Creating location-specific content and landing pages</li>
        <li>Building local backlinks from community organizations</li>
        <li>Ensuring NAP (Name, Address, Phone number) consistency across the web</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">2. Content Marketing with a Purpose</h2>
      <p class="mb-6">Content marketing continues to be a cornerstone of digital strategy, but in 2023, the focus is increasingly on purpose-driven content that provides genuine value. Rather than creating content for the sake of it, successful small businesses are developing targeted content strategies that address specific customer needs and questions.</p>
      <p class="mb-6">Effective content approaches include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Creating comprehensive guides and resources related to your products or services</li>
        <li>Developing case studies highlighting customer success stories</li>
        <li>Publishing thought leadership content that positions your brand as an industry authority</li>
        <li>Using video content to explain complex concepts or showcase products in action</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">3. Social Media: Quality Over Quantity</h2>
      <p class="mb-6">The days of trying to maintain a presence on every social platform are over. In 2023, successful small businesses are focusing their efforts on one or two platforms where their target audience is most active and engaged.</p>
      <p class="mb-6">Key social media strategies for small businesses include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Creating platform-specific content rather than cross-posting the same content everywhere</li>
        <li>Engaging consistently with followers and building community</li>
        <li>Leveraging user-generated content to increase authenticity and reach</li>
        <li>Using social listening tools to monitor brand mentions and industry conversations</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">4. Email Marketing Personalization</h2>
      <p class="mb-6">Email remains one of the highest-ROI channels for small businesses, and personalization is key to success in 2023. With increased privacy regulations and changing consumer expectations, smart segmentation and valuable content are more important than ever.</p>
      <p class="mb-6">Effective email marketing approaches include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Segmenting lists based on customer behavior and preferences</li>
        <li>Creating automated email sequences for different customer journey stages</li>
        <li>Personalizing content beyond just using the recipient's name</li>
        <li>A/B testing subject lines, content, and send times to optimize performance</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">5. Video Marketing Across Channels</h2>
      <p class="mb-6">Video continues to dominate across platforms, with short-form video seeing particular growth. The good news for small businesses is that authentic, helpful video content often outperforms highly produced corporate content.</p>
      <p class="mb-6">Video marketing opportunities include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Short-form videos for social platforms like TikTok, Instagram Reels, and YouTube Shorts</li>
        <li>Tutorial and how-to videos demonstrating products or services</li>
        <li>Behind-the-scenes content showcasing your business and team</li>
        <li>Customer testimonials and success stories</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">6. Conversion Rate Optimization (CRO)</h2>
      <p class="mb-6">Rather than constantly chasing more traffic, smart small businesses are focusing on converting more of their existing traffic through systematic CRO.</p>
      <p class="mb-6">Key CRO strategies include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Optimizing landing pages with clear value propositions and strong calls to action</li>
        <li>Implementing A/B testing to refine page elements and messaging</li>
        <li>Streamlining checkout processes and form submissions</li>
        <li>Using social proof and trust indicators to increase conversion confidence</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">7. Leveraging Analytics for Data-Driven Decisions</h2>
      <p class="mb-6">Successful small businesses are increasingly using analytics to drive their marketing decisions rather than relying on gut feelings or following trends blindly.</p>
      <p class="mb-6">Analytics approaches to implement include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Setting up proper tracking for all marketing channels and campaigns</li>
        <li>Establishing clear KPIs aligned with business objectives</li>
        <li>Regularly reviewing performance data to identify opportunities and issues</li>
        <li>Using attribution modeling to understand how different channels contribute to conversions</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion: Start Small, Think Big</h2>
      <p class="mb-6">The most successful small businesses aren't trying to do everything at once. They're strategically selecting the digital marketing approaches that best align with their resources, capabilities, and customer needs.</p>
      <p class="mb-6">By focusing on a few high-impact strategies and executing them well, small businesses can achieve significant growth in 2023, even with limited marketing budgets. Remember that consistency and quality almost always trump quantity when it comes to digital marketing success.</p>
    `,
    author: {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Specialist',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    date: 'May 15, 2023',
    readTime: '8 min read',
    category: 'Digital Marketing',
    tags: ['Small Business', 'Digital Marketing', 'SEO', 'Social Media'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    relatedPosts: ['web-design-trends', 'seo-basics']
  },
  'web-design-trends': {
    id: 'web-design-trends',
    title: 'Web Design Trends That Will Dominate in 2023',
    slug: 'web-design-trends',
    excerpt: 'Explore the cutting-edge web design trends that are set to dominate the digital landscape in 2023 and beyond.',
    content: `
      <p class="mb-6 text-lg">Web design continues to evolve at a rapid pace, with new technologies, user preferences, and design philosophies shaping the digital experience. In 2023, several key trends are emerging that balance aesthetic appeal with functionality and user experience.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">1. Minimalism 2.0: Purposeful Simplicity</h2>
      <p class="mb-6">Minimalism continues to dominate web design, but with a more purposeful approach. Rather than stripping designs down to their bare essentials, designers are focusing on intentional simplicity that guides users through the content and toward desired actions.</p>
      <p class="mb-6">Key characteristics include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Clean layouts with generous whitespace</li>
        <li>Limited color palettes with strategic accent colors</li>
        <li>Typography-focused designs with careful hierarchy</li>
        <li>Subtle animations that enhance rather than distract</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">2. Immersive Scrolling Experiences</h2>
      <p class="mb-6">As users become more comfortable with scrolling on both mobile and desktop devices, designers are creating more immersive scrolling experiences that unfold as users navigate down the page.</p>
      <p class="mb-6">These experiences often include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Parallax scrolling effects that create depth</li>
        <li>Scroll-triggered animations that reveal content</li>
        <li>Horizontal scrolling sections for product showcases</li>
        <li>Storytelling elements that progress as users scroll</li>
      </ul>

      <p class="mb-6">The rest of the article continues with detailed explorations of other web design trends...</p>
    `,
    author: {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    date: 'April 28, 2023',
    readTime: '6 min read',
    category: 'Web Design',
    tags: ['Web Design', 'UI/UX', 'Trends', 'Development'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    relatedPosts: ['digital-marketing-strategies-2023', 'seo-basics']
  },
  'seo-basics': {
    id: 'seo-basics',
    title: 'SEO Basics: A Beginner\'s Guide to Ranking in 2023',
    slug: 'seo-basics',
    excerpt: 'Learn the essential SEO fundamentals that every beginner should know to improve website rankings in search engines in 2023.',
    content: `
      <p class="mb-6 text-lg">Search Engine Optimization (SEO) remains a critical component of any digital marketing strategy. For beginners, the world of SEO can seem overwhelming, but understanding the basics can help you build a strong foundation for improving your website's visibility in search results.</p>

      <p class="mb-6">This article provides a comprehensive introduction to the core concepts of SEO in 2023...</p>
    `,
    author: {
      name: 'Alex Rodriguez',
      role: 'SEO Specialist',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    date: 'June 10, 2023',
    readTime: '10 min read',
    category: 'SEO',
    tags: ['SEO', 'Digital Marketing', 'Beginners Guide'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    relatedPosts: ['digital-marketing-strategies-2023', 'web-design-trends']
  }
};

const BlogArticle = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? blogPosts[articleId] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Log error if article doesn't exist
    if (!article && articleId) {
      console.error(`Blog article with ID "${articleId}" not found`);
    }
  }, [articleId, article]);

  // If article doesn't exist, show not found message
  if (!article) {
    return (
      <div>
        <Navbar />
        <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Sorry, the article you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Link 
                to={`/blog/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm font-medium bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full hover:bg-brand-blue/20 transition-colors"
              >
                {article.category}
              </Link>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center mb-8">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-medium">{article.author.name}</p>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom max-w-4xl -mt-8 mb-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-xl">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                <Tag className="h-5 w-5 text-gray-600 mr-1" />
                {article.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name} 
                    className="w-16 h-16 rounded-full mr-6 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{article.author.name}</h3>
                    <p className="text-gray-600 mb-3">{article.author.role}</p>
                    <p className="text-gray-700">
                      A passionate digital marketing specialist with over 10 years of experience helping businesses grow their online presence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2" /> Share This Article
                </h3>
                <div className="flex space-x-3">
                  <a
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`I thought you might be interested in this article: ${window.location.href}`)}`}
                    className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:opacity-90"
                    aria-label="Share via Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
                <h3 className="font-bold text-xl mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {article.relatedPosts.map((postId) => {
                    const relatedPost = blogPosts[postId];
                    if (!relatedPost) return null;
                    
                    return (
                      <div key={postId} className="flex items-start">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h4 className="font-medium mb-1 leading-tight">
                            <Link 
                              to={`/blog/${relatedPost.id}`}
                              className="hover:text-brand-blue transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-600">{relatedPost.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-xl mb-6">Categories</h3>
                  <div className="space-y-2">
                    <Link 
                      to="/blog/category/digital-marketing"
                      className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Digital Marketing
                    </Link>
                    <Link 
                      to="/blog/category/web-design"
                      className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Web Design
                    </Link>
                    <Link 
                      to="/blog/category/seo"
                      className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      SEO
                    </Link>
                    <Link 
                      to="/blog/category/social-media"
                      className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Social Media
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to learn more about our services?</h2>
            <p className="text-lg text-white/90 mb-8">
              Discover how Sunrise Digitals can help your business establish a powerful online presence with trust and excellence.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;
