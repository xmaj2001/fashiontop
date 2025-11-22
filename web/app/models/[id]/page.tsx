"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModelProfile } from "@/components/model-profile"
import { notFound, useParams } from "next/navigation"

// Sample model data - in a real app, this would come from a database
const modelsData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Isabella Santos",
    category: "High Fashion",
    height: "5'10\"",
    bust: '34"',
    waist: '24"',
    hips: '35"',
    shoes: "8.5",
    hair: "Dark Brown",
    eyes: "Brown",
    location: "São Paulo, Brazil",
    languages: ["Portuguese", "English", "Spanish"],
    experience: "8 years",
    bio: "Isabella is an internationally recognized high fashion model with extensive experience on runways across Europe and South America. Her elegant presence and versatility have made her a favorite among luxury brands.",
    mainImage: "/public/elegant-female-fashion-model-with-professional-lig.jpg",
    gallery: [
      "/placeholder.svg?key=isa1",
      "/placeholder.svg?key=isa2",
      "/placeholder.svg?key=isa3",
      "/placeholder.svg?key=isa4",
      "/placeholder.svg?key=isa5",
      "/placeholder.svg?key=isa6",
    ],
    achievements: ["Paris Fashion Week 2023", "Vogue Brazil Cover", "Dior Campaign 2022", "Milan Fashion Week 2023"],
  },
  "2": {
    id: 2,
    name: "Marcus Silva",
    category: "Editorial",
    height: "6'2\"",
    chest: '40"',
    waist: '32"',
    shoes: "11",
    hair: "Black",
    eyes: "Dark Brown",
    location: "Rio de Janeiro, Brazil",
    languages: ["Portuguese", "English"],
    experience: "6 years",
    bio: "Marcus brings a sophisticated edge to editorial photography with his striking features and commanding presence. He has worked with top fashion magazines and luxury brands worldwide.",
    mainImage: "/public/sophisticated-male-fashion-model-in-luxury-setting.jpg",
    gallery: [
      "/placeholder.svg?key=mar1",
      "/placeholder.svg?key=mar2",
      "/placeholder.svg?key=mar3",
      "/placeholder.svg?key=mar4",
      "/placeholder.svg?key=mar5",
      "/placeholder.svg?key=mar6",
    ],
    achievements: ["GQ Brazil Editorial", "Armani Campaign 2023", "São Paulo Fashion Week", "Esquire Cover Model"],
  },
  "3": {
    id: 3,
    name: "Sofia Oliveira",
    category: "Runway",
    height: "5'11\"",
    bust: '33"',
    waist: '23"',
    hips: '34"',
    shoes: "9",
    hair: "Blonde",
    eyes: "Green",
    location: "São Paulo, Brazil",
    languages: ["Portuguese", "English", "French"],
    experience: "5 years",
    bio: "Sofia is a runway specialist known for her graceful walk and ability to bring designer visions to life. She has walked for major fashion houses in New York, Paris, and Milan.",
    mainImage: "/public/glamorous-female-model-in-haute-couture.jpg",
    gallery: [
      "/placeholder.svg?key=sof1",
      "/placeholder.svg?key=sof2",
      "/placeholder.svg?key=sof3",
      "/placeholder.svg?key=sof4",
      "/placeholder.svg?key=sof5",
      "/placeholder.svg?key=sof6",
    ],
    achievements: ["New York Fashion Week 2024", "Chanel Runway Show", "Versace Campaign", "Elle Brazil Feature"],
  },
  "4": {
    id: 4,
    name: "Rafael Costa",
    category: "Commercial",
    height: "6'1\"",
    chest: '42"',
    waist: '33"',
    shoes: "10.5",
    hair: "Brown",
    eyes: "Hazel",
    location: "Brasília, Brazil",
    languages: ["Portuguese", "English"],
    experience: "7 years",
    bio: "Rafael excels in commercial modeling with his approachable yet sophisticated look. He has been the face of numerous advertising campaigns for international brands.",
    mainImage: "/public/professional-male-model-in-designer-clothing.jpg",
    gallery: [
      "/placeholder.svg?key=raf1",
      "/placeholder.svg?key=raf2",
      "/placeholder.svg?key=raf3",
      "/placeholder.svg?key=raf4",
      "/placeholder.svg?key=raf5",
      "/placeholder.svg?key=raf6",
    ],
    achievements: [
      "Hugo Boss Campaign 2023",
      "Calvin Klein Billboard",
      "Men's Health Cover",
      "Tommy Hilfiger Ambassador",
    ],
  },
}

export default function ModelDetailPage() {
  const { id } = useParams()
  console.log("Model ID:", id)
  const model = modelsData[id]
  // if (!model) {
  //   notFound()
  // }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ModelProfile model={model} />
      <Footer />
    </main>
  )
}
