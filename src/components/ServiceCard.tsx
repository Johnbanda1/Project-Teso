import React from 'react';
import { Link } from 'react-router-dom';
import { Building, BookOpen, Package, Hammer, Compass, ClipboardList } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'construction':
        return <Building size={32} className="text-secondary" />;
      case 'consultancy':
        return <BookOpen size={32} className="text-secondary" />;
      case 'material':
        return <Package size={32} className="text-secondary" />;
      case 'renovation':
        return <Hammer size={32} className="text-secondary" />;
      case 'design':
        return <Compass size={32} className="text-secondary" />;
      case 'management':
        return <ClipboardList size={32} className="text-secondary" />;
      default:
        return <Building size={32} className="text-secondary" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
      <div className="w-16 h-16 bg-accent rounded flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to="/services" 
        className="text-secondary font-semibold inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 after:origin-right after:transition-transform group-hover:after:scale-x-100 group-hover:after:origin-left"
      >
        Learn More
      </Link>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </div>
  );
};

export default ServiceCard;