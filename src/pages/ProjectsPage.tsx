import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Villa Complex",
    category: "Residential Development",
    type: "residential",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A premium residential development featuring 20 luxury villas with modern amenities and sustainable design principles."
  },
  {
    id: 2,
    title: "Modern Office Complex",
    category: "Commercial Building",
    type: "commercial",
    image: "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A state-of-the-art office complex housing multiple corporate clients with flexible workspace solutions and advanced technology infrastructure."
  },
  {
    id: 3,
    title: "Manufacturing Plant",
    category: "Industrial Facility",
    type: "industrial",
    image: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A modern manufacturing facility designed for efficiency, safety, and scalability to meet the client's production requirements."
  },
  {
    id: 4,
    title: "Kalulushi Shopping Center",
    category: "Commercial Retail",
    type: "commercial",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A vibrant shopping center with diverse retail spaces, dining options, and entertainment venues serving the local community."
  },
  {
    id: 5,
    title: "Riverside Apartments",
    category: "Residential Housing",
    type: "residential",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An elegant apartment complex overlooking the river, offering modern living spaces with premium finishes and community amenities."
  },
  {
    id: 6,
    title: "Copperbelt Logistics Hub",
    category: "Industrial Complex",
    type: "industrial",
    image: "https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A comprehensive logistics facility serving the Copperbelt region with warehousing, distribution, and transportation infrastructure."
  },
  {
    id: 7,
    title: "Heritage Hotel",
    category: "Hospitality",
    type: "commercial",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A boutique hotel that blends traditional architecture with modern amenities, providing a unique hospitality experience."
  },
  {
    id: 8,
    title: "Green Valley Estates",
    category: "Residential Development",
    type: "residential",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An eco-friendly residential community with sustainable homes, green spaces, and renewable energy solutions."
  },
  {
    id: 9,
    title: "Central Medical Center",
    category: "Healthcare Facility",
    type: "commercial",
    image: "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A modern medical facility with specialized departments, advanced equipment, and patient-centered design principles."
  }
];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);
  
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects <br></br></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of completed construction projects across Zambia
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Portfolio <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Browse through our diverse portfolio of projects that showcase our expertise in residential, commercial, and industrial construction.
            </p>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <button 
              className={`px-4 py-2 relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all ${
                filter === 'all' 
                  ? 'text-secondary after:w-3/4' 
                  : 'text-gray-600 hover:text-secondary after:w-0 hover:after:w-3/4'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all ${
                filter === 'residential' 
                  ? 'text-secondary after:w-3/4' 
                  : 'text-gray-600 hover:text-secondary after:w-0 hover:after:w-3/4'
              }`}
              onClick={() => setFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`px-4 py-2 relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all ${
                filter === 'commercial' 
                  ? 'text-secondary after:w-3/4' 
                  : 'text-gray-600 hover:text-secondary after:w-0 hover:after:w-3/4'
              }`}
              onClick={() => setFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`px-4 py-2 relative after:content-[''] after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all ${
                filter === 'industrial' 
                  ? 'text-secondary after:w-3/4' 
                  : 'text-gray-600 hover:text-secondary after:w-0 hover:after:w-3/4'
              }`}
              onClick={() => setFilter('industrial')}
            >
              Industrial
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group">
                <ProjectCard 
                  title={project.title} 
                  category={project.category} 
                  image={project.image}
                />
                <div className="mt-4 px-2">
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Spotlight <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Featured Project
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div 
                  className="w-full h-96 rounded-lg overflow-hidden shadow-xl"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-secondary text-white py-2 px-4 rounded">Completed 2024</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div 
                  className="w-full h-24 rounded overflow-hidden shadow-md"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div 
                  className="w-full h-24 rounded overflow-hidden shadow-md"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div 
                  className="w-full h-24 rounded overflow-hidden shadow-md"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Luxury Villa Complex</h3>
              <p className="text-secondary mb-6">Residential Development | Lusaka, Zambia</p>
              
              <p className="text-gray-700 mb-6">
                This premium residential development features 20 luxury villas designed with modern aesthetics and sustainable principles. Each villa offers spacious living areas, premium finishes, and energy-efficient solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Project Details</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="font-medium w-32">Client:</span>
                      <span className="text-gray-600">Emerald Developments</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium w-32">Location:</span>
                      <span className="text-gray-600">Lusaka, Zambia</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium w-32">Size:</span>
                      <span className="text-gray-600">15,000 sq.m</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium w-32">Completed:</span>
                      <span className="text-gray-600">March 2024</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Services Provided</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Architectural Design</li>
                    <li>Construction Management</li>
                    <li>Interior Design</li>
                    <li>Landscaping</li>
                    <li>Infrastructure Development</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                The project incorporated sustainable features including solar power integration, rainwater harvesting, and energy-efficient building materials. The complex also includes shared amenities such as a clubhouse, swimming pool, and landscaped gardens.
              </p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Dream Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's work together to turn your construction vision into reality. Contact us today to discuss your project needs.
          </p>
          <a 
            href="/contact"
            className="px-8 py-3 bg-secondary text-white font-medium rounded-md transition-all hover:bg-secondary-dark hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;