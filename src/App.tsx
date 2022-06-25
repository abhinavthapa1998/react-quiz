import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";
import "./styles.css";
import { Difficulty } from "./API";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const TOTAL_QUESTIONS = 10;

  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start{" "}
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        questions={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : null}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}
