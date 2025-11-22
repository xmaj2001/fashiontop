import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Users, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient-gold">FashionTop</span>
            </h1>
            <p className="text-lg text-foreground/70 text-pretty leading-relaxed">
              Leading the luxury fashion industry with exceptional talent and unparalleled service
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-gold p-8 md:p-12 rounded-lg mb-16">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Founded in 2015, FashionTop has established itself as Brazil's premier luxury model agency,
                  representing some of the most sought-after talent in the fashion industry. Our journey began with a
                  simple vision: to bridge the gap between exceptional models and the world's most prestigious fashion
                  brands.
                </p>
                <p>
                  Over the years, we've grown from a boutique agency in São Paulo to an international powerhouse, with
                  our models gracing runways in Paris, Milan, New York, and beyond. We pride ourselves on discovering
                  and nurturing talent, providing comprehensive career management, and maintaining the highest standards
                  of professionalism.
                </p>
                <p>
                  Today, FashionTop represents over 500 elite models and works with more than 50 global luxury brands.
                  Our commitment to excellence, integrity, and innovation continues to drive us forward as we shape the
                  future of fashion modeling.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="glass-gold p-8 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-foreground/70">Elite Models</div>
              </div>

              <div className="glass-gold p-8 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-foreground/70">Global Brands</div>
              </div>

              <div className="glass-gold p-8 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-foreground/70">Fashion Shows</div>
              </div>

              <div className="glass-gold p-8 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-foreground/70">Years Experience</div>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-gold p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To discover, develop, and represent exceptional modeling talent while providing unparalleled service
                  to fashion brands worldwide. We are committed to fostering long-term careers and creating meaningful
                  connections in the luxury fashion industry.
                </p>
              </div>

              <div className="glass-gold p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Excellence in every aspect of our work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrity and transparency in all relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Innovation in talent development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Diversity and inclusion in fashion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
