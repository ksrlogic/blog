import React from "react";
import Weather from "../APIs/Weather";
import Clock from "../APIs/Clock";
import { Link } from "react-router-dom";

const Oddments = () => {
  return (
    <div className="Oddments">
      <Link to="/login" className="Loginbtn">
        Login
      </Link>
      <h1 style={{ marginTop: "30px" }}>Today's Weather</h1>
      <Weather />
      <Clock />
      <button className="create_button">
        <Link to="/create">Create Post</Link>
      </button>
    </div>
  );
};

export default Oddments;
