import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapse, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Carousal = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [expanded, setExpanded] = useState(false); // Added state for Collapse

    const nextImage = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevImage = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Auto transition to the next image every 6 seconds
        const autoNext = setInterval(nextImage, 6000);

        return () => clearInterval(autoNext);
    }, []);

    const { src, heading, title, description, explainer } = slides[currentIndex];

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-4 md:m-24">
            <div className="flex-1 relative w-full lg:w-80 h-[300px] lg:h-[450px] overflow-hidden rounded-lg mx-auto lg:mx-0">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={src}
                        alt="carousel"
                        className="w-full h-full object-cover"
                        initial={{ x: direction === 'next' ? '100%' : '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 'next' ? '-100%' : '100%', opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>
            <div className="flex-1 lg:pl-24 mt-5 lg:mt-10 text-center lg:text-left md:ml-16">
                <h2 className="text-3xl lg:text-5xl font-semibold mb-2">{heading}</h2>
                <p className="text-xl lg:text-2xl font-bold mt-5">{title}</p>
                <p className="mb-5 text-gray-500 mt-2">{description}</p>
                <Collapse in={expanded}>
                    <p className="mb-5 text-gray-500 mt-2">{explainer}</p>
                </Collapse>
                <Button
                    onClick={() => setExpanded(!expanded)}
                    endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    className="underline cursor-pointer font-semibold mt-2"
                >
                    {expanded ? 'Voir Moins' : 'Voir Plus'}
                </Button>
                <div className="flex justify-center lg:justify-start mt-5">
                    <button
                        onClick={prevImage}
                        className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 mr-2 flex items-center justify-center cursor-pointer text-xl"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextImage}
                        className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center cursor-pointer text-xl"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousal;
