import React from "react";
import LayOut from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <LayOut />
      </Router>
    </>
  );
}

export default App;
