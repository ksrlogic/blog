import React, { useState, useEffect, version } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vfpassword, setVfPassword] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (password === "" && vfpassword === "") {
      setStatus("");
    }
    if (password.includes(" ") || vfpassword.includes(" ")) {
      setStatus(
        "비밀번호에 공백문자는 넣을 수 없습니다.  Don't input spaces in your password."
      );
    }
  }, [password, vfpassword]);

  const vfPassFuc = (e) => {
    const value = e.target.value;
    setVfPassword(value);
    if (value === password) {
      setStatus("Correct!");
    } else {
      setStatus("Not Correct");
    }
  };
  function hasNumbers(t) {
    var regex = /\d/g;
    return regex.test(t);
  }
  const validate = (e) => {
    if (password === "" || vfpassword === "" || email === "") {
      alert("안 채워진 곳이 존재합니다! Something's Empty!");
      e.preventDefault();
    } else if (password != vfpassword) {
      alert("비밀번호가 일치하지 않습니다. Incorrect Password.");
      e.preventDefault();
    } else if (password.includes(" ") || vfpassword.includes(" ")) {
      alert(
        "비밀번호에 공백문자는 포함할 수 없습니다. Don't input spaces in your password. "
      );
      e.preventDefault();
    } else if (password.length < 8) {
      alert("비밀번호가 너무 짧습니다. Password too short ");
      e.preventDefault();
    } else if (!hasNumbers(password)) {
      alert(
        "비밀번호에 숫자를 포합해주세요. Include less 1 digit in your password"
      );
      e.preventDefault();
    } else {
      return true;
    }
  };

  const passFunc = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === vfpassword) {
      setStatus("Correct!");
    } else {
      setStatus("Not Correct");
    }
  };
  return (
    <div className="LoginWrapper">
      <h1 className="LoginTitle">Account Register</h1>
      <form action="/auth/register" method="POST" onSubmit={validate}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input_for_login"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          maxLength={40}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input_for_login"
          value={password}
          maxLength={20}
          onChange={passFunc}
        ></input>
        <input
          name="verifyPassword"
          type="password"
          placeholder="Verify Password "
          className="input_for_login"
          value={vfpassword}
          maxLength={20}
          onChange={vfPassFuc}
        ></input>
        <p lassName="mt-15" style={{ color: "red" }}>
          {status}
        </p>
        <p className="mt-15">
          비밀번호는 8글자 이상이여야 하며, 숫자를 포함해야 합니다. Your
          password should have more than 8 characters and also include digits.
        </p>

        <button type="submit" className="LoginBtn">
          Register
        </button>
      </form>
      <div className="mt-15"></div>
    </div>
  );
};

export default RegisterPage;
