import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from '../src/components/footer/Footer';
import Login from '../src/Login/Login';

import Home from './pages/Home';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes >
    <Footer/>
    </>
  );
}

export default App;


