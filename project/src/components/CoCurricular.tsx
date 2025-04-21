import { motion } from 'framer-motion';
import { Users, Code, BookOpen, Trophy } from 'lucide-react';

interface Activity {
  icon: JSX.Element;
  title: string;
  description: string;
}

const activities: Activity[] = [
  {
    icon: <Code className="w-6 h-6 text-indigo-600" />,
    title: "Competitive Programming",
    description: "Active participant in coding competitions, enhancing problem-solving skills and algorithmic thinking."
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Technical Club Member",
    description: "Member of the college technical club, organizing workshops and participating in tech events."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    title: "Tech Workshops",
    description: "Conducted workshops on web development and data structures, sharing knowledge with peers."
  },
  {
    icon: <Trophy className="w-6 h-6 text-indigo-600" />,
    title: "Hackathons",
    description: "Participated in multiple hackathons, developing innovative solutions for real-world problems."
  }
];

const CoCurricular = () => {
  return (
    <section id="activities" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co-curricular Activities</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Beyond academics, I engage in various activities that enhance my skills and contribute to the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all flex"
            >
              <div className="mr-6 bg-indigo-50 p-4 rounded-full flex items-center justify-center self-start">
                {activity.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-600">Volunteer Experience</h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h4 className="font-medium text-gray-800">Tech Mentor</h4>
                <p className="text-gray-500 text-sm">2022 - Present</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Mentored junior students in programming and web development, helping them develop technical skills and confidence.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h4 className="font-medium text-gray-800">Code for Cause</h4>
                <p className="text-gray-500 text-sm">2021 - 2022</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Participated in developing software solutions for local non-profit organizations to address community challenges.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoCurricular;