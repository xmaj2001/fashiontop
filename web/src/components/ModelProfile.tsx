import { useState } from 'react';
import { X, Download, MessageCircle, Ruler, Weight, Award, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';


interface ModelProfileProps {
  model: ModelProfileData;
  onClose: () => void;
}

export default function ModelProfile({ model, onClose }: ModelProfileProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % model.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + model.images.length) % model.images.length);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Olá! Gostaria de contratar ${model.name} para um evento.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="h-full flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}>
        <div className="md:w-3/5 relative bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={model.images[currentImageIndex]}
              alt={model.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="max-h-full max-w-full object-contain"
              data-testid={`img-model-${currentImageIndex}`}
            />
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
            {model.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'w-6 bg-white' : 'bg-white/40'
                }`}
                data-testid={`button-thumbnail-${index}`}
              />
            ))}
          </div>

          {model.images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white"
                onClick={prevImage}
                data-testid="button-prev-image"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white"
                onClick={nextImage}
                data-testid="button-next-image"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>

        <div className="md:w-2/5 bg-background/95 backdrop-blur-2xl overflow-y-auto">
          <div className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border p-4 flex items-center justify-between z-10">
            <h2 className="font-serif text-2xl font-normal text-foreground">{model.name}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              data-testid="button-close-profile"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-card rounded-md border border-card-border">
                <Ruler className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Altura</p>
                  <p className="text-lg font-medium text-foreground" data-testid="text-height">{model.height} cm</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-md border border-card-border">
                <Weight className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Peso</p>
                  <p className="text-lg font-medium text-foreground" data-testid="text-weight">{model.weight} kg</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-md border border-card-border">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Experiência</p>
                  <p className="text-sm font-medium text-foreground" data-testid="text-experience">{model.experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-md border border-card-border">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Disponibilidade</p>
                  <p className="text-sm font-medium text-foreground" data-testid="text-availability">{model.availability}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2 uppercase tracking-wide">
                Medidas
              </h3>
              <p className="text-foreground" data-testid="text-measurements">{model.measurements}</p>
            </div>

            <div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2 uppercase tracking-wide">
                Sobre
              </h3>
              <p className="text-muted-foreground leading-relaxed">{model.bio}</p>
            </div>

            <div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                Categorias
              </h3>
              <div className="flex flex-wrap gap-2">
                {model.categories.map((cat) => (
                  <Badge key={cat} variant="secondary">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {model.portfolio && (
                <Button
                  variant="outline"
                  className="flex-1"
                  data-testid="button-download-portfolio"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Portfólio
                </Button>
              )}
              <Button
                className="flex-1 bg-[#25D366] hover:bg-[#22c55e] text-white"
                onClick={handleWhatsAppContact}
                data-testid="button-whatsapp-contact"
              >
                <SiWhatsapp className="w-5 h-5 mr-2" />
                Contratar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
