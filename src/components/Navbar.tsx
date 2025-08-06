import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gradient-to-b from-white via-gray-50 to-white shadow-sm px-16 md:px-20 lg:px-56 py-4 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-xl font-bold text-cyan-700">Paras Mani Rai</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#home" className="hover:text-cyan-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-600 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-700 hover:text-cyan-600 transition">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden mt-4 px-4 space-y-4 text-sm font-medium text-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <li><a href="#home" onClick={closeMenu} className="block hover:text-cyan-600">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="block hover:text-cyan-600">About</a></li>
            <li><a href="#projects" onClick={closeMenu} className="block hover:text-cyan-600">Projects</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block hover:text-cyan-600">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
