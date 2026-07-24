import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("math");
  const [count, setCount] = useState(15);

  const startTest = () => {
    navigate("/test", {
      state: {
        subject,
        count,
      },
    });
  };

  return (
    <div className="home">

      <div className="card">

        <h1>QuickTest</h1>

        <h3>Select Subject</h3>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
        </select>

        <h3>Select Questions</h3>

        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          <option value={15}>15 Questions (5 Minutes)</option>
          <option value={30}>30 Questions (10 Minutes)</option>
        </select>

        <button className="startBtn" onClick={startTest}>
          Start Test
        </button>

      </div>

    </div>
  );
}

export default Home;
