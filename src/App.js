import React, { Suspense, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // import Routes only
import AppRoutes from './Router';
import Header from './components/header/Header';
import Signup from './signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Feedback from './Dashboard-aside/Feedback';
import Response from './Dashboard-aside/Response';
import './App.css';
import Login from './Login/Login';

const LOGIN = '/login';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // use useLocation hook here
  const { pathname } = location;
  const isAppRoute = AppRoutes.some((route) => route.path === pathname);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Routes>
        <Route path="/Signup" element={<Signup />} exact />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/response" element={<Response />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {pathname !== LOGIN && isAppRoute && (
        <Header {...{ isOpen, handleOpen }} />
      )}

      {pathname !== LOGIN && isAppRoute && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {AppRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;

