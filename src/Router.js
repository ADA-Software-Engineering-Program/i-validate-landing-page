import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Aboutus= lazy(() => import("./pages/Aboutus"));
const Blog= lazy(() => import("./pages/Blog"));
const Signup= lazy(() => import("./pages/Signup"));
const Login= lazy(() => import("./pages/Login"));




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
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    
    {
      path: "*",
      element: <div>Not found</div>,
    },
];
  
export default AppRoutes;