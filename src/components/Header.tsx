import { Button } from "@/components/ui/button";
import logo from "@/assets/waniax-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="WaniaX Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-wania-cyan transition-colors duration-300">
            Inicio
          </a>
          <a href="#nosotros" className="text-foreground hover:text-wania-cyan transition-colors duration-300">
            Nosotros
          </a>
          <a href="#servicios" className="text-foreground hover:text-wania-cyan transition-colors duration-300">
            Servicios
          </a>
          <a href="#contacto" className="text-foreground hover:text-wania-cyan transition-colors duration-300">
            Contacto
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="wania-primary" size="default" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
          Solicita una consulta
        </Button>
      </div>
    </header>
  );
};

export default Header;