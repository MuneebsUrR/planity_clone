import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Collapse, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const slides = [
  { src: "https://picsum.photos/600/400?1", heading: 'Découvrez nos Professionnels', title: "Barbier", description: 'Explore our amazing features and offers!', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
  { src: "https://picsum.photos/600/400?2", heading: 'Découvrez nos Professionnels', title: "Manucure", description: 'Stay updated with the latest trends in the industry.', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
  { src: "https://picsum.photos/600/400?3", heading: 'Découvrez nos Professionnels', title: "Manucure", description: 'Stay updated with the latest trends in the industry.', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
];

function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className='relative flex items-center justify-center overflow-hidden p-4 mt-20'>
        <div className='relative flex-shrink-0 lg:right-20'>
          <motion.img
            key={slides[nextIndex].src}
            src={slides[nextIndex].src}
            alt="Next"
            className="w-full h-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[450px] rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className='relative flex-shrink-0 mx-4'>
          <div className='flex'>
            <motion.div
              key={slides[currentIndex].src}
              className='flex'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={slides[currentIndex].src}
                alt="Current"
                className="w-full h-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[450px] rounded-lg"
              />
              <div className='ml-4 flex-col items-center container max-w-md hidden md:block mt-5 p-4'>
                <p className='text-4xl font-semibold mb-2'>{slides[currentIndex].heading}</p>
                <p className='text-xl lg:text-2xl font-bold mt-5'>{slides[currentIndex].title}</p>
                <p className='mb-5 text-gray-500 mt-2'>{slides[currentIndex].description}</p>
                <Collapse in={expanded}>
                  <p className="text-gray-500 mt-2 explainer-text">{slides[currentIndex].explainer}</p>
                </Collapse>
                <Button
                  onClick={() => setExpanded(!expanded)}
                  endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  className="underline cursor-pointer font-semibold mt-2 text-sm"
                >
                  {expanded ? 'Voir Moins' : 'Voir Plus'}
                </Button>
                <div className='flex flex-row mt-10'>
                  <button
                    onClick={previousImage}
                    className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center cursor-pointer text-md mr-2"
                  >
                    <ArrowBackIosIcon fontSize='small' />
                  </button>

                  <button
                    onClick={nextImage}
                    className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center cursor-pointer text-md"
                  >
                    <ArrowForwardIosIcon fontSize='small' />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
        <div className='relative flex-shrink-0 lg:left-20'>
          <motion.img
            key={slides[previousIndex].src}
            src={slides[previousIndex].src}
            alt="Previous"
            className="w-full h-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[450px] rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <div className='flex-col items-center justify-center h-full text-center block md:hidden'>

        <p className='text-3xl font-semibold mb-2'>{slides[currentIndex].heading}</p>
        <p className='text-xl lg:text-2xl font-bold mt-5'>{slides[currentIndex].title}</p>
        <p className='mb-5 text-gray-500 mt-2'>{slides[currentIndex].description}</p>
        <Collapse in={expanded}>
          <p className="text-gray-500 mt-2 explainer-text">{slides[currentIndex].explainer}</p>
        </Collapse>
        <Button
          onClick={() => setExpanded(!expanded)}
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          className="underline cursor-pointer font-semibold mt-2 text-sm"
        >
          {expanded ? 'Voir Moins' : 'Voir Plus'}
        </Button>
        <div className='flex flex-row items-center justify-center mt-10'>
          <button
            onClick={previousImage}
            className="w-8 h-8 rounded-full bg-white border-2 border-black cursor-pointer text-md mr-2"
          >
            <ArrowBackIosIcon fontSize='small' />
          </button>

          <button
            onClick={nextImage}
            className="w-8 h-8 rounded-full bg-white border-2 border-black  cursor-pointer text-md"
          >
            <ArrowForwardIosIcon fontSize='small' />
          </button>
        </div>

      </div>
    </>
  );
}

export default Carousal;
