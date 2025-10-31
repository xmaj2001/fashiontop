import { Calendar } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface EventTimelineProps {
  events: Event[];
}

export default function EventTimeline({ events }: EventTimelineProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Event History</h2>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative pl-8 pb-6 border-l-2 border-white/20 last:pb-0"
            data-testid={`event-${event.id}`}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-white/20" />
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <h3 className="text-white font-semibold text-lg">{event.title}</h3>
              <p className="text-white/70 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
