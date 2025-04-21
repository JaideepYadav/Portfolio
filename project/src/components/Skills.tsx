import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const skills: Skill[] = [
  { name: 'C++', level: 90, category: 'backend' },
  { name: 'Java', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'HTML/CSS', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'SQL', level: 80, category: 'backend' },
  { name: 'Data Structures', level: 90, category: 'other' },
  { name: 'Algorithms', level: 85, category: 'other' },
  { name: 'Problem Solving', level: 95, category: 'other' },
  { name: 'Git/GitHub', level: 85, category: 'other' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>(skills);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (activeTab === 'all') {
      setVisibleSkills(skills);
    } else {
      setVisibleSkills(skills.filter(skill => skill.category === activeTab));
    }
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-200 rounded-lg">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-white shadow' : 'hover:bg-gray-100'} transition-all`}
            >
              All Skills
            </button>
            <button 
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 rounded-md ${activeTab === 'frontend' ? 'bg-white shadow' : 'hover:bg-gray-100'} transition-all`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-2 rounded-md ${activeTab === 'backend' ? 'bg-white shadow' : 'hover:bg-gray-100'} transition-all`}
            >
              Backend
            </button>
            <button 
              onClick={() => setActiveTab('other')}
              className={`px-4 py-2 rounded-md ${activeTab === 'other' ? 'bg-white shadow' : 'hover:bg-gray-100'} transition-all`}
            >
              Other
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {visibleSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              initial={{ opacity: 0, y: 20 }}
              animate={animated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="skill-item"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-gray-800">{skill.name}</h3>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={animated ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;