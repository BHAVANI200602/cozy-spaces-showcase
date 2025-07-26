import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '@/data/products';
import { useRef } from 'react';

const HorizontalCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container-max">
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight size={20} />
          </button>

          {/* Categories Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <motion.button
                  onClick={() => scrollToSection(category.id)}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-card border border-border rounded-xl p-6 min-w-[200px] text-left hover:border-primary glow-on-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-1">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <p key={sub} className="text-sm text-muted-foreground">
                        {sub}
                      </p>
                    ))}
                    {category.subcategories.length > 3 && (
                      <p className="text-sm text-muted-foreground font-medium">
                        +{category.subcategories.length - 3} more
                      </p>
                    )}
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCategories;