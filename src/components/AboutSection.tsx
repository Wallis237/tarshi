import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";
import StaggeredAnimationGroup from "./StaggeredAnimationGroup";

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
          <AnimationWrapper animation="slideLeft" delay={300}>
            <div className="relative">
              <div className="w-full aspect-square relative z-10">
                <img 
                  src={`/lovable-uploads/ca5a9825-0c31-454e-953e-a5497d0b78ac.png${cacheBuster}`}
                  alt="Tarshi Williams working"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute left-0 bottom-0 w-2/3 h-2/3 -z-10 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20 rounded-lg -translate-x-8 translate-y-8"></div>
            </div>
          </AnimationWrapper>
          
          <div className="space-y-6">
            <AnimationWrapper animation="fadeUp" delay={400}>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Creative Developer with a Passion for Design
              </h3>
            </AnimationWrapper>
            
            <StaggeredAnimationGroup
              animation="fadeUp"
              staggerDelay={150}
              baseDelay={500}
            >
              <p className="text-muted-foreground">
                I'm Tarshi Williams, a multidisciplinary professional with expertise in software development, web development, photography, and graphic design. My approach combines technical precision with creative vision to deliver exceptional digital experiences.
              </p>
              
              <p className="text-muted-foreground">
                With a foundation in diverse creative fields, I bring a unique perspective to every project. I'm passionate about creating cohesive solutions that not only function flawlessly but also engage and inspire users.
              </p>
              
              <p className="text-muted-foreground">
                My skill set spans across multiple domains, allowing me to handle projects from concept to completion with a holistic understanding of both technical requirements and design principles.
              </p>
            </StaggeredAnimationGroup>
            
            <AnimationWrapper animation="fadeUp" delay={900}>
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
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
