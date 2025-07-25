import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-foreground">Automatización</span>
            <br />
            <span className="bg-gradient-to-r from-wania-cyan to-wania-violet bg-clip-text text-transparent">
              Inteligente
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones de IA e IoT para la industria moderna
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wania-cyan" size="lg">
              Ver soluciones
            </Button>
            <Button variant="outline" size="lg">
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;