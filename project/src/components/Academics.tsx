import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  score?: string;
}

const educationHistory: Education[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Computer Science Engineering",
    year: "2020 - 2024",
    description: "Focused on computer science fundamentals, data structures, algorithms, and software development practices.",
    score: "8.0 CGPA"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Science Stream (PCM)",
    year: "2018 - 2020",
    description: "Studied Physics, Chemistry, and Mathematics with a focus on developing analytical and problem-solving skills.",
    score: "92.4%"
  },
  {
    degree: "Secondary Education",
    institution: "CBSE Board",
    year: "2018",
    description: "Built a strong foundation in mathematics and science, sparking an interest in technology and computing.",
    score: "89.6%"
  }
];

const Academics = () => {
  return (
    <section id="academics" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Academics</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
          
          {educationHistory.map((education, index) => (
            <motion.div
              key={education.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white z-10"></div>
              
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
                <div className={`md:w-1/2 px-6 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className={`p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                  }`}>
                    <div className="flex items-center mb-4">
                      {index === 0 ? (
                        <GraduationCap className="mr-3 text-indigo-600" size={24} />
                      ) : (
                        <BookOpen className="mr-3 text-indigo-600" size={24} />
                      )}
                      <h3 className="text-xl font-semibold text-gray-800">{education.degree}</h3>
                    </div>
                    <p className="text-indigo-600 font-medium mb-2">{education.institution}</p>
                    <p className="text-gray-500 mb-3">{education.year}</p>
                    <p className="text-gray-600 mb-3">{education.description}</p>
                    {education.score && (
                      <div className="flex items-center">
                        <Award className="mr-2 text-indigo-600" size={16} />
                        <span className="font-medium text-gray-700">{education.score}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-8 bg-indigo-50 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-indigo-600">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Data Structures & Algorithms</h4>
              <p className="text-gray-600 text-sm">Udemy</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Web Development Bootcamp</h4>
              <p className="text-gray-600 text-sm">Coursera</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Java Programming Masterclass</h4>
              <p className="text-gray-600 text-sm">Udemy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;