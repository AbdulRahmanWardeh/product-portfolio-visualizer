
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth reveal animation for page load
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
