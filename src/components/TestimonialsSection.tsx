import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Building2, Users, Award } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    position: "Director de Operaciones",
    company: "AceroTech Industries",
    industry: "Metalúrgica",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "WaniaX transformó completamente nuestros procesos de producción. La implementación de IA redujo nuestros tiempos de inactividad en un 70% y aumentó la eficiencia general en 45%. Su equipo es excepcional.",
    rating: 5,
    results: ["70% menos tiempo de inactividad", "45% más eficiencia", "ROI en 8 meses"]
  },
  {
    name: "Ana Rodriguez",
    position: "CEO",
    company: "FoodProcess Solutions",
    industry: "Alimentaria",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "La automatización implementada por WaniaX nos permitió escalar nuestras operaciones sin comprometer la calidad. El sistema de monitoreo en tiempo real es increíble y el soporte técnico es de primera clase.",
    rating: 5,
    results: ["3x capacidad de producción", "99.8% calidad consistente", "24/7 monitoreo"]
  },
  {
    name: "Roberto Silva",
    position: "Gerente de Ingeniería",
    company: "ChemFlow Dynamics",
    industry: "Química",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Después de trabajar con WaniaX, nuestros procesos químicos están completamente optimizados. La precisión del control automatizado superó nuestras expectativas y la seguridad industrial mejoró significativamente.",
    rating: 5,
    results: ["95% precisión en procesos", "0 incidentes de seguridad", "30% ahorro energético"]
  }
];

const stats = [
  {
    icon: Users,
    value: "98%",
    label: "Satisfacción del Cliente"
  },
  {
    icon: Award,
    value: "100+",
    label: "Proyectos Exitosos"
  },
  {
    icon: Building2,
    value: "50+",
    label: "Empresas Transformadas"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Historias de Éxito
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas líderes confían en WaniaX para transformar sus operaciones. 
            Descubre cómo hemos ayudado a optimizar procesos y generar resultados excepcionales.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-wania-cyan/20 to-wania-violet/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-wania-cyan" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border/50 hover:bg-card hover:border-wania-cyan/30 transition-all duration-300 group hover:scale-105 animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-wania-cyan/60" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-wania-cyan mb-3">
                    Resultados Clave:
                  </h4>
                  <div className="space-y-2">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-wania-cyan rounded-full mr-3 flex-shrink-0"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-border/50">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-wania-cyan/20 text-wania-cyan">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-wania-cyan font-medium">
                      {testimonial.company} • {testimonial.industry}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-wania-cyan/10 to-wania-violet/10 rounded-2xl p-8 text-center border border-wania-cyan/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para Ser Nuestro Próximo Caso de Éxito?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Únete a las empresas que ya han transformado sus operaciones con nuestras soluciones de IA y automatización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-wania-cyan to-wania-violet text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Ver Más Casos de Éxito
            </button>
            <button className="border border-wania-cyan text-wania-cyan px-8 py-3 rounded-lg font-semibold hover:bg-wania-cyan/10 transition-colors duration-200">
              Solicitar Propuesta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;