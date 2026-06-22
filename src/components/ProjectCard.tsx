import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Award, Trophy, TrendingUp, Users, Zap } from 'lucide-react';

interface ProjectCardProps {
    project: any;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const isEven = index % 2 === 0;
    const isFlagship = project.id === 2;
    const [featuredImageIndex, setFeaturedImageIndex] = useState(0);

    // Use actual images from project data or fallback to placeholder
    const images = project.images || Array.from({ length: project.imageCount }, (_, i) =>
        `https://images.unsplash.com/photo-${1550000000000 + project.id * 1000 + i}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={images && images.length > 0
                ? `grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`
                : 'max-w-4xl mx-auto'
            }
        >
            {/* Image Gallery - Only render if images exist */}
            {images && images.length > 0 && (
                <div className={isEven ? 'order-1' : 'order-2'}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        {isFlagship && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute -top-4 -left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                            >
                                ⭐ Flagship Project
                            </motion.div>
                        )}
                        {/* Large Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 mb-4"
                        >
                            <img
                                src={images[featuredImageIndex]}
                                alt={`${project.title} - Image ${featuredImageIndex + 1}`}
                                className="w-full h-auto object-cover"
                                loading="eager"
                            />
                        </motion.div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="grid grid-cols-3 gap-3">
                                {images.map((image: string, idx: number) => (
                                    <motion.button
                                        key={idx}
                                        onClick={() => setFeaturedImageIndex(idx)}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                                            featuredImageIndex === idx
                                                ? 'ring-2 ring-primary ring-offset-2 ring-offset-dark scale-105'
                                                : 'hover:scale-105 hover:shadow-xl'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.title} - Thumbnail ${idx + 1}`}
                                            className="w-full h-24 object-cover"
                                            loading="eager"
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}

            {/* Content */}
            <div className={images && images.length > 0 ? (isEven ? 'order-2' : 'order-1') : 'w-full text-center'}>
                {/* Achievement Badge */}
                {project.achievement && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2">
                            <Trophy className="text-yellow-400" size={18} />
                            <span className="text-yellow-400 font-semibold text-sm">{project.achievement}</span>
                        </div>
                    </motion.div>
                )}

                {/* Event Badge */}
                {project.event && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                            <Award className="text-primary" size={18} />
                            <span className="text-primary font-semibold text-sm">{project.event}</span>
                        </div>
                    </motion.div>
                )}

                {/* Role Badge */}
                {project.role && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-4 py-2">
                            <Users className="text-blue-400" size={18} />
                            <span className="text-blue-400 font-semibold text-sm">{project.role}</span>
                        </div>
                    </motion.div>
                )}

                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                    {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 text-lg mb-6 leading-relaxed"
                >
                    {project.description}
                </motion.p>

                {/* Contribution */}
                {project.contribution && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                        className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                        <p className="text-slate-400 text-sm">
                            <span className="text-white font-semibold">Contribution:</span> {project.contribution}
                        </p>
                    </motion.div>
                )}

                {/* Features */}
                {project.features && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mb-6"
                    >
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Zap className="text-primary" size={18} />
                            Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Highlights */}
                {project.highlights && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45 }}
                        className="mb-6"
                    >
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="text-green-400" size={18} />
                            Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.highlights.map((highlight: string, idx: number) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-green-400/10 text-green-400 rounded-lg text-sm font-medium border border-green-400/20"
                                >
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Performance */}
                {project.performance && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mb-6 p-4 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-xl border border-green-400/20"
                    >
                        <div className="flex items-center gap-2">
                            <TrendingUp className="text-green-400" size={20} />
                            <span className="text-green-400 font-bold text-lg">{project.performance}</span>
                        </div>
                    </motion.div>
                )}

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                    className="mb-8"
                >
                    <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech: string, idx: number) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 bg-white/5 text-slate-300 rounded-lg text-sm font-medium border border-white/10 hover:border-primary/50 hover:text-primary transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                >
                    {project.links.code && project.links.code !== '#' && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-primary/50 transition-all group"
                        >
                            <Github size={18} />
                            <span>View Code</span>
                        </a>
                    )}
                    {project.links.demo && project.links.demo !== '#' && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
                        >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                        </a>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
