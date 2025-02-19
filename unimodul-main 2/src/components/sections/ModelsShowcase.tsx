import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const models = [
  {
    id: 1,
    name: 'MOD.STUDIO',
    image: '/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png',
    route: '/productos/mod-studio'
  },
  {
    id: 2,
    name: 'MOD.ONE',
    image: '/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png',
    route: '/productos/mod-one'
  },
  {
    id: 3,
    name: 'MOD.TWO',
    image: '/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png',
    route: '/productos/mod-two'
  },
  {
    id: 4,
    name: 'MOD.LIBRE',
    image: '/lovable-uploads/298a4051-327c-4efd-9e25-e6ab9933b6e9.png',
    route: '/productos/mod-libre'
  }
];

export const ModelsShowcase = () => {
  const [activeModel, setActiveModel] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleModelClick = (route: string) => {
    console.log('Navigating to:', route); // Add logging
    navigate(route);
  };

  return (
    <section ref={sectionRef} className="relative min-h-[400px] md:min-h-[600px] overflow-hidden section-transition">
      <div className="absolute inset-0 flex items-center justify-center">
        {models.map((model) => (
          <img
            key={model.id}
            src={model.image}
            alt={model.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              activeModel === model.id ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] text-white space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {models.map((model) => (
              <div
                key={model.id}
                className={cn(
                  'cursor-pointer transition-all duration-300 text-center md:text-left',
                  activeModel === model.id
                    ? 'scale-110 opacity-100'
                    : 'opacity-70 hover:opacity-100'
                )}
                onMouseEnter={() => setActiveModel(model.id)}
                onTouchStart={() => setActiveModel(model.id)}
                onClick={() => handleModelClick(model.route)}
              >
                <h3 className="text-xl md:text-2xl font-bold">{model.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};