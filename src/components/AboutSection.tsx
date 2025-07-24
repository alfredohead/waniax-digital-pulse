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
    <section id="nosotros" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            Sobre WaniaX
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de ingenieros especializados en automatización industrial, 
            inteligencia artificial y IoT. Con más de 15 años de experiencia, 
            transformamos industrias mediante soluciones tecnológicas innovadoras.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-wania-cyan/20 to-wania-violet/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-wania-cyan" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-wania-cyan/5 to-wania-violet/5 rounded-2xl p-8 mb-16 border border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-wania-cyan to-wania-violet rounded-xl mb-6">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Democratizar el acceso a tecnologías avanzadas de automatización e IA para que 
              empresas de todos los tamaños puedan competir en la era digital. Creemos que 
              la innovación tecnológica debe ser accesible, práctica y generar valor real.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:bg-card hover:border-wania-cyan/30 transition-all duration-300 group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6 text-wania-cyan" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Equipo Multidisciplinario
          </Badge>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Ingenieros, Desarrolladores y Consultores
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestro equipo combina experiencia en ingeniería industrial, desarrollo de software, 
            ciencia de datos y consultoría empresarial para ofrecer soluciones integrales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;