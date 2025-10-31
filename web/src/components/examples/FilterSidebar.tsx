import { useState } from 'react';
import FilterSidebar, { FilterOptions } from '../FilterSidebar';

export default function FilterSidebarExample() {
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    heightRange: [150, 200],
    experience: []
  });

  return (
    <div className="h-screen w-80">
      <FilterSidebar 
        filters={filters} 
        onFiltersChange={(newFilters) => {
          setFilters(newFilters);
          console.log('Filters updated:', newFilters);
        }} 
      />
    </div>
  );
}
