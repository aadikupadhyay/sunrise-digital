
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Pankaj Butola",
      position: "Owner & Founder",
      company: "Himgiri Adventure Camps",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "As a small business owner, I was overwhelmed trying to figure out digital marketing. Sunrise Digitals handled everything—from branding to launching my first ad campaign. The professionalism, patience, and real results blew me away.",
      rating: 5
    },
    {
      id: 2,
      name: "Ekansh Suddan",
      position: "CEO & Owner",
      company: "RCC Services",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "They really took the time to understand my business and goals. My website went from outdated to outstanding, and I started seeing new leads within the first month. Sunrise Digitals isn’t just a service provider—they’re a growth partner.",
      rating: 4
    },
    {
      id: 3,
      name: "Ambesh Panth",
      position: "Content Manager & CEO",
      company: "Discover Uttarakhand",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "I didn’t even know where to begin with SEO or social media. Sunrise Digitals explained everything clearly and gave me a full strategy that actually fits my budget. My online presence has never looked better!",
      rating: 5
    },
    {
      id: 4,
      name: "Rajat",
      position: "Operations Manager",
      company: "CBSE Blueprint",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      quote: "Everything was seamless—from my logo design to running ads on Google and Instagram. The team is responsive, talented, and incredibly easy to work with. Highly recommend them to any small business!",
      rating: 5
    }
  ];

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

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('next');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('prev');
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`heading-lg mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Our clients are <span className="gradient-text">at the heart of everything we do</span>
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          From first-time entrepreneurs to growing local businesses, we’ve helped clients turn digital chaos into clarity—and their kind words speak volumes. We’re proud to be the trusted partner behind their growth, delivering results that don’t just meet expectations but redefine them.
          </p>
        </div>

        <div className={`relative ${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
          <div className="relative overflow-hidden">
            <div className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'transform' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
                        <p className="text-brand-blue font-medium text-sm">{testimonial.company}</p>
                        <div className="flex mt-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star 
                              key={index}
                              className={`h-4 w-4 ${index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="mb-6">
                          <svg className="h-10 w-10 text-brand-purple/30" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6">
                          {testimonial.quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setIsAnimating(true);
                      setDirection(index > currentIndex ? 'next' : 'prev');
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index ? 'bg-brand-blue w-8' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="rounded-full"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Testimonials;
