///https://github.com/nithintata/quiz-app-in-nodejs/blob/master/routes/quizRouter.js
///https://codesandbox.io/s/l5hig?file=/yarn.lock


const quizData = {
  title: "VisioSpark Quiz Competition"
};

const questions = [
  {
    text: "What is the Stand for ML?",
    type: "mc",
    answers: [
      { text: "memory lavel", correct: false },
      { text: "machine level", correct: false },
      { text: "machine learning", correct: true },
      { text: "machine lengh", correct: false }
    ]
  },
  {
    text: "What is the visiospark?",
    type: "mc",
    answers: [
      { text: "enjoement", correct: false },
      { text: "events", correct: true },
      { text: "none of these", correct: false },
      { text: "a and b", correct: false }
    ]
  },
  {
    text: "What is the visiospark?",
    type: "mc",
    answers: [
      { text: "enjoement", correct: false },
      { text: "events", correct: true },
      { text: "none of these", correct: false },
      { text: "a and b", correct: false }
    ]
  },
  {
    text: "What is the visiospark?",
    type: "mc",
    answers: [
      { text: "enjoement", correct: false },
      { text: "events", correct: true },
      { text: "none of these", correct: false },
      { text: "a and b", correct: false }
    ]
  },
  {
    text: "What is the visiospark?",
    type: "mc",
    answers: [
      { text: "enjoement", correct: false },
      { text: "events", correct: true },
      { text: "none of these", correct: false },
      { text: "a and b", correct: false }
    ]
  },
  
  
 
  
];

module.exports = { quizData, questions };
