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

const ModStudio = () => {
  const images = [
    "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png",
    "/lovable-uploads/18889e5c-bb5f-4c2c-ac5b-339249e5ac30.png",
    "/lovable-uploads/a728b20e-07be-4a9b-8b51-2ddb48142593.png",
    "/lovable-uploads/a83a0864-8f66-4615-9663-48d823a4f1e2.png",
    "/lovable-uploads/f94c341d-98e0-4f19-bfd6-7bc970207b21.png",
    "/lovable-uploads/0c99ccc6-6cc4-42ea-b623-e8acdef42f78.png",
    "/lovable-uploads/6439b036-09a6-43e4-bc6b-c0d02f1dbc8c.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-6">MOD|STUDIO</h1>
              <p className="text-3xl font-light text-gray-800">€900/m²</p>
              <p className="text-lg text-gray-600 mt-2">20'x10' (6.1m x 3.0m)</p>
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
                          alt={`Vista MOD.STUDIO ${index + 1}`}
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
                <h2 className="text-2xl font-light mb-4">ACERCA DE MOD STUDIO</h2>
                <p className="text-gray-600">
                  El MOD STUDIO es nuestro modelo más versátil y compacto hasta la fecha. Perfecto como oficina en casa, casa de huéspedes o refugio en el jardín. Con su diseño elegante y acabados modernos, el MOD STUDIO ofrece tanto estilo como funcionalidad en un espacio más reducido.
                </p>
              </div>
              <div>
                <img
                  src={images[1]}
                  alt="Vista adicional MOD.STUDIO"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">DIMENSIONES EXTERIORES</h3>
                <p className="text-gray-600">20'x10' (6.1m)</p>
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
                  <li>• Espacio Principal</li>
                  <li>• Baño Completo</li>
                  <li>• Cocineta</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">OPCIONES DISPONIBLES</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Acabados Interiores Personalizados</li>
                  <li>• Integración Domótica</li>
                  <li>• Preparación para Paneles Solares</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">CONSTRUCCIÓN</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Exterior Metálico Negro</li>
                  <li>• Ventanas de Doble Acristalamiento</li>
                  <li>• Paredes Aisladas</li>
                  <li>• Terraza de Madera</li>
                </ul>
              </div>
            </div>

            {/* Planos Section */}
            <div className="mb-16">
              <h3 className="text-xl font-light mb-4">PLANOS</h3>
              <img
                src="/lovable-uploads/0370276d-23f1-4ed1-aec4-12823772854d.png"
                alt="Plano arquitectónico"
                className="w-full object-contain"
              />
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

export default ModStudio;
