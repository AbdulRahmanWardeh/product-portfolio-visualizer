
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  image: string;
}

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    { id: 1, name: "CNC Machinery", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ee8c80d5e19996ffb004a542a6ed3e55eda08c" },
    { id: 2, name: "Hydraulic Systems", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a837404f607af9afcdb73e42266ac63d975ee1" },
    { id: 3, name: "Robotic Equipment", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a07c276d84e1ac08f3531ee40a827c4c02a647a5" },
    { id: 4, name: "Precision Tools", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca7cc5514a894932a66da7157a6a708f324ee4ca" },
    { id: 5, name: "Measurement Systems", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca69d17d2ccfa78c21338598c1322f52b3029c4" },
    { id: 6, name: "Automation Solutions", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/765f5820ea25146d6ed380b0a92065d308c50b30" }
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
    <section id="categories" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50" ref={sectionRef}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="section-heading mb-16">
          <h2 className="section-title font-sans">Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="bg-navy-transparent rounded-xl p-6 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-container h-[480px] mb-8">
                <img src={category.image} alt={category.name} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{category.name}</h3>
              <button className="btn-primary w-full group">
                <span>Show Products</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
