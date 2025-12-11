import React { useState } from 'react';
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../content/portfolioData';
import { Mail, Send, CheckCircle2, ChevronRight } from 'lucide-react';

const Contact = () => {
    const { personal } = portfolioData;
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate network request
        setTimeout(() => {
            setFormState('success');
            // Reset after 3 seconds
            setTimeout(() => setFormState('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-dark-lighter/30">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-md">
                            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
                        </p>

                        <a
                            href={`mailto:${personal.email}`}
                            className="inline-flex items-center gap-4 text-xl font-medium text-white hover:text-primary transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            {personal.email}
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                                    >
                                        {formState === 'submitting' ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                Send Message <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
