import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ModTwo = () => {
  const images = [
    "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png",
    "/lovable-uploads/6b3e84fa-84a0-44af-8e48-9ed284c56602.png",
    "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png",
    "/lovable-uploads/9f46670e-d230-45c2-83fd-c50c86963d9f.png",
    "/lovable-uploads/ad063972-7478-43de-bf95-957dde19de94.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-6">MOD|TWO</h1>
              <p className="text-3xl font-light text-gray-800">€900/m²</p>
              <p className="text-lg text-gray-600 mt-2">35'x15' (10.7m x 4.6m)</p>
            </div>

            <div className="mb-16">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[600px]">
                        <img
                          src={image}
                          alt={`Vista MOD.TWO ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Description Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-light mb-4">ACERCA DE MOD TWO</h2>
                <p className="text-gray-600">
                  El MOD TWO es nuestro modelo más espacioso, diseñado para familias que buscan un hogar completo. Con amplias áreas comunes y múltiples habitaciones, este modelo ofrece todo el confort de una casa tradicional con la eficiencia de la construcción modular.
                </p>
              </div>
              <div>
                <img
                  src={images[1]}
                  alt="Vista adicional MOD.TWO"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">DIMENSIONES EXTERIORES</h3>
                <p className="text-gray-600">35'x15' (10.7m x 4.6m)</p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">CIMENTACIÓN</h3>
                <p className="text-gray-600">Opciones disponibles de losa de concreto o cimentación elevada</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">DISTRIBUCIÓN</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Sala de Estar Amplia</li>
                  <li>• 2 Habitaciones</li>
                  <li>• 2 Baños Completos</li>
                  <li>• Cocina Integral</li>
                  <li>• Comedor</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">OPCIONES DISPONIBLES</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Acabados Premium</li>
                  <li>• Sistema de Climatización Dual</li>
                  <li>• Domótica Integrada</li>
                  <li>• Sistema de Energía Solar</li>
                  <li>• Almacenamiento Adicional</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">CONSTRUCCIÓN</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Exterior Metálico Negro</li>
                  <li>• Ventanas de Triple Acristalamiento</li>
                  <li>• Aislamiento Térmico Premium</li>
                  <li>• Terraza Extendida</li>
                  <li>• Techo Alto</li>
                </ul>
              </div>
            </div>

            {/* Planos Section */}
            <div className="mb-16">
              <h3 className="text-xl font-light mb-4">PLANOS</h3>
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/0370276d-23f1-4ed1-aec4-12823772854d.png"
                  alt="Plano arquitectónico"
                  className="w-full object-contain"
                />
                <img
                  src="/lovable-uploads/3fde572c-b76a-4824-8521-a81b1d719aae.png"
                  alt="Plano arquitectónico detallado"
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-secondary text-white p-8 rounded-lg mb-16 transition-all duration-300 hover:animate-lightning">
              <h2 className="text-2xl font-light mb-4 text-center">COMENCEMOS TU PROYECTO</h2>
              <div className="text-center">
                <Link
                  to="/contacto"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* More Models Section */}
            <div>
              <h2 className="text-2xl font-light mb-8">MÁS MODELOS</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Link to="/productos/mod-studio" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
                      alt="MOD.STUDIO"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|STUDIO</h3>
                      <p className="text-white/80">€900/m²</p>
                    </div>
                  </div>
                </Link>
                <Link to="/productos/mod-one" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png"
                      alt="MOD.ONE"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|ONE</h3>
                      <p className="text-white/80">€900/m²</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModTwo;
