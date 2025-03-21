
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-20">
          <header className="py-10 md:py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-navy-light/80 text-lg max-w-2xl mx-auto animate-fade-in-up">
              Have questions or need more information? We're here to help you find the right industrial equipment solutions.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="bg-navy rounded-xl p-8 text-white h-full">
                <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <MapPin size={24} className="text-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Our Location</h3>
                      <p className="text-white/80">Amman - Jordan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Phone size={24} className="text-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone Number</h3>
                      <p className="text-white/80">+962798337984</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Mail size={24} className="text-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Address</h3>
                      <p className="text-white/80">info@ishraqitshams.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-white/80">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <CheckCircle size={64} className="text-green-500 mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-2">Message Sent Successfully!</h3>
                    <p className="text-navy-light/70 text-center">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy-light mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-light mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-light mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-navy-light mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
                          placeholder="Message subject"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-light mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-navy text-white rounded-lg px-6 py-3 font-medium hover:bg-navy/90 transition-colors flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-[500px] animate-fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108893.61052071326!2d35.86941347775055!3d31.94583152532176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1649926836558!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Amman, Jordan"
            ></iframe>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
