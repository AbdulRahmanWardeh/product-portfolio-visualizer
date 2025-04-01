
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-5">
      <nav className="flex items-center justify-between mx-auto mt-6 px-10 py-4 rounded-full bg-white/10 backdrop-blur-lg md:mx-10 sm:mx-5 sm:px-5">
        <Link to="/" className="text-[#EEDEFE] text-5xl sm:text-3xl font-black font-roboto">
          LOGO
        </Link>
        
        <div className="hidden lg:flex items-center gap-14">
          {[
            { name: 'HOME', path: '/', active: true },
            { name: 'ABOUT US', path: '/about-us', active: false },
            { name: 'INSIGHT', path: '/our-products', active: false },
            { name: 'GET IN TOUCH', path: '/contact-us', active: false },
          ].map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className={`text-[#EEDEFE] text-xl font-roboto py-2 px-6 rounded-[20px] ${
                item.active ? 'border border-[#EEDEFE]' : ''
              } hover:bg-white/5 transition-all duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <svg className="w-[56px] h-[56px] md:w-[40px] md:h-[40px] hidden md:block" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 0C12.548 0 0 12.548 0 28C0 43.452 12.548 56 28 56C43.452 56 56 43.452 56 28C56 12.548 43.452 0 28 0ZM28 2C42.372 2 54 13.628 54 28C54 42.372 42.372 54 28 54C13.628 54 2 42.372 2 28C2 13.628 13.628 2 28 2ZM28 13C19.728 13 13 19.728 13 28C13 36.272 19.728 43 28 43C36.272 43 43 36.272 43 28C43 19.728 36.272 13 28 13ZM28 15C28.99 15 29.95 15.12 30.876 15.328C31.222 15.898 31.55 16.564 31.8 17.398H24.2C24.558 16.502 24.92 15.83 25.296 15.282C26.168 15.098 27.072 15 28 15ZM33.24 16.1C34.0407 16.4552 34.8033 16.8907 35.516 17.4H34C33.78 17.4 33.51 16.806 33.24 16.1ZM22.624 16.168C22.4 16.844 22.2 17.398 22 17.398H20.484C21.1565 16.9208 21.8731 16.5089 22.624 16.168ZM18.264 19.398H21.4C21 21.398 20.802 23.398 20.802 23.398H15.848C16.4046 21.929 17.224 20.5736 18.266 19.398H18.264ZM23.398 19.398H32.398C32.798 21.398 32.998 23.398 33.198 23.398H22.8C22.8 23.398 23.198 21.398 23.398 19.398ZM34.602 19.398H37.734C38.7767 20.5734 39.5968 21.9289 40.154 23.398H35.2C35 23.398 34.8 21.398 34.6 19.398H34.602ZM15.258 25.398H20.6V29.398H15.078C14.9331 28.0633 14.9938 26.7143 15.258 25.398ZM22.602 25.398H33.398V29.398H22.602V25.398ZM35.398 25.398H40.742C41.0062 26.7143 41.0669 28.0633 40.922 29.398H35.398V25.398ZM15.46 31.398H20.8C21 33.398 21.2 35.398 21.4 35.398H17.31C16.4681 34.1806 15.8436 32.8276 15.46 31.398ZM22.6 31.398H33.2C33.2 33.398 32.8 35.398 32.6 35.398H23.4C23 35.398 22.8 33.398 22.6 31.398ZM35.2 31.398H40.54C40.1564 32.8276 39.5299 34.1806 38.688 35.398H34.6C34.8 35.398 35.2 33.398 35.2 31.398ZM19.028 37.398H22C22.27 38.748 22.616 39.418 22.946 39.984C21.4929 39.3677 20.1644 38.4913 19.026 37.398H19.028ZM24 37.398H31.8C31.21 38.874 30.616 40.018 29.946 40.838C29.31 40.936 28.662 41 28 41C27.284 41 26.586 40.928 25.902 40.816C25.21 40.076 24.606 38.912 24 37.398ZM33.8 37.398H36.972C35.7731 38.546 34.365 39.4531 32.824 40.07C33.19 39.464 33.51 38.85 33.8 37.398Z" fill="#EEDEFE"/>
          </svg>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#EEDEFE]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="#EEDEFE" fill="none">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#0C134F]/90 backdrop-blur-lg py-5 px-5 rounded-xl shadow-xl z-50 animate-fade-in">
          {[
            { name: 'HOME', path: '/' },
            { name: 'ABOUT US', path: '/about-us' },
            { name: 'INSIGHT', path: '/our-products' },
            { name: 'GET IN TOUCH', path: '/contact-us' },
          ].map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className="block text-[#EEDEFE] text-xl font-roboto py-4 border-b border-[#EEDEFE]/10 hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
