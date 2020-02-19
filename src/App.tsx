import React, { useEffect } from "react";
import Board from "./components/Board";
import "./css/App.css";
import { clearBoard } from "./Constants";
import { validInput, guess, IGuess, mergeBoard } from "./helpers";

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [play, setPlay] = React.useState(false);
  const [input, setInput] = React.useState(clearBoard);
  const [invalid, setInvalid] = React.useState(false);
  const [lastStep, setLastStep] = React.useState<Array<IGuess>>([]);
  const [done, setDone] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (play && !done) {
        setLastStep(
          guess([...lastStep], [...input], () => {
            setDone(true);
          })
        );
      }
    }, 1);
  });

  const EnterBoard = (event: any) => {
    const pos = event.target.id.split(" ");
    var inputCopy = [...input];
    inputCopy[Number(pos[1]) - 1][Number(pos[0]) - 1] = Number(
      event.target.value
    );
    setInput(inputCopy);
  };

  return (
    <div className="App">
      <header>
        <h1>Sudoku Solver </h1>
        <h2>{play ? "Solving" : "Paused"}</h2>
        <h2>{done ? "done" : ""}</h2>
      </header>
      <div className="body">
        <p>{invalid ? "invalid" : "ok"}</p>
        <p>steps: {counter}</p>
        <Board
          EnterBoard={EnterBoard}
          play={play}
          board={mergeBoard(lastStep, input)}
        />
        <div
          id="start"
          onClick={() => {
            if (!validInput(input)) {
              setInvalid(true);
              return;
            }
            setInvalid(false);
            setPlay(true);
            setDone(false);
          }}
        >
          Start
        </div>
        <div id="start" onClick={() => setPlay(false)}>
          Pause
        </div>
      </div>
      <footer>
        <h2>Made by Daniel Huang</h2>
      </footer>
    </div>
  );
};

export default App;
