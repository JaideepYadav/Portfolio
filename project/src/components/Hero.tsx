import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ChevronDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import jai from './jaideep.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-gray-500">Hello, I'm</span>
              <span className="text-indigo-600">Jaideep Yadav</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about building impactful software solutions with modern technologies. 
              Focused on creating efficient, scalable applications that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary"
              >
                Get In Touch
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Resume
              </a>
            </div>
            <div className="flex justify-center md:justify-start mt-8 space-x-6">
              <a href="https://github.com/JaideepYadav/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <GitHub />
              </a>
              <a href="https://www.linkedin.com/in/jaideep-yadav-789900250/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin />
              </a>
              <a href="mailto:jaideepyadav611@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600 mx-auto overflow-hidden">
              <img src={jai} alt="Portrait" className="w-full h-full object-cover"
/>

              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="animate-bounce-slow cursor-pointer"
          >
            <ChevronDown size={32} className="text-indigo-600" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;