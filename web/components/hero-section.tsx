"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/background.jpg" alt="Luxury Fashion Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Animated Gold Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow" />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber rounded-full animate-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold-light rounded-full animate-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Agência de modelos premium</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-balance">
             Eleve sua carreira em <span className="text-gradient-gold animate-gradient">Moda de luxo</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-pretty leading-relaxed">
            Descubra talentos excepcionais e oportunidades exclusivas no mundo da modelagem de moda sofisticada. Onde
            elegância encontra excelência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover text-base px-8"
            >
              <Link href="/models">
                Explorar modelos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary/30 hover:border-primary/50 bg-transparent"
            >
              <Link href="/contact">Entre em contato</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-foreground/60">Modelos Elite</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-foreground/60">Desfiles de moda</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-foreground/60">Marcas Globais</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
