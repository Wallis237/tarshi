
import React, { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'fadeUpScale';
  trigger?: 'scroll' | 'load';
  threshold?: number;
  stagger?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fadeUp',
  trigger = 'scroll',
  threshold = 0.1,
  stagger = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    // Add initial animation class
    element.classList.add(`animate-${animation}-initial`);

    if (trigger === 'load') {
      // Trigger animation immediately with delay
      const timeoutId = setTimeout(() => {
        if (!hasAnimated) {
          element.classList.remove(`animate-${animation}-initial`);
          element.classList.add(`animate-${animation}-visible`);
          setHasAnimated(true);
        }
      }, delay + stagger);
      
      return () => clearTimeout(timeoutId);
    }

    // Enhanced scroll-based animation with once-only trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            const timeoutId = setTimeout(() => {
              if (!hasAnimated) {
                entry.target.classList.remove(`animate-${animation}-initial`);
                entry.target.classList.add(`animate-${animation}-visible`);
                setHasAnimated(true);
                observer.unobserve(entry.target);
              }
            }, delay + stagger);
            
            // Store timeout ID to clear if component unmounts
            (entry.target as any).animationTimeout = timeoutId;
          }
        });
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
        if ((element as any).animationTimeout) {
          clearTimeout((element as any).animationTimeout);
        }
      }
    };
  }, [delay, animation, trigger, threshold, stagger, hasAnimated]);

  return (
    <div ref={elementRef} className={`animation-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
