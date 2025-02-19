import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/672045c4-0536-46b5-a56e-edcd010f1005.png",
  "/lovable-uploads/b8d7324b-eb18-4590-b2f2-9764ad2870f6.png",
  "/lovable-uploads/c88e90b6-b364-41fb-b61f-beb182e090e0.png",
  "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png"
];

export const ModLibreCarousel = () => {
  return (
    <div className="mb-16">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[600px]">
                <img
                  src={image}
                  alt={`Vista MOD.LIBRE ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};