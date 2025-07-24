import { TrendingUp, TrendingDown, Network, Clock, Users, Shield } from "lucide-react";

const results = [
  {
    value: "+40%",
    label: "Eficiencia operativa",
    description: "Aumento promedio en productividad de nuestros clientes",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    value: "−35%",
    label: "Costos de mantenimiento",
    description: "Reducción en gastos operativos anuales",
    icon: TrendingDown,
    color: "text-wania-cyan"
  },
  {
    value: "+25",
    label: "Plataformas integradas",
    description: "Sistemas conectados en tiempo real por proyecto",
    icon: Network,
    color: "text-wania-violet"
  },
  {
    value: "99.8%",
    label: "Tiempo de actividad",
    description: "Disponibilidad garantizada de nuestros sistemas",
    icon: Clock,
    color: "text-blue-400"
  },
  {
    value: "150+",
    label: "Clientes satisfechos",
    description: "Empresas que confían en nuestras soluciones",
    icon: Users,
    color: "text-orange-400"
  },
  {
    value: "24/7",
    label: "Soporte técnico",
    description: "Monitoreo y asistencia técnica continua",
    icon: Shield,
    color: "text-emerald-400"
  }
];

const ResultsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-glow">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            Resultados que hablan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestras soluciones de automatización e IA han transformado la eficiencia 
            operativa de más de 150 empresas en toda Latinoamérica.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card hover:border-wania-cyan/30 transition-all duration-300 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-background to-secondary/20 ${result.color} group-hover:scale-110 transition-transform duration-300`}>
                  <result.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-wania-cyan to-wania-violet bg-clip-text text-transparent">
                      {result.value}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {result.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;