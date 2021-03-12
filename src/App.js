import TeamScore from "./components/TeamScore";
import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  function changeScore(number) {
    setScore(score + number);
  }

  function halfScore() {
    setScore(score / 2);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ScoreBoard</h1>
        <div>
          <div>
            <p class="counter counter--blue">Team blue: {score}</p>
          </div>
          <div class="buttons">
            <button onClick={() => changeScore(1)}>+ 1</button>
            <button onClick={() => changeScore(-1)}>- 1</button>
            <button onClick={() => changeScore(5)}>+ 5</button>
            <button onClick={() => changeScore(-5)}>- 5</button>
            <button onClick={halfScore}>half score</button>
            <button onClick={resetScore}>reset</button>
          </div>
        </div>
        <TeamScore teamColor="red" />
        <TeamScore teamColor="pink" />
      </header>
    </div>
  );
}

export default App;
