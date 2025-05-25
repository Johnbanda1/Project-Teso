import React from 'react';
import { CheckCircle, ShieldCheck, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1078883/pexels-photo-1078883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about Teso Works & Supply Ltd and our commitment to excellence in construction
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Building Zambia's Future Since 2013</h2>
              
              <p className="text-gray-700 mb-6">
                Teso Works & Supply Ltd was founded with a vision to transform the construction landscape in Zambia. Since our inception in 2013, we have grown to become one of the most trusted names in the industry, known for our commitment to quality, innovation, and client satisfaction.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our company brings together a team of highly skilled professionals with diverse expertise in construction, architecture, engineering, and project management. This multidisciplinary approach allows us to offer comprehensive solutions for all your construction needs.
              </p>
              
              <p className="text-gray-700">
                We believe in combining traditional craftsmanship with modern techniques and technologies to create structures that are not only aesthetically pleasing but also functional, sustainable, and built to last. Our goal is to exceed client expectations on every project, regardless of its size or complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="w-full h-64 rounded-lg overflow-hidden"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div 
                className="w-full h-64 rounded-lg overflow-hidden mt-10"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div 
                className="w-full h-64 rounded-lg overflow-hidden"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div 
                className="w-full h-64 rounded-lg overflow-hidden mt-10"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Purpose <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver high-quality, affordable, and timely construction services while ensuring client satisfaction through professionalism and innovation. We strive to be the partner of choice for construction solutions in Zambia, making a positive impact on the communities we serve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading construction company in Zambia, recognized for excellence, integrity, and sustainable building practices that shape the future of our communities. We aspire to set new standards in the industry and contribute to the development of modern, resilient infrastructure across the country.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                  <p className="text-gray-600">We conduct our business with honesty, transparency, and ethical standards in all our dealings.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                  <p className="text-gray-600">We strive for excellence in craftsmanship, service delivery, and client satisfaction.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <Award size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-600">We embrace innovative approaches and technologies to deliver superior construction solutions.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <Users size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
                  <p className="text-gray-600">We are committed to environmentally responsible and sustainable building practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our People <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Leadership Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src="src/assets/ceo.jpg" 
                  alt="CEO" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Phillip Chirwa</h3>
                <p className="text-secondary mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">With over 20 years of experience in construction, John leads our team with vision and expertise.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src="src/assets/ceo.jpg" 
                  alt="COO" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Grace Banda</h3>
                <p className="text-secondary mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">Grace ensures our operations run smoothly and efficiently across all projects and departments.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src="src/assets/ceo.jpg" 
                  alt="Technical Director" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">David Mumba</h3>
                <p className="text-secondary mb-4">Technical Director</p>
                <p className="text-gray-600">David brings technical expertise and innovation to our construction methodologies and designs.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented professionals to join our growing team. Send us your resume and cover letter to explore career opportunities with Teso Works.
          </p>
          <a 
            href="mailto:careers@tesoworks.com"
            className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
          >
            Send Your CV
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;