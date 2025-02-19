import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinanciacionEmpresas = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">
            Financiación para Empresas - Unimodul
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
              En Unimodul, sabemos que cada negocio tiene necesidades únicas, y por eso ofrecemos soluciones flexibles y adaptadas para facilitar la adquisición de módulos modulares. Nuestro objetivo es que puedas implementar nuestras soluciones sin que las barreras financieras sean un problema. Te presentamos nuestras modalidades de financiación:
            </p>

            <section className="mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-4 text-secondary">Alquiler Modular</h2>
              <p className="mb-4">Esta modalidad es ideal para empresas que buscan flexibilidad sin comprometerse a largo plazo.</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Diseñamos y producimos el módulo según tus necesidades específicas.</li>
                <li>Pactamos una entrega inicial y cuotas mensuales durante la vigencia del contrato.</li>
                <li>Perfecto para negocios en expansión o proyectos temporales.</li>
              </ul>
            </section>

            <section className="mb-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-4 text-secondary">Leasing: Proyectos Llave en Mano</h2>
              <p className="mb-4">Si necesitas módulos personalizados y completos, el leasing es una opción estratégica:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Incluye la financiación para la construcción de espacios profesionales, como naves logísticas, fábricas o cualquier inmueble adaptado a tus necesidades.</li>
                <li>Opción Lease Back: Te permite vender un inmueble propio y mantener su uso como arrendatario, obteniendo liquidez inmediata con opción de compra.</li>
                <li>Posibilidad de incluir reformas, maquinaria y elementos especializados en el contrato.</li>
              </ul>
            </section>

            <section className="mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold mb-4 text-secondary">Renting de Bienes Muebles</h2>
              <p className="mb-4">Para equipos y bienes con menor vida útil o valor residual:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Contrato de alquiler sin opción de compra, ideal para maquinaria, mobiliario o tecnología.</li>
                <li>Incluye cuotas periódicas fijas y cobertura de servicios adicionales.</li>
                <li>Es fiscalmente deducible para empresas que usen estos bienes al 100 % en su actividad profesional.</li>
              </ul>
            </section>

            <section className="mb-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold mb-4 text-secondary">Ventajas de Financiación en Unimodul</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Flexibilidad Financiera: Modelos adaptados a las necesidades de tu empresa.</li>
                <li>Optimización de Recursos: Reduce costes iniciales y aprovecha ventajas fiscales.</li>
                <li>Rapidez y Eficiencia: Implementación de módulos en plazos reducidos sin comprometer la calidad.</li>
                <li>Servicio Integral: Nos encargamos de cada paso, desde el diseño hasta la instalación.</li>
              </ul>
            </section>

            <p className="text-lg mb-8 animate-fadeIn" style={{ animationDelay: '1s' }}>
              En Unimodul, facilitamos el acceso a soluciones modulares para que puedas centrarte en lo más importante: hacer crecer tu negocio.
            </p>

            <div className="text-center mt-12 animate-scaleIn" style={{ animationDelay: '1.2s' }}>
              <p className="text-xl font-semibold mb-6">
                ¿Tienes un proyecto en mente? ¡Contáctanos y descubre cómo nuestras opciones de financiación pueden ayudarte a hacerlo realidad!
              </p>
              <Button 
                onClick={() => navigate("/contacto")}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinanciacionEmpresas;