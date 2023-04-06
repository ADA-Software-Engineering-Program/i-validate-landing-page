import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPatchCheckFill } from 'react-icons/bs';
import Radiobtn from './Radiobtn';
import useFeedbackStore from '../../store/zustand/feedbackStore';


const Ideagenerator =() => {
    const navigate = useNavigate();
    const [idea, setIdea] = useState('');

    const setFeedback = useFeedbackStore((state)=>state.setFeedback);

    async function handleSubmit(e) {
        e.preventDefault();

        // Check if all input fields are filled out
        if (!idea ) {
            alert('Please fill out all input fields');
            return;
        }

        const response = await fetch("https://i-validate-api.onrender.com/generate", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idea }),
        });
  
        const data = await response.json();
        // console.log(data);
        setFeedback(data);
        navigate("/feedback");
        
    };

  return (
    <div className='dSection'>
        <form onSubmit={handleSubmit}>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion' >
                    <h6 className='fw-bolder'>What is the problem you want to solve?</h6>
                    <p>Be as specific as you can without mentioning any of the solutions. and convey the viewpoint of the user</p><br/>
                    <textarea 
                        type="text" 
                        className="dInput"
                        value={idea}
                        cols="60"
                        onChange={(event) => setIdea(event.target.value)}
                    />
                </div>
            </div>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                    <h6 className='fw-bolder'>What is your solution?</h6>
                    <p>Make use of proper English in writing your proposed solution and focus on the solution instead of the features.</p><br/>
                    <textarea 
                        type="text"  
                        className="dInput"
                        cols="60"
                    />
                </div>
            </div>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='d-icon'/>
                <div className='dQuestion'>
                    <h6 className='fw-bolder'>What is your unfair Advantage?</h6>
                    <p>Ensure you state the major reason .</p><br/>
                    <textarea
                        type="text" 
                        className="dInput"
                        cols="60"
                    />
                </div>
            </div>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='d-icon'/>
                <div className='dQuestion'>
                    <h6 className='fw-bolder'>Who are you target audience?</h6>
                    <p>Who are the individuals you are having in mind will creating your idea</p><br/>
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