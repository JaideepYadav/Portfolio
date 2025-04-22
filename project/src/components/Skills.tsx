import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'other';
}

const skills: Skill[] = [
  { name: 'C++', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'Data Structures', category: 'other' },
  { name: 'Algorithms', category: 'other' },
  { name: 'Problem Solving', category: 'other' },
  { name: 'Git/GitHub', category: 'other' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>(skills);

  useEffect(() => {
    setVisibleSkills(
      activeTab === 'all' ? skills : skills.filter(skill => skill.category === activeTab)
    );
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-200 rounded-lg shadow-sm">
            {['all', 'frontend', 'backend', 'other'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize ${
                  activeTab === tab ? 'bg-white text-indigo-600 shadow' : 'hover:bg-gray-100 text-gray-600'
                } transition-all`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {visibleSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition"
            >
              {skill.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
