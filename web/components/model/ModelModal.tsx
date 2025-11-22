import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  MapPin,
} from "lucide-react";
import { useState } from "react";
// import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from "../ui/button";
import Image from "next/image";
import { IModel } from "@/http/model/model.interface";

interface ModelModalProps {
  model: IModel | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ModelModal({ model, isOpen, onClose }: ModelModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!model) return null;

  const portfolioImages = model.imagens;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--black-deep)]/95 backdrop-blur-xl overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-[var(--white-pearl)] hover:text-[var(--gold-metallic)] transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="glass-gold rounded-lg overflow-hidden gold-glow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Carousel */}
                <div className="relative bg-[var(--black-deep)] aspect-[3/4] lg:aspect-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Image
                        width={600}
                        height={800}
                        src={portfolioImages[currentImageIndex]}
                        alt={`${model.name} - ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-deep)]/50 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Controls */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass-gold p-3 rounded-full hover:bg-[var(--gold-metallic)]/20 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-[var(--gold-metallic)]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass-gold p-3 rounded-full hover:bg-[var(--gold-metallic)]/20 transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-[var(--gold-metallic)]" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {portfolioImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-[var(--gold-metallic)] w-8"
                            : "bg-[var(--white-pearl)]/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side - Info */}
                <div className="p-8 bg-gradient-to-br from-[var(--black-deep)]/80 to-[var(--gray-smoke)]/80">
                  <h2 className="font-display text-4xl text-[var(--white-pearl)] mb-2">
                    {model.name}
                  </h2>
                  <div className="space-y-4 mb-6">
                    <p>
                      <span className="font-semibold text-amber-500">
                        Nacionalidade:
                      </span>{" "}
                      {model.nationality}
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Cidade:
                      </span>{" "}
                      {model.city}
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Altura:
                      </span>{" "}
                      {model.measure.height} cm
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Peso:
                      </span>{" "}
                      {model.measure.weight} kg
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        mannequin:
                      </span>{" "}
                      {model.measure.mannequin} cm
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Sapato:
                      </span>{" "}
                      {model.measure.shoe} cm
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Categorias:
                      </span>{" "}
                      {model.additionalInfo.categories.join(", ")}
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Disponível para:
                      </span>{" "}
                      {model.availableFor?.join(", ") || "N/A"}
                    </p>

                    <p>
                      <span className="font-semibold text-amber-500">
                        Instagram:
                      </span>{" "}
                      {model.socialMedia?.instagram || "N/A"}
                    </p>

                    {/* BIO */}
                    <div className="mt-4 border-t p-4 border-[var(--gold-metallic)] pt-4">
                      <p className="text-[var(--white-pearl)]">
                        {model.bio || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-[var(--gold-metallic)] to-[var(--gold-amber)] text-black hover:shadow-lg hover:shadow-[var(--gold-metallic)]/50 transition-all duration-300 gradient-animated">
                    Agendar Modelo
                  </Button>
                  <div className="my-4" />
                  <Button className="w-full border border-amber-100 bg-transparent hover:shadow-lg transition-all duration-300 gradient-animated text-amber-100 hover:bg-amber-100 hover:text-black">
                    Portfólio Completo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
