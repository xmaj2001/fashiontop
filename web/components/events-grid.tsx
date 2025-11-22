import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

const eventsData = [
  {
    id: 1,
    title: "São Paulo Fashion Week 2025",
    date: "March 15-20, 2025",
    location: "São Paulo, Brazil",
    type: "Runway Show",
    models: 25,
    image: "/public/luxury-fashion-runway-with-dramatic-lighting-and-e.jpg",
    description:
      "The premier fashion event in Latin America showcasing the latest collections from top Brazilian designers.",
  },
  {
    id: 2,
    title: "Vogue Brazil Editorial Shoot",
    date: "February 28, 2025",
    location: "Rio de Janeiro, Brazil",
    type: "Editorial",
    models: 8,
    image: "/placeholder.svg?key=event2",
    description: "Exclusive editorial shoot for Vogue Brazil featuring summer collection highlights.",
  },
  {
    id: 3,
    title: "Luxury Brand Campaign",
    date: "March 5, 2025",
    location: "Milan, Italy",
    type: "Campaign",
    models: 12,
    image: "/placeholder.svg?key=event3",
    description: "International campaign shoot for a prestigious luxury fashion house.",
  },
  {
    id: 4,
    title: "Rio Fashion Experience",
    date: "April 10-12, 2025",
    location: "Rio de Janeiro, Brazil",
    type: "Runway Show",
    models: 30,
    image: "/placeholder.svg?key=event4",
    description: "Beach-inspired fashion showcase featuring resort and swimwear collections.",
  },
  {
    id: 5,
    title: "Harper's Bazaar Cover Shoot",
    date: "February 20, 2025",
    location: "São Paulo, Brazil",
    type: "Editorial",
    models: 5,
    image: "/placeholder.svg?key=event5",
    description: "Cover and feature shoot for Harper's Bazaar Brazil spring edition.",
  },
  {
    id: 6,
    title: "Designer Showcase Event",
    date: "March 25, 2025",
    location: "Brasília, Brazil",
    type: "Runway Show",
    models: 20,
    image: "/placeholder.svg?key=event6",
    description: "Emerging designers present their latest collections in an exclusive runway event.",
  },
]

export function EventsGrid() {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <div key={event.id} className="glass-gold rounded-lg overflow-hidden gold-glow-hover group">
                {/* Event Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Event Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/90 text-primary-foreground">{event.type}</Badge>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground">{event.title}</h3>

                  <p className="text-sm text-foreground/70 leading-relaxed">{event.description}</p>

                  <div className="space-y-2 pt-2 border-t border-primary/20">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.models} Models</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
