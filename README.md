# i-validate app

<img src="../i-validate-landing-page/src/images/i-validate-logo-optimiz.jpg" height="300" width="400" style="margin:auto;"/>

## Overview
This is the second cross-track collaborative Ada Project task and it aims to train and build the students to be both technically and people oriented.

## Project Overview

The Idea Validation app is designed to help entrepreneurs and innovators validate their ideas and determine whether they have potential for success. The app offers various validation tests that provide insights and feedback based on the results.

## The Building Process
In building the web app, I and my teammate used several tools for building. The building process was filled with so many pressures but we were able to finish up the task to some extent. Although we were always rushing to meet up the deadline, we still tried to make the app to look close to the design we received from the product designer, and also made sure the app was responsive.

To set up the development environment, we did the following:
Created the product folder on our desktop,
Created a react app, installed all the dependencies needed for the app to function correctly using `npm install` along side the name of the dependencies.
Created the product's GitHub repository were I pushed the product folder to.
Signed up on Firebase, and EmailJS so we could get the required resources for the product development.


## Built with

-React
-CSS
-Bootstrap
-Firebase
-EmailJS
-Zustand


## Folder Structure

- node_modules contains all dependencies required by the app.Main dependencies also listed in package.json
- Public contains static assets including index.html (page template)
  - Index.html
    - title
    - fonts
    - css
    - favicon
    - id=”root”- our entire app
- src in simplest form is the brain of our app. This is where we will do all our work. src/index.js is the javaScript entrypoint
- .gitignore is specifies which files source control(Git) should ignore
- package.json every Node.js project has a package.json and it contains information about our project , for example list of dependencies and scripts
- Package-lock.json is a snapshot of entire dependency tree

## Name structure and naming convention:

camelCase will be used for this project

### Take a Tour around i-validate

#### Landing & About Page
The landing & about page gives an extensive details of what i-validate app is all about and it's functional just as designed by the product designers

<img src="../i-validate-landing-page/src/images/screencapture-i-validate-landing-page-vercel-app-2023-03-04-16_31_35.png"/>
<img src="../i-validate-landing-page/src/images/screencapture-i-validate-landing-page-vercel-app-Analytic-2023-03-04-16_34_46.png"/>

## Codes Samples

```React js

### App.js code

import 'react-toastify/dist/ReactToastify.css';

import Signup from './signup/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Reset from './reset/Reset';
import Analytic from '../src/Analytic/Analytic';
import AddContact from './Dashboard-aside/AddContact';
import Feedback from './Dashboard-aside/Feedback';
import Response from './Dashboard-aside/Response';

function App() {
  return (
    <>
      {/* <ToastContainer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard/>}/>  
        <Route path="/analytic" element={<Analytic />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path='/addContact' element={<AddContact />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/Response' element={<Response />} />

      </Routes>
    </>
  );
}

export default App;

### Login codes

const Login = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userDetail) => {
        console.log(userDetail);
        toast.success("Login is successful");
        navigate("/Dashboard");
      })
      .catch((error) => {
        toast.error("Something went wrong, email or password is incorrect");
        console.log(error);
      });
  };

```

### Links

-  Live Site URL: [i-validate app](https://i-validate-landing-page.vercel.app/)

[## Product requirements document(PRD)](https://www.notion.so/Product-Requirement-Document-PRD-for-i-validate-bd8436f329d74bc5afa3cdff9e6c2ac3)

[## Technical requirements document(TRD)](https://house-ikenga.gitbook.io/i-validate-trd/)
[link to our landing page](https://i-validate-landing-page.vercel.app/)



### Acknowledgement
We would love to acknowledege all the Team Ikenga team members who devoted their time to work and produce a working product, despite their time schedule and the short time frame given for the completion of the project.

We would also thank Ms Ihuoma, Ms Sophia for advicing and linking me to Mr Tobi who helped me out when I was having issues on how to make the idea form to actually fetch validated ideas .

We would love to thank everyone for helping us in solving the validation bugs, and lastly, I would be thanking the Enugu State Tech Hub for giving us the opportunity to learn extentively through the Ada Project.


### 👀 Conclusion
We had great ideas but due to the short time frame, all pages features functionalities are not working as supposed but in subsequent time, it will be added as future works.

