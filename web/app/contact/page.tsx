import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-lg text-foreground/70 text-pretty leading-relaxed">
              Ready to elevate your fashion career or book exceptional talent? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Whether you're a model looking to join our agency or a brand seeking exceptional talent, we'd love to
                  hear from you. Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="glass-gold p-6 rounded-lg flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70">contact@fashiontop.com</p>
                    <p className="text-foreground/70">bookings@fashiontop.com</p>
                  </div>
                </div>

                <div className="glass-gold p-6 rounded-lg flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70">+55 11 9999-8888</p>
                    <p className="text-foreground/70">+55 21 9999-7777</p>
                  </div>
                </div>

                <div className="glass-gold p-6 rounded-lg flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-foreground/70">
                      Avenida Paulista, 1000
                      <br />
                      São Paulo, SP 01310-100
                      <br />
                      Brazil
                    </p>
                  </div>
                </div>

                <div className="glass-gold p-6 rounded-lg flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-foreground/70">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
