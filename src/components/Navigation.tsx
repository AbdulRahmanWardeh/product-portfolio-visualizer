
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <nav 
        className={`px-5 lg:px-8 py-4 rounded-full bg-navy flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="flex items-center gap-4">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d229140bb3ada634d6415451a7a16e3c2df7a8a" 
            alt="Logo" 
            className="w-[42px] h-[42px] lg:w-[63px] lg:h-[64px] object-contain animate-fade-in"
          />
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67e574853223ce088482f8f91be6e068cb2bcd38" 
            alt="Ishraqit Shams" 
            className="w-[90px] h-[32px] lg:w-[120px] lg:h-[43px] object-contain animate-fade-in" 
          />
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {['Home', 'Categories', 'Our Products', 'Contact Us', 'About Us'].map((item, index) => (
            <Link 
              key={index} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white font-serif text-lg relative overflow-hidden group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="border border-blue rounded-full px-4 py-1.5">
            <span className="text-white font-serif text-base">ENG</span>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy mt-2 rounded-2xl shadow-xl py-4 px-6 animate-fade-in">
          {['Home', 'Categories', 'Our Products', 'Contact Us', 'About Us'].map((item, index) => (
            <Link 
              key={index} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-white font-serif text-lg py-3 border-b border-white/10 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
