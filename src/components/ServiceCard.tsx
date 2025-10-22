import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, BookOpen, Package, Hammer, Compass, ClipboardList, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, details = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-16 h-16 bg-accent rounded flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {details.length > 0 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-secondary font-semibold flex items-center gap-2 hover:text-secondary-dark transition-colors mb-4"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}

      <AnimatePresence>
        {isExpanded && details.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 mb-6">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <Link 
        to={`/services#${title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
        className="text-secondary font-semibold inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 after:origin-right after:transition-transform group-hover:after:scale-x-100 group-hover:after:origin-left"
      >
        View Service Details
      </Link>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </motion.div>
  );
};

export default ServiceCard;