import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Login/Login';

import Signup from './signup/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Reset from './reset/Reset';
import Analytic from '../src/Analytic/Analytic';
import AddContact from './Dashboard-aside/AddContact';
import Feedback from './Dashboard-aside/Feedback';
import Response from './Dashboard-aside/Response';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard/>}/>  
        <Route path="/Analytic" element={<Analytic />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path='/AddContact' element={<AddContact />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/Response' element={<Response />} />

      </Routes>
    </>
  );
}

export default App;
