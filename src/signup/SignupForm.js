import { useState } from "react";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from '../images/signup-logo.png'
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

export default function SignupForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

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
                className=""
                />
            </div>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                className=""
                />
            </div>
            <div>
            <label>Password</label>
                <div className="password-icon">
                <input
                    type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    name="password"
                    className=""
                />
                <div className=" ">
                    <button onClick={togglePassword} className="signup-icon">
                    {passwordType === "password" ? (
                        <BsFillEyeFill  />
                    ) : (
                        <BsEyeSlashFill />
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
                <Link to='#'><FcGoogle className="icons-main"/></Link>
                <Link to='#'><FaLinkedinIn className="icons-main"/></Link>
                </div>
            </div>
                <div className='signin-option d-flex align-items-center mt-3 show'>
                    <p>Already have an Account?</p>
                    <Link to='#' className='signin-option-btn moved'>Sign In</Link>
                </div>
          </form>
      </main>
  );
}
