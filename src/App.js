import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Contact from './newContactPage/Contact';

function App() {
  
  return (
     <Router>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
   </Router>
  );
}

export default App;
