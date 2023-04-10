import { Col, Row, Container, Form } from "react-bootstrap";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginIntro from "./login-intro.jpg";
import { FcGoogle } from "react-icons/fc";
import Logo from "../images/signup-logo.png";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
import { provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  const onGoogleSubmitHandler = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        // setGoogleValue(data.user.email)
        console.log(data);
        toast.success("Login with google is successful");
        navigate("/Dashboard");
      })
      .catch((error) => {
        toast.error("Something went wrong, Try again later");
      });
  };

  return (
    <div className="d-md-flex login-container">
      <Container className="form-side my-5">
        <Row className="mt-4 d-flex align-items-center justify-content-center">
          <Col md={12} lg={9} xs={12}>
            <div className="login-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="mb-1 mt-md-4 ">
              <div className="login-heading">
                <h2 className="fw-bold mb-2 login-title">Hi, Welcome Back!</h2>
                <p className=" mb-1 login-subtitle">Log in to your account</p>
              </div>
              <div>
                <button className="login-google h50 d-flex align-items-center  justify-content-center"
                onClick={ onGoogleSubmitHandler}
                >
                  <FcGoogle />
                  <span>Sign in with Google</span>
                </button>
                <p className="text-center my-4">Or</p>
              </div>
              <div className="mb-3">
                <Form className="bg-white mt-1" onSubmit={signIn}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-label">Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="samtruty@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h50"
                    />
                  </Form.Group>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="login-label">Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          placeholder="Password must include at least 8 characters"
                          className="h50"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                        />
                        <div>
                          <button className="login-icon" onClick={togglePassword}>
                            {showPassword ? (
                              <BsFillEyeFill 
                              className="text-dark  position-relative top-0 end-0 " 
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                              />
                            ) : (
                              <BsEyeSlashFill 
                              className="text-dark position-relative top-0 end-0" 
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div>
                    <Link to='/Reset' className="login-forgot mb-4">Forgot Password?</Link>
                  </div>
                  <div>
                    <button
                      type="button mb-3"
                      className="btn btn-primary btn-sm h50"
                      id="btn"
                    >
                      Login
                    </button>

                    <span className="mt-3">
                      <Link to="/SignUp" className="no-account text-decoration-none mt-4 d-block">Don't have an account</Link>
                    </span>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="login-color-side d-flex align-items-center flex-column justify-content-center">
        <div className="login-intro">
          <img src={LoginIntro} alt="Analytics" />
        </div>
        <div>
          <p>Bringing Ideas to reality</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
