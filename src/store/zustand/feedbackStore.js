import { create } from 'zustand';


const useFeedbackStore = create((set) => ({
  feedback: {},

  setFeedback: (data) => {
    // console.log(data);
    set(()=>(
        {feedback: data}
    ))
  }
}));

export default useFeedbackStore;
