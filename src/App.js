import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // import Routes only
import Header from './components/header/Header';
import Home from '../src/pages/Home';
import Signup from './signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Feedback from './Dashboard-aside/Feedback';
import Response from './Dashboard-aside/Response';
import './App.css';
import Login from './Login/Login';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Analytic from './Analytic/Analytic';



function App() {
  const location = useLocation(); // use useLocation hook here
  const showHeader = location.pathname === '/' || location.pathname === '/aboutUs' || location.pathname === '/contactUs' || location.pathname === '/analytic';

  return (
    <>
        <div>
          {showHeader && <Header  /> }
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/analytic" element={<Analytic />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/response" element={<Response />} />
            <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      
    </>
  );
}

export default App;

