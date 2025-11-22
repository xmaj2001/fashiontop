import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventsGrid } from "@/components/events-grid"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Fashion <span className="text-gradient-gold">Events</span>
            </h1>
            <p className="text-lg text-foreground/70 text-pretty leading-relaxed">
              Exclusive runway shows, photo shoots, and luxury brand collaborations
            </p>
          </div>
        </div>
      </section>

      <EventsGrid />
      <Footer />
    </main>
  )
}
