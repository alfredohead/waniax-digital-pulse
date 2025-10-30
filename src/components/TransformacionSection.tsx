import { Sparkles } from "lucide-react";

const TransformacionSection = () => {
  return (
    <section id="transformacion" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wania-cyan/10 border border-wania-cyan/20 mb-6">
            <Sparkles className="w-4 h-4 text-wania-cyan" />
            <span className="text-sm font-medium text-wania-cyan">El Futuro de los Negocios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-wania-cyan to-wania-violet bg-clip-text text-transparent">
              Transformación Inteligente
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            IA que anticipa necesidades, resuelve problemas y convierte datos en ventajas competitivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformacionSection;
