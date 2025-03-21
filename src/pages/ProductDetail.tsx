
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronRight, Star, Package, Info, Settings, ArrowRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  // These would be fetched from an API in a real application
  const product = {
    id: Number(id),
    name: "Industrial Precision Drill",
    category: "Precision Tools",
    categoryId: 4,
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e1c7ed37c4c58d2f1eefbd63708d5c8135a74370",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea75adcf826f71423ffc77272d235a2307fd322",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c648a3af31686c7207f63aee65d9e6cfb2c6286",
    ],
    rating: 4.8,
    reviewCount: 125,
    description: "High-performance industrial drill with precision control system, designed for manufacturing environments that demand accuracy and reliability. Features adjustable speed settings and ergonomic design for operator comfort.",
    features: [
      "Precision control system",
      "Variable speed settings",
      "Ergonomic design",
      "Durable construction",
      "Low vibration operation",
      "Compatible with standard attachments"
    ],
    specifications: {
      "Power": "1800W",
      "Speed Range": "100-3000 RPM",
      "Chuck Size": "13mm",
      "Weight": "3.2kg",
      "Voltage": "220-240V",
      "Warranty": "3 Years"
    },
    relatedProducts: [
      { id: 2, name: "Hydraulic Press System", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea75adcf826f71423ffc77272d235a2307fd322" },
      { id: 3, name: "Robotic Assembly Arm", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c648a3af31686c7207f63aee65d9e6cfb2c6286" },
      { id: 4, name: "CNC Milling Machine", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/326cccc4993a1aaae99422d1d78a1b665c2d0b97" },
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
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
              <Link to={`/category/${product.categoryId}`} className="hover:text-navy transition-colors">{product.category}</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-navy font-medium">{product.name}</span>
            </div>
          </div>

          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white p-4 animate-scale-in">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square w-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-navy shadow-md' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl font-bold text-navy mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-navy font-medium">{product.rating}</span>
                <span className="text-navy-light/70">({product.reviewCount} reviews)</span>
              </div>
              
              <div className="mb-8">
                <p className="text-navy-light leading-relaxed">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                  <Package size={20} className="mr-2" /> Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 w-1.5 h-1.5 bg-blue rounded-full"></div>
                      <span className="text-navy-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                  <Info size={20} className="mr-2" /> Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-navy-light">{key}</span>
                      <span className="font-medium text-navy">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-navy text-white rounded-lg px-6 py-3 font-medium hover:bg-navy/90 transition-colors flex items-center justify-center gap-2">
                  Request Quote
                </button>
                <Link 
                  to="/contact-us" 
                  className="flex-1 bg-navy-transparent text-navy rounded-lg px-6 py-3 font-medium hover:bg-navy-light/20 transition-colors flex items-center justify-center gap-2"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-navy">Related Products</h2>
              <Link 
                to="/our-products" 
                className="text-navy font-medium flex items-center hover:text-blue transition-colors"
              >
                View All Products <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.relatedProducts.map((relatedProduct, index) => (
                <Link 
                  to={`/product/${relatedProduct.id}`} 
                  key={relatedProduct.id}
                  className="group"
                >
                  <div 
                    className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="image-container h-[240px]">
                      <img src={relatedProduct.image} alt={relatedProduct.name} />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-navy group-hover:text-blue transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
