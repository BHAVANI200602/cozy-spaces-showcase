import heroImage from '@/assets/hero-furniture.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Furniture that
          <span className="block text-accent-light">Transforms Spaces</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Discover handcrafted furniture that brings warmth, style, and functionality to your home. 
          With 8+ years of trusted craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-hero">
            Explore Collection
          </button>
          <button className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary-foreground/30 border border-primary-foreground/30">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;