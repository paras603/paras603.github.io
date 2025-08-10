import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-white via-gray-50 to-white text-gray-600 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-cyan-700 font-semibold">Paras Mani Rai</span>. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg text-gray-500">
          <a
            href="mailto:raiparasmani1@gmail.com"
            className="hover:text-cyan-600 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/paras603"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/paras-mani-rai-a6363b28b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
