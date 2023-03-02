import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi';
import Dlogo from '../../images/i-validate-logo-optimiz.jpg';
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import Customer from './Customer';
import Radiobtn from './Radiobtn';
// import { signOut } from 'firebase/auth';
// import auth from '../config/firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


function Dashboard() {
  // import { getAuth, signOut } from "firebase/auth";

  // const navigate = useNavigate();

  // const logOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       toast.success('Logout is successful');
  //       navigate('/Home');
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       toast.error('Logout failed');
  //     });
  // };


  return (
    
        <main className='container'>
            <div className='d-flex justify-content-between my-3'>
                <h4 className='fw-bolder my-auto'>Overview</h4>
                <div className='d-flex justify-content-between'>
                    <Link className='my-auto text-decoration-none text-dark'
                    to="/"
                    // onClick={logOut}
                    >Log Out</Link>
                    <div>
                      <HiUserCircle className='hiUser'/>
                    </div>
                </div>
            </div>
            <section className='d-inline-flex container dHead'>
                <img src={Dlogo} alt="Logo" className='dLogo'/>
                <h1 className='w-lg-50 fw-bolder mx-auto my-auto'>
                  <span className='titleSpan'>Validate</span> your ideas before building
                </h1>
            </section>
            <form className='my-4 dSection'>
              <div className='overHead'>
                <h2 className='fw-bolder ms-4 pt-2'>
                  1. Idea
                </h2>
                <span className='ms-4'>Kindly answer the following questions:</span>
              </div>
              <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion' >
                  <h6 className='fw-bolder'>What is the problem you want to solve?</h6>
                  <span>Be as specific as you can without mentioning any of the solutions. and convey the viewpoint of the user</span><br/>
                  <input type={Text} className="dInput"/>
                </div>
              </div>
              <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                  <h6 className='fw-bolder'>What is your solution?</h6>
                  <span>Make use of proper English in writing your proposed solution and focus on the solution instead of the features.</span><br/>
                  <input type={Text} className="dInput"/>
                </div>
              </div>
              <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                  <h6 className='fw-bolder'>What is your unfair Advantage?</h6>
                  <span>Ensure you state the major reason .</span><br/>
                  <input type={Text} className="dInput"/>
                </div>
              </div>
              <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                  <h6 className='fw-bolder'>Who are you target audience?</h6>
                  <span>who are the individuals you are having in mind will creating your idea</span><br/>
                  < Radiobtn/>
                </div>
              </div>
              <button className='btn btn-lg findBtn iBtn'>
                   Submit Idea
                </button>
            </form>
            <article className='my-4 dSection'>
              <div className='overHead'>
                <h2 className='fw-bolder ms-4 pt-2'>
                  2. Market Research
                </h2>
              </div>
              <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons dIcons1'/>
                <div className='dQuestion'>
                  <h6 className='fw-bolder'>Research Competitors</h6>
                  <span>Know what your up against</span><br/>
                  <span>There is no such thing as a new idea-Mark Tawing. konw more about your competitors</span>
                </div>
              </div>
              <Link to='http://townhall.com' className='ideaSection2'>http://townhall.com </Link>
              
              <div className='row researchQuestion'>
                <div className='col-md-6'>
                  WHAT DO THEY DO WELL? <br/>
                  <li></li>
                </div>
                <div className='col-md-6'>
                  WHAT ARE THEIR WEAKNESSES? <br/>
                  <li></li>
                </div>
                <div className='col-md-6'>
                  CUSTOMERS REVIEW <br/>
                  <li></li>
                </div>
                <div className='col-md-6'>
                  PRICING <br/>
                  <li></li>
                </div>
              </div>
              <div className='d-inline-flex border p-1 newBtn' >
                <MdAddCircle className='dPlus'/>
                <p className='my-auto'>NEW COMPETITORS</p>
              </div>
            </article>
            <Customer />
        </main>
    
  )
}

export default Dashboard