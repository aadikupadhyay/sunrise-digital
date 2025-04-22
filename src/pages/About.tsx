
import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CountUp from '@/components/ui/CountUp';
import { Handshake, Medal, ArrowRight, Users, Award, Calendar, Target, TrendingUp, Heart } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

interface Milestone {
  year: number;
  title: string;
  description: string;
}

const About = () => {
  // Fix: Changed the type from (HTMLDivElement | null)[] to (HTMLElement | null)[]
  // since HTMLDivElement requires the 'align' property but HTMLElement doesn't
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({
    stats: false,
    mission: false,
    history: false,
    team: false,
  });

  // Team data
  const team: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Sarah has over 15 years of experience in digital marketing and has helped hundreds of companies transform their online presence.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'Chief Marketing Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Michael specializes in integrated marketing campaigns and has a strong background in data-driven strategy development.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Jessica Taylor',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Jessica leads our creative team with a focus on innovative design solutions that elevate brand experiences across all touchpoints.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'David Wilson',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'David is an expert in search engine optimization with a proven track record of improving client rankings and driving organic traffic.',
      social: {
        linkedin: '#',
      },
    },
  ];

  // Milestones for company history
  const milestones: Milestone[] = [
    {
      year: 2010,
      title: 'Company Founded',
      description: 'DynamicMarket was established with a mission to provide innovative digital marketing solutions.',
    },
    {
      year: 2013,
      title: 'Expanded Services',
      description: 'Added web development and SEO services to our portfolio, becoming a full-service digital agency.',
    },
    {
      year: 2015,
      title: 'First Major Client',
      description: 'Partnered with a Fortune 500 company, marking a significant milestone in our growth.',
    },
    {
      year: 2017,
      title: 'International Expansion',
      description: 'Opened our first international office to serve clients in European markets.',
    },
    {
      year: 2020,
      title: 'Digital Transformation Focus',
      description: 'Introduced specialized services to help businesses adapt to pandemic-driven digital transformations.',
    },
    {
      year: 2023,
      title: 'AI Marketing Innovation',
      description: 'Launched our AI-powered marketing analytics platform to deliver cutting-edge insights to clients.',
    },
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const sectionNames = ['stats', 'mission', 'history', 'team'];
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [sectionNames[index]]: true
            }));
            observer.unobserve(entries[0].target);
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref) {
        observer.observe(ref);
      }
      
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue/10 via-white to-brand-purple/10 dark:from-brand-blue/20 dark:via-gray-900 dark:to-brand-purple/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              <span>Your Growth</span> <span className="gradient-text">is Our Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            At Sunrise Digitals, we’re not just a digital marketing agency—we're your strategic partner in building brands that thrive. </p>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">Born from the idea that every business deserves premium, end-to-end marketing solutions, we created a place where everything—from brand identity to digital ad campaigns—comes together seamlessly.</p>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">No juggling multiple vendors. No over-complicated processes. Just clear strategy, smart execution, and results that speak for themselves.</p> 
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">We understand that navigating the digital world can feel overwhelming—especially when you're focused on running and scaling your business. That’s why we prioritize consistency, simplicity, and growth-focused solutions tailored to your stage, industry, and ambitions.</p>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">Whether you’re an emerging brand or an established name ready to evolve, we’re here to make your digital journey effortless and effective.</p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">Because at Sunrise Digitals, your trust fuels our excellence.</p>
           
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)} 
        className="py-12 border-y border-gray-100 dark:border-gray-800"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className={visibleSections.stats ? 'animate-fade-in' : 'opacity-0'}>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={500} suffix="+" duration={3000} />
              </p>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Clients Worldwide
              </p>
            </div>
            <div className={visibleSections.stats ? 'animate-fade-in animation-delay-200' : 'opacity-0'}>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={98} suffix="%" duration={2500} />
              </p>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Client Satisfaction
              </p>
            </div>
            <div className={visibleSections.stats ? 'animate-fade-in animation-delay-300' : 'opacity-0'}>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={12} suffix="+" duration={2000} />
              </p>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div className={visibleSections.stats ? 'animate-fade-in animation-delay-400' : 'opacity-0'}>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={45} suffix="+" duration={2800} />
              </p>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Team Members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section 
        ref={(el) => (sectionRefs.current[1] = el)} 
        className="section-padding"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={visibleSections.mission ? 'animate-fade-in-right' : 'opacity-0'}>
              <h2 className="heading-lg mb-6">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              To empower ambitious brands with streamlined, high-impact digital marketing strategies that eliminate guesswork and accelerate meaningful growth.<br/><br/>We exist to make digital success accessible, measurable, and scalable—no matter your starting point.
              </p>
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                      <Handshake className="h-6 w-6 text-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trust First</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    We build relationships rooted in honesty, transparency, and reliability—because trust isn’t just earned, it’s nurtured.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                      <Medal className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence Always</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    From strategy to execution, we uphold the highest standards in every project, big or small. We don’t settle, and neither should you.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-brand-deep-purple/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-brand-deep-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growth with Purpose</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    Your success is our goal. We focus on solutions that not only bring visibility but also foster sustainable, meaningful growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={visibleSections.mission ? 'animate-fade-in-left animation-delay-300' : 'opacity-0'}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple rounded-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-brand-blue rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={(el) => (sectionRefs.current[3] = el)} 
        id="team" 
        className="section-padding"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`heading-lg mb-4 ${visibleSections.team ? 'animate-fade-in' : 'opacity-0'}`}>
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className={`text-lg text-gray-600 dark:text-gray-300 ${visibleSections.team ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
              Our talented team of marketing experts brings diverse skills and experiences 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`group ${visibleSections.team ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${200 * index}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin} 
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition-all flex items-center justify-center text-white"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a 
                            href={member.social.twitter} 
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition-all flex items-center justify-center text-white"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-brand-blue font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Partner with a team that understands your vision and knows how to turn it into results. Let’s build something impactful—together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
