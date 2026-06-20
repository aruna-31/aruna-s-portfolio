import { Github, Linkedin, Mail, Terminal, Code2, Database, Brain, Rocket, BookOpen, Award, Trophy } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Lavanuru Aruna",
        role: "AI/ML Engineer | Full Stack Developer",
        tagline: "Award-Winning AI/ML Engineer, Team Leader, and Software Developer building impactful products.",
        bio: "I'm Aruna, who enjoys turning ambitious ideas into real-world products. My journey started with curiosity about how intelligent systems work and evolved into building award-winning AI applications, leading software teams, and solving practical problems through technology. Solutions that combine innovation with real impact. Beyond projects, I actively strengthen my problem-solving skills through Data Structures & Algorithms, machine learning, and software engineering. I believe great technology is not just about writing code—it's about understanding problems, leading teams, learning continuously, and building solutions that people genuinely find useful. Currently, I'm focused on Artificial Intelligence, Machine Learning, Full Stack Development, and Generative AI while preparing for impactful internships, research opportunities, and future engineering roles.",
        email: "arunalavanuru1@gmail.com",
        social: {
            github: "https://github.com/aruna-31",
            linkedin: "https://www.linkedin.com/in/lavanuru-aruna-700243335/",
            leetcode: "https://leetcode.com/u/_Aruna_313/"
        },
    },
    achievements: {
        awards: [
            "🏆 Best AI Solution Award",
            "🏆 Software Freedom Festival 3.0 – 3rd Prize",
            "🥉 Academic Rank Holder (CGPA 9.34)"
        ],
        stats: {
            projects: 5,
            awards: 3,
            hackathons: 4,
            cgpa: 9.34
        }
    },
    skills: [
        {
            category: "Programming",
            items: ["Python"],
            icon: Code2
        },
        {
            category: "AI & ML",
            items: ["Machine Learning", "LLMs", "Ollama", "NumPy", "Pandas", "Scikit-Learn"],
            icon: Brain
        },
        {
            category: "Full Stack",
            items: ["React", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS"],
            icon: Database
        },
        {
            category: "Tools & Platforms",
            items: ["VS Code", "Git & GitHub", "Leetcode", "Google Colab", "Kaggle"],
            icon: Terminal
        }
    ],
    projects: [
        {
            id: 1,
            title: "Smart Sense AI",
            achievement: "🏆 3rd Prize Winner – Software Freedom Festival 3.0",
            description: "Smart Sense AI is a full-stack AI-powered productivity platform built using React, FastAPI, and Ollama Local LLMs.",
            features: [
                "Smart Excuse Generator",
                "Apology Generator",
                "AI Email & Letter Writer",
                "Learning Hub",
                "Medical Generator",
                "Voice Translator",
                "Local AI Chatbot"
            ],
            highlights: [
                "Fully local AI inference",
                "No cloud dependency",
                "Zero API cost",
                "Privacy-focused architecture"
            ],
            techStack: ["React", "FastAPI", "Python", "Ollama", "Tailwind CSS"],
            imageCount: 3,
            images: [
                "/projects/smartsenseAI/image.png",
                "/projects/smartsenseAI/sff.png",
                "/projects/smartsenseAI/sff2.jpg"
            ],
            links: {
                code: "https://github.com/aruna-31/smart-sense-ai"
            }
        },
        {
            id: 2,
            title: "ResumeX",
            achievement: "🏆 Best AI Solution Award",
            event: "Innoventia 2K26 National Level Project Expo",
            description: "ResumeX is an AI-powered resume analysis and recruitment platform designed for candidates and HR professionals.",
            features: [
                "Resume Parsing",
                "ATS Score Analysis",
                "Skill Gap Detection",
                "Candidate Ranking",
                "HR Dashboard",
                "AI Resume Insights"
            ],
            highlights: [
                "Flagship Project",
                "National Level Recognition",
                "AI-Powered Analysis",
                "HR-Focused Solution"
            ],
            techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Supabase"],
            imageCount: 3,
            images: [
                "/projects/resumeX/chennai.jpg",
                "/projects/resumeX/1771946957086.jpg",
                "/projects/resumeX/1771946956973.jpg"
            ],
            links: {
                code: "https://github.com/aruna-31/resumex"
            }
        },
        {
            id: 3,
            title: "Smart Water Distribution System",
            role: "Team Leader, Software Developer",
            contribution: "Led the team and implemented the software components of the project.",
            description: "An intelligent water distribution and monitoring system focused on efficient water management and resource optimization.",
            highlights: [
                "Top 4% out of 541 teams",
                "Team Leadership",
                "Software Architecture",
                "System Monitoring",
                "Resource Optimization"
            ],
            techStack: ["Python", "IoT", "Embedded Systems"],
            imageCount: 2,
            images: [
                "/projects/water-distribution-system/samved2.jpg",
                "/projects/water-distribution-system/leakd.jpg"
            ],
            links: {
                code: "https://github.com/aruna-31/smart_water_monitoring"
            }
        },
        {
            id: 4,
            title: "Student Placement Prediction System",
            description: "A machine learning project that predicts student placement opportunities based on academic and skill-related parameters.",
            highlights: [
                "Predictive Analytics",
                "Machine Learning Models",
                "Data Visualization",
                "Placement Insights"
            ],
            performance: "79% Prediction Accuracy",
            techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit", "Random Forest Regressor"],
            links: {
                code: "https://github.com/aruna-31/placement_predictor"
            }
        },
        {
            id: 5,
            title: "AI Driven StoryTeller",
            achievement: "🏆 5th Prize Winner – Disfrutar 2K25",
            description: "AI Driven StoryTeller is a Generative AI-powered platform that enables users to create immersive stories, design game concepts, and explore educational topics through intelligent AI interactions powered by Google Gemini AI.",
            features: [
                "AI Story Generation",
                "Custom Character Creation",
                "Interactive Story Paths",
                "Game Concept Generator",
                "Educational AI Companion",
                "Personal Dashboard",
                "Text-to-Speech Integration"
            ],
            highlights: [
                "Powered by Google Gemini AI",
                "Creative storytelling workflows",
                "Game design assistance",
                "Educational learning support",
                "Secure Firebase authentication",
                "Modern glassmorphism UI"
            ],
            techStack: [
                "JavaScript",
                "HTML5",
                "Tailwind CSS",
                "Firebase",
                "Firestore",
                "Google Gemini AI",
                "Vite"
            ],
            images: [
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            ],
            links: {
                demo: "https://fluffy-cuchufli-829b98.netlify.app/",
                code: "https://github.com/aruna-31/story_generator"
            }
        }
    ],
    academicAchievement: {
        title: "Academic Excellence",
        achievement: "🥉 3rd Rank in Academics",
        cgpa: 9.34,
        description: "Recognized among top-performing students for academic excellence and consistent performance.",
        imageCount: 1,
        images: [
            "/projects/academics/WhatsApp Image 2026-06-20 at 4.33.38 PM.jpeg"
        ]
    },
    timeline: [
        {
            year: "2024",
            title: "Started Journey",
            description: "Enrolled in B.Tech and began exploring the world of computer science and programming basics.",
            icon: BookOpen
        },
        {
            year: "2025-2026",
            title: "AI Exploration",
            description: "Gained knowledge in Data Structures and Algorithms. Built Smart Sense AI and ResumeX,winnings  at hackathons.",
            icon: Rocket
        },
        {
            year: "2026",
            title: "Advanced Research",
            description: "Specializing in Machine Learning and contributing to open-source AI models. Leading teams and building impactful products.",
            icon: Brain
        }
    ]
};
