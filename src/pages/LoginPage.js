import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginWrapper">
      <h1 className="LoginTitle">Account Login</h1>
      <form action="/auth/login" method="POST">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input_for_login"
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input_for_login"
        ></input>
        <button className="LoginBtn">Login</button>
      </form>
      <div className="mt-15">
        <p>Forgot Username / Password?</p>
        <Link to="/register" style={{ color: " black" }}>
          <p>Create an account? Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
