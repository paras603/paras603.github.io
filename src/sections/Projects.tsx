import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectList } from "../data/projects";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projectList[currentIndex];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-[3%] px-[3%] text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-[1.5%] font-space">
          Projects
        </h2>

        {/* Content layout using golden ratio */}
        <div className="flex flex-col md:flex-row items-center gap-[3%]">
          {/* Left: Description (≈61.8%) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="md:w-[61.8%] space-y-4"
            >
              <h3 className="text-3xl font-semibold">{project.title}</h3>
              <p className="text-lg leading-relaxed">{project.description}</p>
              
              <div className="text-sm text-gray-600 flex gap-4 flex-wrap">
                <span>🗓 {project.date}</span>
                <span>🛠 {project.techStack.join(", ")}</span>
              </div>
              
              <div className="mt-4 flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-600 text-cyan-600 rounded-md hover:bg-cyan-50 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-600 text-cyan-600 rounded-md hover:bg-cyan-50 transition"
                >
                  Live Site
                </a>
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
              >
                See in Detail
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right: Image (≈38.2%) */}
          <AnimatePresence mode="wait">
            <motion.img
              key={project.imageUrl}
              src={project.imageUrl}
              alt={project.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="md:w-[38.2%] rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-[3%] gap-4">
          {projectList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                i === currentIndex ? "bg-cyan-600 shadow-lg" : "bg-cyan-200/50 hover:bg-cyan-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
