import ProjectCard from "./ProjectCard";
import { motion, scale } from "framer-motion";

const Projects: React.FC = () => {
    const projectList = [
        {
            title: "Pokemon Library",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
            imageUrl: "/assets/portfolio.png",
            githubUrl: "https://github.com/paras603",
            liveUrl: "https://parasmanirai.com.np",
        },
        {
            title: "Chat with Coffee",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
            imageUrl: "/assets/portfolio.png",
            githubUrl: "https://github.com/paras603",
            liveUrl: "https://parasmanirai.com.np",
        },
        {
            title: "Chat with Coffee",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
            imageUrl: "/assets/portfolio.png",
            githubUrl: "https://github.com/paras603",
            liveUrl: "https://parasmanirai.com.np",
        },
        {
            title: "Chat with Coffee",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
            imageUrl: "/assets/portfolio.png",
            githubUrl: "https://github.com/paras603",
            liveUrl: "https://parasmanirai.com.np",
        },
        {
            title: "Chat with Coffee",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
            imageUrl: "/assets/portfolio.png",
            githubUrl: "https://github.com/paras603",
            liveUrl: "https://parasmanirai.com.np",
        },
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y:0 },
    };

    return (
        <section id="projects" className="p-10 bg-grau-50">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true}}
                className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projectList.map((project, idx) => (
                    <motion.div key={idx} variants={cardVariants}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;