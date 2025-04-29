
import React, { useEffect, useRef } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
