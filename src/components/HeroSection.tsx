
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

const HeroSection = () => {
  // Add a timestamp to bust cache
  const cacheBuster = `?v=${Date.now()}`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 px-4 bg-gradient-to-br from-white via-portfolio-light/10 to-portfolio-light/30 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-primary/5 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-portfolio-secondary/10 rounded-full animate-float-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-portfolio-primary/8 rounded-full animate-float-fast"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <AnimationWrapper animation="slideLeft" trigger="load" delay={300}>
            <div className="flex-1 space-y-6 max-w-2xl">
              <AnimationWrapper animation="fadeUp" trigger="load" delay={500}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm Tarshi Williams
                  <span className="block mt-2 gradient-text-animated">
                    Creative Developer & Designer
                  </span>
                </h1>
              </AnimationWrapper>

              <AnimationWrapper animation="fadeUp" trigger="load" delay={700}>
                <p className="text-lg text-gray-600 md:text-xl max-w-lg leading-relaxed">
                  I blend software development, web design, photography, and graphic design
                  to create compelling digital experiences.
                </p>
              </AnimationWrapper>

              <AnimationWrapper animation="fadeUp" trigger="load" delay={900}>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white transform hover:scale-105 hover:shadow-lg hover:shadow-portfolio-primary/25 transition-all duration-300"
                    asChild
                  >
                    <a href="#contact">
                      Get In Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>

                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href="#projects">View Projects</a>
                  </Button>
                </div>
              </AnimationWrapper>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="scaleIn" trigger="load" delay={400}>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square group">
                <div className="absolute inset-0 bg-portfolio-primary/20 rounded-full -translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 ease-out"></div>
                <img
                  src={`/lovable-uploads/856c7f5f-9e7f-41e1-b11b-f83934a4a06d.png${cacheBuster}`}
                  alt="Tarshi Williams"
                  className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl hover:shadow-2xl transition-shadow duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-portfolio-secondary/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute -top-2 -right-8 w-16 h-16 bg-portfolio-primary/30 rounded-full animate-pulse-medium"></div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
