import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import "./dashboard-aside.css";
import BarCC from "../components/dashboard-aside-comp/BarCC";
import useFeedbackStore from '../../src/store/zustand/feedbackStore';


const Feedback = () => {
  const feedbackData = useFeedbackStore((state) => state.feedback);

  
const {text}  = feedbackData;

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Feedback</h3>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/Login" className="text-black d-block me-2">
            Log out
          </Link>
          <BsPersonCircle className="fs-4" />
        </div>
      </div>

      <div className="feedback-text">
        <p>{text}</p>
      </div>
      <div>
        <BarCC />
      </div>
    </div>
  );
};

export default Feedback;




// import React from "react";
// import { Link } from "react-router-dom";
// import { BsPersonCircle } from "react-icons/bs";
// import "./dashboard-aside.css";
// import BarCC from "../components/dashboard-aside-comp/BarCC";
// import useFeedbackStore from '../../src/store/zustand/feedbackStore';


// const Feedback = () => {

//   const data = useFeedbackStore((state)=>state.feedback);

//     const { feedback, features, closing_feedback} = data

//   return (
//     <div className="container my-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3>Feedback</h3>
//         <div className="d-flex justify-content-between align-items-center">
//           <Link to="/Login" className="text-black d-block me-2">
//             Log out
//           </Link>
//           <BsPersonCircle className="fs-4" />
//         </div>
//       </div>

//       <div className="feedback-text">
//         {/* <h5>{feedback}</h5> */}
//         <p>{features}</p>
//         {/* <p>{closing_feedback}</p> */}
//       </div>
//       <div>
//         <BarCC />
//       </div>
//     </div>
//   );
// };

// export default Feedback;
