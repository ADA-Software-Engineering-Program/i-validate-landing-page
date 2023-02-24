import Header from './components/header/Header';
import Footer from './components/footer/Footer';import React from 'react';
import './App.css';
import Subsection from './components/subsection/Subsection';
import ResearchCard from './components/ResearchCard';
import Plan from './components/Plan';

import Hero from './pages/Hero';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <ResearchCard />
      <Plan/>
      <Subsection />
      <Footer />
    </div>
  );
}

export default App;
