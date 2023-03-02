import { Col, Row, Container, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../ContactUs/contactUs.css'

const Reset = () => {
  
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={5} xs={10}>
            <div className=""></div>

            <div className="mb-1 mt-md-4 ">
              <h2 className="fw-bold mb-2  ">Reset your Password</h2>
              <p className=" mb-4">A verification mail have been sent to your mailbox. Please check your mail</p>
              <div className="mb-3 mt-1">
                <Form className="bg-white mt-1">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className="text-center">Verification Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group> 
                  <div className="mb-3 d-flex">
                    <div className="d-flex align-items-center"> 
                        <input type="checkbox" className="robot-check" />
                        <span className="contact-text-color form-font">
                        I'm not a robot
                        </span>
                    </div>
                    </div>                
                  <div>
                    <button
                      type="button mb-3"
                      className="btn btn-primary btn-sm "
                      id="btn"
                    >
                      Send
                    </button>
                    <span className="mt-3">
                      <Link to="/Login" className='mt-3 d-block text-decoration-none'>Back to Login</Link>
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
export default Reset;
