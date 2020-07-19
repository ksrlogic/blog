import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="mobile-title">
        <Link to="/">KSR Blog</Link>
      </h1>
    </div>
  );
};

export default NavBar;
