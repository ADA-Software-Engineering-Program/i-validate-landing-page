import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './newContactPage/Contact';
import Service from './Service/Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
