import { useRoute } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import AnimatedGradientBackground from '@/components/modelo/AnimatedGradientBackground';
import ModelDetailHero from '@/components/modelo/ModelDetailHero';
import MediaGallery from '@/components/modelo/MediaGallery';
import EventTimeline from '@/components/modelo/EventTimeline';
import AvailabilityCalendar from '@/components/modelo/AvailabilityCalendar';

import model1 from '../../assets/Female_model_headshot_portrait_46fd5fdb.png'
import model2 from '../../assets/Male_model_professional_portrait_5413a58d.png'
import model3 from '../../assets/Female_model_full_body_21051402.png'
import model4 from '../../assets/Diverse_model_professional_shot_35a0f71f.png'

export default function ModelDetailPage() {
  // const [match, params] = useRoute('/modelos/:id');

  const modelData = {
    name: 'Isabella Rodriguez',
    height: 175,
    weight: 55,
    hairColor: 'Brown',
    bust: '86cm',
    eyes: 'Brown',
    nationality: 'Brazil',
    images: [model1, model2, model3, model4],
  };

  const mediaItems = [
    { id: '1', type: 'photo' as const, url: model1, event: 'Fashion Week' },
    { id: '2', type: 'photo' as const, url: model2, event: 'Editorial' },
    { id: '3', type: 'video' as const, url: model3, event: 'Campaign' },
    { id: '4', type: 'photo' as const, url: model4, event: 'Fashion Week' },
    { id: '5', type: 'photo' as const, url: model1, event: 'Editorial' },
    { id: '6', type: 'photo' as const, url: model2, event: 'Campaign' },
    { id: '7', type: 'photo' as const, url: model3, event: 'Fashion Week' },
    { id: '8', type: 'photo' as const, url: model4, event: 'Editorial' },
  ];

  const events = [
    {
      id: '1',
      title: 'Paris Fashion Week 2024',
      date: 'March 2024',
      description: 'Walked for Chanel, Dior, and Saint Laurent. Featured in multiple runway shows.',
    },
    {
      id: '2',
      title: 'Vogue Editorial Campaign',
      date: 'January 2024',
      description: 'Lead model for Vogue Italia winter collection editorial shoot.',
    },
    {
      id: '3',
      title: 'Commercial Campaign - Luxury Brand',
      date: 'November 2023',
      description: 'International campaign for premium fragrance brand.',
    },
    {
      id: '4',
      title: 'Milan Fashion Week 2023',
      date: 'September 2023',
      description: 'Featured in shows for Prada, Versace, and Armani.',
    },
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  
  const availableDates = new Set([
    `${year}-${String(month).padStart(2, '0')}-05`,
    `${year}-${String(month).padStart(2, '0')}-06`,
    `${year}-${String(month).padStart(2, '0')}-12`,
    `${year}-${String(month).padStart(2, '0')}-13`,
    `${year}-${String(month).padStart(2, '0')}-14`,
    `${year}-${String(month).padStart(2, '0')}-20`,
    `${year}-${String(month).padStart(2, '0')}-21`,
    `${year}-${String(month).padStart(2, '0')}-25`,
    `${year}-${String(month).padStart(2, '0')}-26`,
    `${year}-${String(month).padStart(2, '0')}-27`,
  ]);

  return (
    <div className="relative min-h-screen">
      <AnimatedGradientBackground />

      <a href="/">
        <a>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20"
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </a>
      </a>

      <ModelDetailHero model={modelData} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <MediaGallery items={mediaItems} />

        <div className="grid md:grid-cols-2 gap-12">
          <EventTimeline events={events} />
          <AvailabilityCalendar availableDates={availableDates} />
        </div>
      </div>
    </div>
  );
}