import React from 'react';

const CampingBenefits = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInLeft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-3">Beneficios para tu Negocio</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-primary transition-colors duration-300">✓ Rápida implementación y retorno de inversión</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Diseños atractivos que destacan</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Bajo mantenimiento y alta durabilidad</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Certificaciones turísticas incluidas</li>
        <li className="hover:text-primary transition-colors duration-300">✓ Personalización según tu marca</li>
      </ul>
    </div>
  );
};

export default CampingBenefits;