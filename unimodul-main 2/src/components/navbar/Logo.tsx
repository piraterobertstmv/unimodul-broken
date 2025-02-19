import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/a9dd5c9c-58e0-4df6-9c19-85abc78f043f.png" 
        alt="Unimodul Logo" 
        className="h-8 w-auto"
      />
    </Link>
  );
};