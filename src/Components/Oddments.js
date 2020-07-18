import React, { useEffect, useState } from "react";
import Weather from "../APIs/Weather";
import Clock from "../APIs/Clock";
import { Link } from "react-router-dom";
import { Logined, Logouted } from "./LoginStatus";

const Oddments = () => {
  const [loginStatus, setLoginStatus] = useState();

  const [username, setUsername] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("/auth/login");
      const Data = await getData.json();
      setLoginStatus(JSON.stringify(Data.passport.user));
      setUsername(JSON.stringify(Data.passport.user));
    };
    fetchData();
  }, [loginStatus, username]);

  return (
    <div className="Oddments">
      {loginStatus ? <Logined username={username} /> : <Logouted />}

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
