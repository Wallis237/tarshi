
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AnimationWrapper from './AnimationWrapper';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

// Add a timestamp to bust cache
const cacheBuster = `?v=${Date.now()}`;

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Nature Photography",
    category: "Photography",
    image: `https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80${cacheBuster}`,
  },
  {
    id: 2,
    title: "Landscape Photography",
    category: "Photography",
    image: `/lovable-uploads/e85332d2-9f30-40f5-9d44-f9bf93ebb34e.png`,
  },
  {
    id: 3,
    title: "Brand Logo Design",
    category: "Graphic Design",
    image: `/lovable-uploads/3028df71-0167-4088-a78f-40507a4ea535.png`,
  },
  {
    id: 4,
    title: "Website Mockup",
    category: "Web Design",
    image: `/lovable-uploads/355fa138-0d54-4077-ae28-5cca71cde6d5.png`,
  },
  {
    id: 5,
    title: "Portrait Photography",
    category: "Photography",
    image: `/lovable-uploads/66c21b98-7aa0-4de3-8254-61f261dc0c8d.png`,
  },
  {
    id: 6,
    title: "Portrait Photography",
    category: "Photography",
    image: `https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80`,
  },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Creative <span className="gradient-text">Gallery</span>
          </h2>
        </AnimationWrapper>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <AnimationWrapper key={item.id} animation="fadeUpScale" delay={200 + index * 100}>
              <Card 
                className="overflow-hidden cursor-pointer gallery-card-enhanced group"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative w-full pt-[75%] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-medium text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.title}</h3>
                    <p className="text-sm text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{item.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
      
      {/* Enhanced Lightbox Dialog */}
      <Dialog 
        open={selectedItem !== null} 
        onOpenChange={(open) => !open && setSelectedItem(null)}
      >
        <DialogContent className="max-w-4xl w-[90vw] p-2 bg-black/95 backdrop-blur-md border-white/10 animate-scale-in">
          {selectedItem && (
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg animate-fade-in"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white animate-slide-up">
                <h3 className="font-medium text-lg">{selectedItem.title}</h3>
                <p className="text-sm text-white/80">{selectedItem.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
