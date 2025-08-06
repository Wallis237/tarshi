
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

const HeroSection = () => {
  // Add a timestamp to bust cache
  const cacheBuster = `?v=${Date.now()}`;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-card"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <AnimationWrapper animation="fadeUp" trigger="load" delay={200}>
              <div className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-6">
                <span className="text-xs font-bold mr-2">NEW</span>
                No. 1 Studio of 2025
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fadeUp" trigger="load" delay={300}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Premium Agency
                <span className="block text-muted-foreground/70">
                  for Creatives.
                </span>
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fadeUp" trigger="load" delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                We specialize in crafting unique digital presence 
                that help businesses grow and stand out in their industries.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fadeUp" trigger="load" delay={500}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  asChild
                >
                  <a href="#contact">
                    Connect With Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-card/50 border border-border hover:bg-muted text-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="#projects">What is Landin?</a>
                </Button>
              </div>
            </AnimationWrapper>
            
            {/* Client logos/stats */}
            <AnimationWrapper animation="fadeUp" trigger="load" delay={600}>
              <div className="flex items-center gap-8 pt-8 opacity-60">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-10 bg-muted rounded flex items-center justify-center text-xs font-bold border border-border/20">
                    LOREM
                  </div>
                  <div className="w-16 h-10 bg-muted rounded flex items-center justify-center text-xs font-bold border border-border/20">
                    IPSUM
                  </div>
                  <div className="w-16 h-10 bg-muted rounded flex items-center justify-center text-xs font-bold border border-border/20">
                    DOLOR
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Image with modern styling */}
          <AnimationWrapper animation="scaleIn" trigger="load" delay={700}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative">
                <img
                  src={`/lovable-uploads/856c7f5f-9e7f-41e1-b11b-f83934a4a06d.png${cacheBuster}`}
                  alt="Abubakar - Full Stack Developer"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500 border border-border/20"
                />
                {/* Floating avatar indicator */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
