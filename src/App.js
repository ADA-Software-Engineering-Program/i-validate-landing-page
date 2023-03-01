import React from 'react';
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Login/Login';

import Signup from './signup/Signup';
import Home from './pages/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Analytic from '../src/Analytic/Analytic';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Analytic" element={<Analytic />} />
      </Routes>
    </>
  );
}

export default App;
