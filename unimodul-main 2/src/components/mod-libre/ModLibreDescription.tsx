import React from 'react';

export const ModLibreDescription = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div>
        <h2 className="text-2xl font-light mb-4">ACERCA DE MOD LIBRE</h2>
        <p className="text-gray-600">
          MOD LIBRE representa la máxima expresión de la versatilidad en construcción modular. Desde un compacto estudio hasta un majestuoso chalet de 300m², o incluso un complejo de 500 bungalows, las posibilidades son infinitas. Nos adaptamos a cualquier necesidad, visión o escala de proyecto que puedas imaginar.
        </p>
      </div>
      <div>
        <img
          src="/lovable-uploads/b8d7324b-eb18-4590-b2f2-9764ad2870f6.png"
          alt="Vista adicional MOD.LIBRE"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};