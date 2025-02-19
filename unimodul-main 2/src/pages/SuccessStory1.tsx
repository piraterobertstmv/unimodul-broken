import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const SuccessStory1 = () => {
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
              De Sueño a Realidad: La Historia de María
            </h1>
            
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png"
                alt="Casa de María"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6 italic">
                "Unimodul transformó mi pequeño espacio en un hogar perfecto. Nunca pensé que podría tener un diseño tan funcional y hermoso en un espacio tan compacto."
              </p>

              <p className="mb-6">
                María González, una profesional independiente, se enfrentaba al desafío de vivir en un espacio reducido en el centro de la ciudad. Su sueño era tener un hogar que reflejara su estilo de vida moderno sin comprometer la funcionalidad.
              </p>

              <h2 className="text-2xl font-bold mb-4">El Desafío</h2>
              <p className="mb-6">
                Con solo 45 metros cuadrados disponibles, María necesitaba una solución que maximizara cada centímetro de su espacio. Quería una zona de trabajo, un área de entretenimiento y un dormitorio confortable, todo sin que el espacio se sintiera abarrotado.
              </p>

              <h2 className="text-2xl font-bold mb-4">La Solución Unimodul</h2>
              <p className="mb-6">
                Nuestro equipo diseñó una solución modular que incluía:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Muebles transformables que se adaptan a diferentes necesidades durante el día</li>
                <li>Sistemas de almacenamiento integrados en las paredes</li>
                <li>Un diseño que maximiza la luz natural</li>
                <li>Espacios multifuncionales que pueden transformarse según la ocasión</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">El Resultado</h2>
              <p className="mb-6">
                Hoy, María disfruta de un espacio que no solo cumple con todas sus necesidades funcionales, sino que también refleja perfectamente su estilo personal. Su hogar se ha convertido en un ejemplo de cómo la modularidad y el diseño inteligente pueden transformar cualquier espacio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory1;