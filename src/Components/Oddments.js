import React from "react";
import Weather from "../APIs/Weather";
import Clock from "../APIs/Clock";

const Oddments = () => {
  return (
    <div className="Oddments">
      <h1>Today's Weather</h1>
      <Weather />
      <Clock />
    </div>
  );
};

export default Oddments;
