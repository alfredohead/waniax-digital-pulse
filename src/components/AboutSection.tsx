import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  Globe,
  Zap,
  Heart,
  Trophy
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15+",
    label: "Años de experiencia",
    description: "En automatización industrial"
  },
  {
    icon: Globe,
    value: "8",
    label: "Países",
    description: "Con proyectos exitosos"
  },
  {
    icon: Award,
    value: "50+",
    label: "Certificaciones",
    description: "En tecnologías industriales"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Aplicamos las últimas tecnologías para resolver problemas complejos de manera creativa.",
    color: "from-yellow-400/20 to-orange-400/20"
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Cada solución está diseñada específicamente para las necesidades únicas de tu industria.",
    color: "from-blue-400/20 to-cyan-400/20"
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description: "Optimizamos procesos para maximizar la productividad y minimizar los costos operativos.",
    color: "from-green-400/20 to-emerald-400/20"
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Acompañamos a nuestros clientes en cada etapa, desde la planificación hasta el soporte continuo.",
    color: "from-red-400/20 to-pink-400/20"
  }
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-6">
            Sobre WaniaX
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            15+ años desarrollando soluciones de automatización industrial, 
            IA y IoT para empresas innovadoras.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;