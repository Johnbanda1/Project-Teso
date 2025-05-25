import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{category}</p>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        <motion.button 
          onClick={() => window.location.href = '/projects'}
          className="text-secondary font-semibold inline-flex items-center group/btn hover:text-secondary-dark transition-colors"
          whileHover={{ x: 5 }}
        >
          View Details
          <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;