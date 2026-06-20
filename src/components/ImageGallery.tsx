import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageGalleryProps {
    images: string[];
    projectName: string;
}

const ImageGallery = ({ images, projectName }: ImageGalleryProps) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    return (
        <>
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div
                                    className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-slate-500 text-sm">Project Image {index + 1}</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                            className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                                        >
                                            <ZoomIn className="text-white" size={20} />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={scrollPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all z-10"
                        >
                            <ChevronLeft className="text-white" size={20} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all z-10"
                        >
                            <ChevronRight className="text-white" size={20} />
                        </button>
                    </>
                )}
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={images.map((img) => ({ src: img }))}
                carousel={{ finite: false }}
            />
        </>
    );
};

export default ImageGallery;
