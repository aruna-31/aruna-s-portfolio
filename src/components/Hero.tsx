import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';
import { ArrowRight, Github, Linkedin, Mail, Code2, Trophy, Award, FolderOpen, TrendingUp } from 'lucide-react';

const Hero = () => {
    const { personal, achievements } = portfolioData;

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const featuredTech = [
        "Python", "Machine Learning", "FastAPI", "React", 
        "PostgreSQL", "Supabase", "LLMs", "Data Science"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                        >
                            <span className="text-secondary text-sm font-semibold tracking-wider">AI/ML ENGINEER | FULL STACK DEVELOPER</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-4"
                        >
                            Hi, I'm Aruna 👋
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-300 mb-6"
                        >
                            AI/ML Engineer | Full Stack Development | Hackathon Winner
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg text-slate-400 mb-8 max-w-xl"
                        >
                            Building AI-powered products using Machine Learning, FastAPI, React, LLMs, and Data Science.
                        </motion.p>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3 mb-8"
                        >
                            <div className="flex items-center gap-2 text-slate-300">
                                <Trophy className="text-yellow-400" size={20} />
                                <span className="font-semibold">Best AI Solution Award Winner</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <Award className="text-yellow-400" size={20} />
                                <span>Software Freedom Festival 3.0 – 3rd Prize</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <Award className="text-yellow-400" size={20} />
                                <span>Academic Rank Holder (CGPA 9.34)</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                        >
                            <button
                                onClick={scrollToProjects}
                                className="group relative px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2">
                                    View Projects <ArrowRight size={18} />
                                </span>
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href={personal.social.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
                                <Code2 size={20} />
                            </a>
                            <a href={`mailto:${personal.email}`} className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content - Stats & Tech */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass-card rounded-2xl p-6 text-center"
                            >
                                <FolderOpen className="text-primary mx-auto mb-3" size={32} />
                                <div className="text-3xl font-bold text-white mb-1">{achievements.stats.projects}</div>
                                <div className="text-sm text-slate-400">Projects Built</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass-card rounded-2xl p-6 text-center"
                            >
                                <Trophy className="text-yellow-400 mx-auto mb-3" size={32} />
                                <div className="text-3xl font-bold text-white mb-1">{achievements.stats.awards}</div>
                                <div className="text-sm text-slate-400">Awards Won</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass-card rounded-2xl p-6 text-center"
                            >
                                <TrendingUp className="text-green-400 mx-auto mb-3" size={32} />
                                <div className="text-3xl font-bold text-white mb-1">{achievements.stats.hackathons}</div>
                                <div className="text-sm text-slate-400">Hackathons</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass-card rounded-2xl p-6 text-center"
                            >
                                <Award className="text-blue-400 mx-auto mb-3" size={32} />
                                <div className="text-3xl font-bold text-white mb-1">{achievements.stats.cgpa}</div>
                                <div className="text-sm text-slate-400">CGPA</div>
                            </motion.div>
                        </div>

                        {/* Featured Technologies */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Featured Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {featuredTech.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + idx * 0.05 }}
                                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
