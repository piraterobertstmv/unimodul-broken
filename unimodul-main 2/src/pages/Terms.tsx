import { Navbar } from "@/components/Navbar";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold">Términos y Condiciones</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Última actualización: Marzo 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p>Al acceder y utilizar los servicios de Unimodul, usted acepta estar legalmente vinculado por estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Descripción del Servicio</h2>
              <p>Unimodul proporciona servicios de diseño y construcción de espacios modulares personalizados. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Propiedad Intelectual</h2>
              <p>Todo el contenido presente en Unimodul, incluyendo diseños, logos, textos y gráficos, está protegido por derechos de autor y otras leyes de propiedad intelectual.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Garantías y Responsabilidades</h2>
              <p>Los productos y servicios de Unimodul están sujetos a garantías específicas detalladas en los contratos individuales. No nos hacemos responsables de daños indirectos o consecuentes.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Modificaciones</h2>
              <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;