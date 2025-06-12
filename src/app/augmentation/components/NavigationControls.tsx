import { motion } from "framer-motion";

interface NavigationControlsProps {
    currentSlide: number;
    scrollToSlide: (slideNumber: number) => void;
    totalSlides: number;
}

export default function NavigationControls({ currentSlide, scrollToSlide, totalSlides }: NavigationControlsProps) {
    return (
        <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
            {[...Array(totalSlides)].map((_, index) => {
                const slideNum = index + 1;
                return (
                    <motion.button
                        key={slideNum}
                        onClick={() => scrollToSlide(slideNum)}
                        className={`w-4 h-4 rounded-full ${currentSlide === slideNum ? 'bg-blue-600' : 'bg-gray-400'}`}
                        aria-label={`Go to slide ${slideNum}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    />
                );
            })}
        </div>
    );
}
