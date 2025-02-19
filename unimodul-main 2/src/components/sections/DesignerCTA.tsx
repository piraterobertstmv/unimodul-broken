import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const DesignerCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center animate-scaleIn"
        style={{
          backgroundImage:
            "url('/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png')",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl animate-slideInLeft">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conviértete en Diseñador
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Diseña tu propio espacio modular con facilidad
          </p>
          <Button 
            className="cta-button hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/designer")}
          >
            Diseñar Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};