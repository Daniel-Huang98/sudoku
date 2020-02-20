import React from "react";
import "../css/Board.css";
import NumberInput from "./NumberInput";

interface IBoard {
  EnterBoard(event: any): void;
  play: boolean;
  board: Array<Array<number>>;
}

const Board: React.FC<IBoard> = props => {
  var board = [];
  for (var y = 1; y <= 9; y++) {
    var row = [];
    for (var x = 1; x <= 9; x++) {
      row.push(
        <NumberInput
          x={x}
          y={y}
          EnterBoard={props.EnterBoard}
          play={props.play}
          input={props.board[y - 1][x - 1]}
        />
      );
    }
    board.push(row);
  }

  var grid = [];
  for (var y1 = 0; y1 < 3; y1++) {
    for (var x1 = 0; x1 < 3; x1++) {
      grid.push(
        <div
          className="grid"
          style={{
            gridColumnStart: 1 + 3 * x1,
            gridColumnEnd: 1 + 3 * x1 + 3,
            gridRowStart: 1 + 3 * y1,
            gridRowEnd: 1 + 3 * y1 + 3
          }}
        ></div>
      );
    }
  }

  return (
    <div className="Board">
      {board}
      {grid}
    </div>
  );
};

export default Board;
