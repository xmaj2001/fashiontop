import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-lg text-foreground/70 text-pretty leading-relaxed">
              A curated collection of our finest work in luxury fashion photography
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid />
      <Footer />
    </main>
  )
}
