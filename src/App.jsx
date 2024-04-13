import { useEffect, useMemo, useState } from "react";
import "./app.css";
import SportsTrivia from "./components/SportTrivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stopTimer, setStopTime] = useState(false);
  const [earned, setEarnedAmount] = useState("£ 0");

  const data = [
    {
      id: 1,
      question: "What year was Manchester United founded?",
      answers: [
        {
          answer: "1879",
          correct: false,
        },
        {
          answer: "1877",
          correct: false,
        },
        {
          answer: "1878",
          correct: true,
        },
        {
          answer: "1999",
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: "Who was the top scorer in the 2022/23 Premier League season?",
      answers: [
        {
          answer: "Haaland",
          correct: true,
        },
        {
          answer: "Kane",
          correct: false,
        },
        {
          answer: "Toney",
          correct: false,
        },
        {
          answer: "Son",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which team won the 2019 NBA Finals?",
      answers: [
        {
          answer: "Golden State Warriors",
          correct: false,
        },
        {
          answer: "Chicago Bulls",
          correct: false,
        },
        {
          answer: "Denver Nuggets",
          correct: false,
        },
        {
          answer: "Toronto Raptors",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(() => 
    [
      { id: 1, amount: "£ 100" },
      { id: 2, amount: "£ 200" },
      { id: 3, amount: "£ 300" },
      { id: 4, amount: "£ 500" },
      { id: 5, amount: "£ 1,000" },
      { id: 6, amount: "£ 2,000" },
      { id: 7, amount: "£ 4,000" },
      { id: 8, amount: "£ 8,000" },
      { id: 9, amount: "£ 16,000" },
      { id: 10, amount: "£ 32,000" },
      { id: 11, amount: "£ 64,000" },
      { id: 12, amount: "£ 1,250,00" },
      { id: 13, amount: "£ 2,500,00" },
      { id: 14, amount: "£ 5,000,00" },
      { id: 15, amount: "£ 1,000,000" },
    ].reverse(),
[]);

  useEffect(() => {

    questionNumber > 1 && setEarnedAmount (moneyPyramid.find(x => x.id === questionNumber -1).amount);
  },[moneyPyramid,questionNumber]);

  return (
    <div className="App">
      <div className="mainContainer">
        {stopTimer ? (
          <h1 className="completeTxt">You earned: {earned}</h1>
        ) : (
          <>
            <div className="topSection">
              <div className="timer">30</div>
            </div>
            <div className="bottomSection">
              <SportsTrivia
                data={data}
                setStopTime ={setStopTime}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="prizeList">
          {moneyPyramid.map((x) => (
            <li
              className={
                questionNumber === x.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{x.id}</span>
              <span className="moneyListItemAmount">{x.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
