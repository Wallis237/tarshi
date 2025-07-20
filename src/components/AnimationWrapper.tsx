
import React, { useEffect, useRef } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'fadeUpScale';
  trigger?: 'scroll' | 'load';
  threshold?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fadeUp',
  trigger = 'scroll',
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial animation class
    element.classList.add(`animate-${animation}-initial`);

    if (trigger === 'load') {
      // Trigger animation immediately with delay
      setTimeout(() => {
        element.classList.remove(`animate-${animation}-initial`);
        element.classList.add(`animate-${animation}-visible`);
      }, delay);
      return;
    }

    // Scroll-based animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove(`animate-${animation}-initial`);
              entry.target.classList.add(`animate-${animation}-visible`);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, animation, trigger, threshold]);

  return (
    <div ref={elementRef} className={`animation-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
