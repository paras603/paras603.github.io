import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';
import { FaExternalLinkAlt, FaTasks } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-20 px-16 md:px-20 lg:px-56 bg-gradient-to-b from-gray-50 via-white to-gray-50  text-gray-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans bg-cyan-100 px-4 py-2 rounded-lg inline-block">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-cyan-600">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 pl-6 relative"
            >
              {/* Dot and Icon */}
              <div className="absolute left-[-14px] top-1 bg-cyan-600 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-lg">
                <exp.icon size={14} />

              </div>

              {/* Content */}
              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition">
                <h3 className="text-xl font-semibold text-cyan-700">{exp.role}</h3>
                <div className='flex items-center gap-2 text-gray-500 font-medium'>
                    {exp.website && (
                        <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-800 transition inline-flex items-center space-x-1"
                        >
                          <p>{exp.company}</p>
                        <FaExternalLinkAlt className="text-sm" />
                        </a>
                    )}
                </div>
                
                <span className="text-sm text-gray-400">{exp.period}</span>
                <p className="list-disc list-inside mt-3 text-gray-700 space-y-2">
                  {exp.description.map((task: string, idx: number) => (
                    <li key={idx}>{task}</li>
                  ))}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    { exp.techStack.map((tech, idx) => (
                        <span 
                            key={idx}
                            className={`px-2 py-1 text-xs font-medium rounded
                                    ${idx % 2 === 0
                                    ? 'bg-cyan-100 text-cyan-700'
                                    : 'bg-gray-100 text-gray-700'
                                    }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
