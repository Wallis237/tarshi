import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";
import StaggeredAnimationGroup from "./StaggeredAnimationGroup";

const AboutSection = () => {
  // Add a timestamp to bust cache
  const cacheBuster = `?v=${Date.now()}`;
  
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimationWrapper animation="fadeUp" delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={`/lovable-uploads/ca5a9825-0c31-454e-953e-a5497d0b78ac.png${cacheBuster}`}
                alt="About Abubakar"
                className="relative rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500 border border-border/20"
              />
              {/* Modern overlay element */}
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 border border-border/20">
                <div className="text-sm font-medium text-foreground">• About Landin</div>
              </div>
            </div>
          </AnimationWrapper>

          <div className="space-y-8">
            <StaggeredAnimationGroup animation="fadeUp" staggerDelay={150} baseDelay={300}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building Stronger Brands
                  <span className="block text-muted-foreground/70">
                    Creating Impressions!
                  </span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Delivering high-quality, on-demand designs with precision.
                Elevate your brand effortlessly, one snap at a time.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">From $0 to $500,000 in revenue.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">47% growth in new customers.</span>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  asChild
                >
                  <a href="#contact">View About Landin</a>
                </Button>
                
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">200+ Agencies Rated</span>
                </div>
              </div>
            </StaggeredAnimationGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
