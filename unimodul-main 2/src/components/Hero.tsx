import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./ui/image-with-fallback";
import { Helmet } from "react-helmet";

export const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = '/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png';
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[80vh] md:min-h-screen">
      <Helmet>
        <title>Unimodul - Modern, Innovative, Prefab Homes</title>
        <meta name="description" content="Explore our modern and innovative prefab homes at Unimodul. Discover sustainable and customizable modular living solutions." />
      </Helmet>
      <div className="absolute inset-0">
        <div className="w-full md:w-[80%] h-full relative">
          <ImageWithFallback
            src="/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
            alt="Unimodul - Viviendas Modulares Sostenibles"
            className="w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              willChange: "transform",
              opacity: isImageLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="absolute right-0 top-0 w-full md:w-[20%] h-20 md:h-full bg-black" />
      </div>

      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="w-full flex justify-end mt-32 md:mt-32">
          <div className="text-3xl md:text-6xl font-bold tracking-wider animate-float flex flex-col items-start space-y-2 md:space-y-4">
            <span className="text-white drop-shadow-lg">MODERN/</span>
            <span className="text-white drop-shadow-lg">INNOVATIVE/</span>
            <span className="text-white drop-shadow-lg">PREFAB.</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 w-full md:w-[20%] md:right-0 flex flex-col items-center gap-4 md:gap-6 px-4">
        <Link
          to="/modelos"
          className="w-48 px-8 py-3 bg-white text-black font-heading hover:bg-black hover:text-white transition-all duration-300 rounded-lg text-base md:text-lg tracking-wider cursor-pointer text-center transform hover:scale-[1.02] active:scale-[0.98]"
        >
          MODELOS
        </Link>
        <Link
          to="/contacto"
          className="w-48 px-8 py-3 bg-white text-black font-heading hover:bg-black hover:text-white transition-all duration-300 rounded-lg text-base md:text-lg tracking-wider cursor-pointer text-center transform hover:scale-[1.02] active:scale-[0.98]"
        >
          CONTACTO
        </Link>
      </div>
    </div>
  );
};