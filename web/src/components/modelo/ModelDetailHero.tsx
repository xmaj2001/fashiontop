import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassmorphismCard from './GlassmorphismCard';
import { cn } from '@/lib/utils';

interface ModelDetails {
  name: string;
  height: number;
  weight: number;
  hairColor: string;
  bust: string;
  eyes: string;
  nationality: string;
  images: string[];
}

interface ModelDetailHeroProps {
  model: ModelDetails;
}

export default function ModelDetailHero({ model }: ModelDetailHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || model.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % model.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, model.images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + model.images.length) % model.images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % model.images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {model.images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={image}
            alt={`${model.name} - Photo ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20"
        onClick={goToPrevious}
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20"
        onClick={goToNext}
        data-testid="button-hero-next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <GlassmorphismCard className="absolute bottom-8 left-8 p-6 max-w-md space-y-4 animate-slide-up">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2" data-testid="text-model-name">
            {model.name}
          </h1>
          <p className="text-white/70 text-sm">{model.nationality}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-white/60 text-xs mb-1">Height</p>
            <p className="text-white font-medium">{model.height} cm</p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">Weight</p>
            <p className="text-white font-medium">{model.weight} kg</p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">Hair</p>
            <p className="text-white font-medium">{model.hairColor}</p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">Eyes</p>
            <p className="text-white font-medium">{model.eyes}</p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">Bust/Chest</p>
            <p className="text-white font-medium">{model.bust}</p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            data-testid="button-request-quote"
            onClick={() => console.log('Request quote clicked')}
          >
            <Send className="h-4 w-4 mr-2" />
            Request Quote
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            data-testid="button-add-favorite"
            onClick={() => console.log('Add to favorites clicked')}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </GlassmorphismCard>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {model.images.map((_, index) => (
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
            data-testid={`button-hero-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
