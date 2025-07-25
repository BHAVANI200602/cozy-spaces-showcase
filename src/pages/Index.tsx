import StickyNavigation from '@/components/StickyNavigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNavigation />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
