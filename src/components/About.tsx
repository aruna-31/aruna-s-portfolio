import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';

const About = () => {
    const { personal } = portfolioData;

    return (
        <section id="about" className="py-20 bg-dark-lighter/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
                        <div className="glass-card p-8 rounded-2xl md:p-12 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    {personal.bio}
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    As an AI Engineer in the making, I enjoy experimenting with new technologies and finding efficient ways to solve complex problems. My goal is to build intelligent applications that can make a positive impact on the world.
                                </p>

                                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-12 justify-center md:justify-start">
                                    <div>
                                        <h3 className="text-4xl font-bold text-primary mb-1">2+</h3>
                                        <p className="text-slate-400 text-sm">Years Coding</p>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold text-secondary mb-1">5+</h3>
                                        <p className="text-slate-400 text-sm">Projects Built</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
