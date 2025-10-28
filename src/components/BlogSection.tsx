import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "El futuro de los agentes conversacionales",
    excerpt: "Descubre cómo los LLMs están revolucionando la atención al cliente y soporte empresarial.",
    date: "15 Ene 2025",
    category: "Tendencias"
  },
  {
    title: "Automatización con RPA e IA",
    excerpt: "Cómo combinar RPA con inteligencia artificial para multiplicar la eficiencia operativa.",
    date: "10 Ene 2025",
    category: "Guías"
  },
  {
    title: "Casos de éxito en transformación digital",
    excerpt: "Empresas que lograron reducir costos en 40% implementando soluciones inteligentes.",
    date: "5 Ene 2025",
    category: "Casos de Éxito"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-4">
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Noticias, tendencias y guías para entender y aprovechar las últimas innovaciones en inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-wania-cyan">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-wania-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="text-wania-cyan p-0 h-auto group-hover:gap-2 transition-all">
                  Leer más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
