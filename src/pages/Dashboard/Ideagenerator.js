import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPatchCheckFill } from 'react-icons/bs';
import Radiobtn from './Radiobtn';
import { Configuration, OpenAIApi } from "openai";
import useFeedbackStore from '../../store/zustand/feedbackStore';




const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

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
        
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: " Business wise, give feedback on?" + idea,
            temperature: 0.6,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 1,
            presence_penalty: 1,
        });
        console.log(response);

        if (response.status === 200) {
            const data =  response.data.choices[0];
            // console.log(response.data);
            // console.log(response.data.choices[0]);
          setFeedback(data);
        navigate("/feedback");
        } else {
            console.log('Error fetching idea from  API');
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
                        type="text" 
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
                        type="text"  
                        className="dInput"
                    />
                </div>
            </div>
            <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons'/>
                <div className='dQuestion'>
                    <h6 className='fw-bolder'>What is your unfair Advantage?</h6>
                    <span>Ensure you state the major reason .</span><br/>
                    <input 
                        type="text" 
                        className="dInput"
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