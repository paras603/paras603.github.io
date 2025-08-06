import React from 'react';
import Lottie from 'react-lottie';
import { motion } from "framer-motion";
import profileLottie from '../../public/assets/profile-lottie.json'; // adjust path if needed

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const About: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: profileLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 px-16 md:px-20 lg:px-56 bg-gradient-to-b from-gray-50 via-white to-gray-50  text-gray-500"
    >
    {/* content here */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <div className="mb-12 flex items-center gap-3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans bg-cyan-100 px-4 py-2 rounded-lg inline-block">
            About Me
          </h2>
        </div>




        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
          {/* Lottie Animation */}
          <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center hover:scale-105 transition-transform duration-500 relative group">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-cyan-300 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>
            <Lottie options={lottieOptions} />
          </div>



          {/* Bio */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-poppins  text-justify">
              I'm <span className="font-semibold text-cyan-600">Paras</span> — a
              developer, designer, and engineer passionate about crafting elegant,
              performant digital experiences. I thrive at the intersection of clean
              design and robust code.
            </p>

              {/* Social Icons */}
            <div className="mt-8 flex flex-wrap gap-6 mb-6 text-cyan-700 text-lg font-medium">
              <a href="mailto:paris@example.com" className="hover:text-cyan-900 flex items-center gap-2">
                <FaEnvelope />
                Email
              </a>
              <a href="https://github.com/paras603" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 flex items-center gap-2">
                <FaGithub />
                GitHub
              </a>
              <a href="https://linkedin.com/in/paras603" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 flex items-center gap-2">
                <FaLinkedin />
                LinkedIn
              </a>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-gray-100 hover:shadow-lg transition">
                🚀 Frontend & Fullstack Development
              </div>
              <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-gray-100 hover:shadow-lg transition">
                🎨 UI/UX & Design Systems
              </div>
              <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-gray-100 hover:shadow-lg transition">
                🛠️ React, TypeScript, Tailwind CSS
              </div>
              <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-gray-100 hover:shadow-lg transition">
                📚 Constantly learning new technologies
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-2 bg-cyan-600 text-white rounded-md font-medium hover:bg-cyan-700 transition"
              >
                Contact Me
              </a>
              <a
                href="/assets/resume.pdf" // Replace with actual path
                download
                className="px-6 py-2 border border-cyan-600 text-cyan-600 rounded-md font-medium hover:bg-cyan-50 transition"
              >
                Download Resume
              </a>
            </div>

          

          </div>
        </div>
      </motion.div>
</section>

  );
};

export default About;
