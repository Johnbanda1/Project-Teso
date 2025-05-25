import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Droplets, Sun, Wind, Sprout } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/5611579/pexels-photo-5611579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sustainability <br></br></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to environmentally responsible construction practices
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Our Green Approach <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Sustainability Vision
            </h2>
            <p className="text-gray-700 mt-6">
              At Teso Works & Supply Ltd, we recognize our responsibility to protect the environment and contribute to a sustainable future. We're committed to adopting green building practices, reducing our carbon footprint, and creating structures that are both beautiful and environmentally responsible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              className="w-full h-96 rounded-lg overflow-hidden"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Sustainable Approach <br></br></h3>
              <p className="text-gray-700 mb-6">
                Sustainability is integrated into every aspect of our operations, from material selection and energy-efficient designs to waste management and site planning. We believe that sustainable construction not only benefits the environment but also provides our clients with buildings that are healthier, more efficient, and more cost-effective in the long run.
              </p>
              <p className="text-gray-700">
                Our team stays updated on the latest green building technologies and practices, ensuring that we can offer innovative sustainable solutions that meet both local regulations and international standards. Through continuous improvement and collaboration with like-minded partners, we aim to lead the way in sustainable construction in Zambia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">What We Do <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Our Sustainable Practices
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              We implement a variety of sustainable practices throughout our construction process to minimize environmental impact and maximize resource efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Recycle className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Responsible Material Sourcing</h3>
              <p className="text-gray-600">
                We carefully select building materials that are locally sourced, recycled, or have minimal environmental impact. Our procurement process prioritizes sustainable suppliers and eco-friendly products.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Sun className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Energy Efficient Design</h3>
              <p className="text-gray-600">
                Our designs incorporate passive solar principles, optimal insulation, and energy-efficient systems to reduce energy consumption and operating costs for our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Droplets className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Water Conservation</h3>
              <p className="text-gray-600">
                We implement water-saving fixtures, rainwater harvesting systems, and efficient irrigation to minimize water usage in our construction projects and finished buildings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Waste Reduction</h3>
              <p className="text-gray-600">
                We carefully plan material usage to minimize waste, implement recycling programs on our construction sites, and find creative ways to repurpose construction by-products.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Wind className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Renewable Energy Integration</h3>
              <p className="text-gray-600">
                We design and install solar power systems, passive cooling, and other renewable energy solutions to reduce dependence on conventional energy sources.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <Sprout className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Green Spaces</h3>
              <p className="text-gray-600">
                We incorporate landscaping and green spaces in our designs to enhance biodiversity, improve air quality, and create healthier environments for building occupants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase font-semibold text-sm tracking-wider">Success Story <br></br></span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-secondary">
              Sustainable Project Case Study
            </h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Green Valley Estates</h3>
                <p className="text-gray-700 mb-6">
                  Green Valley Estates is a residential development that showcases our commitment to sustainable construction. This project incorporated numerous green building features to create a community that is both environmentally responsible and comfortable for its residents.
                </p>
                
                <h4 className="text-xl font-semibold mb-3">Sustainable Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Solar power systems for each residence, reducing electricity costs by up to 60%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Rainwater harvesting and greywater recycling systems for irrigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Passive cooling design that reduces the need for air conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Locally sourced and recycled building materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Community gardens and preserved natural habitats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Energy-efficient appliances and LED lighting throughout</span>
                  </li>
                </ul>
                
                <h4 className="text-xl font-semibold mb-3">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>40% reduction in overall energy consumption compared to traditional developments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>50% reduction in water usage through conservation measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>30% reduction in construction waste through careful planning and recycling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Increased property values due to sustainable features and lower operating costs</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div 
                  className="w-full h-64 rounded-lg overflow-hidden"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div className="grid grid-cols-2 gap-6">
                  <div 
                    className="w-full h-48 rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url(https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                  <div 
                    className="w-full h-48 rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url(https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Sustainable Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let us help you create a building that's not only beautiful and functional but also kind to the environment. Contact us to discuss your sustainable construction needs.
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

export default SustainabilityPage;