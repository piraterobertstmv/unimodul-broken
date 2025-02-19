import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          to="/nosotros"
          className="block px-3 py-2 nav-link"
          onClick={onClose}
        >
          Nosotros
        </Link>
        <Link
          to="/modelos"
          className="block px-3 py-2 nav-link"
          onClick={onClose}
        >
          Quién eres?
        </Link>
        <Link
          to="/financiacion"
          className="block px-3 py-2 nav-link"
          onClick={onClose}
        >
          Financiación
        </Link>
        <Link
          to="/historias"
          className="block px-3 py-2 nav-link"
          onClick={onClose}
        >
          Historias
        </Link>
        <Link
          to="/blog"
          className="block px-3 py-2 nav-link"
          onClick={onClose}
        >
          Blog
        </Link>
        <Link
          to="/contacto"
          className="block px-3 py-2 nav-link"
          onClick={onClose}
        >
          Contacto
        </Link>
        <div className="px-3 py-2">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={() => {
              navigate("/designer");
              onClose();
            }}
          >
            Diseñar Ahora
          </Button>
        </div>
      </div>
    </div>
  );
};