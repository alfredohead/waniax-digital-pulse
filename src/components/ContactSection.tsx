import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
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
    info: "2634725005",
    description: "Lun - Vie, 9AM - 6PM"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    info: "Mendoza, Argentina",
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
          {/* WhatsApp Chat Card */}
          <Card className="bg-gradient-to-br from-wania-cyan/10 to-wania-violet/10 border-wania-cyan/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-wania-cyan to-wania-violet rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Chatea con Nuestro Asistente IA
                </h3>
              </div>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Conecta directamente con nuestro asistente inteligente de WaniaX por WhatsApp. 
                Obtén respuestas instantáneas sobre nuestros servicios, agenda consultas o 
                resuelve tus dudas en tiempo real.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-wania-cyan mt-2"></div>
                  <p>Respuestas inmediatas 24/7</p>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-wania-cyan mt-2"></div>
                  <p>Información detallada sobre soluciones IA</p>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-wania-cyan mt-2"></div>
                  <p>Agenda consultas personalizadas</p>
                </div>
              </div>

              <Button 
                variant="wania-primary" 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={() => window.open('https://wa.me/542634725005?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20de%20IA%20de%20WaniaX', '_blank')}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Iniciar Chat en WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Powered by WaniaX AI Assistant
              </p>
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