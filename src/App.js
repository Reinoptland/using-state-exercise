import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  function plusOne() {
    setScore(score + 1);
  }

  function minusOne() {
    setScore(score - 1);
  }

  function plusFive() {
    setScore(score + 5);
  }

  function minusFive() {
    setScore(score - 5);
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
            <button onClick={plusOne}>+ 1</button>
            <button onClick={minusOne}>- 1</button>
            <button onClick={plusFive}>+ 5</button>
            <button onClick={minusFive}>- 5</button>
            <button onClick={halfScore}>half score</button>
            <button onClick={resetScore}>reset</button>
          </div>
        </div>
        <div>
          <div>
            <p class="counter counter--red">Team red: 0</p>
          </div>
          <div class="buttons">
            <button>+ 1</button>
            <button>- 1</button>
            <button>+ 5</button>
            <button>- 5</button>
            <button>half score</button>
            <button>reset</button>
          </div>
        </div>
        <div>
          <div>
            <p class="counter counter--pink">Team pink: 0</p>
          </div>
          <div class="buttons">
            <button>+ 1</button>
            <button>- 1</button>
            <button>+ 5</button>
            <button>- 5</button>
            <button>half score</button>
            <button>reset</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
