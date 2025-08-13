import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectList } from '../data/projects';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTools } from 'react-icons/fa';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../components/SectionTitle';

SwiperCore.use([Pagination]);

const Project: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projectList[currentIndex];
  const navigate = useNavigate();

return (
    <section
      id="projects"
      className="relative py-20 px-16 md:px-20 lg:px-56 bg-gradient-to-b from-gray-50 via-white to-gray-50  text-gray-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto "
      >
        <div className="flex items-center justify-between mb-12">
          {/* Title */}
          <SectionTitle highlightLetter='P' title='Projects' />

          {/* All Projects Link */}
          <Link 
            to='/projects'
            className="text-cyan-600 font-medium text-lg hover:text-cyan-800 transition-colors border border-cyan-600 px-3 py-1 rounded-full hover:border-cyan-800"
          >
            View All
          </Link>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            // slidesPerView={1}
            spaceBetween={20}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="!pb-10"
          >
            {projectList.map((proj) => (
              <SwiperSlide key={proj.id} >
                <div className="space-y-6"
                      onClick={() => navigate(`/projects/${proj.slug}`)}>
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="rounded-sm shadow-lg border border-gray-200 object-cover w-full aspect-video cursor-pointer"
                    loading="lazy"
                  />
                  <div className='flex justify-start'>
                    <h3 
                      className="text-2xl font-bold text-cyan-700"
                    >
                      {proj.title}
                    </h3>
                      {/* GitHub */}
                      {/* <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.title} GitHub Repository`}
                        className="inline-flex items-center gap-2 pl-4 text-cyan-600 hover:text-cyan-700 transition-colors text-base"
                      >
                        <FaGithub className="text-xl" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a> */}
                      {/* Live Site */}
                      {/* { proj.liveUrl && (

                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${proj.title} Live Website`}
                          className="inline-flex items-center gap-2 pl-4 text-cyan-600 hover:text-cyan-700 transition-colors text-base"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span className="hidden sm:inline">Live</span>
                        </a>
                      )

                      } */}
                  </div>
                  <p className="text-gray-700 leading-relaxed line-clamp-3">{proj.description}</p>

                  <div className="text-sm text-gray-500 flex gap-4 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                      <FaCalendarAlt className="text-base" />
                      {proj.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                      <FaTools className='text-base'/>
                      {proj.techStack.join(", ")}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-sm text-gray-400 mt-2 mb-6 text-center md:hidden">
            Swipe to explore projects →
          </p>
        </div>

        {/* Desktop: Grid view of projects */}
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-10">
          {projectList.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="cursor-pointer border border-gray-200 shadow-md hover:shadow-xl rounded-sm overflow-hidden transition-all"
              onClick={() => navigate(`/projects/${proj.slug}`)}
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-cyan-700 hover:underline">{proj.title}</h3>
                <p className="text-gray-700 text-sm line-clamp-3">{proj.description}</p>
                <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
                 <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                  <FaCalendarAlt className="text-base" />
                  {proj.date}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                    <FaTools className='text-base'/>
                    {proj.techStack.join(", ")}
                  </span>
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={proj.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 text-sm"
                  >
                    GitHub
                  </a>
                  { proj.liveUrl && (
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
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </motion.div>
    </section>
  );
};

export default Project;
