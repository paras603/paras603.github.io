import React, { useState } from 'react';
import { projectList } from '../data/projects';
import { FaExternalLinkAlt, FaGithub, FaSearch, FaHome } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { StackDropdown } from '../components/StackDropdown';

const AllProjects: React.FC = () => {
  const [query, setQuery] = useState('');
  const [stackFilter, setStackFilter] = useState<string>('');
  const navigate = useNavigate();

  const stackOptions = Array.from(new Set(projectList.flatMap(p => p.techStack)));

  const filtered = projectList.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) &&
    (stackFilter === '' || p.techStack.includes(stackFilter))
  );

  return (
    <section className="bg-[#fdfdfb] py-20 px-6 sm:px-10 md:px-12 lg:px-16 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto">
            <Link
              to="/"
              className="text-cyan-600 hover:text-cyan-800 inline-flex items-center mb-8 font-sans"
            >
              <FaHome className='mr-2'/>
              Home
            </Link>

        {/* Header + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 border-b pb-6">
            

            {/* Left side: Title */}
            <div className="flex flex-col flex-grow">
                <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight leading-tight text-gray-800">
                Projects Archive
                </h2>
                <p className="text-gray-500 mt-1 font-sans text-sm">A chronological index of works & builds</p>
            </div>

            {/* Right side: Filters */}
            <div className="flex lg:justify-end sm:items-center gap-4">

                {/* Search */}
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 transition bg-white"
                    />
                </div>

                {/* Tech Dropdown */}
                <div className="">
                    <StackDropdown
                        selected={stackFilter}
                        onChange={setStackFilter}
                        options={stackOptions}
                    />
                </div>
            </div>
        </div>



        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(proj => (
            <div
              key={proj.id}
              onClick={() => navigate(`/projects/${proj.slug}`)}
              className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-lg transition transform hover:-translate-y-0.5 flex flex-col cursor-pointer max-h-[600px]"
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-44 object-cover rounded mb-5 border border-gray-100"
                loading="lazy"
              />

              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">{proj.title}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 whitespace-nowrap">
                  {proj.date}
                </span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] uppercase tracking-wide bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full px-2 py-1 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 flex-wrap">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-cyan-600 text-sm border border-cyan-600 rounded hover:bg-cyan-50 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-12 italic text-lg">No matching projects found.</p>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
