import { useState } from 'react'
import { TrendingUp, Users, Award, Star } from 'lucide-react'
import { motion } from 'framer-motion'

import heroImage from '../assets/Hero_banner_luxury_model_e4703d83.png'
import model1 from '../assets/Female_model_headshot_portrait_46fd5fdb.png'
import model2 from '../assets/Male_model_professional_portrait_5413a58d.png'
import model3 from '../assets/Female_model_full_body_21051402.png'
import model4 from '../assets/Diverse_model_professional_shot_35a0f71f.png'
import model5 from '../assets/Male_model_casual_portrait_44c377a6.png'

import type { Model, ModelProfileData } from '@/lib/interfaces/model-profile-data'
import Hero from '@/components/Hero'
import ModelCard from '@/components/ModelCard'
import ModelProfile from '@/components/ModelProfile'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'


export default function HomePage() {
  const [selectedModel, setSelectedModel] = useState<ModelProfileData | null>(
    null,
  )

  const heroSlides = [
    {
      image: heroImage,
      title: 'Modelos Profissionais',
      subtitle:
        'Encontre os melhores talentos para seus eventos, videoclips e campanhas',
    },
    {
      image: model1,
      title: 'Experiência e Elegância',
      subtitle:
        'Portfólio completo com os mais prestigiados modelos do mercado',
    },
    {
      image: model2,
      title: 'Contratação Simplificada',
      subtitle:
        'Entre em contato direto via WhatsApp e garanta seu modelo ideal',
    },
  ]

  const featuredModels: Model[] = [
    {
      id: '1',
      name: 'Isabella Silva',
      image: model1,
      height: 175,
      categories: ['Editorial', 'Passarela'],
      experience: 'Profissional',
    },
    {
      id: '2',
      name: 'Rafael Costa',
      image: model2,
      height: 185,
      categories: ['Comercial', 'Editorial'],
      experience: 'Elite',
    },
    {
      id: '3',
      name: 'Mariana Santos',
      image: model3,
      height: 178,
      categories: ['Passarela', 'Videoclip'],
      experience: 'Profissional',
    },
    {
      id: '4',
      name: 'Juliana Mendes',
      image: model4,
      height: 172,
      categories: ['Comercial', 'Shows'],
      experience: 'Intermediário',
    },
    {
      id: '5',
      name: 'Lucas Oliveira',
      image: model5,
      height: 182,
      categories: ['Editorial', 'Eventos'],
      experience: 'Profissional',
    },
    {
      id: '6',
      name: 'Ana Paula',
      image: model1,
      height: 176,
      categories: ['Videoclip', 'Shows'],
      experience: 'Elite',
    },
  ]

  const categories = [
    { name: 'Videoclip', icon: '🎬', count: 45 },
    { name: 'Shows', icon: '🎤', count: 38 },
    { name: 'Editorial', icon: '📸', count: 62 },
    { name: 'Comercial', icon: '🎥', count: 51 },
    { name: 'Passarela', icon: '👗', count: 29 },
    { name: 'Eventos', icon: '🎉', count: 42 },
  ]

  const stats = [
    { icon: Users, label: 'Modelos', value: '150+' },
    { icon: Award, label: 'Eventos Realizados', value: '500+' },
    { icon: TrendingUp, label: 'Anos de Mercado', value: '15+' },
    { icon: Star, label: 'Satisfação', value: '98%' },
  ]

  const handleModelClick = (model: Model) => {
    const fullProfile: ModelProfileData = {
      ...model,
      images: [model.image, model1, model2],
      weight: 58,
      measurements: '86-61-91 cm',
      portfolio: '/portfolio.pdf',
      availability: 'Disponível',
      bio: 'Modelo profissional com ampla experiência em editoriais de moda, desfiles e campanhas publicitárias. Trabalhou com marcas renomadas e possui portfólio internacional.',
    }
    setSelectedModel(fullProfile)
  }

  return (
    <div className="min-h-screen">
      <Hero slides={heroSlides} />

      <section className="py-16 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-primary/10 rounded-full">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p
                  className="text-3xl font-serif font-semibold text-foreground mb-1"
                  data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-normal text-foreground mb-4">
              Modelos em Destaque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça nossos principais talentos, selecionados por sua
              experiência e profissionalismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModelCard
                  model={model}
                  onClick={() => handleModelClick(model)}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" data-testid="button-view-all">
              Ver Todos os Modelos
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-normal text-foreground mb-4">
              Categorias
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encontre modelos especializados para cada tipo de evento
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-background border border-border rounded-md hover-elevate active-elevate-2 transition-all group"
                data-testid={`button-category-${category.name.toLowerCase()}`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-1">
                  {category.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {category.count} modelos
                </Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-normal text-foreground mb-4">
            Pronto para Contratar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato conosco via WhatsApp e encontre o modelo perfeito
            para seu projeto
          </p>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#22c55e] text-white"
            data-testid="button-contact-whatsapp"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {selectedModel && (
        <ModelProfile
          model={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </div>
  )
}
