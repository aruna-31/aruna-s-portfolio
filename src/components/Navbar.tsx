import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Aruna Lavanuru
                </div>

                <ul className="hidden md:flex space-x-8">
                    {['About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-slate-300 hover:text-white transition-colors hover:text-glow"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu placehoder - can be expanded if needed */}
                <div className="md:hidden">
                    {/* Simple mobile menu trigger could go here */}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
