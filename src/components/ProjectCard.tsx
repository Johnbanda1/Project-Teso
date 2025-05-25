import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{category}</p>
        <Link 
          to="/projects" 
          className="text-secondary font-semibold inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 after:origin-right after:transition-transform group-hover:after:scale-x-100 group-hover:after:origin-left"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;