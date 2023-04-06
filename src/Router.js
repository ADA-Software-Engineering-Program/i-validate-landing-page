import React, { lazy } from "react";

const Home = lazy(()=>import("./pages/Home"));
const AboutUs = lazy(()=>import("./AboutUs/AboutUs"));
const Analytic = lazy(()=>import("./Analytic/Analytic"));
const ContactUs = lazy(()=>import("./ContactUs/ContactUs"));
const AddContact = lazy(()=>import("./Dashboard-aside/AddContact"));
// const Feedback = lazy(()=>import("./Dashboard-aside/Feedback.js"));
const Login = lazy(()=>import("./Login/Login"));
const Reset = lazy(()=>import("./reset/Reset"));




const AppRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/aboutUs",
        element: <AboutUs/>
    },
    {
        path: "/contactUs",
        element: <ContactUs/>
    },
    {
        path: "/analytic",
        element: <Analytic/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    // {
    //     path: "/feedback",
    //     element: <Feedback/>
    // },
    {
        path: "/reset",
        element: <Reset/>
    },
    {
        path: "/addContanct",
        element: <AddContact/>
    },
    {
        path: "*",
        element: <div>Not Found</div>
    }
]
export default AppRoutes