import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Ruler,
  IdCard,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
// import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HeroImage {
  id: number;
  url: string;
  alt: string;
}

interface HeroModelCarouselProps {
  images: HeroImage[];
  modelName: string;
  location: string;
  measurements: {
    height: string;
    bust?: string;
    waist?: string;
    hips?: string;
  };
}

export function HeroModelCarousel({
  images,
  modelName,
  location,
  measurements,
}: HeroModelCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={1920}
            height={1080}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Model Info Card - Glassmorphism */}
      <motion.div
        className="absolute  bottom-8 left-24 md:bottom-12 md:left-55 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Name */}
        <motion.h1
          className="text-white text-3xl md:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {modelName}
        </motion.h1>

        <div className="">
          {/* <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gray-300">
              <IdCard size={16} />
              <span>Informacoes</span>
            </div>
            <div className="text-white">
              <span>
                <span className="text-amber-400">Categorias</span>:
                Modelo,Feminino,Senior
              </span>
              <br />
              <span>
                <span className="text-amber-400">Cor dos olhos</span>: Castanhos
              </span>
              <br />
              <span>
                <span className="text-amber-400">Tipo de Cabelo</span>: Liso
              </span>
              <br />
              <span>
                <span className="text-amber-400">Cor de Cabelo</span>: Loiro
              </span>
              <br />
              <span>
                <span className="text-amber-400">Data de Nascimento</span>:
                12/07/1964
              </span>
              <br />
              <span>
                <span className="text-amber-400">Nacionalidade</span>:
                Brasileira
              </span>
            </div>
          </motion.div> */}

          {/* Medidas */}
          {/* <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gray-300">
              <Ruler size={16} />
              <span>Medidas:</span>
            </div>
            <div className="text-white">
              <span>
                <span className="text-amber-400">Altura</span>: 167cm
              </span>
              <span className="mx-2">|</span>
              <span>
                <span className="text-amber-400">Peso</span>: 68kg
              </span>
              <span className="mx-2">|</span>
              <span>
                <span className="text-amber-400">Manequim</span>: 40x42 BR
              </span>
              <span className="mx-2">|</span>
              <span>
                <span className="text-amber-400">Sapato</span>: 39 BR
              </span>
            </div>
          </motion.div> */}
          {/* Location */}
          {/* <motion.div
            className="flex items-center gap-2 text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <MapPin size={18} />
            <span>{location}</span>
          </motion.div> */}

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {/* <Button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400/50 hover:from-amber-600 hover:to-amber-500 border-0">
              <User size={18} className="mr-2" />
              Ver meu perfil
            </Button> */}
            <Button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400/50 hover:from-amber-600 hover:to-amber-500 border-0">
              <Mail size={18} className="mr-2" />
              Contatar
            </Button> 
             <Button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm">
              <Phone size={18} className="mr-2" />
              Agendar
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
