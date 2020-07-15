import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <header>
        <Link to="/">
          <h1 style={{ fontSize: "1.5rem" }}>KSR Blog</h1>
        </Link>
        <img
          className="profile"
          src={"http://localhost/Profile.PNG"}
          alt="Profile"
        ></img>
        <div className="my-info">
          <h1 style={{ fontSize: "1.3rem" }}>Kim Seung Rae</h1>
          <p>Full Stack Developer</p>
          <p>JS</p>
          <p>React NodeJS</p>
          <p>JS Newbie</p>
        </div>
        <ul>
          <li>
            <a href={"https://blog.naver.com"}>
              <i className="fa fa-a"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/ksrlogic">
              <i className="fa fa-github" style={{ fontSize: "40px" }}></i>
            </a>
          </li>
        </ul>
        <p>Email: ksrlogic@naver.com</p>
      </header>
    </>
  );
};

export default SideBar;
