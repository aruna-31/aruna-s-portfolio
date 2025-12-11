import { portfolioData } from '../content/portfolioData';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
    const { personal } = portfolioData;

    return (
        <footer className="py-8 border-t border-white/5 bg-dark">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} {personal.name}. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={personal.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={personal.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={personal.social.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
                    >
                        <Code2 size={20} />
                    </a>
                    <a
                        href={`mailto:${personal.email}`}
                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
