
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const parallaxScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', parallaxScroll);
    return () => window.removeEventListener('scroll', parallaxScroll);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 w-full h-full">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab76998e0c608cb0dd9b8756c23603152cc3045d" 
          alt="Industrial Equipment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Precision. Innovation. Excellence.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our premium collection of industrial equipment designed to transform your manufacturing capabilities.
          </p>
          <button 
            onClick={scrollToProducts}
            className="mx-auto bg-white/10 backdrop-blur-md text-white rounded-full px-8 py-4 flex items-center gap-2 border border-white/20 transition-all hover:bg-white/20"
          >
            <span className="font-medium">Explore Our Products</span>
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
