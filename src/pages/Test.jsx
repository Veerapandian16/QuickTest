import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import math from "../data/math.json";
import science from "../data/science.json";

import { shuffleQuestions } from "../utils/shuffle";

import Timer from "../components/Timer";
import QuestionCard from "../components/QuestionCard";

function Test() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const questionBank =
    state.subject === "math"
      ? math
      : science;

  const questions = useMemo(() => {
    return shuffleQuestions(questionBank, state.count);
}, [questionBank, state.count]);

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(
    state.count === 15 ? 300 : 600
  );

  useEffect(() => {

    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft]);

  const selectAnswer = (option) => {

    setAnswers({
      ...answers,
      [current]: option,
    });

  };

  const next = () => {

    if (current < questions.length - 1)
      setCurrent(current + 1);

  };

  const previous = () => {

    if (current > 0)
      setCurrent(current - 1);

  };

  const submitTest = () => {

    let score = 0;

    questions.forEach((q, index) => {

      if (answers[index] === q.answer)
        score++;

    });

    navigate("/result", {
      state: {
        score,
        total: questions.length,
      },
    });

  };

  return (

    <div className="home">

      <div className="card">

        <h1>QuickTest</h1>

        <Timer timeLeft={timeLeft} />

        <QuestionCard
          question={questions[current]}
          current={current}
          total={questions.length}
          selectedAnswer={answers[current]}
          onSelect={selectAnswer}
        />

        <div className="navigation">

          <button
            onClick={previous}
            disabled={current === 0}
          >
            Previous
          </button>

          <button
            onClick={next}
            disabled={current === questions.length - 1}
          >
            Next
          </button>

        </div>

        <button
          className="submit"
          onClick={submitTest}
        >
          Submit Test
        </button>

      </div>

    </div>

  );

}

export default Test;