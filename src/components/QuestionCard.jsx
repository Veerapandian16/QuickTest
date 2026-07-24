function QuestionCard({
  question,
  current,
  total,
  selectedAnswer,
  onSelect,
}) {
  return (
    <div>

      <h3>
        Question {current + 1} / {total}
      </h3>

      <p className="question">
        {question.question}
      </p>

      {question.options.map((option) => (

        <button
          key={option}
          className={
            selectedAnswer === option
              ? "option selected"
              : "option"
          }
          onClick={() => onSelect(option)}
        >
          {option}
        </button>

      ))}

    </div>
  );
}

export default QuestionCard;