import { useState } from "react";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/signup-logo.png';
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../config/firebase";
import {  provider } from "../config/firebase";
import { toast } from "react-toastify";

export default function SignupForm() {
  // const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordInput, setPasswordInput] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  // const [verified, setVerified] = useState(false);
  

  const navigate = useNavigate();

  // function onChange() {
  //   setVerified(true);
  // }
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  

  function handleSubmit(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userDetail) => {
        console.log(userDetail);
        toast.success("Registration is successful");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Something went wrong, Try again later");
        console.log(error);
      });
  };


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        // setGoogleValue(data.user.email)
        console.log(data);
        toast.success("Registration with google is successful");
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong, Try again later");
      });
  };

  return (
      <main className="signup-main-form">
          <form
            onSubmit={handleSubmit}
            className="signup-main mt-5"
          >
            <div className="signup-header mt-4">

                <div className="signup-logo">
                    <img src={Logo} alt='Logo' />
                </div>
                <div className="signup-top">
                    <h2 className="signup-title">Welcome to i-validate!</h2>
                    <p className="signup-subtitle">Register you account</p>
                </div>
            </div>
            <div>
                <label>Name</label>
                <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="ps-3"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="ps-3"
                autoComplete="username"
                />
            </div>
            <div>
            <label>Password</label>
                <div className="password-icon">
                <input
                    type={showPassword ? "text" : "password"}
                    onChange={handlePasswordInputChange}
                    value={password}
                    name="password"
                    className="ps-3"
                    autoComplete="current-password"
                />
                <div className=" ">
                    <button onClick={togglePassword} className="signup-icon">
                    {showPassword === "password" ? (
                        <BsFillEyeFill 
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }} />
                    ) : (
                        <BsEyeSlashFill 
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        />
                    )}
                    </button>
                </div>
                </div>        
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="submit-signup"
              >
                Sign Up
              </button>
            </div>
            <div className="signup-alt d-flex">
                <span>Create account with  </span>
                <div className="icons-group d-flex">
                <Link to='#'><CiFacebook className="icons-main"/></Link>
                <buttton onClick={handleGoogleSignIn}>
                  <FcGoogle className="icons-main"/>
                </buttton>
                <Link to='#'><FaLinkedinIn className="icons-main"/></Link>
                </div>
            </div>
            <div className="show">
                <div className='signin-option d-flex align-items-center mt-4'>
                    <p>Already have an Account?</p>
                    <Link to='/Login' className='signin-option-btn moved'>Sign In</Link>
                </div>
            </div>
          </form>
      </main>
  );
}
