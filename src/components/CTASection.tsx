import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, Trophy, Target } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatización IA",
    description: "Sistemas inteligentes que aprenden y se adaptan"
  },
  {
    icon: Users,
    title: "Soporte 24/7",
    description: "Equipo especializado siempre disponible"
  },
  {
    icon: Trophy,
    title: "Resultados Garantizados",
    description: "ROI comprobado en menos de 12 meses"
  },
  {
    icon: Target,
    title: "Soluciones Personalizadas",
    description: "Adaptadas específicamente a tu industria"
  }
];

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-wania-cyan/5 via-background to-wania-violet/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-wania-cyan/5 to-wania-violet/5 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--wania-cyan)/0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--wania-violet)/0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-wania-cyan border-wania-cyan/30">
            ¡Transforma Tu Industria Hoy!
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">El Futuro</span> de tu <br />
            Industria <span className="text-gradient">Comienza Aquí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Únete a las empresas líderes que ya han revolucionado sus operaciones con 
            nuestras soluciones de inteligencia artificial y automatización industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="wania-primary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto animate-glow"
            >
              Solicita Tu Demo Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-wania-cyan/30 text-wania-cyan hover:bg-wania-cyan/10"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border/50 hover:bg-card hover:border-wania-cyan/30 transition-all duration-300 group hover:scale-105 animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-wania-cyan/20 to-wania-violet/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-wania-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-2xl p-8 border border-wania-cyan/20 text-center shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para Liderar la Revolución Industrial 4.0?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            No te quedes atrás. Agenda una consulta gratuita y descubre cómo WaniaX 
            puede transformar tu empresa en los próximos 90 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="wania-primary" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Agendar Consulta Gratuita
            </Button>
            <Button 
              variant="wania-ghost" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Descargar Brochure
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              🚀 Implementación en <strong className="text-wania-cyan">90 días</strong> | 
              💡 ROI garantizado en <strong className="text-wania-cyan">12 meses</strong> | 
              🔧 Soporte <strong className="text-wania-cyan">24/7</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;