import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I am a dedicated software developer with a passion for building efficient, scalable, and user-friendly applications. 
              My journey in programming began during my college years, where I discovered my love for solving complex problems through code.
            </p>
            <p className="text-gray-700 mb-6">
              With a strong foundation in computer science fundamentals and hands-on experience with various technologies, 
              I strive to write clean, maintainable code that delivers real value. I'm particularly interested in web development, 
              data structures, algorithms, and building applications that make a positive impact.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me exploring new technologies, participating in coding competitions. I'm always eager to learn and grow, both as a developer and as a person.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Name</h4>
                <p className="text-gray-800 font-medium">Jaideep Yadav</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Email</h4>
                <p className="text-gray-800 font-medium break-words">jaideepyadav611@gmail.com</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Location</h4>
                <p className="text-gray-800 font-medium">India</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Interest</h4>
                <p className="text-gray-800 font-medium">Software Development</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Study</h4>
                <p className="text-gray-800 font-medium">Computer Science Engineering</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Degree</h4>
                <p className="text-gray-800 font-medium">Bachelor of Technology</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn-primary flex items-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;