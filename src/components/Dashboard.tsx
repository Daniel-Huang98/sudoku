import React from "react";
import ButtonInput from "./Button";

interface IDashboard {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

const Dashboard: React.FC<IDashboard> = ({ start, stop, reset }) => {
  return (
    <div id="Dashboard">
      <ButtonInput onClick={start} label={"Start"} />
      <ButtonInput onClick={stop} label={"Stop"} />
      <ButtonInput onClick={reset} label={"Reset"} />
    </div>
  );
};

export default Dashboard;
