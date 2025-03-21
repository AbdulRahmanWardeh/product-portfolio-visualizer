
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-8">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52c569b69d2300988a90dc61f161f64d7ac23dfd" 
              alt="Company Logo" 
              className="w-full max-w-[300px] h-auto"
            />
            <h3 className="text-white font-bold text-2xl">Ishraqit Shams Industrial Equipment</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-blue mt-1" />
                <span className="text-white font-serif">Amman - Jordan</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-blue" />
                <span className="text-white font-serif">+962798337984</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue" />
                <span className="text-white font-serif">info@ishraqitshams.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-bold text-2xl">Important Links</h3>
            <ul className="space-y-4">
              {['Home', 'Categories', 'Our Products', 'About Us'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white font-serif text-lg hover:text-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <Link 
                to="/contact-us" 
                className="inline-block border-2 border-blue rounded-xl px-8 py-3 text-white font-serif text-xl hover:bg-blue/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            
            <div className="mt-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="text-white font-medium mb-2 block">Subscribe to Newsletter</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email address" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
                <button type="submit" className="bg-blue text-white rounded-lg px-6 py-3 font-medium hover:bg-blue/90 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="h-px bg-blue my-10"></div>
        
        <div className="text-center">
          <p className="text-white text-sm font-medium">© {new Date().getFullYear()} All Copy Rights Are Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
