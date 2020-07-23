import React, { useEffect, useState } from "react";
import Weather from "../APIs/Weather";
import Clock from "../APIs/Clock";
import { Link } from "react-router-dom";
import { Logined, Logouted } from "./LoginStatus";
import store from "../store/index";

const Oddments = () => {
  const [loginStatus, setLoginStatus] = useState();

  const [username, setUsername] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("/auth/login");
      const Data = await getData.json();

      if (Data.passport) {
        store.dispatch({
          type: "IS_LOGINED",
          email: JSON.stringify(Data.passport.user),
        });

        setLoginStatus(JSON.stringify(Data.passport.user));
        setUsername(JSON.stringify(Data.passport.user));
      }
    };
    fetchData();
  }, [loginStatus, username]);

  return (
    <div className="Oddments">
      {store.getState().status ? <Logined username={username} /> : <Logouted />}

      <h1 style={{ marginTop: "30px" }}>Today's Weather</h1>
      <Weather />
      <Clock />
      <button className="create_button">
        <Link to="/create">Create Post</Link>
      </button>
      {store.status}
    </div>
  );
};

export default Oddments;
