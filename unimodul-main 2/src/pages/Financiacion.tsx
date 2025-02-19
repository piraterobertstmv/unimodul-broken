import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Link } from "react-router-dom";

const Financiacion = () => {
  const options = [
    {
      title: "Particulares",
      description: "Financiación personalizada para viviendas unifamiliares",
      image: "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png",
      route: "/financiacion-particulares"
    },
    {
      title: "Empresas",
      description: "Soluciones financieras para proyectos empresariales",
      image: "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png",
      route: "/financiacion-empresas"
    },
    {
      title: "Inversores",
      description: "Oportunidades de inversión con alta rentabilidad",
      image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
      route: "/financiacion-inversores"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Financiación
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
            Descubre nuestras opciones de financiación adaptadas a tus necesidades
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <Link
                key={option.title}
                to={option.route}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scaleIn h-[400px] cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-200 mb-4">{option.description}</p>
                  <span className="inline-block bg-primary text-white px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Más Información
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Financiacion;