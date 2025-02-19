import React from 'react';
import { Link } from 'react-router-dom';

export const ModLibreOtherModels = () => {
  return (
    <div>
      <h2 className="text-2xl font-light mb-8">MÁS MODELOS</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Link to="/productos/mod-studio" className="group">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
              alt="MOD.STUDIO"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-light">MOD|STUDIO</h3>
              <p className="text-white/80">€900/m²</p>
            </div>
          </div>
        </Link>
        <Link to="/productos/mod-one" className="group">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png"
              alt="MOD.ONE"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-light">MOD|ONE</h3>
              <p className="text-white/80">€900/m²</p>
            </div>
          </div>
        </Link>
        <Link to="/productos/mod-two" className="group">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png"
              alt="MOD.TWO"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-light">MOD|TWO</h3>
              <p className="text-white/80">€900/m²</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};