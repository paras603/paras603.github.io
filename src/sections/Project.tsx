import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectList } from '../data/projects';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

const Project: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projectList[currentIndex];

return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 py-20 px-6 sm:px-10 md:px-20 lg:px-56"
    >
      <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900">
          Projects
        </h2>

        {/* All Projects Link */}
        <a
          href="/projects"
          className="text-cyan-600 font-medium text-lg hover:text-cyan-800 transition-colors border border-cyan-600 px-2 py-1 rounded-full hover:border-cyan-800"
        >
          All projects
        </a>
      </div>


        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="!pb-10"
          >


            {projectList.map((proj: Project) => (
              <SwiperSlide key={proj.id} >
                <div className="space-y-6">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="rounded-xl shadow-lg border border-gray-200 object-cover w-full aspect-video"
                    loading="lazy"
                  />
                  <div className='flex justify-start'>

                    <h3 className="text-2xl font-bold text-cyan-700">{proj.title}</h3>
                                      {/* GitHub */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="inline-flex items-center gap-2 pl-4 text-cyan-600 hover:text-cyan-700 transition-colors text-base"
                      >
                        <FaGithub className="text-xl" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>

                      {/* Live Site */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Website`}
                        className="inline-flex items-center gap-2 pl-4 text-cyan-600 hover:text-cyan-700 transition-colors text-base"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{proj.description}</p>

                  <div className="text-sm text-gray-500 flex gap-4 flex-wrap">
                    <span>📅 {proj.date}</span>
                    <span>🛠 {proj.techStack.join(", ")}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Show one project with left (text) and right (image) */}
        <div className="hidden md:flex flex-col md:flex-row items-center gap-12 text-justify">
          {/* Left Panel */}
          <AnimatePresence mode="wait">
            <motion.img
              key={project.imageUrl}
              src={project.imageUrl}
              alt={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="md:w-[38.2%] rounded-xl shadow-2xl object-cover border border-gray-200"
              loading="lazy"
            />
          </AnimatePresence>

          {/* Right Panel (Image) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="md:w-[61.8%] space-y-6"
            >
              <h3 className="text-3xl font-bold text-cyan-700">{project.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>

              <div className="text-sm text-gray-500 flex gap-6 flex-wrap">
                <span>📅 {project.date}</span>
                <span>🛠 {project.techStack.join(", ")}</span>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                {/* GitHub */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub Repository`}
                  className="inline-flex items-center gap-2 pr-3 text-cyan-600 hover:text-cyan-700 transition-colors text-base"
                >
                  <FaGithub className="text-xl" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                {/* Live Site */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Live Website`}
                  className="inline-flex items-center gap-2 pr-3 text-cyan-600 hover:text-cyan-700 transition-colors text-base"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="hidden sm:inline">Live</span>
                </a>

              </div>




              
            </motion.div>
          </AnimatePresence>
          
        </div>

        {/* Navigation Dots */}
        {/* Desktop navigation dots only */}
        <div className="hidden md:flex justify-center mt-12 gap-4">
          {projectList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-cyan-600 shadow-lg scale-110"
                  : "bg-cyan-200/50 hover:bg-cyan-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
