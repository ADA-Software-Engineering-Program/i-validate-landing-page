import { create } from 'zustand';

const useFeedbackStore = create ( (set, get)=>({
    feedback: [],
    setFeedback: (array) => set(()=>(
        {feedback: array}
    ))
}) )

export default useFeedbackStore