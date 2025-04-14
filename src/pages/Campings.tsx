import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Link, useNavigate } from "react-router-dom";

const useCards = [
  {
    title: "Bungalows",
    description: "Alojamiento confortable y moderno",
    image: "/lovable-uploads/298a4051-327c-4efd-9e25-e6ab9933b6e9.png"
  },
  {
    title: "Recepción",
    description: "Área de bienvenida profesional",
    image: "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png"
  },
  {
    title: "Restaurante/Bar",
    description: "Espacios gastronómicos de calidad",
    image: "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png"
  },
  {
    title: "Aseos/Duchas",
    description: "Instalaciones sanitarias modernas",
    image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png"
  },
  {
    title: "Zona de Ocio",
    description: "Espacios recreativos para huéspedes",
    image: "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
  },
  {
    title: "Lavandería",
    description: "Servicios de lavado modernos",
    image: "/lovable-uploads/6b3e84fa-84a0-44af-8e48-9ed284c56602.png"
  },
  {
    title: "Tienda",
    description: "Comercio para necesidades básicas",
    image: "/lovable-uploads/9f46670e-d230-45c2-83fd-c50c86963d9f.png"
  },
  {
    title: "Almacén",
    description: "Espacio de almacenamiento eficiente",
    image: "/lovable-uploads/ad063972-7478-43de-bf95-957dde19de94.png"
  },
  {
    title: "Sala Común",
    description: "Área social multiusos",
    image: "/lovable-uploads/b8d7324b-eb18-4590-b2f2-9764ad2870f6.png"
  },
  {
    title: "Oficinas",
    description: "Espacio administrativo funcional",
    image: "/lovable-uploads/c88e90b6-b364-41fb-b61f-beb182e090e0.png"
  },
  {
    title: "Enfermería",
    description: "Atención médica básica",
    image: "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png"
  },
  {
    title: "Zona Deportiva",
    description: "Instalaciones para actividades físicas",
    image: "/lovable-uploads/68070432-2518-4801-b3f4-37b58d2127f1.png"
  }
];

const Campings = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Soluciones para Campings
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
            Transforma tu camping en un destino premium con nuestras soluciones modulares
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {useCards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-200">{card.description}</p>
                </div>
              </div>
            ))}

            {/* Customization Card */}
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scaleIn bg-secondary"
            >
              <div className="h-64 flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">¿Tienes otra idea en mente?</h3>
                  <p className="text-gray-200 mb-6">Personaliza tu módulo según tus necesidades</p>
                  <button
                    id="campings-contact-button"
                    onClick={() => navigate("/contacto")}
                    className="block w-full bg-orange-500 text-white text-center py-4 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Diseñar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Campings;