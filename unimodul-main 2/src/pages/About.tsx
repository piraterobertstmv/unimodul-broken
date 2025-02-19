import { Navbar } from "../components/Navbar";
import { Users, Heart, Target } from "lucide-react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/sections/Footer";
import { ErrorBoundary } from "../components/ErrorBoundary";

const About = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Sobre Nosotros | Unimodul</title>
          <meta name="description" content="Descubre la historia de Unimodul: innovación en construcción modular, sostenibilidad y compromiso con la calidad desde 2022. Transformando el futuro de la edificación." />
          <meta property="og:title" content="Sobre Nosotros | Unimodul" />
          <meta property="og:description" content="Descubre la historia de Unimodul: innovación en construcción modular, sostenibilidad y compromiso con la calidad desde 2022." />
          <meta property="og:image" content="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
          <link rel="icon" type="image/x-icon" href="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
        </Helmet>
        <Navbar />
        <div className="pt-24 pb-16">
          {/* Hero Section */}
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              La Historia de Unimodul: Innovación y Sostenibilidad para un Futuro Modular
            </h1>
            
            {/* Content sections with proper spacing and styling */}
            <div className="max-w-4xl mx-auto space-y-8 text-gray-600 mb-16">
              <div className="space-y-4">
                <p className="text-lg">
                  Unimodul nació de una idea visionaria: transformar la manera en que construimos para adaptarnos a las necesidades de un mundo en constante evolución. Nuestros fundadores, apasionados por la innovación tecnológica y comprometidos con el desarrollo sostenible, identificaron una problemática clara en el sector de la construcción: la ineficiencia, los altos costes y el impacto ambiental de los métodos tradicionales.
                </p>
                
                <p className="text-lg">
                  La chispa que dio vida a Unimodul surgió al observar la revolución modular en otros sectores, como la tecnología y la fabricación, y cómo este enfoque podía aplicarse a la arquitectura. En 2022, con un equipo multidisciplinar de arquitectos, ingenieros y especialistas en sostenibilidad, comenzó la aventura de Unimodul, con el objetivo de democratizar el acceso a viviendas personalizables, eficientes y sostenibles.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary mb-4">Nuestra Filosofía</h2>
                <p className="text-lg">
                  En Unimodul creemos que la construcción no debe ser un proceso complejo, costoso y contaminante. Nuestra misión es simplificarlo y hacerlo accesible para todos. Diseñamos soluciones modulares que no solo son innovadoras, sino también amigables con el medio ambiente, adaptadas a las necesidades de las personas y capaces de evolucionar junto a ellas.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary mb-4">Hacia Dónde Vamos</h2>
                <p className="text-lg">
                  Hoy, Unimodul no es solo una empresa de construcción modular; es un referente en la transformación del sector. Estamos redefiniendo el futuro de la edificación con un enfoque centrado en:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Sostenibilidad: Implementamos materiales ecológicos y procesos responsables que minimizan el impacto ambiental.</li>
                  <li>Accesibilidad: Ofrecemos soluciones asequibles, desde 900 €/m², para que más personas puedan acceder a viviendas de calidad.</li>
                  <li>Innovación: Incorporamos tecnologías de última generación en diseño, fabricación y eficiencia energética para garantizar edificaciones de alto rendimiento.</li>
                  <li>Servicio Integral: Con nuestro modelo llave en mano, acompañamos a nuestros clientes en todo el proceso, desde el diseño hasta la entrega, asegurando una experiencia sin complicaciones.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary mb-4">El Futuro Modular</h2>
                <p className="text-lg">
                  Nuestra visión es convertirnos en líderes globales de la construcción modular, expandiéndonos a mercados internacionales y ampliando nuestra gama de soluciones: desde viviendas asequibles para familias y particulares hasta espacios de trabajo flexibles y proyectos de gran escala.
                </p>
                <p className="text-lg">
                  Creemos en un futuro donde cada edificio sea una solución sostenible y eficiente. En Unimodul, construimos más que viviendas; construimos sueños y posibilidades, poniendo al alcance de todos un estilo de vida más conectado con el planeta.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Equipo Apasionado</h3>
                  <p className="text-gray-600">
                    Un equipo dedicado a crear espacios que inspiran y transforman vidas.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Compromiso con la Calidad</h3>
                  <p className="text-gray-600">
                    Cada módulo es creado con atención al detalle y materiales premium.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Innovación Constante</h3>
                  <p className="text-gray-600">
                    Siempre buscando nuevas formas de mejorar y evolucionar nuestros diseños.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default About;
