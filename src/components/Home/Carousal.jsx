import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapse, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const slides = [
    { src: 'https://picsum.photos/200/300', heading: 'Découvrez nos Professionnels', title: "Barbier", description: 'Explore our amazing features and offers!', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
    { src: 'https://picsum.photos/id/230/200/300', heading: 'Découvrez nos Professionnels', title: "Manucure", description: 'Stay updated with the latest trends in the industry.', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
    { src: 'https://picsum.photos/id/230/200/300', heading: 'Découvrez nos Professionnels', title: "Manucure", description: 'Stay updated with the latest trends in the industry.', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
];

const Carousal = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [expanded, setExpanded] = useState(false);

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
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/path-to-your-placeholder-image.jpg';
                        }} // Handle broken image
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
                        className="w-10 h-10 rounded-full bg-white border-2 border-black mr-2 flex items-center justify-center cursor-pointer text-md"
                    >
                        <ArrowBackIosIcon fontSize='small' />
                    </button>
                    <button
                        onClick={nextImage}
                        className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center cursor-pointer text-md"
                    >
                        <ArrowForwardIosIcon fontSize='small' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousal;
