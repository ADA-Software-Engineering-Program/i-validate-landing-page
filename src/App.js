import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Login/Login';


import Signup from "./signup/Signup";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes >
    </>
  );
}

export default App;


