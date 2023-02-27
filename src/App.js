
import React from "react";
import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "../src/components/footer/Footer";

import Hero from "./pages/Hero";

function App() {
  
  return (

    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
    </Routes >
    <Footer/>
    </>
    

    
  );
}

export default App;








// // import Header from './components/header/Header';
// // import Footer from './components/footer/Footer';import React from 'react';
// import React, { Suspense, useState } from "react";
// import './App.css';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import AppRoutes from './Router';
// // import Navbar from './components/header/landing-header/Navlists';
// import Navbar from "./components/header/landing-header/Navbar";
// // import Navbar from './components/footer/landing-header/Navbar';
// // import Subsection from './components/subsection/Subsection';
// // import ResearchCard from './components/ResearchCard';
// // import Plan from './components/Plan';

// // import Hero from './pages/Hero';

// function App() {

//   const [isOpen, setIsOpen] = useState(false);
//   // const { pathname } = useLocation();

//   const handleOpen = () => setIsOpen(!isOpen);
  
//   return (
//     <Router>
//       <Navbar {...{ isOpen, handleOpen }} />
//       <Suspense fallback={<div>Loading</div>}>
//         <Routes>{AppRoutes({Route})}</Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;
