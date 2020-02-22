import React from "react";
import ButtonInput from "./Button";

interface IDashboard {
  start: () => void;
  reset: () => void;
}

const Dashboard: React.FC<IDashboard> = ({ start, reset }) => {
  return (
    <div id="Dashboard">
      <ButtonInput onClick={start} label={"Start"} />
      <ButtonInput onClick={reset} label={"Reset"} />
    </div>
  );
};

export default Dashboard;
