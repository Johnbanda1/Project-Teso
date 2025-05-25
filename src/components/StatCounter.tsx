import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        setIsVisible(true);
        hasAnimated.current = true;
      }
    }, { threshold: 0.1 });

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
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const step = 15;
    
    const updateCount = () => {
      const progress = Math.min(1, start / duration);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * value));
      
      if (progress < 1) {
        start += step;
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isVisible, value]);

  return (
    <div 
      ref={countRef}
      className="text-center py-6 border-r border-gray-700 last:border-r-0"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-lg">{label}</div>
    </div>
  );
};

export default StatCounter;