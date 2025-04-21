import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-bold text-indigo-400 cursor-pointer"
            >
              Jaideep<span className="text-white">.dev</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Building innovative solutions with a passion for clean, efficient code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/JaideepYadav/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center"
                  >
                    <GitHub size={16} className="mr-2" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/jaideep-yadav-789900250/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center"
                  >
                    <Linkedin size={16} className="mr-2" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:jaideepyadav611@gmail.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center"
                  >
                    <Mail size={16} className="mr-2" />
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Jaideep Yadav. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a 
              href="https://github.com/JaideepYadav/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <GitHub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jaideep-yadav-789900250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:jaideepyadav611@gmail.com"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;