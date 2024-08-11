import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Results from './pages/Results';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/category/:type' element={<Category />} />
        <Route path='/category/:type/:location' element={<Results />} />
        <Route path='/shop/:shopname' element={<Shop />} />

      </Routes>

    </>
  );
};

export default App;
