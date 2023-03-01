import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Aboutus= lazy(() => import("./pages/Aboutus"));
const Contact= lazy(() => import("./pages/Contact"));
const Analytics= lazy(() => import("./pages/Analytics"));
const Login= lazy(() => import("./pages/Login"));
const Dashboard= lazy(() => import("./pages/Dashboard/Dashboard"));




const AppRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <Aboutus />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    
    {
      path: "*",
      element: <div>Not found</div>,
    },
];
  
export default AppRoutes;