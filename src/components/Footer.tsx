import { Github, Linkedin, Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-foreground">
                Wania<span className="text-wania-violet">X</span>
              </div>
            </div>
            <p className="text-muted-foreground font-medium">
              Innovación. Eficiencia. Inteligencia.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-center space-x-6">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-wania-cyan transition-colors duration-300"
            >
              <Building className="w-5 h-5" />
              <span>CLUSTID</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-wania-cyan transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-wania-cyan transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 WaniaX. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;