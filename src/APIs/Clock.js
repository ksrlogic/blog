import React from "react";
import Clock from "react-live-clock";
const ClockContainer = () => {
  return (
    <div>
      <Clock format={"HH:mm:ss"} ticking={true} />
    </div>
  );
};

export default ClockContainer;
