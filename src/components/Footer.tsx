import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Facebook, Twitter, Linkedin, Instagram, CheckCircle, ArrowRight } from 'lucide-react';
import logo from '../assets/logo1_upscayl_6x_realesrgan-x4plus.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-primary text-gray-300">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={logo} alt="logo" className="h-12 rounded-lg object-contain mr-3" />
              <span className="font-bold text-xl text-white">Teso Works</span>
            </Link>
            <p className="mb-6">Building excellence in construction since 2013. Your trusted partner in quality construction services across Zambia.</p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/tesoworks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-opacity-10 bg-white flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a 
                href="https://twitter.com/tesoworks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-opacity-10 bg-white flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com/company/tesoworks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-opacity-10 bg-white flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="https://instagram.com/tesoworks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-opacity-10 bg-white flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/commitment/sustainability" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Our Commitment
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-secondary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-secondary hover:pl-1 transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-secondary">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex overflow-hidden rounded">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-1 py-3 px-4 outline-none text-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-secondary text-white px-6 hover:bg-secondary-dark transition-colors whitespace-nowrap flex items-center"
                >
                  Subscribe
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              {isSubscribed && (
                <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-green-500 text-white rounded flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  Successfully subscribed!
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Teso Works & Supply Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;