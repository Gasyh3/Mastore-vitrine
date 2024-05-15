import React, { useEffect } from 'react';
import { IconChevronUp } from '@tabler/icons-react';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <motion.button
            className="fixed bottom-4 right-4 p-2 bg-sky-900 text-white rounded-lg shadow-lg z-50"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}
        >
            <IconChevronUp />
        </motion.button>
    );
}

export default ScrollToTopButton;