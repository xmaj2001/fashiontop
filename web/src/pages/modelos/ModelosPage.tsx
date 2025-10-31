import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

import model1 from '../../assets/Female_model_headshot_portrait_46fd5fdb.png'
import model2 from '../../assets/Male_model_professional_portrait_5413a58d.png'
import model3 from '../../assets/Female_model_full_body_21051402.png'
import model4 from '../../assets/Diverse_model_professional_shot_35a0f71f.png'

import editorial1 from '../../assets/Female_model_headshot_portrait_46fd5fdb.png'
import editorial2 from '../../assets/Female_model_full_body_21051402.png'

import AnimatedGradientBackground from '@/components/modelo/AnimatedGradientBackground'
import Navigation from '@/components/modelo/Navigation'
import FeaturedCarousel from '@/components/modelo/FeaturedCarousel'
import FilterPanel from '@/components/modelo/FilterPanel'
import ModelCard from '@/components/modelo/ModelCard'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function ModelosPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const featuredModels = [
    { id: '1', name: 'Isabella Rodriguez', image: editorial1 },
    { id: '2', name: 'Marcus Chen', image: editorial2 },
    { id: '3', name: 'Sofia Anderson', image: model3 },
  ]

  const models = [
    {
      id: '1',
      name: 'Isabella Rodriguez',
      image: model1,
      height: 175,
      nationality: 'Brazil',
      isAvailable: true,
    },
    {
      id: '2',
      name: 'Marcus Chen',
      image: model2,
      height: 185,
      nationality: 'China',
      isAvailable: true,
    },
    {
      id: '3',
      name: 'Sofia Anderson',
      image: model3,
      height: 178,
      nationality: 'Sweden',
      isAvailable: false,
    },
    {
      id: '4',
      name: 'James Wilson',
      image: model4,
      height: 188,
      nationality: 'United Kingdom',
      isAvailable: true,
    },
    {
      id: '5',
      name: 'Emma Laurent',
      image: editorial1,
      height: 172,
      nationality: 'France',
      isAvailable: true,
    },
    {
      id: '6',
      name: 'Alessandro Rossi',
      image: editorial2,
      height: 182,
      nationality: 'Italy',
      isAvailable: false,
    },
    {
      id: '7',
      name: 'Yuki Tanaka',
      image: model1,
      height: 170,
      nationality: 'Japan',
      isAvailable: true,
    },
    {
      id: '8',
      name: 'Carlos Mendez',
      image: model2,
      height: 183,
      nationality: 'Spain',
      isAvailable: true,
    },
  ]

  return (
    <div className="relative min-h-screen">
      <AnimatedGradientBackground />

      {/* <Navigation /> */}

      <FeaturedCarousel models={featuredModels} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Our Models</h2>
            <p className="text-white/70">
              Discover exceptional talent for your next project
            </p>
          </div>

          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden bg-white/10 border-white/20 text-white hover:bg-white/20"
                data-testid="button-open-filters"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black/90 backdrop-blur-xl border-white/10 p-6"
            >
              <FilterPanel />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <FilterPanel />
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model) => (
                <ModelCard key={model.id} {...model} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
