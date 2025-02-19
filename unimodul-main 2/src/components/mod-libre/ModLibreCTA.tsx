import React from 'react';
import { Link } from 'react-router-dom';

export const ModLibreCTA = () => {
  return (
    <div className="bg-secondary text-white p-8 rounded-lg mb-16 transition-all duration-300 hover:animate-lightning">
      <h2 className="text-2xl font-light mb-4 text-center">¿IMAGINAMOS JUNTOS TU PROYECTO?</h2>
      <div className="text-center">
        <Link
          to="/contacto"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
};