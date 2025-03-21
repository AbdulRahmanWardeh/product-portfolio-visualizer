
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Simulated product data
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchProducts = () => {
      const productData: Product[] = [
        { 
          id: 1, 
          name: "Industrial Precision Drill", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1c7ed37c4c58d2f1eefbd63708d5c8135a74370",
          category: "Precision Tools",
          description: "High-performance industrial drill with precision control system."
        },
        { 
          id: 2, 
          name: "Hydraulic Press System", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea75adcf826f71423ffc77272d235a2307fd322",
          category: "Hydraulic Systems",
          description: "Heavy-duty hydraulic press for industrial manufacturing."
        },
        { 
          id: 3, 
          name: "Robotic Assembly Arm", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c648a3af31686c7207f63aee65d9e6cfb2c6286",
          category: "Robotic Equipment",
          description: "Precision robotic arm for automated assembly tasks."
        },
        { 
          id: 4, 
          name: "CNC Milling Machine", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/326cccc4993a1aaae99422d1d78a1b665c2d0b97",
          category: "CNC Machinery",
          description: "Advanced CNC milling system for intricate component manufacturing."
        },
        // Duplicate products to simulate more data
        { 
          id: 5, 
          name: "Laser Cutting System", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca7cc5514a894932a66da7157a6a708f324ee4ca",
          category: "Precision Tools",
          description: "Industrial laser cutting system for precision manufacturing."
        },
        { 
          id: 6, 
          name: "Automated Conveyor Belt", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/765f5820ea25146d6ed380b0a92065d308c50b30",
          category: "Automation Solutions",
          description: "High-capacity conveyor system for production lines."
        },
        { 
          id: 7, 
          name: "Industrial Measurement System", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca69d17d2ccfa78c21338598c1322f52b3029c4",
          category: "Measurement Systems",
          description: "Precise measurement tools for quality control processes."
        },
        { 
          id: 8, 
          name: "Hydraulic Cylinder", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a837404f607af9afcdb73e42266ac63d975ee1",
          category: "Hydraulic Systems",
          description: "Heavy-duty hydraulic cylinders for industrial applications."
        },
        { 
          id: 9, 
          name: "Articulated Robot", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a07c276d84e1ac08f3531ee40a827c4c02a647a5",
          category: "Robotic Equipment",
          description: "Versatile articulated robots for complex automation tasks."
        },
        { 
          id: 10, 
          name: "5-Axis CNC Machine", 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ee8c80d5e19996ffb004a542a6ed3e55eda08c",
          category: "CNC Machinery",
          description: "Advanced 5-axis CNC machinery for complex component manufacturing."
        },
        // Add more products as needed
      ];
      
      setProducts(productData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setVisibleProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [currentPage, products]);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-20">
          <header className="py-10 md:py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">Our Products</h1>
            <p className="text-navy-light/80 text-lg max-w-2xl mx-auto animate-fade-in-up">
              Explore our wide range of high-quality industrial equipment designed to enhance your productivity and efficiency.
            </p>
          </header>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {visibleProducts.map((product, index) => (
                  <Link 
                    to={`/product/${product.id}`} 
                    key={product.id}
                    className="group"
                  >
                    <div 
                      className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="image-container h-[280px]">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="p-5">
                        <div className="mb-3">
                          <span className="text-xs font-medium bg-navy-transparent px-3 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-navy group-hover:text-blue transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-navy-light/70 text-sm mt-2 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          currentPage === page
                            ? 'bg-navy text-white'
                            : 'bg-navy-transparent text-navy hover:bg-navy/10'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
