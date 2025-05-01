
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

const AboutSection = () => {
  // Add a timestamp to bust cache
  const cacheBuster = `?v=${Date.now()}`;
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
        </AnimationWrapper>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimationWrapper delay={200}>
            <div className="relative">
              <div className="w-full aspect-square relative z-10">
                <img 
                  src={`public/lovable-uploads/856c7f5f-9e7f-41e1-b11b-f83934a4a06d.png${cacheBuster}`}
                  alt="Tarshi Williams working"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute left-0 bottom-0 w-2/3 h-2/3 -z-10 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20 rounded-lg -translate-x-8 translate-y-8"></div>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Creative Developer with a Passion for Design
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm Tarshi Williams, a multidisciplinary professional with expertise in software development, web development, photography, and graphic design. My approach combines technical precision with creative vision to deliver exceptional digital experiences.
                </p>
                
                <p>
                  With a foundation in diverse creative fields, I bring a unique perspective to every project. I'm passionate about creating cohesive solutions that not only function flawlessly but also engage and inspire users.
                </p>
                
                <p>
                  My skill set spans across multiple domains, allowing me to handle projects from concept to completion with a holistic understanding of both technical requirements and design principles.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  className="bg-portfolio-primary hover:bg-portfolio-primary/90"
                  asChild
                >
                  <a href="#contact">
                    Let's Work Together <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
