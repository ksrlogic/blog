import React from "react";
import { Link } from "react-router-dom";

const Logouted = () => {
  return (
    <>
      <Link to="/login" className="Loginbtn">
        Login
      </Link>
      <Link to="/register" className="Loginbtn" style={{ paddingLeft: "20px" }}>
        register
      </Link>
    </>
  );
};

const Logined = ({ username }) => {
  return (
    <>
      <p>Welcome {username}</p>
      <form method="POST" action="/auth/logout">
        <button type="submit"> LogOut</button>
      </form>
    </>
  );
};

export { Logouted, Logined };
