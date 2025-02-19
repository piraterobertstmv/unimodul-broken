import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const SuccessStory2 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/historias" className="text-primary hover:text-primary/80 mb-8 inline-block">
              ← Volver a Historias
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Innovación en Diseño: El Caso de Carlos
            </h1>
            
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
                alt="Proyecto de Carlos"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6 italic">
                "La flexibilidad de los módulos superó todas mis expectativas. Ahora tengo un espacio que se adapta a mis necesidades cambiantes."
              </p>

              <p className="mb-6">
                Carlos Ruiz, un arquitecto con una visión muy clara de lo que quería, buscaba una solución que pudiera evolucionar con el tiempo. Su proyecto requería una aproximación única que combinara funcionalidad con diseño vanguardista.
              </p>

              <h2 className="text-2xl font-bold mb-4">El Desafío</h2>
              <p className="mb-6">
                Carlos necesitaba un espacio que pudiera servir tanto como estudio de arquitectura como sala de reuniones con clientes, y que además pudiera transformarse para eventos sociales ocasionales.
              </p>

              <h2 className="text-2xl font-bold mb-4">La Solución Unimodul</h2>
              <p className="mb-6">
                Desarrollamos un sistema personalizado que incluía:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Paneles móviles para dividir espacios según la necesidad</li>
                <li>Mobiliario modular que puede reconfigurase fácilmente</li>
                <li>Sistemas de iluminación adaptables</li>
                <li>Soluciones de almacenamiento oculto</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">El Resultado</h2>
              <p className="mb-6">
                El espacio de Carlos se ha convertido en un showroom viviente de las posibilidades que ofrece el diseño modular. Sus clientes quedan impresionados por la versatilidad del espacio, y su productividad ha aumentado gracias a un entorno que se adapta perfectamente a sus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory2;