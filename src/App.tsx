import React, { useEffect } from "react";
import Board from "./components/Board";
import "./css/App.css";
import { clearBoard, selectBoard, boardArray } from "./Constants";

import { validInput, IGuess, Icount, newBoard, guessPrune } from "./helpers";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [play, setPlay] = React.useState(false);
  const [input, setInput] = React.useState({
    board: clearBoard,
    guess: new Array<IGuess>(),
    popped: false
  });
  const [invalid, setInvalid] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [val, setVal] = React.useState(0);

  const reset = () => {
    setInput({
      board: newBoard(boardArray[val]),
      guess: new Array<IGuess>(),
      popped: false
    });
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

  const loadBoard = (board: number[][], done: boolean, count: Icount) => {
    setInput({ guess: [], popped: false, board });
    setDone(done);
    setPlay(false);
    setCount(count.count);
  };

  const counter = { count: 0, state: [] };

  useEffect(() => {
    if (play) {
      if (!done) {
        guessPrune(input.board, loadBoard, counter);
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
    const ind = event.target.value;

    setInput({
      board: newBoard(boardArray[ind]),
      guess: new Array<IGuess>(),
      popped: false
    });
    setVal(ind);
  };

  const boards = selectBoard.map(val => (
    <option value={val.board}>{val.label}</option>
  ));

  return (
    <div className="App">
      <header>
        <h1>Sudoku Solver</h1>
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
        <h2>{count}</h2>
        <Board EnterBoard={EnterBoard} play={play} board={input.board} />
        <select disabled={play} onChange={LoadBoard}>
          {boards}
        </select>
        <Dashboard start={start} reset={reset} />
      </div>
      <footer>
        <h2>Made by Daniel Huang</h2>
      </footer>
    </div>
  );
};

export default App;
