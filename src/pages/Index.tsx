
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Add scroll animations activation
  useEffect(() => {
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
    
    // Add scroll event listener
    window.addEventListener('scroll', handleAnimateOnScroll);
    
    // Define social media links for global use
    window.socialLinks = {
      linkedin: "https://www.linkedin.com/in/tarshiwilliams",
      github: "https://github.com/Wallis237",
      facebook: "https://www.facebook.com/tarshi.william",
      instagram: "https://www.instagram.com/tarshiwilliams?igsh=YzkxczVjY29pcm42"
    };
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleAnimateOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full">
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
