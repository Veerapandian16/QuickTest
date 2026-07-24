function Timer({ timeLeft }) {

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <h3 className="timer">
      ⏳ Time Left :
      {" "}
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </h3>
  );
}

export default Timer;