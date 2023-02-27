import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About/About';
import Contact from './newContactPage/Contact';
import Service from './Service/Service';
import Navbar from './About/Navbar';

function App() {
  return (

    <>
      <div className="bg-circle bg-top"></div>
      <div className="bg-circle bg-down"></div>
      <Navbar  />
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/service" element={<Service />} />
      </Routes >
    </>
    // <Router>
    //   <Navbar/>
    //   <div className="bg-circle bg-top"></div>
    //   <div className="bg-circle bg-down"></div>
    //   <Routes>
    //     <Route exact path="/about" element={<About/>}/>
    //     <Route exact path="/contact" element={<Contact />} />
    //     <Route exact path="/service" element={<Service />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
