import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const DesktopNav = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center space-x-8">
      <div className="flex space-x-6">
        <Link to="/nosotros" className="nav-link">
          Nosotros
        </Link>
        <Link to="/modelos" className="nav-link">
          ¿Quién eres?
        </Link>
        <Link to="/financiacion" className="nav-link">
          Financiación
        </Link>
        <Link to="/historias" className="nav-link">
          Historias
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/contacto" className="nav-link">
          Contacto
        </Link>
      </div>
      <Button 
        className="bg-primary hover:bg-primary/90 text-white"
        onClick={() => navigate("/designer")}
      >
        Diseñar Ahora
      </Button>
    </div>
  );
};