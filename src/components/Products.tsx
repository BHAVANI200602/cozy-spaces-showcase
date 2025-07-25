import { motion } from 'framer-motion';
import { categories, getProductsByCategory } from '@/data/products';
import ProductImageCarousel from './ProductImageCarousel';

const Products = () => {

  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Luxury Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of premium furniture pieces, 
            each designed to enhance your living space with unparalleled luxury and style.
          </p>
        </motion.div>

        {/* Render products by category */}
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.id);
          
          if (categoryProducts.length === 0) return null;
          
          return (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{category.name}</h3>
              <p className="text-muted-foreground mb-8">
                Available subcategories: {category.subcategories.join(', ')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryProducts.map((product, index) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="card-furniture group cursor-pointer"
                  >
                    <ProductImageCarousel 
                      images={product.images} 
                      productName={product.name}
                    />
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {product.subcategory}
                        </p>
                        {product.description && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {product.description}
                          </p>
                        )}
                      </div>
                      
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-know-more w-full"
                      >
                        Know More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;