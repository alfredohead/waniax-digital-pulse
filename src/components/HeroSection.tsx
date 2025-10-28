import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Impulsa tu negocio con la{" "}
            <span className="bg-gradient-to-r from-wania-cyan to-wania-violet bg-clip-text text-transparent">
              Transformación Inteligente
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integración avanzada de inteligencia artificial para optimizar procesos, mejorar la experiencia y potenciar resultados.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agentes inteligentes, automatización y soporte 24/7 para que tu empresa esté a la vanguardia tecnológica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="wania-cyan" size="lg" onClick={scrollToContact}>
              Solicita tu consulta personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;