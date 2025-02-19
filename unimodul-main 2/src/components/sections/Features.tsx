import { ChevronDown } from "lucide-react";

export const Features = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fadeIn">
          Diseños únicos que se adaptan a tu estilo de vida
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Diseño Arquitectónico",
              description: "Espacios modernos que combinan estética y funcionalidad para crear ambientes únicos y personalizados."
            },
            {
              title: "Construcción Superior",
              description: "Utilizamos materiales de primera calidad y técnicas innovadoras para garantizar durabilidad y eficiencia."
            },
            {
              title: "Estilo de Vida",
              description: "Creamos espacios que se adaptan a tu forma de vivir, trabajar y disfrutar cada momento."
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 animate-scaleIn`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center justify-between">
                {feature.title}
                <ChevronDown className="w-5 h-5 animate-float" />
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};