import { useEffect } from 'react';

// List of all images used in the application
const imageUrls = [
  '/lovable-uploads/a9dd5c9c-58e0-4df6-9c19-85abc78f043f.png',
  '/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png',
  '/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png',
  // Add all other image URLs here
];

export const ImagePreloader = () => {
  useEffect(() => {
    // Preload all images
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null;
};

// Helper function to ensure image is loaded before showing
export const useImagePreloader = (imageUrl: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.src = imageUrl;
  });
}; 