import React from "react";
import Weather from "../APIs/Weather";
import Clock from "../APIs/Clock";
import { Link } from "react-router-dom";

const Oddments = () => {
  return (
    <div className="Oddments">
      <h1>Today's Weather</h1>
      <Weather />
      <Clock />
      <button className="create_button">
        <Link to="/create">Create Post</Link>
      </button>
    </div>
  );
};

export default Oddments;
