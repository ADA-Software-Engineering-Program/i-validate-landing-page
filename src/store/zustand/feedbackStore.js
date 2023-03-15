import { create } from 'zustand';
// import { Configuration, OpenAIApi } from "openai";



const useFeedbackStore = create((set) => ({
  feedback: {},

  setFeedback: (ideaObject) => {
    console.log(ideaObject);
    set(()=>(
        {feedback: ideaObject}
    ))
}
//   setFeedback: async (idea) => {
//     const configuration = new Configuration({
//       apiKey: "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",
//     });

//     const openai = new OpenAIApi(configuration);

//     try {
//       const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Business wise, give feedback on?" + idea,
//         temperature: 0.6,
//         max_tokens: 150,
//         top_p: 1,
//         frequency_penalty: 1,
//         presence_penalty: 1,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         set(() => ({ feedback: data }));
//       } else {
//         console.error('Error fetching feedback from API');
//       }
//     } catch (error) {
//       console.error('Error fetching feedback from API', error);
//     }
//   }
}));

export default useFeedbackStore;
