import { motion } from 'framer-motion';

interface LoaderProps {
    onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark text-white">
            <div className="w-full max-w-md p-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                    Aruna's AI Portfolio
                </motion.h1>

                <div className="relative h-2 bg-dark-lighter rounded-full overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        onAnimationComplete={onComplete}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-2 text-sm text-slate-400 font-mono"
                >
                    Initializing neural networks...
                </motion.p>
            </div>
        </div>
    );
};

export default Loader;
