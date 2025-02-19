import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Stories = () => {
  const stories = [
    {
      title: "De Sueño a Realidad",
      author: "María González",
      quote: "Unimodul transformó mi pequeño espacio en un hogar perfecto.",
      image: "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png",
      link: "/historia-1"
    },
    {
      title: "Innovación en Diseño",
      author: "Carlos Ruiz",
      quote: "La flexibilidad de los módulos superó todas mis expectativas.",
      image: "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png",
      link: "/historia-2"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Historias de Éxito
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn delay-100">
            Descubre cómo Unimodul ha transformado espacios y vidas
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {stories.map((story, index) => (
              <Link
                to={story.link}
                key={story.title}
                className="relative group animate-scaleIn cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                    <p className="text-white text-lg italic mb-2">"{story.quote}"</p>
                    <p className="text-white/80">- {story.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;