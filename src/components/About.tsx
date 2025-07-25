import { motion } from 'framer-motion';
import { Award, Users, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "8+ Years Experience",
      description: "Crafting quality furniture with expertise and passion"
    },
    {
      icon: Users,
      title: "Trusted by Customers",
      description: "Building relationships through quality and service"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every piece meets our highest standards"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About FurniCraft
          </h2>
          <div className="max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              For over 8 years, FurniCraft has been your trusted partner in creating beautiful, 
              functional living spaces. We specialize in handcrafted furniture that combines 
              timeless design with modern functionality, ensuring every piece not only looks 
              stunning but stands the test of time.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our commitment to quality craftsmanship, sustainable materials, and customer 
              satisfaction has made us a preferred choice for homeowners who value both 
              style and substance in their furniture choices.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;