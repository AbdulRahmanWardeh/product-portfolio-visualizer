
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
  description: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulated category data
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchCategories = () => {
      const categoryData: Category[] = [
        { 
          id: 1, 
          name: "CNC Machinery", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ee8c80d5e19996ffb004a542a6ed3e55eda08c",
          productCount: 12,
          description: "Advanced computer-controlled machining equipment for precision manufacturing."
        },
        { 
          id: 2, 
          name: "Hydraulic Systems", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a837404f607af9afcdb73e42266ac63d975ee1",
          productCount: 8,
          description: "Industrial hydraulic systems for power transmission in heavy machinery."
        },
        { 
          id: 3, 
          name: "Robotic Equipment", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a07c276d84e1ac08f3531ee40a827c4c02a647a5",
          productCount: 15,
          description: "Automation robots for industrial applications across various sectors."
        },
        { 
          id: 4, 
          name: "Precision Tools", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca7cc5514a894932a66da7157a6a708f324ee4ca",
          productCount: 24,
          description: "High-accuracy tools for industrial manufacturing and quality control."
        },
        { 
          id: 5, 
          name: "Measurement Systems", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca69d17d2ccfa78c21338598c1322f52b3029c4",
          productCount: 10,
          description: "Precise measurement equipment for industrial quality assurance."
        },
        { 
          id: 6, 
          name: "Automation Solutions", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/765f5820ea25146d6ed380b0a92065d308c50b30",
          productCount: 18,
          description: "Complete automation systems for manufacturing process optimization."
        },
      ];
      
      setCategories(categoryData);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-20">
          <header className="py-10 md:py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">Product Categories</h1>
            <p className="text-navy-light/80 text-lg max-w-2xl mx-auto animate-fade-in-up">
              Browse our equipment categories to find the perfect solutions for your industrial needs.
            </p>
          </header>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div 
                  key={category.id} 
                  className="bg-navy-transparent rounded-xl p-6 flex flex-col card-hover animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="image-container h-[320px] mb-6 rounded-lg">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-center mb-3">{category.name}</h3>
                    <p className="text-navy-light/70 text-center mb-4">{category.description}</p>
                    <div className="text-center text-navy-light mb-6">
                      <span className="font-medium">{category.productCount}</span> products available
                    </div>
                  </div>
                  <Link 
                    to={`/category/${category.id}`} 
                    className="btn-primary group mt-auto"
                  >
                    <span>Show Products</span>
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
