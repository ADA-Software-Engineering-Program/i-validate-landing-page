import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Login/Login';
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Signup from './signup/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Reset from './reset/Reset';
import Analytic from '../src/Analytic/Analytic';

function App() {
  return (
    <>
      {/* <ToastContainer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard/>}/>  
        <Route path="/Analytic" element={<Analytic />} />
        <Route path="/Reset" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
