import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';

const Timeline = () => {
    const { timeline } = portfolioData;

    return (
        <section id="timeline" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        How I started and where I'm going.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 h-full w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-4 h-full w-px bg-white/10 md:hidden" />

                    {timeline.map((item, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center justify-between md:justify-normal mb-12 ${isEven ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-primary font-bold text-lg">{item.year}</span>
                                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Center dot */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-[calc(50%+1px)] w-10 h-10 rounded-full bg-dark border-4 border-dark-lighter flex items-center justify-center z-10 shadow-lg shadow-black/50">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
