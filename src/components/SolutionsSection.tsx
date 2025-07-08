import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Brain, 
  Wifi, 
  Shield 
} from "lucide-react";

const solutions = [
  {
    title: "Automatización industrial",
    description: "Soluciones eficientes para plantas y procesos productivos",
    icon: Settings,
    gradient: "from-wania-cyan/20 to-wania-blue/20"
  },
  {
    title: "IA aplicada a procesos",
    description: "Predicción, optimización y toma de decisiones inteligente.",
    icon: Brain,
    gradient: "from-wania-violet/20 to-wania-cyan/20"
  },
  {
    title: "IoT e integración de sensores",
    description: "Recolección de datos en tiempo real de múltiples dispositivos.",
    icon: Wifi,
    gradient: "from-wania-blue/20 to-wania-violet/20"
  },
  {
    title: "Infraestructura digital segura",
    description: "Redes, ciberseguridad y conectividad de clase industrial.",
    icon: Shield,
    gradient: "from-wania-cyan/20 to-wania-glow/20"
  }
];

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            NUESTRAS SOLUCIONES
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-wania-cyan/50 transition-all duration-300 hover:shadow-card group cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-wania-cyan" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </CardDescription>
                <Button variant="wania-ghost" size="sm" className="w-full">
                  Más info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;