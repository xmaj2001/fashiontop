import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeaturedModel {
  id: string;
  name: string;
  image: string;
}

interface FeaturedCarouselProps {
  models: FeaturedModel[];
}

export default function FeaturedCarousel({ models }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || models.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, models.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
    setIsAutoPlaying(false);
  };

  if (models.length === 0) return null;

  return (
    <div 
      className="relative h-[60vh] min-h-[500px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {models.map((model, index) => (
        <div
          key={model.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={model.image}
            alt={model.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-3">
                Featured
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {model.name}
              </h2>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20"
        onClick={goToPrevious}
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20"
        onClick={goToNext}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {models.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            )}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
