
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronRight, Filter, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CategoryDetails {
  id: number;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<CategoryDetails | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Sample data - in a real app, this would come from an API
  useEffect(() => {
    const fetchCategory = () => {
      // Simulate API call
      setTimeout(() => {
        const categoryData: CategoryDetails = {
          id: Number(id),
          name: "CNC Machinery",
          description: "Advanced computer-controlled machining equipment for precision manufacturing across various industries.",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ee8c80d5e19996ffb004a542a6ed3e55eda08c",
          products: [
            { 
              id: 1, 
              name: "5-Axis CNC Machine", 
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ee8c80d5e19996ffb004a542a6ed3e55eda08c",
              description: "Advanced 5-axis CNC machinery for complex component manufacturing."
            },
            { 
              id: 4, 
              name: "CNC Milling Machine", 
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/326cccc4993a1aaae99422d1d78a1b665c2d0b97",
              description: "Precision milling machine for intricate component manufacturing."
            },
            { 
              id: 11, 
              name: "CNC Lathe Machine", 
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1c7ed37c4c58d2f1eefbd63708d5c8135a74370",
              description: "High-precision lathe for turning operations in various materials."
            },
            { 
              id: 12, 
              name: "CNC Router", 
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea75adcf826f71423ffc77272d235a2307fd322",
              description: "Versatile router for woodworking and other soft material applications."
            },
            { 
              id: 13, 
              name: "CNC Plasma Cutter", 
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c648a3af31686c7207f63aee65d9e6cfb2c6286",
              description: "Precision plasma cutting system for metal fabrication."
            },
            { 
              id: 14, 
              name: "CNC Grinding Machine", 
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca7cc5514a894932a66da7157a6a708f324ee4ca",
              description: "Advanced grinding system for surface finishing and precision applications."
            },
          ]
        };
        setCategory(categoryData);
        setLoading(false);
      }, 800);
    };

    fetchCategory();
  }, [id]);

  if (loading || !category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-navy-light/70">
              <Link to="/" className="hover:text-navy transition-colors">Home</Link>
              <ChevronRight size={16} className="mx-2" />
              <Link to="/categories" className="hover:text-navy transition-colors">Categories</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-navy font-medium">{category.name}</span>
            </div>
          </div>

          {/* Category hero */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden mb-12 animate-scale-in">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
                <p className="max-w-2xl mx-auto text-lg">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Product listing */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter sidebar - desktop */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
                <h3 className="text-lg font-bold text-navy mb-6">Filters</h3>
                
                {/* Sample filters - these would be dynamic in a real app */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-navy mb-3">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="price1" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="price1" className="ml-2 text-navy-light">Under $1000</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price2" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="price2" className="ml-2 text-navy-light">$1000 - $5000</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price3" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="price3" className="ml-2 text-navy-light">$5000 - $10000</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price4" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="price4" className="ml-2 text-navy-light">$10000+</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-navy mb-3">Brands</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="brand1" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="brand1" className="ml-2 text-navy-light">Haas</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="brand2" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="brand2" className="ml-2 text-navy-light">DMG MORI</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="brand3" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="brand3" className="ml-2 text-navy-light">Mazak</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="brand4" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="brand4" className="ml-2 text-navy-light">Okuma</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-navy mb-3">Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="feature1" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="feature1" className="ml-2 text-navy-light">Automatic Tool Changer</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="feature2" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="feature2" className="ml-2 text-navy-light">High-Speed Spindle</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="feature3" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="feature3" className="ml-2 text-navy-light">Multi-Axis Control</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="feature4" className="h-4 w-4 text-blue rounded" />
                        <label htmlFor="feature4" className="ml-2 text-navy-light">Coolant System</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-8 py-2 border border-navy text-navy font-medium rounded-lg hover:bg-navy/5 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
            
            {/* Products */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">{category.products.length} Products</h2>
                
                <button 
                  className="lg:hidden flex items-center gap-2 py-2 px-4 border border-navy-light rounded-lg"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter size={18} />
                  <span>Filters</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Link 
                    to={`/product/${product.id}`} 
                    key={product.id}
                    className="group"
                  >
                    <div 
                      className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="image-container h-[220px]">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-navy group-hover:text-blue transition-colors mb-2">
                          {product.name}
                        </h3>
                        <p className="text-navy-light/70 text-sm line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile filters sidebar */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy/50" onClick={() => setShowFilters(false)}></div>
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-xl animate-slide-in overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-navy">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} className="text-navy" />
                </button>
              </div>
              
              {/* Sample filters - same as desktop */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-navy mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="mPrice1" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mPrice1" className="ml-2 text-navy-light">Under $1000</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mPrice2" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mPrice2" className="ml-2 text-navy-light">$1000 - $5000</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mPrice3" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mPrice3" className="ml-2 text-navy-light">$5000 - $10000</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mPrice4" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mPrice4" className="ml-2 text-navy-light">$10000+</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-navy mb-3">Brands</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="mBrand1" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mBrand1" className="ml-2 text-navy-light">Haas</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mBrand2" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mBrand2" className="ml-2 text-navy-light">DMG MORI</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mBrand3" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mBrand3" className="ml-2 text-navy-light">Mazak</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mBrand4" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mBrand4" className="ml-2 text-navy-light">Okuma</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-navy mb-3">Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="mFeature1" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mFeature1" className="ml-2 text-navy-light">Automatic Tool Changer</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mFeature2" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mFeature2" className="ml-2 text-navy-light">High-Speed Spindle</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mFeature3" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mFeature3" className="ml-2 text-navy-light">Multi-Axis Control</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mFeature4" className="h-4 w-4 text-blue rounded" />
                      <label htmlFor="mFeature4" className="ml-2 text-navy-light">Coolant System</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <button className="w-full py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy/90 transition-colors">
                  Apply Filters
                </button>
                <button 
                  className="w-full py-3 border border-navy text-navy font-medium rounded-lg hover:bg-navy/5 transition-colors"
                  onClick={() => setShowFilters(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
