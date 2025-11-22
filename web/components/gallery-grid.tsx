"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/public/elegant-female-fashion-model-with-professional-lig.jpg",
    category: "Editorial",
    title: "Elegance Redefined",
  },
  {
    id: 2,
    src: "/public/sophisticated-male-fashion-model-in-luxury-setting.jpg",
    category: "Portrait",
    title: "Sophisticated Style",
  },
  {
    id: 3,
    src: "/public/glamorous-female-model-in-haute-couture.jpg",
    category: "Haute Couture",
    title: "Glamour & Grace",
  },
  {
    id: 4,
    src: "/public/professional-male-model-in-designer-clothing.jpg",
    category: "Commercial",
    title: "Modern Gentleman",
  },
  {
    id: 5,
    src: "/public/luxury-fashion-runway-with-dramatic-lighting-and-e.jpg",
    category: "Runway",
    title: "Fashion Week Moments",
  },
  {
    id: 6,
    src: "/placeholder.svg?key=gal6",
    category: "Editorial",
    title: "Urban Chic",
  },
  {
    id: 7,
    src: "/placeholder.svg?key=gal7",
    category: "Portrait",
    title: "Natural Beauty",
  },
  {
    id: 8,
    src: "/placeholder.svg?key=gal8",
    category: "Haute Couture",
    title: "Avant-Garde",
  },
  {
    id: 9,
    src: "/placeholder.svg?key=gal9",
    category: "Commercial",
    title: "Brand Campaign",
  },
  {
    id: 10,
    src: "/placeholder.svg?key=gal10",
    category: "Runway",
    title: "Catwalk Excellence",
  },
  {
    id: 11,
    src: "/placeholder.svg?key=gal11",
    category: "Editorial",
    title: "Fashion Story",
  },
  {
    id: 12,
    src: "/placeholder.svg?key=gal12",
    category: "Portrait",
    title: "Timeless Beauty",
  },
]

const categories = ["All", "Editorial", "Portrait", "Haute Couture", "Commercial", "Runway"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground gold-glow"
                    : "glass-gold hover:bg-primary/10 text-foreground/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setLightboxImage(image.src)}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg glass-gold gold-glow-hover"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm text-primary font-medium mb-1">{image.category}</p>
                <h3 className="font-serif text-lg font-bold text-foreground">{image.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:bg-primary/20 transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <img
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
