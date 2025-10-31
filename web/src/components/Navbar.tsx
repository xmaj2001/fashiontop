import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Modelos', href: '/models' },
    { label: 'Categorias', href: '/categories' },
    { label: 'Sobre', href: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EM</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Elite Models</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`${
                    location === item.href 
                      ? 'bg-accent text-accent-foreground' 
                      : ''
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="default" 
              className="bg-primary text-primary-foreground"
              data-testid="button-contratar"
            >
              Contratar Modelo
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location === item.href 
                      ? 'bg-accent text-accent-foreground' 
                      : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <ThemeToggle />
              <Button 
                variant="default" 
                className="flex-1 bg-primary text-primary-foreground"
              >
                Contratar Modelo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
