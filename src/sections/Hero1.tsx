import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Button from '../components/ui/Button';
import heroAnimation from '../../public/assets/hero-lottie.json';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa';

const Hero1: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 lg:px-24 py-16 bg-gradient-to-b from-slate-100 via-white to-slate-100"
    >
      {/* Text Content with Glassmorphism */}
      <motion.div
        className="flex-1 text-center lg:text-left bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_45px_rgba(139,92,246,0.3)] transition-shadow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I’m Paras
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 mb-8">
          I craft interactive, modern web experiences using React, TypeScript, and clean design systems.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open('/ParasManiRai_Resume.pdf', '_blank')}
          >
            Download Resume
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-6 text-gray-700 text-2xl">
          <a
            href="https://github.com/paras603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/paras603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-800 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/paras603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-gray-800 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        className="flex-1 max-w-md lg:max-w-lg flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Lottie options={lottieOptions} />
      </motion.div>

      {/* Scroll Down Indicator (Large Screens Only) */}
      <motion.div
        onClick={scrollToContact}
        className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-600"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        aria-label="Scroll down to contact section"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') scrollToContact();
        }}
      >
        <FaChevronDown size={30} />
      </motion.div>
    </section>
  );
};

export default Hero1;
