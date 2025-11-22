import { Sparkles, Users, Calendar, Award } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Gerenciamento de modelo",
    description: "Desenvolvimento de carreira abrangente e representação para modelos de moda de elite",
  },
  {
    icon: Calendar,
    title: "Reserva de eventos",
    description: "Acesso exclusivo a desfiles de moda de alto nível e campanhas de marcas de luxo",
  },
  {
    icon: Award,
    title: "Parcerias de Marca",
    description: "Colaborações estratégicas com casas de moda e designers de renome mundial",
  },
  {
    icon: Sparkles,
    title: "Desenvolvimento de portfólio",
    description: "Fotografia profissional e estilo para mostrar seu talento único",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Soluções abrangentes para modelos e marcas da indústria da moda de luxo
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="glass-gold p-8 rounded-lg gold-glow-hover group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
