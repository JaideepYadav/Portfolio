import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Academics', to: 'academics' },
  { name: 'Activities', to: 'activities' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl font-bold text-indigo-600 cursor-pointer"
          >
            Jaideep<span className="text-gray-800">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 btn btn-primary flex items-center"
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="mobile-menu"
        >
          <div className="flex justify-end">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link my-2 text-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 btn btn-primary flex items-center"
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;