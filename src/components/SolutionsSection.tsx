import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Cog,
  Bot,
  BarChart3,
  Network,
  GraduationCap
} from "lucide-react";

const solutions = [
  {
    title: "Consultoría Estratégica en IA",
    description: "Diagnósticos automatizados que detectan oportunidades para implementar IA, estrategia a medida y acompañamiento integral.",
    icon: Brain,
    gradient: "from-wania-cyan/20 to-blue-500/20"
  },
  {
    title: "Creación de Agentes Inteligentes",
    description: "Desarrollamos agentes personalizados con LLMs y MCP que combinan autonomía e inteligencia contextual para mejorar la interacción y operación.",
    icon: Bot,
    gradient: "from-purple-500/20 to-wania-violet/20"
  },
  {
    title: "Automatización Inteligente",
    description: "Implementamos RPA junto con IA para automatizar procesos, generar reportes dinámicos y asegurar soporte constante con agentes de voz y chat.",
    icon: Cog,
    gradient: "from-cyan-500/20 to-wania-cyan/20"
  },
  {
    title: "Monitoreo y Análisis en Tiempo Real",
    description: "Incorporamos tecnologías avanzadas para transformar datos visuales y operativos en información estratégica para la toma de decisiones.",
    icon: BarChart3,
    gradient: "from-wania-violet/20 to-purple-500/20"
  },
  {
    title: "Integración Técnica",
    description: "Conectamos soluciones de IA con sistemas ERP, CRM y plataformas existentes para garantizar flujo continuo de datos y eficiencia máxima.",
    icon: Network,
    gradient: "from-blue-500/20 to-wania-cyan/20"
  },
  {
    title: "Capacitación y Soporte Continuo",
    description: "Formamos a tu equipo y proveemos soporte 24/7 con herramientas inteligentes que aseguran adopción y éxito sostenible.",
    icon: GraduationCap,
    gradient: "from-purple-500/20 to-wania-violet/20"
  }
];

const SolutionsSection = () => {
  return (
    <section id="servicios" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de IA para transformar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-muted"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-6 h-6 text-wania-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
