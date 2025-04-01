
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#0C134F]">
      <BackgroundGradient />
      <Navigation />
      <main className="flex-grow z-10">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-[-450px] right-[-250px] w-[1000px] h-[1000px] rounded-full bg-[#D4ADFC] opacity-50 blur-[250px]"></div>
      <div className="absolute bottom-[-400px] left-[50%] translate-x-[-50%] w-[1200px] h-[1200px] rounded-full bg-[#5C469C] opacity-40 blur-[250px]"></div>
      <div className="absolute left-[-400px] top-[-200px] w-[1000px] h-[1000px] rounded-full bg-[#1D267D] opacity-40 blur-[250px]"></div>
    </div>
  );
};

const HeroSection = () => {
  const handleExplore = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center px-5 mt-[200px] md:mt-[150px] sm:mt-[100px] gap-10">
      <div className="flex flex-col items-center gap-2 max-w-[950px]">
        <h1 className="font-poppins text-[128px] md:text-[96px] sm:text-[48px] leading-[1.2] font-bold text-[#EEDEFE] text-center">
          YOUR BEST <span>IT</span> PARTNERS
        </h1>
        <p className="text-[#EEDEFE] text-2xl md:text-xl sm:text-base font-roboto text-center max-w-[950px]">
          From custom software development to cybersecurity, our team of experts is dedicated to delivering solutions that are tailored to your unique needs.
        </p>
      </div>
      
      <button 
        onClick={handleExplore}
        className="flex items-center gap-4 px-8 py-4 rounded-[30px] bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 sm:w-full sm:justify-center"
      >
        <span className="text-[#EEDEFE] text-xl font-roboto">Explore Now</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="#EEDEFE" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12h14m-4 4l4 -4m-4 -4l4 4" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
