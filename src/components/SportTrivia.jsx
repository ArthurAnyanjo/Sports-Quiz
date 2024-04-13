import React, { useEffect, useState } from "react";

export default function SportsTrivia({
  data,
  setStopTime,
  setQuestionNumber,
  questionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    
    delay(6000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev +1 );
        setSelectedAnswer(null);
      }else{
        setStopTime(true);
      }
    });
  };

  return (
    <div className="sportsTrivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.answer}
          </div>
        ))}
      </div>
    </div>
  );
}
