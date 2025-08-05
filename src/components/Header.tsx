import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary/10 z-50 slide-down">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-coral rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm relative">
                <div className="absolute inset-0 bg-primary/20 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-2 h-0.5 bg-primary"></div>
                <div className="absolute top-2 left-1 w-0.5 h-2 bg-primary"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-playfair font-bold text-foreground">
                Pro Health
              </h1>
              <p className="text-xs text-muted-foreground hidden lg:block">Skincare Hospital</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 underline-animate font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <Button variant="coral" size="sm" className="btn-hover">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 space-y-4 border-t border-primary/10">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <Button variant="coral" size="sm" className="w-full btn-hover">
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;