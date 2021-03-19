import "./App.css";
import useSound from "use-sound";
import boopSfx from "./sound.wav";

const BoopButton = () => {
  const [play] = useSound(boopSfx);

  return <button className="big-button" onClick={play}>Boop!</button>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoopButton />
        <p>@TapxDammit</p>
      </header>
    </div>
  );
}

export default App;
