import { motion } from "motion/react";
// import { ImageWithFallback } from './figma/ImageWithFallback';
import { Eye } from "lucide-react";
import Image from "next/image";
import { IModel } from "@/http/model/model.interface";



interface ModelCardProps {
  model: IModel;
  onClick: () => void;
}

export function ModelCard({ model, onClick }: ModelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass-gold overflow-hidden gold-glow-hover">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            width={400}
            height={300}
            src={model.imagens[0]}
            alt={model.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-[var(--black-deep)] via-[var(--black-deep)]/70 to-transparent flex items-center justify-center"
          >
            <div className="text-center">
              <Eye className="w-12 h-12 text-[var(--gold-metallic)] mx-auto mb-2 " />
              <p className="text-[var(--white-pearl)] font-body">
                Ver Detalhes
              </p>
            </div>
          </motion.div>
        </div>

        <div className="p-4 bg-gradient-to-b from-transparent to-[var(--black-deep)]/30">
          <h3 className="font-display text-xl text-[var(--white-pearl)] mb-1">
            {model.name}
          </h3>
          <p className="text-[var(--gold-metallic)] font-body text-sm mb-2">
            {model.additionalInfo.categories.join(", ")}
          </p>
          <div className="flex justify-between text-xs text-[var(--white-pearl)]/70 font-body">
            <span>{model.measure.height} cm</span>
            <span>{model.measure.weight} kg</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
