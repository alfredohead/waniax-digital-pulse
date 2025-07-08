import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Transformamos</span>
              <br />
              <span className="text-foreground">productividad en</span>
              <br />
              <span className="bg-gradient-to-r from-wania-cyan to-wania-violet bg-clip-text text-transparent">
                inteligencia
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              WaniaX impulsa tu empresa con automatización industrial, IA y soluciones IoT integradas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="wania-cyan" size="lg">
              Ver soluciones
            </Button>
            <Button variant="wania-dark" size="lg">
              Hablar con asesor
            </Button>
          </div>
        </div>

        {/* Right Visual - Network Nodes */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-96 h-96">
            {/* Central Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">
                  Wania <span className="text-wania-violet">X</span>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-wania-cyan to-wania-violet mx-auto"></div>
              </div>
            </div>

            {/* Network Nodes */}
            {Array.from({ length: 12 }).map((_, index) => {
              const angle = (index * 30) * (Math.PI / 180);
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute w-3 h-3 bg-wania-cyan rounded-full shadow-glow animate-pulse-node"
                  style={{
                    left: `calc(50% + ${x}px - 6px)`,
                    top: `calc(50% + ${y}px - 6px)`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Connection Lines */}
                  <div 
                    className="absolute w-px bg-gradient-to-r from-wania-cyan/60 to-transparent origin-left"
                    style={{
                      height: `${radius}px`,
                      transform: `rotate(${angle + 180}deg)`,
                      left: '50%',
                      top: '50%'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;