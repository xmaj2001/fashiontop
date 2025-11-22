"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-gold border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-serif font-bold text-gradient-gold animate-glow">FT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/modelos" className="text-foreground hover:text-primary transition-colors">
              Modelos
            </Link>
            <Link href="/eventos" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </Link>
            <Link href="/galeria" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </Link>
            <Link href="/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
            <Link href="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-primary to-amber hover:from-primary/90 hover:to-amber/90 text-primary-foreground gold-glow-hover">
              Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary/20">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/modelos" className="block text-foreground hover:text-primary transition-colors">
              Modelos
            </Link>
            <Link href="/eventos" className="block text-foreground hover:text-primary transition-colors">
              Eventos
            </Link>
            <Link href="/galeria" className="block text-foreground hover:text-primary transition-colors">
              Galeria
            </Link>
            <Link href="/contato" className="block text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
            <Link href="/sobre" className="block text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Button className="w-full bg-gradient-to-r from-primary to-amber hover:from-primary/90 hover:to-amber/90 text-primary-foreground">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
