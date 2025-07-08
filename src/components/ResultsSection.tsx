const results = [
  {
    value: "+40%",
    label: "Eficiencia operativa"
  },
  {
    value: "−35%",
    label: "Costos de mantenimiento"
  },
  {
    value: "+25",
    label: "Plataformas integradas"
  }
];

const ResultsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-glow">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-wania-cyan mb-16">
          Resultados que hablan
        </h2>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-wania-cyan to-wania-violet bg-clip-text text-transparent">
                  {result.value}
                </span>
              </div>
              <p className="text-lg text-muted-foreground font-medium">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;