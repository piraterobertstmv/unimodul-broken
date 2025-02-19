import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Check, Clock, Headphones, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn hover:scale-105 transition-all duration-300">
              Nuestro Proceso Integral
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl animate-fadeIn hover:text-white transition-colors duration-300">
              Nos encargamos de cada detalle para que tu solo te preocupes de disfrutar tu nuevo espacio. Desde la planificación inicial hasta la entrega final, todo está cubierto.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Garantía Total",
                  description: "Respaldamos cada aspecto del proyecto con garantías completas"
                },
                {
                  icon: Clock,
                  title: "Tiempo Optimizado",
                  description: "Cumplimos con los plazos establecidos sin comprometer la calidad"
                },
                {
                  icon: Check,
                  title: "Control de Calidad",
                  description: "Supervisión constante en cada etapa del proceso"
                },
                {
                  icon: Headphones,
                  title: "Soporte 24/7",
                  description: "Estamos siempre disponibles para resolver tus dudas"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gray-50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4 hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 hover:scale-105 transition-transform duration-300">
              Proceso Detallado
            </h2>
            
            {[
              {
                phase: "Fase 1: Diseño y Consultoría",
                steps: [
                  "Reunión inicial para entender tus necesidades y visión",
                  "Análisis del terreno y condiciones específicas",
                  "Desarrollo de propuestas de diseño personalizadas",
                  "Presentación de renders y visualizaciones 3D",
                  "Ajustes y refinamiento del diseño final",
                  "Planificación detallada del presupuesto",
                  "Cronograma de trabajo específico"
                ]
              },
              {
                phase: "Fase 2: Fabricación y Control de Calidad",
                steps: [
                  "Selección de materiales premium",
                  "Fabricación modular en ambiente controlado",
                  "Inspecciones de calidad en cada etapa",
                  "Pruebas de resistencia y durabilidad",
                  "Acabados y detalles personalizados",
                  "Certificación de calidad",
                  "Preparación para el transporte"
                ]
              },
              {
                phase: "Fase 3: Logística e Instalación",
                steps: [
                  "Preparación del terreno",
                  "Gestión de permisos necesarios",
                  "Coordinación del transporte especializado",
                  "Instalación por equipo experto",
                  "Conexiones a servicios básicos",
                  "Pruebas de funcionamiento",
                  "Limpieza y acabados finales"
                ]
              }
            ].map((phase, index) => (
              <div 
                key={index}
                className="relative mb-16 last:mb-0 pl-8 border-l-2 border-primary hover:pl-12 transition-all duration-300"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary hover:scale-150 transition-transform duration-300"></div>
                <h3 className="text-2xl font-bold mb-6 text-secondary hover:text-primary transition-colors duration-300">
                  {phase.phase}
                </h3>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-x-2">
                  <ul className="space-y-4">
                    {phase.steps.map((step, stepIndex) => (
                      <li 
                        key={stepIndex}
                        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 hover:translate-x-2"
                      >
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 hover:scale-125 transition-transform duration-300" />
                        <span className="hover:text-primary transition-colors duration-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn hover:scale-105 transition-transform duration-300">
              ¿Listo para Comenzar tu Proyecto?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto animate-fadeIn hover:text-gray-200 transition-colors duration-300">
              Déjanos encargarnos de todo mientras tú te relajas y esperas ver tu sueño convertirse en realidad.
            </p>
            <Link to="/contacto">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 animate-scaleIn hover:scale-110 hover:shadow-lg">
                Contactar Ahora
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;