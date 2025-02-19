import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import CampingBenefits from "@/components/campings/CampingBenefits";
import CampingFeatures from "@/components/campings/CampingFeatures";
import ModuleUsesGrid from "@/components/campings/ModuleUsesGrid";

const Campings = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">
            Soluciones para Campings
          </h1>
          
          <div className="max-w-7xl mx-auto space-y-16">
            <section className="animate-slideInLeft">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Moderniza tu Camping con Unimodul</h2>
              <p className="text-gray-600 mb-4 hover:text-gray-900 transition-colors duration-300">
                Transforma tu camping en un destino premium con nuestras soluciones modulares.
                Diseñadas específicamente para el sector turístico, nuestras unidades combinan
                durabilidad, confort y diseño para maximizar la rentabilidad de tu negocio.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <CampingBenefits />
              <CampingFeatures />
            </section>

            <ModuleUsesGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Campings;