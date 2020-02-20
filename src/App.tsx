import React, { useEffect } from "react";
import Board from "./components/Board";
import "./css/App.css";
import { clearBoard } from "./Constants";

import {
  validInput,
  guess,
  IGuess,
  IState,
  noZeros,
  newBoard
} from "./helpers";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [play, setPlay] = React.useState(false);
  const [input, setInput] = React.useState({
    board: newBoard(clearBoard),
    guess: new Array<IGuess>(),
    popped: false
  });
  const [invalid, setInvalid] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const update = (input: IState) => {
    if (noZeros(input.board) && validInput(input.board)) {
      setDone(true);
      setPlay(false);
    }

    setInput(input);
  };

  const reset = () => {
    window.location.reload();
  };

  const start = () => {
    if (!validInput(input.board)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setPlay(true);
    setDone(false);
  };

  const stop = () => setPlay(false);

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
        <h1>Sudoku Solver Visualiser</h1>
        <h2>
          {invalid
            ? "Invalid Input"
            : done
            ? "Done"
            : play
            ? "Solving"
            : "Stopped"}
        </h2>
      </header>
      <div className="body">
        <Board EnterBoard={EnterBoard} play={play} board={input.board} />
        <Dashboard start={start} stop={stop} reset={reset} />
      </div>
      <footer>
        <h2>Made by Daniel Huang</h2>
      </footer>
    </div>
  );
};

export default App;
