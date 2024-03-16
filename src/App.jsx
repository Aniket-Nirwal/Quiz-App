import { useState } from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [currQuestions, setcurrQuestions] = useState(0);
  const [userAnswers, setuserAnswers] = useState([]);

  const handleNextQsn = (isCorrect) => {
    setcurrQuestions(currQuestions + 1);
    setuserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setcurrQuestions(0);
    setuserAnswers([]);
  };
  return (
    <>
      <div className="body">
        <h1>World Quiz</h1>
        {currQuestions < questions.length && (
          <Questions
            questions={questions[currQuestions]}
            onAnswerClick={handleNextQsn}
          />
        )}

        {currQuestions === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
