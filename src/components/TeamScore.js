import React from "react";

export default function TeamScore(props) {
  return (
    <div>
      <div>
        <p class={`counter counter--${props.teamColor}`}>
          Team {props.teamColor}: 0
        </p>
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
  );
}
