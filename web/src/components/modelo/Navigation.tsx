import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" data-testid="link-home">
            <a className="text-2xl font-bold text-white hover-elevate active-elevate-2 px-3 py-2 rounded-md">
              ModelHub
            </a>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" data-testid="link-models">
              <a className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Models
              </a>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Featured
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            {isSearchOpen ? (
              <div className="hidden sm:block animate-fade-in">
                <Input
                  type="search"
                  placeholder="Search models..."
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  data-testid="input-search"
                  autoFocus
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setIsSearchOpen(true)}
                data-testid="button-search-toggle"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Button variant="outline" className="hidden sm:inline-flex bg-white/10 border-white/20 text-white hover:bg-white/20" data-testid="button-login">
              Login
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden text-white" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
