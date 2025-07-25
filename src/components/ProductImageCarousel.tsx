import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <motion.div 
        className="relative overflow-hidden rounded-lg aspect-square"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${productName} - View ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: isZoomed ? 1.5 : 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </AnimatePresence>

        {/* Zoom Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-4 right-4 bg-background/80 p-2 rounded-full"
        >
          <ZoomIn size={16} className="text-foreground" />
        </motion.div>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} className="text-foreground" />
            </motion.button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`
                  w-2 h-2 rounded-full transition-colors
                  ${index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/50'}
                `}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* 360-degree rotation effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-4 left-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
          Hover to explore
        </div>
      </motion.div>
    </div>
  );
};

export default ProductImageCarousel;