import { motion } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';
import { Award, GraduationCap, TrendingUp, BookOpen } from 'lucide-react';
import ImageGallery from './ImageGallery';

const AcademicAchievements = () => {
    const { academicAchievement } = portfolioData;

    // Use actual images from data or fallback to placeholder
    const images = academicAchievement.images || ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'];

    return (
        <section className="py-24 bg-dark">
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
                        className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6"
                    >
                        <Award className="text-yellow-400" size={18} />
                        <span className="text-yellow-400 font-semibold text-sm">Academic Excellence</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Achievements</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Recognized among top-performing students for academic excellence and consistent performance.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Certificate Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card rounded-2xl p-4"
                                >
                                    <ImageGallery images={images} projectName="Academic Certificate" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                                >
                                    🥉 3rd Rank
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Stats & Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Achievement Badge */}
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-3">
                                <Award className="text-yellow-400" size={24} />
                                <span className="text-yellow-400 font-semibold text-lg">{academicAchievement.achievement}</span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">
                                {academicAchievement.title}
                            </h3>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                {academicAchievement.description}
                            </p>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card rounded-xl p-6 text-center"
                                >
                                    <GraduationCap className="text-primary mx-auto mb-3" size={32} />
                                    <div className="text-4xl font-bold text-white mb-2">{academicAchievement.cgpa}</div>
                                    <div className="text-sm text-slate-400">CGPA</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card rounded-xl p-6 text-center"
                                >
                                    <TrendingUp className="text-green-400 mx-auto mb-3" size={32} />
                                    <div className="text-4xl font-bold text-white mb-2">Top 3</div>
                                    <div className="text-sm text-slate-400">Class Rank</div>
                                </motion.div>
                            </div>

                            {/* Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
                            >
                                <div className="flex items-start gap-4">
                                    <BookOpen className="text-primary flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Academic Performance</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            Consistent academic excellence with strong foundation in Computer Science, 
                                            Mathematics, and Engineering principles. Active participation in 
                                            technical events and hackathons while maintaining top-tier academic performance.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicAchievements;
