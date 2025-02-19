export const ProductOfferings = () => {
  return (
    <section className="section-padding container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
        Preparado para Diversas Historias
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Estudio",
            description: "Perfecto para espacio personal y creatividad",
            image: "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png",
          },
          {
            title: "Oficina",
            description: "Optimizado para ambientes de trabajo productivos",
            image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png",
          },
          {
            title: "Hogar",
            description: "Ideal para una vida familiar confortable",
            image: "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png",
          },
        ].map((product, index) => (
          <div
            key={product.title}
            className="feature-card bg-white rounded-lg overflow-hidden animate-scaleIn hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};