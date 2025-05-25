import React, { useState } from 'react';
import { MapPin, Phone, Mail, CalendarClock, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission to a server
    // For this demo, we'll just show the success message
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your construction needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Get in Touch <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Contact Information
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              We're here to answer any questions you may have about our construction services. Contact us using the information below or fill out the form to send us a message.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">Plot No. 6, Pelican Street, Salama Park,<br /> Lusaka, Zambia</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+260977120664<br />+260966767730</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">tesoworks@gmail.com<br />info@tesoworks.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarClock className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                        <textarea 
                          id="message" 
                          rows={5} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors resize-none"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="md:col-span-2">
                        <button 
                          type="submit" 
                          className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-6">Request a Quote</h3>
                <p className="text-gray-600 mb-6">
                  Interested in our services? Fill out the form to request a detailed quote for your project.
                </p>
                
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="quote-name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <input 
                        type="email" 
                        id="quote-email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="quote-service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                      <select 
                        id="quote-service" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="construction">Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation</option>
                        <option value="material-supply">Material Supply</option>
                        <option value="design">Architectural Design</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="quote-details" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                      <textarea 
                        id="quote-details" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md transition-all hover:bg-primary-dark hover:shadow-lg"
                    >
                      Request Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Find Us <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Location
            </h2>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-96 rounded overflow-hidden">
              {/* Placeholder for an actual map */}
              <div className="w-full h-64">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.251545174068!2d28.38052427590675!3d-15.395204686282347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f85d0cb2be41%3A0xd16b79836db2f9c0!2sPelican%20St%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1716540665374!5m2!1sen!2szm"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">FAQs <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">What areas of Zambia do you service?</h3>
                <p className="text-gray-700">We provide construction services throughout Zambia, with a primary focus on Lusaka, Copperbelt, and Central provinces. For projects in other regions, please contact us to discuss your specific requirements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Do you provide free project estimates?</h3>
                <p className="text-gray-700">Yes, we offer free initial consultations and project estimates. Our team will assess your requirements and provide a detailed quotation for your consideration before any commitments are made.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">What is your typical project timeline?</h3>
                <p className="text-gray-700">Project timelines vary depending on the scope, complexity, and size of each project. During our initial consultation, we provide a detailed timeline estimation specific to your project requirements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Do you handle all aspects of construction?</h3>
                <p className="text-gray-700">Yes, we offer comprehensive construction services, including planning, design, construction, interior finishing, and project management. We can handle your project from concept to completion.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">What payment terms do you offer?</h3>
                <p className="text-gray-700">We typically work with a phased payment schedule that aligns with project milestones. Specific payment terms are discussed during the contract negotiation phase and tailored to each project's requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;