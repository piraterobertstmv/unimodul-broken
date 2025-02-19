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

const ModOne = () => {
  const images = [
    "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
    "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png",
    "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png",
    "/lovable-uploads/68070432-2518-4801-b3f4-37b58d2127f1.png",
    "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-6">MOD|ONE</h1>
              <p className="text-3xl font-light text-gray-800">€900/m²</p>
              <p className="text-lg text-gray-600 mt-2">25'x12' (7.6m x 3.7m)</p>
            </div>

            {/* Main Image Carousel */}
            <div className="mb-16">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[600px]">
                        <img
                          src={image}
                          alt={`Vista MOD.ONE ${index + 1}`}
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
                <h2 className="text-2xl font-light mb-4">ACERCA DE MOD ONE</h2>
                <p className="text-gray-600">
                  El MOD ONE es nuestra solución compacta y eficiente para viviendas unifamiliares. Perfecto para quienes buscan optimizar el espacio sin sacrificar el confort, este modelo ofrece un diseño inteligente que maximiza cada metro cuadrado.
                </p>
              </div>
              <div>
                <img
                  src={images[1]}
                  alt="Vista adicional MOD.ONE"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">DIMENSIONES EXTERIORES</h3>
                <p className="text-gray-600">25'x12' (7.6m x 3.7m)</p>
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
                  <li>• Sala de Estar</li>
                  <li>• Habitación Principal</li>
                  <li>• Baño Completo</li>
                  <li>• Cocina Integral</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">OPCIONES DISPONIBLES</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Acabados Interiores Personalizados</li>
                  <li>• Sistema de Climatización</li>
                  <li>• Iluminación LED</li>
                  <li>• Preparación para Paneles Solares</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">CONSTRUCCIÓN</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Exterior Metálico Negro</li>
                  <li>• Ventanas de Doble Acristalamiento</li>
                  <li>• Aislamiento Térmico Premium</li>
                  <li>• Terraza de Madera</li>
                </ul>
              </div>
            </div>

            {/* Planos Section */}
            <div className="mb-16">
              <h3 className="text-xl font-light mb-4">PLANOS</h3>
              <div className="max-w-3xl mx-auto">
                <img
                  src="/lovable-uploads/4e221c77-b528-4a3b-b5fc-37bb71e2c69f.png"
                  alt="Plano arquitectónico"
                  className="w-full h-auto object-contain"
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
                <Link to="/productos/mod-two" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png"
                      alt="MOD.TWO"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|TWO</h3>
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

export default ModOne;
