import React from 'react';
import { skills, Skill as SkillType } from '../data/skills';
import { motion } from "framer-motion";

const Skill: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 sm:px-10 md:px-20 lg:px-56 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className='mb-12'>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans bg-cyan-100 px-4 py-2 rounded-lg inline-block">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill: SkillType, idx: number) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="flex items-center bg-white shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <Icon className="text-cyan-600 text-3xl mr-3" />
                <div className="text-base font-medium text-cyan-800">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
