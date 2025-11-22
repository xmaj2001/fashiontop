"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "High Fashion", "Editorial", "Runway", "Commercial", "Plus Size", "Fitness"]

const modelsData = [
  {
    id: 1,
    name: "Isabella Santos",
    category: "High Fashion",
    height: "5'10\"",
    location: "São Paulo",
    image: "/public/elegant-female-fashion-model-with-professional-lig.jpg",
  },
  {
    id: 2,
    name: "Marcus Silva",
    category: "Editorial",
    height: "6'2\"",
    location: "Rio de Janeiro",
    image: "/public/sophisticated-male-fashion-model-in-luxury-setting.jpg",
  },
  {
    id: 3,
    name: "Sofia Oliveira",
    category: "Runway",
    height: "5'11\"",
    location: "São Paulo",
    image: "/public/glamorous-female-model-in-haute-couture.jpg",
  },
  {
    id: 4,
    name: "Rafael Costa",
    category: "Commercial",
    height: "6'1\"",
    location: "Brasília",
    image: "/public/professional-male-model-in-designer-clothing.jpg",
  },
  {
    id: 5,
    name: "Camila Ferreira",
    category: "High Fashion",
    height: "5'9\"",
    location: "São Paulo",
    image: "/placeholder.svg?key=model5",
  },
  {
    id: 6,
    name: "Lucas Almeida",
    category: "Fitness",
    height: "6'0\"",
    location: "Rio de Janeiro",
    image: "/placeholder.svg?key=model6",
  },
  {
    id: 7,
    name: "Juliana Rocha",
    category: "Editorial",
    height: "5'10\"",
    location: "Curitiba",
    image: "/placeholder.svg?key=model7",
  },
  {
    id: 8,
    name: "Gabriel Martins",
    category: "Runway",
    height: "6'2\"",
    location: "São Paulo",
    image: "/placeholder.svg?key=model8",
  },
  {
    id: 9,
    name: "Beatriz Lima",
    category: "Plus Size",
    height: "5'8\"",
    location: "Salvador",
    image: "/placeholder.svg?key=model9",
  },
  {
    id: 10,
    name: "Pedro Henrique",
    category: "Commercial",
    height: "6'1\"",
    location: "Belo Horizonte",
    image: "/placeholder.svg?key=model10",
  },
  {
    id: 11,
    name: "Amanda Souza",
    category: "High Fashion",
    height: "5'11\"",
    location: "São Paulo",
    image: "/placeholder.svg?key=model11",
  },
  {
    id: 12,
    name: "Thiago Barbosa",
    category: "Editorial",
    height: "6'0\"",
    location: "Rio de Janeiro",
    image: "/placeholder.svg?key=model12",
  },
]

export function ModelsGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredModels = modelsData.filter((model) => {
    const matchesSearch =
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || model.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 glass-gold border-primary/20 focus:border-primary/40"
              />
            </div>
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <div className="flex justify-center md:hidden">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="border-primary/30">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
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
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-foreground/60">
            Showing <span className="text-primary font-semibold">{filteredModels.length}</span> models
          </p>
        </div>

        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredModels.map((model) => (
              <Link
                key={model.id}
                href={`/models/${model.id}`}
                className="group relative overflow-hidden rounded-lg glass-gold gold-glow-hover"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Model Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-primary/90 text-primary-foreground">{model.category}</Badge>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{model.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-foreground/70">
                    <span>{model.height}</span>
                    <span>•</span>
                    <span>{model.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-foreground/60">No models found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}
