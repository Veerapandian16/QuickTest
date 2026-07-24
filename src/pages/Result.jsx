import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="result-card">

        <h1 className="logo">QuickTest</h1>

        <h2>Test Completed 🎉</h2>

        <div className="score-circle">
          <h1>{state.score}</h1>
          <span>/ {state.total}</span>
        </div>

        <button
          className="premium-btn"
          onClick={() => navigate("/")}
        >
          🔄 Take Another Test
        </button>

      </div>
    </div>
  );
}

export default Result;