import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Admissions', href: '/#admissions' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md">
              <img 
                src="/harvard-academy-logo.png" 
                alt="Harvard Academy Charsadda Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Harvard Academy
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Charsadda
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/923116040400', '_blank')}
              className="btn-hero flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  window.open('https://wa.me/923116040400', '_blank');
                  setIsOpen(false);
                }}
                className="btn-hero w-full flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;