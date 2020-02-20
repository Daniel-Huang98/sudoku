import React from "react";

interface IButtonInput {
  label: string;
  onClick: () => void;
}

const ButtonInput: React.FC<IButtonInput> = props => {
  return (
    <button id="start" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default ButtonInput;
