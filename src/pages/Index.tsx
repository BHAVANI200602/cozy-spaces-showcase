import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HorizontalCategories from '@/components/HorizontalCategories';
import About from '@/components/About';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HorizontalCategories />
      <About />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
