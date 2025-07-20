
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Define social links in a separate object that can be exported
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/tarshiwilliams",
  github: "https://github.com/Wallis237",
  facebook: "https://www.facebook.com/tarshi.william",
  instagram: "https://www.instagram.com/tarshiwilliams?igsh=YzkxczVjY29pcm42"
};

const Index = () => {
  useEffect(() => {
    // Enhanced scroll animations activation
    const handleAnimateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run on initial load
    handleAnimateOnScroll();
    
    // Add scroll event listener with throttling for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleAnimateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/856c7f5f-9e7f-41e1-b11b-f83934a4a06d.png',
      '/lovable-uploads/ca5a9825-0c31-454e-953e-a5497d0b78ac.png'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
