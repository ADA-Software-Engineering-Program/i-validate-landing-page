import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPatchCheckFill } from 'react-icons/bs';
import Radiobtn from './Radiobtn';
import useFeedbackStore from '../../store/zustand/feedbackStore';


const Ideagenerator =() => {
    const navigate = useNavigate();
    const [idea, setIdea] = useState('');

    const setFeedback = useFeedbackStore((state)=>state.setFeedback);
    const [features, setFeatures] = useState('');
    const [closing_feedback, setClosingFeedback] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Fetch idea from API based on user input
        const response = await fetch(`https://res.cloudinary.com/dahn8uiyc/raw/upload/v1677920144/ideaGenerator_foppix.json`);
    
        if (response.ok) {
          const data = await response.json();
          setFeedback(data);
          setFeatures(data.features);
          setClosingFeedback(data.closing_feedback);
            navigate("/feedback");
        } else {
          console.log('Error fetching idea from API');
        }
      };

  return (
    <div className='dSection'>
        <form onSubmit={handleSubmit}>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion' >
                    <h6 className='fw-bolder'>What is the problem you want to solve?</h6>
                    <span>Be as specific as you can without mentioning any of the solutions. and convey the viewpoint of the user</span><br/>
                    <input 
                        type={Text} 
                        className="dInput"
                        value={idea}
                        onChange={(event) => setIdea(event.target.value)}
                    />
                </div>
            </div>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                    <h6 className='fw-bolder'>What is your solution?</h6>
                    <span>Make use of proper English in writing your proposed solution and focus on the solution instead of the features.</span><br/>
                    <input 
                        type={Text} 
                        className="dInput"
                        value={features}
                        onChange={(event) => setFeatures(event.target.value)}
                    />
                </div>
            </div>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                    <h6 className='fw-bolder'>What is your unfair Advantage?</h6>
                    <span>Ensure you state the major reason .</span><br/>
                    <input 
                        type={Text} 
                        className="dInput"
                        value={closing_feedback}
                        onChange={(event) => setClosingFeedback(event.target.value)}
                    />
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
            <button type='submit' className='btn btn-lg findBtn iBtn' >
                Submit Idea
            </button>
        </form>
        
    </div>
  )
}

export default Ideagenerator