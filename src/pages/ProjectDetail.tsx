import { useParams } from "react-router-dom";
import { projectList } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projectList.find((p) => p.slug === slug);

  if (!project) return <div className="p-10 text-red-600">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full rounded-lg shadow-md mb-6"
      />
      <p className="mb-4 text-lg">{project.description}</p>
      <div className="text-sm text-gray-600 mb-4">
        <span>🗓 {project.date}</span> • <span>🛠 {project.techStack.join(", ")}</span>
      </div>
      <div className="flex gap-4">
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
    </div>
  );
};

export default ProjectDetail;
