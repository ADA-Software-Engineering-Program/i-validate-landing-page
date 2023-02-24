import React from 'react';
import './App.css';
import ResearchCard from './components/ResearchCard';
import Plan from './components/Plan';

import Hero from './pages/Hero';

function App() {
  
  return (
    <div className="App">
      <Hero />
      <ResearchCard />
      <Plan/>
    </div>
  );
}

export default App;
