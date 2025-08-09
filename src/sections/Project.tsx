import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectList } from '../data/projects';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 py-20 px-6 sm:px-10 md:px-20 lg:px-56"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
      <div className="flex items-center justify-between mb-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans bg-cyan-100 px-4 py-2 rounded-lg inline-block">
          Projects
        </h2>

        {/* All Projects Link */}
        <Link 
          to='/projects'
          className="text-cyan-600 font-medium text-lg hover:text-cyan-800 transition-colors border border-cyan-600 px-3 py-1 rounded-full hover:border-cyan-800"
        >
          View All
        </Link>
      </div>


        {/* Mobile Swiper */}
        <div className="lg:hidden">
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
                <div className="space-y-6"
                      onClick={() => navigate(`/projects/${proj.slug}`)}>
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="rounded-xl shadow-lg border border-gray-200 object-cover w-full aspect-video"
                    loading="lazy"
                  />
                  <div className='flex justify-start'>

                    <h3 
                      className="text-2xl font-bold text-cyan-700"
                    >
                      {proj.title}
                    </h3>
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
        {/* Desktop: Grid view of projects */}
<div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-10">
  {projectList.map((proj: Project) => (
    <motion.div
      key={proj.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="cursor-pointer border border-gray-200 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all"
      onClick={() => navigate(`/projects/${proj.slug}`)}
    >
      <img
        src={proj.imageUrl}
        alt={proj.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-cyan-700">{proj.title}</h3>
        <p className="text-gray-700 text-sm line-clamp-3">{proj.description}</p>
        <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
          <span>📅 {proj.date}</span>
          <span>🛠 {proj.techStack.join(", ")}</span>
        </div>
        <div className="flex gap-4 pt-2">
          <a
            href={proj.githubUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 text-sm"
          >
            <FaGithub className="mr-1" />
            GitHub
          </a>
          <a
            href={proj.liveUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 text-sm"
          >
            <FaExternalLinkAlt className="mr-1" />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>


        {/* Navigation Dots */}
        {/* Desktop navigation dots only */}
        {/* <div className="hidden lg:flex justify-center mt-12 gap-4">
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
        </div> */}

      </motion.div>
    </section>
  );
};

export default Project;
