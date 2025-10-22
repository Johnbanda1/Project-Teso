import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, CheckCircle, Clock, MapPin, Phone, Mail, CalendarClock, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import StatCounter from '../components/StatCounter';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-fadeUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Building Excellence <span className="block text-secondary">in Zambia</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Quality construction, consultancy, and building materials for residential and commercial projects
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/services" 
                className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md transition-all hover:bg-white hover:text-primary hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-fadeIn">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={24} className="animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter value={400} suffix="+" label="Projects Completed" />
            <StatCounter value={15} label="Years Experience" />
            <StatCounter value={200} suffix="+" label="Team Members" />
            <StatCounter value={100} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              About Teso Works & Supply Ltd
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div 
                className="w-full pt-[80%] relative rounded-md overflow-hidden bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
              >
                <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-secondary rounded"></div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-primary mb-4">Building Excellence Since 2013</h3>
              <p className="text-gray-700 mb-6">
                Teso Works & Supply Ltd is a premier construction company dedicated to providing exceptional quality in construction, consultancy, and supply of building materials across Zambia. Founded in 2013, we have built our reputation on delivering innovative and sustainable solutions for all your building needs.
              </p>
              
              <p className="text-gray-700 mb-8">
                Our team of highly skilled professionals brings expertise and passion to every project, ensuring that we not only meet but exceed client expectations. We believe in combining traditional craftsmanship with modern techniques to create structures that stand the test of time.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">Why Choose Teso Works?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>15+ Years of Experience:</strong> Proven track record in delivering quality construction projects across Zambia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Comprehensive Services:</strong> From design to completion, we handle every aspect of your construction needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Quality Materials:</strong> We source only the finest building materials from trusted suppliers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Professional Team:</strong> Skilled craftsmen, engineers, and project managers dedicated to excellence</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <CheckCircle className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">We maintain the highest standards in every aspect of our work</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                    <p className="text-gray-600">We understand the importance of completing projects on schedule</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Learn More About Us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Construction" 
              icon="construction"
              description="We provide premium residential and commercial construction using modern techniques and reliable project management to deliver timely results."
              details={[
                "Residential construction and custom homes",
                "Commercial buildings and office complexes",
                "Industrial facilities and warehouses",
                "Infrastructure development projects",
                "Site preparation and foundation work"
              ]}
            />
            
            <ServiceCard 
              title="Consultancy" 
              icon="consultancy"
              description="Our expert consultancy service supports your project planning, architectural design, and management to ensure successful completion."
              details={[
                "Project feasibility studies and planning",
                "Construction management consulting",
                "Cost estimation and budgeting",
                "Quality assurance and control",
                "Regulatory compliance guidance"
              ]}
            />
            
            <ServiceCard 
              title="Material Supply" 
              icon="material"
              description="We supply top-grade building materials and equipment, sourced from trusted partners, to meet your construction needs."
              details={[
                "Cement, steel, and concrete materials",
                "Roofing and insulation materials",
                "Electrical and plumbing supplies",
                "Construction tools and equipment",
                "Bulk material delivery services"
              ]}
            />
            
            <ServiceCard 
              title="Renovation & Repairs" 
              icon="renovation"
              description="We offer professional renovation and repair services to restore and enhance your existing buildings with modern touches."
              details={[
                "Home renovations and extensions",
                "Commercial space refurbishment",
                "Structural repairs and reinforcement",
                "Interior and exterior upgrades",
                "Emergency repair services"
              ]}
            />
            
            <ServiceCard 
              title="Architectural Design" 
              icon="design"
              description="Our architectural team creates innovative, functional designs that balance aesthetics with practical considerations."
              details={[
                "Custom architectural design services",
                "3D modeling and visualization",
                "Building permits and approvals",
                "Sustainable design solutions",
                "Interior design and space planning"
              ]}
            />
            
            <ServiceCard 
              title="Project Management" 
              icon="management"
              description="We provide comprehensive project management services to ensure your construction project stays on time and within budget."
              details={[
                "End-to-end project coordination",
                "Timeline and milestone management",
                "Budget control and cost management",
                "Quality control and inspections",
                "Stakeholder communication and reporting"
              ]}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-md transition-all hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Featured Projects
            </h2>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <button className="px-4 py-2 text-gray-600 hover:text-secondary relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-3/4 after:transition-all focus:text-secondary focus:after:w-3/4 active">
              All
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-secondary relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-3/4 after:transition-all focus:text-secondary focus:after:w-3/4">
              Residential
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-secondary relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-3/4 after:transition-all focus:text-secondary focus:after:w-3/4">
              Commercial
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-secondary relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-3/4 after:transition-all focus:text-secondary focus:after:w-3/4">
              Industrial
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Luxury Villa Complex" 
              category="Residential Development" 
              image="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ProjectCard 
              title="Modern Office Complex" 
              category="Commercial Building" 
              image="https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ProjectCard 
              title="Manufacturing Plant" 
              category="Industrial Facility" 
              image="https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ProjectCard 
              title="Kalulushi Shopping Center" 
              category="Commercial Retail" 
              image="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ProjectCard 
              title="Riverside Apartments" 
              category="Residential Housing" 
              image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <ProjectCard 
              title="Copperbelt Logistics Hub" 
              category="Industrial Complex" 
              image="https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us today for a free consultation and quote.</p>
          <Link 
            to="/contact"
            className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Contact Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600">Plot No. 6, Pelican Street, Salama Park,<br /> Lusaka, Zambia</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+260977120664<br />+260966767730</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">tesoworks@gmail.com<br />info@tesoworks.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <CalendarClock className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;