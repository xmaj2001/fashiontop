import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EM</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Elite Models</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Agência profissional de modelos para eventos, videoclips, shows e campanhas editoriais.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/models" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Modelos
                </a>
              </li>
              <li>
                <a href="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brasil</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+55 11 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@elitemodels.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Redes Sociais
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                data-testid="button-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#25D366]/10 border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20"
                data-testid="button-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Elite Models Agency. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
