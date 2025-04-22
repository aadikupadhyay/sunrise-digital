
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  delay?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Format number with commas and decimals
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
      .format(num)
      .replace(/,/g, separator);
  };

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

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      
      let startTime: number;
      let frame: number = 0;
      const startValue = 0;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      setTimeout(() => {
        frame = requestAnimationFrame(animate);
      }, delay);
      
      return () => cancelAnimationFrame(frame);
    }
  }, [isVisible, hasAnimated, end, duration, delay]);

  return (
    <span ref={countRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default CountUp;
