import React, { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));




const AppRoutes = [
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    
    {
      path: "*",
      element: <div>Not found</div>,
    },
];
  
export default AppRoutes;