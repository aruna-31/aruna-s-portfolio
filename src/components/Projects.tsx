import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';
import { FolderOpen, Trophy } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 bg-dark-lighter/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
                    >
                        <FolderOpen className="text-primary" size={18} />
                        <span className="text-primary font-semibold text-sm">Portfolio</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects & Achievements</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Award-winning projects that demonstrate expertise in AI/ML, Full Stack Development, and Team Leadership.
                    </p>
                </motion.div>

                <div className="space-y-24 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
