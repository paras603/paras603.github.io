import React from 'react';
import { skills, Skill as SkillType } from '../data/skills';

const Skill: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 sm:px-10 md:px-20 lg:px-56 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 font-space">
          Skills
        </h2>

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
      </div>
    </section>
  );
};

export default Skill;
