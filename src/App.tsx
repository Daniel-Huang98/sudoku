import React, { useEffect } from "react";
import Board from "./components/Board";
import "./css/App.css";
import { clearBoard, selectBoard, boardArray } from "./Constants";

import {
  validInput,
  guessNaive,
  IGuess,
  IState,
  noZeros,
  newBoard,
  guessPrune
} from "./helpers";
import Dashboard from "./components/Dashboard";
import { findAllByDisplayValue } from "@testing-library/react";

const App = () => {
  const [play, setPlay] = React.useState(false);
  const [input, setInput] = React.useState({
    board: clearBoard,
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
    if (play) {
      //setTimeout(() => {
      //if (play && !done) {
      //guessNaive(input, update);
      // }
      //}, 1);
      if (!done) {
        guessPrune(input.board, (board: number[][], done: boolean) => {
          setInput({ guess: [], popped: false, board });
          setDone(done);
        });
      }
    }
  });

  const EnterBoard = (event: any) => {
    const pos = event.target.id.split(" ");
    var inputCopy = input.board;
    inputCopy[Number(pos[1]) - 1][Number(pos[0]) - 1] = Number(
      event.target.value
    );
    setInput({ board: inputCopy, guess: input.guess, popped: false });
  };

  const LoadBoard = (event: any) => {
    const val = event.target.value;
    setInput({
      board: newBoard(boardArray[val]),
      guess: new Array<IGuess>(),
      popped: false
    });
  };

  const boards = selectBoard.map(val => (
    <option value={val.board}>{val.label}</option>
  ));

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
        <select disabled={play} onChange={LoadBoard}>
          {boards}
        </select>
        <Dashboard start={start} stop={stop} reset={reset} />
      </div>
      <footer>
        <h2>Made by Daniel Huang</h2>
      </footer>
    </div>
  );
};

export default App;
