import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

const StickyNavigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky header height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky-nav"
    >
      <div className="container-max py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-primary">FurniCraft</span>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex items-center space-x-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${activeSection === category.id 
                    ? 'bg-primary text-primary-foreground shadow-gold' 
                    : 'text-muted-foreground hover:text-primary'
                  }
                `}
              >
                {category.name}
              </motion.button>
            ))}
            
            {/* Admin Panel Link */}
            <motion.a
              href="/admin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors"
            >
              Admin
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNavigation;