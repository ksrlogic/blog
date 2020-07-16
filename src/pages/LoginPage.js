import React from "react";

const LoginPage = () => {
  return (
    <div className="LoginWrapper">
      <h1 className="LoginTitle">Account Login</h1>
      <form>
        <input placeholder="Email" className="input_for_login"></input>
        <input placeholder="Password" className="input_for_login"></input>
        <button className="LoginBtn">Login</button>
      </form>
      <div className="mt-15">
        <p>Forgot Username / Password?</p>
        <p>Create an account? Sign up</p>
      </div>
    </div>
  );
};

export default LoginPage;
