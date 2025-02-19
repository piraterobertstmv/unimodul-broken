import { Navbar } from "@/components/Navbar";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold">Política de Privacidad</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Última actualización: Marzo 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Recopilación de Información</h2>
              <p>Recopilamos información que usted nos proporciona directamente cuando utiliza nuestros servicios, incluyendo:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Preferencias de diseño y especificaciones de proyecto</li>
                <li>Información de ubicación para entregas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Procesar y gestionar sus pedidos</li>
                <li>Personalizar su experiencia</li>
                <li>Mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre su proyecto</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso, modificación o divulgación no autorizada.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Sus Derechos</h2>
              <p>Tiene derecho a:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Contacto</h2>
              <p>Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en privacy@unimodul.es</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;