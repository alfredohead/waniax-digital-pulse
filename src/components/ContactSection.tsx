import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building2,
  Globe
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    info: "contacto@waniax.com",
    description: "Respuesta en 24 horas"
  },
  {
    icon: Phone,
    title: "Teléfono",
    info: "+1 (555) 123-4567",
    description: "Lun - Vie, 9AM - 6PM"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    info: "Ciudad de México, México",
    description: "Servicios internacionales"
  },
  {
    icon: Clock,
    title: "Horarios",
    info: "24/7 Soporte Crítico",
    description: "Soporte empresarial"
  }
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Listo para transformar tu negocio? Contáctanos y agenda una consulta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-wania-cyan to-wania-violet rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Solicita una Consulta
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Tu nombre completo"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input 
                      id="empresa" 
                      placeholder="Nombre de tu empresa"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono" 
                      placeholder="+1 (555) 123-4567"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industria">Industria</Label>
                  <Input 
                    id="industria" 
                    placeholder="¿En qué industria trabajas?"
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea 
                    id="mensaje" 
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>

                <Button variant="wania-primary" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obligatorios. Responderemos en menos de 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-card/30 border-border/30 hover:bg-card/50 hover:border-wania-cyan/30 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-wania-cyan/20 to-wania-violet/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-wania-cyan" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">
                          {item.info}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-wania-cyan/10 to-wania-violet/10 border-wania-cyan/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-wania-cyan to-wania-violet rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Consulta Gratuita
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Agenda una videollamada de 30 minutos para discutir tu proyecto 
                  sin compromiso. Analizaremos tus necesidades y te propondremos 
                  soluciones personalizadas.
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  Agendar Reunión
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-wania-cyan/5 to-wania-violet/5 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas una Respuesta Inmediata?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Para consultas urgentes o soporte técnico crítico, nuestro equipo 
              está disponible 24/7 para clientes empresariales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="wania-primary" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Llamar Ahora
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Email Urgente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;