import React from "react";
import "../css/NumberInput.css";

interface INumberInput {
  x: number;
  y: number;
  input?: number;
  EnterBoard(event: any): void;
  play: boolean;
}

const NumberInput: React.FC<INumberInput> = props => {
  return (
    <input
      type="number"
      className="NumberInput"
      maxLength={1}
      style={{
        gridColumnStart: props.x,
        gridColumnEnd: props.x + 1,
        gridRowStart: props.y,
        gridRowEnd: props.y + 1
      }}
      id={`${props.x} ${props.y}`}
      onChange={props.EnterBoard}
      readOnly={props.play}
    />
  );
};

export default NumberInput;
