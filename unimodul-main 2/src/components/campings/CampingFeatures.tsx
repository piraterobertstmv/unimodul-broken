import React from 'react';

const CampingFeatures = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInRight hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-3">Características Especiales</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-primary transition-colors duration-300">✓ Resistencia a condiciones climáticas</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Diseño optimizado para turistas</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Fácil mantenimiento y limpieza</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Opciones de mobiliario incluido</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Sistemas de seguridad integrados</li>
      </ul>
    </div>
  );
};

export default CampingFeatures;