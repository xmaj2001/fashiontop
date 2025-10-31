import { useState } from 'react';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  event?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = Array.from(new Set(items.map(item => item.event).filter(Boolean)));
  
  const filteredItems = selectedEvent
    ? items.filter(item => item.event === selectedEvent)
    : items;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Portfolio</h2>
        
        {events.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge
              variant={selectedEvent === null ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedEvent(null)}
              data-testid="badge-filter-all"
            >
              All
            </Badge>
            {events.map((event) => (
              <Badge
                key={event}
                variant={selectedEvent === event ? "default" : "secondary"}
                className="cursor-pointer bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => setSelectedEvent(event!)}
                data-testid={`badge-filter-${event?.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {event}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-md group cursor-pointer hover-elevate active-elevate-2 transition-transform hover:scale-[1.02]"
            onClick={() => console.log('Open media:', item.id)}
            data-testid={`media-item-${item.id}`}
          >
            <img
              src={item.url}
              alt={`Media ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-6 w-6 text-white fill-white" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}
