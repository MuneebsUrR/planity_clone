import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Results from './pages/Results';
import Shop from './pages/Shop';

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:type' element={<Category />} />
        <Route path='/category/:type/:location' element={<Results />} />
        <Route path='/shop/:shopname' element={<Shop />} />
      </Routes>

    </>
  );
};

export default App;
