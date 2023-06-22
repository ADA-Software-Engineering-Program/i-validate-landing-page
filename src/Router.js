import React, { lazy } from "react";

const Home = lazy(()=>import("../../i-validate-landing-page/src/pages/Home.js"));
const AboutUs = lazy(()=>import("../../i-validate-landing-page/src/AboutUs/AboutUs.js"));
const Analytic = lazy(()=>import("../../i-validate-landing-page/src/Analytic/Analytic.js"));
const ContactUs = lazy(()=>import("../../i-validate-landing-page/src/ContactUs/ContactUs.js"));
const AddContact = lazy(()=>import("../../i-validate-landing-page/src/Dashboard-aside/AddContact.js"));
const Login = lazy(()=>import("../../i-validate-landing-page/src/Login/Login.js"));
const Reset = lazy(()=>import("../../i-validate-landing-page/src/reset/Reset.js"));




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
    {
        path: "/reset",
        element: <Reset/>
    },
    {
        path: "/addContact",
        element: <AddContact/>
    },
    {
        path: "*",
        element: <div>Not Found</div>
    }
]
export default AppRoutes;