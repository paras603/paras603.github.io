type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    githubUrl,
    liveUrl
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            {imageUrl && (
                <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded mb-4"/>
            )}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex gap-4 text-sm">
                {githubUrl && 
                    <a 
                        href="{githubUrl}" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                }
                {liveUrl && 
                    <a 
                        href="{liveUrl}" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                    >
                        GitHub
                    </a>
                }
            </div>
        </div>
    );
};

export default ProjectCard;