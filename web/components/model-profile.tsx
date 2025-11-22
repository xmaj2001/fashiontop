"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Award, Languages, Calendar } from "lucide-react"
import Link from "next/link"
import { HeroModelCarousel } from "./model/HeroModelCarousel"

interface ModelProfileProps {
  model: {
    id: number
    name: string
    category: string
    height: string
    location: string
    languages: string[]
    experience: string
    bio: string
    mainImage: string
    gallery: string[]
    achievements: string[]
    [key: string]: any
  }
}

export function ModelProfile({ model }: ModelProfileProps) {
  const [selectedImage, setSelectedImage] = useState(model.mainImage)

  return (
    <div className="pt-20">
      {/* Hero Section with Main Image */}
      <HeroModelCarousel
        images={model.gallery.map((image) => ({ id: image.id, url: image.url, alt: model.name }))}
        modelName={model.name}
        location={model.location}
        measurements={{
          height: model.height,
          bust: model.bust,
          waist: model.waist,
          hips: model.hips,
        }}
      />

      {/* Profile Content */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Basic Info Card */}
              <div className="glass-gold p-8 rounded-lg space-y-6">
                <div>
                  <h1 className="font-serif text-4xl font-bold text-foreground mb-2">{model.name}</h1>
                  <Badge className="bg-primary text-primary-foreground">{model.category}</Badge>
                </div>

                {/* Stats */}
                <div className="space-y-4 pt-4 border-t border-primary/20">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{model.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{model.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Languages className="w-5 h-5 text-primary" />
                    <span>{model.languages.join(", ")}</span>
                  </div>
                </div>

                {/* Measurements */}
                <div className="pt-4 border-t border-primary/20">
                  <h3 className="font-semibold text-foreground mb-4">Measurements</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-foreground/60">Height</span>
                      <p className="font-medium text-foreground">{model.height}</p>
                    </div>
                    {model.bust && (
                      <div>
                        <span className="text-foreground/60">Bust</span>
                        <p className="font-medium text-foreground">{model.bust}</p>
                      </div>
                    )}
                    {model.chest && (
                      <div>
                        <span className="text-foreground/60">Chest</span>
                        <p className="font-medium text-foreground">{model.chest}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-foreground/60">Waist</span>
                      <p className="font-medium text-foreground">{model.waist}</p>
                    </div>
                    {model.hips && (
                      <div>
                        <span className="text-foreground/60">Hips</span>
                        <p className="font-medium text-foreground">{model.hips}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-foreground/60">Shoes</span>
                      <p className="font-medium text-foreground">{model.shoes}</p>
                    </div>
                    <div>
                      <span className="text-foreground/60">Hair</span>
                      <p className="font-medium text-foreground">{model.hair}</p>
                    </div>
                    <div>
                      <span className="text-foreground/60">Eyes</span>
                      <p className="font-medium text-foreground">{model.eyes}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover">
                    <Mail className="w-4 h-4" />
                    Book This Model
                  </Button>
                  <Button variant="outline" className="w-full border-primary/30 bg-transparent">
                    <Phone className="w-4 h-4" />
                    Request Info
                  </Button>
                </div>
              </div>

              {/* Achievements */}
              <div className="glass-gold p-8 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Achievements</h3>
                </div>
                <ul className="space-y-2">
                  {model.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Gallery & Bio */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="glass-gold p-8 rounded-lg">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">About {model.name}</h2>
                <p className="text-foreground/80 leading-relaxed">{model.bio}</p>
              </div>

              {/* Portfolio Gallery */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Portfolio</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {model.gallery.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className="aspect-[3/4] overflow-hidden rounded-lg glass-gold gold-glow-hover group"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${model.name} portfolio ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
