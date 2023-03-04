import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Login/Login';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard/>}/>  
        <Route path="/analytic" element={<Analytic />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path='/addContact' element={<AddContact />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/Response' element={<Response />} />

      </Routes>
    </>
  );
}

export default App;
