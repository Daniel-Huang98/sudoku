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

  return <div className="Board">{board}</div>;
};

export default Board;
