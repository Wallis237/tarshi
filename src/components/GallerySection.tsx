
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
    image: `/lovable-uploads/355fa138-0d54-4077-ae28-5cca71cde6d5.png${cacheBuster}`,
  },
  {
    id: 3,
    title: "Brand Logo Design",
    category: "Graphic Design",
    image: `/lovable-uploads/3028df71-0167-4088-a78f-40507a4ea535.png${cacheBuster}`,
  },
  {
    id: 4,
    title: "Website Mockup",
    category: "Web Design",
    image: `/lovable-uploads/033930a6-c382-4cc3-ba0e-9f3e9c7bfd31.png${cacheBuster}`,
  },
  {
    id: 5,
    title: "Portrait Photography",
    category: "Photography",
    image: `/lovable-uploads/bfecc9f4-5d72-4357-8d01-57d515ca89b0.png${cacheBuster}`,
  },
  {
    id: 6,
    title: "Portrait Photography",
    category: "Photography",
    image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80${cacheBuster}`,
  },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Creative <span className="gradient-text">Gallery</span>
          </h2>
        </AnimationWrapper>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <AnimationWrapper key={item.id} delay={200 + index * 100}>
              <Card 
                className="overflow-hidden cursor-pointer card-hover"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative w-full pt-[75%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
      
      {/* Lightbox Dialog */}
      <Dialog 
        open={selectedItem !== null} 
        onOpenChange={(open) => !open && setSelectedItem(null)}
      >
        <DialogContent className="max-w-4xl w-[90vw] p-1 bg-black">
          {selectedItem && (
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
