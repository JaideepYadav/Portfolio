import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    description: "A responsive weather application that provides real-time weather information based on location.",
    technologies: ["JavaScript", "React", "API Integration", "CSS"],
    github: "https://github.com/JaideepYadav/",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce platform with product listings, cart functionality, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/JaideepYadav/",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Task Management System",
    description: "A comprehensive task management system with features for creating, organizing, and tracking tasks.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/JaideepYadav/",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Data Analysis Dashboard",
    description: "An interactive dashboard for visualizing and analyzing large datasets, with filtering and reporting capabilities.",
    technologies: ["Python", "Pandas", "Flask", "JavaScript"],
    github: "https://github.com/JaideepYadav/",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents different skills and technologies
            I've utilized to solve specific challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 flex items-center"
                    >
                      <GitHub size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 flex items-center"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/JaideepYadav/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <GitHub size={18} className="mr-2" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;