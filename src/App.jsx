import React from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousal';

import Press from './components/Press';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App = () => {


  return (
    <>
      <div className='image'>
        <Header />
        <Hero />
      </div>
      <Carousel/>
      <Press/>
      <Stats/>
      <Locations/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default App;
