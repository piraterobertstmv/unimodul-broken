import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";

const images = [
  "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png",
  "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png",
  "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png",
  "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png",
  "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png",
  "/lovable-uploads/9f46670e-d230-45c2-83fd-c50c86963d9f.png",
  "/lovable-uploads/6fe0c0b8-e6d5-4666-b36e-6e86b1b2a372.png",
  "/lovable-uploads/ad063972-7478-43de-bf95-957dde19de94.png",
  "/lovable-uploads/c88e90b6-b364-41fb-b61f-beb182e090e0.png",
  "/lovable-uploads/6b3e84fa-84a0-44af-8e48-9ed284c56602.png",
  "/lovable-uploads/b8d7324b-eb18-4590-b2f2-9764ad2870f6.png"
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload initial and next image
    const preloadImages = async () => {
      setIsLoading(true);
      try {
        const imagePromises = [currentIndex, (currentIndex + 1) % images.length].map(
          (index) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = images[index];
              img.onload = () => {
                setLoadedImages((prev) => new Set([...prev, index]));
                resolve(null);
              };
              img.onerror = reject;
            })
        );
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
      setIsLoading(false);
    };

    preloadImages();

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div ref={sliderRef} className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute w-full h-full transition-all duration-500 ${
            index === currentIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"
          } ${loadedImages.has(index) ? "lazy-image loaded" : "lazy-image"}`}
          style={{ willChange: "transform, opacity" }}
        >
          {isLoading && index === currentIndex && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Loader className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}
          <img
            src={loadedImages.has(index) ? image : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
            data-src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      ))}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 focus:outline-none ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};