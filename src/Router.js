import React, { lazy } from "react";

const Expert = lazy(() => import("./pages/Expert"));
const Analytics= lazy(() => import("./pages/Analytics"));
const Blog= lazy(() => import("./pages/Blog"));
const Signup= lazy(() => import("./pages/Signup"));
const Login= lazy(() => import("./pages/Login"));




const AppRoutes = [
    {
      path: "/",
      element: <Expert />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
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