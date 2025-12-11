import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-20 bg-dark-lighter/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work in AI and software development.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:neon-border transition-all duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-800 group-hover:to-primary/20 transition-colors duration-500 flex items-center justify-center p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
                                <div className="relative z-10 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                                    <span className="text-2xl font-bold text-white">{project.title}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.code} className="flex-1 text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                        <Github size={16} /> View Code
                                    </a>
                                    <a href={project.links.demo} className="flex-1 text-center py-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
