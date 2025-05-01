
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { socialLinks } from "../pages/Index";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="font-playfair text-2xl font-bold text-portfolio-primary"
            >
              Tarshi<span className="text-portfolio-secondary">Williams</span>
            </a>
            <p className="mt-2 text-gray-600 max-w-md">
              Creative developer and designer crafting exceptional digital experiences
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href={http://www.linkedin.com/in/tarshiwilliams}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-portfolio-light hover:text-portfolio-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={https://github.com/Wallis237}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-portfolio-light hover:text-portfolio-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={https://www.facebook.com/tarshi.william}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-portfolio-light hover:text-portfolio-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={https://www.instagram.com/tarshiwilliams?igsh=YzkxczVjY29pcm42}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-portfolio-light hover:text-portfolio-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Tarshi Williams. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#home" className="text-sm text-gray-500 hover:text-portfolio-primary">Home</a>
            <a href="#about" className="text-sm text-gray-500 hover:text-portfolio-primary">About</a>
            <a href="#skills" className="text-sm text-gray-500 hover:text-portfolio-primary">Skills</a>
            <a href="#projects" className="text-sm text-gray-500 hover:text-portfolio-primary">Projects</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-portfolio-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
