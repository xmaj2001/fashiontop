'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ModelCard } from "./model/ModelCard";
import { ModelModal } from "./model/ModelModal";
import { useState } from "react";
import { IModel } from "@/http/model/model.interface";
import { mockData } from "@/lib/mockdata";





export function FeaturedModels() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<IModel | null>(null);

  const openModal = (model: IModel) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
             <span className="text-gradient-gold">Modelos</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Conheça nosso talento excepcional que representa o auge da moda de luxo. Cada modelo é cuidadosamente selecionado para refletir a elegância, sofisticação e estilo que definem nossa marca.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockData.map((model) => (

            <ModelCard
              key={model.id}
              model={model}
              onClick={() => openModal(model)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary/50 bg-transparent"
          >
            <Link href="/models">
             Ver todos os modelos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
      <ModelModal
        isOpen={isModalOpen}
        onClose={() => closeModal()}
        model={selectedModel}
      />
    </section>
  )
}
