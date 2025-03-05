
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/b2f30f6a-2a5c-4a08-992d-40a3e4ec2395.png" 
        alt="Unimodul Logo" 
        className="h-8 w-auto"
      />
    </Link>
  );
};
