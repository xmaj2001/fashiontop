import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import GlassmorphismCard from './GlassmorphismCard';

interface FilterPanelProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const hairColors = ['Blonde', 'Brunette', 'Black', 'Red', 'Other'];
  const eventTypes = ['Fashion Week', 'Editorial', 'Commercial', 'Runway', 'Campaign'];

  return (
    <GlassmorphismCard className="p-6 space-y-6">
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">Filters</h3>
      </div>

      <div className="space-y-2">
        <Label className="text-white text-sm">Search by Name</Label>
        <Input
          type="text"
          placeholder="Model name..."
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          data-testid="input-name-filter"
          onChange={(e) => console.log('Name filter:', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-white text-sm">Height Range (cm)</Label>
        <div className="pt-2">
          <Slider
            defaultValue={[160, 190]}
            max={200}
            min={150}
            step={1}
            className="w-full"
            onValueChange={(value) => console.log('Height range:', value)}
            data-testid="slider-height"
          />
        </div>
        <div className="flex justify-between text-xs text-white/60">
          <span>150cm</span>
          <span>200cm</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-white text-sm">Nationality</Label>
        <Select onValueChange={(value) => console.log('Nationality:', value)}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white" data-testid="select-nationality">
            <SelectValue placeholder="Select nationality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="brazil">Brazil</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="france">France</SelectItem>
            <SelectItem value="italy">Italy</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-white text-sm">Hair Color</Label>
        <div className="flex flex-wrap gap-2">
          {hairColors.map((color) => (
            <Badge
              key={color}
              variant="secondary"
              className="cursor-pointer bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => console.log('Hair color:', color)}
              data-testid={`badge-hair-${color.toLowerCase()}`}
            >
              {color}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-white text-sm">Event Type</Label>
        <div className="flex flex-wrap gap-2">
          {eventTypes.map((event) => (
            <Badge
              key={event}
              variant="secondary"
              className="cursor-pointer bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => console.log('Event type:', event)}
              data-testid={`badge-event-${event.toLowerCase().replace(' ', '-')}`}
            >
              {event}
            </Badge>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <button
          className="text-white/70 hover:text-white text-sm flex items-center gap-1"
          onClick={() => console.log('Clear filters')}
          data-testid="button-clear-filters"
        >
          <X className="h-4 w-4" />
          Clear All Filters
        </button>
      </div>
    </GlassmorphismCard>
  );
}
