import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinanciacionParticulares = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Financiación para Particulares: Tu Casa Modular al Alcance
          </h1>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
              Descubre las opciones de financiación que ofrecemos para que puedas hacer realidad tu sueño de una casa modular. Tanto si necesitas financiar la construcción, el terreno, o ambos, aquí te contamos cómo hacerlo de forma sencilla y adaptada a tus necesidades.
            </p>

            <section className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold text-secondary">¿Cómo financiar una casa modular?</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">1. Hipoteca tradicional</h3>
                  <p className="text-gray-700">
                    Si tu casa modular está anclada al suelo, cumple con las normativas legales y está registrada en el Registro de la Propiedad, puedes optar por una hipoteca tradicional. Esta opción permite financiar tanto la construcción como el terreno si se solicitan de forma conjunta.
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">2. Préstamo personal</h3>
                  <p className="text-gray-700">
                    Para casas transportables o no registradas como inmuebles, los préstamos personales son una alternativa viable. Aunque suelen tener un interés más alto, son ideales para cantidades más pequeñas o proyectos específicos.
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Hipoteca de autopromotor</h3>
                  <p className="text-gray-700">
                    La solución perfecta para financiar proyectos personalizados de casas modulares. Este tipo de hipoteca se adapta a los costes y plazos de ejecución, liberando los fondos según avanza la obra. Además, permite períodos de carencia para flexibilizar el inicio de los pagos.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold text-secondary">¿Qué necesitas para solicitar financiación?</h2>
              <p className="text-lg text-gray-700">Para optar a una hipoteca o préstamo, asegúrate de que tu casa modular cumpla con los siguientes requisitos:</p>
              
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Terreno urbanizable:</strong> La construcción debe realizarse sobre suelo edificable.</li>
                <li><strong>Proyecto visado:</strong> Un arquitecto debe aprobar el proyecto y obtener la licencia municipal correspondiente.</li>
                <li><strong>Cimientos sólidos:</strong> La vivienda debe estar fijada al suelo.</li>
                <li><strong>Registro de la Propiedad:</strong> Si deseas una hipoteca, es indispensable registrar la casa como bien inmueble.</li>
              </ul>
              
              <p className="text-gray-700">
                Si tu casa modular no cumple con estos criterios, puedes recurrir a un préstamo personal u otra garantía real para obtener el financiamiento necesario.
              </p>
            </section>

            <section className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold text-secondary">Soluciones flexibles y adaptadas a ti</h2>
              <p className="text-lg text-gray-700">
                Independientemente del tipo de casa modular que elijas, nuestro equipo está aquí para ayudarte a encontrar la mejor solución financiera. Ya sea a través de una hipoteca, préstamo personal, o combinaciones personalizadas, trabajamos contigo para facilitarte el camino hacia tu nuevo hogar.
              </p>

              <div className="text-center mt-8">
                <Button 
                  onClick={() => navigate("/contacto")}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                >
                  ¡Contáctanos ahora y da el primer paso hacia tu casa modular!
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinanciacionParticulares;