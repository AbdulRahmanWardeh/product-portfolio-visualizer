
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-20">
          <header className="py-10 md:py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">About Us</h1>
            <p className="text-navy-light/80 text-lg max-w-2xl mx-auto animate-fade-in-up">
              Learn about our company's mission, values, and commitment to excellence in industrial equipment.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-navy-light leading-relaxed mb-4">
                Ishraqit Shams Industrial Equipment was established with a clear vision: to provide high-quality industrial equipment that enhances manufacturing capabilities across the Middle East and beyond.
              </p>
              <p className="text-navy-light leading-relaxed mb-4">
                Since our founding, we have grown to become a trusted partner for businesses seeking reliable, efficient, and innovative industrial solutions. Our commitment to excellence drives everything we do.
              </p>
              <p className="text-navy-light leading-relaxed">
                Based in Amman, Jordan, we serve clients throughout the region with a focus on building long-term relationships based on trust, quality, and exceptional service.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg animate-scale-in">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52c569b69d2300988a90dc61f161f64d7ac23dfd" 
                alt="Company" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="py-16 bg-navy-transparent rounded-2xl px-8 md:px-12 mb-20 animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
              <p className="text-navy-light max-w-2xl mx-auto">
                These core principles guide our business practices and relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality",
                  description: "We are committed to providing products of the highest quality that meet or exceed industry standards."
                },
                {
                  title: "Innovation",
                  description: "We continuously seek new technologies and solutions to stay at the forefront of industrial equipment."
                },
                {
                  title: "Integrity",
                  description: "We conduct our business with honesty, transparency, and ethical practices."
                },
                {
                  title: "Customer Focus",
                  description: "We prioritize our customers' needs and strive to exceed their expectations."
                },
                {
                  title: "Excellence",
                  description: "We pursue excellence in all aspects of our operations, from product selection to service delivery."
                },
                {
                  title: "Sustainability",
                  description: "We are committed to environmentally responsible practices in our operations."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-navy-light/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-xl text-navy-light max-w-3xl mx-auto leading-relaxed">
              To provide innovative and reliable industrial equipment solutions that enhance our clients' productivity and efficiency, while maintaining the highest standards of quality and service.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
