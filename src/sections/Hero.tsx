import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import heroAnimation from '../assets/animation/hero-lottie.json';

const lines = [
  'echo "Hello, world" ',
  'whoami',
  'I am Paras — developer, designer, engineer',
  'pwd',
  '/home/paras/portfolio',
  'ls -la',
  '📁 projects   📁 skills   📄 resume.pdf',
  'echo "Always learning. Always building."',
];

const typingSpeed = 100;
const displayDelay = 1500;

const Hero: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>(lines.map(() => ''));
  const [currentLine, setCurrentLine] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const typeNext = () => {
      const fullText = lines[currentLine];
      const charIndex = charIndexRef.current;

      if (charIndex < fullText.length) {
        setVisibleLines(prev => {
          const copy = [...prev];
          copy[currentLine] = fullText.slice(0, charIndex + 1);
          return copy;
        });
        charIndexRef.current = charIndex + 1;
        timeoutRef.current = setTimeout(typeNext, typingSpeed);
      } else {
        setVisibleLines(prev => {
          const copy = [...prev];
          copy[currentLine] = fullText;
          return copy;
        });

        timeoutRef.current = setTimeout(() => {
          charIndexRef.current = 0;
          if (currentLine < lines.length - 1) {
            setCurrentLine(currentLine + 1);
          }
        }, displayDelay);
      }
    };

    typeNext();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentLine]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && showScrollButton) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollButton]);

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowScrollButton(false);
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const allLinesTyped = visibleLines.every((line, idx) => line === lines[idx]);

  return (
<section
  id="home"
  className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-16 lg:px-2 py-6 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-500"
>
      {/* Lottie Animation */}
      <motion.div
        className="w-64 sm:w-80 md:w-86 lg:max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={lottieOptions} />
      </motion.div>

      {/* Terminal */}
      <motion.div
        className="flex-1 max-w-lg w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg font-mono text-sm text-green-400 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-t-lg">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <pre
          className="p-6 whitespace-pre-wrap break-words min-h-[160px] overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          {visibleLines.slice(0, currentLine).map((line, idx) => (
            <div key={idx} className="flex items-center">
              <span className="mr-2 text-cyan-400 font-bold">paras@dev:~$</span>
              <span className="text-cyan-300">{line}</span>
            </div>
          ))}

          {currentLine < lines.length && (
            <div className="flex items-center">
              <span className="mr-2 text-cyan-400 font-bold">paras@dev:~$</span>
              <span className="text-cyan-300">
                {visibleLines[currentLine]}
                <span className="animate-blink ml-1"></span>
              </span>
            </div>
          )}

          {allLinesTyped && (
            <div className="flex items-center">
              <span className="mr-2 text-cyan-400 font-bold">paras@dev:~$</span>
              <span>
                <span className="animate-blink">|</span>
              </span>
            </div>
          )}
        </pre>
      </motion.div>

      {/* Scroll Down Button */}
        {showScrollButton && (
        <button
            onClick={handleScrollClick}
            className="absolute bottom-3  left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-slate-600 transition animate-bounce"
            aria-label="Scroll down"
        >
            <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        )}

    </section>
  );
};

export default Hero;
