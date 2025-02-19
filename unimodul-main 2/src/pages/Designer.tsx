import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Designer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("emails")
        .insert({ email });

      if (error) throw error;

      toast({
        title: "¡Suscripción exitosa!",
        description: "Te mantendremos informado sobre nuestras novedades.",
      });

      setEmail("");
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Error",
        description: "No se pudo procesar tu suscripción. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Diseñador 3D en Desarrollo
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fadeIn delay-100">
              Estamos trabajando en una experiencia única de diseño en 3D para que puedas visualizar y personalizar tu espacio modular de manera interactiva.
            </p>
            
            <div 
              className="bg-secondary/5 p-8 rounded-lg mb-12 animate-scaleIn relative group overflow-hidden"
              style={{
                backgroundImage: 'url("/lovable-uploads/aec0d1b8-68e7-41f9-8a16-1d724584e6f9.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/90 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-secondary group-hover:text-white transition-colors">
                  Mantente Informado
                </h2>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                  Suscríbete a nuestra newsletter para recibir artículos sobre construcción, real estate y las últimas novedades de Unimodul.
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Suscribirse"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Artículos de Construcción</h3>
                <p className="text-gray-600">Las últimas tendencias y avances en el sector de la construcción modular.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Real Estate</h3>
                <p className="text-gray-600">Análisis del mercado inmobiliario y oportunidades de inversión.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Novedades Unimodul</h3>
                <p className="text-gray-600">Actualizaciones sobre nuestros productos y servicios.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Designer;