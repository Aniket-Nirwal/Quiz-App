import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((ans) => ans).length;
  return (
    <div className="results">
      <h3>Result</h3>
      <p>
        You have answered {correctAnswers} out of {questions.length} questions
      </p>
      <span onClick={resetQuiz}>Retry your quiz</span>

      {questions.map((question, index) => {
        return (
          <li key={index} data-correct={userAnswers[index]}>
            Q{index + 1}. {question.question}
          </li>
        );
      })}
    </div>
  );
};

export default Result;
