import React from 'react';

export const ModLibreFeatures = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div>
        <h3 className="text-xl font-light mb-4">POSIBILIDADES</h3>
        <ul className="text-gray-600 space-y-2">
          <li>• Estudios Compactos</li>
          <li>• Viviendas Unifamiliares</li>
          <li>• Chalets de Lujo</li>
          <li>• Complejos Residenciales</li>
          <li>• Desarrollos Turísticos</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-light mb-4">VENTAJAS</h3>
        <ul className="text-gray-600 space-y-2">
          <li>• Diseño Personalizado</li>
          <li>• Modularidad Total</li>
          <li>• Escalabilidad</li>
          <li>• Eficiencia Energética</li>
          <li>• Rapidez de Construcción</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-light mb-4">CARACTERÍSTICAS</h3>
        <ul className="text-gray-600 space-y-2">
          <li>• Combinaciones Ilimitadas</li>
          <li>• Acabados Premium</li>
          <li>• Tecnología Avanzada</li>
          <li>• Sostenibilidad</li>
          <li>• Calidad Superior</li>
        </ul>
      </div>
    </div>
  );
};