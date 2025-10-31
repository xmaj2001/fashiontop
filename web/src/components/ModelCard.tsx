import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';

import type { Model } from '@/lib/interfaces/model-profile-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



interface ModelCardProps {
  model: Model;
  onClick?: () => void;
}

export default function ModelCard({ model, onClick }: ModelCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-testid={`card-model-${model.id}`}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-card">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-serif text-2xl font-normal mb-1" data-testid={`text-name-${model.id}`}>
              {model.name}
            </h3>
            <p className="text-sm text-white/80 mb-2">
              {model.height} cm • {model.experience}
            </p>
            <div className="flex gap-2 flex-wrap">
              {model.categories.map((cat) => (
                <Badge 
                  key={cat} 
                  variant="secondary" 
                  className="bg-white/20 text-white backdrop-blur-sm text-xs"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className={`bg-white/20 backdrop-blur-md border-white/10 transition-all ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            } ${isFavorited ? 'text-red-500' : 'text-white'}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            data-testid={`button-favorite-${model.id}`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className={`bg-white/20 backdrop-blur-md border-white/10 text-white transition-all ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
            data-testid={`button-view-${model.id}`}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
