import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useNavigate } from "react-router-dom";
import { Building2, TrendingUp, Users, Wallet } from "lucide-react";

const FinanciacionInversores = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Proyectos Premium",
      description: "Acceso a proyectos inmobiliarios de alta calidad con ubicaciones estratégicas"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Alta Rentabilidad",
      description: "Retornos atractivos superiores a la media del mercado inmobiliario tradicional"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Equipo Experto",
      description: "Respaldo de profesionales con amplia experiencia en el sector modular"
    },
    {
      icon: <Wallet className="w-12 h-12 text-primary" />,
      title: "Inversión Flexible",
      description: "Diferentes opciones de participación adaptadas a tu capacidad de inversión"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Invierte en el Futuro de la Construcción
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Únete a Unimodul y sé parte de la revolución en el sector inmobiliario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 animate-slideInLeft">
            <h2 className="text-3xl font-bold mb-6 text-center">
              ¿Por qué invertir con Unimodul?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 mb-8">
              <p>
                La construcción modular está revolucionando el sector inmobiliario, ofreciendo 
                rentabilidades superiores gracias a la reducción de tiempos y costes de construcción.
              </p>
              <p>
                En Unimodul, combinamos innovación tecnológica con un profundo conocimiento 
                del mercado para crear proyectos exitosos que generan retornos atractivos 
                para nuestros inversores.
              </p>
              <p>
                Nuestro modelo de negocio permite una rápida ejecución de proyectos, 
                minimizando riesgos y maximizando la rentabilidad de tu inversión.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => navigate("/contacto")}
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-scaleIn"
              >
                Trabajemos Juntos
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinanciacionInversores;