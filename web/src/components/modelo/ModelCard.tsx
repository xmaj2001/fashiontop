// import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

interface ModelCardProps {
  id: string;
  name: string;
  image: string;
  height: number;
  nationality: string;
  isAvailable: boolean;
}

export default function ModelCard({ id, name, image, height, nationality, isAvailable }: ModelCardProps) {
  return (
    <a  href={`/model/${id}`}>
      <a data-testid={`link-model-${id}`}>
        <div className="group relative overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[3/4] relative overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1" data-testid={`text-model-name-${id}`}>
                  {name}
                </h3>
                <p className="text-white/70 text-sm">
                  {height}cm • {nationality}
                </p>
              </div>
              
              <Badge
                variant={isAvailable ? "default" : "secondary"}
                className={cn(
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  isAvailable 
                    ? "bg-green-500/80 text-white border-green-400/50" 
                    : "bg-gray-500/80 text-white border-gray-400/50"
                )}
                data-testid={`badge-availability-${id}`}
              >
                {isAvailable ? 'Available' : 'Booked'}
              </Badge>
            </div>
          </div>
        </div>
      </a>
    </a>
  );
}
