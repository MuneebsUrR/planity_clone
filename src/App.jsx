import React from 'react';
import bgImage from './assets/images/home-bg.jpg'; // Adjust the path as needed
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
const App = () => {
  return (
    <>
      <div className='image'>
        <Header />
        <Hero />

      </div>

    </>
  );
};

export default App;
