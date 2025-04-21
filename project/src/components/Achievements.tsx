import { motion } from 'framer-motion';
import { Award, Star, Target, Medal } from 'lucide-react';

interface Achievement {
  icon: JSX.Element;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Award className="w-10 h-10 text-indigo-600" />,
    title: "Solved 300+ LeetCode & 100+ GFG Problems",
    description: "Built strong problem-solving skills across a wide range of data structures and algorithms through consistent practice."
  },
  {
    icon: <Star className="w-10 h-10 text-indigo-600" />,
    title: "HackerRank 5-Star Coder",
    description: "Earned 5-star rating in Problem Solving, demonstrating strong algorithmic and coding skills."
  },
  {
    icon: <Target className="w-10 h-10 text-indigo-600" />,
    title: "Competitive Programming Finalist",
    description: "Finalist in multiple coding competitions, showcasing problem-solving abilities under pressure."
  },
  {
    icon: <Medal className="w-10 h-10 text-indigo-600" />,
    title: "Academic Excellence Award",
    description: "Received recognition for outstanding academic performance in computer science coursework."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Recognition and accomplishments that highlight my dedication to excellence and continuous growth in the field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="mb-4 sm:mb-0 sm:mr-6 p-4 bg-indigo-50 rounded-full">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
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
          className="mt-16 bg-indigo-600 text-white p-8 md:p-12 rounded-lg shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Coding Profiles</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Check out my coding profiles to see my approach to problem-solving and the challenges I've tackled.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://leetcode.com/u/jaideepyadav611"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              LeetCode
            </a>
            <a
              href="https://www.hackerrank.com/profile/jaideepyadav611"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              HackerRank
            </a>
            <a
              href="https://github.com/JaideepYadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;