import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {skills.map((skillGroup, index) => {
                        const Icon = skillGroup.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="glass-card p-6 rounded-xl border-t border-white/5 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-slate-100">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-white/5 rounded-full text-slate-300 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
