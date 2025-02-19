import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      title: "Particulares",
      description: "Soluciones habitacionales para individuos y familias",
      route: "/particulares",
      bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
    },
    {
      title: "Campings",
      description: "Módulos adaptados para instalaciones turísticas",
      route: "/campings",
      bgImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    },
    {
      title: "Empresas",
      description: "Espacios comerciales y oficinas modulares",
      route: "/empresas",
      bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
    },
    {
      title: "Inversores",
      description: "Oportunidades de inversión en proyectos modulares",
      route: "/inversores",
      bgImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
    }
  ];

  const benefits = [
    {
      title: "Oficina en Casa",
      description: "Transforma tu jardín en un espacio de trabajo profesional sin obras invasivas. Instalación en días, no meses.",
      icon: "🏢"
    },
    {
      title: "Sala de Estar Adicional",
      description: "Crea un oasis de tranquilidad separado de la casa principal. Perfecto para relajarse o entretener invitados.",
      icon: "🛋️"
    },
    {
      title: "Estudio Creativo",
      description: "Un espacio dedicado para artistas, músicos o cualquier pasión creativa, con luz natural y aislamiento acústico.",
      icon: "🎨"
    },
    {
      title: "Suite para Invitados",
      description: "Ofrece privacidad y confort a tus visitantes sin grandes reformas en tu hogar principal.",
      icon: "🛏️"
    }
  ];

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="category-card h-64"
                onClick={() => handleCategoryClick(category.route)}
              >
                <img
                  src={category.bgImage}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="content">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 animate-fadeIn">
              Construcción Modular: La Opción Inteligente
            </h3>
            <p className="text-xl text-primary font-semibold text-center mb-8 animate-fadeIn delay-100">
              900€/m² - Hasta un 40% más económico que la construcción tradicional
            </p>
            <p className="text-lg text-gray-700 mb-8 animate-fadeIn delay-100">
              Construir con Unimodul significa elegir eficiencia, sostenibilidad y rapidez. Mientras la construcción tradicional puede llevar meses de obras, ruido y molestias, nuestros módulos se instalan en cuestión de días, minimizando el impacto en tu vida diaria.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 animate-fadeIn delay-500">
              <p className="text-lg text-gray-700 mb-6">
                Con Unimodul, transformas tu espacio sin el caos de la construcción tradicional. Nuestros módulos son sostenibles, eficientes energéticamente y se adaptan perfectamente a tus necesidades.
              </p>
              <button 
                onClick={() => navigate('/contacto')}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Descubre más
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;