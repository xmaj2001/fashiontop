import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

export interface FilterOptions {
  categories: string[];
  heightRange: [number, number];
  experience: string[];
}

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClose?: () => void;
}

export default function FilterSidebar({ filters, onFiltersChange, onClose }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const categories = ['Videoclip', 'Shows', 'Editorial', 'Comercial', 'Passarela', 'Eventos'];
  const experienceLevels = ['Iniciante', 'Intermediário', 'Profissional', 'Elite'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...localFilters.categories, category]
      : localFilters.categories.filter((c) => c !== category);
    
    const newFilters = { ...localFilters, categories: newCategories };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleExperienceChange = (exp: string, checked: boolean) => {
    const newExperience = checked
      ? [...localFilters.experience, exp]
      : localFilters.experience.filter((e) => e !== exp);
    
    const newFilters = { ...localFilters, experience: newExperience };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleHeightChange = (value: number[]) => {
    const newFilters = { ...localFilters, heightRange: value as [number, number] };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      categories: [],
      heightRange: [150, 200] as [number, number],
      experience: [],
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  const activeFilterCount = localFilters.categories.length + localFilters.experience.length;

  return (
    <div className="h-full bg-card border-r border-card-border p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-foreground" />
          <h2 className="font-mono text-lg font-medium text-foreground">Filtros</h2>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">{activeFilterCount}</Badge>
          )}
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            data-testid="button-close-filters"
          >
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-mono text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
            Categorias
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={localFilters.categories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  data-testid={`checkbox-category-${category.toLowerCase()}`}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
            Altura (cm)
          </h3>
          <div className="space-y-4">
            <Slider
              value={localFilters.heightRange}
              onValueChange={handleHeightChange}
              min={150}
              max={200}
              step={1}
              className="w-full"
              data-testid="slider-height"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span data-testid="text-height-min">{localFilters.heightRange[0]} cm</span>
              <span data-testid="text-height-max">{localFilters.heightRange[1]} cm</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
            Experiência
          </h3>
          <div className="space-y-2">
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center gap-2">
                <Checkbox
                  id={`exp-${level}`}
                  checked={localFilters.experience.includes(level)}
                  onCheckedChange={(checked) => handleExperienceChange(level, checked as boolean)}
                  data-testid={`checkbox-experience-${level.toLowerCase()}`}
                />
                <Label
                  htmlFor={`exp-${level}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={clearFilters}
          data-testid="button-clear-filters"
        >
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
}
