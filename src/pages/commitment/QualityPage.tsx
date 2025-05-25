import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Gauge, Search, FileCheck, BarChart, Award } from 'lucide-react';

const QualityPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quality <br></br></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our dedication to excellence in every aspect of construction
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Excellence in All We Do <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Quality Commitment
            </h2>
            <p className="text-gray-700 mt-6">
              At Teso Works & Supply Ltd, quality is the foundation of everything we do. We believe that delivering exceptional quality not only ensures the longevity and performance of the structures we build but also provides the best value to our clients and contributes to our reputation as a premier construction company in Zambia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              className="w-full h-96 rounded-lg overflow-hidden"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Quality Defined</h3>
              <p className="text-gray-700 mb-6">
                For us, quality means more than just meeting specifications—it means exceeding expectations in every aspect of our work. From the materials we select to the craftsmanship we apply and the project management systems we implement, our focus on quality ensures that each project is completed to the highest standards.
              </p>
              <p className="text-gray-700">
                Our quality management system provides a structured approach to delivering consistent results, managing risks, and continuously improving our processes. By integrating quality control at every stage of construction, we can identify and address potential issues early, ensuring a smooth project execution and superior end results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Framework <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Quality Pillars
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Our comprehensive quality program is built on six fundamental pillars that ensure excellence across all our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                We carefully select and source high-quality materials that meet or exceed industry standards. All materials undergo rigorous testing and inspection before being used in our projects.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Skilled Craftsmanship</h3>
              <p className="text-gray-600">
                Our team consists of highly skilled professionals who take pride in their work. We invest in ongoing training and development to ensure our workforce maintains the highest levels of craftsmanship.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <FileCheck className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Detailed Planning</h3>
              <p className="text-gray-600">
                Quality begins with thorough planning. We develop detailed project plans that address every aspect of construction, from material procurement to final inspections, ensuring nothing is overlooked.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Search className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Rigorous Inspections</h3>
              <p className="text-gray-600">
                We conduct thorough inspections at critical phases of each project. Our multi-level quality control process ensures that issues are identified and addressed promptly before they affect the final result.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <BarChart className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Measurable Standards</h3>
              <p className="text-gray-600">
                We establish clear, measurable quality standards for each project and continuously monitor our performance against these benchmarks, ensuring consistency and accountability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Gauge className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">
                We are committed to ongoing improvement of our processes and methods. By learning from each project and staying current with industry advancements, we consistently enhance our quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our System <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Quality Management Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Our quality management process is an integrated system that ensures excellence at every stage of our projects.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Planning & Prevention</h3>
                <p className="text-gray-600">
                  We identify quality requirements and potential issues during the planning phase, establishing preventive measures and clear quality objectives.
                </p>
                <ul className="text-left mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Quality requirements identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Quality control plan development</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Execution & Control</h3>
                <p className="text-gray-600">
                  During construction, we implement quality control procedures, conduct regular inspections, and maintain detailed documentation.
                </p>
                <ul className="text-left mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Material testing and verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Workmanship inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Non-conformance management</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Verification & Improvement</h3>
                <p className="text-gray-600">
                  We verify that all quality requirements have been met, gather feedback, and implement improvements for future projects.
                </p>
                <ul className="text-left mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Final quality inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Client satisfaction assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={16} />
                    <span className="text-gray-700">Lessons learned documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Quality in Action <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Case Study
            </h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Modern Office Complex</h3>
                <p className="text-gray-700 mb-6">
                  This commercial office complex in Lusaka showcases our commitment to quality in every aspect of construction. The project required meticulous attention to detail to meet the client's exacting standards while adhering to a tight timeline.
                </p>
                
                <h4 className="text-xl font-semibold mb-3">Quality Challenges & Solutions:</h4>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">Challenge:</span>
                    <p className="text-gray-700">Complex structural design requiring precise execution</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">Solution:</span>
                    <p className="text-gray-700">Implemented 3D modeling and advanced surveying techniques to ensure structural accuracy, with verification at each critical phase</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">Challenge:</span>
                    <p className="text-gray-700">High-end finishes requiring specialized craftsmanship</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">Solution:</span>
                    <p className="text-gray-700">Engaged specialized subcontractors and implemented detailed quality control checklists for each finishing element</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">Challenge:</span>
                    <p className="text-gray-700">Integration of advanced building systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">Solution:</span>
                    <p className="text-gray-700">Created a dedicated coordination team to ensure seamless integration of mechanical, electrical, and plumbing systems</p>
                  </li>
                </ul>
                
                <h4 className="text-xl font-semibold mb-3">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={20} />
                    <span className="text-gray-700">Project completed on schedule with zero quality defects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={20} />
                    <span className="text-gray-700">Client satisfaction rating of 98%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={20} />
                    <span className="text-gray-700">Building awarded "Commercial Excellence" certification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0 mr-2" size={20} />
                    <span className="text-gray-700">Project featured in national architecture publication</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div 
                  className="w-full h-64 rounded-lg overflow-hidden"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div className="grid grid-cols-2 gap-6">
                  <div 
                    className="w-full h-48 rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url(https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                  <div 
                    className="w-full h-48 rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url(https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience the Teso Works Quality Difference</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with us for your next construction project and discover the peace of mind that comes from working with a team dedicated to exceptional quality.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default QualityPage;