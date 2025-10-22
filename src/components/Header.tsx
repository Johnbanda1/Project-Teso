import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo1-removebg-preview_upscayl_10x_realesrgan-x4plus.png';

interface HeaderProps {
  isScrolled: boolean;
}



const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommitmentOpen, setIsCommitmentOpen] = useState(false);

  

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
      setIsCommitmentOpen(false);
      document.body.classList.remove('menu-open');
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);








  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const toggleCommitment = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsCommitmentOpen(!isCommitmentOpen);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCommitmentOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src={logo} alt="logo" className="h-12 rounded-lg object-contain mr-3" />
            
            <span className={`font-bold text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Teso Works 
            </span>
          </Link>
          
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className={isScrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>

          <nav 
            className={`md:flex ${
              isMenuOpen 
                ? 'fixed inset-0 bg-white flex flex-col pt-20 px-6 z-40' 
                : 'hidden'
            } md:static md:bg-transparent md:flex-row md:pt-0 md:px-0 md:items-center transition-all duration-300`}
          >
            <ScrollLink 
              to="/" 
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`block py-3 md:py-0 md:px-4 font-medium relative after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-0 cursor-pointer
                ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'} hover:text-secondary after:w-0
                after:transition-all after:duration-300 hover:after:w-full`}
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
            
            <ScrollLink 
              to="/about" 
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`block py-3 md:py-0 md:px-4 font-medium relative after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-0 cursor-pointer
                ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'} hover:text-secondary after:w-0
                after:transition-all after:duration-300 hover:after:w-full`}
              onClick={closeMenu}
            >
              About
            </ScrollLink>
            
            <ScrollLink 
              to="/services" 
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`block py-3 md:py-0 md:px-4 font-medium relative after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-0 cursor-pointer
                ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'} hover:text-secondary after:w-0
                after:transition-all after:duration-300 hover:after:w-full`}
              onClick={closeMenu}
            >
              Services
            </ScrollLink>
            
            <ScrollLink 
              to="/projects" 
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`block py-3 md:py-0 md:px-4 font-medium relative after:absolute after:h-0.5 after:bg-secondary after:bottom-0 after:left-0 cursor-pointer
                ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'} hover:text-secondary after:w-0
                after:transition-all after:duration-300 hover:after:w-full`}
              onClick={closeMenu}
            >
              Projects
            </ScrollLink>
            
            
          
          <div
              className="relative"
              onMouseEnter={() => setIsCommitmentOpen(true)}
              onMouseLeave={() => setIsCommitmentOpen(false)}
            >
              <button
                onClick={() => setIsCommitmentOpen(true)} // Also opens on click
                className={`flex items-center py-3 md:py-0 md:px-4 font-medium
                  ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'} hover:text-secondary`}
              >
                Our Commitment
                <ChevronDown size={16} className="ml-1" />
              </button>

              <AnimatePresence>
                {isCommitmentOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 bg-white shadow-md rounded-lg min-w-48 z-50"
                    onMouseEnter={() => setIsCommitmentOpen(true)}   // keep open while hovering
                    onMouseLeave={() => setIsCommitmentOpen(false)}  // close when leaving
                  >
                    <NavLink
                      to="/commitment/sustainability"
                      className="block py-3 px-4 hover:bg-gray-100 text-primary"
                      onClick={() => {
                        closeMenu();
                        setIsCommitmentOpen(false);
                      }}
                    >
                      Sustainability
                    </NavLink>
                    <NavLink
                      to="/commitment/safety"
                      className="block py-3 px-4 hover:bg-gray-100 text-primary"
                      onClick={() => {
                        closeMenu();
                        setIsCommitmentOpen(false);
                      }}
                    >
                      Safety
                    </NavLink>
                    <NavLink
                      to="/commitment/quality"
                      className="block py-3 px-4 hover:bg-gray-100 text-primary"
                      onClick={() => {
                        closeMenu();
                        setIsCommitmentOpen(false);
                      }}
                    >
                      Quality
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>




            
            
            {/*  
            <div className="relative group">
              <button 
                className={`flex items-center py-3 md:py-0 md:px-4 font-medium
                ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'} hover:text-secondary`}
                onClick={toggleCommitment}
              >
                Our Commitment
                <ChevronDown size={16} className="ml-1" />
              </button>
                
              
              
              <AnimatePresence>
                {(isCommitmentOpen || window.innerWidth >= 768) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`md:absolute md:left-0 md:bg-white md:shadow-md md:rounded-lg md:min-w-48 md:mt-2
                    ${isCommitmentOpen ? 'block' : 'md:hidden md:group-hover:block'}`}
                  >
                    <NavLink 
                      to="/commitment/sustainability" 
                      className="block py-3 px-4 hover:bg-gray-100 hover:text-secondary text-primary"
                      onClick={closeMenu}
                    >
                      Sustainability
                    </NavLink>
                    <NavLink 
                      to="/commitment/safety" 
                      className="block py-3 px-4 hover:bg-gray-100 hover:text-secondary text-primary"
                      onClick={closeMenu}
                    >
                      Safety
                    </NavLink>
                    <NavLink 
                      to="/commitment/quality" 
                      className="block py-3 px-4 hover:bg-gray-100 hover:text-secondary text-primary"
                      onClick={closeMenu}
                    >
                      Quality
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
              */}
            
            
            <ScrollLink 
              to="/contact" 
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="md:ml-4 block px-6 py-2 bg-secondary text-white font-medium rounded-lg transition-all hover:bg-secondary-dark hover:shadow-md transform hover:-translate-y-0.5 mt-4 md:mt-0 text-center"
              onClick={closeMenu}
            >
              Contact Us
            </ScrollLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;