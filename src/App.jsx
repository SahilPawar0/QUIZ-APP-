import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product ?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch ?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie ?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who has most centuries in cricket ?",
      answers: [
        {
          text: "Sachin Tendulkar",
          correct: true,
        },
        {
          text: "Virat Kohli",
          correct: false,
        },
        {
          text: "Ricky Ponting",
          correct: false,
        },
        {
          text: "Kumar Sangakkara",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "India's largest city population ?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Pune",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which state has highest literacy rate ?",
      answers: [
        {
          text: "Goa",
          correct: false,
        },
        {
          text: "Mizoram",
          correct: false,
        },
        {
          text: "Manipur",
          correct: false,
        },
        {
          text: "Kerala",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "India won its first Olympic hockey gold in ?",
      answers: [
        {
          text: "1928",
          correct: true,
        },
        {
          text: "1930",
          correct: false,
        },
        {
          text: "1932",
          correct: false,
        },
        {
          text: "1927",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which is india's first artificial satellite ?",
      answers: [
        {
          text: "INSAT",
          correct: false,
        },
        {
          text: "Aryabhata",
          correct: true,
        },
        {
          text: "Bhaskara",
          correct: false,
        },
        {
          text: "Rohini",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "First University established in india ?",
      answers: [
        {
          text: "Delhi University",
          correct: false,
        },
        {
          text: "Madras University",
          correct: false,
        },
        {
          text: "Banaras University",
          correct: false,
        },
        {
          text: "University of calcutta",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "The First IIT was established in 1951 known as ?",
      answers: [
        {
          text: "IIT Delhi",
          correct: false,
        },
        {
          text: "IIT Kanpur",
          correct: false,
        },
        {
          text: "IIT Kharagpur",
          correct: true,
        },
        {
          text: "IIT Madras",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who won the first T20 World Cup ?",
      answers: [
        {
          text: "India",
          correct: true,
        },
        {
          text: "Pakistan",
          correct: false,
        },
        {
          text: "Sri Lanka",
          correct: false,
        },
        {
          text: "West Indies",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who is Known as Flying Sikh ?",
      answers: [
        {
          text: "Carl Lewis",
          correct: false,
        },
        {
          text: "Michael Johnson",
          correct: false,
        },
        {
          text: "Usain Bolt",
          correct: false,
        },
        {
          text: "Milkha Sing",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "What is the National Game of India ?",
      answers: [
        {
          text: "Kabaddi",
          correct: false,
        },
        {
          text: "Cricket",
          correct: false,
        },
        {
          text: "Football",
          correct: false,
        },
        {
          text: "Hockey",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Who won the most Ballon d'Or Award ?",
      answers: [
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Lionel Messi",
          correct: true,
        },
        {
          text: "Neymar",
          correct: false,
        },
        {
          text: "Ronaldinho",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Dhyan Chand was legendary ?",
      answers: [
        {
          text: "Kabaddi Player",
          correct: false,
        },
        {
          text: "Cricketer",
          correct: false,
        },
        {
          text: "Hockey Player",
          correct: true,
        },
        {
          text: "Chess Grandmaster",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
