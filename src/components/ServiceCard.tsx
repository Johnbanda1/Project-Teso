import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hammer, 
  Users, 
  Package, 
  Wrench, 
  Ruler, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  details?: string[];
}

const iconMap = {
  construction: Hammer,
  consultancy: Users,
  supply: Package,
  renovation: Wrench,
  design: Ruler,
};

export default function ServiceCard({ title, icon, description, details = [] }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Hammer;

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-900/20 to-red-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-gold-400/50 transition-all duration-300 group"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg mr-4 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      <AnimatePresence>
        {isExpanded && details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 overflow-hidden"
          >
            <div className="bg-black/20 rounded-lg p-4 border border-purple-500/20">
              <h4 className="text-gold-300 font-semibold mb-2">Service Details:</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <ArrowRight className="w-4 h-4 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2">
        {details.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 group/btn"
          >
            <span className="mr-2">
              {isExpanded ? 'Show Less' : 'View Details'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            )}
          </button>
        )}
        
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 font-semibold group/btn">
          <span className="mr-2">Get Quote</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}