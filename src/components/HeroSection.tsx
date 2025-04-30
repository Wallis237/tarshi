
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

const HeroSection = () => {
  // Add a timestamp to bust cache
  const cacheBuster = `?v=${Date.now()}`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 px-4 bg-gradient-to-br from-white to-portfolio-light/30"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <AnimationWrapper className="flex-1" delay={200}>
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm Tarshi Williams
                <span className="block mt-2 gradient-text">
                  Creative Developer & Designer
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 md:text-xl max-w-lg">
                I blend software development, web design, photography, and graphic design
                to create compelling digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white"
                  asChild
                >
                  <a href="#contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper className="flex-1 flex justify-center" delay={400}>
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-portfolio-primary/20 rounded-full -translate-x-4 -translate-y-4"></div>
              <img
                src={`/lovable-uploads/wallisphocap.jpg${cacheBuster}`}
                alt="Tarshi Williams"
                className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-portfolio-secondary/30 rounded-full"></div>
              <div className="absolute -top-2 -right-8 w-16 h-16 bg-portfolio-primary/30 rounded-full"></div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
