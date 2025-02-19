import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Inversores = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">Oportunidades para Inversores</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="animate-slideInLeft">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Inversión en el Futuro de la Construcción</h2>
              <p className="text-gray-600 mb-4 hover:text-gray-900 transition-colors duration-300">
                Unimodul ofrece oportunidades únicas de inversión en el creciente mercado
                de la construcción modular. Nuestro modelo de negocio combina innovación,
                sostenibilidad y rentabilidad para crear valor a largo plazo.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInLeft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3">Ventajas de Inversión</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-primary transition-colors duration-300">✓ Retorno de inversión atractivo</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Mercado en crecimiento exponencial</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Modelo de negocio escalable</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Diversificación del portfolio</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Inversión en tecnología verde</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInRight hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3">Oportunidades de Mercado</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-primary transition-colors duration-300">✓ Desarrollo residencial modular</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Proyectos turísticos</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Espacios comerciales</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Franquicias Unimodul</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Participación en innovación</li>
                </ul>
              </div>
            </section>

            <section className="animate-scaleIn">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Modelos de Inversión</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Desarrollo de Proyectos</h3>
                  <p className="text-gray-600">Inversión en proyectos específicos</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Participación Empresarial</h3>
                  <p className="text-gray-600">Inversión en el crecimiento de Unimodul</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Franquicias</h3>
                  <p className="text-gray-600">Desarrollo de mercados locales</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inversores;