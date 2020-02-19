import React, { useEffect } from "react";
import Board from "./components/Board";
import "./css/App.css";
import { clearBoard } from "./Constants";
import { validInput, guess, IGuess, IState, noZeros } from "./helpers";

const App = () => {
  const [play, setPlay] = React.useState(false);
  const [input, setInput] = React.useState({
    board: clearBoard,
    guess: new Array<IGuess>(),
    popped: false
  });
  const [invalid, setInvalid] = React.useState(false);
  const [done, setDone] = React.useState(false);

  //console.log(input.board);

  const update = (input: IState) => {
    if (noZeros(input.board) && validInput(input.board)) {
      setDone(true);
      setPlay(false);
      //console.log("done");
    }

    setInput(input);
  };

  useEffect(() => {
    setTimeout(() => {
      if (play && !done) {
        guess(input, update);
      }
    }, 1);
  });

  const EnterBoard = (event: any) => {
    const pos = event.target.id.split(" ");
    var inputCopy = input.board;
    inputCopy[Number(pos[1]) - 1][Number(pos[0]) - 1] = Number(
      event.target.value
    );
    setInput({ board: inputCopy, guess: input.guess, popped: false });
  };

  return (
    <div className="App">
      <header>
        <h1>Sudoku Solver </h1>
        <h2>{done ? "done" : play ? "Solving" : "Paused"}</h2>
      </header>
      <div className="body">
        <p>{invalid ? "invalid" : "ok"}</p>
        <Board EnterBoard={EnterBoard} play={play} board={input.board} />
        <div
          id="start"
          onClick={() => {
            if (!validInput(input.board)) {
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
        <div
          id="start"
          onClick={() => {
            setPlay(false);
            setInput({
              board: clearBoard,
              guess: new Array<IGuess>(),
              popped: false
            });
          }}
        >
          Reset
        </div>
      </div>
      <footer>
        <h2>Made by Daniel Huang</h2>
      </footer>
    </div>
  );
};

export default App;
