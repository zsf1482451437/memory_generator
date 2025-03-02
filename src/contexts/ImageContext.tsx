import React, { createContext, useContext, useState } from 'react';

interface TimelineImage {
  id: string;
  url: string;
  time: string;
}

interface ImageContextType {
  images: TimelineImage[];
  addImage: (image: TimelineImage) => void;
  removeImage: (id: string) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<TimelineImage[]>([]);

  const addImage = (image: TimelineImage) => {
    setImages(prev => [...prev, image]);
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(image => image.id !== id));
  };

  return (
    <ImageContext.Provider value={{ images, addImage, removeImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
