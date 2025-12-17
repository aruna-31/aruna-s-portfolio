import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Hero = () => {
    const { personal } = portfolioData;

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                >
                    <span className="text-secondary text-sm font-semibold tracking-wider"> AI ENGINEER</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{personal.name.split(' ')[1]}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto"
                >
                    {personal.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-4 justify-center mb-12"
                >
                    <button
                        onClick={scrollToProjects}
                        className="group relative px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            View Projects <ArrowRight size={18} />
                        </span>
                    </button>

                    <a
                        href={personal.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/10 rounded-full font-semibold text-slate-300 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2 justify-center hover:border-white/20"
                    >
                        <Download size={18} /> Download Resume
                    </a>
                </motion.div>

                {/* Social Links in Hero for better visibility */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-6"
                >
                    <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                        <Github size={24} />
                    </a>
                    <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                        <Linkedin size={24} />
                    </a>
                    <a href={personal.social.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                        <Code2 size={24} />
                    </a>
                    <a href={`mailto:${personal.email}`} className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                        <Mail size={24} />
                    </a>
                </motion.div>
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
