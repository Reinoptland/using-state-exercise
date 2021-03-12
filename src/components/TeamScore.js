import React, { useState } from "react";

export default function TeamScore(props) {
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
    <div>
      <div>
        <p className={`counter counter--${props.teamColor}`}>
          Team {props.teamColor}: {score}
        </p>
      </div>
      <div className="buttons">
        <button onClick={() => changeScore(1)}>+ 1</button>
        <button onClick={() => changeScore(-1)}>- 1</button>
        <button onClick={() => changeScore(5)}>+ 5</button>
        <button onClick={() => changeScore(-5)}>- 5</button>
        <button onClick={halfScore}>half score</button>
        <button onClick={resetScore}>reset</button>
      </div>
    </div>
  );
}
