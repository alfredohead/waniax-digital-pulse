import { Button } from "@/components/ui/button";
import logo from "@/assets/waniax-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="WaniaX - Soluciones de Inteligencia Artificial" className="h-24 w-auto transition-transform hover:scale-105 duration-300" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-wania-cyan transition-colors duration-300 font-medium">
            Inicio
          </a>
          <a href="#nosotros" className="text-foreground hover:text-wania-cyan transition-colors duration-300 font-medium">
            Nosotros
          </a>
          <a href="#servicios" className="text-foreground hover:text-wania-cyan transition-colors duration-300 font-medium">
            Servicios
          </a>
          <a href="#contacto" className="text-foreground hover:text-wania-cyan transition-colors duration-300 font-medium">
            Contacto
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="wania-primary" size="lg" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
          Solicita una consulta
        </Button>
      </div>
    </header>
  );
};

export default Header;