import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroProps {
  slides: HeroSlide[];
}

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-800">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px]"
              data-testid="button-browse-models"
            >
              Ver Modelos
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 min-w-[200px]"
              data-testid="button-contact"
            >
              Entrar em Contato
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/40'
            }`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
