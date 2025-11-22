'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModelsGrid } from "@/components/models-grid"
import { HeroCarousel } from "@/components/model/HeroCarousel"
import { Model } from "@/components/model/ModelCard"

const images = [
  {
    id: 1,
    url: "/models/model1.jpg",
    alt: "Model 1",
  },
  {
    id: 2,
    url: "/models/model2.jpg",
    alt: "Model 2",
  },
  {
    id: 3,
    url: "/models/model3.jpg",
    alt: "Model 3",
  },
];

const modelsData: Model[] = [
  {
    id: 1,
    name: 'Isabella Santos',
    category: 'Alta Costura',
    image: 'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2MTk1NzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    height: '1.78m',
    measurements: '86-61-91',
    experience: '8 anos em passarelas internacionais',
  },
  {
    id: 2,
    name: 'Mariana Costa',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1640876305588-dbdab5869200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5MjgyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: '1.75m',
    measurements: '84-60-89',
    experience: '5 anos em editoriais de moda',
  },
  {
    id: 3,
    name: 'Juliana Almeida',
    category: 'Runway',
    image: 'https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTk1NzM5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    height: '1.80m',
    measurements: '85-60-90',
    experience: '10 anos em desfiles de luxo',
  },
  {
    id: 4,
    name: 'Camila Rodrigues',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1761424416645-0e2269b0683a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZXZlbnQlMjBnbGFtb3VyfGVufDF8fHx8MTc2MTk1NzM5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    height: '1.72m',
    measurements: '87-62-92',
    experience: '6 anos em campanhas publicitárias',
  },
  {
    id: 5,
    name: 'Sofia Lima',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzYxODQ0MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    height: '1.70m',
    measurements: '88-63-93',
    experience: '4 anos em moda fitness e esportiva',
  },
  {
    id: 6,
    name: 'Beatriz Oliveira',
    category: 'Haute Couture',
    image: 'https://images.unsplash.com/photo-1740664651822-3a02ec12c121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcnVud2F5fGVufDF8fHx8MTc2MTg2MTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    height: '1.79m',
    measurements: '84-59-88',
    experience: '12 anos em alta costura internacional',
  },
];


export default function ModelsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <HeroCarousel
        images={modelsData.map((model) => ({
          id: model.id,
          url: model.image,
          alt: model.name,
        }))}
        modelName="Model Name"
        location="Model Location"
        measurements={{
          height: "180cm",
          bust: "90cm",
          waist: "60cm",
          hips: "90cm",
        }}
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Models</span>
            </h1>
            <p className="text-lg text-foreground/70 text-pretty leading-relaxed">
              Discover exceptional talent from our exclusive roster of elite fashion models
            </p>
          </div>
        </div>
      </section>

      <ModelsGrid />
      <Footer />
    </main>
  )
}
