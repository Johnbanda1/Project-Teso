import React from 'react';
import { Link } from 'react-router-dom';
import { Building, BookOpen, Package, Hammer, Compass, ClipboardList, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services <br></br></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">What We Offer <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              At Teso Works & Supply Ltd, we offer a wide range of construction services to meet all your building needs. Our experienced team is equipped to handle projects of any size and complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Construction" 
              icon="construction"
              description="We provide premium residential and commercial construction using modern techniques and reliable project management to deliver timely results."
            />
            
            <ServiceCard 
              title="Consultancy" 
              icon="consultancy"
              description="Our expert consultancy service supports your project planning, architectural design, and management to ensure successful completion."
            />
            
            <ServiceCard 
              title="Material Supply" 
              icon="material"
              description="We supply top-grade building materials and equipment, sourced from trusted partners, to meet your construction needs."
            />
            
            <ServiceCard 
              title="Renovation & Repairs" 
              icon="renovation"
              description="We offer professional renovation and repair services to restore and enhance your existing buildings with modern touches."
            />
            
            <ServiceCard 
              title="Architectural Design" 
              icon="design"
              description="Our architectural team creates innovative, functional designs that balance aesthetics with practical considerations."
            />
            
            <ServiceCard 
              title="Project Management" 
              icon="management"
              description="We provide comprehensive project management services to ensure your construction project stays on time and within budget."
            />
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Featured Service <br></br></span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Residential Construction</h2>
              
              <p className="text-gray-700 mb-6">
                Our residential construction service is designed to bring your dream home to life. From luxury villas to modern apartment complexes, we have the expertise to deliver exceptional results that exceed your expectations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Custom home design and construction</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Multi-family residential developments</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Luxury home renovations and extensions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Sustainable and energy-efficient housing solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Interior design and finishing services</p>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
              >
                Discuss Your Project
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div 
                className="w-full h-96 rounded-lg overflow-hidden shadow-xl"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className="w-full h-96 rounded-lg overflow-hidden shadow-xl"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
            </div>
            
            <div>
              <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Featured Service <br></br></span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Commercial Construction</h2>
              
              <p className="text-gray-700 mb-6">
                Our commercial construction services cater to businesses looking to establish or expand their physical presence. We understand the importance of functional design, timely delivery, and cost-effectiveness in commercial projects.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Office buildings and corporate headquarters</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Retail spaces and shopping centers</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Hotels and hospitality facilities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Healthcare facilities and medical centers</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700">Educational institutions and campus buildings</p>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">How We Work <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              We follow a structured approach to ensure every project is completed to the highest standards of quality and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl flex items-center justify-center">1</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p className="text-gray-600">We begin with a detailed consultation to understand your vision, requirements, and budget constraints.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl flex items-center justify-center">2</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Planning & Design</h3>
                <p className="text-gray-600">Our team creates detailed plans and designs, incorporating your feedback at every stage.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl flex items-center justify-center">3</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Construction</h3>
                <p className="text-gray-600">We execute the project with precision, regular updates, and strict quality control measures.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl flex items-center justify-center">4</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Completion & Handover</h3>
                <p className="text-gray-600">We finalize all details, conduct thorough inspections, and hand over your completed project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project? <br></br></h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to help bring your construction vision to life.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;