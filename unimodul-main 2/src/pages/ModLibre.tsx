import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ModLibreHeader } from "@/components/mod-libre/ModLibreHeader";
import { ModLibreCarousel } from "@/components/mod-libre/ModLibreCarousel";
import { ModLibreDescription } from "@/components/mod-libre/ModLibreDescription";
import { ModLibreFeatures } from "@/components/mod-libre/ModLibreFeatures";
import { ModLibreCTA } from "@/components/mod-libre/ModLibreCTA";
import { ModLibreOtherModels } from "@/components/mod-libre/ModLibreOtherModels";

const ModLibre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ModLibreHeader />
            <ModLibreCarousel />
            <ModLibreDescription />
            <ModLibreFeatures />
            <ModLibreCTA />
            <ModLibreOtherModels />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModLibre;