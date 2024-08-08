import React from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousal';
import bg from './assets/images/home-bg.jpg';
import Press from './components/Press';
import Stats from './components/Stats';
import FAQ from './components/FAQ';

const App = () => {
  const slides = [
    { src: bg, heading: 'Découvrez nos Professionnels', title: "Barbier", description: 'Explore our amazing features and offers!', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
    { src: 'https://picsum.photos/200/300', heading: 'Découvrez nos Professionnels', title: "Manucure", description: 'Stay updated with the latest trends in the industry.', explainer: "Le service de prise de rendez-vous en ligne développé par Planity vous permet de choisir l’établissement qui sera le plus à même de satisfaire votre exigence de détente. Massage, gommage, soins précis, épilation, nos prestataires mettent tout en œuvre pour faire de ce moment la pause que vous méritez. Prenez rendez-vous sur notre plateforme en ligne auprès de l’établissement qui saura tenir toutes ses promesses et profitez d’une pause détente inoubliable !" },
  ];

  return (
    <>
      <div className='image'>
        <Header />
        <Hero />
      </div>
      <Carousel slides={slides} />
      <Press/>
      <Stats/>
      <FAQ/>
    </>
  );
};

export default App;
