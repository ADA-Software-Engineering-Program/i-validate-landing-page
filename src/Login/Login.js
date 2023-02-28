import { Col, Row, Container, Form } from 'react-bootstrap';
import { BsFillEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [passwordType, setPasswordType] = useState('password');
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className=""></div>

            <div className="mb-1 mt-md-4 ">
              <h2 className="fw-bold mb-2  ">Welcome to i-validate</h2>
              <p className=" mb-1">Register your account</p>
              <div className="mb-3 mt-1">
                <Form className="bg-white mt-1">
                  <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className="text-center">Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 "
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div className=" ">
                      <button className="" onClick={togglePassword}>
                        {passwordType === 'password' ? (
                          <BsFillEyeFill className="text-dark  position-relative top-0 end-0 " />
                        ) : (
                          <BsEyeSlashFill className="text-dark position-relative top-0 end-0" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button mb-3"
                      className="btn btn-primary btn-sm "
                      id="btn"
                    >
                      Login
                    </button>
                    <span className="mt-3">
                      <p>Create account with</p>
                    </span>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
