
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
}

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    { id: 1, name: "Industrial Precision Drill", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1c7ed37c4c58d2f1eefbd63708d5c8135a74370" },
    { id: 2, name: "Hydraulic Press System", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea75adcf826f71423ffc77272d235a2307fd322" },
    { id: 3, name: "Robotic Assembly Arm", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c648a3af31686c7207f63aee65d9e6cfb2c6286" },
    { id: 4, name: "CNC Milling Machine", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/326cccc4993a1aaae99422d1d78a1b665c2d0b97" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="py-20 px-6 md:px-12 lg:px-20" ref={sectionRef}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="section-heading mb-16">
          <h2 className="section-title font-sans">Our Products</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="card-hover rounded-xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-container h-[400px]">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-navy mt-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="btn-outline group">
            <span>Show More</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
