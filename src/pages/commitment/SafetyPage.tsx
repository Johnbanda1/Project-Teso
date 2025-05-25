import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, FileCheck, Users, Award, Target } from 'lucide-react';

const SafetyPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Safety <br></br></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our unwavering commitment to maintaining the highest safety standards
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Safety First <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Safety Philosophy
            </h2>
            <p className="text-gray-700 mt-6">
              At Teso Works & Supply Ltd, safety is not just a priority—it's a core value embedded in everything we do. We believe that every person who works on or visits our construction sites deserves to return home safely each day. Our comprehensive safety program reflects our commitment to protecting our employees, clients, and the public.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              className="w-full h-96 rounded-lg overflow-hidden"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/8961385/pexels-photo-8961385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Zero Harm Commitment <br></br></h3>
              <p className="text-gray-700 mb-6">
                Our goal is zero accidents and injuries across all our operations. We achieve this through rigorous safety protocols, regular training, proper equipment, and fostering a culture where every team member takes personal responsibility for safety. We believe that all accidents are preventable when everyone is committed to safety.
              </p>
              <p className="text-gray-700">
                Our safety approach extends beyond compliance with regulations—we strive to exceed industry standards and continuously improve our practices. By integrating safety into every phase of our projects, from planning to completion, we ensure that all potential hazards are identified and addressed proactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Approach <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Safety Pillars
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Our comprehensive safety program is built on six fundamental pillars that ensure we maintain the highest standards of safety across all our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <HardHat className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Training <br></br></h3>
              <p className="text-gray-600">
                We provide regular safety training for all employees, ensuring they have the knowledge and skills to identify hazards and work safely. Our training programs cover general safety principles, task-specific procedures, and emergency response.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Rigorous Risk Assessment</h3>
              <p className="text-gray-600">
                Before starting any project, we conduct thorough risk assessments to identify potential hazards and implement appropriate control measures. Our job safety analysis process ensures that each task is evaluated for risks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <FileCheck className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Clear Procedures</h3>
              <p className="text-gray-600">
                We maintain detailed safety procedures for all construction activities, ensuring that everyone knows the correct and safe way to perform their work. These procedures are regularly reviewed and updated based on industry best practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Safety Culture</h3>
              <p className="text-gray-600">
                We foster a culture where safety is everyone's responsibility. Through leadership commitment, open communication, and employee involvement, we create an environment where safety concerns can be freely raised and addressed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance & Beyond</h3>
              <p className="text-gray-600">
                We not only comply with all relevant safety regulations and standards but strive to exceed them. Our safety team stays updated on the latest safety developments and industry best practices to continuously improve our programs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Target className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">
                We continuously evaluate and improve our safety performance through regular inspections, audits, and incident investigations. We track safety metrics and set ambitious targets to drive ongoing improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Methods <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Safety Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Safety is integrated into every phase of our projects through a structured process that ensures consistent application of our safety standards.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-secondary transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:text-right mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Pre-Project Planning</h3>
                    <p className="text-gray-700">
                      Before breaking ground, we develop a comprehensive safety plan that identifies potential hazards, establishes control measures, and outlines emergency procedures specific to the project. This plan is communicated to all team members and stakeholders.
                    </p>
                  </div>
                  <div className="md:pl-16">
                    <div 
                      className="w-full h-64 rounded-lg overflow-hidden shadow-md"
                      style={{ backgroundImage: 'url(https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-secondary transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:order-2 mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Daily Safety Protocols</h3>
                    <p className="text-gray-700">
                      Each workday begins with a safety briefing to review the day's tasks, associated hazards, and control measures. Our site supervisors conduct regular inspections throughout the day to ensure safety protocols are being followed and to address any emerging hazards.
                    </p>
                  </div>
                  <div className="md:order-1 md:pr-16">
                    <div 
                      className="w-full h-64 rounded-lg overflow-hidden shadow-md"
                      style={{ backgroundImage: 'url(https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-secondary transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:text-right mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Ongoing Monitoring <br></br></h3>
                    <p className="text-gray-700">
                      Our safety team conducts regular site audits to evaluate compliance with safety standards and identify areas for improvement. We track leading and lagging safety indicators to measure our performance and adjust our approaches as needed.
                    </p>
                  </div>
                  <div className="md:pl-16">
                    <div 
                      className="w-full h-64 rounded-lg overflow-hidden shadow-md"
                      style={{ backgroundImage: 'url(https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-secondary transform -translate-x-1/2"></div>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold mb-4">Post-Project Review</h3>
                    <p className="text-gray-700">
                      After project completion, we conduct a thorough review of our safety performance, documenting lessons learned and best practices to be applied to future projects. This continuous improvement cycle helps us refine our safety program over time.
                    </p>
                  </div>
                  <div className="md:order-1 md:pr-16">
                    <div 
                      className="w-full h-64 rounded-lg overflow-hidden shadow-md"
                      style={{ backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Records */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Performance <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Safety Records
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              We're proud of our strong safety record, which reflects our commitment to protecting everyone involved in our projects.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">5+ Years</div>
                <p className="text-gray-700">Without lost time incidents</p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-gray-700">Safety compliance rate</p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">10,000+</div>
                <p className="text-gray-700">Safety training hours annually</p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <p className="text-gray-700">Safety audits conducted yearly</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Industry Recognition</h3>
              <p className="text-gray-700 mb-6">
                Our commitment to safety has been recognized with multiple awards and certifications, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Zambia Construction Safety Excellence Award</h4>
                  <p className="text-gray-600 text-sm">2023, 2022, 2021</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">ISO 45001 Certification</h4>
                  <p className="text-gray-600 text-sm">Occupational Health and Safety</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Construction Industry Safety Initiative</h4>
                  <p className="text-gray-600 text-sm">Gold Level Member</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner with a Safety-First Construction Company</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose Teso Works for your next project and experience the peace of mind that comes from working with a company that prioritizes safety above all else.
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

export default SafetyPage;