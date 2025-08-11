import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectList } from '../data/projects';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaCalendarAlt, FaTools } from 'react-icons/fa';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projectList.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-32 text-center text-gray-600">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-cyan-600 hover:underline mt-4 inline-block">
          ← Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6 sm:px-10 md:px-16 lg:px-32 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link to="/projects" className="text-cyan-600 hover:text-cyan-800 inline-flex items-center mb-8 font-sans">
          <FaArrowLeft className="mr-2" /> All Projects
        </Link>

        {/* Headline */}
        <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900 tracking-tight">
          {project.title}
        </h1>

        {/* Date & stack */}
        <div className="text-sm text-gray-500 flex gap-5 flex-wrap">
          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
          <FaCalendarAlt className="text-base" />
          {project.date}
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
            <FaTools className='text-base'/>
            {project.techStack.join(", ")}
          </span>
        </div>

        {/* Hero image */}
        {project.images?.[0] && (
          <div className="w-full aspect-[16/9] mb-8 rounded-md overflow-hidden shadow-md">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain object-center"
            />
          </div>
        )}

        {/* Article content in 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg leading-relaxed">
          <div className="md:col-span-2 space-y-6">
            <p>{project.description?.[0]}</p>

            <p>{project.description?.[1]}</p>

            {/* Extra image 1 */}
            {project.images?.[1] && (
              <div className="aspect-[16/9] rounded-md overflow-hidden shadow mt-6">
                <img
                  src={project.images[1]}
                  alt={`${project.title} - additional`}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            )}

            <p>{project.description?.[2]}</p>

            {/* Extra image 2 */}
            {project.images?.[2] && (
              <div className="aspect-[16/9] rounded-md overflow-hidden shadow mt-6">
                <img
                  src={project.images[2]}
                  alt={`${project.title} - screenshot`}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            )}

          </div>

          {/* Sidebar */}
<aside className="space-y-4">
  {/* Project Info Card */}
  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
    <h3 className="text-cyan-700 font-semibold mb-2">Project Info</h3>
    <ul className="text-sm text-gray-700 space-y-1">
      <li><strong>Date:</strong> {project.date}</li>
      <li><strong>Stack:</strong> {project.techStack.join(', ')}</li>
    </ul>
  </div>

  {/* Key Features */}
  {project.features && project.features.length > 0 && (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
      <h3 className="text-cyan-700 font-semibold mb-2">Key Features</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )}

  {/* GitHub & Live Links */}
  <div className="flex flex-col gap-4">
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 text-cyan-600 border border-cyan-600 rounded-lg hover:bg-cyan-50 transition"
    >
      <FaGithub /> GitHub
    </a>
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
      >
        <FaExternalLinkAlt /> Live Site
      </a>
    )}
  </div>
</aside>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
