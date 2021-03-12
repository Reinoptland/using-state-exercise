import TeamScore from "./components/TeamScore";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ScoreBoard</h1>
        <TeamScore teamColor="blue" />
        <TeamScore teamColor="red" />
        <TeamScore teamColor="pink" />
      </header>
    </div>
  );
}

export default App;
