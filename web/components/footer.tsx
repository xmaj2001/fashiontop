import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-primary/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-gradient-gold">FashionTop</span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Elevating careers in luxury fashion with exceptional talent and exclusive opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/models" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Models
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Model Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Event Booking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Brand Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Portfolio Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">© 2025 FashionTop. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
