import React from "react";
import { Link } from "react-router-dom";
import store from "../store/index";

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
        <button
          onClick={() => {
            store.dispatch({ type: "LogOut", status: 0 });
          }}
          type="submit"
        >
          {" "}
          LogOut
        </button>
      </form>
    </>
  );
};

export { Logouted, Logined };
